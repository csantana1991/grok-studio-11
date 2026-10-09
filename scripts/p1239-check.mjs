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
await page.waitForSelector("#startBtn, #startP1239, .hero-card", { timeout: 20000 });
await page.waitForTimeout(800);
const home = await page.evaluate(() => {
  const mods = (window.COURSE && COURSE.modules) || [];
  return {
    first: mods[0] && { id: mods[0].id, num: mods[0].num, title: mods[0].title, nLessons: (mods[0].lessons||[]).length, nQuiz: (mods[0].quiz||[]).length },
    ids: mods.map(m => m.id).slice(0, 8),
    btn: !!document.getElementById("startP1239"),
    btnText: (document.getElementById("startP1239") || {}).textContent || "",
    hero: (document.querySelector(".hero-card p:nth-of-type(2)") || {}).textContent || "",
    p1239v: typeof P1239V !== "undefined",
    module1239: typeof MODULE1239 !== "undefined",
  };
});
console.log("HOME", JSON.stringify(home, null, 2));
if (!home.btn) throw new Error("missing Open P1239 button");
if (!home.first || home.first.id !== "p1239") throw new Error("p1239 not first module: " + JSON.stringify(home.first));
if (home.first.nLessons !== 20) throw new Error("expected 20 lessons, got " + home.first.nLessons);
if (home.first.nQuiz !== 10) throw new Error("expected 10 quiz, got " + home.first.nQuiz);

await page.click("#startP1239");
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
    lessonImage: (COURSE.modules[0].lessons[0] || {}).image,
    lesson1Image: (COURSE.modules[0].lessons[1] || {}).image,
    state: window.NMBState && { view: NMBState.view, moduleId: NMBState.moduleId, lesson: NMBState.lesson },
  };
});
console.log("LESSON0", JSON.stringify(les0, null, 2));
await page.screenshot({ path: `${OUT}/p1239-lesson0.png` });
if (!/P1239/.test(les0.h2 + les0.crumb)) throw new Error("not in P1239 lesson: " + les0.h2);
if (!/j001\.jpg/.test(les0.stillSrc + les0.imgs.join(" ") + (les0.lessonImage||""))) throw new Error("missing j001.jpg");
if (!les0.sheet || !/JNJ-99526687-SCC1001-study-sheet\.pdf/.test(les0.sheet.href || "")) throw new Error("missing study sheet link: " + JSON.stringify(les0.sheet));

// page 10 of protocol = lesson index 10 (intro is 0)
const page10 = await page.evaluate(() => {
  openModule("p1239");
  if (typeof state !== "undefined") { state.lesson = 10; }
  if (window.NMBState) NMBState.lesson = 10;
  if (typeof renderLesson === "function") renderLesson();
  else if (typeof render === "function") render();
  const still = document.getElementById("lessonStill");
  const imgs = [...document.querySelectorAll("#stage img")].map(i => i.currentSrc || i.src);
  return {
    h2: document.querySelector("#stage h2")?.textContent || "",
    stillSrc: still?.currentSrc || still?.src || "",
    imgs,
    lessonImage: COURSE.modules.find(m => m.id === "p1239").lessons[10].image,
  };
});
console.log("PAGE10", JSON.stringify(page10, null, 2));
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/p1239-page10.png` });
if (!/j010\.jpg/.test(page10.stillSrc + page10.imgs.join(" ") + page10.lessonImage)) throw new Error("page 10 not j010");
if (!/Page 10|schema|schema/i.test(page10.h2)) console.warn("page10 title unexpected", page10.h2);

const quiz = await page.evaluate(() => {
  const mod = COURSE.modules.find(m => m.id === "p1239");
  if (typeof state !== "undefined") {
    state.view = "quiz";
    state.moduleId = "p1239";
    state.quizIndex = 0;
    state.quizScore = 0;
    state.answered = false;
  }
  if (typeof renderQuiz === "function") renderQuiz(mod.quiz, () => {});
  else if (typeof openQuiz === "function") openQuiz();
  return {
    q: document.querySelector(".q")?.textContent || "",
    nChoices: document.querySelectorAll(".choice").length,
    firstQ: mod.quiz[0].q,
  };
});
console.log("QUIZ", JSON.stringify(quiz, null, 2));
await page.screenshot({ path: `${OUT}/p1239-quiz.png` });
if (!/JNJ-99526687|DLL3|actinium/i.test(quiz.q + quiz.firstQ)) throw new Error("quiz not about DLL3");
if (quiz.nChoices !== 4) throw new Error("expected 4 choices, got " + quiz.nChoices);

// click correct (index 1)
const choices = page.locator(".choice");
await choices.nth(1).click();
await page.waitForTimeout(200);
const answered = await page.evaluate(() => ({
  explain: document.querySelector("#explain")?.textContent || "",
  correct: [...document.querySelectorAll(".choice")].map(el => el.className),
}));
console.log("ANSWERED", JSON.stringify(answered, null, 2));
if (!answered.correct.some(c => /correct/.test(c))) throw new Error("correct class not applied");

// sheet PDF fetch
const sheetStatus = await page.evaluate(async () => {
  const r = await fetch("JNJ-99526687-SCC1001-study-sheet.pdf");
  return { ok: r.ok, status: r.status, type: r.headers.get("content-type"), len: r.headers.get("content-length") };
});
console.log("SHEET", sheetStatus);
if (!sheetStatus.ok) throw new Error("study sheet 404");

const jpegStatus = await page.evaluate(async () => {
  const r = await fetch("assets/protocol/jnj/j007.jpg");
  return { ok: r.ok, status: r.status, len: r.headers.get("content-length") };
});
console.log("JPEG7", jpegStatus);

console.log("PAGE_ERRORS", errors.slice(0, 8));
if (errors.some(e => /p1239|MODULE1239|SyntaxError/i.test(e))) throw new Error("p1239 JS errors: " + errors.join(" | "));
console.log("OK p1239");
await browser.close();
