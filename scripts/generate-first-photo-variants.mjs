import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const envPaths = [path.join(root, ".env.local"), path.join(root, ".env")];
const seedPath = path.join(root, "docs/demos/first-photo-tutorial/09-built-screenshots/b5.png");
const outDir = path.join(root, "docs/demos/first-photo-tutorial/05-image-variants");

function readEnvValue(filePath, key) {
  if (!fs.existsSync(filePath)) return "";
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const line = lines.find((entry) => entry.startsWith(`${key}=`));
  return line ? line.slice(key.length + 1).trim() : "";
}

function findEnvValue(key) {
  if (process.env[key]) return process.env[key];
  for (const envPath of envPaths) {
    const value = readEnvValue(envPath, key);
    if (value) return value;
  }
  return "";
}

const apiKey = findEnvValue("OPENAI_API_KEY");
if (!apiKey) {
  throw new Error("OPENAI_API_KEY is missing. Set it in the environment, .env.local, or .env.");
}

if (!fs.existsSync(seedPath)) {
  throw new Error("Missing B5 seed screenshot. Run `npm run capture:first-photo` first.");
}

const shared = `Use the attached B5 payoff screenshot as the seed. Create a high-fidelity mobile UI concept for the same photo-coaching tutorial payoff screen. Preserve the product logic: a camera-first tutorial, same subject, before/after comparison, and one CTA: "Shoot your next one". Do not add account setup, fake progress, social sharing, analytics, badges, mascots, dashboards, or extra product sections.`;

const variants = [
  {
    name: "iter-01-a-conservative.png",
    prompt: `${shared}\n\nVariant: conservative. Make it calmer, cleaner, and more production-ready while staying very close to the seed. Improve spacing, hierarchy, and tactile polish. Near-white surfaces, soft black text, one restrained accent color.`,
  },
  {
    name: "iter-01-b-polished-production.png",
    prompt: `${shared}\n\nVariant: polished production. Keep the phone payoff screen, but make the before/after comparison feel more deliberate and satisfying. Add subtle camera-app polish, better image framing, and a stronger CTA area without adding any new modules.`,
  },
  {
    name: "iter-01-c-wild-plausible.png",
    prompt: `${shared}\n\nVariant: wild but plausible. Explore a more cinematic payoff screen with expressive motion-ready composition and richer visual rhythm, but keep the UI low-clutter and keep the exact learning logic. No gamified clutter.`,
  },
];

fs.mkdirSync(outDir, { recursive: true });
const seedBuffer = fs.readFileSync(seedPath);

for (const variant of variants) {
  const form = new FormData();
  form.append("model", "gpt-image-1");
  form.append("image", new Blob([seedBuffer], { type: "image/png" }), "b5.png");
  form.append("prompt", variant.prompt);
  form.append("size", "1024x1536");
  form.append("quality", "low");
  form.append("output_format", "png");

  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });

  if (!response.ok) {
    const body = (await response.text()).slice(0, 500);
    const requestId = response.headers.get("x-request-id") || "unavailable";
    throw new Error(
      `Image edit failed for ${variant.name}: status ${response.status}, request ${requestId}, body ${body}`,
    );
  }

  const json = await response.json();
  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) {
    throw new Error(`Image edit returned no b64_json for ${variant.name}`);
  }

  fs.writeFileSync(path.join(outDir, variant.name), Buffer.from(b64, "base64"));
}
