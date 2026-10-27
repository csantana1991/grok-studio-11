/* BET-PSMA-121 / BET-121 full protocol audiobook module for NucMed Board Studio.
   Loads after the main studio script (and after p0protocol.js / p00clarify.js). Mutates window.COURSE. */


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

  const MODULE01 = {
  "id": "bet121protocol",
  "num": "P01",
  "title": "BET-121 protocol · ¹⁷⁷Lu-rhPSMA-10.1 full 120 pages",
  "time": "~4 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this BET-121 protocol audiobook",
      "audio": [
        "This module is a full read-through of clinical protocol B E T P S M A 121, nickname BET-121, version 5.1, dated 24 February 2025.",
        "Sponsor: Blue Earth Therapeutics Limited, Oxford, a Bracco company. Investigational product: lutetium-177 radiohybrid P S M A 10.1. I N D 156938. Open-label integrated Phase 1, completed, and Phase 2, active, in P S M A-positive metastatic castrate-resistant prostate cancer. ClinicalTrials.gov N C T 05413850.",
        "Phase 1, done: post-taxane m C R P C, 5.55 then 7.40 gigabecquerels every 6 weeks, B O I N dose-finding. Phase 2: chemo-naïve for m C R P C after at least one novel androgen-axis drug. About 70 subjects, cohorts 2A, 2B, and optional 2C. Primary endpoint: P S A 50 from baseline to end of treatment.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a lutetium-177 P S M A radioligand-therapy protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. One hundred and twenty protocol pages, plus this intro. After the last page, take the module quiz — activity windows, kidney caps, P S A 50, SPECT clocks, and who is allowed in Phase 2."
      ],
      "chips": [
        "120 pages",
        "Web speech",
        "Protocol page on screen",
        "Same studio player"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b001.jpg",
      "cap": "BET-PSMA-121 cover — lutetium-177 rhPSMA-10.1 RLT in mCRPC",
      "pearls": [
        "Same play, pause, speed, atlas, and live-image dock as every other studio module.",
        "The photograph of each protocol page sits in the lesson so you can read while you listen.",
        "Phase 1 is historical in v5.1. Phase 2 is the live trial: chemo-naïve for mCRPC, PSA50 primary, kidney 23 Gy with a 35 Gy absolute cap."
      ]
    },
    {
      "title": "Page 1 of 120 · Cover · BET-PSMA-121 integrated Phase 1 and 2",
      "audio": [
        "Clinical study protocol. An open-label, multicentre, integrated Phase 1 and 2 study to evaluate the safety, tolerability, radiation dosimetry and anti-tumour activity of lutetium-177 radiohybrid P S M A 10.1 injection in men with metastatic castrate-resistant prostate cancer.",
        "Study number: B E T P S M A 121. Phase 1 and 2. ClinicalTrials.gov N C T 05413850. W H O U T number U 1111-1314-4775. E U C T number 2024-511537-35.",
        "I N D 156938 for lutetium-177 rhPSMA-10.1 injection. I N D 141561 for rhPSMA-7.3 fluorine-18, Phase 1 only. Protocol version 5.1, 24 February 2025. Sponsor: Blue Earth Therapeutics Limited, a Bracco company.",
        "Revision chronology: version 1, 15 November 2021, through version 5.0, 12 December 2024, then this 5.1. Confidential. Based on protocol template S O P-M E D-002-A D-2."
      ],
      "chips": [
        "BET-121",
        "v5.1",
        "NCT05413850",
        "Open-label"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b001.jpg",
      "cap": "Protocol page 1 of 120 — Cover · BET-PSMA-121 integrated Phase 1 and 2",
      "pearls": [
        "BET-PSMA-121 is open-label integrated Phase 1 (completed) and Phase 2 (active) lutetium-177 rhPSMA-10.1 radioligand therapy in PSMA-positive mCRPC.",
        "NCT05413850. IND 156938 (therapeutic). POSLUMA / rhPSMA-7.3 F-18 was the Phase 1 diagnostic IMP only."
      ]
    },
    {
      "title": "Page 2 of 120 · Confidentiality statement",
      "audio": [
        "This document contains confidential information that must not be disclosed to anyone other than the Sponsor, the Investigator Team, Safety Review Committee, host organisation, and members of the Research Ethics Committee, unless authorised to do so.",
        "Page 2 of 120 is a short confidentiality page. Keep it in the site file with the signed protocol. It is not scientific content — it is the legal wrapper around an investigational radiopharmaceutical."
      ],
      "chips": [
        "BET-121",
        "p2/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b002.jpg",
      "cap": "Protocol page 2 of 120 — Confidentiality statement",
      "pearls": [
        "SRC, investigator team, host, and REC may see the protocol. Nobody else without authorisation.",
        "Teaching walk-through is not a substitute for the signed site protocol, IB, or IRB file."
      ]
    },
    {
      "title": "Page 3 of 120 · Sponsor title page · CMO signature 24 February 2025",
      "audio": [
        "Blue Earth Therapeutics Limited, clinical study protocol. Protocol number B E T P S M A 121. Version 5.1, 24 February 2025.",
        "Investigational product: for Phase 1, completed — lutetium-177 rhPSMA-10.1 injection and POSLUMA, flotufolastat F 18, previously rhPSMA-7.3 fluorine-18. For Phase 2 — lutetium-177 rhPSMA-10.1 injection only.",
        "Sponsor address: The Oxford Science Park, Magdalen Centre, Robert Robinson Avenue, Oxford O X 4 4 G A, United Kingdom. Telephone plus 44 1865 784186. Coordinating investigator: Professor Doctor med. James Nagarajah, Radboud University Medical Center, Nijmegen.",
        "Approval: Doctor Daniel Stevens, M B B Ch, B Sc, D P M, F F P M, Chief Medical Officer. Signed 24 February 2025, 4:25 P M Central European Time. This information is for investigators of this product and is subject to recall at any time."
      ],
      "chips": [
        "BET-121",
        "CMO signed",
        "Oxford",
        "Radboud"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b003.jpg",
      "cap": "Protocol page 3 of 120 — Sponsor title page · CMO signature 24 February 2025",
      "pearls": [
        "CMO Dr Daniel Stevens signed v5.1 on 24-Feb-2025. Coordinating investigator is Prof. James Nagarajah at Radboud.",
        "Phase 2 drops the diagnostic IMP. Only lutetium-177 rhPSMA-10.1 is given in Phase 2."
      ]
    },
    {
      "title": "Page 4 of 120 · Protocol agreement · investigator signature block",
      "audio": [
        "Protocol agreement. In my formal capacity as investigator, my duties include providing Blue Earth Therapeutics Limited with the information outlined in the protocol. All information pertaining to the study will be held strictly confidential, and that confidentiality applies to all study staff at this site.",
        "On behalf of the study staff and myself, I agree to maintain the procedures required to carry out the study in accordance with accepted Good Clinical Practice principles, applicable regulatory requirements, and to abide by the terms of this protocol.",
        "Protocol number B E T P S M A 121. Title: open-label multicentre integrated Phase 1 and 2 of lutetium-177 rhPSMA-10.1 in men with m C R P C. Version 5.1, date 24 February 2025. Investigator signature, date, printed name and title, site number, site name, address, phone."
      ],
      "chips": [
        "BET-121",
        "p4/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b004.jpg",
      "cap": "Protocol page 4 of 120 — Protocol agreement · investigator signature block",
      "pearls": [
        "The investigator signs that GCP and this protocol will be followed — not a local rewrite.",
        "Confidentiality extends to every staff member who handles the IMP or the eCRF."
      ]
    },
    {
      "title": "Page 5 of 120 · Table of contents · pages 5–24 of the book map",
      "audio": [
        "Table of contents. List of tables page 10. List of figures page 10. List of abbreviations page 11. Protocol synopsis page 14.",
        "Section 1 Background page 24, including non-clinical and clinical overviews. Section 2 Study rationale page 25: background, rationale, preliminary Phase 1 data, known and potential benefits and risks.",
        "Section 3 Study objectives page 33 — Phase 1 completed, Phase 2 primary, secondary, and exploratory. Section 4 Study design page 34: Phase 1 completed, Phase 2, and follow-up. Section 5 Criteria for evaluation page 54. Section 6 Subject selection page 56."
      ],
      "chips": [
        "BET-121",
        "p5/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b005.jpg",
      "cap": "Protocol page 5 of 120 — Table of contents · pages 5–24 of the book map",
      "pearls": [
        "Synopsis is pages 14–23 — that is the board-review core if you only have one sitting.",
        "Phase 1 sections are marked completed as of protocol version 5.0."
      ]
    },
    {
      "title": "Page 6 of 120 · Table of contents · selection, medications, treatments, procedures",
      "audio": [
        "Section 6.1 study population, 6.2 inclusion, 6.3 exclusion. Section 7 prior and concurrent medications: prior, concomitant, prohibited — page 61.",
        "Section 8 study treatments page 62: lutetium-177 rhPSMA-10.1, diagnostic rhPSMA-7.3 for Phase 1 only, assignment, blinding — open-label, formulation, supply, administration, accountability, compliance, end of study.",
        "Section 9 study procedures page 66: history, ECOG, exam, measurements, demographics, P S A sampling, radiological assessments, vitals, E C G."
      ],
      "chips": [
        "BET-121",
        "p6/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b006.jpg",
      "cap": "Protocol page 6 of 120 — Table of contents · selection, medications, treatments, procedures",
      "pearls": [
        "Treatments live in section 8. Extravasation as SAE is under administration instructions.",
        "No control product. This is open-label — blinding is not applicable."
      ]
    },
    {
      "title": "Page 7 of 120 · Table of contents · imaging, labs, PK, PROs, evaluations by visit",
      "audio": [
        "Section 9.3.3 adverse events. 9.4 tumour imaging and dosimetry: P S M A diagnostic PET C T, contrast C T or M R I and technetium-99m bone scan, SPECT C T for dosimetry, image interpretation.",
        "9.5 clinical laboratory measurements including haematology, biochemistry, coagulation, thyroid panel Phase 1 only, P S A, urinalysis. 9.6 pharmacokinetic measurements Phase 1 only. 9.7 patient-reported outcomes Phase 2 only: FACT-P and FACT-R N T.",
        "Section 10 evaluations by visit page 75. Phase 1 screening Day minus 42, Day 1 Cycle 1, subsequent cycles, 24 to 168 hour windows, six-week interval, twelve-weekly imaging. Phase 2 Cohorts 2A and 2C, and separately Cohort 2B."
      ],
      "chips": [
        "BET-121",
        "p7/120",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b007.jpg",
      "cap": "Protocol page 7 of 120 — Table of contents · imaging, labs, PK, PROs, evaluations by visit",
      "pearls": [
        "PK blood and well-counter work are Phase 1 only. Phase 2 has no well/gamma counter.",
        "FACT-P is a Phase 2 secondary; FACT-RNT is exploratory."
      ]
    },
    {
      "title": "Page 8 of 120 · Table of contents · Cohort 2B visits through statistical methods",
      "audio": [
        "Phase 2 Cohort 2B: screening, Cycles 1 and 2, Cycles 3 to 8, twelve-weekly imaging. End of treatment visit. Follow-up: efficacy and safety.",
        "Section 11 imaging and calibration protocols page 88: P S M A diagnostic imaging Phase 1 and Phase 2, contrast C T M R I and bone scan, SPECT C T, ancillary equipment calibration including dose calibrator and well/gamma counter, image transfer.",
        "Section 12 adverse event reporting page 90. Section 13 discontinuation and replacement page 94. Section 14 protocol deviations page 96. Section 15 data safety monitoring page 97. Section 16 statistical methods page 98."
      ],
      "chips": [
        "BET-121",
        "p8/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b008.jpg",
      "cap": "Protocol page 8 of 120 — Table of contents · Cohort 2B visits through statistical methods",
      "pearls": [
        "Well/gamma counter calibration is written, then later the protocol says none in Phase 2.",
        "SRC governs Phase 1; TSC governs Phase 2 including whether 2C opens."
      ]
    },
    {
      "title": "Page 9 of 120 · Table of contents · analysis, data, ethics, appendices",
      "audio": [
        "Statistics continue: demographic and baseline, primary endpoints Phase 1 and Phase 2, secondary efficacy, safety, P K, P R O, labs, vitals, physical, E C G, exposure to IMP and concomitant medication, planned interim analysis, sample size and randomisation page 101.",
        "Section 17 data collection, retention and monitoring page 102. Section 18 regulatory, ethical and study oversight page 104: I R B and I E C, amendments, subject information and consent, publications. Section 19 references page 107.",
        "Appendix 1 study schedule page 111. Appendix 2 Prostate Cancer Clinical Trials Working Group 3 criteria page 118."
      ],
      "chips": [
        "BET-121",
        "p9/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b009.jpg",
      "cap": "Protocol page 9 of 120 — Table of contents · analysis, data, ethics, appendices",
      "pearls": [
        "PCWG3 is Appendix 2 — that is how PSA and radiographic progression are defined.",
        "Appendix 1 holds the actual visit grids for 2A/2C and 2B."
      ]
    },
    {
      "title": "Page 10 of 120 · List of tables and figures",
      "audio": [
        "Fourteen tables. Table 1: Phase 1 normal organ dosimetry summary, page 28. Table 2: Phase 1 radioactivity levels, page 36. Table 3: Phase 1 conventional organ estimated dose limits, page 39 — kidney 23 gray, marrow 2 gray.",
        "Table 4: lutetium-177 rhPSMA-7.3C activities at Technical University of Munich, page 40. Tables 5 and 6: 7.3C and single-subject 10.1 absorbed doses. Table 7: mouse renal uptake 10.1 versus 7.3C versus P S M A I and T. Table 8: B O I N escalation rule. Table 9: Phase 2 dose delay and discontinuation. Tables 10 and 11: modelled cumulative organ doses and Phase 2 absolute caps — kidney 23 / 35 gray, marrow 2 / 2.5 gray.",
        "Five figures. Figure 1: structure of lutetium-177 rhPSMA-10.1. Figure 2: Phase 1 schema. Figure 3: Phase 1 dose-ranging. Figure 4: mouse kidney uptake. Figure 5: Phase 2 schema."
      ],
      "chips": [
        "Tables 1–14",
        "Figures 1–5",
        "Kidney 23 Gy"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b010.jpg",
      "cap": "Protocol page 10 of 120 — List of tables and figures",
      "pearls": [
        "Memorise Table 3 (23 Gy kidney / 2 Gy marrow) and Table 11 (Phase 2 absolute 35 / 2.5 with re-consent).",
        "Figure 5 is the Phase 2 map you will draw from memory: 2A, 2B, optional 2C."
      ]
    },
    {
      "title": "Page 11 of 120 · Abbreviations · fluorine-18 through G C P",
      "audio": [
        "List of abbreviations. Fluorine-18. Lutetium-177. Technetium-99m. A D T androgen deprivation therapy. A E adverse event. A L P, A L T, A S T. B O I N Bayesian optimal interval. ce C T contrast-enhanced C T. C I confidence interval. C N S. C R complete response. C R O. C T. C T C A E. D I C O M. D L T dose-limiting toxicity. D N A. D P A. E A P efficacy analysis population. E B R T. E C G. E C O G. e C R F. E D C. E o T end of treatment. E U. FACT-P and FACT-R N T. F A S full analysis set. F D A. G B q gigabecquerel. G C P Good Clinical Practice."
      ],
      "chips": [
        "BET-121",
        "p11/120",
        "Full protocol text"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b011.jpg",
      "cap": "Protocol page 11 of 120 — Abbreviations · fluorine-18 through G C P",
      "pearls": [
        "BOIN = Bayesian optimal interval — Phase 1 dose-finding, not a 3+3.",
        "EoT is End of Treatment — that is the PSA50 time point in Phase 2."
      ]
    },
    {
      "title": "Page 12 of 120 · Abbreviations · G D P R through rhPSMA",
      "audio": [
        "G D P R. G n R H. Gy gray. H I P A A. H R hazard ratio. I B investigator brochure. I C F informed consent form. I C H. I E C. I M P investigational medicinal product. I N D. I R B. I R T interactive response technology. I V. M B q. m C R P C metastatic castrate-resistant prostate cancer. m C i millicurie. M I R D. M R I. m Sv. N A A D novel androgen axis drug. P C W G 3. P E T. P F S. P K. P K P P K population. P R partial response. P R O. P S A. P S A 50 — P S A decrease by at least 50 percent from baseline. P S M A. Q C. R C T. R E C I S T. rhPSMA radiohybrid prostate-specific membrane antigen."
      ],
      "chips": [
        "PSA50",
        "NAAD",
        "rhPSMA",
        "mCRPC"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b012.jpg",
      "cap": "Protocol page 12 of 120 — Abbreviations · G D P R through rhPSMA",
      "pearls": [
        "PSA50 is the Phase 2 primary: ≥50% PSA drop from baseline to EoT.",
        "NAAD = novel androgen axis drug — abiraterone, enzalutamide, apalutamide, darolutamide."
      ]
    },
    {
      "title": "Page 13 of 120 · Abbreviations · R L T through W B C",
      "audio": [
        "R L T radioligand therapy. R P 2 D recommended Phase 2 dose. r P F S radiographic progression-free survival. R S I reference safety information. S A E. S A P statistical analysis plan. Si F A silicon-fluoride acceptor moiety. SPECT. S R C Safety Review Committee. S U S A R. T 3, T 4. T E A E treatment-emergent adverse event. T S C Trial Steering Committee. T S H. U K. U L N. U P C R urine protein creatinine ratio. U S. W B C white blood cell."
      ],
      "chips": [
        "SRC",
        "TSC",
        "SiFA",
        "RP2D"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b013.jpg",
      "cap": "Protocol page 13 of 120 — Abbreviations · R L T through W B C",
      "pearls": [
        "SRC = Phase 1. TSC = Phase 2, including the 2C open/no-open call.",
        "SiFA is why this ligand is a radiohybrid — an ¹⁸F acceptor sitting next to the ¹⁷⁷Lu-DO3A."
      ]
    },
    {
      "title": "Page 14 of 120 · Synopsis · title, design, Phase 1 start",
      "audio": [
        "Protocol synopsis. Study title: open-label multicentre integrated Phase 1 and 2 of lutetium-177 rhPSMA-10.1 in men with m C R P C. Protocol B E T P S M A 121. Sponsor and funding organisation: Blue Earth Therapeutics Limited.",
        "This is an interventional, open-label, integrated Phase 1 and 2 to assess safety, radiation dosing regimen and anti-tumour activity of lutetium-177 radiohybrid P S M A 10.1 Injection, the therapeutic I M P, in P S M A-positive m C R P C that has progressed following prior therapy.",
        "Phase 1, completed: post-chemotherapy m C R P C after at least 1 N A A D and at least 1 course but no more than 2 courses of taxane-based chemotherapy. Eligible subjects sequentially enter 5.55 gigabecquerels, 150 millicuries, or 7.40 gigabecquerels, 200 millicuries, maximum 3 cycles at 6-week intervals. S R C confirmation for Cohort B. Kidneys expected to be the radiation dose-limiting organ."
      ],
      "chips": [
        "Synopsis",
        "Phase 1 done",
        "5.55 / 7.40 GBq"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b014.jpg",
      "cap": "Protocol page 14 of 120 — Synopsis · title, design, Phase 1 start",
      "pearls": [
        "Phase 1 = post-taxane. Phase 2 = chemo-naïve for mCRPC (taxane allowed only in the hormone-sensitive era).",
        "Two Phase 1 levels: 5.55 GBq and 7.40 GBq, max 3, q6w. Kidney is the expected DLO."
      ]
    },
    {
      "title": "Page 15 of 120 · Synopsis · Phase 1 BOIN and Phase 2 2A / 2B",
      "audio": [
        "All Phase 1 subjects undergo blood and SPECT C T dosimetry in the 7 days after each cycle. No subject receives additional radioactivity if it would exceed normal-organ limits. Escalation uses Bayesian optimal interval, B O I N, Liu and Yuan 2015, starting with 3 subjects in the low-dose cohort. Each subject is in only one cohort. Phase 1 subjects do not enter Phase 2.",
        "D L T window: first administration of therapeutic I M P until 6 weeks after the final cycle. After Cohort A completes that window, the S R C reviews and may open Cohort B. After at least 12 subjects have completed dosing and the D L T window, S R C selects an R P 2 D. Phase 1 data supported continuing to Phase 2.",
        "Phase 2: two to three dosing cohorts. About 30 subjects each in 2A and 2B. Cohort 2A: 2 doses at 10.00 gigabecquerels, 270 millicuries, then up to 5 doses at 7.40 gigabecquerels, all at 6-week intervals. Cohort 2B: up to 8 doses at 7.40 gigabecquerels; first 3 at 3-week intervals, remaining at 6-week intervals."
      ],
      "chips": [
        "BOIN",
        "2A 10 GBq",
        "2B q3w→q6w"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b015.jpg",
      "cap": "Protocol page 15 of 120 — Synopsis · Phase 1 BOIN and Phase 2 2A / 2B",
      "pearls": [
        "BOIN target DLT 0.3. Escalate if observed ≤0.236, add 0.236–0.359, de-escalate ≥0.359.",
        "2A front-loads two 10.00 GBq doses. 2B shortens the first three intervals to q3w."
      ]
    },
    {
      "title": "Page 16 of 120 · Synopsis · optional 2C, PSA50, futility, continuation",
      "audio": [
        "A Trial Steering Committee decision on whether to open Cohort 2C comes after about 35 subjects have been randomised and dosed in 2A and 2B. If opened, 2C is about 10 subjects: 2 doses at 14.80 gigabecquerels, 400 millicuries, then up to 4 additional 7.40 gigabecquerel doses, all q6w. If 2C is not opened, extra subjects go to 2A and 2B, about 35 each.",
        "Each cohort enrols to assess anti-tumour response using a decrease in P S A of at least 50 percent from baseline — P S A 50 — as a surrogate biomarker. After safety review, 2A or 2B may close for futility if estimated P S A 50 is 20 percent or less within a cohort, by T S C recommendation.",
        "Image-based dosimetry sets the maximum cycles an individual may receive without exceeding organ limits. If there is no radiological or clinical progression and no clinically significant organ toxicity, additional cycles up to the cohort maximum may continue even where kidney or marrow limits are cautiously exceeded per protocol rules, with re-consent."
      ],
      "chips": [
        "2C optional",
        "PSA50",
        "Futility ≤20%"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b016.jpg",
      "cap": "Protocol page 16 of 120 — Synopsis · optional 2C, PSA50, futility, continuation",
      "pearls": [
        "Futility bar is PSA50 ≤20% in a cohort — TSC call, not automatic.",
        "2C is optional high-activity front-load (14.80 GBq × 2). TSC, not SRC."
      ]
    },
    {
      "title": "Page 17 of 120 · Synopsis · rationale, VISION / TheraP / PSMAfore, Phase 1 objectives",
      "audio": [
        "Study rationale: prostate cancer is the second most frequent cancer diagnosis in men and the fifth leading cause of death worldwide. After N A A D, survival following progression is often less than 2 years. The only approved P S M A-targeting therapeutic is lutetium-177 P S M A-617, Pluvicto, from VISION. PSMAfore then showed r P F S benefit versus androgen-receptor pathway inhibitor change in taxane-naïve P S M A-positive m C R P C.",
        "Existing dosing regimens were often not informed by formal dose-ranging. Non-clinical dosimetry for lutetium-177 rhPSMA-10.1 indicates preserved tumour uptake with improved tumour-to-normal ratios, including kidney, the class dose-limiting organ. This integrated study aims to establish safety, recommended regimen, and preliminary efficacy.",
        "Phase 1 primary objective: establish the R P 2 D by safety and tolerability of I V lutetium-177 rhPSMA-10.1. Primary endpoints: incidence of D L Ts in the D L T window, and frequency and nature of T E A Es. Secondary: whole-body dosimetry and P K, organ-specific dosimetry after each administration, observed anti-tumour activity."
      ],
      "chips": [
        "VISION",
        "RP2D",
        "Kidney DLO"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b017.jpg",
      "cap": "Protocol page 17 of 120 — Synopsis · rationale, VISION / TheraP / PSMAfore, Phase 1 objectives",
      "pearls": [
        "VISION / TheraP / PSMAfore are the class evidence. This ligand is trying to widen the therapeutic index, especially kidney.",
        "Phase 1 primary is RP2D via DLT + TEAE — not PSA50. PSA50 is Phase 2 primary."
      ]
    },
    {
      "title": "Page 18 of 120 · Synopsis · Phase 1 secondary anti-tumour endpoints",
      "audio": [
        "Phase 1 secondary anti-tumour endpoints continue: number of subjects with at least 50 percent P S A reduction from baseline at 12 weeks after first therapeutic I M P. Number with best P S A response of at least 50 percent to the end of the dosing period.",
        "P S A progression-free survival by P C W G 3 or death. Number remaining P S A progression-free at fixed 6-month intervals. Duration of response from a 50 percent P S A drop until P S A return to baseline or radiographic progression or death.",
        "Radiographic P F S from first I M P to first radiographic progression or death. Number remaining radiographically progression-free at 6-month intervals. Confirmed C R or P R by P C W G 3-recommended R E C I S T 1.1."
      ],
      "chips": [
        "BET-121",
        "p18/120",
        "Full protocol text"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b018.jpg",
      "cap": "Protocol page 18 of 120 — Synopsis · Phase 1 secondary anti-tumour endpoints",
      "pearls": [
        "Even in Phase 1, PSA50 at 12 weeks is captured — it just is not the primary.",
        "PCWG3 + RECIST 1.1 is the radiographic language for both phases."
      ]
    },
    {
      "title": "Page 19 of 120 · Synopsis · Phase 1 remaining secondaries and Phase 2 primary",
      "audio": [
        "More Phase 1 secondaries: P S M A PET C T defined disease response after 2 treatment cycles. Overall survival at fixed 6-month intervals. Time to P S A progression. Time to radiographic progression.",
        "Phase 2 primary objective: evaluate the efficacy of lutetium-177 rhPSMA-10.1 Injection. Primary endpoint: number of subjects with an anti-tumour response defined as a 50 percent or greater reduction in P S A from baseline to the end of treatment.",
        "Phase 2 secondary efficacy starts: P S A 50 at 12 weeks after first I M P, P S A P F S from randomisation, remaining P S A progression-free at 6-month intervals, duration of response."
      ],
      "chips": [
        "Phase 2 primary",
        "PSA50 to EoT"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b019.jpg",
      "cap": "Protocol page 19 of 120 — Synopsis · Phase 1 remaining secondaries and Phase 2 primary",
      "pearls": [
        "Phase 2 primary is PSA50 baseline → EoT, not 12-week PSA50 (that is secondary).",
        "Clock for Phase 2 time-to-event endpoints starts at randomisation, not first dose."
      ]
    },
    {
      "title": "Page 20 of 120 · Synopsis · Phase 2 remaining secondaries, safety, dosimetry",
      "audio": [
        "Phase 2 secondaries continue: radiographic P F S from randomisation, remaining radiographically progression-free at 6-month intervals, confirmed C R or P R by R E C I S T 1.1, overall survival from randomisation to death, overall survival at 6-month intervals, time to P S A progression, time to radiographic progression.",
        "Secondary objective 2: further evaluate the safety profile using the R P 2 D. Endpoint: frequency and nature of T E A Es.",
        "Secondary objective 3: further characterise whole-body distribution and dosimetry. Endpoints: specific absorbed dose to tumour lesions in gray per gigabecquerel, and specific absorbed dose per organ in gray per gigabecquerel."
      ],
      "chips": [
        "BET-121",
        "p20/120",
        "Full protocol text"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b020.jpg",
      "cap": "Protocol page 20 of 120 — Synopsis · Phase 2 remaining secondaries, safety, dosimetry",
      "pearls": [
        "Tumour Gy/GBq and organ Gy/GBq stay on the Phase 2 secondary list — dosimetry is not abandoned after Phase 1.",
        "TEAEs are a Phase 2 secondary, not the primary. Primary is PSA50."
      ]
    },
    {
      "title": "Page 21 of 120 · Synopsis · FACT-P, FACT-RNT, sites, IMP, Phase 2 doses",
      "audio": [
        "Phase 2 secondary 4: influence on health-related quality of life by FACT-P, measured from baseline to end of treatment — change in total score, proportion improved or worsened, time to worsening of FACT-P.",
        "Exploratory: FACT-R N T, Functional Assessment of Cancer Therapy–Radionuclide Therapy, from baseline to E o T. Study sites: Phase 1 up to 5 centres in the U S and E U, completed. Phase 2 up to about 25 centres in the U S, E U, and United Kingdom.",
        "I M P: lutetium-177 rhPSMA-10.1. Phase 1 also used POSLUMA flotufolastat F 18. Phase 2 cohorts restated: 2A two times 10.00 gigabecquerels then up to five times 7.40 all q6w; 2B up to eight times 7.40, first three q3w then q6w; 2C optional two times 14.80 then up to four times 7.40 q6w."
      ],
      "chips": [
        "FACT-P",
        "~25 centres",
        "POSLUMA Ph1 only"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b021.jpg",
      "cap": "Protocol page 21 of 120 — Synopsis · FACT-P, FACT-RNT, sites, IMP, Phase 2 doses",
      "pearls": [
        "FACT-P is secondary; FACT-RNT is exploratory. Do not mix them on a quiz.",
        "Phase 2 footprint is ~25 centres US/EU/UK. Phase 1 was ≤5 US/EU."
      ]
    },
    {
      "title": "Page 22 of 120 · Synopsis · duration, interim analyses, statistics start",
      "audio": [
        "Overall study duration about 6 years from Q1 2022. Phase 1 about 3 years from Q1 2022, completed. Phase 2 about 3 years from Q1 2025. After centrally determined radiographic progression, death, or loss to follow-up, subjects enter passive long-term safety follow-up until death or loss to follow-up.",
        "Planned interim: T S C decides whether to open 2C based on safety and preliminary efficacy in 2A and 2B. After safety review, 2A or 2B may close for futility if estimated P S A 50 is 20 percent or less. No multiplicity adjustment — the study is exploratory.",
        "Phase 1: at least 12 subjects, Cohort A at least 3, Cohort B at least 9, for dose escalation and high-quality radiation dosimetry. Efficacy summarised descriptively with 95 percent confidence intervals. Phase 2: P S A 50 point estimates with 95 percent C Is per cohort; difference between cohorts is descriptive only."
      ],
      "chips": [
        "~6 years",
        "No multiplicity",
        "n≥12 Ph1"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b022.jpg",
      "cap": "Protocol page 22 of 120 — Synopsis · duration, interim analyses, statistics start",
      "pearls": [
        "No alpha spend / no multiplicity adjustment — labelled exploratory.",
        "Duration ~6 years from Q1 2022. Phase 2 clock starts Q1 2025."
      ]
    },
    {
      "title": "Page 23 of 120 · Synopsis · Phase 2 sample-size rationale",
      "audio": [
        "For Phase 2, the pooled cohort size of approximately 70 subjects was selected from simulations of P S A 50 response under a range of scenarios, then every 10 evaluable subjects after 20 using Bayesian posterior probabilities, Lee 2020. Average sample size in those simulations landed between 51 and 61, hence about 70, to estimate P S A 50 versus historical controls, Morris 2024, P S M Afore.",
        "Individual cohort size of about 30 provides exploratory dose-optimisation data without exposing an excessive number to the I M P at this stage. Cohort 2C at about 10 is for gross differences in efficacy or safety. If 2C data are compelling, a protocol amendment may increase its sample size."
      ],
      "chips": [
        "n ≈ 70",
        "Bayesian looks",
        "PSMAfore control"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b023.jpg",
      "cap": "Protocol page 23 of 120 — Synopsis · Phase 2 sample-size rationale",
      "pearls": [
        "Phase 2 n ≈ 70 pooled, ~30 per randomised cohort, ~10 if 2C opens.",
        "Bayesian look every 10 after the first 20 evaluable — not a frequentist alpha-spending design."
      ]
    },
    {
      "title": "Page 24 of 120 · Section 1 · Background · radiohybrid structure",
      "audio": [
        "Section 1. Background. The therapeutic I M P is lutetium-177 radiohybrid prostate-specific membrane antigen 10.1 injection, an investigational radiopharmaceutical solution containing rhPSMA-10.1, the chemical precursor / non-radioactive carrier, and lutetium-177 rhPSMA-10.1, the drug substance. Lutetium-177 has a radioactive half-life of 6.7 days and provides systemic radiation therapy by beta emission.",
        "It targets P S M A, also known as glutamate carboxypeptidase 2 or folate hydrolase 1, a 750-amino-acid type 2 transmembrane glycoprotein with 100- to 1000-fold increased expression on prostate cancer cells versus kidney, proximal small intestine, or salivary glands.",
        "Molecular structure: a P S M A binding motif, glutamate-urea, conjugated via a peptide-like spacer to a silicon-fluoride acceptor moiety, Si F A, and a lutetium-chelator complex, lutetium-177 D O 3 A. That is Figure 1 on this page. Non-clinical mouse and minipig studies showed typical P S M A-ligand biodistribution: rapid blood clearance, renal and bladder excretion, low brain, no blood-brain-barrier crossing. Details live in the I B."
      ],
      "chips": [
        "T½ 6.7 d",
        "Glu-urea",
        "SiFA",
        "¹⁷⁷Lu-DO3A"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b024.jpg",
      "cap": "Protocol page 24 of 120 — Section 1 · Background · radiohybrid structure",
      "pearls": [
        "Four pieces: Glu-urea + peptide spacer + SiFA + ¹⁷⁷Lu-DO3A. Half-life 6.7 days, beta-minus.",
        "PSMA = GCPII / FOLH1. Expression 100–1000× on prostate cancer vs kidney/salivary/gut."
      ]
    },
    {
      "title": "Page 25 of 120 · Section 1.2 clinical overview and 2.1 disease background",
      "audio": [
        "The Sponsor is running this open-label multicentre integrated Phase 1 and 2. As of protocol version 5.0 the Phase 1 treatment phase is completed and those sections are marked completed. A data summary is in Section 2.1.2. Phase 2 will enrol about 70 subjects randomised into 2 to 3 dosing cohorts.",
        "Section 2 study rationale. Prostate cancer: second most frequent male cancer diagnosis, fifth leading cause of death, typically diagnosed after age 65, often asymptomatic early, detected by P S A or abnormal D R E, confirmed on biopsy. P S A correlates with metastatic risk and recurrence.",
        "Primary treatment is radical or non-radical. After A D T, N A A Ds can stabilise m H S P C for about 12 to 24 months before castrate resistance. After N A A D in the castrate-resistant setting, taxane-based chemotherapy is the mainstay. Treatment options remain limited."
      ],
      "chips": [
        "BET-121",
        "p25/120",
        "Full protocol text"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b025.jpg",
      "cap": "Protocol page 25 of 120 — Section 1.2 clinical overview and 2.1 disease background",
      "pearls": [
        "Phase 1 is done. Everything labelled Phase 1 in v5.1 is historical for the Phase 2 investigator.",
        "Population for Phase 2 has progressed after ≥1 NAAD and has not had taxane for mCRPC."
      ]
    },
    {
      "title": "Page 26 of 120 · Rationale · why PSMA RLT, VISION / TheraP / PSMAfore",
      "audio": [
        "PARP inhibitors help a subset with germline D N A-repair mutations, but benefit after chemotherapy is limited. Systemic radiation via P S M A-targeted radiopharmaceuticals is emerging after A D T / N A A D in castrate-resistant disease. Therapeutic index depends on targeting specificity and the particle: beta particles cause D N A damage in tumour and in marrow while the compound is in plasma.",
        "About 10 percent of primary prostate tumours or metastases are P S M A-negative. High P S M A expression tracks with aggressive poorly differentiated disease. P S M A PET lets you select patients in advance and exclude P S M A-negative disease.",
        "Vehicles: antibodies such as J 591, or small molecules such as actinium-225 P S M A-617. In 2022 lutetium-177 vipivotide tetraxetan, Pluvicto, was approved after N A A D and taxane from VISION. TheraP compared it with cabazitaxel. PSMAfore showed r P F S benefit versus A R P I change in taxane-naïve P S M A-positive m C R P C."
      ],
      "chips": [
        "VISION",
        "TheraP",
        "PSMAfore",
        "~10% PSMA−"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b026.jpg",
      "cap": "Protocol page 26 of 120 — Rationale · why PSMA RLT, VISION / TheraP / PSMAfore",
      "pearls": [
        "PSMA PET is the gate: do not give RLT to PSMA-negative disease.",
        "Class evidence is VISION (post-chemo OS), TheraP (vs cabazitaxel), PSMAfore (taxane-naïve rPFS)."
      ]
    },
    {
      "title": "Page 27 of 120 · Section 2.1.1 rationale for this ligand · 7.3C and Augsburg 10.1",
      "audio": [
        "Absorbed dose to tumour correlates with treatment; whole-body SUV mean correlates with absorbed dose and with P S A response and survival. Existing P S M A R L T regimens were often not formally dose-ranged. Pre-therapeutic dosimetry with lutetium-177 rhPSMA-7.3C suggested similar tumour gray at lower injected activity than other lutetium-177 P S M A ligands. Tumour uptake was about 2.5 times higher than lutetium-177 P S M A I and T with similarly elevated key normal-organ uptake. Structure was then optimised to 10.1 to reduce normal-organ uptake, especially kidney.",
        "Fourteen subjects had received actual 10.1 under German Section 13 Subsection 2b (physician's exemption). Four of those received 1 gigabecquerel of 10.1 plus 1 gigabecquerel of P S M A I and T a week apart for pre-therapeutic dosimetry, then 7.40 to 7.70 gigabecquerels of 10.1 up to 6 cycles q6w. Tumour-to-kidney ratios improved versus I and T. All 4 had a P S A decrease; 3 of 4 had greater than 80 percent P S A drop; 1 complete biochemical and radiological response. As of July 2024 all were alive.",
        "Summary: same P S M A motif and same lutetium-177 as P S M A-617, plus encouraging named-patient data, plus non-clinical support for a better therapeutic index. That is why this I M P is in a formal trial."
      ],
      "chips": [
        "7.3C → 10.1",
        "Kidney clearance",
        "Augsburg"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b027.jpg",
      "cap": "Protocol page 27 of 120 — Section 2.1.1 rationale for this ligand · 7.3C and Augsburg 10.1",
      "pearls": [
        "10.1 is an optimisation of 7.3C (linker propanoate removed) aimed at faster renal clearance.",
        "Augsburg named-patient 10.1: improved T/kidney vs I&T; 3/4 with >80% PSA drop."
      ]
    },
    {
      "title": "Page 28 of 120 · Section 2.1.2 · Phase 1 preliminary dosimetry Table 1",
      "audio": [
        "Preliminary Phase 1 dosimetry: 13 subjects at Cycle 1, 11 at Cycle 2, 10 at Cycle 3. Highest absorbed dose per unit activity among at-risk organs: lacrimal glands, kidneys, and salivary glands — typical for lutetium-177 P S M A R L T. Tumour dosimetry was in a range that could plausibly benefit patients. Tumour-to-normal ratios compared favourably with the class. Phase 1 supported continuing to Phase 2. Full data live in the I B.",
        "Table 1, mean absorbed dose plus or minus S D, gray per gigabecquerel: lacrimal glands 0.620 plus or minus 0.33. Kidneys 0.299 plus or minus 0.099. Salivary glands 0.134 plus or minus 0.078. Bone marrow image-based 0.011 plus or minus 0.020. Bladder wall 0.018. Brain 0.003. Heart 0.014. Intestine 0.002. Liver 0.035. Lungs 0.050. Stomach wall 0.004.",
        "Potential benefits: VISION lutetium-177 P S M A-617 at 7.40 gigabecquerels q6w, median 5 cycles, extended overall survival by 4 months, hazard ratio 0.62, and r P F S by 5.3 months, hazard ratio 0.40."
      ],
      "chips": [
        "Kidney 0.299 Gy/GBq",
        "Lacrimal 0.62",
        "Table 1"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b028.jpg",
      "cap": "Protocol page 28 of 120 — Section 2.1.2 · Phase 1 preliminary dosimetry Table 1",
      "pearls": [
        "Phase 1 kidney 0.299 Gy/GBq. At 7.40 GBq × 3 that is ~6.6 Gy — well under 23 Gy.",
        "Lacrimal is the highest Gy/GBq (0.62) but is tracked, not a protocol stop."
      ]
    },
    {
      "title": "Page 29 of 120 · VISION / TheraP / PSMAfore numbers and general trial risks",
      "audio": [
        "VISION: overall survival extended 4 months, H R 0.62, 95 percent C I 0.52 to 0.74. r P F S extended 5.3 months, H R 0.40. TheraP: lutetium-177 P S M A-617 at 8.5 gigabecquerels reducing by 0.5 per cycle versus cabazitaxel; P S A 50 66 percent versus 44 percent; 12-month r P F S 19 percent versus 3 percent. PSMAfore: r P F S benefit versus A R P I change in taxane-naïve P S M A-positive m C R P C. Those three R C Ts are why a lutetium-177 small molecule is a reasonable bet in m C R P C.",
        "General early-phase risks, Phase 1 completed: the IMP had not been formally evaluated; subjects might get a futile dose or a toxic dose. Phase 2: the design evaluates efficacy and further characterises safety. There may be no efficacy, or less than standard options. Chemo-naïve Phase 2 subjects who skip this trial and take taxane might do better — that is disclosed.",
        "I M P-specific risks Phase 1: activity 5.55 or 7.40 gigabecquerels, minimum 6-week interval, hospital setting, measured residual in the syringe."
      ],
      "chips": [
        "VISION HR 0.62",
        "TheraP PSA50 66%",
        "PSMAfore"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b029.jpg",
      "cap": "Protocol page 29 of 120 — VISION / TheraP / PSMAfore numbers and general trial risks",
      "pearls": [
        "TheraP used 8.5 GBq starting activity — higher than this protocol's 7.40 GBq q6w level.",
        "Phase 2 chemo-naïve subjects are forgoing immediate taxane. That is a disclosed opportunity cost."
      ]
    },
    {
      "title": "Page 30 of 120 · Risks · ±10% tolerance, Phase 2 intensity, VISION tox",
      "audio": [
        "A tolerance of plus or minus 10 percent injected radioactivity is generally permitted in nuclear medicine and is not an overdose or underdose. An overdose of more than 10 percent of the therapeutic I M P, or more than 20 percent of the diagnostic I M P, is an A E and is reported as such.",
        "Phase 2 Cohort 2A and 2C receive 10.00 or 14.80 gigabecquerels for the first 2 cycles then multiple 7.40s. Cohort 2B receives more frequent 7.40s, initially q3w. Both may raise frequency or severity of toxicity versus current P S M A R L T without improving efficacy. Phase 2 subjects have not received chemotherapy for m C R P C; those eligible for chemo might benefit from standard taxane instead.",
        "VISION acute tox: haematological 47 percent any-grade marrow suppression, 23 percent Grade 3 or 4; anaemia 12.9 percent Grade 3–4; thrombocytopenia 7.9 percent Grade 3–4. Dry mouth 39 percent, no Grade 3–4. Fatigue 47 percent any grade, 7 percent Grade 3–4. Nausea and vomiting 39.3 percent any grade, 1.5 percent Grade 3–4. Kidney is the excretion organ — short-term renal toxicity is a risk."
      ],
      "chips": [
        "±10%",
        "VISION tox",
        "Marrow / kidney"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b030.jpg",
      "cap": "Protocol page 30 of 120 — Risks · ±10% tolerance, Phase 2 intensity, VISION tox",
      "pearls": [
        "Therapeutic activity window is ±10%. Diagnostic (POSLUMA) overdose bar is >20%.",
        "VISION xerostomia was common but not Grade 3–4. Marrow and kidney are the organs that stop dosing."
      ]
    },
    {
      "title": "Page 31 of 120 · Phase 2 haematologic risk, delayed nephropathy, second malignancy",
      "audio": [
        "Phase 2 short-term risks remain those of Phase 1. In Phase 1: 1 subject Grade 2 and Grade 3 anaemia, 1 Grade 2 thrombocytopenia, 8 of 13 Grade 1 dry mouth. Cumulative activity in Phase 2 is higher, so haematologic toxicity and dry mouth may be more frequent or severe. No acute renal deterioration was seen in Phase 1; cumulative Phase 2 activity still needs careful monitoring. Full safety is in the I B.",
        "Potential long-term radiation risks: delayed radiation nephropathy is plausible from E B R T and from P S M A R L T at very high cumulative activity, with Grade 3–4 kidney disease, tubular injury, and thrombotic microangiopathy reported. Kidney cells repair slowly. Renal dysfunction can present 6 months to years later. Whether a generalisable kidney dose limit reduces that risk is not established. Shortened life expectancy in this population means delayed injury is not always observed — follow until death or loss to follow-up.",
        "Secondary haematological malignancy risk is about 2 to 3 percent lifetime after somatostatin-receptor lutetium-177 therapy (Lutathera label): acute myeloid leukaemia ~55 months and myelodysplasia ~28 months after E o T. This trial's follow-up may not capture those events, so passive follow-up continues until death."
      ],
      "chips": [
        "Delayed nephropathy",
        "AML/MDS 2–3%",
        "Follow to death"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b031.jpg",
      "cap": "Protocol page 31 of 120 — Phase 2 haematologic risk, delayed nephropathy, second malignancy",
      "pearls": [
        "Delayed radiation nephropathy can show up years later — that is why passive follow-up runs to death.",
        "AML/MDS numbers on the page are from Lutathera, not from this IMP. Still disclosed."
      ]
    },
    {
      "title": "Page 32 of 120 · Risk mitigation · dosimetry, eGFR, diagnostic scan doses",
      "audio": [
        "Quantitative radiation dosimetry is performed after therapeutic doses. Phase 1: multi-timepoint every cycle. Phase 2: multi-timepoint Cycle 1, then single-timepoint from Cycle 2. Phase 1 data justified that simplification. Investigators use those numbers to stay inside organ limits.",
        "Pre-therapeutic P S M A PET C T selects P S M A-positive disease and excludes P S M A-negative patients who would take risk without benefit. Inclusion also requires acceptable marrow reserve and baseline renal function greater than 60 millilitres per minute. Subsequent cycles depend on individual safety and cumulative absorbed doses. A D L T from first dose to 6 weeks after last dose stops further dosing in Phase 1. Phase 2 uses Table 9 delay and discontinuation rules.",
        "Diagnostic-scan risks: I V injection (reaction, infection, haematoma, rare hypersensitivity — resuscitative kit ready), PET C T / SPECT C T / bone scan radiation, and C T dose. Phase 1 POSLUMA effective dose 14.1 microsievert per megabecquerel; 8 millicuries, 296 megabecquerels, gives about 4.2 millisievert. Phase 2 P S M A PET effective dose typically 4 to 7 millisievert depending on tracer and site protocol."
      ],
      "chips": [
        "eGFR ≥60",
        "SPECT every cycle Ph1",
        "POSLUMA 4.2 mSv"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b032.jpg",
      "cap": "Protocol page 32 of 120 — Risk mitigation · dosimetry, eGFR, diagnostic scan doses",
      "pearls": [
        "Eligibility eGFR ≥60 (page later says ≥60 using CKD-EPI 2009). Do not enroll a creatinine-clearance 45.",
        "POSLUMA 296 MBq ±20% is Phase 1 diagnostic only. Phase 2 uses a locally approved PSMA PET."
      ]
    },
    {
      "title": "Page 33 of 120 · Diagnostic CT doses and Section 3 objectives",
      "audio": [
        "C T transmission associated with PET or SPECT, and diagnostic ce C T, should follow A L A R A. Guide: 0.5 to 7 millisievert for C T transmission. Examples: pelvic C T 6, abdominal 8, chest 7, bone scan 4 millisievert. Cumulative diagnostic exposure is low relative to the therapeutic I M P in metastatic patients with short life expectancy.",
        "Section 3. Phase 1 primary: establish R P 2 D by safety and tolerability of I V lutetium-177 rhPSMA-10.1 in m C R P C. Phase 1 secondaries: whole-body dosimetry and P K; organ-specific dosimetry after each administration; describe observed anti-tumour activity.",
        "Phase 2 primary: evaluate efficacy of lutetium-177 rhPSMA-10.1. Phase 2 secondaries: evaluate efficacy (the longer P F S / O S / R E C I S T list), further evaluate safety of the R P 2 D, further characterise whole-body distribution and dosimetry."
      ],
      "chips": [
        "ALARA",
        "Ph1 RP2D",
        "Ph2 efficacy"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b033.jpg",
      "cap": "Protocol page 33 of 120 — Diagnostic CT doses and Section 3 objectives",
      "pearls": [
        "ALARA still applies to the CT piece of SPECT/CT and PET/CT even in an RLT trial.",
        "Phase 1 primary = RP2D. Phase 2 primary = efficacy (PSA50). Do not swap them."
      ]
    },
    {
      "title": "Page 34 of 120 · Phase 2 remaining objectives and Section 4 design overview",
      "audio": [
        "Phase 2 secondary 4: H R Q o L by FACT-P. Exploratory: H R Q o L by FACT-R N T.",
        "Section 4 study design. Interventional, open-label, integrated Phase 1 and 2 in P S M A-positive m C R P C progressed after prior therapy. Phase 1 non-randomised, 1 of 2 dose levels, safety / dose-finding / dosimetry. Phase 2 randomised to 2A or 2B, optional 2C after T S C review of all safety and preliminary efficacy once about 35 have been randomised and dosed in 2A and 2B.",
        "About 82 subjects total: at least 12 Phase 1 (A ≥3, B ≥9) and about 70 Phase 2 (2A and 2B initially 30–35 each; 2C if opened about 10). Phase 1 up to 5 U S / E U centres. Phase 2 up to about 25 U S, E U, U K. Total duration about 6 years from Q1 2022; Phase 2 about 3 years from Q1 2025."
      ],
      "chips": [
        "n ≈ 82",
        "Open-label",
        "Randomised 2A/2B"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b034.jpg",
      "cap": "Protocol page 34 of 120 — Phase 2 remaining objectives and Section 4 design overview",
      "pearls": [
        "Headline n ≈ 82–83 (12 Phase 1 + 70 Phase 2). Page 101 says approximately 83.",
        "2C is a TSC decision after ~35 dosed in 2A/2B — not automatic, not SRC."
      ]
    },
    {
      "title": "Page 35 of 120 · Section 4.1.1 Phase 1 · POSLUMA gate and two cohorts",
      "audio": [
        "Phase 1, completed. After consent and a preliminary eligibility check, a PET C T with POSLUMA flotufolastat F 18, 296 megabecquerels, 8 millicuries, determines P S M A-positive disease. Local reader, visual assessment per Image Acquisition Guidelines. Eligible: P S M A-positive disease on PET C T with no significant P S M A-negative disease on baseline ce C T or M R I.",
        "Two cohorts: Cohort A 5.55 gigabecquerels, 150 millicuries, maximum 3 cycles. Cohort B 7.40 gigabecquerels, 200 millicuries, maximum 3 cycles, subject to S R C. Additional cycles at the same level q6w depending on individual tolerability, safety, and estimated absorbed doses to normal organs. Maximum cycles also informed by 7.3C human dosimetry and one named-patient 10.1 experience.",
        "SPECT C T plus blood dosimetry at set intervals in the 7 days after every Phase 1 cycle. No additional radioactivity if it would exceed organ limits. Escalation is B O I N, initially 3 in Cohort A; Cohort B at least 9. A cohort is evaluable after completing the D L T window. A treatment cycle is 6 weeks after last administration. Dose delay up to 28 days (max interval 10 weeks) for logistics or non-D L T toxicity."
      ],
      "chips": [
        "POSLUMA 296 MBq",
        "A 5.55 / B 7.40",
        "q6w"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b035.jpg",
      "cap": "Protocol page 35 of 120 — Section 4.1.1 Phase 1 · POSLUMA gate and two cohorts",
      "pearls": [
        "Phase 1 PSMA PET is POSLUMA 296 MBq, local read. Phase 2 PSMA PET is central eligibility read.",
        "Cycle = 6 weeks. Delay ≤28 days → max 10-week gap on a 6-week schedule."
      ]
    },
    {
      "title": "Page 36 of 120 · Table 2 · Phase 1 radioactivity levels",
      "audio": [
        "S R C that opens Cohort B includes Principal Investigators, an independent medical oncologist, a nuclear medicine physician, plus Sponsor statistics, medical, and drug-safety representatives. Safety and dosimetry from every cycle of the prior cohort go into the escalation decision.",
        "Table 2. Cohort A: 5.55 gigabecquerels, 150 millicuries, max 3 cycles, 6-week interval, planned 3 subjects. Cohort B: 7.40 gigabecquerels, 200 millicuries, max 3 cycles subject to S R C, 6-week interval, planned 9 subjects.",
        "This is the entire Phase 1 dose table. There is no 10 gigabecquerel Phase 1 level. Front-loading at 10.00 and 14.80 is a Phase 2 idea, justified later by Cycle-1-highest tumour gray per gigabecquerel."
      ],
      "chips": [
        "Table 2",
        "3 + 9",
        "No 10 GBq in Ph1"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b036.jpg",
      "cap": "Protocol page 36 of 120 — Table 2 · Phase 1 radioactivity levels",
      "pearls": [
        "Memorise Table 2: A 5.55 GBq n=3, B 7.40 GBq n=9, both q6w max 3.",
        "SRC, not the site PI alone, opens Cohort B and later declares RP2D."
      ]
    },
    {
      "title": "Page 37 of 120 · Figure 2 · Phase 1 study schema",
      "audio": [
        "Figure 2, Phase 1 component, completed. Landscape schema. Screening and eligibility assessment, then P S M A PET C T eligibility assessment, Day minus 42 to Day minus 1.",
        "Day 1: lutetium-177 rhPSMA-10.1 Dose 1, then D L T assessment. Cycle 2 at 6 weeks, Dose 2, D L T assessment. Cycle 3 at 6 weeks, Dose 3. D L T assessment runs from first administration until 6 weeks after the final dose is received.",
        "Abbreviations on the figure: C T, D L T, PET, P S M A, rhPSMA. This is a three-cycle, six-week skeleton with a screening PET gate in front."
      ],
      "chips": [
        "Figure 2",
        "3 cycles",
        "DLT bar"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b037.jpg",
      "cap": "Protocol page 37 of 120 — Figure 2 · Phase 1 study schema",
      "pearls": [
        "Draw this: screen → PSMA PET → Dose 1 / 2 / 3 at q6w, DLT bar under the whole dosing period.",
        "DLT window is not just Cycle 1 — it runs to 6 weeks after the last dose."
      ]
    },
    {
      "title": "Page 38 of 120 · Figure 3 · Phase 1 dose-ranging into Phase 2",
      "audio": [
        "Figure 3, radioactivity dose-ranging schema, Phase 1 completed. Phase 1 box contains Cohort A, 5.55 gigabecquerels, max 3 cycles, 6-week interval, arrow to Safety Review Committee after 3 subjects complete dosing.",
        "Then Cohort B, 7.40 gigabecquerels, max 3 cycles, 6-week interval, arrow to Safety Review Committee after 9 subjects complete dosing. A big arrow up out of Phase 1 into Phase 2.",
        "Note: S R C reviews all available data to assign R P 2 D. Dosing in the next cohort will not start until all subsequent cycles from the previous cohort are complete. That is stricter than a classic 3-plus-3 that escalates after Cycle 1 only."
      ],
      "chips": [
        "Figure 3",
        "SRC twice",
        "Then Phase 2"
      ],
      "visual": "boin",
      "image": "assets/protocol/bet/b038.jpg",
      "cap": "Protocol page 38 of 120 — Figure 3 · Phase 1 dose-ranging into Phase 2",
      "pearls": [
        "You cannot open B until A's subsequent cycles are complete — not after three Cycle-1 DLTs only.",
        "RP2D is an SRC product, handed to Phase 2."
      ]
    },
    {
      "title": "Page 39 of 120 · Subsequent-cycle rules and Table 3 organ limits",
      "audio": [
        "Each subject is in only one Phase 1 cohort and will not participate in Phase 2. After each cycle the investigator reviews dosimetry and safety. Subsequent cycles stop if: D L T at any point in the D L T window; a dose delay up to 28 days is allowed for toxicity to improve, but worsening or persisting toxicity that would make the investigator stop is a stop even if it is not a D L T; cumulative key-organ doses would exceed Table 3 — 2 gray marrow, 23 gray kidney.",
        "Table 3 conventional organ estimated dose limits: bladder wall 65 gray, brain 60, heart 26, intestine 45, kidneys 23 (Dawson 2010), liver 30, lungs 20, bone marrow 2 (DeNardo 2002; I C R P 2012), salivary glands 24 (Eisbruch 1999), stomach wall 45. Lacrimal absorbed dose is calculated but is not a discontinuation limit because of small-organ methodological limits; it is correlated with ocular symptoms instead.",
        "These thresholds come from E B R T history and low-dose-rate beta therapy. They are a safety floor for early trials, not a proven R L T-specific M T D. Kidney is expected to be the D L O."
      ],
      "chips": [
        "Kidney 23 Gy",
        "Marrow 2 Gy",
        "Salivary 24 Gy"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b039.jpg",
      "cap": "Protocol page 39 of 120 — Subsequent-cycle rules and Table 3 organ limits",
      "pearls": [
        "Table 3 to memorise: kidney 23 Gy, marrow 2 Gy, salivary 24 Gy. Lacrimal is not a stop.",
        "EBRT-derived caps are conservative for RLT — Phase 2 later allows 35 Gy kidney with re-consent."
      ]
    },
    {
      "title": "Page 40 of 120 · TUM 7.3C experience Table 4 and why 10.1 exists",
      "audio": [
        "Choice of injected activity used 7.3C human dosimetry and one named-patient 10.1. lutetium-177 rhPSMA-7.3C was given in Germany under Section 13 Subsection 2b. 7.3C has an extra carboxylic acid group on the linker; 10.1 is structurally identical except that propanoate is gone — that is the optimisation.",
        "Six m C R P C subjects received 7.3C. Two of six got therapeutic doses: one 3.3 then 3.3 gigabecquerels, one 3.9 then 3.9. Both had P S A decline; the 3.9 subject had greater than 50 percent P S A drop and a radiological response. No safety data were available from that compassionate use.",
        "Table 4: low dose about 1 gigabecquerel, 1 cycle, 6 subjects, initial dosimetry. 3.3 gigabecquerels times 2, 1 subject, P S A decline. 3.9 gigabecquerels times 2, 1 subject, greater than 50 percent P S A decline plus radiological response. Pre-therapeutic planar dosimetry of 7.3C is Table 5 on the next page."
      ],
      "chips": [
        "7.3C",
        "Table 4",
        "Linker trim"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b040.jpg",
      "cap": "Protocol page 40 of 120 — TUM 7.3C experience Table 4 and why 10.1 exists",
      "pearls": [
        "10.1 = 7.3C minus a linker propanoate. Know that one-sentence structure difference.",
        "TUM 7.3C therapeutic n=2 at 3.3 and 3.9 GBq — much lower than this trial's 5.55 / 7.40."
      ]
    },
    {
      "title": "Page 41 of 120 · Table 5 · 7.3C organ doses and Table 6 single-subject 10.1",
      "audio": [
        "Table 5, lutetium-177 rhPSMA-7.3C organ absorbed radiation doses in gray per gigabecquerel. Pre-therapeutic planar dosimetry, n equals 6: kidney 1.65, liver 0.19, parotid 2.35, submandibular 2.10, lacrimal 5.92, bone marrow 0.12 with low confidence. Post-therapeutic planar, n equals 2: kidney 1.59, liver 0.20, parotid 1.59, submandibular 1.97, lacrimal 3.82, marrow 0.14.",
        "Planar dosimetry overestimates kidney, salivary, and lacrimal doses. In addition to those 6 subjects, one Augsburg patient received 1 gigabecquerel pre-therapeutic then 3 cycles of 7.40 gigabecquerels of the therapeutic 10.1 I M P. Greater than 50 percent P S A drop plus a radiological response after 2 cycles. No safety data were available.",
        "Table 6, that single subject, hybrid SPECT and planar, gray per gigabecquerel. Kidney: 1.11 pre-therapeutic, 0.66 Cycle 1, 0.67 Cycle 2. Liver 0.18, 0.15, 0.08. Salivary planar 0.35, 0.23, 0.14. Marrow 0.06, 0.06, 0.05."
      ],
      "chips": [
        "Table 5",
        "Table 6",
        "Kidney 0.66 Gy/GBq"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b041.jpg",
      "cap": "Protocol page 41 of 120 — Table 5 · 7.3C organ doses and Table 6 single-subject 10.1",
      "pearls": [
        "7.3C planar kidney ~1.6 Gy/GBq. Named-patient 10.1 hybrid kidney 1.11 pre, then 0.66–0.67 on treatment — roughly half.",
        "Planar overestimates small-organ and kidney dose. That is why this trial uses SPECT/CT."
      ]
    },
    {
      "title": "Page 42 of 120 · Table 6 remainder · predicted kidney Gy at Phase 1 activities",
      "audio": [
        "Table 6 continues through gallbladder, gut, stomach, heart, lungs, muscle, osteogenic cells, skin, spleen, testes, thymus, thyroid, bladder wall. Total body 0.02 to 0.03 gray per gigabecquerel. Effective dose 0.04, 0.04, 0.03 millisievert per megabecquerel.",
        "From 7.3C plus this one 10.1 patient, kidneys are expected to be the dose-limiting organ. If you naively apply 1.6 gray per gigabecquerel of 7.3C to Phase 1 cumulative activity — 16.65 gigabecquerels, 450 millicuries, in A, 14.80 gigabecquerels, 400 millicuries, in B — you get 26.64 gray and 23.68 gray, at or above the 23 gray cap.",
        "Using the single 10.1 experience, theoretical maximum kidney is 11.0 to 18.5 gray in Cohort A and 9.8 to 16.4 gray in Cohort B. Those assumptions had to be tested in a formal Phase 1 with prospective SPECT dosimetry."
      ],
      "chips": [
        "DLO = kidney",
        "7.3C vs 10.1"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b042.jpg",
      "cap": "Protocol page 42 of 120 — Table 6 remainder · predicted kidney Gy at Phase 1 activities",
      "pearls": [
        "7.3C numbers would have stopped Phase 1 at the kidney cap. 10.1 numbers leave headroom. That is the whole justification for this ligand.",
        "Effective dose on Table 6 is ~0.04 mSv/MBq — not the number that stops cycles. Kidney Gy is."
      ]
    },
    {
      "title": "Page 43 of 120 · Figure 4 · mouse kidney %ID/g 10.1 vs 7.3C vs I and T",
      "audio": [
        "No further cycles if Table 3 organ limits would be exceeded. Phase 1 calculates dosimetry after every cycle so cumulative activity is defined prospectively.",
        "Mouse and minipig biodistribution showed renal uptake of 10.1 significantly lower than 7.3C because of more rapid renal clearance. That matches the limited clinical experience.",
        "Figure 4, kidney percent injected dose per gram versus time. At 1 hour all three ligands are high. By 24 hours: 10.1 is a small bar, 7.3C several-fold higher, P S M A I and T highest. 10.1 stays the lowest at 48 and 168 hours. Error bars are one standard deviation."
      ],
      "chips": [
        "Figure 4",
        "Mouse kidney",
        "Faster clearance"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b043.jpg",
      "cap": "Protocol page 43 of 120 — Figure 4 · mouse kidney %ID/g 10.1 vs 7.3C vs I and T",
      "pearls": [
        "Draw Figure 4 from memory: 10.1 clears the kidney fastest of the three lutetium-177 small molecules on this page.",
        "Faster kidney clearance is the structural point of removing the 7.3C linker propanoate."
      ]
    },
    {
      "title": "Page 44 of 120 · Table 7 mouse kidney numbers and September 2023 dose-justification update",
      "audio": [
        "Table 7, kidney percent injected dose per gram. At 24 hours: 10.1 is 3.3 percent plus or minus 1.2; 7.3C is 16.7 percent plus or minus 6.99; P S M A I and T is 24.5 percent plus or minus 5.56. At 48 hours: 10.1 0.8 percent, 7.3C 1.8, I and T 9.7. Injected-dose percent of the whole kidney at 24 hours: 10.1 0.9, 7.3C 4.5, I and T 8.2.",
        "Phase 1 dosimetry will guide later cycles and whether Cohort B opens. Anyone predicted to exceed Table 3 is discontinued from further dosing.",
        "September 2023 update: Cohort A dosimetry supported more cycles without breaching organ limits. A third cycle was added at 7.40 gigabecquerels. Rinscheid 2023 expanded the Augsburg 10.1 experience to 4 patients, still supportive of 3 cycles at 7.40. With the extra cycle, Cohort B maximum cumulative activity is 22.20 gigabecquerels, 600 millicuries."
      ],
      "chips": [
        "Table 7",
        "3.3% vs 16.7%",
        "22.20 GBq"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b044.jpg",
      "cap": "Protocol page 44 of 120 — Table 7 mouse kidney numbers and September 2023 dose-justification update",
      "pearls": [
        "Memorise 24-hour mouse kidney %ID/g: 10.1 3.3, 7.3C 16.7, I&T 24.5 — about a five- to seven-fold kidney advantage.",
        "v4.0 added the third 7.40 GBq cycle; Cohort B cap became 22.20 GBq."
      ]
    },
    {
      "title": "Page 45 of 120 · BOIN rules and Table 8 escalation grid",
      "audio": [
        "After the third Cohort A subject finishes the D L T window — first dose to 6 weeks after last dose — an S R C reviews and decides whether to open Cohort B. S R C may incorporate, but is not obliged to follow, B O I N.",
        "B O I N, Liu and Yuan 2015: target D L T rate 0.3, safety boundary plus or minus 40 percent. Observed D L T rate at or below 0.236 — escalate. Between 0.236 and 0.359 — add to the current cohort. At or above 0.359 — de-escalate. For Cohort A only, S R C may open an additional lower cohort if needed, with a protocol amendment.",
        "Table 8, B O I N actions by number of evaluable subjects 1 through 12. Escalate if D L T count is at or below 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2. De-escalate if D L T count is at or above 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5. Eliminate the dose if D L T count hits 3 of 3, then 3, 4, 4, 5, 5, 5, 6, 6, 7. Stay if neither fires. Cannot eliminate before 3 evaluable."
      ],
      "chips": [
        "Table 8",
        "BOIN 0.30",
        "Liu & Yuan"
      ],
      "visual": "boin",
      "image": "assets/protocol/bet/b045.jpg",
      "cap": "Protocol page 45 of 120 — BOIN rules and Table 8 escalation grid",
      "pearls": [
        "Target DLT 0.30. Escalate ≤0.236, stay 0.236–0.359, de-escalate ≥0.359.",
        "You cannot eliminate a dose until 3 evaluable subjects. 3 of 3 DLTs closes it."
      ]
    },
    {
      "title": "Page 46 of 120 · Phase 1 stopping, surgery delay, no radiotherapy, G-C S F",
      "audio": [
        "Assuming 3 in A, at least 9 in B; S R C sets the final B number. After all have completed the D L T window, S R C recommends the R P 2 D. Escalation continues until at least 12 have completed dosing and the D L T window. Adverse events after the D L T window are not D L Ts but still inform whether the higher cohort opens.",
        "If the next cycle would exceed organ limits, the investigator may assign a lower-cohort activity — Cohort B subjects can drop to 5.55 instead of 7.40. Surgery without therapeutic intent for prostate cancer: temporary hold, maximum delay 8 weeks (14 weeks from last dose); longer than 8 weeks is a withdrawal. Radiotherapy during the study is not permitted — withdraw and follow for safety.",
        "Marrow suppression is expected. Delay up to 28 days is acceptable. If G-C S F or T P O agonists are required — sargramostim, filgrastim, epoetin alfa, eltrombopag — discontinue further radioactivity. Transfusion is allowed if in the subject's interest, unless the event is a D L T. Stop also for: consent withdrawn, any other radiotherapy, prostate-cancer surgery, non-prostate surgery causing delay greater than 8 weeks, or Table 3 would be exceeded."
      ],
      "chips": [
        "No RT",
        "No G-CSF",
        "Delay ≤28 d"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b046.jpg",
      "cap": "Protocol page 46 of 120 — Phase 1 stopping, surgery delay, no radiotherapy, G-C S F",
      "pearls": [
        "Radiotherapy during study = withdraw. G-CSF / TPO agonist = discontinue IMP.",
        "Surgery delay cap is 8 weeks (14 weeks from last dose on a 6-week schedule)."
      ]
    },
    {
      "title": "Page 47 of 120 · Phase 1 dose-limiting toxicity definitions",
      "audio": [
        "Also stop for any D L T from first dose to 6 weeks after last dose, or for worsening toxicity that would make further dosing unsafe even if it is not a D L T. Delay up to 28 days is allowed for toxicity to improve.",
        "D L Ts are treatment-emergent, related or possibly related, C T C A E 5.0, in that window: Grade 4 febrile neutropenia; Grade 4 neutropenia lasting more than 5 days; Grade 4 haematologic toxicity lasting 7 days or more; any Grade 3 or higher non-haematological toxicity with listed exceptions.",
        "Exceptions that are not D L Ts: Grade 3 fatigue under 7 days; Grade 3 hypertension without maximal medical therapy; Grade 3 or 4 electrolyte abnormality lasting under 72 hours, not complicated, resolving or responding; Grade 3 nausea, vomiting or diarrhoea resolving within 72 hours without maximal therapy; Grade 3 rash resolving to Grade 1 or less within 3 weeks; Grade 3 or 4 amylase or lipase without pancreatitis. Also D L Ts: Grade 3-plus thrombocytopenia with bleeding; Grade 3-plus acute kidney injury — creatinine more than 3 times baseline or absolute greater than 4.0 milligrams per decilitre; Grade 3-plus A S T A L T or bilirubin; Grade 3-plus symptomatic electrolyte abnormality; Hy's law liver injury."
      ],
      "chips": [
        "DLT defs",
        "CTCAE 5.0",
        "AKI"
      ],
      "visual": "boin",
      "image": "assets/protocol/bet/b047.jpg",
      "cap": "Protocol page 47 of 120 — Phase 1 dose-limiting toxicity definitions",
      "pearls": [
        "DLT window = first dose → 6 weeks after last dose — not Cycle 1 only.",
        "Isolated amylase/lipase without pancreatitis is carved out. Creatinine >3× or >4.0 mg/dL is a DLT."
      ]
    },
    {
      "title": "Page 48 of 120 · More DLTs, RP2D declaration, Phase 2 PSMA PET gate",
      "audio": [
        "Also D L Ts: any A E requiring delay longer than 28 days unless related to underlying disease; death not clearly related to disease or an extraneous cause.",
        "R P 2 D is the radioactivity and cycle number that, in the S R C's judgement, balances tumour dose against normal-organ dose and clinical toxicity. It may not be the highest single-injection activity. Example: if three 7.40 gigabecquerel cycles are tolerated without D L T and dosimetry allows up to 5 without exceeding organ limits, R P 2 D could be 5 cycles of 7.40 at 6-week intervals. S R C meets when the final dose-ranging cohort has finished the D L T window.",
        "Phase 2: after consent, a P S M A PET C T ascertains P S M A-positive disease and rules out P S M A-negative disease. Tracer is locally approved, or already in use at the site. Scan goes to the central reader for eligibility. Standard-of-care P S M A PET or cross-sectional imaging within 28 days before informed consent may be reused if it can be submitted centrally."
      ],
      "chips": [
        "RP2D",
        "Central PET",
        "≤28 d reuse"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b048.jpg",
      "cap": "Protocol page 48 of 120 — More DLTs, RP2D declaration, Phase 2 PSMA PET gate",
      "pearls": [
        "RP2D can be more cycles at the same GBq, not a higher GBq. Front-loading at 10.00 / 14.80 is a Phase 2 idea, not the Phase 1 RP2D definition.",
        "Phase 2 PSMA PET is a central eligibility read. Phase 1 POSLUMA was local."
      ]
    },
    {
      "title": "Page 49 of 120 · Cohorts 2A, 2B, and optional 2C",
      "audio": [
        "Eligible P S M A-positive m C R P C subjects are randomised to one of two regimens, about 30 each. Cohort 2A: 2 doses at 10.00 gigabecquerels, 270 millicuries, then up to 5 additional 7.40 gigabecquerel, 200 millicurie, doses, all at 6-week intervals.",
        "Cohort 2B: up to 8 doses at 7.40 gigabecquerels, 200 millicuries. First 3 at 3-week intervals, remaining at 6-week intervals.",
        "T S C decides whether to open Cohort 2C after reviewing all safety and preliminary efficacy, when about 35 have been randomised and dosed in 2A and 2B. T S C specifically looks at the safety of the two 10.00 gigabecquerel doses in 2A. If opened, 2C is about 10 subjects: 2 doses at 14.80 gigabecquerels, 400 millicuries, then up to 4 additional 7.40s, all q6w. If 2C is not opened, extras go to 2A and 2B, about 35 each. Unacceptable toxicity in both 2A and 2B holds enrolment."
      ],
      "chips": [
        "2A 10.00",
        "2B q3w",
        "2C 14.80"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b049.jpg",
      "cap": "Protocol page 49 of 120 — Cohorts 2A, 2B, and optional 2C",
      "pearls": [
        "2A front-loads 10.00 GBq × 2. 2B compresses the first three 7.40s to q3w. 2C is 14.80 × 2 — TSC, not automatic.",
        "2C n ≈ 10. If 2C stays closed, 2A and 2B go to ~35 each."
      ]
    },
    {
      "title": "Page 50 of 120 · Figure 5 · Phase 2 study schema",
      "audio": [
        "Figure 5, Phase 2 component. N equals 70 into a randomisation node, then three arms.",
        "Cohort 2A, n 30 to 35: Cycle 1 10.00 gigabecquerels, Cycle 2 10.00, Cycles 3 to 7 7.40, all q6w, end-of-treatment visit after 42 weeks. Cohort 2B, n 30 to 35: Cycles 1, 2, 3 at 7.40 gigabecquerels q3w, Cycles 4 to 8 at 7.40 q6w, end-of-treatment after 42 weeks.",
        "Optional Cohort 2C, n 10, based on data after 20 patients in 2A and 2B have been reviewed: Cycle 1 14.80, Cycle 2 14.80, Cycles 3 to 6 7.40, all q6w, end-of-treatment after 36 weeks. Abbreviations: G B q, q3w, q6w, R for randomisation."
      ],
      "chips": [
        "Figure 5",
        "N=70",
        "EoT 42 / 36 wk"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b050.jpg",
      "cap": "Protocol page 50 of 120 — Figure 5 · Phase 2 study schema",
      "pearls": [
        "Draw Figure 5: R → 2A 10+10 then 7.40s; 2B three q3w then 7.40 q6w; optional 2C 14.80+14.80 then 7.40s.",
        "2C EoT is 36 weeks because it has fewer cycles. 2A/2B EoT is 42 weeks."
      ]
    },
    {
      "title": "Page 51 of 120 · PSA50, futility, front-loading justification",
      "audio": [
        "Each cohort enrols to assess anti-tumour response using P S A 50 — at least 50 percent P S A drop from baseline — as a surrogate biomarker. After safety review, 2A or 2B may close for futility if estimated P S A 50 is 20 percent or less; T S C recommendation. Additional subjects may then be randomised to remaining cohorts. Sponsor may run additional interims; details live in the S A P.",
        "Image-based dosimetry sets the maximum cycles an individual may receive without exceeding organ limits.",
        "Front-loading justification, Section 4.1.2.1. Phase 1 showed the highest tumour dose per unit activity at Cycle 1. Mean specific absorbed tumour dose fell 32 percent Cycle 1 to Cycle 2, and 49 percent Cycle 1 to Cycle 3. That is why 2A and 2C put the higher gigabecquerels up front — more cumulative tumour gray without a matching increase in normal-organ dose. Cohort 2B instead shortens the first three intervals. Those two ideas will be compared to pick a Phase 3 regimen."
      ],
      "chips": [
        "Front-load",
        "↓32% / ↓49%",
        "Futility ≤20%"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b051.jpg",
      "cap": "Protocol page 51 of 120 — PSA50, futility, front-loading justification",
      "pearls": [
        "Front-loading rests on one number: tumour Gy/GBq is highest in Cycle 1 (↓32% C1→C2, ↓49% C1→C3).",
        "Futility = estimated PSA50 ≤20% in a cohort. TSC call."
      ]
    },
    {
      "title": "Page 52 of 120 · Table 9 · Phase 2 delay and discontinuation rules",
      "audio": [
        "The investigator stops dosing whenever continuing is not in the subject's interest. Table 9 is the minimum standard. Myelosuppression Grade 3 or above: withhold until Grade 1 or baseline; recurrent Grade 3-plus permanently discontinue. Acute renal toxicity — creatinine up 40 percent or more from the dosing-day baseline: withhold until improvement or return to baseline. Electrolyte or metabolic Grade 2-plus: withhold until Grade 1 or baseline. A S T or A L T greater than 5 times U L N without liver metastases: discontinue.",
        "Other non-haematologic: any serious reaction needing delay over 4 weeks, any recurrent Grade 3 or 4, any persistent or intolerable Grade 2, or any unacceptable toxicity — discontinue.",
        "Surgery without prostate-cancer therapeutic intent: hold, maximum delay 8 weeks on a 6-week schedule or 11 weeks on a 3-week schedule (14 weeks from last dose). Longer than 8 weeks — withdraw. Logistical delay up to 28 days — max interval 10 weeks on q6w, 7 weeks on q3w. Radiotherapy during the study is not permitted."
      ],
      "chips": [
        "Table 9",
        "Cr +40%",
        "No RT"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b052.jpg",
      "cap": "Protocol page 52 of 120 — Table 9 · Phase 2 delay and discontinuation rules",
      "pearls": [
        "Table 9 to memorise: Grade 3 marrow → hold; recurrent Grade 3 marrow → stop. Creatinine +40% → hold.",
        "q3w schedule (2B early cycles) has a tighter logistical delay: 7 weeks max interval, not 10."
      ]
    },
    {
      "title": "Page 53 of 120 · Phase 2 continuation past 23 Gy, re-consent, absolute caps",
      "audio": [
        "E B R T-derived organ caps used in R L T trials do not account for the difference between E B R T and R L T, and may undertreat (Wahl 2021, Kiess 2024). Clinical series have exceeded those caps (Mader 2023, Derlin 2022), often without rigorous long-term follow-up.",
        "At average Phase 1 organ doses, a 60 gigabecquerel, 1620 millicurie, Phase 2 cumulative activity is not designed to exceed the Phase 1 organ limits — Table 10. Inter-patient variation still means some will hit kidney or marrow caps before finishing. Image-based dosimetry is mandatory.",
        "Continuation past Table 3 is allowed up to the cohort maximum if: no radiological or clinical progression, and no clinically significant normal-organ toxicity. P S A progression alone does not force a stop if the investigator still sees benefit. Complete biochemical response with no visible disease — investigator may wish to stop once caps are exceeded. Re-check after every cycle. Re-consent before the next cycle if it is predicted to exceed the caps. Absolute upper limits also apply — Table 11."
      ],
      "chips": [
        "Re-consent",
        "PSA≠stop",
        "Abs 35 Gy"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b053.jpg",
      "cap": "Protocol page 53 of 120 — Phase 2 continuation past 23 Gy, re-consent, absolute caps",
      "pearls": [
        "PSA progression alone is not a stop if the investigator still sees benefit.",
        "Crossing 23 Gy kidney in Phase 2 requires re-consent. Crossing 35 Gy is the absolute stop."
      ]
    },
    {
      "title": "Page 54 of 120 · Tables 10 and 11, follow-up, Phase 1 endpoints start",
      "audio": [
        "Table 10, modelled cumulative gray at full Phase 2 activity. Cohort A 57 gigabecquerels: kidney 18.1, salivary 8.2, marrow image 0.75 / blood 1.76. Cohort B 59 gigabecquerels: kidney 18.8, salivary 8.5, marrow 0.78 / 1.82. Cohort C 60 gigabecquerels: kidney 18.9, salivary 8.6, marrow 0.79 / 1.85.",
        "Table 11, Phase 2 dose limits. Kidney 23 gray, absolute 35. Marrow 2 gray, absolute 2.5. The 23 and 2 numbers trigger re-consent. All other organs keep Table 3.",
        "Follow-up, both phases: after treatment, efficacy and safety follow-up until central radiographic progression, death, or loss to follow-up. After radiographic progression or another anti-cancer therapy, long-term safety is chart review every 6 months. Phase 1 primary endpoints, completed: D L T incidence, and frequency and nature of T E A Es. Phase 1 secondaries start: terminal half-life in blood; tumour and organ gray per gigabecquerel and cumulative gray; number with at least 50 percent P S A drop at 12 weeks."
      ],
      "chips": [
        "Table 10",
        "Table 11",
        "18–19 Gy kidney"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b054.jpg",
      "cap": "Protocol page 54 of 120 — Tables 10 and 11, follow-up, Phase 1 endpoints start",
      "pearls": [
        "Modelled kidney at ~60 GBq is ~18–19 Gy — under 23, which is why the protocol can plan 7–8 cycles.",
        "Table 11 pair to memorise: kidney 23 / 35, marrow 2 / 2.5."
      ]
    },
    {
      "title": "Page 55 of 120 · Phase 1 remaining endpoints and Phase 2 primary / first secondaries",
      "audio": [
        "Phase 1 secondaries continue: best P S A 50 to end of dosing; P S A P F S by P C W G 3 or death; remaining P S A progression-free at 6-month intervals; duration of response; radiographic P F S; remaining radiographically progression-free at 6-month intervals; confirmed C R or P R by R E C I S T 1.1; P S M A PET C T response after 2 cycles; overall survival at 6-month intervals; time to P S A progression; time to radiographic progression.",
        "Phase 2 primary: number of subjects with an anti-tumour response defined as at least 50 percent P S A reduction from baseline to end of treatment.",
        "Phase 2 secondaries start: P S A 50 at 12 weeks; P S A P F S from randomisation; remaining P S A progression-free at 6-month intervals; duration of response from a 50 percent drop until P S A return to baseline or radiographic progression, by P C W G 3."
      ],
      "chips": [
        "Ph2 primary",
        "PSA50 → EoT"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b055.jpg",
      "cap": "Protocol page 55 of 120 — Phase 1 remaining endpoints and Phase 2 primary / first secondaries",
      "pearls": [
        "Phase 2 primary is PSA50 to EoT — not 12-week PSA50, not rPFS, not OS.",
        "Phase 2 clocks for PFS start at randomisation, not first dose."
      ]
    },
    {
      "title": "Page 56 of 120 · Phase 2 remaining secondaries, FACT-P, inclusion start",
      "audio": [
        "Phase 2 secondaries continue: radiographic P F S from randomisation; remaining radiographically progression-free at 6-month intervals; confirmed C R or P R by R E C I S T 1.1; overall survival from randomisation to death; overall survival at 6-month intervals; time to P S A progression; time to radiographic progression; frequency and nature of T E A Es; tumour and organ gray per gigabecquerel.",
        "FACT-P from baseline to E o T: change in total score, proportion improved or worsened, time to worsening. Exploratory: FACT-R N T from baseline to E o T.",
        "Section 6 subject selection. Population: men with P S M A-positive m C R P C who meet inclusion and none of the exclusions. Inclusion 1: male, 18 or older. 2: signed dated I C F before any study procedure. 3: willing to follow lifestyle restrictions. 4: histologically confirmed adenocarcinoma of the prostate."
      ],
      "chips": [
        "FACT-P",
        "Male ≥18",
        "Adenoca"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b056.jpg",
      "cap": "Protocol page 56 of 120 — Phase 2 remaining secondaries, FACT-P, inclusion start",
      "pearls": [
        "FACT-P is secondary; FACT-RNT is exploratory. Same questionnaires, different rank.",
        "Adenocarcinoma — neuroendocrine phenotype is an exclusion two pages later."
      ]
    },
    {
      "title": "Page 57 of 120 · Inclusion · castration, PSMA-positive PET, washout, ECOG, Phase 1 labs",
      "audio": [
        "Inclusion 5: testosterone under 50 nanograms per decilitre, 1.73 nanomoles per litre, after surgical or continued chemical castration. A sample from the last 3 months is usable if treatment has not changed. 6: disease on C T M R I by R E C I S T 1.1 and/or on a full-body technetium-99m bone scan. Scans within 28 days before consent may be reused for the central reader.",
        "7: P S M A-positive on P S M A PET C T. Phase 1: at least one P S M A-positive lesion of any size with uptake higher than liver, and at least one lesion at least 1.5 centimetres on C T M R I. Phase 2: at least one lesion of any size with uptake higher than normal parotid, and the majority of P S M A-expressing disease with uptake equivalent to or higher than normal liver. Phase 2 PET within 28 days before consent may be reused centrally.",
        "8: at least 28 days or 5 half-lives, whichever longer, since last anti-cancer treatment except L H R H / G n R H. 9: prior treatment toxicities to Grade 1 or less except chemo alopecia and Grade 2 neuropathy. 10: major surgery at least 12 weeks prior. 11: E C O G 0 to 2, life expectancy at least 6 months. 12 Phase 1 marrow: platelets at least 150, W B C at least 3.0, neutrophils at least 1.5 times 10 to the 9 per litre, haemoglobin at least 10 grams per decilitre."
      ],
      "chips": [
        "> liver vs > parotid",
        "ECOG 0–2",
        "Hb ≥10 Ph1"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b057.jpg",
      "cap": "Protocol page 57 of 120 — Inclusion · castration, PSMA-positive PET, washout, ECOG, Phase 1 labs",
      "pearls": [
        "Phase 1 PSMA+ = uptake > liver, plus a ≥1.5 cm lesion. Phase 2 PSMA+ = uptake > parotid AND majority ≥ liver.",
        "Phase 1 haemoglobin floor is 10 g/dL; Phase 2 drops it to 9 on the next page."
      ]
    },
    {
      "title": "Page 58 of 120 · Inclusion · eGFR, Phase 2 labs, contraception",
      "audio": [
        "Phase 1 chemistry: e G F R by C K D-E P I 2009 at least 60 millilitres per minute, bilirubin under 1.5 times U L N except Gilbert, albumin at least 30 grams per litre, A S T under 2 times U L N, A L T under 2 times U L N.",
        "Phase 2 marrow: platelets at least 150, W B C at least 3.0, neutrophils at least 1.5, haemoglobin at least 9 grams per decilitre. Phase 2 renal: e G F R at least 60 by the same C K D-E P I 2009 equation. Phase 2 hepatic: bilirubin under 2 times U L N, or 3 times in Gilbert; A S T under 3 times U L N, or 5 times with liver mets; A L T same; albumin at least 30 grams per litre.",
        "Inclusion 13: male subjects must not father children or donate sperm during the study and for 6 months after last dose. Highly effective contraception for partners of childbearing potential for the same window: combined hormonal with ovulation inhibition, progestogen-only with ovulation inhibition, I U D, I U S, bilateral tubal occlusion, vasectomised partner, or sexual abstinence if that is the preferred usual lifestyle."
      ],
      "chips": [
        "eGFR ≥60",
        "Hb ≥9 Ph2",
        "6 months"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b058.jpg",
      "cap": "Protocol page 58 of 120 — Inclusion · eGFR, Phase 2 labs, contraception",
      "pearls": [
        "eGFR ≥60 (CKD-EPI 2009) in both phases. Do not enrol a creatinine-clearance 45.",
        "Phase 2 Hb floor is 9 g/dL, not 10. Contraception is 6 months after last dose."
      ]
    },
    {
      "title": "Page 59 of 120 · Inclusion 14 phase-specific, then exclusion 1–3",
      "audio": [
        "A woman is of childbearing potential from menarche until post-menopausal unless permanently sterile. A man is infertile only after bilateral orchidectomy or successful vasectomy with laboratory-confirmed aspermia.",
        "Inclusion 14a, Phase 1: progression on or after at least 1 N A A D — abiraterone, enzalutamide — and at least 1 but no more than 2 taxane courses. 14b, Phase 2: progression on or after at least 1 N A A D — abiraterone, enzalutamide, apalutamide, darolutamide — and no taxane for m C R P C. Prior N A A D in the hormone-sensitive or castrate-resistant era is allowed. Prior chemo for metastatic hormone-sensitive disease is allowed. First-generation A R inhibitors such as bicalutamide do not count as N A A D. Progression is P C W G 3 Appendix 2.",
        "Exclusion 1: known hypersensitivity to the therapeutic I M P, the P S M A PET tracer, or the Phase 1 diagnostic I M P. 2: P S M A-negative disease. Phase 1: any large P S M A-negative node over 1 centimetre short axis, P S M A-negative bone met with significant soft-tissue component, or P S M A-negative solid-organ met over 1 centimetre long axis, plus significant low-P S M A-expressing disease. Phase 2: large P S M A-negative node over 2.5 centimetres, same bone and solid-organ rules. 3: superscan on the bone scan — excessive skeletal uptake with faint or absent soft-tissue and faint genitourinary activity."
      ],
      "chips": [
        "No taxane for mCRPC",
        "Superscan out",
        "PSMA− out"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b059.jpg",
      "cap": "Protocol page 59 of 120 — Inclusion 14 phase-specific, then exclusion 1–3",
      "pearls": [
        "Phase 2 allows prior taxane only if it was given for hormone-sensitive disease — not for mCRPC.",
        "Superscan is an exclusion. Phase 2 PSMA-negative node threshold is 2.5 cm, not 1 cm."
      ]
    },
    {
      "title": "Page 60 of 120 · Exclusions · cord compression, CNS, neuroendocrine, bisphosphonate, EBRT",
      "audio": [
        "Exclusion 4: symptomatic spinal cord compression or impending cord compression. 5: known haematological malignancy. 6: known C N S metastases, with an exception: treated, neurologically stable, asymptomatic, off steroids and anticonvulsants. Discrete dural mets are allowed; leptomeningeal disease is not. Those subjects need M R I or ce C T of the brain for response. 7: neuroendocrine phenotype. 8: other solid malignancy that may reduce life expectancy or interfere, except treated disease-free more than 3 years, non-melanoma skin, and non-muscle-invasive bladder.",
        "9: unresolved obstructing urinary tract obstruction; MAG3 during screening can clear a non-obstructing hydronephrosis. 10: uncontrolled medical, psychiatric, or surgical condition, including N Y H A 3 or 4 heart failure, congenital long Q T, myocardial infarction within 6 months. 11: ongoing bisphosphonate for bone-targeted therapy — exception: stable dose at least 6 weeks, renal function monitored, e G F R at least 60, stable pattern.",
        "12: severe urinary incontinence that would preclude safe disposal of radioactive urine. 13: single kidney or renal transplant or concomitant nephrotoxic drug that the investigator thinks puts the subject at high renal-toxicity risk. 14: clinically significant screening E C G abnormalities. 15: prior E B R T to a field including more than 30 percent of marrow or kidneys."
      ],
      "chips": [
        "Cord compression",
        "eGFR + bisphos",
        ">30% EBRT"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b060.jpg",
      "cap": "Protocol page 60 of 120 — Exclusions · cord compression, CNS, neuroendocrine, bisphosphonate, EBRT",
      "pearls": [
        "Bisphosphonate is not an automatic no — stable ≥6 weeks plus eGFR ≥60 is allowed.",
        ">30% marrow or kidney EBRT is an exclusion. MAG3 can rescue non-obstructing hydronephrosis."
      ]
    },
    {
      "title": "Page 61 of 120 · Exclusions 16–20, concomitant meds, prohibited prostate-cancer drugs",
      "audio": [
        "Exclusion 16: Sponsor employees or site staff directly affiliated, and their immediate family. 17: prior P S M A-targeted radionuclide therapy, strontium-89, samarium-153, rhenium-186, rhenium-188, radium-223, or hemi-body irradiation. 18: bilateral hip replacements or significant metal that would wreck image quality or Phase 1 dosimetry. 19: transfusion of blood products solely to meet eligibility. 20: other I M P within 28 days or 5 half-lives.",
        "Section 7. Prior prostate-cancer medications are documented at screening. Concomitant: continue usual meds including analgesia and background A D T. A D T continues. Plan analgesia for breakthrough pain, especially lying on the SPECT bed. All concomitant drugs go on the e C R F.",
        "Prohibited: other prostate-cancer treatments besides the I M P and background A D T. Ongoing N A A Ds may continue with background A D T if that is institutional standard. If other prostate-cancer drugs are needed, withdraw and enter passive safety follow-up. Bone-marrow stimulating agents for I M P-related haematologic toxicity — sargramostim, filgrastim, epoetin alfa, eltrombopag — mean discontinue from the study."
      ],
      "chips": [
        "No prior RLT",
        "ADT continues",
        "G-CSF = stop"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b061.jpg",
      "cap": "Protocol page 61 of 120 — Exclusions 16–20, concomitant meds, prohibited prostate-cancer drugs",
      "pearls": [
        "No prior PSMA RLT, Sr-89, Sm-153, Re-186/188, Ra-223, or hemi-body RT. That is a board favourite.",
        "Background ADT stays. G-CSF / TPO agonist → off study, not just a hold."
      ]
    },
    {
      "title": "Page 62 of 120 · Treatments · IMPs, randomisation, open-label, formulation start",
      "audio": [
        "No other prohibited medications beyond the exclusion list; otherwise usual institutional practice. Section 8 study treatments. Therapeutic I M P: lutetium-177 rhPSMA-10.1 injection. Diagnostic I M P: rhPSMA-7.3 fluorine-18, Phase 1 only.",
        "POSLUMA flotufolastat F 18 was F D A-approved 25 May 2023 for P S M A PET in suspected metastasis before definitive therapy, or suspected recurrence on elevated P S A. Phase 1 is a single-arm completed treatment phase. Phase 2 randomises 2A versus 2B 1 to 1 by block randomisation in an I R T system. If 2C opens it is 1 to 1 to 1 while 2A and 2B are still open, or 2C alone if they are full.",
        "Blinding: not applicable. Open-label. No control product. Therapeutic I M P is a sterile I V solution containing rhPSMA-10.1, the non-radioactive carrier, and lutetium-177 rhPSMA-10.1, the drug substance."
      ],
      "chips": [
        "Open-label",
        "IRT 1:1",
        "POSLUMA Ph1"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b062.jpg",
      "cap": "Protocol page 62 of 120 — Treatments · IMPs, randomisation, open-label, formulation start",
      "pearls": [
        "Open-label. No placebo. Phase 2 allocation is IRT 1:1, not masking.",
        "POSLUMA is the Phase 1 diagnostic only — already an approved product, used here as a gate."
      ]
    },
    {
      "title": "Page 63 of 120 · Molecular formula, diagnostic formulation, Phase 1 packaging",
      "audio": [
        "Lutetium-177 half-life 6.7 days, beta-minus, systemic radiation therapy. Structure: glutamate-urea P S M A motif, peptide-like spacer, silicon-fluoride acceptor Si F A, and lutetium-177 D O 3 A. Optimised from 7.3C by removing a propanoate on the linker. International nonproprietary name: not yet assigned. Chemical name on the page is the long pentacarboxy silicon-fluoride D O 3 A string. Molecular formula C 48 H 65 F lutetium-177 N 12 O 21 silicon.",
        "Diagnostic I M P, Phase 1 only: sterile aqueous I V solution. rhPSMA-7.3 fluorine-18 is a P S M A motif, peptide spacer, fluorine-18 Si F A, and a gallium chelator complex. Formula C 63 H 96 fluorine-18 gallium N 12 O 27 silicon.",
        "No control product. Phase 1 packaging: therapeutic in a multi- or single-dose vial with synthetic rubber closure and aluminium overseal, or a single unit-dose syringe. Label at minimum: radioactivity concentration and/or total radioactivity in gigabecquerels and/or millicuries, plus calibration date and time. Diagnostic in a multi-dose vial or unit-dose syringe, shipped in lead or tungsten shielding."
      ],
      "chips": [
        "T½ 6.7 d",
        "C48 formula",
        "INN pending"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b063.jpg",
      "cap": "Protocol page 63 of 120 — Molecular formula, diagnostic formulation, Phase 1 packaging",
      "pearls": [
        "INN not yet assigned — do not invent a USAN on a quiz. Structure is the four-piece radiohybrid.",
        "Diagnostic 7.3 F-18 still has a gallium chelator in the formula even though the PET nuclide is fluorine-18. That is the radiohybrid trick."
      ]
    },
    {
      "title": "Page 64 of 120 · Phase 2 packaging, supply, dispensing, administration, extravasation SAE",
      "audio": [
        "Phase 2 supply: multi- or single-dose vial with stopper and overseal, or a single unit-dose syringe. Label at minimum: total radioactivity in gigabecquerels and/or millicuries, calibration date and time.",
        "Quality-control of a sample may run in parallel with shipment. Only product with confirmation of release, or released before shipping, is used. Compromised primary packaging is not used. Waste follows radioactive-material regulations. Each I M P has a Handling Manual.",
        "Dispensing: syringe doses are measured in a qualified radionuclide dose calibrator; vial doses are volume-calculated per the Handling Manual. One unit dose, one subject. Administration: direct supervision, local radiopharmaceutical guidelines. Large-bore cannula in a palpable vein, easily flushable with sterile 0.9 percent sodium chloride, inspect for swelling. Ask about discomfort during the flush. If peripheral access will not flush, consider central access. Incorrect cannula placement can extravasate, cause severe soft-tissue damage and unintended local radiation. Suspected extravasation is a serious adverse event — inform investigator and Sponsor, notify the radiation-safety authorities for that jurisdiction."
      ],
      "chips": [
        "Extravasation = SAE",
        "Large-bore IV",
        "0.9% flush"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b064.jpg",
      "cap": "Protocol page 64 of 120 — Phase 2 packaging, supply, dispensing, administration, extravasation SAE",
      "pearls": [
        "Extravasation = SAE. That is the administration pearl.",
        "Large-bore cannula, 0.9% flush, look for swelling. If it will not flush, do not force the IMP in."
      ]
    },
    {
      "title": "Page 65 of 120 · Activity windows, POSLUMA dose, storage, accountability",
      "audio": [
        "Phase 1 therapeutic activities are Table 2, with plus or minus 10 percent tolerance. Phase 2 activities are Figure 5, same plus or minus 10 percent. Diagnostic rhPSMA-7.3 fluorine-18, Phase 1 only: 296 megabecquerels, 8 millicuries, plus or minus 20 percent, diluted with normal saline up to 10 millilitres, then a 10 millilitre saline flush.",
        "Storage: shielded container, controlled temperatures, per the Handling Manual. Accountability per I C H G C P: lot, date, quantity received; subject, date-time, activity dispensed; destruction date, lots, quantities. Spillages follow local rules and the Handling Manual. Monitor verifies accountability; discrepancies on final reconciliation are explained by the investigator."
      ],
      "chips": [
        "±10%",
        "296 MBq ±20%",
        "Accountability"
      ],
      "visual": "lu177",
      "image": "assets/protocol/bet/b065.jpg",
      "cap": "Protocol page 65 of 120 — Activity windows, POSLUMA dose, storage, accountability",
      "pearls": [
        "Therapeutic ±10%. Diagnostic POSLUMA ±20% at 296 MBq (8 mCi) then 10 mL flush.",
        "One unit dose, one subject — do not split a syringe across patients."
      ]
    },
    {
      "title": "Page 66 of 120 · Compliance, end of study, procedures, history, ECOG",
      "audio": [
        "Compliance: I M P is given under direct supervision. Volume and total radioactivity injected are checked. Lot and activity per administration go on the e C R F and source documents.",
        "Primary endpoint analysis is after the last Phase 2 subject finishes the 6-week follow-up after final treatment. A formal interim analysis will be completed and an interim study report written. Phase 1 gets a top-line results memo covering primary endpoint and dosimetry. End of study is when the last subject has completed long-term passive safety follow-up, died, or is lost. Then the database closes and a final study report is written. No extra treatment cycles beyond the protocol.",
        "Section 9 procedures. Schedule is Appendix 1. I C F before any study activity. Screening within 42 days before first I M P. Eligibility is re-checked before every cycle. Re-consent if the next cycle is predicted to exceed organ limits. Enrolled equals signed I C F, screened, and eligible. Medical history including germline or tumour D N A if already done. E C O G at the Appendix 1 timepoints."
      ],
      "chips": [
        "Screen −42 d",
        "Re-consent",
        "No extra cycles"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b066.jpg",
      "cap": "Protocol page 66 of 120 — Compliance, end of study, procedures, history, ECOG",
      "pearls": [
        "Screening window is 42 days before first therapeutic IMP.",
        "No extra cycles off-protocol — even if the investigator wants a ninth 7.40."
      ]
    },
    {
      "title": "Page 67 of 120 · Exam, weight, demographics, PSA sampling, 12-weekly imaging",
      "audio": [
        "Physical exam per Appendix 1; clinically significant changes after screening are adverse events. Height and weight without shoes. Phase 1: weight before diagnostic I M P, before diagnostic PET, and before every therapeutic dose. Phase 2: weight before I M P on each dosing day. Demographics as local law allows: year of birth, age, sex, ethnicity.",
        "Efficacy is labs plus radiology. P S A blood sampling per Appendix 1. Phase 1: every 2 weeks on treatment, monthly in efficacy follow-up until radiographic progression, death, or loss. Phase 2: screening, pre-I M P Cycle 1 Day 1, every 6 weeks on treatment, every 12 weeks in efficacy follow-up until radiographic progression, death, or loss. A 50 percent or greater P S A drop from baseline is the surrogate anti-tumour biomarker.",
        "Radiology every 12 weeks from Cycle 1 Day 1: ce C T or M R I of chest, abdomen, pelvis, plus a full-body technetium-99m bone scan, P C W G 3 and R E C I S T 1.1, until central radiographic progression, death, or loss. Bone scan during treatment must be within 5 days before I M P to avoid interfering with dosimetry. Central Imaging vendor reads all of it."
      ],
      "chips": [
        "PSA q6w Ph2",
        "Imaging q12w",
        "Bone scan ≤5 d"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b067.jpg",
      "cap": "Protocol page 67 of 120 — Exam, weight, demographics, PSA sampling, 12-weekly imaging",
      "pearls": [
        "Phase 2 PSA is q6w on treatment, q12w in follow-up. Phase 1 PSA was q2w.",
        "Bone scan ≤5 days before IMP so technetium does not contaminate SPECT dosimetry."
      ]
    },
    {
      "title": "Page 68 of 120 · Vitals, ECG, adverse-event capture start",
      "audio": [
        "Safety evaluations run from consent. Once in passive long-term safety follow-up, A Es are chart review only — no extra visits. Vitals — temperature, blood pressure, pulse, respiration — after at least 5 minutes rest at screening and pre- and post-I M P on dosing days. Clinically significant vital-sign changes are A Es.",
        "Twelve-lead E C G supine, rested 5 minutes. Phase 1: single E C G at screening and E o T; triplicate pre-therapeutic and 30 to 120 minutes post-therapeutic every cycle. Phase 2: single E C G at screening, pre-I M P every cycle, and E o T; one post-I M P E C G in Cycle 1 only, within 5 hours of the dose.",
        "A Es captured for all subjects until last study visit. Duration, severity, outcome, treatment, and relationship go on the e C R F. Passive follow-up is chart review. Untoward events from signed consent to just before first I M P are recorded but only post-I M P A Es are assessed for relatedness to the I M P."
      ],
      "chips": [
        "ECG C1 post Ph2",
        "Vitals",
        "AEs from consent"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b068.jpg",
      "cap": "Protocol page 68 of 120 — Vitals, ECG, adverse-event capture start",
      "pearls": [
        "Phase 2 post-dose ECG is Cycle 1 only, within 5 hours — not every cycle like Phase 1 triplicates.",
        "Passive long-term follow-up is chart review, not extra AE visits."
      ]
    },
    {
      "title": "Page 69 of 120 · Relatedness follow-up, POSLUMA AEs, Phase 1 PSMA PET",
      "audio": [
        "S A Es or related A Es are followed to Grade 1 or less or until stabilised. Subjects report A Es as they occur and are prompted at each visit.",
        "Diagnostic I M P A Es, Phase 1 only: POSLUMA is a microdose PET agent, F D A-approved 25 May 2023. If the A E is between eligibility PET and first therapeutic dose, relatedness is to the diagnostic only. If it is during the 48 hours after the response PET 4 to 6 weeks after Cycle 2, relatedness is asked for both I M Ps.",
        "Phase 1 P S M A PET: I V diagnostic I M P at screening for eligibility, plus a second diagnostic PET within 4 to 6 weeks after Cycle 2 for exploratory response — not used to define progression. Inclusion: at least one P S M A-positive lesion greater than normal liver; in Phase 1 at least one lesion"
      ],
      "chips": [
        "POSLUMA AEs",
        "Exploratory PET",
        "Local Ph1 read"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b069.jpg",
      "cap": "Protocol page 69 of 120 — Relatedness follow-up, POSLUMA AEs, Phase 1 PSMA PET",
      "pearls": [
        "The Cycle-2+ 4–6 week POSLUMA PET is exploratory response, not a progression trigger.",
        "Relatedness to POSLUMA vs therapeutic IMP depends on when the AE sits relative to each dose."
      ]
    },
    {
      "title": "Page 70 of 120 · Phase 1 PET size gate, Phase 2 central PET, ceCT / bone scan",
      "audio": [
        "greater than 1.5 centimetres to facilitate tumour dosimetry. Phase 1 exclusions for P S M A-negative disease: large P S M A-negative node over 1 centimetre short axis, P S M A-negative bone met with significant soft tissue, or P S M A-negative solid-organ met over 1 centimetre. Phase 1 image assessment is local — investigator, nuclear physician, or radiologist. Submitted to the vendor but not read centrally for eligibility.",
        "Phase 2: P S M A PET at screening for inclusion 7 and exclusion 2. Eligibility is the Central Imaging vendor. Tracer is locally approved. Standard-of-care P S M A PET or cross-sectional imaging within 28 days before consent may be reused if submissible. Details in the Image Review Charter and Acquisition Guidelines.",
        "Baseline ce C T or M R I of chest, abdomen, pelvis and a full-body technetium-99m bone scan at screening, locally read for eligibility. Then every 12 weeks plus or minus 5 days from Cycle 1 Day 1, central P C W G 3 including R E C I S T 1.1. Brain M R I C T only if clinical suspicion. Central radiographic progression stops further I M P. Isolated P S A progression without radiographic progression does not stop dosing if the investigator still sees benefit. Iodinated-contrast intolerance: non-contrast chest C T plus M R I abdomen and pelvis."
      ],
      "chips": [
        "Local vs central",
        "q12w ceCT",
        "PSA≠stop"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b070.jpg",
      "cap": "Protocol page 70 of 120 — Phase 1 PET size gate, Phase 2 central PET, ceCT / bone scan",
      "pearls": [
        "Phase 1 PET eligibility is local; Phase 2 PET eligibility is central. Do not swap them.",
        "Isolated PSA progression does not force a stop. Central radiographic progression does."
      ]
    },
    {
      "title": "Page 71 of 120 · SPECT/CT dosimetry clocks Phase 1 and Phase 2",
      "audio": [
        "If contrast is not possible, supply M R I of abdomen and pelvis with contrast if possible. Section 9.4.3 SPECT C T dosimetry.",
        "Phase 1, every cycle: quantitative SPECT C T at 3 hours, 24 hours, 48 hours, and 168 hours. Submit promptly the day of acquisition, no later than 24 hours after the 168-hour scan, so central dosimetry can report before the next cycle, within 28 days. Heart absorbed dose is recorded in case of cardiac toxicity. All data go to the S R C at cohort completion.",
        "Phase 2 uses first-cycle dose-activity curves scaled to later cycles. Cycle 1: SPECT C T at 3 plus or minus 1 hour, 24 plus or minus 4, 48 plus or minus 4, and 168 plus or minus 24 hours. Subsequent cycles: a single 48 plus or minus 4 hour scan. Exception: Cohort 2B keeps a 168 plus or minus 24 hour scan on the first two cycles. Review every 6 weeks before the next cycle. Same hybrid camera each cycle. Details in the Study Dosimetry Manual."
      ],
      "chips": [
        "3/24/48/168 h",
        "Then 48 h",
        "2B keeps 168 h"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b071.jpg",
      "cap": "Protocol page 71 of 120 — SPECT/CT dosimetry clocks Phase 1 and Phase 2",
      "pearls": [
        "Phase 1: 3 / 24 / 48 / 168 h every cycle. Phase 2: that clock only in Cycle 1, then a single 48 h.",
        "2B exception: 168 h kept on Cycles 1 and 2 because the early interval is q3w."
      ]
    },
    {
      "title": "Page 72 of 120 · Table 12 image-assessment sites, laboratory schedule",
      "audio": [
        "Image interpretation: Phase 1 eligibility PET, ce C T M R I, and bone scan are local site. Phase 2 eligibility PET is central, and that read includes the cross-sectional images for P S M A-negative disease. Efficacy ce C T M R I and bone scan are central in both phases. Phase 1 P S M A PET efficacy is central; Phase 2 P S M A PET efficacy is not applicable. SPECT C T dosimetry is central specialist vendor in both phases. That is Table 12.",
        "Labs per Appendix 1 at the local lab. Day-of-cycle or within 72 hours before I M P. If collected within 72 hours of Day 1, the Day 1 safety bloods may be waived unless clinically indicated.",
        "Phase 1 safety labs — haematology, biochemistry, thyroid, coagulation — at screening, baseline, 24 plus or minus 8 hours, and 7 days post I M P, then weekly, plus dosimetry bloods. Prefer a single needle, vacutainer. Phase 2: haematology, biochemistry, coagulation at screening and pre-I M P each cycle. 2A and 2C: every 2 weeks on Days 15, 29, 43 plus or minus 24 hours. 2B: also Day 22 of the first two q3w cycles."
      ],
      "chips": [
        "Table 12",
        "72 h labs",
        "Thyroid Ph1 only"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b072.jpg",
      "cap": "Protocol page 72 of 120 — Table 12 image-assessment sites, laboratory schedule",
      "pearls": [
        "Table 12: Phase 2 PSMA PET eligibility is the one central-read that gates enrolment.",
        "72-hour pre-dose labs can replace Day 1 bloods. Thyroid panel is Phase 1 only."
      ]
    },
    {
      "title": "Page 73 of 120 · Haematology, biochemistry, coagulation, thyroid, PSA, urinalysis",
      "audio": [
        "EoT bloods in both phases. Ad-hoc labs as needed, for example myelosuppression. If more than 42 days have passed since screening labs, repeat haematology, biochemistry, Phase 1 thyroid, and coagulation before I M P. Abnormal clinically significant changes after screening are A Es.",
        "Haematology: haemoglobin, haematocrit, red cell count, W B C, differential, platelets. Biochemistry: sodium, potassium, chloride, bicarbonate, glucose, urea, creatinine, magnesium, calcium, A S T, A L T, A L P, total bilirubin, direct bilirubin, G G T, albumin, L D H, C-reactive protein. e G F R by C K D-E P I 2009.",
        "Coagulation: Phase 1 P T, a P T T, thrombin time. Phase 2 P T, a P T T, I N R. Thyroid panel Phase 1 only: T S H, free T 4, free T 3. Serum P S A at the local lab. Urinalysis at screening: colour, specific gravity, p H, protein, glucose, ketones, nitrites, blood. Nitrites on dipstick"
      ],
      "chips": [
        "CKD-EPI 2009",
        "PSA local",
        "UA screening"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b073.jpg",
      "cap": "Protocol page 73 of 120 — Haematology, biochemistry, coagulation, thyroid, PSA, urinalysis",
      "pearls": [
        "CKD-EPI 2009 is the protocol eGFR — not Cockcroft-Gault, not MDRD.",
        "Thyroid panel is Phase 1 only. Phase 2 coagulation uses INR instead of thrombin time."
      ]
    },
    {
      "title": "Page 74 of 120 · Urine infection hold, UPCR Phase 2, PK Phase 1 only, FACT-P",
      "audio": [
        "mean hold I M P until infection is treated. Repeat urinalysis at E o T. Indwelling catheters skip urinalysis because of false positives; treat catheter-associated infection per local practice. New urinary symptoms on dosing day trigger investigator assessment; delay I M P until suspected infection resolves.",
        "Phase 2 only: spot urine protein-creatinine ratio, U P C R, pre-I M P each dosing morning, not the first void, eat and drink normal. Tracked on treatment and active follow-up; not used in isolation to stop or alter dosing.",
        "Pharmacokinetics, Phase 1 only: multi-timepoint whole blood after therapeutic I M P. Blood for radioactivity at 30 minutes pre, then 30 minutes, 90 minutes, 4 hours, 24 hours, and 48 hours post, contralateral arm. Accurate times recorded. No blood radioactivity measurements in Phase 2. Patient-reported outcomes are Phase 2 only, at baseline, at 6-week intervals, and at 3-week intervals for the first 3 cycles of 2B, pre-I M P. FACT-P first, then FACT-R N T. Final P R Os at E o T, on paper, local language. FACT-P is FACT-General plus a 12-item prostate supplement."
      ],
      "chips": [
        "No PK Ph2",
        "UPCR Ph2",
        "FACT-P first"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b074.jpg",
      "cap": "Protocol page 74 of 120 — Urine infection hold, UPCR Phase 2, PK Phase 1 only, FACT-P",
      "pearls": [
        "PK blood is Phase 1 only — 30 min pre, 30 min, 90 min, 4 h, 24 h, 48 h, contralateral arm.",
        "Phase 2 UPCR is collected but does not by itself stop dosing. FACT-P before FACT-RNT."
      ]
    },
    {
      "title": "Page 75 of 120 · FACT-RNT and Phase 1 screening visit list",
      "audio": [
        "FACT-R N T monitors symptoms and toxicities among prostate-cancer patients in radionuclide-therapy trials. Built from 529 R N T patients, 514 caregivers, 511 clinicians, then expert refinement.",
        "Section 10 evaluations by visit. Signed dated I C F before any study-specific procedure, including screening. Phase 1 screening, Day minus 42: review study, I C F, H I P A A; confirm eligibility; demographics; history including adenocarcinoma; concomitant meds; E C O G; focused exam with height and weight; vitals and single 12-lead E C G; dipstick urinalysis; screening haematology, coagulation, biochemistry, thyroid, P S A; ce C T or M R I of chest, abdomen, pelvis and full-body bone scan — standard-of-care scans within 28 days before consent may be reused if submissible."
      ],
      "chips": [
        "FACT-RNT",
        "Screen −42 d",
        "ICF first"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b075.jpg",
      "cap": "Protocol page 75 of 120 — FACT-RNT and Phase 1 screening visit list",
      "pearls": [
        "FACT-RNT is the radionuclide-therapy PRO; FACT-P is the prostate PRO. Rank: FACT-P secondary, FACT-RNT exploratory.",
        "Phase 1 screening is a 42-day window and includes POSLUMA PET, which is on the next page."
      ]
    },
    {
      "title": "Page 76 of 120 · Phase 1 screening finish and Cycle 1 Day 1",
      "audio": [
        "Complete Patient Eligibility Review Checklist part 1; medical monitor approves before diagnostic I M P and PET. Give POSLUMA, do the eligibility PET, weigh beforehand. Review all screening data and PET eligibility. Checklist part 2, medical monitor approves before therapeutic I M P is ordered. Start A E monitoring. Order therapeutic I M P, schedule Day 1 within 42 days of consent, book logistics, give a contact card.",
        "Cycle 1 Day 1, therapeutic I M P: update concomitant meds and A Es; E C O G; exam and weight; vitals pre and post; triplicate 12-lead E C G pre; review suitability; pre-dose haematology, coagulation, biochemistry, thyroid, P S A; pre-dose blood within 30 minutes for radiation dosimetry; give I V lutetium-177 rhPSMA-10.1; blood at 30 minutes, 90 minutes, and 4 hours for dosimetry; triplicate E C G 30 to 120 minutes post; SPECT C T at 3 hours; record injection-site reactions and any A Es.",
        "Subsequent cycles: about 2 weeks before, review dosimetry, clinical assessments, and labs to confirm eligibility for further treatment."
      ],
      "chips": [
        "Checklist 1 then 2",
        "C1D1 stack",
        "3 h SPECT"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b076.jpg",
      "cap": "Protocol page 76 of 120 — Phase 1 screening finish and Cycle 1 Day 1",
      "pearls": [
        "Two-part eligibility checklist: part 1 before POSLUMA, part 2 before the therapeutic is ordered.",
        "Cycle 1 Day 1 stacks PK blood, triplicate ECG, 3-hour SPECT, and the infusion on one visit."
      ]
    },
    {
      "title": "Page 77 of 120 · Phase 1 subsequent cycles and 24-to-168-hour windows",
      "audio": [
        "Subsequent-cycle Day 1: concomitant meds, A Es, exam and weight, vitals pre and post, triplicate E C G pre, pre-dose labs including thyroid and P S A, 30-minute pre-dose dosimetry blood, infuse, 30 / 90 / 4-hour bloods, triplicate E C G 30 to 120 minutes post, 3-hour SPECT, injection-site reactions.",
        "Twenty-four to 168 hours of every cycle: subjects may be hospitalised Day 1 to Day 3 at investigator discretion, or offered transport and a hotel, or go home and return. Record meds and A Es. Exam at 168 hours. Haematology, coagulation, biochemistry at 24 plus or minus 8 hours and at 7 days. Dosimetry blood at 24 and 48 hours. SPECT C T at 24, 48, and 168 hours every cycle."
      ],
      "chips": [
        "Every-cycle SPECT",
        "Optional admit",
        "7-day labs"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b077.jpg",
      "cap": "Protocol page 77 of 120 — Phase 1 subsequent cycles and 24-to-168-hour windows",
      "pearls": [
        "Phase 1 keeps the full 24 / 48 / 168 h SPECT on every cycle — that is the completed intensive dosimetry block.",
        "Hospitalisation Day 1–3 is optional, not mandatory. Hotel/transport is an allowed convenience."
      ]
    },
    {
      "title": "Page 78 of 120 · Phase 1 weekly interval, 12-weekly imaging, Phase 2 screening start",
      "audio": [
        "Six-week interval weekly visits plus or minus 1 day: Weeks 2, 3, 4, 5, 6 — Days 14, 21, 28, 35, 42. Concomitant meds, A Es, P S A plus haematology, coagulation, biochemistry. Weeks 3 and 5 may be remote — A Es and meds only, no labs. Ad-hoc labs for myelosuppression.",
        "Twelve-weekly imaging: a second POSLUMA PET 4 to 6 weeks after Cycle 2, not in the days after a third therapeutic dose. Every 12 weeks — every other therapeutic cycle — ce C T or M R I plus bone scan, plus or minus 5 days, but the bone scan 2 to 5 days before I M P so technetium does not collide with SPECT. Do not run P S M A PET and the bone scan the same day.",
        "Phase 2 Cohorts 2A and 2C screening, Day minus 42: I C F and H I P A A, eligibility, demographics, history of adenocarcinoma, concomitant meds — continues on the next page."
      ],
      "chips": [
        "Remote W3/W5",
        "No same-day PET/bone",
        "Ph2 screen"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b078.jpg",
      "cap": "Protocol page 78 of 120 — Phase 1 weekly interval, 12-weekly imaging, Phase 2 screening start",
      "pearls": [
        "Weeks 3 and 5 of the 6-week interval can be remote. Weeks 2, 4, 6 keep labs.",
        "Never same-day PSMA PET and ⁹⁹mTc bone scan — two radionuclides, one camera."
      ]
    },
    {
      "title": "Page 79 of 120 · Phase 2 2A/2C screening finish and Cycle 1 Day 1",
      "audio": [
        "Screening continued: concomitant meds, E C O G, exam with height and weight, vitals and single 12-lead E C G, dipstick urinalysis, haematology, coagulation, biochemistry, P S A. If screening exceeds 42 days, repeat bloods before Cycle 1 Day 1. Local-read ce C T or M R I and bone scan; P S M A PET for eligibility, weigh first; standard-of-care scans within 28 days may be reused centrally. Send everything to the Central Imaging vendor. Confirm eligibility, start A E monitoring, randomise in I R T, order I M P, schedule Day 1 within 42 days of consent, contact card.",
        "Cycle 1 Day 1: meds, A Es, P R Os — FACT-P then FACT-R N T — E C O G, exam and weight, single E C G, U P C R, pre-dose haematology, coagulation, biochemistry, P S A. Safety labs within 72 hours of Day 1 can replace Day 1 bloods."
      ],
      "chips": [
        "IRT at screen",
        "FACT-P then RNT",
        "UPCR"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b079.jpg",
      "cap": "Protocol page 79 of 120 — Phase 2 2A/2C screening finish and Cycle 1 Day 1",
      "pearls": [
        "Phase 2 randomises in IRT at the end of screening, before Day 1.",
        "PROs are pre-IMP, FACT-P then FACT-RNT. UPCR is a Phase 2 dosing-morning test."
      ]
    },
    {
      "title": "Page 80 of 120 · Phase 2 2A/2C Cycle 1 Day 1 finish and subsequent Day 1",
      "audio": [
        "Cycle 1 Day 1 continued: vitals pre-I M P, confirm eligibility, infuse lutetium-177 rhPSMA-10.1, vitals post, SPECT C T at 3 plus or minus 1 hours, single 12-lead E C G within 5 hours post, injection-site reactions and A Es.",
        "Subsequent-cycle Day 1, 2A and 2C: review dosimetry and clinical assessments first. Then meds, A Es, P R Os FACT-P then FACT-R N T, E C O G, exam and weight, single E C G, U P C R, pre-dose labs, vitals, confirm eligibility, infuse, vitals post, injection-site reactions. Safety labs within 72 hours of Day 1 may replace Day 1 bloods.",
        "Section 10.2.4, 24 to 168 hours post-I M P, Cycle 1 only of 2A and 2C, continues on the next page and in Appendix 1."
      ],
      "chips": [
        "C1 3 h SPECT",
        "ECG ≤5 h",
        "Then 48 h only"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b080.jpg",
      "cap": "Protocol page 80 of 120 — Phase 2 2A/2C Cycle 1 Day 1 finish and subsequent Day 1",
      "pearls": [
        "Phase 2 post-dose ECG is Cycle 1, within 5 hours — not the Phase 1 30–120 minute triplicate.",
        "Subsequent 2A/2C Day 1 visits drop the 3-hour SPECT; that clock is Cycle 1 only."
      ]
    },
    {
      "title": "Page 81 of 120 · Phase 2 2A/2C 24–168 h SPECT and six-weekly interval",
      "audio": [
        "Cycle 1 of 2A and 2C: subjects may be hospitalised at investigator discretion, offered transport and a hotel, or go home and return. Record meds and A Es. SPECT C T at 24 plus or minus 4 hours, 48 plus or minus 4 hours, and 168 plus or minus 24 hours.",
        "Subsequent cycles of 2A and 2C: meds, A Es, and a single SPECT C T at 48 plus or minus 4 hours. No 24-hour or 168-hour scan after Cycle 1.",
        "Six-weekly interval, every 2 weeks from Week 2 Day 15: Weeks 2, 4, 6 — Days 15, 29, 43. Meds and A Es. Haematology, coagulation, biochemistry. Week 6 Day 43 also takes P S A, and a pre-I M P blood for the next cycle may be drawn here. Ad-hoc labs for myelosuppression."
      ],
      "chips": [
        "48 h later cycles",
        "q2w labs",
        "C1 keeps 168 h"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b081.jpg",
      "cap": "Protocol page 81 of 120 — Phase 2 2A/2C 24–168 h SPECT and six-weekly interval",
      "pearls": [
        "2A/2C after Cycle 1: one 48-hour SPECT per cycle. The 3/24/168 clock does not repeat.",
        "Interval visits are q2w, not weekly like Phase 1."
      ]
    },
    {
      "title": "Page 82 of 120 · Phase 2 2A/2C twelve-weekly imaging and Cohort 2B screening start",
      "audio": [
        "Twelve-weekly imaging after the first I M P cycle: ce C T or M R I of chest, abdomen, pelvis and full-body bone scan until central radiographic progression, death, or loss. During I M P cycles, cross-sectional imaging plus or minus 5 days of the next dose; bone scan within 5 days before I M P so technetium does not collide with SPECT.",
        "Cohort 2B screening, Day minus 42, is the same spine as 2A and 2C: I C F and H I P A A, eligibility, demographics, adenocarcinoma history, concomitant meds, E C O G, exam with height and weight, vitals and single E C G, dipstick urinalysis, haematology, coagulation, biochemistry, P S A. Repeat bloods if screening exceeds 42 days. Local-read ce C T or M R I and bone scan; P S M A PET for eligibility, weigh first; standard-of-care scans within 28 days may be reused centrally."
      ],
      "chips": [
        "q12w imaging",
        "2B screen",
        "Reuse ≤28 d"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b082.jpg",
      "cap": "Protocol page 82 of 120 — Phase 2 2A/2C twelve-weekly imaging and Cohort 2B screening start",
      "pearls": [
        "Imaging cadence is q12w in every Phase 2 cohort. Bone scan ≤5 days before IMP.",
        "2B screening is operationally identical to 2A/2C. The difference is the q3w early cycles after randomisation."
      ]
    },
    {
      "title": "Page 83 of 120 · Cohort 2B screening finish and Cycles 1–2 Day 1",
      "audio": [
        "Send ce C T or M R I, bone scan, and P S M A PET to the Central Imaging vendor. Confirm eligibility, start A E monitoring, randomise in I R T, order I M P, schedule Day 1 within 42 days of consent, contact card.",
        "Cohort 2B Cycles 1 and 2 Day 1: meds, A Es, P R Os FACT-P then FACT-R N T, E C O G, exam and weight, single E C G, U P C R, pre-dose haematology, coagulation, biochemistry, P S A. Labs within 72 hours of Day 1 may replace Day 1 bloods. Vitals pre, confirm eligibility, infuse, vitals post, SPECT C T at 3 hours, single E C G within 5 hours post, injection-site reactions."
      ],
      "chips": [
        "2B C1–2 D1",
        "IRT",
        "3 h SPECT"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b083.jpg",
      "cap": "Protocol page 83 of 120 — Cohort 2B screening finish and Cycles 1–2 Day 1",
      "pearls": [
        "2B Cycle 1 Day 1 looks like 2A Cycle 1 — 3-hour SPECT plus 5-hour ECG.",
        "2B Cycle 2 still has a 3-hour SPECT because the first two cycles keep the 168-hour clock."
      ]
    },
    {
      "title": "Page 84 of 120 · Cohort 2B subsequent Day 1 and Cycle 1 24–168 h SPECT",
      "audio": [
        "Subsequent 2B Day 1 visits, Cycle 2 onward as applicable: review dosimetry first, then meds, A Es, P R Os FACT-P then FACT-R N T, E C O G, exam and weight, single E C G, U P C R, pre-dose labs, vitals, confirm eligibility, infuse, vitals post, injection-site reactions. Seventy-two-hour pre-dose labs may replace Day 1 bloods.",
        "Cycle 1 only, 24 to 168 hours: optional hospitalisation or hotel or home-and-return. Meds, A Es, SPECT C T at 24 plus or minus 4, 48 plus or minus 4, and 168 plus or minus 24 hours."
      ],
      "chips": [
        "2B C1 168 h",
        "PROs every dose"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b084.jpg",
      "cap": "Protocol page 84 of 120 — Cohort 2B subsequent Day 1 and Cycle 1 24–168 h SPECT",
      "pearls": [
        "2B Cycle 1 keeps the full 3 / 24 / 48 / 168 h SPECT set — same as 2A Cycle 1.",
        "PROs stay pre-IMP on every 2B dosing day, FACT-P then FACT-RNT."
      ]
    },
    {
      "title": "Page 85 of 120 · Cohort 2B Cycles 1–2 48 h SPECT, q3w interval, Cycles 3–8 start",
      "audio": [
        "Cycles 1 and 2 of 2B: after the Cycle 1 168-hour set, Cycle 2 still gets a 48 plus or minus 4 hour SPECT, and the protocol keeps a 168-hour window available on those first two cycles. Optional hospitalisation or hotel.",
        "Three-week interval of the first three 2B doses: present on Day 15 Week 2 and Day 22 Week 3. Meds, A Es, haematology, coagulation, biochemistry. P S A every 6 weeks. Bloods on Day 22 of the first two cycles only. After the third dose the subject enters the 6-week cycle and weekly visits match the 2A pattern.",
        "Cycles 3 to 8 Day 1: meds, A Es, P R Os FACT-P then FACT-R N T, E C O G, exam and weight, single E C G — continues on the next page."
      ],
      "chips": [
        "q3w D15/D22",
        "Then q6w",
        "Cycles 3–8"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b085.jpg",
      "cap": "Protocol page 85 of 120 — Cohort 2B Cycles 1–2 48 h SPECT, q3w interval, Cycles 3–8 start",
      "pearls": [
        "2B q3w labs: Day 15 and Day 22 of the first two cycles, then the subject flips to q6w.",
        "After dose 3, 2B is operationally a 6-week regimen like 2A, just without the 10.00 GBq front-load."
      ]
    },
    {
      "title": "Page 86 of 120 · Cohort 2B Cycles 3–8 Day 1, 48 h SPECT, six-weekly interval",
      "audio": [
        "Cycles 3 to 8 Day 1 continued: U P C R, pre-dose labs, vitals, confirm eligibility, infuse, vitals post, injection-site reactions. Seventy-two-hour pre-dose labs may replace Day 1 bloods.",
        "Forty-eight hours post-I M P, Cycles 3 to 8: optional hospitalisation or hotel. Meds, A Es, SPECT C T at 48 plus or minus 4 hours only.",
        "Six-weekly interval from Week 2 Day 15, every 2 weeks: Days 15, 29, 43. Meds, A Es, haematology, coagulation, biochemistry. Week 6 Day 43 also on the next page for P S A."
      ],
      "chips": [
        "48 h C3–8",
        "q2w interval"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b086.jpg",
      "cap": "Protocol page 86 of 120 — Cohort 2B Cycles 3–8 Day 1, 48 h SPECT, six-weekly interval",
      "pearls": [
        "From Cycle 3, 2B SPECT is a single 48-hour scan — the 168-hour clock is retired.",
        "q2w labs in the 6-week interval match 2A/2C."
      ]
    },
    {
      "title": "Page 87 of 120 · Cohort 2B week-6 labs, twelve-weekly imaging, end of treatment",
      "audio": [
        "Week 6 Day 43 of 2B: meds, A Es, haematology, coagulation, biochemistry, P S A, and a pre-I M P blood for the next cycle may be drawn here. Follow-up on 12-weekly ce C T or M R I and bone scan if due.",
        "Twelve-weekly imaging is the same as 2A: every other I M P cycle, plus or minus 5 days, bone scan within 5 days before I M P.",
        "End-of-treatment visit is the last day of the final 6-week cycle, plus or minus 48 hours. Vitals, bloods, A Es, concomitant meds, E C O G, exam, weight, 12-lead E C G, urinalysis, P R Os. If there is no central radiographic progression, advise monthly P S A for Phase 1 or 12-weekly P S A for Phase 2, plus 12-weekly ce C T or M R I and bone scan until progression. Ongoing toxicity at E o T — extra visits until resolved. Premature withdrawal: E o T within 10 days. Try to contact; if unreachable, lost to follow-up, no further visits. Efficacy follow-up: P S A monthly in Phase 1, 12-weekly in Phase 2, plus 12-weekly imaging until progression, death, or loss."
      ],
      "chips": [
        "EoT ±48 h",
        "P-withdraw 10 d",
        "PSA in FU"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b087.jpg",
      "cap": "Protocol page 87 of 120 — Cohort 2B week-6 labs, twelve-weekly imaging, end of treatment",
      "pearls": [
        "EoT is the last day of the final 6-week cycle ±48 h, not a random calendar date.",
        "Premature withdrawal still gets an EoT visit within 10 days."
      ]
    },
    {
      "title": "Page 88 of 120 · Safety follow-up and Section 11 imaging / calibration intro",
      "audio": [
        "If another anti-cancer therapy starts during efficacy follow-up, efficacy follow-up stops and long-term passive safety follow-up begins. While in efficacy follow-up, keep recording A Es on the e C R F.",
        "After radiographic progression or another anti-cancer therapy: chart review every 6 months until death. No formal study visits. Capture change in renal function, new haematological disorders, new malignancy, and new cardiac events, irrespective of causality. In passive follow-up, only serious A Es of special interest are reported. New prostate-cancer treatments, death date, and cause of death are collected. Disease progression leading to obstruction is unlikely to be attributed to the I M P; new renal impairment gets a causality look.",
        "Section 11. Diagnostic imaging protocols, PET C T calibration and Q C, and Phase 1 rhPSMA-7.3 acquisition live in the Image Acquisition Guidelines. SPECT C T, well/gamma counter, and dose-calibrator calibration live in the Study Dosimetry Calibration Manual. SPECT acquisition, SPECT Q C, and Phase 1 blood-sample assays live in the Study Dosimetry Manual."
      ],
      "chips": [
        "6-monthly chart",
        "Delayed kidney",
        "Calibration manuals"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b088.jpg",
      "cap": "Protocol page 88 of 120 — Safety follow-up and Section 11 imaging / calibration intro",
      "pearls": [
        "Passive follow-up is 6-monthly chart review until death — looking for delayed nephropathy, MDS/AML, new malignancy, cardiac events.",
        "Well/gamma counter is written here, then page 90 says none in Phase 2."
      ]
    },
    {
      "title": "Page 89 of 120 · PSMA PET acquisition, same-scanner rule, SPECT uses the therapeutic emission",
      "audio": [
        "Phase 1 P S M A PET: eligibility scan plus a second scan for P S M A-defined response. Dedicated hybrid PET C T, calibrated and qualified. Same qualified scanner for pre- and post-therapeutic PET. POSLUMA 296 megabecquerels, 8 millicuries, plus or minus 20 percent, venous cannula, arms down, 10 millilitre saline flush. Uptake 50 to 70 minutes. Subjects imaged about 20 minutes. Local and central readers trained.",
        "Phase 2: screening P S M A PET for inclusion 7 and exclusion 2. Locally approved tracer, local acquisition. Or a positive standard-of-care PET within 28 days before consent. All images to the Central Imaging vendor for eligibility. Reader training in the Image Review Charter.",
        "ce C T M R I and bone scan follow local guidelines. Quantitative SPECT C T is mandatory. Dedicated hybrid SPECT C T, qualified by the Central Imaging vendor. Sites receive a lutetium calibration vial and follow the Calibration Manual. Same qualified scanner every SPECT for that subject. Central vendor assesses evaluability. SPECT uses the radiation emitted from the I M P — no additional radiopharmaceutical."
      ],
      "chips": [
        "Same scanner",
        "296 MBq 50–70 min",
        "No extra RP"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b089.jpg",
      "cap": "Protocol page 89 of 120 — PSMA PET acquisition, same-scanner rule, SPECT uses the therapeutic emission",
      "pearls": [
        "Same scanner every SPECT for that subject. Same scanner for Phase 1 pre- and post-therapeutic PET.",
        "SPECT is the therapeutic emission. You do not inject extra radioactivity to image."
      ]
    },
    {
      "title": "Page 90 of 120 · Dose calibrator, no well counter in Phase 2, AE definitions start",
      "audio": [
        "Any dose calibrator used to measure the I M P must be qualified by the Central Imaging vendor. Sites receive a lutetium calibration vial. Well/gamma counter to measure blood radioactivity: Phase 1 only, also qualified, also a lutetium vial. No well/gamma counter is required for Phase 2.",
        "After each test and diagnostic scan, D I C O M files go to the Central Imaging vendor promptly. Sites get online training on the transfer software. Queries come back promptly.",
        "Section 12. An A E is any untoward medical occurrence in a subject administered a pharmaceutical product, not necessarily causal. Unexpected A Es are judged against the current R S I in the therapeutic I B, and the diagnostic I B in Phase 1. Investigators collect A Es by non-leading questions at each visit and for 48 hours after diagnostic I M P. Record description, duration, severity, outcome, actions, relationship. C T C A E Version 5, 2017, grades severity. Table 13 is on the next page."
      ],
      "chips": [
        "No well counter Ph2",
        "CTCAE v5",
        "DICOM to vendor"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b090.jpg",
      "cap": "Protocol page 90 of 120 — Dose calibrator, no well counter in Phase 2, AE definitions start",
      "pearls": [
        "No well/gamma counter in Phase 2 — that is the operational difference from Phase 1 PK bloods.",
        "Unexpected = not consistent with the current RSI in the IB."
      ]
    },
    {
      "title": "Page 91 of 120 · Tables 13 and 14 severity grades, relatedness of 'no'",
      "audio": [
        "Table 13, C T C A E Version 5. Grade 1 mild, asymptomatic or mild, intervention not indicated. Grade 2 moderate, local or non-invasive intervention, limiting age-appropriate instrumental A D L. Grade 3 severe or medically significant, hospitalisation or prolongation, disabling, limiting self-care A D L. Grade 4 life-threatening, urgent intervention. Grade 5 death related to the A E. Instrumental A D L is groceries, telephone, managing money. Self-care is bathing, dressing, feeding, toilet, medications, not bedridden.",
        "If C T C A E does not cover the experience, Table 14: mild 1, moderate 2, severe 3, life-threatening 4, death 5. 'Severe' is intensity, not automatically serious.",
        "Relatedness is a yes or no on a reasonable causal relationship. A 'no' needs a highly likely alternative explanation, or non-plausibility — cancer detected a few days after first I M P — or lack of a reasonable temporal sequence."
      ],
      "chips": [
        "CTCAE 1–5",
        "Severe≠SAE",
        "Yes/no related"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b091.jpg",
      "cap": "Protocol page 91 of 120 — Tables 13 and 14 severity grades, relatedness of 'no'",
      "pearls": [
        "Severe ≠ serious. Serious is the SAE definition on the next page (death, life-threatening, hospitalisation, disability, congenital anomaly, important medical event).",
        "Relatedness is binary yes/no, not a five-point scale."
      ]
    },
    {
      "title": "Page 92 of 120 · Relatedness of 'yes' and the SAE definition",
      "audio": [
        "A 'yes' means the A E is reasonably associated with the I M P. Weigh: temporal sequence from I M P; underlying disease; concomitant drugs; known A Es of the I M P and its P K; positive dechallenge; and if the report is conflicting or poor, the A E is related by default.",
        "An S A E at any dose: results in death; is life-threatening at the time of the event, not hypothetically; requires inpatient hospitalisation or prolongation; results in persistent or significant disability or incapacity; is a congenital anomaly; or is an important medical event that may not meet those bars but jeopardises the subject — allergic bronchospasm needing intensive treatment, blood dyscrasias, convulsions not hospitalised, development of drug dependence or abuse. Suspected transmission of an infectious agent via a medicinal product is an S A E. A non-serious A E is any A E that is not an S A E."
      ],
      "chips": [
        "SAE 6-point",
        "Default related",
        "Infection transmission"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b092.jpg",
      "cap": "Protocol page 92 of 120 — Relatedness of 'yes' and the SAE definition",
      "pearls": [
        "Extravasation was already classified as an SAE in Section 8.5.2 — it sits inside this definition as an important medical event / local radiation injury.",
        "Poor or conflicting evidence defaults to related. That is a conservative causality rule."
      ]
    },
    {
      "title": "Page 93 of 120 · SAE reporting, SUSAR, urgent safety measures",
      "audio": [
        "All S A Es go on an S A E Report Form via the e C R F from consent until the subject finishes active follow-up — central radiographic progression, loss, or death. In long-term passive follow-up, only S A Es assessed as related to the I M P are reported; a small set of special-interest A Es is reviewed at 6-monthly chart review and entered irrespective of causality.",
        "Report S A Es immediately, no later than 24 hours after the investigator is aware, by completing the e C R F. That notifies Sponsor pharmacovigilance. If death is suspected related and an autopsy is done, send the autopsy report. A S U S A R is an adverse reaction whose nature and severity are not consistent with the R S I. Sponsor reports S U S A Rs to authorities, I R B I E C, and other parties. Investigators are informed of S U S A Rs for this I M P across all Blue Earth Therapeutics trials.",
        "Urgent safety measure: action to protect subjects against an immediate hazard — for example a significant higher incidence of death at one site, recruitment suspended there. Notify Sponsor immediately, then I R B I E C and the Competent Authority per I C H G C P. Follow with a protocol amendment if needed, early-termination notice within 15 days if applicable, and A E / S A R notification."
      ],
      "chips": [
        "SAE ≤24 h",
        "SUSAR",
        "Urgent safety"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b093.jpg",
      "cap": "Protocol page 93 of 120 — SAE reporting, SUSAR, urgent safety measures",
      "pearls": [
        "SAE clock is 24 hours from investigator awareness, via eCRF, not a fax from 1998.",
        "SUSAR = unexpected serious related. Sponsor, not the site, submits to regulators."
      ]
    },
    {
      "title": "Page 94 of 120 · Pregnancy, medical monitor, IMP discontinuation versus study withdrawal",
      "audio": [
        "If a female partner of a treated male becomes pregnant, notify the investigator as soon as possible. The investigator makes every effort to tell her healthcare provider about the I M P. Notify the Medical Monitor within 24 hours. Medical Monitor, P S I C R O: plus 49 151 4024 1973, email B E T P S M A 121.Medical at p s i-c r o.com.",
        "Discontinuing the I M P is not discontinuing the study — remaining procedures still happen. Complete biochemical response with no visible disease: investigator may wish to stop I M P once dose limits are exceeded. Subjects who stop I M P for reasons other than progression stay in efficacy and safety follow-up. If they start another anti-cancer therapy, efficacy follow-up ends and long-term passive safety follow-up begins. Capture A Es and concomitant meds at I M P discontinuation.",
        "Participation is voluntary; subjects may withdraw at any time without prejudice. Try to ascertain a reason, respecting the subject's rights. Report all withdrawals on the e C R F. Replacement rules are Section 13.3. Premature withdrawal: E o T e C R F within 10 days."
      ],
      "chips": [
        "Partner pregnancy",
        "Stop IMP ≠ off study",
        "EoT 10 d"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b094.jpg",
      "cap": "Protocol page 94 of 120 — Pregnancy, medical monitor, IMP discontinuation versus study withdrawal",
      "pearls": [
        "Partner pregnancy is a 24-hour Medical Monitor notice — this is a male-only trial but partners can conceive.",
        "Stopping IMP ≠ leaving the study. Follow-up continues unless the subject withdraws consent."
      ]
    },
    {
      "title": "Page 95 of 120 · Investigator withdrawal reasons, replacement rules, lost to follow-up start",
      "audio": [
        "Withdrawn subjects, if they still consent, stay in passive long-term safety follow-up. No further data enter the clinical database after withdrawal of consent.",
        "Investigator may discontinue for: significant non-compliance; any A E, lab, or condition that makes continued participation not in the subject's interest, including locally determined clinical progression even if central radiology has not caught up; newly met exclusion criteria; lost to follow-up; Sponsor request for early termination. Record the reason on source and e C R F.",
        "Replacement: sign I C F but never receive therapeutic I M P — replaced. Sign I C F, receive I M P, then withdraw before follow-up — replaced as specified. Phase 1: only one cycle for reasons other than a D L T — replaced but remain for safety. One cycle that cannot continue because organ limits would be exceeded — not replaced. Non-evaluable plus a D L T deemed unrelated — replaced, remain for safety. Phase 2: randomised but never received I M P before withdrawal — replaced. Lost to follow-up: fails to return and cannot be contacted. Before declaring lost: at least 3 phone calls and, if needed, a recorded delivery letter. Document attempts."
      ],
      "chips": [
        "Replace never-dosed",
        "Not if organ cap",
        "3 calls + letter"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b095.jpg",
      "cap": "Protocol page 95 of 120 — Investigator withdrawal reasons, replacement rules, lost to follow-up start",
      "pearls": [
        "Never-dosed subjects are replaced. A Phase 1 subject stopped for organ-dose caps after one cycle is not replaced.",
        "Lost-to-follow-up needs documented contact attempts — 3 calls plus a letter — before you tick the box."
      ]
    },
    {
      "title": "Page 96 of 120 · Lost to follow-up finish, study halt rules, major protocol deviations",
      "audio": [
        "If contact is made, counsel on staying. If still unreachable, withdraw with primary reason lost to follow-up.",
        "Enrolment is temporarily halted or stopped for: S A E of severe acute hypersensitivity attributed to the I M P; S A E of death attributed to the I M P; multiple or severe unexpected A Es inconsistent with known mechanism; or data from other 10.1 trials that greatly and negatively change the benefit-risk. An urgent S R C or T S C meeting is convened.",
        "Section 14. A protocol deviation is failure of subject, investigator, or Sponsor to adhere to protocol requirements, or non-compliance with I C H G C P affecting safety or scientific value. Significant G C P non-compliance is notified to the Sponsor within 1 working day. Major deviations include: failing inclusion/exclusion; prohibited concomitant medication; I M P given but no subsequent SPECT C T; Phase 1 I M P after organ limits exceeded; Phase 2 I M P after organ limits exceeded without meeting continuation criteria; I M P after centrally determined radiographic progression. Sponsor decides if a deviation withdraws a subject. Major deviations are defined in the S A P before database lock."
      ],
      "chips": [
        "Halt rules",
        "No SPECT = major",
        "Post-progression dose"
      ],
      "visual": "boin",
      "image": "assets/protocol/bet/b096.jpg",
      "cap": "Protocol page 96 of 120 — Lost to follow-up finish, study halt rules, major protocol deviations",
      "pearls": [
        "IMP with no subsequent SPECT/CT is a listed major deviation — dosimetry is not optional.",
        "Dosing after central radiographic progression is a major deviation in both phases."
      ]
    },
    {
      "title": "Page 97 of 120 · Section 15 · SRC in Phase 1",
      "audio": [
        "Two governance committees: S R C in Phase 1, T S C in Phase 2. Details in the Safety Review Charter.",
        "S R C: Phase 1 Principal Investigators, an independent medical oncologist, a nuclear medicine physician, plus Sponsor statistics, medical, and drug-safety. An independent physician chairs. S R C reviews Cohort A and B data, recommends R P 2 D, and helps draft Phase 2 toxicity, delay, and dose-modification rules. All study data are reviewed with a view to R P 2 D at the end of Phase 1. Benefit-risk is assessed at the end of A and at the end of B.",
        "S R C will not escalate until the entire D L T window is available for the prior cohort — first injection to 6 weeks after the final cycle of each subject. Pack for escalation: listed A Es, blood labs at baseline and on treatment with graphics, and organ plus tumour absorbed-dose tables versus Table 3. Cumulative review at each meeting, including Cohort A when deciding B. Minimum 2 weeks between end of A and start of B. Minutes signed by the Chair. At end of Phase 1 the S R C uses safety, dosimetry, P S A, central radiographic progression, and deaths to recommend injected activity and cycle number for Phase 2."
      ],
      "chips": [
        "SRC composition",
        "DLT window first",
        "≥2 wk A→B"
      ],
      "visual": "boin",
      "image": "assets/protocol/bet/b097.jpg",
      "cap": "Protocol page 97 of 120 — Section 15 · SRC in Phase 1",
      "pearls": [
        "SRC will not open B until A's subsequent cycles and DLT windows are complete — stricter than a Cycle-1-only 3+3.",
        "Minimum 2 weeks between end of Cohort A and start of B."
      ]
    },
    {
      "title": "Page 98 of 120 · TSC in Phase 2 and statistical analysis sets",
      "audio": [
        "S R C produces a written signed recommendation at the end-of-Phase-1 meeting. Urgent safety: S R C at short notice, dosing paused. Phase 2 T S C: Coordinating or Chief Investigator, country-level Principal Investigators, Sponsor clinical operations, medical, and safety. Meets monthly. Oversight, G C P, site communication. Opening 2C is a T S C approval under a pre-defined charter. T S C is the forum for safety observations and study recommendations.",
        "Section 16. A detailed S A P is finalised before database lock. Analysis sets: All Screened — signed I C F and screened. Diagnostic Set — at least one diagnostic I M P dose, Phase 1 only. Full Analysis Set — assigned in Phase 1 or randomised in Phase 2 who received any I M P; used for baseline, efficacy, and safety. Efficacy Analysis Population — F A S who received the full planned dose with no major deviations that could affect efficacy; membership decided at the Data Review Meeting before lock. P K Population — F A S with evaluable P K. Accountability of subjects and imaging is summarised. Demographics and baseline are descriptive."
      ],
      "chips": [
        "TSC opens 2C",
        "FAS vs EAP",
        "SAP before lock"
      ],
      "visual": "boin",
      "image": "assets/protocol/bet/b098.jpg",
      "cap": "Protocol page 98 of 120 — TSC in Phase 2 and statistical analysis sets",
      "pearls": [
        "TSC, not SRC, opens 2C. Monthly TSC in Phase 2.",
        "FAS = anyone randomised/assigned who got any IMP. EAP is the cleaner efficacy subset, locked before database lock."
      ]
    },
    {
      "title": "Page 99 of 120 · Primary endpoint analysis, no hypothesis testing",
      "audio": [
        "Country rules govern which data may be summarised. First S A P version is approved before first subject in; final S A P before lock.",
        "Phase 1 primary analysis: D L T incidence in the D L T window, and frequency and nature of T E A Es, coded with Med D R A. Subject incidence of D L Ts by dose level. Phase 2 primary: number with at least 50 percent P S A drop from baseline to end of treatment, independently per cohort, with 95 percent confidence intervals. Between-cohort P S A 50 difference is descriptive only. Median duration of response by Kaplan-Meier. Bayesian methods may estimate the probability that the P S A response rate exceeds a historical rate. Because the study is exploratory, there is no formal hypothesis testing.",
        "Secondary efficacy: descriptive with 95 percent C Is; time-to-event by Kaplan-Meier. Safety: Med D R A-coded A Es and S A Es, counts and percentages for any, related, serious, and related serious."
      ],
      "chips": [
        "No hypothesis test",
        "95% CI per cohort",
        "MedDRA"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b099.jpg",
      "cap": "Protocol page 99 of 120 — Primary endpoint analysis, no hypothesis testing",
      "pearls": [
        "No alpha, no multiplicity, no formal hypothesis test — labelled exploratory.",
        "PSA50 is reported per cohort with 95% CIs. The 2A vs 2B difference is descriptive only."
      ]
    },
    {
      "title": "Page 100 of 120 · Remaining analyses and planned interim / futility",
      "audio": [
        "Related S A Es continue the safety write-up. Vitals: change from baseline. Pharmacokinetic analysis is reported as radiation dosimetry data acquired during the study. P R Os: all F A S subjects with at least one P R O. Labs, vitals, physical, E C G summarised; on-study E C G listed and selected parameters plotted. Therapeutic I M P exposure listed per subject. Concomitant meds coded with the W H O dictionary.",
        "Planned interim in Phase 2: safety and preliminary efficacy review to decide whether to open Cohort 2C. Following that review, 2A or 2B may close for futility if estimated P S A 50 is 20 percent or less within a cohort. Sponsor may run additional interims; details in the S A P."
      ],
      "chips": [
        "Dosimetry = PK",
        "Interim → 2C",
        "Futility ≤20%"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b100.jpg",
      "cap": "Protocol page 100 of 120 — Remaining analyses and planned interim / futility",
      "pearls": [
        "PK in this protocol is dosimetry, not a classic plasma concentration-time NCA — and Phase 2 has no blood radioactivity.",
        "Futility ≤20% PSA50 is restated here as an interim action, not only a synopsis line."
      ]
    },
    {
      "title": "Page 101 of 120 · Sample size · approximately 83 subjects",
      "audio": [
        "No multiplicity adjustment. Phase 1 assumptions, completed: at least 12 subjects for dose escalation, collation of high-quality radiation dosimetry, and first safety assessment. Phase 2 historical comparator P S A 50 rates come from literature, adjusted to this population.",
        "Overall, approximately 83 subjects will be enrolled. Phase 1: about 30 screened including POSLUMA PET, at least 12 treated — Cohort A at least 3, Cohort B at least 9. Phase 2: about 70 treated, initially about 30 randomised to 2A and 30 to 2B. If 2C opens, about 10 go there. If 2C does not open, extras go to 2A and 2B, about 35 each.",
        "Pooled Phase 2 n of about 70 came from simulations of P S A 50 under several scenarios, Bayesian looks every 10 after the first 20 evaluable, Lee 2020. Average simulated n landed between 51 and 61, hence about 70 versus PSMAfore historical controls, Morris 2024. Individual cohort n of about 30 is for dose-optimisation without over-exposing. 2C n of about 10 is for gross differences; a protocol amendment may enlarge 2C if data are compelling."
      ],
      "chips": [
        "n ≈ 83",
        "Ph2 n ≈ 70",
        "Lee 2020"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b101.jpg",
      "cap": "Protocol page 101 of 120 — Sample size · approximately 83 subjects",
      "pearls": [
        "Headline n ≈ 83 = ≥12 Phase 1 + ~70 Phase 2. Screened Phase 1 is larger (~30) because of the PET gate.",
        "Bayesian looks every 10 after 20 evaluable — not a frequentist alpha spend."
      ]
    },
    {
      "title": "Page 102 of 120 · Data collection, eCRF, pseudo-anonymisation, database lock",
      "audio": [
        "Section 17. Investigators keep adequate accurate source documents. Data points that are not standard of care still need attributable, legible, contemporaneous, original, accurate, complete source. Changes are traceable and do not obscure the original. e C R F is not the source. Enter e C R F within 3 business days of the visit for key points — dosimetry and imaging.",
        "Subjects are not identified by name. Identifier is site number plus subject number. Data remain personal data under H I P A A, E U G D P R, U K D P A. e C R F corrections have an electronic audit trail. P R Os on paper are transcribed into the E D C, captured pre-I M P each dosing day and at E o T. Investigator verifies all data; a copy of the e C R F stays at the site at the end.",
        "Data go into validated databases. C R O Data Management processes per procedural documentation. Database lock after Q C. Handling and analysis meet F D A clinical-trial data guidelines. Computerised validation checks run regularly; queries are entered, tracked, and resolved in the E D C. Resolved queries stay in the audit trail."
      ],
      "chips": [
        "eCRF ≤3 d",
        "Site+subject ID",
        "Lock after QC"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b102.jpg",
      "cap": "Protocol page 102 of 120 — Data collection, eCRF, pseudo-anonymisation, database lock",
      "pearls": [
        "Key data (dosimetry, imaging) into the eCRF within 3 business days of the visit.",
        "ID is site number + subject number — never a name on Sponsor systems."
      ]
    },
    {
      "title": "Page 103 of 120 · Archival, 25-year retention, monitoring, confidentiality",
      "audio": [
        "The database is safeguarded; backups sit with the administrator. At critical junctures such as the final report, analysis data are locked and cleaned. At the end the Sponsor archives the database to regulatory requirements.",
        "Investigators keep source and essential documents per I C H G C P E6 section 8. Direct access for monitor, auditor, I R B I E C, or regulatory authority on request. Retain at least 25 years after the end of the clinical study, longer if local law requires. No records destroyed without written Sponsor consent. Sponsor tells the investigator when retention can stop. Subject medical files follow local rules.",
        "Monitoring visits per I C H G C P. Signing this protocol grants permission for Sponsor and designee monitors and auditors, I R B I E C, and regulators to do on-site monitoring and audit. If on-site is impossible, remote monitoring is allowed. Subject confidentiality: only site number plus subject number on e C R Fs sent to Sponsor. Further issues live in the Clinical Study Agreement."
      ],
      "chips": [
        "25 years",
        "Direct access",
        "Remote OK"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b103.jpg",
      "cap": "Protocol page 103 of 120 — Archival, 25-year retention, monitoring, confidentiality",
      "pearls": [
        "Retain ≥25 years after the end of the clinical study. Do not shred without written Sponsor consent.",
        "Signing the protocol is the monitoring-access grant."
      ]
    },
    {
      "title": "Page 104 of 120 · Coded specimens, Section 18 GCP / Helsinki, IRB, amendments",
      "audio": [
        "Laboratory specimens, evaluation forms, reports, and other records are identified by a coded number and initials only, retained 25 years. Clinical information is not released without subject permission except as needed for regulatory monitoring. Comply with H I P A A, E U G D P R, U K D P A.",
        "Section 18. Conduct per I C H G C P, E U C T R 536/2014, national laws including the Medicines Act and G C P Ordinance, and the Declaration of Helsinki. No protocol deviation or change without documented Sponsor and I R B I E C approval, except to eliminate an immediate hazard. All personnel must have role-relevant I C H G C P training. Governance committees are Section 15.",
        "I R B I E C gets protocol, amendments, I B, consents, recruitment and payment materials. Unconditional approval, plus hospital radiation-safety / ARSAC-type approvals, before I M P ships and before any study procedure. Follow I R B S O Ps for S A E submission and progress reports. End-of-study notification per country. Amendments are Sponsor decisions. Obtain required approvals before implementing, except urgent safety measures. Sponsor notifies each site when an amendment may go live."
      ],
      "chips": [
        "Helsinki",
        "EU CTR 536/2014",
        "Amendments"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b104.jpg",
      "cap": "Protocol page 104 of 120 — Coded specimens, Section 18 GCP / Helsinki, IRB, amendments",
      "pearls": [
        "Helsinki + ICH GCP + EU CTR 536/2014. Immediate-hazard changes do not wait for IRB ink.",
        "Radiation-use approvals (ARSAC-type / hospital) sit beside IRB — both before IMP ships."
      ]
    },
    {
      "title": "Page 105 of 120 · Consent process and re-consent when organ caps will be exceeded",
      "audio": [
        "Consent-form changes need I R B I E C approval, including whether previously consented subjects must re-consent. Investigator complies with applicable law, I C H G C P, and Helsinki. I R B-approved information goes to the subject before site activation. Explain the study in terms suited to comprehension: purposes, procedures, potential risks, rights. Time to discuss with family and think. Participation is voluntary; withdraw any time without prejudice. Welfare is protected even if they decline.",
        "Written I C F signed and personally dated by the subject and the person who conducted the discussion, with date and time recorded in source. If the subject cannot read, an impartial witness is present for the entire discussion; the subject consents orally if able; the witness signs that the information was explained and consent was free. Keep a copy with the subject; original in the records.",
        "If the next cycle is predicted to exceed normal organ dose limits, re-inform of acute, delayed, and cumulative toxicities and of uncertainty about appropriate radiation dose limits, then re-consent. Re-consent is an I C F addendum signed by the subject and the Principal Investigator. New information relevant to willingness is communicated promptly and documented."
      ],
      "chips": [
        "Re-consent at 23 Gy",
        "Witness if needed",
        "Voluntary"
      ],
      "visual": "kidney",
      "image": "assets/protocol/bet/b105.jpg",
      "cap": "Protocol page 105 of 120 — Consent process and re-consent when organ caps will be exceeded",
      "pearls": [
        "Re-consent is mandatory before a cycle predicted to exceed 23 Gy kidney / 2 Gy marrow.",
        "Impartial witness if the subject cannot read. Date and time of consent go in the source."
      ]
    },
    {
      "title": "Page 106 of 120 · Privacy notice and publications — a short page",
      "audio": [
        "Any revised subject-information and consent form needs I R B I E C approval before use. Subjects sign and personally date revised consents and receive a copy. All subjects receive the required information on collecting and processing personal data for the study and for potential reuse in other studies or scientific research. A copy of the Privacy Information Notice and Consent is given to subjects, as applicable.",
        "Section 18.4 publications. Preparation and submittal of abstracts and manuscripts shall follow a process determined by mutual written agreement among the study Sponsor and participating institutions. Publication or presentation of any study results shall comply with applicable privacy laws, including but not limited to the U S H I P A A 1996 and the E U G D P R 2018.",
        "Page 106 of 120 is otherwise blank below the publications paragraph. The next four pages are the reference list."
      ],
      "chips": [
        "Privacy notice",
        "Publications",
        "HIPAA / GDPR"
      ],
      "visual": "bet121",
      "image": "assets/protocol/bet/b106.jpg",
      "cap": "Protocol page 106 of 120 — Privacy notice and publications — a short page",
      "pearls": [
        "Privacy notice is a separate document from the ICF in this protocol's consent pack.",
        "Publications go through a written Sponsor–institution agreement, not a lone-site press release."
      ]
    },
    {
      "title": "Page 107 of 120 · References · IBs, Dawson kidney, DeNardo marrow, VISION / TheraP start",
      "audio": [
        "Section 19 references. Start with the two Investigator Brochures: rhPSMA-7.3 fluorine-18 I B version 1.0, Blue Earth Diagnostics; lutetium-177 rhPSMA-10.1 I B version 1.0, Blue Earth Therapeutics.",
        "Board-useful citations on this page: Dawson 2010 radiation-associated kidney injury — that is the 23 gray kidney number. DeNardo 2002 fractionated radioimmunotherapy — a source of the 2 gray marrow number. Eisbruch 1999 parotid dose and function — 24 gray salivary. Hofman TheraP in Lancet 2021, lutetium-177 P S M A-617 versus cabazitaxel. Hofman A N Z U P 1603 overall-survival abstract 2022.",
        "Also here: Dierks 2024 first safety and efficacy of radiohybrid 10.1 in metastatic prostate cancer, Journal of Nuclear Medicine 65:432-437. Feuerecker 2022 pre-therapeutic comparative dosimetry of 7.3 versus I and T. Derlin 2022 lutetium-177 P S M A for extended treatment of m C R P C."
      ],
      "chips": [
        "Dawson 2010",
        "Dierks 2024",
        "TheraP"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b107.jpg",
      "cap": "Protocol page 107 of 120 — References · IBs, Dawson kidney, DeNardo marrow, VISION / TheraP start",
      "pearls": [
        "Dawson 2010 → kidney 23 Gy. DeNardo 2002 / ICRP 2012 → marrow 2 Gy. Eisbruch 1999 → salivary 24 Gy.",
        "Dierks 2024 is the named-patient 10.1 paper sitting behind Section 2.1.1."
      ]
    },
    {
      "title": "Page 108 of 120 · References · ICRP 118, BOIN, CKD-EPI, Lutathera, Lehnert planar",
      "audio": [
        "I C R P Publication 118, 2012, tissue reactions and threshold doses — the other marrow-limit source. Kiess papers on P S M A as a therapy target and on whether radiopharmaceutical trials reach their full potential. Kuo 2022 V I S I O N substudy: gallium-68 P S M A-11 PET as a prognostic tool.",
        "Lee, Kuo, Yuan, Liu 2020 Bayesian efficacy monitoring — the Phase 2 sample-size simulation method. Liu and Yuan 2015 Bayesian optimal interval designs for Phase 1 — that is B O I N. Levey 2009, the C K D-E P I creatinine equation used for e G F R. Lehnert 2018, planar versus SPECT kidney dose in lutetium-177 P R R T — why planar overestimates.",
        "Lutathera product information: the 2 to 3 percent A M L / M D S disclosure. Mader 2023 extended lutetium-177 P S M A-617 in high-volume disease. Maurer 2016 gallium-68 P S M A PET versus conventional staging."
      ],
      "chips": [
        "Liu Yuan 2015",
        "Levey 2009",
        "Lehnert 2018"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b108.jpg",
      "cap": "Protocol page 108 of 120 — References · ICRP 118, BOIN, CKD-EPI, Lutathera, Lehnert planar",
      "pearls": [
        "Liu & Yuan 2015 is the BOIN citation. Levey 2009 is the eGFR equation. Lehnert 2018 is why this trial refused planar-only kidney dosimetry.",
        "Lutathera label is the source of the secondary-malignancy language in the risks section, not this IMP's own rate."
      ]
    },
    {
      "title": "Page 109 of 120 · References · VISION, PSMAfore, POSLUMA, PCWG3, Rinscheid",
      "audio": [
        "Morris 2021 V I S I O N Phase 3 abstract, then Sartor 2021 New England Journal of Medicine lutetium-177 P S M A-617 for m C R P C — the registration paper. Morris 2023 Lancet P S M Afore: lutetium-177 P S M A-617 versus A R P I change in taxane-naïve m C R P C. That is the historical-control citation for Phase 2 sample size.",
        "POSLUMA flotufolastat F 18 prescribing information, accessed 11 September 2023. Rinscheid 2023 improved therapeutic index of 10.1 versus I and T, an intrapatient comparison — the four-patient Augsburg update that justified three 7.40 gigabecquerel cycles.",
        "Scher 2016 J C O, P C W G 3 updated recommendations — Appendix 2. N C C N prostate version 1.2021. Schäfer 2023 radiation nephropathy with renal T M A after lutetium-177 P S M A. Tolvanen 2021 safety, biodistribution, and dosimetry of fluorine-18 rhPSMA-7.3 in healthy volunteers. Violet 2019 tumour dosimetry of lutetium-177 P S M A-617 versus outcomes."
      ],
      "chips": [
        "VISION Sartor",
        "PSMAfore",
        "Scher PCWG3"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b109.jpg",
      "cap": "Protocol page 109 of 120 — References · VISION, PSMAfore, POSLUMA, PCWG3, Rinscheid",
      "pearls": [
        "VISION = Sartor NEJM 2021. PSMAfore = Morris Lancet 2023. PCWG3 = Scher JCO 2016.",
        "Rinscheid 2023 is the 10.1 vs I&T intrapatient comparison used in the September 2023 dose update."
      ]
    },
    {
      "title": "Page 110 of 120 · References · Wahl organ tolerance and Yadav meta-analysis — last citations",
      "audio": [
        "Wahl 2021, Journal of Nuclear Medicine supplement: normal-tissue tolerance to radiopharmaceutical therapies, the knowns and the unknowns. That paper is cited when Phase 2 argues that E B R T-derived caps may undertreat and that 23 gray kidney is a re-consent trigger rather than an absolute stop.",
        "Yadav 2019 A J R, radioligand therapy with lutetium-177 P S M A for m C R P C, a systematic review and meta-analysis. End of the reference list. Page 110 is otherwise blank. Appendix 1 study schedules start on the next page."
      ],
      "chips": [
        "Wahl 2021",
        "Yadav 2019"
      ],
      "visual": "rhpsma",
      "image": "assets/protocol/bet/b110.jpg",
      "cap": "Protocol page 110 of 120 — References · Wahl organ tolerance and Yadav meta-analysis — last citations",
      "pearls": [
        "Wahl 2021 is the intellectual justification for Table 11's 35 Gy absolute kidney cap.",
        "References are not decoration — they are where 23 Gy, 2 Gy, BOIN, and PSA50 historical rates come from."
      ]
    },
    {
      "title": "Page 111 of 120 · Appendix 1 · Phase 1 schedules are in earlier protocol versions",
      "audio": [
        "Appendix 1, study schedule, landscape page. Recruitment into Phase 1 Cohort A is now completed. Please refer to Protocol Version 3.0 dated 11 April 2022 for the study schedule applicable to this cohort.",
        "Recruitment into Phase 1 Cohort B, and the Phase 1 part of the study, is now completed. Please refer to Protocol Version 4.0 dated 22 September 2023 for the study schedule applicable to this cohort.",
        "v5.1 therefore does not reprint the Phase 1 visit grids. What follows is the Phase 2 schedule: Cohorts 2A and 2C, then Cohort 2B. If you are opening a Phase 2 site you live in these next six pages, not in v3.0 or v4.0."
      ],
      "chips": [
        "App 1",
        "Ph1 in v3/v4",
        "Ph2 grids here"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b111.jpg",
      "cap": "Protocol page 111 of 120 — Appendix 1 · Phase 1 schedules are in earlier protocol versions",
      "pearls": [
        "Phase 1 visit grids live in v3.0 (Cohort A) and v4.0 (Cohort B). v5.1 only prints Phase 2.",
        "This is why a site file should keep the superseded schedules if any Phase 1 subjects are still in follow-up."
      ]
    },
    {
      "title": "Page 112 of 120 · Appendix 1 · Cohort 2A/2C schedule, clinical rows",
      "audio": [
        "Study schedule Phase 2, Cohort 2A and Cohort 2C if opened. Columns: screening Visit 1 Day minus 42 to Day minus 1; Cycle 1 to 7 six-week dosing interval — Day 1 dosing plus or minus 1 day, 24 hours, 48 hours, 168 hours, then Week 2 Day 15, Week 4 Day 29, Week 6 Day 43; E o T plus or minus 2 days; efficacy and safety follow-up.",
        "X marks: I C F at screening. Inclusion/exclusion at screening. Demographics screening. History screening. Concomitant medication every visit including follow-up. A E assessment from screening onward, including 24, 48, 168 hours. E C O G at screening, Day 1, Week 6, E o T. Physical exam screening, Day 1, Week 6, E o T. Height screening only. Body weight screening, Day 1, E o T. Vitals screening, Day 1 pre and post, E o T. Twelve-lead E C G screening, Day 1, and E o T; post-dose E C G is Cycle 1. Urinalysis screening and E o T. Haematology, coagulation, biochemistry at screening, Day 1, 24 hours, Week 2, Week 4, Week 6, E o T. P S A at screening, Day 1, Week 6, E o T, and in follow-up."
      ],
      "chips": [
        "2A/2C grid",
        "ECG C1 post",
        "PSA W6"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b112.jpg",
      "cap": "Protocol page 112 of 120 — Appendix 1 · Cohort 2A/2C schedule, clinical rows",
      "pearls": [
        "2A/2C is a 6-week cycle grid with 24 / 48 / 168 h only in Week 1 of a cycle — and 168 h is Cycle 1 in practice.",
        "PSA is not weekly; it sits at screening, Day 1, Week 6, EoT, then follow-up."
      ]
    },
    {
      "title": "Page 113 of 120 · Appendix 1 · Cohort 2A/2C imaging, SPECT, FACT, footnotes",
      "audio": [
        "Imaging rows: P S M A PET C T for screening eligibility — X at screening. ce C T or M R I and bone scan at screening, then follow-up every 12 weeks, and E o T as needed. Confirm eligibility at screening and on Day 1. lutetium-177 rhPSMA-10.1 injection on Day 1. SPECT C T for dosimetry: Cycle 1 at Day 1, 24, 48, and 168 hours; later cycles a 48-hour X. ce C T M R I and bone-scan follow-up column is marked.",
        "P R Os: FACT-P and FACT-R N T on Day 1 and at E o T. Footnotes: up to 7 cycles in 2A, up to 6 in 2C. All doses at 6-week intervals. E o T is last day of the final 6-week cycle plus or minus 48 hours. Efficacy follow-up continues 12-weekly until central radiographic progression, another anti-cancer therapy, death, or loss, then 6-monthly passive chart review. Screening and imaging may reuse scans within 28 days before consent. Bone scan within 5 days before I M P. FACT-P before FACT-R N T."
      ],
      "chips": [
        "SPECT C1 full",
        "FACT on D1",
        "Reuse ≤28 d"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b113.jpg",
      "cap": "Protocol page 113 of 120 — Appendix 1 · Cohort 2A/2C imaging, SPECT, FACT, footnotes",
      "pearls": [
        "This grid is the operational version of Figure 5 for 2A/2C.",
        "SPECT X's: C1 = 3/24/48/168, later = 48 h. That matches Section 9.4.3, not a new clock."
      ]
    },
    {
      "title": "Page 114 of 120 · Appendix 1 · Cohort 2A/2C footnote letter soup",
      "audio": [
        "Footnotes continued, rotated landscape. Cycle 1 Day 1 allows a 1-day window. Testosterone under 50 nanograms per decilitre confirms castration if drawn within 3 months with no treatment change. Vitals after 5 minutes rest; reference time is the end of I M P. Post-I M P E C G within 5 hours in Cycle 1. Urinalysis dipstick at screening; skip if an indwelling catheter. U P C R each dosing morning, not first void, same time of day.",
        "Safety labs within 72 hours of Day 1 may replace Day 1 bloods. Additional haematology as clinically indicated. P S A every 6 weeks on treatment and 12-weekly in follow-up until central radiographic progression, death, or loss. Locally approved P S M A PET tracer, or a standard-of-care PET within 28 days. Brain imaging only if clinical suspicion.",
        "SPECT: Cycle 1 at 3 plus or minus 1, 24 plus or minus 4, 48 plus or minus 4, 168 plus or minus 24 hours; later cycles a single 48 plus or minus 4 hour scan. Bone scan within 5 days before I M P so technetium does not contaminate dosimetry. P R Os completed before FACT-R N T; FACT-P first."
      ],
      "chips": [
        "UPCR not first void",
        "Labs ≤72 h",
        "Bone ≤5 d"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b114.jpg",
      "cap": "Protocol page 114 of 120 — Appendix 1 · Cohort 2A/2C footnote letter soup",
      "pearls": [
        "UPCR is a dosing-morning, not-first-void, same-clock-time sample. It does not by itself stop dosing.",
        "The 5-hour post-dose ECG and the 72-hour pre-dose lab window are easy to miss on a busy Day 1."
      ]
    },
    {
      "title": "Page 115 of 120 · Appendix 1 · Cohort 2B schedule, clinical rows",
      "audio": [
        "Study schedule Phase 2, Cohort 2B. Two blocks: Cycles 1 to 2 with a 3-week skeleton, then Cycles 3 to 8 with a 6-week skeleton. Screening Visit 1 Day minus 42 to Day minus 1 is shared.",
        "Cycles 1 to 2 columns: Day 1 dosing plus or minus 1, 24 hours, 48 hours, 168 hours, Week 2 Day 15, Week 3 Day 22. Then Cycles 3 to 8: Day 1, 48 hours, Week 2 Day 15, Week 4 Day 29, Week 6 Day 43. Then E o T and follow-up.",
        "Clinical X marks match 2A — I C F, eligibility, demographics, history, concomitant meds, A Es, E C O G, exam, height, weight, vitals, E C G, urinalysis, safety labs, P S A — but extra lab X's sit on Day 22 of the first two cycles. P S A also appears on Day 22 of those early cycles in addition to the 6-weekly cadence later."
      ],
      "chips": [
        "2B D22",
        "C1–2 168 h",
        "Then q6w"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b115.jpg",
      "cap": "Protocol page 115 of 120 — Appendix 1 · Cohort 2B schedule, clinical rows",
      "pearls": [
        "2B is the only grid with a Day 22 column — that is the q3w signature.",
        "168 h SPECT columns exist in Cycles 1–2 of 2B and disappear from Cycles 3–8."
      ]
    },
    {
      "title": "Page 116 of 120 · Appendix 1 · Cohort 2B imaging, SPECT, FACT",
      "audio": [
        "Imaging: P S M A PET C T eligibility at screening. ce C T or M R I and bone scan at screening and in follow-up. Confirm eligibility screening and Day 1. lutetium-177 rhPSMA-10.1 on every Day 1 up to 8 cycles.",
        "SPECT C T: Cycles 1 to 2 marked at 3 hours, 24, 48, and 168 hours. Cycles 3 to 8 marked at 48 hours only. P R Os FACT-P and FACT-R N T on Day 1 of each cycle and at E o T. Follow-up column carries 12-weekly imaging after treatment.",
        "Footnotes on this grid: first 3 doses at 3-week intervals, remaining at 6-week intervals. After the third dose the subject enters the 6-week treatment cycle. Dosimetry, clinical assessments, and labs about 1 week before further treatment to confirm eligibility. Up to 8 doses at 7.40 gigabecquerels."
      ],
      "chips": [
        "2B SPECT C1–2",
        "Then 48 h",
        "8 × 7.40"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/bet/b116.jpg",
      "cap": "Protocol page 116 of 120 — Appendix 1 · Cohort 2B imaging, SPECT, FACT",
      "pearls": [
        "2B SPECT: full clock on Cycles 1–2, then 48 h only — because those first two cycles still need a late point to scale later q6w doses.",
        "Maximum 8 × 7.40 GBq. No 10.00 GBq on this arm."
      ]
    },
    {
      "title": "Page 117 of 120 · Appendix 1 · Cohort 2B footnote letter soup",
      "audio": [
        "2B footnotes, last schedule page. Subjects may receive up to 8 cycles. Cycles 3 to 8 are 6-week intervals. Day 22 assessment may combine with Day 1 of the next 3-week cycle. E o T is last day of the final 6-week cycle plus or minus 48 hours; within 10 days if withdrawn. If screening exceeds 42 days, repeat bloods before Cycle 1. Testosterone under 50 nanograms per decilitre. Vitals after 5 minutes rest. Post-I M P E C G within 5 hours in Cycle 1. Skip urinalysis with an indwelling catheter. U P C R each dosing morning, not first void.",
        "Safety labs within 72 hours of Day 1 may replace Day 1 bloods. Extra haematology as needed. Blood safety labs also on Day 22 of the first 2 treatment cycles during the 3-week intervals. P S A at screening, pre-I M P Cycle 1 Day 1, then every 6 weeks. Locally approved P S M A PET, or standard-of-care PET within 28 days. SPECT Cycle 1 at 3, 24, 48, 168 hours; later a single 48 hours, with the first two cycles keeping 168. Bone scan within 5 days before I M P. FACT-P before FACT-R N T."
      ],
      "chips": [
        "D22 = next D1",
        "8 cycles",
        "PSA q6w"
      ],
      "visual": "phase2",
      "image": "assets/protocol/bet/b117.jpg",
      "cap": "Protocol page 117 of 120 — Appendix 1 · Cohort 2B footnote letter soup",
      "pearls": [
        "Day 22 of a q3w cycle can be the same visit as Day 1 of the next cycle — that is how 2B stays feasible.",
        "Otherwise the 2B footnotes clone 2A: 72-hour labs, 5-hour ECG, 5-day bone scan, FACT-P first."
      ]
    },
    {
      "title": "Page 118 of 120 · Appendix 2 · PCWG3 versus PCWG2, PSA and nodes",
      "audio": [
        "Appendix 2, Prostate Cancer Clinical Trials Working Group 3 criteria, compared with P C W G 2 from 2008. Blood-based P S A: P C W G 2 wanted a sequence of rising values at least 1 week apart, 2.0 nanograms per millilitre starting value, and estimated pretherapy P S A doubling time if three values at least 28 days apart. P C W G 3 keeps the sequence idea, drops to 1.0 nanogram per millilitre as the minimal starting value if confirmed, and does not treat a confirmed rise as progression if it is only small-cell carcinoma.",
        "Nodal imaging: P C W G 2 used R E C I S T, recorded nodal lesions as target or non-target, and only nodes at least 2 centimetres long axis were actionable as progressive disease. P C W G 3 uses modified R E C I S T 1.1, records pelvic and extra-pelvic disease up to five nodal lesions, previously normal nodes must have grown by at least 5 millimetres short axis from baseline or nadir and be at least 1.0 centimetre short axis to be progressed. Nodes that grow to at least 1.5 centimetres short axis are measurable. Existing pathologic adenopathy progression follows R E C I S T 1.1. Nodal sites: locoregional pelvic, versus extra-pelvic retroperitoneal, mediastinal, thoracic, or other."
      ],
      "chips": [
        "PCWG3",
        "PSA 1.0 ng/mL",
        "Node 1.0 cm SA"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b118.jpg",
      "cap": "Protocol page 118 of 120 — Appendix 2 · PCWG3 versus PCWG2, PSA and nodes",
      "pearls": [
        "This trial's progression language is PCWG3 (Scher 2016), not PCWG2.",
        "PSA starting threshold is 1.0 ng/mL in PCWG3, not 2.0. Nodal PD uses short-axis 1.0 cm with a 5 mm growth rule."
      ]
    },
    {
      "title": "Page 119 of 120 · Appendix 2 · viscera, prostate bed, bone, other sites, type of progression",
      "audio": [
        "Viscera: P C W G 2 recorded presence of nodal and/or visceral disease and used R E C I S T, with measurable lesions not required for trial entry. P C W G 3 retains that, records viscera separately by site of spread — lung, liver, adrenal, C N S — up to five lesions per site, and names visceral sites lung, liver, adrenal, C N S.",
        "Prostate/prostate bed: P C W G 2 recorded prior local treatment. P C W G 3 keeps that and directs pelvic imaging — C T, M R I, PET C T, endorectal M R I, transrectal ultrasound — to document presence or absence of disease. Bone: P C W G 2 wanted two new lesions. P C W G 3 retains two new lesions, confirms ambiguous results with other modalities, and only positivity on the bone scan defines metastatic disease to bone.",
        "Other sites: P C W G 2 noted patients with treated epidural lesions and no other epidural progression are eligible. P C W G 3 retains that. Type of progression at trial entry was not addressed in P C W G 2. P C W G 3 reports separately: P S A only; bone only plus nodal disease; nodal disease only, no bone; viscera — lung, liver, adrenal, C N S — plus or minus other sites; and records new lesions versus growth of pre-existing lesions, or both."
      ],
      "chips": [
        "Type of PD",
        "2 new bone lesions",
        "Viscera by site"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b119.jpg",
      "cap": "Protocol page 119 of 120 — Appendix 2 · viscera, prostate bed, bone, other sites, type of progression",
      "pearls": [
        "PCWG3 makes you declare the type of progression at entry — PSA-only vs bone vs node vs viscera. Inclusion 14 uses that table.",
        "Bone-scan positivity, not a CT sclerotic lesion alone, defines bone mets for PCWG3."
      ]
    },
    {
      "title": "Page 120 of 120 · Appendix 2 · patient-reported outcomes — last page",
      "audio": [
        "Last row, other markers, patient-reported outcomes. P C W G 2 did not address them. P C W G 3 does: for pain-palliation analyses, presence of clinically meaningful pain at baseline — 4 or more on a 10-point intensity scale — is a prerequisite; for pain-progression analyses, patients may have any pain level at baseline, including no pain.",
        "Abbreviations under the table: C N S, C T, M R I, PET, P S A, P S A D T, P C W G 2, P C W G 3, R E C I S T. End of protocol. Page 120 of 120.",
        "You have now heard every page of BET-PSMA-121 version 5.1. Take the module quiz: plus or minus 10 percent, P S A 50, kidney 23 over 35 gray, lutetium-177 half-life 6.7 days, SPECT clocks, who is allowed in Phase 2, and extravasation as an S A E."
      ],
      "chips": [
        "Page 120/120",
        "PCWG3 pain",
        "Quiz next"
      ],
      "visual": "psa50",
      "image": "assets/protocol/bet/b120.jpg",
      "cap": "Protocol page 120 of 120 — Appendix 2 · patient-reported outcomes — last page",
      "pearls": [
        "PCWG3 is why FACT-P sits in this protocol at all — PRO was not a PCWG2 requirement.",
        "Quiz next. If you can teach Figure 5 and Table 11, you have the board-relevant core of this 120-page document."
      ]
    }
  ],
  "quiz": [
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
    }
  ]
};

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
      if (typeof LiveHero.pinFront === "function") LiveHero.pinFront(item);
      else {
        const rest = (LiveHero.items || []).filter(it => it && it.src && it.src !== src);
        LiveHero.items = [item].concat(rest).slice(0, 14);
        if (!LiveHero.browsing) LiveHero.i = 0;
        try { LiveHero.paint(); } catch (e) {}
      }
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
    if (hero && !(typeof LiveHero !== "undefined" && LiveHero.browsing)) { hero.src = src; hero.alt = item.cap; }
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
      if (mod && mod.id === MOD_ID && raw && extras[raw]) return raw;
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
