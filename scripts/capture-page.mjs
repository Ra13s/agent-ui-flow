#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const [, , input, output, widthArg, heightArg] = process.argv;

if (!input || !output) {
  console.error("Usage: node scripts/capture-page.mjs <input-html-or-url> <output-png>");
  process.exit(1);
}

const target = /^https?:\/\//i.test(input)
  ? input
  : pathToFileURL(path.resolve(input)).toString();

const width = Number.parseInt(widthArg || "1440", 10);
const height = Number.parseInt(heightArg || "1100", 10);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.goto(target, { waitUntil: "networkidle" });
await page.screenshot({ path: output, fullPage: true });
await browser.close();

console.log(`Captured ${output}`);
