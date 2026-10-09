#!/usr/bin/env python3
"""Emit public/studio/p000000000000000.js — Lantheus SPARROW RM2-3301 (68Ga-LNTH-2401) audiobook."""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

import pymupdf as fitz

PDF = Path("/workspace/attachments/RM2-3301_Newly_Diagno_V1.0-07May26 (1).pdf")
OUT = Path("/workspace/public/studio/p000000000000000.js")
IMG_DIR = Path("/workspace/public/studio/assets/protocol/sparrow")
PDF_COPY = Path("/workspace/public/studio/assets/protocol/RM2-3301-SPARROW-v1.0.pdf")

N_PAGES = 100
MOD_ID = "p000000000000000"

SVGS = r"""
  const P15V = {
    sparrow: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="15">SPARROW · RM2-3301 · Phase 2/3 ⁶⁸Ga-LNTH-2401 PET/CT</text>
      <rect x="16" y="38" width="488" height="32" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="59" text-anchor="middle" fill="#e8f2f7" font-size="12">Lantheus · GRPR (bombesin) tracer · not a PSMA agent · IND 177584</text>
      <rect x="16" y="82" width="232" height="100" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="132" y="108" text-anchor="middle" fill="#f5d76e" font-size="13">Phase 2 · dose opt</text>
      <text x="132" y="128" text-anchor="middle" fill="#e8f2f7" font-size="13">5 ± 1 mCi</text>
      <text x="132" y="148" text-anchor="middle" fill="#c5d8e3" font-size="12">148–222 MBq · ≤12 pts</text>
      <text x="132" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">ND or BCR · serial PET</text>
      <rect x="272" y="82" width="232" height="100" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="388" y="108" text-anchor="middle" fill="#3ee0c4" font-size="13">Phase 3 · pivotal</text>
      <text x="388" y="128" text-anchor="middle" fill="#e8f2f7" font-size="13">~396 at ≤30 US sites</text>
      <text x="388" y="148" text-anchor="middle" fill="#c5d8e3" font-size="12">high-risk ND · RP+PLND</text>
      <text x="388" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">histopathology SOT</text>
      <text x="260" y="208" text-anchor="middle" fill="#c5d8e3" font-size="12">Total ~408 · Formulation 1 (Ph2) then Formulation 2 (Ph3 commercial-intent)</text>
      <text x="260" y="232" text-anchor="middle" fill="#9bb3c2" font-size="12">Primary: participant-level pelvic LN sensitivity + specificity vs pathology</text>
      <text x="260" y="258" text-anchor="middle" fill="#9bb3c2" font-size="11">Open-label, nonrandomised · 3 blinded central readers · iDMC for CSOT</text>
    </svg>`,
    grpr: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">⁶⁸Ga-LNTH-2401 · GRPR, not PSMA</text>
      <text x="260" y="64" text-anchor="middle" fill="#3ee0c4" font-size="22">DOTA-RM2 · ≤40 µg precursor</text>
      <text x="36" y="104" fill="#e8f2f7" font-size="13">Gastrin-releasing peptide receptor = bombesin family. Complementary to PSMA.</text>
      <text x="36" y="128" fill="#c5d8e3" font-size="13">Sterile ready-to-use · pH 4.0–6.5 · saline + ethanol + ascorbic acid</text>
      <text x="36" y="152" fill="#c5d8e3" font-size="13">Slow IV bolus + saline flush. Single dose. No planned dose modifications.</text>
      <text x="36" y="176" fill="#9bb3c2" font-size="12">Table 5 labelled range 3–6 mCi (111–222 MBq) at injection.</text>
      <text x="36" y="200" fill="#9bb3c2" font-size="12">Phase 2 start: 5 ± 1 mCi (148–222 MBq). Phase 3 uses the Ph2-selected activity.</text>
      <text x="36" y="228" fill="#fb7185" font-size="12">Do not call this PSMA-11, Pylarify, or Pluvicto. Different target.</text>
    </svg>`,
    doseopt: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">Phase 2 dose optimization · image-quality score</text>
      <rect x="20" y="46" width="150" height="78" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="95" y="76" text-anchor="middle" fill="#7cb8ff" font-size="13">≤12 imaging</text>
      <text x="95" y="98" text-anchor="middle" fill="#e8f2f7" font-size="12">evaluable · GRPR+</text>
      <rect x="185" y="46" width="150" height="78" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="260" y="76" text-anchor="middle" fill="#3ee0c4" font-size="13">6 for IQS pick</text>
      <text x="260" y="98" text-anchor="middle" fill="#e8f2f7" font-size="12">activity + time window</text>
      <rect x="350" y="46" width="150" height="78" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="425" y="76" text-anchor="middle" fill="#f5d76e" font-size="13">Serial PET</text>
      <text x="425" y="98" text-anchor="middle" fill="#e8f2f7" font-size="12">15 / 30 / 60 / 120 min</text>
      <text x="36" y="152" fill="#e8f2f7" font-size="13">IQS = sum of 6 participants’ average reader scores (range 0–12).</text>
      <text x="36" y="176" fill="#c5d8e3" font-size="13">Lowest activity with mean IQS ≥ 10.5 is the selected diagnostic dose.</text>
      <text x="36" y="200" fill="#9bb3c2" font-size="12">Ph2 dosimetry does NOT feed the Phase 3 primary diagnostic analysis.</text>
      <text x="36" y="224" fill="#9bb3c2" font-size="12">iDMC reviews the chosen activity and imaging window before Phase 3.</text>
    </svg>`,
    phase3: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#3ee0c4" font-size="15">Phase 3 · RP + PLND histopathology is the primary SOT</text>
      <rect x="20" y="46" width="235" height="88" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="137" y="76" text-anchor="middle" fill="#3ee0c4" font-size="15">Sensitivity</text>
      <text x="137" y="100" text-anchor="middle" fill="#e8f2f7" font-size="12">95% CI lower bound ≥ 25%</text>
      <text x="137" y="120" text-anchor="middle" fill="#9bb3c2" font-size="11">pelvic LN, participant-level</text>
      <rect x="265" y="46" width="235" height="88" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="382" y="76" text-anchor="middle" fill="#f5d76e" font-size="15">Specificity</text>
      <text x="382" y="100" text-anchor="middle" fill="#e8f2f7" font-size="12">95% CI lower bound ≥ 65%</text>
      <text x="382" y="120" text-anchor="middle" fill="#9bb3c2" font-size="11">same SOT, same readers</text>
      <text x="36" y="164" fill="#e8f2f7" font-size="13">3 blinded central readers. Region-matched pelvic nodes vs pathology.</text>
      <text x="36" y="188" fill="#c5d8e3" font-size="13">Secondary CSOT: pathology ± conventional imaging ± PSMA PET; iDMC charter.</text>
      <text x="36" y="212" fill="#9bb3c2" font-size="12">Primary analysis set = intent-to-image (everyone who got the tracer).</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">Newly diagnosed, at least high-risk or suspected M1, planning RP+PLND.</text>
    </svg>`,
    hydrate: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#7cb8ff" font-size="15">Nuclear-medicine handling · SPARROW</text>
      <text x="36" y="64" fill="#e8f2f7" font-size="13">Hydrate before and after imaging — cut kidney/bladder dose, clean the scan.</text>
      <text x="36" y="88" fill="#c5d8e3" font-size="13">No high-energy (>300 keV) gamma tracer within 5 physical half-lives.</text>
      <text x="36" y="112" fill="#c5d8e3" font-size="13">No IV iodinated contrast within 24 h. No high-density oral contrast within 5 d.</text>
      <text x="36" y="136" fill="#c5d8e3" font-size="13">Oral water contrast is allowed. Overdose risk is low: dose calibrator + authorised user.</text>
      <text x="36" y="164" fill="#9bb3c2" font-size="12">Prior anti-cancer therapy or investigational agent within 28 d / 5 half-lives = ineligible.</text>
      <text x="36" y="188" fill="#9bb3c2" font-size="12">EBRT allowed only in Phase 2 BCR. No concurrent other clinical trial.</text>
      <text x="36" y="216" fill="#fb7185" font-size="12">10 CFR Part 35 + site RAM license still apply on any overdose report (24 h).</text>
    </svg>`,
    schema: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="14">Two sequential parts · one protocol · no randomisation</text>
      <rect x="16" y="42" width="150" height="70" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="91" y="70" text-anchor="middle" fill="#f5d76e" font-size="13">Screen</text>
      <text x="91" y="92" text-anchor="middle" fill="#c5d8e3" font-size="11">consent · labs · ECG</text>
      <rect x="184" y="42" width="150" height="70" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="259" y="70" text-anchor="middle" fill="#3ee0c4" font-size="13">Inject ⁶⁸Ga</text>
      <text x="259" y="92" text-anchor="middle" fill="#c5d8e3" font-size="11">slow bolus + flush</text>
      <rect x="352" y="42" width="152" height="70" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="428" y="70" text-anchor="middle" fill="#7cb8ff" font-size="13">PET/CT</text>
      <text x="428" y="92" text-anchor="middle" fill="#c5d8e3" font-size="11">Ph2 serial / Ph3 one</text>
      <text x="36" y="142" fill="#e8f2f7" font-size="13">Phase 3 then goes to RP + PLND. Pathology is the truth standard for nodes.</text>
      <text x="36" y="166" fill="#c5d8e3" font-size="13">Competitive enrollment, US-only, ~10 months Ph2 / ~24 months Ph3 recruitment.</text>
      <text x="36" y="194" fill="#9bb3c2" font-size="12">Andrew Stephens MD PhD — Head of Clinical Development, Lantheus.</text>
      <text x="36" y="218" fill="#9bb3c2" font-size="12">Teaching copy of a confidential sponsor protocol. Do not image from this module.</text>
    </svg>`
  };
"""

BOOT = r'''

(function bootP15Sparrow() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p000000000000000: COURSE not ready");
    return;
  }
  const MOD_ID = "p000000000000000";
  const ALIASES = { p000000000000000: 1, P000000000000000: 1, sparrow: 1, SPARROW: 1, "rm2-3301": 1, RM2_3301: 1 };
  function isMod(id) {
    const s = String(id || "").toLowerCase();
    return !!ALIASES[id] || s === "p000000000000000" || s === "sparrow" || s === "rm2-3301";
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== MOD_ID && m.id !== "sparrow");
  COURSE.modules.unshift(MODULE15);

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
  const extras = P15V;
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
        const map = { sparrow: "psma", grpr: "psma", doseopt: "suv", phase3: "deauville", hydrate: "mag3", schema: "talk" };
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
      if (!pager || document.getElementById("startSparrow")) return;
      const b = document.createElement("button");
      b.id = "startSparrow";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open P000000000000000 protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP && !/SPARROW/.test(heroP.textContent || "")) {
        heroP.textContent = "New: P000000000000000 is SPARROW (RM2-3301) — all pages of Lantheus ⁶⁸Ga-LNTH-2401 GRPR PET/CT. VECTRA is P00000000000000. Same audio, atlas, and live-image player.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    const alias = { sparrow: "pet", grpr: "pet", doseopt: "talk", phase3: "pet", hydrate: "kidney", schema: "talk" };
    if (Theater.clips) {
      Theater.clips.sparrow = Theater.clips.pet || Theater.clips.fdg || Theater.clips.talk;
      Theater.clips.grpr = Theater.clips.pet || Theater.clips.talk;
      Theater.clips.doseopt = Theater.clips.talk || Theater.clips.lecture;
      Theater.clips.phase3 = Theater.clips.pet || Theater.clips.talk;
      Theater.clips.hydrate = Theater.clips.kidney || Theater.clips.mag3 || Theater.clips.talk;
      Theater.clips.schema = Theater.clips.talk || Theater.clips.lecture;
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
    "title": "How to use this P000000000000000 · SPARROW protocol audiobook",
    "audio": [
        "This module is P 000000000000000 — a full read-through of Lantheus protocol R M 2-3301, study nickname SPARROW: Staging Prostate Cancer with Advanced R M 2 Radiotracer Oncologic Workup. Version 1.0, 30 April 2026.",
        "Investigational product: gallium-68 L N T H-2401, a gastrin-releasing peptide receptor tracer. Precursor is D O T A-R M 2. This is not P S M A. Complementary target in prostate cancer.",
        "Phase 2: up to 12 imaging-evaluable patients, 5 plus or minus 1 millicurie, 148 to 222 megabecquerels, serial PET for dose and time-window selection. Phase 3: about 396 newly diagnosed high-risk or suspected metastatic men heading to radical prostatectomy plus pelvic node dissection. Total about 408.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of a Phase 2/3 diagnostic PET protocol. It is not a substitute for the signed site protocol, the imaging charter, or I R B correspondence.",
        "Work page by page. One hundred protocol pages, plus this intro. After the last page, take the module quiz — G R P R versus P S M A, the millicurie range, Phase 2 I Q S rule, and the Phase 3 sensitivity and specificity bars.",
    ],
    "chips": ["P000000000000000", "100 pages", "Web speech", "Protocol page on screen", "Same studio player"],
    "visual": "sparrow",
    "image": "assets/protocol/sparrow/s001.jpg",
    "cap": "SPARROW cover — ⁶⁸Ga-LNTH-2401 GRPR PET/CT in prostate cancer",
    "pearls": [
        "P000000000000000 is SPARROW / RM2-3301 — same play, pause, speed, atlas, and live-image dock as VECTRA and the other protocol modules.",
        "GRPR (bombesin / RM2), not PSMA. Phase 2 picks the millicurie and time window; Phase 3 is the histopathology-anchored pivotal.",
        "Teaching copy of a confidential sponsor protocol. Do not image or dose from this module.",
    ],
}

QUIZ = [
    {
        "q": "What receptor does ⁶⁸Ga-LNTH-2401 target?",
        "choices": [
            "PSMA, same as ⁶⁸Ga-PSMA-11",
            "GRPR (gastrin-releasing peptide receptor); precursor DOTA-RM2 ≤40 µg",
            "SSTR2, same as DOTATATE",
            "HER2, same as DWJ155"
        ],
        "a": 1,
        "why": "Synopsis / Table 5. Bombesin-family GRPR tracer. Complementary to PSMA, not a replacement.",
    },
    {
        "q": "Phase 2 administered activity?",
        "choices": [
            "12 MBq Q6W, copied from VECTRA therapy",
            "5 ± 1 mCi (148–222 MBq) as a single slow IV bolus; Table 5 labelled range 3–6 mCi",
            "7.40 GBq like ¹⁷⁷Lu-PSMA-617",
            "Weight-based 5 MBq/kg"
        ],
        "a": 1,
        "why": "§1.1 / Table 5. Single diagnostic injection. Phase 3 uses the Phase 2-selected activity.",
    },
    {
        "q": "How is the Phase 2 imaging dose chosen?",
        "choices": [
            "Whatever the site PET tech prefers",
            "IQS from 6 GRPR-positive participants; lowest activity with mean IQS ≥ 10.5, plus serial 15/30/60/120 min PET; iDMC reviews before Phase 3",
            "Fixed 10 mCi for everyone",
            "Copied from the PSMA-11 package insert"
        ],
        "a": 1,
        "why": "§9.3.2. IQS range 0–12. Phase 2 data do not feed the Phase 3 primary diagnostic analysis.",
    },
    {
        "q": "Who enrolls in Phase 3?",
        "choices": [
            "Any man with a rising PSA after prostatectomy, no surgery planned",
            "Newly diagnosed prostate cancer, at least high-risk or suspected metastatic disease, planning RP + PLND",
            "Women with GRPR-positive breast cancer",
            "mCRPC after two taxanes"
        ],
        "a": 1,
        "why": "Synopsis Population. Pathology of pelvic nodes is the primary standard of truth.",
    },
    {
        "q": "Phase 3 co-primary diagnostic bars?",
        "choices": [
            "AUC of ROC only",
            "Participant-level pelvic-LN sensitivity: 95% CI lower bound ≥ 25%; specificity: lower bound ≥ 65%, vs region-matched histopathology",
            "SUVmax > 10 in the prostate",
            "Agreement with PSMA PET as the only truth"
        ],
        "a": 1,
        "why": "§9.1.2. Three blinded central readers. Secondary CSOT may add conventional imaging / PSMA PET via iDMC charter.",
    },
    {
        "q": "Planned sample size?",
        "choices": [
            "21 first-in-human",
            "Up to 12 imaging-evaluable in Phase 2 plus ~396 in Phase 3 (total ~408) at up to 30 US sites",
            "670 randomised 1:1 like VECTRA",
            "No cap"
        ],
        "a": 1,
        "why": "Synopsis Projected Number of Sites and Participants. Open-label, nonrandomised, competitive enrollment.",
    },
    {
        "q": "Primary efficacy analysis set in Phase 3?",
        "choices": [
            "Only patients with a perfect scan",
            "Intent-to-image: everyone who received ⁶⁸Ga-LNTH-2401, even if the scan or SOT is missing",
            "Dosimetry-evaluable set only",
            "Local reads only"
        ],
        "a": 1,
        "why": "§9.2.2. Imaging-evaluable and per-protocol sets are supportive.",
    },
    {
        "q": "Which washout is required before the SPARROW injection?",
        "choices": [
            "None — inject over any recent CT contrast",
            "No high-energy (>300 keV) gamma tracer within 5 physical half-lives; no IV iodinated contrast within 24 h; no high-density oral contrast within 5 days (water contrast OK)",
            "Six months off all ADT",
            "Must have received ¹⁷⁷Lu-PSMA last week"
        ],
        "a": 1,
        "why": "§6.7. Hydrate before and after to drop kidney/bladder dose and clean the images.",
    },
    {
        "q": "What are Formulation 1 and Formulation 2?",
        "choices": [
            "Oral versus IV",
            "Formulation 1 is Phase 2 dose/imaging optimization; Formulation 2 is the intended commercial-use product used in the Phase 3 pivotal",
            "⁶⁸Ga versus ¹⁷⁷Lu of the same peptide",
            "Diagnostic versus therapeutic in the same patient"
        ],
        "a": 1,
        "why": "§6.1 / synopsis. Same GRPR ligand, two manufacturing intents sequenced inside one protocol.",
    },
    {
        "q": "Sponsor and study nickname?",
        "choices": [
            "AstraZeneca VECTRA-01",
            "Lantheus Medical Imaging — SPARROW (Staging Prostate Cancer with Advanced RM2 Radiotracer Oncologic Workup), protocol RM2-3301, IND 177584",
            "Novartis DWJ155",
            "Blue Earth Diagnostics"
        ],
        "a": 1,
        "why": "Cover / brief title. Head of Clinical Development named: Andrew Stephens, MD, PhD.",
    },
    {
        "q": "Does Phase 2 dosimetry count toward the Phase 3 primary diagnostic claim?",
        "choices": [
            "Yes — pool all scans",
            "No. Phase 2 picks activity and time window only; those scans do not enter the Phase 3 primary diagnostic performance analysis",
            "Only if the patient later has surgery",
            "Only the 120-minute scan is reused"
        ],
        "a": 1,
        "why": "Synopsis Phase 2 / design rationale. Keeps the pivotal imaging claim clean for regulators.",
    },
    {
        "q": "How is ⁶⁸Ga-LNTH-2401 given?",
        "choices": [
            "Oral capsule",
            "Single intravascular slow bolus followed by a saline flush, prepared as a sterile ready-to-use syringe from the radiopharmacy",
            "Intrathecal",
            "Six cycles Q6W"
        ],
        "a": 1,
        "why": "Table 5 / §6.2. No planned dose modifications. Overdose is a dose-calibrator + authorised-user problem, reported in 24 h.",
    },
]

HEADER_RE = re.compile(
    r"Compound:\s*\[68Ga\]-LNTH-2401\s*Protocol Number:\s*RM2-3301\s*(Lantheus\s*)?Protocol Date:\s*30 April 2026 \[Version 1\.0\]",
    re.I,
)
PAGE_RE = re.compile(r"Confidential\s+Page\s+\d+\s+of\s+95", re.I)
PAGE_RE2 = re.compile(r"\bPage\s+\d+\s+of\s+95\b", re.I)

SPEAK = [
    (r"\[68Ga\]-LNTH-2401", "gallium-68 L N T H-2401"),
    (r"\[68Ga\]-LNTH2401", "gallium-68 L N T H-2401"),
    (r"\[⁶⁸Ga\]-LNTH-2401", "gallium-68 L N T H-2401"),
    (r"LNTH-2401", "L N T H-2401"),
    (r"LNTH2401", "L N T H-2401"),
    (r"RM2-3301", "R M 2-3301"),
    (r"DOTA-RM2", "D O T A R M 2"),
    (r"\bGRPR\b", "G R P R"),
    (r"\bSPARROW\b", "SPARROW"),
    (r"\bBCR\b", "B C R"),
    (r"\bPCa\b", "prostate cancer"),
    (r"\bRP\+PLND\b", "radical prostatectomy plus pelvic lymph node dissection"),
    (r"\bPLND\b", "pelvic lymph node dissection"),
    (r"\bRP\b", "radical prostatectomy"),
    (r"\bSOT\b", "standard of truth"),
    (r"\bCSOT\b", "composite standard of truth"),
    (r"\biDMC\b", "I D M C"),
    (r"\bIQS\b", "image quality score"),
    (r"\bPSMA\b", "P S M A"),
    (r"\bPET/CT\b", "PET C T"),
    (r"\bMBq\b", "megabecquerels"),
    (r"\bmCi\b", "millicuries"),
    (r"\bAE\b", "adverse event"),
    (r"\bSAE\b", "S A E"),
    (r"\bSUSAR\b", "S U S A R"),
    (r"\bCTCAE\b", "C T C A E"),
    (r"\bIND\b", "I N D"),
    (r"\bGCP\b", "G C P"),
    (r"\bICH\b", "I C H"),
    (r"\bIRB\b", "I R B"),
    (r"\bIEC\b", "I E C"),
    (r"\bITI\b", "intent-to-image"),
    (r"\bIES\b", "imaging evaluable set"),
    (r"\bEBRT\b", "external beam radiation"),
    (r"\bADT\b", "A D T"),
]


def clean_text(raw: str) -> str:
    t = raw.encode("utf-8", "replace").decode("utf-8")
    t = t.replace("\u0000", "")
    t = re.sub(r"(\w)-\n(\w)", r"\1\2", t)
    t = HEADER_RE.sub(" ", t)
    t = PAGE_RE.sub(" ", t)
    t = PAGE_RE2.sub(" ", t)
    t = t.replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " ")
    t = t.replace("⁶⁸Ga", "68Ga").replace("⁶⁸", "68")
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
        if re.fullmatch(r"Lantheus|Confidential|Compound: \[68Ga\]-LNTH-2401", s, re.I):
            continue
        lines.append(s)
    t = " ".join(lines)
    t = re.sub(r"Protocol Date:\s*30 April 2026 \[Version 1\.0\]", " ", t)
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
        1: "Cover · SPARROW · ⁶⁸Ga-LNTH-2401 GRPR PET/CT",
        2: "Sponsor signature · Stephens and Stambler · May 2026",
        3: "Investigator agreement",
        4: "Emergency contacts · JeBailey / Stephens",
        12: "Synopsis · Phase 2/3 SPARROW",
        13: "5 ± 1 mCi Phase 2 · two formulations",
        14: "Phase 3 pelvic-LN histopathology SOT",
        23: "Figures 1–2 study workflows",
        50: "Table 5 · drug product 3–6 mCi · DOTA-RM2",
        64: "§9.1 · sensitivity ≥25% / specificity ≥65% bars",
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
    if n in (1, 2, 12):
        return "sparrow"
    if n == 23 or "schema" in t or "workflow" in t:
        return "schema"
    if n == 50 or "dota-rm2" in t or "table 5" in t:
        return "grpr"
    if n in (13,) or "dose optimization" in t and n < 20:
        return "doseopt"
    if "sensitivity" in t and "specificity" in t:
        return "phase3"
    if "hydrat" in t or "contrast" in t or "overdose" in t:
        return "hydrate"
    if "grpr" in t or "bombesin" in t:
        return "grpr"
    if "phase 3" in t or "histopath" in t or "plnd" in t:
        return "phase3"
    if n <= 11:
        return "sparrow"
    return "sparrow"


def pearls_for(n: int) -> list[str]:
    SPECIAL = {
        1: [
            "SPARROW is Lantheus Phase 2/3 ⁶⁸Ga-LNTH-2401 GRPR PET/CT in prostate cancer.",
            "Protocol RM2-3301 v1.0, 30 April 2026. Teaching copy only.",
        ],
        13: [
            "Phase 2: 5 ± 1 mCi (148–222 MBq), up to 12 imaging-evaluable, newly diagnosed or BCR.",
            "Formulation 1 for optimization; Formulation 2 (commercial-intent) for Phase 3.",
        ],
        14: [
            "Phase 3 primary SOT is histopathology of pelvic nodes after RP+PLND.",
            "Three blinded central readers. Secondary CSOT may add CI / PSMA PET.",
        ],
        50: [
            "DOTA-RM2 precursor ≤40 µg. Labelled injection range 3–6 mCi (111–222 MBq).",
            "Slow IV bolus + saline flush. Ready-to-use from the radiopharmacy.",
        ],
        64: [
            "H0 fail if sensitivity CI lower bound < 25% or specificity CI lower bound < 65%.",
            "Phase 2 has no formal hypothesis — descriptive dosimetry and IQS only.",
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
        dest = IMG_DIR / f"s{i+1:03d}.jpg"
        pix.save(str(dest), jpg_quality=72)
        if (i + 1) % 25 == 0:
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
            "chips": ["SPARROW", f"p{n}/{doc.page_count}", "Full protocol text"],
            "visual": vis_for(n, cleaned),
            "image": f"assets/protocol/sparrow/s{n:03d}.jpg",
            "cap": f"Protocol page {n} of {doc.page_count} — SPARROW RM2-3301 v1.0",
            "pearls": pearls_for(n),
        })

    module = {
        "id": MOD_ID,
        "num": "P000000000000000",
        "title": "P000000000000000 · SPARROW protocol · ⁶⁸Ga-LNTH-2401 GRPR PET/CT",
        "time": "~4 h spoken",
        "weight": "Entire signed protocol",
        "atlasKey": "nuclear",
        "lessons": lessons,
        "quiz": QUIZ,
    }
    header = (
        "/* Lantheus SPARROW / RM2-3301 / P000000000000000 ⁶⁸Ga-LNTH-2401 protocol audiobook.\n"
        "   Loads last among protocol scripts. Mutates window.COURSE. */\n\n"
    )
    js = header + SVGS + "\n  const MODULE15 = " + json.dumps(module, ensure_ascii=False, indent=2) + ";\n" + BOOT
    OUT.write_text(js)
    print(f"wrote {OUT} bytes={OUT.stat().st_size} lessons={len(lessons)} quiz={len(QUIZ)}")


if __name__ == "__main__":
    main()
