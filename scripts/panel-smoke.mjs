/**
 * Phone smoke test for the live studio and RAD REVIEW Ultimate.
 * Run from the repo root: node scripts/panel-smoke.mjs
 * Fails if a view widens the page, panels overlap, or the page throws.
 */
import { chromium } from "playwright";

const BASE = process.env.STUDIO_URL || "https://teaching-studios.vercel.app";
const VIEWS = ["home", "radreview", "academy", "iqa", "caseqa", "radatlas"];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("pageerror", (err) => errors.push(String(err).slice(0, 180)));

await page.goto(`${BASE}/studio/NucMed-Board-Studio.html`, {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(800);

const viewReport = [];
for (const view of VIEWS) {
  await page.evaluate((view) => {
    document.querySelector(`#appTabs [data-view="${view}"]`)?.click();
  }, view);
  await page.waitForTimeout(view === "academy" || view === "radreview" ? 900 : 400);
  const fit = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
    hasStage: Boolean(document.getElementById("stage")?.innerText?.trim()),
  }));
  viewReport.push({
    view,
    fits: fit.scrollWidth <= fit.viewport + 4,
    hasStage: fit.hasStage,
  });
}

await page.goto(`${BASE}/rru/index.html`, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(4000);
const rru = await page.evaluate(() => {
  const panels = [...document.querySelectorAll("#rru-sidebar > section")].map((el) =>
    el.getBoundingClientRect(),
  );
  let overlap = 0;
  for (let i = 1; i < panels.length; i++) {
    if (panels[i].top < panels[i - 1].bottom - 6) overlap += 1;
  }
  return {
    overlap,
    fits: document.documentElement.scrollWidth <= window.innerWidth + 4,
    text: document.body.innerText.replace(/\s+/g, " ").slice(0, 80),
  };
});

await browser.close();
const failed = viewReport.filter((row) => !row.fits || !row.hasStage);
const report = { views: viewReport, rru, pageErrors: errors, failed: failed.length };
console.log(JSON.stringify(report, null, 2));
if (failed.length || rru.overlap || errors.length || !rru.fits) process.exit(1);
