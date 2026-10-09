#!/usr/bin/env python3
"""Emit public/studio/p000000.js — Novartis CPBQ663A12101 (Ac-225/Ga-68 DWJ155) audiobook."""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

import pymupdf as fitz

PDF = Path("/workspace/attachments/CPBQ663A12101 Protocol Amendment_v01_04May2026 (1).pdf")
OUT = Path("/workspace/public/studio/p000000.js")
IMG_DIR = Path("/workspace/public/studio/assets/protocol/cpbq")
PDF_COPY = Path("/workspace/public/studio/assets/protocol/CPBQ663A12101-v01.pdf")

N_PAGES = 170
MOD_ID = "p000000"

SVGS = r"""
  const P000000V = {
    dwj155: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="15">CPBQ663A12101 · DWJ155 theranostic pair · Phase I</text>
      <rect x="16" y="38" width="488" height="32" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="59" text-anchor="middle" fill="#e8f2f7" font-size="12">Novartis · first-in-human · HER2-targeting peptide · solid tumors</text>
      <rect x="16" y="82" width="232" height="100" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="132" y="108" text-anchor="middle" fill="#3ee0c4" font-size="13">⁶⁸Ga-DWJ155</text>
      <text x="132" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">Imaging IMP · PET/CT or PET/MRI</text>
      <text x="132" y="148" text-anchor="middle" fill="#e8f2f7" font-size="12">~250 MBq (200–275)</text>
      <text x="132" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">Screening + end of treatment</text>
      <rect x="272" y="82" width="232" height="100" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="388" y="108" text-anchor="middle" fill="#f5d76e" font-size="13">²²⁵Ac-DWJ155</text>
      <text x="388" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">Therapy IMP · α emitter</text>
      <text x="388" y="148" text-anchor="middle" fill="#e8f2f7" font-size="12">Start 2 MBq (54 µCi) Q6W</text>
      <text x="388" y="168" text-anchor="middle" fill="#9bb3c2" font-size="11">Provisional 2 / 4 / 6 / 8 MBq</text>
      <text x="260" y="208" text-anchor="middle" fill="#c5d8e3" font-size="12">Escalation ≥21 · expansion ~135 · 36-month follow-up</text>
      <text x="260" y="230" text-anchor="middle" fill="#9bb3c2" font-size="12">Breast (HER2 spectrum) · NSCLC ± AGA · GEA · bladder</text>
      <text x="260" y="258" text-anchor="middle" fill="#9bb3c2" font-size="11">Same ligand. Imaging gates therapy. Not FDG. Not an antibody.</text>
    </svg>`,
    ac225: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#f5d76e" font-size="16">Actinium-225 · therapeutic α emitter</text>
      <text x="260" y="68" text-anchor="middle" fill="#fb7185" font-size="26">Starting activity 2 MBq · 54 µCi</text>
      <text x="260" y="96" text-anchor="middle" fill="#7cb8ff" font-size="14">DL1: Q6W, up to 4 cycles · then 4 / 6 / 8 MBq</text>
      <text x="36" y="132" fill="#e8f2f7" font-size="13">α decay chain deposits high LET over a few cell diameters</text>
      <text x="36" y="156" fill="#e8f2f7" font-size="13">Mass dose ~40 µg at start · up to ~400 µg if activity climbs</text>
      <text x="36" y="180" fill="#c5d8e3" font-size="13">Schedules: Q6W first, then Q8W and Q4W under BHLRM + EWOC</text>
      <text x="36" y="204" fill="#9bb3c2" font-size="12">One IV administration at the start of each cycle · central manufacture</text>
      <text x="36" y="228" fill="#9bb3c2" font-size="12">Organs at risk = radiation to normal tissue, not cold-peptide pharmacology</text>
    </svg>`,
    ga68: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#3ee0c4" font-size="16">Gallium-68 DWJ155 · companion PET</text>
      <text x="260" y="72" text-anchor="middle" fill="#f5d76e" font-size="24">~250 MBq  ·  window 200–275 MBq</text>
      <text x="260" y="102" text-anchor="middle" fill="#7cb8ff" font-size="14">PET/CT or PET/MRI · same ligand as the α therapy</text>
      <rect x="24" y="122" width="220" height="70" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="134" y="150" text-anchor="middle" fill="#3ee0c4" font-size="13">Scan 1 · screening</text>
      <text x="134" y="172" text-anchor="middle" fill="#c5d8e3" font-size="12">Gates Ac-225 eligibility</text>
      <rect x="276" y="122" width="220" height="70" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="386" y="150" text-anchor="middle" fill="#f5d76e" font-size="13">Scan 2 · end of treatment</text>
      <text x="386" y="172" text-anchor="middle" fill="#c5d8e3" font-size="12">Same technique as baseline</text>
      <text x="260" y="220" text-anchor="middle" fill="#9bb3c2" font-size="12">Positive PET: at least one measurable lesion with DWJ155 uptake</text>
      <text x="260" y="242" text-anchor="middle" fill="#9bb3c2" font-size="12">Kits supplied centrally · imaging IMP, not the study treatment</text>
    </svg>`,
    theranostic: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">Same peptide · two radionuclides</text>
      <circle cx="130" cy="120" r="52" fill="#163746" stroke="#fb7185" stroke-width="3"/>
      <text x="130" y="114" text-anchor="middle" fill="#fb7185" font-size="13">HER2 ECD</text>
      <text x="130" y="132" text-anchor="middle" fill="#c5d8e3" font-size="11">on tumor cell</text>
      <rect x="210" y="96" width="90" height="48" rx="8" fill="#1a2a14" stroke="#3ee0c4"/>
      <text x="255" y="125" text-anchor="middle" fill="#3ee0c4" font-size="12">DWJ155</text>
      <rect x="320" y="70" width="180" height="44" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="410" y="97" text-anchor="middle" fill="#3ee0c4" font-size="12">⁶⁸Ga · PET map</text>
      <rect x="320" y="126" width="180" height="44" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="410" y="153" text-anchor="middle" fill="#f5d76e" font-size="12">²²⁵Ac · α therapy</text>
      <text x="260" y="200" text-anchor="middle" fill="#e8f2f7" font-size="13">See the target. Treat the target. Do not swap the radionuclide names.</text>
      <text x="260" y="224" text-anchor="middle" fill="#c5d8e3" font-size="12">Works across HER2 3+ down to IHC 0 — the PET is the in-vivo IHC.</text>
      <text x="260" y="248" text-anchor="middle" fill="#9bb3c2" font-size="12">Not trastuzumab. Not T-DXd. Small-molecule / peptide radioligand.</text>
    </svg>`,
    dose: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#3ee0c4" font-size="15">Provisional ²²⁵Ac activities · BHLRM + EWOC</text>
      <rect x="16" y="42" width="114" height="88" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="73" y="74" text-anchor="middle" fill="#3ee0c4" font-size="13">DL1</text>
      <text x="73" y="96" text-anchor="middle" fill="#e8f2f7" font-size="16">2 MBq</text>
      <text x="73" y="116" text-anchor="middle" fill="#9bb3c2" font-size="11">Q6W · ≤4 cycles</text>
      <rect x="140" y="42" width="114" height="88" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="197" y="74" text-anchor="middle" fill="#7cb8ff" font-size="13">DL2</text>
      <text x="197" y="96" text-anchor="middle" fill="#e8f2f7" font-size="16">4 MBq</text>
      <text x="197" y="116" text-anchor="middle" fill="#9bb3c2" font-size="11">cycles may change</text>
      <rect x="264" y="42" width="114" height="88" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="321" y="74" text-anchor="middle" fill="#f5d76e" font-size="13">DL3</text>
      <text x="321" y="96" text-anchor="middle" fill="#e8f2f7" font-size="16">6 MBq</text>
      <text x="321" y="116" text-anchor="middle" fill="#9bb3c2" font-size="11">reference prior</text>
      <rect x="388" y="42" width="116" height="88" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="446" y="74" text-anchor="middle" fill="#fb7185" font-size="13">DL4</text>
      <text x="446" y="96" text-anchor="middle" fill="#e8f2f7" font-size="16">8 MBq</text>
      <text x="446" y="116" text-anchor="middle" fill="#9bb3c2" font-size="11">highest listed</text>
      <text x="260" y="160" text-anchor="middle" fill="#e8f2f7" font-size="13">DLT window = first cycle (4, 6 or 8 weeks matching the schedule)</text>
      <text x="260" y="184" text-anchor="middle" fill="#c5d8e3" font-size="12">Q6W opens first. Q8W and Q4W share a Bayesian hierarchical model.</text>
      <text x="260" y="208" text-anchor="middle" fill="#f5d76e" font-size="12">EWOC: do not escalate into an excessive-toxicity posterior</text>
      <text x="260" y="236" text-anchor="middle" fill="#9bb3c2" font-size="12">Escalation n 21–48 · expansion only after investigators + Novartis review</text>
      <text x="260" y="260" text-anchor="middle" fill="#9bb3c2" font-size="11">RD = activity per cycle + number of cycles + schedule</text>
    </svg>`,
    dosimetry: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#7cb8ff" font-size="16">Cycle-1 SPECT/CT + PK clock</text>
      <text x="260" y="52" text-anchor="middle" fill="#c5d8e3" font-size="12">~3 participants per cohort · first cycle · void before every SPECT</text>
      <rect x="16" y="68" width="488" height="70" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="96" text-anchor="middle" fill="#e8f2f7" font-size="13">SPECT: 4 h · 24 h · 48 h · 72 h · 96 h · 168 h · 312 h</text>
      <text x="260" y="118" text-anchor="middle" fill="#9bb3c2" font-size="12">DL1 drops late points · DL1–2 confirm image feasibility before more scans</text>
      <text x="36" y="164" fill="#e8f2f7" font-size="13">Blood PK/HPLC from +10 min through 96 h · urine 0–72 h in a 6-person subset</text>
      <text x="36" y="188" fill="#c5d8e3" font-size="13">No extra radiopharmaceutical — SPECT uses the therapeutic ²²⁵Ac emission</text>
      <text x="36" y="212" fill="#9bb3c2" font-size="12">Cardiac TTE (or MUGA) every 12 weeks · RECIST CT/MRI every 8 weeks</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">36-month long-term follow-up from last ²²⁵Ac dose</text>
    </svg>`,
    bhlrm: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">BHLRM · Bayesian hierarchical logistic DLT model</text>
      <text x="260" y="52" text-anchor="middle" fill="#7cb8ff" font-size="13">Q6W, Q8W, Q4W share information · EWOC is the brake</text>
      <rect x="16" y="70" width="156" height="80" rx="8" fill="#10232e" stroke="#4ade80"/>
      <text x="94" y="100" text-anchor="middle" fill="#4ade80" font-size="13">Under-toxic</text>
      <text x="94" y="124" text-anchor="middle" fill="#c5d8e3" font-size="12">may escalate</text>
      <rect x="182" y="70" width="156" height="80" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="260" y="100" text-anchor="middle" fill="#f5d76e" font-size="13">Target</text>
      <text x="260" y="124" text-anchor="middle" fill="#c5d8e3" font-size="12">stay / declare RD</text>
      <rect x="348" y="70" width="156" height="80" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="426" y="100" text-anchor="middle" fill="#fb7185" font-size="13">Excessive</text>
      <text x="426" y="124" text-anchor="middle" fill="#c5d8e3" font-size="12">EWOC forbids it</text>
      <text x="36" y="176" fill="#e8f2f7" font-size="13">Reference activity for the prior: 6 MBq. Cohort size 3–6 evaluable.</text>
      <text x="36" y="200" fill="#c5d8e3" font-size="13">MTA if ≥6 treated at that activity and target posterior >50%, or n≥21.</text>
      <text x="36" y="228" fill="#9bb3c2" font-size="12">This is not 3+3. Do not quote BOIN — Novartis wrote BHLRM.</text>
    </svg>`
  };
"""

BOOT = r'''

(function bootP000000() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p000000: COURSE not ready");
    return;
  }
  const MOD_ID = "p000000";
  const ALIASES = { p000000: 1, P000000: 1, cpbq663: 1, CPBQ663A12101: 1 };
  function isMod(id) {
    return !!ALIASES[id] || String(id || "").toLowerCase() === "p000000";
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== MOD_ID && m.id !== "cpbq663");
  COURSE.modules.unshift(MODULE000);

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
  const extras = P000000V;
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
        const map = { dwj155: "suv", ac225: "therapy", ga68: "annihilation", theranostic: "psma", dose: "decaymath", dosimetry: "spect", bhlrm: "deauville" };
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
      if (!pager || document.getElementById("startP000000")) return;
      const b = document.createElement("button");
      b.id = "startP000000";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open P000000 protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP && !/P000000/.test(heroP.textContent || "")) {
        heroP.textContent = "New: P000000 is Novartis CPBQ663A12101 — all 170 pages of ²²⁵Ac / ⁶⁸Ga DWJ155 (HER2 peptide theranostic, Phase I). P0000 is CLARIFY. P0P is GP-STAR. P01 is BET-121. Same audio, atlas, and live-image player.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    const alias = { dwj155: "therapy", ac225: "therapy", ga68: "pet", theranostic: "pet", dose: "decay", dosimetry: "spect", bhlrm: "talk" };
    if (Theater.clips) {
      Theater.clips.dwj155 = Theater.clips.therapy || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.ac225 = Theater.clips["speak-alpha"] || Theater.clips.therapy || Theater.clips.talk;
      Theater.clips.ga68 = Theater.clips.pet || Theater.clips.fdg || Theater.clips.talk;
      Theater.clips.theranostic = Theater.clips.pet || Theater.clips.therapy;
      Theater.clips.dose = Theater.clips.decay || Theater.clips.talk;
      Theater.clips.dosimetry = Theater.clips.spect || Theater.clips.talk;
      Theater.clips.bhlrm = Theater.clips.talk || Theater.clips.lecture;
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
    "title": "How to use this P000000 · DWJ155 protocol audiobook",
    "audio": [
        "This module is P000000 — a full read-through of Novartis clinical protocol C P B Q 663 A 12 101, version 01 clean, dated 4 May 2026.",
        "Compounds: actinium-225 D W J 155 for therapy, and gallium-68 D W J 155 for PET. D W J 155 is a H E R 2-targeting peptide. First-in-human Phase I, open-label, multi-center, in advanced solid tumors.",
        "Imaging first: about 250 megabecquerels of gallium-68 D W J 155, window 200 to 275. Eligible participants then receive actinium-225 D W J 155 starting at 2 megabecquerels, 54 microcuries, every 6 weeks. Provisional levels 2, 4, 6, and 8 megabecquerels. Bayesian hierarchical model plus E W O C.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a first-in-human alpha-emitting H E R 2 radioligand protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. One hundred and seventy protocol pages, plus this intro. After the last page, take the module quiz — starting activity, gallium-68 window, theranostic pair, E W O C, and who is allowed in.",
    ],
    "chips": ["P000000", "170 pages", "Web speech", "Protocol page on screen", "Same studio player"],
    "visual": "dwj155",
    "image": "assets/protocol/cpbq/n001.jpg",
    "cap": "CPBQ663A12101 cover — ²²⁵Ac / ⁶⁸Ga DWJ155 HER2 peptide (Novartis Phase I)",
    "pearls": [
        "P000000 is the Novartis DWJ155 audiobook — same play, pause, speed, atlas, and live-image dock as GP-STAR, CLARIFY, and BET-121.",
        "See the ligand on PET (gallium-68). Treat with the same ligand labeled actinium-225. Starting therapy activity is 2 megabecquerels.",
        "Teaching copy of a confidential sponsor protocol. Do not treat from this module.",
    ],
}

QUIZ = [
    {
        "q": "Starting administered activity of ²²⁵Ac-DWJ155 in CPBQ663A12101?",
        "choices": [
            "7.40 GBq, copied from ¹⁷⁷Lu-PSMA",
            "2 MBq (54 µCi) every 6 weeks, up to 4 cycles at DL1",
            "185 MBq ±10%, the GP-STAR diagnostic window",
            "Unspecified — the site picks any alpha activity"
        ],
        "a": 1,
        "why": "§4.3.1 and §6.5.1: starting activity 2 MBq (54 µCi), Q6W, up to 4 cycles at dosage level 1.",
    },
    {
        "q": "What activity of ⁶⁸Ga-DWJ155 is given?",
        "choices": [
            "The same 2 MBq as the therapy",
            "Approximately 250 MBq, acceptable range 200–275 MBq",
            "370 MBq like FDG",
            "No gallium-68 is administered — SPECT uses actinium-225 only"
        ],
        "a": 1,
        "why": "§6.5.1: single administration of approximately 250 MBq (200–275). Given at screening and again at end of treatment.",
    },
    {
        "q": "What is DWJ155, structurally?",
        "choices": [
            "A trastuzumab antibody labeled with lutetium-177",
            "An FDG analogue",
            "A HER2-targeting peptide with a metal chelator, labeled ⁶⁸Ga for PET or ²²⁵Ac for α therapy",
            "A bone-seeking bisphosphonate"
        ],
        "a": 2,
        "why": "§2.1 / protocol summary: identical ligand, two radionuclides. Not an antibody, not FDG.",
    },
    {
        "q": "How does a participant become eligible for ²²⁵Ac-DWJ155 after consent?",
        "choices": [
            "Any solid tumor on CT is enough",
            "⁶⁸Ga-DWJ155 PET at screening; tumor positivity (or known HER2 IHC ≥1+ in specified NSCLC cohorts) gates therapy manufacturing",
            "A negative PET is required so marrow is spared",
            "Randomisation versus placebo PET"
        ],
        "a": 1,
        "why": "Summary + §8.3.2: imaging IMP first. Therapy IMP is manufactured centrally only after eligibility confirmation.",
    },
    {
        "q": "Provisional ²²⁵Ac dosage levels listed for BHLRM?",
        "choices": [
            "1, 2, 3 MBq only",
            "2, 4, 6 and 8 MBq per cycle, with Q6W / Q8W / Q4W schedules",
            "100, 150, 200 mCi like I-131",
            "Weight-based MBq/kg with no listed levels"
        ],
        "a": 1,
        "why": "Appendix 10.4 / Table 6-2 language: 2, 4, 6, 8 MBq. Q6W opens first. Intermediate levels may be added.",
    },
    {
        "q": "Which statistical brake stops unsafe escalation?",
        "choices": [
            "Classic 3+3 with no model",
            "BOIN with target DLT 0.30, copied from BET-121",
            "Bayesian hierarchical logistic regression (BHLRM) plus EWOC — do not escalate into excessive-toxicity posterior",
            "Continual reassessment with no EWOC"
        ],
        "a": 2,
        "why": "§10.4. This protocol is BHLRM + EWOC, not 3+3 and not BOIN. DLT window = first cycle of the chosen schedule.",
    },
    {
        "q": "Planned sample size (order of magnitude)?",
        "choices": [
            "3 patients total",
            "Escalation at least 21 (cap 48); expansion about 135 across HER2-spectrum breast, NSCLC ± AGA, GEA, bladder",
            "383, copied from CLARIFY",
            "No cap — enroll until the isotope runs out"
        ],
        "a": 1,
        "why": "Protocol summary: escalation minimum 21; expansion approximately 135 in molecularly defined groups.",
    },
    {
        "q": "How many ⁶⁸Ga-DWJ155 PET scans does each treated participant get by schedule?",
        "choices": [
            "None — only SPECT after actinium-225",
            "One optional scan if the investigator is curious",
            "Two: screening (eligibility) and end-of-treatment, same technique",
            "Weekly PET for 36 months"
        ],
        "a": 2,
        "why": "§8.3.2: ⁶⁸Ga-DWJ155 is administered twice — baseline and EoT.",
    },
    {
        "q": "SPECT/CT dosimetry clock after ²²⁵Ac (Cycle 1 subgroup)?",
        "choices": [
            "A single 1-hour scan, copied from FDG",
            "Approximately 4, 24, 48, 72, 96, 168 and 312 hours; void immediately before each SPECT; DL1 drops the latest points",
            "No imaging after therapy",
            "Only a chest x-ray in Japan"
        ],
        "a": 1,
        "why": "Table 1-7. SPECT uses the therapeutic emission — no extra radiopharmaceutical. ~3 participants per cohort.",
    },
    {
        "q": "Tumor types named in the Phase I indication?",
        "choices": [
            "Prostate cancer only",
            "Advanced HER2+, HR+/HER2− or TNBC, NSCLC, HER2 3+ or 2+ GEA, and bladder cancer",
            "Thyroid cancer after RAI failure",
            "Pediatric neuroblastoma only"
        ],
        "a": 1,
        "why": "§1.1 purpose. First escalation cohort is advanced HER2+ breast after ≥2 prior advanced lines.",
    },
    {
        "q": "Cardiac safety imaging on ²²⁵Ac?",
        "choices": [
            "None — alphas never hit myocardium",
            "TTE preferred (or MUGA) every 12 weeks until EoT, locally reviewed before the next ²²⁵Ac dose if they coincide",
            "Daily ECG only, no imaging",
            "Cardiac MRI at hour 0 only"
        ],
        "a": 1,
        "why": "Schedule of activities: TTE or MUGA every 12 weeks (−7 d). ECG also around dosing.",
    },
    {
        "q": "How long is long-term follow-up after the last ²²⁵Ac dose?",
        "choices": [
            "24 hours",
            "7 days, like a diagnostic PET",
            "36 months from the last ²²⁵Ac-DWJ155 administration",
            "Until the next protocol amendment"
        ],
        "a": 2,
        "why": "Protocol summary / SoA: 36-month long-term follow-up. 180-day safety FU sits inside that clock.",
    },
]


HEADER_RE = re.compile(
    r"Novartis\s+Confidential\s+Page\s+\d+\s+of\s+170\s+Amended Protocol Version v01 \(Clean\)\s+Protocol No\.\s*CPBQ663A12101",
    re.I,
)
PAGE_RE = re.compile(r"Page\s+\d+\s+of\s+170", re.I)
CONF_RE = re.compile(r"Property of Novartis.*?(14-Oct-2024|disclosed)", re.I | re.S)

SPEAK = [
    (r"\[225Ac\]Ac-DWJ155", "actinium-225 D W J 155"),
    (r"\[68Ga\]Ga-DWJ155", "gallium-68 D W J 155"),
    (r"225Ac-DWJ155", "actinium-225 D W J 155"),
    (r"68Ga-DWJ155", "gallium-68 D W J 155"),
    (r"\[225Ac\]Ac", "actinium-225"),
    (r"\[68Ga\]Ga", "gallium-68"),
    (r"\b225Ac\b", "actinium-225"),
    (r"\b68Ga\b", "gallium-68"),
    (r"\bAc-225\b", "actinium-225"),
    (r"\bGa-68\b", "gallium-68"),
    (r"\bDWJ155\b", "D W J 155"),
    (r"CPBQ663A12101", "C P B Q 663 A 12 101"),
    (r"\bBHLRM\b", "B H L R M"),
    (r"\bEWOC\b", "E W O C"),
    (r"\bHER2\b", "H E R 2"),
    (r"\bNSCLC\b", "N S C L C"),
    (r"\bTNBC\b", "T N B C"),
    (r"\bGEA\b", "G E A"),
    (r"\bAGA\b", "A G A"),
    (r"\bAGAs\b", "A G As"),
    (r"\bIHC\b", "I H C"),
    (r"\bISH\b", "I S H"),
    (r"\bDLT\b", "D L T"),
    (r"\bDLTs\b", "D L Ts"),
    (r"\bSAE\b", "S A E"),
    (r"\bSAEs\b", "S A Es"),
    (r"\bRECIST\b", "RECIST"),
    (r"\bSPECT/CT\b", "SPECT C T"),
    (r"\bPET/CT\b", "PET C T"),
    (r"\bPET/MRI\b", "PET M R I"),
    (r"\bQ6W\b", "every 6 weeks"),
    (r"\bQ8W\b", "every 8 weeks"),
    (r"\bQ4W\b", "every 4 weeks"),
    (r"\bEoT\b", "end of treatment"),
    (r"\bTTE\b", "T T E"),
    (r"\bMUGA\b", "M U G A"),
    (r"\bALARA\b", "A L A R A"),
    (r"\bIMPs\b", "I M Ps"),
    (r"\bIMP\b", "I M P"),
    (r"\bIRT\b", "I R T"),
    (r"\bFiH\b", "first in human"),
    (r"\bFIH\b", "first in human"),
    (r"\bCDK4/6i\b", "C D K 4 6 inhibitor"),
    (r"\bASCO/CAP\b", "ASCO CAP"),
    (r"\bµCi\b", "microcuries"),
    (r"\bμCi\b", "microcuries"),
    (r"\bMBq\b", "megabecquerels"),
    (r"\bmSv\b", "millisieverts"),
    (r"\bµg\b", "micrograms"),
    (r"\bμg\b", "micrograms"),
]


def clean_text(raw: str) -> str:
    t = raw.encode("utf-8", "replace").decode("utf-8")
    t = t.replace("\u0000", "")
    t = re.sub(r"(\w)-\n(\w)", r"\1\2", t)
    t = CONF_RE.sub(" ", t)
    t = HEADER_RE.sub(" ", t)
    t = PAGE_RE.sub(" ", t)
    t = t.replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " ")
    t = t.replace("²²⁵Ac", "225Ac").replace("⁶⁸Ga", "68Ga").replace("¹⁷⁵Lu", "175Lu")
    t = t.replace("≤", " less than or equal to ").replace("≥", " greater than or equal to ")
    t = t.replace("×", " times ").replace("±", " plus or minus ").replace("·", " ")
    t = t.replace("–", "-").replace("—", "-")
    t = re.sub(r"\.{4,}", " ", t)
    t = re.sub(r"[ \t]+", " ", t)
    lines = []
    for ln in t.splitlines():
        s = ln.strip()
        if not s:
            continue
        if re.fullmatch(r"[\.…]{3,}", s):
            continue
        if re.fullmatch(r"Novartis|Confidential", s, re.I):
            continue
        lines.append(s)
    t = " ".join(lines)
    t = re.sub(r"\s+", " ", t).strip()
    t = re.sub(r"Amended Protocol Version v01 \(Clean\)", " ", t)
    t = re.sub(r"Protocol No\.\s*CPBQ663A12101", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def speakify(t: str) -> str:
    for pat, rep in SPEAK:
        t = re.sub(pat, rep, t)
    t = t.replace("plus or minus ", "plus or minus ")
    return t


def chunk_audio(text: str, limit: int = 480) -> list[str]:
    text = text.strip()
    if not text:
        return ["This protocol page is a figure or table grid. Read the photograph on the left while the next pages carry the surrounding text."]
    parts: list[str] = []
    buf = ""
    # split on sentence-ish boundaries
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
                # hard wrap long table rows
                while len(bit) > limit:
                    cut = bit.rfind(" ", 0, limit)
                    if cut < 80:
                        cut = limit
                    parts.append(bit[:cut].strip())
                    bit = bit[cut:].strip()
                buf = bit
    if buf:
        parts.append(buf)
    return [p for p in parts if p][:18]  # cap runaway table pages


def title_from(n: int, cleaned: str) -> str:
    SPECIAL = {
        1: "Cover · Novartis CPBQ663A12101 · ²²⁵Ac / ⁶⁸Ga DWJ155",
        2: "Table of contents (1)",
        3: "Table of contents (2)",
        4: "Table of contents (3)",
        5: "Table of contents (4)",
        6: "Table of contents (5) · list of tables start",
        7: "List of tables",
        8: "List of figures · study design and flow",
        9: "Amendment 1 · 04 May 2026 formatting",
        10: "§1 Protocol summary · purpose and primary endpoints",
        11: "Summary · secondary endpoints, FIH design, n",
        12: "Summary · escalation populations from cohort 2",
        13: "Summary · remaining expansion groups and visit schedule",
        14: "Figure 1-1 · study design",
        15: "Figure 1-2 · study flow",
        36: "§2 Introduction · DWJ155 binds HER2 ECD",
        38: "§2.3 Benefit / risk · theranostic pair and α dose",
        42: "§4 Study design · FIH escalation then expansion",
        45: "§4.3.1 Starting ²²⁵Ac activity 2 MBq (54 µCi)",
        62: "§6.5.1 Starting activity and ⁶⁸Ga 250 MBq window",
        87: "§8.3.2 ⁶⁸Ga PET twice · SPECT after ²²⁵Ac",
        135: "Appendix 4 · BHLRM design",
    }
    if n in SPECIAL:
        return SPECIAL[n]
    # first 90 chars of cleaned as a heading-ish title
    head = cleaned.split(".")[0].strip()
    head = re.sub(r"^\d+(\.\d+)*\s+", "", head)
    if len(head) > 88:
        head = head[:85].rsplit(" ", 1)[0] + "…"
    if len(head) < 12:
        head = f"Protocol body · page {n}"
    return head


def vis_for(n: int, text: str) -> str:
    t = text.lower()
    if n in (1, 10, 11, 14, 15, 36):
        return "dwj155"
    if n in (38, 39, 45, 46, 62) or ("2 mbq" in t and "225" in t):
        return "dose" if n >= 42 else "ac225"
    if n in (87,) or "250 mbq" in t or "68ga-dwj155 pet" in t:
        return "ga68"
    if "theranostic" in t or ("identical ligand" in t):
        return "theranostic"
    if "bhlrm" in t or "ewoc" in t or n >= 135 and n <= 142:
        return "bhlrm"
    if "spect" in t or "dosimetry" in t or n in (35,):
        return "dosimetry"
    if "225ac" in t and ("mbq" in t or "actinium" in t):
        return "ac225"
    if "68ga" in t or "gallium" in t:
        return "ga68"
    if n <= 9:
        return "dwj155"
    return "dwj155"


def pearls_for(n: int, title: str) -> list[str]:
    SPECIAL = {
        1: [
            "Novartis Phase I of a HER2-targeting peptide labeled ²²⁵Ac (therapy) or ⁶⁸Ga (PET).",
            "Protocol CPBQ663A12101 v01 clean, content-final 4 May 2026. Teaching copy only.",
        ],
        10: [
            "Primary: safety/tolerability of ²²⁵Ac-DWJ155 and recommended dosage(s) for later evaluation.",
            "Population: advanced HER2+, HR+/HER2− or TNBC, NSCLC, HER2 3+/2+ GEA, bladder.",
        ],
        11: [
            "Secondary: ORR/DCR/DOR/PFS by RECIST 1.1, PK after secular equilibrium, ⁶⁸Ga safety.",
            "Escalation ≥21; expansion ~135. Imaging IMP then therapy IMP each cycle.",
        ],
        45: [
            "Start 2 MBq (54 µCi). Mass dose ~40 µg at that activity, up to ~400 µg if activity climbs.",
            "Margins vs NOAEL of cold ¹⁷⁵Lu-DWJ155 in dog; radiation, not pharmacology, is the risk driver.",
        ],
        62: [
            "²²⁵Ac start: 2 MBq Q6W × up to 4 cycles. ⁶⁸Ga: ~250 MBq (200–275).",
            "Both are IMPs. ⁶⁸Ga is the imaging drug; ²²⁵Ac is the study treatment.",
        ],
        87: [
            "⁶⁸Ga PET twice (screening + EoT). Positive = at least one measurable lesion with uptake.",
            "SPECT/CT after ²²⁵Ac uses the therapeutic emission — no extra tracer.",
        ],
        135: [
            "BHLRM shares DLT data across Q6W, Q8W, Q4W. EWOC forbids excessive-toxicity posteriors.",
            "Not 3+3. Not BOIN. DLT window = first cycle of the chosen schedule.",
        ],
    }
    if n in SPECIAL:
        return SPECIAL[n]
    return [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script.",
    ]


def chips_for(n: int) -> list[str]:
    return ["CPBQ663A12101", f"p{n}/170", "Full protocol text"]


def render_pages(doc: fitz.Document) -> None:
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    for i in range(doc.page_count):
        page = doc[i]
        zoom = 888.0 / float(page.rect.width)
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        dest = IMG_DIR / f"n{i+1:03d}.jpg"
        pix.save(str(dest), jpg_quality=72)
        if (i + 1) % 40 == 0:
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
            "chips": chips_for(n),
            "visual": vis_for(n, cleaned),
            "image": f"assets/protocol/cpbq/n{n:03d}.jpg",
            "cap": f"Protocol page {n} of {doc.page_count} — CPBQ663A12101 v01",
            "pearls": pearls_for(n, title),
        })

    module = {
        "id": MOD_ID,
        "num": "P000000",
        "title": "P000000 · Novartis DWJ155 protocol · CPBQ663A12101 full 170 pages",
        "time": "~6 h spoken",
        "weight": "Entire signed protocol",
        "atlasKey": "nuclear",
        "lessons": lessons,
        "quiz": QUIZ,
    }
    header = (
        "/* Novartis CPBQ663A12101 / P000000 ²²⁵Ac-DWJ155 + ⁶⁸Ga-DWJ155 protocol audiobook.\n"
        "   Loads after p0protocol.js / p01bet.js / p00clarify.js. Mutates window.COURSE. */\n\n"
    )
    js = header + SVGS + "\n  const MODULE000 = " + json.dumps(module, ensure_ascii=False, indent=2) + ";\n" + BOOT
    OUT.write_text(js)
    print(f"wrote {OUT} bytes={OUT.stat().st_size} lessons={len(lessons)} quiz={len(QUIZ)}")


if __name__ == "__main__":
    main()
