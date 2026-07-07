#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const demoName = process.argv[2];

if (!demoName) {
  console.error("Usage: node scripts/check-demo-contract.mjs <demo-name>");
  process.exit(1);
}

const root = path.join("docs", "demos", demoName);
const errors = [];

function requireFile(relativePath) {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    errors.push(`missing file: ${relativePath}`);
  }
}

function requireImage(relativePath) {
  requireFile(relativePath);
  if (!/\.(png|jpg|jpeg|webp)$/i.test(relativePath)) {
    errors.push(`not an image path: ${relativePath}`);
  }
}

function requireVariants(relativeDir, min = 3) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    errors.push(`missing variants dir: ${relativeDir}`);
    return;
  }
  const images = fs.readdirSync(dir).filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file));
  if (images.length < min) errors.push(`${relativeDir}: expected at least ${min} images, found ${images.length}`);
}

[
  "README.md",
  "run-log.md",
  "image-ledger.md",
  "00-brief.md",
  "01-initial/review.md",
  "02-image-round-1/prompt.md",
  "02-image-round-1/review.md",
  "02-image-round-1/decision.md",
  "03-image-round-2/prompt.md",
  "03-image-round-2/review.md",
  "03-image-round-2/comparison.md",
  "03-image-round-2/decision.md",
  "04-implementation-v1/instruction.md",
  "04-implementation-v1/review.md",
  "04-implementation-v1/changes.md",
  "04-implementation-v1/fidelity-review.md",
  "05-image-round-3-from-implementation/prompt.md",
  "05-image-round-3-from-implementation/review.md",
  "05-image-round-3-from-implementation/decision.md",
  "10-final/initial-vs-final.md",
  "10-final/remaining-issues.md",
].forEach(requireFile);

requireImage("01-initial/screenshot.png");
requireVariants("02-image-round-1/variants");
requireVariants("03-image-round-2/variants");
requireImage("04-implementation-v1/screenshot.png");
requireImage("05-image-round-3-from-implementation/source-screenshot.png");
requireVariants("05-image-round-3-from-implementation/variants");

for (let round = 1; round <= 4; round += 1) {
  const dir = `0${5 + round}-implementation-round-${round}`;
  requireImage(`${dir}/screenshot-before.png`);
  requireFile(`${dir}/review.md`);
  requireFile(`${dir}/comparison.md`);
  requireFile(`${dir}/changes.md`);
  requireImage(`${dir}/screenshot-after.png`);
}

requireImage("10-final/final-screenshot.png");

if (errors.length > 0) {
  console.error(`Demo contract failed for ${root}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Demo contract passed: ${root}`);

