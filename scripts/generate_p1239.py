#!/usr/bin/env python3
"""Emit public/studio/p1239.js — Janssen JNJ-99526687 Ac-225 DLL3 SCLC protocol audiobook."""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

import pymupdf as fitz

PDF = Path(
    "/workspace/attachments/A Phase 1 Study of JNJ-99526687, an Actinium-225-Labeled Antibody Targeting Delta-Like Ligand 3 for Small Cell Lung Cancer.pdf"
)
OUT = Path("/workspace/public/studio/p1239.js")
IMG_DIR = Path("/workspace/public/studio/assets/protocol/jnj")
PDF_COPY = Path("/workspace/public/studio/assets/protocol/JNJ-99526687-SCC1001-v1.0.pdf")

N_PAGES = 19
MOD_ID = "p1239"

SVGS = r"""
  const P1239V = {
    jnj: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="15">P1239 · JNJ-99526687 · Ac-225 DLL3 antibody · ES-SCLC</text>
      <rect x="16" y="38" width="488" height="32" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="59" text-anchor="middle" fill="#e8f2f7" font-size="12">Janssen · 99526687SCC1001 · Protocol Elements · 08 June 2026 · v1.0</text>
      <rect x="16" y="82" width="232" height="108" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="132" y="108" text-anchor="middle" fill="#f5d76e" font-size="13">Imaging · Zr-89</text>
      <text x="132" y="130" text-anchor="middle" fill="#e8f2f7" font-size="13">JNJ-99526726</text>
      <text x="132" y="150" text-anchor="middle" fill="#c5d8e3" font-size="12">2 mCi IV · mass 3–20 mg</text>
      <text x="132" y="170" text-anchor="middle" fill="#9bb3c2" font-size="11">serial PET 0–216 h</text>
      <rect x="272" y="82" width="232" height="108" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="388" y="108" text-anchor="middle" fill="#fb7185" font-size="13">Therapy · Ac-225</text>
      <text x="388" y="130" text-anchor="middle" fill="#e8f2f7" font-size="13">JNJ-99526687</text>
      <text x="388" y="150" text-anchor="middle" fill="#c5d8e3" font-size="12">start 0.75 µCi/kg</text>
      <text x="388" y="170" text-anchor="middle" fill="#9bb3c2" font-size="11">7–10 d after imaging</text>
      <text x="260" y="214" text-anchor="middle" fill="#c5d8e3" font-size="12">FIH open-label BOIN · ~100 adults · 60 escalation + 40 expansion</text>
      <text x="260" y="238" text-anchor="middle" fill="#9bb3c2" font-size="12">Same DLL3 antibody: DFO-Zr-89 to see it, macropa-Ac-225 (JNJ-95981860) to treat it</text>
      <text x="260" y="262" text-anchor="middle" fill="#9bb3c2" font-size="11">Teaching copy of a confidential sponsor protocol. Do not dose from this module.</text>
    </svg>`,
    dll3: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">DLL3 · delta-like ligand 3 · SCLC target</text>
      <circle cx="130" cy="128" r="52" fill="#163746" stroke="#fb7185" stroke-width="3"/>
      <text x="130" y="122" text-anchor="middle" fill="#fb7185" font-size="13">SCLC</text>
      <text x="130" y="142" text-anchor="middle" fill="#c5d8e3" font-size="11">DLL3+</text>
      <rect x="210" y="92" width="120" height="72" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="270" y="122" text-anchor="middle" fill="#3ee0c4" font-size="12">spFv-Fc</text>
      <text x="270" y="144" text-anchor="middle" fill="#9bb3c2" font-size="11">~100 kDa bivalent</text>
      <rect x="360" y="92" width="132" height="72" rx="10" fill="#1a2a14" stroke="#fb7185"/>
      <text x="426" y="122" text-anchor="middle" fill="#fb7185" font-size="12">Ac-225 α</text>
      <text x="426" y="144" text-anchor="middle" fill="#9bb3c2" font-size="11">dsDNA breaks</text>
      <text x="36" y="198" fill="#e8f2f7" font-size="13">Little normal-tissue DLL3. Tarlatamab (IMDELLTRA) already FDA-approved TCE.</text>
      <text x="36" y="222" fill="#c5d8e3" font-size="12">This construct is an alpha-emitting antibody, not a T-cell engager and not tarlatamab.</text>
      <text x="36" y="246" fill="#9bb3c2" font-size="12">Internalizes after DLL3 bind → Ac-225 decay in the tumor cell.</text>
    </svg>`,
    zr89: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#7cb8ff" font-size="15">Companion PET · JNJ-99526726 · zirconium-89</text>
      <text x="260" y="64" text-anchor="middle" fill="#3ee0c4" font-size="24">2 mCi IV · same antibody</text>
      <text x="260" y="92" text-anchor="middle" fill="#c5d8e3" font-size="13">Deferoxamine chelator · not the Ac-225 product</text>
      <rect x="16" y="112" width="118" height="70" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="75" y="140" text-anchor="middle" fill="#7cb8ff" font-size="12">0–4 h</text>
      <text x="75" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">early blood</text>
      <rect x="142" y="112" width="118" height="70" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="201" y="140" text-anchor="middle" fill="#3ee0c4" font-size="12">24 ± 6 h</text>
      <text x="201" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">distribution</text>
      <rect x="268" y="112" width="118" height="70" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="327" y="140" text-anchor="middle" fill="#f5d76e" font-size="12">42–78 h</text>
      <text x="327" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">tumor</text>
      <rect x="394" y="112" width="110" height="70" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="449" y="140" text-anchor="middle" fill="#fb7185" font-size="12">120–216 h</text>
      <text x="449" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">late / dosimetry</text>
      <text x="36" y="210" fill="#e8f2f7" font-size="13">Start mass 3 mg, SET may escalate to 20 mg. Repeat PET if blood pool ≫ tumor.</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">Zr-89 T½ ~78 h matches antibody kinetics. This PET is the gate, not the therapy.</text>
    </svg>`,
    ac225: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#fb7185" font-size="15">Therapeutic IMP · JNJ-99526687 · actinium-225</text>
      <text x="260" y="64" text-anchor="middle" fill="#fb7185" font-size="22">0.75 µCi/kg start · 3 mg antibody</text>
      <text x="260" y="92" text-anchor="middle" fill="#c5d8e3" font-size="13">IV 7–10 days after the Zr-89 imaging dose</text>
      <text x="36" y="128" fill="#e8f2f7" font-size="13">BOIN escalation on radioactivity (µCi). 42-day DLT window (marrow nadir).</text>
      <text x="36" y="152" fill="#c5d8e3" font-size="13">Later cycles ≥ 8 weeks if retreatment criteria met. SPECT after Ac-225 for dosimetry.</text>
      <text x="36" y="176" fill="#c5d8e3" font-size="13">Absorbed-dose estimates vs EBRT-equivalent organ thresholds. SET may drop later doses.</text>
      <text x="36" y="204" fill="#9bb3c2" font-size="12">Not tarlatamab. Not lutetium. Alpha from Ac-225 after DLL3 internalization.</text>
      <text x="36" y="228" fill="#9bb3c2" font-size="12">Cynomolgus start: 0.75 µCi/kg on 3 mg. Do not copy VECTRA 12 MBq PSMA numbers.</text>
    </svg>`,
    schema: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="22" text-anchor="middle" fill="#7cb8ff" font-size="14">Part 1 mass/dose opt · Part 2 expansion in ES-SCLC</text>
      <rect x="16" y="40" width="150" height="64" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="91" y="66" text-anchor="middle" fill="#f5d76e" font-size="13">Day −7</text>
      <text x="91" y="88" text-anchor="middle" fill="#c5d8e3" font-size="11">Zr-89 PET 2 mCi</text>
      <rect x="184" y="40" width="150" height="64" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="259" y="66" text-anchor="middle" fill="#fb7185" font-size="13">Day 1</text>
      <text x="259" y="88" text-anchor="middle" fill="#c5d8e3" font-size="11">Ac-225 therapy</text>
      <rect x="352" y="40" width="152" height="64" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="428" y="66" text-anchor="middle" fill="#3ee0c4" font-size="13">SPECT</text>
      <text x="428" y="88" text-anchor="middle" fill="#c5d8e3" font-size="11">Ac-225 dosimetry</text>
      <text x="36" y="132" fill="#e8f2f7" font-size="13">BOIN: 50 → 100 → X µCi Ac-225 after mass is optimized (n=8–12 at 3 mg / 2 mCi Zr-89).</text>
      <text x="36" y="156" fill="#c5d8e3" font-size="13">pRP2D then Dose Expansion, ~20–40 additional ES-SCLC. Total ~100.</text>
      <text x="36" y="184" fill="#9bb3c2" font-size="12">CT C/A/P/brain (or MRI) Q6W first 24 weeks, then Q12W. RECIST 1.1.</text>
      <text x="36" y="212" fill="#9bb3c2" font-size="12">Echo/MUGA and PFTs at screen. Pregnancy test if childbearing potential.</text>
      <text x="36" y="240" fill="#fb7185" font-size="12">Teaching schematic — the signed page photograph is the source of truth.</text>
    </svg>`,
    dlt: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#fb7185" font-size="15">DLT · 42-day window after first Ac-225 · CTCAE v5</text>
      <rect x="16" y="40" width="240" height="100" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="136" y="64" text-anchor="middle" fill="#fb7185" font-size="13">Heme</text>
      <text x="136" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">G4 ANC >5 d or febrile</text>
      <text x="136" y="106" text-anchor="middle" fill="#e8f2f7" font-size="12">G3 TCP + bleed / G4 TCP</text>
      <text x="136" y="126" text-anchor="middle" fill="#c5d8e3" font-size="12">Any Grade 5</text>
      <rect x="268" y="40" width="236" height="100" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="386" y="64" text-anchor="middle" fill="#f5d76e" font-size="13">Non-heme</text>
      <text x="386" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">≥ G2 pneumonitis / ILD</text>
      <text x="386" y="106" text-anchor="middle" fill="#e8f2f7" font-size="12">≥ G3 (with listed exceptions)</text>
      <text x="386" y="126" text-anchor="middle" fill="#c5d8e3" font-size="12">Hy's law liver injury</text>
      <text x="36" y="168" fill="#e8f2f7" font-size="13">Stagger ≥ 1 week between first patient on a new dose and the next patient.</text>
      <text x="36" y="192" fill="#c5d8e3" font-size="13">SET reviews every AE in the DLT window plus the cumulative safety profile.</text>
      <text x="36" y="220" fill="#9bb3c2" font-size="12">Retreatment: off transfusions 7 d, Hb ≥9, ANC ≥1.5, platelets ≥100, SpO2 ≥92%.</text>
      <text x="36" y="244" fill="#9bb3c2" font-size="12">Chest CT must not show unresolved pneumonitis / ILD unless another cause is proven.</text>
    </svg>`,
    soa: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="14">Visit spine · screen → imaging → Day 1 Ac-225 → Q4W</text>
      <text x="36" y="58" fill="#e8f2f7" font-size="13">Screen ≤30 d. Zr-89 PET 7–10 d before Dose 1. Day −7 labs/eligibility.</text>
      <text x="36" y="82" fill="#c5d8e3" font-size="13">Day 1 Ac-225. Then Day 8, 15, 29, 43, 50. Q4W until next dose. EOT. Phone Q12W.</text>
      <text x="36" y="110" fill="#e8f2f7" font-size="13">PK: antibody serum + radioactivity serum. Immunogenicity. Optional biopsy.</text>
      <text x="36" y="134" fill="#c5d8e3" font-size="13">Echo/MUGA and PFT at screen; PFT again around Day 50 / later doses.</text>
      <text x="36" y="162" fill="#9bb3c2" font-size="12">Disease CT (or MRI) every 6 ± 1 weeks for 24 weeks, then every 12 ± 1 weeks.</text>
      <text x="36" y="186" fill="#9bb3c2" font-size="12">AEs from ICF through 30 days after last study drug or next anticancer therapy.</text>
      <text x="36" y="214" fill="#f5d76e" font-size="12">Selected cohorts get serial Zr-89 PET. SPECT for Ac-225 on selected patients.</text>
      <text x="36" y="238" fill="#9bb3c2" font-size="12">Tables 1–2 on the protocol page are the source of truth for windows.</text>
    </svg>`
  };
"""

BOOT = r'''

(function bootP1239() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p1239: COURSE not ready");
    return;
  }
  const MOD_ID = "p1239";
  const ALIASES = { p1239: 1, P1239: 1, jnj: 1, JNJ: 1, "99526687": 1, dll3: 1, DLL3: 1, SCC1001: 1 };
  function isMod(id) {
    const s = String(id || "").toLowerCase();
    return !!ALIASES[id] || s === "p1239" || s === "jnj" || s === "99526687" || s === "dll3";
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== MOD_ID && m.id !== "jnj");
  COURSE.modules.unshift(MODULE1239);

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
  const extras = P1239V;
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
        const map = { jnj: "psma", dll3: "psma", zr89: "suv", ac225: "psma", schema: "talk", dlt: "alara", soa: "talk" };
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
      if (!pager || document.getElementById("startP1239")) return;
      const b = document.createElement("button");
      b.id = "startP1239";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open P1239 protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP && !/P1239|DLL3|99526687/.test(heroP.textContent || "")) {
        heroP.textContent = "New: P1239 is Janssen JNJ-99526687 — Ac-225 DLL3 antibody + Zr-89 companion PET in ES-SCLC. Same audio, atlas, and live-image player.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    if (Theater.clips) {
      Theater.clips.jnj = Theater.clips.pet || Theater.clips.talk;
      Theater.clips.dll3 = Theater.clips.lung || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.zr89 = Theater.clips.pet || Theater.clips.talk;
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
    "title": "How to use this P1239 · JNJ-99526687 DLL3 protocol audiobook",
    "audio": [
        "This module is P 1239 — a page-by-page read of Janssen protocol elements document 99526687 S C C 1001, version 1.0, dated 08 June 2026.",
        "Investigational products: J N J-99526687, an actinium-225 labeled bivalent antibody fragment targeting delta-like ligand 3, and the companion zirconium-89 PET agent J N J-99526726. Same D L L 3 antibody. Different chelator and radionuclide.",
        "First-in-human, open-label, dose-escalation in extensive-stage small cell lung cancer after platinum and a checkpoint inhibitor. About one hundred adults: sixty in image and mass optimization, forty in expansion.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page.",
        "This is a teaching walk-through of a theranostic alpha-antibody protocol. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence. Do not dose or image from this module.",
        "Work page by page. Nineteen protocol-element pages, plus this intro. After the last page, take the module quiz — D L L 3 versus P S M A, zirconium-89 two millicuries, actinium start dose, and the pneumonitis D L T.",
    ],
    "chips": ["P1239", "19 pages", "Web speech", "Protocol page on screen", "Ac-225 + Zr-89"],
    "visual": "jnj",
    "image": "assets/protocol/jnj/j001.jpg",
    "cap": "P1239 cover — JNJ-99526687 Ac-225 DLL3 antibody, ES-SCLC",
    "pearls": [
        "P1239 is Janssen 99526687SCC1001 — same play, pause, speed, atlas, and live-image dock as VECTRA and SPARROW.",
        "Zr-89 PET (JNJ-99526726, 2 mCi) is the imaging gate. Ac-225 (JNJ-99526687) is the therapy, 7–10 days later.",
        "Teaching copy of a confidential sponsor protocol. Not affiliated with Janssen. Do not image or dose from this module.",
    ],
}

QUIZ = [
    {
        "q": "What does JNJ-99526687 target, and with which radionuclide?",
        "choices": [
            "PSMA with lutetium-177, same as Pluvicto",
            "DLL3 (delta-like ligand 3) with actinium-225 on a ~100 kDa bivalent spFv-Fc antibody",
            "GRPR / bombesin with gallium-68",
            "SSTR2 with DOTATATE"
        ],
        "a": 1,
        "why": "Title page / §2.1. Internalizing DLL3 antibody; Ac-225 alphas cause double-strand DNA breaks. Not a T-cell engager and not tarlatamab.",
    },
    {
        "q": "What is JNJ-99526726?",
        "choices": [
            "The therapeutic Ac-225 product under a second name",
            "The same DLL3 antibody labeled with zirconium-89 (deferoxamine chelator) for companion PET, 2 mCi IV",
            "An FDG dose given on the same day",
            "A Ga-68 PSMA staging scan"
        ],
        "a": 1,
        "why": "§2.1 / schedule. Imaging agent. Serial PET time points 0–4 h, 24±6 h, 42–78 h, 120–216 h. Start mass 3 mg, may go to 20 mg.",
    },
    {
        "q": "When is the Ac-225 therapy given relative to the Zr-89 PET?",
        "choices": [
            "Same syringe, same minute",
            "Approximately 7–10 days after the imaging dose, once biodistribution is acceptable",
            "Six months later after a second screen",
            "Only if FDG is negative"
        ],
        "a": 1,
        "why": "§4.1 / Figure 1. If blood-pool uptake ≫ tumor, SET may repeat Zr-89 PET at a revised mass before allowing therapy.",
    },
    {
        "q": "Starting therapeutic radioactivity?",
        "choices": [
            "12 MBq flat, copied from VECTRA PSMA",
            "0.75 µCi/kg on 3 mg antibody (cynomolgus-derived), then BOIN on µCi dose",
            "185 MBq ±10% like diagnostic FAPI",
            "Weight-based 5 MBq/kg"
        ],
        "a": 1,
        "why": "§4.1. Do not import 12 MBq PSMA-I&T numbers. This is a different target, construct, and unit (µCi/kg).",
    },
    {
        "q": "Who enrolls?",
        "choices": [
            "Treatment-naïve limited-stage SCLC heading to chemoradiation",
            "Adults with recurrent extensive-stage SCLC after platinum-based chemotherapy and a checkpoint inhibitor; ECOG 0–1",
            "Any NSCLC with an EGFR mutation",
            "mCRPC after two taxanes"
        ],
        "a": 1,
        "why": "§5.1–5.2. Histologically confirmed ES-SCLC. Part 1: measurable or evaluable. Part 2: ≥1 RECIST lesion.",
    },
    {
        "q": "Which imaging pair is protocol-required around therapy?",
        "choices": [
            "Only a chest radiograph",
            "Zr-89 PET for pre-treatment biodistribution plus Ac-225 SPECT for post-treatment dosimetry, plus CT C/A/P/brain (or MRI) for RECIST",
            "Bone scan only",
            "Mammography"
        ],
        "a": 1,
        "why": "Schedule Table 1 and §4.1.2. SPECT absorbed-dose estimates are checked against EBRT-equivalent organ thresholds.",
    },
    {
        "q": "A DLT in this protocol includes which pulmonary finding?",
        "choices": [
            "Any cough",
            "Grade ≥2 pneumonitis / ILD related to study treatment",
            "Resolved Grade 1 dyspnea",
            "A pleural plaque from old asbestos"
        ],
        "a": 1,
        "why": "Table 3. Also G4 neutropenia >5 days or febrile neutropenia, G3 TCP with bleed or G4 TCP, any Grade 5, Hy's law.",
    },
    {
        "q": "Planned sample and design?",
        "choices": [
            "670 randomised 1:1",
            "FIH open-label BOIN; ~100 adults, ~60 image/mass optimization plus ~40 dose expansion",
            "Single patient compassionate use",
            "Phase 3 vs cisplatin"
        ],
        "a": 1,
        "why": "§4.1. SET (sponsor + investigators) runs mass and radioactivity decisions. No randomisation in this elements document.",
    },
    {
        "q": "Minimum interval before a subsequent Ac-225 dose?",
        "choices": [
            "Next calendar day",
            "At least 8 weeks, and retreatment labs/CT/RECIST gates in Table 4 must be met 7±1 days before",
            "Only after 6 months of observation",
            "Whenever the PET tech is free"
        ],
        "a": 1,
        "why": "§6.2 / Table 4. Off transfusions 7 days; Hb ≥9; ANC ≥1.5; platelets ≥100; eGFR >50; SpO2 ≥92%; no unresolved pneumonitis/ILD.",
    },
    {
        "q": "eGFR gate at entry?",
        "choices": [
            "No renal rule",
            "≥50 mL/min by CKD-EPI with adjusted BSA",
            "≥90 only",
            "Dialysis required"
        ],
        "a": 1,
        "why": "Inclusion 7. VECTRA PSMA α used ≥60 after EMA; this DLL3 elements document writes ≥50. Always confirm against the signed site copy.",
    },
]


# Print-to-PDF outlined the fonts, so pymupdf get_text() is empty. Spoken
# scripts are a teaching read of each photographed page.
PAGE_TEXT = {
    1: (
        "Protocol elements document. Title page. Sponsor confidentiality statement: "
        "the information is trade secret, commercial, financial, or privileged, and the recipient "
        "must keep it confidential. Release without Janssen written approval is treated as competitive harm. "
        "Full title: A Phase 1 Study of JNJ-99526687, an Actinium-225-Labeled Antibody Targeting Delta-Like Ligand 3, for Small Cell Lung Cancer. "
        "Sponsor protocol identifier 99526687SCC1001. EDMS-RIM-1986262, version 1.0. Version date 08 June 2026. "
        "Investigational product codes: JNJ-99526687 and JNJ-99526726. Trial phase: Phase 1. "
        "Sponsor: Janssen Research and Development LLC, 920 Route 202 South, Raritan, New Jersey, USA. "
        "This Board Studio module is a teaching copy. It is not affiliated with Janssen, and it is not a substitute for the signed site protocol."
    ),
    2: (
        "Table of contents. Page 1 title page. Page 2 this contents list. "
        "Section 1, schedule of activities, starts on page 3. "
        "Section 2, introduction and purpose of the trial, page 5. "
        "Section 3, trial objectives and estimands: primary, secondary, and exploratory, page 6. "
        "Section 4, trial design, page 7, including safety, post-treatment actinium-225 SPECT dosimetry, dose-limiting toxicity, and the trial schema. "
        "Section 5, trial population, inclusion, exclusion, and lifestyle, pages 10 to 15. "
        "Section 6, trial intervention, study treatments, and retreatment criteria, page 16. "
        "Section 7 appendix: glossary page 17, required laboratory tests page 19."
    ),
    3: (
        "Table 1. Schedule of activities for all dose schedules. Windows plus or minus 2 days unless noted. "
        "Screening is within 30 days before imaging. Imaging, zirconium-89 PET, is 7 to 10 days before dosing Day 1. "
        "Day minus 7, then Day 1 actinium-225, then Days 8, 15, 29, 43, and 50. Then every 4 weeks until the next dose, end of treatment, and phone follow-up every 12 weeks. "
        "Informed consent, demographics, medical history, and disease characteristics at screen. Weight at screen and on selected imaging days. "
        "Eligibility or retreatment criteria at screen, imaging, Day minus 7, and Day 1. "
        "Vitals at screen, pre and 1 hour post Day 1, Day 8, and every 4 weeks. "
        "Pulse oximetry, resting and ambulatory, at screen, Day minus 7, Day 1, Days 8, 15, 29, 43, 50, and every 4 weeks. Part 1 only on some of those Day 8 slots. "
        "Physical exam and ECOG at screen, Day minus 7, Day 1, and every 4 weeks. "
        "Hematology and chemistry at screen, imaging, Day minus 7, Day 1, then Days 8, 15, 29, 43, 50 and every 4 weeks. "
        "Echo or MUGA at screen. Pulmonary function tests at screen, around Day 50, and on later doses as selected. "
        "Study drug: JNJ-99526726 zirconium-89 on the imaging visit. JNJ-99526687 actinium-225 on Day 1. "
        "Zirconium-89 PET: selected, initial participants serially imaged; the study evaluation team confirms the optimal timing. "
        "SPECT for actinium-225: selected, timing determined by the study evaluation team. "
        "CT chest, abdomen, pelvis, and brain, or MRI, at screen, then every 6 plus or minus 1 weeks for the first 24 weeks after Day 1, then every 12 plus or minus 1 weeks. "
        "Adverse events run from informed consent through 30 days after last study drug or next anticancer therapy, whichever is earlier. "
        "Footnotes: first dose must meet eligibility at Day minus 7 and Day 1. Later doses must meet retreatment criteria 7 plus or minus 1 days before. "
        "Pregnancy test for childbearing potential at screen, imaging or same day, Day 1 pre and 1 hour post. "
        "Pulmonary function tests include spirometry and DLCO."
    ),
    4: (
        "Table 2. Pharmacokinetic, pharmacodynamic, and immunogenicity schedule, Parts 1 and 2. "
        "Two PK columns: antibody in serum, and radioactivity in serum. Immunogenicity in serum. Archived tissue at screen. Optional fresh biopsy. "
        "Dose 1 Day 1: predose within 4 hours, then 5 minutes plus 10, 1 hour plus or minus 15 minutes, and 4 hours plus or minus 35 minutes, antibody and radioactivity. Immunogenicity predose. "
        "Day 3, 48 hours plus or minus 4 hours, Part 1 only. Day 8 plus or minus 1 day, Part 1. Days 15, 29, and 43 plus or minus 2 days, antibody and radioactivity, with immunogenicity on 15, 29, and 43. Optional biopsy Day 43. "
        "Dose 2 Day 1 predose and 5 minutes, antibody. Immunogenicity predose. Day 15 antibody. "
        "All subsequent doses: Day 1 predose, antibody on doses 3 and 4. End of treatment: antibody, radioactivity, and immunogenicity. "
        "Time points after predose are counted from the end of injection. Archived tissue is confirmed at screen but not shipped until after dosing. Optional biopsies start when the study evaluation team opens selected cohorts."
    ),
    5: (
        "Section 2. Introduction. Purpose of the trial. "
        "This is a first-in-human, open-label, dose-escalation study of the safety, tolerability, pharmacokinetics, dosimetry, and preliminary antitumor activity of JNJ-99526687 in small cell lung cancer. "
        "The design is theranostic: pre-treatment zirconium-89 PET with the companion imaging agent JNJ-99526726, then actinium-225 therapy. "
        "Small cell lung cancer is highly aggressive. Current standard of care brings 5-year survival to only about 9 percent, dropping to 4 percent in extensive-stage disease. "
        "DLL3 is a notch ligand with high tumor selectivity, little expression in normal adult tissues, and high prevalence in tumor. "
        "The target is clinically validated by tarlatamab-dlle, IMDELLTRA from Amgen, a T-cell engager against DLL3, FDA-approved in 2024 for second-line extensive-stage small cell lung cancer. "
        "Tarlatamab improves duration of response, but objective response remains relatively low, so approaches less reliant on immune-cell infiltration are needed. "
        "JNJ-99526687 is a roughly 100 kilodalton bivalent S P F V F C targeting DLL3, stochastically conjugated to the macropa-type chelator JNJ-95981860, which is 6,6-prime tetraoxa-diazacyclooctadecane bis-methylene dipicolinic acid, and radiolabeled with actinium-225. "
        "After DLL3 bind, the antibody internalizes. Actinium-225 decay releases alpha particles that cause double-strand DNA breaks. "
        "In vivo the construct showed reduced circulation relative to a standard monoclonal, sustained tumor accumulation, minimal normal-tissue exposure, and potent efficacy against small cell lung cancer tumors. "
        "JNJ-99526726 is the same bivalent S P F V F C conjugated to deferoxamine and labeled with zirconium-89 for imaging. "
        "Full nonclinical and clinical detail lives in the investigator brochure once available. "
        "This is an alpha-emitting antibody, not a T-cell engager, and not tarlatamab."
    ),
    6: (
        "Section 3. Trial objectives and associated estimands. "
        "Primary. Determine the recommended phase 2 dose regimens of JNJ-99526687, by incidence and severity of adverse events including dose-limiting toxicity per NCI-CTCAE version 5 from clinical assessments. "
        "Determine the optimal mass dose of JNJ-99526726, by PET imaging and serum PK, including clearance and tissue accumulation. "
        "Determine safety and tolerability of JNJ-99526687 at the recommended phase 2 dose in selected disease cohorts, by incidence and severity of all adverse events. "
        "Secondary. Preliminary antitumor activity: objective response rate, time to response, duration of response by RECIST 1.1, and progression-free survival. "
        "PK of JNJ-99526687, total antibody, payload, and major metabolite: C max, C trough, T max, AUC, accumulation ratio. "
        "Immunogenicity: incidence of anti-drug antibodies against JNJ-99526687. "
        "Safety of the zirconium-89 imaging agent. Ability of JNJ-99526726 to act as a DLL3 imaging agent, by tissue and tumor distribution on PET. "
        "Exploratory. Relationships among PK, adverse events, and clinical activity. Biomarkers of response or resistance, including but not limited to DLL3 expression on tumor samples."
    ),
    7: (
        "Section 4. Trial design. First-in-human Phase 1 in adults with extensive-stage small cell lung cancer. Additional DLL3 tumor types may be added based on imaging and emerging data. "
        "About 100 participants: 60 in dose escalation and 40 in dose expansion. "
        "A study evaluation team of participating investigators and key sponsor personnel, chaired by the sponsor Study Responsible Physician, runs the trial. "
        "JNJ-99526726, the zirconium-89 PET agent, is given intravenously at 2 millicuries at the assigned antibody mass, then PET assesses biodistribution, normal-tissue dosimetry, and tumor targeting. "
        "Starting antibody mass is 3 milligrams, with escalation up to 20 milligrams permitted after the study evaluation team reviews biodistribution so that pharmacokinetics stay linear and non-specific sink is controlled. "
        "Initial participants get serial PET at 0 to 4 hours, 24 plus or minus 6 hours, 42 to 78 hours, and 120 to 216 hours, to pick the imaging window for later patients. "
        "If biodistribution is unfavorable, for example normal-tissue uptake significantly greater than tumor, the participant may get a repeat zirconium-89 PET at a revised mass before anyone decides they may receive therapy. "
        "Once biodistribution and dosimetry are established, the team may waive the pre-treatment imaging requirement for specific cohorts. "
        "JNJ-99526687, therapeutic actinium-225, is given intravenously about 7 to 10 days after the imaging agent, at the assigned radioactivity in microcuries per kilogram and at a mass the imaging agent showed was optimal. "
        "Dosing starts at 0.75 microcuries per kilogram on 3 milligrams of antibody, from cynomolgus monkey studies. "
        "Radioactivity escalation uses Bayesian optimal interval design, based on dose-limiting toxicities in a 42-day window. Escalation decisions use safety, PK, dosimetry, and preliminary antitumor activity. "
        "Later doses may be given at least 8 weeks after the previous dose if there is no progression and if cumulative absorbed dose to any organ is not projected to exceed external-beam equivalent thresholds. The team may drop later doses for safety or for decreased tumor burden. "
        "Once a provisional recommended phase 2 dose is set, the study moves to dose expansion."
    ),
    8: (
        "Efficacy. Clinical activity is assessed on brain, chest, abdomen, and pelvis CT, or MRI as needed, plus other known disease. Response by RECIST version 1.1. "
        "Pharmacokinetic and immunogenicity. Blood for serum radioactivity PK, concentration of serum JNJ-99526687, and anti-drug antibodies. "
        "Section 4.1.1 Safety. The study evaluation team watches every escalation step and expansion. Cumulative data from later treatment doses are monitored against external-beam equivalent upper limits. "
        "Safety of JNJ-99526687 uses vitals, exams, ECGs, labs, pregnancy testing, ECOG, and adverse events including dose-limiting toxicity. Severity by NCI-CTCAE version 5. "
        "To allow monitoring at each new dose level, treatment is staggered by a minimum of 1 week between the first participant on a cohort and subsequent participants who have not yet been declared safe by the team. "
        "Section 4.1.2. Post-treatment dosimetry, actinium-225 SPECT. After JNJ-99526687, SPECT characterizes in-vivo distribution of the labeled therapeutic agent and estimates absorbed dose to normal tissues and tumor. Timing is set by the study evaluation team in an imaging charter or protocol amendment. "
        "SPECT confirms post-treatment dosimetry and complements the pre-treatment zirconium-89 PET. Absorbed-dose estimates from both modalities inform cumulative dose versus external-beam equivalent organ thresholds. "
        "Section 4.1.3. A dose-limiting toxicity is any treatment-related adverse event listed in Table 3 during the DLT evaluation period. That period is the 42 days after the first dose of JNJ-99526687, matching the expected marrow nadir. "
        "All adverse events, and those that meet DLT criteria, are reviewed and confirmed by the study evaluation team. The cumulative safety profile may also be reviewed."
    ),
    9: (
        "Table 3. Dose-limiting toxicity criteria, related to study treatment, NCI-CTCAE version 5. "
        "Hematologic. Grade 4 neutropenia for more than 5 days, or febrile neutropenia. Grade 3 thrombocytopenia with bleeding, or Grade 4 thrombocytopenia. Any Grade 5. "
        "Non-hematologic. Grade 2 or higher pneumonitis or interstitial lung disease. "
        "Any Grade 3 or higher non-hematologic toxicity, except: Grade 3 fatigue, fever, constipation, or diarrhea lasting less than 7 days with best supportive care. "
        "Grade 3 nausea or vomiting lasting 48 hours or less that resolves to Grade 1 or better spontaneously or with best supportive care. "
        "Grade 3 ALT or AST that resolves to Grade 1 or baseline within 7 days, unless Hy's law is met. "
        "Isolated Grade 3 ALP or GGT that returns to Grade 1 or baseline within 7 days. "
        "Grade 3 lipase or amylase increase without clinical or radiologic pancreatitis. "
        "Grade 3 electrolyte abnormalities lasting 72 hours or less that resolve spontaneously or with best supportive care. "
        "Chemistry abnormalities Grade 3 or higher in the DLT period must be reassessed to confirm the grade and resolution to Grade 2 or better. "
        "Hy's law: ALT or AST at least 3 times ULN, total bilirubin at least 2 times ULN, ALP 2 times ULN or less, with no alternative etiology. For people with baseline Grade 2 AST or ALT from liver mets, ALT or AST more than 3 times baseline, or 8 times ULN, whichever is lower, plus bilirubin more than 2 times baseline and more than 2 times ULN. "
        "Board pearl: pulmonary DLT starts at Grade 2 pneumonitis. That is stricter than a usual Grade 3 non-heme bar."
    ),
    10: (
        "Figure 1. Schematic overview of the trial. Two parts. "
        "Part 1, image and mass optimization with dose escalation, using Bayesian optimal interval design. "
        "Start: about 8 to 12 participants until the mass dose is optimized. Day minus 7: about 3 milligrams of antibody with 2 millicuries of zirconium-89. Day 1: about 3 milligrams with actinium-225 at the 50 microcurie Bayesian-optimal-interval rung, which is the 0.75 microcuries per kilogram start on a typical adult. "
        "Next rung: 100 microcuries actinium-225, still after a zirconium-89 PET, mass may be revised. "
        "Then X microcuries at an optimized mass, illustrated on the figure as about 150 microcuries on Day 1. "
        "Once mass is optimized, a blue arrow labeled provisional recommended phase 2 dose leads to Part 2, dose expansion, about 20 to 40 additional small cell lung cancer participants. "
        "Section 5. Trial population. Unmet need in recurrent extensive-stage small cell lung cancer. Adults after progression on platinum-based chemotherapy and an immune checkpoint inhibitor. "
        "Screening within 30 days before trial intervention. Waivers are not allowed. If a criterion is unclear, the investigator must resolve it with the sponsor before enrolling. "
        "Inclusion starts here. Age: 18 years or older, and at least the legal age of majority in that jurisdiction. "
        "Disease: histologically confirmed extensive-stage small cell lung cancer."
    ),
    11: (
        "Inclusion criteria continue. "
        "3. Measurable or evaluable disease. Part 1: either measurable or evaluable. Part 2: at least one measurable lesion per RECIST 1.1. "
        "4. Progressed during or after at least one prior therapy that included platinum-based chemotherapy and immune checkpoint inhibition, unless the participant was ineligible to receive them, with no remaining therapeutic alternatives. "
        "5. Toxicity from prior anticancer treatment resolved to Grade 1 or baseline, except alopecia, vitiligo, peripheral neuropathy, or endocrinopathies stable on hormone replacement, which may be Grade 2 or better. "
        "6. ECOG performance status 0 or 1. "
        "7. eGFR by CKD-EPI using adjusted body-surface area of at least 50 milliliters per minute. "
        "8. Liver tests. Without known hepatic metastases: AST and ALT less than 2.5 times ULN, total bilirubin less than 1.5 times ULN. With hepatic metastases: AST and ALT less than 4 times ULN, total bilirubin less than 3 times ULN. Gilbert or congenital nonhemolytic hyperbilirubinemia: isolated total bilirubin at least 1.5 times ULN is allowed if conjugated bilirubin is under 1.5 times ULN; with liver mets the isolated total may be at least 3 times ULN if conjugated stays under 1.5. "
        "9. Within 14 days of first dose, or 21 days if transfusion or growth factor: hemoglobin at least 9 grams per deciliter, neutrophils at least 1.5 times 10 to the 9 per liter, or 1.0 if benign ethnic neutropenia, platelets at least 100 times 10 to the 9 per liter."
    ),
    12: (
        "Inclusion 10. Sex and contraceptive requirements. While on study intervention and for 6 months after the last dose: do not breastfeed or become pregnant; do not donate gametes or freeze them for assisted reproduction; wear an external condom; practice at least one highly effective contraceptive method, and if oral contraceptives are used add a barrier; if of childbearing potential, a negative highly sensitive pregnancy test at screen and within 24 hours before first dose, and agree to further pregnancy tests. Details in the protocol appendix on contraceptive guidance. "
        "11. Consent to provide an archived tumor tissue sample if available at screening. "
        "12. Sign an informed consent form. "
        "13. Willing and able to follow the lifestyle restrictions. "
        "Section 5.3 Exclusion. Medical conditions. "
        "1. Clinically significant cardiovascular disease within 6 months before consent: myocardial infarction; severe or unstable angina; coronary bypass; clinically significant arrhythmia including ventricular arrhythmia; New York Heart Association Class 3 or 4 heart failure; myocarditis; stroke or transient ischemic attack; any grade arterial event."
    ),
    13: (
        "Exclusion continues. "
        "2. Venous thromboembolic events, pulmonary embolism or intracerebral thrombus, within 30 days before first dose. Uncomplicated Grade 2 or less deep-vein thrombosis is allowed. "
        "3. Prior interstitial lung disease or pneumonitis in the 12 months before enrolment, or clinically significant pulmonary compromise, especially a need for supplemental oxygen more than 2 liters per minute by nasal cannula to keep adequate oxygenation. "
        "4. History of solid-organ or hematologic stem-cell transplant. "
        "5. Known myelodysplastic syndrome, leukemia, or hematologic malignancy with MDS or acute myeloid leukemia features. "
        "6. Prolonged QTcF greater than 470 milliseconds. Pacemaker patients who are clinically stable may enroll. "
        "7. Clinically significant active viral, bacterial, or fungal infection requiring systemic treatment within 7 days before first dose. "
        "8. Major surgery, significant trauma, or inadequate recovery within 2 weeks before first dose. No major surgery planned while on study treatment. "
        "9. Prior or concurrent second malignancy other than the disease under trial, with listed exceptions: natural history that would not interfere with safety or efficacy; malignancies not progressing and not requiring treatment change in 2 years and not high-risk; and very-low-risk treated cancers such as non-muscle-invasive bladder Ta-PUNLMP or low-grade under 3 centimeters, non-melanoma skin cancer treated curatively, non-invasive cervical cancer, adequately treated in-situ or localized breast cancer on antihormonal agents, localized prostate cancer M0 N0 Gleason 7 or less treated with surgery or radiation, and other malignancies considered minimal recurrence risk."
    ),
    14: (
        "Exclusion, disease characteristics. "
        "10. Concurrent other anticancer treatment including non-palliative radiotherapy, or another investigational agent. Prior anticancer treatments must be stopped at least 2 weeks or 5 half-lives, whichever is shorter, before first study dose, with exceptions: prior tarlatamab, checkpoint inhibitors, or thoracic radiation must be off at least 4 weeks; prior CAR-T at least 90 days. "
        "11. Wide-field radiotherapy, for example more than 30 percent of marrow-bearing bones, within 4 weeks, or focal radiation with palliative intent inside the field of measurable disease within 2 weeks. Palliative radiotherapy outside measurable-disease fields during the study is permitted. "
        "12. Active CNS involvement, except locally treated brain metastases that have been clinically stable and asymptomatic for more than 2 weeks and are off or on low-dose corticosteroid, 10 milligrams prednisone or less, for at least 2 weeks before start of study treatment. "
        "13. HIV-positive participants are excluded if they have detectable viral load of 50 copies per milliliter or more, CD4 of 300 cells per cubic millimeter or less, an AIDS-defining opportunistic infection within 6 months, or they are not on HAART. HAART changes for resistance need 3 months of stability; toxicity changes are allowed up to 4 weeks prior. HAART that could interfere with study treatment is excluded; consult the sponsor. "
        "14. Active hepatitis of infectious origin. HBV: HBsAg positive is active. HBsAg-negative with anti-HBc must have HBV DNA by RT-PCR; DNA-positive are excluded. Isolated anti-HBs from vaccination, with known vaccine history, does not need HBV DNA. HCV: known infection or anti-HCV positive, unless HCV RNA is negative at screen or within 3 months."
    ),
    15: (
        "Exclusion 14-c. Other clinically active liver disease of infectious origin. "
        "15. Known allergy, hypersensitivity, or intolerance to excipients of JNJ-99526687 or JNJ-99526726. Check the investigator brochures. "
        "16. Live attenuated vaccine within 30 days before first dose or within 4 weeks after last dose. Non-live and non-replication-competent vaccines, for example COVID-19 shots approved locally, are allowed per labeling. "
        "17. Immunosuppressive systemic medicines such as glucocorticoids more than 10 milligrams per day prednisone within 7 days before first dose. A single course is allowed for emergency use, and prophylaxis for imaging contrast is allowed. "
        "18. Any condition that, in the investigator's opinion, would compromise the participant, limit assessments, or confound the protocol. "
        "Section 5.4 Lifestyle. Carry a wallet study card. No blood donation during the study and for at least 100 days after, following local blood-bank rules. Drink 1 to 2 glasses of water before and after study-drug injection. "
        "For 6 weeks after each study treatment: immediately report cough, dyspnea, fever, or any worsening respiratory symptom. Stay hydrated, 6 or more glasses a day. Sit to void, flush twice, wash hands. Caregivers wear disposable gloves for urine or soiled clothing and dispose of gloves in a waste container. Wash bedpans or urinals with soap and running water. Wash the participant's laundry separately, including towels and sheets. "
        "That urine-handling block is nuclear-medicine contamination control after an actinium-225 antibody, not a casual lifestyle tip."
    ),
    16: (
        "Section 6. Trial intervention and concomitant therapy. "
        "Section 6.1. For this study, study drug means JNJ-99526687 or JNJ-99526726. Both products include labeled plus unlabeled S P F V F C to reach the desired mass dose. "
        "Section 6.2 Retreatment. Subsequent doses may start at 8 weeks if retreatment criteria are met. The interval may be lengthened by the study evaluation team. Dose adjustments only under a medically qualified principal or subinvestigator. "
        "Table 4 criteria must be met 7 plus or minus 1 days before the scheduled dose. "
        "Recovered from toxicity and off transfusions or growth factors for at least 7 days. Hemoglobin at least 9. Platelets at least 100. Absolute neutrophil count at least 1.5. Serum total bilirubin at most 1.5 times ULN, with a Gilbert exception if conjugated bilirubin is in range. ALT and AST at most 2.5 times ULN, or 4 times ULN if there is tumor in the liver. Calculated or measured creatinine clearance greater than 50 milliliters per minute. Grade 1 or better proteinuria. No signs or symptoms of respiratory insufficiency. Ambulatory pulse oximetry at least 92 percent, above baseline, or within 4 percentage points of baseline. Chest CT without pneumonitis or interstitial lung disease unless another cause is proven and the findings have resolved. RECIST 1.1 of non-complete-response slash non-progressive-disease, stable disease, partial response, or complete response on imaging within 42 days, and no clinical progression. "
        "Maximum cumulative dose will be defined in the full protocol."
    ),
    17: (
        "Appendix 1. Glossary of terms and abbreviations, first half. "
        "ADA anti-drug antibody. AE adverse event. ALP alkaline phosphatase. ALT alanine aminotransferase. anti-HBc hepatitis B core antibody. anti-HCV hepatitis C virus antibody. AST aspartate aminotransferase. AUC area under the concentration-time curve. beta-HCG pregnancy test. BOIN Bayesian optimal interval. BP blood pressure. BSA body-surface area. CAR-T chimeric antigen receptor T-cell. CIS carcinoma in situ. CKD-EPI chronic kidney disease epidemiology. C max, C trough, CT, DLL3 delta-like ligand 3, DLCO, DLT dose-limiting toxicity, EBRT external beam radiation, ECG, ECOG, eGFR, EOT end of treatment, ES extensive-stage, FIH first in human, GGT, HAART, HBsAg, HBV, HCV, HIV, HR heart rate, IB investigator brochure, ICF informed consent, ILD interstitial lung disease, mAb monoclonal antibody, MRI, NCI-CTCAE, NonCR, NonPD, P1 Part 1, PD pharmacodynamics, PET, PFS, PFT pulmonary function test, PK pharmacokinetics."
    ),
    18: (
        "Glossary continues. pRP2D, provisional recommended phase 2 dose. PUNLMP, papillary urothelial neoplasm of low malignant potential. Q number W, every number weeks. QTcF, corrected QT by Fridericia. RECIST, response evaluation criteria in solid tumors. RP radical prostatectomy. RP2D recommended phase 2 dose. RR respiratory rate. RT radiation therapy. RT-PCR. S selected. SCLC small cell lung cancer. SET study evaluation team. SoC standard of care. SPECT single-photon emission computed tomography. S P F V F C, single-chain fragment variable fragment crystallizable. SpO2 pulse oximetry. TCE T-cell engager. T max. ULN upper limit of the normal range. "
        "Board trap: RP in this glossary is radical prostatectomy from leftover oncology vocabulary. This trial is small cell lung cancer, not a prostatectomy study. Do not import SPARROW or VECTRA prostate language."
    ),
    19: (
        "Appendix 2. Protocol-required safety laboratory tests. "
        "Hematology: hemoglobin, absolute lymphocyte count, platelet count, absolute neutrophil count. "
        "Clinical chemistry: sodium, potassium, blood urea nitrogen or urea, creatinine, glucose fasting or random, AST, ALT, GGT, total bilirubin, direct bilirubin if Gilbert, alkaline phosphatase, phosphate, calcium, albumin, total protein. "
        "Routine urinalysis: dipstick for specific gravity, pH, glucose, protein, blood, ketones, bilirubin, urobilinogen, nitrite, leukocyte esterase. If the dipstick is abnormal, sediment for red cells, white cells, epithelial cells, crystals, casts, bacteria. Dipstick is suggested; use locally available equipment. "
        "Screening only: coagulation, PT I N R and a P T T, and serology for hepatitis B, HBsAg, anti-HBc, anti-HBs and DNA, and hepatitis C, anti-HCV and HCV RNA. See inclusion 5.2 for how those results gate enrollment. "
        "That is the last page of the 19-page elements document. After this lesson, take the module quiz: DLL3 versus PSMA, zirconium-89 two millicuries, actinium start dose, and the Grade 2 pneumonitis DLT."
    ),
}


HEADER_RE = re.compile(
    r"JNJ-99526687\s+Protocol Elements Document 99526687SCC1001",
    re.I,
)
PAGE_RE = re.compile(r"Confidential\s+Page\s+\d+\s+of\s+\d+", re.I)

SPEAK = [
    (r"JNJ-99526687", "J N J-99526687"),
    (r"JNJ-99526726", "J N J-99526726"),
    (r"JNJ-95981860", "J N J-95981860"),
    (r"99526687SCC1001", "99526687 S C C 1001"),
    (r"\bDLL3\b", "D L L 3"),
    (r"\bES-SCLC\b", "extensive-stage small cell lung cancer"),
    (r"\bSCLC\b", "small cell lung cancer"),
    (r"\bAc225\b", "actinium-225"),
    (r"Ac-225", "actinium-225"),
    (r"²²⁵Ac", "actinium-225"),
    (r"Zr89", "zirconium-89"),
    (r"Zr-89", "zirconium-89"),
    (r"\bBOIN\b", "B O I N"),
    (r"\bRP2D\b", "recommended phase 2 dose"),
    (r"\bpRP2D\b", "provisional recommended phase 2 dose"),
    (r"\bSET\b", "study evaluation team"),
    (r"\bDLT\b", "dose-limiting toxicity"),
    (r"\bRECIST\b", "R E C I S T"),
    (r"\bECOG\b", "E C O G"),
    (r"\beGFR\b", "E G F R"),
    (r"\bCTCAE\b", "C T C A E"),
    (r"\bNCI-CTCAE\b", "N C I C T C A E"),
    (r"\bILD\b", "interstitial lung disease"),
    (r"\bPFT\b", "pulmonary function tests"),
    (r"\bMUGA\b", "M U G A"),
    (r"\bADA\b", "anti-drug antibody"),
    (r"\bICF\b", "informed consent form"),
    (r"\bIB\b", "investigator brochure"),
    (r"\bSoC\b", "standard of care"),
    (r"\bFIH\b", "first in human"),
    (r"\bspFv-Fc\b", "S P F V F C"),
    (r"\bTCE\b", "T-cell engager"),
    (r"\bEOT\b", "end of treatment"),
    (r"\bEBRT\b", "external beam radiation"),
    (r"\bQ4W\b", "every 4 weeks"),
    (r"\bQ6W\b", "every 6 weeks"),
    (r"\bQ12W\b", "every 12 weeks"),
    (r"\bµCi\b", "microcuries"),
    (r"\buCi\b", "microcuries"),
    (r"\bmCi\b", "millicuries"),
    (r"\bMBq\b", "megabecquerels"),
    (r"\bPET\b", "PET"),
    (r"\bSPECT\b", "SPECT"),
    (r"\bPK\b", "pharmacokinetics"),
    (r"\bPD\b", "pharmacodynamics"),
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
        if re.fullmatch(r"JNJ-99526687|Protocol Elements Document 99526687SCC1001|Confidential", s, re.I):
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
    return [p for p in parts if p][:28]


def title_from(n: int, cleaned: str) -> str:
    SPECIAL = {
        1: "Cover · JNJ-99526687 · Ac-225 DLL3 · ES-SCLC",
        2: "Table of contents",
        3: "Table 1 · schedule of activities",
        4: "Table 2 · PK, radioactivity, immunogenicity",
        5: "Introduction · purpose and DLL3 rationale",
        6: "Primary, secondary, exploratory objectives",
        7: "Trial design · Zr-89 PET then Ac-225",
        8: "Safety, Ac-225 SPECT dosimetry, DLT window",
        9: "Table 3 · dose-limiting toxicity",
        10: "Figure 1 schema · Part 1 BOIN / Part 2 expansion",
        11: "Inclusion · ES-SCLC, labs, hepatic mets",
        12: "Contraception and exclusion · cardiac",
        13: "Exclusion · ILD, second malignancy",
        14: "Exclusion · CNS, HIV, hepatitis",
        15: "Exclusion / lifestyle · urine contamination",
        16: "Study treatments and Table 4 retreatment",
        17: "Appendix 1 · glossary A–P",
        18: "Appendix 1 · glossary pRP2D–ULN",
        19: "Appendix 2 · required laboratory tests",
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
    if n in (1, 2, 5):
        return "jnj"
    if n in (3, 4):
        return "soa"
    if n == 6:
        return "dll3"
    if n == 7:
        return "zr89"
    if n in (8, 9):
        return "dlt"
    if n == 10:
        return "schema"
    if n == 16:
        return "ac225"
    if "dll3" in t or "tarlatamab" in t:
        return "dll3"
    if "zirconium" in t or "zr-89" in t or "99526726" in t:
        return "zr89"
    if "actinium" in t or "ac-225" in t or "99526687" in t and n > 6:
        return "ac225"
    if "dlt" in t or "pneumonitis" in t:
        return "dlt"
    return "jnj"


def pearls_for(n: int) -> list[str]:
    SPECIAL = {
        1: [
            "Janssen Phase 1 protocol elements: Ac-225 DLL3 antibody JNJ-99526687 in ES-SCLC.",
            "Companion Zr-89 PET is JNJ-99526726. Teaching copy only.",
        ],
        3: [
            "Zr-89 PET 7–10 days before Dose 1. Ac-225 on Day 1. SPECT for selected patients.",
            "CT C/A/P/brain every 6 weeks for 24 weeks, then every 12.",
        ],
        5: [
            "Same antibody, two labels: DFO-Zr-89 to image, macropa (JNJ-95981860) Ac-225 to treat.",
            "DLL3 is tumor-selective. Tarlatamab is a TCE; this is an alpha antibody.",
        ],
        7: [
            "Imaging mass starts at 3 mg, may go to 20 mg. Zr-89 is 2 mCi.",
            "Therapy starts 0.75 µCi/kg on 3 mg, 7–10 days later. BOIN on µCi.",
        ],
        9: [
            "Pulmonary DLT: ≥ Grade 2 pneumonitis/ILD. 42-day window after first Ac-225.",
            "Heme: G4 ANC >5 days or febrile; G3 TCP with bleed or G4 TCP; any G5.",
        ],
        10: [
            "Part 1: mass/dose optimization with BOIN. Part 2: 20–40 ES-SCLC at pRP2D.",
            "n=8–12 until imaging mass is optimized, then radioactivity is escalated.",
        ],
        16: [
            "Retreatment ≥ 8 weeks. Table 4 labs, SpO2, and no unresolved ILD.",
            "Both products include labeled plus unlabeled spFv-Fc to hit the mass dose.",
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
        dest = IMG_DIR / f"j{i+1:03d}.jpg"
        pix.save(str(dest), jpg_quality=72)
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
        raw = PAGE_TEXT.get(n) or (doc[i].get_text() or "")
        cleaned = clean_text(raw)
        spoken = speakify(cleaned)
        audio = chunk_audio(spoken)
        title = title_from(n, cleaned)
        lessons.append({
            "title": f"Page {n} of {doc.page_count} · {title}",
            "audio": audio,
            "chips": ["P1239", f"p{n}/{doc.page_count}", "DLL3 Ac-225"],
            "visual": vis_for(n, cleaned),
            "image": f"assets/protocol/jnj/j{n:03d}.jpg",
            "cap": f"Protocol page {n} of {doc.page_count} — JNJ-99526687 SCC1001 v1.0",
            "pearls": pearls_for(n),
        })

    module = {
        "id": MOD_ID,
        "num": "P1239",
        "title": "P1239 · JNJ-99526687 protocol · Ac-225 DLL3 ES-SCLC",
        "time": "~45 min spoken",
        "weight": "Protocol elements document",
        "atlasKey": "nuclear",
        "lessons": lessons,
        "quiz": QUIZ,
    }
    header = (
        "/* Janssen JNJ-99526687 / 99526687SCC1001 / P1239 Ac-225 DLL3 protocol audiobook.\n"
        "   Loads last among protocol scripts. Mutates window.COURSE. */\n\n"
    )
    js = header + SVGS + "\n  const MODULE1239 = " + json.dumps(module, ensure_ascii=False, indent=2) + ";\n" + BOOT
    OUT.write_text(js)
    print(f"wrote {OUT} bytes={OUT.stat().st_size} lessons={len(lessons)} quiz={len(QUIZ)}")


if __name__ == "__main__":
    main()
