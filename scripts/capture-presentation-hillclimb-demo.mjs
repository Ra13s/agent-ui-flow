import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "docs/demos/presentation-hillclimb/build/index.html");
const demoDir = path.join(root, "docs/demos/presentation-hillclimb");

const targets = [
  ["initial", "01-initial/screenshot.png"],
  ["v1", "04-implementation-v1/screenshot.png"],
  ["v1", "06-implementation-round-1/screenshot-before.png"],
  ["round1", "06-implementation-round-1/screenshot-after.png"],
  ["round1", "07-implementation-round-2/screenshot-before.png"],
  ["round2", "07-implementation-round-2/screenshot-after.png"],
  ["round2", "08-implementation-round-3/screenshot-before.png"],
  ["round3", "08-implementation-round-3/screenshot-after.png"],
  ["round3", "09-implementation-round-4/screenshot-before.png"],
  ["final", "09-implementation-round-4/screenshot-after.png"],
  ["final", "10-final/final-screenshot.png"]
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 980 }, deviceScaleFactor: 1 });

for (const [state, relPath] of targets) {
  const outPath = path.join(demoDir, relPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await page.goto(`${pathToFileURL(htmlPath).href}?state=${state}`);
  await page.waitForSelector(".shell", { timeout: 5000 });
  await page.waitForTimeout(200);
  await page.screenshot({ path: outPath, fullPage: false });
}

await browser.close();
