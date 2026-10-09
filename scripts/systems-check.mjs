#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const BASE = "http://127.0.0.1:8080/studio/NucMed-Board-Studio.html";
const OUT = "/workspace/screenshots";
mkdirSync(OUT, { recursive: true });

const mismatches = [];
const log = [];
function note(s) {
  log.push(s);
  console.log(s);
}

function classify(finding, src, cap) {
  const f = (finding || "").toLowerCase();
  const h = `${src || ""} ${cap || ""}`.toLowerCase();
  const rules = [
    [/datscan|striatum|parkinson|ioflupane/, /nm-mag3|datscan|striatum|ioflupane|mri-brain/],
    [/thyroid|graves|iodine|i-123|i-131|parathyroid/, /thyroid|iodine|i123/],
    [/hida|gallbladder|cholecyst/, /hida/],
    [/psma|prostate/, /psma|pelvis|prostate|pmc/],
    [/pe study|filling defect|pulmonary embol/, /xr-chest|case-ct-2|chest-petct|mediastinum|embol|pulmonary|case-ct/],
    [/v\/?q|ventilation|perfusion/, /vq|ventilation/],
    [/intussuscept/, /peds-410|intussuscept|case-ct-1/],
    [/round pneumonia|croup|steeple/, /gi-398|peds-410|xr-chest|pneumonia/],
    [/small.?bowel|sbo|mesenteric|bowel/, /case-ct-1|abd-petct|fusion|bowel|abdomen/],
    [/wilms|kidney|renal|dmsa|mag3|hydroneph/, /case-ct-1|abd-petct|fusion|kidney|renal|abdomen/],
    [/ipmn|pancrea/, /case-ct-1|pancrea|abdomen/],
    [/hepatic|liver|spleen/, /case-ct-1|hida|abd-petct|fusion|liver/],
    [/breast|mammo|gynecomastia|calcification/, /breast-calcs|mammo|calcif/],
    [/knee|menisc|patella|popliteal/, /case-mr|knee/],
    [/ankle|talus|calcaneus|toe|mtp|forefoot/, /distal_limb|bone-scan/],
    [/brain|subdural|meningioma|cerebral|vertex|skull/, /mri-brain|brain-petct|vertex|brain/],
    [/cardiac|sestamibi|myocard|pyp|muga/, /cardiac/],
    [/lung|pulmonary|chest|hilar|deauville/, /xr-chest|case-ct-2|chest-petct|mediastinum|vq/],
  ];
  for (const [findRe, srcRe] of rules) {
    if (findRe.test(f)) return srcRe.test(h) ? "ok" : "mismatch";
  }
  return "ok";
}

async function waitStudio(page) {
  await page.waitForSelector("#appTabs, .nav-item, [data-view]", { timeout: 20000 });
}

async function clickTab(page, view) {
  const btn = page.locator(`[data-view="${view}"]`).first();
  await btn.click({ timeout: 8000 });
  await page.waitForTimeout(600);
}

async function sampleRadReview(page) {
  await clickTab(page, "radreview");
  await page.waitForTimeout(2500);
  const root = page.locator(".rr-root, #radRoot").first();
  await root.waitFor({ timeout: 20000 });
  await page.screenshot({ path: `${OUT}/sys2-01-radreview.png`, fullPage: false });
  const rows = page.locator(".rr-row");
  await rows.first().waitFor({ timeout: 15000 });
  const n = Math.min(await rows.count(), 8);
  const samples = [];
  for (let i = 0; i < n; i++) {
    await rows.nth(i).click();
    await page.waitForTimeout(500);
    const finding = await page.locator(".rr-casehead h3").innerText().catch(() => "");
    const src = await page.locator("#caseMain").getAttribute("src").catch(() => "");
    const cap = await page.locator("#caseCap").innerText().catch(() => "");
    const acc = await page.locator(".rr-casehead b").innerText().catch(() => "");
    const verdict = classify(finding, src, cap);
    const row = { widget: "radreview", i, acc, finding, src, cap: cap.slice(0, 160), verdict };
    samples.push(row);
    if (verdict === "mismatch") mismatches.push(row);
    note(`RR[${i}] ${verdict} · ${finding} · ${src}`);
  }
  // search SBO / thyroid / DaTscan
  const searches = ["small bowel", "thyroid Graves", "DaTscan", "PSMA", "meniscal", "HIDA", "V/Q", "calcaneus", "MAG3"];
  for (const q of searches) {
    const input = page.locator("#rrSearch");
    await input.fill(q);
    await page.waitForTimeout(500);
    const first = page.locator(".rr-row").first();
    if (await first.count()) {
      await first.click();
      await page.waitForTimeout(500);
      const finding = await page.locator(".rr-casehead h3").innerText().catch(() => "");
      const src = await page.locator("#caseMain").getAttribute("src").catch(() => "");
      const cap = await page.locator("#caseCap").innerText().catch(() => "");
      const verdict = classify(finding, src, cap);
      const row = { widget: "radreview-search", q, finding, src, cap: cap.slice(0, 160), verdict };
      samples.push(row);
      if (verdict === "mismatch") mismatches.push(row);
      note(`RR search "${q}" ${verdict} · ${finding} · ${src}`);
    }
  }
  await page.screenshot({ path: `${OUT}/sys2-02-radreview-search.png` });
  return samples;
}

async function sampleAcademy(page) {
  await clickTab(page, "academy");
  await page.waitForTimeout(2500);
  await page.locator(".nba-root, #nbaRoot").first().waitFor({ timeout: 20000 });
  await page.screenshot({ path: `${OUT}/sys2-03-academy.png` });
  const rows = page.locator(".rr-row");
  await rows.first().waitFor({ timeout: 15000 });
  const samples = [];
  const n = Math.min(await rows.count(), 6);
  for (let i = 0; i < n; i++) {
    await rows.nth(i).click();
    await page.waitForTimeout(400);
    const finding = await page.locator(".rr-row.on span").innerText().catch(() => "");
    const src = await page.locator("#caseMain").getAttribute("src").catch(() => "");
    const cap = await page.locator("#caseCap").innerText().catch(() => "");
    const verdict = classify(finding, src, cap);
    const row = { widget: "academy", i, finding, src, cap: cap.slice(0, 160), verdict };
    samples.push(row);
    if (verdict === "mismatch") mismatches.push(row);
    note(`AC[${i}] ${verdict} · ${finding} · ${src}`);
  }
  const acSearches = ["DaTscan", "meniscal", "PSMA", "HIDA"];
  for (const q of acSearches) {
    const input = page.locator("#nbaSearch");
    if (await input.count()) {
      await input.fill(q);
      await page.waitForTimeout(500);
      const first = page.locator(".rr-row").first();
      if (await first.count()) {
        await first.click();
        await page.waitForTimeout(400);
        const finding = await page.locator(".rr-row.on span").innerText().catch(() => "");
        const src = await page.locator("#caseMain").getAttribute("src").catch(() => "");
        const cap = await page.locator("#caseCap").innerText().catch(() => "");
        const verdict = classify(finding, src, cap);
        const row = { widget: "academy-search", q, finding, src, cap: cap.slice(0, 160), verdict };
        samples.push(row);
        if (verdict === "mismatch") mismatches.push(row);
        note(`AC search "${q}" ${verdict} · ${finding} · ${src}`);
      }
    }
  }
  return samples;
}

async function sampleUltimate(page) {
  await clickTab(page, "rrultimate");
  await page.waitForTimeout(800);
  const frame = page.frameLocator("#rruFrame");
  await page.screenshot({ path: `${OUT}/sys2-04-ultimate-host.png` });
  // wait for indexing
  try {
    await frame.locator("text=Indexing").waitFor({ timeout: 4000 });
  } catch {}
  await frame.locator("text=Q-READY, text=PET/HYB, [class*='uppercase']").first().waitFor({ timeout: 25000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/sys2-05-ultimate.png` });
  const samples = [];
  const work = frame.locator("button").filter({ hasText: /RR-\d{4}-\d+/ });
  let count = await work.count();
  if (count < 2) {
    const alt = frame.locator("aside button, main button").filter({ hasText: /Q-READY|PENDING|READ/ });
    count = await alt.count();
    note(`RRU accession rows ${await work.count()} status-rows ${count}`);
  } else {
    note(`RRU accession rows ${count}`);
  }
  const rows = count >= 2 ? (await work.count() >= 2 ? work : frame.locator("aside button, main button").filter({ hasText: /Q-READY|PENDING|READ/ })) : frame.locator("main button, aside button");
  count = await rows.count();
  note(`RRU clickable ${count}`);
  if (count < 2) {
    const body = await frame.locator("body").innerText().catch(() => "");
    note("RRU body snippet: " + body.slice(0, 400));
  }
  const n = Math.min(count, 8);
  for (let i = 0; i < n; i++) {
    try {
      await rows.nth(i).click({ timeout: 2500 });
      await page.waitForTimeout(700);
      const btnText = await rows.nth(i).innerText().catch(() => "");
      const caseImg = frame.locator("img[data-rru-case='1']");
      let src = "";
      let alt = "";
      if (await caseImg.count()) {
        src = (await caseImg.first().getAttribute("src")) || "";
        alt = (await caseImg.first().getAttribute("alt")) || "";
      } else {
        src = await frame.locator("section img").evaluateAll((imgs) => {
          const vis = imgs.find((im) => im && getComputedStyle(im).opacity === "1" && im.src);
          return vis ? vis.src : "";
        }).catch(() => "");
      }
      const finding = btnText;
      const verdict = classify(finding, src, alt);
      const row = { widget: "rrultimate", i, finding, src, cap: alt.slice(0, 160), verdict };
      samples.push(row);
      if (verdict === "mismatch") mismatches.push(row);
      note(`RU[${i}] ${verdict} · ${(finding || "").slice(0, 80)} · ${src}`);
    } catch (e) {
      note(`RU[${i}] click failed ${e.message.split("\\n")[0]}`);
    }
  }
  // targeted searches inside Ultimate
  const box = frame.locator("input[type='search'], input[placeholder*='Search' i], input").first();
  for (const q of ["DaTscan", "meniscal", "PSMA", "ankle"]) {
    try {
      if (!(await box.count())) break;
      await box.fill(q);
      await page.waitForTimeout(500);
      const hit = frame.locator("button").filter({ hasText: new RegExp(q, "i") }).first();
      if (await hit.count()) {
        await hit.click({ timeout: 2000 });
        await page.waitForTimeout(600);
        const rowText = await hit.innerText().catch(() => q);
        const src = (await frame.locator("img[data-rru-case='1']").first().getAttribute("src").catch(() => "")) || "";
        const alt = (await frame.locator("img[data-rru-case='1']").first().getAttribute("alt").catch(() => "")) || "";
        const verdict = classify(rowText, src, alt);
        const row = { widget: "rrultimate-search", q, finding: rowText, src, verdict };
        samples.push(row);
        if (verdict === "mismatch") mismatches.push(row);
        note(`RU search "${q}" ${verdict} · ${(rowText || "").slice(0, 80)} · ${src}`);
      }
    } catch (e) {
      note(`RU search "${q}" failed ${e.message.split("\\n")[0]}`);
    }
  }
  return samples;
}

async function checkHomeAndWidgets(page) {
  await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 30000 });
  await waitStudio(page);
  await page.screenshot({ path: `${OUT}/sys2-00-home.png` });
  const title = await page.title();
  const modules = await page.locator(".mod, .module-card, [data-mod], article").count();
  note(`home title=${title} cards~=${modules}`);
  const views = ["radreview", "academy", "iqa", "caseqa", "radatlas", "rrultimate"];
  const present = {};
  for (const v of views) {
    present[v] = (await page.locator(`[data-view="${v}"]`).count()) > 0;
  }
  note("tabs " + JSON.stringify(present));
  return present;
}

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
page.setDefaultTimeout(20000);
const report = { ok: true, mismatches: [], samples: [], errors: [] };
try {
  const tabs = await checkHomeAndWidgets(page);
  report.tabs = tabs;
  report.samples.push(...(await sampleRadReview(page)));
  report.samples.push(...(await sampleAcademy(page)));
  report.samples.push(...(await sampleUltimate(page)));
  // protocol still opens
  await clickTab(page, "home");
  await page.waitForTimeout(400);
  const proto = page.locator("text=GP-STAR, text=VECTRA, text=SPARROW, text=Protocol").first();
  report.protocolVisible = (await proto.count()) > 0;
  await page.screenshot({ path: `${OUT}/sys2-06-home-after.png` });
  // open one protocol audiobook + one NM lesson
  try {
    const card = page.locator("a, button, .mod, article").filter({ hasText: /GP-STAR|VECTRA|SPARROW|P0 / }).first();
    if (await card.count()) {
      await card.click();
      await page.waitForTimeout(800);
      const lesson = await page.locator("h1, h2, .lesson-title").first().innerText().catch(() => "");
      note("protocol/lesson open: " + String(lesson).slice(0, 80));
      report.protocolOpen = lesson;
      await page.screenshot({ path: `${OUT}/sys2-07-protocol.png` });
    }
  } catch (e) {
    note("protocol open failed " + e.message);
  }
  for (const v of ["iqa", "caseqa", "radatlas"]) {
    try {
      await clickTab(page, v);
      await page.waitForTimeout(700);
      const ok = await page.locator("#stage").innerText();
      note(`${v} stage ${ok.slice(0, 80).replace(/\\s+/g, " ")}`);
      await page.screenshot({ path: `${OUT}/sys2-${v}.png` });
    } catch (e) {
      note(`${v} failed ${e.message}`);
      report.ok = false;
      report.errors.push(v + ": " + e.message);
    }
  }
} catch (e) {
  report.ok = false;
  report.errors.push(String(e && e.stack || e));
  note("FAIL " + e);
  await page.screenshot({ path: `${OUT}/sys2-err.png` }).catch(() => {});
}
report.mismatches = mismatches;
report.ok = report.ok && mismatches.length === 0 && report.errors.length === 0;
report.log = log;
writeFileSync(`${OUT}/sys2-report.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ok: report.ok, mismatches: mismatches.length, samples: report.samples.length, errors: report.errors }, null, 2));
await browser.close();
process.exit(report.ok ? 0 : 1);
