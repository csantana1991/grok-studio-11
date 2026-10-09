#!/usr/bin/env python3
"""Emit public/studio/p02aky.js — Aktis BActinium-2 AKY-2519-02 audiobook.

Sits after BET-121 in COURSE.modules (splice, not unshift) so P1239 and
the other protocol modules keep their order.
"""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

import pymupdf as fitz

PDF = Path("/workspace/attachments/Clinical Study Protocol Phase I-III.1 (3).pdf")
OUT = Path("/workspace/public/studio/p02aky.js")
IMG_DIR = Path("/workspace/public/studio/assets/protocol/aky")
PDF_COPY = Path("/workspace/public/studio/assets/protocol/AKY-2519-02-v1.0.pdf")

N_PAGES = 118
MOD_ID = "aky2519protocol"

SVGS = r"""
  const P02V = {
    aky: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="15">P02 · BActinium-2 · AKY-2519-02 · B7-H3 miniprotein</text>
      <rect x="16" y="38" width="488" height="32" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="59" text-anchor="middle" fill="#e8f2f7" font-size="12">Aktis Oncology · Phase 1b · 08 APR 2026 · IND 178062 / 178063</text>
      <rect x="16" y="82" width="232" height="108" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="132" y="108" text-anchor="middle" fill="#f5d76e" font-size="13">Imaging · Cu-64</text>
      <text x="132" y="130" text-anchor="middle" fill="#e8f2f7" font-size="13">[64Cu]Cu-AKY-2519</text>
      <text x="132" y="150" text-anchor="middle" fill="#c5d8e3" font-size="12">148–222 MBq (4–6 mCi)</text>
      <text x="132" y="170" text-anchor="middle" fill="#9bb3c2" font-size="11">PET gate 90–180 min</text>
      <rect x="272" y="82" width="232" height="108" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="388" y="108" text-anchor="middle" fill="#fb7185" font-size="13">Therapy · Ac-225</text>
      <text x="388" y="130" text-anchor="middle" fill="#e8f2f7" font-size="13">[225Ac]Ac-AKY-2519</text>
      <text x="388" y="150" text-anchor="middle" fill="#c5d8e3" font-size="12">start 6 MBq IV Q4W</text>
      <text x="388" y="170" text-anchor="middle" fill="#9bb3c2" font-size="11">BOIN 6 → 9 → 12 MBq</text>
      <text x="260" y="214" text-anchor="middle" fill="#c5d8e3" font-size="12">~152 enrolled · Part 1 up to 81 · Part 2 up to 71 · 20–25 sites</text>
      <text x="260" y="238" text-anchor="middle" fill="#9bb3c2" font-size="12">Same 49-aa miniprotein: DOTA-PEG4 · Cu-64 to see it, Ac-225 to treat it</text>
      <text x="260" y="262" text-anchor="middle" fill="#9bb3c2" font-size="11">Teaching copy of a confidential sponsor protocol. Do not dose from this module.</text>
    </svg>`,
    b7h3: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">B7-H3 · CD276 · checkpoint on tumor + stroma</text>
      <circle cx="120" cy="120" r="48" fill="#163746" stroke="#fb7185" stroke-width="3"/>
      <text x="120" y="114" text-anchor="middle" fill="#fb7185" font-size="13">tumor</text>
      <text x="120" y="134" text-anchor="middle" fill="#c5d8e3" font-size="11">B7-H3+</text>
      <rect x="196" y="84" width="128" height="72" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="260" y="114" text-anchor="middle" fill="#3ee0c4" font-size="12">49-aa mini</text>
      <text x="260" y="134" text-anchor="middle" fill="#9bb3c2" font-size="11">DOTA-PEG4</text>
      <rect x="352" y="84" width="140" height="72" rx="10" fill="#1a2a14" stroke="#fb7185"/>
      <text x="422" y="114" text-anchor="middle" fill="#fb7185" font-size="12">Ac-225 α</text>
      <text x="422" y="134" text-anchor="middle" fill="#9bb3c2" font-size="11">T½ 9.9 d</text>
      <text x="36" y="188" fill="#e8f2f7" font-size="13">Not an antibody. Not PSMA. Not DLL3. Not tarlatamab. Miniprotein RPT.</text>
      <text x="36" y="212" fill="#c5d8e3" font-size="12">Protein expression is limited on normal cells; high on many solid tumors and stroma.</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">Prior B7-H3 targeted therapy and any prior radioligand therapy are exclusions.</text>
    </svg>`,
    cu64: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#7cb8ff" font-size="15">Companion PET · [64Cu]Cu-AKY-2519 · T½ 12.7 h</text>
      <text x="260" y="64" text-anchor="middle" fill="#3ee0c4" font-size="22">148–222 MBq · 4–6 mCi IV</text>
      <text x="260" y="92" text-anchor="middle" fill="#c5d8e3" font-size="13">Same miniprotein. Positron emitter. This PET is the gate, not the therapy.</text>
      <rect x="16" y="112" width="150" height="70" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="91" y="140" text-anchor="middle" fill="#7cb8ff" font-size="12">90–180 min</text>
      <text x="91" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">eligibility PET</text>
      <rect x="178" y="112" width="150" height="70" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="253" y="140" text-anchor="middle" fill="#3ee0c4" font-size="12">20–28 h</text>
      <text x="253" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">dosimetry n≈10</text>
      <rect x="340" y="112" width="164" height="70" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="422" y="140" text-anchor="middle" fill="#f5d76e" font-size="12">40–56 or 72–96 h</text>
      <text x="422" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">align with SPECT</text>
      <text x="36" y="210" fill="#e8f2f7" font-size="13">Positive = uptake greater than background in ≥1 lesion at 90–180 min.</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">Store upright, lead-shielded, 15–30 °C. Use within 48 h of end of production.</text>
    </svg>`,
    ac225: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#fb7185" font-size="15">Therapeutic IMP · [225Ac]Ac-AKY-2519 · T½ 9.9 d</text>
      <text x="260" y="64" text-anchor="middle" fill="#fb7185" font-size="22">Start 6 MBq IV bolus · Q4W</text>
      <text x="260" y="92" text-anchor="middle" fill="#c5d8e3" font-size="13">BOIN target DLT 25% · n=3 evaluable per level · no intra-patient escalate</text>
      <rect x="16" y="112" width="118" height="64" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="75" y="140" text-anchor="middle" fill="#7cb8ff" font-size="12">DL −1</text>
      <text x="75" y="160" text-anchor="middle" fill="#9bb3c2" font-size="11">4 MBq</text>
      <rect x="142" y="112" width="118" height="64" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="201" y="140" text-anchor="middle" fill="#3ee0c4" font-size="12">DL1</text>
      <text x="201" y="160" text-anchor="middle" fill="#e8f2f7" font-size="12">6 MBq</text>
      <rect x="268" y="112" width="118" height="64" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="327" y="140" text-anchor="middle" fill="#f5d76e" font-size="12">DL2</text>
      <text x="327" y="160" text-anchor="middle" fill="#e8f2f7" font-size="12">9 MBq</text>
      <rect x="394" y="112" width="110" height="64" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="449" y="140" text-anchor="middle" fill="#fb7185" font-size="12">DL3</text>
      <text x="449" y="160" text-anchor="middle" fill="#e8f2f7" font-size="12">12 MBq</text>
      <text x="36" y="202" fill="#e8f2f7" font-size="13">Up to 4 cycles. Extra 2 cycles only if dose ≤9 MBq and clinical benefit.</text>
      <text x="36" y="226" fill="#9bb3c2" font-size="12">Intermediates 7.5 / 10.5 MBq if 9 or 12 not tolerated. Store 15–30 °C, 96 h.</text>
    </svg>`,
    schema: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="22" text-anchor="middle" fill="#7cb8ff" font-size="14">Part 1 BOIN + backfill · Part 2 expansion at the RED</text>
      <rect x="16" y="40" width="150" height="64" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="91" y="66" text-anchor="middle" fill="#f5d76e" font-size="13">Part 1 esc</text>
      <text x="91" y="88" text-anchor="middle" fill="#c5d8e3" font-size="11">n ≤ 21 · 6/9/12</text>
      <rect x="184" y="40" width="150" height="64" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="259" y="66" text-anchor="middle" fill="#3ee0c4" font-size="13">Backfill</text>
      <text x="259" y="88" text-anchor="middle" fill="#c5d8e3" font-size="11">2 × 30 · ≥15 NSCLC</text>
      <rect x="352" y="40" width="152" height="64" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="428" y="66" text-anchor="middle" fill="#fb7185" font-size="13">Part 2</text>
      <text x="428" y="88" text-anchor="middle" fill="#c5d8e3" font-size="11">31 NSCLC + 40 basket</text>
      <text x="36" y="132" fill="#e8f2f7" font-size="13">PET+ at 90–180 min required. NSCLC: after PD-(L)1 and chemo.</text>
      <text x="36" y="156" fill="#c5d8e3" font-size="13">Escalation: ≤1 mCRPC or CRC per dose. Backfill: ≤3 mCRPC per level.</text>
      <text x="36" y="180" fill="#c5d8e3" font-size="13">Part 2 Cohort 2: no mCRPC, ≤20 of any one tumor type. BOP2 futility.</text>
      <text x="36" y="208" fill="#9bb3c2" font-size="12">n≈10 at select sites: Cu-64 PET ×3 + Ac-225 SPECT ×3 (Table 20).</text>
      <text x="36" y="236" fill="#fb7185" font-size="12">Teaching schematic — the signed page photograph is the source of truth.</text>
    </svg>`,
    dlt: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#fb7185" font-size="15">DLT · 4-week window after first Ac-225 · CTCAE v6</text>
      <rect x="16" y="40" width="240" height="100" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="136" y="64" text-anchor="middle" fill="#fb7185" font-size="13">Heme</text>
      <text x="136" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">G4 ANC or TCP >7 days</text>
      <text x="136" y="106" text-anchor="middle" fill="#e8f2f7" font-size="12">≥G3 TCP + bleed</text>
      <text x="136" y="126" text-anchor="middle" fill="#c5d8e3" font-size="12">Febrile neutropenia any grade</text>
      <rect x="268" y="40" width="236" height="100" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="386" y="64" text-anchor="middle" fill="#f5d76e" font-size="13">Non-heme / other</text>
      <text x="386" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">≥G3 (listed exceptions)</text>
      <text x="386" y="106" text-anchor="middle" fill="#e8f2f7" font-size="12">Hy's law · any G5 not PD</text>
      <text x="386" y="126" text-anchor="middle" fill="#c5d8e3" font-size="12">>14 d delay or stop</text>
      <text x="36" y="168" fill="#e8f2f7" font-size="13">Escalate if DLT rate ≤0.197. De-escalate if >0.298. Stay if 1/3.</text>
      <text x="36" y="192" fill="#c5d8e3" font-size="13">Medical Expert must agree before an AE is called a DLT.</text>
      <text x="36" y="220" fill="#9bb3c2" font-size="12">Delay ≤2 weeks OK; longer needs Medical Monitor. No intra-patient escalate.</text>
    </svg>`,
    soa: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="14">Visit spine · screen 28 d · Cu-64 PET · C1D1 Ac-225 Q4W</text>
      <text x="36" y="58" fill="#e8f2f7" font-size="13">Screen ≤28 d from ICF. Eligibility PET at 90–180 min. Then Day 1 therapy.</text>
      <text x="36" y="82" fill="#c5d8e3" font-size="13">Cycles Q4W × 4. Disease CT (bone scan if mCRPC) every 8 ± 1 weeks.</text>
      <text x="36" y="110" fill="#e8f2f7" font-size="13">PK: Cu-64 blood/urine at screen. Ac-225 C1 intensive, later cycles sparse.</text>
      <text x="36" y="134" fill="#c5d8e3" font-size="13">Dosimetry n≈10: PET 90–180 min / 20–28 h / 40–56 or 72–96 h.</text>
      <text x="36" y="158" fill="#c5d8e3" font-size="13">SPECT 20–28 h / 40–56 or 72–96 h / 140–148 h after C1 Ac-225.</text>
      <text x="36" y="186" fill="#9bb3c2" font-size="12">Follow-up to 5 years. EOT 30 days after last Ac-225. AESIs in LTFU.</text>
      <text x="36" y="214" fill="#f5d76e" font-size="12">Tables 7–8 on the protocol page are the source of truth for windows.</text>
      <text x="36" y="238" fill="#9bb3c2" font-size="12">Confirm scan ≥4 weeks after CR/PR. Investigator RECIST / PCWG3.</text>
    </svg>`
  };
"""

BOOT = r'''

(function bootP02Aky() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p02aky: COURSE not ready");
    return;
  }
  const MOD_ID = "aky2519protocol";
  function isMod(id) {
    const s = String(id || "").toLowerCase();
    return s === "aky2519protocol" || s === "p02aky" || s === "p02" || s === "aky2519" || s === "aky-2519" || s === "bactinium" || s === "bactinium-2" || s === "b7h3" || s === "aky";
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== MOD_ID && m.id !== "p02aky");
  const betAt = COURSE.modules.findIndex(m => m.id === "bet121protocol");
  if (betAt >= 0) COURSE.modules.splice(betAt + 1, 0, MODULE02);
  else COURSE.modules.push(MODULE02);

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
      LiveHero.items = [item].concat(rest).slice(0, 16);
      LiveHero.i = 0;
      if (typeof LiveHero.paint === "function") LiveHero.paint();
    }
    const still = document.getElementById("lessonStill");
    if (still) {
      still.src = src;
      still.alt = lesson.cap || "Protocol page";
      still.style.display = "block";
      still.style.opacity = "1";
      still.style.zIndex = "6";
      still.style.objectFit = "contain";
      still.style.background = "#fff";
    }
    try { if (typeof paintAtlasFilm === "function") paintAtlasFilm(); } catch (e) {}
  }
  function keepPinned() { setTimeout(pinProtocolPage, 40); setTimeout(pinProtocolPage, 400); }

  if (typeof depictParagraph === "function") {
    const origDepict = depictParagraph;
    depictParagraph = function (text) {
      const r = origDepict(text);
      pinProtocolPage();
      return r;
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
  const extras = P02V;
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
        const map = { aky: "psma", b7h3: "psma", cu64: "suv", ac225: "psma", schema: "talk", dlt: "alara", soa: "talk" };
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
      if (!pager || document.getElementById("startP02Aky")) return;
      const b = document.createElement("button");
      b.id = "startP02Aky";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open P02 BActinium-2 →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
    };
  }
  if (typeof Theater !== "undefined") {
    if (Theater.clips) {
      Theater.clips.aky = Theater.clips.pet || Theater.clips.talk;
      Theater.clips.b7h3 = Theater.clips.lung || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.cu64 = Theater.clips.pet || Theater.clips.talk;
      Theater.clips.ac225 = Theater.clips.therapy || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.schema = Theater.clips.talk || Theater.clips.lecture;
      Theater.clips.dlt = Theater.clips.safety || Theater.clips.talk;
      Theater.clips.soa = Theater.clips.talk || Theater.clips.lecture;
    }
    if (typeof Theater.setContext === "function") {
      const origCtx = Theater.setContext.bind(Theater);
      Theater.setContext = function (mod, lesson) {
        this.lesson = lesson;
        this.plateKey = (lesson && lesson.visual) || this.plateKey;
        return origCtx(mod, lesson);
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
    "title": "How to use this P02 · BActinium-2 AKY-2519 protocol audiobook",
    "audio": [
        "This module is P 02 — a page-by-page read of Aktis Oncology protocol A K Y-2519-02, version 1.0, dated 08 April 2026. Study nickname BActinium-2.",
        "Investigational products: copper-64 A K Y-2519, the B 7-H 3 imaging PET, and actinium-225 A K Y-2519, the B 7-H 3 alpha therapy. Same 49 amino-acid miniprotein. DOTA-P E G 4 chelator. Different radionuclide.",
        "Phase 1 b, two parts, open-label. About 152 adults with B 7-H 3 imaging-positive solid tumors: non-small cell lung, extensive-stage small cell lung, m C R P C, head and neck squamous, esophageal squamous, and colorectal.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page.",
        "This is a teaching walk-through of a theranostic alpha-miniprotein protocol. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence. Do not dose or image from this module.",
        "Work page by page. One hundred eighteen protocol pages, plus this intro. After the last page, take the module quiz — B 7-H 3 versus P S M A, copper-64 PET gate, 6 megabecquerel start, and the 4-week D L T window.",
    ],
    "chips": ["P02", "118 pages", "Web speech", "Protocol page on screen", "Ac-225 + Cu-64"],
    "visual": "aky",
    "image": "assets/protocol/aky/a001.jpg",
    "cap": "P02 cover — BActinium-2 [225Ac]Ac-AKY-2519 B7-H3, Aktis",
    "pearls": [
        "P02 is Aktis AKY-2519-02 — same play, pause, speed, atlas, and live-image dock as BET-121 and P1239.",
        "Cu-64 PET ([64Cu]Cu-AKY-2519, 4–6 mCi) is the imaging gate at 90–180 min. Ac-225 is the therapy, 6 MBq Q4W to start.",
        "Teaching copy of a confidential sponsor protocol. Not affiliated with Aktis. Do not image or dose from this module.",
    ],
}

SCHEMA16 = (
    "Section 1.2 Schema, page 16. This page is a figure. "
    "Part 1 dose escalation in B 7-H 3 imaging-positive tumors, n up to 21. "
    "Imaging: copper-64 A K Y-2519 PET at 90 to 180 minutes, with optional 20 to 28 hour and 40 to 56 or 72 to 96 hour scans, plus actinium-225 SPECT at 20 to 28 hours, 40 to 56 or 72 to 96 hours, and 140 to 148 hours. "
    "Therapy: actinium-225 A K Y-2519 every 4 weeks. Dose level 1 is 6 megabecquerels. Dose level 2 is 9. Dose level 3 is 12. Intermediate 7.5 if 9 is not tolerated. Intermediate 10.5 if 12 is not tolerated. Dose minus 1 is 4 megabecquerels. "
    "Cycle 1 has a 4-week dose-limiting toxicity window. Then cycles 2, 3, and 4, each 4 weeks apart. Cycles 5 and 6 only if the patient is deriving benefit and the dose is 9 megabecquerels or less. "
    "Part 1 backfill, n up to 60, same imaging then therapy at two selected dose levels, up to 30 each, including people rolled over from escalation. "
    "Part 2 dose expansion at the recommended expansion dose. Cohort 1, non-small cell lung cancer, n equals 31. Cohort 2, other B 7-H 3 imaging-positive solid tumors, n equals 40. No m C R P C in Cohort 2, and no more than 20 of any one tumor type. "
    "About 10 patients at select sites get both the copper-64 PET series and the actinium-225 SPECT series for dosimetry."
)

QUIZ = [
    {
        "q": "What does AKY-2519 target, and what kind of molecule is it?",
        "choices": [
            "PSMA on a small-molecule urea ligand, same as Pluvicto",
            "B7-H3 (CD276) on a synthetic 49-amino-acid miniprotein with a DOTA-PEG4 spacer",
            "DLL3 on a 100 kDa spFv-Fc antibody",
            "SSTR2 with DOTATATE"
        ],
        "a": 1,
        "why": "§4.1.2 / §8.1. Not an antibody and not PSMA. Same scaffold is labeled with Cu-64 or Ac-225.",
    },
    {
        "q": "What is [64Cu]Cu-AKY-2519 used for in this protocol?",
        "choices": [
            "The therapeutic alpha dose under a second name",
            "Companion B7-H3 PET to select imaging-positive patients (uptake > background at 90–180 min); 148–222 MBq (4–6 mCi)",
            "An FDG scan on the same day as actinium",
            "A Ga-68 PSMA staging scan"
        ],
        "a": 1,
        "why": "Synopsis / Table 20. Cu-64 T½ 12.7 h. Named-patient Ga-68 / Lu-177 experience is background, not this trial's IMP pair.",
    },
    {
        "q": "Starting therapeutic radioactivity and schedule?",
        "choices": [
            "12 MBq flat Q6W, copied from VECTRA PSMA",
            "6 MBq IV bolus every 4 weeks, BOIN 6 → 9 → 12 MBq (DL−1 = 4; intermediates 7.5 / 10.5)",
            "0.75 µCi/kg on 3 mg antibody, copied from P1239",
            "7.40 GBq of lutetium"
        ],
        "a": 1,
        "why": "§1.1 / §4.3.3 / Table 4. Target DLT rate 25%. Escalate if observed DLT ≤0.197; de-escalate if >0.298.",
    },
    {
        "q": "Who can enroll?",
        "choices": [
            "Treatment-naïve limited-stage SCLC heading to chemoradiation",
            "Adults with B7-H3 PET-positive locally advanced or metastatic NSCLC, ES-SCLC, mCRPC, HNSCC, ESCC, or CRC after standard therapy; ECOG 0–1",
            "Any NSCLC with an EGFR mutation regardless of PET",
            "mCRPC after two taxanes with no imaging gate"
        ],
        "a": 1,
        "why": "§5.1 / inclusion 3, 11–13. NSCLC must have progressed on PD-(L)1 and chemotherapy (concurrent or separate).",
    },
    {
        "q": "A DLT in this protocol includes which heme finding?",
        "choices": [
            "Any Grade 1 anemia",
            "Grade 4 neutropenia or thrombocytopenia lasting more than 7 days, ≥G3 TCP with clinically significant bleeding, or febrile neutropenia of any grade",
            "Resolved Grade 1 dyspnea",
            "A pleural plaque from old asbestos"
        ],
        "a": 1,
        "why": "Table 1. Also ≥G3 non-heme (with listed exceptions), Hy's law, >14-day delay or permanent stop, any death not clearly PD.",
    },
    {
        "q": "How many cycles of Ac-225?",
        "choices": [
            "A single injection ever",
            "Up to 4 cycles ≥4 weeks apart; 2 extra cycles only if dose ≤9 MBq and clinical benefit (SD, objective response, or mCRPC PSA benefit without radiographic PD)",
            "Weekly until progression",
            "Six mandatory cycles for everyone"
        ],
        "a": 1,
        "why": "Synopsis duration of treatment. Intra-participant dose escalation is not permitted. Delay ≤2 weeks; longer needs Medical Monitor.",
    },
    {
        "q": "Which prior therapies are hard exclusions?",
        "choices": [
            "Any history of surgery",
            "Any prior radioligand therapy, and any prior B7-H3 targeted therapy",
            "Prior checkpoint inhibitor (required for NSCLC, not an exclusion)",
            "A flu shot last year"
        ],
        "a": 1,
        "why": "Exclusion 4–5. Also investigational agent or cytotoxic / targeted / IO / EBRT within 28 days or 5 half-lives (palliative RT ≥2 weeks).",
    },
    {
        "q": "eGFR gate at entry?",
        "choices": [
            "No renal rule",
            "≥60 mL/min/1.73 m² by the institutional standard",
            "≥50, copied from P1239 DLL3",
            "Dialysis required"
        ],
        "a": 1,
        "why": "Inclusion 5. Marrow: Hb ≥9, ANC ≥1.5, platelets ≥100, no transfusion or G-CSF in 7 days.",
    },
    {
        "q": "Part 2 expansion cohorts?",
        "choices": [
            "670 randomised 1:1 vs cabazitaxel",
            "Cohort 1: up to 31 B7-H3 PET+ NSCLC. Cohort 2: up to 40 other PET+ solid tumors, no mCRPC, ≤20 of any one type. BOP2 futility.",
            "Single-patient compassionate use",
            "Phase 3 vs cisplatin in limited-stage SCLC"
        ],
        "a": 1,
        "why": "Synopsis / §1.1. Part 1 RED patients who fit a cohort count toward Part 2 n. Futility: 0–1 responses in first 16 (Cohort 1) or 20 (Cohort 2).",
    },
    {
        "q": "Dosimetry imaging for the ~10 patients at select sites?",
        "choices": [
            "A chest radiograph only",
            "Cu-64 PET at 90–180 min, 20–28 h, and 40–56 or 72–96 h; Ac-225 SPECT at 20–28 h, 40–56 or 72–96 h, and 140–148 h (windows aligned)",
            "Bone scan only",
            "Mammography"
        ],
        "a": 1,
        "why": "Table 20. Everyone else only needs the 90–180 min Cu-64 PET for eligibility. ≤4 of the 10 may share one tumor type.",
    },
]

HEADER_RE = re.compile(
    r"Aktis Oncology\s+\[?225Ac\]?Ac-AKY-2519\s+Protocol AKY-2519-02 v1\.0\s+08 APR 2026",
    re.I,
)
PAGE_RE = re.compile(r"Confidential Information of Aktis Oncology\s+\d+", re.I)

SPEAK = [
    (r"\[225Ac\]Ac-AKY-2519", "actinium-225 A K Y-2519"),
    (r"\[64Cu\]Cu-AKY-2519", "copper-64 A K Y-2519"),
    (r"\[68Ga\]Ga-AKY-2519", "gallium-68 A K Y-2519"),
    (r"\[177Lu\]Lu-AKY-2519", "lutetium-177 A K Y-2519"),
    (r"\[225Ac\]Ac-AKY-3212", "actinium-225 A K Y-3212"),
    (r"AKY-2519-02", "A K Y-2519-02"),
    (r"AKY-2519", "A K Y-2519"),
    (r"BActinium-2", "BActinium-2"),
    (r"B7-H3", "B 7-H 3"),
    (r"\bCD276\b", "C D 276"),
    (r"\bNSCLC\b", "non-small cell lung cancer"),
    (r"\bES-SCLC\b", "extensive-stage small cell lung cancer"),
    (r"\bSCLC\b", "small cell lung cancer"),
    (r"\bmCRPC\b", "m C R P C"),
    (r"\bHNSCC\b", "head and neck squamous cell carcinoma"),
    (r"\bESCC\b", "esophageal squamous cell carcinoma"),
    (r"\bCRC\b", "colorectal cancer"),
    (r"Ac-225", "actinium-225"),
    (r"²²⁵Ac", "actinium-225"),
    (r"Cu-64", "copper-64"),
    (r"⁶⁴Cu", "copper-64"),
    (r"\bBOIN\b", "B O I N"),
    (r"\bBOP2\b", "B O P 2"),
    (r"\bRED\b", "recommended expansion dose"),
    (r"\bMTD\b", "maximum tolerated dose"),
    (r"\bMAD\b", "maximum administered dose"),
    (r"\bSRC\b", "safety review committee"),
    (r"\bDLT\b", "dose-limiting toxicity"),
    (r"\bRECIST\b", "R E C I S T"),
    (r"\bPCWG3\b", "P C W G 3"),
    (r"\bECOG\b", "E C O G"),
    (r"\beGFR\b", "E G F R"),
    (r"\bCTCAE\b", "C T C A E"),
    (r"\bTEAE\b", "T E A E"),
    (r"\bAESI\b", "A E S I"),
    (r"\bORR\b", "objective response rate"),
    (r"\bDOR\b", "duration of response"),
    (r"\bPFS\b", "progression-free survival"),
    (r"\bOS\b", "overall survival"),
    (r"\bADA\b", "anti-drug antibody"),
    (r"\bICF\b", "informed consent form"),
    (r"\bEOT\b", "end of treatment"),
    (r"\bEBRT\b", "external beam radiation"),
    (r"\bQ4W\b", "every 4 weeks"),
    (r"\bPD-\(L\)1\b", "P D L 1"),
    (r"\bPD-L1\b", "P D L 1"),
    (r"DOTA-PEG4", "DOTA P E G 4"),
    (r"\bDOTA\b", "DOTA"),
    (r"\bµCi\b", "microcuries"),
    (r"\bmCi\b", "millicuries"),
    (r"\bMBq\b", "megabecquerels"),
    (r"\bGBq\b", "gigabecquerels"),
    (r"\bPET\b", "PET"),
    (r"\bSPECT\b", "SPECT"),
    (r"\bPK\b", "pharmacokinetics"),
    (r"\bIND\b", "I N D"),
]


def clean_text(raw: str) -> str:
    t = raw.encode("utf-8", "replace").decode("utf-8")
    t = t.replace("\u0000", "")
    t = re.sub(r"(\w)-\n(\w)", r"\1\2", t)
    t = HEADER_RE.sub(" ", t)
    t = PAGE_RE.sub(" ", t)
    t = t.replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " ")
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
        if re.fullmatch(r"Aktis Oncology|Confidential Information of Aktis Oncology|\[225Ac\]Ac-AKY-2519|Protocol AKY-2519-02 v1\.0|08 APR 2026", s, re.I):
            continue
        if re.fullmatch(r"\d{1,3}", s):
            continue
        lines.append(s)
    t = " ".join(lines)
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
    return [p for p in parts if p][:24]


def title_from(n: int, cleaned: str) -> str:
    SPECIAL = {
        1: "Cover · BActinium-2 · Ac-225 / Cu-64 AKY-2519 · B7-H3",
        2: "Sponsor signature · Tiffany Wang · 09 Apr 2026",
        3: "Investigator agreement",
        4: "Synopsis · Phase 1b two-part design",
        5: "Backfill, RED, Part 2 cohorts, SPECT subset",
        6: "Objectives · Part 1 primary / secondary / exploratory",
        7: "Part 2 objectives · n and sites",
        8: "Dose schema 6 / 9 / 12 MBq · inclusion 1–8",
        9: "Contraception · NSCLC / other / mCRPC inclusion",
        10: "Exclusion · prior RLT and B7-H3 · DLT intro",
        11: "Table 1 DLT · Cu-64 PK times",
        12: "Ac-225 PK · dosimetry 4–6 mCi Cu-64",
        13: "BOIN Table 4 · BOP2 start",
        14: "BOP2 toxicity stop · efficacy stats",
        15: "Sample size · ROSE backfill · BOP2 power",
        16: "Figure · Part 1 / backfill / Part 2 schema",
        17: "Table 7 · SoA Part 1 dose escalation and backfill",
        22: "Table 8 · SoA Part 2 dose expansion",
        26: "Table of contents",
        33: "Abbreviations",
        38: "B7-H3 (CD276) and AKY-2519 miniprotein",
        41: "Named-patient Lu-177 / Ga-68 dosimetry",
        48: "Starting-dose rationale · kidney 0.48 RBE5Gy/MBq",
        63: "IMP · 49-aa DOTA-PEG4 · Figures 10–11",
        66: "Prep, storage 15–30 °C, 96 h / 48 h",
        67: "Dose regimen, DLT, continuation",
        84: "Table 20 · Cu-64 PET and Ac-225 SPECT clocks",
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
    if n in (1, 2, 4, 63):
        return "aky"
    if n in (16, 55):
        return "schema"
    if n in (17, 18, 19, 20, 21, 22, 23, 24, 25):
        return "soa"
    if n in (10, 11, 67):
        return "dlt"
    if n in (8, 13, 48):
        return "ac225"
    if n in (12, 41, 84):
        return "cu64"
    if n == 38 or "b7-h3" in t and n < 45:
        return "b7h3"
    if "schema" in t:
        return "schema"
    if "dlt" in t or "dose-limiting" in t:
        return "dlt"
    if "64cu" in t or "copper-64" in t or "cu-aky" in t:
        return "cu64"
    if "225ac" in t or "actinium" in t:
        return "ac225"
    return "aky"


def pearls_for(n: int) -> list[str]:
    SPECIAL = {
        1: [
            "Aktis BActinium-2: Ac-225 B7-H3 miniprotein in imaging-positive solid tumors.",
            "Companion Cu-64 PET is [64Cu]Cu-AKY-2519. Teaching copy only.",
        ],
        4: [
            "Part 1 BOIN 6 / 9 / 12 MBq, n≤21 + two backfill levels up to 30 each.",
            "PET+ at 90–180 min required. NSCLC after PD-(L)1 and chemo.",
        ],
        8: [
            "Start 6 MBq IV bolus. Extra 2 cycles only if ≤9 MBq and clinical benefit.",
            "eGFR ≥60. Measurable disease except mCRPC. ECOG 0–1.",
        ],
        11: [
            "Heme DLT: G4 ANC or platelets >7 days; ≥G3 TCP with bleed; febrile neutropenia.",
            "4-week DLT window after first Ac-225. CTCAE v6.",
        ],
        16: [
            "Schema: Cu-64 PET then Ac-225 Q4W. Part 2 = 31 NSCLC + 40 basket (no mCRPC).",
            "n≈10 get paired PET/SPECT dosimetry. Photograph is the source of truth.",
        ],
        38: [
            "B7-H3 = CD276. 49-aa synthetic miniprotein, not an antibody.",
            "DOTA holds Cu-64 (T½ 12.7 h) or Ac-225 (T½ 9.9 d).",
        ],
        63: [
            "C-terminal amide + DOTA-PEG4 on the amino terminus.",
            "Not PSMA, not DLL3, not tarlatamab. Same chelator, two nuclides.",
        ],
        84: [
            "Table 20: PET 90–180 min / 20–28 h / 40–56 or 72–96 h.",
            "SPECT 20–28 h / 40–56 or 72–96 h / 140–148 h. Align windows.",
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
        dest = IMG_DIR / f"a{i+1:03d}.jpg"
        pix.save(str(dest), jpg_quality=72)
        if (i + 1) % 25 == 0:
            print(f"  rendered {i+1}/{doc.page_count}")
    print(f"rendered {doc.page_count} jpegs → {IMG_DIR}")


def main() -> None:
    if not PDF.exists():
        raise SystemExit(f"missing {PDF}")
    PDF_COPY.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(PDF, PDF_COPY)
    doc = fitz.open(PDF)
    if doc.page_count != N_PAGES:
        print(f"WARN page_count={doc.page_count} expected {N_PAGES}")
    render_pages(doc)

    lessons = [INTRO]
    for i in range(doc.page_count):
        n = i + 1
        if n == 16:
            cleaned = SCHEMA16
        else:
            raw = doc[i].get_text() or ""
            cleaned = clean_text(raw)
            if len(cleaned) < 80:
                cleaned = SCHEMA16 if n == 16 else cleaned
        spoken = speakify(cleaned)
        audio = chunk_audio(spoken)
        title = title_from(n, cleaned)
        lessons.append({
            "title": f"Page {n} of {doc.page_count} · {title}",
            "audio": audio,
            "chips": ["P02", f"p{n}/{doc.page_count}", "B7-H3 Ac-225"],
            "visual": vis_for(n, cleaned),
            "image": f"assets/protocol/aky/a{n:03d}.jpg",
            "cap": f"Protocol page {n} of {doc.page_count} — AKY-2519-02 v1.0",
            "pearls": pearls_for(n),
        })

    module = {
        "id": MOD_ID,
        "num": "P02",
        "title": "P02 · BActinium-2 protocol · Ac-225 / Cu-64 AKY-2519 B7-H3",
        "time": "~4 h spoken",
        "weight": "Entire signed protocol",
        "atlasKey": "nuclear",
        "lessons": lessons,
        "quiz": QUIZ,
    }
    header = (
        "/* Aktis BActinium-2 / AKY-2519-02 / P02 Ac-225 B7-H3 protocol audiobook.\n"
        "   Loads after p01bet.js. Inserts after BET-121. Mutates window.COURSE. */\n\n"
    )
    js = header + SVGS + "\n  const MODULE02 = " + json.dumps(module, ensure_ascii=False, indent=2) + ";\n" + BOOT
    OUT.write_text(js)
    print(f"wrote {OUT} bytes={OUT.stat().st_size} lessons={len(lessons)} quiz={len(QUIZ)}")


if __name__ == "__main__":
    main()
