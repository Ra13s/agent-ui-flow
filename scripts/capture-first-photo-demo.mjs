import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "docs/demos/first-photo-tutorial/build/index.html");
const outDir = path.join(root, "docs/demos/first-photo-tutorial/09-built-screenshots");

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });

for (let beat = 1; beat <= 5; beat += 1) {
  const url = `${pathToFileURL(htmlPath).href}?beat=${beat}`;
  await page.goto(url);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `b${beat}.png`), fullPage: false });
}

await browser.close();
