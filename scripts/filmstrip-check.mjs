#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const BASE = "http://127.0.0.1:8080/studio/NucMed-Board-Studio.html?nocache=" + Date.now();
const OUT = "/workspace/screenshots";
mkdirSync(OUT, { recursive: true });

const PLACE = /skyline|downtown|city of|town of|village of|municipality|capital of|tourist|landmark|monument|cathedral|mosque|palace|castle|beach panorama|aerial view|street view|hospital exterior|hospital building|aircraft|boeing|airbus|airport|dubai|qatar|doha|kyoto|isuzu|skyscraper|wikivoyage|geograph|reading-room|scanner-room|waiting.room/i;
const NM = /pet|spect|scintig|fdg|psma|hida|mag3|dmsa|muga|pyp|datscan|ioflupane|bone.?scan|mdp|\bv\/?q\b|ventilation|perfusion|thyroid|radioiodine|i-?123|i-?131|sestamibi|gamma.?cam|renogram|dotatate|fapi|amyloid|protocol page|mip|suv|radioligand|ceretec|tc-99m/i;
const ROOM = /reading-room|scanner-room|waiting.room|spect-ct-empty|pet-scanner-room/i;

async function dumpFilm(page, label) {
  const cards = await page.evaluate(() => {
    const film = document.getElementById("atlasFilm");
    if (!film) return { visible: false, cards: [], html: "" };
    const cs = getComputedStyle(film);
    const buttons = [...film.querySelectorAll(".film-card")];
    return {
      visible: cs.display !== "none" && film.offsetHeight > 0,
      count: buttons.length,
      placeholder: film.innerText.slice(0, 180),
      q: (typeof sentenceQuery === "function" && currentModule && currentModule())
        ? sentenceQuery((currentModule().lessons[state.lesson] || {}).audio?.[0] || "")
        : "",
      cards: buttons.map((b, i) => {
        const img = b.querySelector("img");
        return {
          i,
          cap: (b.querySelector("span")?.textContent || "").trim(),
          src: img?.currentSrc || img?.src || "",
        };
      }),
    };
  });
  const flagged = [];
  for (const c of cards.cards || []) {
    const hay = `${c.cap} ${c.src}`;
    c.place = PLACE.test(hay);
    c.nm = NM.test(hay);
    c.room = ROOM.test(hay);
    c.cardiac = /cardio-393|cardio-394|cardiac-ac|nm-pyp/.test(hay);
    if (c.place && !c.nm) flagged.push({ reason: "place", ...c });
    else if (c.room) flagged.push({ reason: "room", ...c });
    else if (label.startsWith("P0-cover") && c.cardiac) flagged.push({ reason: "cardiac-on-cover", ...c });
    else if (!c.nm && !/protocol/i.test(hay)) flagged.push({ reason: "not-nm", ...c });
  }
  const liveN = (cards.cards || []).filter(c => /^LIVE/i.test(c.cap) || /wikipedia|wikimedia|upload\.wikimedia/i.test(c.src)).length;
  console.log(`\n=== ${label} === q=${cards.q}`);
  console.log(`visible=${cards.visible} count=${cards.count} live=${liveN} flagged=${flagged.length}`);
  (cards.cards || []).forEach(c => {
    const tag = c.place ? "PLACE" : c.room ? "ROOM" : c.cardiac ? "CARDIO" : c.nm ? "NM" : "???";
    console.log(`  [${tag}] ${c.cap} :: ${String(c.src).split("/").pop()}`);
  });
  return { label, ...cards, liveN, flagged };
}

(async () => {
  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  page.setDefaultTimeout(45000);
  const report = { ok: false, views: [] };

  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#startBtn, #appTabs", { timeout: 20000 });

  await page.click("#startBtn");
  await page.waitForSelector("#atlasFilm, #liveHero", { timeout: 15000 });
  await page.waitForTimeout(12000);
  const p0 = await dumpFilm(page, "P0-cover");
  await page.locator("#atlasFilm").screenshot({ path: `${OUT}/film-01-p0-strip.png` }).catch(() => {});
  await page.screenshot({ path: `${OUT}/film-01-p0.png` });
  report.views.push(p0);

  const next = page.locator("#nextL");
  if (await next.count()) {
    await next.click();
    await page.waitForTimeout(8000);
    const p1 = await dumpFilm(page, "P0-page2");
    await page.locator("#atlasFilm").screenshot({ path: `${OUT}/film-02-p0p2-strip.png` }).catch(() => {});
    report.views.push(p1);
  }

  const clicked = await page.evaluate(() => {
    const mods = (window.COURSE && COURSE.modules) || [];
    const m = mods.find(x => /oncolog|fdg/i.test(x.id + " " + x.title) && !/pre00|protocol/i.test(x.id));
    if (m && typeof openModule === "function") { openModule(m.id); return m.id + " " + m.title; }
    return null;
  });
  console.log("openModule oncology:", clicked);
  await page.waitForTimeout(10000);
  const onc = await dumpFilm(page, "oncology");
  await page.locator("#atlasFilm").screenshot({ path: `${OUT}/film-03-onc-strip.png` }).catch(() => {});
  report.views.push(onc);

  const proto = await page.evaluate(() => {
    const mods = (window.COURSE && COURSE.modules) || [];
    const m = mods.find(x => /p0protocol|gp-star|fapi/i.test(x.id + " " + x.title));
    if (m && typeof openModule === "function") { openModule(m.id); return m.id + " " + m.title; }
    return null;
  });
  console.log("openModule protocol:", proto);
  await page.waitForTimeout(10000);
  const pr = await dumpFilm(page, "protocol-fapi");
  await page.locator("#atlasFilm").screenshot({ path: `${OUT}/film-04-proto-strip.png` }).catch(() => {});
  report.views.push(pr);

  const totalFlagged = report.views.reduce((n, v) => n + (v.flagged || []).length, 0);
  const totalCards = report.views.reduce((n, v) => n + (v.count || 0), 0);
  const coverLive = (report.views[0] && report.views[0].liveN) || 0;
  report.ok = totalFlagged === 0 && totalCards > 0 && coverLive > 0;
  report.totalFlagged = totalFlagged;
  report.totalCards = totalCards;
  report.coverLive = coverLive;
  writeFileSync(`${OUT}/film-report.json`, JSON.stringify(report, null, 2));
  console.log(`\nSUMMARY cards=${totalCards} flagged=${totalFlagged} coverLive=${coverLive} ok=${report.ok}`);
  await browser.close();
  process.exit(report.ok ? 0 : 2);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
