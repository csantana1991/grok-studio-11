#!/usr/bin/env python3
"""Emit public/studio/p01bet.js — BET-PSMA-121 (v5.1) protocol audiobook."""
from __future__ import annotations

import json
from pathlib import Path

OUT = Path("/workspace/public/studio/p01bet.js")

SVGS = r"""
  const P01V = {
    bet121: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#7cb8ff" font-size="15">BET-121 · ¹⁷⁷Lu-rhPSMA-10.1 · integrated Phase 1 & 2</text>
      <rect x="16" y="38" width="488" height="36" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="61" text-anchor="middle" fill="#e8f2f7" font-size="12">Open-label · PSMA+ mCRPC · Blue Earth Therapeutics · NCT05413850</text>
      <rect x="16" y="86" width="232" height="88" rx="8" fill="#10232e" stroke="#9bb3c2"/>
      <text x="132" y="110" text-anchor="middle" fill="#9bb3c2" font-size="13">Phase 1 · completed</text>
      <text x="132" y="130" text-anchor="middle" fill="#c5d8e3" font-size="12">Post-taxane mCRPC</text>
      <text x="132" y="148" text-anchor="middle" fill="#c5d8e3" font-size="12">5.55 then 7.40 GBq q6w</text>
      <text x="132" y="166" text-anchor="middle" fill="#9bb3c2" font-size="11">BOIN · n ≈ 12 · SRC</text>
      <rect x="272" y="86" width="232" height="88" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="388" y="110" text-anchor="middle" fill="#3ee0c4" font-size="13">Phase 2 · active</text>
      <text x="388" y="130" text-anchor="middle" fill="#c5d8e3" font-size="12">Chemo-naïve for mCRPC</text>
      <text x="388" y="148" text-anchor="middle" fill="#c5d8e3" font-size="12">2A / 2B / optional 2C</text>
      <text x="388" y="166" text-anchor="middle" fill="#9bb3c2" font-size="11">n ≈ 70 · PSA50 primary</text>
      <rect x="16" y="186" width="488" height="56" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="260" y="210" text-anchor="middle" fill="#f5d76e" font-size="13">Kidney 23 Gy (Phase 2 absolute 35 Gy) · marrow 2 Gy (abs 2.5)</text>
      <text x="260" y="230" text-anchor="middle" fill="#c5d8e3" font-size="12">SPECT/CT dosimetry · ±10% activity · extravasation = SAE</text>
      <text x="260" y="266" text-anchor="middle" fill="#9bb3c2" font-size="12">Lu-177 T½ 6.7 d  ·  radiohybrid Glu-urea + SiFA + ¹⁷⁷Lu-DO3A</text>
    </svg>`,
    rhpsma: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">Radiohybrid rhPSMA-10.1 · four pieces, one ligand</text>
      <rect x="18" y="48" width="110" height="70" rx="8" fill="#1a2a14" stroke="#3ee0c4"/>
      <text x="73" y="78" text-anchor="middle" fill="#3ee0c4" font-size="12">Glu-urea</text>
      <text x="73" y="98" text-anchor="middle" fill="#c5d8e3" font-size="11">PSMA motif</text>
      <rect x="142" y="48" width="110" height="70" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="197" y="78" text-anchor="middle" fill="#7cb8ff" font-size="12">peptide</text>
      <text x="197" y="98" text-anchor="middle" fill="#c5d8e3" font-size="11">spacer</text>
      <rect x="266" y="48" width="110" height="70" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="321" y="78" text-anchor="middle" fill="#fb7185" font-size="12">SiFA</text>
      <text x="321" y="98" text-anchor="middle" fill="#c5d8e3" font-size="11">¹⁸F acceptor</text>
      <rect x="390" y="48" width="112" height="70" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="446" y="78" text-anchor="middle" fill="#f5d76e" font-size="12">¹⁷⁷Lu-DO3A</text>
      <text x="446" y="98" text-anchor="middle" fill="#c5d8e3" font-size="11">β− therapy</text>
      <text x="260" y="150" text-anchor="middle" fill="#e8f2f7" font-size="13">PSMA = GCPII / FOLH1 · 750-aa type-II glycoprotein · 100–1000× on PC</text>
      <text x="260" y="178" text-anchor="middle" fill="#c5d8e3" font-size="12">10.1 is 7.3C minus a propanoate on the linker (pre-IND 155824).</text>
      <text x="260" y="206" text-anchor="middle" fill="#9bb3c2" font-size="12">Mouse kidney %ID/g at 24 h: 10.1 3.3%  ·  7.3C 16.7%  ·  PSMA-I&T 24.5%</text>
      <text x="260" y="236" text-anchor="middle" fill="#c5d8e3" font-size="12">Same targeting motif and ¹⁷⁷Lu as Pluvicto — different ligand pharmacokinetics.</text>
      <text x="260" y="262" text-anchor="middle" fill="#9bb3c2" font-size="12">Not FDG. Not an antibody. Small-molecule radiohybrid RLT.</text>
    </svg>`,
    lu177: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#3ee0c4" font-size="16">Lutetium-177 · therapeutic radionuclide</text>
      <text x="260" y="68" text-anchor="middle" fill="#f5d76e" font-size="26">T½ 6.7 days  ·  β−</text>
      <text x="260" y="98" text-anchor="middle" fill="#7cb8ff" font-size="14">Administered activity tolerance ±10% of prescribed</text>
      <text x="36" y="136" fill="#e8f2f7" font-size="13">Phase 1: 5.55 GBq (150 mCi) then 7.40 GBq (200 mCi) · max 3 · q6w</text>
      <text x="36" y="160" fill="#e8f2f7" font-size="13">2A: 2 × 10.00 GBq then up to 5 × 7.40 GBq q6w</text>
      <text x="36" y="184" fill="#e8f2f7" font-size="13">2B: up to 8 × 7.40 GBq · first 3 at q3w then q6w</text>
      <text x="36" y="208" fill="#e8f2f7" font-size="13">2C optional: 2 × 14.80 GBq then up to 4 × 7.40 GBq q6w</text>
      <text x="36" y="236" fill="#9bb3c2" font-size="12">IV large-bore cannula · 0.9% flush · POSLUMA 296 MBq is Phase 1 only</text>
    </svg>`,
    phase2: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="24" text-anchor="middle" fill="#3ee0c4" font-size="15">Phase 2 schema · n ≈ 70 · chemo-naïve for mCRPC</text>
      <rect x="16" y="40" width="152" height="120" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="92" y="64" text-anchor="middle" fill="#3ee0c4" font-size="13">Cohort 2A</text>
      <text x="92" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">2 × 10.00 GBq</text>
      <text x="92" y="106" text-anchor="middle" fill="#c5d8e3" font-size="11">then ≤5 × 7.40</text>
      <text x="92" y="126" text-anchor="middle" fill="#9bb3c2" font-size="11">all q6w</text>
      <text x="92" y="146" text-anchor="middle" fill="#9bb3c2" font-size="11">n ≈ 30</text>
      <rect x="184" y="40" width="152" height="120" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="260" y="64" text-anchor="middle" fill="#f5d76e" font-size="13">Cohort 2B</text>
      <text x="260" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">≤8 × 7.40 GBq</text>
      <text x="260" y="106" text-anchor="middle" fill="#c5d8e3" font-size="11">first 3 q3w</text>
      <text x="260" y="126" text-anchor="middle" fill="#9bb3c2" font-size="11">then q6w</text>
      <text x="260" y="146" text-anchor="middle" fill="#9bb3c2" font-size="11">n ≈ 30</text>
      <rect x="352" y="40" width="152" height="120" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="428" y="64" text-anchor="middle" fill="#fb7185" font-size="13">Cohort 2C</text>
      <text x="428" y="86" text-anchor="middle" fill="#e8f2f7" font-size="12">optional · TSC</text>
      <text x="428" y="106" text-anchor="middle" fill="#c5d8e3" font-size="11">2 × 14.80 GBq</text>
      <text x="428" y="126" text-anchor="middle" fill="#9bb3c2" font-size="11">then ≤4 × 7.40 q6w</text>
      <text x="428" y="146" text-anchor="middle" fill="#9bb3c2" font-size="11">n ≈ 10</text>
      <text x="260" y="186" text-anchor="middle" fill="#e8f2f7" font-size="13">Primary: PSA50 from baseline to end of treatment</text>
      <text x="260" y="210" text-anchor="middle" fill="#f5d76e" font-size="12">Futility: estimated PSA50 ≤20% in a cohort → TSC may close it</text>
      <text x="260" y="234" text-anchor="middle" fill="#c5d8e3" font-size="12">Front-loading: tumour Gy/GBq highest Cycle 1 (↓32% C1→C2, ↓49% C1→C3)</text>
      <text x="260" y="260" text-anchor="middle" fill="#9bb3c2" font-size="12">Randomised 2A vs 2B · open-label · ~25 centres US/EU/UK</text>
    </svg>`,
    kidney: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#fb7185" font-size="16">Dose-limiting organ = kidney</text>
      <rect x="24" y="46" width="230" height="88" rx="10" fill="#10232e" stroke="#fb7185"/>
      <text x="139" y="78" text-anchor="middle" fill="#fb7185" font-size="14">Kidney 23 Gy</text>
      <text x="139" y="102" text-anchor="middle" fill="#c5d8e3" font-size="12">Phase 2 absolute 35 Gy</text>
      <text x="139" y="122" text-anchor="middle" fill="#9bb3c2" font-size="11">re-consent if exceeding 23</text>
      <rect x="266" y="46" width="230" height="88" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="381" y="78" text-anchor="middle" fill="#f5d76e" font-size="14">Marrow 2 Gy</text>
      <text x="381" y="102" text-anchor="middle" fill="#c5d8e3" font-size="12">Phase 2 absolute 2.5 Gy</text>
      <text x="381" y="122" text-anchor="middle" fill="#9bb3c2" font-size="11">image- and blood-based</text>
      <text x="36" y="160" fill="#e8f2f7" font-size="13">Also tracked: salivary 24 Gy · lacrimal calculated, not a stop</text>
      <text x="36" y="184" fill="#e8f2f7" font-size="13">eGFR ≥60 mL/min (CKD-EPI 2009) at eligibility</text>
      <text x="36" y="208" fill="#c5d8e3" font-size="12">Phase 1 mean kidney 0.299 Gy/GBq · 10.1 clears faster than 7.3C</text>
      <text x="36" y="232" fill="#9bb3c2" font-size="12">No further cycles if Table 3 limits would be exceeded (Phase 1 hard stop)</text>
    </svg>`,
    dosimetry: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#7cb8ff" font-size="16">SPECT/CT dosimetry clock</text>
      <rect x="16" y="44" width="240" height="120" rx="10" fill="#10232e" stroke="#7cb8ff"/>
      <text x="136" y="72" text-anchor="middle" fill="#7cb8ff" font-size="13">Phase 1 · every cycle</text>
      <text x="136" y="98" text-anchor="middle" fill="#e8f2f7" font-size="13">3 · 24 · 48 · 168 h</text>
      <text x="136" y="122" text-anchor="middle" fill="#c5d8e3" font-size="12">+ PK blood (Phase 1 only)</text>
      <text x="136" y="144" text-anchor="middle" fill="#9bb3c2" font-size="11">well/gamma counter Ph1 only</text>
      <rect x="264" y="44" width="240" height="120" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="384" y="72" text-anchor="middle" fill="#3ee0c4" font-size="13">Phase 2 · simplified</text>
      <text x="384" y="98" text-anchor="middle" fill="#e8f2f7" font-size="13">C1: 3, 24, 48, 168 h</text>
      <text x="384" y="122" text-anchor="middle" fill="#c5d8e3" font-size="12">later: single 48 h</text>
      <text x="384" y="144" text-anchor="middle" fill="#9bb3c2" font-size="11">2B first two keep 168 h</text>
      <text x="260" y="192" text-anchor="middle" fill="#f5d76e" font-size="13">Same hybrid SPECT/CT camera each cycle · Lu calibration vial</text>
      <text x="260" y="218" text-anchor="middle" fill="#c5d8e3" font-size="12">No extra radiopharmaceutical — SPECT uses the therapeutic emission</text>
      <text x="260" y="242" text-anchor="middle" fill="#9bb3c2" font-size="12">Results back before the next cycle so kidney/marrow caps can stop dosing</text>
    </svg>`,
    psa50: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#3ee0c4" font-size="16">Phase 2 primary endpoint · PSA50</text>
      <text x="260" y="72" text-anchor="middle" fill="#f5d76e" font-size="26">≥50% PSA drop, baseline → EoT</text>
      <text x="260" y="104" text-anchor="middle" fill="#7cb8ff" font-size="14">Surrogate anti-tumour biomarker · PCWG3 / RECIST around it</text>
      <rect x="24" y="126" width="220" height="70" rx="8" fill="#10232e" stroke="#4ade80"/>
      <text x="134" y="156" text-anchor="middle" fill="#4ade80" font-size="13">Win</text>
      <text x="134" y="178" text-anchor="middle" fill="#c5d8e3" font-size="12">PSA50 counted at EoT</text>
      <rect x="276" y="126" width="220" height="70" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="386" y="156" text-anchor="middle" fill="#fb7185" font-size="13">Futility</text>
      <text x="386" y="178" text-anchor="middle" fill="#c5d8e3" font-size="12">estimated PSA50 ≤20%</text>
      <text x="260" y="224" text-anchor="middle" fill="#c5d8e3" font-size="12">PSA progression alone does not force stop if the investigator still sees benefit</text>
      <text x="260" y="246" text-anchor="middle" fill="#9bb3c2" font-size="12">Secondary: PSA-PFS, rPFS, OS, CR/PR, Gy/GBq, FACT-P, TEAEs</text>
    </svg>`,
    boin: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">BOIN dose-finding · Liu and Yuan 2015 · Phase 1 completed</text>
      <text x="260" y="56" text-anchor="middle" fill="#7cb8ff" font-size="14">Target DLT rate 0.30  ·  safety boundary ±40%</text>
      <rect x="16" y="74" width="156" height="80" rx="8" fill="#10232e" stroke="#4ade80"/>
      <text x="94" y="104" text-anchor="middle" fill="#4ade80" font-size="13">Escalate</text>
      <text x="94" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">observed DLT ≤ 0.236</text>
      <rect x="182" y="74" width="156" height="80" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="260" y="104" text-anchor="middle" fill="#f5d76e" font-size="13">Stay / add</text>
      <text x="260" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">0.236 – 0.359</text>
      <rect x="348" y="74" width="156" height="80" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="426" y="104" text-anchor="middle" fill="#fb7185" font-size="13">De-escalate</text>
      <text x="426" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">observed DLT ≥ 0.359</text>
      <text x="36" y="180" fill="#e8f2f7" font-size="13">DLT window: first dose → 6 weeks after last dose of that subject</text>
      <text x="36" y="204" fill="#c5d8e3" font-size="12">Cohort A n=3 at 5.55 GBq · Cohort B n=9 at 7.40 GBq · SRC decides RP2D</text>
      <text x="36" y="232" fill="#9bb3c2" font-size="12">Phase 2: TSC (not BOIN) opens 2C after ~35 dosed in 2A/2B</text>
    </svg>`
  };
"""

BOOT = r'''
(function bootP01Bet() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p01bet: COURSE not ready");
    return;
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== "bet121protocol");
  COURSE.modules.unshift(MODULE01);

  const MOD_ID = "bet121protocol";

  function protocolSrc(lesson) {
    if (!lesson || !lesson.image) return "";
    try { return (typeof resolveAsset === "function") ? resolveAsset(lesson.image) : lesson.image; }
    catch (e) { return lesson.image; }
  }
  function currentP01Lesson() {
    const st = window.NMBState;
    if (!st || st.moduleId !== MOD_ID) return null;
    const mod = COURSE.modules.find(m => m.id === MOD_ID);
    return mod && mod.lessons && mod.lessons[st.lesson];
  }
  function pinProtocolPage() {
    const lesson = currentP01Lesson();
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
      if (mod && mod.id === MOD_ID && lesson && lesson.image) {
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
      if (window.NMBState && NMBState.moduleId === MOD_ID) keepPinned();
    };
  }

  const extras = P01V;
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
      if (mod && mod.id === MOD_ID && raw) {
        if (extras[raw]) return raw;
        const map = { bet121: "suv", rhpsma: "psma", lu177: "decaymath", phase2: "therapy", kidney: "mag3", dosimetry: "spect", psa50: "suv", boin: "deauville" };
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
      if (!pager || document.getElementById("startBet121")) return;
      const b = document.createElement("button");
      b.id = "startBet121";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open BET-121 protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP) {
        heroP.textContent = "New: BET-121 (P01) reads all 120 pages of lutetium-177 rhPSMA-10.1 RLT in mCRPC. P00 is CLARIFY. P0P is GP-STAR. Same audio, atlas, and live-image player. Modules 00–13 stay the ABNM audiobook. Modules 14–30 add DR Core.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    if (Theater.clips) {
      Theater.clips.bet121 = Theater.clips.therapy || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.rhpsma = Theater.clips.therapy || Theater.clips.pet;
      Theater.clips.lu177 = Theater.clips["speak-betaminus"] || Theater.clips.decay || Theater.clips.talk;
      Theater.clips.phase2 = Theater.clips.therapy || Theater.clips.talk;
      Theater.clips.kidney = Theater.clips.kidney || Theater.clips.mag3 || Theater.clips.talk;
      Theater.clips.dosimetry = Theater.clips.spect || Theater.clips.talk;
      Theater.clips.psa50 = Theater.clips.pet || Theater.clips.fdg || Theater.clips.talk;
      Theater.clips.boin = Theater.clips.talk || Theater.clips.lecture;
    }
    if (typeof Theater.showVideo === "function") {
      const origShow = Theater.showVideo.bind(Theater);
      Theater.showVideo = function (on) {
        if (window.NMBState && NMBState.moduleId === MOD_ID) {
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
    if (q.get("mod") === MOD_ID && typeof openModule === "function") {
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

GENERIC_PEARLS = [
    "This lesson is the source protocol text, spoken in full.",
    "Match the page image on the left with the highlighted script.",
]


def vis_for(n: int) -> str:
    if n in (24, 27, 40, 63, 107, 108, 109, 110):
        return "rhpsma"
    if n in (11, 12, 13, 35, 36, 46, 62, 64, 65):
        return "lu177"
    if n in (15, 16, 21, 34, 48, 49, 50, 51, 52, 111, 112, 113, 115, 116):
        return "phase2"
    if n in (28, 32, 39, 41, 42, 43, 44, 53, 54, 71, 89, 90):
        return "kidney" if n in (32, 39, 43, 44, 53, 54) else "dosimetry"
    if n in (32, 39, 43, 44, 53, 54, 58, 60):
        return "kidney"
    if n in (18, 19, 20, 29, 51, 55, 56, 67, 99, 101, 118, 119, 120):
        return "psa50"
    if n in (38, 45, 47, 97, 98):
        return "boin"
    if n in (28, 41, 42, 71, 72, 74, 88, 89, 90, 113, 116):
        return "dosimetry"
    return "bet121"


def chips_for(n: int, extra: list[str] | None = None) -> list[str]:
    base = ["BET-121", f"p{n}/120", "Full protocol text"]
    if extra:
        return extra
    return base


# Page bodies: imported from bet121_pages.py (120 tuples).
# Tuple: (n, title, audio[], pearls|None, chips|None, visual|None)

INTRO = {
    "title": "How to use this BET-121 protocol audiobook",
    "audio": [
        "This module is a full read-through of clinical protocol B E T P S M A 121, nickname BET-121, version 5.1, dated 24 February 2025.",
        "Sponsor: Blue Earth Therapeutics Limited, Oxford, a Bracco company. Investigational product: lutetium-177 radiohybrid P S M A 10.1. I N D 156938. Open-label integrated Phase 1, completed, and Phase 2, active, in P S M A-positive metastatic castrate-resistant prostate cancer. ClinicalTrials.gov N C T 05413850.",
        "Phase 1, done: post-taxane m C R P C, 5.55 then 7.40 gigabecquerels every 6 weeks, B O I N dose-finding. Phase 2: chemo-naïve for m C R P C after at least one novel androgen-axis drug. About 70 subjects, cohorts 2A, 2B, and optional 2C. Primary endpoint: P S A 50 from baseline to end of treatment.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a lutetium-177 P S M A radioligand-therapy protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. One hundred and twenty protocol pages, plus this intro. After the last page, take the module quiz — activity windows, kidney caps, P S A 50, SPECT clocks, and who is allowed in Phase 2.",
    ],
    "chips": ["120 pages", "Web speech", "Protocol page on screen", "Same studio player"],
    "visual": "bet121",
    "image": "assets/protocol/bet/b001.jpg",
    "cap": "BET-PSMA-121 cover — lutetium-177 rhPSMA-10.1 RLT in mCRPC",
    "pearls": [
        "Same play, pause, speed, atlas, and live-image dock as every other studio module.",
        "The photograph of each protocol page sits in the lesson so you can read while you listen.",
        "Phase 1 is historical in v5.1. Phase 2 is the live trial: chemo-naïve for mCRPC, PSA50 primary, kidney 23 Gy with a 35 Gy absolute cap.",
    ],
}

QUIZ = [
    {
        "q": "What is the permitted tolerance on administered therapeutic ¹⁷⁷Lu-rhPSMA-10.1 activity?",
        "choices": [
            "±20%, the POSLUMA diagnostic window",
            "±10% of the prescribed activity; more than 10% is an overdose AE",
            "Uncalibrated — residual in the syringe is ignored",
            "Exactly the labelled GBq with zero window"
        ],
        "a": 1,
        "why": "Section 8.5.2: ±10% on the therapeutic IMP. Diagnostic POSLUMA overdose bar is >20%. A >10% therapeutic overdose is reported as an AE."
    },
    {
        "q": "Which statement correctly describes the Phase 2 cohorts?",
        "choices": [
            "All subjects get 7.40 GBq q6w for 3 cycles, copied from Phase 1 Cohort B",
            "2A: two 10.00 GBq then up to five 7.40 GBq q6w; 2B: up to eight 7.40 GBq, first three q3w then q6w; optional 2C: two 14.80 GBq then up to four 7.40 GBq q6w",
            "Randomised Pluvicto 7.40 GBq versus cabazitaxel",
            "Single 14.80 GBq dose then observation"
        ],
        "a": 1,
        "why": "Synopsis and Figure 5. 2C opens only if the TSC reviews ~35 dosed in 2A/2B and agrees."
    },
    {
        "q": "What is the Phase 2 primary endpoint?",
        "choices": [
            "Overall survival at 5 years",
            "Incidence of DLTs in Cycle 1",
            "Number of subjects with ≥50% PSA reduction from baseline to end of treatment (PSA50)",
            "Agreement with local PSMA PET"
        ],
        "a": 2,
        "why": "Section 5.2.1. Twelve-week PSA50 is a secondary. Futility is estimated PSA50 ≤20% in a cohort."
    },
    {
        "q": "Kidney dose-limiting organ numbers in this protocol?",
        "choices": [
            "Kidney 2 Gy, marrow 23 Gy (swapped)",
            "Kidney 23 Gy (Phase 2 absolute 35 Gy with re-consent); marrow 2 Gy (absolute 2.5 Gy)",
            "No kidney cap — salivary 24 Gy is the only stop",
            "Kidney 50 Gy from ICRP 60"
        ],
        "a": 1,
        "why": "Table 3 (Phase 1) and Table 11 (Phase 2). Lacrimal is calculated but is not a discontinuation limit."
    },
    {
        "q": "Physical half-life of lutetium-177 as written in BET-121?",
        "choices": [
            "68 minutes",
            "12.7 hours",
            "6.7 days, beta-minus",
            "73 hours"
        ],
        "a": 2,
        "why": "Section 1 / 8.4.1. Copper-64 is 12.7 h (CLARIFY). Gallium-68 is 68 min. Do not mix them."
    },
    {
        "q": "What is ¹⁷⁷Lu-rhPSMA-10.1, structurally?",
        "choices": [
            "An FDG analogue",
            "A monoclonal antibody (J591 class)",
            "Radiohybrid: glutamate-urea PSMA motif + peptide spacer + SiFA + ¹⁷⁷Lu-DO3A; 10.1 is 7.3C minus a linker propanoate",
            "A bone-seeking bisphosphonate"
        ],
        "a": 2,
        "why": "Figure 1 and Section 8.4.1. Same targeting motif and lutetium-177 as PSMA-617 — different ligand pharmacokinetics, faster renal clearance than 7.3C."
    },
    {
        "q": "Who may enrol in Phase 2 versus who enrolled in Phase 1?",
        "choices": [
            "Both phases require prior taxane for mCRPC",
            "Phase 1: post-taxane mCRPC (≥1 NAAD + 1–2 taxane). Phase 2: chemo-naïve for mCRPC (progressed after ≥1 NAAD; taxane only allowed in the hormone-sensitive era)",
            "Phase 2 is hormone-sensitive M0 disease",
            "Phase 2 requires prior Pluvicto"
        ],
        "a": 1,
        "why": "Inclusion 14a vs 14b. Prior PSMA RLT, Sr-89, Sm-153, Re-186/188, Ra-223, or hemi-body RT is an exclusion in both."
    },
    {
        "q": "POSLUMA (flotufolastat F-18) in this protocol?",
        "choices": [
            "296 MBq (8 mCi) ±20%, Phase 1 diagnostic IMP only; Phase 2 uses a locally approved PSMA PET with central eligibility read",
            "Given every cycle as the therapeutic",
            "200 MBq Day 1, like CLARIFY copper-64",
            "Not used in either phase"
        ],
        "a": 0,
        "why": "IND 141561 is Phase 1 only. Section 8.1.2 and 8.5.2.2. Phase 2 PSMA PET is central-read, locally approved tracer."
    },
    {
        "q": "SPECT/CT dosimetry clocks?",
        "choices": [
            "A single 1-hour post-injection scan, like ⁶⁸Ga-PSMA-11",
            "Phase 1 every cycle at 3, 24, 48, 168 h. Phase 2 Cycle 1 at 3, 24, 48, 168 h, then a single 48 h (Cohort 2B first two cycles keep 168 h)",
            "No SPECT — only planar whole-body",
            "Well-counter blood samples replace imaging in Phase 2"
        ],
        "a": 1,
        "why": "Section 9.4.3. No well/gamma counter in Phase 2. SPECT uses the therapeutic emission — no extra radiopharmaceutical."
    },
    {
        "q": "Renal eligibility gate?",
        "choices": [
            "Any creatinine",
            "eGFR ≥60 mL/min by CKD-EPI 2009 (Levey 2009) in both phases",
            "eGFR ≥30 is enough if the PI agrees",
            "Measured GFR with ⁵¹Cr-EDTA only"
        ],
        "a": 1,
        "why": "Inclusion 12. Kidney is the expected dose-limiting organ. Stable bisphosphonate ≥6 weeks plus eGFR ≥60 is the only bisphosphonate exception."
    },
    {
        "q": "Planned sample size?",
        "choices": [
            "10 first-in-human",
            "383 (that is CLARIFY)",
            "Approximately 83 total: ≥12 Phase 1 (A≥3, B≥9) plus ~70 Phase 2",
            "2,000"
        ],
        "a": 2,
        "why": "Section 16.16. Phase 2 ~30 per randomised cohort, ~10 if 2C opens; extras to 2A/2B if 2C stays closed."
    },
    {
        "q": "Extravasation of the therapeutic IMP is classified as?",
        "choices": [
            "A protocol deviation only",
            "A serious adverse event (SAE); inform the investigator and Sponsor, follow local radiation-safety rules",
            "Expected Grade 1, not reported",
            "A DLT by definition"
        ],
        "a": 1,
        "why": "Section 8.5.2. Large-bore cannula, 0.9% flush, inspect for swelling. Peripheral access that will not flush → consider central access."
    },
    {
        "q": "Which prior treatments exclude a subject?",
        "choices": [
            "Any antibiotic",
            "Prior PSMA-targeted RLT, Sr-89, Sm-153, Re-186/188, Ra-223, or hemi-body irradiation",
            "Prior NAAD",
            "Prior radical prostatectomy"
        ],
        "a": 1,
        "why": "Exclusion 17. Background ADT continues. Other prostate-cancer drugs while on IMP are prohibited; G-CSF/TPO agonists → discontinue."
    },
    {
        "q": "This trial is blinded how?",
        "choices": [
            "Double-blind versus placebo",
            "Not applicable — open-label; no control product",
            "Patient-blinded, investigator-unblinded",
            "Central readers are blinded to all imaging"
        ],
        "a": 1,
        "why": "Section 8.3. Open-label. Phase 2 randomises 2A vs 2B 1:1 by IRT; that is allocation, not masking."
    },
]


def unpack(row):
    n = row[0]
    title = row[1]
    audio = list(row[2])
    pearls = row[3] if len(row) > 3 and row[3] else GENERIC_PEARLS
    chips = row[4] if len(row) > 4 and row[4] else chips_for(n)
    visual = row[5] if len(row) > 5 and row[5] else vis_for(n)
    return n, title, audio, pearls, chips, visual


def main() -> None:
    from bet121_pages import PAGES as PAGE_TUPLES

    lessons = [INTRO]
    seen: set[int] = set()
    for row in PAGE_TUPLES:
        n, title, audio, pearls, chips, visual = unpack(row)
        if n in seen:
            raise SystemExit(f"duplicate page {n}")
        seen.add(n)
        lessons.append({
            "title": f"Page {n} of 120 · {title}",
            "audio": audio,
            "chips": chips,
            "visual": visual,
            "image": f"assets/protocol/bet/b{n:03d}.jpg",
            "cap": f"Protocol page {n} of 120 — {title}",
            "pearls": pearls,
        })
    missing = [i for i in range(1, 121) if i not in seen]
    if missing:
        raise SystemExit(f"missing pages: {missing}")

    module = {
        "id": "bet121protocol",
        "num": "P01",
        "title": "BET-121 protocol · ¹⁷⁷Lu-rhPSMA-10.1 full 120 pages",
        "time": "~4 h spoken",
        "weight": "Entire signed protocol",
        "atlasKey": "nuclear",
        "lessons": lessons,
        "quiz": QUIZ,
    }
    header = (
        "/* BET-PSMA-121 / BET-121 full protocol audiobook module for NucMed Board Studio.\n"
        "   Loads after the main studio script (and after p0protocol.js / p00clarify.js). Mutates window.COURSE. */\n\n"
    )
    js = header + SVGS + "\n  const MODULE01 = " + json.dumps(module, ensure_ascii=False, indent=2) + ";\n" + BOOT
    OUT.write_text(js)
    print(f"wrote {OUT} bytes={OUT.stat().st_size} lessons={len(lessons)} quiz={len(QUIZ)}")


if __name__ == "__main__":
    main()
