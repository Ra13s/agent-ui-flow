#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const DEFAULT_ENV_FILE = ".env.local";

function usage() {
  console.log(`Usage:
node .skills\\seeded-image-variants\\scripts\\openai-image-edit.mjs --image seed.png --prompt-file prompt.txt --out-dir out --name variant

Options:
  --image <path>        Seed image. Repeat for multiple references.
  --prompt <text>       Inline prompt.
  --prompt-file <path>  Prompt text file.
  --out-dir <path>      Output folder. Default: docs/demos/image-edits
  --name <prefix>       Output filename prefix. Default: image-edit
  --n <count>           Number of variants. Default: 3
  --model <model>       Image model. Default: gpt-image-2
  --size <size>         Output size. Default: 1536x1024
  --quality <quality>   Output quality. Default: medium
  --env-file <path>     Env file for OPENAI_API_KEY. Default: ${DEFAULT_ENV_FILE}
  --dry-run             Validate inputs without calling the API.
`);
}

function parseArgs(argv) {
  const args = {
    images: [],
    outDir: path.join("docs", "demos", "image-edits"),
    name: "image-edit",
    n: 3,
    model: "gpt-image-2",
    size: "1536x1024",
    quality: "medium",
    envFile: DEFAULT_ENV_FILE,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = () => {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) throw new Error(`Missing value for ${token}`);
      i += 1;
      return value;
    };

    switch (token) {
      case "--image":
        args.images.push(next());
        break;
      case "--prompt":
        args.prompt = next();
        break;
      case "--prompt-file":
        args.promptFile = next();
        break;
      case "--out-dir":
        args.outDir = next();
        break;
      case "--name":
        args.name = next();
        break;
      case "--n":
        args.n = Number.parseInt(next(), 10);
        break;
      case "--model":
        args.model = next();
        break;
      case "--size":
        args.size = next();
        break;
      case "--quality":
        args.quality = next();
        break;
      case "--env-file":
        args.envFile = next();
        break;
      case "--dry-run":
        args.dryRun = true;
        break;
      case "--help":
      case "-h":
        usage();
        process.exit(0);
      default:
        throw new Error(`Unknown argument: ${token}`);
    }
  }

  return args;
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function readPrompt(args) {
  const parts = [];
  if (args.promptFile) {
    if (!fs.existsSync(args.promptFile)) throw new Error(`Prompt file not found: ${args.promptFile}`);
    parts.push(fs.readFileSync(args.promptFile, "utf8").trim());
  }
  if (args.prompt) parts.push(args.prompt.trim());
  const prompt = parts.filter(Boolean).join("\n\n");
  if (!prompt) throw new Error("Provide --prompt or --prompt-file.");
  return prompt;
}

function validateArgs(args, prompt) {
  if (!Number.isInteger(args.n) || args.n < 1 || args.n > 10) {
    throw new Error("--n must be an integer from 1 to 10.");
  }
  if (args.images.length < 1) throw new Error("Provide at least one --image.");
  for (const image of args.images) {
    if (!fs.existsSync(image)) throw new Error(`Image not found: ${image}`);
  }
  if (prompt.length > 8000) {
    throw new Error(`Prompt is ${prompt.length} characters; keep it under 8000.`);
  }
}

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "image/png";
}

async function appendImageFiles(form, imagePaths) {
  for (const imagePath of imagePaths) {
    const bytes = fs.readFileSync(imagePath);
    const blob = new Blob([bytes], { type: mimeType(imagePath) });
    // Match the OpenAI Images API multipart examples for one or more inputs.
    form.append("image[]", blob, path.basename(imagePath));
  }
}

function decodeImagePayload(item) {
  if (item.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item.url) {
    throw new Error("API returned a URL instead of b64_json; script currently expects b64_json.");
  }
  throw new Error("Image response item did not contain b64_json.");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  loadEnvFile(args.envFile);
  const prompt = readPrompt(args);
  validateArgs(args, prompt);

  console.log("Seeded image edit request");
  console.log(`  model: ${args.model}`);
  console.log(`  size: ${args.size}`);
  console.log(`  quality: ${args.quality}`);
  console.log(`  variants: ${args.n}`);
  console.log(`  images: ${args.images.length}`);
  console.log(`  output: ${args.outDir}`);

  if (args.dryRun) {
    console.log("Dry run only; no API call made.");
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(`OPENAI_API_KEY not found. Put it in ${args.envFile} or the process environment.`);
  }

  const form = new FormData();
  form.append("model", args.model);
  form.append("prompt", prompt);
  form.append("n", String(args.n));
  form.append("size", args.size);
  form.append("quality", args.quality);
  await appendImageFiles(form, args.images);

  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: form,
  });

  const text = await response.text();
  if (!response.ok) {
    let message = text;
    try {
      const parsed = JSON.parse(text);
      message = parsed.error?.message || text;
    } catch {
      // Keep raw response.
    }
    throw new Error(`OpenAI image edit failed (${response.status}): ${message}`);
  }

  const payload = JSON.parse(text);
  const data = Array.isArray(payload.data) ? payload.data : [];
  if (data.length === 0) throw new Error("OpenAI image edit returned no images.");

  fs.mkdirSync(args.outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const saved = [];
  data.forEach((item, index) => {
    const outputPath = path.join(args.outDir, `${args.name}-${stamp}-${String(index + 1).padStart(2, "0")}.png`);
    fs.writeFileSync(outputPath, decodeImagePayload(item));
    saved.push(outputPath);
  });

  console.log("Saved:");
  for (const file of saved) console.log(`  ${file}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
