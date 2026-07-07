#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const demoName = process.argv[2];

if (!demoName || !/^[a-z0-9][a-z0-9-]*$/.test(demoName)) {
  console.error("Usage: node scripts/create-demo-scaffold.mjs <demo-name>");
  console.error("Demo name must be lowercase kebab-case.");
  process.exit(1);
}

const root = path.join("docs", "demos", demoName);

if (fs.existsSync(root)) {
  console.error(`Demo already exists: ${root}`);
  process.exit(1);
}

const dirs = [
  "",
  "01-initial",
  "02-image-round-1/variants",
  "03-image-round-2/variants",
  "04-implementation-v1",
  "05-image-round-3-from-implementation/variants",
  "06-implementation-round-1",
  "07-implementation-round-2",
  "08-implementation-round-3",
  "09-implementation-round-4",
  "10-final",
];

for (const dir of dirs) fs.mkdirSync(path.join(root, dir), { recursive: true });

const files = {
  "README.md": `# ${title(demoName)}\n\nThis demo is not publishable until every stage in docs/demo-process.md is complete.\n`,
  "run-log.md": "# Run Log\n\nRecord every prompt, script command, review, decision, implementation change, screenshot, and comparison.\n",
  "image-ledger.md": "# Image Ledger\n\n| id | round | type | source image | prompt file | review file | verdict | notes |\n|---|---|---|---|---|---|---|---|\n",
  "00-brief.md": "# Brief\n\n## Screen\n\n## User task\n\n## Initial problem\n\n## Why this is worth hillclimbing\n",
  "01-initial/review.md": "# Initial Review\n",
  "02-image-round-1/prompt.md": "# Round 1 Prompt\n",
  "02-image-round-1/review.md": "# Round 1 Review\n",
  "02-image-round-1/decision.md": "# Round 1 Decision\n",
  "03-image-round-2/prompt.md": "# Round 2 Prompt\n",
  "03-image-round-2/review.md": "# Round 2 Review\n",
  "03-image-round-2/comparison.md": "# Round 2 Comparison\n",
  "03-image-round-2/decision.md": "# Round 2 Decision\n",
  "04-implementation-v1/instruction.md": "# Implementation Instruction\n",
  "04-implementation-v1/review.md": "# Implementation Review\n",
  "04-implementation-v1/changes.md": "# Implementation Changes\n",
  "04-implementation-v1/fidelity-review.md": "# Implementation Fidelity Review\n",
  "05-image-round-3-from-implementation/prompt.md": "# Implementation-Seeded Prompt\n",
  "05-image-round-3-from-implementation/review.md": "# Implementation-Seeded Review\n",
  "05-image-round-3-from-implementation/decision.md": "# Implementation-Seeded Decision\n",
  "10-final/initial-vs-final.md": "# Initial vs Final\n",
  "10-final/remaining-issues.md": "# Remaining Issues\n",
};

for (let round = 1; round <= 4; round += 1) {
  const dir = `0${5 + round}-implementation-round-${round}`;
  files[`${dir}/review.md`] = `# Implementation Round ${round} Review\n`;
  files[`${dir}/comparison.md`] = `# Implementation Round ${round} Comparison\n`;
  files[`${dir}/changes.md`] = `# Implementation Round ${round} Changes\n`;
}

for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(root, file), content);
}

console.log(`Created demo scaffold: ${root}`);

function title(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

