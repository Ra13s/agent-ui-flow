#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

function usage() {
  console.log(`Usage:
node scripts/batch-image-edits.mjs path\\to\\batch.json [--concurrency 3] [--dry-run]

Batch file:
{
  "defaults": {
    "images": ["seed.png"],
    "outDir": "docs/demos/example/02-image-round-1/variants",
    "model": "gpt-image-2",
    "size": "1536x1024",
    "quality": "medium",
    "envFile": ".env.local"
  },
  "jobs": [
    {
      "name": "round-1-focused",
      "promptFile": "docs/demos/example/02-image-round-1/prompt-focused.md",
      "n": 1
    }
  ]
}
`);
}

function parseArgs(argv) {
  const args = { concurrency: 3, dryRun: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = () => {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) throw new Error(`Missing value for ${token}`);
      i += 1;
      return value;
    };

    if (token === "--help" || token === "-h") {
      usage();
      process.exit(0);
    } else if (token === "--concurrency") {
      args.concurrency = Number.parseInt(next(), 10);
    } else if (token === "--dry-run") {
      args.dryRun = true;
    } else if (!args.batchFile) {
      args.batchFile = token;
    } else {
      throw new Error(`Unknown argument: ${token}`);
    }
  }
  if (!args.batchFile) throw new Error("Provide a batch JSON file.");
  if (!Number.isInteger(args.concurrency) || args.concurrency < 1 || args.concurrency > 8) {
    throw new Error("--concurrency must be an integer from 1 to 8.");
  }
  return args;
}

function toArray(value) {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function resolveFrom(baseDir, maybePath) {
  if (!maybePath) return maybePath;
  return path.isAbsolute(maybePath) ? maybePath : path.normalize(path.join(baseDir, maybePath));
}

function readBatch(batchFile) {
  const absolute = path.resolve(batchFile);
  const baseDir = path.dirname(absolute);
  const raw = JSON.parse(fs.readFileSync(absolute, "utf8"));
  if (!Array.isArray(raw.jobs) || raw.jobs.length === 0) {
    throw new Error("Batch file must contain a non-empty jobs array.");
  }
  const defaults = raw.defaults || {};
  return raw.jobs.map((job, index) => {
    const merged = { ...defaults, ...job };
    const images = toArray(merged.images).map((image) => resolveFrom(baseDir, image));
    if (images.length === 0) throw new Error(`Job ${index + 1} is missing images.`);
    if (!merged.promptFile && !merged.prompt) throw new Error(`Job ${index + 1} is missing promptFile or prompt.`);
    if (!merged.name) throw new Error(`Job ${index + 1} is missing name.`);

    return {
      ...merged,
      images,
      promptFile: resolveFrom(baseDir, merged.promptFile),
      outDir: resolveFrom(baseDir, merged.outDir || path.join("docs", "demos", "image-edits")),
      envFile: resolveFrom(baseDir, merged.envFile || ".env.local"),
      n: merged.n || 1,
    };
  });
}

function commandFor(job, dryRun) {
  const args = [".skills/seeded-image-variants/scripts/openai-image-edit.mjs"];
  for (const image of job.images) args.push("--image", image);
  if (job.promptFile) args.push("--prompt-file", job.promptFile);
  if (job.prompt) args.push("--prompt", job.prompt);
  args.push("--out-dir", job.outDir);
  args.push("--name", job.name);
  args.push("--n", String(job.n));
  if (job.model) args.push("--model", job.model);
  if (job.size) args.push("--size", job.size);
  if (job.quality) args.push("--quality", job.quality);
  if (job.envFile) args.push("--env-file", job.envFile);
  if (dryRun) args.push("--dry-run");
  return args;
}

function runJob(job, dryRun) {
  return new Promise((resolve) => {
    const args = commandFor(job, dryRun);
    console.log(`\n[image batch] ${job.name}`);
    console.log(`node ${args.join(" ")}`);

    const child = spawn(process.execPath, args, {
      cwd: process.cwd(),
      stdio: "inherit",
      shell: false,
    });

    child.on("exit", (code) => {
      resolve({ job, code: code ?? 1 });
    });
  });
}

async function runQueue(jobs, concurrency, dryRun) {
  const results = [];
  let next = 0;

  async function worker() {
    while (next < jobs.length) {
      const job = jobs[next];
      next += 1;
      results.push(await runJob(job, dryRun));
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, worker));
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const jobs = readBatch(args.batchFile);
  const results = await runQueue(jobs, args.concurrency, args.dryRun);
  const failed = results.filter((result) => result.code !== 0);
  if (failed.length > 0) {
    console.error(`\n${failed.length} image job(s) failed.`);
    for (const result of failed) console.error(`- ${result.job.name}: exit ${result.code}`);
    process.exit(1);
  }
  console.log(`\nCompleted ${results.length} image job(s).`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
