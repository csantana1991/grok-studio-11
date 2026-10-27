/* AstraZeneca VECTRA-01 / D9735C00001 / P00000000000000 ²²⁵Ac-PSMA-I&T protocol audiobook.
   Loads last among protocol scripts. Mutates window.COURSE. */


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

  const MODULE14 = {
  "id": "p00000000000000",
  "num": "P00000000000000",
  "title": "P00000000000000 · VECTRA-01 protocol · ²²⁵Ac-PSMA-I&T full 221 pages",
  "time": "~7 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this P00000000000000 · VECTRA-01 protocol audiobook",
      "audio": [
        "This module is P00000000000000 — a full read-through of AstraZeneca clinical protocol D 9735 C 00001, study nickname VECTRA-01, version 3.0, dated 4 June 2026.",
        "Investigational product: actinium-225 zadavotide guraxetan, also coded A Z D 2265 or F P I 2265, a P S M A I and T alpha radioligand. Phase 3, two-arm, one-to-one, open-label, versus investigator-choice standard of care in P S M A-positive metastatic castration-resistant prostate cancer.",
        "Arm A: 12 megabecquerels intravenous every 6 weeks, up to 6 cycles. Arm B: cabazitaxel, an A R P I, or radium-223. Dual primary endpoints: radiographic progression-free survival by blinded independent central review, and overall survival. About 670 randomised, 1120 screened.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a Phase 3 P S M A alpha-therapy protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. Two hundred and twenty-one protocol pages, plus this intro. After the last page, take the module quiz — 12 megabecquerels, SoC menu, P S M A PET gate, e G F R, and the dual primaries."
      ],
      "chips": [
        "P00000000000000",
        "221 pages",
        "Web speech",
        "Protocol page on screen",
        "Same studio player"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v001.jpg",
      "cap": "VECTRA-01 cover — ²²⁵Ac-PSMA-I&T (AZD2265) vs SoC in PSMA+ mCRPC",
      "pearls": [
        "P00000000000000 is VECTRA-01 — same play, pause, speed, atlas, and live-image dock as the other protocol modules.",
        "Fixed 12 MBq Q6W × ≤6 is the experimental arm. SoC is not placebo — cabazitaxel, ARPI, or radium-223.",
        "Teaching copy of a confidential sponsor protocol. Do not treat from this module."
      ]
    },
    {
      "title": "Page 1 of 221 · Cover · VECTRA-01 · ²²⁵Ac-PSMA-I&T vs SoC",
      "audio": [
        "Clinical Study Protocol Study Intervention Actinium (actinium-225) zadavotide guraxetan (A Z D 2265 F P I 2265) Study Code D 9735 C 00001 Version 3.0 Date 04 June 2026 EU CT Number 2025-524579-21 A Phase III, Multicentre, Randomised Controlled Study to Evaluate the Efficacy and Safety of A Z D 2265 (F P I 2265) actinium-225-P S M A I and T Compared With Standard of Care in Patients with P S M A-positive Metastatic Castration-resistant Prostate Cancer (VECTRA-01)"
      ],
      "chips": [
        "VECTRA-01",
        "p1/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v001.jpg",
      "cap": "Protocol page 1 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "VECTRA-01 is AstraZeneca Phase III ²²⁵Ac-PSMA-I&T (AZD2265 / FPI-2265) versus SoC in PSMA+ mCRPC.",
        "Protocol D9735C00001 version 3.0, 4 June 2026. Teaching copy only."
      ]
    },
    {
      "title": "Page 2 of 221 · Phase III open-label · rPFS and OS · sponsor AstraZeneca AB",
      "audio": [
        "Study Phase: III Blinding: Open-label Number of Arms: 2 Health Measurement/Outcome: Radiographic progression-free survival (radiographic P F S) and overall survival (overall survival) Intervention Name: Actinium (actinium-225) zadavotide guraxetan (A Z D 2265 F P I 2265) Intervention Form: Intravenous injection Participant Sex: Male Participant Age Range: greater than or equal to 18 years of age Condition/Disease: Prostate-specific membrane antigen (P S M A)-positive",
        "metastatic castration-resistant prostate cancer (m C R P C) Sponsor Name: AstraZeneca AB Legal Registered Address: AstraZeneca AB, 151 85 Södertälje, Sweden. AstraZeneca K.K., 3-1, Ofuka-cho, Kita-ku, Osaka 530-0011, Japan Regulatory Agency Identifier Number(s): Registry ID European Union Clinical Trials 2025-524579-21 Investigational New Drug 178687 This protocol has been subject to a peer review according to AstraZeneca Standard procedures.",
        "The protocol is publicly registered and the results are disclosed and/or published according to the AstraZeneca Global Standard - Bioethics and in compliance with prevailing laws and regulations."
      ],
      "chips": [
        "VECTRA-01",
        "p2/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v002.jpg",
      "cap": "Protocol page 2 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 3 of 221 · Brief title · acronym VECTRA-01 · coordinating investigator Morris",
      "audio": [
        "Version Scope: Global Brief Title: Phase III Study of A Z D 2265 (F P I 2265) Compared with Standard of Care in P S M A-positive Metastatic Castration-resistant Prostate Cancer (m C R P C) A study to investigate radiographic P F S and overall survival with actinium-225 zadavotide guraxetan compared with standard of care in participants greater than or equal to 18 years of age with P S M A-positive m C R P C.",
        "Acronym: VECTRA-01 Study Clinical Lead Name and Contact Information will be provided separately. Study Clinical Lead is responsible for the clinical integrity of the study. Coordinating Investigator: Dr Michael Morris, MD Memorial Sloan Kettering Cancer Center 353 E. 68th St. New York, NY 10065 USA"
      ],
      "chips": [
        "VECTRA-01",
        "p3/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v003.jpg",
      "cap": "Protocol page 3 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 4 of 221 · Document history · v3.0 04 June 2026 substantial amendment",
      "audio": [
        "SUMMARY OF CHANGES TABLE DOCUMENT HISTORY Document Date CSP Version 3.0 04 June 2026 CSP Version 2.0 18 February 2026 CSP Version 1.0 23 December 2025 CSP Version 3.0: 04 June 2026 This modification is substantial based on the criteria set forth in Article 10(a) of Directive 2001/20/EC of the European Parliament and the Council of the European Union and in the EU Clinical Trial Regulation Article 2, 2 (13).",
        "Overall Rationale for the Modification These changes are made to the document primarily to align the content with EU requirements for clinical studies using radiopharmaceuticals and to make updates following EMA feedback, most significantly: • The accepted treatment options for Arm B (comparator) have been modified to remove apalutamide, daralutamide, and rezvilutamide, and to include deutenzalutamide (China only).",
        "• The eligibility criteria have been modified to add uncontrolled diabetes mellitus, concurrent acute kidney injury, and pre-existing CKD as exclusion criteria, to increase the e G F R cutoff from greater than or equal to 50 to greater than or equal to 60 mL/min, and to increase the minimum washout period following a last dose of P S M A-directed β-emitting RC to 3 months.",
        "• For sites in the EU, only gallium-68-P S M A-11 is permitted, in accordance with regulatory recommendations."
      ],
      "chips": [
        "VECTRA-01",
        "p4/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v004.jpg",
      "cap": "Protocol page 4 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 5 of 221 · Summary of Changes List of Substantial Modifications Section number and name…",
      "audio": [
        "Summary of Changes List of Substantial Modifications Section number and name Description of change Brief rationale 1.1 Synopsis; 1.2 Schema; 4.1 Overall Design; 4.2.2 Control Arm; 6.1.2 Arm B The “switch” designation has been removed from the Arm B A R P I option. The following text has been added to Section 4.2.2: “A R P I may only be used in participants who have been pre-treated with cabazitaxel or who are not considered appropriate candidates for cabazitaxel.",
        "For participants receiving A R P I, rechallenge with the same A R P I is permitted, provided: (i) greater than or equal to 6 months have elapsed since the last dose of prior A R P I, and (ii) at least 1 other anticancer therapy has been administered between the prior A R P I and rechallenge.” To provide investigators with greater flexibility in A R P I selection within the control arm, following the removal of apalutamide and darolutamide as A R P I options.",
        "1.1 Synopsis; 1.3 Schedule of Activities; 4.1 Overall Design; 6.3 Assignment to Study Intervention; 8.2.1.1 P S M A PET-positive Eligibility Assessment; 11.3 Study Design Screening period of Day -42 to Day -1 removed, reducing the screening period to 28 days. Text in the document updated to reflect this. To minimise the likelihood of repeat screening assessments being needed.",
        "1.1 Synopsis; 9.5 Interim Analyses Futility analysis threshold updated from “~ 100 overall survival events (~ 15% maturity) or 17 months after first participant randomised” to “~ 140 overall survival events (~ 21% maturity) or 23 months after first participant randomised.” To reflect updated event projections following adjustment of the enrolment timeline and in accordance with standard statistical practice.",
        "1.1 Synopsis; 9.5 Interim Analyses DCO2 projected timeline updated from ~ 26 months to ~ 30 months after the first participant has been randomised. DCO3 projected timeline updated from ~ 33 months to ~ 37 months after the first participant has been randomised.” To reflect updated timeline projections following adjustment of the enrolment timeline.",
        "1.3 Schedule of Activities; 8 Study Assessments and Procedures; 9.4.1 General Considerations; 11.3 Study Design Time between randomisation and C1D1 reduced from 21 days to 7 days. Arm B Schedule of Activities footnote text “Where feasible, 14 days should be left between randomisation and C1D1.” has been removed. To reflect anticipated time between randomisation and C1D1."
      ],
      "chips": [
        "VECTRA-01",
        "p5/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v005.jpg",
      "cap": "Protocol page 5 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 6 of 221 · Section number and name Description of change Brief rationale 1",
      "audio": [
        "Section number and name Description of change Brief rationale 1.3 Schedule of Activities (Arm A and Arm B); 11.3 Study Design Footnote added to clarify the P S M A ligands that can be used for screening scans: “P S M A-PET scans must be performed with 1 of the 2 allowed P S M A ligands, gallium-68-P S M A-11 or fluorine-18 D C F P y L. Use of fluorine-18 D C F P y L is prohibited in the EU.",
        "The same radiotracer used at screening (gallium-68-P S M A-11 or fluorine-18 D C F P y L) should be used for follow‑up assessments.” To clarify the requirements following EMA feedback. 1.3 Schedule of Activities (Arm A and Arm B); 8.3.2 Vital Signs Requirement for triplicate blood pressure readings removed. To reduce participant burden and improve protocol compliance, as triplicate blood pressure measurements are not considered necessary for safety monitoring.",
        "1.3 Schedule of Activities (Arm A and Arm B); 8.3.3 Electrocardiograms; 11.3 Study Design Requirement for triplicate ECG readings replaced with single ECG. Based on concentration-QTc data and in accordance with Cardiovascular Safety Knowledge Group recommendation.",
        "1.3 Schedule of Activities (Arm A and Arm B); 8.3.4 Clinical Safety Laboratory Tests; 11.3 Study Design Text updated to clarify that the basic metabolic panel during the Long-term Follow-up period must include serum creatinine. To clarify the minimum required components of the basic metabolic panel. 2.3 Benefit/Risk Assessment Added clinical data from the AlphaBreak study (DCO 01 April 2026) and an introduction to dosimetry.",
        "To allow discussion of toxicity using recent clinical data. 2.3.2 Benefit Assessment; 4.3 Justification for Dose AlphaBreak study data updated to reflect a DCO of 01 April 2026. To include the most recent clinical data. 2.3.3 Radiation Dose From Imaging Assessments New section added. New text includes information about which P S M A radiotracers can be used for P S M A PET/CT scans.",
        "Use of gallium-68-P S M A-11 is recommended whenever feasible, with use of fluorine-18 D C F P y L only allowed outside of the EU. To outline the radiation dose participants may be exposed to during the study and to clarify use of specific radiotracers in the EU following EMA feedback. 4.2.1 Participant Population Text added regarding the justification not to include cumulative absorbed dose estimates to critical organs in the study eligibility criteria.",
        "To address EMA feedback."
      ],
      "chips": [
        "VECTRA-01",
        "p6/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v006.jpg",
      "cap": "Protocol page 6 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 7 of 221 · Section number and name Description of change Brief rationale 5",
      "audio": [
        "Section number and name Description of change Brief rationale 5.1 Inclusion Criteria Inclusion Criterion 5 updated to clarify that the last dose of prior P S M A-directed β-emitting RC treatment must have been completed greater than or equal to 3 months before the first dose of study intervention. To allow for a more adequate washout period from prior P S M A-directed β-emitting RC treatment.",
        "5.1 Inclusion Criteria Inclusion Criterion 8 updated: “Participants who are eligible for a PARP inhibitor based on HRR/BRCA status will be required to have received the corresponding approved therapies prior to enrolment, unless these treatments are contraindicated or unavailable.” To align with EMA feedback.",
        "5.1 Inclusion Criteria Inclusion Criterion 9 updated: “Participants who are eligible for an immune checkpoint inhibitor based on microsatellite instability-high, mismatch repair deficient, or tumour mutational burden-high status will be required to have received the corresponding approved therapies prior to enrolment, unless these treatments are contraindicated or unavailable.” To align with EMA feedback.",
        "5.2 Exclusion Criteria Exclusion Criterion 1 updated to include uncontrolled diabetes mellitus. To exclude patients with pre-existing renal risk factors. 5.2 Exclusion Criteria Exclusion Criterion 15 removed. Placeholder text “Exclusion criterion removed” added to maintain the numbering of the list of exclusion criteria.",
        "Exclusion Criterion 17 updated as shown: Any concurrent anticancer treatment without an adequate washout period prior to the first dose of study intervention, except A R P I which may be continued until C1D1. Continued A R P I use until the next line of therapy reflects real-world clinical practice. 5.2 Exclusion Criteria New Exclusion Criterion 25 concerning concurrent acute kidney injury added. To exclude patients with pre-existing renal risk factors.",
        "5.2 Exclusion Criteria New Exclusion Criterion 26 concerning pre-existing chronic kidney disease added. To exclude patients with pre-existing renal risk factors. 6.1 Study Intervention(s) Administered Table 9 updated to reflect that prednisone/prednisolone and A D T may be provided centrally by AstraZeneca and/or locally.",
        "Footnotes added to Table 9 to note that the use of 68GA-P S M A-11 is preferred over fluorine-18 D C F P y L, where possible, and that use of fluorine-18 D C F P y L is prohibited in the EU. To clarify the requirements."
      ],
      "chips": [
        "VECTRA-01",
        "p7/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v007.jpg",
      "cap": "Protocol page 7 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 8 of 221 · Section number and name Description of change Brief rationale 6",
      "audio": [
        "Section number and name Description of change Brief rationale 6.2.2 Dose Administration Text deleted: “Prior to the administration of A Z D 2265, the investigator or delegated clinical study site personnel must verify that the participant continues to meet eligibility criteria or re-treatment criteria.” To clarify the requirements.",
        "6.7 Continued Access to Study Intervention After the End of the Study Text updated as shown: “No further data collection is required, except for reporting of non-serious AEs, SAEs, AESIs, and special situations (ie, pregnancy, overdoses, medication error, drug abuse and drug misuse) until the end of post trial access or until consent has been withdrawn.” To clarify the requirements, align across the protocol, and align with the AstraZeneca CSP template.",
        "7.1 Discontinuation of Study Intervention Text regarding delays in actinium-225 zadavotide guraxetan dosing updated to include further information. To clarify the requirements.",
        "7.1.1 Treatment Beyond Progression Text updated as follows: “Participants may remain on study intervention following B I C R-confirmed radiographic progression…” To clarify that the Sponsor approval for treatment beyond progression is only required in the event of B I C R-confirmed radiographic progression. 8.2.1.1 P S M A PET-positive Eligibility Assessment Text regarding the requirement for investigators to send screening scans to the iCRO updated.",
        "To clarify which scans must be sent to the iCRO for confirmation of eligibility. 8.2.1.2 RECIST 1.1 and PCWG3 Efficacy Assessments Text deleted: The screening scans may be used as baseline for RECIST 1.1 and PCWG3 if they are performed within 28 days prior to C1D1; however, if the screening scan occurs more than 28 days prior to C1D1, scans will need to be repeated prior to the start of treatment.",
        "To ensure accurate information on the timing of these scans and to remove the need for repeat scans. 8.4 AEs, SAEs, and Other Safety Reporting; Appendix I Country-specific Requirements New section added describing reporting of AEs suspected to relate to non-AstraZeneca AxMPs. Text added in the main body to cross-refer to the new Appendix. To align with new AstraZeneca CSP template text.",
        "8.4.7 Disease Progression; 8.4.10 Deaths Text regarding the reporting of events and deaths due to disease progression was updated. To clarify the reporting requirements and align with the AstraZeneca CSP template. 8.4.11 AEs of Special Interest Table of A E S I preferred terms updated. To provide clarity on the included terms."
      ],
      "chips": [
        "VECTRA-01",
        "p8/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v008.jpg",
      "cap": "Protocol page 8 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 9 of 221 · Section number and name Description of change Brief rationale 8",
      "audio": [
        "Section number and name Description of change Brief rationale 8.5.1 Collection of Samples for Pharmacokinetics; 8.5.2 Determination of Drug Concentration Proportion of participants who will require greater PK sample volumes at each timepoint updated from “approximately 10%” to “up to ~ 50%”. Updated following EMA feedback.",
        "9.2 Sample Size Determination Non-uniform recruitment period updated from 23 months to 29 months, and timings for overall survival IA and overall survival final analysis updated from ~ 26 months to ~ 32 months and ~ 33 months and ~ 37 months after the first participant has been randomised, respectively. To revise DCO timings based on the updated enrolment plan.",
        "10 Dosimetry Sub-study In Table 16, the timing of the sub-study visit has been updated from “D3/D4” to “D3 or D4”, and related footnote has been removed. Table 16 has been updated to include SPECT/CT and whole body planar scintigraphy assessments for the Day 7-8 visit. To clarify the visit schedule and assessment requirements.",
        "10 Dosimetry Sub-study (Table 16 footnotes); 10.2 Dosimetry Assessments Text updated to reflect the requirements for urine collection and imaging during the Dosimetry Sub-study. To ensure clarity in the requirements. Throughout Removal of apalutamide and darolutamide as standard of care treatment options in Arm B. Change based on EMA scientific advice.",
        "Throughout Removal of rezvilutamide and inclusion of deutenzalutamide as standard of care treatment options in Arm B for China only. Change to align with local treatment landscape.",
        "List of Non-substantial Modifications Section number and name Description of change Brief rationale 1.2 Schema; 5.1 Inclusion Criteria; 8.2.1.1 P S M A PET-positive Eligibility Assessment; 11.3 Study Design; 11.5 Study Population Text updated as shown: Participants will be considered ineligible if any intraprostatic lesion or any 1 lesion larger than size criteria (organs greater than or equal to 1 cm in longest diameter, lymph nodes greater than or equal to 2.5 cm in short",
        "axis, and bones [soft tissue component] greater than or equal to 1 cm in longest diameter), measured on the CT scan, has uptake of PET tracer less than or equal to uptake in normal liver. To ensure clarity. 1.2 Schema; 5.1 Inclusion Criteria; 8.2.1.1 P S M A PET-positive Eligibility Assessment; 11.3 Study Design; 11.5 Study Population Reference to VISION criteria removed. To reflect that the study criteria differ slightly from the VISION definition.",
        "1.3 Schedule of Activities (Arm A) Blood for plasma ctDNA sample timepoint updated from “X” to “X (C1 to C6)”. To clarify the sample timepoints."
      ],
      "chips": [
        "VECTRA-01",
        "p9/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v009.jpg",
      "cap": "Protocol page 9 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 10 of 221 · Section number and name Description of change Brief rationale 1",
      "audio": [
        "Section number and name Description of change Brief rationale 1.3 Schedule of Activities (Arm A and Arm B); 11.3 Study Design Three footnotes regarding P S M A PET/CT and CT/MRI scan timings have been deleted and replaced with an updated footnote as follows: “Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before randomisation.",
        "A P S M A PET/CT scan taken up to 42 days before randomisation can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval). Central confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be determined by central readers before the participant can be randomised.",
        "To ensure the screening scan remain as close as possible to randomisation, the scans must be submitted for central confirmation of eligibility as soon as they have been acquired.” To reduce repetition and ensure accurate information on the timing of these scans.",
        "1.3 Schedule of Activities (Arms A and B) Vital signs footnote updated from “Blood pressure, pulse, and respiratory rate will be assessed at 15-30 minutes pre-study intervention* administration and repeated as clinically indicated” to “All vital signs (blood pressure, pulse, respiratory rate, body temperature, and oxygen saturation) will be performed prior to study intervention* administration, with blood pressure, pulse, and respiratory rate assessed within 15-30 minutes",
        "pre-dose and repeated as clinically indicated.” *Note that the specific study intervention for each Schedule of Activities table was included. To clarify and avoid confusion, based on feedback from study sites. 2.2.5 actinium-225 Zadavotide Guraxetan Text regarding the recommended International Nonproprietary Name for actinium-225 zadavotide guraxetan has been removed.",
        "To reflect that the International Nonproprietary Name has been confirmed and is now used throughout the document. 2.3 Benefit/Risk Assessment Removal of “The potential risks were determined based on the existing clinical data with A Z D 2265 and other comparable RCs.” To streamline the text in the section.",
        "2.3 Benefit/Risk Assessment Changed A Z D 2265 to actinium-225-P S M A I and T in the following sentence: “The first publication of clinical results for compassionate use therapy with actinium-225-P S M A I and T presented the data from 14 consecutive participants with m C R P C.” To reflect that the initial clinical data were not obtained using the current drug product.",
        "3 Objectives, Endpoints, and Estimands; 9.4.2.2.3 Objective Response Rate; 11.2 Objectives and Endpoints O R R endpoint updated as shown: “…per RECIST 1.1 (soft tissue) and, in the absence of progression by PCWG3 criteria (bone).” To ensure consistency throughout the protocol."
      ],
      "chips": [
        "VECTRA-01",
        "p10/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v010.jpg",
      "cap": "Protocol page 10 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 11 of 221 · Section number and name Description of change Brief rationale 3 Objectives,…",
      "audio": [
        "Section number and name Description of change Brief rationale 3 Objectives, Endpoints, and Estimands Objective and Endpoint wording for the Dosimetry Sub-study exploratory endpoint related to absorbed dose estimates updated. To ensure consistency with AstraZeneca preferred wording and to better reflect the intended investigations.",
        "3 Objectives, Endpoints, and Estimands Footnote a marker added to Dosimetry Sub-study exploratory endpoints and text of that footnote has been updated. To ensure accuracy. 4.2.2 Control Arm Update of European Society for Medical Oncology Clinical Practice Guidelines reference from the 2023 guidance to the 2026 guidance. To ensure the latest guidelines are referenced.",
        "8.8.1.1 Tumour Tissue Samples for Exploratory Biomarker Analysis Text updated to say that archived tumour tissue samples taken > 3 months prior to screening are acceptable for exploratory biomarker analysis. To clarify the requirements.",
        "11.3 Study Design Three footnotes regarding P S M A PET/CT and CT/MRI scan timings have been deleted and replaced with an updated footnote as follows: “Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before enrolment. A P S M A PET/CT scan taken up to 42 days before enrolment can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval).",
        "Confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be made on local report before the participant can be enrolled. Ensure the screening scan remains as close as possible to enrolment.” To reduce repetition and ensure accurate information on the timing of these scans.",
        "Appendix F 4.4 RECIST 1.1 Evaluation of Overall Visit Response at Follow-up Table footnote updated to include: “Non-PD includes Non-CR/Non-PD or CR NTL responses.” To clarify what is meant by Non-PD responses.",
        "Appendix F 5 Assessment of Bone Lesion Progression Using PCWG3 Criteria Removal of the following text: “A slightly modified version of PCWG3 is used in this study, in a sense that the confirmatory scan will not be required if the progression occurs after the first scan after baseline.” Correction of error. Appendix F 5 Assessment of Bone Lesion Progression Using PCWG3 Criteria Sub-section referring to the timing of tumour progression evaluations has been removed.",
        "Correction of error. Appendix F 5 Assessment of Bone Lesion Progression Using PCWG3 Criteria Text about the documentation of lesions for participants without progression at the first visit after baseline has been removed. Correction of error. Throughout Added the full International Nonproprietary Name, actinium-225 zadavotide guraxetan, where applicable and updated A Z D 2265 to actinium-225 zadavotide guraxetan. To align with the compound International Nonproprietary Name.",
        "Throughout Update from IV infusion to IV injection where the administration of actinium-225 zadavotide guraxetan is being referenced. To ensure accuracy."
      ],
      "chips": [
        "VECTRA-01",
        "p11/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v011.jpg",
      "cap": "Protocol page 11 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 12 of 221 · Section number and name Description of change Brief rationale Throughout Minor…",
      "audio": [
        "Section number and name Description of change Brief rationale Throughout Minor editorial and document formatting revisions. Minor and have therefore not been summarised."
      ],
      "chips": [
        "VECTRA-01",
        "p12/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v012.jpg",
      "cap": "Protocol page 12 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 13 of 221 · TABLE OF CONTENTS SUMMARY OF CHANGES TABLE 4 TABLE OF CONTENTS 13 LIST OF FIGURES 17…",
      "audio": [
        "TABLE OF CONTENTS SUMMARY OF CHANGES TABLE 4 TABLE OF CONTENTS 13 LIST OF FIGURES 17 LIST OF TABLES 17 LIST OF APPENDICES 18 LIST OF ABBREVIATIONS AND DEFINITIONS OF TERMS 20 1 PROTOCOL SUMMARY 24 1.1 Synopsis 24 1.2 Schema 31 1.3 Schedule of Activities 33 2 INTRODUCTION 53 2.1 Study Rationale 53 2.2 Background 53 2.2.1 Prostate Cancer 53 2.2.2 Current Treatment and Unmet Medical Need 54 2.2.3 P S M A 54 2.2.4 Product Development Rationale 55 2.2.5 actinium-225 Zadavotide",
        "Guraxetan 55 2.3 Benefit/Risk Assessment 56 2.3.1 Risk Assessment 57 2.3.2 Benefit Assessment 61 2.3.3 Radiation Dose From Imaging Assessments 62 2.3.4 Overall Benefit/Risk Conclusion 63 3 OBJECTIVES, ENDPOINTS, AND ESTIMANDS 64 4 STUDY DESIGN 70 4.1 Overall Design 70 4.2 Scientific Rationale for Study Design 71 4.2.1 Participant Population 71 4.2.2 Control Arm 72 4.3 Justification for Dose 73 4.4 End-of-study Definition 78 4.5 Study Stopping Rules 79 5 STUDY POPULATION 80",
        "5.1 Inclusion Criteria 80 5.2 Exclusion Criteria 83 5.3 Lifestyle Considerations 85 5.3.1 Other Restrictions 86"
      ],
      "chips": [
        "VECTRA-01",
        "p13/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v013.jpg",
      "cap": "Protocol page 13 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 14 of 221 · Protocol body · page 14",
      "audio": [
        "5.4 Screen Failures 86 5.5 Criteria for Temporarily Delaying Enrolment/Randomisation/ Administration of Study Intervention 86 6 STUDY INTERVENTION(S) AND CONCOMITANT THERAPY 87 6.1 Study Intervention(s) Administered 87 6.1.1 Arm A 91 6.1.2 Arm B 91 6.2 Preparation, Handling, Storage, and Accountability 91 6.2.1 Dose Preparation 92 6.2.2 Dose Administration 92 6.2.3 Safe Handling Practices for Radiopharmaceuticals 93 6.2.3.1 Dose Calibration Setting 93 6.3 Assignment to Study",
        "Intervention 93 6.4 Blinding 95 6.5 Study Intervention Compliance 95 6.6 Dose Modification 96 6.7 Continued Access to Study Intervention After the End of the Study 96 6.8 Treatment of Overdose 96 6.9 Prior and Concomitant Therapy 97 6.9.1 Prohibited Drugs 97 6.9.2 Medications to be Used With Caution 98 6.9.3 Drug-drug Interactions 98 7 DISCONTINUATION OF STUDY INTERVENTION AND PARTICIPANT DISCONTINUATION/WITHDRAWAL 99 7.1 Discontinuation of Study Intervention 99 7.1.1",
        "Treatment Beyond Progression 100 7.1.2 Follow-up of Participants Post-discontinuation of Study Intervention 100 7.1.3 Follow-up for Survival 101 7.2 Participant Discontinuation/Withdrawal From the Study 101 7.3 Lost to Follow-up 101 8 STUDY ASSESSMENTS AND PROCEDURES 104 8.1 Administrative and General/Baseline Procedures 105 8.1.1 Demographics 105 8.1.2 Medical History 105 8.2 Efficacy Assessments 106 8.2.1 Imaging Tumour Assessments 106 8.2.1.1 P S M A PET-positive",
        "Eligibility Assessment 106 8.2.1.2 RECIST 1.1 and PCWG3 Efficacy Assessments 107 8.2.1.3 P S M A PET Follow-up Assessment 107 8.2.2 Central Reading of Scans 107 8.2.3 Overall Survival 108 8.2.4 Clinical Outcome Assessments 108"
      ],
      "chips": [
        "VECTRA-01",
        "p14/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v014.jpg",
      "cap": "Protocol page 14 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 15 of 221 · Protocol body · page 15",
      "audio": [
        "8.2.4.1 BPI-SF (Item 3 Only) 109 8.2.4.2 Analgesic Log 109 8.2.4.3 PRO-CTCAE 110 8.2.4.4 PGI-TT 110 8.2.4.5 EORTC IL66: Selected Items From the EORTC QLQ-C30 110 8.2.4.6 PGIS 111 8.2.4.7 EQ-5D-5L 111 8.2.4.8 Administration of Electronic PRO Questionnaires 111 8.3 Safety Assessments 114 8.3.1 Physical Examinations 114 8.3.2 Vital Signs 115 8.3.3 Electrocardiograms 115 8.3.4 Clinical Safety Laboratory Tests 116 8.3.5 Other Safety Assessments 117 8.3.5.1 E C O G Performance",
        "Status 117 8.4 AEs, SAEs, and Other Safety Reporting 118 8.4.1 Time Period and Frequency for Collecting AE and S A E Information 119 8.4.2 Follow-up of AEs and SAEs 120 8.4.3 Causality Collection 120 8.4.4 AEs Based on Examinations and Tests 121 8.4.5 AEs Based on Signs and Symptoms 121 8.4.6 Hy’s Law 121 8.4.7 Disease Progression 122 8.4.8 Disease Under Study 122 8.4.9 New Cancers 122 8.4.10 Deaths 122 8.4.11 AEs of Special Interest 123 8.4.12 Safety Data to be Collected",
        "Following the Final Data Cutoff of the Study 124 8.4.13 Reporting of SAEs 124 8.4.14 Pregnancy 125 8.4.14.1 Paternal Exposure 125 8.4.15 Medication Error, Drug Abuse, and Drug Misuse 126 8.4.15.1 Timelines 126 8.4.15.2 Medication Error 126 8.4.15.3 Drug Abuse 126 8.4.15.4 Drug Misuse 126 8.4.16 Reporting of Overdose 126 8.5 Pharmacokinetics 127 8.5.1 Collection of Samples for Pharmacokinetics 128 8.5.2 Determination of Drug Concentration 128 8.6 Pharmacodynamics 129 8.7",
        "Optional Genomics Initiative 129 8.8 Biomarkers 129 8.8.1 Mandatory Biomarker Sample Collection 129 8.8.1.1 Tumour Tissue Samples for Exploratory Biomarker Analysis 129"
      ],
      "chips": [
        "VECTRA-01",
        "p15/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v015.jpg",
      "cap": "Protocol page 15 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 16 of 221 · Protocol body · page 16",
      "audio": [
        "8.8.1.2 Mandatory Blood Sample Collection 131 8.8.1.3 Mandatory Urine Biomarker Sample Collection 132 8.8.2 Optional Biomarker Sample Collection 132 8.8.2.1 Optional Biomarker Sample Collection 132 8.8.3 Other Study-related Biomarker Research 133 8.9 Immunogenicity Assessments 134 8.10 Medical Resource Utilisation and Health Economics 134 9 STATISTICAL CONSIDERATIONS 135 9.1 Statistical Hypotheses 135 9.2 Sample Size Determination 136 9.3 Populations for Analyses 137 9.4",
        "Statistical Analyses 137 9.4.1 General Considerations 137 9.4.2 Efficacy 138 9.4.2.1 Primary Endpoint(s) 138 9.4.2.2 Secondary Endpoint(s) 141 9.4.2.3 Tertiary/Exploratory Endpoint(s) 143 9.4.3 Safety 143 9.4.3.1 Adverse Events 143 9.4.3.2 Other Safety Endpoint(s) 144 9.4.4 Other Analyses 144 9.4.4.1 Pharmacokinetics and Pharmacodynamics 144 9.4.4.2 Biomarkers 144 9.5 Interim Analyses 145 9.6 Independent Data Monitoring Committee 146 10 DOSIMETRY SUB-STUDY 147 10.1",
        "Replacement Criteria 149 10.2 Dosimetry Assessments 149 10.3 Statistical Considerations 150 10.3.1 Sample Size Determination 150 10.3.2 Statistical Analyses 150 11 JAPAN SAFETY RUN-IN SUB-STUDY 152 11.1 Study Rationale 152 11.2 Objectives and Endpoints 152 11.3 Study Design 154 11.4 Safety Review Committee 160 11.5 Study Population 160 11.6 Study Intervention 162 11.7 Study Assessments 162 11.7.1 Safety Assessments 162 11.7.2 Efficacy Assessments 162"
      ],
      "chips": [
        "VECTRA-01",
        "p16/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v016.jpg",
      "cap": "Protocol page 16 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 17 of 221 · Protocol body · page 17",
      "audio": [
        "11.7.3 Pharmacokinetic Assessments 162 11.8 Statistical Considerations 163 11.8.1 Population for Analyses 163 11.8.2 General Statistical Considerations 163 11.8.3 Sample Size Determination 164 11.8.4 Statistical Analyses 164 12 SUPPORTING DOCUMENTATION AND OPERATIONAL CONSIDERATIONS 165 13 REFERENCES 216 LIST OF FIGURES Figure 1: Study Design 31 Figure 2: Logistic Regression of (i) Observed Dose (megabecquerels) and Probability of P S A 50, and (ii) Observed Cumulative Dose",
        "(megabecquerels) and Probability of P S A 50, Based on Observed PSA Data Across AlphaBreak Part A and Part B at Any Time 75 Figure 3: Logistic Regression of Observed Cumulative Dose Versus Probability of Grade greater than or equal to 3 TEAEs 76 Figure 4: Logistic Regression of Observed Cumulative Dose Versus Probability of Observed Any Grade and Grade greater than or equal to 2 Xerostomia 77 Figure 5: Logistic Regression of Observed Cumulative Dose Versus Probability of Any",
        "Grade and Grade greater than or equal to 3 Anaemia 77 Figure 6: MTP Testing Strategy 136 Figure 7: Japan Safety Run-in Sub-study Design 154 LIST OF TABLES Table 1: Schedule of Activities - Arm A (actinium-225 Zadavotide Guraxetan) 33 Table 2: Schedule of Activities - Arm B (Cabazitaxel) 38 Table 3: Schedule of Activities -Arm B (A R P I) 43 Table 4: Schedule of Activities - Arm B (Radium-223) 48 Table 5: Risk Assessment 57 Table 6 Radiation Exposure From Imaging in This",
        "Study (Corresponding to 1 Year, Assuming That a Participant Does Not Progress During the First Year) 63 Table 7: Objectives and Endpoints 64"
      ],
      "chips": [
        "VECTRA-01",
        "p17/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v017.jpg",
      "cap": "Protocol page 17 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 18 of 221 · Table 8: Investigational Medicinal Products 88 Table 9: Auxiliary Medicinal Products…",
      "audio": [
        "Table 8: Investigational Medicinal Products 88 Table 9: Auxiliary Medicinal Products 89 Table 10: actinium-225 Zadavotide Guraxetan Product Information 91 Table 11: Laboratory Safety Variables 116 Table 12: AESIs 124 Table 13: PK Timepoints and Sampling Windows 128 Table 14: Populations for Analysis 137 Table 15: Summary of Planned Timings of radiographic P F S Final Analysis and overall survival IA and overall survival Final Analysis 146 Table 16: Dosimetry Sub-study SoA",
        "148 Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (actinium-225 Zadavotide Guraxetan) 156 Table 18: Schedule of Activities: Japan Safety Run-in Sub-study PK and ECG Timepoints (actinium-225 Zadavotide Guraxetan) 160 Table 19: Summary of Imaging Modalities for Tumour Assessment 195 Table 20: RECIST 1.1 Evaluation of Target Lesions 202 Table 21: RECIST 1.1 Evaluation of Non-Target Lesions 203 Table 22: RECIST 1.1 Overall Visit Response 204 Table 23: Bone",
        "Progression Status 206 Table 24: Requirements for Documentation of Progression 206 Table 25: Highly Effective Methods of Contraception (< 1% Failure Rate) 208 Table 26: Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer Late Radiation Morbidity Scoring Scheme 209 LIST OF APPENDICES Appendix A Regulatory, Ethical, and Study Oversight Considerations 166 Appendix B AEs: Definitions and Procedures for Recording, Evaluating, Follow-up, and",
        "Reporting 176 Appendix C Handling of Human Biological Samples 182 Appendix D Optional Genomics Initiative Research 185 Appendix E Actions Required in Cases of Increases in Liver Biochemistry and Evaluation of Hy’s Law 189 Appendix F Guidelines for Evaluation of Objective Tumour Response Using RECIST 1.1 Criteria in Soft Tissue and PCWG3 in Bone Lesions 195"
      ],
      "chips": [
        "VECTRA-01",
        "p18/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v018.jpg",
      "cap": "Protocol page 18 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 19 of 221 · Appendix G Contraception Requirements 207 Appendix H Radiation Therapy Oncology…",
      "audio": [
        "Appendix G Contraception Requirements 207 Appendix H Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer Late Radiation Morbidity Scoring Scheme 209 Appendix I Country-specific Requirements 212 Appendix J Protocol Version History 213"
      ],
      "chips": [
        "VECTRA-01",
        "p19/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v019.jpg",
      "cap": "Protocol page 19 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 20 of 221 · LIST OF ABBREVIATIONS AND DEFINITIONS OF TERMS Abbreviation Definition 18F…",
      "audio": [
        "LIST OF ABBREVIATIONS AND DEFINITIONS OF TERMS Abbreviation Definition fluorine-18 Fluorine-18 gallium-68 Gallium-68 99mTc Technetium-99m lutetium-177 Lutetium-177 actinium-225 Actinium-225 A D T Androgen-deprivation therapy AE Adverse event A E S I Adverse event of special interest AIDS Acquired immunodeficiency syndrome A L A R A As low as reasonably achievable ALP Alkaline phosphatase ALT Alanine aminotransferase AML Acute myeloid leukaemia aPTT Activated partial",
        "thromboplastin time AQA Analgesic quantification algorithm A R P I Androgen receptor pathway inhibitor AST Aspartate aminotransferase AUClast Area under the concentration-time curve from 0 to the last quantifiable concentration auxiliary medicinal product Auxiliary medicinal product B I C R Blinded independent central review BPI-SF Brief pain inventory - short form BRCA Breast cancer gene BSA Body surface area C Cycle C1D1 Cycle 1 Day 1 CBR Clinical benefit rate CD Cluster",
        "of differentiation CFR Code of Federal Regulations CI Confidence interval CKD Chronic kidney disease CKD-EPI Chronic kidney disease - epidemiology collaboration Cmax Maximum concentration after dosing COA Clinical outcomes assessment CR Complete response CRPC Castration-resistant prostate cancer CSP Clinical Study Protocol CSR Clinical study report CT Computed tomography CTCAE Common Terminology Criteria for Adverse Events ctDNA Circulating tumour DNA CV Cardiovascular D Day",
        "DCO Data cutoff DCR Disease control rate"
      ],
      "chips": [
        "VECTRA-01",
        "p20/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v020.jpg",
      "cap": "Protocol page 20 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 21 of 221 · Abbreviation Definition DES Data entry site DILI Drug-induced liver injury DNA…",
      "audio": [
        "Abbreviation Definition DES Data entry site DILI Drug-induced liver injury DNA Deoxyribonucleic acid duration of response Duration of response DUS Disease under study ECG Electrocardiogram eCOA Electronic clinical outcome assessment E C O G Eastern Cooperative Oncology Group eCRF Electronic case report form eDC Electronic data capture EEA European Economic Area e G F R Estimated glomerular filtration rate EMA European Medicines Agency EORTC European Organisation for Research",
        "and Treatment of Cancer end of treatment End of treatment ePRO Electronic patient-reported outcome EQ-5D-5L EuroQoL Group 5 Dimensions of Health 5 Levels of Severity per Dimension EU European Union EVPM EudraVigilance Postmarketing Module FAS Full Analysis Set FDA Food and Drug Administration FDG Fluorodeoxyglucose FFPE Formalin-fixed paraffin-embedded FOCBP Female partner of childbearing potential GCP Good Clinical Practice GFR Glomerular filtration rate HBS Human",
        "biological samples HCV Hepatitis C virus HIV Human immunodeficiency virus HR Hazard ratio HRR Homologous recombination repair IA Interim analysis IATA International Air Transport Association IB Investigator’s Brochure ICF Informed Consent Form ICH International Council for Harmonisation iCRO Imaging contract research organisation I D M C Independent data monitoring committee IEC Independent ethics committee IL Item library I M P Investigational medicinal product INR",
        "International normalised ratio IRB Institutional review board I R T Interactive response technology IV Intravenous(ly) m C R P C Metastatic castration-resistant prostate cancer"
      ],
      "chips": [
        "VECTRA-01",
        "p21/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v021.jpg",
      "cap": "Protocol page 21 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 22 of 221 · Abbreviation Definition MDS Myelodysplastic syndrome mHSPC Metastatic…",
      "audio": [
        "Abbreviation Definition MDS Myelodysplastic syndrome mHSPC Metastatic hormone-sensitive prostate cancer MRI Magnetic resonance imaging MTP Multiple testing procedure NCI National Cancer Institutes NE Not evaluable NED No evidence of disease NGS Next generation sequencing NL New lesion NTL Non-target lesion OME Oral morphine equivalent O R R Objective response rate overall survival Overall survival PARP Poly-adenosine diphosphate ribose polymerase PBMC Peripheral blood",
        "mononuclear cell PCWG3 Prostate Cancer Working Group 3 PD Progressive disease PET Positron emission tomography PFS Progression-free survival PGIS Physician Global Impression of Severity PGI-TT Physician Global Impression of Treatment or Therapy PK Pharmacokinetic(s) PR Partial response PRO Patient-reported outcome PSA Prostate-specific antigen P S A 50 greater than or equal to 50% decrease in PSA from baseline P S A 90 greater than or equal to 90% decrease in PSA from",
        "baseline P S M A Prostate-specific membrane antigen PT Preferred term PTT Partial thromboplastin time QLQ-C30 Quality of Life Questionnaire Core 30 QoL Quality of life QTc Corrected QT interval QTcF QT interval corrected by Fridericia’s formula QTL Quality tolerance limit QxW Every x weeks RBC Red blood cell RC Radioconjugate RECIST 1.1 Response Evaluation Criteria in Solid Tumours Version 1.1 RNA Ribonucleic acid RP3D Recommended Phase III dose rPD Radiographic disease",
        "progression radiographic P F S Radiographic progression-free survival R T S M Randomisation and trial supply management S A E Serious adverse event SAF Safety Analysis Set"
      ],
      "chips": [
        "VECTRA-01",
        "p22/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v022.jpg",
      "cap": "Protocol page 22 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 23 of 221 · Abbreviation Definition SAP Statistical analysis plan SCr Serum creatinine SD Stable…",
      "audio": [
        "Abbreviation Definition SAP Statistical analysis plan SCr Serum creatinine SD Stable disease SoA Schedule of activities standard of care Standard of care SOD Sum of diameters SPECT Single-photon emission computed tomography SRC Safety Review Committee S S E F S Symptomatic skeletal event-free survival SUSAR Suspected unexpected serious adverse reaction TBL Total bilirubin TEAE Treatment-emergent adverse event TL Target lesion TMG Toxicity Management Guidelines TRAE",
        "Treatment-related adverse event TTPP Time to pain progression ULN Upper limit of normal URC Unblinded review committee US United States VAS Visual analogue scale WB Whole body WBC White blood cell"
      ],
      "chips": [
        "VECTRA-01",
        "p23/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v023.jpg",
      "cap": "Protocol page 23 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 24 of 221 · PROTOCOL SUMMARY 1",
      "audio": [
        "1 PROTOCOL SUMMARY 1.1 Synopsis Protocol Title: A Phase III, Multicentre, Randomised Controlled Study to Evaluate the Efficacy and Safety of A Z D 2265 (F P I 2265) actinium-225-P S M A I and T Compared With Standard of Care in Patients with P S M A-positive Metastatic Castration-resistant Prostate Cancer (VECTRA-01) Brief Title: Phase III Study of A Z D 2265 (F P I 2265) Compared With Standard of Care in P S M A-positive Metastatic Castration-resistant Prostate Cancer (m C",
        "R P C) Regulatory Agency Identifier Number(s): Registry ID European Union Clinical Trials 2025-524579-21 Investigational New Drug 178687 Rationale: Prostate cancer is the most commonly diagnosed cancer in men and the second leading cause of cancer-related death in the United States. In 2025, approximately 313,780 new cases and 35,770 deaths are expected.",
        "Within 5 years of primary diagnosis, 10% to 20% of patients with prostate cancer develop castration-resistant prostate cancer, over 80% of whom present with metastatic castration-resistant prostate cancer (m C R P C), which carries a poor prognosis (median overall survival [overall survival] ranging from 13 to 23 months) and declining quality of life.",
        "Although multiple therapies improve outcomes in m C R P C, including chemotherapy (docetaxel, cabazitaxel), androgen receptor pathway inhibitors (ARPIs; eg, abiraterone, enzalutamide), radium‑223 for bone‑predominant disease, immunotherapies for biomarker‑selected patients, and poly-adenosine diphosphate ribose polymerase inhibitors for homologous recombination repair‑deficient tumours, primary and acquired resistance leads to inevitable progression, highlighting ongoing",
        "unmet need. Prostate-specific membrane antigen (P S M A; glutamate carboxypeptidase II) is highly overexpressed on prostate cancer cells relative to normal tissues, enabling targeted delivery of radiation. A P S M A‑targeted radioconjugate (RC) has become an established therapy for m C R P C.",
        "Lutetium-177 (lutetium-177) vipivotide tetraxetan (lutetium-177‑P S M A‑617; Pluvicto®) improved overall survival and radiological progression-free survival (radiographic P F S) versus standard of care (standard of care) in participants with P S M A-positive m C R P C in the Phase III VISION study and was later approved in the earlier treatment continuum based on the PSMAfore study."
      ],
      "chips": [
        "VECTRA-01",
        "p24/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v024.jpg",
      "cap": "Protocol page 24 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 25 of 221 · 177Lu-PSMA-617 is the most widely used RC for the treatment of adult patients with…",
      "audio": [
        "lutetium-177-P S M A-617 is the most widely used RC for the treatment of adult patients with P S M A-positive m C R P C who have already been treated with other anticancer treatments. However, there is still a population of patients who either do not respond to, or relapse after treatment with, β-emitting therapies such as lutetium-177-P S M A-617, representing an unmet need.",
        "It has been suggested that clinical outcomes improved in the patient cohort who were eventually treated with other anticancer treatment options (including actinium-225 [actinium-225]-based RC) after the discontinuation of lutetium-177-P S M A-617 (Yadav et al 2021). These findings favour re-treating patients with other advanced treatment options, such as α-emitting RCs.",
        "This provides the rationale for initiating clinical studies using actinium-225-based RCs in patients pre-treated with P S M A-directed β-emitting RCs. Objectives and Endpoints: Objectives Endpoints Dual primary To demonstrate the superiority of actinium-225 zadavotide guraxetan relative to standard of care by assessment of radiographic P F S in participants with m C R P C.",
        "radiographic P F S is defined as the time from randomisation to radiographic progression, as assessed by the B I C R per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone), or death due to any cause. The analysis will include all randomised participants. All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy.",
        "However, if the participant progresses or dies immediately after 2 or more consecutive missed visits, the participant will be censored at the time of the latest evaluable assessment prior to the 2 missed visits. The measure of interest is the HR of radiographic P F S. To demonstrate the superiority of actinium-225 zadavotide guraxetan relative to standard of care by assessment of overall survival in participants with m C R P C.",
        "overall survival is defined as the length of time from randomisation until the date of death due to any cause. The analysis will include all randomised participants. All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. The measure of interest is the HR of overall survival.",
        "Secondary To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of PFS in participants with m C R P C. PFS is defined as the time from randomisation to the earliest of progression (defined as radiographic progression assessed by B I C R per RECIST 1.1 and/or PCWG3 criteria, clinical progression, or PSA progression), or death due to any cause. The analysis will include all randomised participants.",
        "All events will be included, regardless of whether the participant withdraws from therapy and regardless of missed visits. The measure of interest is the HR of PFS."
      ],
      "chips": [
        "VECTRA-01",
        "p25/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v025.jpg",
      "cap": "Protocol page 25 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 26 of 221 · Objectives Endpoints To assess the efficacy of 225Ac zadavotide guraxetan relative…",
      "audio": [
        "Objectives Endpoints To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of P S A 50 in participants with m C R P C. P S A 50 is defined as the proportion of participants who achieve a greater than or equal to 50% decrease in PSA from baseline that is confirmed by a second (the next) PSA measurement greater than or equal to 3 weeks later. The analysis will include all randomised participants.",
        "All responses will be recorded and included in the analysis dataset, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. However, participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be counted as responders in the P S A 50 endpoint calculation. Proportion of evaluable participants with confirmed P S A 50 and duration of P S A 50 response.",
        "To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of P S A 90 in participants with m C R P C. P S A 90 is defined as the proportion of participants who achieve a greater than or equal to 90% decrease in PSA from baseline that is confirmed by a second (the next) PSA measurement greater than or equal to 3 weeks later. The analysis will include all randomised participants.",
        "All responses will be recorded and included in the analysis dataset, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. However, participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be counted as responders in the P S A 90 endpoint calculation. Proportion of evaluable participants with confirmed P S A 90 and duration of P S A 90 response.",
        "To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of O R R in participants with m C R P C. O R R is defined as the proportion of participants with measurable soft tissue disease at baseline who have a CR or PR as determined by B I C R, per RECIST 1.1 (soft tissue) and PCWG3 criteria (bone). The analysis will include all randomised participants with measurable soft tissue disease at baseline.",
        "Data obtained from randomisation up until progression, or the last evaluable assessment in the absence of progression by B I C R, will be included in the assessment of O R R, regardless of whether the participant withdraws from therapy. Participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be included as responders in the O R R. The measure of interest is the odds ratio of O R R.",
        "To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of duration of response in participants with m C R P C. duration of response is defined as the time from the date of first documented response until date of documented progression per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone) as determined by B I C R or death in the absence of disease progression. The analysis will include all randomised participants.",
        "All events after achieving confirmed response will be included, regardless of whether the participant discontinues study intervention, receives another anticancer therapy, or clinically progresses prior to RECIST 1.1- and/or PCWG3 criteria (bone)-defined progression. The measure of interest is the median of duration of response."
      ],
      "chips": [
        "VECTRA-01",
        "p26/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v026.jpg",
      "cap": "Protocol page 26 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 27 of 221 · Objectives Endpoints To assess the efficacy of 225Ac zadavotide guraxetan relative…",
      "audio": [
        "Objectives Endpoints To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of S S E F S in participants with m C R P C. S S E F S is defined as the time from randomisation to the earliest of the following: • Use of radiation therapy to prevent or relieve skeletal symptoms. • Occurrence of new symptomatic pathological bone fractures (vertebral or non-vertebral). Radiographic documentation is required.",
        "A pathological fracture, as determined by investigator, is defined as associated with low or no trauma and deemed to have occurred at a site of bone metastasis. • Occurrence of spinal cord compression. Radiographic documentation is required. • Orthopaedic surgical intervention for bone metastasis. • Death due to any cause. The analysis will include all randomised participants.",
        "All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. The measure of interest is the HR of S S E F S. To evaluate the PK of actinium-225 zadavotide guraxetan. Plasma concentrations of actinium-225 zadavotide guraxetan pre-dose and post-dose. a Plasma PK parameters derived from a population PK model, as permitted by the data. a The PK Analysis Set will be used.",
        "Safety To assess the safety and tolerability of actinium-225 zadavotide guraxetan as compared with standard of care in participants with m C R P C. Incidence of AEs and SAEs, treatment discontinuation due to TEAEs, rate of dose reduction due to TEAEs, rate of dose delays due to TEAEs, change from baseline in vital signs, haematology, clinical chemistry, and urinalysis laboratory results, and ECGs.",
        "The analysis will include all participants who received any amount of the study interventions. All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. Safety endpoints will include, but are not limited to, the following: • TEAEs, SAEs, AEs leading to dose modifications • Changes from baseline in vital signs, clinical laboratory assessments, ECGs, and physical examinations.",
        "a Population PK and exposure-response for efficacy and safety may combine data from other studies, will be described in a modelling analysis plan separate to the SAP, and will be reported separately to the CSR.",
        "Abbreviations: actinium-225, actinium-225; AE, adverse event; B I C R, blinded independent central review; CSR, Clinical Study Report; duration of response, duration of response; ECG, electrocardiogram; HR, hazard ratio; m C R P C, metastatic castration-resistant prostate cancer; O R R, overall response rate; overall survival, overall survival; PCWG3, Prostate Cancer Working Group 3; PFS, progression-free survival; PK, pharmacokinetic(s); PSA, prostate-specific antigen; P S",
        "A 50, greater than or equal to 50% decrease in PSA from baseline; P S A 90, greater than or equal to 90% decrease in PSA from baseline; RECIST 1.1, Response Evaluation Criteria in Solid Tumours Version 1.1; radiographic P F S, radiographic progression-free survival; S A E, serious adverse event; SAP, Statistical Analysis Plan; S S E F S, symptomatic skeletal event-free survival; standard of care, standard of care; TEAE, treatment-emergent adverse event.",
        "Exploratory objectives are outlined in the protocol."
      ],
      "chips": [
        "VECTRA-01",
        "p27/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v027.jpg",
      "cap": "Protocol page 27 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 28 of 221 · Overall design synopsis · 2-arm 1:1 vs SoC",
      "audio": [
        "Overall Design Synopsis: This is a Phase III, 2 arm, parallel, randomised, open-label, controlled, multicentre, global study comparing actinium-225 zadavotide guraxetan (A Z D 2265 F P I 2265; hereafter referred to as actinium-225 zadavotide guraxetan) and standard of care (cabazitaxel, A R P I, or radium-223).",
        "This is an open-label study, and the specific treatment arm (Arm A or Arm B) to which a participant is assigned will be determined using interactive response technology (I R T)/randomisation and trial supply management (R T S M). The site will use the I R T/R T S M prior to the start of study intervention administration for each participant. The site will record the intervention assignment on the applicable electronic case report form, if required.",
        "Potential bias will be reduced by the following steps: central randomisation and central confirmation of radiographic disease progression. An independent data monitoring committee (I D M C) will be appointed for this study.",
        "Brief Summary: The purpose of this study is to compare the efficacy and safety of actinium-225 zadavotide guraxetan relative to standard of care in participants with P S M A-positive m C R P C who have progressed despite treatment with A R P I, taxane-based chemotherapy, and P S M A-directed β-emitting RC. The primary efficacy endpoints are radiographic P F S and overall survival.",
        "Study details include: • The study duration, regardless of treatment, will be up to ~ 6 years (304 weeks). • The treatment duration for Arm A (actinium-225 zadavotide guraxetan) will be up to 36 weeks.",
        "• The visit frequency for Arm A (actinium-225 zadavotide guraxetan) will be every 3 weeks (every 3 weeks) during the treatment phase, every 8 weeks (every 8 weeks) for 16 weeks from the End of Treatment (end of treatment) visit, and every 24 weeks (every 24 weeks) thereafter (for a total of 5 years from end of treatment).",
        "• The treatment duration and visit frequency for Arm B (standard of care) will vary depending on assigned intervention (cabazitaxel, A R P I, or radium-223). Disclosure Statement: This is a Phase III, 2-arm, parallel, randomised, open-label, controlled, multicentre, global study to evaluate the efficacy and safety of actinium-225 zadavotide guraxetan compared with standard of care.",
        "Number of Participants: Approximately 1,120 participants will be screened to achieve a total of ~ 670 randomised in a 1:1 ratio to the 2 treatment arms. Note: “Screened” means a participant’s, or their legally authorised representative’s, agreement"
      ],
      "chips": [
        "VECTRA-01",
        "p28/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v028.jpg",
      "cap": "Protocol page 28 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 29 of 221 · Arm A 12 MBq Q6W × ≤6 · Arm B SoC menu · strata",
      "audio": [
        "to participate in a clinical study following completion of the informed consent process. Study Arms and Duration: Arm A Participants will receive actinium-225 zadavotide guraxetan 12 megabecquerels administered as an intravenous (IV) injection every 6 weeks for up to 6 cycles until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met.",
        "The total time on study is up to 6 years counting from Cycle 1 Day 1 of treatment. Arm B Participants will receive standard of care (investigator’s choice of cabazitaxel, A R P I, or radium-223) until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met.",
        "standard of care is defined as: • Cabazitaxel 20 milligrams per square metre (25 milligrams per square metre can be used in selected participants at the discretion of the investigator) by IV every 3 weeks in combination with oral prednisone/prednisolone 10 mg daily; OR • Abiraterone 1,000 mg orally once daily with prednisone/prednisolone 5 mg orally twice daily; OR • Enzalutamide 160 mg orally once daily; OR • Deutenzalutamide 80 mg orally once daily (China only); OR •",
        "Radium-223 given at 55 kilobecquerels per kilogram IV; every 4 weeks for 6 doses.",
        "Randomisation will be stratified in both arms by the following factors: • Intended therapy prior to randomisation (A R P I versus cabazitaxel versus radium-223) • Prior courses of taxane-based chemotherapy (1 versus > 1) • Progressed during treatment with, or within 6 weeks of, last date of P S M A-directed β-emitting RC (yes versus no) The study will have 3 periods: screening, treatment, and follow-up: • The screening period will commence once consent is obtained for the",
        "main study and will be up to 28 days. − During the screening period, confirmation of P S M A-positive disease must be centrally confirmed by blinded independent central review."
      ],
      "chips": [
        "VECTRA-01",
        "p29/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v029.jpg",
      "cap": "Protocol page 29 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "Arm A: 12 MBq IV Q6W × up to 6 cycles. Arm B: cabazitaxel, ARPI, or radium-223 55 kBq/kg Q4W × 6.",
        "Strata: intended SoC, number of prior taxane courses, timing of β-PSMA progression."
      ]
    },
    {
      "title": "Page 30 of 221 · Follow-up, IDMC, ITT dual-primary stats",
      "audio": [
        "• Randomised participants will receive treatment with actinium-225 zadavotide guraxetan or standard of care until disease progression, unacceptable toxicity, the participant requests to stop the study intervention, or other specific discontinuation criteria are met. • The follow-up period will start after study intervention is discontinued. This will include: − An end of treatment visit within 28 days of study intervention discontinuation.",
        "− Safety Follow-up visits every 8 weeks for 16 weeks from the end of treatment visit. − Long-term Follow-up visits every 24 weeks from Safety Follow-up, for a total of 5 years from end of treatment. Data Monitoring/Other Committee: Yes An I D M C will be appointed for this study.",
        "The I D M C is a group of independent experts who are appointed to monitor the safety and scientific integrity of a human research intervention, and to make recommendations to AstraZeneca regarding the stopping of a study for efficacy, for harms, or for futility. The composition of the committee is dependent upon the scientific skills and knowledge required for monitoring the particular study.",
        "Statistical Methods: The Full Analysis Set will be used as the primary population for reporting efficacy data and to summarise baseline characteristics. This comprises all participants randomised into the study and will be analysed according to randomised treatment regardless of the treatment received (intent-to-treat principle). Any important deviations from randomised treatment will be listed and considered when interpreting the efficacy data.",
        "The Safety Analysis Set will be used as the primary population for reporting safety data. This comprises all participants randomised into the study who received at least 1 dose of the study interventions. For each of the dual primary endpoints, radiographic P F S and overall survival, the superiority of actinium-225 zadavotide guraxetan compared with standard of care will be assessed using a stratified log-rank test adjusting for the stratification factors.",
        "A stratified Cox proportional hazards model will be used to estimate the hazard ratio (HR) and its 95% confidence interval. If there are insufficient events per strata, the strata will be pooled following a pooling strategy that will be pre-specified in the statistical analysis plan.",
        "Three analyses are planned: (1) a non-binding futility analysis on overall survival at data cutoff (DCO) 1; (2) an interim analysis (IA) of overall survival and the final analysis of radiographic P F S at DCO2; (3) the final analysis of overall survival at DCO3.",
        "A non-binding, futility analysis at DCO1 will be performed when ~ 140 overall survival events have occurred across treatment arms (~ 21% maturity) or 23 months after the first participant has been randomised, whichever occurs first."
      ],
      "chips": [
        "VECTRA-01",
        "p30/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v030.jpg",
      "cap": "Protocol page 30 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 31 of 221 · Figure 1 study design · schema and dual primaries",
      "audio": [
        "The overall survival IA and the radiographic P F S final analysis will be performed at DCO2 when ~ 299 overall survival events have occurred across treatment arms (~ 45% maturity). At this DCO, it is expected to have ~ 400 radiographic P F S events (~ 60% maturity).",
        "With 299 overall survival events and assuming HR = 0.72, the study will have 69% power to show a statistically significant difference at the 2-sided alpha threshold calculated using the O’Brien-Fleming approach with the overall allocation of 4.9%. Similarly, with 400 radiographic P F S events and assuming HR = 0.45, the study will have 99% power to show a statistically significant difference at the 2-sided alpha threshold of 0.1%.",
        "It is anticipated that this analysis will be performed ~ 30 months after the first participant has been randomised. The final analysis of overall survival will be performed when ~ 399 overall survival events have occurred across treatment arms (60% maturity). With 399 overall survival events and assuming HR = 0.72, the study will have 90% power to show a statistically significant difference at the 2-sided alpha threshold of 4.9%.",
        "It is anticipated that this analysis will be performed ~ 37 months after the first participant has been randomised. 1.2 Schema Figure 1: Study Design • Progressive m C R P C • Castrate levels of testosterone • Prior treatment with A R P I • Prior treatment with taxane-based chemotherapy for metastatic disease • Progressed on or after 1 line of P S M A-directed β-emitting RC (exclude progression prior to Cycle 3, minimum 3 months post last dose).",
        "• E C O G performance status 0-2 • Adequate bone marrow function (eg, haemoglobin greater than or equal to 9 g/dL, platelets greater than or equal to 100 times 109 /L, ANC greater than or equal to 1.5 times 109 /L) • e G F R greater than or equal to 60 mL/min • P S M A PET+ disease a • Grade 1 xerostomia allowed ( greater than or equal to Grade 2 excluded) • Exclude prior treatment with α-based molecular targeted RC Dual primary endpoints: • radiographic P F S (B I C R) •",
        "overall survival Secondary endpoints: • PFS • P S A 50 • P S A 90 • O R R • duration of response • S S E F S • PK • Safety and tolerability Arm A: actinium-225 zadavotide guraxetan 12 megabecquerels by IV injection every 6 weeks for up to 6 cycles Randomise 1:1 Arm B: standard of care b a P S M A PET-positive disease defined as having at least 1 tumour lesion (soft tissue or bone) with uptake of PET tracer greater than in normal liver.",
        "Participants will be considered ineligible if any intraprostatic lesion or any 1 lesion larger than size criteria (organs greater than or equal to 1 cm in longest diameter, lymph nodes greater than or equal to 2.5 cm in short axis, and bones [soft tissue component] greater than or equal to 1 cm in longest diameter), measured on the CT scan, has uptake of PET tracer less than or equal to uptake in normal liver."
      ],
      "chips": [
        "VECTRA-01",
        "p31/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v031.jpg",
      "cap": "Protocol page 31 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "Must have progressed after ARPI, metastatic taxane, and one PSMA β RC. No prior α-targeted RC.",
        "eGFR ≥60, ECOG 0–2, PSMA PET+ by BICR. Dual primary rPFS (BICR) + OS."
      ]
    },
    {
      "title": "Page 32 of 221 · b Investigator’s choice: cabazitaxel, ARPI, or radium-223 until disease progression,…",
      "audio": [
        "b Investigator’s choice: cabazitaxel, A R P I, or radium-223 until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met (radium-223 limited to 6 injections).",
        "standard of care is defined as cabazitaxel 20 milligrams per square metre (a dose of 25 milligrams per square metre can be used in selected participants at the discretion of the investigator) by IV every 3 weeks in combination with oral prednisone/prednisolone 10 mg administration daily, OR abiraterone 1,000 mg taken orally once daily with prednisone/prednisolone 5 mg administered orally twice daily, OR enzalutamide 160 mg taken orally once daily, OR deutenzalutamide 80 mg",
        "orally once daily (China only), OR radium-223 given at a 55 kilobecquerels per kilogram dose every 4 weeks for 6 doses by IV. Note: Cross-over between treatment arms is not allowed.",
        "Abbreviations: actinium-225, actinium-225; ANC, absolute neutrophil count; A R P I, androgen receptor pathway inhibitor; duration of response, duration of response; E C O G, Eastern Cooperative Oncology Group; e G F R, estimated glomerular filtration rate; IV, intravenous; m C R P C, metastatic castration-resistant prostate cancer; O R R, objective response rate; overall survival, overall survival; PET, positron emission tomography; PFS, progression-free survival; PK,",
        "pharmacokinetics; P S A 50, greater than or equal to 50% decrease in PSA from baseline; P S A 90, greater than or equal to 90% decrease in PSA from baseline; P S M A, prostate-specific membrane antigen; QxW, every x weeks; RC, radioconjugate; radiographic P F S, radiographic progression-free survival; standard of care, standard of care; S S E F S, symptomatic skeletal event-free survival."
      ],
      "chips": [
        "VECTRA-01",
        "p32/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v032.jpg",
      "cap": "Protocol page 32 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 33 of 221 · Protocol body · page 33",
      "audio": [
        "1.3 Schedule of Activities Table 1: Schedule of Activities - Arm A (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 4 D1 D22 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 c plus or",
        "minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Informed consent X 5.1 and Appendix A 3 Informed consent: Optional Genomics Initiative Research (optional) d X 8.7 Study procedures and safety assessments Inclusion and exclusion criteria X 5.1 and 5.2 Randomisation X e 6.3 Demographics X 8.1.1 Histopathology records X 8.1.2 Medical history X X (C1 only) 8.1.2 Concomitant medication review X X X X 6.9 and 8.1.2 AE monitoring X X X X f X g 8.4 Physical examination X h",
        "X X X 8.3.1 Vital signs X X i X X 8.3.2 Weight X X X 8.3.1 Height X 8.3.1 E C O G performance status X X X X 8.3.5.1"
      ],
      "chips": [
        "VECTRA-01",
        "p33/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v033.jpg",
      "cap": "Protocol page 33 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 34 of 221 · Table 1: Schedule of Activities - Arm A (225Ac Zadavotide Guraxetan) Procedure a…",
      "audio": [
        "Table 1: Schedule of Activities - Arm A (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 4 D1 D22 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 c plus or minus 3 plus or minus 7 plus",
        "or minus 14 plus or minus 14 ECG (12-lead) j X C1D1 and C2D1 only: Single ECG pre-dose (-2 h) and post-dose (end of injection [+ 15 min]); D1 of remaining cycles: Single ECG post-dose (end of injection [+ 15 min]); AND as clinically indicated 8.3.3 Local laboratory assessments Haematology k X X X X X X 8.3.4 Chemistry k X X X X X X 8.3.4 Urinalysis l X X X X m X m 8.3.4 Coagulation X As clinically indicated 8.3.4 PSA X D1 of all 6 cycles, then every 8 weeks until B I C",
        "R-assessed rPD by RECIST 1.1 and/or PCWG3 8.3.4 Serum/plasma testosterone X X (C4 only) 8.3.4 Imaging and efficacy assessments RECIST 1.1/PCWG3 assessment (CT/MRI of abdomen, chest, and pelvis with contrast + 99mTc bone scan) X n every 8 weeks ( plus or minus 1 week) for the first 32 weeks and then Q12W ( plus or minus 1 week) until RECIST 1.1 and/or PCWG3 radiographic progression verified by B I C R. Scans should be anchored to randomisation.",
        "8.2.1.2 P S M A PET/CT scan o X n Optional at Week 21 plus or minus 1 week and at time of PSA increase ( greater than or equal to 25% and greater than or equal to 2 ng/mL compared to nadir as per PCWG3-defined PSA progression) 8.2.1.1 and 8.2.1.3 SSE assessment X X X X X 9.4.2.2.5 eCOA training and setup X (C1 only) 8.2.4"
      ],
      "chips": [
        "VECTRA-01",
        "p34/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v034.jpg",
      "cap": "Protocol page 34 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 35 of 221 · Table 1: Schedule of Activities - Arm A (225Ac Zadavotide Guraxetan) Procedure a…",
      "audio": [
        "Table 1: Schedule of Activities - Arm A (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 4 D1 D22 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 c plus or minus 3 plus or minus 7 plus",
        "or minus 14 plus or minus 14 BPI-SF (Item 3 only) p D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.1 Analgesic log p D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.2 PRO-CTCAE p C1D1, then once every week for the first 12 weeks, and then once every 6 weeks X 8.2.4.3 PGI-TT p C1D1, then once every week for the first 12 weeks, and then",
        "once every 6 weeks X 8.2.4.4 EORTC IL66 p C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.5 PGIS p C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.6 EQ-5D-5L p C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.7 Survival status X X 7.1.3 and 8.2.3 Subsequent anticancer treatment X X 7.1.3 Pharmacokinetic testing Pre-dose blood sample for actinium-225",
        "zadavotide guraxetan PK testing X (C1 and C2 [up to 2 h pre-dose]) 8.5 Post-dose blood sample for actinium-225 zadavotide guraxetan PK testing X (C1 and C2: end of injection [+ 15 min]) (C1 only: 3-24 h post-dose) q 8.5"
      ],
      "chips": [
        "VECTRA-01",
        "p35/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v035.jpg",
      "cap": "Protocol page 35 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 36 of 221 · Table 1: Schedule of Activities - Arm A (225Ac Zadavotide Guraxetan) Procedure a…",
      "audio": [
        "Table 1: Schedule of Activities - Arm A (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 4 D1 D22 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 c plus or minus 3 plus or minus 7 plus",
        "or minus 14 plus or minus 14 Biomarker assessments r Blood for plasma ctDNA X (C1 to C6) X 8.8.1 Blood for protein expression (RNA sequencing and proteomics) d X (C1 to C3) X 8.8.1 Blood for PBMC isolation and cytokine/chemokine analysis d X (C1 to C3) X 8.8.1 Urine sample for biomarker analysis d,s X (C1 to C6) X 8.8.1 Mandatory screening FFPE tumour sample (archival or newly acquired biopsy) X 8.8.1 Optional on-treatment FFPE tumour sample X (Collect once, at any time",
        "during the treatment period) 8.8.2 Optional FFPE tumour sample at progression X (At disease progression) 8.8.2 Optional Genomics Initiative: exploratory genomics and multi-omics sample d X (C1 only) 8.7 Study intervention administration actinium-225 zadavotide guraxetan administration, 12 megabecquerels, IV, every 6 weeks t X 6.1 and 6.2 Note: All assessments on treatment days are to be performed prior to study intervention administration, unless otherwise indicated.",
        "a Imaging and efficacy assessments must be anchored to the randomisation visit, even if dose is delayed. All other assessments are tied to dosing."
      ],
      "chips": [
        "VECTRA-01",
        "p36/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v036.jpg",
      "cap": "Protocol page 36 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 37 of 221 · b To be conducted approximately 28 days from the last dose of 225Ac zadavotide…",
      "audio": [
        "b To be conducted approximately 28 days from the last dose of actinium-225 zadavotide guraxetan or prior to the initiation of subsequent anticancer treatment (outside of what is allowed on-study), whichever comes first. The D22 visit of the final cycle of actinium-225 zadavotide guraxetan may be skipped and the end of treatment visit should occur instead. c Dose delays beyond this window may occur, with Sponsor approval, as clinically or operationally necessary.",
        "d Not applicable to participants in China. e Randomisation should occur at the end of the screening period, after participant eligibility has been confirmed. f Collect new and worsening AEs that are deemed causally related to actinium-225 zadavotide guraxetan, as well as all SAEs, all AESIs, and all AEs of xerostomia and xerophthalmia, independent of relationship to actinium-225 zadavotide guraxetan.",
        "g Collect only SAEs and AEs of myelosuppression that are deemed causally related to actinium-225 zadavotide guraxetan, as well as all AESIs, and all AEs of xerostomia and xerophthalmia, independent of relationship to actinium-225 zadavotide guraxetan. h Full physical examination is required at screening, with targeted physical examinations thereafter.",
        "i All vital signs (blood pressure, pulse, respiratory rate, body temperature, and oxygen saturation) will be performed prior to actinium-225 zadavotide guraxetan administration, with blood pressure, pulse, and respiratory rate assessed within 15-30 minutes pre-dose and repeated as clinically indicated.",
        "j Single ECG is required unless otherwise specified; if QTcF is at the near-exclusion threshold (450-470 ms) or machine/read quality is inadequate, repeat up to 2 additional ECGs within 5 to 10 minutes of the first ECG. Additional ECGs may be performed if clinically indicated during the treatment period. Where PK blood samples are collected on C1D1 and C2D1, single ECGs must be performed pre- and post-injection, before PK blood samples are taken.",
        "k Blood samples can be collected up to 72 hours prior to Day 1 of each cycle. Haematology and chemistry results, as well as AEs, must be assessed within 48 hours prior to dosing with actinium-225 zadavotide guraxetan. Refer to the TMGs for guidance on toxicity management and dosing decisions. For chemistry assessments, a comprehensive metabolic panel is required during treatment and during the Safety Follow-up period.",
        "A basic metabolic panel (including serum creatinine) is sufficient for the Long-term Follow-up period. l Urinalysis, to include full and dipstick testing at timepoints shown, and reflex microscopic testing as needed. Additional urinalysis assessments may be performed if clinically indicated. m Collection timepoints to align with scheduled follow-up visits. n Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before randomisation.",
        "A P S M A PET/CT scan taken up to 42 days before randomisation can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval). Central confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be determined by central readers before the participant can be randomised.",
        "To ensure the screening scan remain as close as possible to randomisation, the scans must be submitted for central confirmation of eligibility as soon as they have been acquired. o P S M A-PET scans must be performed with 1 of the 2 allowed P S M A ligands, gallium-68-P S M A-11 or fluorine-18 D C F P y L. Use of fluorine-18 D C F P y L is prohibited in the EU.",
        "The same radiotracer used at screening (gallium-68-P S M A-11 or fluorine-18 D C F P y L) should be used for follow‑up assessments. p Refer to the site training manual for the PRO window of completion information. q At sites where overnight hospitalisation is required, the C1D1 3-24 hour post-dose PK sample should be collected as late as possible (ideally between 6 hours and up to 24 hours post-dose).",
        "r Individual countries may be excluded from selected biomarker sample collections due to logistical or stability constraints, at the Sponsor’s discretion. Details will be captured in the Central Laboratory Manual. s The same urine sample may be used for both the local laboratory (safety) assessment and the central biomarker assessment. Refer to the Central Laboratory Manual for detailed instructions.",
        "t actinium-225 zadavotide guraxetan 12 megabecquerels administered as an IV injection every 6 weeks for up to 6 cycles until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. Participants will be closely monitored during administration of study intervention and for no less than 2 hours after administration has completed.",
        "Abbreviations: FU, follow-up; N/A, not applicable; SSE, symptomatic skeletal event."
      ],
      "chips": [
        "VECTRA-01",
        "p37/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v037.jpg",
      "cap": "Protocol page 37 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 38 of 221 · Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening…",
      "audio": [
        "Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening Treatment period every 3 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Informed consent X 5.1",
        "and Appendix A 3 Informed consent: Optional Genomics Initiative Research (optional) c X 8.7 Study procedures and safety assessments Inclusion and exclusion criteria X 5.1 and 5.2 Randomisation X d 6.3 Demographics X 8.1.1 Histopathology records X 8.1.2 Medical history X X (C1 only) 8.1.2 Concomitant medication review X X X 6.9 and 8.1.2 AE monitoring X X X X e X e 8.4 Physical examination X f X X 8.3.1 Vital signs X X g X 8.3.2 Weight X X X 8.3.1 Height X 8.3.1 E C O G",
        "performance status X X X 8.3.5.1 ECG (12-lead) h X As clinically indicated 8.3.3"
      ],
      "chips": [
        "VECTRA-01",
        "p38/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v038.jpg",
      "cap": "Protocol page 38 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 39 of 221 · Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening…",
      "audio": [
        "Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening Treatment period every 3 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Local laboratory",
        "assessments Haematology i X X X X 8.3.4 Chemistry i X X X X X 8.3.4 Urinalysis j X every 6 weeks X X k 8.3.4 Coagulation X As clinically indicated 8.3.4 PSA X every 6 weeks starting from C1D1 until end of treatment, then every 8 weeks until B I C R-assessed rPD by RECIST 1.1 and/or PCWG3 8.3.4 Serum/plasma testosterone X X (C4 only) 8.3.4 Imaging and efficacy assessments RECIST 1.1/PCWG3 assessment (CT/MRI of abdomen, chest and pelvis with contrast + 99mTc bone scan) X l",
        "every 8 weeks ( plus or minus 1 week) for the first 32 weeks and then Q12W ( plus or minus 1 week) until RECIST 1.1 and/or PCWG3 radiographic progression verified by B I C R. Scans should be anchored to randomisation.",
        "8.2.1.2 P S M A PET/CT scan m X l Optional at Week 21 plus or minus 1 week and at time PSA increase ( greater than or equal to 25% and greater than or equal to 2 ng/mL compared to nadir as per PCWG3-defined PSA progression) 8.2.1.1 and 8.2.1.3 SSE assessment X X X X X 9.4.2.2.5 eCOA training and setup X (C1 only) 8.2.4 BPI-SF (Item 3 only) n D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.1 Analgesic log n",
        "D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.2"
      ],
      "chips": [
        "VECTRA-01",
        "p39/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v039.jpg",
      "cap": "Protocol page 39 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 40 of 221 · Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening…",
      "audio": [
        "Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening Treatment period every 3 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 PRO-CTCAE n C1D1, then",
        "once every week for the first 12 weeks, and then once every 6 weeks X 8.2.4.3 PGI-TT n C1D1, then once every week for the first 12 weeks, and then once every 6 weeks X 8.2.4.4 EORTC IL66 n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.5 PGIS n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.6 EQ-5D-5L n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.7",
        "Survival status X X 7.1.3 and 8.2.3 Subsequent anticancer treatment X X 7.1.3 Biomarker assessments o Blood for plasma ctDNA X (C1D1 then once every 6 weeks until Week 31) X 8.8.1 Blood for protein expression (RNA sequencing and proteomics) c X (C1D1 then once every 6 weeks until Week 13) X 8.8.1 Blood for PBMC isolation and cytokine/chemokine analysis c X (C1D1 then once every 6 weeks until Week 13) X 8.8.1 Urine sample for biomarker analysis c,p X (C1D1 then once every 6",
        "weeks until Week 31) X 8.8.1"
      ],
      "chips": [
        "VECTRA-01",
        "p40/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v040.jpg",
      "cap": "Protocol page 40 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 41 of 221 · Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening…",
      "audio": [
        "Table 2: Schedule of Activities - Arm B (Cabazitaxel) Procedure a Screening Treatment period every 3 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Mandatory screening FFPE",
        "tumour sample (archival or newly acquired biopsy) X 8.8.1 Optional on-treatment FFPE tumour sample X (Collect once, at any time during the treatment period) 8.8.2 Optional FFPE tumour sample at progression X (At disease progression) 8.8.2 Optional Genomics Initiative: exploratory genomics and multi-omics sample b X (C1 only) 8.7 Study intervention administration Cabazitaxel, 20 milligrams per square metre or 25 milligrams per square metre IV, every 3 weeks q,r X 6.1",
        "Prednisone/prednisolone, 10 mg, orally, daily s X 6.1 Note: All assessments on treatment days are to be performed prior to study intervention administration, unless otherwise indicated. a Imaging and efficacy assessments must be anchored to the randomisation visit, even if dose is delayed. All other assessments are tied to dosing.",
        "b To be conducted approximately 28 days from the last dose of cabazitaxel or prior to the initiation of subsequent anticancer treatment (outside of what is allowed on-study), whichever comes first. c Not applicable to participants in China. d Randomisation should occur at the end of the screening period, after participant eligibility has been confirmed. e SAEs which are deemed causally related by investigators and all AESIs will be collected.",
        "f Full physical examination is required at screening, with targeted physical examinations thereafter. g All vital signs (blood pressure, pulse, respiratory rate, body temperature, and oxygen saturation) will be performed prior to cabazitaxel administration, with blood pressure, pulse, and respiratory rate assessed within 15-30 minutes pre-dose and repeated as clinically indicated."
      ],
      "chips": [
        "VECTRA-01",
        "p41/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v041.jpg",
      "cap": "Protocol page 41 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 42 of 221 · h Single ECG is required; if QTcF is at the near-exclusion threshold (450-470 ms) or…",
      "audio": [
        "h Single ECG is required; if QTcF is at the near-exclusion threshold (450-470 ms) or machine/read quality is inadequate, repeat up to 2 additional ECGs within 5 to 10 minutes of the first ECG. Additional ECGs may be performed if clinically indicated during the treatment period. i Blood samples can be collected up to 72 hours prior to Day 1 of each cycle.",
        "Haematology and chemistry results, as well as AEs, must be assessed within 48 hours prior to dosing with study intervention. Refer to the locally approved Prescribing Information or manage in accordance with institutional guidelines for toxicity management and dosing decisions. For chemistry assessments, a comprehensive metabolic panel is required during treatment and during the Safety Follow-up period.",
        "A basic metabolic panel (including serum creatinine) is sufficient for the Long-term Follow-up period. j Urinalysis, to include full and dipstick testing at timepoints shown, and reflex microscopic testing as needed. Additional urinalysis assessments may be performed if clinically indicated. k Collection timepoints to align with scheduled follow-up visits. l Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before randomisation.",
        "A P S M A PET/CT scan taken up to 42 days before randomisation can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval). Central confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be determined by central readers before the participant can be randomised.",
        "To ensure the screening scan remain as close as possible to randomisation, the scans must be submitted for central confirmation of eligibility as soon as they have been acquired. m P S M A-PET scans must be performed with 1 of the 2 allowed P S M A ligands, gallium-68-P S M A-11 or fluorine-18 D C F P y L. Use of fluorine-18 D C F P y L is prohibited in the EU.",
        "The same radiotracer used at screening (gallium-68-P S M A-11 or fluorine-18 D C F P y L) should be used for follow‑up assessments. n Refer to the site training manual for the PRO window of completion information. o Individual countries may be excluded from selected biomarker sample collections due to logistical or stability constraints, at the Sponsor’s discretion. Details will be captured in the Central Laboratory Manual.",
        "p The same urine sample may be used for both the local laboratory (safety) assessment and the central biomarker assessment. Refer to the Central Laboratory Manual for detailed instructions.",
        "q Cabazitaxel 20 milligrams per square metre (a dose of 25 milligrams per square metre can be used in select participants at the discretion of physician) administered as a 1-hour IV infusion every 3 weeks in combination with oral prednisone/prednisolone 10 mg administered daily until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. Dose changes will be recorded in the eCRF.",
        "r Premedicate at least 30 minutes prior to each dose of cabazitaxel with IV antihistamine (dexchlorpheniramine 5 mg or diphenhydramine 25 mg or equivalent), corticosteroid (dexamethasone 8 mg or equivalent steroid), and H2 antagonist. Antiemetic prophylaxis is recommended and can be given orally or IV as needed. s Oral prednisone/prednisolone 10 mg administered daily throughout cabazitaxel treatment.",
        "Abbreviations: FU, follow-up; N/A, not applicable; SSE, symptomatic skeletal event."
      ],
      "chips": [
        "VECTRA-01",
        "p42/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v042.jpg",
      "cap": "Protocol page 42 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 43 of 221 · Table 3: Schedule of Activities -Arm B (ARPI) Procedure a Screening Treatment period…",
      "audio": [
        "Table 3: Schedule of Activities -Arm B (A R P I) Procedure a Screening Treatment period every 6 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Informed consent X 5.1 and",
        "Appendix A 3 Informed consent: Optional Genomics Initiative Research (optional) c X 8.7 Study procedures and safety assessments Inclusion and exclusion criteria X 5.1 and 5.2 Randomisation X d 6.3 Demographics X 8.1.1 Histopathology records X 8.1.2 Medical history X X (C1 only) 8.1.2 Concomitant medication review X X X 6.9 and 8.1.2 AE monitoring X X X X e X e 8.4 Physical examination X f X X 8.3.1 Vital signs X X g X 8.3.2 Weight X X X 8.3.1 Height X 8.3.1 E C O G",
        "performance status X X X 8.3.5.1 ECG (12-lead) h X As clinically indicated 8.3.3"
      ],
      "chips": [
        "VECTRA-01",
        "p43/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v043.jpg",
      "cap": "Protocol page 43 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 44 of 221 · Table 3: Schedule of Activities -Arm B (ARPI) Procedure a Screening Treatment period…",
      "audio": [
        "Table 3: Schedule of Activities -Arm B (A R P I) Procedure a Screening Treatment period every 6 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Local laboratory assessments",
        "Haematology i X X X X 8.3.4 Chemistry i X X X X X 8.3.4 Urinalysis j X every 6 weeks X X k 8.3.4 Coagulation X As clinically indicated 8.3.4 PSA X every 6 weeks starting from C1D1 until end of treatment, then every 8 weeks until B I C R-assessed rPD by RECIST 1.1 and/or PCWG3 8.3.4 Serum/plasma testosterone X X (C4 only) 8.3.4 Imaging and efficacy assessments RECIST 1.1/PCWG3 assessment (CT/MRI of abdomen, chest and pelvis with contrast + 99mTc bone scan) X l every 8 weeks (",
        "plus or minus 1 week) for the first 32 weeks and then Q12W ( plus or minus 1 week) until RECIST 1.1 and/or PCWG3 radiographic progression verified by B I C R. Scans should be anchored to randomisation.",
        "8.2.1.2 P S M A PET/CT scan m X l Optional at Week 21 plus or minus 1 week and at time PSA increase ( greater than or equal to 25% and greater than or equal to 2 ng/mL compared to nadir as per PCWG3-defined PSA progression) 8.2.1.1 and 8.2.1.3 SSE assessment X X X X X 9.4.2.2.5 eCOA training and setup X (C1 only) 8.2.4 BPI-SF (Item 3 only) n D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.1 Analgesic log n",
        "D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.2"
      ],
      "chips": [
        "VECTRA-01",
        "p44/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v044.jpg",
      "cap": "Protocol page 44 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 45 of 221 · Table 3: Schedule of Activities -Arm B (ARPI) Procedure a Screening Treatment period…",
      "audio": [
        "Table 3: Schedule of Activities -Arm B (A R P I) Procedure a Screening Treatment period every 6 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 PRO-CTCAE n C1D1, then once",
        "every week for the first 12 weeks, and then once every 6 weeks X 8.2.4.3 PGI-TT n C1D1, then once every week for the first 12 weeks, and then once every 6 weeks X 8.2.4.4 EORTC IL66 n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.5 PGIS n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.6 EQ-5D-5L n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.7",
        "Survival status X X 7.1.3 and 8.2.3 Subsequent anticancer treatment X X 7.1.3 Biomarker assessments o Blood for plasma ctDNA X (C1D1 then once every 6 weeks until Week 31) X 8.8.1 Blood for protein expression (RNA sequencing and proteomics) c X (C1D1 then once every 6 weeks until Week 13) X 8.8.1 Blood for PBMC isolation and cytokine/chemokine analysis c X (C1D1 then once every 6 weeks until Week 13) X 8.8.1 Urine sample for biomarker analysis c,p X (C1D1 then once every 6",
        "weeks until Week 31) X 8.8.1"
      ],
      "chips": [
        "VECTRA-01",
        "p45/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v045.jpg",
      "cap": "Protocol page 45 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 46 of 221 · Table 3: Schedule of Activities -Arm B (ARPI) Procedure a Screening Treatment period…",
      "audio": [
        "Table 3: Schedule of Activities -Arm B (A R P I) Procedure a Screening Treatment period every 6 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Mandatory screening FFPE",
        "tumour sample (archival or newly acquired biopsy) X 8.8.1 Optional on-treatment FFPE tumour sample X (Collect once, at any time during the treatment period) 8.8.2 Optional FFPE tumour sample at progression X (At disease progression) 8.8.2 Optional Genomics Initiative: exploratory genomics and multi-omics sample c X (C1 only) 8.7 Study intervention administration A R P I (abiraterone, enzalutamide, or deutenzalutamide [China only]) q Daily 6.1 Prednisone/prednisolone, 5 mg,",
        "orally, twice daily (if on abiraterone) r Daily 6.1 Note: All assessments on treatment days are to be performed prior to study intervention administration, unless otherwise indicated. a Imaging and efficacy assessments must be anchored to the randomisation visit, even if dose is delayed. All other assessments are tied to dosing.",
        "b To be conducted approximately 28 days from the last dose of A R P I or prior to the initiation of subsequent anticancer treatment (outside of what is allowed on-study), whichever comes first. c Not applicable to participants in China. d Randomisation should occur at the end of the screening period, after participant eligibility has been confirmed. e SAEs which are deemed causally related by investigators and all AESIs will be collected.",
        "f Full physical examination is required at screening, with targeted physical examinations thereafter. g All vital signs (blood pressure, pulse, respiratory rate, body temperature, and oxygen saturation) will be performed prior to A R P I administration, with blood pressure, pulse, and respiratory rate assessed within 15-30 minutes pre-dose and repeated as clinically indicated."
      ],
      "chips": [
        "VECTRA-01",
        "p46/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v046.jpg",
      "cap": "Protocol page 46 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 47 of 221 · h Single ECG is required; if QTcF is at the near-exclusion threshold (450-470 ms) or…",
      "audio": [
        "h Single ECG is required; if QTcF is at the near-exclusion threshold (450-470 ms) or machine/read quality is inadequate, repeat up to 2 additional ECGs within 5 to 10 minutes of the first ECG. Additional ECGs may be performed if clinically indicated during the treatment period. i Blood samples can be collected up to 72 hours prior to Day 1 of each cycle.",
        "Haematology and chemistry results, as well as AEs, must be assessed within 48 hours prior to dosing with study intervention. Refer to the locally approved Prescribing Information or manage in accordance with institutional guidelines for toxicity management and dosing decisions. For chemistry assessments, a comprehensive metabolic panel is required during treatment and during the Safety Follow-up period.",
        "A basic metabolic panel (including serum creatinine) is sufficient for the Long-term Follow-up period. j Urinalysis, to include full and dipstick testing at timepoints shown, and reflex microscopic testing as needed. Additional urinalysis assessments may be performed if clinically indicated. k Collection timepoints to align with scheduled follow-up visits. l Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before randomisation.",
        "A P S M A PET/CT scan taken up to 42 days before randomisation can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval). Central confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be determined by central readers before the participant can be randomised.",
        "To ensure the screening scan remain as close as possible to randomisation, the scans must be submitted for central confirmation of eligibility as soon as they have been acquired. m P S M A-PET scans must be performed with 1 of the 2 allowed P S M A ligands, gallium-68-P S M A-11 or fluorine-18 D C F P y L. Use of fluorine-18 D C F P y L is prohibited in the EU.",
        "The same radiotracer used at screening (gallium-68-P S M A-11 or fluorine-18 D C F P y L) should be used for follow‑up assessments. n Refer to the site training manual for the PRO window of completion information. o Individual countries may be excluded from selected biomarker sample collections due to logistical or stability constraints, at the Sponsor’s discretion. Details will be captured in the Central Laboratory Manual.",
        "p The same urine sample may be used for both the local laboratory (safety) assessment and the central biomarker assessment. Please refer to the Central Laboratory Manual for detailed instructions.",
        "q Select one of the following ARPIs: -Abiraterone: 1,000 mg orally once daily on empty stomach (no food 2 hours before and 1 hour after) in combination with prednisone/prednisolone until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met.",
        "-Enzalutamide: 160 mg (four 40 mg capsules) orally once daily with or without food until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. -Deutenzalutamide (China only): 80 mg orally once daily until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. Dose changes will be recorded in the eCRF.",
        "r Required only for participants on abiraterone. Oral prednisone/prednisolone 5 mg twice daily throughout abiraterone treatment. Abbreviations: FU, follow-up; N/A, not applicable; SSE, symptomatic skeletal event."
      ],
      "chips": [
        "VECTRA-01",
        "p47/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v047.jpg",
      "cap": "Protocol page 47 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 48 of 221 · Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment…",
      "audio": [
        "Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment period every 4 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Informed consent X 5.1 and",
        "Appendix A 3 Informed consent: Optional Genomics Initiative Research (optional) c X 8.7 Study procedures and safety assessments Inclusion and exclusion criteria X 5.1 and 5.2 Randomisation X d 6.3 Demographics X 8.1.1 Histopathology records X 8.1.2 Medical history X X (C1 only) 8.1.2 Concomitant medication review X X X 6.9 and 8.1.2 AE monitoring X X X X e X e 8.4 Physical examination X f X X 8.3.1 Vital signs X X g X 8.3.2 Weight X X X 8.3.1 Height X 8.3.1 E C O G",
        "performance status X X X 8.3.5.1 ECG (12-lead) h X As clinically indicated 8.3.3 Local laboratory assessments Haematology i X X X X 8.3.4"
      ],
      "chips": [
        "VECTRA-01",
        "p48/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v048.jpg",
      "cap": "Protocol page 48 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 49 of 221 · Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment…",
      "audio": [
        "Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment period every 4 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Chemistry i X X X X X 8.3.4",
        "Urinalysis j X every 4 weeks X X k 8.3.4 Coagulation X As clinically indicated 8.3.4 PSA X D1 of all 6 cycles, then every 8 weeks until B I C R-assessed rPD by RECIST 1.1 and/or PCWG3 8.3.4 Serum/plasma testosterone X X (C4 only) 8.3.4 Imaging and efficacy assessments RECIST 1.1/PCWG3 assessment (CT/MRI of abdomen, chest and pelvis with contrast + 99mTc bone scan) X l every 8 weeks ( plus or minus 1 week) for the first 32 weeks and then Q12W ( plus or minus 1 week) until",
        "RECIST 1.1 and/or PCWG3 radiographic progression verified by B I C R. Scans should be anchored to randomisation.",
        "8.2.1.2 P S M A PET/CT scan m X l Optional at Week 21 plus or minus 1 week and at time PSA increase ( greater than or equal to 25% and greater than or equal to 2 ng/mL compared to nadir as per PCWG3-defined PSA progression) 8.2.1.1 and 8.2.1.3 SSE assessment X X X X X 9.4.2.2.5 eCOA training and setup X (C1 only) 8.2.4 BPI-SF (Item 3 only) n D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.1 Analgesic log n",
        "D1-D7 of each 6-week cycle (ie, 1 week on and 5 weeks off) until 18 weeks post-PD, and also at end of treatment 8.2.4.2 PRO-CTCAE n C1D1, then once every week for the first 12 weeks, and then once every 6 weeks X 8.2.4.3"
      ],
      "chips": [
        "VECTRA-01",
        "p49/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v049.jpg",
      "cap": "Protocol page 49 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 50 of 221 · Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment…",
      "audio": [
        "Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment period every 4 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 PGI-TT n C1D1, then once every",
        "week for the first 12 weeks, and then once every 6 weeks X 8.2.4.4 EORTC IL66 n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.5 PGIS n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.6 EQ-5D-5L n C1D1, then once every 6 weeks until 18 weeks post-PD, and also at end of treatment 8.2.4.7 Survival status X X 7.1.3 and 8.2.3 Subsequent anticancer treatment X X 7.1.3 Biomarker assessments o Blood",
        "for plasma ctDNA X (C1D1 then once every 4 weeks until Week 21) X 8.8.1 Blood for protein expression (RNA sequencing and proteomics) c X (C1D1 then once every 4 weeks until Week 9) X 8.8.1 Blood for PBMC isolation and cytokine/chemokine analysis c X (C1D1 then once every 4 weeks until Week 9) X 8.8.1 Urine sample for biomarker analysis c,p X (C1D1 then once every 4 weeks until Week 21) X 8.8.1 Mandatory screening FFPE tumour sample (archival or newly acquired biopsy) X 8.8.1",
        "Optional on-treatment FFPE tumour sample X (Collect once, at any time during the treatment period) 8.8.2"
      ],
      "chips": [
        "VECTRA-01",
        "p50/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v050.jpg",
      "cap": "Protocol page 50 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 51 of 221 · Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment…",
      "audio": [
        "Table 4: Schedule of Activities - Arm B (Radium-223) Procedure a Screening Treatment period every 4 weeks end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 D1 Window ( plus or minus days) N/A C1 within 7 days of randomisation plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Optional FFPE tumour sample at",
        "progression X (At disease progression) 8.8.2 Optional Genomics Initiative: exploratory genomics and multi-omics sample c X (C1 only) 8.7 Study intervention administration Radium-223 dichloride, 55 kilobecquerels per kilogram IV, every 4 weeks q X 6.1 Note: All assessments on treatment days are to be performed prior to study intervention administration, unless otherwise indicated.",
        "a Imaging and efficacy assessments must be anchored to the randomisation visit, even if dose is delayed. All other assessments are tied to dosing. b To be conducted approximately 28 days from the last dose of radium-223 or prior to the initiation of subsequent anticancer treatment (outside of what is allowed on-study), whichever comes first. c Not applicable to participants in China.",
        "d Randomisation should occur at the end of the screening period, after participant eligibility has been confirmed. e SAEs which are deemed causally related by investigators and all AESIs will be collected. f Full physical examination is required at screening, with targeted physical examinations thereafter.",
        "g All vital signs (blood pressure, pulse, respiratory rate, body temperature, and oxygen saturation) will be performed prior to radium-223 administration, with blood pressure, pulse, and respiratory rate assessed within 15-30 minutes pre-dose and repeated as clinically indicated. h Single ECG is required; if QTcF is at the near-exclusion threshold (450-470 ms) or machine/read quality is inadequate, repeat up to 2 additional ECGs within 5 to 10 minutes of the first ECG.",
        "Additional ECGs may be performed if clinically indicated during the treatment period. i Blood samples can be collected up to 72 hours prior to Day 1 of each cycle. Haematology and chemistry results, as well as AEs, must be assessed within 48 hours prior to dosing with study intervention. Refer to the locally approved Prescribing Information or manage in accordance with institutional guidelines for toxicity management and dosing decisions.",
        "For chemistry assessments, a comprehensive metabolic panel is required during treatment and during the Safety Follow-up period. A basic metabolic panel (including serum creatinine) is sufficient for the Long-term Follow-up period. j Urinalysis, to include full and dipstick testing at timepoints shown, and reflex microscopic testing as needed. Additional urinalysis assessments may be performed if clinically indicated.",
        "k Collection timepoints to align with scheduled follow-up visits."
      ],
      "chips": [
        "VECTRA-01",
        "p51/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v051.jpg",
      "cap": "Protocol page 51 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 52 of 221 · l Screening scans for RECIST 1",
      "audio": [
        "l Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before randomisation. A P S M A PET/CT scan taken up to 42 days before randomisation can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval). Central confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be determined by central readers before the participant can be randomised.",
        "To ensure the screening scan remain as close as possible to randomisation, the scans must be submitted for central confirmation of eligibility as soon as they have been acquired. m P S M A-PET scans must be performed with 1 of the 2 allowed P S M A ligands, gallium-68-P S M A-11 or fluorine-18 D C F P y L. Use of fluorine-18 D C F P y L is prohibited in the EU.",
        "The same radiotracer used at screening (gallium-68-P S M A-11 or fluorine-18 D C F P y L) should be used for follow‑up assessments. n Refer to the site training manual for the PRO window of completion information. o Individual countries may be excluded from selected biomarker sample collections due to logistical or stability constraints, at the Sponsor’s discretion. Details will be captured in the Central Laboratory Manual.",
        "p The same urine sample may be used for both the local laboratory (safety) assessment and the central biomarker assessment. Please refer to the Central Laboratory Manual for detailed instructions. q Radium-223 dichloride 55 kilobecquerels (1.49 microcurie)/kg body weight, every 4 weeks ( plus or minus 3 days, but doses should not be > 8 weeks apart), administered as a slow IV injection over 1 minute for up to 6 injections.",
        "Treatment continues until completion of 6 injections, disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. Abbreviations: FU, follow-up; N/A, not applicable; SSE, symptomatic skeletal event."
      ],
      "chips": [
        "VECTRA-01",
        "p52/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v052.jpg",
      "cap": "Protocol page 52 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 53 of 221 · INTRODUCTION Actinium (225Ac) zadavotide guraxetan (AZD2265 [FPI-2265]; hereafter…",
      "audio": [
        "2 INTRODUCTION Actinium (actinium-225) zadavotide guraxetan (A Z D 2265 F P I 2265; hereafter referred to as actinium-225 zadavotide guraxetan; also known as actinium-225-P S M A I and T) is an RC that consists of a moiety targeting P S M A linked to the radionuclide actinium-225. Following high affinity binding to P S M A-expressing tumour cells, the α-emission from actinium-225 delivers radiation to those cells, inducing complex DNA damage and consequent tumour cell death.",
        "actinium-225 zadavotide guraxetan is being investigated as a treatment for adult patients with P S M A-positive m C R P C who have progressed following prior treatment with an A R P I, taxane-based chemotherapy for metastatic disease, and 1 line of P S M A-directed β-emitting RC.",
        "2.1 Study Rationale lutetium-177 vipivotide tetraxetan (lutetium-177-P S M A-617; Pluvicto®) is the most widely used RC for the treatment of adult patients with P S M A-positive m C R P C who have already been treated with other anticancer treatments. However, there is still a population of patients who either do not respond to, or relapse after treatment with, β-emitting therapies such as lutetium-177-P S M A-617, representing an unmet need.",
        "Yadav et al suggested that clinical outcomes improved in the patient cohort who were eventually treated with other anticancer treatment options (including actinium-225-based RC) after the discontinuation of lutetium-177-P S M A-617 (Yadav et al 2021). These findings favour treating patients with other advanced treatment options, such as α-emitting RCs, leading to the initiation of clinical studies using actinium-225-based RCs.",
        "These clinical studies have demonstrated that patients pre-treated with lutetium-177 have favourable responses (Zacherl et al 2021; Feuerecker et al 2021). 2.2 Background 2.2.1 Prostate Cancer Prostate cancer is the most commonly diagnosed cancer in men. In the United States, prostate cancer is the second most common cause of cancer-related death (Siegel et al 2023).",
        "The American Cancer Society estimated that in 2025, there would be 313,780 new cases of prostate cancer and 35,770 deaths from the disease (American Cancer Society 2025). Within 5 years of primary diagnosis, approximately 10% to 20% of patients with prostate cancer will develop CRPC, defined as disease progression after an initial response to A D T; among individuals with CRPC, over 80% will present with metastatic disease (Labriola et al 2021).",
        "Patients with m C R P C have a poor prognosis, with a median overall survival typically ranging from 13 to 23 months (Moreira et al 2017). Disease progression is characterised by progressive deterioration in health-related QoL, and until recently, therapeutic options were limited. More recently, multiple approved agents have demonstrated overall survival benefit in patients previously"
      ],
      "chips": [
        "VECTRA-01",
        "p53/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v053.jpg",
      "cap": "Protocol page 53 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 54 of 221 · treated with docetaxel (de Bono et al 2011; de Bono et al 2010; Fizazi et al 2012;…",
      "audio": [
        "treated with docetaxel (de Bono et al 2011; de Bono et al 2010; Fizazi et al 2012; Parker et al 2013; Scher et al 2012).",
        "2.2.2 Current Treatment and Unmet Medical Need Currently, approved therapeutic options for m C R P C include systemic treatments such as chemotherapy (docetaxel or cabazitaxel), ARPIs (eg, abiraterone or enzalutamide), radium-223 treatment (for patients with bone metastases only), immunotherapy (sipuleucel-T or pembrolizumab), and PARP inhibitors including olaparib (approved for HRR gene-mutated m C R P C), talazoparib in combination with enzalutamide (approved HRR",
        "gene-mutated m C R P C in the US and m C R P C in the EU), and rucaparib (only approved in the US for BRCA-mutated m C R P C) (Sayegh et al 2022; Agarwal et al 2023). These treatments have shown improved clinical outcomes, and most have demonstrated QoL advantages as well. However, primary and acquired resistance leads to inevitable progression, highlighting a persistent unmet need for more effective therapies.",
        "In 2022, a first-in-class P S M A-targeted RC, lutetium-177 vipivotide tetraxetan (lutetium-177-P S M A-617) was approved for the treatment of adult patients with P S M A-positive m C R P C who have been treated with androgen receptor pathway inhibition and taxane-based chemotherapy.",
        "This approval was based on the Phase III VISION study (NCT03511664) in which treatment with lutetium-177-P S M A-617 demonstrated improved overall survival (median overall survival: 15.3 versus 11.3 months; HR = 0.62) and radiographic P F S (median radiographic P F S: 8.7 versus 3.4 months; HR = 0.40) compared to standard of care (Sartor et al 2021).",
        "In 2025, the FDA expanded lutetium-177 vipivotide tetraxetan to P S M A-positive m C R P C after 1 A R P I and before chemotherapy (FDA 2025). The approval was based on data from the Phase III PSMAfore study, which demonstrated a significant reduction in the risk of disease progression or death versus A R P I (Morris et al 2024).",
        "However, there is still an unmet need for the development of novel treatments that can prolong survival and improve QoL in patients with PD after treatment with lutetium-177-P S M A-617. After treatment with P S M A-directed β-emitting RC, many patients will progress with P S M A-positive disease. As a result, P S M A-directed RCs with alternative isotope, such as α-emitters (eg, actinium-225 zadavotide guraxetan) may expand treatment options for m C R P C.",
        "2.2.3 P S M A P S M A is a type II 750 amino acid transmembrane glycoprotein (also known as folate hydrolase I or glutamate carboxypeptidase II) with both an intracellular and extracellular domain (Silver et al 1997; Sweat et al 1998; Jones et al 2020; Yao et al 2010). P S M A is expressed on benign prostate epithelium and on prostate cancer cells, and also tissues such as the kidneys, small intestine, and salivary glands (Mhawech-Fauceglia et al 2007; Nishida et al 2022).",
        "P S M A expression on prostate cancer cells is 1,000-fold higher than that on normal"
      ],
      "chips": [
        "VECTRA-01",
        "p54/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v054.jpg",
      "cap": "Protocol page 54 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 55 of 221 · tissues, making it an ideal target for specific delivery of toxins to prostate cancer",
      "audio": [
        "tissues, making it an ideal target for specific delivery of toxins to prostate cancer. 2.2.4 Product Development Rationale Patients who either do not respond to, or progress after, treatment with β-emitting P S M A-targeted therapies such as lutetium-177-P S M A-617, represent a population with unmet need. In a retrospective series of patients who progressed after lutetium-177-P S M A-617 therapy, Yadav et al.",
        "reported the potential to improve clinical outcomes with subsequent anticancer treatment options in a study where 16 of 27 participants had received actinium-225-based RC (Yadav et al 2021). These observations support treating patients with other advanced treatment options, such as α-emitting RCs, leading to the initiation of actinium-225-based RC clinical studies.",
        "These studies have demonstrated that patients previously treated with P S M A-directed β-emitting RC had favourable responses (Zacherl et al 2021; Feuerecker et al 2021; Yadav et al 2021). In a multicentre, retrospective study across 7 centres in Australia, India, Germany, and South Africa, the safety and antitumour activity of actinium-225-P S M A RC was evaluated in 488 men with m C R P C.",
        "Participants with m C R P C who were treated with 1 or more cycles of 8 megabecquerels actinium-225-P S M A RC were included. Prior lines of m C R P C therapy included taxane-based chemotherapy, androgen-receptor-axis inhibitors, P S M A-directed β-emitting RC, and radium-223 dichloride.",
        "The median overall survival was 15.5 months (95% CI: 13.4, 18.3) and median PFS was 7.9 months (95% CI: 6.8, 8.9), suggesting that actinium-225-P S M A RC shows antitumour activity in m C R P C and supporting actinium-225-P S M A RC as a viable treatment option in patients treated with previous lines of approved agents (Sathekge et al 2024).",
        "Furthermore, the Phase II part of the F P I 2265-202 study (AlphaBreak) in patients with m C R P C who progressed after lutetium-177-P S M A-617 therapy has shown encouraging activity.",
        "Preliminary data from Arms 6 and 7 (actinium-225-P S M A I and T [actinium-225 zadavotide guraxetan], 10/12 megabecquerels every 6 weeks) demonstrate PSA response including P S A 50 declines in participants previously treated with lutetium-177-P S M A-617 (see Section 2.3.2 for detailed efficacy data).",
        "2.2.5 actinium-225 Zadavotide Guraxetan actinium-225 zadavotide guraxetan is an RC composed of 3 components: a small-molecule P S M A-targeting moiety, a linking group, and a radiometal chelator, coupled with the α particle-emitting isotope, actinium-225. The active substance, actinium-225, is an α-emitting radionuclide with a half-life of 9.92 days.",
        "Decay of actinium-225 occurs via a cascade ending in stable bismuth-209 via 6 short-lived daughter radionuclides and emission of 4 α-particles. The targeting vector utilises the glu-urea-lys sequence, which is an inhibitor capable of binding to the domain of P S M A. DOTAGA (1,4,7,10-tetraazacyclododecane-1-[glutamic acid]-4,7,10triacetic acid) is a radiometal chelator. For further information about actinium-225 zadavotide guraxetan, see the IB."
      ],
      "chips": [
        "VECTRA-01",
        "p55/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v055.jpg",
      "cap": "Protocol page 55 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 56 of 221 · Protocol body · page 56",
      "audio": [
        "2.3 Benefit/Risk Assessment The first publication of clinical results for compassionate use therapy with actinium-225-P S M A I and T presented the data from 14 consecutive participants with m C R P C. Any PSA decline was observed in 57% of participants, and a P S A 50 in 21% of participants. In the subgroup of 11 participants with prior RC treatment, any PSA decline was observed in 73% and a P S A 50 was observed in 45% of participants.",
        "All but 1 participant experienced xerostomia, all of Grade 1 or 2 severity. Eight participants who had pre-existing xerostomia after P S M A-directed β-emitting RC showed no worsening after treatment with actinium-225 zadavotide guraxetan. Grade 3 anaemia was observed in 21% of participants; however, all had pre-existing anaemia. Grade 3 leukopenia was observed in 1 participant, who discontinued treatment.",
        "Other non-haematologic AEs included anorexia, nausea, weight loss, dysgeusia, and fatigue, all of which were of Grade 1 or 2 severity. No Grade 4 haematologic, Grade 3 or 4 renal, or non-haematologic AEs were observed during follow-up (Zacherl et al 2021).",
        "The clinical data from actinium-225 zadavotide guraxetan in the Phase 2 AlphaBreak study Arm 7 support a favourable risk/benefit profile at the RP3D of 12 megabecquerels every 6 weeks for up to 6 cycles, as described in Section 2.3.2 and Section 4.3. As of 01 April 2026, the rate of confirmed P S A 50 was 56.5% in Arm 7 (RP3D). The highest proportion of durable PSA50s lasting at least 12 weeks occurred in Arm 7.",
        "More participants discontinued treatment due to progression in Arm 6 (40.9%) than Arm 7 (21.7%). In Arm 7, the majority of TEAEs were Grades 1 to 2. The rate of Grade greater than or equal to 3 AEs was 26.1%. The rate of discontinuation of treatment due to TEAEs was lower in Arm 7 (8.7%) than Arm 6 (18.2%).",
        "Dosimetry and its Role in Defining Benefit/Risk Methodology and biological interpretation of organ-specific radiation delivered dose for therapeutic radiopharmaceuticals, including actinium-based agents, are evolving (Morris et al 2026; Wahl et al 2021). Therefore, while dosimetry can inform estimates of organ irradiation, its utility for predicting organ risk or guiding safety monitoring is limited at present.",
        "Clinical benefit with actinium-225 zadavotide guraxetan is contingent on demonstrated antitumour activity; without efficacy, there is no therapeutic benefit to offset risk. Furthermore, while dosimetry data play a valuable role in supporting safety information for product labelling, clinical data, particularly with extended safety follow-up as planned in this study, would offer greater value for risk assessment with dosimetry as an exploratory endpoint.",
        "Most observed toxicities for P S M A-directed actinium-based radiopharmaceuticals observed to date are acute, presenting during the treatment course. The notable late-occurring toxicity of renal impairment is offset by the underlying advanced disease severity in the target patient population: patients often succumb to disease progression before late toxicities manifest.",
        "A summary of the potential risks and benefits of actinium-225 zadavotide guraxetan is provided in the current IB."
      ],
      "chips": [
        "VECTRA-01",
        "p56/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v056.jpg",
      "cap": "Protocol page 56 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 57 of 221 · Based on the available clinical data, summarised above, 225Ac zadavotide guraxetan…",
      "audio": [
        "Based on the available clinical data, summarised above, actinium-225 zadavotide guraxetan is well-tolerated and supports further clinical investigation in participants with m C R P C. 2.3.1 Risk Assessment Risks for actinium-225 zadavotide guraxetan are shown in Table 5. For participants receiving standard of care (cabazitaxel, A R P I, or radium-223), refer to the local Prescribing Information for risks.",
        "Table 5: Risk Assessment Potential risk of clinical significance Summary of data/Rationale for risk Mitigation strategy Study intervention: actinium-225 zadavotide guraxetan Thrombocytopenia (Important identified risk) See IB Sections 5.2, 5.4, and 5.5.2 Eligibility criteria: exclude participants with low haematological parameters as well as transfusion-dependent participants. Monitor complete blood counts and follow the TMGs.",
        "Nephrotoxicity (Important potential risk) See IB Sections 5.2, 5.4, and 5.5.2 Eligibility criteria: exclude participants with insufficient renal function. Monitor creatinine clearance and follow the TMGs. Leukopenia (Important potential risk) See IB Sections 5.2 and 5.5.2 Eligibility criteria: exclude participants with low haematological parameters as well as transfusion-dependent participants. Monitor complete blood counts and follow the TMGs.",
        "Anaemia (Identified risk) See IB Sections 5.2, 5.4, and 5.5.2 Eligibility criteria: exclude participants with low haematological parameters as well as transfusion-dependent participants. Monitor complete blood counts and follow the TMGs. Xerophthalmia (Identified risk) See IB Sections 5.2 and 5.5.2 Eligibility criteria: exclude persistent baseline dry eye or dry mouth Grade > 1 from prior RC. Physical examinations, monitor for clinical signs, eg, dry eye and keratitis.",
        "Further ophthalmological investigations if clinically indicated."
      ],
      "chips": [
        "VECTRA-01",
        "p57/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v057.jpg",
      "cap": "Protocol page 57 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 58 of 221 · Table 5: Risk Assessment Potential risk of clinical significance Summary of…",
      "audio": [
        "Table 5: Risk Assessment Potential risk of clinical significance Summary of data/Rationale for risk Mitigation strategy Xerostomia (Identified risk) See IB Sections 5.2 and 5.5.2 Eligibility criteria: with the exception of Grade 2 xerostomia, stable Grade 2 toxicities related to prior radiation may be allowed at the discretion of the investigator.",
        "Xerostomia mitigation may include salivary gland cooling, sodium bicarbonate mouthwash for 3 days, hydration (optionally with post‑dose 0.9% saline), and artificial saliva/xylitol products. These measures are optional and depend on centre practice. Gastrointestinal disorders (constipation, diarrhoea, nausea, vomiting, decreased weight/loss of appetite) (Identified risk) See IB Sections 5.2 and 5.5.2 Monitor for treatment-emergent clinical signs.",
        "Fatigue (Identified risk) See IB Sections 5.2 and 5.5.2 Systemic corticosteroids are allowed when used at dose levels of up to 10 mg/day of prednisone-equivalent or intermittently for symptom management (eg, fatigue). Monitor for clinical signs. Manage per institutional guidelines and standard of care, which may include psychotherapy, physical therapist, and nutritionist/dietitian consult.",
        "Infusion-related reactions (Potential risk) Infusion-related reactions are considered a potential risk due to IV administration. See IB Section 5.5.2 Participants will be closely monitored during administration of study intervention and for no less than 2 hours after administration. Sites should follow the TMGs. Embryo-foetal toxicity (Potential risk) There are no adequate and well-controlled studies of its effect on reproductive status.",
        "However, radioactive emissions may harm the foetus in pregnant women. See IB Section 5.5.2 Contraception requirements, lifestyle modification guidance, and avoidance of donation of sperm during required contraception period."
      ],
      "chips": [
        "VECTRA-01",
        "p58/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v058.jpg",
      "cap": "Protocol page 58 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 59 of 221 · Table 5: Risk Assessment Potential risk of clinical significance Summary of…",
      "audio": [
        "Table 5: Risk Assessment Potential risk of clinical significance Summary of data/Rationale for risk Mitigation strategy Fertility disorder (Potential risk) There are no adequate and well-controlled studies of its effect on reproductive status. However, radioactive emissions may cause temporary or permanent infertility. See IB Section 5.5.2 Fertility preservation considerations before receiving first dose.",
        "Secondary primary malignancies (Potential risk) Inherent long-term risk associated with radiation exposure. Long-term cumulative radiation exposure may be associated with an increased risk of renal toxicity, secondary malignancies, including MDS, leukaemia, lymphoma, or any other malignancy. See IB Section 5.5.2 Blood samplings per SoAs and monitor for treatment-emergent clinical signs.",
        "Bone fractures (Potential risk) See IB Sections 5.2 and 5.5.2 Participants should be closely monitored for bone health by utilising standard risk assessment tools (eg, https://www.fraxplus.org), imaging scans, and biomarkers. Administration of bone-protecting agents as well as calcium/vitamin D supplements should be considered in accordance with established guidelines/standard of care and institutional protocols.",
        "Study procedures Inadvertent radiation exposure (Potential risk) Environmental/occupational risk is associated with radiation exposure. See IB Section 5.5.2 Decontamination protocols and A L A R A should be followed. Once completed, individuals should be evaluated by medical staff for clinical signs of radiation toxicity, administered supportive care, and monitored for decreases in blood counts.",
        "Depending on the degree of exposure, individuals may be monitored long term (eg, 1 to 5 years) for the emergence of late-onset radiation toxicity (eg, MDS, AML, and radiation nephropathy). Site staff should also coordinate with the Radiation Safety Officer to ensure regulatory compliance with documentation of the event."
      ],
      "chips": [
        "VECTRA-01",
        "p59/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v059.jpg",
      "cap": "Protocol page 59 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 60 of 221 · Table 5: Risk Assessment Potential risk of clinical significance Summary of…",
      "audio": [
        "Table 5: Risk Assessment Potential risk of clinical significance Summary of data/Rationale for risk Mitigation strategy Blood draws The risks in relation to study procedures are consistent with those of oncology clinical studies. Study procedures are minimised to what is essential to meet the objectives of the study. The risks associated with key study procedures are outlined in the participant information.",
        "As cumulative radiation exposure may lead to irreversible toxicities, the RP3D of actinium-225 zadavotide guraxetan permits a maximum of 6 cycles (up to a cumulative dose of 72 megabecquerels). Similarly, radium-223 is approved for up to 6 cycles. Justification for Enrolling Participants With Baseline Grade 1 Xerostomia AlphaBreak (post-Pluvicto m C R P C population) enrolled 45 participants in Part B (DCO 01 April 2026).",
        "At baseline, 26 participants (59.1%) had no ongoing xerostomia (Arm 6 [10 megabecquerels] n = 13; Arm 7 [12 megabecquerels] n = 13), and 18 participants (40.9%) had ongoing xerostomia at baseline (Arm 6 [10 megabecquerels] n = 8; Arm 7 [12 megabecquerels] n = 10).",
        "In participants with ongoing xerostomia at baseline (N = 18), the overall incidence of treatment-emergent xerostomia was lower and reported in 8 participants (44.4%) compared with participants without xerostomia at baseline (20 participants [76.9%]), yet events in participants with ongoing xerostomia were more clinically consequential when they occurred: 1 participant (5.6%) experienced a Grade 1 event and 7 participants (38.9%) experienced a Grade 2 event, with 2",
        "participants (11.1%) requiring dose reductions. Dose reduction provided partial benefit, reducing xerostomia severity in at least one case and stabilising symptoms in the other. None were reported as serious or Grade greater than or equal to 3, and no discontinuations were attributable to xerostomia. Xerostomia in this post-Pluvicto m C R P C population was non-serious with no Grade 3 or higher xerostomia TEAEs reported across both subgroups.",
        "Both subgroups demonstrated acceptable safety and tolerability of xerostomia within the late-line m C R P C context: participants without baseline xerostomia experienced more frequent, but mostly Grade 1 xerostomia TEAEs, while those with ongoing baseline xerostomia experienced fewer xerostomia TEAEs overall but a higher likelihood of worsening to Grade 2 from Grade 1 baseline requiring 2 instances of dose modifications.",
        "The safety profile encompassing all TEAEs (xerostomia and non-xerostomia TEAEs) was broadly consistent across both subgroups. There were no serious TRAEs and a single Grade 3 related TRAE (hypertension) reported in the ongoing baseline xerostomia subgroup. Ongoing baseline xerostomia was associated with modestly higher incidence of Grade 2 events but does not materially alter the overall risk profile, which remains characterised by predominantly"
      ],
      "chips": [
        "VECTRA-01",
        "p60/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v060.jpg",
      "cap": "Protocol page 60 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 61 of 221 · mild to moderate TRAEs and no serious TRAEs across both populations",
      "audio": [
        "mild to moderate TRAEs and no serious TRAEs across both populations. Including both subgroups ensures the study population is representative of the drug’s intended use and to support the generalisability of findings in late-line m C R P C after a prior β-emitting RC.",
        "By this stage, participants face limited options, cumulative treatment burdens, and pre-existing toxicities (including salivary gland dysfunction from prior RC therapy), yet remain candidates for therapies with potential for disease control and symptomatic benefit.",
        "Excluding individuals with ongoing xerostomia at baseline would omit a clinically representative subgroup, reduce generalisability, and restrict access to investigational treatments for those most likely to need them. The safety profile in participants with ongoing xerostomia at baseline supports their inclusion in clinical development with proactive monitoring and predefined risk mitigation strategies to ensure consistent monitoring and timely intervention.",
        "2.3.2 Benefit Assessment Patients with P S M A-positive m C R P C who have progressed following treatment with A R P I, taxane-based chemotherapy, and P S M A-directed β-emitting RC represent a population of high unmet need. As of 01 April 2026, all participants in AlphaBreak have had the opportunity to receive all 6 cycles.",
        "A total of 56.5% of participants in Arm 7 (actinium-225 zadavotide guraxetan dose: 12 megabecquerels) had P S A 50 responses by Week 12 versus 38.1% of participants in Arm 6 (actinium-225 zadavotide guraxetan dose: 10 megabecquerels). Similarly, the proportion of participants with confirmed P S A 50 responses remained higher in Arm 7 than in Arm 6, (56.5% versus 33.3%, respectively).",
        "Furthermore, a higher proportion of P S A 50 responses lasted at least 12 consecutive weeks in Arm 7 than in Arm 6 (50.0% versus 33.3%, respectively).",
        "While the O R R remained low in both arms, the data showed that both DCR and CBR - defined as participants achieving an overall response of CR or PR, or SD lasting greater than or equal to 14 weeks per PCWG3-modified RECIST 1.1 criteria - continued to support the selection of 12 megabecquerels every 6 weeks as the actinium-225 zadavotide guraxetan dose. In Arm 7, DCR was reported as 100.0% compared to 85.7% in Arm 6.",
        "Similarly, CBR was higher in Arm 7 than Arm 6 (100.0% versus 71.4%, respectively). Notably, the majority of participants in both arms had disease involving the bone, 86.4% in Arm 6 and 100.0% in Arm 7. Best overall bone progression status showed that more participants had a best response of non-PD in Arm 7 versus Arm 6 (21 participants [91.3%] versus 13 participants [59.1%], respectively).",
        "Similarly, fewer participants had a best response of PD in Arm 7 compared to Arm 6 (1 participant [4.3%] versus 2 participants [9.1%], respectively) or unconfirmed PD (3 participants [13.6%] in Arm 6 and 1 participant (4.3%) in Arm 7)."
      ],
      "chips": [
        "VECTRA-01",
        "p61/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v061.jpg",
      "cap": "Protocol page 61 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 62 of 221 · Taken together, the efficacy data from Arm 6 (10 MBq) and Arm 7 (12 MBq) provide…",
      "audio": [
        "Taken together, the efficacy data from Arm 6 (10 megabecquerels) and Arm 7 (12 megabecquerels) provide support for a dose of 12 megabecquerels based on key clinical measures including P S A 50, DCR, and best bone progression status per PCWG3. 2.3.3 Radiation Dose From Imaging Assessments In this study, potential participants will undergo P S M A PET/CT scans to evaluate P S M A positivity at screening.",
        "Either gallium-68-P S M A-11 or fluorine-18 D C F P y L radiotracers may be used for this purpose; however, use of gallium-68-P S M A-11 is recommended whenever feasible. For sites in the EU, only gallium-68-P S M A-11 is permitted, in accordance with regulatory recommendations.",
        "For fluorine-18 D C F P y L (applicable to non-EU sites only), administration of 370 megabecquerels to a 70 kg adult results in an estimated effective dose of 4.3 mSv, with absorbed doses of 45.5 mGy to the kidneys, 13.7 mGy to the liver, and 10 mGy to the spleen (PYLARIFY Prescribing Information).",
        "For gallium-68-P S M A-11, administration of the maximum recommended activity of 259 megabecquerels results in an estimated effective dose of 4.4 mSv, with absorbed doses of 96.2 mGy to the kidneys, 25.4 mGy to the urinary bladder, and 16.8 mGy to the spleen (Gallium 68 P S M A-11 Injection Prescribing Information).",
        "The low-dose CT component used for attenuation correction contributes an additional approximately 6.4 mSv to the total radiation exposure (Mostafapour et al 2024). In addition, participants will undergo conventional diagnostic imaging including thorax-abdomen-pelvis CT scans and bone scintigraphy to monitor disease response and assess treatment efficacy.",
        "Per the study protocol, diagnostic CT scans and bone scans will be performed every 8 weeks during the first 32 weeks, and subsequently Q12W. This imaging schedule aligns with the recommendations of the PCWG3 consensus for clinical trials in CRPC (Scher et al 2016). The expected ionising radiation dose from a single diagnostic CT scan of chest-abdomen-pelvis is approximately 21 mSv (McCollough et al 2015).",
        "With an estimated 7 CT scans performed during the study (corresponding to 1 year of imaging, assuming the patient does not experience disease progression), participants may receive a cumulative radiation dose of approximately 147 mSv from CT imaging alone. Whole body bone scintigraphy contributes an additional radiation dose of about 4 mSv per scan (Adams et al 2026), resulting in an estimated cumulative exposure of approximately 28 mSv.",
        "For participants selected to undergo dosimetry sub-study, imaging procedures will include a total of 6 post-dose SPECT/CT acquisitions (each paired with a low-dose CT): up to 4 during Cycle 1 and a total of 2 during Cycles 3 and 6. Given that a single low-dose CT scan delivers an estimated ionising radiation dose of approximately 6.4 mSv, these procedures are expected to contribute an additional cumulative radiation exposure of roughly 38.4 mSv.",
        "Overall, the risk to participants associated with radiodiagnostic procedures, including both radiological and nuclear medicine imaging, is considered moderate according to International Commission on Radiological Protection Publication 62 (Table 6; ICRP 1992). However, this"
      ],
      "chips": [
        "VECTRA-01",
        "p62/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v062.jpg",
      "cap": "Protocol page 62 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 63 of 221 · level of risk is justified by the significant clinical benefit these procedures…",
      "audio": [
        "level of risk is justified by the significant clinical benefit these procedures provide in the diagnosis and management of a life-threatening condition. All imaging activities are consistent with the A L A R A (As Low As Reasonably Achievable) principle, as: 1. The type, frequency, and timing of conventional diagnostic imaging used in this study adhere to established international imaging consensus recommendations. 2.",
        "The number and scheduling of SPECT/CT assessments have been optimised to the minimum required to adequately characterise the biodistribution of actinium-225 zadavotide guraxetan. 3. The incremental radiation exposure from radiodiagnostic procedures is minimal when considered in the context of the radiation dose associated with actinium-225 zadavotide guraxetan administration and is further outweighed by the anticipated therapeutic benefits of this treatment.",
        "Table 6 Radiation Exposure From Imaging in This Study (Corresponding to 1 Year, Assuming That a Participant Does Not Progress During the First Year) Study Arm Type of Examination Number Performed Radiation Dose Per Procedure a (mSv) Total Radiation Dose (mSv) Treatment arm CT scan of the chest, abdomen, and pelvis b 7 21 147 Treatment arm Tc bone scan 7 4 28 Treatment arm P S M A PET/CT 1 c 10.8 10.8 Treatment arm dosimetry sub-study actinium-225 zadavotide guraxetan",
        "SPECT/CT 6 6.4 38.4 a Source: Adams et al 2026; McCollough et al 2015; Mostafapour et al 2024. b Preferably with contrast. c Optional P S M A PET/CT scans should be obtained at Week 21 and another upon PSA rise.",
        "2.3.4 Overall Benefit/Risk Conclusion Taking into account the measures taken to minimise risk to participants participating in this study, the potential risks identified in association with actinium-225 zadavotide guraxetan are justified by the anticipated benefits that may be afforded to participants with P S M A-positive m C R P C."
      ],
      "chips": [
        "VECTRA-01",
        "p63/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v063.jpg",
      "cap": "Protocol page 63 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 64 of 221 · OBJECTIVES, ENDPOINTS, AND ESTIMANDS Table 7: Objectives and Endpoints Objectives…",
      "audio": [
        "3 OBJECTIVES, ENDPOINTS, AND ESTIMANDS Table 7: Objectives and Endpoints Objectives Endpoints Dual primary To demonstrate the superiority of actinium-225 zadavotide guraxetan relative to standard of care by assessment of radiographic P F S in participants with m C R P C. radiographic P F S is defined as the time from randomisation to radiographic progression, as assessed by the B I C R per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone), or death due to any cause.",
        "The analysis will include all randomised participants. All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. However, if the participant progresses or dies immediately after 2 or more consecutive missed visits, the participant will be censored at the time of the latest evaluable assessment prior to the 2 missed visits. The measure of interest is the HR of radiographic P F S.",
        "To demonstrate the superiority of actinium-225 zadavotide guraxetan relative to standard of care by assessment of overall survival in participants with m C R P C. overall survival is defined as the length of time from randomisation until the date of death due to any cause. The analysis will include all randomised participants. All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy.",
        "The measure of interest is the HR of overall survival. Secondary To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of PFS in participants with m C R P C. PFS is defined as the time from randomisation to the earliest of progression (defined as radiographic progression assessed by B I C R per RECIST 1.1 and/or PCWG3 criteria, clinical progression, or PSA progression), or death due to any cause.",
        "The analysis will include all randomised participants. All events will be included, regardless of whether the participant withdraws from subsequent therapy and regardless of missed visits. The measure of interest is the HR of PFS. To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of P S A 50 in participants with m C R P C.",
        "P S A 50 is defined as the proportion of participants who achieve a greater than or equal to 50% decrease in PSA from baseline that is confirmed by a second (the next) PSA measurement greater than or equal to 3 weeks later. The analysis will include all randomised participants. All responses will be recorded and included in the analysis dataset, regardless of whether the participant withdraws from therapy or receives another anticancer therapy.",
        "However, participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be counted as responders in the P S A 50 endpoint calculation. Proportion of evaluable participants with confirmed P S A 50 and duration of P S A 50 response."
      ],
      "chips": [
        "VECTRA-01",
        "p64/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v064.jpg",
      "cap": "Protocol page 64 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 65 of 221 · Table 7: Objectives and Endpoints Objectives Endpoints To assess the efficacy of…",
      "audio": [
        "Table 7: Objectives and Endpoints Objectives Endpoints To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of P S A 90 in participants with m C R P C. P S A 90 is defined as the proportion of participants who achieve a greater than or equal to 90% decrease in PSA from baseline that is confirmed by a second (the next) PSA measurement greater than or equal to 3 weeks later. The analysis will include all randomised participants.",
        "All responses will be recorded and included in the analysis dataset, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. However, participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be counted as responders in the P S A 90 endpoint calculation. Proportion of evaluable participants with confirmed P S A 90 and duration of P S A 90 response.",
        "To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of O R R in participants with m C R P C. O R R is defined as the proportion of participants with measurable soft tissue disease at baseline who have a CR or PR as determined by B I C R, per RECIST 1.1 (soft tissue) and PCWG3 criteria (bone). The analysis will include all randomised participants with measurable soft tissue disease at baseline.",
        "Data obtained from randomisation up until progression, or the last evaluable assessment in the absence of progression by B I C R, will be included in the assessment of O R R, regardless of whether the participant withdraws from therapy. Participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond, will not be included as responders in the O R R. The measure of interest is the odds ratio of O R R.",
        "To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of duration of response in participants with m C R P C. duration of response is defined as the time from the date of first documented response until date of documented progression per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone) as determined by B I C R or death in the absence of disease progression. The analysis will include all randomised participants.",
        "All events after achieving confirmed response will be included, regardless of whether the participant discontinues study intervention, receives another anticancer therapy, or clinically progresses prior to RECIST 1.1- and/or PCWG3 criteria (bone)-defined progression. The measure of interest is the median of duration of response."
      ],
      "chips": [
        "VECTRA-01",
        "p65/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v065.jpg",
      "cap": "Protocol page 65 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 66 of 221 · Table 7: Objectives and Endpoints Objectives Endpoints To assess the efficacy of…",
      "audio": [
        "Table 7: Objectives and Endpoints Objectives Endpoints To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of S S E F S in participants with m C R P C. S S E F S is defined as the time from randomisation to the earliest of the following: • Use of radiation therapy to prevent or relieve skeletal symptoms. • Occurrence of new symptomatic pathological bone fractures (vertebral or non-vertebral).",
        "Radiographic documentation is required. A pathological fracture, as determined by investigator, is defined as associated with low or no trauma and deemed to have occurred at a site of bone metastasis. • Occurrence of spinal cord compression. Radiographic documentation is required. • Orthopaedic surgical intervention for bone metastasis. • Death due to any cause. The analysis will include all randomised participants.",
        "All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. The measure of interest is the HR of S S E F S. To evaluate the PK of actinium-225 zadavotide guraxetan. Plasma concentrations of actinium-225 zadavotide guraxetan pre-dose and post-dose. a Plasma PK parameters derived from a population PK model, as permitted by the data. a The PK Analysis Set will be used.",
        "Safety To assess the safety and tolerability of actinium-225 zadavotide guraxetan as compared with standard of care in participants with m C R P C. Incidence of AEs and SAEs, treatment discontinuation due to TEAEs, rate of dose reduction due to TEAEs, rate of dose delays due to TEAEs, change from baseline in vital signs, haematology, clinical chemistry, and urinalysis laboratory results, and ECGs.",
        "The analysis will include all participants who receive any dose of the study interventions. All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. Safety endpoints will include, but are not limited to, the following: • TEAEs, SAEs, AEs leading to dose modifications • Changes from baseline in vital signs, clinical laboratory assessments, ECGs, and physical examinations.",
        "Exploratory To assess the efficacy of actinium-225 zadavotide guraxetan relative to standard of care by assessment of TTPP in participants with m C R P C. TTPP is defined as the time from randomisation to clinically meaningful pain progression based on a 2-point increase from baseline in the BPI-SF Item 3 “worst pain in 24 hours” score and/or initiation of/increase in opiate analgesic use. The analysis will include all randomised participants.",
        "All events will be included, regardless of progression status. The measure of interest is the HR of TTPP."
      ],
      "chips": [
        "VECTRA-01",
        "p66/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v066.jpg",
      "cap": "Protocol page 66 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 67 of 221 · Table 7: Objectives and Endpoints Objectives Endpoints To assess patient-reported…",
      "audio": [
        "Table 7: Objectives and Endpoints Objectives Endpoints To assess patient-reported treatment-related symptoms and tolerability of actinium-225 zadavotide guraxetan relative to standard of care in participants with m C R P C.",
        "Patient-reported tolerability will be described among participants, as treated, using the following outcomes: • Symptomatic AEs: Descriptive summary based on the proportion of participants who experience different levels of symptomatic AEs while on treatment as measured by the PRO-CTCAE. • Overall side-effect bother: Descriptive summary based on the proportion of participants who report each level of overall side-effect bother on the PGI-TT.",
        "The analysis will include all participants who receive any amount of the study interventions. The measure of interest is the proportion of participants who experience different levels of AEs and overall tolerability based on the proportion of participants who report each level of overall side-effect bother. To assess patient-reported physical functioning with actinium-225 zadavotide guraxetan relative to standard of care in participants with m C R P C.",
        "Proportion of participants with maintained or improved physical functioning as measured by EORTC-QLQ-C30 physical function score. The analysis will include all randomised participants. The measure of interest is the proportion of participants with maintained or improved physical functioning. To assess the impact of treatment and disease on health state in participants treated with actinium-225 zadavotide guraxetan relative to standard of care in participants with m C R P C.",
        "Health state will be described among participants, as treated, using the following outcomes: • Proportion of participants with maintained or improved GHS/QoL as measured by the 2 GHS/QoL items in the EORTC-QLQ-C30. • Mean and median change from baseline of EQ-5D-5L VAS. • Proportion of participants reporting different levels of each 5-dimension score on EQ-5D-5L. The analysis will include all participants who receive any amount of the study interventions.",
        "The measures of interest are the proportion of participants with maintained or improved GHS/QoL, mean and mean change from baseline in EQ-5D-5L VAS, and proportion of participants who report different levels of each 5-dimension score. To assess the levels of ALP in participants treated with actinium-225 zadavotide guraxetan relative to standard of care in participants with m C R P C.",
        "The following will be assessed: • ALP decline (unconfirmed and confirmed) • ALP response (early: greater than or equal to 10% decline, standard greater than or equal to 30% decline) • ALP normalisation The analysis will include all participants who receive any amount of the study interventions. The measures of interest are the proportion of participants with a decline in ALP."
      ],
      "chips": [
        "VECTRA-01",
        "p67/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v067.jpg",
      "cap": "Protocol page 67 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 68 of 221 · Table 7: Objectives and Endpoints Objectives Endpoints Identify candidate biomarkers…",
      "audio": [
        "Table 7: Objectives and Endpoints Objectives Endpoints Identify candidate biomarkers that may correlate with clinical benefit, and/or intrinsic or acquired resistance based on blood, urine, and tissue samples.",
        "Biomarkers include, but are not limited to, the following: • Tumour mutational profiling • Gene expression profiling • ctDNA: quantitation, mutational profile, and dynamic changes • Protein expression (immunohistochemistry and proteomics) • Urine biomarkers of renal injury Exploratory biomarker analyses may be reported separately from the CSR. To explore predictive/prognostic features of baseline P S M A PET.",
        "This includes the following: • Collection of AI-generated and physician-reviewed quantitative P S M A PET data, including parameters such as SUVmean, SUVmax, and total tumour volume to evaluate tracer uptake and lesion characteristics. • Utilise P S M A PET data, in combination with conventional imaging modalities, to evaluate an AI-based participant selection and stratification tool, and to identify opportunities for its further enhancement and development.",
        "To explore exposure-response relationships for efficacy and safety variables. a Data-driven model parameters for the relationship between exposure and efficacy and safety/tolerability variables, as applicable. To explore how multi-omics variations, including genetics, may affect clinical parameters, risk and prognosis of diseases and the response to medications as detailed in Appendix D.",
        "Exploratory endpoints are related to the data generated from multi-omics analysis, including genetics which may be part, or all, of the participant’s genetic information. Note: The samples are taken from consented participants for DNA isolation, blood derivatives, and storage. Results will not be reported in the CSR. Exploratory endpoints: Dosimetry Sub-study To obtain absorbed dose estimates for critical organs.",
        "To obtain absorbed dose estimates for tumour lesions that are visible on SPECT. Summary of absorbed dose (Gy and Gy/megabecquerels) for critical organs. Summary of absorbed dose (Gy and Gy/megabecquerels) for tumours, if available. The Dosimetry Set will be used. To evaluate association between absorbed dose estimates for critical organs and toxicity.",
        "a Absorbed dose (Gy and Gy/megabecquerels) per cycle and cumulative across cycles AE incidence and severity The Dosimetry Set will be used. To quantify change in absorbed dose to critical organs throughout the treatment course. Changes in absorbed dose (Gy and Gy/megabecquerels) from C1, C3, and C6 The Dosimetry Set will be used. To evaluate association between tumour absorbed dose estimates and efficacy.",
        "a Tumour absorbed dose (Gy and Gy/megabecquerels) PSA response, O R R and duration of response, and radiographic P F S/overall survival The Dosimetry Set will be used."
      ],
      "chips": [
        "VECTRA-01",
        "p68/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v068.jpg",
      "cap": "Protocol page 68 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 69 of 221 · Table 7: Objectives and Endpoints Objectives Endpoints Evaluation of PK within the…",
      "audio": [
        "Table 7: Objectives and Endpoints Objectives Endpoints Evaluation of PK within the Dosimetry Sub-study. Plasma concentrations and PK parameters (as data allow). Summary of urine radioactivity. The Dosimetry Set will be used.",
        "a Population PK, and exposure-response for efficacy and safety (including use of absorbed dose estimates) may combine data from other actinium-225 zadavotide guraxetan studies, will be described in a modelling analysis plan separate to the SAP, and will be reported separately to the CSR. Abbreviations: AI, artificial intelligence; GHS, Global Health Status; SUVmax, maximum standardised uptake value; SUVmean, mean standardised uptake value."
      ],
      "chips": [
        "VECTRA-01",
        "p69/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v069.jpg",
      "cap": "Protocol page 69 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 70 of 221 · ~670 randomised 1:1",
      "audio": [
        "4 STUDY DESIGN 4.1 Overall Design This is a Phase III, 2-arm, parallel, randomised, open-label, controlled, multicentre, global study assessing the efficacy and safety of actinium-225 zadavotide guraxetan compared with standard of care in participants with P S M A-positive m C R P C who have progressed despite treatment with A R P I, taxane-based chemotherapy, and P S M A-directed β-emitting RC.",
        "Refer to the study schema (Figure 1) and SoAs (Table 1 to Table 4) for the overall design and required assessments.",
        "Approximately 670 participants will be randomised in a ratio of 1:1 to the following 2 treatment arms: • Arm A: actinium-225 zadavotide guraxetan 12 megabecquerels administered as an IV injection every 6 weeks for up to 6 cycles until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met.",
        "• Arm B: standard of care with investigator’s choice of cabazitaxel, A R P I, or radium-223 until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met.",
        "standard of care is defined as follows: • Cabazitaxel 20 milligrams per square metre (a dose of 25 milligrams per square metre can be used in selected participants at the discretion of the investigator) by IV every 3 weeks in combination with oral prednisone/prednisolone 10 mg administration daily; OR • Abiraterone 1000 mg taken orally once daily with prednisone/prednisolone 5 mg administered orally twice daily, taken on an empty stomach; OR • Enzalutamide 160 mg taken",
        "orally once daily; OR • Deutenzalutamide 80 mg orally once daily (China only); OR • Radium-223 given at 55 kilobecquerels per kilogram IV every 4 weeks for 6 doses. Cross-over between arms is not allowed.",
        "Randomisation will be stratified in both arms by the following factors: • Intended therapy prior to randomisation (A R P I [ie, abiraterone, enzalutamide, or deutenzalutamide (China only)] versus cabazitaxel versus radium-223) • Prior courses of taxane-based chemotherapy: 1 versus > 1"
      ],
      "chips": [
        "VECTRA-01",
        "p70/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v070.jpg",
      "cap": "Protocol page 70 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 71 of 221 · • Progressed during treatment with, or within 6 weeks of, last dose of,…",
      "audio": [
        "• Progressed during treatment with, or within 6 weeks of, last dose of, P S M A-directed β-emitting RC (yes versus no) The study will have 3 periods, screening, treatment, and follow-up: • The screening period will commence once consent is obtained for the main study and will be up to 28 days. − During the screening period, confirmation of P S M A-positive disease must be centrally confirmed by B I C R.",
        "• Randomised participants will receive treatment with actinium-225 zadavotide guraxetan or standard of care until disease progression, unacceptable toxicity, the participant requests to stop the study intervention, or other specific discontinuation criteria are met. • The follow-up period will start after study intervention is discontinued. This will include the following: − An end of treatment visit within 28 days of study intervention discontinuation.",
        "− Safety Follow-up visits every 8 weeks for 16 weeks from the end of treatment visit. − Long-term Follow-up visits every 24 weeks from Safety Follow-up, for a total of 5 years from end of treatment. Access to study intervention after the final DCO for this study is described in Section 6.7. An I D M C will be appointed for this study. See Section 9.6 for full details of the composition and role of the I D M C.",
        "In Japan, a Safety Run-in Sub-study will be conducted prior to participants in Japan enrolling in the global Phase III study. Details of the Safety Run-in Sub-study can be found in Section 11. 4.2 Scientific Rationale for Study Design 4.2.1 Participant Population The study will enrol adult participants with histologically confirmed adenocarcinoma of the prostate. Eligible participants must exhibit castrate levels of testosterone with A D T or surgical castration.",
        "Candidates must also have been previously treated with A R P I and taxane-based chemotherapy and must have experienced disease progression on or after treatment with P S M A-directed β-emitting RC therapy, specifically excluding those who progressed before receiving the third dose and mandating a minimum of 6 weeks since the last P S M A-directed β-emitting RC dose.",
        "Additionally, participants must have P S M A PET-positive disease (centrally confirmed by B I C R prior to randomisation) for inclusion as determined using commercially available P S M A PET agents (gallium-68-P S M A-11 or fluorine-18 D C F P y L)."
      ],
      "chips": [
        "VECTRA-01",
        "p71/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v071.jpg",
      "cap": "Protocol page 71 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 72 of 221 · The rationale for selecting this population is based on emerging data showing that…",
      "audio": [
        "The rationale for selecting this population is based on emerging data showing that patients previously treated with P S M A-directed β-emitting RC have had favourable responses with α-emitting P S M A-directed RC (see Section 2.2.4). The eligibility criteria for the study do not include cumulative absorbed dose estimates to critical organs based on prior β-emitting RC exposure and anticipated subsequent exposure from actinium-225 zadavotide guraxetan.",
        "The rationale for this decision is twofold. First, the majority of toxicities from P S M A-directed RCs are acute events that manifest during treatment and can be managed with dose delay and modification rules. Late renal toxicity is a recognised exception; however, in patients with late-line m C R P C, the predominant near-term risk is disease progression and death from underlying disease rather than late complications of renal failure.",
        "Second, absorbed dose thresholds derived from external beam radiotherapy have not been validated for systemically administered RCs, which differ fundamentally in dose rate, dose distribution, and radiobiological effect.",
        "In the absence of prospectively validated organ dose tolerances for P S M A-directed RCs, eligibility is instead defined by clinically relevant baseline organ function, adequate interval from prior RC therapy, and exclusion of patients with recognised risk factors for renal toxicity, supported by prospective on-study renal monitoring and predefined dose modification rules.",
        "4.2.2 Control Arm The proposed control arm comprises the most commonly available, guideline-recommended treatments for post-taxane, post-P S M A-directed β-emitting RC m C R P C.",
        "Investigator’s choice from among cabazitaxel, A R P I (enzalutamide, abiraterone, or deutenzalutamide [China only]), and radium-223 ensures that the control arm accurately reflects real-world clinical practice patterns, accounting for geographic and site-specific variability and participant access considerations. A R P I may only be used in participants who have been pre-treated with cabazitaxel or who are not considered appropriate candidates for cabazitaxel.",
        "For participants receiving A R P I, rechallenge with the same A R P I is permitted, provided: (i) greater than or equal to 6 months have elapsed since the last dose of prior A R P I, and (ii) at least 1 other anticancer therapy has been administered between the prior A R P I and rechallenge. Stratification by intended treatment allocation at randomisation will maintain balance across comparator options.",
        "The anticancer therapies offered in the control arm are consistent with international treatment guidelines, including National Comprehensive Cancer Network Guidelines Version 4.2026 and European Society for Medical Oncology Clinical Practice Guidelines (Fizazi et al 2026), which recommend cabazitaxel for heavily pre-treated m C R P C and radium-223 for symptomatic bone metastases, while also reflecting real-world practice patterns where sequential A R P I therapy is commonly",
        "utilised despite limited prospective data in the post-lutetium-177-P S M A-617 setting. Inclusion of investigator’s choice bolsters recruitment flexibility and mirrors actual clinical decision processes, supporting the relevance and applicability of study outcomes."
      ],
      "chips": [
        "VECTRA-01",
        "p72/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v072.jpg",
      "cap": "Protocol page 72 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 73 of 221 · These therapies have demonstrated clinical benefit in advanced prostate cancer…",
      "audio": [
        "These therapies have demonstrated clinical benefit in advanced prostate cancer populations similar to the participant profile intended for this study: • Cabazitaxel: Demonstrated a survival advantage versus mitoxantrone in patients previously treated with docetaxel (TROPIC study; de Bono et al 2010), supporting its use as a post-taxane option. • A R P I: − Abiraterone: Extended overall survival compared to placebo in post-docetaxel m C R P C (COU-AA-301; Fizazi et al 2012).",
        "− Enzalutamide: Demonstrated improved overall survival compared to placebo in post-chemotherapy m C R P C (AFFIRM; Scher et al 2012). − Deutenzalutamide (China only): Statistically significantly improved radiographic P F S compared to placebo in post-abiraterone and post-docetaxel m C R P C (HC-1119-04; Wu et al 2026) • Radium-223: Significantly prolonged survival in symptomatic, bone-predominant m C R P C (ALSYMPCA; Parker et al 2013).",
        "4.3 Justification for Dose Several doses, schedules, and both weight-based and flat dosing have been explored for actinium-225 zadavotide guraxetan in clinical studies. The recommended regimen for monotherapy (12 megabecquerels every 6 weeks, IV, for up to 6 cycles with a cumulative dose of 72 megabecquerels) was selected based on clinical efficacy and safety data, PK, and dose- and exposure-response analysis from the Phase II studies AlphaBreak and TATCIST.",
        "AlphaBreak Part A initially investigated doses lower than the RP3D and concluded that dose per cycle was the primary driver of response and that efficacy was limited at all 3 doses and schedules explored in Part A. The RP3D and schedule was evaluated during AlphaBreak Part B, which explored higher doses per cycle (10 megabecquerels in Arm 6 and 12 megabecquerels in Arm 7), higher dose intensity, and higher cumulative dose compared to Part A.",
        "Data from Part B (as of 01 April 2026) showed that P S A 50 responses by Week 12 improved with higher administered doses per cycle (38.1% and 56.5% in Arm 6 and Arm 7, respectively), with a higher overall P S A 50 response rate within the first 12 weeks of 47.7% (n = 21/44) compared to 21.9% (n = 14/64) in Part A. Similarly, confirmed P S A 50 responses remained high in Part B (33.3% in Arm 6; 56.5% in Arm 7).",
        "Of note, the proportion of P S A 50 responses by 12 weeks, confirmed P S A 50 responses, and P S A 50 responses that lasted at least 12 weeks was higher at the dose of 12 megabecquerels than at 10 megabecquerels. Furthermore, 12 megabecquerels every 6 weeks showed a greater rate of disease control than 10 megabecquerels every 6 weeks (100.0% in Arm 7 versus 85.7% in Arm 6) and fewer discontinuations due to disease progression. Early PSA responses at Week 4"
      ],
      "chips": [
        "VECTRA-01",
        "p73/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v073.jpg",
      "cap": "Protocol page 73 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 74 of 221 · were also notably higher at 12 MBq, and, as published literature reports, rapid PSA…",
      "audio": [
        "were also notably higher at 12 megabecquerels, and, as published literature reports, rapid PSA changes correlate with overall survival in this setting (Armstrong et al 2024; Kind et al 2021). Therefore, earlier P S A 50 responses, higher PSA responses, and higher DCR supports the selection of 12 megabecquerels as the RP3D for actinium-225 zadavotide guraxetan on the basis of efficacy.",
        "Dose-response analyses based on data that included both Parts A and B of AlphaBreak further demonstrated that improved efficacy (P S A 50 rates) was positively associated with observed doses across 3 to 13 megabecquerels (p = 0.00139; Figure 2). actinium-225 zadavotide guraxetan demonstrates linear, dose-proportional exposure over 3 to 13 megabecquerels.",
        "Furthermore, dose-response analysis supports the clinical trends of P S A 50 response, with a predicted mean P S A 50 response at any time of 52% (95% CI: 37%, 66%) for 12 megabecquerels versus 40% (95% CI: 30%, 50%) for 10 megabecquerels. Doses of less than 6.5 megabecquerels were consistent with lower P S A 50 rates."
      ],
      "chips": [
        "VECTRA-01",
        "p74/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v074.jpg",
      "cap": "Protocol page 74 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 75 of 221 · Figure 2: Logistic Regression of (i) Observed Dose (MBq) and Probability of PSA50,…",
      "audio": [
        "Figure 2: Logistic Regression of (i) Observed Dose (megabecquerels) and Probability of P S A 50, and (ii) Observed Cumulative Dose (megabecquerels) and Probability of P S A 50, Based on Observed PSA Data Across AlphaBreak Part A and Part B at Any Time Curve represents logistic regression model-predicted relationship between dose and predicted probability of P S A 50 response. Shaded area represents 95% CI.",
        "Open circles, points, and error bars indicate observed probability and 95% CIs for probability of PSA response by dose quartile. Segments above and below represent distribution of dose for participants with response (above) and without response (below). The boxplot below the logistic regression curve represents the dose range.",
        "Dose ranges < 6.5 megabecquerels, 6.5 to 9 megabecquerels, 10 megabecquerels (9.01 to 11 megabecquerels) and 12 megabecquerels (11.01 to 13.38 megabecquerels) represent AlphaBreak Parts A and B, while for the cumulative view, the cumulative dose range < 15 megabecquerels, 15 to 24 megabecquerels, 25 to 39 megabecquerels, 40 to 55 megabecquerels, and > 55 megabecquerels.",
        "The lines represent the first, second, third, and fourth quartile, and the whiskers are the minimum and the maximum of the dose."
      ],
      "chips": [
        "VECTRA-01",
        "p75/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v075.jpg",
      "cap": "Protocol page 75 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 76 of 221 · Safety data remain consistent across the entire evaluated dose range during Part B…",
      "audio": [
        "Safety data remain consistent across the entire evaluated dose range during Part B of AlphaBreak. actinium-225 zadavotide guraxetan was well tolerated, the incidence of AEs was consistent, with most being low-grade and non-serious, and there was no meaningful increase in Grade 3 and 4 AEs at higher doses.",
        "Cumulative dose-response for safety was consistent with dose-response using dose per cycle, with no worsening of safety events with administration of a total of up to 6 cycles (Figure 3 to Figure 5). Figure 3: Logistic Regression of Observed Cumulative Dose Versus Probability of Grade greater than or equal to 3 TEAEs A) Curve represents model-predicted relationship between dose and predicted probability of response. Shaded area represents 95% CI.",
        "Open circles points and error bars indicate observed probability and 95% CIs for probability of AE by dose quartile. Segments above and below represent distribution of dose for participants with AEs (above) and without AE (below). B) The boxplot below the logistic regression curve represents the dose range. Cumulative dose range < 15 megabecquerels, 15 to 24 megabecquerels, 25 to 39 megabecquerels, 40 to 55 megabecquerels, and > 55 megabecquerels.",
        "The lines represent the first, second, third, and fourth quartile, and the whiskers are the minimum and the maximum of the dose."
      ],
      "chips": [
        "VECTRA-01",
        "p76/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v076.jpg",
      "cap": "Protocol page 76 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 77 of 221 · Figure 4: Logistic Regression of Observed Cumulative Dose Versus Probability of…",
      "audio": [
        "Figure 4: Logistic Regression of Observed Cumulative Dose Versus Probability of Observed Any Grade and Grade greater than or equal to 2 Xerostomia A) Curve represents model-predicted relationship between dose and predicted probability of response. Shaded area represents 95% CI. Open circles points and error bars indicate observed probability and 95% CIs for probability of AE by dose quartile.",
        "Segments above and below represent distribution of dose for participants with AEs (above) and without AE (below). B) The boxplot below the logistic regression curve represents the dose range. Cumulative dose range < 15 megabecquerels, 15 to 24 megabecquerels, 25 to 39 megabecquerels, 40 to 55 megabecquerels, and > 55 megabecquerels. The lines represent the first, second, third, and fourth quartile, and the whiskers are the minimum and the maximum of the dose.",
        "Figure 5: Logistic Regression of Observed Cumulative Dose Versus Probability of Any Grade and Grade greater than or equal to 3 Anaemia A) Curve represents model-predicted relationship between dose and predicted probability of response. Shaded area represents 95% CI. Open circles points and error bars indicate observed probability and 95% CIs for probability of AE by dose quartile.",
        "Segments above and below represent distribution of dose for participants with AEs (above) and without AE (below). B) The boxplot below the logistic regression curve represents the dose range. Cumulative dose range < 15 megabecquerels, 15 to 24 megabecquerels, 25 to 39 megabecquerels, 40 to 55 megabecquerels, and > 55 megabecquerels. The lines represent the first, second, third, and fourth quartile, and the whiskers are the minimum and the maximum of the dose."
      ],
      "chips": [
        "VECTRA-01",
        "p77/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v077.jpg",
      "cap": "Protocol page 77 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 78 of 221 · With respect to xerostomia and myelotoxicity, no meaningful differences in incidence…",
      "audio": [
        "With respect to xerostomia and myelotoxicity, no meaningful differences in incidence or severity were observed across different doses in Part A of AlphaBreak. While xerostomia was somewhat more frequent at higher cumulative doses, it rarely led to dose delay, reduction, or discontinuation, indicating that it was clinically manageable. No association between dose and anaemia was identified.",
        "Furthermore, no treatment-related deaths were observed, suggesting that evaluating higher doses per cycle and higher dose intensity as used in Part B would be safe. Guidelines for modification of the actinium-225 zadavotide guraxetan dose are provided in the Toxicity Management Guidelines (see Section 6.6).",
        "Doses for the standard of care arm will be administered according to approved Prescribing Information, whether for agents with regulatory approval in m C R P C or for agents used per investigator discretion in accordance with local clinical practice and treatment guidelines.",
        "4.4 End-of-study Definition For the purpose of Clinical Trial Transparency, the definition of the end of the study differs under FDA and EU regulatory requirements: • EU requirements define study completion as the last visit of the last participant for any protocol-related activity.",
        "• FDA requirements define 2 completion dates: − Primary Completion Date is the date that the final participant is examined or receives an intervention for the purposes of final collection of data for the primary outcome measure, whether the clinical study concluded according to the pre-specified protocol or was terminated.",
        "In the case of clinical studies with more than 1 primary outcome measure with different completion dates, this term refers to the date on which data collection is completed for all of the primary outcomes.",
        "− Study Completion Date is defined as the date the final participant is examined or receives an intervention for purposes of final collection of data for the primary and secondary outcome measures and AEs (eg, last participant’s last visit), whether the clinical study concludes according to the pre-specified protocol or is terminated.",
        "A participant is considered to have completed the study if they have completed all phases of the study including the last scheduled procedure shown in the SoAs (Section 1.3) (including overall survival determination and completion of the Long-term Follow-up period). As this study is event driven, the accrual of the predetermined number of events included in the study endpoints will determine the duration of the data collection phase of the study.",
        "There will be a final DCO, defined by the time of the overall survival Final Analysis, which will take place"
      ],
      "chips": [
        "VECTRA-01",
        "p78/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v078.jpg",
      "cap": "Protocol page 78 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 79 of 221 · when ~ 399 OS events (~ 60% maturity) have occurred, which is expected to occur ~ 3…",
      "audio": [
        "when ~ 399 overall survival events (~ 60% maturity) have occurred, which is expected to occur ~ 3 years after the randomisation of the first participant. At this time, the clinical database will close to new data. Should the study meet the primary endpoint at any of the prescribed IAs, additional data cuts may be required per local Health Authority requirements. See Section 6.7 for details on participant management following the final DCO and following study completion.",
        "4.5 Study Stopping Rules If the study investigators, study medical monitor, I D M C, or regulatory authorities discover conditions arising during the study that indicate that the participants’ safety and/or scientific value of the study and/or quality of the study intervention have been compromised, the study should be halted or the study centre’s participation should be terminated.",
        "If the Sponsor decides to stop data collection, participants ongoing with study intervention deriving clinical benefit from their assigned treatment may be allowed to continue treatment."
      ],
      "chips": [
        "VECTRA-01",
        "p79/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v079.jpg",
      "cap": "Protocol page 79 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 80 of 221 · STUDY POPULATION The target population of interest in this study is participants…",
      "audio": [
        "5 STUDY POPULATION The target population of interest in this study is participants with P S M A-positive m C R P C. Prospective approval of protocol deviations to recruitment and enrolment criteria, also known as protocol waivers or exemptions, is not permitted. Participants who do not meet the eligibility criteria requirements are screen failures (refer to Section 5.4).",
        "5.1 Inclusion Criteria Participants are eligible to be included in the study only if all the following criteria apply: Age 1. Participant must be greater than or equal to 18 years of age (or the legal age of consent in the jurisdiction in which the study is taking place), at the time of signing the informed consent. Type of Participant and Disease Characteristics 2. Diagnosis of adenocarcinoma of prostate proven by histopathology. 3.",
        "Must have had prior orchiectomy and/or ongoing A D T and a castrate level of plasma/serum testosterone (< 50 ng/dL or < 1.7 nmol/L). 4. Progressive m C R P C following the most recent treatment at the time of study entry. Documented progressive m C R P C will be based on at least 1 of the following criteria: a) PSA increase > 25% above baseline and > 2 ng/mL above the nadir (confirmed by a second consecutive value).",
        "b) Soft-tissue progression defined as an increase greater than or equal to 20% in the SOD (short axis for nodal lesions and long axis for non-nodal lesions) of all TLs based on the smallest SOD since treatment started or the appearance of 1 or more NLs. c) Progression of bone disease per PCWG3 criteria, assessed by a 99mTc bone scan (Scher et al 2016). 5.",
        "Must have been previously treated with at least 2 cycles of P S M A-directed β-emitting RC, with the last dose greater than or equal to 3 months before the first dose of study intervention. 6. Must have been previously treated with at least 1 taxane-based chemotherapy regimen for either metastatic hormone-sensitive prostate cancer or CRPC. A taxane regimen is defined as a minimum exposure of 2 cycles of a taxane.",
        "If a participant has received only 1 cycle, the participant is eligible if his physician deems him unsuitable to receive a second cycle (eg, due to intolerability or hypersensitivity). 7. Must have been previously treated with at least 1 A R P I (eg, enzalutamide, abiraterone, etc)."
      ],
      "chips": [
        "VECTRA-01",
        "p80/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v080.jpg",
      "cap": "Protocol page 80 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 81 of 221 · Protocol body · page 81",
      "audio": [
        "8. Participants who are eligible for a PARP inhibitor based on HRR/BRCA status will be required to have received the corresponding approved therapies prior to enrolment, unless these treatments are contraindicated. 9.",
        "Participants who are eligible for an immune checkpoint inhibitor based on microsatellite instability-high, mismatch repair deficient, or tumour mutational burden-high status will be required to have received the corresponding approved therapies prior to enrolment, unless these treatments are contraindicated. 10.",
        "Must have positive P S M A PET/CT scans, obtained with P S M A ligands (gallium-68-P S M A-11 or fluorine-18 D C F P y L) and be eligible as determined per Sponsor central reader. Positive P S M A PET findings are defined as at least 1 P S M A-positive metastatic lesion (tracer uptake qualitatively greater than liver) and no P S M A-negative lesions.",
        "Participants will be considered ineligible if any intraprostatic lesion or any 1 lesion larger than size criteria (organs greater than or equal to 1 cm in longest diameter, lymph nodes greater than or equal to 2.5 cm in short axis, and bones [soft tissue component] greater than or equal to 1 cm in longest diameter), measured on the CT scan, has uptake of PET tracer less than or equal to uptake in normal liver. 11.",
        "Must have at least 1 metastatic lesion (measurable and/or non-measurable) that can be accurately assessed at baseline and is suitable for repeated assessment, as documented per investigator, on CT, MRI, and/or bone scan. 12. E C O G performance status of 0 to 2 with no deterioration over the previous 2 weeks prior to randomisation. 13. Minimum life expectancy of greater than or equal to 12 weeks. 14.",
        "Adequate organ and bone marrow function as follows: a) Haemoglobin greater than or equal to 9.0 g/dL with no blood transfusion in the 14 days prior to randomisation. b) Absolute neutrophil count greater than or equal to 1.5 times 109/L with no growth factor support in the 28 days prior to randomisation c) Platelet count greater than or equal to 100 times 109/L.",
        "d) TBL < 1.5 times the ULN or < 3 times ULN in the presence of documented Gilbert’s Syndrome (unconjugated hyperbilirubinaemia). e) ALT or AST less than or equal to 3.0 times ULN or less than or equal to 5.0 times ULN if liver metastases are present. f) Albumin > 3 g/dL.",
        "g) e G F R of greater than or equal to 60 mL/min as determined by CKD-EPI formula (Inker et al 2021) adjusted for BSA: For participants with SCr less than or equal to 0.9 mg/dL ( less than or equal to 79.56 μmol/L), use the following formula: 142 times (SCr/0.9)-0.302 times 0.9938Age (years) times (BSA/1.73). For participants with SCr > 0.9 mg/dL (> 79.56 μmol/L), use the following formula: 142 times (SCr/0.9)-1.200 times 0.9938Age (years) times (BSA/1.73)."
      ],
      "chips": [
        "VECTRA-01",
        "p81/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v081.jpg",
      "cap": "Protocol page 81 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 82 of 221 · h) Coagulation: INR, PTT, or aPTT < 1",
      "audio": [
        "h) Coagulation: INR, PTT, or aPTT < 1.5 times ULN, unless the participant is receiving anti-coagulant therapy, in which case participants are eligible if test results are within the therapeutic range of the intended use of anti-coagulants. Haematological inclusion criteria cannot be met with ongoing or recent blood transfusions or growth factor support. If a transfusion is required, it must be given at least 14 days prior to eligibility assessments.",
        "If administration of growth factor is required, it must occur at least 28 days prior to eligibility assessments. Sex and Contraceptive/Barrier Requirements 15. Contraceptive use by participants or participant partners should be consistent with local regulations regarding the methods of contraception for those participating in clinical studies (Appendix G).",
        "a) Male participants: − Must not father children or donate sperm from signing ICF, during the study intervention and for 6 months after the last dose of study intervention. For participants wishing to father children, arrangements for sperm donation must be made prior to signing the ICF. Male participants may be rejected as a sperm donor after the study.",
        "− Must use a condom (with spermicide - where permitted) from signing ICF, during study intervention, and for 6 months after the last dose of study intervention, with all sexual partners. b) Female partners of participants: − Female partners who are women of childbearing potential should use a highly effective method of contraception from signing ICF, during study intervention, and for 6 months after the last dose of study intervention. Informed Consent 16.",
        "Capable of giving signed informed consent as described in Appendix A which includes compliance with the requirements and restrictions listed in the ICF and in this protocol. Optional Genetics Initiative Informed Consent 17. Provision of signed and dated written Optional Genomics Initiative Research Information and Consent Form prior to collection of samples for optional Genomics Initiative research that supports the Genomic Initiative (see Appendix D 2).",
        "Other Inclusion Criteria 18. All races and ethnic groups are eligible for this study."
      ],
      "chips": [
        "VECTRA-01",
        "p82/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v082.jpg",
      "cap": "Protocol page 82 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 83 of 221 · Protocol body · page 83",
      "audio": [
        "5.2 Exclusion Criteria Participants are excluded from the study if any of the following criteria apply: Medical Conditions 1.",
        "As judged by the investigator, any evidence of diseases (such as severe or uncontrolled systemic diseases, including uncontrolled hypertension, uncontrolled diabetes mellitus, and active bleeding diseases), history of allogenic organ transplant, which in the investigator’s opinion makes it undesirable for the participant to participate in the study or that would jeopardise compliance with the protocol. 2.",
        "Prior treatment with an α-emitting molecular targeted therapeutic RC (prior treatment with radium-223 is permitted). 3. Progression on P S M A-directed β-emitting RC prior to the administration of Cycle 3, as determined by the investigator, based on overall clinical judgement. 4. Receipt of > 6 cycles of P S M A-directed β-emitting therapeutic RC. 5.",
        "History of another primary malignancy except for malignancy treated with curative intent with no known active disease for greater than or equal to 2 years before the first dose of study intervention and of low potential risk for recurrence. Exceptions include adequately resected non-melanoma skin cancer and curatively treated in situ disease. 6.",
        "Persistent toxicities (CTCAE Grade greater than or equal to 2 or Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer greater than or equal to 2; Appendix H; Cox et al 1995) caused by previous anticancer therapy, excluding alopecia, hearing loss, and stable persistent Grade 2 peripheral neuropathy.",
        "Stable Grade 2 toxicities related to prior radiation may be allowed at the investigator’s discretion, except for Grade 2 or higher xerostomia or xerophthalmia, which is exclusionary. Participants with irreversible toxicity that is not reasonably expected to be exacerbated by study intervention in the opinion of the investigator may be included (eg, hearing loss).",
        "Any Grade greater than or equal to 3 late radiation toxicities are exclusionary, including radiation proctitis requiring endoscopic intervention and any history of haemorrhagic cystitis. 7. Spinal cord compression or brain metastases unless asymptomatic, stable, and not requiring steroids for greater than or equal to 4 weeks prior to start of study intervention. A minimum of 2 weeks must have elapsed between the end of brain radiotherapy and first dose of study intervention.",
        "Participants with prior treated brain metastases are permitted in the study. 8. Known active hepatitis B or C infection, positive hepatitis C antibody, hepatitis B virus surface antigen, or hepatitis B virus core antibody at screening. Participants positive for HCV antibody are eligible only if polymerase chain reaction is negative for HCV RNA. 9. Known HIV infection that is not well-controlled.",
        "All of the following criteria are required to define an HIV infection that is well-controlled: undetectable viral RNA load for"
      ],
      "chips": [
        "VECTRA-01",
        "p83/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v083.jpg",
      "cap": "Protocol page 83 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 84 of 221 · months, CD4+ count of 500 cells/mm3, no history of AIDS-defining opportunistic…",
      "audio": [
        "6 months, CD4+ count of 500 cells/mm3, no history of AIDS-defining opportunistic infection within the past 12 months, and stable for at least 6 months on the same anti-HIV medications. 10. Clinically significant ECG abnormalities which present and/or predispose participants to significant safety risks in the study.",
        "These abnormalities can be (not exhaustive), congenital long QT syndrome, QT interval corrected by Fridericia’s Correction Formula (QTcF) > 480 msec, cardiac arrhythmias, uncontrolled atrial fibrillation despite treatment, asymptomatic sustained ventricular tachycardia. Participants with atrial fibrillation controlled by medication or arrhythmias controlled by pacemakers may be permitted based on investigator judgement along with cardiologist consultation. 11.",
        "Participants with skeletal metastases presenting as a superscan on a 99mTc bone scan during screening. Superscan is defined as a 99mTc bone scan which demonstrates markedly increased skeletal radioisotope uptake relative to soft tissues in association with absent or faint renal activity (absent kidney sign). 12. Participants with known, unresolved urinary tract obstruction. If obstruction is suspected, 99mTc renal scan may be performed at the investigator’s discretion. 13.",
        "Completion of large-field external beam radiotherapy (> 30% of bone marrow) within 30 days of the first dose of study intervention. 14. Administration of any systemic cytotoxic or investigational therapy (including investigational imaging agents) or PARP inhibitor within 30 days of the first dose of study intervention or 5 half-lives, whichever is shorter. 15. Exclusion criterion removed. 16.",
        "Uncontrolled intercurrent illness including, but not limited to, ongoing or active infection, New York Heart Association Class III or IV congestive heart failure, unstable angina pectoris, or psychiatric illness/social situations that would limit compliance with study requirements. In the opinion of the investigator, the participant is expected to be compliant and have a high probability of completing the study. Prior/Concomitant Therapy 17.",
        "Any concurrent anticancer treatment without an adequate washout period prior to the first dose of study intervention, except A R P I which may be continued until C1D1. The following therapies may be continued during the study: a) Hormonal replacement therapy for non-cancer-related conditions (eg, levothyroxine for hypothyroidism, hydrocortisone or prednisone for adrenal insufficiency, thyroid replacement therapy).",
        "b) Participants must continue A D T or maintain surgical castration to ensure castrate levels of testosterone throughout the study."
      ],
      "chips": [
        "VECTRA-01",
        "p84/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v084.jpg",
      "cap": "Protocol page 84 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 85 of 221 · c) Supportive care medications as per institutional guidelines (eg, antiemetics,…",
      "audio": [
        "c) Supportive care medications as per institutional guidelines (eg, antiemetics, analgesics, steroids for symptom relief, bisphosphonates or denosumab for bone health). 18. Herbal or natural products intended as treatment or prophylaxis for any type of cancer that may interfere with the activity of the study intervention (refer to Section 6.9 for details). 19.",
        "Major surgical procedure (excluding placement of vascular access, biopsy, and urethral catheter placement) or significant traumatic injury within 4 weeks of the first dose of study intervention, or an anticipated need for major surgery during the study. Prior/Concurrent Clinical Study Experience 20. Concurrent enrolment in another clinical study (unless the study is observational or non-interventional, or the participant is in the follow-up period of an interventional study).",
        "21. Participants with a known hypersensitivity to study intervention or any of the excipients of the product. Other Exclusions 22. Involvement in the planning and/or conduct of the study (applies to both AstraZeneca staff and/or staff at the study site). 23. Judgment by the investigator that the participant should not participate in the study if the participant is unlikely to comply with study procedures, restrictions, and requirements. 24.",
        "Previous randomisation in the present study. 25.",
        "Concurrent acute kidney injury, defined as any of the following: increase in SCr by greater than or equal to 0.3 mg/dL ( greater than or equal to 26.5 μmol/L) within 48 hours; increase in SCr or serum cystatin C by greater than or equal to 1.5 times baseline within the prior 7 days; mean urine volume < 0.5 mL/kg/h (based on ideal body weight) for greater than or equal to 6 hours; or elevation of a kidney damage biomarker within the prior 7 days. 26.",
        "Pre-existing CKD, defined as e G F R < 60 mL/min (as determined by the CKD-EPI formula adjusted for BSA) persisting for greater than or equal to 3 months, or any of the following markers of kidney damage present for greater than or equal to 3 months: persistent albuminuria (albumin-creatinine ratio greater than or equal to 30 mg/g [ greater than or equal to 3 mg/mmol]), persistent haematuria, urine sediment abnormalities, electrolyte and other abnormalities due to tubular",
        "disorders, abnormalities detected by histology, structural abnormalities detected by imaging, or history of kidney transplantation. 5.3 Lifestyle Considerations The following restrictions apply while the participant is receiving study intervention and for"
      ],
      "chips": [
        "VECTRA-01",
        "p85/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v085.jpg",
      "cap": "Protocol page 85 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 86 of 221 · the specified times before and after: • Participants should follow the…",
      "audio": [
        "the specified times before and after: • Participants should follow the IRB/IEC-approved hygiene guidelines that are distributed after the first dose of actinium-225 zadavotide guraxetan, and after each subsequent dose of actinium-225 zadavotide guraxetan if required by local policies. • Participants must follow the contraception requirements outlined in Appendix G.",
        "• Participants should not donate blood or blood components while participating in this study and through 180 days after the last dose of study intervention. Restrictions relating to concomitant therapies are described in Section 6.9. 5.3.1 Other Restrictions For restrictions pertaining to standard of care interventions, refer to the Prescribing Information.",
        "5.4 Screen Failures A screen failure occurs when a screened participant does not meet all eligibility criteria unless otherwise specified in the protocol. A minimal set of screen failure information is required to ensure transparent reporting of screen failure participants to meet the Consolidated Standards of Reporting Trials (CONSORT) publishing requirements and to respond to queries from regulatory authorities.",
        "Minimal information includes demography, informed consent date, screen failure details, eligibility criteria, and any S A E. Individuals who do not meet the criteria for participation in this study (screen failure) may be rescreened. Rescreening is permitted 1 time for participants who fail to meet inclusion/exclusion criteria.",
        "There is no limit on rescreening if the screen failure was due to logistical reasons (eg, delays in completing screening assessments, scheduling conflicts). Rescreened participants should be assigned the same participant number as for the initial screening. Rescreening must be documented so that any effect on study results can be assessed.",
        "All assessments must be repeated for rescreening unless they are within the required number of days prior to randomisation, as per the SoAs (Section 1.3). All screen failure participants should have the reason for study withdrawal recorded as “screen failure” (ie, participant does not meet the required inclusion/exclusion criteria) in the eCRF. This reason for study withdrawal is only valid for screen failures (ie, participants who are not randomised in the study).",
        "Participant enrolment and randomisation are described in Section 6.3. 5.5 Criteria for Temporarily Delaying Enrolment/Randomisation/ Administration of Study Intervention Not applicable."
      ],
      "chips": [
        "VECTRA-01",
        "p86/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v086.jpg",
      "cap": "Protocol page 86 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 87 of 221 · STUDY INTERVENTION(S) AND CONCOMITANT THERAPY Study interventions are all…",
      "audio": [
        "6 STUDY INTERVENTION(S) AND CONCOMITANT THERAPY Study interventions are all pre-specified medicinal products (classified as IMPs and auxiliary medicinal products), medical devices, and other interventions (eg, surgical and behavioural) intended to be administered to the study participants during the study conduct. 6.1 Study Intervention(s) Administered Table 8 and Table 9 give an overview of the study interventions given to participants in this study.",
        "standard of care treatments may be administered as per Prescribing Information or general treatment guidance in use by the investigational site. All the drug products listed in Table 8 and Table 9 that are locally sourced will be approved branded or generic products that will be used without any modification. AstraZeneca does not control the local sourcing of these products at investigational sites."
      ],
      "chips": [
        "VECTRA-01",
        "p87/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v087.jpg",
      "cap": "Protocol page 87 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 88 of 221 · Table 8: Investigational Medicinal Products Arm name Arm A Arm B Intervention name…",
      "audio": [
        "Table 8: Investigational Medicinal Products Arm name Arm A Arm B Intervention name actinium-225 zadavotide guraxetan Cabazitaxel a Enzalutamide Abiraterone a Deutenzalutamide (China only) Radium-223 Type Drug Drug Drug Drug Drug Drug Dosage form Solution for injection Solution for injection/ concentrate for solution for infusion Soft capsules or tablet Tablet Soft capsules Solution for injection Unit dose strength(s) 12 megabecquerels Variable 40 mg 250 mg or 500 mg 40 mg",
        "1,100 kilobecquerels/mL Dosage level(s) and regimen 12 megabecquerels administered in 6-week cycles for up to 6 cycles 20 to 25 milligrams per square metre administered every 3 weeks 160 mg once daily 1,000 mg once daily b 80 mg once daily 55 kilobecquerels per kilogram, given at 4-week intervals, for up to 6 injections Route of administration IV injection IV infusion Oral Oral Oral IV injection Use Experimental Active comparator Active comparator Active comparator Active",
        "comparator (China only) Active comparator I M P or auxiliary medicinal product I M P I M P I M P I M P I M P I M P Sourcing Provided centrally by Provided centrally by AstraZeneca (once a participant is randomised to the study) and/or locally by the study site, subsidiary, or designee Provided centrally by AstraZeneca (once a participant is randomised to the study) and/or locally by the study site, subsidiary, or designee.",
        "Provided centrally by AstraZeneca (once a participant is randomised to the study) and/or locally by the study site, subsidiary, or designee Provided centrally by AstraZeneca (once a participant is randomised to the study) and/or locally by the study site, subsidiary, or designee. Provided locally by the study site, subsidiary, or designee."
      ],
      "chips": [
        "VECTRA-01",
        "p88/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v088.jpg",
      "cap": "Protocol page 88 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 89 of 221 · Table 8: Investigational Medicinal Products Arm name Arm A Arm B Intervention name…",
      "audio": [
        "Table 8: Investigational Medicinal Products Arm name Arm A Arm B Intervention name actinium-225 zadavotide guraxetan Cabazitaxel a Enzalutamide Abiraterone a Deutenzalutamide (China only) Radium-223 Packaging and labelling actinium-225 zadavotide guraxetan is radioactive and will be supplied in a lead or tungsten pig package within a shipping container. Each package will be labelled as per country requirement.",
        "Drug will be provided in vials in a carton and will be labelled as required per country requirement. Drug will be provided in a blister packed in a carton and labelled as required per country requirement. Drug will be provided in bottles or blister/wallet packed in a carton and will be labelled as required per country requirement. Drug will be provided in bottle or blister packed in a carton and will be labelled as required per country requirement.",
        "Radium-223 is radioactive and will be supplied in the original container or equivalent radiation shielding. Each vial will be labelled as required per country requirement and radiation safety standards. a Prednisone/prednisolone are to be administered in line with practice for participants treated with abiraterone or cabazitaxel.",
        "b Abiraterone that is provided centrally by AstraZeneca will be limited to 500 mg tablets only; no 250 mg tablets will be centrally supplied by AstraZeneca except in China.",
        "Table 9: Auxiliary Medicinal Products Arm name Arms A and B Intervention name Prednisone/Prednisolone a A D T gallium-68-P S M A-11 b fluorine-18 D C F P y L c Type Drug Drug Radiopharmaceutical Radiopharmaceutical Dosage form Per local source Per chosen A D T intervention Solution for injection Solution for injection Unit dose strength(s) Per local source Per chosen A D T intervention 111-259 megabecquerels 296-370 megabecquerels Dosage level(s) and regimen 5 mg twice daily",
        "(with abiraterone); 10 mg once daily with cabazitaxel Per chosen A D T intervention 111-259 megabecquerels administered in a single bolus injection 296-370 megabecquerels administered in a single bolus injection Route of administration Oral Per chosen A D T intervention IV injection IV injection"
      ],
      "chips": [
        "VECTRA-01",
        "p89/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v089.jpg",
      "cap": "Protocol page 89 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 90 of 221 · Table 9: Auxiliary Medicinal Products Arm name Arms A and B Intervention name…",
      "audio": [
        "Table 9: Auxiliary Medicinal Products Arm name Arms A and B Intervention name Prednisone/Prednisolone a A D T gallium-68-P S M A-11 b fluorine-18 D C F P y L c Use Background intervention Background intervention Background intervention Background intervention I M P or auxiliary medicinal product auxiliary medicinal product auxiliary medicinal product auxiliary medicinal product auxiliary medicinal product Sourcing Provided centrally by AstraZeneca and/or locally by the study",
        "site, subsidiary, or designee. Provided centrally by AstraZeneca and/or locally by the study site, subsidiary, or designee. Provided centrally by AstraZeneca and/or locally by the study site, subsidiary, or designee. Provided centrally by AstraZeneca and/or locally by the study site, subsidiary, or designee.",
        "Packaging and labelling Per local requirements Per local requirements Per local requirements Per local requirements a Prednisone/prednisolone are to be administered in line with practice for participants treated with abiraterone or cabazitaxel. b The use of 68GA-P S M A-11 is preferred over fluorine-18 D C F P y L, where possible. c The use of fluorine-18 D C F P y L is prohibited in the EU."
      ],
      "chips": [
        "VECTRA-01",
        "p90/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v090.jpg",
      "cap": "Protocol page 90 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 91 of 221 · Table 10 · 12 MBq product information · Arm B list",
      "audio": [
        "6.1.1 Arm A actinium-225 zadavotide guraxetan will be supplied as a solution for injection (Table 10).",
        "Table 10: actinium-225 Zadavotide Guraxetan Product Information Product name Actinium (actinium-225) zadavotide guraxetan Dosage formulation Solution for injection Unit dose 12 megabecquerels (administered in 6-week cycles) Route of administration IV injection Physical description Transparent, colourless to slightly yellow solution, free of visible particulate Packaging and labelling actinium-225 zadavotide guraxetan is radioactive and will be supplied in a lead or tungsten",
        "pig package within a shipping container. The package will be labelled per country requirements.",
        "Manufacturer Fusion, Cardinal Health 6.1.2 Arm B The control arm is based on investigator’s choice from the following: • Cabazitaxel • A R P I (enzalutamide, abiraterone, deutenzalutamide [China only]) • Radium-223 6.2 Preparation, Handling, Storage, and Accountability The investigator or designee (eg, unblinded pharmacist) must confirm appropriate conditions (eg, temperature) have been maintained during transit for all study intervention received at the site and throughout",
        "the entire study until authorisation is provided for on-site destruction or removal of the study intervention, reflecting completion of the study. In the event of a temperature excursion detected at any time during the study, sites will follow the reporting procedures provided in the Pharmacy Manual; release of study intervention for clinical use can only occur once the event has been reviewed and approval is provided by AstraZeneca (or designated party).",
        "Only randomised participants may receive study intervention, and only authorised site staff may supply, prepare, or administer study intervention. All study intervention must be stored in a secure, environmentally controlled, and monitored (manual or automated) area in accordance with the labelled storage conditions with access limited to the investigator and authorised site staff."
      ],
      "chips": [
        "VECTRA-01",
        "p91/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v091.jpg",
      "cap": "Protocol page 91 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "Unit dose is 12 MBq in 6-week cycles. Radioactive supply in a lead or tungsten pig.",
        "⁶⁸Ga-PSMA-11 111–259 MBq and ¹⁸F-DCFPyL 296–370 MBq are AxMPs, not the IMP."
      ]
    },
    {
      "title": "Page 92 of 221 · The investigator, institution, the head of the medical institution (where…",
      "audio": [
        "The investigator, institution, the head of the medical institution (where applicable), or authorised site staff are responsible for study intervention accountability, reconciliation, and record maintenance (ie, receipt, reconciliation, and final disposition records).",
        "The investigator is responsible for ensuring that actinium-225 zadavotide guraxetan and standard of care are correctly received, handled, stored, and used in accordance with regulatory guidelines, the protocol, the actinium-225 zadavotide guraxetan IB, and the Pharmacy Manual. Further guidance and information for the preparation, handling, storage, and accountability are provided in the Pharmacy Manual.",
        "6.2.1 Dose Preparation actinium-225 zadavotide guraxetan must be prepared using aseptic technique for handling and administration per the clinical site’s Standard Operating Procedure, preferably in an aseptic environment, but a clean environment is acceptable. Ensure the area of preparation is cleaned prior to dispensation of actinium-225 zadavotide guraxetan. Prior to donning gloves, hands must be washed or sanitised using an alcohol-based hand sanitiser.",
        "Once gloves are donned, it is recommended they are sprayed with 70% isopropyl alcohol if possible. actinium-225 zadavotide guraxetan will be drawn up from a vial into a syringe. The specific volume to be drawn will be calculated on the day of preparation via the I R T. Refer to the Pharmacy and/or I R T User Manual for detailed information on dose preparation, administration, and handling procedures for study intervention.",
        "The standard of care agents will either be locally sourced by the study site or centrally supplied by AstraZeneca and will be administered according to Prescribing Information or treatment guidance in general use by the investigational site. Under certain circumstances when local sourcing by the study site is not feasible, AstraZeneca will centrally supply the drug, which will be labelled with local language translated text in accordance with regulatory guidelines.",
        "6.2.2 Dose Administration actinium-225 zadavotide guraxetan must not be administered beyond the expiration date and time on the product label. Review all expiration dates and times prior to administration. The participant must be adequately hydrated, according to departmental practice, prior to administration of actinium-225 zadavotide guraxetan. Refer to the Pharmacy Manual for more details regarding the study intervention preparation and administration."
      ],
      "chips": [
        "VECTRA-01",
        "p92/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v092.jpg",
      "cap": "Protocol page 92 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 93 of 221 · Protocol body · page 93",
      "audio": [
        "6.2.3 Safe Handling Practices for Radiopharmaceuticals All handling of radiopharmaceuticals must be carried out in restricted areas by persons trained and authorised in the safe use, handling, and administration of radiopharmaceuticals to humans. Care must be taken to minimise contamination of clothing and skin of personnel with the use of disposable gloves and protective clothing. Hands must be washed after handling any radioactive materials.",
        "All handling of radioactive material must follow site Standard Operating Procedures and the regulations and radionuclide licenses issued by the local nuclear regulatory authorities. Before, during, and after administration of actinium-225 zadavotide guraxetan, sites should follow the regulations set forth by the competent nuclear regulatory agency with jurisdiction over the site.",
        "The participant and caregivers will be given instructions regarding hygiene precautions after receiving the drug to minimise risk of potential radiation exposure of the third party. 6.2.3.1 Dose Calibration Setting Reference standards will be supplied to allow each site to calibrate equipment including dose calibrators for actinium-225 prior to the first participant enrolment as detailed in the Site Imaging Manual.",
        "6.3 Assignment to Study Intervention Before study initiation, login instructions for the I R T and/or login information and instructions for the R T S M will be provided to each site. • Participant details will be recorded in the I R T/R T S M per country regulations. • At screening (Days -28 to -1), the investigators or a suitably trained delegate will: − Obtain signed informed consent before any study-specific procedures are performed.",
        "If laboratory or imaging procedures were performed for alternate reasons prior to signing consent, these can be used for screening purposes with consent of the participant. However, all screening laboratory and imaging results must have been obtained within the required timeframe prior to randomisation/the first dose of study intervention, as required by the SoAs (Section 1.3).",
        "− Obtain a unique 7-digit enrolment code (E-code), through the I R T/R T S M in the following format (ECCNNXXX: CC being the country code, NN being the centre number, and XXX being the participant enrolment code at the centre). This number is the participant’s unique identifier and is used to identify the participant on the eCRFs. − Determine participant eligibility (see Sections 5.1 and 5.2).",
        "− Prior to participant randomisation, the investigator or suitably trained delegate will select the standard of care treatment (based on the most appropriate option for the participant) that the participant would receive if randomised to the standard of care group. This must be completed for all participants. The information will be recorded in the I R T/R T S M system."
      ],
      "chips": [
        "VECTRA-01",
        "p93/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v093.jpg",
      "cap": "Protocol page 93 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 94 of 221 · − Obtain signed informed consent for the optional genetic research component of the…",
      "audio": [
        "− Obtain signed informed consent for the optional genetic research component of the study. Participants who decide not to sign the optional genetic research ICF (but have provided consent to participate in the study) remain eligible for study enrolment and all other study procedures.",
        "Investigators should keep a record (ie, the participant screening log) of all participants who enter screening: • If the participant is ineligible and not randomised, the I R T/R T S M should be accessed to screen fail the participant in the system. • Participants will begin treatment on C1D1. Participants must not be randomised and treated unless all eligibility criteria have been met. • If a participant withdraws from the study, then his enrolment code cannot be reused.",
        "Withdrawn participants will not be replaced. Methods for Assigning Treatment Groups At randomisation, once the participant is confirmed to be eligible for study entry, all participants will be centrally assigned to randomised study intervention using a randomisation scheme in the I R T/R T S M. The randomisation scheme will be produced by a computer software programme that incorporates a standard procedure for generating randomisation numbers.",
        "One randomisation list will be produced for each of the randomisation strata. A blocked randomisation will be generated. All centres will use the same central list in order to minimise any imbalance in the number of participants assigned to each treatment group. Randomisation codes will be assigned strictly sequentially as participants become eligible for randomisation.",
        "The I R T/R T S M will provide the kit identification number to be allocated to the participant at the randomisation visit and subsequent treatment visits. Study intervention will be dispensed at the study visits summarised in the SoAs (Section 1.3). Returned study intervention should not be re-dispensed to the participants.",
        "Procedures for Handling Incorrectly Randomised Participants • Participants who fail to meet the eligibility criteria should not, under any circumstances, be enrolled or receive study medication. There can be no exceptions to this rule. Participants who are enrolled, but subsequently found not to meet all the eligibility criteria, must not be randomised or started on study intervention and must be withdrawn from the study."
      ],
      "chips": [
        "VECTRA-01",
        "p94/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v094.jpg",
      "cap": "Protocol page 94 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 95 of 221 · • Where a participant does not meet all the eligibility criteria but is randomised…",
      "audio": [
        "• Where a participant does not meet all the eligibility criteria but is randomised in error, or incorrectly started on treatment, the investigator should inform the AstraZeneca Study Clinical Lead immediately, and a discussion should occur between the AstraZeneca Study Clinical Lead and the investigator regarding whether to continue or discontinue the participant from treatment.",
        "The AstraZeneca Study Clinical Lead must ensure all decisions are appropriately documented and that the potential benefit/risk profile remains positive for the participant. 6.4 Blinding This is an open-label study; however, the treatment arm (Arm A versus Arm B) to which a participant is assigned will be determined using an I R T/R T S M. The site will use the I R T/R T S M prior to the start of study intervention administration for each participant.",
        "The site will record the intervention assignment on the applicable eCRF, if required. Potential bias will be reduced by the following steps: central randomisation and central confirmation of rPD. 6.5 Study Intervention Compliance When participants are dosed at the site, they will receive study intervention(s) under the direction of the investigator or designee, under medical supervision.",
        "The date, and time if applicable, of dose administered in the clinic will be recorded in the source records and recorded in the eCRF. The dose of study intervention and study participant identification will be confirmed at the time of dosing by a member of the study site staff other than the person administering the study intervention.",
        "The following requirements are applicable to Arm B standard of care interventions only: • When participants self-administer study intervention(s) at home, compliance with study intervention will be assessed at each scheduled study visit. Compliance will be documented in the source records and eCRF. Deviation(s) from the prescribed dosage regimen should be recorded in the eCRF.",
        "• Participants will be required to return all bottles of study medication at the start of the next cycle. A record of the quantity of study intervention dispensed to, and administered by, each participant must be maintained and reconciled with study intervention and compliance records. Intervention start and stop dates, including dates for intervention delays and/or dose reductions will also be recorded in the eCRF.",
        "• The investigator or delegated Investigational Product Storage Manager is responsible for managing the study intervention from receipt by the study site until the destruction or return of all unused study intervention."
      ],
      "chips": [
        "VECTRA-01",
        "p95/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v095.jpg",
      "cap": "Protocol page 95 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 96 of 221 · Protocol body · page 96",
      "audio": [
        "6.6 Dose Modification When an actinium-225 zadavotide guraxetan-related toxicity is observed, dose discontinuation, delays, and/or reductions must follow the guidance described in the Toxicity Management Guidelines. For management of toxicities due to standard of care agents (cabazitaxel, A R P I, or radium-223), refer to the locally approved Prescribing Information or manage in accordance with institutional guidelines.",
        "6.7 Continued Access to Study Intervention After the End of the Study As described in Section 4.4, the study will remain open until all participants have discontinued study intervention and/or completed their last expected visit/contact. All participants receiving actinium-225 zadavotide guraxetan are expected to have completed study intervention prior to the final DCO for this study.",
        "After the final DCO for this study, where appropriate, AstraZeneca will continue to supply standard of care study intervention to participants who were randomised to receive standard of care study intervention until disease progression occurs as judged by the investigator or until meeting any other discontinuation criteria, as defined in Section 7.1. Participants should be followed according to the institution’s standard of care assessments.",
        "No further data collection is required, except for reporting of SAEs. In the event a roll-over or safety extension study is available, participant(s) currently receiving treatment with standard of care study intervention may then be transitioned to such a study, and the current study may reach its end. The roll-over or extension study would ensure treatment continuation with visit assessments per its protocol, as applicable.",
        "Any participant who would be eligible to move to such a study would be given a new informed consent, as applicable. 6.8 Treatment of Overdose All handling of radiopharmaceuticals must be carried out in restricted areas by persons trained and authorised in the safe use, handling, and administration to humans of radiopharmaceuticals.",
        "In the case of overdosing and underdosing of a study intervention, even if asymptomatic or not fulfilling the seriousness criterion, the overdose is to be reported immediately (within 24 hours of the time the investigator becomes aware of it) using the S A E Report Form. For this study, actinium-225 zadavotide guraxetan will be reported as an overdose if the administered dose exceeds the prescribed dose by 10% or more.",
        "actinium-225 zadavotide guraxetan will be reported as underdosed if the administered dose is 10% or more below the prescribed dose. However, if clinically or operationally necessary, sites may administer a dose up to 20% below the prescribed dose with Sponsor approval."
      ],
      "chips": [
        "VECTRA-01",
        "p96/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v096.jpg",
      "cap": "Protocol page 96 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 97 of 221 · In the event of an overdose, the radiation absorbed dose to the participant should…",
      "audio": [
        "In the event of an overdose, the radiation absorbed dose to the participant should be reduced where possible by increasing the elimination of the radionuclide from the body (by frequent micturition or by forced diuresis and frequent bladder voiding). The participant should be subsequently monitored for 2 hours for possible immediate adverse reactions for overdose.",
        "There is currently no recommended specific treatment in the event of overdose of actinium-225 zadavotide guraxetan and no known antidote to actinium-225 zadavotide guraxetan available. Possible symptoms of overdose are not established. For participants receiving standard of care (cabazitaxel, A R P I, or radium-223), refer to the local Prescribing Information for treatment of cases of overdose.",
        "6.9 Prior and Concomitant Therapy Any medication or vaccine (including over-the-counter or prescription medicines, recreational drugs, vitamins, and/or herbal supplements) that the participant (except for screen failures) is receiving at the time of enrolment or receives during the study including the end of treatment visit, and the Safety Follow-up period must be recorded along with: • Reason for use • Dates of administration including start and end dates • Dosage",
        "information including dose, frequency and route If any concomitant therapy is administered due to new or unresolved AEs, it should be recorded. Participants must be instructed not to take any medications, including over-the-counter products, and/or complimentary alternative medicines/herbal products without first consulting with the investigator. The Study Clinical Lead should be contacted if there are any questions regarding concomitant or prior therapy.",
        "6.9.1 Prohibited Drugs The following concomitant treatments are not allowed during study intervention: • Investigational agents • Cytotoxic chemotherapy • Immunotherapy • Other systemic radioisotopes (eg, radium-223) • Hemi-body radiotherapy treatment"
      ],
      "chips": [
        "VECTRA-01",
        "p97/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v097.jpg",
      "cap": "Protocol page 97 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 98 of 221 · The use of any natural/herbal products or other “folk remedies” is not allowed, but…",
      "audio": [
        "The use of any natural/herbal products or other “folk remedies” is not allowed, but use of these products, as well as use of all vitamins, nutritional supplements, and all other concomitant medications must be recorded in the eCRF. 6.9.2 Medications to be Used With Caution The potential of actinium-225 zadavotide guraxetan to be associated with drug-drug interactions has not been established.",
        "Nephrotoxicity is a potential risk of treatment with actinium-225 zadavotide guraxetan, therefore, medications that might affect renal function should be avoided where possible, or used with caution if necessary. 6.9.3 Drug-drug Interactions There is no information to date on drug-drug interactions with actinium-225 zadavotide guraxetan either pre-clinically or in participants.",
        "For standard of care interventions, refer to the Prescribing Information for information regarding drug-drug interactions."
      ],
      "chips": [
        "VECTRA-01",
        "p98/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v098.jpg",
      "cap": "Protocol page 98 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 99 of 221 · DISCONTINUATION OF STUDY INTERVENTION AND PARTICIPANT DISCONTINUATION/WITHDRAWAL…",
      "audio": [
        "7 DISCONTINUATION OF STUDY INTERVENTION AND PARTICIPANT DISCONTINUATION/WITHDRAWAL Discontinuation of specific sites or of the study as a whole are handled as part of Appendix A. 7.1 Discontinuation of Study Intervention Note that discontinuation from study intervention is not the same thing as a discontinuation or withdrawal from the study (see Section 7.2). If study intervention is permanently discontinued, the participant should, if at all possible, remain in the study.",
        "The investigator should instruct the participant to contact the site before, or at the time, study intervention is stopped. A participant that decides to discontinue study intervention must always be asked about the reason(s) and the presence of any AEs. The reason for discontinuation should be documented in the source records and the appropriate section of the eCRF.",
        "Participants who have permanently discontinued from further receipt of study intervention will need to be discontinued from the I R T/R T S M. All study intervention should be returned by the participant at their next on-site study visit or unscheduled visit, if applicable.",
        "Participants must be discontinued from study intervention in the following situations: • B I C R-confirmed radiological progression by RECIST 1.1 and/or PCWG3 (see Section 8.2.1), except for the cases described in Section 7.1.1. • Investigator determination that the participant is no longer benefitting from study intervention.",
        "• Delay in actinium-225 zadavotide guraxetan dosing (due to AE) of 6 weeks (42 days) or more beyond the next planned treatment, unless the delay is attributable to dose delivery/manufacturing or site scheduling of administration, or unless, in exceptional circumstances, resumption of study treatment following a delay of more than 42 days due to an AE has been agreed following discussion with the AstraZeneca study physician.",
        "• An AE that, in the opinion of the investigator or AstraZeneca, contraindicates further dosing. • Any AE that meets criteria for discontinuation defined in the dose modification guidelines for management of study intervention-related toxicities (see Section 6.6) or as defined in the local Prescribing Information for the standard of care agent. • Participant decision to discontinue treatment.",
        "The participant is at any time free to discontinue treatment, without prejudice to further treatment. A participant who discontinues treatment is normally expected to continue to participate in the study (eg, for safety and"
      ],
      "chips": [
        "VECTRA-01",
        "p99/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v099.jpg",
      "cap": "Protocol page 99 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 100 of 221 · survival follow-up) unless they specifically withdraw their consent to all further…",
      "audio": [
        "survival follow-up) unless they specifically withdraw their consent to all further participation in any study procedures and assessments (see Section 7.2). • Withdrawal of consent from study intervention administration. • Severe non-compliance with the protocol, as judged by the investigator or AstraZeneca. • Required use of prohibited concomitant treatment (see Section 6.9.1). • Initiation of subsequent anticancer therapy, including another investigational agent.",
        "• At the discretion of the Sponsor or investigator for safety, behavioural, compliance, or administrative reasons. See the SoAs for data to be collected at the time of discontinuation of study intervention and follow-up and for any further evaluations that need to be completed.",
        "7.1.1 Treatment Beyond Progression Participants may remain on study intervention following B I C R-confirmed radiographic progression by RECIST 1.1/PCWG3 if, in the opinion of the investigator and with the agreement of the Sponsor and/or Medical Monitor, they continue to derive clinical benefit from the study intervention and if the following criteria are met: • Absence of symptoms and signs indicating clinically significant progression of disease.",
        "• No decline in E C O G performance status. • Absence of symptomatic rapid disease progression requiring urgent medical intervention (eg, symptomatic pleural effusion, spinal cord compression). 7.1.2 Follow-up of Participants Post-discontinuation of Study Intervention All participants who discontinue the study intervention will be followed up for safety assessments. Assessments to be performed at the follow-up visits are detailed in the SoAs.",
        "Participants who have discontinued study intervention prior to centrally confirmed objective RECIST 1.1/PCWG3-defined radiographic progression will be followed up with tumour assessments according to the SoAs until centrally confirmed objective RECIST 1.1/PCWG3-defined PD or death, regardless of whether or not the participant started a subsequent anticancer therapy, unless they have withdrawn all consent to study-related assessments.",
        "Subsequent anticancer therapy (including surgery and radiation therapy) will be assessed and recorded from the end of treatment with study intervention through the follow-up period or until death for participants who have discontinued study intervention, including at PD."
      ],
      "chips": [
        "VECTRA-01",
        "p100/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v100.jpg",
      "cap": "Protocol page 100 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 101 of 221 · Protocol body · page 101",
      "audio": [
        "7.1.3 Follow-up for Survival Participants will be followed up for survival status as indicated in the SoAs until death, withdrawal of consent, or the end of the study. Survival information may be obtained via telephone contact with the participant or the participant’s family, or by contact with the participant’s current physician. Additional assessments, including subsequent anticancer therapy, are to be recorded at the time of survival follow-up and are detailed in the SoAs.",
        "7.2 Participant Discontinuation/Withdrawal From the Study Discontinuation of the participant from the study by the investigator: • A participant may be discontinued from the study at any time at the discretion of the investigator for any reason. • At the time of discontinuing from the study, if the participant has not been discontinued from the study intervention, see Section 7.1.",
        "Voluntary withdrawal from the study by the participant: • A participant may withdraw from the study at any time at the participant’s own request for any reason (or without providing any reason) without any implication on participant’s rights.",
        "• A participant who wishes to withdraw from the study must be informed by the investigator about modified follow-up options to ensure the collection of endpoints and safety information including new AEs and follow-up on any ongoing AEs and concomitant medications (eg, telephone contact at 30 days [+ 7 days] after study intervention is discontinued, a contact with a relative or treating physician, or information from medical records).",
        "• If the participant withdraws consent for disclosure of future information, AstraZeneca may retain and continue to use any data collected before such a withdrawal of consent. • If the participant withdraws from the study, AstraZeneca may retain and continue to use any samples collected before such a withdrawal of consent for the purposes the participant originally consented unless the participant withdraws consent for use of samples already collected.",
        "If the participant specifically withdraws consent for any use of samples, it must be documented in the site study records by the investigator and the investigator must inform the Local and Global Study Team. Destruction of any samples taken and not yet tested should be carried out in line with documented sample withdrawal wishes in conjunction with what was stated in the informed consent and local regulation.",
        "7.3 Lost to Follow-up A participant will be considered lost to follow-up if the participant repeatedly fails to return for scheduled visits and no contact has been established by the time the study is completed"
      ],
      "chips": [
        "VECTRA-01",
        "p101/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v101.jpg",
      "cap": "Protocol page 101 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 102 of 221 · Protocol body · page 102",
      "audio": [
        "(Section 4.4), such that there is insufficient information to determine the participant’s status at that time. Participants who have been contacted, including telephone contact, and decline to continue participation in the study, should be documented as “withdrawal of consent” rather than “lost to follow-up.” Investigators should document attempts to re-establish contact with missing participants throughout the study period.",
        "If contact with a missing participant is re-established, the participant should not be considered lost to follow-up and evaluations should resume according to the protocol. The following actions must be taken if a participant fails to return to the study site for a required study visit: • The site must attempt to contact the participant and reschedule the missed visit as soon as possible.",
        "The participant should be counselled on the importance of maintaining the assigned visit schedule and ascertain whether the participant should, or wishes to and/or should continue in the study.",
        "• Before a participant is deemed lost to follow-up, the investigator or designee must make every effort to regain contact with the participant (where possible, 3 telephone calls, texts, emails, and if necessary, a certified letter to the participant’s last known mailing address or local equivalent methods). These contact attempts should be documented in the participant’s medical record.",
        "• Should the participant continue to be unreachable, the participant will be considered to have been lost to follow-up. • Site personnel, or an independent third party, will attempt to collect the vital status of the participant during survival follow-up within legal and ethical boundaries for all participants randomised, including those who did not get study intervention. Public sources may be searched for vital status information.",
        "If vital status is determined as deceased, this will be documented, and the participant will not be considered lost to follow-up. Sponsor personnel will not be involved in any attempts to collect vital status information.",
        "In order to support key efficacy endpoints of radiographic P F S and overall survival analyses, the survival status of all participants in the FAS and the SAF should be checked within 7 days of the DCO date; this includes those participants who withdrew consent or are classified as “lost to follow-up”.",
        "• Lost to follow-up - Site personnel should check hospital records and a publicly available death registry (if available), as well as checking with the participants’ current physician, to obtain a current survival status (the applicable eCRF modules will be updated). • In the event that the participant has actively withdrawn consent to the processing of their personal data, the survival status of the participant can be obtained by site personnel from"
      ],
      "chips": [
        "VECTRA-01",
        "p102/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v102.jpg",
      "cap": "Protocol page 102 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 103 of 221 · publicly available death registries (if available) where it is possible to do so…",
      "audio": [
        "publicly available death registries (if available) where it is possible to do so under applicable local laws to obtain a current survival status."
      ],
      "chips": [
        "VECTRA-01",
        "p103/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v103.jpg",
      "cap": "Protocol page 103 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 104 of 221 · STUDY ASSESSMENTS AND PROCEDURES • Study procedures and their timing are summarised…",
      "audio": [
        "8 STUDY ASSESSMENTS AND PROCEDURES • Study procedures and their timing are summarised in the SoAs in Section 1.3. Requirements for data collection following study analysis until the end of the study are described below. Protocol waivers or exemptions are not allowed. • A time period of ~ 7 days from randomisation to C1D1 in Arm A may be required to accommodate manufacturing and delivery of actinium-225 zadavotide guraxetan.",
        "• Urgent safety concerns should be discussed with AstraZeneca immediately upon occurrence or awareness to determine if the participant should continue or discontinue study intervention. • The investigator will ensure that data are recorded on the eCRFs. The RAVE Web Based Data Capture system will be used for data collection and query handling.",
        "• The investigator will ensure the accuracy, completeness, and timeliness of the data recorded, and of the provision of answers to data queries according to the Clinical Study Agreement. The investigator will sign the completed eCRFs. A copy of the completed eCRFs will be archived at the study site. • Adherence to the study design requirements, including those specified in the SoAs, is essential and required for study conduct.",
        "• All screening evaluations must be completed and reviewed to confirm that potential participants meet all eligibility criteria. The investigator will maintain a screening log to record details of all participants screened and to confirm eligibility or record reasons for screening failure, as applicable.",
        "• Procedures conducted as part of the participant’s routine clinical management (eg, PSA measurements, blood counts, and imaging assessments) and obtained before signing of the ICF may be utilised for screening or baseline purposes provided the procedures met the protocol-specified criteria and were performed within the time frame defined in the SoAs. • Instructions for the collection and handling of HBS will be provided in the study-specific Central Laboratory Manual.",
        "Samples should be stored in a secure storage space with adequate measures to protect confidentiality. For further details on handling of HBS, see Appendix C. • The participant will be required to collect some data using a digital application. The data to be collected are PROs related to disease-related symptoms, treatment tolerability, physical function, and QoL.",
        "• In the event of a significant study-continuity issue (eg, caused by a pandemic), alternate strategies for participant visits, assessments, medication distribution, and monitoring may be implemented by AstraZeneca or the investigator, as per local Health Authority/ethics requirements."
      ],
      "chips": [
        "VECTRA-01",
        "p104/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v104.jpg",
      "cap": "Protocol page 104 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 105 of 221 · Data Collection Following Study Analysis until the End of the Study: • Study…",
      "audio": [
        "Data Collection Following Study Analysis until the End of the Study: • Study intervention administration must continue to be reported if participants continue study intervention. • Imaging assessments must continue until investigator-assessed rPD.",
        "• Survival status and safety data must be collected for all participants, and information regarding subsequent anticancer therapy must be collected if participants started anticancer therapy, according to the Safety Follow-up and Long-term Follow-up schedule. • No central laboratory sample collections are required for participants following final DCO.",
        "After the final DCO, in the event a roll-over or safety extension study is available, participants may be transitioned to such a study, and the current study may reach its end. The roll-over or extension study would ensure continuation with visit assessments per its protocol, as applicable. Any participant who would be eligible to move to such a study would be given a new informed consent, as applicable.",
        "8.1 Administrative and General/Baseline Procedures 8.1.1 Demographics Demographic data are collected as per local regulations to allow this study to include participants with a variety of lived experiences and living conditions, as well as characteristics like race, ethnicity, and age. This allows all communities to benefit from the scientific advances that will be obtained from this study.",
        "It is also essential that possible differences in efficacy or safety, which could be based on the population characteristics, are identified. 8.1.2 Medical History Medical history will be collected as specified in the SoAs (Section 1.3).",
        "The medical history of each participant will be obtained, including: • Clinically significant diagnoses, including allergies/hypersensitivities, xerostomia, xerophthalmia, and prior cancer(s) that are not under current investigation, and major surgeries. • Prior and concomitant medications (within 30 days of the date the ICF was signed). • Substance usage (tobacco, alcohol, recreational drugs).",
        "Medical history relating to the cancer under current investigation will be obtained, including: • Tumour stage at time of initial diagnosis and at time of screening. • Any tumour molecular/genetic testing results (if available)."
      ],
      "chips": [
        "VECTRA-01",
        "p105/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v105.jpg",
      "cap": "Protocol page 105 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 106 of 221 · • Histopathology records (if available)",
      "audio": [
        "• Histopathology records (if available). • Prior systemic anticancer therapy(ies), including prior neoadjuvant, adjuvant, and maintenance therapy(ies) (dates, duration, intent, and outcome of treatment). • Prior radiation therapy. • Prior cancer-related surgical procedures (type of procedures and dates). • Date and type of progression (eg, PSA, radiological, bone, or no clinical benefit).",
        "• PSA history including dates and results of at least the 2 most recent measurements prior to informed consent. Transfusion History Details of any blood transfusions performed within the 120 days prior to the start of study intervention should be recorded in the eCRF, including: • Date of the transfusion. • Clinical indication for the transfusion (eg, bleeding or myelosuppression). • Type of blood product transfused and the number of units transfused.",
        "8.2 Efficacy Assessments Planned timepoints for all efficacy assessments are provided in the SoAs in Section 1.3.",
        "8.2.1 Imaging Tumour Assessments 8.2.1.1 P S M A PET-positive Eligibility Assessment A P S M A PET/CT scan obtained with P S M A ligands (gallium-68-P S M A-11 or fluorine-18 D C F P y L) must be performed during screening within 42 days of, and no later than 1 week before, randomisation (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval).",
        "Participants must have a positive P S M A PET finding, defined as greater than or equal to 1 P S M A-positive metastatic lesion(s) (tracer uptake greater than that observed in the liver).",
        "Participants will be considered ineligible if any intraprostatic lesion or any 1 lesion larger than size criteria (organs greater than or equal to 1 cm in longest diameter, lymph nodes greater than or equal to 2.5 cm in short axis, and bones [soft tissue component] greater than or equal to 1 cm in longest diameter), measured on the CT scan, has uptake of PET tracer less than or equal to uptake in normal liver.",
        "Participant eligibility must be confirmed by the Sponsor central reader. The investigator must send the screening P S M A PET/CT and CT/MRI scans to the iCRO as soon as possible for an expedited review, and will receive a report confirming, or not, the participant eligibility. A participant can only be randomised once the central reader has confirmed eligibility."
      ],
      "chips": [
        "VECTRA-01",
        "p106/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v106.jpg",
      "cap": "Protocol page 106 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 107 of 221 · Protocol body · page 107",
      "audio": [
        "8.2.1.2 RECIST 1.1 and PCWG3 Efficacy Assessments Tumour assessments will be performed during screening and at regular (follow-up) intervals during study intervention every 8 weeks ( plus or minus 1 week) for the first 32 weeks and Q12W ( plus or minus 1 week) afterward using a CT (preferred) or MRI scan for soft tissue of chest, abdomen, and pelvis, and a bone scan.",
        "Any other areas of disease involvement should be additionally imaged at screening based on known metastasis sites or by the signs and symptoms of individual participants. The imaging modality used for baseline tumour assessment should be kept consistent at each subsequent follow-up assessment throughout the study if possible. It is important to follow the tumour assessment schedule as closely as possible (refer to the SoAs in Section 1.3).",
        "Screening imaging must be performed within 28 days prior to randomisation. When investigators assess radiographic progression as defined per RECIST 1.1 and/or PCWG3 they will need to request for an expedited verification of PD by the imaging vendor. If the B I C R confirms progression the scheduled follow-up scans can stop, however if the B I C R do not confirm progression then tumour assessment follow-ups must continue as per the SoA.",
        "If an unscheduled assessment is performed (eg, to investigate clinical signs/symptoms of progression) and the participant has not progressed, every attempt should be made to perform the subsequent assessments at the next scheduled visit. Guidelines for the application of RECIST 1.1 and PCWG3 criteria are provided in Appendix F. 8.2.1.3 P S M A PET Follow-up Assessment The P S M A PET/CT scan obtained at screening will serve as a baseline for the follow-up P S M A PET.",
        "In addition to the screening P S M A PET/CT scan, optional P S M A PET/CT scans should be obtained at Week 21 ( plus or minus 1 week) relative to C1D1 and another upon PSA rise. The PSA progression triggering the post-PSA rise P S M A PET/CT scan is defined as a PSA increase of greater than or equal to 25% and greater than or equal to 2 ng/mL compared to nadir as per PCWG3-defined PSA progression.",
        "The same radiotracer used at screening (gallium-68-P S M A-11 or fluorine-18 D C F P y L) should be used for follow-up assessments. 8.2.2 Central Reading of Scans Images, including unscheduled visit scans, P S M A PET/CT scans and dosimetry-related scans for the relevant participants, will be collected on an ongoing basis and sent to an AstraZeneca-appointed iCRO for quality control, and storage.",
        "Digital copies of all original scans should be stored at the investigator site as source documents. Electronic image transfer from the sites to the iCRO is strongly encouraged. Independent central review will be applied to confirm the presence of P S M A-positive status at screening for eligibility to enter the study (see Section 8.2.1.1)."
      ],
      "chips": [
        "VECTRA-01",
        "p107/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v107.jpg",
      "cap": "Protocol page 107 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 108 of 221 · BICR will be applied to confirm rPD as assessed by the investigator (see Section 8",
      "audio": [
        "B I C R will be applied to confirm rPD as assessed by the investigator (see Section 8.2.1.2). After the primary radiographic P F S analysis, central review of scans will no longer be required, and investigators will be advised when to stop sending copies of the scans to the iCRO conducting the central review; however, digital copies of all original scans should continue to be stored at the investigator site as source documents.",
        "Further details of the B I C R, and any on-study revisions of criteria for independent central review, will be documented in an Independent Review Charter. 8.2.3 Overall Survival Assessments for survival will be conducted every 8 weeks following treatment discontinuation for 16 weeks, then every 24 weeks for a total of 5 years from the end of treatment visit.",
        "Survival information may be obtained via telephone contact with the participant, participant’s family, by contact with the participant’s current physician, or local death registries, as described in Section 7.1.3. The study may continue monitoring participants for overall survival up to the scheduled final analysis, beyond planned IAs, to provide more refined estimates of treatment effects for survival.",
        "Note: Survival calls will be made following the DCO date for the analysis (these contacts should generally occur within 7 days of the DCO date). If participants are confirmed to be alive or if the death date is after the DCO date, then these participants will be censored at the date of DCO.",
        "8.2.4 Clinical Outcome Assessments A COA is any assessment that may be influenced by human choices, judgement, or motivation, and may support either direct or indirect evidence of treatment benefit. PRO assessment is a type of COA and is a general term referring to all outcomes and symptoms that are directly reported by the participant.",
        "PROs have become important in evaluating the efficacy and tolerability of study interventions in clinical studies and will aid in understanding of the benefit/risk evaluation (Kluetz et al 2018). The following PRO instruments will be administered in this study, in the order shown: • BPI-SF (Item 3 only) • Analgesic log • PRO-CTCAE • PGI-TT • EORTC IL66 (EORTC QLQ-C30 physical function scale and global QoL scale) • PGIS • EQ-5D-5L"
      ],
      "chips": [
        "VECTRA-01",
        "p108/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v108.jpg",
      "cap": "Protocol page 108 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 109 of 221 · PRO instruments will be administered according to the SoA",
      "audio": [
        "PRO instruments will be administered according to the SoA. The PRO instruments will be completed by participants if a linguistically validated version is available in their language for the country in which they reside. 8.2.4.1 BPI-SF (Item 3 Only) The BPI-SF is a validated, 15-item domain-specific instrument which was developed to assess the severity of pain and the impact/interference of pain on daily functions (Cleeland and Ryan 1994).",
        "The pain severity domain is comprised of 4 items (Items 3 to 6) which respectively assess pain at its “worst”, “least”, “average”, and “right now”. These items are scored using a 0 to 10 numeric rating scale, ranging from 0 = “No Pain” to 10 = “Pain as Bad as You Can Imagine”. In this study, Item 3 (“worst pain in 24 hours”) will be used as a single item to help assess TTPP (along with an analgesic log).",
        "8.2.4.2 Analgesic Log Participants will record details about analgesic medication use using the analgesic log. The analgesic log is specific to this study and includes the following: • Medication list: This list will be developed and will contain approved analgesic drug names, including generic names and formulations. This list may be updated over the course of the study via an approval workflow process, if necessary.",
        "• eCOA medication questionnaire: This questionnaire will allow participants to record analgesic medication use. In this study, the analgesic log will be used to help assess TTPP (along with the BPI-SF). Information pertaining to all analgesics used by participants will be collected using the log, but to assess TTPP, only changes in opioids are considered.",
        "Opioids consumed by participants will be converted as part of data analysis into OMEs to use in the AQA, as developed by Chung et al 2014.",
        "The AQA is an 8-point scale that assigns a score as follows: • 0 = No analgesic • 1 = Non-opioid analgesics • 2 = Weak opioids (eg, codeine, tramadol) • 3 = Strong opioids less than or equal to 75 mg OME per day • 4 = Strong opioids > 75 to 150 mg OME per day • 5 = Strong opioids > 150 to 300 mg OME per day • 6 = Strong opioids > 300 to 600 mg OME per day • 7 = Strong opioids > 600 mg OME per day Refer to the SAP for details for conversion and calculation of the AQA to help",
        "assess TTPP."
      ],
      "chips": [
        "VECTRA-01",
        "p109/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v109.jpg",
      "cap": "Protocol page 109 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 110 of 221 · Protocol body · page 110",
      "audio": [
        "8.2.4.3 PRO-CTCAE The PRO-CTCAE is included to address tolerability from the participants’ perspective. It was developed by the NCI. It was developed in recognition that collecting side effect data directly from participants using PRO tools can improve the accuracy and efficiency of symptomatic AE data collection.",
        "This was based on findings from multiple studies demonstrating that physicians and nurses underestimate side effect onset, frequency, and severity in comparison with participant ratings (Litwin et al 1998; Sprangers and Aaronson 1992). Items mirror the CTCAE items, and side effects have been converted to participant terms (eg, the CTCAE term “myalgia” has been converted to “aching muscles”).",
        "For several symptoms, additional questions are asked about the frequency, severity, and interference with usual activities. The items included in the PRO-CTCAE have undergone extensive qualitative review among experts and participants. These items have been extensively evaluated by cancer patients to be clear, relevant, and measure the symptom of interest. In this study, only items that are considered relevant for the study, site of cancer, and cancer treatment are selected.",
        "The items pre-selected for this study include fatigue, diarrhoea, nausea, numbness/tingling, and dry mouth. These items are based on a review of the core symptom set from the NCI, as well as expected treatment-related symptoms. The free-text item in the PRO‑CTCAE instrument is not included in the study, as the utility of this information and the analysis method have not been established.",
        "8.2.4.4 PGI-TT The PGI-TT item is included to assess how a participant perceives the overall burden of treatment-related side effects of cancer treatment over the past 7 days. Participants will be asked to choose the response that best describes the level of burden by the side effect of their cancer treatment over the past week. The response options are: “not at all”, “a little bit”, “somewhat”, “quite a bit”, and “very much”.",
        "This item is included to aid in the interpretation of other PRO measures and to evaluate the overall impact of treatment-related side effects. 8.2.4.5 EORTC IL66: Selected Items From the EORTC QLQ-C30 The EORTC IL is an online platform comprised of more than 900 individual items from over 60 EORTC questionnaires.",
        "Selecting items from EORTC IL offers new opportunities to leverage existing EORTC items for capturing additional symptoms that are relevant to a given study, as the static questionnaires might not always be sufficient to meet the demands of quickly evolving treatment modalities. The EORTC requirements dictate that any unique combination of items included within a single form must be designated as a separate and unique instrument.",
        "Therefore, select short forms with overlapping items are assigned a unique EORTC identifier. The EORTC IL66 will be used in this study and includes select items from the EORTC QLQ-C30. The EORTC QLQ-C30 was developed by the EORTC QoL Group 1993. It consists of"
      ],
      "chips": [
        "VECTRA-01",
        "p110/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v110.jpg",
      "cap": "Protocol page 110 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 111 of 221 · items and measures symptoms, functioning, and global health status/QoL for all…",
      "audio": [
        "30 items and measures symptoms, functioning, and global health status/QoL for all cancer types (Aaronson et al 1993).",
        "Questions are grouped into 5 multi-item functional scales (physical, role, emotional, cognitive, and social), 3 multi-item symptom scales (fatigue, pain, and nausea/vomiting), a 2-item global QoL scale, 5 single items assessing additional symptoms commonly reported by cancer participants (dyspnoea, loss of appetite, insomnia, constipation, and diarrhoea), and 1 item on the financial impact of the disease.",
        "The EORTC QLQ-C30 is a valid and reliable PRO instrument in this participant population). The EORTC IL66 includes selected items from the EORTC QLQ-C30: the 5 multi-item physical function scale to measure physical function and the 2-item global QoL scale to measure global QoL. 8.2.4.6 PGIS The PGIS item is a single-item questionnaire assessing how a participant perceives the overall severity of cancer symptoms over the past 7 days.",
        "The response options are: “None”, “Mild”, “Moderate”, and “Severe”. This item is included to aid in the interpretation of other PRO measures and to evaluate the overall impact of treatment on the global severity of cancer symptoms. 8.2.4.7 EQ-5D-5L The EQ-5D-5L will be used to explore the impact of treatment and disease state on health state utility.",
        "The EQ-5D-5L, developed by the EuroQoL Group, is a generic questionnaire that provides a simple descriptive profile of health and a single index value for health status used for economic appraisal (EuroQol 2019). The EQ-5D-5L questionnaire is comprised of 6 questions that cover 5 dimensions of health (eg, mobility, self-care, usual activities, pain/discomfort, and anxiety/depression).",
        "Respondents also assess their health today using the EuroQol Visual Analogue Scale (EQ-VAS), which ranges from 0 (worst imaginable health) to 100 (best imaginable health). 8.2.4.8 Administration of Electronic PRO Questionnaires Baseline PRO questions should be completed for eligible participants only (ie, excluding screening failures) after randomisation and before the first dose of the study intervention.",
        "PRO questionnaires completed at sites must be completed prior to treatment administration performed at the site and ideally before any discussions of health status to avoid biasing the participant’s responses to the questions. As feasible, site staff should also ensure that PRO questionnaires are completed prior to other study procedures, such as collection of laboratory samples, to further minimise bias.",
        "Each site must allocate the responsibility for the administration of the ePRO instruments to a specific individual (eg, a research nurse or study co-ordinator) and, if possible, assign a back-up person to cover if that individual is absent."
      ],
      "chips": [
        "VECTRA-01",
        "p111/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v111.jpg",
      "cap": "Protocol page 111 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 112 of 221 · A web back-up may be available to answer the questionnaires if there are technical…",
      "audio": [
        "A web back-up may be available to answer the questionnaires if there are technical problems with the device or if preferred by the participant. PRO questionnaires will be self-administered electronically at home by the participants using handheld devices at the timepoints indicated in the SoAs. The device may either belong to the participant (“bring your own device”) or be provisioned for the study by AstraZeneca.",
        "The device should be fully charged, and checked that it is fully functioning, prior to the participant’s first dosing visit. The site should ensure that the participant is trained and understands how to use the eCOA device prior to first use. Participants should complete the ePROs prior to or at the site if the assessment timepoint coincides with a scheduled site visit. Alerts will remind participants when ePRO assessments should be completed.",
        "Participants should be instructed to bring the device to all visits. The amount of time needed to complete questionnaires at each timepoint will vary based on the specific questionnaires being administered. Participants may spend more time on questionnaire completion during the first 12 weeks (they will need approximately 5 to 10 minutes per week) than subsequent weeks after the first 12 weeks (they will need approximately 3 to 10 minutes per week).",
        "The below instructions should be followed when collecting PRO data (refer to the site training material for the window of completion information): • The research nurse or appointed site staff should explain to participants the value and relevance of these data so they are motivated to comply with questionnaire completion. The participant should be informed that these questions are being asked to find out, directly from them, how they feel.",
        "• It is vital that the ePRO reporting is initiated at C1D1 as specified in the SoA to capture the effect of study intervention. The ePRO device must be charged and fully functional at the beginning of the baseline visit to ensure that the PROs can be completed at the start of the visit. • If feasible, sites should ensure that a participant completes baseline questionnaires before revealing the treatment arm allocated to the participant.",
        "• The participant should bring the ePRO device to each site visit so the research nurse or appointed site staff can check if there are available PRO questionnaires to be completed and that the device is functioning properly. • If questionnaires are completed at the site, the device should be handed back to the research nurse or appointed staff nurse, who should check that all questionnaires were completed.",
        "• PRO questionnaires should be completed by the participant in a quiet and private location. • The participant should be given sufficient time to complete the PRO questionnaires at their own speed."
      ],
      "chips": [
        "VECTRA-01",
        "p112/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v112.jpg",
      "cap": "Protocol page 112 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 113 of 221 · • When each instrument is due to be completed, the following order must be observed:…",
      "audio": [
        "• When each instrument is due to be completed, the following order must be observed: BPI-SF (Item 3 only), analgesic log, PRO-CTCAE, PGI-TT, EORTC IL66, PGIS, and EQ-5D-5L. This order will be pre-programmed into the ePRO. Not all PRO questionnaires will be administered at every timepoint. Refer to the SoAs. • The research nurse or appointed site staff should stress that the information is not routinely shared with study staff.",
        "Therefore, if the participant has any medical problems, they should discuss them with the doctor or research nurse separately from the ePRO assessment. • The research nurse or appointed site staff must train the participant on how to use the ePRO device using the materials and training provided by the ePRO vendor.",
        "• The research nurse or appointed site staff must provide guidance on who to call if there are problems with the device when the participant is completing the ePRO at home. • If technical or other device-related issues prohibit completion on the ePRO device, an appropriate back-up option may be considered with prior approval from AstraZeneca.",
        "• The research nurse or appointed site staff must remind participants that there are no right or wrong answers and avoid introducing bias by not clarifying items. • The participant should be instructed not to receive help from relatives, friends, or clinic staff when responding to the PRO questionnaires. • Participants should be instructed to bring visual aids for reading (eg, glasses or contact lenses) to the baseline visit and all subsequent visits.",
        "If visual aids are not available at the visit, PRO questionnaires may be completed after the visit during the available window. • Site staff should not read or complete the PRO questionnaires on behalf of the participant.",
        "If the participant is unable to complete the questionnaire (eg, being blind, illiterate, not fluent in the available language, or ePRO system is not ready), that participant is exempted from completing PRO questionnaires but may still participate in the study. If the ePRO system is not ready, the participant is exempt from completing the PRO questionnaires during that time only, but may still participate in the study.",
        "When the ePRO system is available, the participant is required to complete the PRO questionnaires. If the participant cannot complete the PRO questionnaires due to reasons other than being blind, illiterate, not fluent in the available language, or ePRO system is not ready, the AstraZeneca study team must be contacted to determine if they can be exempted.",
        "Participants exempted in this regard should be flagged appropriately by the site staff in the source documents and in the designated eCRF. • Questions must not be translated from an available language in the device into the language the participant speaks. • Reminders should be provided to participants, as needed, to ensure compliance with the assessment schedules.",
        "• The research nurse or appointed site staff should monitor compliance since minimising missing data is a key aspect of study success."
      ],
      "chips": [
        "VECTRA-01",
        "p113/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v113.jpg",
      "cap": "Protocol page 113 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 114 of 221 · • The research nurse or appointed site staff will review the completion status of…",
      "audio": [
        "• The research nurse or appointed site staff will review the completion status of questionnaires throughout the study and during site visits, and document the reason(s) why a participant could not complete assessments, in the source documents and in the designated eCRF.",
        "If the site receives an email notification regarding the participant’s compliance, appropriate action will be taken (eg, discussion with participant to improve compliance, a check in call from the site to ask the participant if they have any difficulties in completing questionnaires on schedule, etc). A solution to enhance/resolve compliance should be discussed with the participant. Discussions and compliance review should be reflected in source documents.",
        "8.3 Safety Assessments Planned timepoints for all safety assessments are provided in the SoAs (Section 1.3). Participants will be closely monitored during administration of study intervention and for no less than 2 hours after administration of actinium-225 zadavotide guraxetan in Arm A.",
        "8.3.1 Physical Examinations A full physical examination will be performed at screening by qualified and delegated practitioners and will include assessments of the following: general appearance, respiratory system, CV system, abdomen, skin, head and neck (including ears, eyes, nose, and throat), lymph nodes, thyroid, musculoskeletal (including spine and extremities), urogenital, endocrine, and neurological systems.",
        "Targeted physical examinations are to be used by the investigator at subsequent visits on the basis of clinical observations and symptomatology. A targeted physical examination will include, at a minimum, assessments of the CV system, oral capacity, salivary glands, and abdomen (liver and spleen). Physical examination, as well as assessment of height and weight, will be performed at the timepoints specified in the SoAs (see Section 1.3).",
        "Investigators should pay particular attention to clinical signs related to previous serious illnesses, and to new or worsening abnormalities that may qualify as AEs, see Section 8.4.4 for details. Physical examinations will be conducted by qualified and delegated practitioners (eg, physician assistant or nurse practitioner).",
        "Any physical examination finding that is assessed by the investigator as a new or clinically significant change (eg, worsening compared with the previous examination) will be considered an AE and should be documented on the AE eCRF. The injection sites will be monitored during the study at the timepoints specified. The injection site should be monitored for possible bleeding, redness, haematoma, infection, and radiopharmaceutical extravasation.",
        "Any clinically relevant changes occurring after the participant receives study intervention should be documented as a TEAE."
      ],
      "chips": [
        "VECTRA-01",
        "p114/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v114.jpg",
      "cap": "Protocol page 114 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 115 of 221 · Height will be measured at the screening visit only",
      "audio": [
        "Height will be measured at the screening visit only. Weight will be measured as part of complete physical examinations completed at the screening visit and other timepoints outlined in the SoAs (Section 1.3). 8.3.2 Vital Signs Vital signs will be measured during the study at the timepoints specified in the SoAs (Section 1.3).",
        "Vital signs will include measurements of heart rate, blood pressure, respiratory rate, body temperature (using the same method throughout the study), and oxygen saturation. Blood pressure and pulse measurements will be assessed with a completely automated device. Manual techniques will be used only if an automated device is not available.",
        "Blood pressure and pulse measurements should be taken seated and should be preceded by at least 5 minutes of rest for the participant in a quiet setting without distractions (eg, television, cell phones). Vital signs (to be taken before blood collection for laboratory tests) will consist of 1 pulse and 1 blood pressure measurement.",
        "Any vital sign results that are assessed by the investigator as clinically significant (eg, worsening compared with previous results) should be documented on the AE eCRF as described in Section 8.4.4. For any AEs of infusion reactions, the vital signs values should be entered into the eCRF. 8.3.3 Electrocardiograms No signal of QTc prolongation induced by actinium-225 zadavotide guraxetan has been observed in the TATCIST and AlphaBreak studies.",
        "However, certain agents in Arm B (eg, cabazitaxel) have QTc prolonging effects and complications. It is recommended that investigators refer to the Prescribing Information for standard of care treatments. Single 12-lead ECG recordings will be obtained at the timepoints indicated in the SoAs (Section 1.3).",
        "For the participants in Arm A who will undergo PK evaluation, single ECG readings must be obtained up to 2 hours pre-dose on Cycle 1 Day 1 and Cycle 2 Day 1, and within 15 minutes of the end of injection. Single ECGs must be performed before PK blood samples are taken. ECG recordings will be obtained using an ECG machine at the site that automatically calculates the heart rate and measures the PR, QRS, QT, and QTcF intervals.",
        "Participants should be supine for at least 3 minutes prior to ECG acquisition. All ECGs should be assessed by the investigator as to whether they are clinically significantly"
      ],
      "chips": [
        "VECTRA-01",
        "p115/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v115.jpg",
      "cap": "Protocol page 115 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 116 of 221 · Protocol body · page 116",
      "audio": [
        "abnormal. If QTcF is at the near-exclusion threshold (450 to 470 ms) or machine/read quality is inadequate, up to 2 additional ECGs should be repeated within 5 to 10 minutes of the first ECG. Situations in which ECG results should be reported as AEs are described in Section 8.4.4.",
        "8.3.4 Clinical Safety Laboratory Tests Blood and urine samples for determination of clinical chemistry, haematology (including a comprehensive metabolic panel), coagulation, urinalysis, and disease biomarkers will be taken at the timepoints indicated in the SoAs (Section 1.3). In the Long-term Follow-up period, a basic metabolic panel (including serum creatinine) is sufficient for chemistry analysis.",
        "Additional safety samples may be collected, if clinically indicated, at the discretion of the investigator. The date, time of collection, and results (values, units, and reference ranges) will be recorded on the appropriate eCRF. The clinical chemistry, haematology, and urinalysis will be performed at a local laboratory at or near to the investigator site. Sample tubes and sample sizes may vary depending on laboratory method used and routine practice at the site.",
        "Every effort should be made to obtain and provide the corresponding laboratory reference ranges. All safety laboratory results (except virology tests) must be reviewed by the investigator or designee prior to the administration of study intervention. Abnormal clinically significant laboratory results should be repeated as soon as possible (preferably within 72 hours). The laboratory variables to be measured are listed in Table 11.",
        "Table 11: Laboratory Safety Variables Haematology Absolute (or differential, %) basophil count Haemoglobin Absolute (or differential, %) eosinophil count Platelet count Absolute (or differential, %) lymphocyte count RBC count Absolute (or differential, %) monocyte count Reticulocyte count (as clinically indicated) Absolute (or differential, %) neutrophil count WBC (leukocyte count) Haematocrit P-coagulation variables (aPTT, PTT, and INR) Clinical chemistry (serum or plasma)",
        "Albumin e G F R by CKD-EPI Alkaline phosphatase Glucose (random) ALT Lactate dehydrogenase"
      ],
      "chips": [
        "VECTRA-01",
        "p116/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v116.jpg",
      "cap": "Protocol page 116 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 117 of 221 · Table 11: Laboratory Safety Variables AST Magnesium Bicarbonate (if available)…",
      "audio": [
        "Table 11: Laboratory Safety Variables AST Magnesium Bicarbonate (if available) Phosphate Blood urea nitrogen or urea Potassium Calcium Sodium Chloride Total bilirubin Creatinine Total protein Creatinine clearance Urinalysis Bilirubin Nitrite Colour and clarity/appearance pH Glucose Protein/albumin Haemoglobin/Erythrocytes/Blood (WBC, RBC) Quantitative albumin If abnormal, microscopic examination: bacteria, casts, presence of WBC and RBC Specific gravity Ketones Urine albumin",
        "creatinine ratio Leukocytes Urobilinogen Disease biomarker PSA Testosterone (serum/plasma) The investigator should assess the available results with regard to clinically relevant abnormalities in documentation. Any clinically significant abnormal laboratory values should be repeated as clinically indicated and recorded on the eCRF. Situations in which laboratory safety results should be reported as AEs are described in Section 8.4.4.",
        "Note: If a participant develops an AST or ALT greater than or equal to 3 times ULN together with TBL greater than or equal to 2 times ULN, refer to Appendix E for further instructions.",
        "All participants with CTCAE Grade 3 or 4 laboratory values at the time of completion or discontinuation from study intervention must be followed and have further tests performed until the laboratory values have returned to Grade 1 or 2, unless these values are not likely to improve because of the underlying disease. 8.3.5 Other Safety Assessments 8.3.5.1 E C O G Performance Status E C O G performance status will be assessed at the times specified in the SoAs (see Section 1.3)"
      ],
      "chips": [
        "VECTRA-01",
        "p117/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v117.jpg",
      "cap": "Protocol page 117 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 118 of 221 · based on the following: 0",
      "audio": [
        "based on the following: 0. Fully active; able to carry out all usual activities without restrictions. 1. Restricted in strenuous activity, but ambulatory and able to carry out light work or work of a sedentary nature (eg, light housework or office work). 2. Ambulatory and capable of self-care, but unable to carry out any work activities; up and about more than 50% of waking hours. 3. Capable of only limited self-care; confined to bed or chair more than 50% of waking hours. 4.",
        "Completely disabled; unable to carry out any self-care and totally confined to bed or chair. 5. Dead. 8.4 AEs, SAEs, and Other Safety Reporting The principal investigator is responsible for ensuring that all staff involved in the study are familiar with the content of this section. The definitions of an AE or S A E can be found in Appendix B.",
        "Participants or, when appropriate, a caregiver, surrogate, or the participant’s legally authorised representative will notify the investigator or designees of symptoms. These must then be assessed by the investigator and, if considered an AE, it will be reported by the investigator. The investigator and any designees are responsible for detecting, documenting, and recording events that meet the definition of an AE.",
        "Additional information for investigators in the EU/EEA regarding the reporting of AEs suspected to relate only to an authorised non-AstraZeneca auxiliary medicinal product can be found in Appendix I.",
        "AE variables The following variables will be collected for each AE: • AE (verbatim) • The date and time when the AE started and stopped • Maximum CTCAE grade and changes in CTCAE grade • Whether the AE is serious or not (see Appendix B) • Investigator causality rating against the study intervention(s) (yes or no) • Action taken with regard to study intervention(s) • AE caused participant’s withdrawal from the study (yes or no) • Administration of treatment for the AE •",
        "Outcome"
      ],
      "chips": [
        "VECTRA-01",
        "p118/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v118.jpg",
      "cap": "Protocol page 118 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 119 of 221 · In addition, the following variables will be collected for SAEs: • Date AE met…",
      "audio": [
        "In addition, the following variables will be collected for SAEs: • Date AE met criteria for S A E • Date investigator became aware of S A E • AE description • Seriousness criteria • Date of hospitalisation • Date of discharge • Probable cause of death • Date of death • Autopsy performed • Causality assessment in relation to study procedure(s) • Causality assessment to other medication The grading scales found in the revised NCI CTCAE version 6.0 will be utilised for all",
        "events. This version will be used for the duration of the study. For those events without assigned CTCAE grades, the recommendation in the CTCAE criteria that converts mild, moderate, and severe events into CTCAE grades should be used. A copy of the NCI CTCAE can be downloaded from the Cancer Therapy Evaluation Program website (http://ctep.cancer.gov). The applicable version of CTCAE should be described clearly.",
        "8.4.1 Time Period and Frequency for Collecting AE and S A E Information AEs and SAEs will be collected from the time of signature of the ICF and throughout the treatment period until the end of the Long-term Follow-up period in Arm A, and until the end of treatment visit in Arm B. Related SAEs will be collected during the Safety and Long-term Follow-up periods in Arm B.",
        "AESIs will be collected throughout the treatment period until the end of the Long-term Follow-up period in both arms. During all study periods, AEs will be captured in the eCRF.",
        "If the investigator learns of any S A E, including death, at any time after a participant has been discontinued from the study, and they consider the event to be possibly related to the study intervention or study participation, the investigator must, without undue delay, report the S A E to AstraZeneca, as described in Section 8.4.13.",
        "The investigator is obligated to perform or arrange for the conduct of supplemental measurements and/or evaluations as medically indicated or as requested by the medical monitor to elucidate the nature and/or causality of the TEAE/S A E as fully as possible. This may include additional laboratory tests, examinations, or consultation with other health professionals. Any"
      ],
      "chips": [
        "VECTRA-01",
        "p119/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v119.jpg",
      "cap": "Protocol page 119 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 120 of 221 · new or updated information will be recorded in the eCRF",
      "audio": [
        "new or updated information will be recorded in the eCRF. If a participant dies during the study, the investigator will provide the Sponsor with a copy of any postmortem findings including histopathology. Any new S A E data are to be reported to the Sponsor within 24 hours of receipt of the information. Further information regarding regulatory reporting requirements for SAEs and other specific safety information can be found in Appendix A.",
        "Collection and reporting of AEs and SAEs after the final DCO is described in Section 8.4.12.",
        "8.4.2 Follow-up of AEs and SAEs For 16 weeks from end of treatment, during the Safety Follow-up period, all participants in Arm A should be instructed to report any new or worsening related AEs that are deemed causally related to actinium-225 zadavotide guraxetan, as well as all SAEs, all AESIs, and all AEs of xerostomia and xerophthalmia, independent of relationship to actinium-225 zadavotide guraxetan, and new treatments, including hospitalisations.",
        "For the Long-term Follow-up period (for a total of 5 years from end of treatment) in Arm A, only SAEs and AEs of myelosuppression that are deemed causally related to actinium-225 zadavotide guraxetan will be collected, as well as all AESIs, and all AEs of xerostomia and xerophthalmia, independent of relationship to actinium-225 zadavotide guraxetan. If a participant starts a new anticancer treatment, the participant will be moved to the Long-term Follow-up period.",
        "During the Safety and Long-term Follow-up periods in Arm B, related SAEs and all AESIs will be collected. Other AE reporting will stop at end of treatment for participants in Arm B. Unresolved study intervention-related AEs or SAEs will be followed up until they have, in the opinion of the investigator, resolved to baseline, or have stabilised, for up to 5 years.",
        "Medical occurrences that begin prior to actinium-225 zadavotide guraxetan administration but after obtaining informed consent will be recorded on the AE page of the eCRF, and the separation of pre-treatment AEs and TEAEs will be done programmatically and reported separately. AstraZeneca retains the right to request additional information for any participant with ongoing AE(s)/S A E(s) at the end of the study, if judged necessary.",
        "8.4.3 Causality Collection The investigator must assess causal relationship between study intervention and each AE, and answer “yes” or “no” to the question “Do you consider that there is a reasonable possibility that the event may have been caused by the study intervention?” For SAEs, causal relationship should also be assessed for other medication and study procedures.",
        "Note that for SAEs that could be associated with any study procedure the causal relationship is implied as “yes”."
      ],
      "chips": [
        "VECTRA-01",
        "p120/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v120.jpg",
      "cap": "Protocol page 120 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 121 of 221 · A guide to the interpretation of the causality question is found in Appendix B",
      "audio": [
        "A guide to the interpretation of the causality question is found in Appendix B. 8.4.4 AEs Based on Examinations and Tests Deterioration as compared to baseline in protocol-mandated laboratory values, vital signs, ECGs, and physical examinations should only be reported as AEs if they meet any of the following: • Fulfil any of the S A E criteria. • Are the reason for discontinuation of the study intervention.",
        "• Are clinically relevant as judged by the investigator (which may include but is not limited to consideration as to whether intervention or non-planned visits were required or other action was taken with the study intervention, eg, dose adjustment or drug interruption).",
        "If deterioration in a laboratory value/vital sign is associated with clinical signs and symptoms, the sign or symptom will be reported as an AE and the associated laboratory result/vital sign will be considered as additional information. Wherever possible the reporting investigator should use the clinical, rather than the laboratory term (eg, anaemia versus low haemoglobin value).",
        "In the absence of clinical signs or symptoms, clinically relevant deteriorations in non-mandated parameters should be reported as AE(s). Deterioration of a laboratory value, which is unequivocally due to disease progression, should not be reported as an AE/S A E. Any new or aggravated clinically relevant abnormal medical finding at a physical examination as compared with the baseline assessment will be reported as an AE unless unequivocally related to the DUS.",
        "Refer to Section 8.4.8. The results from the protocol-mandated laboratory tests and vital signs will be summarised in the CSR. 8.4.5 AEs Based on Signs and Symptoms All AEs spontaneously reported by the participant, reported in response to the open question from the study site staff, or revealed by observation will be collected and recorded in the eCRF. When collecting AEs, the recording of diagnoses is preferred (when possible) to recording a list of signs and symptoms.",
        "However, if a diagnosis is known and there are other signs or symptoms that are not generally part of the diagnosis, the diagnosis and each sign or symptom will be recorded separately. 8.4.6 Hy’s Law Cases where a participant shows elevations in liver biochemistry may require further evaluation, and occurrences of AST or ALT greater than or equal to 3 times ULN together with TBL greater than or equal to 2 times ULN may need to be reported as SAEs.",
        "Refer to Appendix E for further instruction on cases of increases in liver"
      ],
      "chips": [
        "VECTRA-01",
        "p121/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v121.jpg",
      "cap": "Protocol page 121 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 122 of 221 · biochemistry and evaluation of Hy’s Law",
      "audio": [
        "biochemistry and evaluation of Hy’s Law. 8.4.7 Disease Progression Disease progression can be considered as a worsening of a participant’s condition attributable to the disease for which the study intervention is being studied. It may be an increase in the severity of the DUS and/or increases in the symptoms of the disease.",
        "The development of new, progression of existing, or metastasis to the primary cancer under study should be considered as disease progression and not an AE. Events which are unequivocally due to disease progression should not be reported as AEs during the study. 8.4.8 Disease Under Study Events which are unequivocally due to the DUS should not be reported as AEs during the study unless they meet S A E criteria or lead to discontinuation of the study intervention.",
        "8.4.9 New Cancers The development of a new cancer should be regarded as an AE and will generally meet at least 1 of the serious criteria (eg, important medical event). New primary cancers are those that are not the primary reason for the administration of study intervention and are identified after the participant’s inclusion in this study. They do not include metastases of the original cancer.",
        "8.4.10 Deaths All deaths that occur during the study intervention period, or within the protocol-defined follow-up periods after the administration of the last dose of study intervention (Safety Follow-up and Long-term Follow-up periods [5 years total]), must be reported as follows: • Death clearly resulting from PD should be documented in the eCRF in the Statement of Death page. It should not be reported as an S A E.",
        "• Where death is not due (or not clearly due) to PD under study, the AE causing the death must be reported as an S A E within 24 hours. It should also be documented in the Statement of Death page in the eCRF. The report should contain a comment regarding the co-involvement of PD, if appropriate, and should assign the main and contributory causes of death.",
        "• Deaths with an unknown cause should always be reported as an S A E and documented in the Statement of Death page in the eCRF, but every effort should be made to determine a cause of death. A postmortem may be helpful in the assessment of the cause of death, and if performed, a copy of the postmortem results should be forwarded to AstraZeneca Patient Safety or its representative within the usual time frames."
      ],
      "chips": [
        "VECTRA-01",
        "p122/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v122.jpg",
      "cap": "Protocol page 122 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 123 of 221 · Deaths occurring after the protocol-defined follow-up period after the…",
      "audio": [
        "Deaths occurring after the protocol-defined follow-up period after the administration of the last dose of study intervention should be documented in the Statement of Death page. If the death occurred as a result of an event that started after the defined follow-up period and the event is considered to be due to a late-onset toxicity to study intervention, then it should also be reported as an S A E.",
        "If a participant dies during the study, the investigator will provide the Sponsor with a copy of any postmortem findings including histopathology, if available. 8.4.11 AEs of Special Interest AESIs are events of scientific and medical interest specific to the further understanding of the study intervention safety profile and require close monitoring. An A E S I can be serious or non-serious. All AESIs will be recorded in the eCRF.",
        "Serious AESIs will be recorded and reported as per Section 8.4.13. An A E S I (serious or non-serious) is one of scientific and medical concern specific to the Sponsor’s product or programme, for which ongoing monitoring and rapid communication by the investigator to the Sponsor on the eCRF within 24 hours of the time the investigator first becomes aware of the A E S I. Such an event might warrant further investigation in order to characterise and understand it.",
        "Depending on the nature of the event, rapid communication by the study Sponsor to other parties (eg, regulators) might also be warranted. All participants in Arm A will be followed for AEs for up to 5 years. The Sponsor will also collect AESIs in Arm B to understand the baseline risk for AESIs in the absence of treatment with actinium-225 zadavotide guraxetan.",
        "Long-term cumulative radiation exposure may be associated with AESIs, namely increased risk of nephrotoxicity, secondary primary malignancies, including haematologic malignancies (eg, MDS or AML), or any other malignancy that in the opinion of the investigator may be related to the study intervention.",
        "During the treatment and follow-up phases of the study, all reported AEs will be assessed by the investigator to determine if they meet the definition of an A E S I and will be recorded in the eCRF. Therefore, AESIs will only be collected after the first dose of the study intervention and throughout the 5-year follow-up period. The events in Table 12 will be considered as AESIs and will be collected and recorded in the eCRF.",
        "Additional monitoring, follow-up, and reporting for each of these events will be required."
      ],
      "chips": [
        "VECTRA-01",
        "p123/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v123.jpg",
      "cap": "Protocol page 123 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 124 of 221 · Table 12: AESIs AESI topic Preferred terms (SMQ/PTs) Nephrotoxicity Chronic kidney…",
      "audio": [
        "Table 12: AESIs A E S I topic Preferred terms (SMQ/PTs) Nephrotoxicity Chronic kidney disease (SMQ, Broad) Acute renal failure (SMQ, Broad) Second primary malignancy standard of care Neoplasms benign, malignant and unspecified (incl cysts and polyps), restricted to malignant PTs only; HLGTs for benign neoplasms are excluded Abbreviations: HLGT, high level group term; SMQ, standardised medical dictionary for regulatory activities query; standard of care, system organ class.",
        "CKD is defined as a progressive loss of kidney function, characterised by a sustained decrease in GFR (GFR < 60 mL/min/1.73 m²) and/or evidence of kidney damage (eg, persistent proteinuria) lasting at least 3 months. To support the identification and reporting of CKD as an A E S I, a diagnosis of CKD based on the above criteria should be made and documented by the investigator.",
        "Referral to an internal medicine physician or nephrologist may be required for diagnosis and management. 8.4.12 Safety Data to be Collected Following the Final Data Cutoff of the Study For participants continuing to receive study intervention after the final DCO and database closure, AEs and SAEs will be collected, but only SAEs will be reported.",
        "In addition, it is recommended that participants continue the scheduled site visits and investigators monitor the participant’s safety laboratory results prior to, and periodically during treatment with study intervention in order to manage AEs, consistent with the dose modification guidelines for management of study intervention-related toxicities (see Section 6.6).",
        "All data after the final DCO and database closure will be recorded in the participant notes but, with the exception of SAEs, will not otherwise be reported for the purposes of this study. All SAEs that occur in participants still receiving study intervention after the final DCO must be reported as detailed in Section 8.4.13. 8.4.13 Reporting of SAEs All SAEs must be reported, whether or not they are considered causally related to the study intervention.",
        "All SAEs will be recorded in the eCRF during study conduct. After study completion, when the eDC is closed and an S A E needs to be reported, a paper S A E form should be used. If any S A E occurs during the study, investigators or other site personnel will inform the appropriate AstraZeneca representatives within 1 calendar day, ie, immediately but no later than 24 hours, of when he or she becomes aware of it.",
        "The designated AstraZeneca representative will work with the investigator to ensure that all the necessary information is provided to the AstraZeneca Patient Safety DES."
      ],
      "chips": [
        "VECTRA-01",
        "p124/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v124.jpg",
      "cap": "Protocol page 124 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 125 of 221 · For fatal or life-threatening AEs where important or relevant information is…",
      "audio": [
        "For fatal or life-threatening AEs where important or relevant information is missing, active follow-up will be undertaken immediately. Investigators or other site personnel will inform AstraZeneca representatives of any follow-up information on a previously reported S A E within 1 calendar day, ie, immediately but no later than 24 hours, of when he or she becomes aware of it.",
        "Once the investigators or other site personnel indicate an AE is serious in the eDC system, an automated email alert is sent to the designated AstraZeneca representative. If the eDC system is not available, then the investigator or other study site staff reports the S A E via secure method to the appropriate AstraZeneca representative.",
        "When the eDC is temporarily not accessible, the AstraZeneca Study Representative should confirm that the investigator/site staff enters the S A E in the AstraZeneca eDC when access resumes. For further guidance on the definition of an S A E, see Appendix B. For regulatory reporting requirements for SAEs, see Appendix A 1.",
        "The reference document for definition of expectedness/listedness is the IB for actinium-225 zadavotide guraxetan and the current effective version of the local Product Label for the standard of care. 8.4.14 Pregnancy Female partners of male participants should not become pregnant during the study, or within 6 months after stopping the study intervention.",
        "Male participants should agree to use acceptable forms of birth control during the study and for 6 months after stopping the study intervention. Partners of male participants who become pregnant will be followed as described below. All pregnancies and outcomes of pregnancy in the partners of male participants, with conception dates following the first date of study intervention, should be reported to AstraZeneca.",
        "After obtaining the necessary signed informed consent from the pregnant female partner directly, the investigator will record pregnancy information on the appropriate form and submit it to the Sponsor within 24 hours of learning of the partner’s pregnancy. The female partner will also be followed to determine the outcome of the pregnancy. Information on the status of the mother and child will be forwarded to the Sponsor.",
        "Generally, the follow-up will be no longer than 6 to 8 weeks following the estimated delivery date. Any termination of the pregnancy will be reported regardless of foetal status (presence or absence of anomalies) or indication for the procedure. 8.4.14.1 Paternal Exposure Non-sterilised male participants who intend to be sexually active with an FOCBP should refrain from fathering a child or donating or banking sperm for the duration of the study (from the time"
      ],
      "chips": [
        "VECTRA-01",
        "p125/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v125.jpg",
      "cap": "Protocol page 125 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 126 of 221 · of screening) and for 6 months after the last dose of study intervention",
      "audio": [
        "of screening) and for 6 months after the last dose of study intervention. 8.4.15 Medication Error, Drug Abuse, and Drug Misuse 8.4.15.1 Timelines Medication error, drug abuse, and drug misuse alone are not AEs/SAEs. All events of medication error, drug abuse, and drug misuse are to be collected for study interventions and provided to the AstraZeneca Patient Safety DES via the respective Medication Error eCRF module or Drug Abuse/Drug Misuse paper CRF forms.",
        "If an AE/S A E is associated with the medication error, drug abuse, or drug misuse, the AE/S A E eCRF modules should also be completed and sent to the AstraZeneca Patient Safety DES. If an event of medication error, drug abuse, or drug misuse occurs during the study, then the investigator or other site personnel informs the appropriate AstraZeneca representatives within 1 calendar day, ie, immediately but no later than 24 hours, from when they become aware of it.",
        "The designated AstraZeneca representative works with the investigator to ensure that all relevant information is provided to the AstraZeneca Patient Safety DES. 8.4.15.2 Medication Error For the purposes of this clinical study a medication error is an unintended failure or mistake in the treatment process for a study intervention that either causes harm to the participant or has the potential to cause harm to the participant.",
        "The full definition and examples of medication error can be found in Appendix B 4. 8.4.15.3 Drug Abuse Drug abuse is the persistent or sporadic intentional, non-therapeutic excessive use of study intervention for a perceived reward or desired non-therapeutic effect. The full definition and examples of drug abuse can be found in Appendix B 4.",
        "8.4.15.4 Drug Misuse Drug misuse is the intentional and inappropriate use (by a study participant) of study intervention for medicinal purposes outside of the authorised product information, or unauthorised study interventions, outside the intended use as specified in the protocol and includes deliberate administration of the product by the wrong route. The full definition and examples of drug misuse can be found in Appendix B 4.",
        "8.4.16 Reporting of Overdose Refer to Section 6.8 for the definition and treatment of overdose."
      ],
      "chips": [
        "VECTRA-01",
        "p126/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v126.jpg",
      "cap": "Protocol page 126 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 127 of 221 · Overdose alone is not an AE/SAE",
      "audio": [
        "Overdose alone is not an AE/S A E. All overdoses are collected for study interventions and provided to the AstraZeneca Patient Safety DES via the Overdose eCRF module. If an AE/S A E is associated with the overdose, AE/S A E eCRF modules should also be completed and sent to the AstraZeneca Patient Safety DES. An overdose without associated symptoms is only reported on the Overdose eCRF module.",
        "If an overdose on an study intervention occurs in the course of the study, the investigator or other site personnel inform appropriate AstraZeneca representatives immediately, but no later than 24 hours of when he or she becomes aware of it. For participants receiving standard of care (cabazitaxel, A R P I, or radium-223), if any overdose is associated with an AE or S A E, record the AE/S A E diagnosis or symptoms in the relevant AE modules only of the eCRF.",
        "The designated AstraZeneca representative works with the investigator to ensure that all relevant information is provided to the AstraZeneca Patient Safety DES. 8.5 Pharmacokinetics PK samples will not be collected for participants receiving standard of care in Arm B. actinium-225 zadavotide guraxetan plasma concentrations in the PK Analysis Set will be used for population PK analysis, which is reported separately to the CSR.",
        "Plasma samples will be collected for measurement of plasma concentrations of actinium-225 zadavotide guraxetan specified in the SoA for Arm A (Section 1.3). • Plasma samples will be used to analyse the PK of actinium-225 zadavotide guraxetan. • Samples collected for analyses of actinium-225 zadavotide guraxetan plasma concentration may also be used to evaluate safety or efficacy aspects related to concerns arising during or after the study.",
        "Samples may be collected at additional timepoints during the study if warranted and agreed upon between the investigator and AstraZeneca, eg, for urgent safety reasons, overdose, and this may be reflected as a protocol deviation. The timing of sampling may be altered during the study based on newly available data (eg, to obtain data closer to the time of peak or trough matrix concentrations) to ensure appropriate monitoring.",
        "Samples will be collected, labelled, stored, and shipped as detailed in the Central Laboratory Manual."
      ],
      "chips": [
        "VECTRA-01",
        "p127/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v127.jpg",
      "cap": "Protocol page 127 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 128 of 221 · For storage, re-use, and destruction of samples for PK, see Appendix C",
      "audio": [
        "For storage, re-use, and destruction of samples for PK, see Appendix C. PK samples will be disposed of after the Bioanalytical Report finalisation or 6 months after issuance of the draft Bioanalytical Report (whichever is earlier). Additional analyses may be conducted on the anonymised, pooled, or individual PK samples to further evaluate and validate the analytical method. Any results from such analyses may be reported separately from the CSR.",
        "Samples collected from participants in China will be stored and disposed of according to local laws and regulations. PK samples collected in China will be disposed of within 6 months of Bioanalytical Report publication. 8.5.1 Collection of Samples for Pharmacokinetics Blood samples will be collected for measurement of actinium-225 zadavotide guraxetan in plasma in both pre- and post-dose samples during Day 1 of Cycles 1 and 2 (Table 13).",
        "Up to ~ 50% of participants dosed will require greater PK sample volume at each timepoint to enable both analyses of drug concentration (using bioanalytical method) and radioanalysis concentrations; details will be provided in the Central Laboratory Manual. Participants and sites selected for additional PK testing will be determined and communicated by the Sponsor.",
        "Table 13: PK Timepoints and Sampling Windows Study visit PK timepoints (tolerance window) C1D1 Pre-dose (within 2 hours) Post-dose end of injection (+ 15 min) Post-dose: 3-24 hours a C2D1 Pre-dose (within 2 hours) Post-dose end of injection (+ 15 min) a At sites where overnight hospitalisation is required, this sample should be collected as late as possible, ideally between 6 hours and up to 24 hours post-dose.",
        "8.5.2 Determination of Drug Concentration Samples for determination of drug concentration in plasma and urine will be assayed by bioanalytical test sites operated by, or on behalf of, AstraZeneca, using appropriately validated bioanalytical methods.",
        "This study will use a liquid chromatography tandem mass spectrometry-based assay to determine plasma concentrations for all actinium-225 zadavotide guraxetan-dosed participants, and in up to ~ 50% of participants providing a greater sample volume, additional radioanalysis will be performed. Full details of the analytical methods used will be described in a separate Bioanalytical Report.",
        "Incurred sample reproducibility analysis, if any, will be performed alongside the bioanalysis of"
      ],
      "chips": [
        "VECTRA-01",
        "p128/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v128.jpg",
      "cap": "Protocol page 128 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 129 of 221 · the test samples",
      "audio": [
        "the test samples. The results from the evaluation, if performed, will be reported in a separate Bioanalytical Report. 8.6 Pharmacodynamics Not applicable. 8.7 Optional Genomics Initiative Collection of optional samples for Genomics Initiative research is also part of this study as specified in the SoA and is subject to participant agreement in the optional Genomics Initiative research information ICF.",
        "Blood samples for DNA and blood derivatives isolation will be collected from participants who have consented to participate in the genomic and multi-omics analysis component of the study. Participation is optional. Participants who do not wish to participate in genomic and multi-omics research may still participate in the study. See Appendix D for information regarding the Genomics Initiative genomic and multi-omics samples.",
        "Details on processes for collection and shipment and destruction of these samples can be found either in the appendices of this protocol or in the Central Laboratory Manual. Note: This sample will not be collected in China and will only be collected in other countries where locally applicable/permissible.",
        "8.8 Biomarkers 8.8.1 Mandatory Biomarker Sample Collection Samples for biomarker assessment are required and will be collected from all participants in this study as specified in the SoAs (Section 1.3). By consenting to participate in the study the participant consents to the mandatory research components of the study.",
        "8.8.1.1 Tumour Tissue Samples for Exploratory Biomarker Analysis The provision of a tumour sample, either freshly collected or an existing tumour sample is required for all screened participants according to the following criteria: • A tumour sample collected within 3 months prior to screening and after completion of the most recent anticancer treatment regimen may be substituted for a fresh tumour sample collected during screening.",
        "If no such sample is available, an archival tumour sample taken > 3 months prior to screening is acceptable. • Tissue collection is required for exploratory analyses, but is not used to determine study eligibility. The FFPE tumour sample should preferably be a tissue block, prepared by the standard local"
      ],
      "chips": [
        "VECTRA-01",
        "p129/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v129.jpg",
      "cap": "Protocol page 129 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 130 of 221 · procedure and aligning with the requirements in the Central Laboratory Manual",
      "audio": [
        "procedure and aligning with the requirements in the Central Laboratory Manual. If a block is not available, then freshly cut, unstained, serial tumour slides are acceptable. If the requirement for the minimal number of sections cannot be met, investigators should seek approval from the study Sponsor. Archival FFPE tumour tissue samples from the initial diagnosis from surgery, or core needle biopsy are accepted.",
        "Samples may be from either the primary disease setting (surgical resection or diagnostic sample) or from a metastatic lesion. Fine needle aspirates or cytology samples are not accepted. The screening tumour biopsy must not be taken from a previously irradiated lesion.",
        "Tumour lesions used for fresh biopsies should not be the same lesions used as RECIST 1.1, unless there are no other lesions suitable for biopsy, in which case only core needle (not excisional/incisional) biopsy is allowed. Collection of tumour cells from fluid such as ascites or pleural effusion is not permitted. For further details regarding sample requirements, refer to the Central Laboratory Manual.",
        "Where local regulations permit, tumour samples listed above will be tested for exploratory tumour biomarker analysis including, but not limited to: • P S M A Protein Expression. • Genomic profiling of the tumour including sequencing of a panel of HRR and cancer-related genes, assessment of genomic instability status/genomic scar, microsatellite instability status and tumour mutational burden. • Explore possible features of neuroendocrine prostate cancer.",
        "• Explore morphological and immune cell landscape to identify differences in tumour morphology as a function of outcome and a resistance. • Explore the protein expression landscape at baseline and longitudinal through targeted and global proteomics to identify differences in protein expression between responders and non-responders, as well as acquired resistance. Images of tumour tissue will be taken and stored to perform computer-aided analysis.",
        "Digital images will be treated as data. Based on emerging scientific knowledge, further analyses yet to be defined may be undertaken. Exploratory analysis may be performed to correlate tissue-based biomarker profiles with quantitative PET imaging features, with the aim of identifying relationships between molecular characteristics and functional radiographic measures of tumour burden, therapeutic response, and resistance.",
        "Note: These samples will be collected only if local laws and regulations allow. In China, these samples will be collected and tested after local regulatory approval."
      ],
      "chips": [
        "VECTRA-01",
        "p130/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v130.jpg",
      "cap": "Protocol page 130 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 131 of 221 · Protocol body · page 131",
      "audio": [
        "8.8.1.2 Mandatory Blood Sample Collection Blood samples will be obtained from all screened participants at the timepoints described in the SoA. • Blood sample for the isolation of plasma and buffy coat to enable analysis and interpretation of ctDNA, to characterise changes in mutational profile (single nucleotide variants and copy-number alterations) and allele frequency, between baseline and on treatment as a predictive marker for clinical outcomes as exploratory endpoints.",
        "The buffy coat layer obtained during the plasma isolation process of the baseline sample will be retained and analysed for mutations, eg, those that are commonly associated with chromatin immunoprecipitation. Combined analysis will aid our understanding and interpretation of ctDNA mutational analysis according to local regulations. − ctDNA samples will be analysed for predictive biomarkers of response to treatment.",
        "The sample is requested prior to treatment to maximise the probability of detecting ctDNA where the tumour burden is relatively high.",
        "− ctDNA samples taken during treatment and a final sample taken at end of treatment will be used for additional exploratory research which may include but is not limited to interrogation of changes in genetic alterations and assessment of methylation, as well as the dynamics of the biomarkers on treatment and potential mechanisms of resistance to treatment.",
        "• Blood sample for additional exploratory biomarkers to assess a range of oncology and immunological biomarkers that may correlate with drug response. These biomarkers may include but are not limited to PBMC analysis and cytokines/chemokines.",
        "• Blood samples will be obtained to enable analysis of the correlation between ctDNA dynamics and functional imaging findings (such as PET), to explore associations between molecular changes detected in plasma and radiographic measures of tumour burden and therapeutic response. This analysis may provide complementary insights into disease biology, treatment efficacy, and the timing of molecular versus radiographic changes.",
        "• Whole blood sample for RNA to conduct gene expression analysis to understand immunological changes following treatment and to assess gene signatures that may predict treatment response. Note: These samples will be collected only if local laws and regulations allow. In China, ctDNA will be collected and tested after local regulatory approval. The rest of the samples will not be collected in China.",
        "Samples collected from participants in China will be destroyed or repatriated within 1 year of the CSR. Human Genetic Resources approval will be followed for China sample collection and usage. For further details on handling of HBS, including storage, re-use and destruction, refer to"
      ],
      "chips": [
        "VECTRA-01",
        "p131/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v131.jpg",
      "cap": "Protocol page 131 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 132 of 221 · Appendix C and the Central Laboratory Manual",
      "audio": [
        "Appendix C and the Central Laboratory Manual. 8.8.1.3 Mandatory Urine Biomarker Sample Collection The urine biomarker samples will be obtained from all screened participants at the timepoints described in the SoAs (Section 1.3). The same urine sample may be used for both local safety testing (refer to Section 8.3.4) and central biomarker analysis. Refer to the Central Laboratory Manual for detailed instructions.",
        "The central analysis of urine biomarkers, which might include clusterin, osteopontin, urine cystatin C, kidney injury molecule-1, neutrophil gelatinase-associated lipocalin, and N-acetyl-beta-D-glucosaminidase, will be performed to enable the early diagnosis of renal injury. Note: This sample will be collected only if local laws and regulations allow. In China this sample will not be collected.",
        "8.8.2 Optional Biomarker Sample Collection Collection of optional samples for biomarker research is also part of this study as specified in the SoAs and is subject to agreement to optional consent. Where possible, every effort should be made to collect optional samples for biomarker research from consenting participants in the study. Note: These samples will be collected only if local laws and regulations allow.",
        "In China, these samples will be collected and tested after local regulatory approval. Samples collected from participants in China will be destroyed or repatriated within 1 year of CSR. 8.8.2.1 Optional Biomarker Sample Collection The collection of a biopsy on treatment and upon disease progression is strongly encouraged. On treatment and biopsies upon progression are optional in this study and subject to additional consent.",
        "Participants will not be excluded from the study if these samples are not collected. An optional on-treatment tumour biopsy sample (FFPE) may be obtained from the same tumour lesion as the mandatory screening tumour samples, whenever possible.",
        "Tumour lesions used for on-treatment fresh biopsies should not be the same lesions used as RECIST 1.1 TLs, unless there are no other lesions suitable for biopsy and, in this instance, only core needle (not excisional/incisional) biopsy is allowed. An optional tumour biopsy (FFPE) may be obtained upon documented progression.",
        "Biopsies upon progression may be particularly valuable when there is a marked phenotypic change in a particular lesion, and investigators are encouraged to contact AstraZeneca in these cases. The"
      ],
      "chips": [
        "VECTRA-01",
        "p132/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v132.jpg",
      "cap": "Protocol page 132 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 133 of 221 · provision of tumour tissue is encouraged only if clinically appropriate and not…",
      "audio": [
        "provision of tumour tissue is encouraged only if clinically appropriate and not considered detrimental to participant care. Samples may be tested for biomarkers including, but not limited to: P S M A expression, features of treatment-emergent small-cell neuroendocrine prostate cancer and relevant immune markers, genomic instability status, and tumour mutational burden. Images of tumour tissue will be taken and stored to perform computer-aided analysis.",
        "Digital images will be treated as data. For genetic testing, participants will need to have met the local ethical requirements for genetic tests (eg, genetic counselling) prior to the test procedure. Note: These samples will be collected only if local laws and regulations allow. In China, these samples will be collected and tested after local regulatory approval.",
        "For further details on handling of HBS, including storage, re-use and destruction, refer to Appendix C and the Central Laboratory Manual.",
        "8.8.3 Other Study-related Biomarker Research Already collected samples may be analysed on different biomarkers thought to play a role in P S M A expression DNA damage response and tumour microenvironmental including, but not limited to, serum analytes, or tissue biomarkers and/or specific candidate genes/genome-wide analysis for RNA, or candidate gene signatures to evaluate their association with observed clinical responses.",
        "During the study, in addition to the biomarkers specified above, additional exploratory analyses may be undertaken on participants’ mandatory and optional samples. Biomarker assessments may be carried out using techniques such as immunohistochemistry or other analyses of proteins and whole exome/whole genome or targeted genetic analysis of DNA/RNA in tumour and blood samples.",
        "In the case of histopathology, tissue sections and stained tumour specimens may be imaged (digitised). These images may be used to investigate an association with observed clinical responses or survival and in development of methods for predicting outcomes. Digital images will be treated as data. These additional investigations would be dependent upon clinical outcome, reagent, and sample availability.",
        "Samples collected in China will not be used for additional exploratory biomarker analyses beyond the initial tumour profiling. For storage, re-use, and destruction of biomarker samples, see Appendix C and the Central Laboratory Manual."
      ],
      "chips": [
        "VECTRA-01",
        "p133/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v133.jpg",
      "cap": "Protocol page 133 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 134 of 221 · Protocol body · page 134",
      "audio": [
        "8.9 Immunogenicity Assessments Not applicable. 8.10 Medical Resource Utilisation and Health Economics Health economics/medical resource utilisation parameters are not evaluated in this study."
      ],
      "chips": [
        "VECTRA-01",
        "p134/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v134.jpg",
      "cap": "Protocol page 134 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 135 of 221 · STATISTICAL CONSIDERATIONS A comprehensive SAP will be developed and signed off…",
      "audio": [
        "9 STATISTICAL CONSIDERATIONS A comprehensive SAP will be developed and signed off before the First Participant In. The SAP will include a more technical and detailed description of the planned statistical analyses. Any deviation from the plan will be described and justified in the CSR. This section is a summary of the planned statistical analyses of the most important endpoints including primary and secondary endpoints.",
        "9.1 Statistical Hypotheses The hypothesis of interest with regards to radiographic P F S (as a dual primary endpoint) is: • H0: There is no difference in radiographic P F S (by B I C R) between actinium-225 zadavotide guraxetan and standard of care. • H1: There is a statistically significant difference in radiographic P F S (by B I C R) between actinium-225 zadavotide guraxetan and standard of care.",
        "The hypothesis of interest with regards to overall survival (as a dual primary endpoint) is: • H0: There is no difference in overall survival between actinium-225 zadavotide guraxetan and standard of care. • H1: There is a statistically significant difference in overall survival between actinium-225 zadavotide guraxetan and standard of care.",
        "Hypotheses will be tested using an MTP with an alpha-exhaustive recycling strategy (Burman et al 2009) to strongly control the overall Type I error (familywise error rate) at a total 2-sided alpha of 5% across the planned statistical testing of the dual primary endpoints of radiographic P F S and overall survival.",
        "Multiple Testing Procedure To control Type I error, the total 2‑sided 5% alpha will be split as follows: 0.1% allocated to radiographic P F S and 4.9% allocated to overall survival. The study will strongly control the familywise Type I error at a total 2-sided alpha of 5%. An overview of the MTP is provided in Figure 6. Two analyses for overall survival (DCO2 and DCO3) are planned.",
        "The following scenarios will be considered: • If the null hypothesis for radiographic P F S is rejected, then the 0.1% alpha will be recycled, and overall survival will be tested with a 2-sided alpha of 5%. • If the null hypothesis for radiographic P F S is not rejected, then overall survival will be tested with a 2-sided alpha of 4.9%."
      ],
      "chips": [
        "VECTRA-01",
        "p135/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v135.jpg",
      "cap": "Protocol page 135 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 136 of 221 · §9.2 Sample size · 670 randomised",
      "audio": [
        "• If the null hypothesis for radiographic P F S is not rejected and the null hypothesis for overall survival is rejected, then the 4.9% alpha will be recycled and radiographic P F S will be re-tested with a 2-sided alpha of 5%. For overall survival, the alpha thresholds for the 2 data looks will be based on the O’Brien-Fleming approach.",
        "Figure 6: MTP Testing Strategy The randomisation scheme will be stratified based on a combination of intended standard of care therapy ‘A R P I’ versus “cabazitaxel” versus “radium-223”; progressed during treatment with, or within 6 weeks of last dose of, P S M A-directed β-emitting RC (yes versus no); 1 versus > 1 prior courses of taxane-based chemotherapy.",
        "The statistical significance for the dual primary endpoints of radiographic P F S and overall survival will be based upon the p-value from the stratified log-rank test. The estimated HR from the stratified Cox proportional hazards model and its 95% CI will be presented to quantify the magnitude and precision of the treatment effect. P-values for endpoints not controlled within the MTP will be reported as nominal and interpreted descriptively.",
        "9.2 Sample Size Determination To support the formal hypothesis testing for the dual primary endpoints of radiographic P F S and overall survival, ~ 670 participants are planned to be randomised in a 1:1 ratio to the 2 treatment arms.",
        "The sample size was estimated based on the planned number of ~ 399 overall survival events that must be observed for the study to have 90% cumulative power to demonstrate a statistically significant difference in overall survival at a 2-sided alpha of 4.9% accounting for an interim and a final analysis, assuming median overall survival of 10.8 months for standard of care and 15 months for actinium-225 zadavotide guraxetan (overall survival HR of 0.72).",
        "The smallest treatment difference that could be statistically significant at the final analysis, assuming a significance level of 4.9%, is an HR of 0.82, allowing for 1 IA. overall survival IA will be conducted when ~ 299 overall survival events occurred at an information fraction of ~ 75% of the target events, per O’Brien-Fleming approach to control type I error across the interim and final analyses of overall survival.",
        "Assuming the median radiographic P F S of 4 months for standard of care and 8.9 months for actinium-225 zadavotide guraxetan MTP: α=0.05 overall survival α=0.049 radiographic P F S α=0.001"
      ],
      "chips": [
        "VECTRA-01",
        "p136/221",
        "Full protocol text"
      ],
      "visual": "arms",
      "image": "assets/protocol/vectra/v136.jpg",
      "cap": "Protocol page 136 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 137 of 221 · (rPFS HR of 0",
      "audio": [
        "(radiographic P F S HR of 0.45), ~ 400 radiographic P F S events would be required for the study to have greater than 99% power to demonstrate a statistically significant difference in radiographic P F S at a 2-sided alpha of 0.1% level. The smallest treatment difference that could be statistically significant, assuming this significance level, is an HR of 0.72.",
        "With a 29-month non-uniform recruitment period, it is anticipated that the overall survival IA and the overall survival final analysis will be performed ~ 32 and 37 months after the first participant has been randomised. Approximately 1,120 participants will be screened to achieve 670 randomised to study intervention.",
        "Note: “Screened” means a participant’s, or their legally acceptable representative’s, agreement to participate in a clinical study following completion of the informed consent process. Potential participants who are screened for the purpose of determining eligibility for the study, but are not randomised/assigned in the study, are considered ‘screen failures’, unless otherwise specified by the protocol.",
        "9.3 Populations for Analyses The populations in Table 14 are defined for this study. Table 14: Populations for Analysis Population/Analysis set Description FAS This comprises all participants randomised into the study and will be analysed according to randomised treatment regardless of the treatment received (ITT principle). The FAS will be used as the primary population for reporting efficacy data and to summarise baseline characteristics.",
        "SAF This will consist of all participants who received any amount of study intervention. The SAF will be used as the primary population for reporting safety data. PK Analysis Set This comprises all participants who received at least 1 dose of study intervention with at least one reportable PK concentration. Dosimetry Set This consists of all participants who receive at least 1 dose of study intervention and have sufficient imaging timepoints for dosimetry analysis.",
        "a a For dosimetry assessments, refer to the Subject Imaging Manual for Dosimetry. Abbreviations: ITT, intent-to-treat. 9.4 Statistical Analyses 9.4.1 General Considerations The following general principles will be applied: • Continuous variables will be summarised by the number of observations, mean, standard deviation, median, upper and lower quartiles minimum, and maximum. Log-transformed"
      ],
      "chips": [
        "VECTRA-01",
        "p137/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v137.jpg",
      "cap": "Protocol page 137 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 138 of 221 · data will be summarised by geometric mean, coefficient of variation, median,…",
      "audio": [
        "data will be summarised by geometric mean, coefficient of variation, median, minimum, and maximum. Categorical variables will be summarised by frequency counts and percentages for each category. • Unless otherwise stated, percentages will be calculated out of the population total for the corresponding treatment arm. • Overall totals across treatment arms will be calculated for baseline summaries only.",
        "• In general, for efficacy, the last observed measurement prior to randomisation will be considered the baseline measurement. However, if an evaluable assessment is only available after randomisation but before the first dose of randomised treatment then this assessment will be used as baseline. For RECIST 1.1 and PCWG3 tumour assessments, baseline measurement must be taken no more than 28 days before randomisation.",
        "If a baseline radiological tumour assessment is performed more than 28 days before randomisation, then it will be reported as a protocol deviation, but the scan will still be included as baseline. • A time period of ~ 7 days from randomisation to C1D1 in Arm A may be required to accommodate manufacturing and delivery of actinium-225 zadavotide guraxetan.",
        "9.4.2 Efficacy 9.4.2.1 Primary Endpoint(s) The primary objective of this study is to demonstrate the superiority of actinium-225 zadavotide guraxetan compared to standard of care in terms of dual primary endpoints, radiographic P F S by B I C R and overall survival.",
        "9.4.2.1.1 Calculation or Derivation of Tumour Response Variables Investigator RECIST 1.1 and PCWG3-based assessments All RECIST 1.1 and PCWG3 assessments, whether scheduled or unscheduled, will be included in the calculations, regardless of whether a participant discontinues study intervention or receives another anticancer therapy.",
        "At each visit, participants will be programmatically assigned a RECIST 1.1 visit response of NED, CR, PR, SD, PD, or NE, and a PCWG3 visit response of NED, PD, non-PD, or NE depending on the status of their disease compared with baseline and previous assessments. The tumour response endpoints (radiographic P F S, O R R, PFS, and duration of response) will then be derived from the scan dates and overall visit responses.",
        "B I C R RECIST 1.1 and PCWG3-based assessments All images will be collected centrally. The imaging scans will be reviewed by 2 independent radiologists using RECIST 1.1 and PCWG3 and will be adjudicated, if required. For each participant, the B I C R will define the overall visit response data (RECIST 1.1: NED, CR, PR, SD, PD, or NE; PCWG3: NED, PD,"
      ],
      "chips": [
        "VECTRA-01",
        "p138/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v138.jpg",
      "cap": "Protocol page 138 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 139 of 221 · non-PD, or NE) and the relevant scan dates for each timepoint (ie, for visits where…",
      "audio": [
        "non-PD, or NE) and the relevant scan dates for each timepoint (ie, for visits where response or progression is/is not identified). If a participant has had a tumour assessment that cannot be evaluated, then the participant will be assigned a visit response of NE (unless there is evidence of progression, in which case the response will be assigned as PD).",
        "Endpoints (radiographic P F S, O R R, PFS, and duration of response) will then be derived from the scan dates and overall visit responses. Further details of the B I C R will be documented in an Independent Review Charter.",
        "9.4.2.1.2 Radiographic Progression-free Survival radiographic P F S is defined as the time from randomisation to radiographic progression per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone) as assessed by B I C R, or death (by any cause in the absence of progression), whichever occurs first (ie, date of event or censoring - date of randomisation + 1).",
        "Participants who have not progressed or died at the time of analysis will be censored at the time of the latest date of assessment from their last evaluable radiographic assessment. However, if the participant progresses or dies after 2 or more consecutive missed visits, the participant will be censored at the time of the latest evaluable radiographic assessment prior to the 2 missed visits.",
        "(Note: NE visit is not considered as missed visit.) If the participant has no evaluable visits or does not have baseline data, they will be censored at Day 1, unless they die within 2 visits of randomisation (16 weeks plus 1 week allowing for a late assessment within the visit window). The radiographic P F S time will always be derived based on scan/assessment dates and not visit dates.",
        "Radiographic assessments/scans contributing toward a particular visit may be performed on different dates. The following rules will be applied: • For investigator assessments, the date of progression will be determined based on the earliest radiographic assessment/scan dates of the component that indicates progression.",
        "• For B I C R assessments, the date of progression will be determined based on the earliest dates of the component that triggered the progression on the first set of scans that indicates progression for the adjudicated reviewer selecting PD, or of either reviewer where both reviewers select PD as a timepoint response, and there is no adjudication for central review (B I C R) data.",
        "• When censoring a participant for radiographic P F S, the participant will be censored at the latest scan dates contributing to a particular overall visit assessment. Analysis Methods radiographic P F S will be based on the B I C R assessment of PD by RECIST 1.1 and/or PCWG3 criteria."
      ],
      "chips": [
        "VECTRA-01",
        "p139/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v139.jpg",
      "cap": "Protocol page 139 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 140 of 221 · rPFS will be analysed using a log-rank test stratified by the pre-specified…",
      "audio": [
        "radiographic P F S will be analysed using a log-rank test stratified by the pre-specified stratification factors. The HR together with its 95% CI and p-value will be presented (an HR less than 1 will favour the comparator arm). The HR and CI will be estimated from a stratified Cox proportional hazards model (with ties = Efron) stratified by the same factors, and the CI will be calculated using a profile likelihood approach.",
        "If there are insufficient events per strata, the strata will be pooled following a pooling strategy that will be pre-specified in the SAP. The stratification variables will be defined according to data from the I R T. Kaplan-Meier plots of radiographic P F S will be presented by treatment group.",
        "Summaries of the number and percentage of participants experiencing an radiographic P F S event and the type of event (RECIST 1.1/ PCWG3 criteria or death) will be provided along with median radiographic P F S for each treatment. The proportion of participants alive and progression-free at 3-monthly intervals from randomisation will be summarised by treatment group. Analysis of radiographic P F S as defined by investigator assessment may be conducted as supplementary.",
        "Further supplementary and sensitivity analyses to explore the robustness of the primary radiographic P F S endpoint will be documented in the SAP. 9.4.2.1.3 Overall Survival overall survival is defined as the length of time from randomisation until the date of death due to any cause. The analysis will include all randomised participants as randomised.",
        "All deaths will be included, regardless of whether the participant withdraws from therapy or receives subsequent anticancer therapy. Any participant not known to have died at the time of analysis will be censored based on the last recorded date on which the participant was known to be alive. Analysis Methods overall survival will be analysed using the same methodology specified for radiographic P F S.",
        "The effect of actinium-225 zadavotide guraxetan versus standard of care will be estimated by the HR together with its corresponding 95% CI and p-value. Kaplan-Meier plots will be presented by treatment group. 9.4.2.1.4 Subgroup Analysis Subgroup analyses will be conducted, comparing actinium-225 zadavotide guraxetan and standard of care with respect to the dual primary endpoints radiographic P F S and overall survival.",
        "The purpose of the subgroup analyses is to assess the consistency of treatment effect across potential or expected prognostic factors. For subgroup analyses, stratification variables will be defined according to data from the eCRF. The following subgroups will be analysed for both radiographic P F S and overall survival: • Subgroups corresponding to the randomisation stratification factors as captured in the eCRF."
      ],
      "chips": [
        "VECTRA-01",
        "p140/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v140.jpg",
      "cap": "Protocol page 140 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 141 of 221 · • PSMA PET imaging agent used for participant selection (18F-DCFPyL versus 68Ga-PSMA-11)",
      "audio": [
        "• P S M A PET imaging agent used for participant selection (fluorine-18 D C F P y L versus gallium-68-P S M A-11). • Prior taxane in therapy setting (mHSPC versus m C R P C). • Number of prior ARPIs (as defined in the SAP). Additional subgroups of interest and the methodology for the subgroup analysis will be outlined in the SAP.",
        "All of these subgroup analyses will be considered exploratory and may only be supportive of the primary analysis of radiographic P F S and overall survival.",
        "9.4.2.2 Secondary Endpoint(s) 9.4.2.2.1 Progression-free Survival PFS is defined as the time from randomisation to the earliest of progression (defined as radiographic progression, clinical progression, or PSA progression) as assessed by the investigator, or death (by any cause in the absence of progression), whichever occurs first (ie, date of event or censoring - date of randomisation + 1).",
        "Participants who have not progressed or died at the time of analysis will be censored at the time of the earliest of their respective last PFS event assessments, ie, at the earliest date of last assessments at which no progression was confirmed for rPD, clinical progression, or PSA progression. Analysis Methods PFS will be analysed using the same methodology specified for radiographic P F S.",
        "The effect of actinium-225 zadavotide guraxetan versus standard of care will be estimated by the HR together with its corresponding 95% CI and p-value. Kaplan-Meier plots will be presented by treatment group.",
        "9.4.2.2.2 P S A 50 and P S A 90 P S A 50 and P S A 90 are defined as the proportion of evaluable participants achieving a greater than or equal to 50% and greater than or equal to 90% decrease in PSA from baseline, respectively, that is confirmed by a second (the next) PSA measurement greater than or equal to 3 weeks later.",
        "Participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be included as responders in the P S A 50/P S A 90 endpoint calculation. The comparison will include all randomised participants as randomised/as dosed. All events will be included, regardless of whether the participant withdraws from subsequent therapy and regardless of missed visits."
      ],
      "chips": [
        "VECTRA-01",
        "p141/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v141.jpg",
      "cap": "Protocol page 141 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 142 of 221 · Analysis Methods The proportion of evaluable participants with confirmed PSA50/PSA90…",
      "audio": [
        "Analysis Methods The proportion of evaluable participants with confirmed P S A 50/P S A 90 and duration of P S A 50/P S A 90 response will be presented. 9.4.2.2.3 Objective Response Rate O R R is defined as the proportion of participants with measurable soft tissue disease at baseline who have a CR or PR, as determined by B I C R per RECIST 1.1 (soft tissue) and PCWG3 criteria (bone).",
        "Data obtained from randomisation up until progression, or the last evaluable assessment in the absence of progression by B I C R, will be included in the assessment of O R R, regardless of whether the participant withdraws from therapy. Participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond, will not be included as responders in the O R R.",
        "Analysis Methods The O R R will be analysed using logistic regression, estimating the treatment odds ratio with 95% CI and p-value. Observed O R R (percentage of responder) and the adjusted O R R (model-based percentage of responder) will be presented by treatment arm.",
        "9.4.2.2.4 Duration of Response duration of response is defined as the time from the date of first documented response until date of documented progression by B I C R assessment of RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone), or death in the absence of disease progression (ie, date of radiographic P F S event or censoring - date of first response + 1). The analysis will include all randomised participants with measurable disease at baseline who have a response.",
        "All events after achieving confirmed response will be included, regardless of whether the participant discontinues study intervention, receives another anticancer therapy or clinically progresses prior to RECIST 1.1- and/or PCWG3 criteria (bone)-defined progression.",
        "Analysis Methods Descriptive data will be provided for the duration of response in participants responding to treatment based on the B I C R assessment of RECIST 1.1 and/or PCWG3 criteria, including the associated Kaplan-Meier curves and summary of median duration of response. 9.4.2.2.5 S S E F S S S E F S is defined as the time from randomisation to the earliest of the following: • Use of radiation therapy to prevent or relieve skeletal symptoms."
      ],
      "chips": [
        "VECTRA-01",
        "p142/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v142.jpg",
      "cap": "Protocol page 142 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 143 of 221 · • Occurrence of new symptomatic pathological bone fractures (vertebral or non-vertebral)",
      "audio": [
        "• Occurrence of new symptomatic pathological bone fractures (vertebral or non-vertebral). Radiographic documentation is required. A pathological fracture, as determined by investigator, is defined as associated with low or no trauma and deemed to have occurred at a site of bone metastasis. • Occurrence of spinal cord compression. Radiographic documentation is required. • Orthopaedic surgical intervention for bone metastasis. • Death due to any cause.",
        "Analysis Methods S S E F S will be analysed using the same methodology specified for radiographic P F S. 9.4.2.3 Tertiary/Exploratory Endpoint(s) 9.4.2.3.1 Clinical Outcome Assessments All COA efficacy analyses will be based on the FAS or a subset of the FAS, if not otherwise stated. Tolerability-related analyses will use the SAF. PROs will be scored according to the relevant scoring manuals.",
        "Full details of COA endpoint derivation will be documented in the SAP along with the analysis methodology. 9.4.3 Safety Safety analyses will be performed based on the SAF.",
        "9.4.3.1 Adverse Events Safety and tolerability will be assessed in terms of incidence of AEs and SAEs, treatment discontinuation due to TEAEs, rate of dose reduction due to TEAEs, rate of dose delays due to TEAEs, change from baseline in vital signs, haematology, clinical chemistry, and urinalysis laboratory results, and ECGs.",
        "AEs will be coded using the most recent version of the Medical Dictionary for Regulatory Activities that will be released for execution at AstraZeneca/designee. AEs will be presented for each study intervention group by System Organ Class and/or Preferred Term covering number and percentage of participants reporting at least 1 event and number of events where appropriate.",
        "AEs occurring prior to start of study intervention, TEAEs, and post-treatment AEs will be presented separately. TEAEs will be defined in the SAP."
      ],
      "chips": [
        "VECTRA-01",
        "p143/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v143.jpg",
      "cap": "Protocol page 143 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 144 of 221 · An overview of AEs will be presented for each study intervention group: the number…",
      "audio": [
        "An overview of AEs will be presented for each study intervention group: the number and percentage of participants with any AE, AEs with outcome of death, SAEs, AESIs, and AEs leading to discontinuation of study intervention, as well as AEs leading to study intervention dose interruptions, and AEs leading to study intervention dose reductions.",
        "Separate AE tables will be provided taking into consideration relationship as assessed by the investigator, CTCAE grade, seriousness, death, and events leading to discontinuation of study intervention as well as other action taken related to study intervention, AESIs, other significant AEs, and timing of events. An additional table will present number and percentage of participants with most common AEs. Most common (eg, frequency of > 5%) will be defined in the SAP.",
        "In accordance with the requirements of the FDA, a separate table will present non-serious AEs occurring in > 5% of participants in any study intervention group. Key participant information will be presented for participants with AEs with outcome of death, SAEs, AESIs, and AEs leading to discontinuation of study intervention. An AE listing for the SAF will cover details for each individual AE. Full details of AE analyses will be provided in the SAP.",
        "9.4.3.2 Other Safety Endpoint(s) Other safety data, including physical examinations, clinical haematology, chemistry, vital signs, E C O G performance status, and ECGs, will be summarised using descriptive statistics. 9.4.4 Other Analyses 9.4.4.1 Pharmacokinetics and Pharmacodynamics Details of summary of plasma concentrations and non-compartmental PK analysis (where appropriate) will be described in the SAP.",
        "The population PK analysis and exposure-response for efficacy and safety analyses may be pooled with data from other studies. These will have a separate modelling analysis plan(s), and the results will be presented separately to the main CSR. PK parameters, including variability parameters, will be estimated as data permit.",
        "The influence of intrinsic (eg, ethnicity, gender, age, weight, renal function, and hepatic function) and extrinsic (eg, concomitant medication) factors will be evaluated, and exposure-response relationships will be explored. PK analyses will be performed based on the PK Analysis Set and any exclusion of data will be documented and justified.",
        "9.4.4.2 Biomarkers Biomarker status will be assessed for participants in each cohort according to pre-specified criteria that may be detailed in the SAP. Biomarker exploratory analyses may be described in a"
      ],
      "chips": [
        "VECTRA-01",
        "p144/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v144.jpg",
      "cap": "Protocol page 144 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 145 of 221 · separate analysis plan and may be reported outside the CSR in a separate report",
      "audio": [
        "separate analysis plan and may be reported outside the CSR in a separate report. 9.5 Interim Analyses Three efficacy analyses are planned: futility analysis on overall survival at DCO1; an IA of overall survival and the final analysis of radiographic P F S at DCO2; and the final analysis of overall survival at DCO3.",
        "Futility Analysis of overall survival (DCO1) A non-binding, futility analysis will be performed at DCO1 when ~ 140 overall survival events have occurred (~ 21% maturity) or 23 months after the first participant has been randomised, whichever occurs first. The actual futility boundary will be calculated based on the observed number of events and the details will be pre-specified and disclosed to the I D M C.",
        "Interim Analysis of overall survival (DCO2) An IA of overall survival and the final analysis of radiographic P F S will be conducted at DCO2 when ~ 299 overall survival events (~ 45% maturity) have been accumulated. At DCO2 it is expected to have ~ 400 radiographic P F S events (~ 60% maturity).",
        "The study outcome will be considered positive if at least 1 of the dual primary endpoints shows statistically significant benefit for actinium-225 zadavotide guraxetan versus standard of care.",
        "overall survival will be considered statistically significant if the 2-sided p-value from the stratified log-rank test is less than the critical 2-sided alpha threshold, calculated using the O’Brien-Fleming approach, the actual number of events and the overall allocation of 0.049 (see Table 15 for an illustration of these thresholds based upon design assumptions).",
        "If this is achieved, the estimated HR for overall survival is expected to meet or exceed the threshold HR of less than or equal to 0.76, which is expected to demonstrate an increase of ~ 3.4 months in median overall survival under exponential distributions in both treatment arms. Similarly, radiographic P F S will be considered significant if the 2-sided p-value from the stratified log-rank test is less than the pre-allocated 2-sided alpha of 0.001.",
        "If this is achieved, the estimated HR for radiographic P F S is expected to meet or exceed the threshold HR of less than or equal to 0.72, which is expected to demonstrate an increase of ~ 1.6 months in median radiographic P F S under exponential distributions in both treatment arms. Final Analysis of overall survival (DCO3) The final analysis of overall survival will be conducted at DCO3 when ~ 399 overall survival events (~ 60% maturity) have been accumulated.",
        "The study would have ~ 90% power at a 2-sided alpha of 4.9% to detect superiority of actinium-225 zadavotide guraxetan, assuming median overall survival of 15 months for actinium-225 zadavotide guraxetan versus 10.8 months for standard of care.",
        "Statistical significance will be declared if the 2-sided p-value from the stratified log-rank test is less than the critical 2-sided alpha remaining after DCO2 and again, based upon the O’Brien-Fleming method and the final number of overall survival events accrued. If this is achieved, the estimated HR is expected to meet or exceed the threshold HR of less than or equal to 0.82, which is expected to demonstrate an increase of ~ 2.4 months in median overall survival."
      ],
      "chips": [
        "VECTRA-01",
        "p145/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v145.jpg",
      "cap": "Protocol page 145 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 146 of 221 · The Lan De Mets approximation to the O’Brien-Fleming spending function will be used…",
      "audio": [
        "The Lan De Mets approximation to the O’Brien-Fleming spending function will be used to control type I error across the interim and final analyses of overall survival. Table 15 presents the planned analysis timings for radiographic P F S and overall survival along with expected information fractions and significance levels.",
        "Table 15: Summary of Planned Timings of radiographic P F S Final Analysis and overall survival IA and overall survival Final Analysis Analysis DCO time (months) Endpoint No of events (maturity/IF%) Critical 2-sided p-value Critical HR Critical value for median (improvement) (months) Power in % radiographic P F S FA/overall survival IA 30 radiographic P F S 400 (60/100) 0.001 0.72 5.6 (1.6) > 99% overall survival 299 (45/75) 0.019 0.76 14.2 (3.4) 69% overall survival FA 37",
        "overall survival 399 (60/100) 0.0434 0.82 13.2 (2.4) 90% The planned accrual period is 23 months. The SAP will describe the planned IAs in greater detail. 9.6 Independent Data Monitoring Committee An I D M C will be appointed for this study.",
        "The I D M C comprises a group of independent experts who monitor the safety and scientific integrity of human research intervention, and make recommendations to AstraZeneca to continue, amend, or stop the study based on safety findings, efficacy, or for futility. The composition of the committee is dependent upon the scientific skills and knowledge required for monitoring this study. For details on the I D M C, refer to Appendix A 6.",
        "The I D M C will perform unblinded safety reviews of accumulated safety data for the actinium-225 zadavotide guraxetan and standard of care arms separately. The first cumulative review of safety is planned following randomisation of ~ 50 participants or after 6 months from the first participant being randomised (whichever occurs first), followed by every 6 months.",
        "For futility and interim analyses, the I D M C will review unblinded data and inform the AstraZeneca URC whether the pre-specified stopping boundaries are met. Full details of the I D M C procedures and processes can be found in the I D M C Charter. Details of the URC process and composition can be found in the URC Charter."
      ],
      "chips": [
        "VECTRA-01",
        "p146/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v146.jpg",
      "cap": "Protocol page 146 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 147 of 221 · DOSIMETRY SUB-STUDY A Dosimetry Sub-study will be implemented at select sites…",
      "audio": [
        "10 DOSIMETRY SUB-STUDY A Dosimetry Sub-study will be implemented at select sites following qualification and approval by AstraZeneca. In Arm A (ie, participants randomised to treatment with actinium-225 zadavotide guraxetan), a sub-set of ~ 20 study participants will participate in a Dosimetry Sub-study and undergo nuclear medicine imaging and radiation dosimetry assessment.",
        "Sub-study assessments will be performed in addition to all assessments described in the main study SoA (Table 1). Participation in the Dosimetry Sub-study may be mandated by local/regional requirements, or in order to achieve ~ 20 study participants. The preliminary schedule of events can be found in Table 16."
      ],
      "chips": [
        "VECTRA-01",
        "p147/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v147.jpg",
      "cap": "Protocol page 147 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 148 of 221 · Table 16: Dosimetry Sub-study SoA Procedures C1 C2 C3 C6 D1 D2 D3 or D4 D7-8 D1 D2…",
      "audio": [
        "Table 16: Dosimetry Sub-study SoA Procedures C1 C2 C3 C6 D1 D2 D3 or D4 D7-8 D1 D2 D2 Pre-dose End of actinium-225 zadavotide guraxetan injection 90 m 3 h 0.5-4 h 8 h 24 h 48-72 h 144-168 h Pre-dose End of actinium-225 zadavotide guraxetan injection Window Up to 2 h before + 15 m plus or minus 10 m plus or minus 10 m plus or minus 30 m plus or minus 2 h plus or minus 6 h plus or minus 6 h plus or minus 6 h Up to 2 h before + 15 m Blood sample for actinium-225 zadavotide",
        "guraxetan PK testing a X X X (China only) X X b X X X X X SPECT/CT X X X X X X WBPS X X X X Urine collection for actinium-225 zadavotide guraxetan PK testing c 0-3 h and 3-24 h a Blood samples for PK listed in this Dosimetry Sub-study SoA replace PK sample collections from the Arm A SoA (Table 1). b Participants will only provide an 8-hour PK timepoint if hospitalised overnight and this sample is feasible to collect.",
        "c Participants should void their bladder ~ 30 minutes prior to injection. All urine will be collected for each of the 2 noted collection periods. If a participant voids their bladder after injection end and before the first WBPS assessment, the urine should be imaged in the field of view of the first WBPS assessment. Note: Samples will be collected as described in the Central Laboratory Manual and Dosimetry Manual. Abbreviations: WBPS, whole body planar scintigraphy."
      ],
      "chips": [
        "VECTRA-01",
        "p148/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v148.jpg",
      "cap": "Protocol page 148 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 149 of 221 · AstraZeneca will engage an imaging/dosimetry vendor to obtain radiation dosimetry…",
      "audio": [
        "AstraZeneca will engage an imaging/dosimetry vendor to obtain radiation dosimetry estimates for key critical organs, specifically the kidneys, parotid glands, and red marrow for each participant enrolled in the Dosimetry Sub-study. Organ doses will be derived from the combined nuclear medicine imaging series using the Medical Internal Radiation Dosimetry formalism.",
        "In addition, a European Association of Nuclear Medicine-endorsed blood-based method, which extrapolates plasma activity to the entire red marrow compartment, will be performed. The total radiation dose estimates from all actinium-225 progeny will be reported on an absorbed dose per unit injected activity basis (mGy/megabecquerels) and for the protocol-planned 12 megabecquerels administered activity.",
        "Refer to the Imaging Review Charter for dosimetry as the precise utility of each image and assessment of each region of interest may be revised over the course of the study. 10.1 Replacement Criteria If a participant is not able to complete sufficient PK or imaging timepoints to provide critical organ absorbed dose estimates, the participant may be replaced.",
        "10.2 Dosimetry Assessments For additional information on the dosimetry assessments below, refer to the Subject Imaging Manual for Dosimetry. The SoA (Table 16) provides an overview of the dosimetry scanning timepoints for all imaging procedures. Information regarding WB planar scans and SPECT/CT scans is provided below. All scans performed for the dosimetry purpose must be sent to the AstraZeneca selected iCRO via the same portal as the efficacy related scans.",
        "In case the quality of a scan is not satisfactory, repeated scans are allowed and should be performed as soon as possible after the failed timepoint. WB Emission Scans (Planar Scans) Planar scans will be acquired to investigate the WB equivalent dose per the imaging schedule presented in the SoA (Table 16).",
        "SPECT/Low-dose CT Scans Two bed positions SPECT/low-dose CT scans centred on the kidneys and parotid glands will be acquired to validate the doses absorbed by the critical organs using gamma camera imaging per the imaging schedule in the SoA (Table 16).",
        "It is strongly recommended to use the same gamma camera system/SPECT/low-dose CT scanner for dosimetry imaging for each individual participant scan at each site, even if more than 1 camera has been approved to be used for this study."
      ],
      "chips": [
        "VECTRA-01",
        "p149/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v149.jpg",
      "cap": "Protocol page 149 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 150 of 221 · Pharmacokinetic Assessments 225Ac zadavotide guraxetan plasma drug concentrations…",
      "audio": [
        "Pharmacokinetic Assessments actinium-225 zadavotide guraxetan plasma drug concentrations will be measured. Samples for PK analysis will be collected at the timepoints detailed in Table 16. Urine samples will be collected for measurement of urine concentrations of actinium-225 zadavotide guraxetan. Urine collection for PK analysis is only required for participants enrolled in the Dosimetry Sub-study.",
        "• Urine samples (and total urine volume collection) will be used to analyse the PK of actinium-225 zadavotide guraxetan and recovery of total radioactivity. • Samples collected for analyses of actinium-225 zadavotide guraxetan urine concentration may also be used to evaluate safety or efficacy aspects related to concerns arising during or after the study.",
        "Detailed instructions for the collection and handling of biological samples will be provided in the Central Laboratory Manual. For storage, re-use, and destruction of samples for PK, see Appendix C. PK samples will be disposed of after the Bioanalytical Report finalisation or 6 months after issuance of the draft Bioanalytical Report (whichever is earlier). Samples collected from participants in China will be stored and disposed of according to local laws and regulations.",
        "PK samples collected in China will be disposed of within 6 months of Bioanalytical Report publication. 10.3 Statistical Considerations 10.3.1 Sample Size Determination The sample size of ~ 20 participants was determined to provide sufficient dosimetry and PK evidence to support the biodistribution of actinium-225 zadavotide guraxetan administered IV at a dose of 12 megabecquerels. No statistical powering calculations were performed.",
        "10.3.2 Statistical Analyses Dosimetry Analyses Dosimetry parameters will be analysed using the Dosimetry Set (see Table 7). Dosimetry will be performed using serial post-treatment imaging. Residence time and absorbed radiation doses to the critical organs will be summarised using descriptive statistics and presented by timepoint. All dosimetry results will be presented in by-participant data listings. Further details will be provided in the SAP."
      ],
      "chips": [
        "VECTRA-01",
        "p150/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v150.jpg",
      "cap": "Protocol page 150 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 151 of 221 · Pharmacokinetic Analyses PK analyses will be completed on the Dosimetry Set, as…",
      "audio": [
        "Pharmacokinetic Analyses PK analyses will be completed on the Dosimetry Set, as appropriate. actinium-225 zadavotide guraxetan plasma and urine concentration data will be summarised. Where data allow, non-compartmental PK parameters will be estimated, including but not limited to, clearance, AUClast, Cmax, and half-life.",
        "Cumulative urinary recovery (amount of activity excreted) of total activity over 24 hours will be estimated by collection of urine volume and determination of urine concentrations. If data allow, renal clearance may be determined. Further details will be provided in the SAP. Population PK modelling and exposure-response modelling for safety and efficacy will have a separate modelling analysis plan and results will be reported separate to the CSR (see Section 9.4.4.1)."
      ],
      "chips": [
        "VECTRA-01",
        "p151/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v151.jpg",
      "cap": "Protocol page 151 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 152 of 221 · JAPAN SAFETY RUN-IN SUB-STUDY This section provides additional safety run-in…",
      "audio": [
        "11 JAPAN SAFETY RUN-IN SUB-STUDY This section provides additional safety run-in sub-study information that is specific to Japan. Refer to the main study for any information not contained in this section. 11.1 Study Rationale Based on the preclinical and clinical studies in non-Japanese participants, actinium-225 zadavotide guraxetan monotherapy has been tolerated and has the potential to provide clinical benefit to patients with P S M A-positive m C R P C.",
        "As safety has not yet been investigated in Japanese participants, this sub-study’s primary endpoint is to determine the safety of actinium-225 zadavotide guraxetan in Japanese patients with P S M A-positive m C R P C. In addition, the PK and preliminary antitumour activity of actinium-225 zadavotide guraxetan will be investigated.",
        "After confirming the safety of actinium-225 zadavotide guraxetan monotherapy in this sub-study, future Japanese patients can participate in the main Phase III study (D 9735 C 00001). 11.2 Objectives and Endpoints Objective Endpoint and summary measure Primary: To assess the safety of actinium-225 zadavotide guraxetan in participants with m C R P C.",
        "Incidence of AEs and SAEs, treatment discontinuation due to TEAEs, rate of dose reduction due to TEAEs, rate of dose delays due to TEAEs, change from baseline in vital signs, haematology, clinical chemistry, and urinalysis laboratory results, and ECGs. The analysis will include all participants enrolled in the Japan Safety Run-in Sub-study who received any amount of study intervention.",
        "All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. Safety endpoints will include, but are not limited to, the following: • TEAEs, SAEs, AEs leading to dose modifications • Changes from baseline in vital signs, clinical laboratory assessments, ECGs, and physical examinations. Secondary: To determine the PK of actinium-225 zadavotide guraxetan.",
        "Plasma concentrations of actinium-225 zadavotide guraxetan pre-dose and post-dose. PK parameters including but not limited to: clearance, AUClast, Cmax, and half-life, as determined by non-compartmental analysis if data allow. Plasma PK parameters derived from a population PK model, as permitted by the data. a"
      ],
      "chips": [
        "VECTRA-01",
        "p152/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v152.jpg",
      "cap": "Protocol page 152 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 153 of 221 · Objective Endpoint and summary measure To evaluate the antitumour activity of 225Ac…",
      "audio": [
        "Objective Endpoint and summary measure To evaluate the antitumour activity of actinium-225 zadavotide guraxetan in participants with m C R P C • P S A 50 • O R R • duration of response • radiographic P F S P S A 50 P S A 50 is defined as the proportion of participants who achieve a greater than or equal to 50% decrease in PSA from baseline that is confirmed by a second (the next) PSA measurement greater than or equal to 3 weeks later.",
        "The analysis will include all participants enrolled in the Japan Safety Run-in Sub-study who received any amount of study intervention. All responses will be recorded, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. However, participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond will not be counted as responders in the P S A 50 endpoint calculation.",
        "Proportion of evaluable participants with confirmed P S A 50 and duration of P S A 50 response. O R R O R R is defined as the proportion of participants with measurable soft tissue disease at baseline who have a CR or PR, per RECIST 1.1 (soft tissue) and PCWG3 criteria (bone). The analysis will include all participants enrolled in the Japan Safety Run-in Sub-study with measurable disease at baseline who received any amount of study intervention.",
        "Data obtained from enrolment up until progression, or the last evaluable assessment in the absence of progression, will be included in the assessment of O R R, regardless of whether the participant withdraws from therapy. Participants who discontinue treatment without a response or progression, receive a subsequent therapy, and then respond, will not be included as responders in the O R R. The measure of interest is the mean of O R R.",
        "duration of response duration of response is defined as the time from the date of first documented response until date of documented progression per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone), or death in the absence of disease progression.",
        "All events after achieving confirmed response will be included, regardless of whether the participant discontinues study intervention, receives another anticancer therapy, or clinically progresses prior to RECIST 1.1 and/or PCWG3 criteria (bone)-defined progression. The measure of interest is the median of duration of response."
      ],
      "chips": [
        "VECTRA-01",
        "p153/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v153.jpg",
      "cap": "Protocol page 153 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 154 of 221 · Objective Endpoint and summary measure rPFS rPFS is defined as the time from…",
      "audio": [
        "Objective Endpoint and summary measure radiographic P F S radiographic P F S is defined as the time from enrolment to radiographic progression, as assessed by B I C R per RECIST 1.1 (soft tissue) and/or PCWG3 criteria (bone), or death due to any cause. The analysis will include all participants enrolled in the Japan Safety Run-in Sub-study who received any amount of study intervention.",
        "All events will be included, regardless of whether the participant withdraws from therapy or receives another anticancer therapy. However, if the participant progresses or dies immediately after 2 or more consecutive missed visits, the participant will be censored at the time of the latest evaluable assessment prior to the 2 missed visits. The measure of interest is the median of radiographic P F S.",
        "a Population PK, and exposure-response for efficacy and safety may combine data from other studies, will be described in a modelling analysis plan separate to the SAP, and will be reported separately to the CSR. 11.3 Study Design Figure 7: Japan Safety Run-in Sub-study Design • Histologic confirmation of adenocarcinoma of prostate • Castrate levels of testosterone • Received prior adequate standard of care therapy.",
        "Pre- or post-treatment with lutetium-177-P S M A allowed • P S M A PET+ disease a • E C O G performance status 0-1 • Adequate bone marrow function • e G F R greater than or equal to 60 mL/min • Grade 1 xerostomia allowed (Grade 2 excluded) Primary endpoint: • Safety Secondary endpoints: • PK • Efficacy actinium-225 zadavotide guraxetan 12 megabecquerels by IV injection every 6 weeks for up to 6 cycles a P S M A PET-positive disease defined as having at least one tumour",
        "lesion (soft tissue or bone) with uptake of PET tracer greater than in normal liver.",
        "Participants will be considered ineligible if any intraprostatic lesion or any one lesion larger than size criteria (organs greater than or equal to 1 cm in longest diameter, lymph nodes greater than or equal to 2.5 cm in short axis, and bones [soft tissue component] greater than or equal to 1 cm in longest diameter), measured on the CT scan, has uptake of PET tracer less than or equal to uptake in normal liver.",
        "This is a non-randomised, open-label, Japan safety run-in sub-study assessing the safety, PK, and antitumour activity of actinium-225 zadavotide guraxetan in Japanese patients with P S M A-positive m C R P C who have received the current standard of care (A R P I and taxane-based chemotherapy), regardless of prior treatment with P S M A-directed β-emitting RC. Refer to the study schema (Figure 7) and SoA (Table 17) for overall design and required assessments."
      ],
      "chips": [
        "VECTRA-01",
        "p154/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v154.jpg",
      "cap": "Protocol page 154 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 155 of 221 · A minimum of 3 and a maximum of 6 evaluable participants with PSMA-positive mCRPC…",
      "audio": [
        "A minimum of 3 and a maximum of 6 evaluable participants with P S M A-positive m C R P C will be recruited. actinium-225 zadavotide guraxetan 12 megabecquerels will be administered as an IV injection every 6 weeks for up to 6 cycles or until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. No statistical powering calculations were performed."
      ],
      "chips": [
        "VECTRA-01",
        "p155/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v155.jpg",
      "cap": "Protocol page 155 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 156 of 221 · Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (225Ac Zadavotide…",
      "audio": [
        "Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 3 Week 5 D1 D2 (C1 only) D8 (C1 only) D15 D29 Window ( plus or minus days) N/A C1 within 7 days of",
        "enrolment plus or minus 3 c plus or minus 3 plus or minus 3 plus or minus 3 plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Informed consent X 5.1 and Appendix A 3 Study procedures and safety assessments Inclusion and exclusion criteria X 5.1, 5.2, and 11.5 Enrolment X d 6.3 Demographics X 8.1.1 Histopathology records X 8.1.2 Medical history X X (C1 only) 8.1.2 Concomitant medication review X X X X X X X X 6.9 and 8.1.2 AE monitoring X X X X X X X X e X f",
        "11.7.1 Physical examination g X X X X X X X 8.3.1 Vital signs X X h X X X X X 8.3.2 Weight X X X X X 8.3.1 Height X 8.3.1 E C O G performance status X X X X X 8.3.5.1"
      ],
      "chips": [
        "VECTRA-01",
        "p156/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v156.jpg",
      "cap": "Protocol page 156 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 157 of 221 · Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (225Ac Zadavotide…",
      "audio": [
        "Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 3 Week 5 D1 D2 (C1 only) D8 (C1 only) D15 D29 Window ( plus or minus days) N/A C1 within 7 days of",
        "enrolment plus or minus 3 c plus or minus 3 plus or minus 3 plus or minus 3 plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 ECG (12-lead) i X C1 and C2 only: further timepoints as detailed in Table 18; D1 of remaining cycles: Single ECG pre-dose (-2 h) and post-dose (end of injection [+ 15 min]); AND as clinically indicated X 8.3.3 and Table 18 Local laboratory assessments Haematology j X X X X X X X 8.3.4 Chemistry j X X X X X X X X 8.3.4 Urinalysis k X X",
        "X X l 8.3.4 Coagulation X As clinically indicated 8.3.4 PSA X D1 of all 6 cycles, then every 8 weeks until B I C R-assessed rPD by RECIST 1.1 and/or PCWG3 8.3.4 Serum/plasma testosterone X X (C4 only) 8.3.4 Imaging and efficacy assessments RECIST 1.1/PCWG3 assessment (CT/MRI of abdomen, chest, and pelvis with contrast + 99mTc bone scan) X m every 8 weeks ( plus or minus 1 week) for the first 32 weeks and then Q12W ( plus or minus 1 week) until RECIST 1.1 and/or PCWG3",
        "radiographic progression verified by B I C R. Scans should be anchored to enrolment. 8.2.1.2 P S M A PET/CT scan n X m Optional at Week 21 plus or minus 1 week and at time of PSA increase ( greater than or equal to 25% and greater than or equal to 2 ng/mL compared to nadir as per PCWG3-defined PSA progression) 8.2.1.1 and 8.2.1.3"
      ],
      "chips": [
        "VECTRA-01",
        "p157/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v157.jpg",
      "cap": "Protocol page 157 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 158 of 221 · Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (225Ac Zadavotide…",
      "audio": [
        "Table 17: Schedule of Activities - Japan Safety Run-in Sub-study (actinium-225 Zadavotide Guraxetan) Procedure a Screening C1 to C6 (6-week cycles) end of treatment b Safety FU (every 8 weeks for 16 weeks from end of treatment) Long-term FU (every 24 weeks from Safety FU for a total of 5 years from end of treatment) Details in protocol section D -28 to D -1 Week 1 Week 3 Week 5 D1 D2 (C1 only) D8 (C1 only) D15 D29 Window ( plus or minus days) N/A C1 within 7 days of",
        "enrolment plus or minus 3 c plus or minus 3 plus or minus 3 plus or minus 3 plus or minus 3 plus or minus 7 plus or minus 14 plus or minus 14 Subsequent anticancer treatment X X 7.1.3 Pharmacokinetic Testing Pre-dose blood sample for actinium-225 zadavotide guraxetan PK testing X (C1 and C2 only) X (C1 only) Detailed timepoints in Table 18 Post-dose blood sample for actinium-225 zadavotide guraxetan PK testing X (C1 and C2 only) X (C1 only) Detailed timepoints in Table 18",
        "Pre-dose ECG (12-lead) for actinium-225 zadavotide guraxetan PK testing o X (C1 and C2 only) X (C1 only) Detailed timepoints in Table 18 Post-dose ECG (12-lead) for actinium-225 zadavotide guraxetan PK testing o X (C1 and C2 only) X (C1 only) Detailed timepoints in Table 18 Study intervention administration actinium-225 zadavotide guraxetan administration, 12 megabecquerels, IV, every 6 weeks a,p X 6.1 and 6.2 Note: All assessments on treatment days are to be performed prior",
        "to study intervention administration, unless otherwise indicated. a Imaging and efficacy assessments must be anchored to enrolment, even if dose is delayed. All other assessments are tied to dosing. b To be conducted approximately 28 days from the last dose of actinium-225 zadavotide guraxetan or prior to the initiation of subsequent anticancer treatment (outside of what is allowed on-study), whichever comes first.",
        "The D15 and D29 visits of the final cycle of actinium-225 zadavotide guraxetan may be skipped and the end of treatment visit should occur instead. c Dose delays beyond this window may occur, with Sponsor approval, as clinically or operationally necessary."
      ],
      "chips": [
        "VECTRA-01",
        "p158/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v158.jpg",
      "cap": "Protocol page 158 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 159 of 221 · d Enrolment should occur at the end of the screening period, after participant…",
      "audio": [
        "d Enrolment should occur at the end of the screening period, after participant eligibility has been confirmed. e Collect new and worsening AEs that are deemed causally related to actinium-225 zadavotide guraxetan, as well as all SAEs, all AESIs, and all AEs of xerostomia, xerophthalmia, and myelosuppression, independent of relationship to actinium-225 zadavotide guraxetan.",
        "f Collect only SAEs and AEs of myelosuppression that are deemed causally related to actinium-225 zadavotide guraxetan, as well as all AESIs, and all AEs of xerostomia and xerophthalmia, independent of relationship to actinium-225 zadavotide guraxetan. g Full physical examination is required at screening, with targeted physical examinations thereafter.",
        "h Blood pressure, pulse, and respiratory rate will be assessed at 15-30 minutes pre-actinium-225 zadavotide guraxetan administration and repeated as clinically indicated. i Single ECG is required unless otherwise specified; if QTcF is at the near-exclusion threshold (450-470 ms) or machine/read quality is inadequate, repeat up to 2 additional ECGs within 5 to 10 minutes of the first ECG. Additional ECGs may be performed if clinically indicated during the treatment period.",
        "j Blood samples can be collected up to 72 hours prior to Day 1 of each cycle. Haematology and chemistry results, as well as AEs, must be assessed within 48 hours prior to dosing with actinium-225 zadavotide guraxetan. Refer to the TMGs for guidance on toxicity management and dosing decisions. For chemistry assessments, a comprehensive metabolic panel is required during treatment and during the Safety Follow-up period.",
        "A basic metabolic panel (including serum creatinine) is sufficient for the Long-term Follow-up period. k Urinalysis, to include full and dipstick testing at timepoints shown, and reflex microscopic testing as needed. Additional urinalysis assessments may be performed if clinically indicated. l Collection timepoints to align with scheduled follow-up visits. m Screening scans for RECIST 1.1/PCWG3 assessment must be completed up to 28 days before enrolment.",
        "A P S M A PET/CT scan taken up to 42 days before enrolment can be used (P S M A PET/CT scans taken earlier than this window may be used with Sponsor approval). Confirmation of eligibility based on P S M A positivity and absence of a P S M A-negative lesion(s) must be made on local report before the participant can be enrolled. Ensure the screening scan remains as close as possible to enrolment.",
        "n P S M A-PET scans must be performed with the allowed P S M A ligand, gallium-68-P S M A-11. The same radiotracer used at screening (gallium-68-P S M A-11) should be used for follow‑up assessments. o On C1D1 and C2D1, pre- and post-injection single ECGs must be performed prior to PK blood samples being taken.",
        "p actinium-225 zadavotide guraxetan 12 megabecquerels administered as an IV injection every 6 weeks for up to 6 cycles until disease progression, unacceptable toxicity, the participant withdraws consent, or other specific discontinuation criteria are met. Participants will be closely monitored during administration of study intervention and for at least 2 hours after administration has completed. Note: All participants are required to be hospitalised from C1D1 until C1D2.",
        "Participants will be monitored carefully throughout the hospitalisation. If any clinically important symptoms or signs are observed, appropriate tests/examinations will be performed. When transition from in-patient to outpatient setting is considered, investigators will conduct sufficient examinations and questioning of participants and determine whether discharge is appropriate based on the results.",
        "If the results of the latest physical examinations, vital signs, ECG, and clinical laboratory tests would require additional tests and lead to prolonged hospitalisation, it might be taken into account to delay the transition to outpatient setting for the applicable participants. Abbreviations: FU, follow-up; N/A, not applicable."
      ],
      "chips": [
        "VECTRA-01",
        "p159/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v159.jpg",
      "cap": "Protocol page 159 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 160 of 221 · Table 18: Schedule of Activities: Japan Safety Run-in Sub-study PK and ECG…",
      "audio": [
        "Table 18: Schedule of Activities: Japan Safety Run-in Sub-study PK and ECG Timepoints (actinium-225 Zadavotide Guraxetan) Visit/Timepoint Plasma PK 12-lead ECG Cycle 1 Day of injection Pre-dose -2 h -2 h End of actinium-225 zadavotide guraxetan injection + 15 min + 15 min 30 min post-injection plus or minus 10 min plus or minus 10 min 3 h post-injection plus or minus 30 min plus or minus 30 min 8 h post-injection plus or minus 1 h plus or minus 1 h D2 24 h post-injection",
        "plus or minus 4 h plus or minus 4 h Cycle 2 Pre-dose - 2 h - 2 h End of actinium-225 zadavotide guraxetan injection + 15 min + 15 min 11.4 Safety Review Committee The Japan Safety Run-in Sub-study will have an SRC to conduct safety reviews. The membership, roles, and responsibilities of the SRC will be defined in a charter (separate from the protocol).",
        "The SRC, whose purpose is specifically to review safety data from the Japan Safety Run-in part, will review all relevant safety data obtained from the participants and will assess whether Japanese participants are eligible to participate in the Phase III study. The SRC will evaluate safety data when at least 3 evaluable participants have completed 1 cycle (6 weeks) of treatment with actinium-225 zadavotide guraxetan.",
        "The meeting may be scheduled earlier for preparatory review, but gating decisions will require data from at least 3 evaluable participants. The SRC will comprehensively assess any detected safety signals and determine whether to continue the review or to proceed to allow Japanese participants to participate in the Phase III study.",
        "Routine SRC meetings will conclude once the SRC renders the gating decision to allow or not allow enrolment of Japanese participants into the Phase III part. Throughout the Japan Safety Run-in follow-up period, standard safety monitoring will continue. Ad hoc SRC meetings may be convened upon any urgent or significant safety concern. Additionally, the SRC will review all available safety information including participants who did not meet the definition of evaluable.",
        "An ad hoc SRC will be convened for safety evaluation of Japanese participants if any urgent AE occurred. 11.5 Study Population Refer to Section 5 of the main study."
      ],
      "chips": [
        "VECTRA-01",
        "p160/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v160.jpg",
      "cap": "Protocol page 160 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 161 of 221 · Inclusion Criteria Refer to Section 5",
      "audio": [
        "Inclusion Criteria Refer to Section 5.1 of the main study for inclusion criteria applicable to the Safety Run-in Sub-study. Inclusion criteria applicable to the Safety Run-in Sub-study only are described in this section. If criteria in the Safety Run-in Sub-study are different from that in the main study criteria, the Safety Run-in Sub-study specific criteria should be followed. 1.",
        "Must have been previously treated with standard of care regardless of prior P S M A-directed β-emitting RC. 2. Positive P S M A PET/CT scans, obtained with P S M A ligands (gallium-68-P S M A-11) and eligible as determined per local report. Positive P S M A PET findings are defined as at least 1 P S M A-positive metastatic lesion (tracer uptake greater than liver) and no P S M A-negative lesions.",
        "Participants will be considered ineligible if any intraprostatic lesion or any 1 lesion larger than size criteria (organs greater than or equal to 1 cm in longest diameter, lymph nodes greater than or equal to 2.5 cm in short axis, and bones [soft tissue component] greater than or equal to 1 cm in longest diameter), measured on the CT scan, has uptake of PET tracer less than or equal to uptake in normal liver. 3. E C O G performance status 0 or 1.",
        "Note: Inclusion criteria numbers 5, 6, 7, 8, 9, 10, 11, 12, and 18 in the main study are not applicable for the Safety Run-in Sub-study. Exclusion Criteria Refer to Section 5.2 of the main study for exclusion criteria applicable to the Safety Run-in Sub-study. Exclusion criteria applicable to the Safety Run-in Sub-study only are described in this section.",
        "If criteria in the Safety Run-in Sub-study are different from that in the main study criteria, the Safety Run-in Sub-study specific criteria should be followed. 1. Prior treatment with an α-emitting molecular targeted therapeutic RC is exclusionary. Prior treatment with radium-223 is permitted only if the last administration was more than 6 months before first dose of study intervention.",
        "Prior treatment within 6 months before first dose with samarium-153, rhenium-186, rhenium-188, or hemi-body irradiation is exclusionary. Participants who received previous treatment with other RCs not specified in eligibility criteria are excluded. 2. For transfusion/growth factors: transfusion dependence is defined as a participant that requires greater than or equal to 1 transfusion at least monthly during the last 6 months prior to the first dose of study intervention.",
        "Haematopoietic growth factor(s) dependence is defined as a participant that requires regular growth factor administration during the last 6 months prior to first dose of study intervention."
      ],
      "chips": [
        "VECTRA-01",
        "p161/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v161.jpg",
      "cap": "Protocol page 161 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 162 of 221 · Protocol body · page 162",
      "audio": [
        "11.6 Study Intervention Study Intervention Administered In the Japan Safety Run-in Sub-study, actinium-225 zadavotide guraxetan 12 megabecquerels will be administered as an IV injection every 6 weeks for up to 6 cycles. Administration of the first dose of investigational product will be staggered by a minimum of 24 hours between the first and second participants. Refer to Section 6.1 of the main study.",
        "11.7 Study Assessments 11.7.1 Safety Assessments Safety assessments will include AEs, laboratory parameters, vital signs, physical examination, and ECG monitoring, as shown in the SoA. The investigator is responsible for reviewing all safety data and documenting any out-of-range values as clinically significant or not clinically significant.",
        "Any clinically significant findings during or after a participant received a dose of actinium-225 zadavotide guraxetan will be considered as a TEAE and documented and reported accordingly. Immediate safety concerns should be discussed with the Sponsor immediately upon occurrence or awareness.",
        "Refer to Section 8.3 of the main study for details regarding physical examinations, vital signs, ECGs, E C O G performance status, and clinical safety laboratory assessments, as the same information applies to this sub-study.",
        "Adverse Events and Serious Adverse Events Refer to Section 8.4 of the main study for details regarding AEs and SAEs (including event definitions, severity/causality assessment, expectedness, follow-up, and reporting), as the same information applies to this sub-study. 11.7.2 Efficacy Assessments Efficacy assessments will include P S A 50, O R R, duration of response, and radiographic P F S.",
        "11.7.3 Pharmacokinetic Assessments This study will use a liquid chromatography tandem mass spectrometry-based assay to determine plasma concentrations, measured in a central laboratory. Samples for plasma PK will be collected at the timepoints detailed in Table 18. Detailed instructions for the collection and handling of biological samples will be provided in the Central Laboratory Manual."
      ],
      "chips": [
        "VECTRA-01",
        "p162/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v162.jpg",
      "cap": "Protocol page 162 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 163 of 221 · • Samples may be collected at additional timepoints during the study if warranted…",
      "audio": [
        "• Samples may be collected at additional timepoints during the study if warranted and agreed upon between the investigator and AstraZeneca, eg, for urgent safety reasons, and this may be reflected as a protocol deviation. • The timing of sampling may be altered during the study based on newly available data (eg, to obtain data closer to the time of peak or trough matrix concentrations) to ensure appropriate monitoring.",
        "• Plasma samples will be used to analyse the PK of actinium-225 zadavotide guraxetan. Samples collected for analyses of actinium-225 zadavotide guraxetan concentration may also be used to evaluate safety or efficacy aspects related to concerns arising during or after the study. • Samples will be collected, labelled, stored, and shipped as detailed in the Central Laboratory Manual. • For storage, re-use, and destruction of samples for PK, see Appendix C.",
        "• Additional analyses may be conducted on the anonymised, pooled, or individual PK samples to further evaluate and validate the analytical method. Any results from such analyses may be reported separately from the CSR.",
        "11.8 Statistical Considerations 11.8.1 Population for Analyses For purposes of analysis, the following analysis sets are defined: • Japan Safety Run-in Analysis Set: The Japan Safety Run-in Analysis Set will include all participants enrolled in the Japan Safety Run-in Sub-study who received any amount of study intervention. The Japan Safety Run-in Analysis Set will be used as the primary population for reporting efficacy and safety data.",
        "• PK Analysis Set: The PK Analysis Set will include all participants who received any amount of study intervention and provided enough plasma sample(s) for PK analysis. Additional analysis sets may be defined in a separate SAP. 11.8.2 General Statistical Considerations A detailed SAP will be developed. All collected data will be reported using summary tables and figures, as appropriate. Summaries of safety and PK data will be presented in by-participant data listings.",
        "Further detail will be provided in the SAP. Efficacy results will be presented in tables/figures/listings only for participants in this sub-study. All data will be presented in by-participant data listings."
      ],
      "chips": [
        "VECTRA-01",
        "p163/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v163.jpg",
      "cap": "Protocol page 163 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 164 of 221 · Protocol body · page 164",
      "audio": [
        "11.8.3 Sample Size Determination The sample size of a minimum of 3 and maximum of 6 participants was determined to provide safety, PK, and antitumour activity evidence of actinium-225 zadavotide guraxetan administered IV at a dose of 12 megabecquerels. No statistical powering calculations were performed. 11.8.4 Statistical Analyses Safety Analyses Safety analyses will be performed on the Japan Safety Run-in Analysis Set, as described in the main study (Section 9.4.3).",
        "Efficacy Analyses Efficacy analyses will be performed on the Safety Run-in Analysis Set, as described in the SAP, which will provide full details. Pharmacokinetic Analyses PK analyses will be performed on the PK Analysis Set. Standard non-compartmental PK parameters will be estimated, including clearance, AUClast, Cmax, and half-life. Further details will be provided in the SAP."
      ],
      "chips": [
        "VECTRA-01",
        "p164/221",
        "Full protocol text"
      ],
      "visual": "ac225psma",
      "image": "assets/protocol/vectra/v164.jpg",
      "cap": "Protocol page 164 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 165 of 221 · SUPPORTING DOCUMENTATION AND OPERATIONAL CONSIDERATIONS",
      "audio": [
        "12 SUPPORTING DOCUMENTATION AND OPERATIONAL CONSIDERATIONS"
      ],
      "chips": [
        "VECTRA-01",
        "p165/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v165.jpg",
      "cap": "Protocol page 165 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 166 of 221 · Appendix A Regulatory, Ethical, and Study Oversight Considerations A 1 Regulatory…",
      "audio": [
        "Appendix A Regulatory, Ethical, and Study Oversight Considerations A 1 Regulatory and Ethical Considerations • This study will be conducted in accordance with the protocol, applicable laws and regulations, and international standards, including adherence to the relevant ICH GCP Guidelines, which are based on the ethical principles originating from the Declaration of Helsinki.",
        "• Before starting the study at any site, the protocol, IB, ICF, and other relevant documents (eg, advertisements and site-specific materials) must be submitted to and approved by all applicable regulatory authorities and ethics committees, in accordance with local laws and regulations.",
        "• Any revised protocol with changes to the study design must be submitted for approval to the relevant ethics committee(s) and/or regulatory authority(ies) before implementation, except for changes necessary to eliminate an immediate hazard to study participants. • AstraZeneca will be responsible for obtaining the required authorisations to conduct the study from the concerned Regulatory Authority.",
        "This responsibility may be delegated to a Service Provider, but the accountability remains with AstraZeneca.",
        "• The investigator will be responsible for providing oversight of the conduct of the study at the site and adherence to requirements of 21 CFR 312.120, ICH guidelines, the IRB/IEC, European Regulation 536/2014 for clinical studies (if applicable), European Medical Device Regulation 2017/745 for clinical device research, ISO-14155 for clinical device (if applicable), and all other applicable local regulations.",
        "Regulatory Reporting Requirements for SAEs • Prompt notification by the investigator to AstraZeneca of an S A E is essential so that legal obligations and ethical responsibilities towards the safety of participants and the safety of a study intervention under clinical investigation are met. • AstraZeneca has a legal responsibility to notify both the local regulatory authority and other regulatory agencies about the safety of a study intervention under clinical investigation.",
        "AstraZeneca will comply with country-specific regulatory requirements relating to safety reporting to the regulatory authority, IRB/IEC, and investigators. • In the EU, the Sponsor will comply with safety reporting requirements and procedures as described in the European Clinical Trials Regulation (EU) No 536/2014. All SUSARs to study intervention will be reported to the EudraVigilance database within the required regulatory timelines.",
        "• For all studies except those utilising medical devices, investigator safety reports must be prepared for SUSARs according to local regulatory requirements and Sponsor policy and forwarded to investigators as necessary."
      ],
      "chips": [
        "VECTRA-01",
        "p166/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v166.jpg",
      "cap": "Protocol page 166 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 167 of 221 · • Adherence to European Medical Device Regulation 2017/745 for clinical device…",
      "audio": [
        "• Adherence to European Medical Device Regulation 2017/745 for clinical device research (if applicable) and In Vitro Diagnostic Regulation 2017/746, and all other applicable local regulations.",
        "• An investigator who receives an investigator safety report describing an S A E or other specific safety information (eg, summary or listing of SAEs) from AstraZeneca will review and then file it along with the IB and will notify the IRB/IEC, if appropriate according to local requirements.",
        "Regulatory Reporting Requirements for Serious Breaches of Protocol or GCP A ‘Serious Breach’ means any deviation of the approved version of the protocol or GCP that is likely to affect the safety, rights of study participants, and/or data reliability and robustness to a significant degree in a clinical study.",
        "All parties (Sponsor, Service Provider, investigator site staff) involved in the conduct of the clinical study: • are responsible for promptly identifying and documenting any actual or potential serious breach. • should have a process in place to ensure that they are able to identify the occurrence of a (actual/potential) serious breach.",
        "• should report to AstraZeneca (or delegated party) without delay, through the contacts (email address or telephone number) provided by AstraZeneca. A 2 Financial Disclosure Investigators and sub-investigators will provide AstraZeneca with sufficient, accurate financial information as requested to allow AstraZeneca to submit complete and accurate financial certification or disclosure statements to the appropriate regulatory authorities.",
        "Investigators are responsible for providing information on financial interests during the study and for 1 year after completion of the study. A 3 Informed Consent Process • The investigator or their representative will explain the nature of the study to the participant or their legally authorised representative and answer all questions regarding the study.",
        "• Participants must be informed that their participation is voluntary, and they are free to refuse to participate and may withdraw their consent at any time and for any reason during the study. Participants or their legally authorised representative will be required to sign a statement of informed consent that meets the requirements of 21 CFR 50, local regulations,"
      ],
      "chips": [
        "VECTRA-01",
        "p167/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v167.jpg",
      "cap": "Protocol page 167 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 168 of 221 · ICH guidelines, privacy and data protection requirements, where applicable, and the…",
      "audio": [
        "ICH guidelines, privacy and data protection requirements, where applicable, and the IRB/IEC or study centre. • The medical record must include a statement that written informed consent was obtained before the participant was enrolled in the study and the date the written consent was obtained. The authorised person obtaining the informed consent must also sign the ICF.",
        "• If new information requires changes to the ICF, consider if participants must be reconsented and if so, this must be to the most current version of the ICF(s) during their participation in the study. • A copy of the ICF(s) must be provided to the participant or the participant’s legally authorised representative. Participants who are rescreened are required to sign a new ICF.",
        "If rescreening occurs, all screening procedures must occur within the required timeframes prior to randomisation, described in the SoA (Section 1.3). The ICF will contain a separate section that addresses and documents the collection and use of any mandatory and/or optional HBS. The investigator or authorised designee will explain to each participant the objectives of the analysis to be done on the samples and any potential future use.",
        "Participants will be told that they are free to refuse to participate in any optional samples or the future use, and may withdraw their consent at any time and for any reason during the retention period. A 4 Recruitment Strategy Participants may be recruited through clinical chart review, existing patient lists, referrals or advertisements. Additional recruitment strategies may be implemented at individual clinical study sites, at the discretion of the principal investigator.",
        "A 5 Data Protection • Participants will be assigned a unique identifier by AstraZeneca. Any participant records or datasets that are transferred to AstraZeneca will contain the identifier only; participant names or any information which would make the participant identifiable will not be transferred. • The participant must be informed that their personal study-related data will be used by AstraZeneca in accordance with local data protection law.",
        "The level of disclosure and use of their data must also be explained to the participant in the informed consent. • The participant must be informed that their medical records may be examined by Clinical Quality Assurance auditors or other authorised personnel appointed by AstraZeneca, by appropriate IRB/IEC members, and by inspectors from regulatory authorities."
      ],
      "chips": [
        "VECTRA-01",
        "p168/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v168.jpg",
      "cap": "Protocol page 168 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 169 of 221 · • The participant must be informed that data will be collected only for the business…",
      "audio": [
        "• The participant must be informed that data will be collected only for the business needs. We will only collect and use the minimum amount of personal data to support our business activities and will not make personal data available to anyone (including internal staff) who is not authorised or does not have a business need to know the information. • The participant must be informed that in some cases their data may be pseudonymised.",
        "The GDPR defines pseudonymisation as the processing of personal data in such a way that the personal data can no longer be attributed to a specific individual without the use of additional information, provided that such additional information is kept separately and protected by technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.",
        "• Appropriate safeguards will be implemented to protect coded data during and after the study that include: − Access to the coded data will be restricted and monitored, and limited to specific individuals subject to confidentiality obligations (including the obligation to not attempt to re-identify individuals/decode the clinical data).",
        "− The coded data will be protected with security measures to avoid data alteration, loss, and unauthorised accesses and further de-identification techniques may be applied; as well as other high-standard technical security means such as encryption. − A Data Protection Impact Assessment, where required, will apply to identify and mitigate privacy risks, if any, associated with each scientific research.",
        "− The coded data will not be shared for direct marketing purposes or other purposes that are not legal duties or are not related to scientific research purposes of the study. In particular, it will not be used to make decisions about future services available to the participant, such as insurance.",
        "• Participants are also protected legally by the following means, if the coded data will be shared with third parties - other companies within the Sponsor group; Service Providers; Research partners, who may be located in countries which do not offer the same level of protection as the participants country for which the participant will be informed in the ICF: − Within the Sponsor group, the participants’ coded data are protected by Binding Corporate Rules.",
        "More information about the Sponsor’s Binding Corporate Rules are provided here: www.astrazenecabindingcorporaterules.com, or by other contractual arrangements as may be required under local law.",
        "− In all other cases, the participants’ coded data are protected by contractual arrangements, Codes of Conduct, or certifications that set the rules for personal data protection to those available in the participant’s country or other alternatives set forth in the law, as well as any supplementary technical and organisational measures that may result out of conducted transfer impact assessments, where required."
      ],
      "chips": [
        "VECTRA-01",
        "p169/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v169.jpg",
      "cap": "Protocol page 169 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 170 of 221 · Personal Data Breaches A ‘personal data breach’ means a breach of security leading…",
      "audio": [
        "Personal Data Breaches A ‘personal data breach’ means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed.",
        "• In compliance with applicable laws, the Data Controller1 for the processing activity where the personal data breach occurred (AstraZeneca or respectively the site), will notify the data protection authorities without undue delay within the legal terms provided for such notification and within the prescribed form and content.",
        "• Whilst AstraZeneca has processes in place to deal with personal data breaches it is important that investigators that work with AstraZeneca have controls in place to protect participant data privacy. The investigator should have a process in place to ensure that: • Site staff or Service Providers delegated by the investigator/institution can identify the occurrence of a (potential) personal data breach(es).",
        "• Any (potential) personal data breach is promptly reported to AstraZeneca or delegated party, through the contacts (email address or telephone number) provided by AstraZeneca. AstraZeneca and the site must demonstrate that they: • Have taken all necessary steps to avoid personal data breaches.",
        "• Have undertaken measures to prevent such breaches from occurring in the first place and to mitigate the impact of occurred data breaches (eg, applying encryption, maintaining and keeping systems and IT security measures up-to-date, regular reviews and testing, regular training of employees, and developed security policies and standards).",
        "• Where possible, have developed an internal data breach reporting and investigation process and internal protocols with guidance on how to respond swiftly and diligently to the occurrence of a personal data breach. • Where it has not been possible to develop an internal data breach reporting and investigation process, the site follows AstraZeneca’s instructions.",
        "1 The data controller determines the purposes for which and the means by which personal data are processed, as defined by the European Commission."
      ],
      "chips": [
        "VECTRA-01",
        "p170/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v170.jpg",
      "cap": "Protocol page 170 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 171 of 221 · Notification of personal data breach to participants: • Notification to participants…",
      "audio": [
        "Notification of personal data breach to participants: • Notification to participants is done by the site for the data breaches that occurred within the processing activities for which the site is the Data Controller and for data breaches occurred within the processing activities of AstraZeneca as the Data Controller, the notification is done in collaboration with the site and is performed by the site and/or principal investigator, acting on behalf of AstraZeneca, so that",
        "AstraZeneca has no access to the identifying personal information of the participants. The site and/or principal investigator shall conduct the notification by contacting the participants using the information that they gave for communication purposes in clinical research.",
        "• If a personal data breach occurs in a processor’s systems, engaged by AstraZeneca, the processor under contractual obligations with AstraZeneca promptly and in due course after discovering the breach notifies AstraZeneca and provides full cooperation with the investigation.",
        "In these cases, to the extent AstraZeneca is the Data Controller for the processing activity where the breach occurred, it will be responsible for the notification to data protection authorities and, if applicable, to participants.",
        "If the personal data breach needs to be notified to the participants, the notification to participants is done in collaboration with the site and is performed by the site and/or principal investigator, acting on behalf of the Sponsor, so that AstraZeneca has no access to the identifying personal information of the participants.",
        "• If a personal data breach occurs involving an AstraZeneca’s representative device (ie, Study Monitor laptop), the AstraZeneca representative will provide AstraZeneca with all of the information needed for notification of the breach, without disclosing data that allows AstraZeneca directly or indirectly to identify the participants.",
        "The notification will be done by AstraZeneca solely with the information provided by the Study Monitor and in no event with access to information that could entail a risk of re-identification of the participants.",
        "If the data breach must be notified to the data participants, the notification will be done directly by the Study Monitor in collaboration with the site and/or principal investigator, acting on behalf of the Sponsor, so that AstraZeneca has no access to the identifying personal information of the participants. The contract between AstraZeneca and the Study Monitor shall expressly specify these conditions.",
        "• The contract between the site and AstraZeneca for performing the clinical research includes the provisions and rules regarding who is responsible for coordinating and directing the actions in relation to the breaches and performing the mandatory notifications to authorities and participants, where applicable. A 6 Committees Structure An I D M C will be established in order to assess the progress of the clinical study at regular intervals.",
        "This will include reviewing unblinded safety and efficacy data (see Section 9.6)."
      ],
      "chips": [
        "VECTRA-01",
        "p171/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v171.jpg",
      "cap": "Protocol page 171 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 172 of 221 · The safety of all AstraZeneca clinical studies is closely monitored on an ongoing…",
      "audio": [
        "The safety of all AstraZeneca clinical studies is closely monitored on an ongoing basis by AstraZeneca representatives in consultation with Patient Safety. Issues identified will be addressed; for instance, this could involve amendments to the protocol and letters to investigators.",
        "A 7 Dissemination of Clinical Study Data Study overall results, both technical and written in lay language (Trial Results Summary, also known as Lay Language Summary of overall study results), will be submitted to EU Clinical Trials Information System within a year from global End of Study Date in all participating countries, to ensure scientific integrity, completeness, robustness and reliability of data published results.",
        "A description of this clinical study will be available on www.astrazenecaclinicaltrials.com, http://www.clinicaltrials.gov, and https://euclinicaltrials.eu/ as will the summary of the main study results when they are available. The clinical study and/or summary of main study results may also be available on other websites according to the regulations of the countries in which the main study is conducted.",
        "A 8 Data Quality Assurance • All participant data relating to the study will be recorded on eCRFs unless transmitted to AstraZeneca or designee electronically (eg, laboratory data). The investigator is responsible for verifying that data entries are accurate and correct by electronically signing the eCRF. • The investigator must maintain accurate source records that support the information entered in the eCRF.",
        "• The investigator must permit study-related monitoring, audits, IRB/IEC review, and regulatory agency inspections and provide direct access to source records. • QTLs will be predefined in the Integrated Quality Risk Management Plan to identify systematic issues that can impact participant safety and/or reliability of study results.",
        "These predefined parameters will be monitored during the study, and important deviations from the QTLs and remedial actions taken will be summarised in the CSR.",
        "• Monitoring details describing strategy, including definition of study-critical data items and processes (eg, risk-based initiatives in operations and quality such as Risk Management and Mitigation Strategies and Analytical Risk-based Monitoring), methods, responsibilities and requirements, including handling of non-compliance issues and monitoring techniques (central, remote, or on-site monitoring) are included in the Monitoring Plan(s).",
        "• AstraZeneca or designee is responsible for medical oversight throughout the conduct of the study which includes clinical reviews of study data in accordance with the currently approved protocol. Monitoring details describing clinical reviews of study data from a medical perspective are included in more detail in the Medical Oversight Plan(s)."
      ],
      "chips": [
        "VECTRA-01",
        "p172/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v172.jpg",
      "cap": "Protocol page 172 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 173 of 221 · • AstraZeneca or designee is responsible for the data management of this study…",
      "audio": [
        "• AstraZeneca or designee is responsible for the data management of this study including quality checking of the data. • AstraZeneca assumes accountability for actions delegated to other individuals (eg, Service Providers).",
        "• Study monitors will perform Source Data Verification for sample of sites, participants and data, which will be selected in a risk-based fashion as per the Monitoring Plan(s) to confirm that data entered into the eCRF by authorised site personnel are verifiable from source records.",
        "• Study monitors will perform ongoing Source Data Review as per the Monitoring Plan(s) to confirm that data in source are accurate and complete; that the safety and rights of participants are being protected; and that the study is being conducted in accordance with the currently approved protocol and any other study agreements, ICH GCP, and all applicable regulatory requirements.",
        "• Records, including signed ICFs, pertaining to the conduct of this study must be retained by the investigator for a minimum of 25 years after study archiving or as required by local regulations, according to the AstraZeneca Global Retention and Disposal Schedule. No records may be destroyed during the retention period without the written approval of AstraZeneca. No records may be transferred to another location or party without written notification to AstraZeneca.",
        "A 9 Source Records • Source documents provide evidence for the existence of the participant and substantiate the integrity of the data collected. Source records are filed at the investigator’s site. • Data entered in the eCRF that are transcribed from source records must be consistent with the source records or the discrepancies must be explained. The investigator may need to request previous medical records or transfer records, depending on the study.",
        "Also, current medical records must be available. • Definition of what constitutes source records and its origin can be found in the monitoring guidelines. All information in original records and certified copies of original records of clinical findings, observations, or other activities in a clinical study necessary for the reconstruction and evaluation of the study are defined as source documents.",
        "Source data are contained in source documents (original records or certified copies). A 10 Study and Site Start and Closure The study start date is the date on which the clinical study will be open for recruitment of participants (first site activated)."
      ],
      "chips": [
        "VECTRA-01",
        "p173/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v173.jpg",
      "cap": "Protocol page 173 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 174 of 221 · Start of recruitment is the first participant consented",
      "audio": [
        "Start of recruitment is the first participant consented. Study/Site Termination AstraZeneca or designee reserves the right to close the study site or terminate the study at any time for any reason at the sole discretion of AstraZeneca. Study sites will be closed upon study completion. A study site is considered closed when all required documents and study supplies have been collected and a study-site closure visit has been performed.",
        "The investigator may initiate study-site closure at any time, provided there is reasonable cause and sufficient notice is given in advance of the intended termination.",
        "Reasons for the early closure of a study site by AstraZeneca or the investigator may include but are not limited to: For study termination: • Discontinuation of further study intervention development For site termination: • Failure of the investigator to comply with the protocol, the requirements of the IRB/IEC or local health authorities, AstraZeneca’s procedures, or GCP guidelines • Inadequate or no recruitment (evaluated after a reasonable amount of time) recruitment of",
        "participants by the investigator • Total number of participants included earlier than expected If the study is prematurely terminated or suspended, AstraZeneca shall promptly inform the investigators, the IRBs/IECs, the regulatory authorities, and any Service Provider(s) used in the study of the reason for termination or suspension, as specified by the applicable regulatory requirements.",
        "The investigator shall promptly inform the participant and should assure appropriate participant therapy and/or follow-up. Participants from terminated sites may have the opportunity to be transferred to another site to continue the study. A 11 Publication Policy • The results of this study may be published or presented at scientific meetings. If this is foreseen, the investigator agrees to submit all manuscripts or abstracts to AstraZeneca before submission.",
        "This allows AstraZeneca to protect proprietary information and to provide comments."
      ],
      "chips": [
        "VECTRA-01",
        "p174/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v174.jpg",
      "cap": "Protocol page 174 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 175 of 221 · • AstraZeneca will comply with the requirements for publication of study results",
      "audio": [
        "• AstraZeneca will comply with the requirements for publication of study results. In accordance with standard editorial and ethical practice, AstraZeneca will generally support publication of multicentre studies only in their entirety and not as individual site data. In this case, a coordinating investigator will be designated by mutual agreement.",
        "• Authorship will be determined by mutual agreement and in line with International Committee of Medical Journal Editors authorship requirements."
      ],
      "chips": [
        "VECTRA-01",
        "p175/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v175.jpg",
      "cap": "Protocol page 175 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 176 of 221 · Appendix B AEs: Definitions and Procedures for Recording, Evaluating, Follow-up, and…",
      "audio": [
        "Appendix B AEs: Definitions and Procedures for Recording, Evaluating, Follow-up, and Reporting B 1 Definition of AEs An AE is the development of any untoward medical occurrence (other than progression of the malignancy under evaluation) in a patient or clinical study participant administered a medicinal product, and which does not necessarily have a causal relationship with this treatment.",
        "An AE can therefore be any unfavourable and unintended sign (eg, an abnormal laboratory finding), symptom (for example nausea, chest pain), or disease temporally associated with the use of a medicinal product, whether it's considered related to the medicinal product. The term AE is used to include both serious and non-serious AEs and can include a deterioration of a pre-existing medical occurrence.",
        "An AE may occur at any time, including run-in or washout periods, even if no study intervention has been administered. B 2 Definition of SAEs An S A E is an AE occurring during any study phase (ie, run-in, treatment, washout, follow-up), that fulfils one or more of the following criteria: • Results in death. • Is immediately life-threatening. • Requires in-patient hospitalisation or prolongation of existing hospitalisation.",
        "• Results in persistent or significant disability or incapacity. • Is a congenital anomaly or birth defect. • Is an important medical event that may jeopardise the participant or may require medical treatment to prevent one of the outcomes listed above. AEs for malignant tumours reported during a study should generally be assessed as SAEs. If no other seriousness criteria apply, the ‘Important Medical Event’ criterion should be used.",
        "In certain situations, however, medical judgement on an individual event basis should be applied to clarify that the malignant tumour event should be assessed and reported as a non-S A E.",
        "For example, if the tumour is included as medical history and progression occurs during the study, but the progression does not change treatment and/or prognosis of the malignant tumour, the AE may not fulfil the attributes for being assessed as serious, although reporting of the progression of the malignant tumour as an AE is valid and should occur.",
        "Also, some types of malignant tumours, which do not spread remotely after a routine treatment that does not require hospitalisation, may be assessed as non-serious; examples in adults include Stage 1 basal cell carcinoma and Stage 1A1 cervical cancer removed via cone biopsy."
      ],
      "chips": [
        "VECTRA-01",
        "p176/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v176.jpg",
      "cap": "Protocol page 176 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 177 of 221 · The above instruction applies only when the malignant tumour event in question is a…",
      "audio": [
        "The above instruction applies only when the malignant tumour event in question is a new malignant tumour (ie, it is not the tumour for which entry into the study is a criterion and that is being treated by the study intervention and is not the development of new or progression of existing metastasis to the tumour under study).",
        "Malignant tumours that - as part of normal, if rare, progression - undergo transformation (eg, Richter’s transformation of B-cell chronic lymphocytic leukaemia into diffuse large B-cell lymphoma) should not be considered a new malignant tumour. Life-threatening ‘Life-threatening’ means that the participant was at immediate risk of death from the AE as it occurred, or it is suspected that use or continued use of the medicinal product would result in the participant’s death.",
        "‘Life-threatening’ does not mean that had an AE occurred in a more severe form it might have caused death (eg, hepatitis that resolved without hepatic failure). Hospitalisation Outpatient treatment in an emergency room is not in itself an S A E, although the reasons for it may be (eg, bronchospasm, laryngeal oedema).",
        "Hospital admissions and/or surgical operations planned before or during a study are not considered AEs if the illness or disease existed before the participant was enrolled in the study, provided that it did not deteriorate in an unexpected way during the study.",
        "Important Medical Event or Medical Treatment Medical and scientific judgement should be exercised in deciding whether a case is serious in situations where important medical events may not be immediately life-threatening or result in death, hospitalisation, disability or incapacity but may jeopardise the participant or may require medical treatment to prevent one or more outcomes listed in the definition of serious. These should usually be considered as serious.",
        "Simply stopping the suspect drug does not mean that it is an important medical event; medical judgement must be used.",
        "Important medical events: • Angio-oedema not severe enough to require intubation but requiring IV hydrocortisone treatment • Hepatotoxicity caused by paracetamol (acetaminophen) overdose requiring treatment with N-acetylcysteine • Intensive treatment in an emergency room or at home for allergic bronchospasm • Blood dyscrasias (eg, neutropenia or anaemia requiring blood transfusion, etc) or convulsions that do not result in hospitalisation"
      ],
      "chips": [
        "VECTRA-01",
        "p177/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v177.jpg",
      "cap": "Protocol page 177 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 178 of 221 · • Development of drug dependency or drug abuse Intensity Rating Scale: • Mild…",
      "audio": [
        "• Development of drug dependency or drug abuse Intensity Rating Scale: • Mild (awareness of sign or symptom, but easily tolerated) • Moderate (discomfort sufficient to cause interference with normal activities) • Severe (incapacitating, with inability to perform normal activities) It is important to distinguish between serious and severe AEs. Severity is a measure of intensity whereas seriousness is defined by the criteria in Appendix B 2.",
        "An AE of severe intensity need not necessarily be considered serious. For example, nausea that persists for several hours may be considered severe nausea, but not an S A E unless it meets the criteria shown in Appendix B 2. On the other hand, a stroke that results in only a limited degree of disability may be considered a mild stroke but would be an S A E when it satisfies the criteria shown in Appendix B 2.",
        "The grading scales found in the revised NCI CTCAE version 6.0 will be utilised for all events. This version will be used for the duration of the study. For those events without assigned CTCAE grades, the recommendation in the CTCAE criteria that converts mild, moderate, and severe events into CTCAE grades should be used. A copy of the CTCAE can be downloaded from the Cancer Therapy Evaluation Program website (http://ctep.cancer.gov).",
        "The applicable version of CTCAE should be described clearly. B 3 A Guide to Interpreting the Causality Question When assessing causality consider the following factors when deciding if there is a ‘reasonable possibility’ that an AE may have been caused by the medicinal product. • Time Course. Exposure to suspect drug. Has the participant received the suspect drug? Did the AE occur in a reasonable temporal relationship to the administration of the suspect drug?",
        "• Consistency with known drug profile. Was the AE consistent with the previous knowledge of the suspect drug (pharmacology and toxicology) or drugs of the same pharmacological class? Or could the AE be anticipated from its pharmacological properties? • De-challenge experience. Did the AE resolve or improve on stopping or reducing the dose of the suspect drug? • No alternative cause.",
        "The AE cannot be reasonably explained by another aetiology such as the underlying disease, other drugs, other host, or environmental factors. • Re-challenge experience. Did the AE reoccur if the suspected drug was reintroduced after having been stopped? AstraZeneca would not normally recommend or support a re-challenge."
      ],
      "chips": [
        "VECTRA-01",
        "p178/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v178.jpg",
      "cap": "Protocol page 178 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 179 of 221 · • Laboratory tests",
      "audio": [
        "• Laboratory tests. A specific laboratory investigation (if performed) has confirmed the relationship. In difficult cases, other factors could be considered such as: • Is this a recognised feature of overdose of the drug? • Is there a known mechanism? Causality of ‘related’ is made if following a review of the relevant data, there is evidence for a ‘reasonable possibility’ of a causal relationship for the individual case.",
        "The expression ‘reasonable possibility’ of a causal relationship is meant to convey, in general, that there are facts (evidence) or arguments to suggest a causal relationship. The causality assessment is performed based on the available data including enough information to make an informed judgement. With no available facts or arguments to suggest a causal relationship, the event(s) will be assessed as ‘not related’.",
        "For each S A E, the investigator must promptly document in the eCRF that they have reviewed the S A E and have provided an assessment of causality. Causal relationship in cases where the DUS has deteriorated due to lack of effect should be classified as ‘no reasonable possibility’.",
        "B 4 Medication Error, Drug Abuse, and Drug Misuse Medication Error For the purposes of this clinical study a medication error is an unintended failure or mistake in the treatment process for a study intervention that either causes harm to the participant or has the potential to cause harm to the participant. A medication error is not lack of efficacy of the drug, but rather a human or process related failure while the drug is in control of the study site staff or participant.",
        "Medication error includes situations where an error: • Occurred • Was identified and intercepted before the participant received the drug • Did not occur, but circumstances were recognised that could have led to an error Examples of events to be reported in clinical studies as medication errors: • Drug name confusion"
      ],
      "chips": [
        "VECTRA-01",
        "p179/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v179.jpg",
      "cap": "Protocol page 179 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 180 of 221 · • Dispensing error, eg, medication prepared incorrectly, even if it was not actually…",
      "audio": [
        "• Dispensing error, eg, medication prepared incorrectly, even if it was not actually given to the participant • Drug not administered as indicated, eg, wrong route, dose (error greater than plus or minus 10%), or wrong site of administration • Drug not taken as indicated, eg, tablet dissolved in water when it should be taken as a solid tablet • Drug not stored as instructed, eg, kept in the refrigerator when it should be at room temperature • Wrong participant received the",
        "medication (excluding I R T/R T S M errors) • Wrong drug administered to participant (excluding I R T/R T S M errors) Examples of events that do not require reporting as medication errors in clinical studies: • Errors related to or resulting from I R T/R T S M - including those which led to one of the above listed events that would otherwise have been a medication error • Participant accidentally missed drug dose(s), eg, forgot to take medication • Accidental overdose (will",
        "be captured as an overdose) • Participant failed to return unused medication or empty packaging Medication errors are not regarded as AEs but AEs may occur as a consequence of the medication error. Drug Abuse For the purpose of this study, drug abuse is defined as the persistent or sporadic intentional, non-therapeutic excessive use of study intervention for a perceived reward or desired non-therapeutic effect.",
        "Any events of drug abuse, with or without associated AEs, are to be captured and forwarded to the DES using the Drug Abuse Report Form. This form should be used both if the drug abuse happened in a study participant or if the drug abuse involves a person not enrolled in the study (such as a relative of the study participant).",
        "Examples of drug abuse include but are not limited to: • The drug is used with the intent of getting a perceived reward (by the study participant or a person not enrolled in the study). • The drug in the form of a tablet is crushed and injected or snorted with the intent of getting high."
      ],
      "chips": [
        "VECTRA-01",
        "p180/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v180.jpg",
      "cap": "Protocol page 180 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 181 of 221 · Drug Misuse Drug misuse is the intentional and inappropriate use (by a study…",
      "audio": [
        "Drug Misuse Drug misuse is the intentional and inappropriate use (by a study participant) of study intervention for medicinal purposes outside of the authorised product information, or for unauthorised study interventions, outside the intended use as specified in the protocol and includes deliberate administration of the product by the wrong route.",
        "Events of drug misuse, with or without associated AEs, are to be captured and forwarded to the DES using the Drug Misuse Report Form. This form should be used both if the drug misuse happened in a study participant or if the drug misuse regards a person not enrolled in the study (such as a relative of the study participant).",
        "Examples of drug misuse include but are not limited to: • The drug is used with the intention to cause an effect in another person • The drug is sold to other people for recreational purposes • The drug is used to facilitate assault in another person • The drug is deliberately administered by the wrong route • The drug is split in half because it is easier to swallow, when it is stated in the protocol that it must be swallowed whole • Only half the dose is taken because the",
        "study participant feels that he/she is feeling better when not taking the whole dose • Someone who is not enrolled in the study intentionally takes the drug"
      ],
      "chips": [
        "VECTRA-01",
        "p181/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v181.jpg",
      "cap": "Protocol page 181 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 182 of 221 · Appendix C Handling of Human Biological Samples C 1 Chain of Custody A full chain of…",
      "audio": [
        "Appendix C Handling of Human Biological Samples C 1 Chain of Custody A full chain of custody is maintained for all samples throughout their lifecycle. The investigator at each centre keeps full traceability of collected HBS from the participants while in storage at the centre until shipment or disposal (where appropriate) and records relevant processing and tracking information related to the samples whilst at the site.",
        "The sample receiver keeps full traceability of the samples while in storage and during use until used, disposed of or until further shipment, and keeps record of receipt of arrival and onward shipment or disposal. AstraZeneca or delegated representatives will keep oversight of the entire life cycle through procedures, monitoring of study sites, auditing or process checks, and contractual requirements of external laboratory providers.",
        "Samples retained for further use will be stored in the AstraZeneca-assigned biobanks or other sample archive facilities and will be tracked by the appropriate AstraZeneca team for the remainder of the sample life cycle. Unless otherwise stated, all appropriately consented samples will be retained for up to a maximum of 15 years from last participant last visit. Samples collected from participants in China will be destroyed or repatriated within 1 year of CSR.",
        "If required, AstraZeneca will ensure that remaining human biological tissue samples are returned to the site according to local regulations or at the end of the retention period, whichever is the sooner.",
        "C 2 Withdrawal of Informed Consent for Donated Human Biological Samples AstraZeneca ensures that biological samples are returned to the source or destroyed at the end of a specified period as described in the ICF If a participant withdraws consent to the use of donated HBS, applicable samples will be disposed of/destroyed/repatriated, and the action documented. If samples are already analysed, AstraZeneca is not obliged to destroy the results of this research.",
        "The participant will be presented with the option to opt out of the subsequent use of the donated samples during the withdrawal process. If the participant decides to opt out, then the donated samples will be disposed of. If the participant withdraws consent without opting out for the subsequent use of the"
      ],
      "chips": [
        "VECTRA-01",
        "p182/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v182.jpg",
      "cap": "Protocol page 182 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 183 of 221 · donated samples, then the samples will be used per protocol",
      "audio": [
        "donated samples, then the samples will be used per protocol. Following withdrawal of consent for biological samples, further study participation should be considered in relation to the withdrawal processes outlined in the informed consent. The investigator: • Ensures the participant’s withdrawal of informed consent to the use of donated samples is highlighted immediately to AstraZeneca or delegate.",
        "• Ensures that relevant HBS from that participant, if stored at the study site, are immediately identified, disposed of as appropriate, and the action documented. • Ensures that the participant and AstraZeneca are informed about the sample disposal.",
        "AstraZeneca ensures the organisation(s) holding the samples is/are informed about the withdrawn consent immediately and that samples are disposed of or repatriated as appropriate, and the action is documented, and study site is notified.",
        "C 3 International Air Transport Association Guidance Document 62nd Edition LABELLING AND SHIPMENT OF BIOHAZARD SAMPLES IATA (https://www.iata.org/whatwedo/cargo/dgr/Pages/download.aspx) classifies infectious substances into 3 categories: Category A, Category B, or Exempt Category A Infectious Substances are infectious substances in a form that, when exposure to it occurs, is capable of causing permanent disability, life-threatening or fatal disease in otherwise healthy",
        "humans or animals. Category A Pathogens are, eg, Ebola, Lassa fever virus. Infectious substances meeting these criteria which cause disease in humans or both in humans and animals must be assigned to UN 2814. Infectious substances which cause disease only in animals must be assigned to UN 2900. Category B Infectious Substances are infectious substances that do not meet the criteria for inclusion in Category A. Category B pathogens are, eg, Hepatitis A, C, D, and E viruses.",
        "They are assigned the following UN number and correct shipping name: • UN 3373 - Biological Substance, Category B • Are to be packed in accordance with UN 3373 and IATA 650 Exempt Substances are substances which do not contain infectious substances, or substances which are unlikely to cause disease in humans or animals. These are not subject to these"
      ],
      "chips": [
        "VECTRA-01",
        "p183/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v183.jpg",
      "cap": "Protocol page 183 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 184 of 221 · regulations unless they meet the criteria for inclusion in another class",
      "audio": [
        "regulations unless they meet the criteria for inclusion in another class. • Clinical study samples will fall into Category B or exempt under IATA regulations.",
        "• Clinical study samples will routinely be packed and transported at ambient temperature in IATA 650 compliant packaging (https://www.iata.org/contentassets/b08040a138dc4442a4f066e6fb99fe2a/dgr-66-enpi650.pdf) • Biological samples transported in dry ice require additional dangerous goods specification for the dry-ice content."
      ],
      "chips": [
        "VECTRA-01",
        "p184/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v184.jpg",
      "cap": "Protocol page 184 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 185 of 221 · Appendix D Optional Genomics Initiative Research D 1 Use/Analysis of DNA and Blood…",
      "audio": [
        "Appendix D Optional Genomics Initiative Research D 1 Use/Analysis of DNA and Blood Derivatives • AstraZeneca intends to collect and store DNA and blood derivatives (such as plasma and serum) for genomic and comprehensive omics characterisation research (such as protein, nucleotides and other entities in circulation), which may include metabolomic, proteomic and lipidomic analysis, to explore how genomic and timepoint omics variations may affect clinical parameters, risk and",
        "prognosis of diseases, and the response to medicinal product. • This genomic and multi-omics research may lead to better understanding of diseases, better diagnosis of diseases or other improvements in health care, and to the discovery of new diagnostics, treatments, or medications. Therefore, where local regulations and IRB/IEC allow, a blood sample will be collected for DNA and multi-omics analysis from consenting participants.",
        "• This optional genomic and multi-omics research may consist of the analysis of the structure of the participant’s DNA, ie, the entire genome. • The results of these genetic and multi-omics analyses may be reported in a separate study summary. • AstraZeneca will store the DNA and blood derivative samples in a secure storage space with adequate measures to protect confidentiality.",
        "D 2 Multi-omics Research Plan and Procedures Selection of Multi-omics Research Population All participants will be asked to participate in this genomic and multi-omics research. Participation is voluntary and if a participant declines to participate there will be no penalty or loss of benefit. The participant will not be excluded from any aspect of the main study.",
        "Inclusion Criteria For inclusion in this genomic and multi-omics research, participants must fulfil all of the inclusion criteria described in the main body of the protocol and: Provide informed consent for the Genomics Initiative sampling and analyses.",
        "Exclusion Criteria Exclusion from this genomic and multi-omics research may be for any of the exclusion criteria specified in the main study or any of the following: • Previous allogeneic bone marrow transplant • Transfusion of non-leukocyte depleted blood or blood component within 120 days of genetic sample collection"
      ],
      "chips": [
        "VECTRA-01",
        "p185/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v185.jpg",
      "cap": "Protocol page 185 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 186 of 221 · • Healthy volunteer’s samples will not be collected for the Genomics Initiative",
      "audio": [
        "• Healthy volunteer’s samples will not be collected for the Genomics Initiative. Withdrawal of Consent for Multi-omics Research • Participants may withdraw from this genomic and multi-omics research at any time, independent of any decision concerning participation in other aspects of the main study. Voluntary withdrawal will not prejudice further treatment. Procedures for withdrawal are outlined in Section 7.2 of the main protocol.",
        "Collection of Samples for Multi-omics Research • The blood samples for this genomic and multi-omics research will be obtained from the participants pre-dose at the first dosing visit. Although DNA is stable, early sample collection is preferred to avoid introducing bias through excluding participants who may withdraw due to an AE. • During this study, only one sample should be collected for each of the analyses listed, ie, one for genetics and one for multi-omics research.",
        "Coding and Storage of DNA and Multi-omics Samples The processes adopted for the coding and storage of samples for genomic and multi-omics analysis are important to maintain participant confidentiality. Samples may be stored for a maximum of 15 years from the date of last participant last visit (as defined in the protocol), after which they will be destroyed. DNA and blood derivatives are a finite resource that will be used up during analyses.",
        "Samples will be stored and used until no further analyses are possible or the maximum storage time has been reached. • An additional second code will be assigned to the samples either before or at the time of sample processing, replacing the information on the sample tube. Thereafter, the sample will be identifiable only by the second, unique number.",
        "This number is used to identify the sample and corresponding data at the AstraZeneca analysis laboratories, or at the designated organisation. No personal details identifying the individual will be available to any person (AstraZeneca employee or designated organisations working with the DNA or blood derivatives).",
        "• The link between the participant enrolment/randomisation code and the second number will be maintained and stored in a secure environment, with restricted access at AstraZeneca or designated organisations. The link will be used to identify the relevant samples for analysis, facilitate correlation of genotypic, or multi-omics results with clinical data, allow regulatory audit, and permit tracing of samples for destruction in the case of withdrawal of consent."
      ],
      "chips": [
        "VECTRA-01",
        "p186/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v186.jpg",
      "cap": "Protocol page 186 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 187 of 221 · Ethical and Regulatory Requirements • The principles for ethical and regulatory…",
      "audio": [
        "Ethical and Regulatory Requirements • The principles for ethical and regulatory requirements for the study, including this genomics and multi-omics research component, are outlined in Appendix A. Informed Consent • The genomic and multi-omics component of the Genomics Initiative research, outlined in this appendix, are optional and the participant may participate in other components of the main study without participating in this research.",
        "To participate in the genomic and multi-omics component of the study the participant must sign and date both the ICF for the main study and the Optional Genomics Initiative Research Information and Consent Form. Copies of both signed and dated consent forms must be given to the participant and the originals filed at the study centre.",
        "The principal investigator(s) is responsible for ensuring that consent is given freely, and that the participant understands that they may freely withdraw from the genetic aspect of the study at any time. Participant Data Protection • AstraZeneca will not provide individual sequencing, genotype, or multi-omics results to participants, any insurance company, any employer, their family members, or general physician unless required to do so by law.",
        "Extra precautions are taken to preserve confidentiality and prevent genomic and multi-omics data being linked to the identity of the participant. In exceptional circumstances, however, certain individuals might see both the genetic data and the personal identifiers of a participant. For example, in the case of a medical emergency, an AstraZeneca Physician or an investigator might know a participant’s identity and also have access to their genomic data.",
        "Regulatory authorities may require access to the relevant files, though the participant’s medical information and the genomic files would remain physically separate. Data management • Any genomic or multi-omics data generated in this study will be stored at a secure system at AstraZeneca and/or designated organisations to analyse the samples.",
        "• AstraZeneca and its designated organisations may share summary results (such as genetic differences from groups of individuals with a disease) from this genomics and multi-omics research with other researchers, such as hospitals, academic organisations, or drug- or health-related companies. This can be done by placing the results in scientific databases, where they can be combined with the results of similar studies to learn even more about health and disease.",
        "The researchers can only use this information for health-related research purposes. Researchers may see summary results, but they will not be able to see individual participant data or any personal identifiers."
      ],
      "chips": [
        "VECTRA-01",
        "p187/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v187.jpg",
      "cap": "Protocol page 187 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 188 of 221 · • Some or all of the clinical datasets from the main study may be merged with the…",
      "audio": [
        "• Some or all of the clinical datasets from the main study may be merged with the multi-omics data in a suitable secure environment separate from the clinical database. Statistical methods The number of participants that will agree to participate in the genetic research is unknown. It is therefore not possible to establish whether sufficient data will be collected to allow a formal statistical evaluation or whether only descriptive statistics will be generated.",
        "A SAP may be prepared where appropriate."
      ],
      "chips": [
        "VECTRA-01",
        "p188/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v188.jpg",
      "cap": "Protocol page 188 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 189 of 221 · Appendix E Actions Required in Cases of Increases in Liver Biochemistry and…",
      "audio": [
        "Appendix E Actions Required in Cases of Increases in Liver Biochemistry and Evaluation of Hy’s Law E 1 Introduction This appendix describes the process to be followed in order to identify and appropriately report potential Hy’s Law cases and Hy’s Law cases. It is not intended to be a comprehensive guide to the management of elevated liver biochemistries. Specific guidance on managing liver anomalies can be found in Section 8.4.6 of the protocol.",
        "During the study the investigator should remain vigilant for increases in liver biochemistry. The investigator is responsible for determining whether a participant meets potential Hy’s Law criteria at any point during the study.",
        "All sources of laboratory data are appropriate for the determination of potential Hy’s Law and Hy’s Law events; this includes samples taken at scheduled study visits and other visits including central and all local laboratory evaluations even if collected outside of the study visits; for example, potential Hy’s Law criteria could be met by an elevated ALT from a central laboratory and/or elevated TBL from a local laboratory.",
        "The investigator will also review AE data (for example, for AEs that may indicate elevations in liver biochemistry) for possible potential Hy’s Law events. The investigator participates, together with AstraZeneca clinical project representatives, in review and assessment of cases meeting potential Hy’s Law criteria to agree whether Hy’s Law criteria are met.",
        "Hy’s Law criteria are met if there is no alternative explanation for the elevations in liver biochemistry other than DILI caused by the study intervention. The investigator is responsible for recording data pertaining to potential Hy’s Law/Hy’s Law cases and for reporting SAEs and AEs according to the outcome of the review and assessment in line with standard safety reporting processes.",
        "E 2 Definitions Potential Hy’s Law AST or ALT greater than or equal to 3 times ULN together with TBL greater than or equal to 2 times ULN at any point during the study following the start of study medication irrespective of an increase in ALP.",
        "Hy’s Law AST or ALT greater than or equal to 3 times ULN together with TBL greater than or equal to 2 times ULN, where no other reason, other than the study intervention, can be found to explain the combination of increases, eg, elevated ALP indicating cholestasis, viral hepatitis, another drug."
      ],
      "chips": [
        "VECTRA-01",
        "p189/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v189.jpg",
      "cap": "Protocol page 189 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 190 of 221 · For potential Hy’s Law and Hy’s Law the elevation in transaminases must precede or…",
      "audio": [
        "For potential Hy’s Law and Hy’s Law the elevation in transaminases must precede or be coincident with (ie, on the same day) the elevation in TBL, but there is no specified timeframe within which the elevations in transaminases and TBL must occur.",
        "E 3 Identification of Potential Hy’s Law Cases In order to identify cases of potential Hy’s Law it is important to perform a comprehensive review of laboratory data for any participant who meets any of the following identification criteria in isolation or in combination: • ALT greater than or equal to 3 times ULN • AST greater than or equal to 3 times ULN • TBL greater than or equal to 2 times ULN Local Laboratories Being Used: The investigator will without delay review each",
        "new laboratory report and, if the identification criteria are met, will: • Notify the AstraZeneca representative. • Determine whether the participant meets potential Hy’s Law criteria (see Appendix E 2 for definition) by reviewing laboratory reports from all previous visits. • Promptly enter the laboratory data into the laboratory eCRF.",
        "E 4 Follow-up E 4.1 Potential Hy’s Law Criteria Not Met If the participant does not meet potential Hy’s Law criteria the investigator will: • Inform the AstraZeneca representative that the participant has not met potential Hy’s Law criteria. • Perform follow-up on subsequent laboratory results according to the guidance provided in the protocol.",
        "E 4.2 Potential Hy’s Law Criteria Met If the participant does meet potential Hy’s Law criteria the investigator will: • Determine whether potential Hy’s Law criteria were met at any study visit prior to starting study intervention (see Appendix E 6). • Notify the AstraZeneca representative who will then inform the central Study Team."
      ],
      "chips": [
        "VECTRA-01",
        "p190/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v190.jpg",
      "cap": "Protocol page 190 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 191 of 221 · • Within one day of potential Hy’s Law criteria being met, the investigator will…",
      "audio": [
        "• Within one day of potential Hy’s Law criteria being met, the investigator will report the case as an S A E of Potential Hy’s Law; serious criteria ‘Important medical event’ and causality assessment ‘yes/related’ according to the protocol process for S A E reporting.",
        "• For participants who met potential Hy’s Law criteria prior to starting study intervention, the investigator is not required to submit a potential Hy’s Law S A E unless there is a significant change2 in the participant’s condition. • The Study Clinical Lead will contact the investigator, to provide guidance, discuss, and agree an approach for the study participant’s follow-up (including any further laboratory testing) and the continuous review of data.",
        "• Subsequent to this contact the investigator will: − Monitor the participant until liver biochemistry parameters and appropriate clinical symptoms and signs return to normal or baseline levels, or as long as medically indicated. Complete follow-up S A E Form as required. − Investigate the aetiology of the event and perform diagnostic investigations as discussed with the Study Clinical Lead. − Complete the 3 Liver eCRF Modules as information becomes available.",
        "E 5 Review and Assessment of Potential Hy’s Law Cases The instructions in this appendix should be followed for all cases where potential Hy’s Law criteria are met.",
        "As soon as possible after the biochemistry abnormality is initially detected, the Study Clinical Lead will contact the investigator in order to review available data and agree on whether there is an alternative explanation for meeting potential Hy’s Law criteria other than DILI caused by the study intervention, to ensure timely analysis and reporting to health authorities within 15 calendar days from date potential Hy’s Law criteria was met.",
        "The AstraZeneca Global Clinical Lead or equivalent and Global Safety Physician will also be involved in this review together with other subject matter experts as appropriate. According to the outcome of the review and assessment, the investigator will follow the instructions below.",
        "Where there is an agreed alternative explanation for the ALT or AST and TBL elevations, a 2 A ‘significant’ change in the participant’s condition refers to a clinically relevant change in any of the individual liver biochemistry parameters (ALT, AST, or TBL) in isolation or in combination, or a clinically relevant change in associated symptoms.",
        "The determination of whether there has been a significant change will be at the discretion of the investigator, this may be in consultation with the Study Clinical Lead if there is any uncertainty."
      ],
      "chips": [
        "VECTRA-01",
        "p191/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v191.jpg",
      "cap": "Protocol page 191 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 192 of 221 · determination of whether the alternative explanation is an AE will be made and…",
      "audio": [
        "determination of whether the alternative explanation is an AE will be made and subsequently whether the AE meets the criteria for an S A E: • If the alternative explanation is not an AE, record the alternative explanation on the appropriate eCRF • If the alternative explanation is an AE/S A E: Update the previously submitted Potential Hy’s Law S A E and AE eCRFs accordingly with the new information (reassessing event term, causality and seriousness criteria) following the",
        "AstraZeneca standard processes. If it is agreed that there is no explanation that would explain the ALT or AST and TBL elevations other than the study intervention: • Send updated S A E (report term ‘Hy’s Law’) according to AstraZeneca standard processes. − The ‘Medically Important’ serious criterion should be used if no other serious criteria apply. − As there is no alternative explanation for the Hy’s Law case, a causality assessment of ‘related’ should be assigned.",
        "If, there is an unavoidable delay, of over 15 calendar days in obtaining the information necessary to assess whether the case meets the criteria for Hy’s Law, then it is assumed that there is no alternative explanation until such time as an informed decision can be made: • Provide any further update to the previously submitted S A E of Potential Hy’s Law, (report term now ‘Hy’s Law case’) ensuring causality assessment is related to study intervention and seriousness criteria",
        "is medically important, according to protocol process for S A E reporting. • Continue follow-up and review according to agreed plan. Once the necessary supplementary information is obtained, repeat the review and assessment to determine whether Hy’s Law criteria are still met.",
        "Update the previously submitted potential Hy’s Law S A E report following protocol process for S A E reporting, according to the outcome of the review and amending the reported term if an alternative explanation for the liver biochemistry elevations is determined.",
        "E 6 Actions Required When Potential Hy’s Law Criteria are Met Before and After Starting Study Intervention This appendix is applicable to participants with liver metastases who meet potential Hy’s Law criteria on study intervention, having previously met potential Hy’s Law criteria at a study visit prior to starting study intervention."
      ],
      "chips": [
        "VECTRA-01",
        "p192/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v192.jpg",
      "cap": "Protocol page 192 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 193 of 221 · At the first on-study intervention occurrence of potential Hy’s Law criteria being…",
      "audio": [
        "At the first on-study intervention occurrence of potential Hy’s Law criteria being met the investigator will determine if there has been a significant change in the participant’s condition compared with the last visit where potential Hy’s Law criteria were met • If there is no significant change no action is required.",
        "• If there is a significant change, notify the AstraZeneca representative, who will inform the central Study Team, then follow the subsequent process described in Appendix E 4.2. E 7 Actions Required for Repeat Episodes of Potential Hy’s Law This section is applicable when a participant meets potential Hy’s Law criteria on study intervention and has already met potential Hy’s Law criteria at a previous on-study intervention visit (refer to Appendix E 6).",
        "The requirement to conduct follow-up, review, and assessment of a repeat occurrence(s) of potential Hy’s Law is based on the nature of the alternative cause identified for the previous occurrence.",
        "The investigator should determine the cause for the previous occurrence of potential Hy’s Law criteria being met and answer the following question: Was the alternative cause for the previous occurrence of potential Hy’s Law criteria being met found to be the DUS, eg, chronic or progressing malignant disease, severe infection, or liver disease or did the participant meet potential Hy’s Law criteria prior to starting study intervention and at their first on-study intervention",
        "visit as described in Appendix E 6? If No: Follow the process described in Appendix E 4.2 for reporting potential Hy’s Law as an S A E. If Yes: Determine if there has been a significant change in the participant’s condition3 compared with when potential Hy’s Law criteria were previously met: • If there is no significant change no action is required.",
        "3 A ‘significant’ change in the participant’s condition refers to a clinically relevant change in any of the individual liver biochemistry parameters (ALT, AST, or TBL) in isolation or in combination, or a clinically relevant change in associated symptoms. The determination of whether there has been a significant change will be at the discretion of the investigator, this may be in consultation with the Study Clinical Lead if there is any uncertainty."
      ],
      "chips": [
        "VECTRA-01",
        "p193/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v193.jpg",
      "cap": "Protocol page 193 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 194 of 221 · • If there is a significant change follow the process described in Appendix E 4",
      "audio": [
        "• If there is a significant change follow the process described in Appendix E 4.2 for reporting potential Hy’s Law as an S A E.",
        "E 8 Laboratory Tests Hy’s Law Laboratory - Recommended Tests for Local Laboratories Additional standard chemistry and coagulation tests GGT LDH Prothrombin time INR Viral hepatitis IgM anti-HAV HBsAg IgM and IgG anti-HBc HBV DNA a IgG anti-HCV HCV RNA b IgM anti-HEV HEV RNA Other viral infections IgM and IgG anti-CMV IgG anti-HSV, and HSV 1/2 IgM testing or HSV 1/2 PCR c IgM and IgG anti-EBV Alcoholic hepatitis Carbohydrate deficient transferrin (CD-transferrin) Autoimmune",
        "hepatitis Antinuclear antibody (ANA) Anti-Liver/Kidney Microsomal Ab (Anti-LKM) Anti-Smooth Muscle Ab (ASMA) Metabolic diseases alpha-1-antitrypsin Ceruloplasmin Iron Ferritin Transferrin Transferrin saturation a HBV DNA is only recommended when IgG anti-HBc is positive. b HCV RNA is only recommended when IgG anti-HCV is positive or inconclusive. c HSV 1/2 IgM testing or HSV 1/2 PCR testing depending on region."
      ],
      "chips": [
        "VECTRA-01",
        "p194/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v194.jpg",
      "cap": "Protocol page 194 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 195 of 221 · Appendix F Guidelines for Evaluation of Objective Tumour Response Using RECIST 1",
      "audio": [
        "Appendix F Guidelines for Evaluation of Objective Tumour Response Using RECIST 1.1 Criteria in Soft Tissue and PCWG3 in Bone Lesions F 1 Introduction This appendix details the implementation of RECIST 1.1 guidelines (Eisenhauer et al 2009). Investigator assessments will use the RECIST 1.1 guidelines described in this appendix.",
        "F 2 Imaging Modalities and Acquisition Specifications for RECIST 1.1 A summary of the imaging modalities that can be used for tumour assessment of TLs, NTLs, and NLs is provided in Table 19.",
        "Table 19: Summary of Imaging Modalities for Tumour Assessment Target lesions Non-target lesions New lesions CT MRI CT MRI Plain X-ray Chest X-ray fluorine-18-fluoro-deoxyglucose PET/CT CT MRI Plain X-ray Chest X-ray fluorine-18-fluoro-deoxyglucose-PET/CT F 2.1 Computed Tomography and Magnetic Resonance Imaging CT with IV contrast is the preferred imaging modality (although MRI with IV contrast is acceptable if CT is contraindicated) to generate reproducible anatomical images",
        "for tumour assessments (ie, for measurement of TLs, assessment of NTLs, and identification of NLs). It is essential that the same correct imaging modality, image acquisition parameters (eg, anatomic coverage, imaging sequences, etc), imaging facility, tumour assessor (eg, radiologist), and method of tumour assessment (eg, RECIST 1.1) are used consistently for each participant throughout the study. The use of the same scanner for serial scans is recommended, if possible.",
        "It is important to follow the image collection/tumour assessment schedule as closely as possible (see Section 1.3), and this on-study imaging schedule MUST be followed regardless of any delays in dosing or missed imaging visits. If an unscheduled assessment is performed (eg, to investigate clinical signs/symptoms of progression) and the participant has not progressed, every attempt should be made to perform the subsequent scan acquisitions at the next scheduled imaging visit.",
        "Due to its inherent rapid acquisition (seconds), CT is the imaging modality of choice. Body scans should be performed with breath-hold scanning techniques, if possible. Therefore, CT of the chest is recommended over MRI due to significant motion artefacts (eg, heart, major blood vessels, breathing) associated with MRI. MRI has excellent contrast and spatial and temporal resolutions; however, there are many image acquisition variables involved in MRI, which greatly"
      ],
      "chips": [
        "VECTRA-01",
        "p195/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v195.jpg",
      "cap": "Protocol page 195 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 196 of 221 · impact image quality, lesion conspicuity, and measurement",
      "audio": [
        "impact image quality, lesion conspicuity, and measurement. Furthermore, the availability of MRI is variable globally. The modality used at follow-up should be the same as was used at baseline, and the lesions should be measured/assessed on the same pulse sequence. In general, local oncology diagnostic imaging parameters are applied for scan acquisition.",
        "It is beyond the scope of this appendix to prescribe specific MRI pulse sequence parameters for all scanners, body parts, and diseases. The most critical CT and MRI image acquisition parameters for optimal tumour evaluation are anatomic coverage, contrast administration, slice thickness, and reconstruction interval. a. Anatomic coverage: Optimal anatomic coverage for most solid tumours is the chest-abdomen (-pelvis).",
        "Coverage should encompass all areas of known predilection for metastases in the disease under evaluation and should additionally investigate areas that may be involved based on signs and symptoms of individual participants. Because a lesion later identified in a body part not scanned at baseline would be considered as an NL representing PD, careful consideration should be given to the extent of imaging coverage at baseline and at subsequent follow-up timepoints.",
        "This will enable better consistency not only of tumour measurements but also identification of new disease. Required anatomical regions to be imaged for assessment of tumour burden (TLs and/or NTLs) at baseline and follow-up visits vary according to the study, and these timepoints are specified in the SoA. Examples include the following: • IV contrast-enhanced CT of chest-abdomen (including the entire liver and both adrenal glands) (-pelvis).",
        "• Non-contrast CT of chest and IV contrast-enhanced abdomen (including the entire liver and both adrenal glands) (-pelvis). • IV contrast-enhanced CT or MRI of the head and neck. • IV contrast-enhanced MRI (preferred) or CT of the brain.",
        "For chest-abdomen-pelvis imaging, the following are scanning options in decreasing order of preference, with additional options (2 to 4) for consideration when participants have sensitivity to IV contrast or have compromised renal function: 1. Chest-abdomen (-pelvis) CT with IV CT contrast (most preferred). 2. Chest CT without IV contrast + abdomen (-pelvis) MRI with IV MRI contrast, if CT IV contrast (iodine based) is medically contraindicated at any time during the study.",
        "3. Chest-abdomen (-pelvis) CT without IV contrast, if both IV CT and MRI contrast are medically contraindicated or the participant has compromised renal function."
      ],
      "chips": [
        "VECTRA-01",
        "p196/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v196.jpg",
      "cap": "Protocol page 196 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 197 of 221 · Protocol body · page 197",
      "audio": [
        "4. Chest-abdomen (-pelvis) MRI with IV MRI contrast, if CT cannot be performed at any time during the study. b. IV contrast administration: Optimal visualisation and measurement of metastases in solid tumours require consistent administration (dose and rate) of IV contrast as well as timing of scanning.",
        "An adequate volume of a suitable contrast agent should be given so that the tumour lesions are demonstrated to best-effect and a consistent method is used on subsequent examinations for any given participant. Oral contrast is recommended to help visualise and differentiate structures in the abdomen and pelvis. c.",
        "Slice thickness and reconstruction interval: It is recommended that CT or MRI scans be acquired/reconstructed as contiguous (no gap) slices with less than or equal to 5 mm thickness throughout the entire anatomic region of interest for optimal lesion measurements. However, a slice thickness of less than or equal to 3 mm is preferred. Exceptionally, particular institutions may perform medically acceptable scans at slice thicknesses > 5 mm.",
        "If this occurs, the minimum size of measurable lesions at baseline should be twice the slice thickness of the baseline scans. For CT scans, all window settings should be included in the assessment, particularly in the thorax where lung and soft tissue windows should be considered. When measuring lesions, the TL should be measured on the same window setting for repeated examinations throughout the study.",
        "F 2.2 Chest X-ray Chest X-ray assessment will not be used for the assessment of TLs. Chest X-ray can, however, be used to assess NTLs and to identify the presence of NLs. However, there is preference that a higher resolution modality, such as CT, be used to confirm the presence of NLs. F 2.3 Plain X-ray Plain X-ray may be used as a method of assessment for bone NTLs and to identify the presence of new bone lesions.",
        "F 2.4 Isotopic Bone Scan Isotopic bone scans will not be used for the RECIST 1.1 assessment in this study. The main reason being that bone lesions are not assessed via RECIST in the study. Isotopic bone scans will be used to assess bone lesions via PCWG3, refer to Appendix F 5, for the relevant assessment via this modality.",
        "F 2.5 fluorine-18-Fluorodeoxyglucose-PET/CT This section describes the use of fluorine-18-FDG PET, but the same applies for dual modality scans like FDG PET/CT or FDG PET/MRI."
      ],
      "chips": [
        "VECTRA-01",
        "p197/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v197.jpg",
      "cap": "Protocol page 197 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 198 of 221 · FDG PET may be used as a method of assessment to identify the presence of lesions at…",
      "audio": [
        "FDG PET may be used as a method of assessment to identify the presence of lesions at any visit. Lesions identified on an FDG PET at baseline and confirmed by CT or MRI at baseline should be recorded as TLs if measurable, or NTLs if unmeasurable and followed by the same method per baseline assessment (CT, MRI). For lesions identified by FDG PET scan at baseline that cannot be confirmed by these methods, they can be recorded as NTLs.",
        "FDG PET/CT scans may be used as a method for identifying NLs for RECIST 1.1 assessments according to the following algorithm: NLs will be recorded where there is positive fluorine-18-FDG uptake not present on baseline or prior FDG PET scan or in a location corresponding to an NL on a companion CT/MRI collected close in time to the FDG PET scan. The PET portion of the PET/CT introduces additional data that may bias an investigator if it is not routinely or serially performed.",
        "Therefore, if there is no baseline or prior FDG PET scan available for comparison, and no evidence of NLs on companion CT/MRI scans, then follow-up CT/MRI assessments should continue as per the regular imaging schedule to verify the unequivocal presence of NLs.",
        "At present, low-dose or attenuation correction CT portions of a combined FDG PET/CT scan are of limited use in anatomically based efficacy assessments, and it is therefore suggested that they should not substitute for dedicated diagnostic contrast-enhanced CT scans for tumour measurements by RECIST 1.1.",
        "In exceptional situations, if a site can document that the CT performed, as part of a PET/CT examination, is of identical diagnostic quality (with IV contrast) to a dedicated diagnostic CT scan, then the CT portion of the PET/CT can be used for RECIST 1.1 tumour assessments. Caution that this is not recommended because the PET portion of the CT introduces additional (PET) data that may bias an investigator if it is not routinely or serially performed.",
        "The same rules apply to MRI if an FDG PET/MRI is performed. F 2.6 Ultrasound Ultrasound examination will not be used for RECIST 1.1 assessment of tumours as it is not a reproducible acquisition method (operator dependent), is subjective in interpretation, and may not provide an accurate assessment of the true tumour size. Tumours identified by ultrasound will need to be assessed by correlative CT or MRI anatomical scan.",
        "F 2.7 Other Tumour Assessments F 2.7.1 Clinical Examination Clinical examination of skin/surface lesions (by visual inspection or manual palpation) will not be used for RECIST 1.1 assessments. Tumours identified by clinical examination will need to be assessed by correlative CT or MRI anatomical scans. F 2.7.2 Endoscopy and Laparoscopy Endoscopy and laparoscopy will not be used for tumour assessments as they are not validated in"
      ],
      "chips": [
        "VECTRA-01",
        "p198/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v198.jpg",
      "cap": "Protocol page 198 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 199 of 221 · the context of tumour assessment",
      "audio": [
        "the context of tumour assessment. F 2.7.3 Histology, Cytology, and Tumour Markers Histological or cytological examination of the tumour biopsy samples cannot be used on their own to provide a tumour response assessment. Histological or cytological examination of the tumour biopsy samples can, however, be used to support radiological findings to confirm tumour response assessment as per RECIST 1.1 to differentiate between PR and CR in cases with residual benign lesions.",
        "Results of cytological examination for confirming the neoplastic origin of any effusion (eg, ascites, pericardial effusion, or pleural effusion) that appears or worsens during the study can be used in the tumour response assessment as per RECIST 1.1 to confirm progression in case of SD, PR, or CR. Tumour markers alone cannot be used to assess tumour response if markers are initially high. However, they must be normal to determine CR or as indicated in the protocol.",
        "F 3 Measurability of Tumour Lesions at Baseline F 3.1 RECIST 1.1 Measurable Lesions at Baseline A tumour lesion that can be accurately measured at baseline as greater than or equal to 10 mm in the longest diameter for non-nodal lesions or greater than or equal to 15 mm in short axis diameter for lymph node lesions using IV contrast-enhanced CT or MRI with slice thickness < 5 mm and that is suitable for accurate repeated measurements.",
        "If the CT/MRI slice thickness used is > 5 mm, the minimum size of measurable disease at baseline should be twice the slice thickness of the baseline scan. F 3.2 Non-measurable Lesions at Baseline • Truly non-measurable lesions include the following: − Leptomeningeal disease. − Ascites, pleural effusion, or pericardial effusion. − Inflammatory breast disease. − Lymphangitic involvement of skin or lung.",
        "• All other lesions, including small lesions (longest diameter <10 mm or pathological lymph nodes with greater than or equal to 10 mm to <15 mm short axis diameter at baseline).4 4 Lymph nodes with < 10 mm short axis diameter are considered non-pathological and should not be recorded or followed as NTLs."
      ],
      "chips": [
        "VECTRA-01",
        "p199/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v199.jpg",
      "cap": "Protocol page 199 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 200 of 221 · • Previously irradiated lesions",
      "audio": [
        "• Previously irradiated lesions.5 • Brain metastasis. F 3.3 Special Considerations Regarding Lesion Measurability at Baseline • Bone lesions: − Bone lesions are not assessed by RECIST 1.1 in this study and cannot be recorded as TL, NTL, or even NLs, as PCWG3 criteria will be used to assess bone lesions.",
        "− Lytic bone lesions or mixed lytic-blastic lesions, with identifiable soft tissue components, can be considered measurable if the soft tissue component meets the definition of measurability. The soft-tissue component of the lesion can then be assessed via RECIST 1.1.",
        "• Cystic lesions thought to represent cystic metastases can be considered measurable lesions if they meet the criteria for measurability from a radiological point of view, but if non-cystic lesions are present in the same participant, these should be selected over cystic lesions as TLs.",
        "F 3.4 RECIST 1.1 TL Selection at Baseline A maximum of 5 measurable lesions, with a maximum of 2 lesions per organ (including lymph nodes collectively considered as a single organ), representative of all lesions involved should be identified as TLs at baseline.",
        "TLs should be selected on the basis of their size (longest diameter for non-nodal lesions or short axis diameter for nodal lesions), but in addition should be those that lend themselves to reproducible repeated measurements. It may be the case that, on occasion, the largest lesion does not end itself to reproducible measurement, in which circumstance the next largest lesion that can be measured reproducibly should be selected.",
        "Lymph nodes, in any location (local/regional and distant), are collectively considered as a single organ, with a maximum of 2 lymph nodes as TLs. A bilateral organ (eg, adrenal glands), a segmented organ (eg, liver), or a multilobed organ (eg, lung) is each considered as a single organ. The site and location of each TL should be documented, as well as the longest axis diameter for non-nodal lesions (or short axis diameter for lymph nodes).",
        "All measurements should be recorded in millimetres. At baseline, the SOD for all TLs will be calculated and reported as the baseline SOD. At follow-up visits, the SOD for all TLs will be calculated and reported as the 5 Localised post-radiation changes that affect lesion size may occur. Therefore, lesions that have been previously irradiated are typically considered non-measurable and as NTL at baseline and followed up as part of the NTL assessment."
      ],
      "chips": [
        "VECTRA-01",
        "p200/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v200.jpg",
      "cap": "Protocol page 200 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 201 of 221 · follow-up SOD",
      "audio": [
        "follow-up SOD. F 3.4.1 Special Cases for TL Assessment at Baseline • For TLs measurable in 2 or 3 dimensions, always report the longest diameter. For pathological lymph nodes measurable in 2 or 3 dimensions, always report the short axis diameter. • When lymph nodes are coalesced and no longer separable in a conglomerate mass, the vector of the longest diameter should be used to determine the perpendicular vector for the maximal short axis diameter of the coalesced mass.",
        "Non-nodal lesions that coalesce should similarly be assessed by the longest axis diameter. • Tumour lesions selected for newly acquired screening biopsy should not be selected as TLs, unless imaging occurred at least approximately 2 weeks after biopsy, allowing time for healing. • If the CT/MRI slice thickness used is >5 mm, the minimum size of measurable disease at baseline should be twice the slice thickness of the baseline scan.",
        "• If a lesion has completely disappeared, the diameter should be recorded as 0 mm. If a lesion appears in the same location on a subsequent scan, it will be recorded as a NL. F 3.5 RECIST 1.1 NTL Selection at Baseline All other lesions, including non-measurable lesions and surplus measurable lesions, not recorded as TLs should be identified as NTLs at baseline.",
        "Measurements of these lesions are not required, but the presence or absence of each should be noted throughout follow-up. F 4 Evaluation of Tumour Response and Progression F 4.1 RECIST 1.1 TL Assessment at Follow-up This section defines the criteria used to determine objective tumour visit response for RECIST 1.1-defined TLs.",
        "The imaging modality, location, and scan date of each TL identified previously at baseline should be documented at follow-up visits with the long axis diameter for non-nodal lesions or short axis diameter for lymph node lesions. All measurements should be recorded in millimetres. The SOD for all TLs at each follow-up visit will be compared with the baseline SOD (for response or SD) or to the smallest prior (nadir) SOD (for progression).",
        "F 4.1.1 Special Cases for TL Assessment at Follow-up • If a lesion has completely disappeared, the diameter should be recorded as 0 mm. If a lesion appears in the same location on a subsequent scan, it will be recorded as an NL. • If a TL splits into 2 or more parts, the SOD of those parts should be recorded."
      ],
      "chips": [
        "VECTRA-01",
        "p201/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v201.jpg",
      "cap": "Protocol page 201 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 202 of 221 · • If 2 or more TLs merge, then the SOD of the combined lesion should be recorded for…",
      "audio": [
        "• If 2 or more TLs merge, then the SOD of the combined lesion should be recorded for 1 of the lesions and 0 mm recorded for the other lesion(s). If the merged TLs are non-nodal lesions, record the long axis diameter of the merged lesion.",
        "If pathologic lymph nodes coalesce and are no longer individually separable within a conglomerate mass, the vector of the longest diameter of the coalesced mass should be used to determine the perpendicular vector for the maximal short axis diameter. • If a TL is believed to be present and is faintly seen but too small to measure, a default value of 5 mm should be assigned. If an accurate measure can be given, this should be recorded, even if it is below 5 mm.",
        "• If a TL cannot be measured accurately due to it being too large, provide an estimate of the size of the lesion. The choice of “Too large to measure” in the CRF will trigger an overall visit response of PD.",
        "• When a TL has had any intervention (eg, definitive radiotherapy, embolisation, surgery, transarterial chemoembolisation, etc) during the study, the size of the TL should still be provided where possible and the intervention recorded in the RECIST 1.1 CRF for the current imaging visit and all subsequent visits. If a TL has been completely removed (surgery) or disappears, the longest diameter should be recorded as 0 mm.",
        "Response definitions per RECIST 1.1 for evaluation of TLs are provided in Table 20. Table 20: RECIST 1.1 Evaluation of Target Lesions CR Disappearance of all TLs since baseline. Any pathological lymph nodes selected as TLs must have a reduction in short axis diameter to <10 mm. PR At least a 30% decrease in the SOD of TL, taking as reference the baseline sum of diameters. SD Neither sufficient decrease in the SOD to qualify for PR nor sufficient increase to qualify for PD.",
        "PD At least a 20% increase in the SOD of TLs, taking as reference the smallest previous SOD (nadir). This includes the baseline sum if that is the smallest on study. In addition to the relative increase of 20%, the sum must demonstrate an absolute increase of at least 5 mm from nadir. NE Only relevant if any of the TLs at follow-up were not assessed or NE (eg, missing anatomy) or had a lesion intervention at this visit.",
        "Note: If the SOD meets the PD criteria, PD overrides NE as a TL response. Not applicable Only relevant if no TLs present at baseline. F 4.2 RECIST 1.1 NTL Assessment at Follow-up All other lesions (or sites of disease) not recorded as TLs should be identified as NTLs at baseline. Measurements are not required for these lesions, but their status should be followed at subsequent visits.",
        "At each visit, an overall assessment of the NTL response should be recorded by the investigator."
      ],
      "chips": [
        "VECTRA-01",
        "p202/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v202.jpg",
      "cap": "Protocol page 202 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 203 of 221 · To achieve “unequivocal progression” on the basis of NTLs, there must be an overall…",
      "audio": [
        "To achieve “unequivocal progression” on the basis of NTLs, there must be an overall level of substantial worsening in non-target disease such that, even in presence of SD, CR, or PR in TLs, the overall tumour burden has increased sufficiently to merit unequivocal progression by NTLs. A modest “increase” in the size of 1 or more NTLs is usually not sufficient to qualify for unequivocal progression status.",
        "The designation of overall progression solely on the basis of change in non-target disease in the face of SD, CR or PR of target disease will therefore be extremely rare. Response definitions per RECIST 1.1 for evaluation of NTLs are provided in Table 21. Table 21: RECIST 1.1 Evaluation of Non-Target Lesions CR Disappearance of all NTLs since baseline. All lymph nodes must be non-pathological in size (< 10 mm short axis). Non-CR/non-PD Persistence of 1 or more NTLs.",
        "PD Unequivocal progression of existing NTLs. Unequivocal progression may be due to an important progression in 1 lesion only or in several lesions. In all cases, the progression MUST be clinically significant for the physician to consider changing (or stopping) therapy. NE Only relevant when 1 or some of the NTLs were not assessed and, in the investigator’s opinion, they are not able to provide an evaluable overall NTL assessment at this visit.",
        "Note: For participants without TLs at baseline, this is relevant if any of the NTLs were not assessed at this visit and the progression criteria have not been met. Not applicable Only relevant if no NTLs present at baseline. F 4.3 RECIST 1.1 NL Identification at Follow-up All NLs (equivocal NLs and unequivocal NLs) must be recorded.",
        "Details, including the imaging modality, the date of scan, the location, and the NL status (equivocal/unequivocal) will also be recorded in the CRF. The presence of one or more new unequivocal lesions is assessed as progression. The finding of an NL should be unequivocal, ie, not attributable to differences in scanning technique, change in imaging modality, or findings thought to represent something other than tumour.",
        "If an NL is equivocal, for example because of its small size, it does not indicate progression, and the treatment and tumour assessments should be continued. If an equivocal NL becomes unequivocal at a later visit, then the progression date should be declared using the date of the initial scan when the equivocal NL first appeared. A lesion identified at a follow-up assessment in an anatomical location that was not scanned at baseline is considered an NL and will indicate PD.",
        "F 4.4 RECIST 1.1 Evaluation of Overall Visit Response at Follow-up Derivation of overall visit response as a result of the combined assessment of TLs, NTLs, and NLs uses the algorithm shown in Table 22."
      ],
      "chips": [
        "VECTRA-01",
        "p203/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v203.jpg",
      "cap": "Protocol page 203 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 204 of 221 · Table 22: RECIST 1",
      "audio": [
        "Table 22: RECIST 1.1 Overall Visit Response Target lesions Non-target lesions New lesions Overall visit response CR CR No CR CR NA No CR NA CR No CR CR Non-CR/Non-PD No PR CR NE No PR PR Non-PD or NE or NA No PR SD Non-PD or NE or NA No SD NA Non-CR/Non-PD No SD (Non-CR/Non-PD) NE Non-PD or NE No NE NA NE No NE NA NA No NED PD Any Yes or No PD Any PD Yes or No PD Any Any Yes PD Non-CR/Non-PD for overall response if only NTL (no TLs) are present at baseline.",
        "Non-PD includes Non-CR/Non-PD or CR NTL responses. Note: An overall assessment of CR (all other disease disappears/reverts to normal) would be changed to PR if ascites remains present radiologically.",
        "Abbreviations: NA, not applicable (only relevant if there were no TLs at baseline or NTLs at baseline), NED, no evidence of diseases (only relevant if there were neither TLs nor NTLs at baseline); The following overall visit responses are possible depending on the extent of tumour disease at baseline: • For participants with TLs (at baseline): CR, PR, SD, PD, or NE. • For participants with NTLs only (at baseline): CR, Non-CR/Non-PD, PD, or NE.",
        "• For participants with no disease at baseline: NED (available as an option in the eCRF), PD, or NE. F 5 Assessment of Bone Lesion Progression Using PCWG3 Criteria Bone lesions must be assessed by isotopic bone scan following the PCWG3 guidelines only. Lytic or mixed- lytic bone lesions with a soft tissue component which is measurable per RECIST 1.1 can have the soft tissue component assessed via RECIST 1.1.",
        "Method of Assessment Bone lesions identified on a whole-body isotopic bone scan at baseline should be recorded and followed by the same method as per baseline assessment."
      ],
      "chips": [
        "VECTRA-01",
        "p204/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v204.jpg",
      "cap": "Protocol page 204 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 205 of 221 · In this study isotopic bone scans will be used as a method of assessment to identify…",
      "audio": [
        "In this study isotopic bone scans will be used as a method of assessment to identify the presence of new bone lesions at follow-up visits. NLs will be recorded where a positive and unequivocal hot-spot that was not present on the baseline bone scan assessment is identified on a bone scan performed at any time during the study.",
        "The investigator should consider the positive hot-spot to be a significant new site of malignant disease and represent true disease progression in order to record the NL. Tumour Progression Evaluation Documentation of lesions All bone lesions (or sites of disease) should be identified at baseline. Their status should be followed at subsequent visits. At each visit an overall assessment of the bone lesion progression should be recorded by the investigator.",
        "This section provides the definitions of the criteria used to determine and record bone progression at the investigational site at each visit.",
        "At the first visit after baseline: • If 2 or more new metastatic bone lesions are observed on the bone scan from the first visit after baseline, a confirmatory scan performed at the next schedule visit (and a minimum of 6 weeks later), must show 2 or more additional new metastatic bone lesions (for a total of 4 or more new metastatic bone lesions since the baseline assessment).",
        "All other visits from the second visit after baseline: • For participants without progression at the first visit after baseline, the scan from this first visit after baseline now serves as new reference for all subsequent scans, ie, assuming all visits are acquired according to schedule, all bone scans after Week 8 are compared to the Week 8 scan.",
        "If 2 or more new metastatic bone lesions are observed on scans obtained after the first visit after baseline assessment compared to the new reference, a confirmatory scan performed preferably no later than the next scheduled visit and at least 6 weeks later, must show the persistence of, or an increase in, the 2 or more metastatic bone lesions. The date of progression is the date of the first scan documenting the cumulation of at least 2 new bone lesions.",
        "Evaluation of bone progression status Progression on a bone scan is identified using PCWG3. Table 23 provides the definitions for the visit bone progression status for bone lesions."
      ],
      "chips": [
        "VECTRA-01",
        "p205/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v205.jpg",
      "cap": "Protocol page 205 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 206 of 221 · Table 23: Bone Progression Status Non-PD No evidence of progression, or appearance…",
      "audio": [
        "Table 23: Bone Progression Status Non-PD No evidence of progression, or appearance of 1 new bone lesion PDu Non-fulfilment of the progression criteria.",
        "(at least 2 new bone lesions appeared but without confirmation of progression performed yet) PD Bone lesions fulfilling the requirements for at least 2 NLs and confirmation of progression NE Only relevant if a follow-up bone scan is not performed NED no bone lesion at baseline and still no bone lesion present at this visit Abbreviations: NED, no evidence of disease; Non-PD, non-progressive disease; PDu, progressive disease unconfirmed.",
        "F 6 Requirement for Confirmation of Progression for Bone Lesions and Soft Tissues Disease The requirements for determination and confirmation of radiographic progression by either bone scan (bone progression) or CT/MRI (soft tissue progression) are summarised in Table 24.",
        "Table 24: Requirements for Documentation of Progression Visit date Criteria for bone progression Criteria for soft tissue progression First tumour assessment after baseline (expected Week 8) 2 or more NLs compared to baseline bone scan. Requires confirmation at least 6 weeks later with > 2 additional lesions compared to the first scan after baseline. PD on CT or MRI by RECIST 1.1. No confirmation required.",
        "From the second tumour assessment after baseline 2 or more NLs compared to the first bone scan after baseline. Requires confirmation at least 6 weeks later for persistence or increase in number of bone lesions number of lesions. PD on CT or MRI by RECIST 1.1. No confirmation required."
      ],
      "chips": [
        "VECTRA-01",
        "p206/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v206.jpg",
      "cap": "Protocol page 206 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 207 of 221 · Appendix G Contraception Requirements Contraception requirements for this study are…",
      "audio": [
        "Appendix G Contraception Requirements Contraception requirements for this study are as follows.",
        "G 1 Male Participants With a Female Partner of Childbearing Potential Non-sterilised male participants (including males sterilised by a method other than bilateral orchidectomy, eg, vasectomy) who intend to be sexually active with a FOCBP must be using an acceptable method of contraception, such as male condom plus spermicide (condom alone in countries where spermicides are not approved), from enrolment throughout the study until at least 6 months following the final drug",
        "administration, to avoid conception during treatment. Periodic abstinence (eg, calendar, ovulation symptothermal, post-ovulation methods), declaration of abstinence for the duration of exposure to I M P/study intervention, and withdrawal (coitus interruptus), spermicides only, and lactational amenorrhoea method are not acceptable methods of contraception. Female condom and male condom should not be used together.",
        "Male participants should refrain from sperm donation or banking throughout this period. Vasectomised males are considered fertile if there was no medical assessment of the surgical success and should still use a male condom plus spermicide as indicated above during the clinical study.",
        "Even if the female partner is pregnant, male participants should still use a condom plus spermicide (where approved), as indicated above during the clinical study, if there is a concern about damaging the developing foetus from drug in ejaculate.",
        "FOCBP of male participants enrolled in this study must also use a highly effective method of contraception (Table 25) from the time of study enrolment of their male partner, throughout their participation in the study, and until at least 6 months after their male partners last dose of study intervention.",
        "G 2 Highly Effective Methods of Contraception A highly effective method of contraception is defined as one that can achieve a failure rate of less than 1% per year when used consistently and correctly, see Table 25.",
        "Note that some contraception methods are not considered highly effective (eg, male or female condom with or without spermicide; female cap, diaphragm, or sponge with or without spermicide; non-copper containing intrauterine device; progestogen-only oral hormonal contraceptive pills where inhibition of ovulation is not the primary mode of action [excluding Cerazette/desogestrel which is considered highly effective]; and triphasic combined oral contraceptive pills).",
        "Participants in the standard of care treatment groups should follow the local Prescribing Information relating to contraception, the time limits for such precautions, and any additional restrictions for standard of care treatments."
      ],
      "chips": [
        "VECTRA-01",
        "p207/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v207.jpg",
      "cap": "Protocol page 207 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 208 of 221 · Table 25: Highly Effective Methods of Contraception (< 1% Failure Rate) Non-hormonal…",
      "audio": [
        "Table 25: Highly Effective Methods of Contraception (< 1% Failure Rate) Non-hormonal methods Hormonal methods • Total sexual abstinence (evaluate in relation to the duration of the clinical study and the preferred and usual lifestyle choice of the participant) • Vasectomised sexual partner (with participant assurance that partner received post-vasectomy confirmation of azoospermia) • Bilateral tubal occlusion • Intrauterine device (provided coils are copper-banded) •",
        "Injection: Medroxyprogesterone injection (eg, Depo-Provera®) a • Levonorgestrel-releasing intrauterine system (eg, Mirena®) a • Implants: Etonogestrel-releasing implants (eg, Implanon® or Nexplanon®) • Intravaginal devices: Ethinylestradiol/ etonogestrel-releasing intravaginal devices (eg, NuvaRing®) • Combined pill: Normal and low dose combined oral contraceptive pill • Patch: Norelgestromin/ethinylestradiol-releasing transdermal system (eg, Xulane®, Ortho Evra®) • Mini",
        "pill: Progesterone-based oral contraceptive pill using desogestrel: Cerazette® is currently the only highly effective progesterone-based pill a Hormonal methods not prone to drug-drug interactions."
      ],
      "chips": [
        "VECTRA-01",
        "p208/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v208.jpg",
      "cap": "Protocol page 208 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 209 of 221 · Appendix H Radiation Therapy Oncology Group/European Organisation for Research and…",
      "audio": [
        "Appendix H Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer Late Radiation Morbidity Scoring Scheme Table 26: Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer Late Radiation Morbidity Scoring Scheme Organ tissue 0 Grade 1 Grade 2 Grade 3 Grade 4 Grade 5 Skin None Slight atrophy; pigmentation change; some hair loss Patch atrophy; moderate telangiectasia; total hair loss Marked atrophy; gross",
        "telangiectasia Ulceration Death directly related to radiation effects Subcutaneous tissue Slight induration (fibrosis) and loss of subcutaneous fat Moderate fibrosis but asymptomatic; slight field contracture; < 10% linear reduction Severe induration and loss of subcutaneous tissue; field contracture > 10% linear measurement Necrosis Mucous membrane Slight atrophy and dryness Moderate atrophy and telangiectasia; little mucous Marked atrophy with complete dryness; severe",
        "telangiectasia Ulceration Salivary glands Slight dryness of mouth; good response on stimulation Moderate dryness of mouth; poor response on stimulation Complete dryness of mouth; no response on stimulation Fibrosis Spinal cord Mild L’Hermitte’s syndrome Severe L’Hermitte’s syndrome Objective neurological findings at or below cord level treated Mono, para, quadriplegia Brain Mild headache; slight lethargy Moderate headache; great lethargy Severe headaches; Severe CNS",
        "dysfunction (partial loss of power or dyskinesia) Seizures or paralysis; coma Eye Asymptomatic cataract; minor corneal ulceration or keratitis Symptomatic cataract; moderate corneal ulceration; minor retinopathy or glaucoma Severe keratitis; severe retinopathy or detachment severe glaucoma Panopthalmitis/blindness"
      ],
      "chips": [
        "VECTRA-01",
        "p209/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v209.jpg",
      "cap": "Protocol page 209 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 210 of 221 · Table 26: Radiation Therapy Oncology Group/European Organisation for Research and…",
      "audio": [
        "Table 26: Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer Late Radiation Morbidity Scoring Scheme Organ tissue 0 Grade 1 Grade 2 Grade 3 Grade 4 Grade 5 Larynx Hoarseness; slight arytenoid oedema Moderate arytenoid oedema; chondritis Severe oedema; severe chondritis Necrosis Lung Asymptomatic or mild symptoms (dry cough); slight radiographic appearances Moderate symptomatic fibrosis or pneumonitis (severe cough); low grade fever;",
        "patchy radiographic appearances Severe symptomatic fibrosis or pneumonitis; dense radiographic changes Severe respiratory insufficiency/continuous oxygen/assisted ventilation Heart Asymptomatic or mild symptoms; transient T wave inversion and ST changes; sinus tachycardia > 110 (at rest) Moderate angina on effort; mild pericarditis; normal heart size; persistent abnormal T wave and ST changes; low QRS Severe angina; pericardial effusion; constrictive pericarditis; moderate",
        "heart failure; cardiac enlargement; ECG abnormalities Tamponade/severe heart failure/severe constrictive pericarditis Oesophagus Mild fibrosis; slight difficulty in swallowing solids; no pain on swallowing Unable to take solid food normally; wallowing semi-solid food; dilation may be indicated Severe fibrosis; able to swallow only liquids; may have pain on swallowing; dilation required Necrosis/perforation; fistula Small/large intestine Mild diarrhoea; mild cramping; bowel",
        "movement 5 times daily; slight rectal discharge or bleeding Moderate diarrhoea and colic; bowel movement > 5 times daily; excessive rectal mucus or intermittent bleeding Obstruction or bleeding, requiring surgery Necrosis/perforation; fistula Liver Mild lassitude; nausea, dyspepsia; slightly abnormal liver function Moderate symptoms; some abnormal liver; function tests; serum albumin normal Disabling hepatic insufficiency; liver function tests grossly abnormal; low albumin;",
        "oedema or ascites Necrosis/hepatic coma or encephalopathy"
      ],
      "chips": [
        "VECTRA-01",
        "p210/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v210.jpg",
      "cap": "Protocol page 210 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 211 of 221 · Table 26: Radiation Therapy Oncology Group/European Organisation for Research and…",
      "audio": [
        "Table 26: Radiation Therapy Oncology Group/European Organisation for Research and Treatment of Cancer Late Radiation Morbidity Scoring Scheme Organ tissue 0 Grade 1 Grade 2 Grade 3 Grade 4 Grade 5 Kidney Transient albuminuria; no hypertension; mild impairment of renal function; urea 25-35 mg%; creatinine 1.5-2.0 mg%; creatinine clearance > 75% Persistent moderate albuminuria (2+); mild hypertension; no related anaemia; moderate impairment of renal function; urea > 36-60 mg%;",
        "creatinine clearance (50-74%) Severe albuminuria; severe hypertension persistent anaemia (< 10%); severe renal failure; urea > 60 mg%; creatinine > 4.0 mg%; creatinine clearance < 50% Malignant hypotension; uremic coma/urea > 100% Bladder Slight epithelial atrophy; minor telangiectasia (microscopic haematuria) Moderate frequency; generalised telangiectasia; intermittent macroscopic haematuria Severe frequency and dysuria; severe generalised telangiectasia (often with",
        "petechiae); frequent haematuria; reduction in bladder capacity (< 150 cc) Necrosis/contracted bladder (capacity < 100 cc); severe haemorrhagic cystitis Bone Asymptomatic; no growth retardation; reduced bone density Moderate pain or tenderness; growth retardation; irregular bone sclerosis Severe pain or tenderness; complete arrest of bone growth; dense bone sclerosis Necrosis/spontaneous fracture Joint Mild joint stiffness; slight limitation of movement Moderate stiffness;",
        "intermittent or moderate joint pain; moderate limitation of movement Severe joint stiffness; pain with severe limitation of movement Necrosis/complete fixation Abbreviations: CNS, central nervous system. Source: Cox et al 1995."
      ],
      "chips": [
        "VECTRA-01",
        "p211/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v211.jpg",
      "cap": "Protocol page 211 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 212 of 221 · Appendix I Country-specific Requirements Investigators in the EU/EEA should report…",
      "audio": [
        "Appendix I Country-specific Requirements Investigators in the EU/EEA should report any AE suspected to relate only to an authorised non-AstraZeneca auxiliary medicinal product (any adverse reaction), and not arising from interaction with the I M P, to their Member State competent authority in accordance with national pharmacovigilance procedures ensuring the EU clinical trial number, protocol code, and a statement that the suspected product was used as an auxiliary medicinal",
        "product (not an I M P) are included in the narrative. The responsibility for subsequent reporting to EVPM will remain with the Member State competent authority as per existing EVPM access rules."
      ],
      "chips": [
        "VECTRA-01",
        "p212/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v212.jpg",
      "cap": "Protocol page 212 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 213 of 221 · Appendix J Protocol Version History The Summary of Changes table for the current…",
      "audio": [
        "Appendix J Protocol Version History The Summary of Changes table for the current revision is located directly before the Table of Contents. CSP Version 3.0: 04 June 2026 This modification is substantial based on the criteria set forth in Article 10(a) of Directive 2001/20/EC of the European Parliament and the Council of the European Union and in the EU Clinical Trial Regulation Article 2, 2 (13).",
        "Overall Rationale for the Modification These changes are made to the document primarily to align the content with EU requirements for clinical studies using radiopharmaceuticals and to make updates following EMA feedback, most significantly: • The accepted treatment options for Arm B (comparator) have been modified to remove apalutamide, daralutamide, and rezvilutamide, and to include deutenzalutamide (China only).",
        "• The eligibility criteria have been modified to add uncontrolled diabetes mellitus, concurrent acute kidney injury, and pre-existing CKD as exclusion criteria, to increase the e G F R cutoff from greater than or equal to 50 to greater than or equal to 60 mL/min, and to increase the minimum washout period following a last dose of P S M A-directed β-emitting RC to 3 months.",
        "• For sites in the EU, only gallium-68-P S M A-11 is permitted, in accordance with regulatory recommendations.",
        "CSP Version 2.0: 18 February 2026 This modification is non-substantial based on the criteria set forth in Article 10(a) of Directive 2001/20/EC of the European Parliament and the Council of the European Union and in the EU Clinical Trial Regulation Article 2, 2 (13) as it neither significantly impacts the safety or physical/mental integrity of participants nor the scientific value of the study.",
        "Overall Rationale for the Modification These changes are made to the document in response to FDA feedback."
      ],
      "chips": [
        "VECTRA-01",
        "p213/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v213.jpg",
      "cap": "Protocol page 213 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 214 of 221 · Summary of Changes List of Non-substantial Modifications Section Number and Name…",
      "audio": [
        "Summary of Changes List of Non-substantial Modifications Section Number and Name Description of Change Brief Rationale Opening pages; 1.1 Synopsis; 4.1 Overall Design; 4.2.2 Sponsor-blinded, Open-label Study Design (section removed); 6.4 Blinding Removal of reference to Sponsor blinding and change from “Sponsor-blinded, open-label” to “open-label.” Administrative change to align with Sponsor CSP authoring guidelines and standard terminology recognized by regulatory",
        "authorities. Of note, Sponsor personnel directly involved in the conduct of the study will not undertake, or have access to, aggregated data by treatment arm prior to Sponsor unblinding. Before the first participant is randomised, a Study Integrity Plan will be finalised, in which data access levels for relevant AstraZeneca personnel will be pre-specified.",
        "1.2 Schema; 5.1 Inclusion Criteria; 11.3 Study Design Inclusion Criterion 14g: Revised to calculate e G F R using CKD-EPI formula adjusted for BSA. Eligibility requirement updated to e G F R greater than or equal to 50 mL/min. Modified following Health Authority request. 1.3 Schedule of Assessment SSE assessment added to the SoA for all treatment arms. Assessment missed from SoAs.",
        "1.3 Schedule of Activities; 8.3.3 Electrocardiograms Updated Arm A to add triplicate ECG assessments pre- and post-infusion on C1D1 and C2D1, and single ECG assessments post-infusion on D1 of all remaining cycles. To allow further monitoring of the potential for QTc prolongation.",
        "1.3 Schedule of Activities; 8.5.1 Collection of Samples for Pharmacokinetics; 10 Dosimetry Sub-study; 11.3 Study Design Timing of post-dose PK sample and ECG assessment for the Japan Safety Run-in Sub-study adjusted from + 10 minutes to + 15 minutes. To allow post-dose ECG assessment to be performed before PK samples are taken. 5.2 Exclusion Criteria Exclusion Criterion 10: Addition of “QT interval corrected by Fridericia’s Correction Formula (QTcF) > 480 msec”.",
        "To allow further monitoring of the potential for QTc prolongation. 8.4.2 Follow-up of AEs and SAEs; 8.4.11 AEs of Special Interest Removal of text pertaining to follow-up of potential long-term radiation-related AEs. Patients in long-term follow-up are followed for AEs beyond those strictly related to radiation."
      ],
      "chips": [
        "VECTRA-01",
        "p214/221",
        "Full protocol text"
      ],
      "visual": "kidney",
      "image": "assets/protocol/vectra/v214.jpg",
      "cap": "Protocol page 214 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 215 of 221 · Section Number and Name Description of Change Brief Rationale 10 Dosimetry Sub-study; 10",
      "audio": [
        "Section Number and Name Description of Change Brief Rationale 10 Dosimetry Sub-study; 10.1 Replacement Criteria; 10.2 Dosimetry Assessments Footnotes of Table 15 updated to clarify requirements for PK blood samples and imaging on Days 3 and 4 of the sub-study, and to add clarification around urinary excretion assessments. Clarifications made in the text to align with the updates to the footnotes in Table 15. To clarify study sample requirements.",
        "10 Dosimetry Sub-study Removed reference to use of OLINDA/EXM internal dosimetry software. To reflect the software used by the study dosimetry vendor. 11.3 Study Design Addition of Section 11.5 as a cross-reference for inclusion and exclusion criteria in the Japan Safety Run-in Sub-study SoA. Addition of “verified by B I C R” to the RECIST 1.1/PCWG3 assessment row in the Japan Safety Run-in Sub-study SoA.",
        "Update of table footnote to remove reference to central reading of scans. To clarify location of inclusion and exclusion criteria and to ensure accuracy and consistency of approach. 11.3 Study Design Updated to add single ECG assessments pre- and post-infusion on D1 of all cycles from C3 onwards. Addition of table footnote to specify the timing of pre- and post-infusion ECGs and PK blood sampling.",
        "To allow further monitoring of the potential for QTc prolongation and align with the main study. 11.5 Study Population Exclusion Criterion 2: “Hepatocyte growth factor(s)” corrected to “Haematopoietic growth factor(s).” To ensure accuracy of the term used. 11.5 Study Population Update to the numbers of main body inclusion criteria that are not applicable for the Japan Safety Run-in Sub-study. To accurately reflect the inclusion and exclusion criteria for the sub-study.",
        "Appendix D2 Multi-omics Research Plan and Procedures Deletion of the following text: “If for any reason the samples are not drawn at C1D1, they may be taken at any visit until the last study visit.” A Z D 2265 is a radioactive compound and therefore the genomic and multi-omics research sample may only be collected at a single time point. Throughout Minor editorial and document formatting revisions. Minor and have therefore not been summarised."
      ],
      "chips": [
        "VECTRA-01",
        "p215/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v215.jpg",
      "cap": "Protocol page 215 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 216 of 221 · REFERENCES Aaronson et al 1993 Aaronson NK, Ahmedzai S, Bergman B, Bullinger M, Cull…",
      "audio": [
        "13 REFERENCES Aaronson et al 1993 Aaronson NK, Ahmedzai S, Bergman B, Bullinger M, Cull A, Duez NJ, et al. The European Organization for Research and Treatment of Cancer QLQ-C30: a quality-of-life instrument for use in international clinical trials in oncology. J Natl Cancer Inst. 1993;85(5):365-76. Adams et al 2026 Adams C, Jensen J, Leslie SW. Bone Scan. 2026. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing.",
        "Agarwal et al 2023 Agarwal N, Azad AA, Carles J, Fay AP, Matsubara N, Heinrich D, et al. Talazoparib plus enzalutamide in men with first-line metastatic castration-resistant prostate cancer (TALAPRO-2): a randomised, placebo-controlled, phase 3 trial. Lancet. 2023;402(10398):291-303. American Cancer Society 2025 American Cancer Society. Cancer facts & figures 2025.",
        "Available from: https://www.cancer.org/content/dam/cancer-org/research/cancer-facts-and-statistics/annualcancer-facts-and-figures/2025/2025-cancer-facts-and-figures-acs.pdf. Accessed: 17 December 2025. Armstrong et al 2024 Armstrong AJ, Sartor O, de Bono J, Chi K, Fizazi K, Krause BJ, et al.",
        "Association of declining prostate-specific antigen levels with clinical outcomes in patients with metastatic castration-resistant prostate cancer receiving [lutetium-177]Lu-P S M A-617 in the Phase 3 VISION Trial. Eur Urol. 2024;86(6):552-62. Burman et al 2009 Burman CF, Sonesson C, Guilbaud O. A recycling framework for the construction of Bonferroni based multiple tests. Stat Med. 2009;28:739-61. Chung et al 2014 Chung KC, Barlev A, Braun AH, Qian Y, Zagari M.",
        "Assessing analgesic use in patients with advanced cancer: development of a new scale--the Analgesic Quantification Algorithm. Pain Med. 2014;15(2):225-32. Cleeland and Ryan 1994 Cleeland CS, Ryan KM. Pain assessment: global use of the Brief Pain Inventory. Ann Acad Med Singap. 1994;23(2):129-38."
      ],
      "chips": [
        "VECTRA-01",
        "p216/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v216.jpg",
      "cap": "Protocol page 216 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 217 of 221 · Cox et al 1995 Cox JD, Stetz J, Pajak TF",
      "audio": [
        "Cox et al 1995 Cox JD, Stetz J, Pajak TF. Toxicity criteria of the Radiation Therapy Oncology Group (RTOG) and the European Organization for Research and Treatment of Cancer (EORTC). Int J Radiat Oncol Biol Phys. 1995;31(5):1341-6. de Bono et al 2010 de Bono JS, Oudard S, Ozguroglu M, Hansen S, Machiels JP, Kocak I, et al.",
        "Prednisone plus cabazitaxel or mitoxantrone for metastatic castration-resistant prostate cancer progressing after docetaxel treatment: a randomised open-label trial. Lancet. 2010;376(9747):1147-54. de Bono et al 2011 de Bono JS, Logothetis CJ, Molina A, Fizazi K, North S, Chu L, et al. Abiraterone and increased survival in metastatic prostate cancer. N Engl J Med. 2011;364(21):1995-2005.",
        "Eisenhauer et al 2009 Eisenhauer EA, Therasse P, Bogaerts J, Schwartz LH, Sargent D, Ford R, et al. New response evaluation criteria in solid tumours: revised RECIST guideline (version 1.1). Eur J Cancer. 2009;45(2):228-47. EuroQol 2019 EuroQol Group. EQ-5D-5L User Guide: Basic information on how to use the EQ-5D-5L instrument, Version 3.0, September 2019.",
        "Available from: https://euroqol.org/wpcontent/uploads/2019/09/EQ-5D-5L-English-User-Guide_version-3.0-Sept-2019-secured.pdf. Accessed 18 December 2019. FDA 2025 Food and Drug Administration. FDA expands Pluvicto’s metastatic castration-resistant prostate cancer indication. Available from: https://www.fda.gov/drugs/resources-informationapproved-drugs/fda-expands-pluvictos-metastatic-castration-resistant-prostate-cancerindication. Accessed: 28 March 2025.",
        "Feuerecker et al 2021 Feuerecker B, Tauber R, Knorr K, Heck M, Beheshti A, Seidl C, et al. Activity and adverse events of actinium-225-P S M A-617 in advanced metastatic castration-resistant prostate cancer after failure of lutetium-177-P S M A. Eur Urol. 2021;79(3):343-50. Fizazi et al 2012 Fizazi K, Scher HI, Molina A, Logothetis CJ, Chi KN, Jones RJ, et al.",
        "Abiraterone acetate for treatment of metastatic castration-resistant prostate cancer: final overall survival analysis of the COU-AA-301 randomised, double-blind, placebo-controlled phase 3 study. Lancet Oncol. 2012;13(10):983-92."
      ],
      "chips": [
        "VECTRA-01",
        "p217/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v217.jpg",
      "cap": "Protocol page 217 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 218 of 221 · Fizazi et al 2026 Fizazi K, Attard G, Azad AA, Baciarello G, Beltran H, Bjartell A,…",
      "audio": [
        "Fizazi et al 2026 Fizazi K, Attard G, Azad AA, Baciarello G, Beltran H, Bjartell A, et al. ESMO Guidelines Committee. Advanced and metastatic prostate cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol. 2026;37(5):590-607. Gallium 68 P S M A-11 Injection Prescribing Information Gallium 68 P S M A-11 Injection Prescribing Information. University of California, Los Angeles, CA, USA.",
        "Huang et al 2024 Huang S, Ong S, McKenzie D, Mirabelli A, Chen DC, Chengodu T, et al. Comparison of fluorine-18-based P S M A radiotracers with [gallium-68]Ga-P S M A-11 in PET/CT imaging of prostate cancer-a systematic review and meta-analysis. Prostate Cancer Prostatic Dis. 2024;27(4):654-64. IAEA 2005 International Atomic Energy Agency (IAEA). Radiation safety in nuclear medicine. Safety reports series No. 40. Vienna: IAEA; 2005.",
        "ICRP 1992 International Commission on Radiological Protection (ICRP). Radiological protection in biomedical research. ICRP Publication 62. Ann ICRP. 1992;22(3). ICRP 2015 International Commission on Radiological Protection (ICRP). Radiation safety aspects of radiopharmaceuticals. ICRP Publication 128. Ann ICRP. 2015;44(2S). Inker et al 2021 Inker LA, Eneanya ND, Coresh J, Tighiouart H, Wang D, Sang Y, et al.",
        "New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med. 2021;385(19):1737-49. Jones et al 2020 Jones W, Griffiths K, Barata PC, Paller CJ. P S M A Theranostics: Review of the current status of P S M A-targeted imaging and radioligand therapy. Cancers (Basel). 2020;12(6):1367. Kind et al 2021 Kind F, Fassbender TF, Andrieux G, Boerries M, Meyer PT, Ruf J.",
        "Early PSA change after [lutetium-177]P S M A-617 radioligand therapy as a predicator of biochemical response and overall survival. Cancers (Basel). 2021;14(1):149. Kluetz et al 2018 Kluetz PG, O’Connor DJ, Soltys K. Incorporating the patient experience into regulatory decision making in the USA, Europe, and Canada. Lancet Oncol. 2018;19(5):e267-74."
      ],
      "chips": [
        "VECTRA-01",
        "p218/221",
        "Full protocol text"
      ],
      "visual": "petgate",
      "image": "assets/protocol/vectra/v218.jpg",
      "cap": "Protocol page 218 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 219 of 221 · Labriola et al 2021 Labriola MK, Atiq S, Hirshman N, Bitting RL",
      "audio": [
        "Labriola et al 2021 Labriola MK, Atiq S, Hirshman N, Bitting RL. Management of men with metastatic castration-resistant prostate cancer following potent androgen receptor inhibition: A review of novel investigational therapies. Prostate Cancer Prostatic Dis. 2021;24(2):301-9. Litwin et al 1998 Litwin MS, Lubeck DP, Henning JM, Carroll PR.",
        "Differences in urologist and patient assessments of health-related quality of life in men with prostate cancer: results of the CaPSURE database. J Urol. 1998;159:1988-92. McCollough et al 2015 McCollough CH, Bushberg JT, Fletcher JG, Eckel LJ. Answers to common questions about the use and safety of CT scans. Mayo Clin Proc. 2015;90(10):1380-92. Mhawech-Fauceglia et al 2007 Mhawech-Fauceglia P, Zhang S, Terracciano L, Sauter G, Chadhuri A, Herrmann FR, et al.",
        "Prostate-specific membrane antigen (P S M A) protein expression in normal and neoplastic tissues and its sensitivity and specificity in prostate adenocarcinoma: an immunohistochemical study using multiple tumour tissue microarray technique. Histopathology. 2007;50(4):472-83. Moreira et al 2017 Moreira DM, Howard LE, Sourbeer KN, Amarasekara HS, Chow LC, Cockrell DC, et al.",
        "Predicting time from metastasis to overall survival in castration-resistant prostate cancer: results from SEARCH. Clin Genitourin Cancer. 2017;15(1):60-66.e2. Morris et al 2024 Morris MJ, Castellano D, Herrmann K, de Bono JS, Shore ND, Chi KN, et al.",
        "lutetium-177-P S M A-617 versus a change of androgen receptor pathway inhibitor therapy for taxane-naive patients with progressive metastatic castration-resistant prostate cancer (PSMAfore): a phase 3, randomised, controlled trial. Lancet. 2024;404(10459):1227-39. Morris et al 2026 Morris MJ, Hope TA, Sartor O. Concepts in Phase 1 radiopharmaceutical therapy trial designs: lessons from the SNMMI Dose Optimization in Radiopharmaceutical Therapy Development Workshop.",
        "J Nucl Med. 2026;67(3):345-47. Mostafapour et al 2024 Mostafapour S, Greuter M, van Snick JH, Brouwers AH, Dierckx RAJO, van Sluis J, et al. Ultra-low dose CT scanning for PET/CT. Med Phys. 2024;51(1):139-55. Nishida et al 2022 Nishida H, Kondo Y, Kusaba T, Kadowaki H, Daa T. Immunohistochemical reactivity of prostate-specific membrane antigen in salivary gland tumors. Head Neck Pathol. 2022;16(2):427-33."
      ],
      "chips": [
        "VECTRA-01",
        "p219/221",
        "Full protocol text"
      ],
      "visual": "rpfs",
      "image": "assets/protocol/vectra/v219.jpg",
      "cap": "Protocol page 219 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 220 of 221 · NRC 1997 US Nuclear Regulatory Commission (NRC)",
      "audio": [
        "NRC 1997 US Nuclear Regulatory Commission (NRC). 10 CFR Part 35-Medical use of byproduct material; and Regulatory Guide 8.39-Release of patients administered radioactive materials (1997). Available from: https://www.nrc.gov/docs/ml0833/ml083300045.pdf. Accessed: 16 December 2025. Parker et al 2013 Parker C, Nilsson S, Heinrich D, Helle SI, O'Sullivan JM, Fosså SD, et al. Alpha emitter radium-223 and survival in metastatic prostate cancer. N Engl J Med. 2013;369(3):213-23.",
        "PYLARIFY Prescribing Information PYLARIFY® (piflufolastat F 18) Prescribing Information. Progenics Pharmaceuticals, Inc. Billerica, MA, USA. Sartor et al 2021 Sartor O, de Bono J, Chi KN, Fizazi K, Herrmann K, Rahbar K, et al. Lutetium-177-P S M A-617 for metastatic castration-resistant prostate cancer. N Engl J Med. 2021;385:1091-103. Sathekge et al 2024 Sathekge MM, Lawal IO, Bal C, Bruchertseifer F, Ballal S, Cardaci G, et al.",
        "Actinium-225-P S M A radioligand therapy of metastatic castration-resistant prostate cancer (WARMTH Act): a multicentre, retrospective study. Multicenter Study. Lancet Oncol. 2024;25(2):175-83. Sayegh et al 2022 Sayegh N, Swami U, Agarwal N. Recent advances in the management of metastatic prostate cancer. JCO Oncol Pract. 2022;18(1):45-55. Scher et al 2012 Scher HI, Fizazi K, Saad F, Taplin ME, Sternberg CN, Miller K, et al.",
        "Increased survival with enzalutamide in prostate cancer after chemotherapy. N Engl J Med. 2012;367(13):1187-97. Scher et al 2016 Scher HI, Morris MJ, Stadler WM, Higano C, Basch E, Fizazi K, et al. Trial design and objectives for castration-resistant prostate cancer: updated recommendations from the Prostate Cancer Clinical Trials Working Group 3. J Clin Oncol. 2016;34(12):1402-18. Siegel et al 2023 Siegel RL, Miller KD, Wagle NS, Jemal A. Cancer statistics, 2023.",
        "CA Cancer J Clin. 2023;73(1):17-48. Silver et al 1997 Silver D, Pellicer I, Fair W, Heston WD, Cordon-Cardo C. Prostate-specific membrane"
      ],
      "chips": [
        "VECTRA-01",
        "p220/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v220.jpg",
      "cap": "Protocol page 220 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 221 of 221 · antigen expression in normal and malignant human tissues",
      "audio": [
        "antigen expression in normal and malignant human tissues. Clinical Cancer Res. 1997;3(1):81-5. Sprangers and Aaronson 1992 Sprangers MA, Aaronson NK. The role of health care providers and significant others in evaluating the quality of life of patients with chronic disease: a review. J Clin Epidemiol. 1992;45(7):743-60. Sweat et al 1998 Sweat SD, Pacelli A, Murphy GP, Bostwick DG.",
        "Prostate-specific membrane antigen expression is greatest in prostate adenocarcinoma and lymph node metastases. Urology. 1998;52(4):637-40. Wahl et al 2021 Wahl RL, Sgouros G, Iravani A, Jacene H, Pryma D, Saboury B, et al. Normal-tissue tolerance to radiopharmaceutical therapies, the knowns and the unknowns. J Nucl Med. 2021;62(Suppl 3):23S-35S. Wu et al 2026 Wu J, Li X, Gu C, Hua L, Liu R, Li J, et al.",
        "Deutenzalutamide, a novel androgen receptor inhibitor, after progression on docetaxel and abiraterone in metastatic castration-resistant prostate cancer: results from the randomized phase III HC-1119-04 trial. Signal Transduct Target Ther. 2026;11(1):131. Yadav et al 2021 Yadav MP, Ballal S, Sahoo RK, Tripathi M, Damle NA, Shamim SA, et al.",
        "Long-term outcome of lutetium-177-P S M A-617 radioligand therapy in heavily pre-treated metastatic castration-resistant prostate cancer patients. PLoS One. 2021;16(5):e0251375. Yao et al 2010 Yao V, Berkman C, Choi J, O'Keefe DS, Bacich DJ. Expression of prostate-specific membrane antigen (P S M A) increases cell folate uptake and proliferation and suggests a novel role for P S M A in the uptake of the non-polyglutamated folate, folic acid. Prostate. 2010;70(3):305-16.",
        "Zacherl et al 2021 Zacherl MJ, Gildehaus FJ, Mittlmeier L, Böning G, Gosewisch A, Wenter V, et al. First clinical results for P S M A-targeted α-therapy using actinium-225-P S M A I and T in advanced-m C R P C patients. J Nucl Med. 2021;62(5):669-74."
      ],
      "chips": [
        "VECTRA-01",
        "p221/221",
        "Full protocol text"
      ],
      "visual": "vectra",
      "image": "assets/protocol/vectra/v221.jpg",
      "cap": "Protocol page 221 of 221 — VECTRA-01 D9735C00001 v3.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    }
  ],
  "quiz": [
    {
      "q": "Arm A ²²⁵Ac zadavotide guraxetan dose and schedule in VECTRA-01?",
      "choices": [
        "2 MBq Q6W, copied from the Novartis DWJ155 Phase I start",
        "12 MBq IV every 6 weeks for up to 6 cycles",
        "7.40 GBq Q6W like ¹⁷⁷Lu-PSMA-617",
        "55 kBq/kg Q4W like radium-223"
      ],
      "a": 1,
      "why": "Synopsis / Table 10: unit dose 12 MBq, 6-week cycles, up to 6 cycles. Treatment duration for Arm A up to 36 weeks."
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
      "why": "v3.0 SoC menu. ARPI only if cabazitaxel already given or not appropriate. Apalutamide/darolutamide/rezvilutamide removed."
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
      "why": "§1.1 / §9. Dual primary. Stratified log-rank + Cox. Assumed HR 0.45 (rPFS) and 0.72 (OS)."
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
      "why": "Schema Figure 1 / inclusion. ECOG 0–2, eGFR ≥60, BICR PSMA PET+."
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
      "why": "Table 9 AxMPs + v3.0 EMA alignment. These are auxiliary products, not the 12 MBq IMP."
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
      "why": "Synopsis Number of Participants and §9.2."
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
      "why": "v3.0 EMA-driven renal tightening. Salivary: Grade 1 xerostomia allowed, ≥2 excluded."
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
      "why": "Synopsis Study Arms. Open-label, so strata + BICR + IRT are the bias brakes. No crossover."
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
      "why": "Cover / INN. Same PSMA-I&T motif as some ¹⁷⁷Lu products — different radionuclide and a Phase III SoC-controlled design."
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
      "why": "v3.0 cut screening to 28 days to avoid repeat assessments. Central PET read is mandatory."
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
      "why": "Table 9. ¹⁸F-DCFPyL is 296–370 MBq and is banned in the EU."
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
      "why": "Page 3. IDMC is separate — independent experts for safety, efficacy, and futility."
    }
  ]
};


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
      if (mod && isMod(mod.id) && raw && extras[raw]) return raw;
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
