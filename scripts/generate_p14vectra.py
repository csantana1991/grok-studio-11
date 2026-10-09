#!/usr/bin/env python3
"""Emit public/studio/p00000000000000.js — AstraZeneca VECTRA-01 (D9735C00001) audiobook."""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

import pymupdf as fitz

PDF = Path("/workspace/attachments/VECTRA D9735c00001-Clinical Study Protocol-v3_04Jun2026.3 (2).pdf")
OUT = Path("/workspace/public/studio/p00000000000000.js")
IMG_DIR = Path("/workspace/public/studio/assets/protocol/vectra")
PDF_COPY = Path("/workspace/public/studio/assets/protocol/VECTRA-01-D9735C00001-v3.0.pdf")

N_PAGES = 221
MOD_ID = "p00000000000000"

SVGS = r"""
  const P14V = {
    vectra: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="15">VECTRA-01 · D9735C00001 · Phase III ²²⁵Ac-PSMA-I&T</text>
      <rect x="16" y="38" width="488" height="32" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="59" text-anchor="middle" fill="#e8f2f7" font-size="12">AstraZeneca · AZD2265 / FPI-2265 · zadavotide guraxetan · mCRPC</text>
      <rect x="16" y="82" width="232" height="100" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="132" y="108" text-anchor="middle" fill="#f5d76e" font-size="13">Arm A</text>
      <text x="132" y="128" text-anchor="middle" fill="#e8f2f7" font-size="13">12 MBq IV Q6W</text>
      <text x="132" y="148" text-anchor="middle" fill="#c5d8e3" font-size="12">up to 6 cycles</text>
      <text x="132" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">no crossover</text>
      <rect x="272" y="82" width="232" height="100" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="388" y="108" text-anchor="middle" fill="#3ee0c4" font-size="13">Arm B · SoC</text>
      <text x="388" y="128" text-anchor="middle" fill="#e8f2f7" font-size="12">cabazitaxel · ARPI</text>
      <text x="388" y="148" text-anchor="middle" fill="#c5d8e3" font-size="12">or radium-223</text>
      <text x="388" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">investigator choice</text>
      <text x="260" y="208" text-anchor="middle" fill="#c5d8e3" font-size="12">~670 randomised 1:1 · ~1,120 screened · dual primary rPFS + OS</text>
      <text x="260" y="232" text-anchor="middle" fill="#9bb3c2" font-size="12">After ARPI, taxane, and one PSMA β radioligand · PSMA PET+ by BICR</text>
      <text x="260" y="258" text-anchor="middle" fill="#9bb3c2" font-size="11">Open-label Phase III · coordinating investigator Morris, MSK</text>
    </svg>`,
    ac225psma: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">²²⁵Ac zadavotide guraxetan · PSMA-I&T α therapy</text>
      <text x="260" y="64" text-anchor="middle" fill="#fb7185" font-size="26">12 MBq IV every 6 weeks</text>
      <text x="260" y="92" text-anchor="middle" fill="#7cb8ff" font-size="14">Up to 6 cycles · Arm A only · treatment window ≤ 36 weeks</text>
      <text x="36" y="128" fill="#e8f2f7" font-size="13">INN: actinium-225 zadavotide guraxetan · AZD2265 · FPI-2265</text>
      <text x="36" y="152" fill="#c5d8e3" font-size="13">Same targeting motif as ¹⁷⁷Lu-PSMA-I&T — α instead of β</text>
      <text x="36" y="176" fill="#c5d8e3" font-size="13">Solution for injection · lead/tungsten pig · Fusion / Cardinal Health</text>
      <text x="36" y="200" fill="#9bb3c2" font-size="12">Stop for progression, toxicity, consent withdrawal, or other protocol stops</text>
      <text x="36" y="224" fill="#9bb3c2" font-size="12">Not Pluvicto. Not radium-223. Fixed 12 MBq, not weight-based.</text>
    </svg>`,
    arms: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="22" text-anchor="middle" fill="#3ee0c4" font-size="14">1:1 randomisation · IRT · three stratification factors</text>
      <rect x="16" y="36" width="488" height="36" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="59" text-anchor="middle" fill="#c5d8e3" font-size="11">intended SoC (ARPI vs cabazitaxel vs Ra-223) · taxane courses (1 vs >1) · β-PSMA progressor timing</text>
      <rect x="16" y="84" width="152" height="100" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="92" y="110" text-anchor="middle" fill="#f5d76e" font-size="13">Cabazitaxel</text>
      <text x="92" y="132" text-anchor="middle" fill="#e8f2f7" font-size="12">20 mg/m² Q3W</text>
      <text x="92" y="150" text-anchor="middle" fill="#9bb3c2" font-size="11">(25 allowed)</text>
      <text x="92" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">+ pred 10 mg</text>
      <rect x="184" y="84" width="152" height="100" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="110" text-anchor="middle" fill="#7cb8ff" font-size="13">ARPI</text>
      <text x="260" y="132" text-anchor="middle" fill="#e8f2f7" font-size="12">enza 160 · abi 1 g</text>
      <text x="260" y="150" text-anchor="middle" fill="#9bb3c2" font-size="11">deutenza 80 China</text>
      <text x="260" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">after cabazitaxel rule</text>
      <rect x="352" y="84" width="152" height="100" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="428" y="110" text-anchor="middle" fill="#fb7185" font-size="13">Radium-223</text>
      <text x="428" y="132" text-anchor="middle" fill="#e8f2f7" font-size="12">55 kBq/kg IV</text>
      <text x="428" y="150" text-anchor="middle" fill="#9bb3c2" font-size="11">Q4W × 6</text>
      <text x="428" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">bone-seeking α</text>
      <text x="260" y="210" text-anchor="middle" fill="#e8f2f7" font-size="12">v3.0 dropped apalutamide, darolutamide, rezvilutamide from Arm B</text>
      <text x="260" y="234" text-anchor="middle" fill="#c5d8e3" font-size="12">No cross-over. IDMC watches safety, efficacy, futility.</text>
      <text x="260" y="258" text-anchor="middle" fill="#9bb3c2" font-size="11">ARPI only if cabazitaxel already given or not appropriate</text>
    </svg>`,
    petgate: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#3ee0c4" font-size="15">PSMA PET gate · BICR before randomisation</text>
      <rect x="24" y="46" width="230" height="88" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="139" y="78" text-anchor="middle" fill="#3ee0c4" font-size="14">⁶⁸Ga-PSMA-11</text>
      <text x="139" y="102" text-anchor="middle" fill="#e8f2f7" font-size="13">111–259 MBq bolus</text>
      <text x="139" y="122" text-anchor="middle" fill="#9bb3c2" font-size="11">preferred · EU-only tracer</text>
      <rect x="266" y="46" width="230" height="88" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="381" y="78" text-anchor="middle" fill="#f5d76e" font-size="14">¹⁸F-DCFPyL</text>
      <text x="381" y="102" text-anchor="middle" fill="#e8f2f7" font-size="13">296–370 MBq</text>
      <text x="381" y="122" text-anchor="middle" fill="#9bb3c2" font-size="11">prohibited in the EU</text>
      <text x="36" y="164" fill="#e8f2f7" font-size="13">Same tracer at screening and follow-up. Screening window 28 days.</text>
      <text x="36" y="188" fill="#c5d8e3" font-size="13">Central PSMA-positive confirmation required. These are AxMPs, not IMPs.</text>
      <text x="36" y="216" fill="#9bb3c2" font-size="12">Prior PSMA β RC allowed if ≥3 months from last dose; no prior α-targeted RC</text>
      <text x="36" y="240" fill="#9bb3c2" font-size="12">Do not confuse the diagnostic PET tracer with the 12 MBq ²²⁵Ac IMP</text>
    </svg>`,
    kidney: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#fb7185" font-size="16">Renal gate · v3.0 tightened after EMA</text>
      <rect x="24" y="48" width="230" height="80" rx="10" fill="#10232e" stroke="#fb7185"/>
      <text x="139" y="78" text-anchor="middle" fill="#fb7185" font-size="16">eGFR ≥ 60</text>
      <text x="139" y="102" text-anchor="middle" fill="#c5d8e3" font-size="12">mL/min · was ≥50 in v2</text>
      <rect x="266" y="48" width="230" height="80" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="381" y="78" text-anchor="middle" fill="#f5d76e" font-size="14">New exclusions</text>
      <text x="381" y="102" text-anchor="middle" fill="#c5d8e3" font-size="12">AKI · CKD · uncontrolled DM</text>
      <text x="36" y="156" fill="#e8f2f7" font-size="13">Xerostomia Grade 1 allowed; ≥ Grade 2 excluded (salivary is an OAR for PSMA α)</text>
      <text x="36" y="180" fill="#c5d8e3" font-size="13">Marrow: Hb ≥9 · platelets ≥100 · ANC ≥1.5 · ECOG 0–2</text>
      <text x="36" y="204" fill="#9bb3c2" font-size="12">Long-term FU basic metabolic panel must include creatinine</text>
      <text x="36" y="228" fill="#9bb3c2" font-size="12">PSMA α hits kidney and salivary glands harder than ¹⁷⁷Lu β</text>
    </svg>`,
    rpfs: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#3ee0c4" font-size="16">Dual primary endpoints · ITT Full Analysis Set</text>
      <rect x="24" y="48" width="230" height="88" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="139" y="78" text-anchor="middle" fill="#3ee0c4" font-size="16">rPFS</text>
      <text x="139" y="102" text-anchor="middle" fill="#c5d8e3" font-size="12">BICR radiographic</text>
      <text x="139" y="122" text-anchor="middle" fill="#9bb3c2" font-size="11">assumed HR 0.45 · 99% power</text>
      <rect x="266" y="48" width="230" height="88" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="381" y="78" text-anchor="middle" fill="#f5d76e" font-size="16">OS</text>
      <text x="381" y="102" text-anchor="middle" fill="#c5d8e3" font-size="12">overall survival</text>
      <text x="381" y="122" text-anchor="middle" fill="#9bb3c2" font-size="11">assumed HR 0.72 · 90% power</text>
      <text x="36" y="164" fill="#e8f2f7" font-size="13">DCO2: ~299 OS + ~400 rPFS events (~30 months). OS final ~399 events.</text>
      <text x="36" y="188" fill="#c5d8e3" font-size="13">Secondary: PFS, PSA50, PSA90, ORR, DoR, SSE-FS, PK, safety</text>
      <text x="36" y="212" fill="#9bb3c2" font-size="12">Stratified log-rank + Cox. O’Brien–Fleming alpha spend. IDMC futility look.</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">Open-label — BICR and central randomisation are the bias brakes</text>
    </svg>`
  };
"""

BOOT = r'''

(function bootP14Vectra() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p00000000000000: COURSE not ready");
    return;
  }
  const MOD_ID = "p00000000000000";
  const ALIASES = { p00000000000000: 1, P00000000000000: 1, vectra01: 1, D9735C00001: 1, VECTRA: 1 };
  function isMod(id) {
    const s = String(id || "");
    return !!ALIASES[id] || s.toLowerCase() === "p00000000000000" || s.toLowerCase() === "vectra01";
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== MOD_ID && m.id !== "vectra01");
  COURSE.modules.unshift(MODULE14);

  function protocolSrc(lesson) {
    if (!lesson || !lesson.image) return "";
    try { return (typeof resolveAsset === "function") ? resolveAsset(lesson.image) : lesson.image; }
    catch (e) { return lesson.image; }
  }
  function currentLesson() {
    const st = window.NMBState;
    if (!st || !isMod(st.moduleId)) return null;
    const mod = COURSE.modules.find(m => m.id === MOD_ID);
    return mod && mod.lessons && mod.lessons[st.lesson];
  }
  function pinProtocolPage() {
    const lesson = currentLesson();
    const src = protocolSrc(lesson);
    if (!src) return;
    const item = { src, cap: (lesson.cap || lesson.title || "Protocol page"), term: "protocol-page", kind: "protocol-page" };
    if (typeof LiveHero !== "undefined") {
      const rest = (LiveHero.items || []).filter(it => it && it.src && it.src !== src);
      LiveHero.items = [item].concat(rest).slice(0, 12);
      LiveHero.i = 0;
      try { LiveHero.paint(); } catch (e) {}
    }
    const still = document.getElementById("lessonStill");
    if (still) {
      still.src = src;
      still.alt = item.cap;
      still.style.display = "block";
      still.style.opacity = "1";
      still.style.zIndex = "6";
      still.style.objectFit = "contain";
      still.style.background = "#fff";
      still.dataset.locked = "1";
    }
    const hero = document.getElementById("liveHeroImg");
    if (hero) { hero.src = src; hero.alt = item.cap; }
    const v = document.getElementById("lessonMp4");
    if (v) { v.style.opacity = "0"; v.style.zIndex = "1"; }
  }
  if (typeof liveSentenceImages === "function") {
    const origLive = liveSentenceImages;
    liveSentenceImages = async function (s) {
      const r = await origLive(s);
      pinProtocolPage();
      return r;
    };
  }
  function keepPinned() {
    pinProtocolPage();
    setTimeout(pinProtocolPage, 200);
    setTimeout(pinProtocolPage, 700);
    setTimeout(pinProtocolPage, 1600);
  }
  if (typeof nmLessonPlates === "function") {
    const origPlates = nmLessonPlates;
    nmLessonPlates = function (lesson, mod) {
      const list = origPlates(lesson, mod) || [];
      if (mod && isMod(mod.id) && lesson && lesson.image) {
        const src = protocolSrc(lesson);
        if (src && !list.some(x => x.src === src)) {
          list.unshift({ src, cap: lesson.cap || lesson.title, term: "protocol-page", kind: "protocol-page" });
        }
      }
      return list;
    };
  }
  if (typeof syncSpokenImages === "function") {
    const origSync = syncSpokenImages;
    syncSpokenImages = function (text) {
      origSync(text);
      pinProtocolPage();
    };
  }
  const origOpen = typeof openModule === "function" ? openModule : null;
  if (origOpen) {
    openModule = function (id) {
      if (isMod(id)) id = MOD_ID;
      origOpen(id);
      if (id === MOD_ID) keepPinned();
    };
  }
  if (typeof LiveHero !== "undefined" && typeof LiveHero.reset === "function") {
    const origReset = LiveHero.reset.bind(LiveHero);
    LiveHero.reset = function (seed) {
      origReset(seed);
      pinProtocolPage();
    };
  }
  if (typeof render === "function") {
    const origRender = render;
    render = function () {
      origRender();
      if (window.NMBState && isMod(NMBState.moduleId)) keepPinned();
    };
  }
  const extras = P14V;
  if (typeof visualSVG === "function") {
    const orig = visualSVG;
    visualSVG = function (type) {
      if (extras[type]) return extras[type];
      return orig(type);
    };
  }
  if (typeof diagramKeyFor === "function") {
    const origDK = diagramKeyFor;
    diagramKeyFor = function (lesson, mod) {
      const raw = lesson && lesson.visual;
      if (raw && extras[raw]) return raw;
      if (mod && isMod(mod.id) && raw) {
        if (extras[raw]) return raw;
        const map = { vectra: "suv", ac225psma: "therapy", arms: "deauville", petgate: "psma", kidney: "mag3", rpfs: "suv" };
        return map[raw] || raw;
      }
      return origDK(lesson, mod);
    };
  }
  if (typeof renderHome === "function") {
    const origHome = renderHome;
    renderHome = function () {
      origHome();
      const pager = document.querySelector(".hero-card .pager");
      if (!pager || document.getElementById("startVectra01")) return;
      const b = document.createElement("button");
      b.id = "startVectra01";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open P00000000000000 protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP && !/VECTRA/.test(heroP.textContent || "")) {
        heroP.textContent = "New: P00000000000000 is VECTRA-01 — all 221 pages of AstraZeneca ²²⁵Ac-PSMA-I&T (AZD2265) versus SoC in PSMA-positive mCRPC. P000000 is DWJ155. P0000 is CLARIFY. Same audio, atlas, and live-image player.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    const alias = { vectra: "therapy", ac225psma: "therapy", arms: "talk", petgate: "pet", kidney: "kidney", rpfs: "pet" };
    if (Theater.clips) {
      Theater.clips.vectra = Theater.clips.therapy || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.ac225psma = Theater.clips["speak-alpha"] || Theater.clips.therapy || Theater.clips.talk;
      Theater.clips.arms = Theater.clips.talk || Theater.clips.lecture;
      Theater.clips.petgate = Theater.clips.pet || Theater.clips.fdg;
      Theater.clips.kidney = Theater.clips.kidney || Theater.clips.mag3 || Theater.clips.talk;
      Theater.clips.rpfs = Theater.clips.pet || Theater.clips.talk;
    }
    if (typeof Theater.setContext === "function") {
      const origCtx = Theater.setContext.bind(Theater);
      Theater.setContext = function (mod, lesson) {
        this.lesson = lesson;
        this.plateKey = (lesson && lesson.visual) || this.plateKey;
        return origCtx(mod, lesson);
      };
    }
    if (typeof Theater.pick === "function") {
      const origPick = Theater.pick.bind(Theater);
      Theater.pick = function (s) {
        const hit = origPick(s);
        if (alias[this.plateKey]) return alias[this.plateKey];
        return hit;
      };
    }
    if (typeof Theater.playClip === "function") {
      const origClip = Theater.playClip.bind(Theater);
      Theater.playClip = function (key) {
        if (window.NMBState && isMod(NMBState.moduleId)) {
          pinProtocolPage();
          return;
        }
        return origClip(key);
      };
    }
    if (typeof Theater.showVideo === "function") {
      const origShow = Theater.showVideo.bind(Theater);
      Theater.showVideo = function (on) {
        if (window.NMBState && isMod(NMBState.moduleId)) {
          origShow(false);
          pinProtocolPage();
          const still = document.getElementById("lessonStill");
          if (still) {
            still.style.display = "block";
            still.style.opacity = "1";
            still.style.zIndex = "6";
            still.style.objectFit = "contain";
            still.style.background = "#fff";
          }
          const v = document.getElementById("lessonMp4");
          if (v) { v.style.opacity = "0"; v.style.zIndex = "1"; }
          return;
        }
        return origShow(on);
      };
    }
  }
  try { if (typeof renderNav === "function") renderNav(); } catch (e) {}
  try { if (typeof updateBar === "function") updateBar(); } catch (e) {}
  try {
    const q = new URLSearchParams(location.search);
    const want = q.get("mod");
    if (want && isMod(want) && typeof openModule === "function") {
      openModule(MOD_ID);
      return;
    }
  } catch (e) {}
  const stage = document.getElementById("stage");
  if (stage && stage.querySelector(".hero-card") && typeof renderHome === "function") {
    renderHome();
  }
})();
'''

INTRO = {
    "title": "How to use this P00000000000000 · VECTRA-01 protocol audiobook",
    "audio": [
        "This module is P00000000000000 — a full read-through of AstraZeneca clinical protocol D 9735 C 00001, study nickname VECTRA-01, version 3.0, dated 4 June 2026.",
        "Investigational product: actinium-225 zadavotide guraxetan, also coded A Z D 2265 or F P I 2265, a P S M A I and T alpha radioligand. Phase 3, two-arm, one-to-one, open-label, versus investigator-choice standard of care in P S M A-positive metastatic castration-resistant prostate cancer.",
        "Arm A: 12 megabecquerels intravenous every 6 weeks, up to 6 cycles. Arm B: cabazitaxel, an A R P I, or radium-223. Dual primary endpoints: radiographic progression-free survival by blinded independent central review, and overall survival. About 670 randomised, 1120 screened.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a Phase 3 P S M A alpha-therapy protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. Two hundred and twenty-one protocol pages, plus this intro. After the last page, take the module quiz — 12 megabecquerels, SoC menu, P S M A PET gate, e G F R, and the dual primaries.",
    ],
    "chips": ["P00000000000000", "221 pages", "Web speech", "Protocol page on screen", "Same studio player"],
    "visual": "vectra",
    "image": "assets/protocol/vectra/v001.jpg",
    "cap": "VECTRA-01 cover — ²²⁵Ac-PSMA-I&T (AZD2265) vs SoC in PSMA+ mCRPC",
    "pearls": [
        "P00000000000000 is VECTRA-01 — same play, pause, speed, atlas, and live-image dock as the other protocol modules.",
        "Fixed 12 MBq Q6W × ≤6 is the experimental arm. SoC is not placebo — cabazitaxel, ARPI, or radium-223.",
        "Teaching copy of a confidential sponsor protocol. Do not treat from this module.",
    ],
}

QUIZ = [
    {
        "q": "Arm A ²²⁵Ac zadavotide guraxetan dose and schedule in VECTRA-01?",
        "choices": [
            "2 MBq Q6W, copied from the Novartis DWJ155 Phase I start",
            "12 MBq IV every 6 weeks for up to 6 cycles",
            "7.40 GBq Q6W like ¹⁷⁷Lu-PSMA-617",
            "55 kBq/kg Q4W like radium-223"
        ],
        "a": 1,
        "why": "Synopsis / Table 10: unit dose 12 MBq, 6-week cycles, up to 6 cycles. Treatment duration for Arm A up to 36 weeks.",
    },
    {
        "q": "Which statement correctly describes Arm B?",
        "choices": [
            "Placebo infusion Q6W",
            "Investigator’s choice of cabazitaxel (±25 mg/m²), ARPI (enza / abi / deutenza China), or radium-223 55 kBq/kg Q4W × 6; no crossover",
            "Mandatory cabazitaxel 25 mg/m² for everyone",
            "Any ¹⁷⁷Lu-PSMA product the site has on the shelf"
        ],
        "a": 1,
        "why": "v3.0 SoC menu. ARPI only if cabazitaxel already given or not appropriate. Apalutamide/darolutamide/rezvilutamide removed.",
    },
    {
        "q": "Dual primary endpoints?",
        "choices": [
            "PSA50 only",
            "rPFS by BICR and overall survival, ITT Full Analysis Set",
            "SUVmax of the screening PET",
            "Xerostomia grade"
        ],
        "a": 1,
        "why": "§1.1 / §9. Dual primary. Stratified log-rank + Cox. Assumed HR 0.45 (rPFS) and 0.72 (OS).",
    },
    {
        "q": "Who can enroll (disease setting)?",
        "choices": [
            "Hormone-sensitive M0 prostate cancer",
            "PSMA-positive mCRPC after ARPI, taxane for metastatic disease, and one PSMA-directed β radioligand (≥3 months from last β dose); no prior α-targeted RC",
            "Any rising PSA after prostatectomy",
            "Women with PSMA-positive breast cancer"
        ],
        "a": 1,
        "why": "Schema Figure 1 / inclusion. ECOG 0–2, eGFR ≥60, BICR PSMA PET+.",
    },
    {
        "q": "PSMA PET tracers allowed at screening?",
        "choices": [
            "Any PSMA agent including ¹⁸F-PSMA-1007 worldwide",
            "⁶⁸Ga-PSMA-11 (111–259 MBq, preferred; EU-only option) or ¹⁸F-DCFPyL (296–370 MBq; prohibited in the EU); same tracer at follow-up",
            "Only ²²⁵Ac SPECT, no diagnostic PET",
            "FDG PET is required instead"
        ],
        "a": 1,
        "why": "Table 9 AxMPs + v3.0 EMA alignment. These are auxiliary products, not the 12 MBq IMP.",
    },
    {
        "q": "Planned sample size?",
        "choices": [
            "21 patients, first-in-human",
            "Approximately 1,120 screened to randomise ~670 1:1",
            "383, copied from CLARIFY",
            "No cap"
        ],
        "a": 1,
        "why": "Synopsis Number of Participants and §9.2.",
    },
    {
        "q": "eGFR cutoff in version 3.0?",
        "choices": [
            "No renal gate",
            "≥ 30 mL/min",
            "≥ 60 mL/min (raised from ≥50); AKI, pre-existing CKD, and uncontrolled diabetes are exclusions",
            "≥ 90 mL/min only"
        ],
        "a": 2,
        "why": "v3.0 EMA-driven renal tightening. Salivary: Grade 1 xerostomia allowed, ≥2 excluded.",
    },
    {
        "q": "Randomisation strata?",
        "choices": [
            "None — simple 1:1",
            "Intended SoC (ARPI vs cabazitaxel vs Ra-223); prior taxane courses (1 vs >1); whether progression was during/within 6 weeks of last PSMA β RC",
            "Country only",
            "SUV of the hottest lesion only"
        ],
        "a": 1,
        "why": "Synopsis Study Arms. Open-label, so strata + BICR + IRT are the bias brakes. No crossover.",
    },
    {
        "q": "What is AZD2265 / FPI-2265 chemically in this protocol?",
        "choices": [
            "A HER2 peptide like DWJ155",
            "Actinium-225 zadavotide guraxetan, a PSMA-I&T small-molecule α radioligand",
            "Radium-223 dichloride",
            "An anti-PSMA antibody"
        ],
        "a": 1,
        "why": "Cover / INN. Same PSMA-I&T motif as some ¹⁷⁷Lu products — different radionuclide and a Phase III SoC-controlled design.",
    },
    {
        "q": "Screening window and PSMA confirmation?",
        "choices": [
            "12 months of old scans are fine",
            "Consent to Day −1 is 28 days (v3.0 shortened from 42); PSMA-positive disease must be centrally confirmed by BICR",
            "Local read only, no central review",
            "No imaging required if PSA >20"
        ],
        "a": 1,
        "why": "v3.0 cut screening to 28 days to avoid repeat assessments. Central PET read is mandatory.",
    },
    {
        "q": "⁶⁸Ga-PSMA-11 administered activity listed as AxMP?",
        "choices": [
            "12 MBq, same as the therapy",
            "111–259 MBq as a single bolus",
            "740 MBq",
            "Weight-based 5 MBq/kg"
        ],
        "a": 1,
        "why": "Table 9. ¹⁸F-DCFPyL is 296–370 MBq and is banned in the EU.",
    },
    {
        "q": "Coordinating investigator named on the protocol?",
        "choices": [
            "Not named",
            "Dr Michael Morris, Memorial Sloan Kettering Cancer Center",
            "The site PI at every centre",
            "An unnamed IDMC chair"
        ],
        "a": 1,
        "why": "Page 3. IDMC is separate — independent experts for safety, efficacy, and futility.",
    },
]

HEADER_RE = re.compile(
    r"Clinical Study Protocol\s*[–-]\s*3\.0\s*AstraZeneca\s*Actinium \(225Ac\) zadavotide guraxetan \(AZD2265 \[FPI-2265\]\)\s*-?\s*D9735C00001",
    re.I,
)
PAGE_RE = re.compile(r"CONFIDENTIAL AND PROPRIETARY\s+\d+\s+of\s+221", re.I)
PAGE_RE2 = re.compile(r"\b\d+\s+of\s+221\b")

SPEAK = [
    (r"225Ac zadavotide guraxetan", "actinium-225 zadavotide guraxetan"),
    (r"actinium \(225Ac\) zadavotide guraxetan", "actinium-225 zadavotide guraxetan"),
    (r"\[FPI-2265\]", "F P I 2265"),
    (r"FPI-2265", "F P I 2265"),
    (r"AZD2265", "A Z D 2265"),
    (r"D9735C00001", "D 9735 C 00001"),
    (r"VECTRA-01", "VECTRA-01"),
    (r"PSMA-I&T", "P S M A I and T"),
    (r"PSMA-positive", "P S M A-positive"),
    (r"\bPSMA\b", "P S M A"),
    (r"\bmCRPC\b", "m C R P C"),
    (r"\brPFS\b", "radiographic P F S"),
    (r"\bOS\b", "overall survival"),
    (r"\bBICR\b", "B I C R"),
    (r"\bARPI\b", "A R P I"),
    (r"\bSoC\b", "standard of care"),
    (r"\bSOC\b", "standard of care"),
    (r"\bQ6W\b", "every 6 weeks"),
    (r"\bQ3W\b", "every 3 weeks"),
    (r"\bQ4W\b", "every 4 weeks"),
    (r"\bQ8W\b", "every 8 weeks"),
    (r"\bQ24W\b", "every 24 weeks"),
    (r"68Ga-PSMA-11", "gallium-68 P S M A-11"),
    (r"18F-DCFPyL", "fluorine-18 D C F P y L"),
    (r"\b68Ga\b", "gallium-68"),
    (r"\b18F\b", "fluorine-18"),
    (r"\b177Lu\b", "lutetium-177"),
    (r"\b225Ac\b", "actinium-225"),
    (r"\bIDMC\b", "I D M C"),
    (r"\bIRT\b", "I R T"),
    (r"\bRTSM\b", "R T S M"),
    (r"\bEOT\b", "end of treatment"),
    (r"\beGFR\b", "e G F R"),
    (r"\bECOG\b", "E C O G"),
    (r"\bMBq\b", "megabecquerels"),
    (r"\bkBq/kg\b", "kilobecquerels per kilogram"),
    (r"\bkBq\b", "kilobecquerels"),
    (r"\bAESI\b", "A E S I"),
    (r"\bSAE\b", "S A E"),
    (r"\bIMP\b", "I M P"),
    (r"\bAxMP\b", "auxiliary medicinal product"),
    (r"\bADT\b", "A D T"),
    (r"\bALARA\b", "A L A R A"),
    (r"\bPSA50\b", "P S A 50"),
    (r"\bPSA90\b", "P S A 90"),
    (r"\bORR\b", "O R R"),
    (r"\bDoR\b", "duration of response"),
    (r"\bSSE-FS\b", "S S E F S"),
    (r"mg/m2", "milligrams per square metre"),
    (r"mg/m²", "milligrams per square metre"),
]


def clean_text(raw: str) -> str:
    t = raw.encode("utf-8", "replace").decode("utf-8")
    t = t.replace("\u0000", "")
    t = re.sub(r"(\w)-\n(\w)", r"\1\2", t)
    t = HEADER_RE.sub(" ", t)
    t = PAGE_RE.sub(" ", t)
    t = PAGE_RE2.sub(" ", t)
    t = t.replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " ")
    t = t.replace("²²⁵Ac", "225Ac").replace("⁶⁸Ga", "68Ga").replace("¹⁸F", "18F").replace("¹⁷⁷Lu", "177Lu")
    t = t.replace("≤", " less than or equal to ").replace("≥", " greater than or equal to ")
    t = t.replace("×", " times ").replace("±", " plus or minus ").replace("·", " ")
    t = t.replace("–", "-").replace("—", "-")
    t = re.sub(r"\.{4,}", " ", t)
    lines = []
    for ln in t.splitlines():
        s = ln.strip()
        if not s:
            continue
        if re.fullmatch(r"[\.…]{3,}", s):
            continue
        if re.fullmatch(r"AstraZeneca|CONFIDENTIAL AND PROPRIETARY", s, re.I):
            continue
        lines.append(s)
    t = " ".join(lines)
    t = re.sub(r"Clinical Study Protocol\s*-?\s*3\.0", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def speakify(t: str) -> str:
    for pat, rep in SPEAK:
        t = re.sub(pat, rep, t)
    return t


def chunk_audio(text: str, limit: int = 480) -> list[str]:
    text = text.strip()
    if not text:
        return ["This protocol page is a figure or table grid. Read the photograph on the left while the next pages carry the surrounding text."]
    parts: list[str] = []
    buf = ""
    bits = re.split(r"(?<=[\.!?])\s+", text)
    for bit in bits:
        bit = bit.strip()
        if not bit:
            continue
        if len(buf) + 1 + len(bit) <= limit:
            buf = (buf + " " + bit).strip()
        else:
            if buf:
                parts.append(buf)
            if len(bit) <= limit:
                buf = bit
            else:
                while len(bit) > limit:
                    cut = bit.rfind(" ", 0, limit)
                    if cut < 80:
                        cut = limit
                    parts.append(bit[:cut].strip())
                    bit = bit[cut:].strip()
                buf = bit
    if buf:
        parts.append(buf)
    return [p for p in parts if p][:18]


def title_from(n: int, cleaned: str) -> str:
    SPECIAL = {
        1: "Cover · VECTRA-01 · ²²⁵Ac-PSMA-I&T vs SoC",
        2: "Phase III open-label · rPFS and OS · sponsor AstraZeneca AB",
        3: "Brief title · acronym VECTRA-01 · coordinating investigator Morris",
        4: "Document history · v3.0 04 June 2026 substantial amendment",
        28: "Overall design synopsis · 2-arm 1:1 vs SoC",
        29: "Arm A 12 MBq Q6W × ≤6 · Arm B SoC menu · strata",
        30: "Follow-up, IDMC, ITT dual-primary stats",
        31: "Figure 1 study design · schema and dual primaries",
        70: "~670 randomised 1:1",
        91: "Table 10 · 12 MBq product information · Arm B list",
        136: "§9.2 Sample size · 670 randomised",
    }
    if n in SPECIAL:
        return SPECIAL[n]
    head = cleaned.split(".")[0].strip()
    head = re.sub(r"^\d+(\.\d+)*\s+", "", head)
    if len(head) > 88:
        head = head[:85].rsplit(" ", 1)[0] + "…"
    if len(head) < 12:
        head = f"Protocol body · page {n}"
    return head


def vis_for(n: int, text: str) -> str:
    t = text.lower()
    if n in (1, 2, 3, 28, 31):
        return "vectra"
    if n in (29, 32, 91) or "arm a" in t and "12 mbq" in t:
        return "ac225psma" if n in (29, 91) else "arms"
    if "cabazitaxel" in t and "radium" in t:
        return "arms"
    if "psma-11" in t or "dcfpyL" in t.lower() or "dcfpy" in t:
        return "petgate"
    if "egfr" in t or "xerostomia" in t or "kidney" in t:
        return "kidney"
    if "rpfs" in t or "overall survival" in t or n in (30, 136):
        return "rpfs"
    if "12 mbq" in t or "zadavotide" in t:
        return "ac225psma"
    if n <= 19:
        return "vectra"
    return "vectra"


def pearls_for(n: int) -> list[str]:
    SPECIAL = {
        1: [
            "VECTRA-01 is AstraZeneca Phase III ²²⁵Ac-PSMA-I&T (AZD2265 / FPI-2265) versus SoC in PSMA+ mCRPC.",
            "Protocol D9735C00001 version 3.0, 4 June 2026. Teaching copy only.",
        ],
        29: [
            "Arm A: 12 MBq IV Q6W × up to 6 cycles. Arm B: cabazitaxel, ARPI, or radium-223 55 kBq/kg Q4W × 6.",
            "Strata: intended SoC, number of prior taxane courses, timing of β-PSMA progression.",
        ],
        31: [
            "Must have progressed after ARPI, metastatic taxane, and one PSMA β RC. No prior α-targeted RC.",
            "eGFR ≥60, ECOG 0–2, PSMA PET+ by BICR. Dual primary rPFS (BICR) + OS.",
        ],
        91: [
            "Unit dose is 12 MBq in 6-week cycles. Radioactive supply in a lead or tungsten pig.",
            "⁶⁸Ga-PSMA-11 111–259 MBq and ¹⁸F-DCFPyL 296–370 MBq are AxMPs, not the IMP.",
        ],
    }
    if n in SPECIAL:
        return SPECIAL[n]
    return [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script.",
    ]


def render_pages(doc: fitz.Document) -> None:
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    for i in range(doc.page_count):
        page = doc[i]
        zoom = 888.0 / float(page.rect.width)
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        dest = IMG_DIR / f"v{i+1:03d}.jpg"
        pix.save(str(dest), jpg_quality=72)
        if (i + 1) % 50 == 0:
            print(f"  rendered {i+1}/{doc.page_count}")
    print(f"rendered {doc.page_count} jpegs → {IMG_DIR}")


def main() -> None:
    if not PDF.exists():
        raise SystemExit(f"missing {PDF}")
    shutil.copy2(PDF, PDF_COPY)
    doc = fitz.open(PDF)
    if doc.page_count != N_PAGES:
        print(f"WARN page_count={doc.page_count} expected {N_PAGES}")
    render_pages(doc)

    lessons = [INTRO]
    for i in range(doc.page_count):
        n = i + 1
        raw = doc[i].get_text() or ""
        cleaned = clean_text(raw)
        spoken = speakify(cleaned)
        audio = chunk_audio(spoken)
        title = title_from(n, cleaned)
        lessons.append({
            "title": f"Page {n} of {doc.page_count} · {title}",
            "audio": audio,
            "chips": ["VECTRA-01", f"p{n}/{doc.page_count}", "Full protocol text"],
            "visual": vis_for(n, cleaned),
            "image": f"assets/protocol/vectra/v{n:03d}.jpg",
            "cap": f"Protocol page {n} of {doc.page_count} — VECTRA-01 D9735C00001 v3.0",
            "pearls": pearls_for(n),
        })

    module = {
        "id": MOD_ID,
        "num": "P00000000000000",
        "title": "P00000000000000 · VECTRA-01 protocol · ²²⁵Ac-PSMA-I&T full 221 pages",
        "time": "~7 h spoken",
        "weight": "Entire signed protocol",
        "atlasKey": "nuclear",
        "lessons": lessons,
        "quiz": QUIZ,
    }
    header = (
        "/* AstraZeneca VECTRA-01 / D9735C00001 / P00000000000000 ²²⁵Ac-PSMA-I&T protocol audiobook.\n"
        "   Loads last among protocol scripts. Mutates window.COURSE. */\n\n"
    )
    js = header + SVGS + "\n  const MODULE14 = " + json.dumps(module, ensure_ascii=False, indent=2) + ";\n" + BOOT
    OUT.write_text(js)
    print(f"wrote {OUT} bytes={OUT.stat().st_size} lessons={len(lessons)} quiz={len(QUIZ)}")


if __name__ == "__main__":
    main()
