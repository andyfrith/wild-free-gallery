import { chromium } from "playwright";

const port = process.env.PORT ?? "3000";
const BASE = `http://localhost:${port}`;
const OUT = new URL("./app-screenshots/", import.meta.url).pathname;

const pages = [
  { name: "home", path: "/" },
  { name: "story", path: "/story" },
  { name: "journey", path: "/journey" },
  { name: "artifacts", path: "/artifacts" },
  { name: "about", path: "/about" },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 1,
});

for (const page of pages) {
  const tab = await context.newPage();
  await tab.goto(`${BASE}${page.path}`, { waitUntil: "networkidle" });
  await tab.waitForTimeout(800);
  await tab.screenshot({
    path: `${OUT}/${page.name}.png`,
    fullPage: true,
  });
  await tab.close();
  console.log(`Captured ${page.name}`);
}

await browser.close();
