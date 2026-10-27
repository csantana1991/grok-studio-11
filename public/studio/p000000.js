/* Novartis CPBQ663A12101 / P000000 ²²⁵Ac-DWJ155 + ⁶⁸Ga-DWJ155 protocol audiobook.
   Loads after p0protocol.js / p01bet.js / p00clarify.js. Mutates window.COURSE. */


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

  const MODULE000 = {
  "id": "p000000",
  "num": "P000000",
  "title": "P000000 · Novartis DWJ155 protocol · CPBQ663A12101 full 170 pages",
  "time": "~6 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this P000000 · DWJ155 protocol audiobook",
      "audio": [
        "This module is P000000 — a full read-through of Novartis clinical protocol C P B Q 663 A 12 101, version 01 clean, dated 4 May 2026.",
        "Compounds: actinium-225 D W J 155 for therapy, and gallium-68 D W J 155 for PET. D W J 155 is a H E R 2-targeting peptide. First-in-human Phase I, open-label, multi-center, in advanced solid tumors.",
        "Imaging first: about 250 megabecquerels of gallium-68 D W J 155, window 200 to 275. Eligible participants then receive actinium-225 D W J 155 starting at 2 megabecquerels, 54 microcuries, every 6 weeks. Provisional levels 2, 4, 6, and 8 megabecquerels. Bayesian hierarchical model plus E W O C.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a first-in-human alpha-emitting H E R 2 radioligand protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. One hundred and seventy protocol pages, plus this intro. After the last page, take the module quiz — starting activity, gallium-68 window, theranostic pair, E W O C, and who is allowed in."
      ],
      "chips": [
        "P000000",
        "170 pages",
        "Web speech",
        "Protocol page on screen",
        "Same studio player"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n001.jpg",
      "cap": "CPBQ663A12101 cover — ²²⁵Ac / ⁶⁸Ga DWJ155 HER2 peptide (Novartis Phase I)",
      "pearls": [
        "P000000 is the Novartis DWJ155 audiobook — same play, pause, speed, atlas, and live-image dock as GP-STAR, CLARIFY, and BET-121.",
        "See the ligand on PET (gallium-68). Treat with the same ligand labeled actinium-225. Starting therapy activity is 2 megabecquerels.",
        "Teaching copy of a confidential sponsor protocol. Do not treat from this module."
      ]
    },
    {
      "title": "Page 1 of 170 · Cover · Novartis CPBQ663A12101 · ²²⁵Ac / ⁶⁸Ga DWJ155",
      "audio": [
        "Novartis Research and Development Clinical Trial Protocol A phase I open-label, multi-center study to evaluate the safety, tolerability and preliminary activity of actinium-225DWJ155 and safety of gallium-68 D W J 155 in participants with solid tumors Clinical Trial Protocol Number: C P B Q 663 A 12 101 Version Number: v01 (Clean) Compound: actinium-225 D W J 155, gallium-68 D W J 155 Brief Title: A phase I study of actinium-225 D W J 155 and gallium-68 D W J 155 in",
        "participants with solid tumors Study Phase: I Regulatory Agency Identifier Number(s): 2025-522650-39-00 Sponsor name: Novartis Pharma AG or its affiliates outside of the EEA (where applicable) Sponsor address: Novartis Pharma AG, Lichtstrasse 35, 4056 Basel, Switzerland Content final Date: 04-May-2026 without the consent of Novartis Clinical Trial Protocol Template Version 9.0 dated, effective 14-Oct-2024"
      ],
      "chips": [
        "CPBQ663A12101",
        "p1/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n001.jpg",
      "cap": "Protocol page 1 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "Novartis Phase I of a HER2-targeting peptide labeled ²²⁵Ac (therapy) or ⁶⁸Ga (PET).",
        "Protocol CPBQ663A12101 v01 clean, content-final 4 May 2026. Teaching copy only."
      ]
    },
    {
      "title": "Page 2 of 170 · Table of contents (1)",
      "audio": [
        "Table of contents Table of contents 2 List of tables 6 List of figures 8 Amendment 1 (04-May-2026) 9 1 Protocol summary 10 1.1 Description of the study 10 1.2 Schema 14 1.3 Schedule of activities (SoA) 15 2 Introduction 36 2.1 Study rationale 36 2.2 Background 36 2.2.1 Overview of D W J 155 37 2.3 Benefit/Risk assessment 38 2.3.1 Risks and benefits for planned off-site procedures 40 3 Objectives, endpoints, and estimands 40 3.1 Objectives and related endpoints 40 3.2 Primary",
        "estimands 41 3.3 Secondary estimands 41 4 Study design 42 4.1 Overall design 42 4.2 Scientific rationale for study design 44 4.2.1 Patient input into design 44 4.3 Justification for dosage 45 4.3.1 Dosage of actinium-225 D W J 155 45 4.3.2 Activity of gallium-68 D W J 155 48 4.4 Rationale for choice of control drugs or combination drugs and background therapy 49 4.5 Purpose and timing of interim analyses/design adaptations 49 4.6 Public health emergency mitigation procedures",
        "49 4.7 Rationale for planned off-site procedures 49 4.8 End of study definition 49 5 Study population 50 5.1 Inclusion criteria 50 5.2 Exclusion criteria 53 5.3 Lifestyle considerations 57 5.4 Screen failures 57"
      ],
      "chips": [
        "CPBQ663A12101",
        "p2/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n002.jpg",
      "cap": "Protocol page 2 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 3 of 170 · Table of contents (2)",
      "audio": [
        "5.5 Participant numbering 57 5.6 Replacement policy 58 6 Study treatment(s) and concomitant therapy 58 6.1 Description of study treatment(s) and treatment arms 58 6.1.1 Additional study treatments 59 6.1.2 Treatment arms/group 59 6.1.3 Treatment duration 60 6.2 Preparation, handling, storage, and accountability 60 6.2.1 Handling of study treatment 61 6.2.2 Handling of other or additional treatment 61 6.2.3 Instruction for prescribing and taking study treatment 61 6.3",
        "Measures to minimize bias: randomization and blinding 62 6.3.1 Treatment assignment, randomization 62 6.4 Study treatment compliance 62 6.5 Dosage escalation guidelines 62 6.5.1 Starting activity 62 6.5.2 Provisional dosage levels 62 6.5.3 Guideline for dosage escalations and dosage selection for the Phase 1 expansion 63 6.5.4 Definitions of dosage limiting toxicities (D L Ts) 65 6.5.5 Dosage modifications 67 6.5.6 Follow-up for toxicities 75 6.6 Concomitant and other",
        "therapies 77 6.6.1 Concomitant therapies 78 6.6.2 Prohibited therapies 79 6.6.3 Hypersensitivity 79 6.7 Continued access to study treatment after the end of the study 79 7 Discontinuation of study treatment and participant discontinuation/withdrawal 79 7.1 Discontinuation of study treatment 79 7.1.1 Safety follow-up 80 7.1.2 Long-term safety follow-up 80 7.1.3 Disease progression follow-up 80 7.2 Participant discontinuation from the study 81 7.3 Withdrawal of informed",
        "consent and exercise of participants’ data privacy rights 81 7.4 Lost to follow-up 81 7.5 Study stopping rules 82"
      ],
      "chips": [
        "CPBQ663A12101",
        "p3/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n003.jpg",
      "cap": "Protocol page 3 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 4 of 170 · Table of contents (3)",
      "audio": [
        "7.6 Early study termination by the Sponsor 82 8 Study assessments and procedures 83 8.1 Screening and eligibility 83 8.1.1 Screening 83 8.2 Participant demographics/other baseline characteristics 83 8.3 Efficacy assessments 84 8.3.1 Efficacy assessment 85 8.3.2 gallium-68 D W J 155 PET and actinium-225 D W J 155 SPECT imaging 87 8.3.3 Appropriateness of efficacy assessments 88 8.4 Safety assessments 88 8.4.1 Physical examinations 89 8.4.2 Vital signs 89 8.4.3",
        "Electrocardiograms 89 8.4.4 Clinical safety laboratory tests 91 8.4.5 Pregnancy testing 91 8.4.6 Cardiac imaging - Trans-Thoracic Echocardiography (T T E) 92 8.4.7 Chest X-ray (Japan only) 92 8.4.8 Appropriateness of safety measurements 92 8.5 Additional assessments 92 8.6 Immunogenicity assessments 92 8.7 Pharmacokinetics and dosimetry 92 8.7.1 Pharmacokinetic blood collection and handling 93 8.7.2 Pharmacokinetic urine collection and handling 94 8.7.3 Analytical method 95",
        "8.7.4 Dosimetry 95 8.7.5 Dosimetry with respect to local regulations 96 8.8 Biomarkers 97 8.9 Health economics OR Medical resource utilization and health economics 100 8.10 Adverse events (AEs), serious adverse events (S A Es), and other safety reporting 100 8.10.1 Definition and recording of adverse events 100 8.10.2 Definition and recording of serious adverse events 103 8.10.3 S A E reporting 104 8.10.4 Pregnancy 105 8.10.5 Disease-related events and/or disease-related",
        "outcomes not qualifying as AEs or S A Es 106 8.10.6 Adverse events of special interest 106"
      ],
      "chips": [
        "CPBQ663A12101",
        "p4/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n004.jpg",
      "cap": "Protocol page 4 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 5 of 170 · Table of contents (4)",
      "audio": [
        "8.10.7 Reporting of study treatment errors, study treatment misuse/abuse and overdosage 107 8.11 Optional Additional Research 107 9 Statistical considerations 107 9.1 Analysis sets 108 9.1.1 Full Analysis Set and Safety Set 108 9.1.2 Dose-determining Analysis Set 108 9.1.3 Pharmacokinetic Analysis Set 108 9.1.4 gallium-68 D W J 155 Safety Set 108 9.1.5 Dosimetry Analysis Set 109 9.2 Statistical analyses 109 9.2.1 General considerations 109 9.2.2 Participant demographics and",
        "other baseline characteristics 109 9.2.3 Treatments 109 9.3 Primary endpoint(s)/estimand(s) analysis 109 9.3.1 Safety endpoints 109 9.4 Secondary endpoint(s)/estimand(s) analysis 113 9.4.1 Efficacy and/or pharmacodynamic endpoint(s) 113 9.4.2 Pharmacokinetics 114 9.4.3 Safety properties of gallium-68 D W J 155 115 9.5 Exploratory endpoint(s)/estimand(s) analysis 116 9.5.1 Dosimetry 116 9.5.2 Urine pharmacokinetics 117 9.5.3 PK/pharmacodynamics relationships 117 9.5.4 Imaging",
        "Properties of gallium-68 D W J 155 117 9.6 Other Safety analyses 117 9.7 Other analyses 117 9.8 Interim analysis 117 9.9 Sample size determination 118 9.9.1 Primary endpoint(s) 118 10 Supporting documentation and operational considerations 120 10.1 Appendix 1: Regulatory, ethical, and study oversight considerations 120 10.1.1 Regulatory and ethical considerations 120 10.1.2 Informed consent process 121 10.1.3 Data protection 122 10.1.4 Committees structure 123"
      ],
      "chips": [
        "CPBQ663A12101",
        "p5/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n005.jpg",
      "cap": "Protocol page 5 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 6 of 170 · Table of contents (5) · list of tables start",
      "audio": [
        "10.1.5 Data quality assurance 123 10.1.6 Source documents 124 10.1.7 Publication policy 124 10.1.8 Protocol adherence and protocol amendments 125 10.1.9 Off-site procedures 125 10.2 Appendix 2: Abbreviations and definitions 127 10.2.1 List of abbreviations 127 10.2.2 Definitions 131 10.3 Appendix 3: Clinical laboratory tests 134 10.4 Appendix 4: Statistical details of the Bayesian hierarchical logistic regression model (B H L R M): priors, design, operating characteristics",
        "and hypothetical data scenarios 135 10.4.1 Design specification 135 10.4.2 Prior specifications 136 10.4.3 Summary of prior distributions 136 10.4.4 Hypothetical on-study scenarios 137 10.4.5 Operating characteristics 138 10.4.6 Scenarios of the true D L T probability 138 10.4.7 Design to simulate trials 139 10.4.8 Metrics to assess the operating characteristics 139 10.4.9 Results 140 10.5 Appendix 5: RECIST v1.1 142 10.5.1 Introduction 142 10.5.2 Efficacy assessments 142",
        "10.5.3 Efficacy definitions 151 10.5.4 Data handling and programming rules 162 10.6 Appendix 6: Patient Engagement 165 11 References 166 List of tables Table 1-1 Objectives and Endpoints 10 Table 1-2 Allowed visit windows 15 Table 1-3 Schedule of activities, Screening and PET imaging periods 18 Table 1-4 Schedule of activities, Treatment and Follow-up period (all participants) - 6-week schedule 21"
      ],
      "chips": [
        "CPBQ663A12101",
        "p6/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n006.jpg",
      "cap": "Protocol page 6 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 7 of 170 · List of tables",
      "audio": [
        "Table 1-5 Schedule of activities, Treatment and Follow-up period (all participants) - 4-week schedule 26 Table 1-6 Schedule of activities, Treatment and Follow-up period (all participants) - 8-week schedule 30 Table 1-7 Schedule of activities, Dosimetry and/or PK subgroup 35 Table 3-1 Objectives and related endpoints 40 Table 4-1 Rationale for study design 44 Table 6-1 Investigational drug 59 Table 6-2 Provisional administered activity levels 63 Table 6-3 Criteria for",
        "defining dosage-limiting toxicities 66 Table 6-4 Criteria for dosage reduction / interruption and re-initiation of actinium-225 D W J 155 treatment for adverse drug reactions 68 Table 6-5 Clinical and diagnostic assessments for liver-related disorders 77 Table 8-1 Imaging assessment collection plan 85 Table 8-2 ECOG Performance status scale 89 Table 8-3 Central ECG collection plan (all participants) 90 Table 8-4 Pharmacokinetic blood collection log 94 Table 8-5 Urine",
        "Collection Log 95 Table 8-6 SPECT C T Imaging Collection Table 96 Table 8-7 Biomarker sample collection plan 97 Table 9-1 Under-dose, target, and excessive toxicity intervals of posterior probabilites of the D L T rates 111 Table 9-2 Non-compartmental pharmacokinetic parameters 115 Table 9-3 Probability of detecting an AE with a specified incidence at the RD as a function of the sample size 119 Table 10-1 Clinical laboratory tests and parameters 134 Table 10-2 Prior",
        "distributions for the parameters of the B H L R M model used to derive the prior for the actinium-225 D W J 155 single-agent model parameters 136 Table 10-3 Summary of the prior distribution of D L T probability for the provisional administered activities of actinium-225 D W J 155 136 Table 10-4 Hypothetical dosage escalation scenarios 137 Table 10-5 Hypothetical true D L T rates for actinium-225 D W J 155 single agent 138 Table 10-6 Operating characteristics of the",
        "adaptative Bayesian approach 141 Table 10-7 Response criteria for target lesions 147 Table 10-8 Response criteria for non-target lesions 149 Table 10-9 Overall lesion response at each assessment 151"
      ],
      "chips": [
        "CPBQ663A12101",
        "p7/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n007.jpg",
      "cap": "Protocol page 7 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 8 of 170 · List of figures · study design and flow",
      "audio": [
        "Table 10-10 Overall lesion response at each assessment: participants with nontarget disease only 158 Table 10-11 Options for event dates used in PFS, TTP, duration of response 159 List of figures Figure 1-1 Study design 14 Figure 1-2 Study flow 15"
      ],
      "chips": [
        "CPBQ663A12101",
        "p8/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n008.jpg",
      "cap": "Protocol page 8 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 9 of 170 · Amendment 1 · 04 May 2026 formatting",
      "audio": [
        "Amendment 1 (04-May-2026) Amendment rationale The protocol has been amended due to formatting requirements. Study Update: At the time of this amendment, the study has not been submitted to any Health Authority. Changes to the protocol Changes to specific sections of the protocol are shown in the track changes version of the protocol using strike through for deletions and underline for insertions.",
        "The changes made to the protocol due to this amendment and the rationale for the changes are described below. Section 5.1: Corrected the inclusion criteria numbering and bullet points Section 5.2: Corrected the exclusion criteria numbering and bullet points IRBs/IECs A copy of this amended protocol will be sent to the Institutional Review Board (IRBs)/Independent Ethics Committee (IECs) and Health Authorities.",
        "The changes described in this amended protocol require IRB/IEC approval prior to implementation. The changes herein do NOT affect the Informed Consent."
      ],
      "chips": [
        "CPBQ663A12101",
        "p9/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n009.jpg",
      "cap": "Protocol page 9 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 10 of 170 · §1 Protocol summary · purpose and primary endpoints",
      "audio": [
        "1 Protocol summary 1.1 Description of the study Protocol Title: A phase I open-label, multi-center study to evaluate the safety, tolerability and preliminary activity of actinium-225 D W J 155 and safety of gallium-68 D W J 155 in participants with solid tumors Brief Title: A phase I study of actinium-225 D W J 155 and gallium-68 D W J 155 in participants with solid tumors Purpose: The purpose of this phase I study is to evaluate the safety, tolerability and preliminary",
        "antitumor activity of actinium-225 D W J 155 and the safety of gallium-68 D W J 155 in participants with histologically or cytologically confirmed advanced (defined as metastatic or locally advanced, i.e., not amenable to definitive multi-modality therapy including surgery) Human Epidermal Growth Factor Receptor 2 (H E R 2) +, HR+/H E R 2-, or triple negative breast cancer (T N B C), non-small cell lung cancer (N S C L C), H E R 2 3+ or 2+ (in situ hybridization (I S H) + or",
        "-) gastroesophageal adenocarcinoma (G E A), and bladder cancer.",
        "Study Indication/Medical Condition: Advanced H E R 2+, HR+/H E R 2-, or T N B C, N S C L C, H E R 2 3+ or 2+ (I S H + or -) G E A, and bladder cancer Treatment Type: Radioligand therapy Study Type: Interventional Objectives, Endpoints, and Estimands: Table 1-1 Objectives and Endpoints Objectives Endpoints Primary Assess the safety and tolerability for actinium-225DWJ155 and identify the recommended dosage(s) of actinium-225 D W J 155 for further clinical evaluation • Safety:",
        "Incidence and severity of adverse events (AEs), including dosage limiting toxicities (D L Ts) and serious adverse events (S A Es), changes in laboratory values, vital signs and electrocardiograms (ECGs) • Tolerability: Frequency of dosage interruptions and reductions, dosage intensity"
      ],
      "chips": [
        "CPBQ663A12101",
        "p10/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n010.jpg",
      "cap": "Protocol page 10 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "Primary: safety/tolerability of ²²⁵Ac-DWJ155 and recommended dosage(s) for later evaluation.",
        "Population: advanced HER2+, HR+/HER2− or TNBC, NSCLC, HER2 3+/2+ GEA, bladder."
      ]
    },
    {
      "title": "Page 11 of 170 · Summary · secondary endpoints, FIH design, n",
      "audio": [
        "Secondary Evaluate the preliminary anti-tumor activity of actinium-225 D W J 155 Overall response rate (ORR), disease control rate (DCR), duration of response (DOR), and progressionfree survival (PFS) based on RECIST v1.1 by local investigator assessment Characterize the pharmacokinetics (PK) of actinium-225DWJ155 in blood post-secular equilibrium PK parameters (i.e., clearance, maximum concentration (Cmax), time to maximum concentration (Tmax), area under the curve (AUC),",
        "half-life, systemic clearance (CL), distribution volume) of actinium-225 D W J 155 in blood Characterize the safety of gallium-68 D W J 155 Incidence and severity of AEs, including S A Es Trial Design: This is a first-in-human (first in human), phase I, open-label, multi-center study in participants with locally advanced or metastatic breast cancer, N S C L C, G E A, and bladder cancer. The study consists of a dosage escalation part, followed by a dosage expansion part.",
        "Treatment of Interest: The investigational drugs are actinium-225 D W J 155 and gallium-68 D W J 155. D W J 155 is a H E R 2-targeting peptide labeled with Actinium-225 (actinium-225) for therapy or with Gallium-68 (gallium-68) for imaging. Treatment Groups: During the imaging period, all participants will receive gallium-68 D W J 155 and will be evaluated for eligibility for actinium-225 D W J 155 treatment.",
        "Participants who are eligible for treatment are planned to receive one administration of actinium-225 D W J 155 at the beginning of each cycle. Participants will be followed up for 36 months from the last actinium-225 D W J 155 administration, as described in Section 1.3. Number of Participants: Escalation part: A minimum of 21 participants will be treated with actinium-225 D W J 155. The exact number of participants will depend on the number of dosage levels.",
        "Expansion part: Approximately 135 participants in total, including H E R 2+ breast cancer (n~15), HR+/H E R 2-low breast cancer (n~15), HR+/H E R 2-0 breast cancer (n~10), nonActionable Gene Alteration (A G A) N S C L C (n~20), A G A N S C L C (n~20), and HR-/H E R 2-low breast cancer (n~15), HR-/H E R 2-0 breast cancer (n~10), H E R 2 3+ or 2+ (I S H + or -) G E A (n~15), bladder cancer (n~15), will be assigned to receive actinium-225 D W J 155 treatment.",
        "Key Inclusion Criteria: • Male or female participants age greater than or equal to 18 years. • Participants with one of the following histologically or cytologically confirmed and documented malignancies, for whom no standard therapy is available, tolerated, or appropriate in the judgement of the investigator:"
      ],
      "chips": [
        "CPBQ663A12101",
        "p11/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n011.jpg",
      "cap": "Protocol page 11 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "Secondary: ORR/DCR/DOR/PFS by RECIST 1.1, PK after secular equilibrium, ⁶⁸Ga safety.",
        "Escalation ≥21; expansion ~135. Imaging IMP then therapy IMP each cycle."
      ]
    },
    {
      "title": "Page 12 of 170 · Summary · escalation populations from cohort 2",
      "audio": [
        "• Dosage escalation (first cohort only): • Advanced H E R 2+ breast cancer with disease progression after at least two prior lines of systemic therapy in the advanced setting. • Dosage escalation (from second cohort onward): • Advanced H E R 2+ breast cancer with disease progression after at least two prior lines of systemic therapy in the advanced setting.",
        "• Advanced HR+/H E R 2-low breast cancer with disease progression after at least one line of hormone-based therapy in combination with a C D K 4 6 inhibitor and at least one additional line of systemic therapy administered in the advanced setting.",
        "Participants progressing on, or within 12 months of completing, hormone based therapy plus C D K 4 6 inhibitor in the adjuvant setting are only required to have been treated with one line of additional therapy in the advanced setting.",
        "• Advanced N S C L C without Actionable Genetic Alterations (A G As) with disease progression after prior therapy in the advanced setting who have received a platinum-based chemotherapy and an immune checkpoint inhibitor therapy either in combination or in sequence, unless participant was ineligible to receive such therapy.",
        "Participants must have known H E R 2 immunohistochemistry (I H C) greater than or equal to 1+ or confirmed tumor positivity based on local assessment of gallium-68 D W J 155 uptake. • Advanced N S C L C with A G As who have received prior treatment with at least a targeted therapy or ADC, platinum-based chemotherapy, and immune-oncologic (IO) therapy if appropriate, unless participant was ineligible to receive such therapy.",
        "Participants must have known H E R 2 I H C greater than or equal to 1+ or confirmed tumor positivity based on local assessment of gallium-68 D W J 155 uptake. • Dosage expansion: • Advanced H E R 2+ breast cancer with disease progression after at least two prior lines of systemic therapy in the advanced setting.",
        "• Advanced HR+/H E R 2-low breast cancer with disease progression after at least one line of hormone-based therapy in combination with a C D K 4 6 inhibitor and at least one additional line of systemic therapy administered in the advanced setting.",
        "Participants progressing on, or within 12 months of completing, hormone-based therapy plus C D K 4 6 inhibitor in the adjuvant setting are only required to have been treated with one line of additional therapy in the advanced setting. • Advanced HR+/H E R 2 0 breast cancer with disease progression after at least one line of hormone-based therapy in combination with a C D K 4 6 inhibitor and at least one additional line of systemic therapy administered in the advanced setting.",
        "Participants progressing on, or within 12 months of completing, hormone-based therapy plus C D K 4 6 inhibitor in the adjuvant setting are only required to have been treated with one line of additional therapy in the advanced setting.",
        "• Advanced HR-/H E R 2-low breast cancer with disease progression after prior therapy in the advanced setting after at least two lines of systemic therapy including cytotoxic chemotherapy, antibody-drug conjugate, targeted therapies and IO for metastatic disease."
      ],
      "chips": [
        "CPBQ663A12101",
        "p12/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n012.jpg",
      "cap": "Protocol page 12 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 13 of 170 · Summary · remaining expansion groups and visit schedule",
      "audio": [
        "• Advanced HR-/H E R 2 0 breast cancer with disease progression after prior therapy in the advanced setting after at least two lines of systemic therapy including cytotoxic chemotherapy, antibody-drug conjugate, targeted therapies and/or IO. • Advanced N S C L C without A G As, who have received a platinum-based chemotherapy and an immune checkpoint inhibitor therapy either in combination or in sequence, unless participant was ineligible to receive such therapy.",
        "Tumor must be positive for gallium-68 D W J 155 uptake based on local assessment. • Advanced N S C L C with A G As, who have received prior treatment with at least a targeted therapy or ADC and platinum-based chemotherapy, and/or IO therapy if appropriate, unless participant was ineligible to receive such therapy. Tumor must be positive for gallium-68 D W J 155 uptake based on local assessment.",
        "• Advanced H E R 2 I H C 3+ or 2+ (I S H + or -) G E A with H E R 2 I H C 3+ or 2+ (I S H + or -), following disease progression after prior therapy in the advanced setting including all standard of care (SOC) systemic therapies per local guidelines including chemotherapy, targeted agents, IO, and/or ADCs, unless participant was ineligible to receive such therapy.",
        "• Advanced bladder cancer with disease progression after prior therapy in the advanced setting including all SOC systemic therapies per local guidelines, including chemotherapy, ADCs, and/or immunotherapy, unless participant was ineligible to receive such therapies. Tumor must be positive for gallium-68DWJ155 uptake based on local assessment.",
        "Key Exclusion Criteria: • Out-of-range laboratory values defined as: • Estimated glomerular filtration rate (eGFR) < 60 mL/min/1.73m2 measured or calculated by Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI) formula for adults.",
        "• Total bilirubin > 1.5 x upper limit of normal (ULN; except for participants with Gilbert's syndrome who are excluded if total bilirubin > 3.0 x ULN) or direct bilirubin > 1.5 x ULN; Alanine aminotransferase (ALT)/Aspartate aminotransferase (AST) > 3 x ULN, except for participants with tumor involvement of the liver who are excluded if ALT > 5 x ULN; lipase > 1.5 x ULN • Absolute neutrophil count (ANC) < 1.5 x 109/L, hemoglobin < 9 g/dL, platelet count < 100 x 109/L •",
        "Ongoing treatment with hematopoietic colony stimulating factors, thrombopoietin mimetics, or erythroid stimulating agents. • Use of transfusion support less than or equal to 4 weeks prior to the first administration of actinium-225DWJ155 • Impaired cardiac function or clinically significant cardiac disease. • Unmanageable urinary tract obstruction or urinary incontinence.",
        "• Prior treatment with any therapeutic radiopharmaceutical • Treatment with any of the following anti-cancer therapies prior to the first administration of actinium-225 D W J 155 within the stated timeframes:"
      ],
      "chips": [
        "CPBQ663A12101",
        "p13/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n013.jpg",
      "cap": "Protocol page 13 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 14 of 170 · Figure 1-1 · study design",
      "audio": [
        "• < 10 half-lives for any imaging radiopharmaceutical • less than or equal to 4 weeks for external beam radiation therapy (EBRT) or brachytherapy (not lungdirected) • less than or equal to 6 months for lung-directed external beam radiotherapy • Participants with uptake of gallium-68‑D W J 155 in non-tumor tissues or organs that, in the opinion of the investigator, increase the risk associated with actinium-225 D W J 155 treatment.",
        "This may include, but is not limited to, bone marrow or other normal tissue/organ uptake.",
        "Data Monitoring/Other Committee: Yes; data monitoring committee for the Dosage expansion part only Key Words: Breast cancer; non-small cell lung cancer (N S C L C); bladder cancer; gastroesophageal adenocarcinoma (G E A); radioligand therapy (RLT); radioligand imaging (RLI); actinium-225DWJ155; gallium-68‑D W J 155; Human Epidermal Growth Factor Receptor 2 (H E R 2); PBQ663; FKL480 actinium-225 D W J 155 (PBQ663) and gallium-68 D W J 155 (FKL480) will hereafter be referred",
        "to as actinium-225 D W J 155 and gallium-68 D W J 155, respectively. 1.2 Schema Figure 1-1 Study design *RD(s) = recommended dosage(s) (where dosage is defined as administered activity per cycle, total number of cycles and schedule) of actinium-225 D W J 155 **A G A are non-Actionable Gene Alterations any genetic alterations for which a targeted therapy is approved. Please refer to Section 5.1 for details on inclusion criteria"
      ],
      "chips": [
        "CPBQ663A12101",
        "p14/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n014.jpg",
      "cap": "Protocol page 14 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 15 of 170 · Figure 1-2 · study flow",
      "audio": [
        "Figure 1-2 Study flow * PET imaging will be performed in all participants; eligibility for treatment with actinium-225 D W J 155 in N S C L C and bladder cancer will be confirmed based on positive gallium-68 D W J 155 tumor uptake. Please refer to Section 5.1 for details on inclusion criteria.",
        "** gallium-68 D W J 155 administration and PET imaging should be performed as soon as possible after completion of screening assessments for indications with known H E R 2 status (i.e., breast cancer and G E A). Please refer to Section 5.1 for details on inclusion criteria. 1.3 Schedule of activities (SoA) The SoA lists all the assessments and when they are performed according to the study period. Please refer to Section 4.1 for study design details.",
        "• Table 1-3 details the assessments to be performed during screening and imaging periods • Table 1-4 details the visit evaluation schedule during the treatment and follow-up periods for a 6-week administration schedule • Table 1-5 details the visit evaluation schedule during the treatment and follow-up periods for a 4-week administration schedule • Table 1-6 details the visit evaluation schedule during the treatment and follow-up periods for a 8-week administration schedule",
        "• Table 1-7 details the additional activities to be performed for the dosimetry and/or PK subgroup Table 1-2 Allowed visit windows Visit name Visit window Cycle 1 all visits plus or minus 3 days Cycle 2 onwards all visits (6- and 8-week schedules) plus or minus 7 days Cycle 2 onwards all visits (4-week schedule) -2/+7 days Conventional imaging -7 days after first administration of 225AcDWJ155 until end of treatment, then plus or minus 15 days gallium-68 D W J 155 PET C T or",
        "PET M R I At specified time points Post gallium-68 D W J 155 safety follow-up -1/+2 days actinium-225 D W J 155 SPECT C T At specified time points"
      ],
      "chips": [
        "CPBQ663A12101",
        "p15/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n015.jpg",
      "cap": "Protocol page 15 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 16 of 170 · Visit name Visit window PK and ECG At specified time points Echocardiogram -7 days…",
      "audio": [
        "Visit name Visit window PK and ECG At specified time points Echocardiogram -7 days End of treatment (end of treatment) plus or minus 7 days Safety follow-up plus or minus 15 days Disease progression follow-up plus or minus 15 days All data obtained from these assessments must be supported in the participant’s source documentation. Rescreening of participants is allowed (refer to Section 5.4 for details).",
        "Participants should be seen for all visits/assessments as outlined in the SoA or as close to the designated day/time as possible, as specified in Table 1-2. Missed or rescheduled visits should not lead to automatic discontinuation. Participants who complete or discontinue from study treatment are to complete the end of treatment visit and attend the follow-up visits as indicated in the SoA.",
        "At this visit, the AEs and concomitant medications not previously reported must be recorded on the electronic Case Report Form (eCRF). All follow-up visits should also be done as per the SoA and the required data entered in the CRF.",
        "In some instances, related to participant safety and/or efficacy, the Novartis Medical Monitor may request copies of de-identified source documents including, but not limited to, photographs, radiographic images, and relevant medical records as allowed per local regulations. Based on local radioprotection agency requirements, additional assessments or safety procedures may be performed (e.g., overnight hospital stays for participant surveillance).",
        "In extraordinary situations (e.g., a potential supply disruption and/or a quality incident) the investigator may immediately be: • informed to not administer a dose from an impacted batch to the participant, and/or • asked to closely monitor participants who have received an administration from an impacted batch for AEs, and • advised how to manage participants in screening, imaging or on treatment in case of supply disruption.",
        "For visits during treatment and at the 180 day safety follow-up visits that only have chemistry, hematology and urinalysis assessments, these assessments may be conducted at an off-site facility. All other visits with these lab assessments and other planned assessments are not eligible for off-site delegation. During a public health emergency as defined in Section 4.6, alternative methods of providing continuing care may be implemented by the Investigator.",
        "If allowable by a local health authority, national and local regulations and depending on operational capabilities, phone calls, virtual contacts (e.g., tele consultation) or visits by site staff/ off-site healthcare professional(s) to the participant´s home, can replace in person visits for certain protocol assessments such as safety monitoring, lab assessments and urine pregnancy test for the duration of the disruption until it is safe for the participant to visit the site",
        "again."
      ],
      "chips": [
        "CPBQ663A12101",
        "p16/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n016.jpg",
      "cap": "Protocol page 16 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 17 of 170 · If the Investigator delegates tasks to an off-site healthcare professional, the…",
      "audio": [
        "If the Investigator delegates tasks to an off-site healthcare professional, the Investigator must ensure the individual(s) is/are qualified and appropriately trained to perform assigned duties. The Investigator must oversee their conduct and remain responsible for the evaluation of the data collected."
      ],
      "chips": [
        "CPBQ663A12101",
        "p17/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n017.jpg",
      "cap": "Protocol page 17 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 18 of 170 · Table 1-3 Schedule of activities, Screening and PET imaging periods Period Screening…",
      "audio": [
        "Table 1-3 Schedule of activities, Screening and PET imaging periods Period Screening Screening/Imaging Follow-up Visit Name Screening gallium-68 D W J 155 imaging Post gallium-68 D W J 155 imaging Days -35 to gallium-68 D W J 155 imaging (min. -21) min.",
        "-21 3 days post gallium-68 D W J 155 imaging (phone call or visit) Obtain informed consent X Demography X Inclusion/exclusion criteria X X1 Diagnosis and extent of cancer X Relevant medical history/current medical history X Prior antineoplastic therapy X Prior/concomitant medications, surgery, medical procedures and non-drug therapies X ECOG Performance Status X Smoking history X Adverse events X Physical examination S Height X Weight X Vital signs X Before and 0-30 min",
        "after 68GaDWJ155 administration SpO2 (for Japan only) S S Hematology X Chemistry X Coagulation X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p18/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n018.jpg",
      "cap": "Protocol page 18 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 19 of 170 · Period Screening Screening/Imaging Follow-up Visit Name Screening 68Ga-DWJ155…",
      "audio": [
        "Period Screening Screening/Imaging Follow-up Visit Name Screening gallium-68 D W J 155 imaging Post gallium-68 D W J 155 imaging Days -35 to gallium-68 D W J 155 imaging (min. -21) min.",
        "-21 3 days post gallium-68 D W J 155 imaging (phone call or visit) Serum pregnancy test (within 72h prior to 68GaDWJ155 administration) S Urinalysis X ECG X Cardiac imaging (T T E or M U G A - T T E preferred) X Chest X ray (for Japan only) X Conventional imaging for tumor response as per RECIST v1.1 (CT and/or MRI, and other imaging assessments as clinically indicated) X2 gallium-68 D W J 155 administration X gallium-68 D W J 155 PET C T or PET M R I X3 Determination of",
        "tumor gallium-68 D W J 155 positivity (after gallium-68 D W J 155 administration) X Archival tumor sample (if available) or newly obtained tumor sample (for all participants in dosage escalation) X Newly obtained tumor sample (for participants in dosage expansion) X4 I R T registration X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p19/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n019.jpg",
      "cap": "Protocol page 19 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 20 of 170 · Period Screening Screening/Imaging Follow-up Visit Name Screening 68Ga-DWJ155…",
      "audio": [
        "Period Screening Screening/Imaging Follow-up Visit Name Screening gallium-68 D W J 155 imaging Post gallium-68 D W J 155 imaging Days -35 to gallium-68 D W J 155 imaging (min. -21) min. -21 3 days post gallium-68 D W J 155 imaging (phone call or visit) X Assessment to be recorded in the clinical database or received electronically from a vendor S Assessment to be recorded in the source documentation only 1 For indications with unknown H E R 2 status (i.e.",
        "N S C L C and bladder cancer), eligibility for treatment of actinium-225 D W J 155 to be confirmed based on positive gallium-68 D W J 155 tumor uptake. For details, please refer to Section 5.1 Inclusion criteria. 2 Collections to take place at least 1 day prior to gallium-68 D W J 155 administration. The same imaging modality as at baseline to be used throughout the study. 3 All participants will undergo gallium-68 D W J 155 imaging at baseline.",
        "Please refer to Section 8.3.2 for additional details on imaging assessments. 4 For participants in Expansion part who will receive actinium-225 D W J 155 treatment, this collection may be substituted with an archival tumor sample collected up to 6 months prior to Screening, with no intervening treatment. In cases where it is not safe or medically feasible to provide this sample, enrollment may be possible following discussion between investigator and Novartis.",
        "Biopsies can be collected separately from the post gallium-68 D W J 155 imaging visit, up to 5 days prior to actinium-225 D W J 155 administration. Specifications for these samples are described in Section 8.8."
      ],
      "chips": [
        "CPBQ663A12101",
        "p20/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n020.jpg",
      "cap": "Protocol page 20 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 21 of 170 · Table 1-4 Schedule of activities, Treatment and Follow-up period (all participants)…",
      "audio": [
        "Table 1-4 Schedule of activities, Treatment and Follow-up period (all participants) - 6-week schedule Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long term FU Days 1 8 1 5 2 2 2 9 3 6 1 8 1 5 22 2 9 36 Last dose +42d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Physical",
        "examination S S S S Weight X X X SpO2 (for Japan only) S S S S S S S S ECOG Performanc e Status X X X Chemistry X X X X X X X X 1 X 1 X X1 Hematology X X X X X X X X1 ,2 X 1 X1 ,2 X 1 X1 ,2 X X1 Urinalysis X X X X X X X X 1 X 1 X X1 Thyroid function X X Vital signs X3 X X X X X X3 X3 Pregnancy test S4 S4 S4 S4 225AcDWJ155 administrati on X X 68GaDWJ155 administrati on X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p21/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n021.jpg",
      "cap": "Protocol page 21 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 22 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long term FU Days 1 8 1 5 2 2 2 9 3 6 1 8 1 5 22 2 9 36 Last dose +42d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU 68GaDWJ155 PET C T or PET M R I X ECG5 X X X Cardiac imaging (T T E or M U G A - T T E preferred) Every 12 weeks (-7",
        "days) after the first dose of actinium-225 D W J 155 treatment until end of treatment. Final reports must be locally reviewed prior to actinium-225 D W J 155 administration. X6 Convention al imaging for tumor response as per RECIST v1.1 (CT and/or MRI, and other imaging assessment s as clinically indicated) Every 6 weeks (-7 days) after first dose of 225AcDWJ155 treatment. Radiological report(s) must be locally reviewed prior to actinium-225 D W J 155 administration.",
        "Every 12 weeks after the last dose of actinium-225 D W J 155 treatment during Disease progression FU"
      ],
      "chips": [
        "CPBQ663A12101",
        "p22/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n022.jpg",
      "cap": "Protocol page 22 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 23 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long term FU Days 1 8 1 5 2 2 2 9 3 6 1 8 1 5 22 2 9 36 Last dose +42d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Prior/conco mitant medications , surgery, medical procedures and nondrug therapies Assess continuously X Adverse",
        "events Assess continuously X7 X8 Chest X ray (for Japan only) X Subsequent antineoplastic therapies X Long term safety follow-up (phone call or visit) X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p23/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n023.jpg",
      "cap": "Protocol page 23 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 24 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long term FU Days 1 8 1 5 2 2 2 9 3 6 1 8 1 5 22 2 9 36 Last dose +42d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Blood sample for soluble factors pre - do se X X predos e, onl y C2 D1 and C3 D1 X Blood sample for cfDNA pre - do",
        "se X X predos e, onl y C2 D1 and C3 D1 X Every 12 weeks after the last dose of actinium-225 D W J 155 treatment during Disease progression FU Urine sample for renal biomarkers pre - do se predos e X Assessment to be recorded in the clinical database or received electronically from a vendor S Assessment to be recorded in the source documentation only 1 Eligible for off-site delegation.",
        "2 Required only if most recent prior hematologic assessment shows CTCAE grade 2 or higher neutropenia or thrombocytopenia, or CTCAE grade 3 or higher anemia. 3 Before and 0-30 min after gallium-68 D W J 155 and actinium-225 D W J 155 administration 4 Serum pregnancy test to be collected within 72h prior to actinium-225 D W J 155 administration except at end of treatment when it will be collected on the day of study visit.",
        "A monthly urine pregnancy test is required for 8 months after the last actinium-225 D W J 155 administration."
      ],
      "chips": [
        "CPBQ663A12101",
        "p24/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n024.jpg",
      "cap": "Protocol page 24 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 25 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long term FU Days 1 8 1 5 2 2 2 9 3 6 1 8 1 5 22 2 9 36 Last dose +42d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU 5 Refer to Section 8.4.3 for ECG collection timepoints 6 Collections to take place at least 1 day prior to",
        "gallium-68 D W J 155 administration 7 Only non serious AEs related to actinium-225 D W J 155 treatment and S A Es regardless of causality are to be reported to Novartis. If a new post-treatment antineoplastic therapy has been administered, then only S A Es related to actinium-225 D W J 155 treatment are to be reported to Novartis. Follow local law/regulations if requirements differ. Please refer to Section 8.10.1 and Section 8.10.3 for details.",
        "8 Only S A Es related to actinium-225 D W J 155 treatment and S A Es of second primary malignancies regardless of causality are to be reported to Novartis, unless otherwise specified by local law/regulations. Please refer to Section 8.10.3."
      ],
      "chips": [
        "CPBQ663A12101",
        "p25/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n025.jpg",
      "cap": "Protocol page 25 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 26 of 170 · Table 1-5 Schedule of activities, Treatment and Follow-up period (all participants)…",
      "audio": [
        "Table 1-5 Schedule of activities, Treatment and Follow-up period (all participants) - 4-week schedule Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 1 8 1 5 2 2 1 8 1 5 2 2 Last dose + 28d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU",
        "Physical examination S S S S S Weight X X X X SpO2 (for Japan only) S S S S S S S ECOG Performanc e Status X X X X Chemistry X X X X X X 1 X 1 X 1 X X 1 X X1 Hematology X X X X X X 1 X 1 X 1 X X1 ,2 X 1 X1 ,2 X X1 Urinalysis X X X X X X 1 X 1 X 1 X X 1 X X1 Thyroid function X X X Vital signs X3 X X X X3 X3 X3 Pregnancy test S4 S4 S4 S4 S4 225AcDWJ155 administrati on X X X 68GaDWJ155 administrati on X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p26/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n026.jpg",
      "cap": "Protocol page 26 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 27 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 1 8 1 5 2 2 1 8 1 5 2 2 Last dose + 28d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU 68GaDWJ155 PET C T or PET M R I X ECG5 X X X X Cardiac imaging (T T E or M U G A - T T E preferred) Every 12",
        "weeks (-7 days) after first dose of actinium-225 D W J 155 treatment until end of treatment. Final reports must be locally reviewed prior to actinium-225 D W J 155 administration. X6 Convention al imaging for tumor response as per RECIST v1.1 (CT and/or MRI, and other imaging assessment s as clinically indicated) Every 8 weeks (-7 days) after first dose of 225AcDWJ155 treatment. Radiological report(s) must be locally reviewed prior to actinium-225 D W J 155 administration.",
        "Every 12 weeks after the last dose of actinium-225 D W J 155 treatment during Disease progression FU"
      ],
      "chips": [
        "CPBQ663A12101",
        "p27/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n027.jpg",
      "cap": "Protocol page 27 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 28 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 1 8 1 5 2 2 1 8 1 5 2 2 Last dose + 28d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Prior/conco mitant medications , surgery, medical procedures and nondrug therapies Assess continuously X",
        "Adverse events Assess continuously X7 X8 Chest X ray (for Japan only) X Subsequent antineoplastic therapies X Long term safety follow-up (phone call or visit) X Blood sample for soluble factors pre - do se X pre - do se predos e, C3 D1 onl y X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p28/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n028.jpg",
      "cap": "Protocol page 28 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 29 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 Cycle 3 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 1 8 1 5 2 2 1 8 1 5 2 2 Last dose + 28d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Blood sample for cfDNA pre - do se X pre - do se predos e, C3 D1 onl y X Every 12 weeks after the last dose",
        "of actinium-225 D W J 155 treatment during Disease progression FU Urine sample for renal biomarkers pre - do se pre - do se predos e X Assessment to be recorded in the clinical database or received electronically from a vendor S Assessment to be recorded in the source documentation only 1 Eligible for off-site delegation.",
        "2 Required only if most recent prior hematologic assessment shows CTCAE grade 2 or higher neutropenia or thrombocytopenia, or CTCAE grade 3 or higher anemia. 3 Before and 0-30 min after gallium-68 D W J 155 and actinium-225 D W J 155 administration 4 Serum pregnancy test to be collected within 72h prior to actinium-225 D W J 155 administration except at end of treatment when it will be collected on the day of study visit.",
        "A monthly urine pregnancy test is required for 8 months after the last actinium-225 D W J 155 administration 5 Refer to Section 8.4.3 for ECG collection timepoints 6 Collections to take place at least 1 day prior to gallium-68 D W J 155 administration 7 Only non serious AEs related to actinium-225 D W J 155 treatment and S A Es regardless of causality are to be reported to Novartis.",
        "If a new post-treatment antineoplastic therapy has been administered, then only S A Es related to actinium-225 D W J 155 treatment are to be reported to Novartis. Follow local law/regulations if requirements differ. Please refer to Section 8.10.1 and Section 8.10.3 for details.",
        "8 Only S A Es related to actinium-225 D W J 155 treatment and S A Es of second primary malignancies regardless of causality are to be reported to Novartis, unless otherwise specified by local law/regulations.. Please refer to Section 8.10.3."
      ],
      "chips": [
        "CPBQ663A12101",
        "p29/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n029.jpg",
      "cap": "Protocol page 29 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 30 of 170 · Table 1-6 Schedule of activities, Treatment and Follow-up period (all participants)…",
      "audio": [
        "Table 1-6 Schedule of activities, Treatment and Follow-up period (all participants) - 8-week schedule Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 2 9 3 6 4 3 5 0 1 8 1 5 2 2 2 9 3 6 4 3 5 0 Last dose + 56d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day",
        "safety FU Physical examinatio n S S S S Weight X X X SpO2 (for Japan only) S S S S S S S S S S ECOG Performan ce Status X X X Chemistry X X X X X X X X X X 1 X 1 X 1 X X1 Hematolog y X X X X X X X X X X 1,2 X 1 X 1,2 X 1 X 1,2 X 1 X 1,2 X X1 Urinalysis X X X X X X X X X X 1 X 1 X 1 X X1 Thyroid function X X Vital signs X3 X X X X X X X X3 X3 Pregnancy test S4 S4 S4 S4 225AcDWJ155 administrat ion X X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p30/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n030.jpg",
      "cap": "Protocol page 30 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 31 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 2 9 3 6 4 3 5 0 1 8 1 5 2 2 2 9 3 6 4 3 5 0 Last dose + 56d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU 68GaDWJ155 administrat ion X 68GaDWJ155 PET C T or PET M R I X ECG5 X X X Cardiac imaging (T T E",
        "or M U G A - T T E preferred) Every 12 weeks (-7 days) after the first dose of actinium-225 D W J 155 treatment until end of treatment. Final reports must be locally reviewed prior to actinium-225 D W J 155 administration, if coinciding with the next administration. X6 Conventio nal imaging for tumor response as per RECIST v1.1 (CT and/or MRI, and other imaging assessme nts as clinically indicated) Every 8 weeks (-7 days) after first dose of actinium-225 D W J 155 treatment.",
        "Radiological report(s) must be locally reviewed prior to actinium-225 D W J 155 administration. Every 12 weeks after the last dose of actinium-225 D W J 155 treatment during Disease progression FU"
      ],
      "chips": [
        "CPBQ663A12101",
        "p31/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n031.jpg",
      "cap": "Protocol page 31 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 32 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 2 9 3 6 4 3 5 0 1 8 1 5 2 2 2 9 3 6 4 3 5 0 Last dose + 56d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Prior/conc omitant medication s, surgery, medical procedures and nondrug therapies Assess",
        "continuously X Adverse events Assess continuously X7 X8 Chest X ray (for Japan only) X Subseque nt antineoplastic therapies X Long term safety follow-up (phone call or visit) X"
      ],
      "chips": [
        "CPBQ663A12101",
        "p32/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n032.jpg",
      "cap": "Protocol page 32 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 33 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 2 9 3 6 4 3 5 0 1 8 1 5 2 2 2 9 3 6 4 3 5 0 Last dose + 56d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Blood sample for soluble factors pr edo se X X pre - dos e, onl y C2 D1 an d C3 D1 X Blood sample",
        "for cfDNA pr edo se X X pre - dos e, onl y C2 D1 an d C3 D1 X Every 12 weeks after the last dose of actinium-225 D W J 155 treatment during Disease progression FU"
      ],
      "chips": [
        "CPBQ663A12101",
        "p33/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n033.jpg",
      "cap": "Protocol page 33 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 34 of 170 · Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and…",
      "audio": [
        "Period Treatment 36 month Long Term Follow-up Visit Name Cycle 1 Cycle 2 (and subsequent cycles) end of treatment 180 day Safety FU Disease progression FU Long Term FU Days 1 8 1 5 2 2 2 9 3 6 4 3 5 0 1 8 1 5 2 2 2 9 3 6 4 3 5 0 Last dose + 56d At 90 and 180 days from last dose Every 90 days from last dose, in parallel to safety FU Every 180 days starting after 180 day safety FU Urine sample for renal biomarkers pr edo se pre - dos e X Assessment to be recorded in the",
        "clinical database or received electronically from a vendor S Assessment to be recorded in the source documentation only 1 Eligible for off-site delegation. 2 Required only if most recent prior hematologic assessment shows CTCAE grade 2 or higher neutropenia or thrombocytopenia, or CTCAE grade 3 or higher anemia.",
        "3 Before and 0-30 min after gallium-68 D W J 155 and actinium-225 D W J 155 administration 4 Serum pregnancy test to be collected within 72h prior to actinium-225 D W J 155 administration except at end of treatment when it will be collected on the day of study visit. A monthly urine pregnancy test is required for 8 months after the last actinium-225 D W J 155 administration.",
        "5 Refer to Section 8.4.3 for ECG collection timepoints 6 Collections to take place at least 1 day prior to gallium-68 D W J 155 administration 7 Only non serious AEs related to actinium-225 D W J 155 treatment and S A Es regardless of causality are to be reported to Novartis. If a new post-treatment antineoplastic therapy has been administered, then only S A Es related to actinium-225 D W J 155 treatment are to be reported to Novartis.",
        "Follow local law/regulations if requirements differ. Please refer to Section 8.10.1 and Section 8.10.3 for details. 8 Only S A Es related to actinium-225 D W J 155 treatment and S A Es of second primary malignancies regardless of causality are to be reported to Novartis, unless otherwise specified by local law/regulations. Please refer to Section 8.10.3."
      ],
      "chips": [
        "CPBQ663A12101",
        "p34/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n034.jpg",
      "cap": "Protocol page 34 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 35 of 170 · Table 1-7 Schedule of activities, Dosimetry and/or PK subgroup Period Treatment…",
      "audio": [
        "Table 1-7 Schedule of activities, Dosimetry and/or PK subgroup Period Treatment Phase Visit Name Cycle 1 Days 1 2 3 4 5 8 15 Time (postdose) Pre actinium-225 D W J 155 admin T0s 1 T0e2 T0e + 30min T0e + 1h T0e + 2h T0e + 4h T0e + 6h T0e + 24h T0e + 48h T0e + 72h T0e + 96h T0e + 168h T0e + 312h 225AcDWJ155 administrati on X ECG3 X +10mi n plus or minus 10min plus or minus 15min SPECT/CT4 plus or minus 1h plus or minus 4h plus or minus 4h plus or minus 6h5 plus or minus 6h6",
        "Blood for PK and HPLC7 +10mi n plus or minus 10min plus or minus 10min plus or minus 15min plus or minus 30min plus or minus 30min plus or minus 2h plus or minus 4h plus or minus 6h5 Urine for PK and HPLC8 0h - 6h( plus or minus 30min) 6h( plus or minus 30mi n) - 24h( plus or minus 2h) 24h( plus or minus 2h) - 48h( plus or minus 4h) 48h( plus or minus 4h) - 72h( plus or minus 4h) 9 X Assessment to be recorded in the clinical database or received electronically from a vendor",
        "1 T0s: start of actinium-225 D W J 155 administration 2 T0e: end of actinium-225 D W J 155 administration 3 Refer to Section 8.4.3 for additional information on ECG assessments.",
        "If clinically indicated as per the investigator’s judgment (e.g., if significant ECG abnormalities are observed at the end of the actinium-225 D W J 155 administration), the collection of ECG assessments at additional post-dose time points coinciding with PK sampling time points per Table 8-4 should be considered. 4 Each participant should void his/her bladder immediately before each SPECT scan.",
        "A precise time window of each acquisition will be informed by emerging data and will be communicated to investigators at time of individual participant enrollment. Refer to Section 8.7.4 and Section 8.7.5 for details on SPECT C T assessments and for additional SPECT C T scans in subsequent cycles, where required by local regulations. 5 Not applicable for dosage level 1 participants. 6 Not applicable for dosage level 1 and dosage level 2 participants.",
        "7 Refer to Section 8.7.1 for detailed information on blood PK assessments. 8 Up to 6 participants in selected cohorts at relevant dosage levels and at dedicated sites. The assignment of a participant will be coordinated by Novartis. Refer to Section 8.7.2 for additional information on urine PK assessments.",
        "9 If the first 3 participants who contribute to urine PK show negligible radioactivity ( less than or equal to 5% of IA) detected in the 48-72h collection interval, this collection interval may be omitted in the remaining participants and it will be communicated to investigators at time of individual participant enrollment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p35/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n035.jpg",
      "cap": "Protocol page 35 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 36 of 170 · §2 Introduction · DWJ155 binds HER2 ECD",
      "audio": [
        "2 Introduction 2.1 Study rationale D W J 155 is a peptide that binds to the H E R 2 extracellular domain with high affinity and includes a metal chelator for radiolabeling with either gallium-68 (gallium-68) for PET imaging or actinium-225 (actinium-225) for therapy.",
        "The purpose of this phase I study is to evaluate the safety, tolerability and preliminary antitumor activity of actinium-225 D W J 155 and the safety of gallium-68 D W J 155 in participants with locally advanced unresectable or metastatic H E R 2+ breast cancer, HR+/H E R 2-negative breast cancer, T N B C, N S C L C, H E R 2 I H C 3+ or I H C 2+ (I S H + or -) G E A, and bladder cancer.",
        "Data and samples will be collected as described to support the study objectives and may also be used to learn more about the study indications and/or treatments. 2.2 Background H E R 2 is a member of the EGFR/ErbB family of receptor tyrosine kinases, which comprises HER1/EGFR, H E R 2, HER3 and HER4 (Loibl and Gianni 2017 and Drago et al 2022).",
        "The oncogenic potential of H E R 2 is well characterized, which most notably occurs via amplification of the H E R 2 genetic locus leading to protein over-expression on the cell membrane (Galogre et al 2023) with resultant poor clinical outcomes (Slamon et al 1987). Immunohistochemistry (I H C) and I S H are the standard assays used to characterize H E R 2 amplification status in tumor tissue (Wolff et al 2023).",
        "However, the accuracy of I H C in the setting of lower levels of H E R 2 expression, particularly the ability to accurately delineate H E R 2 0, H E R 2-ultralow (I H C 0 with weak or incomplete staining in up to 10% of cells), and HER2low (I H C 1+ and 2+/I S H-), may be limited (Rüschoff et al 2022, Baez-Navarro et al 2023, Zaakouk et al 2023, and Lu et al 2022).",
        "Data from a Novartis-developed ultrasensitive H E R 2 I H C assay indicate that nearly all breast cancers, non-small cell lung cancers, GEAs, and bladder cancers express detectable levels of H E R 2 protein, including those scored as 0 by the standard clinical assay using American Society of Clinical Oncology/College of American Pathologists (ASCO CAP) scoring. For details, please refer to the actinium-225 D W J 155 Investigator's Brochure (IB).",
        "All currently approved H E R 2-targeting agents inhibit intracellular receptor signaling (Drago et al 2022 and Stern 2000). Historically, H E R 2-targeted agents have leveraged the protein expression differential between tumor and normal tissue to maximize their therapeutic index.",
        "While this mechanism has been successful in the setting of H E R 2 amplification and genetic dependency, it is less efficacious in tumor types that are either H E R 2 non-amplified or are not dependent on H E R 2 (Krug et al 2005, Gatzemeier et al 2004, and Smit et al 2024). More recently, trastuzumab-based antibody drug conjugates (ADCs) have emerged that also inhibit H E R 2 receptor signaling, but function primarily by delivery of cytotoxic payloads.",
        "These agents have been shown to have superior efficacy in participants with H E R 2-positive disease (Modi et al 2020, Verma et al 2012, and Modi et al 2022). One ADC, trastuzumab-deruxtecan, has recently gained Food and Drug Administration (FDA) tumor agnostic accelerated approval for the treatment of adult participants with unresectable or metastatic H E R 2 I H C 3+ solid tumors who have received prior systemic treatment and have no"
      ],
      "chips": [
        "CPBQ663A12101",
        "p36/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n036.jpg",
      "cap": "Protocol page 36 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 37 of 170 · satisfactory alternative treatment options",
      "audio": [
        "satisfactory alternative treatment options. This same drug has additionally demonstrated efficacy in breast cancer participants with lower levels of H E R 2 expression, including HER2low (Modi et al 2022) and H E R 2-ultralow (Bardia et al 2024). These findings provide proofof-concept that targeting H E R 2 expressing, but non-amplified tumors, is a viable therapeutic strategy.",
        "The side effect profiles of H E R 2-targeting ADCs are substantial and may limit their widespread use, particularly in early disease settings (Abuhelwa et al 2022). 2.2.1 Overview of D W J 155 Radioligands are systemically delivered, radioactively labeled molecules that bind specific cell surface receptors and deliver radiation in a targeted manner (Bodei et al 2022 and Sgouros et al 2020).",
        "Radioligand use in oncology is often through a theranostic approach whereby the same targeting molecule is labeled with a radioisotope for either diagnostic imaging (e.g., gallium-68) or therapy (e.g., actinium-225). Radioligand imaging (RLI) can be used to determine the biodistribution of the molecule as a surrogate for target protein expression in tumor and non-tumor tissue and can be used in participant selection.",
        "On the other hand, radioligand therapies (RLTs) deploy higher energy radioisotopes to damage target cell DNA and induce cell death. The RLT approach is a platform with the potential to provide a novel therapeutic option for participants with tumors expressing H E R 2.",
        "Advantages of actinium-225 RLTs include targeted local delivery of radiation to tumor cells while sparing nearby normal tissues due to the short range of alpha particles (energy deposition range ~100 µm), high linear energy transfer (LET) of alpha particles, and the potential to directly image the biodistribution of RLT molecules using SinglePhoton Emission Computed Tomography (SPECT).",
        "2.2.1.1 Non-clinical experience D W J 155 comprises a peptide molecule, which binds with high affinity (KD in sub-nanomolar range) to the extracellular domain of H E R 2. It is conjugated to a metal chelator for radiolabeling with gallium-68 for Positron Emission Tomography (PET) imaging or actinium-225 for therapy. For a comprehensive overview of the pre-clinical data, please refer to the actinium-225 D W J 155 IB for further details.",
        "Using imaging to identify tumors with lower levels of target expression (such as H E R 2-low breast cancer and N S C L C) requires an imaging agent with high affinity and specificity. Imaging with gallium-68 D W J 155 may improve the accuracy of H E R 2 detection and enable more precise participant selection and stratification by H E R 2 levels, even in the setting of H E R 2-low disease.",
        "Low normal tissue uptake and high tumor uptake and retention is anticipated based on biodistribution studies of actinium-225 D W J 155 in both non-tumor bearing mice and mice bearing breast cancer xenografts. Efficacy of actinium-225 D W J 155 was evaluated in H E R 2-low breast cancer using patient-derived xenograft (PDX) models with ASCO CAP H E R 2 I H C scores ranging from 1 to 2+, I S H negative.",
        "actinium-225 D W J 155 demonstrated compelling single agent activity in all models. In estrogen receptor (ER) positive models, actinium-225 D W J 155 demonstrated superiority to a standard-of-care therapy, fulvestrant and ribociclib. actinium-225 D W J 155 also demonstrated efficacy in H E R 2 expressing N S C L C xenograft models that were superior to the platinumdoublet regimens tested (refer to the actinium-225 D W J 155 IB for further details)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p37/170",
        "Full protocol text"
      ],
      "visual": "theranostic",
      "image": "assets/protocol/cpbq/n037.jpg",
      "cap": "Protocol page 37 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 38 of 170 · §2.3 Benefit / risk · theranostic pair and α dose",
      "audio": [
        "2.3 Benefit/Risk assessment Two investigational drugs will be administered to participants enrolled in this study, 68GaDWJ155 and actinium-225 D W J 155, both containing the identical ligand (D W J 155), labeled with different radioisotopes. The aim is to ultimately develop both as a theranostic pair, using 68GaDWJ155 PET imaging to identify participants who may benefit from treatment with 225AcDWJ155.",
        "The potential benefits of this study are anticipated to be due to radiation delivered by 225AcDWJ155 to sites of disease. actinium-225 D W J 155 has not previously been administered to humans, and the therapeutic effect of actinium-225 D W J 155 to treat participants with cancer is unknown.",
        "However, the potential for efficacy is supported by preclinical data obtained with translationally relevant breast and lung tumor models, where H E R 2 expression level was 1+ or 2+/I S H negative. Treatment with actinium-225 D W J 155 resulted in tumor regression in these models (refer to actinium-225 D W J 155 IB for further details). As with other radioligand therapies and imaging agents, the primary risks from this study relate to radiation exposure.",
        "This comes in three forms: radiation from actinium-225 D W J 155, radiation from gallium-68 D W J 155, and radiation from standard of care (SoC) imaging assessments. All of these elements contribute to a participant's cumulative radiation exposure. actinium-225 D W J 155 radiation exposure The primary risks to participants enrolled in this study are anticipated to be due to radiation delivered by actinium-225 D W J 155 to normal tissues / organs-at-risk.",
        "Organ-specific toxicities are dependent on the absorbed radiation dose and the radiosensitivity of the organ, and anticipated radiation-dependent effects are summarized in the IB (refer to IB section 7.4.3). These risks are considered justified given the high unmet need and poor prognosis of participants on this trial; all participants enrolled on this trial will have advanced cancer with limited life expectancy and will have exhausted standard-of-care treatment options.",
        "The time to development of certain late toxicities from treatment may also be longer than the anticipated survival of many participants on trial.",
        "For example, radiation nephropathy is expected to develop on the order of 6-18 months post-treatment (Parihar et al 2022), while the median overall survival for phase 1 oncology trial participants similar to the anticipated participant population in this trial is less than 12 months (Weiss et al 2020, Goel et al 2024, Menon et al 2022). gallium-68 D W J 155 radiation exposure gallium-68 D W J 155 has not previously been characterized in humans.",
        "Based on extrapolation from preclinical data (refer to gallium-68 D W J 155 IB for further details), in the scenario where 250 megabecquerels or 500 megabecquerels of gallium-68 D W J 155 is administered, the estimated effective dose for the total body is in the range of 7.6 - 8.1 millisieverts and 15.2 - 16.3 millisieverts, respectively, which is below the radiation dose limit of 30 millisieverts for adult participants receiving a single administration, as per the Guidance",
        "for Industry and Researchers, “The Radioactive Drug Research Committee: Human Research Without an Investigational New Drug Application” (FDA 2010), and is approximately the value of maximum allowed effective dose for radiological workers per year of 20 millisieverts. The estimated whole body effective dose is also approximately that of other standard diagnostic techniques (e.g., computed tomography (CT) scan: 14 - 20 millisieverts).",
        "Participants may receive up to 2 administrations of gallium-68 D W J 155 (prior to Cycle 1 and at end of treatment), with estimated and cumulative"
      ],
      "chips": [
        "CPBQ663A12101",
        "p38/170",
        "Full protocol text"
      ],
      "visual": "ac225",
      "image": "assets/protocol/cpbq/n038.jpg",
      "cap": "Protocol page 38 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 39 of 170 · total body effective doses of 15",
      "audio": [
        "total body effective doses of 15.2 - 16.2 millisieverts and 30.4 - 32.6 millisieverts, for clinical radioactivities between 250 megabecquerels and up to 500 megabecquerels per administration, respectively.",
        "SoC imaging assessment radiation exposure As per protocol, participants included in the dosage escalation and dosage expansion will undergo repeated tumor assessments in accordance with the Schedule of Assessments during the study to assess the disease over time by Response Evaluation Criteria in Solid Tumors version 1.1 (RECIST v1.1) criteria. When using CT for performing these tumor assessments, the contribution of a diagnostic CT scan is maximum 20 millisieverts per exam.",
        "Participants associated with radiodiagnostic procedures (including both radiological and nuclear medicine) is classified as moderate according to International Commission on Radiological Protection (ICRP) Publication 62. This risk is considered acceptable given the potential benefit to participants with high unmet medical need (e.g.",
        "advanced breast and lung cancer), and is mitigated by adherence to As Low as Reasonably Achievable (A L A R A) principles, specifically: 1) the conventional diagnostic imaging procedures performed in this study are comparable to those performed in routine clinical practice; 2) the number and time points of PET C T and SPECT C T assessments are restricted to the minimum necessary to characterize the biodistribution of actinium-225 D W J 155 and to evaluate changes in target",
        "expression; 3) the cumulative ionizing radiation exposure from these radiodiagnostic procedures can be considered negligible compared to the exposure resulting from actinium-225 D W J 155 administration. The low mass dose of D W J 155, administered with either gallium-68 D W J 155 or actinium-225 D W J 155, is not expected to have pharmacologic activity.",
        "In the case of D W J 155, this also includes a lack of impact on H E R 2 signaling, as demonstrated in H E R 2-expressing cells (refer to 68GaDWJ155 IB and actinium-225 D W J 155 IB for details). In preclinical safety studies, a non-radioactive mixture of D W J 155 and 175Lu-D W J 155 (used as a cold surrogate for actinium-225) was evaluated as a single administration in rats and dogs.",
        "Notably, an immediate hypersensitivity reaction was seen in 3 of 10 dogs in the high dose group (1.2 mg/kg), which was successfully managed with diphenhydramine treatment. There were no manifestations of a similar reaction in the low dose group (0.3 mg/kg), providing a body surface area-based safety margin of 25-fold (assuming an average of 1.7 m2 participant) at this dosage level relative to a highest foreseeable mass dose of 400 micrograms.",
        "Given the large safety margin (25fold) for this finding and the absence of anaphylactic/anaphylactoid reactions, no standard premedication with an antihistamine (e.g., diphenhydramine) is implemented. This will also inform whether pre-medication with an antihistamine is required for future studies. The protocol recommends following institutional standard of care for the treatment of hypersensitivity (refer to Section 6.6.3 for more information).",
        "Appropriate eligibility criteria, specific dosage-limiting toxicity definitions, dosage modification guidelines, and stopping rules are included in this protocol. Recommended guidelines for the management of adverse events are provided in this protocol and in the 68GaDWJ155 IB and actinium-225 D W J 155 IB. The study's exclusion criteria and study procedures, including clinical monitoring, are set up to minimize risks to participants' safety, and must be adhered to closely.",
        "As in any clinical trial, there may be unforeseen risks which could be serious. An independent data monitoring committee (DMC) will be used during dosage expansion."
      ],
      "chips": [
        "CPBQ663A12101",
        "p39/170",
        "Full protocol text"
      ],
      "visual": "ac225",
      "image": "assets/protocol/cpbq/n039.jpg",
      "cap": "Protocol page 39 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 40 of 170 · Women of child-bearing potential (WOCBP) and sexually active males must be informed…",
      "audio": [
        "Women of child-bearing potential (WOCBP) and sexually active males must be informed that taking the study treatment may involve unknown risks to the fetus if pregnancy were to occur during the trial and agree that in order to participate in the trial, they must adhere to the contraception requirements outlined in the exclusion criteria.",
        "WOCBP are advised not to have children while in the clinical trial and for 8 months after the last administration of 225AcDWJ155, and sexually active men are advised not to have children while in the clinical trial and for 5 months after the last administration of actinium-225 D W J 155. If there is any question that the participant will not reliably comply, they should not be entered or continue in the trial.",
        "2.3.1 Risks and benefits for planned off-site procedures It is not anticipated that participants will be exposed to greater risks when participating in offsite assessments than in on-site assessments.",
        "3 Objectives, endpoints, and estimands 3.1 Objectives and related endpoints Table 3-1 Objectives and related endpoints Objective(s) Endpoint(s) Primary objective(s) Endpoint(s) for primary objective(s) • Assess the safety and tolerability for actinium-225 D W J 155 and identify the recommended dosage(s) (where dosage is defined as administered activity per cycle, total number of cycles and schedule) of actinium-225 D W J 155 for further clinical evaluation • Safety:",
        "Incidence and severity of adverse events (AEs), including dosage limiting toxicities (D L Ts) and serious adverse events (S A Es), changes in laboratory values, vital signs and ECGs • Tolerability: Frequency of dosage interruptions and reductions, dosage intensity Secondary objective(s) Endpoint(s) for secondary objective(s) • Evaluate the preliminary anti-tumor activity of actinium-225 D W J 155 • Overall response rate (ORR), disease control rate (DCR), duration of response",
        "(DOR), and progression-free survival (PFS) based on RECIST v1.1 by local investigator assessment • Characterize the pharmacokinetics (PK) at Cycle 1 of actinium-225 D W J 155 in blood post-secular equilibrium • PK parameters (i.e., Cmax, Tmax, AUC, half-life, CL, volume of distribution in the terminal phase (Vz)) of 225AcDWJ155 in blood • Characterize the safety of 68GaDWJ155 • Incidence and severity of AEs, including S A Es Exploratory objective(s) Endpoint(s) for",
        "exploratory objective(s) • Characterize the imaging properties of gallium-68 D W J 155 • Quantitative assessment (expressed as Standardized Uptake Values (SUVs)) of gallium-68 D W J 155 uptake in normal tissues and selected tumor lesions over time • Characterize the radiation dosimetry of actinium-225 D W J 155 in selected organs and tumor lesions • Absorbed dose-equivalent of actinium-225 D W J 155 in selected organs and tumor lesions • Assess the correlation between",
        "68GaDWJ155 imaging and actinium-225 D W J 155 dosimetry and efficacy and correlate with H E R 2 expression • Expression of H E R 2 in tumor samples, gallium-68 D W J 155 imaging and actinium-225 D W J 155 biodistribution in selected tumor lesions, anti-tumor activity endpoints per RECIST v1.1"
      ],
      "chips": [
        "CPBQ663A12101",
        "p40/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n040.jpg",
      "cap": "Protocol page 40 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 41 of 170 · Objective(s) Endpoint(s) • Comparison of centrally assessed HER2 expression with…",
      "audio": [
        "Objective(s) Endpoint(s) • Comparison of centrally assessed H E R 2 expression with locally assessed H E R 2 status • Expression of H E R 2 in tumor samples from local and central data • Assess the concordance of tumor lesion visualization between different imaging methods • Number of lesions identified using different imaging methods including conventional imaging (contrast or noncontrast diagnostic CT or magnetic resonance imaging (MRI)), gallium-68 D W J 155 PET imaging,",
        "225AcDWJ155 SPECT imaging and 18F-fluorodeoxyglucose (FDG) PET imaging (if available, as part of SOC assessments) • Evaluate the impact of actinium-225 D W J 155 on soluble markers (e.g., soluble H E R 2) and correlation with response • Baseline and post-baseline levels of soluble markers (e.g., H E R 2) in blood and anti-tumor activity endpoints per RECIST v1.1 • Assess baseline genetic characteristics and whole transcriptomic and key protein profiles as potential",
        "predictors of response • Baseline genetic alterations, gene expression, and protein expression profiles in tumor samples and anti-tumor endpoints per RECIST v1.1 • To assess tumor characteristics for potential prognostic markers and/or predictive markers of efficacy and/or resistance • Baseline and post-baseline tumor-associated characteristics compared with anti-tumor endpoints per RECIST v1.1 • Evaluate the association between treatment related changes in novel renal",
        "biomarker levels and established renal function assessments • Change from baseline in novel renal biomarker levels and associations with established renal function markers (e.g.",
        "serum creatinine increase, urine protein increase and/or estimated glomerular filtration rate decrease) • Evaluate the metabolic stability of actinium-225 D W J 155 in blood and urine • Metabolite profiling of blood or plasma and urine samples using high-performance liquid chromatography (HPLC) with radioactivity detection • Assess gallium-68 D W J 155 PET C T imaging before and after starting actinium-225 D W J 155 treatment • Quantitative uptake changes in selected tumor",
        "lesions (if available) between gallium-68 D W J 155 PET C T scans performed at baseline and end of treatment • Characterize the cumulative urine excretion at Cycle 1 of actinium-225 D W J 155 • Quantification of urinary excretion of actinium-225 D W J 155 (percent of injected activity (%IA), renal clearance) • Assess the relationship between cellfree DNA (cfDNA) detection and clinical measurements of response and progression • cfDNA quantification with tumor burden measured",
        "by RECIST v1.1 criteria and other measures of clinical efficacy 3.2 Primary estimands Not applicable. 3.3 Secondary estimands Not applicable."
      ],
      "chips": [
        "CPBQ663A12101",
        "p41/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n041.jpg",
      "cap": "Protocol page 41 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 42 of 170 · §4 Study design · FIH escalation then expansion",
      "audio": [
        "4 Study design 4.1 Overall design This is a first in human, phase I, open-label, multi-center study to evaluate the safety, tolerability, and preliminary activity of single-agent actinium-225 D W J 155 in participants with locally advanced unresectable or metastatic breast cancer, N S C L C, G E A, and bladder cancer. As illustrated in Figure 1-1, the study consists of a dosage escalation part followed by a dosage expansion part.",
        "Once the recommended dosage(s) (RD(s), where dosage is defined as administered activity per cycle, total number of cycles and schedule) of actinium-225 D W J 155 as a single agent for future evaluation are determined, the expansion part may commence. Eligibility confirmation will trigger initiation of actinium-225 D W J 155 central manufacturing and shipment of the dose to the site.",
        "gallium-68 D W J 155 and actinium-225 D W J 155 are considered to be Investigational Medical Products (I M Ps) in this protocol. Participating institutions may require that participants stay overnight at the hospital or another facility to adhere to the intensive assessment schedule (e.g., urine sampling for actinium-225 D W J 155 PK assessments). This decision is guided by local regulations, medical judgment, and participant preference.",
        "Extension of hospitalization may be considered based on the participants' general status assessed by the investigator. Dosage escalation part In the dosage escalation part of the study, several dosage levels of actinium-225 D W J 155 will be evaluated beginning with a 6-week schedule. The provisional dosage levels are shown in Table 6-2.",
        "In the first dosage level (DL1), participants will receive an administered activity of 2 megabecquerels of actinium-225 D W J 155 (refer to Section 4.3.1) per cycle for up to 4 cycles. Initiation of actinium-225 D W J 155 treatment between the first two participants in the first dosage level will be staggered by at least 6 weeks to cover the first participant's D L T period prior to dosing the second participant.",
        "Dosing of subsequent participants in this and subsequent dosage levels may proceed concurrently. The first cohort of participants receiving actinium-225 D W J 155 treatment will be participants with H E R 2+ (as determined locally by ASCO CAP scoring) breast cancer. Subsequent participants can be enrolled per broader dosage escalation inclusion criteria (refer to Section 5.1). Each dosage escalation cohort will consist of 3 to 6 newly treated participants.",
        "Additional cohorts at any dosage level at or below the highest administered activity (per cycle and cumulative) previously tested and shown to be safe may be opened (without simultaneously compressing the schedule) to better characterize the safety, tolerability, dosimetry, PK and preliminary anti-tumor activity of actinium-225 D W J 155 (please refer to Section 6.5.3).",
        "Dosage escalation will be guided by a Bayesian Hierarchical Logistic Regression Model (B H L R M) following the escalation with overdose control (E W O C) principle. For further details, please refer to Section 6.5.3 and Section 10.4. Dosage escalation decisions will be based on the totality of data, including but not limited to safety and tolerability and guided by the B H L R M with E W O C. Please refer to Section 6.5.2 for more details."
      ],
      "chips": [
        "CPBQ663A12101",
        "p42/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n042.jpg",
      "cap": "Protocol page 42 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 43 of 170 · Dosimetry assessments will be performed in the first cycle, in approximately 3…",
      "audio": [
        "Dosimetry assessments will be performed in the first cycle, in approximately 3 participants in each cohort (preferably the first three participants) (see Section 8.7 for more details).",
        "In the earlier dosage levels (DL1 and DL2), where injected activity per cycle less than or equal to 4 megabecquerels are planned, image-based dosimetry from first participant may be reviewed to assess feasibility before additional participants undergo dosimetry, to confirm feasibility of the analysis. Refer to Section 6.1.3 for details about treatment duration and to Section 6.5 for details on regimen.",
        "Dosage expansion part Once the RD(s) have been determined from the escalation part, additional participants will be enrolled in the expansion part to further characterize the safety, tolerability, PK, dosimetry and preliminary anti-tumor activity of actinium-225 D W J 155.",
        "Expansion groups may investigate different activities and schedules depending on the participant population being enrolled, as informed by totality of data and analysis conducted during the escalation part of the study. Dosage expansion may begin only after consideration by the investigators and Novartis of the available safety, preliminary anti-tumor activity data, and the assessment of risk to future participants. The expansion part will include groups based on tumor type.",
        "Participants with breast cancer will be in separate groups based on the following baseline molecular characteristics by ASCO CAP scoring: H E R 2-positive (I H C 3+ or 2+/I S H+), HR+/H E R 2-low (I H C 2+/I S H- or I H C 1+), HR+/H E R 2 I H C 0, HR-/H E R 2-low (I H C 2+/I S H- or I H C 1+), and HR-/H E R 2 I H C 0.",
        "Separate groups exist for participants with N S C L C with A G As, N S C L C without A G As, H E R 2 I H C 3+ or I H C 2+ (I S H+ or -) G E A, and bladder cancer. To be eligible for treatment with 225AcDWJ155, all participants with N S C L C and bladder cancer must have at least one measurable lesion per RECIST v1.1 that shows gallium-68 D W J 155 uptake higher than surrounding tissues on PET C T or PET M R I as determined by local investigator.",
        "Pending emerging data, not all dosage expansion groups need to be opened or may be opened in a staggered fashion. If cumulative study data (including but not limited to safety, tolerability, PK, dosimetry, and/or preliminary anti-tumor activity) from dosage escalation support more than one actinium-225 D W J 155 dosage (where dosage is defined as administered activity per cycle, total number of cycles and schedule), these may be investigated in selected expansion groups.",
        "In this case, up to four additional group(s) of participants may be opened (with approximately 15-20 participants each). Dosimetry and PK data may be further acquired in a subset of participants in each expansion group.",
        "The dosimetry and PK data collected from participants treated in the dosage escalation part will be analyzed as a single population to inform on optimal schedule of SPECT C T scans and PK assessments that are needed to accurately derive dosimetry and PK parameters in participants in dosage expansion, assuming no influence of administered activity on these parameters. A DMC will be included for the expansion part of the study (Section 10.1.4)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p43/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n043.jpg",
      "cap": "Protocol page 43 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 44 of 170 · Protocol body · page 44",
      "audio": [
        "4.2 Scientific rationale for study design Table 4-1 Rationale for study design Key Study Design Aspect Rationale Overall (phase I, open-label study) The dosage escalation allows the RD(s) to be established and will be guided by B H L R M together with all available data including safety, tolerability, PK, dosimetry and preliminary efficacy. The B H L R M along with the E W O C principle (Babb et al 1998) will control the risk of D L T in future participants on study.",
        "The dosage escalation part will support the determination of a range of activities and regimens to be further explored during expansion part. The expansion part is designed to assess the preliminary anti-tumor activity, as well as to further confirm the safety and tolerability of actinium-225 D W J 155 at the RD(s) established from the dosage escalation part in the defined participant populations.",
        "Dosage expansion in selected population The dosage expansion in breast cancer, N S C L C, G E A, and bladder cancer were selected based on the tumor molecular epidemiology demonstrating H E R 2 expression and preclinical efficacy data in HER2expressing tumors. Given the strong biologic rationale in these cancer types, the safety and preliminary antitumor efficacy of actinium-225 D W J 155 will be explored in these indications. The opening of each expansion group is optional.",
        "Participant selection based on H E R 2 expression H E R 2 expression (by I S H and I H C) will be used to determine participant eligibility for breast cancer and G E A as H E R 2 expression data is widely available for participants with these diseases. For breast and gastric cancer, the level of H E R 2 expression required for inclusion is based on settings where other H E R 2-directed therapies have shown efficacy.",
        "H E R 2 expression (by I H C) will also be allowed to determine participant eligibility for N S C L C given that gallium-68 D W J 155 may not yet be fully characterized when participants are being enrolled during escalation. For N S C L C, a H E R 2 expression cutoff of I H C 1+ by ASCO CAP scoring is used based on preclinical data showing benefit in I H C 1+ N S C L C mouse xenograft models.",
        "Participant selection based on gallium-68 D W J 155 PET imaging Participant selection based on gallium-68 D W J 155 PET uptake is in line with the theranostic principle and may increase the likelihood of actinium-225 D W J 155 treatment efficacy. In this study, selection based on 68GaDWJ155 PET uptake is implemented for N S C L C and bladder cancer as H E R 2 expression data (I S H/I H C) is not as widely available for these diseases.",
        "4.2.1 Patient input into design Patient advocates for breast cancer and N S C L C, representing different global regions, were consulted for a trial with similar indications. The results of the consultation that have been implemented are listed below:"
      ],
      "chips": [
        "CPBQ663A12101",
        "p44/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n044.jpg",
      "cap": "Protocol page 44 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 45 of 170 · §4.3.1 Starting ²²⁵Ac activity 2 MBq (54 µCi)",
      "audio": [
        "• Collection of smoking history for all study indications in screening (no longer NSCLCspecific) • Development of social impact strategy for dosage expansion to ensure a representative group of participants • Participants with asymptomatic brain metastases will be included in the trial, if they are on a stable steroid dose, if steroids are indicated.",
        "4.3 Justification for dosage 4.3.1 Dosage of actinium-225 D W J 155 The starting administered activity of actinium-225 D W J 155 in this study will be 2 megabecquerels (54 microcuries). The range of mass doses anticipated to be tested in this first in human study is supported by the nonclinical safety data obtained in GLP single dose toxicity studies using a non-radioactive formulation.",
        "The mass dose of D W J 155 ligand associated with the starting administered activity is approximately 40 micrograms. At constant specific activity of actinium-225 D W J 155, the mass dose of D W J 155 will increase with escalation of the administered activity per cycle.",
        "Based on conservative assumptions, the human exposures (Cmax and AUC) at the starting mass dose of 40 micrograms and at highest foreseeable mass doses up to 400 micrograms, are predicted to be 50-fold (AUC) and 90-fold (Cmax) lower and 5-fold (AUC) and 9-fold (Cmax) lower, respectively, than the AUC and Cmax at the no observed adverse effect level (NOAEL) of (cold) 175Lu-D W J 155 in the most sensitive species (dog) (actinium-225 D W J 155 IB).",
        "The selected 2 megabecquerels starting administered activity is anticipated to have high margins in radiation dose in normal organs relative to established dose constraints for External Beam Radiation Therapy (EBRT) and/or radiopharmaceutical therapies, based on translational dosimetry from preclinical studies, as described below.",
        "A mouse‑to-human dosimetry extrapolation was derived from a biodistribution study in naive female mice conducted with actinium-225 D W J 155, and two different extrapolation methods (relative mass scaling (RMS) and combined mass and time scaling (CMTS)) have been used to estimate human radiation doses for actinium-225 D W J 155 in normal organs.",
        "For alpha particles emitted from actinium-225, a relative biological effectiveness (RBE) value of 5 is commonly used for an estimate of the absorbed dose-equivalent in clinical practice (Sgouros et al 2020, Kratochwil et al 2017). Based on known H E R 2 expression in normal organs and translational dosimetry, the organs anticipated to have the narrowest margins in regards to established organ constraints are kidney, red marrow, and ovaries.",
        "The estimated radiation absorbed dose-equivalent to major human target organs for an administered activity of 2 megabecquerels are significantly below established dose constraints for those organs, with margins for all tissues including red marrow (25%), ovaries (9%), and kidneys (7.4%) and less than or equal to 2% in all remaining organs/ tissues, when using the most conservative estimate from the two extrapolation methods (actinium-225 D W J 155 IB).",
        "At the selected dosage in DL1, consisting of 2 megabecquerels administered over 4 cycles and a cumulative administered activity of 8 megabecquerels, the cumulative absorbed dose across organs is anticipated to remain within established organ tolerance constraints. Refer to Section 6.5.1 and Section 6.5.2 for more details on the starting dosage and provisional dosage levels. Final decision regarding the escalation of the administered activity and"
      ],
      "chips": [
        "CPBQ663A12101",
        "p45/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n045.jpg",
      "cap": "Protocol page 45 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "Start 2 MBq (54 µCi). Mass dose ~40 µg at that activity, up to ~400 µg if activity climbs.",
        "Margins vs NOAEL of cold ¹⁷⁵Lu-DWJ155 in dog; radiation, not pharmacology, is the risk driver."
      ]
    },
    {
      "title": "Page 46 of 170 · administration frequency will be agreed upon at the dosage escalation meetings…",
      "audio": [
        "administration frequency will be agreed upon at the dosage escalation meetings (DEMs) between the investigators and Novartis. Participants in DL1 will receive up to 4 cycles of actinium-225 D W J 155. From DL2, a lower or higher number of cycles may be explored if deemed beneficial and safe, while maintaining comparable cumulative administered activity at that DL, as displayed (Table 6-2).",
        "The specified maximum cumulative activity at the highest dosage level in this study will not exceed 32 megabecquerels. At this cumulative activity, the projected cumulative radiation dose from translational dosimetry is anticipated to exceed EBRT constraints for kidney, red marrow and ovaries, while staying approximately within 30% of these constraints in all other normal organs (see actinium-225 D W J 155 IB).",
        "Justification of the selected maximum cumulative activity, with a focus on risks related to organs where established constraints may be crossed in the context of the participant population treated in this study, is further provided below. In general, EBRT dose constraints have been shown to be too restrictive for RLT, due to multiple factors including the difference in rates of radiation delivery between these modalities (Kiess et al 2024).",
        "In addition, the application of normal organ EBRT thresholds needs to be considered in the context of the limited treatment options for participants enrolled in this first in human study, who progressed after previous lines of standard of care therapy, and the short life expectancy in this participant population. In the kidneys, the predicted absorbed dose-equivalent at the maximum planned cumulative administered activity of 32 megabecquerels is 27 SvRBE=5.",
        "This is only slightly in excess of the conservative 23 Sv EBRT dose constraint for the kidneys, which has been associated with delayed renal toxicity (specifically, a ~5% risk of clinical nephritis at 5 years (Emami et al 1991)). There is a large and growing body of literature supporting a higher renal tolerance dose for radioligand therapies, which are delivered at lower dose rates than EBRT.",
        "Multiple studies of Lu-177-based radioligand therapies have demonstrated reassuring safety at renal absorbed doses significantly exceeding the 23 Sv EBRT dose constraint for the kidneys (Mader et al 2023, van der Zwan et al 2019). Similarly, actinium-225 based radioligand therapies have been reported with a favorable renal safety profile.",
        "In an analysis of 14 metastatic castration-resistant prostate cancer (mCRPC) participants receiving 4 cycles of actinium-225-PSMA617 at radioactive doses up to 0.15 megabecquerels/kg (i.e., a cumulative radioactive dose of up to 42 megabecquerels for a participant of 70 kg), no change in serum creatinine was observed despite an absorbed dose-equivalent to the kidney of approximately 31 SvRBE=5 in some participants (Kratochwil et al 2017).",
        "In another report of 53 participants with advanced prostate cancer who received a median of 3 cycles (range 1-7) of actinium-225-PSMA617 at administered activities of 4-8 megabecquerels per cycle, only 3 participants experienced grade III-IV renal function impairment (2 participants grade III and 1 participant grade IV, all 3 participants presented with suboptimal renal function before start of therapy) (Sathekge et al 2022).",
        "Finally, in a study following long-term outcomes after 225AcDOTATATE as salvage treatment for participants with gastroenteropancreatic neuroendocrine tumors, no renal toxicity was observed in participants (n=57) who received 177Lu-peptide receptor radionuclide therapy (PRRT) therapy prior to actinium-225-DOTATATE (median follow-up of 24 months, range 5-41 months).",
        "The mean cumulative activities of 177Lu-PRRT and 225AcDOTATATE administered in these participants was 25.7 GBq (range 5.5 - 49.5 GBq) and 39.648.6 megabecquerels (range 8.9 - 100 megabecquerels), respectively (Ballal et al 2022). No direct dosimetric analysis is presented in this study. Based on reported absorbed dose in the kidneys for 177Lu-PRRT of"
      ],
      "chips": [
        "CPBQ663A12101",
        "p46/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n046.jpg",
      "cap": "Protocol page 46 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 47 of 170 · Protocol body · page 47",
      "audio": [
        "0.65 Sv/GBq (Novartis 2018) and for actinium-225-DOTATATE of 0.45 SvRBE=5/megabecquerels (Sgouros et al 2023), the estimated cumulative radioactive dose to kidneys from the two radiotherapies at the reported mean administered activities is in the range of 34 - 38 Sv. In the case of red marrow, acute hematologic toxicity in individual participants can be used in lieu of dosimetry to guide treatment.",
        "Acute hematologic toxicity after a single cycle of radioligand therapy is expected to present as a decline in platelets and white blood cells within 4 to 6 weeks of treatment (Dorn et al 2003, Hartung-Knemeyer et al 2012, Vallabhajosula et al 2005, Meredith et al 1992, Bushnell et al 1992).",
        "Strict hold criteria and dosage modification criteria (refer to Section 6.5.5) implemented in this first in human study are designed to prevent re-dosing of participants experiencing acute hematologic toxicities.",
        "Although dose to bone marrow is correlated with hematologic toxicity at the population level prompting a suggested constraint of 2-3 Sv to minimize such toxicity (Wahl et al 2021), the red marrow tolerance dose for radioligand therapies varies significantly between individuals.",
        "This variability is influenced by factors such as prior treatments, the specific isotope used, PK, and tissue-specific target expression; when these factors are not well-characterized, as in the case of a novel radioligand therapeutic, individual tolerance doses are difficult to predict.",
        "Using acute hematologic toxicity to guide dosing decisions in individual participants (when red marrow is the dose-limiting organ) gives confidence that the administered activity will not be unnecessarily limited based on dosimetry alone in participants with a higher tolerance dose. Finally, of note, most data suggesting a red marrow dose constraint of 2-3 Sv to limit hematologic toxicity comes from single-dose treatments.",
        "When dose to red marrow is fractionated over multiple cycles, toxicity is likely lower; for example, a recent study of 20 participants treated with [177Lu]Lu-DOTATATE found that when a cumulative red marrow dose of 0.6 to 2.5 Sv was delivered over 4 cycles, no grade 2 or higher toxicity for platelets, neutrophils, or hemoglobin was observed (Blakkisrud et al 2024).",
        "In the ovaries, the predicted absorbed dose-equivalent at the maximum planned cumulative administered activity of 32 megabecquerels is 4.3 SvRBE=5. An EBRT dose constraint of 3 - 6 Sv to the ovaries is applied in certain clinical situations to minimize the risk of early menopause (Wo and Viswanathan 2009, Chambers et al 1991). Early menopause is considered to be an acceptable risk given the intended participant population of this study.",
        "Finally, the highest allowed total (cumulative) administered activity of actinium-225 D W J 155 (i.e., 32 megabecquerels or lower) will be conditional on supportive safety data.",
        "A 6-week cycle duration has been chosen in DL1 to enable adequate safety monitoring time for onset of potential myelosuppression between cycles and to allow time to recover from any potential myelosuppression, even though hematologic toxicities are not expected at the selected starting administered activity due to anticipated safety margins.",
        "This dosing interval is also in line with that of approved RLTs such as 177Lu-PSMA-617 (Pluvicto®) and of other investigational actinium-225-based RLTs such as actinium-225-PSMA-R2. In addition, to minimize risk to study participants, appropriate eligibility criteria and specific dose-limiting toxicity definitions, as well as participant monitoring, specific dosage modification, and stopping rules are included in this protocol.",
        "The safety of the selected administered activities per cycle and cumulatively across cycles and the treatment schedule will be monitored (including hematology, clinical chemistry, vital signs,"
      ],
      "chips": [
        "CPBQ663A12101",
        "p47/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n047.jpg",
      "cap": "Protocol page 47 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 48 of 170 · AEs, cardiac imaging, and ECGs) with the option, from DL2, of the administration…",
      "audio": [
        "AEs, cardiac imaging, and ECGs) with the option, from DL2, of the administration cycle to be reduced to 4 weeks (every 4 weeks) or to be extended to 8 weeks (every 8 weeks). Administration of every 4 weeks could provide superior benefit-risk to participants treated in this first in human study, with improved disease control by minimizing time for cancer cell repopulation between cycles, if supported by a favorable safety and tolerability profile.",
        "Overall, based on preclinical safety studies, mouse-to-human extrapolation of biodistribution data and Novartis’ experience with other RLTs (e.g., Pluvicto® and of other actinium-225-based RLTs under development such as actinium-225-PSMA-R2 and actinium-225-PSMA-617), the proposed starting administered activity of 2 megabecquerels of actinium-225 D W J 155 to be given over 6 weeks and for up to 4 cycles is considered a safe starting regimen.",
        "The provisional dosage levels and alternative schedules intended to be explored in this first in human trial, as supported by review of safety and tolerability data, will allow characterization of the maximum potential of actinium-225 D W J 155 in this study population.",
        "Specific eligibility criteria, dosage-limiting toxicity definitions, participant monitoring, dosage modification guidelines, and stopping rules included in this protocol are intended to ensure the safety of the study participants.",
        "4.3.2 Activity of gallium-68 D W J 155 Participants will receive two gallium-68 D W J 155 administrations: one after screening but before initiating treatment with actinium-225 D W J 155, and a second one after the last administration of 225AcDWJ155 to understand target expression changes after treatment with the actinium-225 D W J 155.",
        "The proposed starting administered activity is 250 megabecquerels with an acceptable range of 200 to 275 megabecquerels and is in line with approved gallium-68-based RLI agents (Giesel et al 2019, Hennrich, Eder 2021). Pending emerging data, starting administered activity may be adjusted in the range of 150-500 megabecquerels to better capture tumor uptake.",
        "The selected administered activity range of 150 megabecquerels to 500 megabecquerels corresponds to a weight-based activity range of 2.5 megabecquerels/Kg to 8.3 megabecquerels/kg, using a reference body weight of 60 kg. A flat administered activity approach for gallium-68 D W J 155 is followed in this study and emerging data will inform future studies whether body weight-based administered activity is appropriate.",
        "Considering the isotope’s half-life of 68 min, the proposed range of administered activities is considered adequate for obtaining good quality imaging and is expected to be safe. Based on extrapolation from preclinical data (refer to gallium-68 D W J 155 IB for further details), the effective radiation dose is expected to be comparable to approved Ga‑68 imaging agents.",
        "The effective radiation dose of gallium-68 D W J 155 for the total body is estimated to be in the range of 0.031 - 0.033 millisieverts/megabecquerels, which is similar to the values measured for approved gallium-68-based imaging agents such as Netspot® (0.026 millisieverts/megabecquerels, Walker et al 2013) and Locametz® (0.022 millisieverts/megabecquerels, Sandgren et al 2019).",
        "Translational dosimetry conducted from a biodistribution study of gallium-68 D W J 155 in the mouse estimates total body effective doses of 7.6 - 8.1 millisieverts and 15.2 - 16.3 millisieverts, for clinical administered activities between 250 megabecquerels and up to 500 megabecquerels, respectively (for further details refer to the gallium-68 D W J 155 IB).",
        "Participants will receive two administrations of gallium-68 D W J 155 (prior to Cycle 1 and at end of treatment), with estimated total body effective doses of 15.2 - 16.2 millisieverts and 30.4 - 32.6 millisieverts, for administered activities between 250 megabecquerels and up to 500 megabecquerels, respectively.",
        "Per ICRP Publication 62 the level of risk corresponding to the expected maximal effective dose is moderate and justified by substantial level of societal benefit based on development of a potential non-invasive, total body H E R 2"
      ],
      "chips": [
        "CPBQ663A12101",
        "p48/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n048.jpg",
      "cap": "Protocol page 48 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 49 of 170 · expression level diagnostic which is intended to be used as theranostic pair with…",
      "audio": [
        "expression level diagnostic which is intended to be used as theranostic pair with actinium-225 for the treatment of cancer in participants with high unmet medical need (i.e., breast cancer, lung cancer). 4.4 Rationale for choice of control drugs or combination drugs and background therapy Not applicable.",
        "4.5 Purpose and timing of interim analyses/design adaptations No formal interim analysis is planned for the dosage escalation part, however, the dosage escalation design foresees that decisions on future dosage levels based on available data are taken at the end of the D L T period for each dosage level. These are described in Section 6.5.3 and Section 9.8.",
        "At the end of dosage escalation, an integrated analysis of all available safety, tolerability, dosimetry, PK, and preliminary anti-tumor activity data by dosage level will be conducted. The RD(s) will be selected based on a review by Novartis study personnel and investigators of the results of the integrated analyses. The expansion part will then begin as specified in Section 4.1. Study stopping rules will be applied as specified in Section 7.5.",
        "4.6 Public health emergency mitigation procedures During a public health emergency as declared by local or regional authorities e.g., pandemic, epidemic, or natural disaster, mitigation procedures to ensure participant safety and trial integrity may be implemented. Notification of the public health emergency as declared by local or regional authorities should be discussed among investigators and Novartis.",
        "All procedures adapted to the situation must be submitted, if required per local regulations, through a protocol amendment for approval by local or regional Health Authorities and Ethics Committees prior to implementation of mitigation procedures.",
        "4.7 Rationale for planned off-site procedures Off-site lab assessments are possible in this study to minimize burden on participants and offer them increased flexibility to participate in the study from an off-site location (as described in Section 1.3 and defined in Section 10).",
        "4.8 End of study definition Study completion is defined as when the last participant finishes their Study Completion visit and any repeat assessments associated with this visit and supporting the collection of data for the primary outcome measure, have been documented and followed up appropriately by the Investigator. The end of the study will be: 1.",
        "When at least 80% of the participants per disease group in the expansion part have completed the follow-up for disease progression or discontinued the study for any reason and all participants have completed treatment and the 36-month long-term safety followup period; or"
      ],
      "chips": [
        "CPBQ663A12101",
        "p49/170",
        "Full protocol text"
      ],
      "visual": "theranostic",
      "image": "assets/protocol/cpbq/n049.jpg",
      "cap": "Protocol page 49 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 50 of 170 · Protocol body · page 50",
      "audio": [
        "2. In the event of an early study termination decision (see Section 7.6): • The date of that decision if no participants have been enrolled; or • When all enrolled participants have completed the treatment and the 36-month longterm safety follow-up period or have discontinued the study for any reason (in such cases, the study completion for disease progression follow-up evaluations might not be completed), whichever occurs first.",
        "• The disease follow-up evaluations might not be completed if Novartis decides to stop enrollment. In such cases, study completion will be when the treatment period and the safety follow-up have been completed for all participants. Statistical considerations for details of timing of the primary analysis and final reporting of data are available in Section 9.",
        "5 Study population This study will include adult participants with histologically or cytologically confirmed advanced (defined as locally advanced (not amenable to definitive multi-modality therapy including surgery) or metastatic) cancer of one of the types defined below, for whom no standard therapy is available, tolerated, or appropriate in the judgement of the investigator.",
        "Prospective approval of protocol deviations to recruitment and enrollment criteria, also known as protocol waivers or exemptions, is not permitted. 5.1 Inclusion criteria Participants eligible for inclusion in this study must meet all of the following criteria: 1. Signed informed consent must be obtained prior to participation in the study. 2. Male or female participants age greater than or equal to 18 years. 3.",
        "Eastern Cooperative Oncology Group (ECOG) performance status less than or equal to 1. 4. Participants with one of the following histologically or cytologically confirmed and documented malignancies, for whom no standard therapy is available, tolerated, or appropriate in the judgement of the investigator: • Dosage Escalation (first cohort only): a.",
        "Advanced H E R 2+ (last known H E R 2 I H C 3+ or I H C 2+/I S H+ by ASCO CAP) breast cancer following prior therapy in the advanced setting with at least two prior systemic lines of therapy based on local standard of care and investigator assessment, with no limitations to prior lines of treatment. Tumor ER, progesterone receptor (PR), and H E R 2 status must be available in the participant’s medical record. • Dosage Escalation (from second cohort onward): a.",
        "Advanced H E R 2+ (last known H E R 2 I H C 3+ or I H C 2+/I S H+ by ASCO CAP) breast cancer following prior therapy in the advanced setting with at least two prior systemic lines of therapy based on local standard of care and investigator assessment, with no limitations to prior lines of treatment. Tumor ER, progesterone receptor (PR), and H E R 2 status must be available in the participant’s medical record. b.",
        "Advanced HR+/H E R 2-low (last known H E R 2 I H C 1+ or I H C 2+/I S H- by ASCO CAP) breast cancer with disease progression after at least one line of"
      ],
      "chips": [
        "CPBQ663A12101",
        "p50/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n050.jpg",
      "cap": "Protocol page 50 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 51 of 170 · hormone-based therapy in combination with a CDK4/6i and at least one additional line…",
      "audio": [
        "hormone-based therapy in combination with a C D K 4 6 inhibitor and at least one additional line of systemic therapy administered in the advanced setting, unless participant was ineligible to receive such therapy. Participants who have received hormone-based therapy plus C D K 4 6 inhibitor in the adjuvant setting are not required to have received this therapy again in the advanced setting.",
        "Tumor ER, PR, and H E R 2 status must be available in the participant’s medical record. c.",
        "Advanced N S C L C with known H E R 2 I H C greater than or equal to 1+ by ASCO CAP, available in the participant’s medical record, or confirmed tumor positivity based on local assessment of gallium-68 D W J 155 uptake, without known A G As, who have received a platinum-based chemotherapy and an immune checkpoint inhibitor therapy either in combination or in sequence, unless participant was ineligible to receive such therapy. d.",
        "Advanced N S C L C with known H E R 2 I H C greater than or equal to 1+ by ASCO CAP, available in the participant’s medical record, or confirmed tumor positivity based on local assessment of gallium-68 D W J 155 uptake, with A G As, who have received prior treatment with at least a targeted therapy or ADC (if locally approved), platinum-based chemotherapy, and immune-oncologic (IO) therapy if appropriate, unless participant was ineligible to receive such therapy.",
        "• Dosage Expansion: e. Advanced H E R 2+ (last known H E R 2 I H C 3+ or I H C 2+/I S H+ by ASCO CAP) breast cancer following prior therapy in the advanced setting with at least two prior systemic lines of therapy based on local standard of care and investigator assessment, with no limitations to prior lines of treatment. Tumor ER, PR, and H E R 2 status must be available in the participant’s medical record. f.",
        "Advanced HR+/H E R 2-low (last known H E R 2 I H C 1+ or I H C 2+/I S H- by ASCO CAP) breast cancer with disease progression after at least one line of hormone-based therapy in combination with a C D K 4 6 inhibitor and at least one additional line of systemic therapy administered in the advanced setting, unless participant was ineligible to receive such therapy.",
        "Participants who have received hormone-based therapy plus C D K 4 6 inhibitor in the adjuvant setting are not required to have received this therapy again in the advanced setting. Tumor ER, PR, and H E R 2 status must be available in the participant’s medical record. g.",
        "Advanced HR+/H E R 2-0 (last known H E R 2 I H C 0 by ASCO CAP) breast cancer with disease progression after at least one line of hormone-based therapy in combination with a C D K 4 6 inhibitor and at least one additional line of systemic therapy administered in the advanced setting, unless participant was ineligible to receive such therapy.",
        "Participants who have received hormone-based therapy plus C D K 4 6 inhibitor in the adjuvant setting are not required to have received this therapy again in the advanced setting. Tumor ER, PR, and H E R 2 status must be available in the participant’s medical record. h.",
        "Advanced HR-/H E R 2-low breast cancer (T N B C with last known H E R 2 I H C 1+ or I H C 2+/I S H- by ASCO CAP) with disease progression following, or intolerance to, at least two lines of systemic therapy (including cytotoxic chemotherapy, antibody-drug conjugate, targeted therapies and/or IO) for advanced disease, unless participant was ineligible to receive such therapy. Tumor ER, PR, and H E R 2 status must be available in the participant’s medical record."
      ],
      "chips": [
        "CPBQ663A12101",
        "p51/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n051.jpg",
      "cap": "Protocol page 51 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 52 of 170 · Protocol body · page 52",
      "audio": [
        "i. Advanced HR-/H E R 2-0 breast cancer (T N B C with last known H E R 2 I H C 0 by ASCO CAP) with disease progression following, or intolerance to, at least two lines of systemic therapy (including cytotoxic chemotherapy, antibody-drug conjugate, targeted therapies and/or IO) for metastatic disease, unless participant was ineligible to receive such therapy. Tumor ER, PR, and H E R 2 status must be available in the participant’s medical record. j.",
        "Advanced N S C L C with A G As who have received prior treatment with at least a targeted therapy or ADC and platinum-based chemotherapy, and IO therapy if indicated, unless participant was ineligible to receive such therapy. Tumor must be positive for gallium-68 D W J 155 uptake based on local assessment. The number of participants with H E R 2 mutation will be capped at a maximum of n=5 in the Dosage Expansion part of the study. k.",
        "Advanced N S C L C without known A G As who have received a platinum-based chemotherapy and an immune checkpoint inhibitor therapy either in combination or in sequence, unless participant was ineligible to receive such therapy. Tumor must be positive for gallium-68 D W J 155 uptake based on local assessment. l.",
        "Advanced G E A with H E R 2 I H C of 3+ or 2+ (I S H + or -) following disease progression, or intolerance to, all SOC systemic therapies per local guidelines including chemotherapy, targeted agents, IO, and/or ADCs, unless participant was ineligible to receive such therapy. Tumor H E R 2 status must be available in the participant’s medical record. m.",
        "Advanced bladder cancer following disease progression, or intolerance to, all SOC systemic therapies per local guidelines, including chemotherapy, ADCs, and/or immunotherapy, unless participant was ineligible to receive such therapies. Tumor must be positive for gallium-68 D W J 155 uptake based on local assessment. 5. Disease Assessment a. Dosage escalation: Measurable disease as determined by RECIST version 1.1.",
        "Tumor lesions previously irradiated or subjected to other locoregional therapy will only be considered measurable if there is documented disease progression at the treated site after completion of therapy.",
        "• BC only: If no measurable disease is present, then at least one predominantly lytic bone lesion must be present that can be accurately assessed at baseline and is suitable for repeated assessment (participants with no measurable disease and only one predominantly lytic bone lesion that has been previously irradiated are eligible if there is documented evidence of disease progression of the bone lesion after irradiation). b.",
        "Dosage expansion: Measurable disease as determined by RECIST version 1.1. Tumor lesions previously irradiated or subjected to other locoregional therapy will only be considered measurable if there is documented disease progression at the treated site after completion of therapy. 6. Biopsy collection a. Dosage escalation: an archival tumor sample with sufficient tissue is requested (specifications are described in Section 8.8).",
        "If unavailable, the participant must have a site of disease amenable to biopsy during screening period (post gallium-68 D W J 155 PET imaging) and the participant must be willing to undergo a biopsy procedure if safe"
      ],
      "chips": [
        "CPBQ663A12101",
        "p52/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n052.jpg",
      "cap": "Protocol page 52 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 53 of 170 · and medically feasible",
      "audio": [
        "and medically feasible. Exceptions may be considered following documented discussion with Novartis. b. Dosage expansion: The participant must have a site of disease amenable to biopsy and be a candidate for tumor biopsy according to the treating institution’s guidelines. The participant must be willing to undergo a newly obtained tumor biopsy during screening period (post gallium-68 D W J 155 PET imaging) unless medically unsafe or infeasible.",
        "An archival tumor sample may be submitted in lieu of the newly obtained tumor biopsy if it was collected within 6 months prior to screening, with no intervening treatment, and sufficient tissue is available for submission (specifications for these samples are described in Section 8.8). Exceptions may be considered following documented discussion with Novartis.",
        "5.2 Exclusion criteria Participants meeting any of the following criteria are not eligible for inclusion in this study. 1. Out-of-range laboratory values defined as: a. Calculated eGFR < 60 mL/min/1.73m2 measured or calculated using the CKD-EPI 2021 formula for adults b. Total bilirubin > 1.5 x ULN (except for participants with Gilbert’s syndrome who are excluded if total bilirubin > 3.0 x ULN) or direct bilirubin > 1.5 x ULN c.",
        "Alanine aminotransferase (ALT) > 3 x ULN, except for participants with tumor involvement of the liver who are excluded if ALT > 5 x ULN d. Aspartate aminotransferase (AST) > 3 x ULN, except for participants with tumor involvement of the liver who are excluded if AST > 5 x ULN e. Lipase > 1.5 x ULN f. Absolute neutrophil count (ANC) < 1.5 x 109/L g. Hemoglobin < 9 g/dL h. Platelet count < 100 x 109/L 2.",
        "Ongoing treatment with thrombopoietin mimetics, erythroid stimulating agents, or hematopoietic colony stimulating factors (e.g. Granulocyte Colony-Stimulating Factor (GCSF), Granulocyte-Macrophage Colony-Stimulating Factor (GM-CSF), Macrophage Colony-Stimulating Factor (M-CSF)). 3. Use of transfusion support less than or equal to 4 weeks prior to the start of treatment with actinium-225 D W J 155 4.",
        "Impaired cardiac function or clinically significant cardiac disease, including any of the following: a. Clinically significant and/or uncontrolled heart disease such as congestive heart failure New York Heart Association (NYHA) Grade greater than or equal to 2 and requiring treatment b. Uncontrolled hypertension or clinically significant arrhythmia (e.g., ventricular tachycardia), complete left bundle branch block, high-grade AV block (e.g.",
        "bifascicular block, Mobitz type II and third-degree AV block) c. QT interval corrected by Fridericia’s formula (QTcF) > 470 msec (as a mean value of triplicates) on screening ECG or congenital long QT syndrome d. Acute myocardial infarction or unstable angina pectoris < 3 months prior to study entry"
      ],
      "chips": [
        "CPBQ663A12101",
        "p53/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n053.jpg",
      "cap": "Protocol page 53 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 54 of 170 · Protocol body · page 54",
      "audio": [
        "e. Baseline left ventricular ejection fraction (LVEF) < 50% as measured by transthoracic echocardiography (T T E). If T T E cannot be performed, multiple gated acquisition (M U G A) scan is acceptable. 5. Unmanageable urinary tract obstruction or urinary incontinence. If ureteral obstruction can be managed with the placement of ureteral stents, this exclusion criterion does not apply. 6.",
        "Participants with uptake of gallium-68‑D W J 155 in non-tumor tissues or organs that, in the opinion of the investigator, increase the risk associated with actinium-225 D W J 155 treatment, will not be eligible for treatment with actinium-225 D W J 155. This may include, but is not limited to, bone marrow or other normal tissue/organ uptake.",
        "Any decision regarding administration of gallium-68‑D W J 155 and actinium-225 D W J 155, and dosage(s) may be discussed with the Novartis medical team. 7. Known hypersensitivity to any of the investigational drug (gallium-68 D W J 155 or 225AcDWJ155) or their excipients. 8. Prior treatment with any therapeutic radiopharmaceutical. 9.",
        "Treatment with any of the following anti-cancer therapies prior to the first injection of actinium-225 D W J 155 within the stated timeframes: a. < 10 effective half-lives for any imaging radiopharmaceutical b. less than or equal to 4 weeks for EBRT or brachytherapy, or less than or equal to 2 weeks for limited field radiation for palliation (except for lung-directed radiation therapy) c. less than or equal to 6 months for lung-directed EBRT, regardless of primary site d.",
        "less than or equal to 4 weeks for major surgery or participants who have not recovered from the surgical procedure (mediastinoscopy, insertion of a central venous access device, insertion of a feeding tube, and abdominal paracentesis are not considered major surgery) e. less than or equal to 2 weeks for fluoropyrimidine therapy f. less than or equal to 6 weeks for cytotoxic agents with major delayed toxicities, such as nitrosoureas and mitomycin C g.",
        "less than or equal to 30 days for ado-trastuzumab emtansine h. less than or equal to 30 days for trastuzumab i. less than or equal to 30 days for trastuzumab-deruxtecan j. less than or equal to 90 days for pertuzumab k.",
        "less than or equal to 4 weeks or less than or equal to 5 half-lives (whichever is shorter) for chemotherapy or biological therapy (including monoclonal antibodies) or continuous or intermittent small molecule therapeutics or any other non-radiopharmaceutical investigational agent, unless otherwise specified. If an agent in one of the categories above has a specific longer timeframe before starting a new therapy, this longer timeframe applies. 10.",
        "Those who have received 4 or more courses of EBRT to the thorax (exceptions can be made after documented discussions with Novartis). 11. Participants with symptomatic brain metastasis, known leptomeningeal disease, or brain metastases requiring increasing doses of corticosteroids or anti-epileptics within 2 weeks prior to treatment.",
        "Participants with treated brain metastases are allowed if the brain metastases have been stable for greater than or equal to 4 weeks as documented by radiologic imaging. Participants who have had complete surgical resection or received stereotactic radiosurgery will be permitted to enroll in the study provided that they"
      ],
      "chips": [
        "CPBQ663A12101",
        "p54/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n054.jpg",
      "cap": "Protocol page 54 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 55 of 170 · completed treatment greater than 2 weeks prior to study treatment, have recovered…",
      "audio": [
        "completed treatment greater than 2 weeks prior to study treatment, have recovered from treatment, are clinically/neurologically stable and do not require escalating corticosteroid therapy as noted above. If participants require steroids for management of central nervous system (CNS) metastases, they must have been on a stable or decreasing dose of steroids for 2 weeks preceding the first administration of study treatment. 12.",
        "Participants who are receiving systemic corticosteroid treatment for indications other than brain metastases and who are not on a stable dose of corticosteroid equivalent of less than or equal to 10 mg daily prednisone for at least 2 weeks before actinium-225 D W J 155 administration. 13. Participants with a history of or active diagnosis of interstitial lung disease or pneumonitis of greater than or equal to Grade 2. 14.",
        "Clinically uncontrolled pleural effusion that requires pleurocentesis for drainage within 4 weeks before Cycle 1 Day 1. 15. Clinically severe pulmonary compromise, as judged by the investigator, resulting from intercurrent pulmonary illnesses including, but not limited to, any underlying pulmonary disorder, or any autoimmune, connective tissue or inflammatory disorders with pulmonary involvement or prior complete pneumonectomy. 16.",
        "Participants requiring oxygen supplementation. 17. Presence of CTCAE version 5.0 greater than or equal to Grade 2 toxicity due to prior cancer therapy, except for neuropathy (inclusion of participants with neuropathy of less than or equal to Grade 2 is permitted), alopecia, and participants adequately treated for skin rash or with replacement therapy for endocrinopathies. 18.",
        "Any serious uncontrolled infection (acute or chronic), such as but not limited to those caused by bacteria, viruses, or fungi, confirmed by clinical evidence, imaging, and/or relevant positive laboratory tests (e.g., blood cultures, Polymerase Chain Reaction (PCR) for deoxyribonucleic acid (DNA)/ribonucleic acid (RNA)).",
        "Participants with hepatitis B (HBV) or hepatitis C (HCV) infection whose disease is controlled (defined as positive anti-Hepatitis B core antibody (HBc) and negative Hepatitis B virus surface antigen (HBsAg) for HBV and undetectable viral load by real-time PCR for HCV) under antiviral therapy should not be excluded. Testing for HBV or HCV status is not necessary unless clinically indicated or if the participant has a history of HBV or HCV infection.",
        "Participants with human immunodeficiency virus (HIV) infection may be enrolled if the participant is on antiviral therapy for at least 4 weeks prior to enrollment with a viral load of < 400 copies/mL, has a CD4+ T-cell count greater than or equal to 350 cells/μL, and the participant has not had an Acquired Immunodeficiency Syndrome (AIDS)-defining infection in the prior 12 months. 19. Known additional malignancy that is progressing or requires active treatment.",
        "Exceptions include basal cell carcinoma of the skin or squamous cell carcinoma of the skin that has undergone potentially curative therapy or in situ cervical cancer or other tumors that will not affect life expectancy. 20. Inability to complete the needed investigational and standard imaging examinations due to any reason (e.g., severe claustrophobia, inability to lie still for the entire imaging time). 21.",
        "Any other medical condition that would, in the investigator’s judgment, prevent the participant’s participation in the clinical trial due to safety concerns, compliance with"
      ],
      "chips": [
        "CPBQ663A12101",
        "p55/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n055.jpg",
      "cap": "Protocol page 55 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 56 of 170 · clinical trial procedures (including radiation safety precautions), or…",
      "audio": [
        "clinical trial procedures (including radiation safety precautions), or interpretation of study results. 22. Pregnant or breastfeeding women. 23. WOCBP, defined as all women physiologically capable of becoming pregnant from menarche until becoming post-menopausal, unless they have had surgical bilateral oophorectomy (with or without hysterectomy), total hysterectomy or bilateral salpingectomy at least six weeks before taking study treatment.",
        "In the case of oophorectomy alone, the reproductive status of the woman needs to have been confirmed by follow-up hormone level assessment. Women are considered post-menopausal if they have had over 12 months of natural (spontaneous) amenorrhea with an appropriate clinical profile (e.g. hormonal profile confirming menopause and/or age-appropriate history of vasomotor symptoms).",
        "WOCBP are excluded unless they are using highly effective methods of contraception (failure rate < 1% per year) for 12 hours after the administration of gallium-68 D W J 155 and, if applicable, while on actinium-225 D W J 155 and for 8 months after the last administration of actinium-225 D W J 155. In addition, female participants must not donate eggs for the same time periods. Highly effective contraception methods include: a.",
        "Total abstinence (when this is in line with the preferred and usual lifestyle of the participant). Note that periodic abstinence (e.g., calendar, ovulation, symptothermal, post-ovulation methods) and withdrawal are not acceptable methods of contraception. b. Bilateral tubal occlusion or bilateral tubal ligation (at least six weeks before taking actinium-225 D W J 155 treatment). c.",
        "Sterilization (vasectomy) of male partner(s) of the female participant at least 6 months prior to screening provided partner(s) has(have) received medical confirmation of surgical success. d. Use of hormonal methods: • Combined (estrogen and progestogen containing) hormonal contraception associated with inhibition of ovulation; oral, intravaginal or transdermal. • Progestogen-only hormonal contraception associated with inhibition of ovulation: oral, injectable or implantable.",
        "• Intrauterine device (IUD) or intrauterine hormone-releasing system (IUS). In case of use of hormonal contraception, women should have been stable on the same method for a minimum of 3 months before taking actinium-225 D W J 155 treatment. If local regulations deviate from the contraception methods listed above to prevent pregnancy, local regulations apply and will be described in the informed consent form (ICF). 24.",
        "Sexually active males unwilling to use a condom during intercourse while taking 225AcDWJ155 treatment and for 5 months after the last administration of actinium-225 D W J 155. WOCBP partners of sexually active male participants must also use highly effective contraception methods (see above) while the study participant is taking study treatment and for 5 months after the study participant’s last administration of actinium-225 D W J 155.",
        "Sexually active males who receive gallium-68 D W J 155 must use a condom during intercourse for 12 hours after the administration of gallium-68 D W J 155. A condom is required for all"
      ],
      "chips": [
        "CPBQ663A12101",
        "p56/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n056.jpg",
      "cap": "Protocol page 56 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 57 of 170 · sexually active male participants to prevent them from fathering a child AND/OR to…",
      "audio": [
        "sexually active male participants to prevent them from fathering a child AND/OR to prevent delivery of actinium-225 D W J 155 treatment via seminal fluid to their partner. In addition, male participants must not donate sperm for the time period specified above. If local regulations deviate from the contraception methods listed above to prevent pregnancy, local regulations apply and will be described in the ICF.",
        "5.3 Lifestyle considerations Participants will be given instructions in order to minimize radiation exposure to others after actinium-225‑D W J 155 administration. Please refer to Post actinium-225 Instructions: Reducing External Exposure to Others for details.",
        "5.4 Screen failures A screen failure occurs when a participant who consents to participate in the clinical trial and is subsequently found to be ineligible (including ineligible for gallium-68 D W J 155 administration and gallium-68 D W J 155 PET C T or PET M R I) and therefore not entered in the trial. The reason for screen failure should be entered on the applicable eCRF.",
        "Participants who sign an ICF and are considered eligible for gallium-68 D W J 155 imaging but fail to undergo gallium-68 D W J 155 imaging, or received gallium-68 D W J 155 and fail to be started on 225AcDWJ155 treatment for any reason will be considered early terminators. The reason for early termination should be captured on the appropriate disposition eCRF.",
        "If the participant fails to be assigned to treatment, the interactive response technology (I R T) must be notified within 2 days of the screen fail that the participant was not assigned to treatment. Participants who are assigned and fail to start treatment, e.g. participants assigned in error, will be considered an early terminator. The reason should be recorded on the appropriate Case Report Form.",
        "In this situation of screen failure, the investigator must provide a minimal set of screen failure information. Minimal information includes reason for screen failure, demography, medical history, screen failure details, eligibility criteria, and any serious adverse event (S A E) should be recorded on the appropriate eCRF. Data and samples collected from participants prior to screen failure may still be analyzed.",
        "Individuals who do not meet the criteria for participation in this study may be rescreened. Each case must be discussed and agreed with Novartis on a case-by-case basis. In the case where a safety laboratory assessment at screening is outside of the range specified in the eligibility criteria, the assessment may be repeated once prior to gallium-68 D W J 155 administration.",
        "If the repeat value remains outside of the specified range, the participant must be excluded from the study. 5.5 Participant numbering Upon signing the informed consent form, the participant is assigned to the next sequential Participant Number (No.) available. The Participant No.",
        "consists of the Site Number (Site No.) (as assigned by Novartis to the investigative site) with a sequential number suffixed to it, so that each participant is numbered uniquely across the entire database. This number will be"
      ],
      "chips": [
        "CPBQ663A12101",
        "p57/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n057.jpg",
      "cap": "Protocol page 57 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 58 of 170 · retained throughout participation in the trial",
      "audio": [
        "retained throughout participation in the trial. If the participant is rescreened, then a new Participant No. will be assigned. 5.6 Replacement policy Participants will not be replaced on study. All treated participants will contribute to the final analyses.",
        "However, during dosage escalation, if a participant is considered as non-evaluable for the Dose Determining Set (DDS), enrollment of a new participant to the current cohort may be considered in order to support the benefit-risk assessment for dosage-escalation.",
        "6 Study treatment(s) and concomitant therapy 6.1 Description of study treatment(s) and treatment arms For this study, the terms “investigational drug” and/or “radiopharmaceutical(s)” refers to 68GaDWJ155 and/or actinium-225 D W J 155. The term “imaging drug” refers only to gallium-68 D W J 155 and the term “study treatment” refers only to actinium-225 D W J 155.",
        "actinium-225 D W J 155 and the kits for the radiopharmaceutical preparation of gallium-68 D W J 155 will be provided centrally by Novartis. All doses prescribed and administered to participants and all dosage changes during the study must be recorded on the Study Treatment eCRF. Participants who meet all eligibility criteria (Section 5) will receive one administration of 225AcDWJ155 at the beginning of each cycle.",
        "Further details about provisional dosage levels are outlined in Section 6.5.2. Details on requirements for storage, management and administration of investigational drugs, and instructions for participant numbering, prescribing and dispensing are outlined in Section 6.2. No auxiliary medicinal products (AxMP) or additional treatment beyond investigational treatment described in Table 6-1 are included in this trial."
      ],
      "chips": [
        "CPBQ663A12101",
        "p58/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n058.jpg",
      "cap": "Protocol page 58 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 59 of 170 · Table 6-1 Investigational drug Investigational radiopharmaceutical 68Ga-DWJ155…",
      "audio": [
        "Table 6-1 Investigational drug Investigational radiopharmaceutical gallium-68 D W J 155 Diagnostic investigational radiopharmaceutical actinium-225 D W J 155 Therapeutic investigational radiopharmaceutical Type Drug Drug Dose Formulation Solution for IV administration Solution for IV administration Activity 250 megabecquerels (activity to order) Pending emerging data characterizing gallium-68 D W J 155, starting injected activity may be adjusted in the range of 150-500",
        "megabecquerels to better capture tumor uptake.",
        "Provisional activity in the range of 2 megabecquerels to 8 megabecquerels (activity to order) Acceptable activity range at the time of administration 200 - 275 megabecquerels plus or minus 10% of the planned activity Dosage Level(s) N/A (prepared dose corresponds to clinical dose) N/A (prepared dose corresponds to clinical dose) Route of Administration Solution for injection Solution for injection/infusion Use Experimental Experimental Authorization status in EEA No No",
        "Sourcing by Kit for radiopharmaceutical preparation is provided by Novartis Global Clinical Supply (GCS). Solution for injection is prepared at a local or central radiopharmacy. Provided centrally by a vendor on behalf of Novartis. Packaging and Labeling Kit for radiopharmaceutical preparation is a sterile kit containing D W J 155 for radiolabeling with gallium-68.",
        "Each component of the kit for radiopharmaceutical preparation, and the solution for injection will be labeled as required per country requirements. The solution for injection is stored as directed in the label with appropriate containment and shielding. Study treatment will be provided in a Type 1 glass vial. Each lead shielded container (secondary packaging) will be labeled as required per country requirement.",
        "Reference Safety Information (RSI) gallium-68 D W J 155 IB actinium-225 D W J 155 IB 6.1.1 Additional study treatments Not applicable. 6.1.2 Treatment arms/group Not applicable."
      ],
      "chips": [
        "CPBQ663A12101",
        "p59/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n059.jpg",
      "cap": "Protocol page 59 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 60 of 170 · Protocol body · page 60",
      "audio": [
        "6.1.3 Treatment duration In DL1, participants eligible for treatment with actinium-225 D W J 155 will receive up to 4 cycles on a 6-week schedule. From DL2, a lower or higher number of cycles may be explored if deemed beneficial and safe, with the option to reduce the administration cycle to 4 weeks or extend to 8 weeks. Please see Section 6.5.2 for further details.",
        "If a participant experiences drug-related toxicities, administered activity and schedule modifications will be permitted as described in Section 6.5.5. Participants will be discontinued from treatment if they withdraw consent, experience unacceptable toxicity, have confirmed disease progression per RECIST v1.1 based on the local assessment at the site, or at the discretion of the investigator or participant (refer to Section 7).",
        "Participants will be permitted to continue treatment beyond initial disease progression, following documented discussion with investigator (or delegate) and Novartis Medical Monitor, provided they meet each of the following criteria: (i) benefit (or reasonable potential for future benefit) in the opinion of the investigator; (ii) the absence of signs or symptoms indicating rapid progression or symptoms which may require urgent medical intervention (e.g.",
        "symptomatic pleural effusion or spinal cord compression); (iii) tolerance of study treatment including but not limited to the absence of a decline in performance status; (iv) continued treatment should not jeopardize critical interventions to treat/prevent severe complications or prevent participants from receiving adequate care; and (v) the cumulative administered activity does not exceed the allowable administered activity per respective dosage level (see Section 4.3.1 and",
        "Section 6.5.2). Participants who are offered the opportunity to continue study treatment beyond disease progression must be informed of other treatment options with proven benefit, if those exist. The participant’s consent to continue treatment beyond progression must be documented in the participant’s medical record.",
        "Participants who meet the above criteria and continue treatment beyond initial disease progression will continue all study procedures as outlined in the visit evaluation schedule. In case of clinical deterioration or suspicion of worsening disease progression, a follow-up imaging assessment should be performed promptly rather than waiting for the next scheduled assessment.",
        "Participants with evidence of further disease progression on an imaging assessment or who are no longer deriving clinical benefit will be discontinued. 6.2 Preparation, handling, storage, and accountability Each study site will be supplied with investigational drugs in packaging as described in Table 6-1. For details related to preparation, handling and storage of investigational drugs, refer to the appropriate Pharmacy Manual.",
        "For details related to ordering of actinium-225 D W J 155, refer to the ROME manual. For gallium-68 D W J 155, Investigator staff will identify the study medication kits to dispense to the participant by contacting the I R T and obtaining the medication number(s). A unique identifier is printed on the study medication label. Investigational drugs accountability and reconciliation data is recorded in the I R T system and relevant Logs."
      ],
      "chips": [
        "CPBQ663A12101",
        "p60/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n060.jpg",
      "cap": "Protocol page 60 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 61 of 170 · Protocol body · page 61",
      "audio": [
        "6.2.1 Handling of study treatment Investigational drugs must be received by a designated person at the study site, handled and stored safely and properly and kept in a secured location to which only the Investigator and designated site personnel have access. Upon receipt, investigational drugs must be stored according to the instructions specified on the labels and/or in the current gallium-68 D W J 155 and actinium-225 D W J 155 IBs.",
        "Storage of radiopharmaceuticals should be in the original package (lead shielding) to protect from ionizing radiation and in accordance with national regulation on radioactive materials. The radioactive investigational drug will also be locally discarded according to all disposal requirements and local regulations for radioactive materials. Clinical supplies are to be dispensed only in accordance with the protocol.",
        "Technical complaints are to be reported to the respective Novartis Country Organization Quality Assurance (see Pharmacy Manual for details). Medication labels will be in the local language and comply with the legal requirements of each country. They will include storage conditions for the study treatment and expiry date.",
        "The investigator or designated site staff must maintain an accurate record of the shipment and dispensing of investigational drugs in a drug accountability log. The investigator must also provide accountability for locally sourced materials used for administration (e.g., i.v. bags). Monitoring of drug accountability will be performed by field monitors during site or remote monitoring visits, and at the completion of the trial.",
        "The site may destroy and document destruction of unused investigational drugs, drug labels and packaging, as appropriate in compliance with site processes, monitoring processes, and per local regulation/guidelines.",
        "In addition, any radioactive material will be locally discarded according to all disposal requirements and local regulations and will also be documented appropriately: a copy of the completed drug accountability log and disposition certificates will be sent to the Novartis monitor or to the Novartis address provided in the Investigator folder at each site. 6.2.2 Handling of other or additional treatment Not applicable.",
        "6.2.3 Instruction for prescribing and taking study treatment gallium-68 D W J 155 The imaging drug must be prepared for administration in accordance with the Pharmacy Manual and radiation safety regulations. actinium-225 D W J 155 The therapeutic agent is a sterile radiopharmaceutical solution for injection/infusion supplied as a ready-to-use product which must be prepared for administration in accordance with the Pharmacy Manual and radiation safety regulations."
      ],
      "chips": [
        "CPBQ663A12101",
        "p61/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n061.jpg",
      "cap": "Protocol page 61 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 62 of 170 · §6.5.1 Starting activity and ⁶⁸Ga 250 MBq window",
      "audio": [
        "6.3 Measures to minimize bias: randomization and blinding 6.3.1 Treatment assignment, randomization No randomization will be performed in this study. The assignment of a participant to a particular cohort and dosage level in escalation, group in expansion will be coordinated by Novartis. All participants entering the screening phase will be registered in the I R T system.",
        "The investigator or his/her delegate will then contact the I R T once all the inclusion/exclusion criteria have been assessed to confirm whether the participant will start study treatment or not. 6.4 Study treatment compliance gallium-68 D W J 155 and actinium-225 D W J 155 will be administered in the treating institution. This information must be captured in the source document, the appropriate eCRFs, I R T and the Drug Accountability Log.",
        "6.5 Dosage escalation guidelines 6.5.1 Starting activity The starting administered activity of actinium-225 D W J 155 is 2 megabecquerels, to be administered at a 6-week interval, for up to 4 cycles. As described in Section 4.3, gallium-68 D W J 155 will be given as a single administration of approximately 250 megabecquerels with an acceptable range of 200 to 275 megabecquerels.",
        "Pending emerging data, starting administered activity may be adjusted in the range of 150-500 megabecquerels to better capture tumor uptake. A range of plus or minus 10% of the actinium-225 D W J 155 assigned dose should be administered to the participant (as per the pre-administration assay). Refer to Section 4.3.1 for further details on the rational for the selected starting administered activity and schedule.",
        "6.5.2 Provisional dosage levels Table 6-2 describes the actinium-225 D W J 155 starting administered activity and the dosages that may be evaluated during this trial. Except for the first cohort, selection of actual administered activities will be determined based on available clinical safety and toxicity data guided by the B H L R M, following a discussion with participating investigators during DEMs. Dosage escalation will continue until the RD(s) is/are determined.",
        "The administration schedule in DL1 will be 6-week cycles. Based on the totality of data, including but not limited to the B H L R M model, safety, tolerability, and available PK and dosimetry, a different schedule, i.e., 4-week or 8-week, may be explored starting from DL2.",
        "If changing the administration schedule from 6- to 4-week, the starting administered activity per cycle on the 4-week schedule, i.e., the administered activity per cycle at the first instance when the 4-week is explored, will be no higher than the highest administered activity per cycle on the 6-week schedule that has previously been shown to be safe."
      ],
      "chips": [
        "CPBQ663A12101",
        "p62/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n062.jpg",
      "cap": "Protocol page 62 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "²²⁵Ac start: 2 MBq Q6W × up to 4 cycles. ⁶⁸Ga: ~250 MBq (200–275).",
        "Both are IMPs. ⁶⁸Ga is the imaging drug; ²²⁵Ac is the study treatment."
      ]
    },
    {
      "title": "Page 63 of 170 · Each participant is expected to receive up to 4 cycles of 225Ac-DWJ155 in DL1",
      "audio": [
        "Each participant is expected to receive up to 4 cycles of actinium-225 D W J 155 in DL1. A lower or higher number of cycles may be explored from DL2 if deemed beneficial and safe, while maintaining comparable cumulative administered activity at that DL (Table 6-2). Table 6-2 Provisional administered activity levels Dosage level Administered activity per Cycle (megabecquerels) Increment from previous DL No.",
        "Cycles* Cumulative administered activity (megabecquerels) -1** 1 -50% 4 4 1 2 N/A 4 8 2 4 +100% 4 16 3 6 +50% 4 24 4 8 +33% 4 32 *At DL2 and/or higher, a lower or higher number of cycles may be explored if deemed beneficial and safe. ** Dosage level -1 represents treatment dosage for participants requiring a dosage reduction from the starting dosage level. • 3-6 participants per DL with option to open additional cohorts at previously tested DLs.",
        "Additional and/or intermediate dosage levels may be added in order to better characterize safety and preliminary efficacy. Not all dosage levels are required to open. • The administered activity will not exceed 100% from the previously tested safe administered activity per cycle, however, smaller increases may be recommended. • Refer to the Dosage modification Section 6.5.5 for further details.",
        "6.5.3 Guideline for dosage escalations and dosage selection for the Phase 1 expansion The dosage escalation is conducted in order to establish the RD(s) of actinium-225 D W J 155 to be used in the expansion part. Specifically, it is the one or more dosages that in the view of Investigators and Novartis study personnel have the most appropriate benefit-risk as assessed by the review of safety and tolerability, and any available PK, dosimetry, efficacy, and pharmacodynamics.",
        "The maximum tolerated activity (MTA) is the highest administered activity/cycle estimated to have less than 25% risk of causing a dosage-limiting toxicity (D L T) during the D L T evaluation period in more than 33% of treated participants. The dosages selected for the expansion part can be any administered activity and schedule equal to or less than the MTA, and may be declared without identifying the MTA.",
        "Each dosage escalation cohort will start with 3 to 6 newly treated participants. They must have adequate exposure and follow-up to be considered evaluable for dosage escalation decisions (see Section 9 for criteria in the definition of the DDS).",
        "Initiation of actinium-225 D W J 155 administrations between the first two participants in the first dosage level will be staggered by at least 6 weeks to cover the first participant's D L T period prior to treating the second participant. Treatment of subsequent participants in these and subsequent dosage levels may proceed concurrently. Dosage escalation decisions will be made when all participants in a cohort have completed the D L T evaluation period or discontinued.",
        "However, in cases where at least three participants are already evaluable for the DDS, and all the conditions below are satisfied:"
      ],
      "chips": [
        "CPBQ663A12101",
        "p63/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n063.jpg",
      "cap": "Protocol page 63 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 64 of 170 · • there is a maximum of one additional participant treated and ongoing in that…",
      "audio": [
        "• there is a maximum of one additional participant treated and ongoing in that cohort who is not evaluable for DDS yet • the possible D L T outcome of the remaining last participant does not impact the administered activity(ies) recommendation for the next cohort as per the escalation criteria guided by B H L R M with E W O C The DEM decision may be performed before such participant completes the D L T evaluation period or discontinues.",
        "For the 6-week schedule, the D L T evaluation period is 6 weeks starting from the first administration of actinium-225 D W J 155. For the 4-week and 8-week schedule, the D L T evaluation period is 4 weeks and 8 weeks, respectively, starting from the first administration of actinium-225 D W J 155.",
        "Decisions on whether to increase the administered activity/cycle, cumulative administered activity and the treatment schedule will be made by Investigators and Novartis study personnel in a dosage-escalation teleconference, and will be based on primarily the available safety data, including toxicity. Available preliminary efficacy, PK and dosimetry data will also be reviewed.",
        "To date, dosimetry of actinium-225 remains challenging due to the low photon emission probability in the actinium decay chain at the low administered activity/cycle. Initial studies demonstrated feasibility of dosimetry of actinium-225 RLTs in experimental settings (Delker et al 2023, Liubchenko et al 2024). Detailed information on dosimetry and PK assessments is presented in Section 8.7.",
        "Any dosage escalation decisions made by Investigators and Novartis personnel will not exceed the dosage level satisfying the E W O C principle by the B H L R M. In all cases, the administered activity per cycle for the next escalation cohort will not exceed a 100% increase from the previously tested safe administered activity.",
        "However, smaller increases in administered activity may be recommended by the Investigators and Novartis upon consideration of all the available clinical data (see Section 6.5.2 for planned increases for DL3 and DL4). The administration schedule in DL1 will be in 6-week cycles. Based on the totality of data, including but not limited to the B H L R M model, safety and tolerability, a 4-week or 8-week schedule may be explored in DL2.",
        "The same schedule will be adopted for subsequent cohorts, or a different schedule may be adopted.",
        "To better understand the safety, tolerability, PK, pharmacodynamics, or anti-tumor activity of actinium-225 D W J 155 before or while proceeding with further escalation, additional cohorts of 1 to 6 participants (or 1 to 12 participants at administered activities that are candidates for RD declaration), (e.g., in select indications), may be enrolled at any dosage level at or below the highest administered activity previously tested and shown to be safe.",
        "To reduce the risk of exposing participants to an overly toxic dosage, when 2 participants experience a D L T in a new cohort, the B H L R M will be updated with the most up-to-date new information from all cohorts, without waiting for all participants from the current cohort to complete the evaluation period.",
        "• If the 2 D L Ts occur in a cohort of participants treated at a new administered activity level, enrollment to that cohort will stop, and the next cohort will be opened at a lower administered activity level that satisfies the E W O C criteria. If the 2 D L Ts occur in participants with the same cancer diagnosis at a given administered activity level, upon"
      ],
      "chips": [
        "CPBQ663A12101",
        "p64/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n064.jpg",
      "cap": "Protocol page 64 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 65 of 170 · evaluation of all relevant data, an independent dosage escalation strategy may be…",
      "audio": [
        "evaluation of all relevant data, an independent dosage escalation strategy may be implemented for participants with this cancer diagnosis with 2 D L Ts observed. • If the 2 D L Ts occur in a cohort of participants treated at an already tested administered activity level, then upon re-evaluation of all relevant data, additional participants may be enrolled into the open cohorts only if the administered activity still meets the E W O C criteria.",
        "Alternatively, if recruitment to the same administered activity level cannot continue, a new cohort of participants may be recruited to a lower administered activity that satisfies the E W O C criteria.",
        "In the event that an administered activity associated with a specific dosage level is not deemed acceptable for newly enrolled but untreated participants, ongoing participants may continue treatment at that dosage level at the discretion of the Investigator and Novartis if it is in the best interests of the participant.",
        "Besides the scenario of 2 D L Ts, the current dosage level being tested may be de-escalated based on new safety findings, including but not limited to observing a D L T, before a cohort is completed. Subsequent to a decision to de-escalate, re-escalation may occur if data in subsequent cohorts satisfies the E W O C criteria.",
        "Enrollment into dosage escalation cohorts may continue in parallel with the dosage expansion for other dosage(s) in order to support a better understanding of safety or efficacy (administered activity and schedule) and to gain more information on the exposure-response relationships. In this case, it is possible that an additional RD may be considered in the dosage expansion part. All dosage decisions must be agreed by Investigators and Novartis study personnel.",
        "6.5.3.1 Implementation of dosage escalation decisions To implement dosage escalation decisions, the available toxicity information (including adverse events and laboratory abnormalities that are not D L Ts), the recommendations from the B H L R M, and the available pharmacodynamics information will all be evaluated by the Investigators and Novartis study personnel (including the study physician and statistician) during a dosage escalation decision meeting by teleconference.",
        "Drug administration at the next higher dosage level may not proceed until the Investigator receives written confirmation from Novartis indicating that the results of the previous dosage level were evaluated and that it is permissible to proceed to a higher dosage level.",
        "6.5.4 Definitions of dosage limiting toxicities (D L Ts) A dosage-limiting toxicity (D L T) is defined as any adverse event or abnormal laboratory value as defined in Table 6-3 that occurs within the D L T evaluation period (i.e., first cycle: 4 weeks, 6 weeks or 8 weeks starting from the first administration of actinium-225 D W J 155, depending on the administration schedule) unless clearly and incontrovertibly assessed as due to extraneous circumstances (e.g., underlying",
        "disease, disease progression, intercurrent illness/injury, or concomitant medications). The National Cancer Institute Common Terminology Criteria for Adverse events (NCI CTCAE) version 5.0 will be used for all grading. For the purpose of dosage-escalation decisions, D L Ts will be considered and included in the B H L R M."
      ],
      "chips": [
        "CPBQ663A12101",
        "p65/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n065.jpg",
      "cap": "Protocol page 65 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 66 of 170 · The investigator must notify Novartis immediately of any unexpected CTCAE Grade…",
      "audio": [
        "The investigator must notify Novartis immediately of any unexpected CTCAE Grade greater than or equal to 3 AEs or laboratory abnormalities. Prior to enrolling participants into a higher dosage level, CTCAE Grade greater than or equal to 2 AEs will be reviewed for all participants at the current dosage level.",
        "Table 6-3 Criteria for defining dosage-limiting toxicities A D L T is defined as any of the following AEs or abnormal laboratory value of CTCAE version 5.0 that occurs within the D L T evaluation period (i.e., first cycle: 4 weeks, 6 weeks or 8 weeks starting from the first administration of actinium-225 D W J 155, depending on the administration schedule) unless clearly and inconvertibly assessed as due to extraneous circumstances (e.g., underlying disease, disease",
        "progression, intercurrent illness/injury, or concomitant medications): Hematologic Grade 3 Neutropenia with fever or other clinical symptoms Grade 3 Neutropenia without fever or other clinical symptoms that does not resolve to less than or equal to Grade 1 within 7 days Grade greater than or equal to 4 Neutropenia Grade 3 Thrombocytopenia with clinically significant bleeding Grade greater than or equal to 4 Thrombocytopenia Grade 3 Anemia that does not resolve to Grade less",
        "than or equal to 2 within 7 days in the absence of transfusion Grade greater than or equal to 4 Anemia Nausea, vomiting, or diarrhea Grade 3 nausea or vomiting that does not resolve to Grade less than or equal to 2 within 72 hours of starting optimal anti-emetic therapy Grade greater than or equal to 4 nausea or vomiting Grade 3 diarrhea that does not resolve to Grade less than or equal to 2 within 72 hrs after starting optimal anti-diarrheal therapy Grade greater than or",
        "equal to 4 diarrhea Colitis Grade 2 colitis that does not resolve to Grade less than or equal to 1 within 7 days of starting treatment with corticosteroids Grade greater than or equal to 3 colitis AST, ALT, bilirubin, or alkaline phosphatase Isolated Grade 3 AST or ALT increase (without a combined increase in total bilirubin > 2 x ULN) that does not resolve to Grade less than or equal to 1 within 7 days.",
        "Grade greater than or equal to 2 AST or ALT increase combined with total bilirubin > 2 x ULN, in the absence of cholestasis1 Grade 4 AST or ALT increase Grade greater than or equal to 3 total bilirubin increase in the absence of cholestasis Grade 4 serum alkaline phosphatase increase that does not resolve to Grade less than or equal to 3 within 7 days.",
        "Amylase or lipase Symptomatic Grade greater than or equal to 3 amylase or lipase increase Hypertension Grade 3 hypertension that does not resolve to Grade less than or equal to 1 within 7 days after initiating or intensifying anti-hypertensive treatment Grade greater than or equal to 4 hypertension Electrolytes Grade 3 electrolyte abnormalities that are associated with symptoms Grade 3 electrolyte abnormalities that are not associated with symptoms that do not resolve to",
        "Grade less than or equal to 1 within 72 hours after starting corrective treatment Grade greater than or equal to 4 electrolyte abnormalities"
      ],
      "chips": [
        "CPBQ663A12101",
        "p66/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n066.jpg",
      "cap": "Protocol page 66 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 67 of 170 · Dermatologic Grade 2 bullous disease that does not resolve to less than or equal to…",
      "audio": [
        "Dermatologic Grade 2 bullous disease that does not resolve to less than or equal to Grade 1 within 7 days of starting corticosteroids Grade greater than or equal to 3 bullous disease Grade 3 non-bullous rash without epidermal detachment that does not resolve to Grade less than or equal to 1 within 7 days of starting treatment Grade greater than or equal to 4 rash Fatigue Grade 3 Fatigue that does not resolve to Grade less than or equal to 2 within 7 days Grade greater than",
        "or equal to 4 Fatigue Creatine kinase Grade 3 creatine kinase increase that is symptomatic Grade 3 creatine kinase increase that is associated with evidence of cardiac involvement Grade 3 asymptomatic creatine kinase increase that does not resolve to Grade less than or equal to 1 within 14 days Grade greater than or equal to 4 creatine kinase increase Pneumonitis Grade greater than or equal to 2 pneumonitis Ophthalmologic Grade 2 eye pain or reduction of visual acuity that",
        "does not respond to topical therapy and does not improve to less than or equal to Grade 1 within 14 days after initiating topical therapy Grade 2 eye pain that requires systemic treatment Grade greater than or equal to 3 ophthalmologic AEs Myocarditis Grade greater than or equal to 2 myocarditis AEs not otherwise specified Grade greater than or equal to 3 AEs with the exception of lymphopenia of any grade Other clinically significant toxicities, including a single event or",
        "multiple occurrences of the same event that lead to a dosing delay may be considered to be D L Ts by the investigators and Novartis based on the significance of the adverse event and the duration of the delay.",
        "1 \"Cholestasis” defined as: Alkaline Phosphatase (ALP) elevation (> 2 times ULN and R value< 2) in participants without bone metastasis, or elevation of ALP liver fraction in participants with bone metastasis Note: The R value is calculated by dividing the ALT by the ALP, using multiples of the ULN for both values. It denotes the relative pattern of ALT and/or ALP elevation is due to cholestatic or hepatocellular liver injury.",
        "6.5.5 Dosage modifications For participants who do not tolerate the protocol-specified administration schedule, adjustments are permitted in order to allow participants to continue the study treatment. The following guidelines need to be applied: • For each participant, a maximum of two dosage reductions will be allowed, after which the participant will be discontinued from study treatment.",
        "For each participant, once a dosage reduction has occurred, the dosage may not be re-escalated during subsequent treatment cycles. • Dosage reductions to an administered activity below 1 megabecquerels per cycle are not permitted. If a participant does not tolerate this administered activity, treatment must be discontinued.",
        "If a participant requires a delay of > 4 weeks for a participant on a 4-week dosing cycle (or > 6 weeks for a participant on a 6-week dosing cycle or > 8 weeks for a participant on an 8-week dosing cycle) from the intended day of the next scheduled activity"
      ],
      "chips": [
        "CPBQ663A12101",
        "p67/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n067.jpg",
      "cap": "Protocol page 67 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 68 of 170 · administration, then the participant must be discontinued from the study unless the…",
      "audio": [
        "administration, then the participant must be discontinued from the study unless the participant experiences clinical benefit or has reasonable potential for future clinical benefit in the opinion of the investigator. In this case, treatment can be continued at an administered activity agreed upon by Novartis and the investigator.",
        "• The criteria for dosage modifications and dosage interruptions for toxicities considered at least possibly related to study treatment (i.e., adverse drug reactions) are summarized in Table 6-4. All interruptions or changes to study treatment administration must be recorded on the appropriate eCRF. • Events not included in the study protocol or the reference guidance documents should be managed per institutional preference.",
        "• Participants who discontinue the study treatment for a study-related AE or a study-related abnormal laboratory value must be followed as described in Table 6-4. • The Sponsor may consider the totality of safety and tolerability data, including but not limited to acute safety/tolerability in later cycles as well as longitudinal safety after all administrations, when making dosage modifications. These administered activity changes must be recorded on the appropriate CRF.",
        "Table 6-4 Criteria for dosage reduction / interruption and re-initiation of 225AcDWJ155 treatment for adverse drug reactions Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Investigations (Hematologic) Neutropenia (ANC) Grade 2 Consider study treatment hold and discuss with the Novartis Medical Monitor. Monitor at least weekly.",
        "Upon resolution to less than or equal to Grade 1, resume study treatment without dosage modification after discussion with the Novartis Medical Monitor. Grade 3 Hold study treatment and monitor weekly. Upon resolution to less than or equal to Grade 1 within 7 days without growth factor support, resume treatment without dosage modification after discussion with the Novartis Medical Monitor.",
        "Upon resolution to less than or equal to Grade 1 in > 7 days or if growth factor support is given, resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Upon recurrence of greater than or equal to Grade 3 neutropenia after dosage reduction or interruption due to neutropenia, resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor.",
        "Grade 4 Hold study treatment and manage per institutional guidelines. For grade 4 neutropenia < 7 days, upon resolution to less than or equal to Grade 1 resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor."
      ],
      "chips": [
        "CPBQ663A12101",
        "p68/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n068.jpg",
      "cap": "Protocol page 68 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 69 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification For grade 4…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification For grade 4 neutropenia greater than or equal to 7 days, discontinue study treatment. Discontinue study treatment upon recurrence of greater than or equal to Grade 3 neutropenia after one dosage reduction. Febrile neutropenia Grade 3 Hold study treatment and monitor weekly.",
        "Upon resolution of fever and improvement of neutropenia to less than or equal to Grade 1, resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Discontinue study treatment upon recurrence of greater than or equal to Grade 3 neutropenia after dosage reduction due to neutropenia. Grade 4 Discontinue study treatment. Manage per institutional practice. Thrombocytopenia Grade 2 Hold study treatment and monitor weekly.",
        "Upon resolution to less than or equal to Grade 1, resume study treatment. Grade 3 Hold study treatment and monitor weekly. Upon resolution to less than or equal to Grade 1, resume study treatment after discussion with the Novartis Medical Monitor. For Grade 3 associated with major bleeding, discontinue study treatment. Grade 4 Hold study treatment and monitor weekly.",
        "Upon resolution to less than or equal to Grade 1, resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. For Grade 4 associated with major bleeding, discontinue study treatment. Anemia Grade 3 Hold study treatment and monitor weekly. Upon resolution to less than or equal to Grade 2 within 7 days in the absence of transfusion, resume study treatment after discussion with the Novartis Medical Monitor.",
        "Upon resolution to less than or equal to Grade 2 after 7 days, resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Discontinue study treatment upon recurrence of greater than or equal to Grade 3 anemia after one dosage reduction due to anemia. Grade 4 Hold study treatment. Upon resolution to less than or equal to Grade 2 within 7 days, resume study treatment at one lower dosage level. If > 7 days, discontinue study treatment.",
        "Lymphopenia Any grade Treatment-related lymphopenia does not require study treatment hold or discontinuation."
      ],
      "chips": [
        "CPBQ663A12101",
        "p69/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n069.jpg",
      "cap": "Protocol page 69 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 70 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Ocular (uveitis, eye…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Ocular (uveitis, eye pain, blurred vision) Grade 1 Continue study treatment without dosage modification. Ophthalmology consultation. Grade 2 Hold study treatment. Urgent ophthalmology consultation. Upon resolution to less than or equal to Grade 1 may consider resuming study treatment without dosage reduction after discussion with the Novartis Medical Monitor and in consultation with ophthalmology.",
        "Discontinue study treatment upon recurrence of Grade 2 ocular toxicity after one dosage reduction or interruption. Grade 3 or Grade 4 Discontinue study treatment. Urgent ophthalmology consultation. Pulmonary (pneumonitis) Grade 1 Consider study treatment hold. Manage per institutional practice. Consider resuming study treatment upon radiographic evidence of improvement. Grade 2 Hold study treatment and manage per institutional practice.",
        "Upon complete resolution, resumption of study treatment at reduced dosage may be considered following documented discussion and agreement with Novartis. Grade 3 or Grade 4 Discontinue study treatment. Manage per institutional practice. Cardiovascular ECG QTc-Interval prolonged[b] Grade 3 Hold study treatment. Manage per institutional practice.",
        "Upon resolution to Grade less than or equal to 1 or baseline or < 30 msec difference from baseline may resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Baseline ECG refers to the ECG(s) collected at screening. Grade 4 Discontinue study treatment. Hypertension Grade 3 Hold study treatment. Manage per institutional practice.",
        "Upon resolution to Grade less than or equal to 1 or baseline within 7 days, may resume study treatment without dosage modification after discussion with the Novartis Medical Monitor. If > 7 days, may resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Grade 4 Discontinue study treatment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p70/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n070.jpg",
      "cap": "Protocol page 70 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 71 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Left ventricular…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Left ventricular ejection fraction (LVEF) Asymptomatic, absolute decrease in LVEF of 10%- < 20% from baseline and is below 50% Hold study treatment, obtain consultation with Cardiologist, and repeat cardiac imaging after less than or equal to 4 weeks.",
        "If improved to 10% or less from baseline and at least at institutional lower limit of normal (LLN) within 4 weeks, then resume study treatment at one lower dosage level. Monitor LVEF on D1 of each subsequent cycle for at least 3 cycles; if no recurrence of LVEF decline and if agreed by Cardiologist, the frequency may then be decreased to every other cycle.",
        "If not improved to 10% or less from baseline and to at least 50% within 4 weeks, then discontinue participant from study treatment. Grade 3 left ventricular systolic dysfunction Hold study treatment and obtain consultation with Cardiologist. Following resolution of symptoms and recovery of the LVEF to the normal range within 4 weeks, study treatment may be resumed at one lower dosage level, if agreed by Cardiologist.",
        "Repeat echocardiogram 2, 4, 8, and 12 weeks after re-starting study treatment. If no recurrence of LVEF decline and if agreed by Cardiologist, the frequency of LVEF monitoring may then be decreased to the standard schedule per the Schedule of Activities (Section 1.3). If recovery of LVEF to the normal range does not occur within 4 weeks, discontinue study treatment. Other cardiac disorders Grade 2 (except myocarditis) Hold study treatment.",
        "Upon resolution to Grade less than or equal to 1 or baseline, may resume study treatment without dosage modification after discussion with the Novartis Medical Monitor. Grade 2 myocarditis, or Grade greater than or equal to 3 other cardiac disorders Discontinue study treatment. Gastrointestinal Diarrhea/colitis[c] Grade 1 May continue study treatment without dosage modification.",
        "Manage per institutional standard guidelines which should include anti‑diarrheal treatment, consideration of corticosteroid therapy, and hydration. Grade 2 Hold study treatment. GI consultation. Upon resolution to less than or equal to Grade 1 and tapering of steroid requirement to less than or equal to 10 mg prednisone per day, resume study treatment without dosage modification after discussion with the Novartis Medical Monitor. Grade 3 Hold study treatment. GI consultation."
      ],
      "chips": [
        "CPBQ663A12101",
        "p71/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n071.jpg",
      "cap": "Protocol page 71 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 72 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Upon resolution to…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Upon resolution to less than or equal to Grade 1 within 72 hours after optimal therapy and tapering of steroid requirement to less than or equal to 10 mg prednisone per day, consider resuming study treatment without dosage modification after discussion with the Novartis Medical Monitor. If resolved in >72 hours, may resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor.",
        "Discontinue study treatment upon recurrence of Grade 3 diarrhea/colitis after one dosage reduction or interrupt. Grade 4 Discontinue study treatment. AST or ALT elevation Grade 2 AST and/or ALT Consider study treatment hold. Manage per institutional practice. Upon resolution to less than or equal to Grade 1 or baseline, if D L T criteria are not met, consider resuming study treatment without dosage modification.",
        "Upon resolution to less than or equal to Grade 1 or baseline, if D L T criteria are met, resume study treatment at one lower dosage level after discussion with Novartis Medical Monitor. Grade 2 transaminitis with bilirubin > 2 x ULN (unless Gilbert’s syndrome) Discontinue study treatment. Grade 3 AST and/or ALT Hold study treatment hold. Manage per institutional practices.",
        "Upon resolution to less than or equal to Grade 1 or baseline within 7 days, if D L T criteria are not met, consider resuming study treatment without dosage modification after discussion with the Novartis Medical Monitor. If resolved in > 7 days, if D L T criteria are NOT met, consider resuming study treatment at one lower dosage level after discussion with the Novartis Medical Monitor.",
        "If resolved in > 7 days, if D L T criteria are met, resume study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Grade 4 AST and/or ALT Discontinue study treatment. Isolated total bilirubin elevation Grade 2 Consider study treatment hold. Upon resolution to less than or equal to Grade 1, may continue study treatment without dosage modification. Grade 3[d] Hold study treatment.",
        "Upon resolution to less than or equal to Grade 1, may consider resuming study treatment at one lower dosage level after discussion with the Novartis Medical Monitor. Discontinue study treatment upon recurrence of Grade 3 isolated total bilirubin elevation after one dosage reduction. Grade 4[d] Discontinue study treatment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p72/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n072.jpg",
      "cap": "Protocol page 72 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 73 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Isolated Alkaline…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Isolated Alkaline Phosphatase elevation Grade 3 or 4 Hold study treatment and discuss with Novartis Medical Monitor. If workup shows that radiation induced liver disease is suspected, discontinue study treatment.",
        "If workup shows that radiation induced liver disease is not suspected, upon resolution to Grade less than or equal to 1 or baseline, resume study treatment with dosage reduction after discussion and agreement with the Novartis Medical Monitor. Asymptomatic amylase and/or lipase elevation[e] Grade 3, not associated with symptoms or clinical manifestations of pancreatitis Continue study treatment.",
        "If levels do not resolve to less than or equal to Grade 2 within 14 days after the initial report, hold study treatment. Upon resolution to less than or equal to Grade 2, may resume study treatment without dosage modification after discussion with the Novartis Medical Monitor. Pancreatitis Grade 2/radiologic evidence Hold study treatment. Manage per institutional practice.",
        "Upon resolution, may resume study treatment without dosage modification, if no clinical evidence of pancreatitis and after discussion with the Novartis Medical Monitor. Grade 3 or Grade 4 Discontinue study treatment. Renal Serum creatinine Grade 2 Consider study treatment hold. Manage per institutional practice. Upon resolution to less than or equal to Grade 1, may resume study treatment without dosage modification after discussion with the Novartis Medical Monitor.",
        "Grade 3 or 4 Discontinue study treatment. Musculoskeletal Grade 2 or Grade 3 Consider study treatment hold. Consider resuming study treatment without dosage modification upon resolution to less than or equal to Grade 1 with appropriate management. Grade 4 Discontinue study treatment. In some cases, resuming study treatment may be considered after discussion with the Novartis Medical Monitor and consultation with a rheumatologist.",
        "Endocrine Hypothyroidism or hyperthyroidism Grade 2 May continue study treatment without dosage modification. Management per institutional practice. Grade 3 and Grade 4 Hold study treatment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p73/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n073.jpg",
      "cap": "Protocol page 73 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 74 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification May resume therapy…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification May resume therapy following resolution or control with physiologic hormone replacement. Other endocrine disorders Grade 2 and Grade 3 Hold study treatment. May resume study treatment following resolution or control with physiologic hormone replacement. Grade 4 Hold study treatment.",
        "Grade 4 treatment-related endocrinopathies, such as adrenal insufficiency, adrenocorticotropic hormone (ACTH) deficiency, hyper- or hypothyroidism, or glucose intolerance, which resolve or are adequately controlled with physiologic hormone replacement (corticosteroids, thyroid hormones) or glucosecontrolling agents, respectively, may not require discontinuation after discussion with and approval from the Novartis Medical Monitor.",
        "Neurology Grade 1 Consider study treatment hold, particularly for clinical suspicion of Guillain-Barre syndrome, transverse myelitis, or peripheral neuropathy. Grade 2 Hold study treatment. In some cases, resuming study treatment may be considered after discussion with the Novartis Medical Monitor. Discontinue study treatment upon recurrence of Grade 2 neurologic toxicity after one dosage reduction or interruption. Grade 3 or Grade 4 Discontinue study treatment.",
        "Dermatology (rash) Grade 1 Continue study treatment without dosage modification. Topical steroids, antihistamines, topical emollients. Grade 2 Consider holding study treatment. Topical or oral corticosteroids, antihistamines. If study treatment is held and resolution to less than or equal to Grade 1, resume study treatment without dosage modification. Grade 3 or Grade 4 Hold study treatment. Manage per institutional practice.",
        "After resolution to less than or equal to Grade 1, consider resuming study treatment with dosage reduction after discussion with the Novartis Medical Monitor. Bullous dermatitis Hold study treatment. Grade 1-2 bullous dermatitis: discussion with the Novartis Medical Monitor is required before considering resuming study treatment. Grade 3-4 bullous dermatitis: discontinue study treatment.",
        "Stevens-Johnson syndrome (SJS), or Lyell syndrome/toxic epidermal necrolysis (TEN) Permanently discontinue study treatment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p74/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n074.jpg",
      "cap": "Protocol page 74 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 75 of 170 · Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Other laboratory…",
      "audio": [
        "Worst toxicity CTCAE Grade[a] Recommended Dosage Modification Other laboratory adverse events, not specified elsewhere in table and not included in the consensus guidelines Grade 3 or Grade 4 Hold study treatment. Upon resolution to less than or equal to Grade 1 or baseline, resume study treatment without dosage modification.",
        "Isolated Grade 4 electrolyte abnormalities not associated with clinical sequelae and corrected after appropriate management within 72 hours of their onset do not require discontinuation. In the case of Grade 4 electrolyte imbalances associated with clinical sequelae, or not resolved to less than or equal to Grade 1 within 72 hours despite appropriate management, discontinue study treatment.",
        "Other non-laboratory adverse events, not specified elsewhere in table and not included in the consensus guidelines Grade 2 Consider study treatment hold, at investigator discretion. Upon resolution to less than or equal to Grade 1, resume study treatment without dosage modification. Grade 3 Hold study treatment. Upon resolution to less than or equal to Grade 1, resuming study treatment must be discussed with the Novartis Medical Monitor. Grade 4 Discontinue study treatment.",
        "[a] All dosage modifications should be based on the worst preceding toxicity per the Common Toxicity Criteria for Adverse Events (CTCAE) version 5.0. [b] Based on the mean of triplicate ECGs. [c] Note: anti-diarrheal medication is recommended at the first sign of abdominal cramping, loose stools, or overt diarrhea.",
        "[d] Note: If Grade 3 or 4 hyper-bilirubinemia is due to the indirect (non-conjugated) component only, and hemolysis as the etiology has been ruled out as per institutional guidelines (e.g., review of peripheral blood smear and haptoglobin determination), then delay study treatment until resolved to less than or equal to Grade 1, and resume study treatment at the discretion of the investigator.",
        "[e] Note: A CT scan or other imaging study to assess the pancreas, liver, and gallbladder must be performed within one week of the first occurrence of any greater than or equal to Grade 3 of amylase and/or lipase elevation.",
        "6.5.6 Follow-up for toxicities Participants whose treatment is interrupted or permanently discontinued due to an AE or clinically significant laboratory value must be followed-up at least once a week (or more frequently if required by institutional practices, or if clinically indicated) for 4 weeks, and subsequently at approximately 4-week intervals, until resolution or stabilization of the event, whichever comes first.",
        "Please refer to Section 8.9 for more detailed instructions regarding AEs, S A Es and the reporting of these events. 6.5.6.1 Follow up on potential drug-induced liver injury (DILI) cases Participants with transaminase increase combined with total bilirubin increase may be indicative of potentially severe DILI and should be considered as clinically important events and assessed appropriately to establish the diagnosis. The required clinical information, as"
      ],
      "chips": [
        "CPBQ663A12101",
        "p75/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n075.jpg",
      "cap": "Protocol page 75 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 76 of 170 · detailed below, should be sought to obtain the medical diagnosis of the most likely…",
      "audio": [
        "detailed below, should be sought to obtain the medical diagnosis of the most likely cause of the observed laboratory abnormalities.",
        "The threshold for potential DILI may depend on the participant’s baseline AST/ALT and total bilirubin value; participants meeting any of the following criteria will require further follow-up as outlined below: • For participants with normal ALT and AST and total bilirubin value at baseline: AST or ALT > 3.0 x ULN combined with total bilirubin > 2.0 x ULN • For participants with elevated AST or ALT or total bilirubin value at baseline: [AST or ALT > 3.0 x baseline] OR [ALT or",
        "AST > 8.0 x ULN], whichever occurs first, combined with [total bilirubin > 2.0 x baseline AND > 2.0 x ULN] As DILI is essentially a diagnosis of exclusion, other causes of abnormal liver tests should be considered and their role clarified before DILI is assumed to be the cause of liver injury.",
        "A detailed history, including relevant information such as review of ethanol consumption, concomitant medications, herbal remedies, supplement consumption, history of any preexisting liver conditions or risk factors, should be collected. Laboratory tests should include ALT, AST, total bilirubin, direct and indirect bilirubin, Gamma-glutamyl Transferase (GGT), prothrombin time (PT)/International Normalized Ratio (INR), alkaline phosphatase, albumin, and creatine kinase.",
        "Testing of Glutamate Dehydrogenase (GLDH) is additionally recommended unless unavailable. Evaluate status of liver metastasis (new or exacerbation) or vascular occlusion, e.g., using CT, MRI, or duplex sonography. Perform relevant examinations (Ultrasound or MRI, Endoscopic retrograde cholangiopancreatography (ERCP)) as appropriate to rule-out an extrahepatic cause of cholestasis.",
        "Cholestasis (is defined as an ALP elevation > 2.0 x ULN with R value < 2 in participants without bone metastasis, or elevation of the liver-specific ALP isoenzyme in participants with bone metastasis). Note: The R value is calculated by dividing the ALT by the ALP, using multiples of the ULN for both values.",
        "It denotes whether the relative pattern of ALT and/or ALP elevation is due to cholestatic (R less than or equal to 2), hepatocellular (R greater than or equal to 5), or mixed (R > 2 and < 5) liver injury. For children, there are caveats to calculating the R-ratio as normal levels of ALP are higher than in adults with standard ranges varying by developmental age.",
        "In clinical situations where it is suspected that ALP elevations are from an extrahepatic source, the GGT can be used if available. GGT may be less specific than ALP as a marker of cholestatic injury, since GGT can also be elevated by enzyme induction or by ethanol consumption. It is more sensitive than ALP for detecting bile duct injury.",
        "Table 6-5 provides guidance on specific clinical and diagnostic assessments which can be performed to rule-out possible alternative causes of observed liver function test (LFT) abnormalities."
      ],
      "chips": [
        "CPBQ663A12101",
        "p76/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n076.jpg",
      "cap": "Protocol page 76 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 77 of 170 · Table 6-5 Clinical and diagnostic assessments for liver-related disorders Disease…",
      "audio": [
        "Table 6-5 Clinical and diagnostic assessments for liver-related disorders Disease Assessment Hepatitis A, B, C, E • Immunoglobulin (Ig)M anti-hepatitis A virus (HAV); HBsAg, IgM & IgG anti-hepatitis B core antibody (HBc), HBV DNA; anti-HCV, HCV RNA, IgM & IgG anti-hepatitis E virus (HEV), HEV RNA Cytomegalovirus (CMV), Herpes Simplex Virus (HSV), Epstein-Barr Virus (EBV) infection • IgM & IgG anti-CMV, IgM & IgG anti-HSV; IgM & IgG anti-EBV Autoimmune hepatitis • Antinuclear",
        "Antibodies (ANA) & Anti-Smooth Muscle Antibody (ASMA) titers, total IgM, IgG, IgE, IgA Alcoholic hepatitis • Ethanol history, GGT, mean corpuscular volume (MCV), Carbohydrate deficient (CD)-transferrin Nonalcoholic steatohepatitis • Ultrasound or MRI Hypoxic/ischemic hepatopathy • Medical history: acute or chronic congestive heart failure, hypotension, hypoxia, hepatic venous occlusion. Ultrasound or MRI. Biliary tract disease • Ultrasound or MRI, ERCP as appropriate.",
        "Wilson disease (if <40 yrs old) • Caeruloplasmin Hemochromatosis • Ferritin, transferrin Alpha-1-antitrypsin deficiency • Alpha-1-antitrypsin Other causes should also be considered based upon participants’ medical history (hyperthyroidism / thyrotoxic hepatitis - triiodothyronine (T3), thyroxine (T4), thyroidstimulating hormone (TSH); cardiovascular disease / ischemic hepatitis - ECG, prior hypotensive episodes; Type 1 diabetes mellitus / glycogenic hepatitis).",
        "Obtain PK sample to determine exposure to study treatment and metabolites. Following appropriate causality assessments, as outlined above, the causality of the treatment is estimated as \"probable\" (e.g., >50% likely), if it appears greater than all other possible causes of liver injury combined.",
        "All cases confirmed on repeat testing that meet the laboratory criteria defined above, with no other alternative cause for LFT abnormalities identified, should be considered as \"medically significant\" and thus, meet the definition of S A E and should be reported as a S A E using the term \"potential treatment-induced liver injury\". All events should be followed up with the outcome clearly documented.",
        "6.6 Concomitant and other therapies In order to determine if pre-medication is necessary, participants should not receive premedication to prevent an infusion reaction before the first administration of actinium-225 D W J 155 or gallium-68 D W J 155. If a participant experiences an infusion-associated reaction, the participant may receive pre-medication on subsequent dosing days.",
        "The pre-medication should be chosen per institutional practice at the discretion of the treating physician. Use of diuretics (e.g., furosemide) is allowed if required, to help a participant void before gallium-68‑D W J 155 PET C T or PET M R I imaging acquisition and/or after the last PET C T or PET M R I, at the discretion of the investigator. Use of all diuretics should be captured in the eCRF like other concomitant medications."
      ],
      "chips": [
        "CPBQ663A12101",
        "p77/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n077.jpg",
      "cap": "Protocol page 77 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 78 of 170 · Protocol body · page 78",
      "audio": [
        "6.6.1 Concomitant therapies In general, concomitant medications and therapies deemed necessary for the supportive care (e.g., anti-emetics, anti-diarrheals) and safety of the participant are allowed. The participant must be told to notify the investigational site about any new medications, herbal remedies, and dietary supplements he/she takes after the start of the study treatment.",
        "All medications, procedures, and significant non-drug therapies (including physical therapy and blood transfusions) administered after the participant was enrolled into the study must be recorded on the appropriate Case Report Forms. Each concomitant drug must be individually assessed against all exclusion criteria and prohibited therapy.",
        "If in doubt, the Investigator should contact the Novartis medical monitor before enrolling a participant or allowing a new medication to be started. If the participant is already enrolled, contact Novartis to determine if the participant should continue participation in the study. Vaccines against infectious diseases are allowed.",
        "6.6.1.1 Permitted concomitant therapies requiring caution and/or action Hematopoietic growth factors (e.g., G-CSF, GM-CSF) are not permitted during the D L T period unless the participant has already experienced a D L T. After a D L T has occurred, or after the D L T period, they may be used as per institutional practice. Treatment with erythroid stimulating agents (ESAs) must not be initiated during the D L T period unless the participant has already experienced a D L T.",
        "Transfusions of platelets or red blood cells should be performed as per institutional practice. Systemic corticosteroids are allowed during the study, however, should be used at the lowest dose to control symptoms if required, and discontinued as soon as possible. Topical, inhaled, nasal, and ophthalmic corticosteroids are allowed. Anti-emetics may be used at the discretion of the attending physician. Diarrhea management is per the discretion of the treating physician.",
        "Diarrhea could be managed conservatively with medications such as loperamide. Participants with severe diarrhea should be assessed for intravenous hydration and correction of electrolyte imbalances. Palliative radiation therapy may be used after discussion with Novartis Medical Monitor.",
        "6.6.1.2 Use of bone modifying agents Bisphosphonates and/or denosumab are generally allowed for the management of bone metastasis and osteoporosis provided participants have been on stable doses for at least 2 weeks prior to study entry. However, chronic concomitant bisphosphonate/denosumab therapy for the prevention of bone metastases is not permitted.",
        "If bisphosphonate/denosumab therapy is to be initiated or increased after study entry, disease progression must be excluded and clearly documented, and the rationale discussed with and approved by Novartis. Otherwise, the participant must discontinue study treatment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p78/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n078.jpg",
      "cap": "Protocol page 78 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 79 of 170 · Protocol body · page 79",
      "audio": [
        "6.6.2 Prohibited therapies During the study, participants must not receive other investigational drugs, agents, devices, chemotherapy, or any other therapies that may be active against cancer. 6.6.3 Hypersensitivity Acute allergic reactions should be treated as clinically indicated per institutional practice or the dosage modification guideline (Table 6-4).",
        "In the event of anaphylactic/anaphylactoid reactions, this includes any therapy necessary to restore normal cardiopulmonary status. If a participant experiences a Grade 4 anaphylactic/anaphylactoid reaction following administration of gallium-68 D W J 155 or actinium-225 D W J 155, the participant will discontinue from any further procedures. Such acute allergic reactions will be reported to the Sponsor in an expedited manner.",
        "This should be designated as reportable S A Es regardless of hospitalization, as medically important events. Please refer to S A E reporting Section 8.10.3 for more information. 6.7 Continued access to study treatment after the end of the study Not applicable.",
        "7 Discontinuation of study treatment and participant discontinuation/withdrawal 7.1 Discontinuation of study treatment Discontinuation of study treatment for a participant can be initiated by either the participant or the investigator. The investigator must discontinue study treatment for a given participant if, he/she believes that continuation would negatively impact the participant's well-being.",
        "Study treatment must be discontinued under the following circumstances: • Participant/guardian decision • Any situation in which continued study participation might result in a safety risk • Pregnancy • Death If discontinuation of study treatment occurs, the investigator should make a reasonable effort to understand the primary reason for the participant’s discontinuation of study treatment and record this information.",
        "Participants who discontinue from study treatment agree to return for the end of treatment and follow-up visits indicated in Section 1.3 (Schedule of Activities). The end of treatment visit should be performed 28 days (for participants under 4-week schedule), 42 days (for participants under 6week schedule), or 56 days (for participants under 8-week schedule) after the last administered dose of study treatment.",
        "However, if the decision to permanently discontinue study treatment is made later than 28 days (for participants under 4-week schedule), 42 days (for participants under 6-week schedule) or 56 days (for participants under 8-week schedule) after the last"
      ],
      "chips": [
        "CPBQ663A12101",
        "p79/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n079.jpg",
      "cap": "Protocol page 79 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 80 of 170 · administered dose of study treatment, the EoT visit should be as soon as possible…",
      "audio": [
        "administered dose of study treatment, the end of treatment visit should be as soon as possible within 14 days of the decision to permanently discontinue study treatment. If the participant cannot or is unwilling to attend any visit(s), the site staff should maintain regular telephone contact with the participant, or with a person pre-designated by the participant. This telephone contact should preferably be done according to the study visit schedule.",
        "The following data should be collected at minimum: • New / concomitant treatments • Adverse Events / Serious Adverse Events The Investigator must contact the I R T to register the participant’s discontinuation from study treatment. 7.1.1 Safety follow-up All participants receiving gallium-68 D W J 155 must have safety evaluations 3 days post 68GaDWJ155 administration. Refer to Table 1-3 for further details.",
        "All participants receiving actinium-225 D W J 155 must be followed up for safety for 180 days after the last administration of actinium-225 D W J 155. The follow-up visit should be done at least every 12 weeks (90 days) after the last actinium-225 D W J 155 administration and will include the assessments outlined in Section 1.3.",
        "Following the end of treatment visit (i.e., 28 days (for participants under 4 week schedule), 42 days (for participants under 6 week schedule) or 56 days (for participants under 8 week schedule) after the last administration of actinium-225 D W J 155), only S A Es and study treatment-related non-serious AEs are to be reported to Novartis, unless otherwise specified by local law/regulations. Data collected should be added to the appropriate CRFs.",
        "For female participants of child bearing potential, pregnancy tests will be performed as outlined in Section 8.4.5. 7.1.2 Long-term safety follow-up All participants will continue to be followed up (via phone call or visit) every 180 days after completion of the 180-day Safety follow-up period until completion of the follow-up period of 36 months from the last actinium-225 D W J 155 administration.",
        "After the 180-day Safety follow-up period, S A Es should only be reported to Novartis if the investigator suspects a causal relationship to study treatment, unless otherwise specified by local law/regulations. S A Es of second primary malignancies, regardless of causality, will be collected until the end of the 36month long-term follow-up period as well.",
        "7.1.3 Disease progression follow-up For participants who discontinue study treatment for any reasons other than death, documented disease progression while on treatment, clinical deterioration, lost to follow-up, withdrawal of consent, study termination, or initiation of subsequent anti-cancer treatment, also should return for tumor evaluation assessments and continue blood sample collection and analysis for cfDNA every 12 weeks from the last administration of study",
        "treatment until documented disease progression, death, lost to follow-up, or withdrawal of consent (as detailed in Section 1.3)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p80/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n080.jpg",
      "cap": "Protocol page 80 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 81 of 170 · Protocol body · page 81",
      "audio": [
        "7.2 Participant discontinuation from the study Discontinuation from study is when the participant permanently stops receiving the study treatment, and further protocol-required assessments or follow-up, for any reason. If the participant agrees, a final evaluation at the time of the participant’s study discontinuation should be made as detailed in Section 1.3 (Schedule of Activities).",
        "7.3 Withdrawal of informed consent and exercise of participants’ data privacy rights Withdrawal of consent/opposition to use data and/or biological samples occurs when a participant: • Explicitly requests to stop use of their data and • No longer wishes to receive study treatment and • Does not want any further visits or assessments (including further study-related contacts) This request should be made per local regulations (e.g., in writing) and recorded in the source",
        "documentation. Withdrawal of consent impacts ability to further contact the participant, collect follow-up data (e.g., to respond to data queries) and potentially other country-specific restrictions. It is therefore very important to ensure accurate recording of withdrawal vs. discontinuation based on the protocol definitions of these terms.",
        "In this situation, the Investigator should make a reasonable effort (e.g., telephone, e-mail, letter) to understand the primary reason for the participant’s decision to withdraw their consent/exercise data privacy rights and record this information. The Investigator shall clearly document if the participant has withdrawn his/her consent for the use of data in addition to a study discontinuation. Study treatment must be discontinued and no further assessments conducted.",
        "Further attempts to contact the participant are not allowed unless safety findings require communicating or follow-up. If the participant agrees, a final evaluation at the time of the participant’s withdrawal of consent/exercise data privacy rights should be made. Further details on withdrawal of consent or the exercise of participants' data privacy rights are included in the corresponding informed consent form.",
        "7.4 Lost to follow-up For participants whose status is unclear because they fail to appear for study visits or fail to respond to any site attempts to contact them without stating an intention to discontinue, the Investigator must document \"due diligence\" steps taken to contact the participant, e.g., dates of telephone calls, registered letters, in the source documents. A participant should not be"
      ],
      "chips": [
        "CPBQ663A12101",
        "p81/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n081.jpg",
      "cap": "Protocol page 81 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 82 of 170 · considered as lost to follow-up until due diligence has been completed or until the…",
      "audio": [
        "considered as lost to follow-up until due diligence has been completed or until the end of the study. 7.5 Study stopping rules During the dosage expansion, a DMC will be in place. Participants will be followed for safety including, but not limited to, the following; • D L Ts (as defined in Section 6.5.4) • Clinically significant Grade 3/4 AEs, • S A Es, or • Long term toxicities or death other than disease progression that is possibly related to the study treatment.",
        "This safety data will be reviewed and a recommendation from the DMC will be given to the sponsor whether to continue, modify, or terminate the trial (refer to Section 7.6).",
        "In addition, if the following occurs during the dosage expansion part, the DMC will meet immediately to discuss and make a recommendation (please refer to Section 10.1.4.1 for further details): • More than 30% of participants experiencing a Grade 3/4 treatment-related toxicity (out of a minimum of 6 participants treated) at the same dosage level or • Death other than disease progression that is possibly related to the study treatment.",
        "7.6 Early study termination by the Sponsor The study can be terminated by Novartis at any time.",
        "Reasons for early termination (but not limited to): • Unexpected, significant, or unacceptable safety risk to participants enrolled in the study • Decision based on recommendations from applicable board(s) after review of safety and efficacy data • Discontinuation of study treatment development in the indication(s) in this study In taking the decision to terminate, Novartis will always consider participant welfare and safety.",
        "Should early termination be necessary, participant must be treated as discontinued from study treatment by completing the end of treatment visit. The participant must also complete the safety follow-up period as per Section 7.1. The Investigator may be informed of additional procedures to be followed in order to protect the participant’s interests.",
        "The Investigator or Novartis depending on local regulation will be responsible for informing Institutional Review Board (IRB)/Independent Ethics Committee (IEC) of the early termination of the trial."
      ],
      "chips": [
        "CPBQ663A12101",
        "p82/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n082.jpg",
      "cap": "Protocol page 82 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 83 of 170 · Study assessments and procedures • Study procedures and their timing are summarized…",
      "audio": [
        "8 Study assessments and procedures • Study procedures and their timing are summarized in Section 1.3. Protocol waivers or exemptions are not allowed. • Immediate safety concerns should be discussed with Novartis upon occurrence or awareness to determine if the participant should continue or discontinue the study treatment. • Adherence to the study design requirements, including those specified in Section 1.3, is essential and required for study conduct.",
        "• Repeat or unscheduled samples may be taken for safety reasons or for technical issues with the samples. 8.1 Screening and eligibility 8.1.1 Screening The study IRB/IEC approved informed consent form must be signed and dated before any screening procedures are performed, except for laboratory and radiological evaluations which were performed as part of the participant's clinical standard of care within the acceptable screening window.",
        "Participants will be evaluated against study inclusion and exclusion criteria and safety assessments (refer to Section 1.3). Screening assessments must be repeated if performed outside of the specified screening window. Participants must meet all inclusion and none of the exclusion criteria at screening to be eligible for the study. Laboratory test results(s) or symptoms that do not satisfy the eligibility criteria may be repeated or treated during the screening visit window.",
        "If the repeated laboratory test(s) cannot be performed within the screening period, or do not meet the eligibility criteria, or other eligibility criteria have changed and are not met anymore, the participant is considered a screening failure. Where applicable, eligibility for treatment with actinium-225 D W J 155 needs to have confirmed tumor positivity based on the local assessment of gallium-68 D W J 155 tumor uptake (see inclusion criterion 4 in Section 5.1).",
        "Rescreening of a participant who has failed screening may be allowed. In such cases, a new ICF must be signed and a new participant ID must be assigned in the eCRF. All required screening assessments must be repeated if they do not meet the allowed time window for screening when the participant is rescreened for participation in the study. An individual participant can only be rescreened once for the study.",
        "8.2 Participant demographics/other baseline characteristics Data to be collected will include participant demographics: age, sex and race/predominant ethnicity (if permitted), relevant medical history and current medical conditions, smoking history, diagnosis and extent of cancer (including baseline tumor molecular characteristics), and details of prior anti-neoplastic treatments, prior medications, surgeries, medical procedures, and non-drug therapies, and will be recorded",
        "in the eCRF. For enrolled participants, known baseline"
      ],
      "chips": [
        "CPBQ663A12101",
        "p83/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n083.jpg",
      "cap": "Protocol page 83 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 84 of 170 · tumor molecular characteristics will be collected, including but not limited to (if…",
      "audio": [
        "tumor molecular characteristics will be collected, including but not limited to (if available) H E R 2, ER and PR status and selected tumor genetic alterations. Country-specific regulations should be considered for the collection of demographic and baseline characteristics in alignment with CRF.",
        "Participant race and ethnicity (if permitted) are collected and analyzed to assess the diversity of the study population as required by certain Health Authorities and may be used to identify variations in safety or efficacy due to these factors. All prescription medications, over the counter drugs and significant non-drug therapies prior to the study start must be documented. See protocol Section 6.6 for further details.",
        "8.3 Efficacy assessments Time points for all imaging and efficacy assessments are provided in Section 1.3 and the imaging assessment collection plan is outlined in Table 8-1. The study will include different types of imaging modalities. Conventional imaging (CT and/or MRI, bone scans and other imaging assessments as clinically indicated) will be used for standard tumor response assessments for all participants.",
        "gallium-68 D W J 155 PET (PET C T or PET M R I) imaging will be performed up to two times in the study: all participants will undergo a baseline gallium-68 D W J 155 (PET C T or PET M R I) scan at screening (before first treatment with actinium-225 D W J 155), and a second gallium-68 D W J 155 (PET C T or PET M R I) scan at end of treatment visit.",
        "Participants assigned to dosimetry assessments in the dosage escalation part of the study will undergo up to 5 serial SPECT C T scans for dosimetry assessments in Cycle 1, at the imaging time points specified in Table 8-6. Additional SPECT C T scans may be performed in subsequent cycles if required per local regulation (Section 8.7.4 and Section 8.7.5).",
        "All images collected during the course of the study to assess the extent of disease, will be transferred to the designated imaging Contract Research Organization (CRO). The methods for imaging acquisition are specified in the imaging manual, while central reads are described in the imaging charter.",
        "CT scans associated with PET and SPECT imaging are required for attenuation correction and to provide anatomical information for segmentation of lesions and other volumes-of-interest from PET and SPECT data. The low-dose CT used for attenuation correction of PET C T or SPECT C T scans should not be used for performing tumor assessments.",
        "The A L A R A principle will be followed, and low-dose CT scans will be acquired using manufacturer- and institutionrecommended standard parameters. The expected radiation dose from low-dose CT needed for PET/SPECT attenuation correction is expected to be up to 5 millisieverts (millisieverts) per scan. The cumulative expected dose of ionizing radiation from SPECT-associated low-dose CT scans is up to 25 millisieverts for participants in the dosimetry subgroup.",
        "The cumulative expected dose of ionizing radiation from PET-associated low-dose CT scans is less than 10 millisieverts for participants undergoing two gallium-68 D W J 155 PET C T scans. The expected ionizing radiation exposure from diagnostic CT is 15-20 millisieverts per scan.",
        "As defined in the SoA and in line with standard-of-care, participants will receive diagnostic CT scans every 8 weeks (for 4-week or 8-week schedule) or every 6 weeks (for 6-week schedule) during the treatment period. To minimize the risk of additional radiation exposure, the CT scan frequency will be reduced to every 12 weeks during the 36-month follow-up period. This will result in up"
      ],
      "chips": [
        "CPBQ663A12101",
        "p84/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n084.jpg",
      "cap": "Protocol page 84 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 85 of 170 · to 9 CT scans during the treatment period (135-180 mSv) and up to 12 CT scans during…",
      "audio": [
        "to 9 CT scans during the treatment period (135-180 millisieverts) and up to 12 CT scans during the long-term follow-up (180-240 millisieverts).",
        "8.3.1 Efficacy assessment Table 8-1 Imaging assessment collection plan Assessments Procedure Baseline During Treatment/Followup gallium-68 D W J 155 PET imaging assessment (not part of tumor response assessment) gallium-68 D W J 155 PET C T or PET M R I Mandated (Imaging period) Mandated at end of treatment Dosimetry assessment (not part of tumor response assessment) actinium-225 D W J 155 SPECT C T N/A Conventional Imaging for tumor response assessment by RECIST v1.1 Chest,",
        "abdomen, and pelvis CT with intravenous contrast enhancement (or MRI if CT is contraindicated) and other imaging assessments as clinically indicated Mandated Mandated, every 6 weeks (6 week schedule) or every 8 weeks (4- or 8- week schedule) after first administration of study treatment until the end of treatment visit (- 7 day window), and then every 12 weeks after the last administration of study treatment during the safety and disease progression follow‑up period ( plus",
        "or minus 15 day window) Additional imaging for tumor response assessment CT or MRI of other metastatic sites (e.g., neck) and other imaging assessments as clinically indicated; see Section 8.3.1 If clinically indicated If lesions were documented at baseline, follow same schedule as for CT/MRI of chest, abdomen, and pelvis Conventional imaging (CT and/or MRI, and other imaging assessments as clinically indicated) will be performed for tumor response assessments at regular",
        "intervals as outlined in Table 8-1 and further detailed below. The local investigator's assessments will be used for deriving all efficacy endpoints on RECIST v1.1 (Eisenhauer et al 2009 and Section 10.5) and for treatment decision making. An independent central review and/or analysis of the tumor assessments may be performed if deemed necessary. The methods for assessment and recording are specified in the imaging charter and imaging manual.",
        "The coded medical images will be used primarily for analysis as described in this protocol; however, the images may also be used for the development and evaluation of new analysis"
      ],
      "chips": [
        "CPBQ663A12101",
        "p85/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n085.jpg",
      "cap": "Protocol page 85 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 86 of 170 · methods directly related to the area of research that this study covers",
      "audio": [
        "methods directly related to the area of research that this study covers. Incidental findings are beyond the scope of the central imaging vendor. If an investigator/radiologist recognizes any incidental finding in the images during the course of conducting the clinical trial, the investigator should follow up as part of his/her duty of care to ensure the safety and well-being of the participant, as well as compliance with local ethical regulations.",
        "Baseline imaging assessments CT/MRI imaging assessments for RECIST v1.1 will be performed at screening/baseline within 35 days before the start of actinium-225 D W J 155 treatment (Day -35 to Day -21 prior gallium-68 D W J 155 imaging and prior to C1D1).",
        "Any imaging assessments already completed during the regular workup of the participant within 35 days prior to the start of actinium-225 D W J 155 treatment, including before signing the main study ICF, can be considered as the baseline images for this study and should be submitted to the designated imaging CRO for quality control and central review. Any imaging assessments obtained after gallium-68 D W J 155 imaging cannot be considered baseline images.",
        "Any potential measurable lesion that has been previously treated with radiotherapy should be considered as a non-measurable lesion. However, if a lesion previously treated with radiotherapy has clearly progressed since the radiotherapy, it can be considered as a measurable lesion.",
        "If a participant is known to have a contraindication to CT intravenous (i.v.) contrast media or develops a contraindication during the trial, a non-contrast CT of the chest (MRI is not recommended due to respiratory artifacts; however, if CT is not feasible per local regulations, MRI can be performed instead) plus a contrast-enhanced MRI (if possible) of the abdomen and pelvis should be performed.",
        "If brain metastases are suspected at baseline, brain MRI or CT should be completed. Contrast enhanced brain MRI is preferred, however, if MRI contrast is contraindicated, then MRI without contrast or CT with/without contrast is acceptable. If clinically indicated, a whole-body bone scan should be performed per institutional standard of care [e.g., Tc-99m bone scan, whole body bone MRI, FDG PET or 18F-sodium fluoride (NaF) PET].",
        "Localized CT, MRI, or X-rays should be acquired and submitted to imaging CRO for all skeletal lesions identified on the screening whole body scan, which are not visible on the chest, abdomen and pelvis CT/MRI. If clinically indicated, CT or MRI of other areas (e.g., neck) of disease as appropriate should be performed and submitted to imaging CRO.",
        "If skin lesions are present at screening, color photography should be acquired and submitted to imaging CRO using a digital camera in clear focus, including a scale/ruler, in such a way that the size of the lesion(s) can be determined from the photograph. Chest X-rays and ultrasound should not be used to measure tumor lesions."
      ],
      "chips": [
        "CPBQ663A12101",
        "p86/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n086.jpg",
      "cap": "Protocol page 86 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 87 of 170 · §8.3.2 ⁶⁸Ga PET twice · SPECT after ²²⁵Ac",
      "audio": [
        "Post-baseline imaging assessments Imaging assessments as described in Table 8-1 should be performed at the time points specified using the same imaging modality used at baseline, irrespective of study treatment interruption or actual dosing (see Section 1.3).",
        "Imaging assessments for response evaluation will be performed during the on-treatment period every 6 weeks (for 6-week schedule) or every 8 weeks (for 4- or 8-week schedule) after the first administration of study treatment, and every 12 weeks after the last administration of study treatment during the follow-up period until disease progression, death, lost to follow-up, withdrawal of consent/opposition to use data/biological samples.",
        "Imaging assessments should be scheduled using C1D1 as the reference date (not the date of the previous tumor assessment) and should be respected regardless of whether study treatment is temporarily withheld, or unscheduled assessments are performed. Additional imaging assessments may be performed and submitted to imaging CRO at any time during the study at the investigator's discretion to support the efficacy evaluations for a participant, as clinically indicated.",
        "Clinical suspicion of disease progression at any time requires a physical examination and imaging assessments to be performed promptly rather than waiting for the next scheduled imaging assessment. Each lesion that is measured at baseline must be measured by the same method (either the same imaging method or by photography, including a metric ruler) and when possible, the same local radiologist/physician throughout the study so that the comparison is consistent.",
        "If an offschedule imaging assessment is performed because progression is suspected, subsequent imaging assessments should be performed in accordance with the original imaging schedule. The CT portion of a combined PET C T or SPECT C T scan may be used only if the CT is of diagnostic quality, including the utilization of i.v. contrast media. The low-dose CT used for attenuation correction of PET C T or SPECT C T scans should not be used for performing tumor assessments.",
        "At the discretion of the investigators, FDG-PET scans may be performed to verify progressive disease but will not be used on their own to determine radiographic progression. All study imaging (including any off-schedule imaging studies) should be submitted to the designated imaging CRO for quality control. A central review may be performed if deemed necessary.",
        "8.3.2 gallium-68 D W J 155 PET and actinium-225 D W J 155 SPECT imaging gallium-68 D W J 155 will be administered twice to each participant. A safety follow-up will be performed as outlined in Section 1.3. Baseline gallium-68 D W J 155 PET C T or PET M R I imaging assessments will be performed in all participants at screening as described in Table 1-3, and a second gallium-68 D W J 155 PET C T or PET M R I scan will also be performed at the end of treatment visit.",
        "The follow-up gallium-68 D W J 155 PET imaging will be conducted in the same manner as the baseline PET imaging. A PET scan after gallium-68 D W J 155 administration will be considered positive if at least one measurable lesion (per RECIST v1.1) co-localized with anatomical imaging shows 68GaDWJ155 PET uptake higher than the surrounding tissues based on local investigator assessment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p87/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n087.jpg",
      "cap": "Protocol page 87 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "⁶⁸Ga PET twice (screening + EoT). Positive = at least one measurable lesion with uptake.",
        "SPECT/CT after ²²⁵Ac uses the therapeutic emission — no extra tracer."
      ]
    },
    {
      "title": "Page 88 of 170 · For 68Ga-DWJ155 PET/CT or PET/MRI scan acquisition details (including imaging time…",
      "audio": [
        "For gallium-68 D W J 155 PET C T or PET M R I scan acquisition details (including imaging time points and scan duration) please refer to the Imaging Manual. All PET C T and PET M R I scans should be submitted to the designated imaging CRO and will be analyzed centrally based on the study specific imaging charter.",
        "For participants with disease sites in the urinary bladder or pelvis, investigators may consider placing a urinary catheter prior to PET imaging with gallium-68 D W J 155 and/or SPECT imaging with actinium-225 D W J 155 for improved visualization of tumor. In such cases, investigators may elect to flush the bladder with normal saline per institutional guidelines to reduce residual urinary background signal.",
        "Participants will be followed up for safety as described in Section 7.1.1 and as outlined in Section 1.3. The correlation between gallium-68 D W J 155 PET imaging data and actinium-225 D W J 155 SPECT data (if available) will be investigated to understand whether a higher uptake in tumor based on imaging is correlated with higher absorbed radiation dose in tumor on an ongoing basis to assess potential differences in biodistribution and tumor uptake.",
        "While there is no plan to optimize PET image quality during the study, good quality images are required for both qualitative and quantitative assessments. actinium-225 D W J 155 SPECT C T images will be used for dosimetry calculations and to investigate actinium-225 D W J 155 uptake in the enrolled cancer types. Imaging acquisition details for 225AcDWJ155 SPECT C T will be described in the Dosimetry Site Manual.",
        "All SPECT C T scans should be submitted to the designated imaging CRO and will be analyzed centrally based on the study specific imaging charter. For details on SPECT imaging that will be used for actinium-225 D W J 155 dosimetry assessments, please refer to Section 8.7 and Table 8-4. 8.3.3 Appropriateness of efficacy assessments The efficacy assessments selected are standard for these tumor indications. Additional information can be found in Section 10.5.",
        "8.4 Safety assessments Safety assessments are specified below with Section 1.3 detailing when each assessment is to be performed. For details on AE collection and reporting, refer to Section 8.10. As per Section 4.6, during a public health emergency as declared by local or regional authorities i.e.",
        "pandemic, epidemic or natural disaster, that limits or prevents on-site study visits, regular phone or virtual calls can occur for safety monitoring and discussion of the participant´s health status until it is safe for the participant to visit the site again. ECOG Performance status scale will be used as described in Table 8-2."
      ],
      "chips": [
        "CPBQ663A12101",
        "p88/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n088.jpg",
      "cap": "Protocol page 88 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 89 of 170 · Table 8-2 ECOG Performance status scale Grade ECOG 0 Fully active, able to carry on…",
      "audio": [
        "Table 8-2 ECOG Performance status scale Grade ECOG 0 Fully active, able to carry on all pre-disease performance without restriction 1 Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light house work, office work 2 Ambulatory and capable of all self-care but unable to carry out any work activities.",
        "Up and about more than 50% of waking hours 3 Capable of only limited self-care, confined to bed or chair more than 50% of waking hours 4 Completely disabled. Cannot carry on any self-care. Totally confined to bed or chair 5 Dead 8.4.1 Physical examinations Physical examinations will be performed according to Section 1.3.",
        "At Screening and prior to treatment on C1D1, a complete physical examination will be performed and will include the examination of general appearance, skin, neck (including thyroid), eyes, ears, nose, throat, lungs, heart, abdomen, back, lymph nodes, and extremities. After C1D1 onwards, a short physical examination will be performed (it will include the examination of general appearance and vital signs).",
        "Clinically relevant findings that were present prior to signing informed consent must be recorded on the appropriate eCRF that captures medical history. Significant new findings that begin or worsen after informed consent which meet the definition of an AE must be recorded as an AE. 8.4.2 Vital signs Vital signs include blood pressure (BP) (supine position preferred when ECG is collected), pulse measurement, and body temperature. Height will be measured at screening.",
        "Body weight (in indoor clothing, but without shoes) will be measured at screening and at subsequent time points as specified in Section 1.3. For Japan only: oxygen saturation (SpO2) will be measured by pulse oximetry for participants enrolled in Japan every time vital signs are performed according to the visit assessment scheduled in Table 1-4, Table 1-5, and Table 1-6. The results of SpO2 will be recorded only in the source documentation.",
        "8.4.3 Electrocardiograms Triplicate 12-lead ECGs will be performed at each ECG collection time point as specified in Section 1.3. The ECG will be performed after the participant has been resting (supine) for approximately 10 minutes prior to each ECG collection time point. Individual ECGs should be recorded approximately 2 minutes apart. The preferred sequence of cardiovascular data"
      ],
      "chips": [
        "CPBQ663A12101",
        "p89/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n089.jpg",
      "cap": "Protocol page 89 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 90 of 170 · collection is ECG collection first, followed by vital signs, blood sampling, and any…",
      "audio": [
        "collection is ECG collection first, followed by vital signs, blood sampling, and any remaining assessments for that visit. The QTcF must be used for clinical decisions (e.g., to assess eligibility). The investigator must calculate QTcF if it is not auto-calculated by the ECG machine. The mean QTcF value for each time point will be calculated from the triplicate ECGs for each participant. ECGs will be collected for all participants according to Table 8-3.",
        "During dosage escalation, additional ECGs will be collected in all participants undergoing dosimetry/PK assessments (refer to Section 8.7) and as outlined in Table 8-4. In these participants, the blood sample for PK should be collected closely after the ECG collection is completed, and before any blood biomarker sample. ECGs will be locally collected and reviewed as well as being centrally reviewed.",
        "Interpretation of the tracing must be made by a qualified physician and documented on the ECG. The original ECGs on non‑heat‑sensitive paper, appropriately signed, must be archived at the study site. Each ECG tracing should be labeled with the study number, participant initials (where regulations permit), participant number, date, and kept in the source documents at the study site.",
        "Instructions for collection and transmission of ECGs to the central ECG laboratory will be provided in the ECG manual. Participant’s eligibility for the study should be assessed by the investigator based on the local interpretation of results from the triplicate ECG recordings performed on the machine provided. Clinically significant abnormalities present at screening should be reported on the appropriate eCRF.",
        "Clinically significant findings must be discussed with Novartis prior to enrolling the participant in the study. New or worsened clinically significant findings occurring after first administration of gallium-68 D W J 155 must be recorded as AEs. Additional, unscheduled, safety ECGs may be repeated at the discretion of the investigator at any time during the study as clinically indicated.",
        "For any ECGs with participant safety concerns, two additional ECGs must be performed to confirm the safety finding. ECG safety monitoring, or a review process, should be in place for clinically significant ECG findings at baseline before administration of study treatment and during the study.",
        "Table 8-3 Central ECG collection plan (all participants) Period / cycle Day Time ECG Type Screening -35 to gallium-68 D W J 155 imaging Anytime during the screening period 12 Lead Triplicate 1 1 Pre-dose (baseline ECG)* 12 Lead Triplicate 1 1 End of actinium-225 D W J 155 administration (+10 minutes) 12 Lead Triplicate 1 1 1 hour ( plus or minus 10 minutes) post-EOI* 12 Lead Triplicate 1 1 4 hour ( plus or minus 15 minutes) post-EOI* 12 Lead Triplicate 2 and subsequent",
        "cycles 1 End of administration (+10 min) 12 Lead Triplicate end of treatment Anytime 12 Lead Triplicate"
      ],
      "chips": [
        "CPBQ663A12101",
        "p90/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n090.jpg",
      "cap": "Protocol page 90 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 91 of 170 · Period / cycle Day Time ECG Type * For participants also undergoing dosimetry/PK…",
      "audio": [
        "Period / cycle Day Time ECG Type * For participants also undergoing dosimetry/PK assessments EOI=end-of-infusion; If clinically indicated as per the investigator’s judgment (e.g., if significant ECG abnormalities are observed at the end of the actinium-225 D W J 155 administration), the collection of ECG assessments at additional post-dose time points coinciding with PK sampling time points as per Table 8-4 should be considered.",
        "8.4.4 Clinical safety laboratory tests All laboratory parameters assessed for safety purposes will be evaluated locally. Refer to Table 10-1 for a summary of the parameters to be evaluated according to Section 1.3. On days of dosing, samples for these parameters will be collected prior to the administration of investigational drugs.",
        "Results from locally performed labs collected on the day of administration should be reviewed prior to administration of the investigational drug. More frequent evaluations may be performed at the investigator’s discretion if medically indicated; results should be recorded as unscheduled laboratory assessments.",
        "During treatment and safety follow-up periods, for participants who have CTCAE grade 2 or higher neutropenia or thrombocytopenia as well as participants who have CTCAE grade 3 or higher anemia, the relevant hematology assessment must be performed as indicated in Table 6-4. Novartis will be provided with a copy of the laboratory certification and tabulation of the normal ranges for each parameter required.",
        "In addition, if at any time a participant has laboratory parameters obtained from a different outside laboratory, Novartis must be provided with a copy of the certification and a tabulation of the normal ranges for that laboratory. Clinically significant abnormalities must be recorded as either medical history/current medical conditions or AEs, as appropriate. All abnormal lab results must be evaluated for criteria defining an AE and reported as such if the criteria are met.",
        "All abnormal lab results must be evaluated for criteria defining an AE and reported as such if the criteria are met. For those lab AEs, repeated evaluations are mandatory until normalization of the result(s) or until the result is no longer considered to be clinically significant.",
        "8.4.5 Pregnancy testing All women of childbearing potential will have serum pregnancy testing within 72 hours before any administration of gallium-68 D W J 155 or actinium-225 D W J 155, and at the end of treatment visit. Monthly urine pregnancy test will then be performed and reported to site for 8 months after the last actinium-225‑D W J 155 administration. Additional pregnancy testing might be performed if requested by local requirements.",
        "Women of childbearing potential are defined as women physiologically capable of becoming pregnant from menarche until becoming post-menopausal unless they have had surgical bilateral oophorectomy (with or without hysterectomy), total hysterectomy or bilateral salpingectomy at least six weeks before taking study treatment. In the case of oophorectomy alone, the reproductive status of the woman needs to have been confirmed by follow-up hormone level assessment.",
        "A postmenopausal state is defined as no menses for 12 months without an alternative medical cause and an appropriate clinical profile."
      ],
      "chips": [
        "CPBQ663A12101",
        "p91/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n091.jpg",
      "cap": "Protocol page 91 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 92 of 170 · Medical documentation of bilateral oophorectomy, hysterectomy or bilateral…",
      "audio": [
        "Medical documentation of bilateral oophorectomy, hysterectomy or bilateral salpingectomy must be retained as source documents. In absence of the medical documentation of these procedures, or if the post-menopausal status is not clear, the investigator should use medical judgment to appropriately evaluate the fertility state of the woman and document it in the source document.",
        "In case of a positive pregnancy test, the investigator must be contacted immediately and the reporting requirements as per Section 8.10.4 must be followed. If a participant becomes pregnant, investigational drug must be stopped immediately. If a pregnancy test is positive, but the participant is thought not to be pregnant, investigational drug should be stopped until it is determined that the test was falsely positive and pregnancy is excluded.",
        "8.4.6 Cardiac imaging - Trans-Thoracic Echocardiography (T T E) Trans-thoracic echocardiography (T T E) will be used to assess LVEF according to the schedule described in Section 1.3. If a site is unable to perform T T E, M U G A scan is acceptable. Additional assessments may be performed if clinically indicated. The same assessment method (T T E or M U G A) is to be used for all cardiac imaging examinations throughout the study for each participant.",
        "When possible, the same cardiologist or radiologist should read and report the outcome to minimize variability in results. 8.4.7 Chest X-ray (Japan only) For Japan only, a 2-view chest X-ray will be performed according to the visit evaluation schedules in Section 1.3. 8.4.8 Appropriateness of safety measurements The safety assessments selected are standard for these indications/participant populations.",
        "8.5 Additional assessments Please refer to Table 1-7 and Section 8.7 for additional assessments for participants undergoing dosimetry assessments. 8.6 Immunogenicity assessments No applicable. 8.7 Pharmacokinetics and dosimetry This section describes the assessments related to blood and urine PK and SPECT C T imaging for dosimetry.",
        "In the dosage escalation part of the study, blood PK and dosimetry assessments will be conducted in approximately 3 participants in each cohort (preferably the first 3 participants). In the earlier dosage levels (DL1 and DL2), where injected activities per cycle less than or equal to 4 megabecquerels are planned, imaging-based dosimetry in the first participant may be reviewed before additional participants undergo dosimetry, to confirm feasibility of the analysis.",
        "If the analysis is not feasible at DL1 and/or DL2, subsequent participants at that dosage level may be exempt from"
      ],
      "chips": [
        "CPBQ663A12101",
        "p92/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n092.jpg",
      "cap": "Protocol page 92 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 93 of 170 · Protocol body · page 93",
      "audio": [
        "dosimetry. From dosage levels where injected activity per cycle is greater than or equal to 6 megabecquerels, dosimetry will be acquired in at least 3 participants at each new dosage level.",
        "In the event that fewer than 3 participants in a dosage level (DL3 and higher) in the dosage escalation part of the study contribute to dosimetry (or dosimetry cannot be evaluated, e.g., due to errors during the imaging), dosimetry data will be collected from further participants enrolled beyond the first 3 participants in escalation or in additional cohorts.",
        "Urine PK will be collected in up to six participants in total, at dedicated sites in selected cohorts and relevant dosage levels (e.g., DL2 or higher) in the dosage escalation part of the study or in the expansion part of the study The timing of PK and/or dosimetry assessments may be modified based on emerging data, in order to better define the PK profile and/or dosimetry evaluations.",
        "The extent of PK and dosimetry collection and assessment schedule in the expansion part of the study will be defined in a future amendment, based on data generated during the dosage escalation part. Refer to dedicated manuals for detailed instructions regarding PK sample collection, processing and shipment. Detailed instructions on imaging procedures for dosimetry and dosimetry methodology are provided in the Dosimetry Manual and Dosimetry Charter, respectively.",
        "Residual PK samples may be used for other exploratory PK or PK/pharmacodynamics analysis at the sponsor's discretion. This could include using leftover samples for protein binding analysis, metabolite profiling or exploratory biomarker analysis. Given the exploratory nature of the work, the analytical methods used for those assessments, may not be validated.",
        "There may be circumstances when a decision is made to stop a collection, or not perform or discontinue an analysis due to either practical or strategic decisions. Therefore, depending on the results obtained during the study, sample collection/analysis may be omitted at the discretion of Novartis.",
        "8.7.1 Pharmacokinetic blood collection and handling Blood samples will be collected in Cycle 1 by either direct venipuncture or an indwelling cannula inserted in a forearm vein/ foot vein (in case blood sampling is required while the participant is in scanner) from those participants in the escalation and expansion part in which dosimetry is acquired, or in participants at selected sites who undergo the urine PK collection schedule (see Section 8.7.2).",
        "Blood will be drawn from the arm contralateral to the one in which actinium-225 D W J 155 has been injected, whenever possible. At specified time points described in Table 8-4 in Cycle 1, blood samples will be collected into tubes containing heparin as an anticoagulant and gently inverted several times to thoroughly mix the anticoagulant. All post-dose PK blood sampling times are relative to the time of end of administration on C1D1.",
        "On days and timepoints coinciding with ECG assessments, the ECG should be done prior to drawing the PK sample, and the PK sample should be drawn before any blood biomarker sample."
      ],
      "chips": [
        "CPBQ663A12101",
        "p93/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n093.jpg",
      "cap": "Protocol page 93 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 94 of 170 · After collection, two aliquots will be prepared from each PK blood sample, for PK…",
      "audio": [
        "After collection, two aliquots will be prepared from each PK blood sample, for PK and radiometabolite analysis, respectively. Refer to the laboratory manual for detailed instructions on collection, handling, and shipment of blood and plasma PK samples. All data including but not limited to actual date and time of blood PK sampling must be recorded in the appropriate blood collection eCRF page.",
        "Table 8-4 Pharmacokinetic blood collection log Cycle Day Scheduled Time Point 1 1 Pre-dose a 1 1 End of infusion (EOI)b 1 1 0.5 h ( plus or minus 10 min) post-EOI 1 1 1 h ( plus or minus 10 min) post-EOI 1 1 2 h ( plus or minus 15 min) post-EOI 1 1 4 h ( plus or minus 30 min) post-EOI 1 1 6 h ( plus or minus 30 min) post-EOI 1 2 24 h ( plus or minus 2 h) post-EOI 1 3 48 h ( plus or minus 4 h) post-EOI 1 4-5c 72-96 h ( plus or minus 6 h) post-EOI a To be collected on the same",
        "day of the infusion, before start of infusion b To be collected within 10 min of end of infusion, immediately after EOI ECG assessment c Not applicable for participants in DL1 8.7.2 Pharmacokinetic urine collection and handling Each participant should void his/her bladder immediately before the start of infusion.",
        "Up to six participants in selected cohorts at relevant dosage levels (e.g., DL2 or higher) in the dosage escalation part of the study or in the expansion part of the study, and at dedicated sites, will undergo full urine collection over 72 hrs.",
        "In addition, should dosimetry assessments indicate actinium-225 D W J 155 uptake in the gastrointestinal tract, urine PK assessments may be performed in an earlier cohort in at least 1 participant, per documented communication between Investigators and Novartis. Participants who undergo PK urine collection and are not undergoing PK and SPECT C T assessments for dosimetry analysis, will undergo PK blood sampling according to Table 8-4.",
        "All urine eliminated during the first 72 hrs following the end of infusion on Cycle 1 Day 1 will be collected, dividing the collection according to the time intervals specified in Table 8-5. During each sampling interval, the participant should void his/her bladder in a dedicated collection container for that sampling interval. Participants are recommended to regularly hydrate orally.",
        "The content of each urine fraction container should be gently mixed, and two aliquots of urine will be withdrawn from each collection container for the specified sampling intervals, for PK and radiometabolite analysis, respectively (see Section 8.7.3)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p94/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n094.jpg",
      "cap": "Protocol page 94 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 95 of 170 · Refer to laboratory manual for detailed instructions on collection, handling and…",
      "audio": [
        "Refer to laboratory manual for detailed instructions on collection, handling and shipment of urine PK samples. All data including but not limited to actual date and time of urine sampling must be recorded in the appropriate urine collection eCRF page.",
        "Table 8-5 Urine Collection Log Cyclea Day Scheduled Timeb 1 1 0 h (start of infusion)-6 h ( plus or minus 30 min) 1 1-2 6 ( plus or minus 30 min)-24 h ( plus or minus 2h) 1 2-3 24 ( plus or minus 2h)-48 h ( plus or minus 4h) 1 3-4 48 ( plus or minus 4h)-72 h ( plus or minus 4h) c a Up to 6 participants in selected cohorts at relevant dosage levels and at dedicated sites.",
        "The assignment of a participant will be coordinated by Novartis and it will be communicated to investigators at time of individual participant enrollment. b Scheduled collection times to be calculated from the EOI unless otherwise noted c If the first 3 participants who contribute to urine PK show negligible radioactivity ( less than or equal to 5% of IA) detected in the 48-72h collection interval, this collection interval may be omitted in the remaining participants.",
        "Novartis will notify investigators accordingly, at time of participant enrollment.",
        "8.7.3 Analytical method Radioactivity in blood and urine will be measured with an appropriately certified gamma counting system, calibrated with a certified source of actinium-225 of known activity counted in the same geometry as that of the biological samples (i.e., appropriate volume, in an radioimmunoassay (RIA) tube suitable for the gamma counter) according to methodology described in a separate document.",
        "Exploratory radiometabolite assessments (detection) on radioactive plasma and urine samples will be performed using HPLC with radioactivity detection, by a qualified vendor. If at any time point the amount of metabolite data is deemed sufficient, sample collection, shipment and analysis of these data may be discontinued upon the sponsor's request.",
        "8.7.4 Dosimetry Only calibrated and qualified SPECT C T scanner(s) can be used to perform actinium-225 D W J 155 SPECT C T imaging. SPECT C T acquisition will be standardized across sites. SPECT C T images will be acquired to assess dosimetry to critical organs and to selected tumor lesions. Participants undergoing dosimetry assessments should void their bladder just prior to each SPECT C T assessment.",
        "Participants assigned to PK/dosimetry assessments in the dosage escalation part of the study will undergo assessments after the first actinium-225 D W J 155 administration in Cycle 1, i.e., up to 5 serial SPECT C T scans in Cycle 1, at the time points specified in Table 8-6, to construct the time activity curves.",
        "Participants in DL1 will undergo scans up to 48 hours post-administration, participants in DL2 will undergo scans up to 72 hours post-administration, and all remaining participants at higher DLs will undergo scans for the full schedule. Pending emerging data, the timing of each scan relative to actinium-225 D W J 155 administration may be adjusted to better capture"
      ],
      "chips": [
        "CPBQ663A12101",
        "p95/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n095.jpg",
      "cap": "Protocol page 95 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 96 of 170 · the uptake, retention and washout kinetics in the key critical organs and/or the…",
      "audio": [
        "the uptake, retention and washout kinetics in the key critical organs and/or the number of imaging time-points may also be reduced. The timing (timepoint with smaller time window) of each acquisition will be communicated to investigators at the time of enrollment allocation.",
        "As actinium-225 dosimetry requires longer imaging times with current SPECT C T technology (typically greater than or equal to 30 min per field of view (FOV)) than beta-emitters, a limited number of FOVs can be acquired to reduce overall scan time.",
        "The required anatomic coverage of the SPECT scan for actinium-225-DW155 dosimetry will be optimized based on the results from the initial participants undergoing dosimetry and will be such that key dose-limiting organ(s) are within the field-ofview(s). Additional fields-of-view may be acquired to capture tumor lesions. For SPECT C T scan acquisition details refer to the Dosimetry Site Manual.",
        "All SPECT C T scans and raw projection data should be submitted to the designated imaging CRO and will be analyzed centrally based on the study specific Dosimetry Charter. The dosimetry assessments will be omitted in case actinium-225 D W J 155 administration has not occurred.",
        "Table 8-6 SPECT C T Imaging Collection Table Cycle Day after administrationa Provisional time window 1 1 2 h - 4 h plus or minus 1h post-EOI 1 2 24 h plus or minus 4h post-EOI 1 3 48 h plus or minus 4h post-EOI 1 4-5b 72 h - 96 h plus or minus 6h post-EOI 1 8-15b 168 h - 312 h plus or minus 6h post-EOI EOI=end-of-infusion a Participants in DL1 will undergo scans up to 48 hours, participants in DL2 will undergo scans up to 72-96 hours.",
        "The remaining participants will undergo scans for the full schedule. b A precise time window of each acquisition will be informed by emerging data and will be communicated to investigators at the time of individual participant enrollment. The time windows for SPECT C T imaging as shown are recommended. However, if an assessment cannot be done within specified windows, it can be done at the closest feasible time, and the actual time must be properly recorded in the eCRF.",
        "8.7.5 Dosimetry with respect to local regulations Should local radioprotection or other regulations require additional information, necessary dosimetry assessments can be performed in addition to the schedule in Section 8.7.1 and Section 8.7.4. These may include additional single time point (e.g., 24-48 h post-infusion) SPECT C T with the required fields of view (verification scans) for qualitative distribution assessment of radioactivity, at subsequent cycles.",
        "For further scan acquisition details refer to the Dosimetry Site Manual."
      ],
      "chips": [
        "CPBQ663A12101",
        "p96/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n096.jpg",
      "cap": "Protocol page 96 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 97 of 170 · Protocol body · page 97",
      "audio": [
        "8.8 Biomarkers Biomarker analyses will be used to investigate the effect of actinium-225 D W J 155 in participants with solid tumors at the molecular and cellular level as well as to determine how changes in the markers may relate to exposure and clinical outcomes. In addition, potential predictive markers of efficacy, as well as mechanisms of resistance to actinium-225 D W J 155 may be explored.",
        "While the goal of the biomarker assessments is to provide supportive data for the clinical trial, there may be circumstances when a decision is made to stop a collection, or not perform or discontinue an analysis due to either practical or strategic reasons (e.g., inadequate sample number, issues related to the quality of the sample or issues related to the assay that preclude analysis, impossibility to perform correlative analyses, enrollment halt etc.).",
        "Therefore, depending on the results obtained during the study, sample collection analysis may be omitted at the discretion of Novartis. The samples collected as described in Table 8-7, may be used to meet any of the biomarker related trial objectives.",
        "Additionally, other related biomarkers may also be analyzed from the samples listed in Table 8-7, depending on sample availability, resources, participant’s outcomes and as new scientific evidence or alternative methods become available. The sample collection information must be entered on the appropriate sample collection eCRF page(s) and requisition form(s).",
        "Detailed instructions for the collection, processing, and shipment of biomarker samples are outlined in the laboratory manual for the study. Sample(s) should be collected at the visit/time point(s) defined in the biomarker table; Table 8-7. Table 8-7 Biomarker sample collection plan Sample Type Visit/ Time point Approx.",
        "volume Marker Purpose Dosage escalation: Archival tumor sample (preferred) or newly obtained tumor biopsy Dosage expansion: Newly obtained tumor biopsy* Screening period (post 68GaDWJ155 imaging) Archival tumor: Block (preferred) or a minimum of 25 newly cut sections (4 μm thickness) Newly obtained tumor: 3-6 passes of a core needle biopsy H E R 2 expression and expression of other markers such as ER and PR Correlation of target distribution with imaging, dosimetry and",
        "efficacy Retrospective confirmation of locally assessed H E R 2 status Assess potential predictive markers of response & mechanisms of resistance Whole transcriptome analysis; expression of immune and cancer related genes Cancer-related genes by next generation DNA sequencing Blood sample for soluble factors C1D1 Pre-dose C1D15 C1D29*** C2D1 Pre-dose C3D1 Pre-dose End of treatment 3.5 mL Soluble H E R 2 Soluble protein profiling for research** Assess potential predictive",
        "markers of response, recurrence & resistance"
      ],
      "chips": [
        "CPBQ663A12101",
        "p97/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n097.jpg",
      "cap": "Protocol page 97 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 98 of 170 · Sample Type Visit/ Time point Approx",
      "audio": [
        "Sample Type Visit/ Time point Approx.",
        "volume Marker Purpose Blood sample for cfDNA C1D1 Pre-dose C1D15 C1D29*** C2D1 Pre-dose C3D1 Pre-dose End of treatment Every 12 weeks after the last dose of study treatment during disease progression FU 10 mL DNA sequencing in cell free DNA Assessing cfDNA for potential prognostic markers and/or predictive markers of efficacy and/or resistance and correlating cfDNA abundance and features with measures of clinical efficacy Urine sample for renal biomarkers Pre-dose collection",
        "at every cycle (including cycle 1) 10 mL Novel renal biomarkers (e.g. CLU, Cystatin-C, Kidney Injury Molecule-1 (KIM-1), Neutrophil Gelatinase-Associated Lipocalin (NGAL), osteopontin, uCr, nephrin, podocin, podocalyxin, retinolbinding protein 4, vascular-cell adhesion molecule 1, matrix metalloproteinase 3, alpha-1macroglobulin) Identify potential renal damage and understand the underlying mechanism of potential nephrotoxicity.",
        "Provide correlation with administered activity and renal dosimetry, potential AEs and standard measures of renal function. *Newly obtained biopsy can be substituted with an archival tumor sample collected within 6 months prior to screening with no intervening treatment and a copy of the corresponding de-identified pathology report. **Soluble protein profiling will use remnant sample from blood for soluble factors sample collection.",
        "***C1D29 visit only applicable to 6-week and 8-week schedules. Biomarker assessments in tissue samples During dosage escalation, the most recent archival tumor sample and a copy of the corresponding de-identified pathology report is requested at the post gallium-68 D W J 155 imaging visit; if unavailable a newly obtained tumor biopsy may be collected during screening period (post gallium-68 D W J 155 PET imaging).",
        "During dosage expansion, collection of a newly obtained biopsy is mandatory for participants who will receive actinium-225 D W J 155 treatment. This sample can be substituted with a recent archival tumor sample and a copy of the corresponding de-identified pathology report, provided the archival tumor sample was collected within 6 months prior to the screening visit with no intervening treatment. The archival tumor samples"
      ],
      "chips": [
        "CPBQ663A12101",
        "p98/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n098.jpg",
      "cap": "Protocol page 98 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 99 of 170 · must meet specifications as described in Table 8-7, otherwise a newly obtained tumor…",
      "audio": [
        "must meet specifications as described in Table 8-7, otherwise a newly obtained tumor biopsy must be collected. If a core needle biopsy is performed, 3-6 tumor biopsy passes are requested. In the event that an inadequate tumor sample is received following a new biopsy procedure (e.g., found to have low tumor content), an archival tumor sample may be requested if available to allow for the analysis described in Table 8-7.",
        "Exceptions may be granted following documented discussion with Novartis. Archival and newly obtained tumor samples may be used to examine H E R 2 expression for potential correlation with gallium-68 D W J 155 imaging and uptake, and to compare centrally assessed H E R 2 expression with locally assessed H E R 2 status. H E R 2 expression levels as potential predictors of response may also be explored.",
        "Next generation DNA sequencing, whole transcriptome analysis and additional protein-based analyses may also be performed on these samples. Additionally, other predictive markers may be analyzed on these samples. Biomarker assessments in blood samples Peripheral blood samples will be collected pre-treatment, during treatment, at end of treatment and during disease progression follow-up as indicated in Table 8-7.",
        "Collection of blood for soluble factors will allow for the assessment of target and pathway modulation by measuring H E R 2, as well as assessment of additional soluble markers to assess the effect of the study treatment before, during, and at end of treatment. Furthermore, soluble factors like H E R 2 may be correlated with response to actinium-225 D W J 155.",
        "Analysis of additional soluble markers is for research purposes and data from this analysis will not be entered into the clinical database or the clinical study report (CSR). Blood will be collected at C1D1 pre-dose, C1D15, C1D29 (6-week and 8-week schedules), C2D1 pre-dose, C3D1 pre-dose, end of treatment and every 12 weeks during post-end of treatment disease progression follow-up until participant progresses to allow for sequence analysis of cfDNA.",
        "This analysis will interrogate potential prognostic markers and/or predictive markers of efficacy and/or resistance and correlate cfDNA abundance and features with measures of clinical efficacy. Biomarker assessments in urine Urine samples will be collected pre- and during treatment as indicated in Table 8-7. Novel renal biomarkers may be analyzed to investigate the biological effects of actinium-225 D W J 155 on renal functions for exploratory purposes only.",
        "This analysis may include CLU, Cystatin-C, KIM-1, NGAL, osteopontin, nephrin, podocin, podocalyxin, retinol-binding protein 4, vascular-cell adhesion molecule 1, matrix metalloproteinase 3 and alpha-1-macroglobulin. The list of biomarkers to be tested may be adapted in case additional promising renal toxicity biomarkers will receive support from health authorities for their exploratory use in clinical trials.",
        "The data from this analysis is for research purposes and will not be used for participant management decisions or any regulatory decision-making. The results will be used to explore correlation between expression change of the biomarkers and potential clinical manifestation of renal injury indicated by traditional laboratory assessments of renal function."
      ],
      "chips": [
        "CPBQ663A12101",
        "p99/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n099.jpg",
      "cap": "Protocol page 99 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 100 of 170 · Protocol body · page 100",
      "audio": [
        "8.9 Health economics OR Medical resource utilization and health economics Not applicable. 8.10 Adverse events (AEs), serious adverse events (S A Es), and other safety reporting The Investigator and any qualified designees are responsible for managing the safety of individual participants and for appropriately treating and/or referring the participant to appropriate care and follow up for all medical events occurring in participants.",
        "They are also responsible for detecting, recording and reporting medical events that meet the definition of an AE or S A E. Information about adverse drug reactions and how to manage them may be found in this protocol, the IB, or equivalent documentation. Information about adverse drug reactions can also be found in the product information for marketed products.",
        "Novartis qualified medical personnel will be readily available to advise on trial-related medical questions or problems.",
        "8.10.1 Definition and recording of adverse events Definition of AEs In accordance with the International Council for Harmonization of Technical Requirements for Pharmaceuticals for Human Use (ICH) guidelines, an AE is \"any untoward medical occurrence in a participant or clinical investigation participant administered a pharmaceutical product and which does not necessarily have to have a causal relationship with this treatment\".",
        "An AE can therefore be any of the following untoward medical occurrences temporally associated with the use of study treatment (i.e., during and/or after administration of study treatment), whether or not considered related to study treatment; • Any unfavorable and unintended sign(s), symptom(s) or medical condition, • Any abnormal laboratory values or other test results (e.g., ECG, X-ray) that fulfill at least one of the following criteria: • They are associated with",
        "clinical signs or symptoms, • They are considered clinically significant, • They require therapy, • They require a change in study treatment, including discontinuation from study treatment.",
        "• Any new disease or exacerbation of an existing disease (a worsening in the character, frequency, or severity of a known medical condition or the underlying medical condition that is under study), • Any recurrence of an intermittent medical condition (e.g., headache) not present at screening."
      ],
      "chips": [
        "CPBQ663A12101",
        "p100/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n100.jpg",
      "cap": "Protocol page 100 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 101 of 170 · In addition, any medical occurrence related to a protocol-mandated requirement after…",
      "audio": [
        "In addition, any medical occurrence related to a protocol-mandated requirement after informed consent (e.g., intervention or procedure or assessment), are considered AEs.",
        "This includes, but is not limited to: • A pharmaceutical/medicinal product that is used in this study as described in this protocol (e.g., AxMP used as background therapy, rescue medication, diagnostic or challenge agent, in a run-in phase or to assess a study endpoint), • Wash-out or change of dose of a previous treatment, • A procedure performed such as biopsies or medical device use Collecting and assessing AEs The occurrence of AEs must be sought by non-directive",
        "questioning of the participant at each visit during the study. To prevent reporting bias, participants should not be questioned regarding the specific occurrence of one or more AEs. AEs also may be detected when they are volunteered by the participant during or between visits or through physical examination findings, laboratory test findings, or other assessments.",
        "Clinically significant abnormal laboratory values or test results must be identified through a review of values outside of normal ranges/clinically notable ranges, significant changes from baseline or the previous visit, or values considered to be non-typical in participant with the underlying disease. Alert ranges for laboratory and other test abnormalities are included in Section 8.10.3.",
        "Adverse events may be reported by the participant or, when appropriate, by a caregiver, surrogate, or the participant’s legally authorized representative (if allowed according to local law). The investigator will attempt to establish a diagnosis of the medical occurrence (including lab abnormalities that constitute AEs) based on signs, symptoms, and/or other clinical information.",
        "Whenever possible, the diagnosis (not the individual signs/symptoms) will be documented as the AE. However, if the signs and/or symptoms cannot be medically characterized as a single diagnosis or syndrome at the time of reporting, each individual event should be recorded.",
        "Medical occurrences that begin before the start of study treatment but after obtaining informed consent and are not related to a protocol-mandated intervention/procedure/assessment will be recorded as current medical conditions on the Medical History CRF. For each AE, the investigator must assess: 1. The Common Toxicity Criteria (CTC) AEs will be assessed and graded according to the Common Terminology Criteria for Adverse Events (CTCAE) version 5.0. 2.",
        "The causality The investigator is obligated to assess the relationship between any treatment used in the study (gallium-68 D W J 155 or actinium-225 D W J 155) and each occurrence of each AE. The investigator will use clinical judgment at the time to determine the relationship. A reasonable possibility of a relationship conveys that there are facts, evidence, and/or arguments to suggest a causal relationship, rather than a relationship cannot be ruled out.",
        "Alternative causes, such as"
      ],
      "chips": [
        "CPBQ663A12101",
        "p101/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n101.jpg",
      "cap": "Protocol page 101 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 102 of 170 · underlying disease(s), concomitant therapy, and other risk factors, as well as the…",
      "audio": [
        "underlying disease(s), concomitant therapy, and other risk factors, as well as the temporal relationship of the event to study intervention administration, will be considered and investigated.",
        "If the event is due to lack of efficacy or progression of underlying illness (i.e., progression of the study indication) the assessment of causality will usually be ‘Not suspected.’ The rationale for this guidance is that the symptoms of a lack of efficacy or progression of underlying illness are not caused by the trial drug, they happen in spite of its administration and/or both lack of efficacy and progression of underlying disease can only be evaluated meaningfully by an",
        "analysis of cohorts, not on a single participant. For causality assessment, the investigator will also consult the IB and/or product information, for marketed products. The causality assessment is one of the criteria used when determining regulatory reporting requirements. Handling of AEs All adverse events must be treated appropriately. More information about how to manage AEs may be found in this protocol and in the IB.",
        "Information about adverse drug reactions can also be found in product information for marketed products. Once an AE is detected, the Investigator must pro-actively follow up the participant, until resolution of the AE, or until it is judged to be not recovered/not resolved (e.g., continuing at the end of the study), or until stabilization, or until the participant is lost to follow-up or withdraws their consent.",
        "Any change in severity or suspected relationship to study treatment must be assessed at each visit (or more frequently, if necessary).",
        "Progression of malignancy (including fatal outcomes), if documented by use of appropriate method (for example, per RECIST criteria for solid tumors or per Cheson's guidelines for hematological malignancies), should not be reported as an adverse/serious adverse event, except if the Investigator considers that progression of malignancy is related to study treatment.",
        "Adverse events separate from the progression of malignancy (for example deep vein thrombosis at the time of progression or hemoptysis concurrent with finding of disease progression) will be reported per usual guidelines used for such events with proper attribution regarding causality to the study treatment.",
        "Timeframe of recording of AEs For participants who receive gallium-68 D W J 155 but do not proceed with actinium-225 D W J 155 treatment, AE recording should be continued until 3 days post gallium-68 D W J 155 administration. For participants who receive actinium-225 D W J 155 treatment, AE recording should be continued for at least 180 days following the last administration of actinium-225 D W J 155.",
        "Following the last 225AcDWJ155 administration, all AEs, irrespective of causality will be collected for 28 days (for participants under 4-week schedule), 42 days (for participants under 6-week schedule) or 56 days (for participants under 8-week schedule), after which only AEs suspected to be related to the study treatment will be collected in the Adverse Events CRF. For S A Es occurring during follow-up, refer to Section 8.10.3."
      ],
      "chips": [
        "CPBQ663A12101",
        "p102/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n102.jpg",
      "cap": "Protocol page 102 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 103 of 170 · If a suspicion that medical occurrence could be related to study treatment (and/or…",
      "audio": [
        "If a suspicion that medical occurrence could be related to study treatment (and/or interaction with study treatment) cannot be ruled out, the reporting rules for AEs related to study treatment apply. In addition, any medical occurrence related to a trial-mandated requirement (e.g., intervention or procedure or assessment) will be collected as AEs from signing of informed consent.",
        "8.10.2 Definition and recording of serious adverse events An S A E is defined as any untoward medical occurrence that, at any dosage, meets any one of the following criteria: • Results in death • Is life-threatening Life-threatening in the context of a S A E refers to a medical occurrence in which the participant was at risk of death at the time of the reaction; it does not refer to a medical occurrence that hypothetically might have caused death if it were more severe",
        "(please refer to the ICH-E2D Guidelines).",
        "• Results in persistent or significant disability/incapacity • Constitutes a congenital anomaly or birth defect • Requires inpatient hospitalization or prolongation of existing hospitalization, unless hospitalization is for: • Routine treatment or monitoring of the studied indication, not associated with any deterioration in condition • Elective or pre-planned treatment for a pre-existing condition that is unrelated to the indication under study and has not worsened since",
        "signing the informed consent • Social reasons and respite care in the absence of any deterioration in the participant’s general condition • Treatment on an emergency outpatient basis for an event not fulfilling any of the definitions of a S A E given above and not resulting in hospital admission • Is medically significant, e.g., defined as an event that jeopardizes the participant or may require medical or surgical intervention to prevent one of the outcomes listed above",
        "(e.g., Hy’s Law events) Medical and scientific judgment should be exercised in deciding whether other situations should be considered a serious adverse event, such as important medical events that might not be immediately life-threatening or result in death or hospitalization but might jeopardize the participant or might require intervention to prevent one of the other outcomes listed above.",
        "Such events should be considered as “medically significant.” Examples of such events are intensive treatment in an emergency room or at home for allergic bronchospasm, blood dyscrasias, or convulsions that do not result in hospitalization or development of dependency. Any suspected transmission via a medicinal product of an infectious agent is also considered a serious adverse event.",
        "All new malignant neoplasms will be assessed as serious under “medically significant” if other seriousness criteria are not met and the malignant neoplasm is not a disease progression of the study indication."
      ],
      "chips": [
        "CPBQ663A12101",
        "p103/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n103.jpg",
      "cap": "Protocol page 103 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 104 of 170 · For participants with normal AST and ALT values at baseline, these thresholds used…",
      "audio": [
        "For participants with normal AST and ALT values at baseline, these thresholds used to define Hy's Law are defined as • AST or ALT > 3 x ULN, combined with • total bilirubin > 2 x ULN or jaundice in the absence of cholestasis (defined as ALP < 2 ULN), or other causes of hyperbilirubinemia.",
        "For participants with abnormal AST and ALT values at baseline, these thresholds are modified to • ALT or AST > 3 x baseline AND/OR ALT or AST >8.0 x ULN, whichever occurs first, combined with • total bilirubin > 2 x baseline AND > 2.0 x ULN or jaundice in the absence of cholestasis (defined as ALP < 2 ULN), or other causes of hyperbilirubinemia.",
        "For this reason, a potential Hy’s Law case requires expedited reporting, and will be handled as a serious unexpected adverse event (assessing it as medically significant in the absence of any other seriousness criteria). It must be reported as an S A E to the sponsor promptly (i.e., even before all other possible causes of liver injury have been excluded).",
        "Reporting should include all available information, especially that needed for evaluating the diagnosis, severity and likelihood that the study treatment caused the reaction. For participant monitoring and to better understand potential etiologies, the investigator must initiate a close follow-up until complete resolution of the problem and completion of all attempts to obtain supplementary data.",
        "8.10.3 S A E reporting To ensure participant safety, every S A E, regardless of causality, occurring after the start of study treatment or associated with any other study procedure until 180 days after the last administration of actinium-225 D W J 155 must be reported to Novartis/Sponsor safety immediately, without undue delay, but under no circumstances later than within 24 hours of obtaining knowledge of the events (Note: If more stringent, local regulations regarding",
        "reporting timelines prevail). In addition, any S A Es related to a protocol-mandated requirement from signing of informed consent will be collected and reported to Novartis as described above. Any S A Es experienced after the completion of the 180 days safety follow-up period should be reported to Novartis if the investigator suspects a causal relationship to study treatment until end of 36-month long-term follow-up, unless otherwise specified by local law/regulations.",
        "S A Es of second primary malignancies regardless of causality will be collected until the end of the 36-month long-term follow-up period. Detailed instructions regarding the submission process and requirements are to be found in the Investigator folder provided to each site. Information about all S A Es is collected and recorded on the electronic Serious Adverse Event Report Form.",
        "All applicable sections of the form must be completed in order to provide a clinically thorough report. The investigator must review and provide an assessment of causality for each S A E. There may be situations in which an S A E has occurred, and the investigator has minimal information to include in the initial report to Novartis. However, it is very important that the investigator always make an assessment of causality for every event before the initial transmission of the"
      ],
      "chips": [
        "CPBQ663A12101",
        "p104/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n104.jpg",
      "cap": "Protocol page 104 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 105 of 170 · SAE data to Novartis",
      "audio": [
        "S A E data to Novartis. The investigator may change their opinion of causality in light of followup information and send an S A E follow-up report with the updated causality assessment.",
        "All follow-up information for the S A E including information on complications, progression of the initial S A E and recurrent episodes must be reported as follow-up to the original episode immediately, without undue delay, but under no circumstances later than within 24 hours of the Investigator receiving the follow-up information (Note: If more stringent, local regulations regarding reporting timelines prevail).",
        "Any potential Hy’s Law case will be handled as a serious adverse event associated with the use of the study treatment (assessing it as medically significant in the absence of any other seriousness criteria) and must be reported as S A E to the sponsor promptly (i.e., even before all other possible causes of liver injury have been excluded and even if abnormal transaminases values at baseline).",
        "Reporting will include all available information, especially that needed for evaluating the severity and likelihood that the study treatment caused the reaction. The investigator must initiate a close follow-up until complete resolution of the problem and completion of all attempts to obtain supplementary data.",
        "Any S A Es experienced after the safety follow-up period (as described above) should only be reported to Novartis Safety if the Investigator suspects a causal relationship to study treatment, unless otherwise specified by local law/regulations.",
        "Reporting of Suspected Unexpected Serious Adverse Reactions (SUSARs) If an S A E is not previously documented in the IB or product information for marketed products and is thought to be related to any study treatment, it constitutes a Suspected Unexpected Serious Adverse Reaction (SUSAR). Novartis may urgently require further information from the investigator for HA reporting.",
        "Novartis may need to issue an Investigator Notification (IN) to inform all investigators involved in any study with the same study treatment. Novartis will comply in reporting of SUSARs to the competent authorities and relevant ethics committees in accordance with national regulatory requirements in participating countries, including EU Clinical Trial Regulation 536/2014.",
        "8.10.4 Pregnancy For all women of childbearing potential, a pregnancy test will be taken before gallium-68 D W J 155 administration, before each actinium-225 D W J 155 administration, and during post-treatment followup as indicated in Section 1.3.",
        "Details of all pregnancies in female participants and, if indicated, female partners of male participants will be collected after the start of study treatment and until period for reporting pregnancies should align with the time period for post treatment contraception determined in Exclusion criteria. The investigator must report to Novartis each pregnancy within 24 hours of learning of its occurrence.",
        "If a female study participant becomes pregnant, study treatment must be stopped."
      ],
      "chips": [
        "CPBQ663A12101",
        "p105/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n105.jpg",
      "cap": "Protocol page 105 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 106 of 170 · The pregnancy consent form must be presented to the study participant",
      "audio": [
        "The pregnancy consent form must be presented to the study participant. The participant must be given adequate time to read, review and sign the pregnancy consent form. This consent form is necessary to allow the investigator to collect and report information regarding the pregnancy. The investigator must counsel the participant, discuss the risks of the pregnancy and the possible effects on the fetus and monitor the participant.",
        "As per regulatory requirement, the pregnancy must be followed, up to one year after the estimated date of delivery to determine outcome, including spontaneous or voluntary termination, details of the birth, and the presence or absence of any birth defects, congenital abnormalities, or maternal and/or newborn complications. Pregnancy follow-up is to be recorded on the same form and must include an assessment of the relationship to study treatment for any pregnancy outcome.",
        "Any pregnancy complication must be reported as an AE or S A E. Elective termination of a pregnancy for medical reasons, abnormal pregnancy outcomes (e.g., spontaneous abortion, fetal death, stillbirth, congenital anomalies, birth defect, ectopic pregnancy) will be reported as S A Es. Any post study pregnancy-related S A E considered reasonably related to the study treatment by the investigator must be reported to Novartis.",
        "While the investigator is not obligated to actively seek this information in former study participants/pregnant female partner, they may learn of an S A E through spontaneous reporting. If a female partner of a male trial participant who took study treatment in this study becomes pregnant, consent to report information regarding these pregnancy outcomes must be requested from the mother.",
        "After consent is provided, the pregnancy reporting will occur up to one year after the estimated date of delivery. 8.10.5 Disease-related events and/or disease-related outcomes not qualifying as AEs or S A Es Progression of underlying malignancy is not reported as an adverse event and/or serious adverse event if it is clearly consistent with the suspected progression of the underlying cancer as defined by RECIST v1.1 criteria, or other criteria as determined by protocol.",
        "Hospitalization due solely to the progression of underlying malignancy should NOT be reported as a serious adverse event. Clinical symptoms of progression may be reported as adverse events if the symptom cannot be determined as exclusively due to the progression of the underlying malignancy or does not fit the expected pattern of progression for the disease under study.",
        "If it is unclear whether an adverse event is due only to the disease under study, it should be reported as an AE and/or S A E. 8.10.6 Adverse events of special interest Any AE that constitutes a D L T should be reported like a grade 3 and 4 adverse event."
      ],
      "chips": [
        "CPBQ663A12101",
        "p106/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n106.jpg",
      "cap": "Protocol page 106 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 107 of 170 · Protocol body · page 107",
      "audio": [
        "8.10.7 Reporting of study treatment errors, study treatment misuse/abuse and overdosage Study treatment errors including study treatment overdosage are unintentional errors in the prescribing, dispensing, and administration of study treatment. Study treatment misuse refers to situations where the study treatment is intentionally and inappropriately used not in accordance with the protocol.",
        "Study treatment abuse corresponds to the persistent or sporadic, intentional excessive use of study treatment, which is accompanied by harmful physical or psychological effects. Study treatment errors, including study treatment overdosage and uses outside of what is foreseen in the protocol, including misuse or abuse, must be reported on the AE (or S A E, if the event meets the definition of an S A E) CRF, irrespective of it being associated with AE/S A E.",
        "8.11 Optional Additional Research If the participant agrees, by signing the optional consent for Additional Research, data and/or biological samples that remain after analysis is completed may be used for additional research to help develop ways to detect, monitor or treat human diseases and/or learn more about related human diseases.",
        "A decision to perform such exploratory research studies would be based on outcome data from this study or from new scientific findings related to the drug class or disease, as well as assay availability. 9 Statistical considerations Data from participating centers in this protocol will be combined, so that an adequate number of participants will be available for analysis.",
        "Data will be summarized using descriptive statistics (continuous data) and/or contingency tables (categorical data) for demographic and baseline characteristics, and efficacy, safety, PK, and pharmacodynamics measurements. Dosage escalation decisions will be based on a synthesis of all relevant data available from all dosage levels evaluated in the ongoing study including safety information, available pharmacodynamics and preliminary anti-tumor activity data.",
        "In particular, the following core data must be reviewed for each participant in each cohort to be discussed in the DEM, prior to deciding the next steps: • Safety: AEs, S A Es, D L Ts. • Laboratory parameters: hematological parameters (hemoglobin, platelets, white blood cells, neutrophils), renal function test (blood urea nitrogen (BUN)/urea, creatinine, sodium, potassium), liver function tests (AST, ALT, total bilirubin, ALP).",
        "Dosing information collected during the D L T observation period, prior and concomitant medications, demographics and diagnosis and extent of cancer (which are relevant to inclusion/exclusion criteria), date of visit and end of treatment phase disposition (if end of treatment has already occurred for a participant who is in a cohort to be discussed in the DEM). Study data may be analyzed and reported in a primary CSR.",
        "The cut-off date for the primary analysis is defined as the date when all participants have completed at least two post-baseline tumor assessments or completed the end of treatment visit (see Section 7.1 for end of treatment definition), whichever"
      ],
      "chips": [
        "CPBQ663A12101",
        "p107/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n107.jpg",
      "cap": "Protocol page 107 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 108 of 170 · Protocol body · page 108",
      "audio": [
        "comes later. Any additional data for participants continuing to receive study treatment past the data cutoff date for the primary CSR, as allowed by the protocol, will be reported at completion of the study in a final CSR. All summaries, listings, figures and analyses will be performed by study arms and treatment groups (unless otherwise specified). Additional summaries by indication and by dosage may be produced as relevant for selected endpoints (e.g.",
        "clinical efficacy activity). Screen failure participants, as described in Section 5.4, and the reasons for not starting the study treatment will be reported in a listing but will not be included in any analyses. Details of the statistical analysis and data reporting will be provided in the Statistical Analysis Plan (SAP).",
        "9.1 Analysis sets 9.1.1 Full Analysis Set and Safety Set The Full Analysis Set (FAS) and Safety Set (SS) comprise all participants who received at least one administration of study treatment actinium-225 D W J 155. Participants will be analyzed according to the study treatment received, defined as the assigned treatment if the participant took at least one administration of that treatment or the first treatment received if the assigned treatment was never received.",
        "9.1.2 Dose-determining Analysis Set The DDS for actinium-225 D W J 155 includes all FAS participants who met the minimum exposure criterion and have sufficient safety evaluations (as determined by Novartis/Sponsor and Investigator) or experienced a D L T during the D L T-evaluation period. The D L T evaluation period for the 6-week schedule is the first 6 weeks of dosing, while for the 4-week and 8-week schedules it is first 4 and 8 weeks of dosing, respectively.",
        "A participant has met the minimum exposure criterion if she/he received one administration as per the received schedule (i.e. at least 80% of the planned administered activity of actinium-225 D W J 155) during the D L T evaluation period. Participants in the DDS will be analyzed according to the actual study treatment received during the first cycle.",
        "9.1.3 Pharmacokinetic Analysis Set The pharmacokinetic analysis set (PAS) will include all participants from the SS with at least one available valid (not flagged for exclusion) PK sample and with no protocol deviations that impact the interpretability of the data. This analysis set will be used for all PK data analysis.",
        "9.1.4 gallium-68 D W J 155 Safety Set gallium-68 D W J 155 Safety Set (SS-gallium-68 D W J 155) includes all participants who received the administration of gallium-68 D W J 155. This analysis set will be the basis of the safety and imaging summaries for gallium-68 D W J 155. This includes screened participants who receive gallium-68 D W J 155 but not actinium-225 D W J 155."
      ],
      "chips": [
        "CPBQ663A12101",
        "p108/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n108.jpg",
      "cap": "Protocol page 108 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 109 of 170 · Protocol body · page 109",
      "audio": [
        "9.1.5 Dosimetry Analysis Set The dosimetry analysis set (DAS) will include all participants from the SS who provided at least one set of dosimetry of data. A set of dosimetry data is defined as having sufficient imaging assessment and/or related blood PK assessment to enable a dosimetry estimate. The DAS will be used for summaries (tables and figures) and listings of dosimetry. 9.2 Statistical analyses 9.2.1 General considerations Not applicable.",
        "9.2.2 Participant demographics and other baseline characteristics Demographic and other baseline data including disease characteristics will be summarized descriptively by treatment group for the FAS and gallium-68 D W J 155 SS. Categorical data will be presented as frequencies and percentages. For continuous data, mean, standard deviation, median, minimum, and maximum will be presented. For selected parameters, 25th and 75th percentiles will also be presented.",
        "Relevant medical histories and current medical conditions at baseline will be summarized by system organ class and preferred term, by treatment group. 9.2.3 Treatments The SS will be used for the analyses below. Categorical data will be summarized as frequencies and percentages. For continuous data, mean, standard deviation, median, 25th and 75th percentiles, minimum, and maximum will be presented.",
        "The duration of exposure in days to actinium-225 D W J 155 will be summarized by means of descriptive statistics using the SS. The number of participants with dosing adjustments (reductions, interruption, or permanent discontinuation) and the reasons will be summarized by treatment group and all dosing data will be listed. Concomitant medications and significant non-drug therapies prior to and after the start of the study treatment will be listed by treatment group.",
        "9.3 Primary endpoint(s)/estimand(s) analysis 9.3.1 Safety endpoints 9.3.1.1 Definition of primary endpoint(s) The primary endpoints are described in Table 3-1. 9.3.1.2 Statistical hypothesis, model, and method of analysis For summaries of D L Ts, the DDS will be used. For all safety analyses, except the D L T analyses, the safety set (SS) will be used. All listings and tables will be presented by treatment group."
      ],
      "chips": [
        "CPBQ663A12101",
        "p109/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n109.jpg",
      "cap": "Protocol page 109 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 110 of 170 · The overall observation period will be divided into four mutually exclusive…",
      "audio": [
        "The overall observation period will be divided into four mutually exclusive segments: Pre-treatment period for actinium-225 D W J 155 • Starting 4 days after first gallium-68 D W J 155 administration (including gallium-68 D W J 155 administration day) to the day before the first actinium-225 D W J 155 administration if participant is dosed with actinium-225 D W J 155 > 4 days after gallium-68 D W J 155 administration (including 68GaDWJ155 administration day).",
        "On-treatment period for actinium-225 D W J 155 • From date of first administration of study treatment to 42 days for 6-week schedule (28 days for 4-week schedule or 56 days for 8-week schedule) after date of last actual administration of actinium-225 D W J 155 (including last administration date).",
        "Short-term Post-treatment period for actinium-225 D W J 155 • Starting at day 43 to day 180 for a 6-week schedule, and day 29 to day 180 for a 4-week schedule after last administration of actinium-225 D W J 155 (or day 57 to day 180 for a 8-week schedule). Long-term Post-treatment period for actinium-225 D W J 155 • Starting at day 181 after last administration of actinium-225 D W J 155.",
        "Dosage-limiting toxicities Dosage escalation will be based upon the estimation of the probability of D L T in D L T evaluation period (4 weeks for 4-week schedule, 6 weeks for 6-week schedule and 8 weeks for 8-week schedule) for participants in the DDS. This probability will be estimated by a Bayesian adaptive approach described below. In addition, all other safety, clinical, PK, and pharmacodynamics data will be considered for dosage escalation.",
        "Bayesian adaptive approach The dosage escalation part of this study will be guided by a Bayesian analysis of D L T data for actinium-225 D W J 155 in D L T evaluation period. The relationship between administered activity and the probability of D L T is modelled using logistic regression. Details of the model are given in Section 10.4.",
        "Additional dosing regimens In case any additional dosing schedule is to be tested or indication specific dosage escalation strategy is needed during the study, separate Bayesian Logistic Regression Model (BLRM) or B H L R M may be implemented to guide the dosage escalation by the E W O C principle for the new dosing regimen or by indication.",
        "A full description including parameter specification, operating characteristics and hypothetical dosing scenarios of the BLRM/B H L R M will be given in a stand-alone document(s), prior to the first participants is treated on the cohort with new dosing regimen or for indication specific strategy. The additional model specification will also be presented in the primary study report.",
        "Assessment of participant risk After each cohort of participants, the posterior distribution for the risk of D L T for new participants at administered activities of interest will be evaluated. The posterior distributions"
      ],
      "chips": [
        "CPBQ663A12101",
        "p110/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n110.jpg",
      "cap": "Protocol page 110 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 111 of 170 · will be summarized to provide the posterior probability that the risk of DLT lies…",
      "audio": [
        "will be summarized to provide the posterior probability that the risk of D L T lies within the following intervals: Table 9-1 Under-dose, target, and excessive toxicity intervals of posterior probabilites of the D L T rates Under-dosing: [0 , 0.16) Targeted toxicity: [0.16 , 0.33) Excessive toxicity: [0.33 , 1] The Escalation with Overdose Control (E W O C) Principle Dosing decisions are guided by the E W O C principle (Rogatko et al 2007).",
        "An administered activity may only be used for newly enrolled participants if the risk of excessive toxicity at that dosage level is less than 25%. Prior distributions There are no available pre-clinical data informing the radioactivity-D L T relationship for 225ACDWJ155. Therefore, weakly informative priors will be used for the associated BLRM model parameters. Reporting Bayesian analyses will be based on the DDS.",
        "D L Ts will be listed, and their incidence summarized by primary system organ class and worst grade (CTCAE version 5.0), using the DDS. Adverse events All information obtained on adverse events will be displayed by treatment group and participant.",
        "The number (and percentage) of participants with treatment emergent AEs (events started after the first administration of study medication or events present prior to start of treatment but increased in severity based on preferred term) will be summarized in the following ways: • by treatment, primary system organ class and preferred term. • by treatment, primary system organ class, preferred term and maximum severity.",
        "• by treatment, Standardized MedDRA Query (SMQ) and preferred term Separate summaries will be provided for study treatment related AEs, death, S A Es, other significant AEs leading to discontinuation from study and adverse events leading to adjustment in administered activity or schedule. A participant with multiple adverse events within a primary system organ class is only counted once towards the total of the primary system organ class.",
        "AEs which will be counted for a specific treatment period are those which are treatment emergent. These events are those with an onset after the start of the treatment period, or which were present prior to the start of the treatment period but increased in severity, changed from being not suspected to being suspected of study treatment relationship, or developed into S A Es after the start of the treatment period."
      ],
      "chips": [
        "CPBQ663A12101",
        "p111/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n111.jpg",
      "cap": "Protocol page 111 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 112 of 170 · Summary tables for AEs will include only AEs that started or worsened during the…",
      "audio": [
        "Summary tables for AEs will include only AEs that started or worsened during the on-treatment period, the treatment-emergent AEs. The incidence of treatment-emergent adverse events (new or worsening from baseline) will be summarized by system organ class and or preferred term, severity (based on CTCAE grades), type of adverse event, and relationship to study treatment. Serious adverse events, non-serious adverse events during the on-treatment period will be tabulated.",
        "All deaths (on-treatment and post-treatment) will be summarized. All AEs, deaths and serious adverse events (including those from the pre and post-treatment periods) will be listed and those collected during the pre-treatment and post-treatment period will be flagged. Vital signs Data on vital signs will be listed, with notable values flagged, and the incidence of abnormal vital signs will be summarized by treatment group.",
        "• summary of notable vital sign values • table with descriptive statistics at baseline, one or several post-baseline time points and change from baseline to this/these post-baseline time points 12-lead ECG 12-lead ECGs including PR, QRS, QT, QTcF, and HR intervals will be obtained for each participant during the study. ECG data will be read and interpreted locally • summary of notable ECG values. • listing of ECG evaluations for all participants with at least one abnormality.",
        "Clinical Laboratory Evaluations Summary statistics will be provided by treatment and visit/time. Shift tables using the low/normal/high/ (low and high) classification will be used to compare baseline to the worst on-treatment value. Grading of laboratory values will be assigned programmatically as per NCI CTCAE version 5.0. The calculation of CTCAE grades will be based on the observed laboratory values only, clinical assessments will not be taken into account.",
        "CTCAE Grade 0 will be assigned for all non-missing values not graded as 1 or higher. Grade 5 will not be used. For laboratory tests where grades are not defined by CTCAE version 5.0, results will be categorized as low/normal/high based on laboratory normal ranges.",
        "The following summaries will be generated separately for hematology, and biochemistry tests: For laboratory tests where grades are defined by CTCAE version 5.0 • Worst post-baseline CTCAE grade (regardless of the baseline status). Each participant will be counted only once for the worst grade observed post-baseline."
      ],
      "chips": [
        "CPBQ663A12101",
        "p112/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n112.jpg",
      "cap": "Protocol page 112 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 113 of 170 · • Shift tables using CTCAE version 5",
      "audio": [
        "• Shift tables using CTCAE version 5.0 grades to compare baseline to the worst ontreatment value For laboratory tests where grades are not defined by CTCAE version 5.0, • Shift tables using the low/normal/high/ (low and high) classification to compare baseline to the worst on-treatment value. Tolerability Tolerability of study treatment will be assessed by summarizing the number of and reasons for dosage delays and dosage reductions.",
        "Dosage intensity will also be tabulated by treatment group. Refer to Section 9.2.3. 9.3.1.3 Handling of missing values/censoring/discontinuations Participant safety data will be reported up to the cut-off date, end of post-treatment (if discontinued), death, loss to follow up, or withdrawal of consent/opposition to use data/biological samples, whichever happened first. Missing values will not be imputed and will be reported as such.",
        "9.4 Secondary endpoint(s)/estimand(s) analysis 9.4.1 Efficacy and/or pharmacodynamic endpoint(s) Best overall response (BOR) rate BOR is defined as the best response recorded from the start of the treatment until disease progression/recurrence as per local review and according to RECIST v1.1. BOR rate will be summarized along with the corresponding 90% exact CI using FAS.",
        "Overall response rate (ORR) ORR is defined as the proportion of participants with a BOR of complete response (CR) or partial response (PR) as per local review and according to RECIST v1.1. It will be summarized along with the corresponding 90% exact CI using FAS. Duration of Response (DOR) DOR is the time between the first documented response (CR or PR) and the date of progression as per local review and according to RECIST v1.1, or death due to any cause.",
        "Here, death due to any cause is considered as an event to be conservative and align with PFS event definition. DOR may be presented graphically if enough events are available for analysis, using Kaplan‑Meier plots for all participants who achieved a CR/PR in the study. The median DOR and corresponding 90% CI will be presented. Analysis will include responders with confirmed responses.",
        "Disease control rate (DCR) DCR is defined as the proportion of participants with a BOR of CR, PR, or stable disease as per local review and according to RECIST v1.1. It will be summarized along with the corresponding 90% exact CI, using FAS."
      ],
      "chips": [
        "CPBQ663A12101",
        "p113/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n113.jpg",
      "cap": "Protocol page 113 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 114 of 170 · Progression-free survival (PFS) rate at pre-specified time points and median PFS PFS…",
      "audio": [
        "Progression-free survival (PFS) rate at pre-specified time points and median PFS PFS is defined as the time from the date of start of treatment to the date of the first documented progression as per local review and according to RECIST v1.1 or death due to any cause. If a participant has not experienced an event at the time of the analysis, PFS will be censored at the date of the last adequate tumor assessment.",
        "PFS may be summarized at the RD(s) and for all other dosages with at least 5 participants treated, using the Kaplan-Meier method. Median PFS, with corresponding 95% CI, and 25th and 75th percentiles (Brookmeyer and Crowley 1982, Klein and Moeschberger 1997) may be presented. KM estimates for PFS rate at pre-specified time points (defined in the SAP), along with 90% CI (Greenwood’s formula, (Kalbfleisch and Prentice 2002)) may also be provided.",
        "The number (%) of progressions, deaths and censored participants will also be summarized. 9.4.2 Pharmacokinetics 9.4.2.1 Blood pharmacokinetics For PK analysis, the PAS will be used. While actinium-225 decays physically without gamma radiation, PK samples can still be measured by a standard gamma counter due to the small gamma radiation coming from the decay of daughter isotopes of actinium-225 (i.e., Fr-221 and Bi-213).",
        "As daughter isotopes are known to get released from the chelator moiety of a radioligand peptide due to nuclear recoil, radiation measurements at the time of PK blood sampling cannot differentiate between free daughter isotopes in systemic circulation (unbound to ligands) and actinium-225-bound-peptide.",
        "At the secular equilibrium (at a time > 6 h) initial free daughter isotopes will have decayed, and the actinium-225 originally bound to peptide which is reflective of D W J 155 concentration in blood, will be measurable due the gamma radiation emitting by the daughters.",
        "The actinium-225 D W J 155 PK analysis will be performed based on decay-corrected blood radioactivity concentration data measured at secular equilibrium (> 6 h post-collection of the sample) using a calibrated gamma-counting device and converted to mass units, pending confirmation of metabolic stability.",
        "Radioactivity measurements are decay-corrected to the date and time of start of infusion and conversion to mass units is based on the actual volumetric activity and peptide mass content as indicated in the certificate of release of the administered activity and collected in a dedicated eCRF.",
        "Blood radioactivity concentration and mass concentration data will be listed by administered activity/cycle or dosage, participant and visit/sampling time point, separately for the dosage escalation and expansion part of the study, and overall (i.e., pooled across escalation and expansion).",
        "Descriptive summary statistics will be provided by administered activity/cycle or dosage and study part (dosage escalation and expansion study part) and overall, visit/sampling time point, including the frequency (n, %) of concentrations below the lower limit of quantification (LLOQ) and reported as zero, mean (arithmetic and geometric), standard deviation, coefficient of variation (CV%) (arithmetic and geometric), median, minimum, and maximum."
      ],
      "chips": [
        "CPBQ663A12101",
        "p114/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n114.jpg",
      "cap": "Protocol page 114 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 115 of 170 · The following PK parameters may be determined, as appropriate, by non-compartmental…",
      "audio": [
        "The following PK parameters may be determined, as appropriate, by non-compartmental method(s) using the actual recorded sampling times, with Phoenix WinNonlin (Version 8.3.4 or higher): the maximum blood concentrations (Cmax) along with the times at which they occurred (Tmax), as well as the area under curve (AUC), systemic clearance (CL), volume of distribution during the terminal phase (Vz), effective and biologic terminal half-life (Table 9-2).",
        "Early analysis of preliminary PK may be conducted based on preliminary data prior to database lock. Nominal time instead of actual elapsed time may be used. Drug concentrations below LLOQ will be treated as missing for the calculation of the geometric means and geometric CV%, and as zero for all other calculations including calculation of PK parameters. Missing values for any PK parameters or concentrations will not be imputed and will be treated as missing.",
        "Blood PK parameters will be listed by administered activity/cycle or dosage and participant, separately for the dosage escalation and expansion part of the study, and overall and will include mean (arithmetic and geometric), standard deviation, coefficient of variation (CV%) (arithmetic and geometric), median, minimum, and maximum. An exception to this is Tmax where median, minimum, and maximum will be presented.",
        "Table 9-2 Non-compartmental pharmacokinetic parameters AUClast The AUC from time zero to the last measurable concentration sampling time (tlast) (mass x time x volume-1) AUCinf The AUC from time zero to infinity (mass x time x volume-1) Cmax The maximum (peak) observed plasma, blood, serum, or other body fluid drug concentration after single administration (mass x volume-1) Tmax The time to reach maximum (peak) plasma, blood, serum, or other body fluid drug concentration",
        "after single administration (time) T1/2 The biological elimination half-life associated with the terminal slope (λz) of a semi logarithmic concentration-time curve (time).",
        "T1/2eff Effective half-life derived from biological half-life and physical half-life of actinium-225 CL The total body clearance of drug from the plasma (volume x time-1) Vz The apparent volume of distribution during terminal phase (associated with λz) (volume) 9.4.3 Safety properties of gallium-68 D W J 155 For all safety analyses, the gallium-68 D W J 155 safety set (SS-gallium-68 D W J 155) will be used.",
        "The overall observation period will be divided into two mutually exclusive segments:"
      ],
      "chips": [
        "CPBQ663A12101",
        "p115/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n115.jpg",
      "cap": "Protocol page 115 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 116 of 170 · Pre-evaluation period for 68Ga-DWJ155: • from day of participant’s first informed…",
      "audio": [
        "Pre-evaluation period for gallium-68 D W J 155: • from day of participant’s first informed consent to the day before first administration of gallium-68 D W J 155 Within-evaluation period for gallium-68 D W J 155: • from the date of the first administration of gallium-68 D W J 155 to 3 days after first 68GaDWJ155 administration (including gallium-68 D W J 155 administration day) Adverse events for assessing the safety of gallium-68 D W J 155 will be summarized in a similar",
        "way as in Section 9.3.1. 9.5 Exploratory endpoint(s)/estimand(s) analysis Analysis of dosimetry, PK/pharmacodynamics relationships and imaging properties of 68GaDWJ155 are presented below, all remaining exploratory endpoints will be detailed in the Statistical Analysis Plan (SAP). 9.5.1 Dosimetry For dosimetry analysis, the DAS will be used. Dosimetry analysis and results will be done by a central specialized vendor and reported in a separate document by the vendor.",
        "Details on the analysis are described in the Dosimetry Charter. Briefly, dosimetry assessments will be performed from radioactivity quantification in organs receiving the highest activity, identified visually. Regions or Volumes of interest (ROIs/VOIs) will be drawn on those selected organs and tumor lesions on the SPECT images serially acquired post actinium-225 D W J 155 infusion.",
        "ROI will be placed over these organs to determine relative radiotracer uptake calculated as a percentage of the injected activity (%IA), separately for Fr-221 and Bi-213 and/or combined across energy windows. Dosimetry in red marrow may be estimated using imaging (SPECT C T) and/or blood-based methodologies, as appropriate, from the serial venous blood sampling and gamma counter measurements, as described in Section 8.3.",
        "For graphical representation of %IA over time, the radioactivity values at each timepoint/organ are decay corrected to the time of start of infusion. Time activity curves (TACs) will be generated from the amount of radioactivity in one given tissue at a given moment. TACs will be fitted to mono- or poly-exponential curves, as appropriate. Other methods may be considered and specified in the Dosimetry Charter.",
        "Tumor lesions selected for dosimetry assessment should match the lesions used for RECIST v1.1 assessment, whenever feasible (e.g., adequate size, uptake observed in the SPECT), accounting for the technical limitations in dosimetric analysis of actinium-225 radio-therapies. Selected clinical participant data as required for dosimetry analysis will be transferred from the study eCRF to the imaging CRO, for review by the independent dosimetrist.",
        "More details on the analysis are included in the Dosimetry Charter. Individual listings and descriptive summaries (arithmetic mean, standard deviation (SD), median, Min, Max, CV%) will be presented by administered activity/cycle or dosage for biodistribution and dosimetry derived parameters, such as TACs obtained from the radiotracer"
      ],
      "chips": [
        "CPBQ663A12101",
        "p116/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n116.jpg",
      "cap": "Protocol page 116 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 117 of 170 · uptake (as percentage of injected activity), absorbed dose-equivalent coefficients,…",
      "audio": [
        "uptake (as percentage of injected activity), absorbed dose-equivalent coefficients, theoretical cumulative absorbed dose-equivalent, and effective half-life in selected organs and lesions, as measured by image quantification. 9.5.2 Urine pharmacokinetics Urine elimination data for actinium-225 D W J 155 will be assessed based on decay-corrected urine radioactivity concentration and converted to mass units.",
        "The percentage of injected activity (%IA) in each specified time interval and cumulative over all time intervals and renal clearance will be calculated, will be listed by participant and summarized descriptively. Descriptive summary statistics will include mean (arithmetic and geometric), SD, CV (arithmetic and geometric), median, minimum, and maximum.",
        "9.5.3 PK/pharmacodynamics relationships Descriptive analysis and exploratory modeling analysis may be performed to assess the relationship between administered activity of actinium-225 D W J 155 PK parameters, dosimetry and pharmacodynamics markers of safety and efficacy endpoints.",
        "9.5.4 Imaging Properties of gallium-68 D W J 155 The statistical analyses of imaging properties of gallium-68 D W J 155 will be descriptive in nature and will include summaries and graphical presentations of data. No formal testing will be performed. Categorical data, if available, will be summarized as frequencies and percentages. For continuous data (e.g. SUV, SUVr), mean, standard deviation, median, minimum, and maximum will be presented.",
        "SUVs (SUVmean and SUVmax) of lesions and different potential reference organs will be provided by the imaging vendor. SUVr will be calculated by dividing the SUV of the lesion by the SUV of the different organs in order to identify the optimal reference organ and the optimal SUVr (i.e., using SUVmean or SUVmax) that will be used. TACs will be generated by plotting the mean SUV and SUVr values (and standard deviation) of the lesions over time.",
        "Graphical presentation of the individual lesions’ SUVs over time may be provided. 9.6 Other Safety analyses Not applicable. 9.7 Other analyses Not applicable. 9.8 Interim analysis No interim analyses are planned. However, the dosage-escalation design allows decisions based on the current data to be taken before the end of the study.",
        "More precisely, after each cohort in the dosage escalation, the next administered activity of study treatment will be selected based on review by Novartis study personnel and Investigators of all available safety and tolerability information (including the D L T risk assessment from the B H L R M using E W O C) along with , PK, PD and efficacy data."
      ],
      "chips": [
        "CPBQ663A12101",
        "p117/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n117.jpg",
      "cap": "Protocol page 117 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 118 of 170 · During the dosage expansion stopping rules are applied (please refer to Section 7",
      "audio": [
        "During the dosage expansion stopping rules are applied (please refer to Section 7.5) and a DMC will be in place (please refer to Section 10.1.4.1) 9.9 Sample size determination 9.9.1 Primary endpoint(s) Dosage-escalation part Cohorts of 3 to 6 evaluable participants will be enrolled in the dosage-escalation part including at least six participants at the MTA or a suitable lower activity at or above the RD(s) (where dosage is defined as administered activity per cycle, total",
        "number of cycles and schedule). Multiple cohorts may be sequentially enrolled to the same dosage level. Additional cohorts of 1 to 6 participants (or 1 to 12 participants at doses that are candidates for RD declaration), may be enrolled at any dosage level at or below a previously tested dosage level, and satisfying E W O C, for further elaboration of safety, PK, and dosimetry parameters as required.",
        "At least 21 participants should be treated in the dosage escalation part, for the model to have good operating characteristics relating to the identification of the MTA amongst those administered activities tested (details in Section 10.4). It is not mandatory to continue escalating administered activity until the MTA is reached and it is possible to determine the RD(s) without reaching the MTA.",
        "However, the following rules will be used to stop the dosage escalation in case a MTA is identified by the design: 1. At least 6 treated participants at the administered activity to be determined as the MTA 2.",
        "This administered activity satisfies one of the following conditions: • the posterior probability of targeted toxicity at this administered activity exceeds 50% and is the highest among potential administered activities, or • minimum of 21 treated participants on the trial.",
        "Dosage expansion part In the expansion part, each group (H E R 2+ breast cancer, HR+/H E R 2-low breast cancer, HR+/H E R 2-0 breast cancer, HR-/H E R 2-low breast cancer, HR-/H E R 2-0 breast cancer, A G A N S C L C, non-A G A N S C L C, H E R 2 3+ or 2+ (I S H + or -) G E A and bladder cancer) will recruit approximately the number of participants shown in Figure 1-1.",
        "If cumulative study data (safety, tolerability, PK, dosimetry, pharmacodynamics and/or preliminary anti-tumor activity) from dosage escalation support more than one administration schedule, these may be investigated in selected expansion groups. In this case, up to four additional group(s) of participants may be opened (with approximately 15-20 participants each).",
        "Section 9.2 provides probability of detecting an AE with a specified incidence given the true incidence rate under different sample size scenarios.",
        "For an adverse event with a true incidence of 2.5%, 5%, 10%, and 15%, the probability of observing at least one participant with the AE in an expansion group of 10 participants treated at the RD is 22%, 40%, 65%, and 80%, respectively; the probability of observing at least one participant with the AE in an expansion group of 15 participants treated at the RD is 32%, 54%, 79%, and 91%, respectively; the probability of observing at least one participant with the AE in an",
        "expansion group of 40"
      ],
      "chips": [
        "CPBQ663A12101",
        "p118/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n118.jpg",
      "cap": "Protocol page 118 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 119 of 170 · participants (in case of pooling NSCLC participants) treated at the RD is 64%, 87%,…",
      "audio": [
        "participants (in case of pooling N S C L C participants) treated at the RD is 64%, 87%, 99%, and 100%, respectively. Table 9-3 Probability of detecting an AE with a specified incidence at the RD as a function of the sample size Number of participants AE incidence rate 0.025 0.05 0.10 0.15 10 0.22 0.40 0.65 0.80 15 0.32 0.54 0.79 0.91 20 0.40 0.64 0.88 0.96 40 0.64 0.87 0.99 1.00"
      ],
      "chips": [
        "CPBQ663A12101",
        "p119/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n119.jpg",
      "cap": "Protocol page 119 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 120 of 170 · Supporting documentation and operational considerations 10",
      "audio": [
        "10 Supporting documentation and operational considerations 10.1 Appendix 1: Regulatory, ethical, and study oversight considerations 10.1.1 Regulatory and ethical considerations This study was designed and will be implemented, executed and reported in accordance with the protocol and the following: a.",
        "Consensus ethical principles derived from international guidelines including the Declaration of Helsinki and Council for International Organizations of Medical Sciences (CIOMS) international ethical guidelines b. Applicable ICH Tripartite Guidelines for Good Clinical Practice (GCP) c.",
        "Applicable local regulations (including European Clinical Trial Regulation 536/2014, US CFR 21) The protocol, protocol amendments, ICF, Investigator’s Brochure, Pharmacy Manual and other relevant documents (e.g., advertisements) must be submitted to an IRB/IEC by the Investigator and reviewed and approved by the IRB/IEC before the study is initiated at that specific site.",
        "Any amendments to the protocol will require IRB/IEC and Health Authority approval before implementation of changes made to the study design, except for changes necessary to eliminate an immediate hazard to study participants.",
        "The Investigator will be responsible for the following: • Signing a protocol signature page confirming his/her agreement to conduct the study in accordance with these documents and all of the instructions and procedures found in this protocol and to give access to all relevant data and records to Novartis monitors, auditors, Novartis Quality Assurance representatives, designated agents of Novartis, IRBs/IECs, and regulatory authorities as required • Providing written",
        "summaries of the status of the study to the IRB/IEC annually or more frequently in accordance with the requirements, policies, and procedures established by the IRB/IEC • Notifying the IRB/IEC of S A Es or other significant safety findings as required by IRB/IEC procedures • Taking any immediate action required for the safety of any participant included in this study, even if this action represents a deviation from the protocol.",
        "In such cases, Novartis must be notified of this action and the IRB/IEC at the study site must be informed according to local regulations.",
        "• Providing oversight of the conduct of the study at the site and adherence to requirements of 21 CFR, ICH guidelines, the IRB/IEC, European regulation 536/2014 for clinical studies (if applicable), European Medical Device Regulation 2017/745 for clinical device research (if applicable), and all other applicable local regulations • Informing Novartis immediately if an inspection of the clinical site is requested by a regulatory authority"
      ],
      "chips": [
        "CPBQ663A12101",
        "p120/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n120.jpg",
      "cap": "Protocol page 120 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 121 of 170 · Protocol body · page 121",
      "audio": [
        "10.1.2 Informed consent process The Investigator or their representative will explain the nature of the study, including the risks and benefits, to the participant or their legally authorized representative, if allowed according to local regulations and answer all questions regarding the study. Participants must be informed that their participation is voluntary.",
        "Participants or their legally authorized representatives will be required to sign a statement of informed consent that meets the requirements of 21 CFR 50, local regulations, ICH guidelines, privacy and data protection, where applicable, and the IRB/IEC or study center. Informed consent must be obtained before conducting any study-specific procedures (e.g., all of the procedures described in the protocol).",
        "The process of obtaining informed consent must be documented in the participant source documents. The medical record must include a statement that written informed consent was obtained before the participant was enrolled in the study and the date the written consent was obtained. The authorized person obtaining the informed consent must also sign the ICF. A copy of the ICF(s) must be provided to the participant or their legally authorized representative.",
        "Participants who are rescreened are required to sign a new ICF. The ICF will contain a separate section that addresses the use of remaining mandatory samples for optional research. Participants will be told that they are free to refuse to participate and may withdraw their consent at any time and for any reason during the storage period. A separate signature will be required to document a participant’s decision.",
        "If applicable, in cases where the participant's representative(s) gives consent (if allowed according to local requirements), the participant must be informed about the study to the extent possible given his/her level of understanding. If the participant is capable of doing so, the participant must indicate agreement by personally signing and dating the written informed consent document.",
        "Common side effects already known about gallium-68 D W J 155 and actinium-225 D W J 155 will be included in the ICF and must be discussed with the participant upon obtaining consent and during the study as needed. Any new information related to the safety profile that is identified between IB updates will be communicated as appropriate, for example, via an Investigator notification or an aggregate safety finding.",
        "New information might require an update to the ICF and discussion with the participant. The following informed consents are included in this study: • Main study consent, • Optional consent including: • For 'additional research' to allow future research on data/samples collected during this study • For visits and activities that may be done outside of the study site • Pregnancy follow up Consent for a participant or individual who got pregnant by a Trial participant"
      ],
      "chips": [
        "CPBQ663A12101",
        "p121/170",
        "Full protocol text"
      ],
      "visual": "ga68",
      "image": "assets/protocol/cpbq/n121.jpg",
      "cap": "Protocol page 121 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 122 of 170 · • An information sheet for individual who could get pregnant by a Trial participant…",
      "audio": [
        "• An information sheet for individual who could get pregnant by a Trial participant • Post actinium-225 Instructions: Reducing External Exposure to Others A copy of the approved version of all consent forms must be provided to Novartis after IRB/IEC approval.",
        "The consent process including re-consent may take place either in-person or remotely (e.g., via videoconferencing) per discretion of the investigator and with the agreement of the participant or their legally authorized representative.",
        "Remote consenting will be used as permitted by local regulations, EC/IRB approval, and with a GCP compliant process that considers relevant requirements (e.g., privacy, verification of identity, Informed Consent process is appropriately documented etc.). At the next in-person visit, the investigator should reaffirm the consent obtained remotely and document the reaffirmation process. 10.1.3 Data protection Participants will be assigned a unique identifier.",
        "Any participant records or datasets that are transferred to Novartis will contain the identifier only; participant names or any information which would make the participant identifiable will not be transferred. The participant must be informed that his/her personal study-related data will be used by Novartis in accordance with local data protection law.",
        "The level of disclosure must also be explained to the participant who will be required to give consent for their data to be used as described in the informed consent. The participant must be informed that his/her medical records may be examined by Clinical Quality Assurance auditors or other authorized personnel appointed by Novartis, by appropriate IRB/IEC members, and by inspectors from regulatory authorities.",
        "Novartis has appropriate processes and policies in place to handle personal data breaches according to applicable privacy laws. Any data security breach that may impact the confidentiality and protection of study participants’ data is recorded and investigated by Novartis as required by applicable laws or regulations and as adequate to the nature of the breach. Upon identification of any potential data security breach, a Novartis team will perform an initial assessment.",
        "Depending on the nature and type of breach, including the categories of data impacted, the data security breach management process may include investigation of the root cause of the incident, and, on a basis of its outcome, determination of the adequate mitigation actions to address any immediate impact, and corrective and preventive measures to prevent recurrence and mitigate any adverse effects, as applicable.",
        "The data security breach will be reported to the regulatory authorities and Ethic Committees or IRBs as required by the applicable laws or regulations. For countries with serious breach reporting regulations, and deviation of the approved protocol that is considered a serious breach, which would likely affect the safety, rights of trial participants and/or data reliability and robustness to a significant degree, will be promptly reported to Novartis."
      ],
      "chips": [
        "CPBQ663A12101",
        "p122/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n122.jpg",
      "cap": "Protocol page 122 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 123 of 170 · Protocol body · page 123",
      "audio": [
        "10.1.4 Committees structure 10.1.4.1 Data monitoring committee This study will include a data monitoring committee (DMC) in the expansion part of the study, which will function independently of all other individuals associated with the conduct of this clinical trial, including the site Investigators participating in the study.",
        "The DMC will assess and provide feedback at defined intervals the progress of a clinical trial, safety data, and critical efficacy variables if applicable and recommend to Novartis whether to continue, modify, or terminate a trial. In case the dosage expansion stopping rules criteria are met, the DMC will meet immediately to discuss and make a recommendation. Please refer to Section 7.5 for additional details.",
        "Specific details regarding composition, responsibilities, data monitoring, and meeting frequency, and documentation of DMC reports, minutes, and recommendations will be described in a separate charter that is established between Novartis and the DMC. 10.1.5 Data quality assurance Monitoring strategy, methods, responsibilities, and requirements are provided in the monitoring plan.",
        "Details may include definition of study critical data items and processes (e.g., risk-based initiatives in operations and quality such as risk management and mitigation strategies and analytical risk-based monitoring), including handling of noncompliance issues and monitoring techniques (central, remote, or on-site monitoring) Records and documents, including signed ICFs, pertaining to the conduct of this study must be retained by the Investigator for 15 years (25 years for",
        "countries under EU CTR) after study completion unless local regulations or institutional policies require a longer retention period. No records may be destroyed during the retention period without the written approval of Novartis. No records may be transferred to another location or party without written notification to Novartis. 10.1.5.1 Data collection Designated Investigator staff will enter the data required by the protocol into the Electronic Case Report Forms (CRF).",
        "The CRFs have been built using fully validated secure web-enabled software that conforms to 21 CFR Part 11 requirements, Investigator site staff will not be given access to the electronic data capture (EDC) system until they have been certified as trained. Automatic validation programs check for data discrepancies in the CRFs, allow modification and/or verification of the entered data by the Investigator staff.",
        "The Investigator/designee is responsible for assuring that the data entered into CRF is complete, accurate, and that entry and updates are performed in a timely manner e.g., within 5 days of visit. The Investigator must certify that the data entered are complete and accurate. After final database lock, the Investigator will receive copies of the participant data for archiving at the investigational site.",
        "All data should be recorded, handled, and stored in a way that allows its accurate reporting, interpretation, and verification."
      ],
      "chips": [
        "CPBQ663A12101",
        "p123/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n123.jpg",
      "cap": "Protocol page 123 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 124 of 170 · Protocol body · page 124",
      "audio": [
        "10.1.5.2 Database management and quality control Novartis personnel (or designated CRO) will review the data entered by investigational staff for completeness, accuracy and scientific/medical plausibility. Electronic data queries stating the nature of the problem and requesting clarification will be created for discrepancies and missing values and sent to the investigational site via the EDC system.",
        "Designated Investigator site staff are required to respond promptly to queries and to make any necessary changes to the data. Concomitant treatments and prior medications entered into the database will be medically coded using the World Health Organization (WHO) Drug Reference List, which employs the Anatomical Therapeutic Chemical classification system.",
        "Medical history/current medical conditions and adverse events will be coded using the Medical Dictionary for Regulatory Activities (MedDRA) terminology. Dates of screenings, visits, screen failures, early terminations, dosage escalation/dosage expansion and cohort assignment, as well as data about all actinium-225 D W J 155 dispensed to the participant and all dosage changes will be tracked using an Interactive Response Technology (I R T).",
        "The system will be supplied by a vendor, who will also manage the database. The data will be sent electronically to Novartis (or a designated CRO) at specific timelines. Once all the necessary actions have been completed and the database has been declared to be complete and accurate, it will be locked and made available for data analysis.",
        "10.1.6 Source documents Data reported on the CRF or entered in the CRF that are transcribed from source documents must be consistent with the source documents or the discrepancies must be explained. The Investigator may need to request previous medical records or transfer records. The Investigator must give the monitor access to all relevant source documents to confirm their consistency with the data capture and/or data entry.",
        "The Investigator must also keep the original informed consent form signed by the participant (a signed copy is given to the participant).",
        "Study monitors will perform source data verification to confirm that data entered into the CRF by authorized site personnel are accurate, complete, and verifiable from source documents; that the safety and rights of participants are being protected; and that the study is being conducted in accordance with the currently approved protocol and any other study agreements, ICH GCP, and all applicable regulatory requirements.",
        "Key study personnel must be available to assist the field monitor during these visits. 10.1.7 Publication policy The protocol will be registered in a publicly accessible database such as clinicaltrials.gov and as required in CTIS public website.",
        "In addition, after study completion (defined as last patient last visit) and finalization of the study report the results of this trial will be submitted for publication and posted in a publicly accessible database of clinical trial results, such as the Novartis clinical trial results website and all required health authority websites (e.g., Clinicaltrials.gov, EU CTIS public website etc.)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p124/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n124.jpg",
      "cap": "Protocol page 124 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 125 of 170 · Summary results of primary and secondary endpoints will be disclosed based upon the…",
      "audio": [
        "Summary results of primary and secondary endpoints will be disclosed based upon the global Last Patient Last Visit (LPLV) date, since multinational studies are locked and reported based upon the global LPLV. For details on the Novartis publication policy including authorship criteria, please refer to the Novartis publication policy training materials that were provided.",
        "Any data analysis carried out independently by the Investigator must be submitted to Novartis before publication or presentation. 10.1.8 Protocol adherence and protocol amendments This protocol defines the study objectives, the study procedures and the data to be collected on study participants. Additional assessments required to ensure safety of participants should be administered as deemed necessary on a case by case basis.",
        "Under no circumstances including incidental collection is an Investigator allowed to collect additional data or conduct any additional procedures for any purpose involving any investigational drugs under the protocol, other than the purpose of the study.",
        "If despite this prohibition, data, information, observation would be incidentally collected, the Investigator shall immediately disclose it to Novartis and not use it for any purpose other than the study, except for the appropriate monitoring on study participants. Investigators ascertain they will apply due diligence to avoid protocol deviations.",
        "If an Investigator feels a protocol deviation would improve the conduct of the study this must be considered a protocol amendment, and unless such an amendment is agreed upon by Novartis and approved by the IRB/IEC and health authorities, where required, it cannot be implemented.",
        "10.1.9 Off-site procedures At the Investigator's discretion and based on benefit-risk considerations of the participant's clinical condition, qualifying participants may be offered the option to have certain clinical trial procedures according to Section 1.3 Schedule of Activities performed at an off-site location.",
        "The following element may be offered to support off-site visits where allowed by national and local regulations: use of biosample collection centers separate to the Investigative Site. Procedures for off-site visits utilizing biosample collection centers separate to the Investigative Site is only possible for chemistry, hematology and urinalysis assessments at the visits indicated in Section 1.3.",
        "The off-site procedures may be utilized in certain countries, Sites and visits as determined by trial needs, if Sponsor allows, and based on national and local/site regulations. Participants, that the investigator identifies as suitable for off-site visits, must provide informed consent.",
        "The following conditions must be considered for off-site visits to occur: • If the participant suffers from either (1) a severe AE or an S A E, and/or (2) any concurrent medical conditions which, in the opinion of the Investigator, could cause unacceptable safety risks, then the participant must resume the on-site visits. The participant may resume the off-site visits when, based on the Investigator’s judgment, there are no further safety risks for the participant."
      ],
      "chips": [
        "CPBQ663A12101",
        "p125/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n125.jpg",
      "cap": "Protocol page 125 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 126 of 170 · • If other assessments are required, then off-site visits are not possible",
      "audio": [
        "• If other assessments are required, then off-site visits are not possible. 10.1.9.1 Responsibility of investigator oversight of off-site activities Procedures that are performed off-site remain under the oversight of the Investigator, who retains accountability for the conduct of all safety assessments and will ensure the rights, safety, and wellbeing of participants.",
        "This includes the following (including, but not limited to): • the identification, management and reporting of AEs and S A Es are performed in accordance with the protocol and applicable regulations • source data collected off-site are reviewed and evaluated in a timely manner"
      ],
      "chips": [
        "CPBQ663A12101",
        "p126/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n126.jpg",
      "cap": "Protocol page 126 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 127 of 170 · Protocol body · page 127",
      "audio": [
        "10.2 Appendix 2: Abbreviations and definitions 10.2.1 List of abbreviations %IA Percent of Injected Activity ACTH Adrenocorticotropic Hormone ADC Antibody-Drug Conjugate AE Adverse Event A G A Actionable Gene Alteration AIDS Acquired Immunodeficiency Syndrome A L A R A As Low as Reasonably Achievable ALP Alkaline Phosphatase ALT Alanine Aminotransferase ANA Antinuclear Antibodies ANC Absolute neutrophil count APTT Activated partial thromboplastin time ASCO American Society",
        "of Clinical Oncology ASMA Anti-smooth muscle antibody AST Aspartate Aminotransferase AUC Area Under the Curve AxMP Auxiliary Medicinal Product B H L R M Bayesian Hierarchical Logistic Regression Model BLRM Bayesian Logistic Regression Model BOR Best Overall Response BP Blood Pressure BUN Blood Urea Nitrogen CAP College of American Pathologists CBR Clinical Benefit Rate CD Carbohydrate deficient CDK4/6 Cyclin-Dependent Kinases 4 and 6 cfDNA Circulating cell-free DNA CIOMS",
        "Council for International Organizations of Medical Sciences CKD-EPI Chronic Kidney Disease Epidemiology Collaboration CL Systemic Clearance Cmax Maximum Concentration CMTS Combined mass and time scaling CMV Cytomegalovirus CNS Central Nervous System CR Complete Response CRF Case Report/Record Form (paper or electronic) CRO Contract Research Organization CSR Clinical study report CT Computed tomography CTC Common Terminology Criteria CTCAE Common Terminology Criteria for",
        "Adverse Events CV Coefficient of variation"
      ],
      "chips": [
        "CPBQ663A12101",
        "p127/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n127.jpg",
      "cap": "Protocol page 127 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 128 of 170 · DAS Dosimetry analysis set DCR Disease Control Rate DDS Dose determining set DEMs…",
      "audio": [
        "DAS Dosimetry analysis set DCR Disease Control Rate DDS Dose determining set DEMs Dosage Escalation Meetings DILI Drug-induced liver injury DL Dosage Level DL1 Dosage Level 1 DL2 Dosage Level 2 D L T Dosage Limiting Toxicity DMC Data Monitoring Committee DNA Deoxyribonucleic acid DOR Duration of Response EBRT External beam radiation therapy EBV Epstein-Barr Virus ECG Electrocardiogram ECOG Eastern Cooperative Oncology Group Performance Status EDC Electronic Data Capture EEA",
        "European Economic Area eGFR Estimated Glomerular Filtration Rate EOI End of infusion EPR Early progression rate ER Estrogen Receptor ERCP Endoscopic retrograde cholangiopancreatography ESAs Erythroid stimulating agents eSource Electronic Source E W O C Escalation with overdose control FAS Full Analysis Set FDA Food and Drug Administration FDG Fluorodeoxyglucose FDGPET Fluorodeoxyglucose Positron Emission Tomography first in human First in Human FOV Field of View G-CSF",
        "Granulocyte Colony-Stimulating Factor GCP Good Clinical Practice G E A gastroesophageal adenocarcinoma GGT Gamma-glutamyl transferase GLDH Glutamate Dehydrogenase GM-CSF Granulocyte-Macrophage Colony-Stimulating Factor h Hour HAV Hepatitis A virus HBc Hepatitis B core antibody HBsAg Hepatitis B virus surface antigen HBV Hepatitis B Virus hCG Human Chorionic Gonadotropin HCV Hepatitis C Virus"
      ],
      "chips": [
        "CPBQ663A12101",
        "p128/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n128.jpg",
      "cap": "Protocol page 128 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 129 of 170 · HER2 Human Epidermal Growth Factor Receptor 2 HEV Hepatitis E virus HIV Human…",
      "audio": [
        "H E R 2 Human Epidermal Growth Factor Receptor 2 HEV Hepatitis E virus HIV Human immunodeficiency virus HPLC High-performance liquid chromatography HSV Herpes simplex virus I.V.",
        "intravenous IB Investigator’s Brochure ICF Informed Consent Form ICH International Council for Harmonization of Technical Requirements for Pharmaceuticals for Human Use ICRP International Commission on Radiological Protection IEC Independent Ethics Committee Ig Immunoglobulin I H C Immunohistochemistry I M P Investigational Medical Product INR International Normalized Ratio IO Immuno-Oncologic IRB Institutional Review Board I R T Interactive Response Technology I S H in situ",
        "hybridization ITT Intention-to-Treat IUD Intrauterine device IUS Intrauterine hormone-releasing system KIM-1 Kidney Injury Molecule-1 LDH lactate dehydrogenase LET linear energy transfer LFT Liver function test LLN lower limit of normal LLOQ lower limit of quantification LVEF Left ventricular ejection fraction M-CSF Macrophage Colony-Stimulating Factor mCRPC Metastatic Castration-Resistant Prostate Cancer MCV Mean Corpuscular Volume MedDRA Medical dictionary for regulatory",
        "activities mg milligram(s) min minute(s) mL milliliter(s) mm millimeter(s) MRI Magnetic Resonance Imaging MTA Maximum Tolerated Activity M U G A Multiple gated acquisition N number NA Not Applicable NCI National Cancer Institute NDL Next dosage level NGAL Neutrophil Gelatinase-Associated Lipocalin"
      ],
      "chips": [
        "CPBQ663A12101",
        "p129/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n129.jpg",
      "cap": "Protocol page 129 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 130 of 170 · NOAEL No observed adverse effect level NSCLC Non-Small Cell Lung Cancer NYHA New…",
      "audio": [
        "NOAEL No observed adverse effect level N S C L C Non-Small Cell Lung Cancer NYHA New York Heart Association ORR Overall Response Rate OS Overall Survival PAS Pharmacokinetic Analysis Set PCR Polymerase Chain Reaction PD Pogressive disease PET Positron emission tomography PFS progression-free survival PK Pharmacokinetic(s) PR Progesterone Receptor PRRT Peptide receptor radionuclide therapy PT Prothrombin time every 4 weeks every 4 weeks every 8 weeks Every 8 weeks QTcF QT",
        "interval corrected by Fridericia’s formula RAP The Report and Analysis Plan RBE Relative biological effectiveness RD Recommended dosage(s) (where dosage is defined as administered activity per cycle, total number of cycles and schedule) RECIST Response Evaluation Criteria In Solid Tumors RIA Radioimmunoassay RLI Radioligand Imaging RLT Radioligand therapy RMS Relative mass scaling RNA Ribonucleic acid ROIs Regions of interest S A E Serious Adverse Event SAP Statistical",
        "Analysis Plan SD standard deviation SMQ Standardized MedDRA Query SoA Schedule of Activities SOC Standard of Care SOD Sum of Diameters SPECT Single-photon emission computed tomography SpO2 Oxygen saturation SS Safety Set SUV Standardized Uptake Value T3 Triiodothyronine T4 Thyroxine TACs Time Activity Curves Tmax Time to Maximum Concentration T N B C Triple negative breast cancer TSH Thyroid-Stimulating Hormone T T E Transthoracic echocardiography"
      ],
      "chips": [
        "CPBQ663A12101",
        "p130/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n130.jpg",
      "cap": "Protocol page 130 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 131 of 170 · TTF Time to Treatment Failure TTP Time to progression ULN Upper limit of normal VOIs…",
      "audio": [
        "TTF Time to Treatment Failure TTP Time to progression ULN Upper limit of normal VOIs Volumes of interest Vz Volume of Distribution (in the terminal phase) WOCBP Women of child-bearing potential 10.2.2 Definitions Additional Study treatment Medicinal products that may be used during the clinical trial as described in the protocol, but not as an investigational drug/treatment (e.g., any background therapy) Assessment A procedure used to generate data required by the study",
        "Auxiliary Medicinal Product (AxMP) Medicinal product used for the needs of a clinical trial as described in the protocol, but not as an investigational medicinal product (e.g., rescue medication, challenge agents, background treatment or medicinal products used to assess endpoints in the clinical trial). Concomitant therapy is not considered as AxMP.",
        "Background Therapy Generally considered to be the current standard of care for a particular condition / disease, in addition to which study treatment is given Biologic Samples A biological specimen including, for example, blood (plasma, serum), saliva, tissue, urine, stool, etc. taken from a study participant Coded Data Personal Data which has been de-identified by the investigative center team by replacing personal identifiers with a code.",
        "Cohort A group of individuals who share a common exposure, experience or characteristic, or a group of individuals followed-up or traced over time Control drug A study treatment (active or placebo) used as a comparator to reduce assessment bias, preserve blinding of investigational drug, assess internal study validity, and/or evaluate comparative effects of the investigational drug Cycles Number and timing or recommended repetitions of therapy are usually expressed as number",
        "of days (e.g., q28 days) Discontinuation from study Point/time when the participant permanently stops receiving the study treatment and further protocol required assessments or follow-up, for any reason. No specific request is made to stop the use of their samples or data.",
        "Discontinuation from study treatment Point/time when the participant permanently stops receiving the study treatment for any reason (prior to the planned completion of study intervention administration, if any). Participant agrees to the other protocol required assessments including follow-up. No specific request is made to stop the use of their samples or data.",
        "Dosage Adminstered activity per cycle, cycle length and number of cycles of the investigational RLI/RLT Electronic Data Capture (EDC) Electronic data capture (EDC) is the electronic acquisition of clinical trial data using data collection systems, such as Web-based applications, interactive voice response systems and clinical laboratory interfaces.",
        "EDC includes the use of Electronic Case Report Forms (CRFs) which are used to capture data transcribed from source data/documents used at the point of care End of the clinical trial The end of the clinical trial is defined as the last visit of the last participant. Enrollment Point/time of participant entry into the study at which informed consent must be obtained. The action of enrolling one or more participants.",
        "eSource Direct Data Capture (DDC) eSource Direct Data Capture (DDC) refers to the capture of clinical trial data electronically, at the point of care.",
        "eSource Platform/Applications combine source documents and case report forms (CRFs) into one application, allowing for the real time collection of clinical trial information to Novartis and other oversight authorities, as appropriate Estimand As defined in the ICH E9(R1) addendum, estimand is a precise description of the treatment effect reflecting the clinical question posed by the trial objective. It summarizes"
      ],
      "chips": [
        "CPBQ663A12101",
        "p131/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n131.jpg",
      "cap": "Protocol page 131 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 132 of 170 · at a population-level what the outcomes would be in the same participants under…",
      "audio": [
        "at a population-level what the outcomes would be in the same participants under different treatment conditions being compared. Attributes of an estimand include the population, variable (or endpoint) and treatment of interest, as well as the specification of how the remaining intercurrent events are addressed and a population-level summary for the variable.",
        "Healthy volunteer A person with no known significant health problems who volunteers to be a study participant Intercurrent events Events occurring after treatment initiation that affect either the interpretation or the existence of the measurements associated with the clinical question of interest.",
        "Medication number A unique identifier on the label of medication kits Off-site Describes trial activities that are performed at a remote location by an off-site healthcare professional, such as procedures performed at the participant's home. Off-site healthcare Professional (OHP) A qualified healthcare professional, who performs certain protocol procedures for the participant in an off-site location such as a participant's home.",
        "Other treatment Treatment that may be needed/allowed during the conduct of the study (e.g., concomitant or rescue therapy) Part A sub-division of a study used to evaluate specific objectives or contain different populations.",
        "For example, one study could contain a single dose part and a multiple dose part, or a part in participants with established disease and in those with newlydiagnosed disease Participant number A unique number assigned to each participant upon signing the informed consent. This number is the definitive, unique identifier for the participant and should be used to identify the participant throughout the study for all data collected, sample labels, etc., sample labels, etc.",
        "Patient-Reported Outcome (PRO) A measurement based on a report that comes directly from the participant about the status of a participant's health condition without amendment or interpretation of the participant's report by a clinician or anyone else Period The subdivisions of the trial design (e.g., Screening, Treatment, Follow-up) which are described in the Protocol.",
        "Periods define the study phases and will be used in clinical trial database setup and eventually in analysis Personal data Participant information collected by the Investigator that is coded and transferred to Novartis for the purpose of the clinical trial. This data includes participant identifier information, study information and biological samples. Remote Describes any trial activities performed at a location that is not the investigative site.",
        "Rescreening If a participant fails the initial screening and is considered as a Screen Failure, the participant can be invited once for a new Screening visit after medical judgment and as specified by the protocol Rescue Medication A medication used to control symptoms that are not adequately controlled on investigational and other study treatment.",
        "Screen Failure A participant who did not meet one or more criteria that were required for participation in the study Source Data/Document Source data refers to the initial record, document, or primary location from where data comes. The data source can be a database, a dataset, a spreadsheet or even hardcoded data, such as paper or eSource Stage in cancer The extent of a cancer in the body.",
        "Staging is usually based on the size of the tumor, whether lymph nodes contain cancer, and whether the cancer has spread from the original site to other parts of the body Start of the clinical trial The start of the clinical trial is defined as the signature of the informed consent by the first participant Study device Study device is a medical device (marketed or investigational) that is used in a circumstance that makes it part of the investigation.",
        "Study treatment Any drug or combination of drugs, device or intervention administered to the study participants as part of the required study procedures; includes, for example, investigational drug(s)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p132/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n132.jpg",
      "cap": "Protocol page 132 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 133 of 170 · Tele-visit Procedures or communications conducted using technology such as telephone…",
      "audio": [
        "Tele-visit Procedures or communications conducted using technology such as telephone or videoconference, whereby the participant is not at the investigative site where the Investigator will conduct the trial. Treatment arm/group A treatment arm/group defines the dosage and regimen or the combination, and may consist of 1 or more cohorts. Variable (or endpoint) The variable (or endpoint) to be obtained for each participant that is required to address the clinical question.",
        "The specification of the variable might include whether the participant experiences an intercurrent event. Withdrawal of consent Withdrawal of consent from the study occurs when the participant explicitly requests to stop use of their data and/or biological samples AND no longer wishes to receive study treatment, AND does not agree to further protocol required assessments.",
        "This request should be in writing (depending on local regulations) and recorded in the source documentation. This request should be distinguished from a request to discontinue the study. Other study participant's privacy rights are described in the corresponding informed consent form."
      ],
      "chips": [
        "CPBQ663A12101",
        "p133/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n133.jpg",
      "cap": "Protocol page 133 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 134 of 170 · Protocol body · page 134",
      "audio": [
        "10.3 Appendix 3: Clinical laboratory tests Table 10-1 Clinical laboratory tests and parameters Laboratory Tests Parameters Hematology Hematocrit, Hemoglobin, Platelets, Leukocytes, Differential (Basophils, Eosinophils, Lymphocytes, Monocytes, Neutrophils, Bands (if required), Other (absolute value preferred, percentages are acceptable)), Reticulocytes Chemistry Albumin, Alkaline phosphatase (ALP), ALT, Amylase, AST, Bicarbonate, Calcium, Chloride, Creatinine, Direct",
        "Bilirubin, Glucose (non-fasting or fasting), Lipase, Magnesium, Phosphate, Potassium, Sodium, Total Bilirubin, Urea Nitrogen or Urea Urinalysis Macroscopic panel (Dipstick) (Bilirubin, Blood, Glucose, Ketones, Leukocyte esterase, Nitrite, pH, Protein, Specific Gravity, Urobilinogen), Urine proteincreatinine ratio If macroscopic panel is abnormal, then perform microscopic panel (Erythrocytes, Leukocytes, Casts, Crystals, Bacteria, Epithelial cells) Coagulation Prothrombin",
        "time (PT), International normalized ratio (INR), Activated partial thromboplastin time (APTT) Thyroid Free T4 and/or T3, TSH Pregnancy Test Serum pregnancy testing, Urine pregnancy test"
      ],
      "chips": [
        "CPBQ663A12101",
        "p134/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n134.jpg",
      "cap": "Protocol page 134 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 135 of 170 · Appendix 4 · BHLRM design",
      "audio": [
        "10.4 Appendix 4: Statistical details of the Bayesian hierarchical logistic regression model (B H L R M): priors, design, operating characteristics and hypothetical data scenarios 10.4.1 Design specification This trial explores dosage escalation of actinium-225 D W J 155 single agent every 6 weeks, every 8 weeks and every 4 weeks administration schedules.",
        "The D L T observation period is first cycle: 6 weeks, 8 weeks or 4 weeks starting from the first administration of actinium-225 D W J 155, depending on the administration schedule. For each administration schedule of every 6 weeks, every 8 weeks and every 4 weeks, the administered radioactivity levels in the first cycle are 2, 4, 6 and 8 megabecquerels, (see Section 6.5.2 for provisional administered activity levels).",
        "The adaptive Bayesian design nature of the B H L R M allows additional and/or intermediate dosage levels to be added. In that case, this same B H L R M will be able to support dosage escalation for all dosage levels for each schedule and to provide inferences of posterior probability of D L T rates across dosage levels for identifying MTA/RD.",
        "Proposed statistical model uses a meta-analytic framework (Spiegelhalter et al 2004, Neuenschwander et al 2016) to combine all data from the every 6 weeks, every 8 weeks and every 4 weeks schedules, which allows robust exchangeability among strata.",
        "The administered activity in the D L T observation period (first 4 weeks for every 4 weeks, first 6 weeks for every 6 weeks and first 8 weeks for every 8 weeks) is used in the model to incorporate data from both every 4 weeks, every 6 weeks and every 8 weeks schedules. Let πj (d) be the risk of D L T for actinium-225 D W J 155 at administered activity d during the first cycle on the jth (schedule).",
        "The single agent administered activity-D L T model is logistic: actinium-225 D W J 155: logit(πj(d))= log (αj) + βj log(d/d*), j=1,2 where d*=6 megabecquerels is used to scale the doses of every 6 weeks, every 8 weeks and every 4 weeks, respectively for each strata. αj (>0) is the single-agent odds of a D L T at d* mg; and βj is the increase in the log-odds of a D L T by a unit increase in log-administered activity.",
        "In order to borrow information, we assume that θj=(log(αj), log(βj)) follows a bivariate normal distribution: and the parameters are set as: where μ and Γ are the mean vector and covariance matrix. Prior distributions for the parameters of the distribution are as follows: • normal distributions for the means μα and μβ"
      ],
      "chips": [
        "CPBQ663A12101",
        "p135/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n135.jpg",
      "cap": "Protocol page 135 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "BHLRM shares DLT data across Q6W, Q8W, Q4W. EWOC forbids excessive-toxicity posteriors.",
        "Not 3+3. Not BOIN. DLT window = first cycle of the chosen schedule."
      ]
    },
    {
      "title": "Page 136 of 170 · • log-normal distributions for the standard deviations τα and τβ • a uniform…",
      "audio": [
        "• log-normal distributions for the standard deviations τα and τβ • a uniform distribution for the correlation ρ A full description including parameter specification, operating characteristics and hypothetical administered activity scenarios of the model will be given in a stand-alone document(s), prior to the first participant is treated on cohort with priming administered activity or alternative administration schedule(s).",
        "10.4.2 Prior specifications The Bayesian approach requires the specification of prior distributions for all model parameters. Weakly informative normal priors are assumed for μα and μβ, with means corresponding to a risk of D L T at the reference administered activity of 6 megabecquerels, and a doubling in administered activity leading to a doubling in the odds of the risk of a D L T, respectively.",
        "Priors for tα and tβ are assigned such that (1) their medians correspond to substantial between administration schedule heterogeneity, and (2) their uncertainty (95% prior interval) cover plausible betweenadministration schedule standard deviations (Schmidli et al 2014). The prior distributions for the model are specified in Table 10-2.",
        "Table 10-2 Prior distributions for the parameters of the B H L R M model used to derive the prior for the actinium-225 D W J 155 single-agent model parameters Parameter Prior distribution μα N(mean = logit(0.17), sd =1) μβ N(mean = 0, sd= log(4)/1.96) τα log-normal(mean = log(0.25), sd = log(2)/1.96) τβ log-normal(mean = log(0.125), sd = log(2)/1.96) ρ uniform(-1,1) 10.4.3 Summary of prior distributions Summaries of the prior distribution of the probability of D L T given",
        "provisional administered activities of actinium-225 D W J 155 are given in Table 10-3.",
        "Table 10-3 Summary of the prior distribution of D L T probability for the provisional administered activities of actinium-225 D W J 155 actinium-225 D W J 155 dosage level (total cycle, megabecquerels) Prior probabilities that P(D L T) is in the interval: Quantiles: [0, 0.16] [0.16, 0.33] [0.33, 1] Mean SD 2.5% 50% 97.5% every 6 weeks 1 0.906 0.075 0.019 0.058 0.082 0.0 0.027 0.302 2 0.829 0.131 0.041 0.089 0.102 0.001 0.054 0.388 4 0.659 0.240 0.101 0.149 0.130 0.012 0.109",
        "0.502 6 0.474 0.333 0.194 0.210 0.155 0.026 0.170 0.602 8 0.345 0.343 0.312 0.269 0.184 0.035 0.228 0.706 every 4 weeks 1 0.905 0.077 0.018 0.058 0.083 0.0 0.027 0.299 2 0.829 0.132 0.039 0.090 0.103 0.001 0.053 0.377"
      ],
      "chips": [
        "CPBQ663A12101",
        "p136/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n136.jpg",
      "cap": "Protocol page 136 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 137 of 170 · 225Ac-DWJ155 dosage level (total cycle, MBq) Prior probabilities that P(DLT) is in…",
      "audio": [
        "actinium-225 D W J 155 dosage level (total cycle, megabecquerels) Prior probabilities that P(D L T) is in the interval: Quantiles: 4 0.659 0.238 0.103 0.149 0.130 0.012 0.109 0.497 6 0.474 0.327 0.199 0.210 0.155 0.025 0.168 0.598 8 0.347 0.338 0.315 0.270 0.184 0.035 0.227 0.711 every 8 weeks 1 0.902 0.078 0.020 0.058 0.083 0.0 0.027 0.298 2 0.826 0.134 0.041 0.090 0.103 0.001 0.053 0.386 4 0.659 0.238 0.103 0.149 0.131 0.012 0.108 0.507 6 0.480 0.319 0.201 0.210 0.155",
        "0.026 0.168 0.597 8 0.345 0.340 0.315 0.270 0.184 0.035 0.226 0.712 D L T probabilities in bold indicate that the administered activity does not satisfy the E W O C criterion. 10.4.4 Hypothetical on-study scenarios To illustrate the performance of the Bayesian hierarchical model used to guide dosage escalation, a selection of hypothetical dosage escalation scenarios is considered.",
        "The results of inference in these scenarios are displayed in Table 10-4, which uses the starting administered activity of 2 megabecquerels actinium-225 D W J 155 every 6 weeks. For each scenario, the next dosage level indicated in the table is the maximum administered activity that is allowable for the next cohort based on the assessment of D L T risk at the administered activity, the E W O C criteria, and the dosage escalation rules described in Section 6.5.3.",
        "In practice, a administered activity below the maximum might be chosen based on additional safety, PK or pharmacodynamics information. Summaries of the prior distribution of the probability of D L T given provisional dosage of actinium-225 D W J 155 are given in Table 10-3.",
        "Table 10-4 Hypothetical dosage escalation scenarios Scenario Schedule Dosage level (megabecquerels) Ntox / Npat Next administration Schedule Next dosage level (NDL) (megabecquerels) P(target) at NDL P(over) at NDL Mean at NDL 1.1 every 6 weeks 2 0/6 every 4 weeks 4 0.174 0.026 0.104 every 6 weeks every 8 weeks 4 4 0.166 0.178 0.022 0.027 0.101 0.105 1.2 every 6 weeks 2 1/4 every 4 weeks 4 0.386 0.179 0.211 every 6 weeks every 8 weeks 4 4 0.402 0.390 0.185 0.181 0.215 0.211",
        "2.1 every 6 weeks 2 0/4 every 4 weeks 6 0.412 0.208 0.227 every 6 weeks 4 1/3 every 6 weeks every 8 weeks 6 6 0.425 0.418 0.209 0.208 0.228 0.227 2.2 every 6 weeks 2 0/4 every 4 weeks 6 0.386 0.138 0.194 every 6 weeks 4 1/6 every 6 weeks every 8 weeks 6 6 0.405 0.394 0.125 0.134 0.192 0.194 2.3 every 6 weeks 2 0/4 every 4 weeks* 4 0.444 0.172 0.217 every 6 weeks 4 2/4 every 6 weeks every 8 weeks* 2 4 0.255 0.448 0.033 0.170 0.126 0.216 3.1 every 6 weeks 2 0/4 every 4 weeks 4",
        "0.325 0.051 0.149"
      ],
      "chips": [
        "CPBQ663A12101",
        "p137/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n137.jpg",
      "cap": "Protocol page 137 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 138 of 170 · Scenario Schedule Dosage level (MBq) Ntox / Npat Next administration Schedule Next…",
      "audio": [
        "Scenario Schedule Dosage level (megabecquerels) Ntox / Npat Next administration Schedule Next dosage level (NDL) (megabecquerels) P(target) at NDL P(over) at NDL Mean at NDL every 6 weeks 4 0/4 every 6 weeks* 6 0.481 0.173 0.222 every 4 weeks 6 2/4 every 8 weeks* 6 0.470 0.206 0.233 4.1 every 6 weeks 2 0/4 every 4 weeks 6 0.441 0.136 0.202 every 6 weeks 4 0/4 every 6 weeks 6 0.471 0.120 0.201 every 6 weeks 6 2/4 every 8 weeks 6 0.438 0.136 0.203 every 6 weeks 4 0/5 - - - - -",
        "*The B H L R M allows increasing the administered activity to a higher administered activity, however, clinical considerations such as timing of D L T, type of D L T from the current regimen may not recommend exploring the higher administered activity for a different regimen.",
        "10.4.5 Operating characteristics A simulation study is used to illustrate the performance of the Bayesian dosage escalation model for identifying a safe recommended administered activity in simulated clinical trials. The data of each cohort for actinium-225 D W J 155 every 4 weeks, every 6 weeks and every 8 weeks schedules are simulated based on scenarios representing the true D L T risk at each dosage level.",
        "10.4.6 Scenarios of the true D L T probability In order to test the performance of the design, six hypothetical scenarios are investigated: • Scenario 1: True D L T rates of every 6 weeks, every 8 weeks and every 4 weeks schedules based on prior median • Scenario 2: True D L T rates of every 6 weeks, every 8 weeks and every 4 weeks assumes a higher toxicity at higher administered activities • Scenario 3: All dosage levels in both schedules are excessively toxic (more than",
        "33% D L T-rate) • Scenario 4: The every 4 weeks stratum assumes a lower toxicity than every 6 weeks and every 8 weeks Table 10-5 Hypothetical true D L T rates for actinium-225 D W J 155 single agent actinium-225 D W J 155 dosage level (total cycle administered activity, GBq) Scenario 1 Scenario 2 Scenario 3 Scenario 4 every 6 weeks 1 0.027 0.0525 0.45 0.08 2 0.054 0.123 0.52 0.14 4 0.109 0.236 0.60 0.22 6 0.170 0.360 0.70 0.27 8 0.228 0.454 0.80 0.36 every 8 weeks 1 0.027",
        "0.0525 0.45 0.08 2 0.053 0.122 0.52 0.14 4 0.108 0.231 0.60 0.22 6 0.168 0.360 0.70 0.27 8 0.226 0.452 0.80 0.36"
      ],
      "chips": [
        "CPBQ663A12101",
        "p138/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n138.jpg",
      "cap": "Protocol page 138 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 139 of 170 · 225Ac-DWJ155 dosage level (total cycle administered activity, GBq) Scenario 1…",
      "audio": [
        "actinium-225 D W J 155 dosage level (total cycle administered activity, GBq) Scenario 1 Scenario 2 Scenario 3 Scenario 4 every 4 weeks 1 0.027 0.0525 0.45 0.04 2 0.053 0.122 0.52 0.07 4 0.109 0.230 0.60 0.14 6 0.168 0.360 0.70 0.22 8 0.227 0.453 0.80 0.27 D L T rates in bold indicates the rates are in excessive toxicity interval 10.4.7 Design to simulate trials In the simulation study, dosage escalation decisions are simulated based on a rule that selects the administered",
        "activity with the highest possible administered activity, participant to the E W O C criterion, and the additional rules described in Section 6.5.3. The starting administered activity in each simulated trial is actinium-225 D W J 155 2 megabecquerels. The every 6 weeks schedule will start first. In the simulated trials, escalation continues until an MTA is identified, or until the trial is stopped because no dosage levels satisfy the E W O C criteria.",
        "The simulated trials are stopped to declare an MTA if the following criteria are met at the selected administered activity: • At least 6 participants are treated at the administered activity • The administered activity satisfies one of the following conditions: • The posterior probability of targeted toxicity at this administered activity exceeds 50% and is the highest among the potential administered activities, or • A minimum of 21 participants have already been treated in",
        "the dosage escalation part. Participant enrollment is simulated as follows: • Cohort size between 3 and 6 evaluable participants (with equal probability) • Minimum number of participants: 21 • Maximum number of participants: 48 If the maximum number of participants is reached, then the highest administered activity satisfying the E W O C is declared as the MTA.",
        "10.4.8 Metrics to assess the operating characteristics Operating characteristics are estimated from the simulated trials under the four scenarios. The metrics estimated are: I. Average number of participants receiving a administered activity associated with a true D L T probability in the underdosing interval, [0, 0.16) II.",
        "Average number of participants receiving a administered activity associated with a true D L T probability in the targeted toxicity interval, [0.16, 0.33) III. Average number of participants receiving a administered activity associated with a true D L T probability in the overdosing interval, [0.33, 1]"
      ],
      "chips": [
        "CPBQ663A12101",
        "p139/170",
        "Full protocol text"
      ],
      "visual": "dose",
      "image": "assets/protocol/cpbq/n139.jpg",
      "cap": "Protocol page 139 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 140 of 170 · Protocol body · page 140",
      "audio": [
        "IV. Probability that identified MTA at the end of the trial is in the underdose interval, with true D L T probability in the underdosing interval, [0, 0.16) V. Probability that identified MTA at the end of the trial is in the target toxicity interval, with true D L T probability in the targeted toxicity interval, [0.16, 0.33) VI.",
        "Probability that identified MTA at the end of the trial is in the overdose interval, with true D L T probability in the overdosing interval, [0.33, 1] VII. Probability of stopping the trial before declaring MTA because all dose levels are toxic. VIII. Probability of stopping the trial before declaring MTA because the maximum number of treated participants have been reached. IX. Average number of D L Ts observed.",
        "10.4.9 Results Table 10-6 presents the operating characteristics estimated from the simulated trials. The following conclusions can be reached: Scenario 1 corresponds to the prior median for all model parameters. Results are favorable in this setting, with 5.4% every 6 weeks trials, 3.9% every 8 weeks and 4.9% of simulated every 4 weeks trials declaring an MTA in the underdosing range.",
        "94.5% every 6 weeks trials, 96.0% every 8 weeks and 95.1% every 4 weeks declared an MTA in the targeted toxicity range. The remaining simulated trials were stopped for toxicity (every 6 weeks 0.1%, every 8 weeks 0.1% and every 4 weeks 0%). Scenario 2 corresponds to slightly higher toxicity, with the 2 higher administered activities in the overdosing interval.",
        "A little more than half simulated trials declared an MTA in the target toxicity range (every 6 weeks 66.0%, every 8 weeks 67.4% and every 4 weeks 68.4%). 0.7% (every 6 weeks) 0.1% (every 8 weeks) and 0.1% (every 4 weeks) of the simulated trials were stopped for excessive toxicity. Scenario 3 corresponds to very high toxicity, with all administered activities falling in the overdosing interval.",
        "Under this scenario, most of the simulated trials are appropriately stopped for excessive toxicity (every 6 weeks 94.2%, every 8 weeks 96.1%, every 4 weeks 96.5% of trials), with an average sample size of 9.1 (every 6 weeks), 3.18 (every 8 weeks) and 3.15 (every 4 weeks) participants exposed. Scenario 4 corresponds to lower toxicity in every 4 weeks schedule than in every 6 weeks and every 8 weeks schedules.",
        "Results are favorable in this setting, with 71.1% (every 6 weeks) 71.6% (every 8 weeks) and 57.6% (every 4 weeks) of simulated trials declaring an MTA in the targeted toxicity range. The remaining simulated trials either declared an MTA in the underdosing interval (every 6 weeks 9.7%, every 8 weeks 9.6% and 42.4% every 4 weeks) and were stopped for toxicity (every 6 weeks 1.9%, every 8 weeks 0.3% and every 4 weeks 0%).",
        "The simulation results suggest that the model-based dosage-escalation design is effective at identifying an MTA with toxicity in the target range, when such a administered activity exists. In Scenarios 1, moderate sample sizes were required to select an MTA.",
        "Furthermore, the design appropriately responds to high toxicity, with the majority of trials in Scenario 3 being stopped early, and with relatively small sample sizes of participants being exposed to highly toxic administered activities."
      ],
      "chips": [
        "CPBQ663A12101",
        "p140/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n140.jpg",
      "cap": "Protocol page 140 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 141 of 170 · Table 10-6 Operating characteristics of the adaptative Bayesian approach Scena rio…",
      "audio": [
        "Table 10-6 Operating characteristics of the adaptative Bayesian approach Scena rio Metr ic I Average number of particip ants at under dose II Average number of particip ants at target dose III Average number of particip ants at excessi ve dose IV % MTA declar ed in under dose V % MTA declar ed in target dose VI % MTA declar ed in excess ive dose VII % Stopp ed for toxici ty VIII % Stopped because maximu m number of particip ants have been reached IX Avera ge numb er of D L",
        "Ts 1 Q6 W 10.58 12.7 0 5.4 94.5 0 0.1 0 3.55 Q8 W 10.52 11.70 0 3.9 96.0 0 0.1 0 3.20 Q4 W 10.57 11.56 0 4.9 95.1 0 0.0 0 3.25 2 Q6 W 7.23 8.14 5.64 17.8 66.0 15.5 0.7 0 4.91 Q8 W 7.39 8.19 3.86 16.8 67.4 15.7 0.1 0 4.22 Q4 W 7.44 7.99 3.82 16.1 68.4 15.3 0.1 0.1 4.16 3 Q6 W 0 0 9.10 0 0 5.8 94.2 0 4.55 Q8 W 0 0 3.18 0 0 3.9 96.1 0 1.62 Q4 W 0 0 3.15 0 0 3.5 96.5 0 1.56 4 Q6 W 7.05 11.80 3.46 9.7 71.1 17.3 1.9 0 4.95 Q8 W 7.18 11.81 2.86 9.6 71.6 18.3 0.3 0.2 4.77 Q4 W 12.81",
        "7.79 0 42.4 57.6 0 0.0 0 3.29"
      ],
      "chips": [
        "CPBQ663A12101",
        "p141/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n141.jpg",
      "cap": "Protocol page 141 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 142 of 170 · Protocol body · page 142",
      "audio": [
        "10.5 Appendix 5: RECIST v1.1 10.5.1 Introduction The purpose of this document is to provide the working definitions and rules necessary for a consistent and efficient analysis of efficacy for oncology studies in solid tumors. This document is based on the RECIST criteria for tumor responses (Therasse et al 2000) and the revised RECIST v1.1 guidelines (Eisenhauer et al 2009).",
        "The efficacy assessments described in Section 10.5.2 and the definition of best response in Section 10.5.3.1 are based on the RECIST v1.1 criteria but also give more detailed instructions and rules for determination of best response. Section 10.5.3.2 is summarizing the “time to event” variables and rules which are mainly derived from internal discussions and regulatory consultations, as the RECIST criteria do not define these variables in detail.",
        "Section 10.5.4 of this guideline describes data handling and programming rules. This section is to be referred to in the SAP (Statistical Analysis Plan) to provide further details needed for programming. 10.5.2 Efficacy assessments Tumor evaluations are made based on RECIST criteria (Therasse et al 2000), and revised RECIST guidelines (version 1.1) (Eisenhauer et al 2009).",
        "10.5.2.1 Definitions 10.5.2.1.1 Disease measurability In order to evaluate tumors throughout a study, definitions of measurability are required in order to classify lesions appropriately at baseline. In defining measurability, a distinction also needs to be made between nodal lesions (pathological lymph nodes) and non-nodal lesions. • Measurable disease - the presence of at least one measurable nodal or non-nodal lesion.",
        "If the measurable disease is restricted to a solitary lesion, its neoplastic nature should be confirmed by cytology/histology. For participants without measurable disease see Section 10.5.3.2.8. Measurable lesions (both nodal and non-nodal) • Measurable non-nodal - As a rule of thumb, the minimum size of a measurable non-nodal target lesion at baseline should be no less than double the slice thickness or 10mm whichever is greater - e.g.",
        "the minimum non-nodal lesion size for CT/MRI with 5 mm cuts will be 10 mm, for 8 mm contiguous cuts the minimum size will be 16 mm. • Lytic bone lesions or mixed lytic-blastic lesions with identifiable soft tissue components, that can be evaluated by CT/MRI, can be considered as measurable lesions, if the soft tissue component meets the definition of measurability. • Measurable nodal lesions (i.e.",
        "lymph nodes) - Lymph nodes greater than or equal to 15 mm in short axis can be considered for selection as target lesions. Lymph nodes measuring greater than or equal to 10 mm and <15 mm are considered non-measurable. Lymph nodes smaller than 10 mm in short axis at baseline, regardless of the slice thickness, are normal and not considered indicative of disease."
      ],
      "chips": [
        "CPBQ663A12101",
        "p142/170",
        "Full protocol text"
      ],
      "visual": "bhlrm",
      "image": "assets/protocol/cpbq/n142.jpg",
      "cap": "Protocol page 142 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 143 of 170 · • Cystic lesions: • Lesions that meet the criteria for radiographically defined…",
      "audio": [
        "• Cystic lesions: • Lesions that meet the criteria for radiographically defined simple cysts (i.e., spherical structure with a thin, non-irregular, non-nodular and non-enhancing wall, no septations, and low CT density [water-like] content) should not be considered as malignant lesions (neither measurable nor non-measurable) since they are, by definition, simple cysts.",
        "• ‘Cystic lesions’ thought to represent cystic metastases can be considered as measurable lesions, if they meet the definition of measurability described above. However, if noncystic lesions are present in the same participant, these are preferred for selection as target lesions. • Non-measurable lesions - all other lesions are considered non-measurable, including small lesions (e.g.",
        "longest diameter <10 mm with CT/MRI or pathological lymph nodes with greater than or equal to 10 to <15 mm short axis), as well as truly non-measurable lesions e.g., blastic bone lesions, leptomeningeal disease, ascites, pleural/pericardial effusion, inflammatory breast disease, lymphangitis cutis/pulmonis, abdominal masses/abdominal organomegaly identified by physical exam that is not measurable by reproducible imaging techniques.",
        "10.5.2.1.2 Eligibility based on measurable disease If no measurable lesions are identified at baseline, the participant may be allowed to enter the study in some situations (e.g. in Phase III studies where PFS is the primary endpoint). However, it is recommended that participants be excluded from trials where the main focus is on the Overall Response Rate (ORR).",
        "Guidance on how participants with just non-measurable disease at baseline will be evaluated for response and also handled in the statistical analyses is given in Section 10.5.3.2.8. 10.5.2.2 Methods of tumor measurement - general guidelines In this document, the term “contrast” refers to intravenous (i.v.) contrast.",
        "The following considerations are to be made when evaluating the tumor: • All measurements should be taken and recorded in metric notation (mm), using a ruler or calipers. All baseline evaluations should be performed as closely as possible to the beginning of treatment and never more than 4 weeks before the beginning of the treatment.",
        "• Imaging-based evaluation is preferred to evaluation by clinical examination when both methods have been used to assess the antitumor effect of a treatment. • For optimal evaluation of participants, the same methods of assessment and technique should be used to characterize each identified and reported lesion at baseline and during follow-up.",
        "Contrast-enhanced CT of chest, abdomen and pelvis should preferably be performed using a 5 mm slice thickness with a contiguous reconstruction algorithm. CT/MRI scan slice thickness should not exceed 8 mm cuts using a contiguous reconstruction algorithm.",
        "If, at baseline, a participant is known to have a medical contraindication to CT contrast or develops a contraindication during the trial, the following change in imaging modality will be accepted for follow up: a non-contrast CT of chest (MRI not recommended due to respiratory artifacts) plus contrast-enhanced MRI of abdomen and pelvis."
      ],
      "chips": [
        "CPBQ663A12101",
        "p143/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n143.jpg",
      "cap": "Protocol page 143 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 144 of 170 · • A change in methodology can be defined as either a change in contrast use (e",
      "audio": [
        "• A change in methodology can be defined as either a change in contrast use (e.g. keeping the same technique, like CT, but switching from with to without contrast use or vice-versa, regardless of the justification for the change) or a major change in technique (e.g. from CT to MRI, or vice-versa), or a change in any other imaging modality.",
        "A change from conventional to spiral CT or vice versa will not constitute a major “change in method” for the purposes of response assessment. A change in methodology will result by default in a NE overall lesion response assessment as per Novartis calculated response.",
        "However, another response assessment than the Novartis calculated NE response may be accepted from the investigator or the central blinded reviewer if a definitive response assessment can be justified, based on the available information. • FDG-PET: can complement CT scans in assessing progression (particularly possible for ‘new’ disease).",
        "New lesions on the basis of FDG-PET imaging can be identified according to the following algorithm: • Negative FDG-PET at baseline, with a positive FDG-PET at follow-up is a sign of PD based on a new lesion.",
        "• No FDG-PET at baseline with a positive FDG-PET at follow-up: • If new disease is indicated by a positive PET scan but is not confirmed by CT (or some other conventional technique such as MRI) at the same assessment, then followup assessments by CT will be needed to determine if there is truly progression occurring at that site.",
        "In all cases PD will be the date of confirmation of new disease by CT (or some other conventional technique such as MRI) rather than the date of the positive PET scan. If there is a positive PET scan without any confirmed progression at that site by CT, then a PD cannot be assigned. • If the positive FDG-PET at follow-up corresponds to a pre-existing site of disease on CT that is not progressing on the basis of the anatomic images, this is not PD.",
        "• Chest x-ray: Lesions on chest x-ray are acceptable as measurable lesions when they are clearly defined and surrounded by aerated lung. However, CT is preferable. • Physical exams: Evaluation of lesions by physical examination is accepted when lesions are superficial, with at least 10mm size, and can be assessed using calipers.",
        "• Ultrasound: When the primary endpoint of the study is objective response evaluation, ultrasound (US) should not be used to measure tumor lesions, unless pre-specified by the protocol. It is, however, a possible alternative to clinical measurements of superficial palpable lymph nodes, subcutaneous lesions and thyroid nodules. US might also be useful to confirm the complete disappearance of superficial lesions usually assessed by clinical examination.",
        "• Endoscopy and laparoscopy: The utilization of endoscopy and laparoscopy for objective tumor evaluation has not yet been fully and widely validated. Their uses in this specific context require sophisticated equipment and a high level of expertise that may only be available in some centers. Therefore, the utilization of such techniques for objective tumor response should be restricted to validation purposes in specialized centers.",
        "However, such techniques can be useful in confirming complete pathological response when biopsies are obtained."
      ],
      "chips": [
        "CPBQ663A12101",
        "p144/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n144.jpg",
      "cap": "Protocol page 144 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 145 of 170 · • Tumor markers: Tumor markers alone cannot be used to assess response",
      "audio": [
        "• Tumor markers: Tumor markers alone cannot be used to assess response. However, some disease specific and more validated tumor markers (e.g. CA-125 for ovarian cancer, PSA for prostate cancer, alpha-FP, lactate dehydrogenase (LDH) and Betahuman chorionic gonadotropin (hCG) for testicular cancer) can be integrated as nontarget disease.",
        "If markers are initially above the upper normal limit they must normalize for a participant to be considered in complete clinical response when all lesions have disappeared. • Cytology and histology: Cytology and histology can be used to differentiate between PR and CR in rare cases (i.e., after treatment to differentiate between residual benign lesions and residual malignant lesions in tumor types such as germ cell tumors).",
        "Cytologic confirmation of neoplastic nature of any effusion that appears or worsens during treatment is required when the measurable tumor has met the criteria for response or stable disease. Under such circumstances, the cytologic examination of the fluid collected will permit differentiation between response and stable disease (an effusion may be a side effect of the treatment) or progressive disease (if the neoplastic origin of the fluid is confirmed).",
        "• Clinical examination: Clinical lesions will only be considered measurable when they are superficial (i.e., skin nodules and palpable lymph nodes). For the case of skin lesions, documentation by color photography, including a ruler to estimate the size of the lesion, is recommended.",
        "10.5.2.3 Baseline documentation of target and non-target lesions For the evaluation of lesions at baseline and throughout the study, the lesions are classified at baseline as either target or non-target lesions: • Target lesions: All measurable lesions (nodal and non-nodal) up to a maximum of five lesions in total (and a maximum of two lesions per organ), representative of all involved organs should be identified as target lesions and recorded and measured at baseline.",
        "Target lesions should be selected on the basis of their size (lesions with the longest diameter) and their suitability for accurate repeated measurements (either by imaging techniques or clinically). Each target lesion must be uniquely and sequentially numbered on the CRF (even if it resides in the same organ). Minimum target lesion size at baseline • Non-nodal target: Non-nodal target lesions identified by methods for which slice thickness is not applicable (e.g.",
        "clinical examination, photography) should be at least 10 mm in longest diameter. See Section 10.5.2.1.1. • Nodal target: See Section 10.5.2.1.1. A sum of diameters (long axis for non-nodal lesions, short axis for nodal) for all target lesions will be calculated and reported as the baseline sum of diameters (SOD). The baseline sum of diameters will be used as reference by which to characterize the objective tumor response.",
        "Each target lesion identified at baseline must be followed at each subsequent evaluation and documented on eCRF."
      ],
      "chips": [
        "CPBQ663A12101",
        "p145/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n145.jpg",
      "cap": "Protocol page 145 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 146 of 170 · • Non-target lesions: All other lesions are considered non-target lesions, i",
      "audio": [
        "• Non-target lesions: All other lesions are considered non-target lesions, i.e. lesions not fulfilling the criteria for target lesions at baseline. Presence or absence or worsening of non-target lesions should be assessed throughout the study; measurements of these lesions are not required. Multiple non-target lesions involved in the same organ can be assessed as a group and recorded as a single item (i.e. multiple liver metastases).",
        "Each non-target lesion identified at baseline must be followed at each subsequent evaluation and documented on eCRF. 10.5.2.4 Follow-up evaluation of target and non-target lesions To assess tumor response, the sum of diameters for all target lesions will be calculated (at baseline and throughout the study). At each assessment response is evaluated first separately for the target (Table 10-2) and non-target lesions (Table 10-3) identified at baseline.",
        "These evaluations are then used to calculate the overall lesion response considering both the target and non-target lesions together (Table 10-4) as well as the presence or absence of new lesions. 10.5.2.4.1 Follow-up and recording of lesions At each visit and for each lesion the actual date of the scan or procedure which was used for the evaluation of each specific lesion should be recorded.",
        "This applies to target and non-target lesions as well as new lesions that are detected. At the assessment visit all of the separate lesion evaluation data are examined by the investigator in order to derive the overall visit response. Therefore all such data applicable to a particular visit should be associated with the same assessment number. Non-nodal lesions Following treatment, lesions may have longest diameter measurements smaller than the image reconstruction interval.",
        "Lesions smaller than twice the reconstruction interval are subject to substantial “partial volume” effects (i.e., size may be underestimated because of the distance of the cut from the longest diameter; such lesions may appear to have responded or progressed on subsequent examinations, when, in fact, they remain the same size). If the lesion has completely disappeared, the lesion size should be reported as 0 mm.",
        "Measurements of non-nodal target lesions that become 5 mm or less in longest diameter are likely to be non-reproducible. Therefore, it is recommended to report a default value of 5 mm, instead of the actual measurement. This default value is derived from the 5 mm CT slice thickness (but should not be changed with varying CT slice thickness).",
        "Actual measurement should be given for all lesions larger than 5 mm in longest diameter irrespective of slice thickness/reconstruction interval. In other cases where the lesion cannot be reliably measured for reasons other than its size (e.g., borders of the lesion are confounded by neighboring anatomical structures), no measurement should be entered and the lesion cannot be evaluated."
      ],
      "chips": [
        "CPBQ663A12101",
        "p146/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n146.jpg",
      "cap": "Protocol page 146 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 147 of 170 · Nodal lesions A nodal lesion less than 10 mm in size by short axis is considered normal",
      "audio": [
        "Nodal lesions A nodal lesion less than 10 mm in size by short axis is considered normal. Lymph nodes are not expected to disappear completely, so a “non-zero size” will always persist. Measurements of nodal target lesions that become 5 mm or less in short axis are likely to be non-reproducible. Therefore, it is recommended to report a default value of 5 mm, instead of the actual measurement.",
        "This default value is derived from the 5 mm CT slice thickness (but should not be changed with varying CT slice thickness). Actual measurement should be given for all lesions larger than 5 mm in short axis irrespective of slice thickness/reconstruction interval. However, once a target nodal lesion shrinks to less than 10 mm in its short axis, it will be considered normal for response purpose determination.",
        "The lymph node measurements will continue to be recorded to allow the values to be included in the sum of diameters for target lesions, which may be required subsequently for response determination. 10.5.2.4.2 Determination of target lesion response Table 10-7 Response criteria for target lesions Response Criteria Evaluation of target lesions Complete Response (CR): Disappearance of all non-nodal target lesions.",
        "In addition, any pathological lymph nodes assigned as target lesions must have a reduction in short axis to < 10 mm 1 Partial Response (PR): At least a 30% decrease in the sum of diameter of all target lesions, taking as reference the baseline sum of diameters. Progressive Disease (PD): At least a 20% increase in the sum of diameter of all measured target lesions, taking as reference the smallest sum of diameter of all target lesions recorded at or after baseline.",
        "In addition to the relative increase of 20%, the sum must also demonstrate an absolute increase of at least 5 mm 2. Stable Disease (SD): Neither sufficient shrinkage to qualify for PR or CR nor an increase in lesions which would qualify for PD.",
        "NE (Not Evaluable) Progression has not been documented and one or more target lesions have not been assessed or have been assessed using a different method than baseline.3 1SOD for CR may not be zero when nodal lesions are part of target lesions 2Following an initial CR, a PD cannot be assigned if all non-nodal target lesions are still not present and all nodal lesions are <10 mm in size.",
        "In this case, the target lesion response is CR 3In exceptional circumstances an NE response due to change in method could be over-ruled by the investigator or central reviewer using expert judgment based on the available information (see Notes on target lesion response and methodology change in Section 10.5.2.2).",
        "Notes on target lesion response Reappearance of lesions: If the lesion appears at the same anatomical location where a target lesion had previously disappeared, it is advised that the time point of lesion disappearance (i.e., the “0 mm” recording) be re-evaluated to make sure that the lesion was not actually present"
      ],
      "chips": [
        "CPBQ663A12101",
        "p147/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n147.jpg",
      "cap": "Protocol page 147 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 148 of 170 · and/or not visualized for technical reasons in this previous assessment",
      "audio": [
        "and/or not visualized for technical reasons in this previous assessment.",
        "If it is not possible to change the 0 value, then the investigator/radiologist has to decide between the following possibilities: • The lesion is a new lesion, in which case the overall tumor assessment will be considered as progressive disease • The lesion is clearly a reappearance of a previously disappeared lesion, in which case the size of the lesion has to be entered in the CRF and the tumor assessment will remain based on the sum of tumor measurements as presented in",
        "Table 10-2 above (i.e., a PD will be determined if there is at least 20% increase in the sum of diameters of all measured target lesions, taking as reference the smallest sum of diameters of all target lesions recorded at or after baseline with at least 5 mm increase in the absolute sum of the diameters). Proper documentation should be available to support this decision. This applies to participants who have not achieved target response of CR.",
        "For participants who have achieved CR, please refer to last bullet in this section. • For those participants who have only one target lesion at baseline, the reappearance of the target lesion which disappeared previously, even if still small, is considered a PD. • Missing measurements: In cases where measurements are missing for one or more target lesions it is sometimes still possible to assign PD based on the measurements of the remaining lesions.",
        "For example, if the sum of diameters for 5 target lesions at baseline is 100 mm at baseline and the sum of diameters for 3 of those lesions at a post-baseline visit is 140 mm (with data for 2 other lesions missing) then a PD should be assigned. However, in other cases where a PD cannot definitely be attributed, the target lesion response would be NE.",
        "• Nodal lesion decrease to normal size: When nodal disease is included in the sum of target lesions and the nodes decrease to “normal” size they should still have a measurement recorded on scans. This measurement should be reported even when the nodes are normal in order not to overstate progression should it be based on increase in the size of nodes.",
        "• Lesions split: In some circumstances, disease that is measurable as a target lesion at baseline and appears to be one mass can split to become two or more smaller sub-lesions. When this occurs, the diameters (long axis - non-nodal lesion, short axis - nodal lesions) of the two split lesions should be added together and the sum recorded in the diameter field on the case report form under the original lesion number.",
        "This value will be included in the sum of diameters when deriving target lesion response. The individual split lesions will not be considered as new lesions, and will not automatically trigger a PD designation. • Lesions coalesced: Conversely, it is also possible that two or more lesions which were distinctly separate at baseline become confluent at subsequent visits.",
        "When this occurs a plane between the original lesions may be maintained that would aid in obtaining diameter measurements of each individual lesion. If the lesions have truly coalesced such that they are no longer separable, the maximal diameters (long axis - non-nodal lesion, short axis - nodal lesions) of the “merged lesion” should be used when calculating the sum of diameters for target lesions.",
        "On the case report form, the diameter of the “merged lesion” should be recorded for the size of one of the original lesions while a size of “0”mm should be entered for the remaining lesion numbers which have coalesced."
      ],
      "chips": [
        "CPBQ663A12101",
        "p148/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n148.jpg",
      "cap": "Protocol page 148 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 149 of 170 · • The measurements for nodal lesions, even if less than 10 mm in size, will…",
      "audio": [
        "• The measurements for nodal lesions, even if less than 10 mm in size, will contribute to the calculation of target lesion response in the usual way with slight modifications. • Since lesions less than 10 mm are considered normal, a CR for target lesion response should be assigned when all nodal target lesions shrink to less than 10 mm and all nonnodal target lesions have disappeared.",
        "• Once a CR target lesion response has been assigned a CR will continue to be appropriate (in the absence of missing data) until progression of target lesions.",
        "• Following a CR, a PD can subsequently only be assigned for target lesion response if either a non-nodal target lesion “reappears” or if any single nodal lesion is at least 10 mm and there is at least 20% increase in sum of the diameters of all nodal target lesions relative to nadir with at least 5 mm increase in the absolute sum of the diameters.",
        "• A change in method for the evaluation of one or more lesions will usually lead to an NE target lesion response unless there is progression indicated by the remaining lesions which have been evaluated by the same method. In exceptional circumstances an investigator or central reviewer might over-rule this assignment to put a non-NE response using expert judgment based on the available information. E.g.",
        "a change to a more sensitive method might indicate some tumor shrinkage of target lesions and definitely rule out progression in which case the investigator might assign an SD target lesion response; however, this should be done with caution and conservatively as the response categories have well defined criteria.",
        "10.5.2.4.3 Determination of non-target lesion response Table 10-8 Response criteria for non-target lesions Response Criteria Evaluation of non-target lesions Complete Response (CR): Disappearance of all non-target lesions.",
        "In addition, all lymph nodes assigned a non-target lesions must be non-pathological in size (< 10 mm short axis) Progressive Disease (PD): Unequivocal progression of existing non-target lesions.1 Non-CR/Non-PD: Neither CR nor PD NE (Not Evaluable) Progression has not been documented and one or more non-target lesions have not been assessed or have been assessed using a different method than baseline2.",
        "1The assignment of PD solely based on change in non-target lesions in light of target lesion response of CR, PR or SD should be exceptional. In such circumstances, the opinion of the investigator or central reviewer does prevail.",
        "2It is recommended that the investigator and/or central reviewer should use expert judgment to assign a NonNE response wherever possible (see notes section for more details) Notes on non-target lesion response • The investigator and/or central reviewer can use expert judgment to assign a non-NE response wherever possible, even where lesions have not been fully assessed or a different method has been used.",
        "In many of these situations it may still be possible to identify equivocal progression (PD) or definitively rule this out (non-CR/Non-PD) based on the"
      ],
      "chips": [
        "CPBQ663A12101",
        "p149/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n149.jpg",
      "cap": "Protocol page 149 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 150 of 170 · available information",
      "audio": [
        "available information. In the specific case where a more sensitive method has been used indicating the absence of any non-target lesions, a CR response can also be assigned. • The response for non-target lesions is CR only if all non-target non-nodal lesions which were evaluated at baseline are now all absent and with all non-target nodal lesions returned to normal size (i.e. < 10 mm).",
        "If any of the non-target lesions are still present, or there are any abnormal nodal lesions (i.e. greater than or equal to 10 mm) the response can only be ‘NonCR/Non-PD’ unless there is unequivocal progression of the non-target lesions (in which case response is PD) or it is not possible to determine whether there is unequivocal progression (in which case response is NE).",
        "• Unequivocal progression: To achieve “unequivocal progression” on the basis of non-target disease there must be an overall level of substantial worsening in non-target disease such that, even in presence of CR, PR or SD in target disease, the overall tumor burden has increased sufficiently to merit discontinuation of therapy. A modest “increase” in the size of one or more non-target lesions is usually not sufficient to qualify for unequivocal progression status.",
        "The designation of overall progression solely on the basis of change in non-target disease in the face of CR, PR or SD of target disease is therefore expected to be rare. In order for a PD to be assigned on the basis of non-target lesions, the increase in the extent of the disease must be substantial even in cases where there is no measurable disease at baseline.",
        "If there is unequivocal progression of non-target lesion(s), then at least one of the non-target lesions must be assigned a status of “Worsened”. Where possible, similar rules to those described in Section 10.5.2.4.2 for assigning PD following a CR for the non-target lesion response in the presence of non-target lesions nodal lesions should be applied.",
        "10.5.2.4.4 New lesions The appearance of a new lesion is always associated with Progressive Disease (PD) and has to be recorded as a new lesion in the New Lesion CRF page. • If a new lesion is equivocal, for example because of its small size, continued therapy and follow-up evaluation will clarify if it represents truly new disease.",
        "If repeat scans confirm there is definitely a new lesion, then progression should be declared using the date of the first observation of the lesion • If new disease is observed in a region which was not scanned at baseline or where the particular baseline scan is not available for some reason, then this should be considered as a PD.",
        "The one exception to this is when there are no baseline scans at all available for a participant in which case the response should be NE, as for any of this participant's assessment (see Section 10.5.2.5). • A lymph node is considered as a “new lesion” and, therefore, indicative of progressive disease if the short axis increases in size to ³ 10 mm for the first time in the study plus 5 mm absolute increase.",
        "FDG-PET: can complement CT scans in assessing progression (particularly possible for ‘new’ disease). See Section 10.5.2.2."
      ],
      "chips": [
        "CPBQ663A12101",
        "p150/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n150.jpg",
      "cap": "Protocol page 150 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 151 of 170 · Protocol body · page 151",
      "audio": [
        "10.5.2.5 Evaluation of overall lesion response The evaluation of overall lesion response at each assessment is a composite of the target lesion response, non-target lesion response and presence of new lesions as shown below in Table 10-9.",
        "Table 10-9 Overall lesion response at each assessment Target lesions Non-target lesions New Lesions Overall lesion response CR CR No CR1 CR Non-CR/Non-PD3 No PR CR, PR, SD NE No NE PR Non-PD and not NE No PR1 SD Non-PD and not NE No SD1, 2 NE Non-PD or NE No NE1 PD Any Yes or No PD Any PD Yes or No PD Any Any Yes PD 1This overall lesion response also applies when there are no non-target lesions identified at baseline.",
        "2Once confirmed PR was achieved, all these assessments are considered PR. 3As defined in Section 10.5.2.4. 10.5.3 Efficacy definitions The following definitions primarily relate to participants who have measurable disease at baseline. Section 10.5.3.2.8 outlines the special considerations that need to be given to participants with no measurable disease at baseline in order to apply the same concepts.",
        "10.5.3.1 Best overall response The best overall response is the best response recorded from the start of the treatment until disease progression/recurrence (taking as reference for PD the smallest measurements recorded since the treatment started). In general, the participant's best response assignment will depend on the achievement of both measurement and confirmation criteria.",
        "The best overall response will usually be determined from response assessments undertaken while on treatment. However, if any assessments occur after treatment withdrawal the protocol should specifically describe if these will be included in the determination of best overall response and/or whether these additional assessments will be required for sensitivity or supportive analyses.",
        "As a default, any assessments taken more than 30 days after the last dose of study treatment will not be included in the best overall response derivation. If any alternative cancer therapy is taken while on study any subsequent assessments would ordinarily be excluded from the best overall response determination.",
        "If response assessments taken after withdrawal from study treatment and/or alternative therapy are to be included in the main endpoint determination, then this should be described and justified in the protocol. Where a study requires confirmation of response (PR or CR), changes in tumor measurements must be confirmed by repeat assessments that should be performed not less than 4 weeks after the criteria for response are first met."
      ],
      "chips": [
        "CPBQ663A12101",
        "p151/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n151.jpg",
      "cap": "Protocol page 151 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 152 of 170 · Longer intervals may also be appropriate",
      "audio": [
        "Longer intervals may also be appropriate. However, this must be clearly stated in the protocol. The main goal of confirmation of objective response is to avoid overestimating the response rate observed. In cases where confirmation of response is not feasible, it should be made clear when reporting the outcome of such studies that the responses are not confirmed. • For non-randomized trials where response is the primary endpoint, confirmation is needed.",
        "• For trials intended to support accelerated approval, confirmation is needed • For all other trials, confirmation of response may be considered optional.",
        "The best overall response for each participant is determined from the sequence of overall (lesion) responses according to the following rules: • CR = at least two determinations of CR at least 4 weeks apart before progression where confirmation required or one determination of CR prior to progression where confirmation not required • PR = at least two determinations of PR or better at least 4 weeks apart before progression (and not qualifying for a CR) where confirmation",
        "required or one determination of PR prior to progression where confirmation not required • SD = at least one SD assessment (or better) > 6 weeks after randomization/start of treatment (and not qualifying for CR or PR). • PD = progression £ 12 weeks after randomization/ start of treatment (and not qualifying for CR, PR or SD). • NE = all other cases (i.e.",
        "not qualifying for confirmed CR or PR and without SD after more than 6 weeks or early progression within the first 12 weeks) The time durations specified in the SD/PD/NE definitions above are defaults based on a 6 week tumor assessment frequency. However these may be modified for specific indications which are more or less aggressive. In addition, it is envisaged that the time duration may also take into account assessment windows. E.g.",
        "if the assessment occurs every 6 weeks with a time window of +/- 7 days, a BOR of SD would require a SD or better response longer than 5 weeks after randomization/start of treatment. Overall lesion responses of CR must stay the same until progression sets in, with the exception of a NE status. A participant who had a CR cannot subsequently have a lower status other than a PD, e.g.",
        "PR or SD, as this would imply a progression based on one or more lesions reappearing, in which case the status would become a PD. Once an overall lesion response of PR is observed (which may have to be a confirmed PR depending on the study) this assignment must stay the same or improve over time until progression sets in, with the exception of an NE status.",
        "However, in studies where confirmation of response is required, if a participant has a single PR (³30% reduction of tumor burden compared to baseline) at one assessment, followed by a <30% reduction from baseline at the next assessment (but not ³20% increase from previous smallest sum), the objective status at that assessment should be SD.",
        "Once a confirmed PR was seen, the overall lesion response should be considered PR (or NE) until progression is documented or the lesions totally disappear in which case a CR assignment is applicable. In studies where confirmation of response is not required after a single PR the overall lesion response should still be considered PR (or NE) until"
      ],
      "chips": [
        "CPBQ663A12101",
        "p152/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n152.jpg",
      "cap": "Protocol page 152 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 153 of 170 · progression is documented or the lesion totally disappears in which case a CR…",
      "audio": [
        "progression is documented or the lesion totally disappears in which case a CR assignment is applicable. Example: In a case where confirmation of response is required the sum of lesion diameters is 200 mm at baseline and then 140 mm - 150 mm - 140 mm - 160 mm - 160 mm at the subsequent visits. Assuming that non-target lesions did not progress, the overall lesion response would be PR - SD - PR - PR - PR. The second assessment with 140 mm confirms the PR for this participant.",
        "All subsequent assessments are considered PR even if tumor measurements decrease only by 20% compared to baseline (200 mm to 160 mm) at the following assessments. If the participant progressed but continues study treatment, further assessments are not considered for the determination of best overall response. Note: these cases may be described as a separate finding in the CSR but not included in the overall response or disease control rates.",
        "The best overall response for a participant is always calculated, based on the sequence of overall lesion responses.",
        "However, the overall lesion response at a given assessment may be provided from different sources: • Investigator overall lesion response • Central Blinded Review overall lesion response • Novartis calculated overall lesion response (based on measurements from either Investigator or Central Review) The primary analysis of the best overall response will be based on the sequence of investigator/central blinded review/calculated (investigator)/calculated (central) overall",
        "lesion responses. Based on the participants’ best overall response during the study, the following rates are then calculated: Overall response rate (ORR) is the proportion of participants with a best overall response of CR or PR. This is also referred to as ‘Objective response rate’ in some protocols or publications. Disease control rate (DCR) is the proportion of participants with a best overall response of CR or PR or SD.",
        "The objective of this endpoint is to summarize participants with signs of “activity” defined as either shrinkage of tumor (regardless of duration) or slowing down of tumor growth. Clinical benefit rate (CBR) is the proportion of participants with a best overall response of CR or PR , or an overall lesion response of SD or Non-CR/Non-PD which lasts for a minimum time duration (with a default of at least 24 weeks in breast cancer studies).",
        "This endpoint measures signs of activity taking into account duration of disease stabilization. Another approach is to summarize the progression rate at a certain time point after baseline. In this case, the following definition is used: Early progression rate (EPR) is the proportion of participants with progressive disease within 8 weeks of the start of treatment. The protocol should define populations for which these will be calculated.",
        "The timepoint for EPR is study specific. EPR is used for the multinomial designs of Dent et al 2001 and counts"
      ],
      "chips": [
        "CPBQ663A12101",
        "p153/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n153.jpg",
      "cap": "Protocol page 153 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 154 of 170 · all participants who at the specified assessment (in this example the assessment…",
      "audio": [
        "all participants who at the specified assessment (in this example the assessment would be at 8 weeks plus or minus window) do not have an overall lesion response of SD, PR or CR. Participants with an not evaluable (NE) assessment at that time point and no PD before, will not be counted as early progressors in the analysis but may be included in the denominator of the EPR rate, depending on the analysis population used.",
        "Similarly when examining overall response and disease control, participants with a best overall response assessment of not evaluable (NE) will not be regarded as “responders” but may be included in the denominator for ORR and DCR calculation depending on the analysis population (e.g. populations based on an intention to treat (ITT) approach).",
        "10.5.3.2 Time to event variables 10.5.3.2.1 Progression-free survival Usually in all Oncology studies, participants are followed for tumor progression after discontinuation of study medication for reasons other than progression or death. If this is not used, e.g. in Phase I or II studies, this should be clearly stated in the protocol. Note that randomized trials (preferably blinded) are recommended where PFS is to be the primary endpoint.",
        "Progression-free survival (PFS) is the time from date of randomization/start of treatment to the date of event defined as the first documented progression or death due to any cause. If a participant has not had an event, progression-free survival is censored at the date of last adequate tumor assessment. PFS rate at x weeks is an additional measure used to quantify PFS endpoint. It is recommended that a Kaplan Meier estimate is used to assess this endpoint.",
        "10.5.3.2.2 Overall survival All participants should be followed until death or until participant has had adequate follow-up time as specified in the protocol whichever comes first. The follow-up data should contain the date the participant was last seen alive / last known date participant alive, the date of death and the reason of death (“Study indication” or “Other”).",
        "Overall survival (OS) is defined as the time from date of randomization/start of treatment to date of death due to any cause. If a participant is not known to have died, survival will be censored at the date of last known date participant alive. 10.5.3.2.3 Time to progression Some studies might consider only death related to underlying cancer as an event which indicates progression. In this case the variable “Time to progression” might be used.",
        "TTP is defined as PFS except for death unrelated to underlying cancer. Time to progression (TTP) is the time from date of randomization/start of treatment to the date of event defined as the first documented progression or death due to underlying cancer. If a participant has not had an event, time to progression is censored at the date of last adequate tumor assessment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p154/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n154.jpg",
      "cap": "Protocol page 154 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 155 of 170 · Protocol body · page 155",
      "audio": [
        "10.5.3.2.4 PFS2 A recent EMA guidance (EMA Guidance 2012) recommends a substitute end point intermediate to PFS and OS called PFS2, a surrogate for OS when OS cannot be measured reliably, which assesses the impact of the experimental therapy on next-line treatment. The main purpose of this endpoint is to assess long term maintenance strategies, particularly of resensitizing agents and where it is necessary to examine the overall “field of influence”.",
        "PFS2, which could be termed PFS deferred, PFS delayed, tandem PFS, or PFS version 2.0, is the time from date of randomization/start of treatment to the date of event defined as the first documented progression on next-line treatment or death from any cause. The censoring rules for this endpoint will incorporate the same principles as those considered for PFS in this document, and in addition may involve other considerations which will need to be detailed in the protocol.",
        "Please note that data collection for the PFS2 is limited to the date of progression and not specific read of the tumor assessments. It is strongly recommended that the teams consult regulatory agencies for scientific advice given the limited experience with the use of this endpoint in regulatory setting in light of methodological issues wtih respect to censoring foreseen.",
        "10.5.3.2.5 Time to treatment failure This endpoint is often appropriate in studies of advanced disease where early discontinuation is typically related to intolerance of the investigational drug. In some protocols, time to treatment failure may be considered as a sensitivity analysis for time to progression. The list of discontinuation reasons to be considered or not as treatment failure may be adapted according to the specificities of the study or the disease.",
        "Time to treatment failure (TTF) is the time from date of randomization/start of treatment to the earliest of date of progression, date of death due to any cause, or date of discontinuation due to reasons other than ‘Protocol violation’ or ‘Administrative problems’. The time to treatment failure for participants who did not experience treatment failure will be censored at last adequate tumor assessment.",
        "10.5.3.2.6 Duration of response The analysis of the following variables should be performed with much caution when restricted to responders since treatment bias could have been introduced.",
        "There have been reports where a treatment with a significantly higher response rate had a significantly shorter duration of response but where this probably primarily reflected selection bias which is explained as follows: It is postulated that there are two groups of participants: a good risk group and a poor risk group. Good risk participants tend to get into response readily (and relatively quickly) and tend to remain in response after they have a response.",
        "Poor risk participants tend to be difficult to achieve a response, may have a longer time to respond, and tend to relapse quickly when they do respond. Potent agents induce a response in both good risk and poor risk participants. Less potent agents induce a response mainly in good risk participants only. This is described in more detail by Morgan 1988."
      ],
      "chips": [
        "CPBQ663A12101",
        "p155/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n155.jpg",
      "cap": "Protocol page 155 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 156 of 170 · It is recommended that an analysis of all participants (both responders and…",
      "audio": [
        "It is recommended that an analysis of all participants (both responders and non-responders) be performed whether or not a “responders only” descriptive analysis is presented. An analysis of responders should only be performed to provide descriptive statistics and even then interpreted with caution by evaluating the results in the context of the observed response rates.",
        "If an inferential comparison between treatments is required this should only be performed on all participants (i.e. not restricting to “responders” only) using appropriate statistical methods such as the techniques described in Ellis et al 2008. It should also be stated in the protocol if duration of response is to be calculated in addition for unconfirmed response. For summary statistics on “responders” only the following definitions are appropriate.",
        "(Specific definitions for an all-participant analysis of these endpoints are not appropriate since the status of participants throughout the study is usually taken into account in the analysis). Duration of overall response (CR or PR): For participants with a CR or PR (which may have to be confirmed the start date is the date of first documented response (CR or PR) and the end date and censoring is defined the same as that for time to progression.",
        "The following two durations might be calculated in addition for a large Phase III study in which a reasonable number of responders is seen. Duration of overall complete response (CR): For participants with a CR (which may have to be confirmed) the start date is the date of first documented CR and the end date and censoring is defined the same as that for time to progression.",
        "Duration of stable disease (CR/PR/SD): For participants with a CR or PR (which may have to be confirmed) or SD the start and end date as well as censoring is defined the same as that for time to progression. 10.5.3.2.7 Time to response Time to overall response (CR or PR) is the time between date of randomization/start of treatment until first documented response (CR or PR). The response may need to be confirmed depending on the type of study and its importance.",
        "Where the response needs to be confirmed then time to response is the time to the first CR or PR observed. Although an analysis on the full population is preferred a descriptive analysis may be performed on the “responders” subset only, in which case the results should be interpreted with caution and in the context of the overall response rates, since the same kind of selection bias may be introduced as described for duration of response in Section 10.5.3.2.5.",
        "It is recommended that an analysis of all participants (both responders and non-responders) be performed whether or not a “responders only” descriptive analysis is presented. Where an inferential statistical comparison is required, then all participants should definitely be included in the analysis to ensure the statistical test is valid.",
        "For analysis including all participants, participants who did not achieve a response (which may have to be a confirmed response) will be censored using one of the following options. • at maximum follow-up (i.e. FPFV to LPLV used for the analysis) for participants who had a PFS event (i.e. progressed or died due to any cause). In this case the PFS event is the worst possible outcome as it means the participant cannot subsequently respond.",
        "Since the statistical analysis usually makes use of the ranking of times to response it is sufficient to"
      ],
      "chips": [
        "CPBQ663A12101",
        "p156/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n156.jpg",
      "cap": "Protocol page 156 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 157 of 170 · assign the worst possible censoring time which could be observed in the study which…",
      "audio": [
        "assign the worst possible censoring time which could be observed in the study which is equal to the maximum follow-up time (i.e. time from FPFV to LPLV) • at last adequate tumor assessment date otherwise. In this case participants have not yet progressed so they theoretically still have a chance of responding Time to overall complete response (CR) is the time between dates of randomization/start of treatment until first documented CR.",
        "Similar analysis considerations including (if appropriate) censoring rules apply for this endpoint described for the time to overall response endpoint. 10.5.3.2.8 Definition of start and end dates for time to event variables Assessment date For each assessment (i.e. evaluation number), the assessment date is calculated as the latest of all measurement dates (e.g. X-ray, CT-scan) if the overall lesion response at that assessment is CR/PR/SD/NE.",
        "Otherwise - if overall lesion response is progression - the assessment date is calculated as the earliest date of all measurement dates at that evaluation number. In the calculation of the assessment date for time to event variables, any unscheduled assessment should be treated similarly to other evaluations. Start dates For all “time to event” variables, other than duration of response, the randomization/ date of treatment start will be used as the start date.",
        "For the calculation of duration of response the following start date should be used: • Date of first documented response is the assessment date of the first overall lesion response of CR (for duration of overall complete response) or CR / PR (for duration of overall response) respectively, when this status is later confirmed.",
        "End dates The end dates which are used to calculate ‘time to event’ variables are defined as follows: • Date of death (during treatment as recorded on the treatment completion page or during follow-up as recorded on the study evaluation completion page or the survival follow-up page). • Date of progression is the first assessment date at which the overall lesion response was recorded as progressive disease.",
        "• Date of last adequate tumor assessment is the date the last tumor assessment with overall lesion response of CR, PR or SD which was made before an event or a censoring reason occurred. In this case the last tumor evaluation date at that assessment is used. If no postbaseline assessments are available (before an event or a censoring reason occurred) the date of randomization/start of treatment is used.",
        "• Date of next scheduled assessment is the date of the last adequate tumor assessment plus the protocol specified time interval for assessments. This date may be used if back-dating is considered when the event occurred beyond the acceptable time window for the next tumor assessment as per protocol (see Section 10.5.3.2.8)."
      ],
      "chips": [
        "CPBQ663A12101",
        "p157/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n157.jpg",
      "cap": "Protocol page 157 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 158 of 170 · Example (if protocol defined schedule of assessments is 3 months): tumor assessments…",
      "audio": [
        "Example (if protocol defined schedule of assessments is 3 months): tumor assessments at baseline - 3 months - 6 months - missing - missing - PD. Date of next scheduled assessment would then correspond to 9 months. • Date of discontinuation is the date of the end of treatment visit. • Date of last contact is defined as the last date the participant was known to be alive. This corresponds to the latest date for either the visit date, lab sample date or tumor assessment date.",
        "If available, the last known date participant alive from the survival follow-up page is used. If no survival follow-up is available, the date of discontinuation is used as last contact date. • Date of secondary anti-cancer therapy is defined as the start date of any additional (secondary) antineoplastic therapy or surgery.",
        "10.5.3.2.9 Handling of participants with non-measurable disease only at baseline It is possible that participants with only non-measurable disease present at baseline are entered into the study, either because of a protocol violation or by design (e.g. in Phase III studies with PFS as the primary endpoint).",
        "In such cases the handling of the response data requires special consideration with respect to inclusion in any analysis of endpoints based on the overall response evaluations. It is recommended that any participants with only non-measurable disease at baseline should be included in the main (ITT) analysis of each of these endpoints.",
        "Although the text of the definitions described in the previous sections primarily relates to participants with measurable disease at baseline, participants without measurable disease should also be incorporated in an appropriate manner. The overall response for participants with nonmeasurable disease is derived slightly differently according to Table 10-10.",
        "Table 10-10 Overall lesion response at each assessment: participants with nontarget disease only Non-target lesions New Lesions Overall lesion response CR No CR Non-CR/Non-PD1 No Non-CR/non-PD NE No NE PD Yes or No PD Any Yes PD 1As defined in Section 10.5.2.4. In general, the non-CR/non-PD response for these participants is considered equivalent to an SD response in endpoint determination.",
        "In summary tables for best overall response participants with only non-measurable disease may be highlighted in an appropriate fashion e.g. in particular by displaying the specific numbers with the non-CR/non-PD category. In considering how to incorporate data from these participants into the analysis the importance to each endpoint of being able to identify a PR and/or to determine the occurrence and timing of progression needs to be taken into account."
      ],
      "chips": [
        "CPBQ663A12101",
        "p158/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n158.jpg",
      "cap": "Protocol page 158 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 159 of 170 · For ORR it is recommended that the main (ITT) analysis includes data from…",
      "audio": [
        "For ORR it is recommended that the main (ITT) analysis includes data from participants with only non-measurable disease at baseline, handling participants with a best response of CR as “responders” with respect to ORR and all other participants as “non-responders”.",
        "For PFS, it is again recommended that the main ITT analyses on these endpoints include all participants with only non-measurable disease at baseline, with possible sensitivity analyses which exclude these particular participants. Endpoints such as PFS which are reliant on the determination and/or timing of progression can incorporate data from participants with only non-measurable disease.",
        "10.5.3.2.10 Sensitivity analyses This section outlines the possible event and censoring dates for progression, as well as addresses the issues of missing tumor assessments during the study. For instance, if one or more assessment visits are missed prior to the progression event, to what date should the progression event be assigned? And should progression event be ignored if it occurred after a long period of a participant being lost to follow-up?",
        "It is important that the protocol and RAP specify the primary analysis in detail with respect to the definition of event and censoring dates and also include a description of one or more sensitivity analyses to be performed.",
        "Based on definitions outlined in Section 10.5.3.2.7, and using the draft FDA guideline on endpoints (Clinical Trial Endpoints for the Approval of Cancer Drugs and Biologics, April 2005) as a reference, the following analyses can be considered: Table 10-11 Options for event dates used in PFS, TTP, duration of response Situation Options for end-date (progression or censoring)1 (1) = default unless specified differently in the protocol or RAP Outcome A No baseline assessment",
        "(1) Date of randomization/start of treatment3 Censored B Progression at or before next scheduled assessment (1) Date of progression (2) Date of next scheduled assessment2 Progressed Progressed C1 Progression or death after exactly one missing assessment (1) Date of progression (or death) (2) Date of next scheduled assessment2 Progressed Progressed C2 Progression or death after two or more missing assessments (1) Date of last adequate assessment2 (2) Date of next scheduled",
        "assessment2 (3) Date of progression (or death) Censored Progressed Progressed D No progression (1) Date of last adequate assessment Censored"
      ],
      "chips": [
        "CPBQ663A12101",
        "p159/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n159.jpg",
      "cap": "Protocol page 159 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 160 of 170 · Situation Options for end-date (progression or censoring)1 (1) = default unless…",
      "audio": [
        "Situation Options for end-date (progression or censoring)1 (1) = default unless specified differently in the protocol or RAP Outcome E Treatment discontinuation due to ‘Disease progression’ without documented progression, i.e.",
        "clinical progression based on investigator claim (1) Ignore clinical progression and follow situations above (2) Date of discontinuation (visit date at which clinical progression was determined) As per above situations Progressed F New anticancer therapy given • Ignore the new anticancer therapy and follow situations above (ITT approach) • Date of last adequate assessment prior to new anticancer therapy (3) Date of secondary anti-cancer therapy (4) Date of secondary",
        "anti-cancer therapy As per above situations Censored Censored Event G Deaths due to reason other than deterioration of ‘Study indication’ (1) Date of last adequate assessment Censored (only TTP and duration of response) 1=Definitions can be found in Section 10.5.3.2.7. 2=After the last adequate tumor assessment. “Date of next scheduled assessment” is defined in Section 10.5.3.2.7.",
        "3=The rare exception to this is if the participant dies no later than the time of the second scheduled assessment as defined in the protocol in which case this is a PFS event at the date of death. The primary analysis and the sensitivity analyses must be specified in the protocol. Clearly define if and why options (1) are not used for situations C, E and (if applicable) F.",
        "Situations C (C1 and C2): Progression or death after one or more missing assessments: The primary analysis is usually using options (1) for situations C1 and C2, i.e. 1. (C1) taking the actual progression or death date, in the case of only one missing assessment. 2. (C2) censoring at the date of the last adequate assessment, in the case of two or more consecutive missing assessments.",
        "In the case of two or missing assessments (situation C2), option (3) may be considered jointly with option (1) in situation C1 as sensitivity analysis. A variant of this sensitivity analysis consists of backdating the date of event to the next scheduled assessment as proposed with option (2) in situations C1 and C2.",
        "Situation E: Treatment discontinuation due to ‘Disease progression’ without documented progression: By default, option (1) is used for situation E as participants without documented PD should be followed for progression after discontinuation of treatment. However, option (2)"
      ],
      "chips": [
        "CPBQ663A12101",
        "p160/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n160.jpg",
      "cap": "Protocol page 160 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 161 of 170 · may be used as sensitivity analysis",
      "audio": [
        "may be used as sensitivity analysis. If progression is claimed based on clinical deterioration instead of tumor assessment by e.g. CT-scan, option (2) may be used for indications with high early progression rate or difficulties to assess the tumor due to clinical deterioration. Situation F: New cancer therapy given: the handling of this situation must be specified in detail in the protocol.",
        "However, option (1) (ITT) is the recommended approach; events documented after the initiation of new cancer therapy will be considered for the primary analysis i.e. progressions and deaths documented after the initiation of new cancer therapy would be included as events. This will require continued follow-up for progression after the start of the new cancer therapy.",
        "In such cases, it is recommended that an additional sensitivity analysis be performed by censoring at last adequate assessment prior to initiation of new cancer therapy. Option (2), i.e. censoring at last adequate assessment may be used as a sensitivity analysis. If a high censoring rate due to start of new cancer therapy is expected, a window of approximately 8 weeks performed after the start of new cancer therapy can be used to calculate the date of the event or censoring.",
        "This should be clearly specified in the analysis plan. In some specific settings, local treatments (e.g. radiation/surgery) may not be considered as cancer therapies for assessment of event/censoring in PFS/TTP/DoR analysis. For example, palliative radiotherapy given in the trial for analgesic purposes or for lytic lesions at risk of fracture will not be considered as cancer therapy for the assessment of BOR and PFS analyses.",
        "The protocol should clearly state the local treatments which are not considered as antineoplastic therapies in the PFS/TTP/DoR analysis. The protocol should state that tumor assessments will be performed every x weeks until radiological progression irrespective of initiation of new antineoplastic therapy. It is strongly recommended that a tumor assessment is performed before the participant is switched to a new cancer therapy.",
        "Additional suggestions for sensitivity analyses Other suggestions for additional sensitivity analyses may include analyses to check for potential bias in follow-up schedules for tumor assessments, e.g. by assigning the dates for censoring and events only at scheduled visit dates.",
        "The latter could be handled by replacing in Table 10-6 the “Date of last adequate assessment” by the “Date of previous scheduled assessment (from baseline)”, with the following definition: • Date of previous scheduled assessment (from baseline) is the date when a tumor assessment would have taken place, if the protocol assessment scheme was strictly followed from baseline, immediately before or on the date of the last adequate tumor assessment.",
        "In addition, analyses could be repeated using the Investigators’ assessments of response rather than the calculated response. The need for these types of sensitivity analyses will depend on the individual requirements for the specific study and disease area and have to be specified in the protocol or RAP documentation."
      ],
      "chips": [
        "CPBQ663A12101",
        "p161/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n161.jpg",
      "cap": "Protocol page 161 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 162 of 170 · Protocol body · page 162",
      "audio": [
        "10.5.4 Data handling and programming rules The following section should be used as guidance for development of the protocol, data handling procedures or programming requirements (e.g. on incomplete dates). 10.5.4.1 Study/project specific decisions For each study (or project) various issues need to be addressed and specified in the protocol or RAP documentation. Any deviations from protocol must be discussed and defined at the latest in the RAP documentation.",
        "The proposed primary analysis and potential sensitivity analyses should be discussed and agreed with the health authorities and documented in the protocol (or at the latest in the RAP documentation before database lock).",
        "10.5.4.2 End of treatment phase completion 10.5.4.3 End of post-treatment follow-up (study phase completion) End of post-treatment follow-up visit will be completed after discontinuation of study treatment and post-treatment evaluations but prior to collecting survival follow-up.",
        "Participants may provide study phase completion information for one of the following reasons: • Adverse event • Lost to follow-up • Physician decision • Pregnancy • Protocol deviation • Technical problems • Subject/guardian decision • Death • Progressive disease • Study terminated by the sponsor 10.5.4.4 Medical validation of programmed overall lesion response In order to be as objective as possible the RECIST programmed calculated response assessment is very strict",
        "regarding measurement methods (i.e. any assessment with more or less sensitive method than the one used to assess the lesion at baseline is considered NE) and not available evaluations (i.e. if any target or non-target lesion was not evaluated the whole overall lesion response is NE unless remaining lesions qualified for PD).",
        "This contrasts with the slightly more flexible guidance given to local investigators (and to the central reviewers) to use expert judgment in determining response in these type of situations, and therefore as a consequence discrepancies between the different sources of response assessment often arise.",
        "To ensure the quality of response assessments from the local site and/or the central reviewer, the responses may be re-evaluated by clinicians (based on local investigator data recorded in eCRF or based on central reviewer data entered in the database) at Novartis or external experts. In addition,"
      ],
      "chips": [
        "CPBQ663A12101",
        "p162/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n162.jpg",
      "cap": "Protocol page 162 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 163 of 170 · data review reports will be available to identify assessments for which the…",
      "audio": [
        "data review reports will be available to identify assessments for which the investigators’ or central reader’s opinion does not match the programmed calculated response based on RECIST criteria. This may be queried for clarification. However, the investigator or central reader’s response assessment will never be overruled.",
        "If Novartis elect to invalidate an overall lesion response as evaluated by the investigator or central reader upon internal or external review of the data, the calculated overall lesion response at that specific assessment is to be kept in a dataset. This must be clearly documented in the report and analysis plan (RAP) documentation and agreed before database lock. This dataset should be created and stored as part of the ‘raw’ data.",
        "Any discontinuation due to ‘Disease progression’ without documentation of progression by RECIST criteria should be carefully reviewed. Only participants with documented deterioration of symptoms indicative of progression of disease should have this reason for discontinuation of treatment or study evaluation.",
        "10.5.4.5 Programming rules The following should be used for programming of efficacy results: 10.5.4.5.1 Calculation of time to event variables Time to event = end date - start date + 1 (in days) When no post-baseline tumor assessments are available, the date of randomization/start of treatment will be used as end date (duration = 1 day) when time is to be censored at last tumor assessment, i.e. time to event variables can never be negative.",
        "10.5.4.5.2 Incomplete assessment dates All investigation dates (e.g. X-ray, CT scan) must be completed with day, month and year. If one or more investigation dates are incomplete but other investigation dates are available, this/these incomplete date(s) are not considered for calculation of the assessment date (and assessment date is calculated as outlined in Section 10.5.3.2.7). If all measurement dates have no day recorded, the 1st of the month is used.",
        "If the month is not completed, for any of the investigations, the respective assessment will be considered to be at the date which is exactly between previous and following assessment. If a previous and following assessment is not available, this assessment will not be used for any calculation. 10.5.4.5.3 Incomplete dates for last known date participant alive or death All dates must be completed with day, month and year.",
        "If the day is missing, the 15th of the month will be used for incomplete death dates or dates of last contact. 10.5.4.5.4 Non-target lesion response If no non-target lesions are identified at baseline (and therefore not followed throughout the study), the non-target lesion response at each assessment will be considered ‘not applicable (NA)’."
      ],
      "chips": [
        "CPBQ663A12101",
        "p163/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n163.jpg",
      "cap": "Protocol page 163 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 164 of 170 · Protocol body · page 164",
      "audio": [
        "10.5.4.5.5 Study/project specific programming The standard analysis programs need to be adapted for each study/project. 10.5.4.5.6 Censoring reason In order to summarize the various reasons for censoring, the following categories will be calculated for each time to event variable based on the treatment completion page, the study evaluation completion page and the survival page.",
        "For survival the following censoring reasons are possible: • Alive • Lost to follow-up For PFS and TTP (and therefore duration of responses) the following censoring reasons are possible: • Ongoing without event • Lost to follow-up • Withdrew consent • Adequate assessment no longer available* • Event documented after two or more missing tumor assessments (optional, see Table 10-6) • Death due to reason other than underlying cancer (only used for TTP and duration of response)",
        "• Initiation of new anti-cancer therapy * Adequate assessment is defined in Section 10.5.3.2.7. This reason is applicable when adequate evaluations are missing for a specified period prior to data cut-off (or prior to any other censoring reason) corresponding to the unavailability of two or more planned tumor assessments prior to the cut-off date.",
        "The following clarifications concerning this reason should also be noted: • This may be when there has been a definite decision to stop evaluation (e.g. reason=“Sponsor decision” on study evaluation completion page), when participants are not followed for progression after treatment completion or when only NE assessments are available just prior to data cut-off).",
        "• The reason \"Adequate assessment no longer available\" also prevails in situations when another censoring reason (e.g. withdrawal of consent, loss to follow-up or alternative anticancer therapy) has occurred more than the specified period following the last adequate assessment. • This reason will also be used to censor in case of no baseline assessment."
      ],
      "chips": [
        "CPBQ663A12101",
        "p164/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n164.jpg",
      "cap": "Protocol page 164 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 165 of 170 · Protocol body · page 165",
      "audio": [
        "10.6 Appendix 6: Patient Engagement The following patient engagement initiatives are included in this study and will be provided, as available, for distribution to study participants at the time points indicated. If compliance is impacted by cultural norms or local laws and regulations, sites may discuss modifications to these requirements with Novartis. • Thank You letter • Plain language trial summary - after CSR publication"
      ],
      "chips": [
        "CPBQ663A12101",
        "p165/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n165.jpg",
      "cap": "Protocol page 165 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 166 of 170 · References References are available upon request EMA Guidance (2012) Guideline on…",
      "audio": [
        "11 References References are available upon request EMA Guidance (2012) Guideline on the evaluation of anticancer medicinal products in man. London, UK. Abuhelwa Z, Alloghbi A, Alqahtani A, et al (2022) Trastuzumab Deruxtecan-Induced Interstitial Lung Disease/Pneumonitis in ERBB2-Positive Advanced Solid Malignancies: A Systematic Review. Drugs; 82(9):979-987. Babb J, Rogatko A, Zacks S (1998) Cancer phase I clinical trials: efficient dose escalation with overdose control.",
        "Stat Med; 17(10):1103-20. Baez-Navarro X, van Bockstal MR, Nawawi D, et al (2023) Interobserver Variation in the Assessment of Immunohistochemistry Expression Levels in H E R 2-Negative Breast Cancer: Can We Improve the Identification of Low Levels of H E R 2 Expression by Adjusting the Criteria? An International Interobserver Study. Mod Pathol; 36(1):100009.",
        "Ballal S, Yadav MP, Tripathi M, et al (2022) Survival Outcomes in Metastatic Gastroenteropancreatic Neuroendocrine Tumor Patients receiving Concomitant 225AcDOTATATE Targeted Alpha Therapy and Capecitabine: A Real-world Scenario Management Based Long-term Outcome Study. J Nucl Med. Bardia A, Hu X, Dent R, et al (2024) Trastuzumab Deruxtecan after Endocrine Therapy in Metastatic Breast Cancer N Engl Med; 391(22):2110-22.",
        "Blakkisrud J, Peterson AB, Wildermann SJ, et al (2024) SPECT C T Image-Derived Absorbed Dose to Red Marrow Correlates with Hematologic Toxicity in Patients Treated with [177Lu]Lu-DOTATATE. J Nucl Med; 65(5):753-760. Bodei L, Herrmann K, Schöder H, et al (2022) Radiotheranostics in oncology: current challenges and emerging opportunities. Nat Rev Clin Oncol; 19(8):534-550. Brookmeyer R and Crowley J (1982) A Confidence Interval for the Median Survival Time38(1):29-41.",
        "Bushnell DL, Boles MA, Kaufman GE, et al (1992) Complications, sequela and dosimetry of iodine-131 therapy for thyroid carcinoma. J Nucl Med; 33(12):2214-21. Chambers SK, Chambers JT, Kier R, et al (1991) Sequelae of lateral ovarian transposition in irradiated cervical cancer patients. Int J Radiat Oncol Biol Phys; 20(6):1305-8.",
        "Delker A, Schleske M, Liubchenko G, et al (2023) Biodistribution and dosimetry for combined [177Lu]Lu-PSMA-I&T/actinium-225-PSMA-I&T therapy using multi-isotope quantitative SPECT imaging. Eur J Nucl Med Mol Imaging; 50(5):1280-1290. Dent S, Zee B, Dancey J, et al (2001) Application of a new multinomial phase II stopping rule using response and early progression. J Clin Oncol; 19(3):785-91.",
        "Dorn R, Kopp J, Vogt H, et al (2003) Dosimetry-guided radioactive iodine treatment in patients with metastatic differentiated thyroid cancer: largest safe dose using a risk-adapted approach. J Nucl Med; 44(3):451-6."
      ],
      "chips": [
        "CPBQ663A12101",
        "p166/170",
        "Full protocol text"
      ],
      "visual": "theranostic",
      "image": "assets/protocol/cpbq/n166.jpg",
      "cap": "Protocol page 166 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 167 of 170 · Drago JZ, Ferraro E, Abuhadra N, et al (2022) Beyond HER2: Targeting the ErbB…",
      "audio": [
        "Drago JZ, Ferraro E, Abuhadra N, et al (2022) Beyond H E R 2: Targeting the ErbB receptor family in breast cancer. Cancer Treat Rev; 109:102436. Eisenhauer EA, Therasse P, Bogaerts J, et al (2009) New response evaluation criteria in solid tumours: revised RECIST guideline (version 1.1). Eur J Cancer; 45(2):228-47. Ellis S, Carroll KJ, Pemberton K (2008) Analysis of duration of response in oncology trials. Contemp Clin Trials; 29(4):456-65.",
        "Emami B, Lyman J, Brown A, et al (1991) Tolerance of normal tissue to therapeutic irradiation. Int J Radiat Oncol Biol Phys; 21(1):109-22. Food and Drug Administration (2010) Guidance for Industry and Researchers on the Radioactive Drug Research Committee: Human Research Without an Investigational New Drug Application. Galogre M, Rodin D, Pyatnitskiy M, et al (2023) A review of H E R 2 overexpression and somatic mutations in cancers. Crit Rev Oncol Hematol; 186:103997.",
        "Gatzemeier U, Groth G, Butts C, et al (2004) Randomized phase II trial of gemcitabinecisplatin with or without trastuzumab in H E R 2-positive non-small-cell lung cancer. Ann Oncol; 15(1):19-27. Giesel FL, Kratochwil C, Lindner T, et al (2019) gallium-68-FAPI PET C T: Biodistribution and Preliminary Dosimetry Estimate of 2 DOTA-Containing FAP-Targeting Agents in Patients with Various Cancers. J Nucl Med; 60(3):386-392.",
        "Goel S, Negassa A, Ghalib MH, et al (2024) Outcomes Among Racial and Ethnic Minority Patients With Advanced Cancers in Phase 1 Trials: A Meta-Analysis. JAMA Netw Open; 7(7):e2421485.",
        "Hartung-Knemeyer V, Nagarajah J, Jentzen W, et al (2012) Pre-therapeutic blood dosimetry in patients with differentiated thyroid carcinoma using 124-iodine: predicted blood doses correlate with changes in blood cell counts after radioiodine therapy and depend on modes of TSH stimulation and number of preceding radioiodine therapies. Ann Nucl Med; 26(9):723-9.",
        "Hennrich U, Eder M (2021) gallium-68-PSMA-11: The First FDA-Approved 68GaRadiopharmaceutical for PET Imaging of Prostate Cancer. Pharmaceuticals (Basel); 14(8):. Kalbfleisch JD and Prentice RL (2002) The Statistical Analysis of Failure Time Data. 2nd Edition, John Wiley and Sons, New York. Kiess AP, O'Donoghue J, Uribe C, et al (2024) How Can Radiopharmaceutical Therapies Reach Their Full Potential? Improving Dose Reporting and Phase I Clinical Trial Design.",
        "J Clin Oncol; 42(15):1734-1737. Klein JP and Moeschberger S (1997) Survival Analysis. Springer New York Kratochwil C, Bruchertseifer F, Rathke H, et al (2017) Targeted α-Therapy of Metastatic Castration-Resistant Prostate Cancer with actinium-225-PSMA-617: Dosimetry Estimate and Empiric Dose Finding. J Nucl Med; 58(10):1624-1631."
      ],
      "chips": [
        "CPBQ663A12101",
        "p167/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n167.jpg",
      "cap": "Protocol page 167 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 168 of 170 · Krug LM, Miller VA, Patel J, et al (2005) Randomized phase II study of weekly…",
      "audio": [
        "Krug LM, Miller VA, Patel J, et al (2005) Randomized phase II study of weekly docetaxel plus trastuzumab versus weekly paclitaxel plus trastuzumab in patients with previously untreated advanced nonsmall cell lung carcinoma. Cancer; 104(10):2149-55. Liubchenko G, Böning G, Zacherl M, et al (2024) Image-based dosimetry for actinium-225PSMA-I&T therapy and the effect of daughter-specific pharmacokinetics. Eur J Nucl Med Mol Imaging; 51(8):2504-2514.",
        "Loibl S and Gianni L (2017) H E R 2-positive breast cancer. Lancet; 389(10087):2415-2429. Lu Y, Zhu S, Tong Y, et al (2022) H E R 2-Low Status Is Not Accurate in Breast Cancer Core Needle Biopsy Samples: An Analysis of 5610 Consecutive Patients. Cancers (Basel); 14(24). Mader N, Nguyen Ngoc C, Kirkgöze B, et al (2023) Extended therapy with [177Lu]LuPSMA-617 in responding patients with high-volume metastatic castration-resistant prostate cancer.",
        "Eur J Nucl Med Mol Imaging; 50(6):1811-1821. Menon S, Davies A, Frentzas S, et al (2022) Recruitment, outcomes, and toxicity trends in phase I oncology trials: Six-year experience in a large institution. Cancer Rep (Hoboken); 5(2):e1465. Meredith RF, Khazaeli MB, Plott WE, et al (1992) Phase I trial of iodine-131-chimeric B72.3 (human IgG4) in metastatic colorectal cancer. J Nucl Med; 33(1):23-9.",
        "Modi S, Saura C, Yamashita T, et al (2020) Trastuzumab Deruxtecan in Previously Treated H E R 2-Positive Breast Cancer. N Engl J Med; 382(7):610-621. Modi S, Jacot W, Yamashita T, et al (2022) Trastuzumab Deruxtecan in Previously Treated H E R 2-Low Advanced Breast Cancer. N Engl J Med; 387(1):9-20. Morgan TM (1988) Analysis of duration of response: a problem of oncology trials. Control Clin Trials; 9(1):11-8.",
        "Neuenschwander B, Wandel S, Roychoudhury S, et al (2016) Robust exchangeability designs for early phase clinical trials with multiple strata. Pharm Stat; 15(2):123-34. Novartis AG (2018) LUTATHERA. Perscribing information. U.S. Food and Drug Administration website. https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/208700s019s023lbl.pdf. Parihar AS, Chopra S, Prasad V (2022) Nephrotoxicity after radionuclide therapies. Transl Oncol; 15(1):101295.",
        "Rogatko A, Schoeneck D, Jonas W, et al (2007) Translation of innovative designs into phase I trials. J Clin Oncol; 25(31):4982-6. Rüschoff J, Friedrich M, Nagelmeier I, et al (2022) Comparison of HercepTest™ mAb pharmDx (Dako Omnis, GE001) with Ventana PATHWAY anti-HER-2/neu (4B5) in breast cancer: correlation with H E R 2 amplification and H E R 2 low status. Virchows Arch; 481(5):685-694.",
        "Sandgren K, Johansson L, Axelsson J, et al (2019) Radiation dosimetry of [gallium-68]PSMA-11 in low-risk prostate cancer patients. EJNMMI Phys; 6(1):2."
      ],
      "chips": [
        "CPBQ663A12101",
        "p168/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n168.jpg",
      "cap": "Protocol page 168 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 169 of 170 · Sathekge M, Bruchertseifer F, Vorster M, et al (2022) mCRPC Patients Receiving…",
      "audio": [
        "Sathekge M, Bruchertseifer F, Vorster M, et al (2022) mCRPC Patients Receiving 225AcPSMA-617 Therapy in the Post-Androgen Deprivation Therapy Setting: Response to Treatment and Survival Analysis. J Nucl Med; 63(10):1496-1502. Schmidli H, Gsteiger S, Roychoudhury S, et al (2014) Robust meta-analytic-predictive priors in clinical trials with historical control information. Biometrics; 70(4):1023-32.",
        "Sgouros G, Bodei L, McDevitt MR, et al (2020) Radiopharmaceutical therapy in cancer: clinical advances and challenges. Nat Rev Drug Discov; 19(9):589-608. Sgouros G., Ulaner G., DelieT. et. al. (2023) actinium-225-DOTATATE Dosimetry Results from Part 1 of the ACTION-1 Trial. Journal of Nuclear Medicine. 64(supplement 1):129. Slamon DJ, Clark GM, Wong SG, et al (1987) Human breast cancer: correlation of relapse and survival with amplification of the HER-2/neu oncogene.",
        "Science; 235(4785):177-82. Smit EF, Felip E, Uprety D, et al (2024) Trastuzumab deruxtecan in patients with metastatic non-small-cell lung cancer (DESTINY-Lung01): primary results of the H E R 2-overexpressing cohorts from a single-arm, phase 2 trial. Lancet Oncol; 25(4):439-454. Spiegelhalter DJ, Abrams KR, Myles JP (2004) Bayesian Approaches to Clinical Trials and Health-Care Evaluation.",
        "Stern DF (2000) Tyrosine kinase signalling in breast cancer: ErbB family receptor tyrosine kinases. Breast Cancer Res; 2(3):176-83. Therasse P, Arbuck SG, Eisenhauer EA, et al (2000) New guidelines to evaluate the response to treatment in solid tumors. European Organization for Research and Treatment of Cancer, National Cancer Institute of the United States, National Cancer Institute of Canada. J Natl Cancer Inst; 92(3):205-16.",
        "Vallabhajosula S, Goldsmith SJ, Hamacher KA, et al (2005) Prediction of myelotoxicity based on bone marrow radiation-absorbed dose: radioimmunotherapy studies using 90Y- and 177Lu-labeled J591 antibodies specific for prostate-specific membrane antigen. J Nucl Med; 46(5):850-8.",
        "van der Zwan WA, Brabander T, Kam BLR, et al (2019) Salvage peptide receptor radionuclide therapy with [177Lu-DOTA,Tyr3]octreotate in patients with bronchial and gastroenteropancreatic neuroendocrine tumours. Eur J Nucl Med Mol Imaging; 46(3):704717. Verma S, Miles D, Gianni L, et al (2012) Trastuzumab emtansine for H E R 2-positive advanced breast cancer. N Engl J Med; 367(19):1783-91.",
        "Wahl RL, Sgouros G, Iravani A, et al (2021) Normal-Tissue Tolerance to Radiopharmaceutical Therapies, the Knowns and the Unknowns. J Nucl Med; 62(Suppl 3):23S-35S. Walker RC, Smith GT, Liu E, et al (2013) Measured human dosimetry of gallium-68-DOTATATE. J Nucl Med; 54(6):855-60."
      ],
      "chips": [
        "CPBQ663A12101",
        "p169/170",
        "Full protocol text"
      ],
      "visual": "dosimetry",
      "image": "assets/protocol/cpbq/n169.jpg",
      "cap": "Protocol page 169 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 170 of 170 · Weiss JA, Nicklawsky A, Kagihara JA, et al (2020) Clinical outcomes of breast cancer…",
      "audio": [
        "Weiss JA, Nicklawsky A, Kagihara JA, et al (2020) Clinical outcomes of breast cancer patients treated in phase I clinical trials at University of Colorado Cancer Center. Cancer Med; 9(23):8801-8808. Wo JY and Viswanathan AN (2009) Impact of radiotherapy on fertility, pregnancy, and neonatal outcomes in female cancer patients. Int J Radiat Oncol Biol Phys; 73(5):1304-12.",
        "Wolff AC, Somerfield MR, Dowsett M, et al (2023) Human Epidermal Growth Factor Receptor 2 Testing in Breast Cancer: ASCO-College of American Pathologists Guideline Update. J Clin Oncol; 41(22):3867-3872. Zaakouk M, Quinn C, Provenzano E, et al (2023) Concordance of H E R 2-low scoring in breast carcinoma among expert pathologists in the United Kingdom and the republic of Ireland -on behalf of the UK national coordinating committee for breast pathology. Breast; 70:82-91."
      ],
      "chips": [
        "CPBQ663A12101",
        "p170/170",
        "Full protocol text"
      ],
      "visual": "dwj155",
      "image": "assets/protocol/cpbq/n170.jpg",
      "cap": "Protocol page 170 of 170 — CPBQ663A12101 v01",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    }
  ],
  "quiz": [
    {
      "q": "Starting administered activity of ²²⁵Ac-DWJ155 in CPBQ663A12101?",
      "choices": [
        "7.40 GBq, copied from ¹⁷⁷Lu-PSMA",
        "2 MBq (54 µCi) every 6 weeks, up to 4 cycles at DL1",
        "185 MBq ±10%, the GP-STAR diagnostic window",
        "Unspecified — the site picks any alpha activity"
      ],
      "a": 1,
      "why": "§4.3.1 and §6.5.1: starting activity 2 MBq (54 µCi), Q6W, up to 4 cycles at dosage level 1."
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
      "why": "§6.5.1: single administration of approximately 250 MBq (200–275). Given at screening and again at end of treatment."
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
      "why": "§2.1 / protocol summary: identical ligand, two radionuclides. Not an antibody, not FDG."
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
      "why": "Summary + §8.3.2: imaging IMP first. Therapy IMP is manufactured centrally only after eligibility confirmation."
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
      "why": "Appendix 10.4 / Table 6-2 language: 2, 4, 6, 8 MBq. Q6W opens first. Intermediate levels may be added."
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
      "why": "§10.4. This protocol is BHLRM + EWOC, not 3+3 and not BOIN. DLT window = first cycle of the chosen schedule."
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
      "why": "Protocol summary: escalation minimum 21; expansion approximately 135 in molecularly defined groups."
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
      "why": "§8.3.2: ⁶⁸Ga-DWJ155 is administered twice — baseline and EoT."
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
      "why": "Table 1-7. SPECT uses the therapeutic emission — no extra radiopharmaceutical. ~3 participants per cohort."
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
      "why": "§1.1 purpose. First escalation cohort is advanced HER2+ breast after ≥2 prior advanced lines."
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
      "why": "Schedule of activities: TTE or MUGA every 12 weeks (−7 d). ECG also around dosing."
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
      "why": "Protocol summary / SoA: 36-month long-term follow-up. 180-day safety FU sits inside that clock."
    }
  ]
};


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
      if (mod && isMod(mod.id) && raw && extras[raw]) return raw;
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
