import { chromium } from "playwright";
const BASE = "http://127.0.0.1:8080/studio/NucMed-Board-Studio.html?nocache=" + Date.now();
const OUT = "/workspace/screenshots";
const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
page.setDefaultTimeout(30000);
const errors = [];
page.on("pageerror", e => errors.push(String(e)));
page.on("console", msg => { if (msg.type() === "error") errors.push("console:" + msg.text()); });
await page.goto(BASE, { waitUntil: "domcontentloaded" });
await page.waitForSelector("#startBtn, .hero-card", { timeout: 20000 });
await page.waitForTimeout(900);

const home = await page.evaluate(() => {
  const mods = (window.COURSE && COURSE.modules) || [];
  const ids = mods.map(m => m.id);
  const aky = mods.find(m => m.id === "aky2519protocol");
  const bet = mods.find(m => m.id === "bet121protocol");
  return {
    ids: ids.slice(0, 10),
    first: ids[0],
    betIdx: ids.indexOf("bet121protocol"),
    akyIdx: ids.indexOf("aky2519protocol"),
    aky: aky && { nLessons: aky.lessons.length, nQuiz: (aky.quiz || []).length, title: aky.title, num: aky.num },
    bet: bet && { title: bet.title },
    btnP02: !!document.getElementById("startP02Aky"),
    btnBet: !!document.getElementById("startBet121"),
    btnP1239: !!document.getElementById("startP1239"),
    hero: (document.querySelector(".hero-card p:nth-of-type(2)") || {}).textContent || "",
  };
});
console.log("HOME", JSON.stringify(home, null, 2));
if (home.first !== "p1239") throw new Error("P1239 should stay first, got " + home.first);
if (home.akyIdx < 0) throw new Error("aky2519protocol missing");
if (home.betIdx < 0) throw new Error("BET-121 missing");
if (home.akyIdx !== home.betIdx + 1) throw new Error("P02 should sit after BET-121, bet=" + home.betIdx + " aky=" + home.akyIdx);
if (!home.aky || home.aky.nLessons !== 119) throw new Error("expected 119 lessons, got " + JSON.stringify(home.aky));
if (home.aky.nQuiz !== 10) throw new Error("expected 10 quiz");
if (!home.btnP02) throw new Error("missing Open P02 button");
if (!home.btnP1239) throw new Error("P1239 button disappeared");
if (!home.btnBet) throw new Error("BET-121 button disappeared");

await page.click("#startP02Aky");
await page.waitForTimeout(1200);
const les0 = await page.evaluate(() => {
  const still = document.getElementById("lessonStill");
  const imgs = [...document.querySelectorAll("#stage img")].map(i => i.currentSrc || i.src);
  const sheet = document.querySelector(".lesson-head a");
  return {
    crumb: document.querySelector(".crumb")?.textContent || "",
    h2: document.querySelector("#stage h2")?.textContent || "",
    stillSrc: still?.currentSrc || still?.src || "",
    stillDisplay: still ? getComputedStyle(still).display : "missing",
    imgs,
    sheet: sheet ? { href: sheet.getAttribute("href"), text: sheet.textContent } : null,
    state: window.NMBState && { view: NMBState.view, moduleId: NMBState.moduleId, lesson: NMBState.lesson },
  };
});
console.log("LESSON0", JSON.stringify(les0, null, 2));
await page.screenshot({ path: `${OUT}/p02-lesson0.png` });
if (!/P02|BActinium|AKY-2519/i.test(les0.h2 + les0.crumb)) throw new Error("not in P02: " + les0.h2);
if (!/a001\.jpg/.test(les0.stillSrc + les0.imgs.join(" "))) throw new Error("missing a001.jpg");
if (!les0.sheet || !/BACTINIUM-2-AKY-2519-study-sheet\.pdf/.test(les0.sheet.href || "")) throw new Error("missing study sheet");

const page16 = await page.evaluate(() => {
  if (typeof state !== "undefined") { state.lesson = 16; state.moduleId = "aky2519protocol"; }
  if (window.NMBState) { NMBState.lesson = 16; NMBState.moduleId = "aky2519protocol"; }
  if (typeof renderLesson === "function") renderLesson();
  const still = document.getElementById("lessonStill");
  const imgs = [...document.querySelectorAll("#stage img")].map(i => i.currentSrc || i.src);
  return {
    h2: document.querySelector("#stage h2")?.textContent || "",
    stillSrc: still?.currentSrc || still?.src || "",
    imgs,
  };
});
console.log("PAGE16", JSON.stringify(page16, null, 2));
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/p02-page16.png` });
if (!/a016\.jpg/.test(page16.stillSrc + page16.imgs.join(" "))) throw new Error("page 16 not a016");
if (!/schema|Page 16/i.test(page16.h2)) console.warn("page16 title unexpected", page16.h2);

const last = await page.evaluate(() => {
  if (typeof state !== "undefined") state.lesson = 118;
  if (window.NMBState) NMBState.lesson = 118;
  if (typeof renderLesson === "function") renderLesson();
  const still = document.getElementById("lessonStill");
  return {
    h2: document.querySelector("#stage h2")?.textContent || "",
    stillSrc: still?.currentSrc || still?.src || "",
    crumb: document.querySelector(".crumb")?.textContent || "",
  };
});
console.log("LAST", JSON.stringify(last, null, 2));
if (!/a118\.jpg/.test(last.stillSrc)) throw new Error("last page not a118");

const quiz = await page.evaluate(() => {
  const mod = COURSE.modules.find(m => m.id === "aky2519protocol");
  if (typeof state !== "undefined") {
    state.view = "quiz";
    state.moduleId = "aky2519protocol";
    state.quizIndex = 0;
    state.quizScore = 0;
    state.answered = false;
  }
  if (typeof renderQuiz === "function") renderQuiz(mod.quiz, () => {});
  return {
    q: document.querySelector(".q")?.textContent || "",
    nChoices: document.querySelectorAll(".choice").length,
  };
});
console.log("QUIZ", JSON.stringify(quiz, null, 2));
await page.screenshot({ path: `${OUT}/p02-quiz.png` });
if (!/AKY-2519|B7-H3|miniprotein/i.test(quiz.q)) throw new Error("quiz not about B7-H3");
if (quiz.nChoices !== 4) throw new Error("expected 4 choices");
await page.locator(".choice").nth(1).click();
await page.waitForTimeout(200);
const answered = await page.evaluate(() => ({
  explain: document.querySelector("#explain")?.textContent || "",
  correct: [...document.querySelectorAll(".choice")].some(el => /correct/.test(el.className)),
}));
console.log("ANSWERED", JSON.stringify(answered, null, 2));
if (!answered.correct) throw new Error("correct class not applied");

const betOk = await page.evaluate(() => {
  openModule("bet121protocol");
  const still = document.getElementById("lessonStill");
  return {
    id: window.NMBState && NMBState.moduleId,
    h2: document.querySelector("#stage h2")?.textContent || "",
    still: (still?.currentSrc || still?.src || "").split("/").pop(),
  };
});
console.log("BET", JSON.stringify(betOk, null, 2));
if (betOk.id !== "bet121protocol") throw new Error("BET-121 open broken");

const p1239ok = await page.evaluate(() => {
  openModule("p1239");
  const still = document.getElementById("lessonStill");
  return {
    id: window.NMBState && NMBState.moduleId,
    h2: document.querySelector("#stage h2")?.textContent || "",
    still: (still?.currentSrc || still?.src || "").split("/").pop(),
  };
});
console.log("P1239", JSON.stringify(p1239ok, null, 2));
if (p1239ok.id !== "p1239") throw new Error("P1239 open broken");

const protoErr = errors.filter(e => /p02aky|MODULE02|aky2519|SyntaxError|p1239|p01bet/i.test(e));
console.log("PAGE_ERRORS", errors.slice(0, 8));
if (protoErr.length) throw new Error("JS errors: " + protoErr.join(" | "));
console.log("OK p02aky");
await browser.close();
