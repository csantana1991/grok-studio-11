/* CLARIFY / CLP04 / P0000 full protocol audiobook module for NucMed Board Studio.
   Loads after the main studio script (and after p0protocol.js / p01bet.js). Mutates window.COURSE. */



  const P00V = {
    clarify: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#7cb8ff" font-size="15">CLARIFY · CLP04 · Phase 3 diagnostic PET</text>
      <rect x="16" y="42" width="488" height="40" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="260" y="67" text-anchor="middle" fill="#e8f2f7" font-size="12">Screen ≤28 d · SOC MRI/CT/approved PSMA PET · untreated high-risk PC</text>
      <rect x="16" y="94" width="232" height="70" rx="8" fill="#10232e" stroke="#3ee0c4"/>
      <text x="132" y="118" text-anchor="middle" fill="#3ee0c4" font-size="13">Day 1 · 200 MBq IV</text>
      <text x="132" y="138" text-anchor="middle" fill="#c5d8e3" font-size="12">PET 1–4 h · mid-thigh→vertex</text>
      <text x="132" y="154" text-anchor="middle" fill="#9bb3c2" font-size="11">copper-64 SAR-bisPSMA</text>
      <rect x="272" y="94" width="232" height="70" rx="8" fill="#10232e" stroke="#f5d76e"/>
      <text x="388" y="118" text-anchor="middle" fill="#f5d76e" font-size="13">Day 2 · 24 ± 6 h PET</text>
      <text x="388" y="138" text-anchor="middle" fill="#c5d8e3" font-size="12">Same coverage · delayed TBR</text>
      <text x="388" y="154" text-anchor="middle" fill="#9bb3c2" font-size="11">Cu-64 T½ 12.7 h</text>
      <rect x="16" y="176" width="232" height="56" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="132" y="200" text-anchor="middle" fill="#fb7185" font-size="12">Day 7 ±4 d safety call</text>
      <text x="132" y="218" text-anchor="middle" fill="#c5d8e3" font-size="11">then RP + PLND</text>
      <rect x="272" y="176" width="232" height="56" rx="8" fill="#10232e" stroke="#4ade80"/>
      <text x="388" y="200" text-anchor="middle" fill="#4ade80" font-size="12">SoT = histopathology</text>
      <text x="388" y="218" text-anchor="middle" fill="#c5d8e3" font-size="11">pathologist blinded to PET</text>
      <text x="260" y="262" text-anchor="middle" fill="#9bb3c2" font-size="12">n = 383 · 3 central PET readers · SOC imaging read without the Cu-64 scans</text>
    </svg>`,
    psma: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#f5d76e" font-size="15">SAR-bisPSMA · two PSMA motifs + sarcophagine chelator</text>
      <circle cx="130" cy="130" r="58" fill="#163746" stroke="#fb7185" stroke-width="3"/>
      <text x="130" y="124" text-anchor="middle" fill="#fb7185" font-size="13">prostate</text>
      <text x="130" y="142" text-anchor="middle" fill="#c5d8e3" font-size="11">epithelial cell</text>
      <rect x="210" y="88" width="88" height="36" rx="8" fill="#1a2a14" stroke="#3ee0c4"/>
      <text x="254" y="111" text-anchor="middle" fill="#3ee0c4" font-size="11">PSMA</text>
      <rect x="210" y="136" width="88" height="36" rx="8" fill="#1a2a14" stroke="#3ee0c4"/>
      <text x="254" y="159" text-anchor="middle" fill="#3ee0c4" font-size="11">PSMA</text>
      <rect x="330" y="96" width="160" height="88" rx="10" fill="#10232e" stroke="#7cb8ff"/>
      <text x="410" y="122" text-anchor="middle" fill="#7cb8ff" font-size="12">bisCOSAR</text>
      <text x="410" y="142" text-anchor="middle" fill="#e8f2f7" font-size="12">⁶⁴Cu inside cage</text>
      <text x="410" y="162" text-anchor="middle" fill="#9bb3c2" font-size="11">urea-Glu × 2</text>
      <text x="260" y="230" text-anchor="middle" fill="#c5d8e3" font-size="12">Two binding arms → avidity. Cage chelator holds copper-64 for delayed PET.</text>
      <text x="260" y="252" text-anchor="middle" fill="#9bb3c2" font-size="12">Not FDG. This is a PSMA small-molecule, not a glucose analogue.</text>
    </svg>`,
    cu64: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#3ee0c4" font-size="16">Copper-64 · intended diagnostic activity</text>
      <text x="260" y="72" text-anchor="middle" fill="#f5d76e" font-size="28">200 MBq bolus IV</text>
      <text x="260" y="102" text-anchor="middle" fill="#7cb8ff" font-size="16">± 10% of prescribed · single administration Day 1</text>
      <text x="40" y="142" fill="#e8f2f7" font-size="14">T½ 12.7 h  ·  positron (PET) + β− + electron capture</text>
      <text x="40" y="168" fill="#e8f2f7" font-size="14">Day 1 PET 1–4 h   ·   Day 2 PET 24 ± 6 h</text>
      <text x="40" y="194" fill="#9bb3c2" font-size="13">No fasting. Hydrate and void — bladder is a critical organ.</text>
      <text x="40" y="220" fill="#9bb3c2" font-size="13">Handle as a licensed radiopharmaceutical · ALARA + local regs</text>
    </svg>`,
    dualpet: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#7cb8ff" font-size="16">Two PET time points · same participant</text>
      <rect x="24" y="48" width="220" height="140" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="134" y="78" text-anchor="middle" fill="#3ee0c4" font-size="14">Day 1 PET</text>
      <text x="134" y="106" text-anchor="middle" fill="#e8f2f7" font-size="13">1 to 4 hours post dose</text>
      <text x="134" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">mid-thigh → skull vertex</text>
      <text x="134" y="150" text-anchor="middle" fill="#9bb3c2" font-size="12">blood-pool still visible</text>
      <text x="134" y="172" text-anchor="middle" fill="#9bb3c2" font-size="12">early detection map</text>
      <rect x="276" y="48" width="220" height="140" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="386" y="78" text-anchor="middle" fill="#f5d76e" font-size="14">Day 2 PET</text>
      <text x="386" y="106" text-anchor="middle" fill="#e8f2f7" font-size="13">24 ± 6 hours post dose</text>
      <text x="386" y="128" text-anchor="middle" fill="#c5d8e3" font-size="12">same coverage</text>
      <text x="386" y="150" text-anchor="middle" fill="#9bb3c2" font-size="12">clearance → higher TBR</text>
      <text x="386" y="172" text-anchor="middle" fill="#9bb3c2" font-size="12">small-node hunt</text>
      <text x="260" y="220" text-anchor="middle" fill="#c5d8e3" font-size="13">Co-primary endpoints are reported independently at each time point.</text>
      <text x="260" y="242" text-anchor="middle" fill="#9bb3c2" font-size="12">Void immediately before each acquisition.</text>
    </svg>`,
    truth2x2: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="26" text-anchor="middle" fill="#3ee0c4" font-size="15">Standard of truth = pelvic-node histopathology</text>
      <text x="318" y="54" fill="#9bb3c2" font-size="12">Path +</text>
      <text x="418" y="54" fill="#9bb3c2" font-size="12">Path −</text>
      <rect x="268" y="64" width="96" height="58" rx="8" fill="#10232e" stroke="#4ade80"/>
      <text x="316" y="100" text-anchor="middle" fill="#4ade80" font-size="18">TP</text>
      <rect x="372" y="64" width="96" height="58" rx="8" fill="#10232e" stroke="#fb923c"/>
      <text x="420" y="100" text-anchor="middle" fill="#fb923c" font-size="18">FP</text>
      <rect x="268" y="130" width="96" height="58" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="316" y="166" text-anchor="middle" fill="#fb7185" font-size="18">FN</text>
      <rect x="372" y="130" width="96" height="58" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="420" y="166" text-anchor="middle" fill="#7cb8ff" font-size="18">TN</text>
      <text x="36" y="100" fill="#e8f2f7" font-size="13">Cu-64 PET +</text>
      <text x="36" y="166" fill="#e8f2f7" font-size="13">Cu-64 PET −</text>
      <text x="36" y="216" fill="#f5d76e" font-size="12">Sensitivity = TP / (TP+FN)    Specificity = TN / (TN+FP)</text>
      <text x="36" y="238" fill="#9bb3c2" font-size="12">Pathologist never sees the investigational PET. SoT is not the SOC PSMA scan.</text>
    </svg>`
  };

  const MODULE00 = {
  "id": "p0000",
  "num": "P0000",
  "title": "P0000 · CLARIFY protocol · CLP04 full 80 pages",
  "time": "~3 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this CLARIFY protocol audiobook",
      "audio": [
        "This module is P0000 — a full read-through of clinical protocol C L P zero four, study nickname CLARIFY, version 2.0, dated 2 December 2024.",
        "Sponsor: Clarity Pharmaceuticals, Eveleigh, New South Wales. Investigational product: copper-64 SAR-bis-P S M A. I N D 158388. Phase 3 diagnostic performance.",
        "Population: untreated high-risk prostate adenocarcinoma proceeding to radical prostatectomy with pelvic lymph node dissection. Planned enrollment: 383.",
        "Dose: 200 megabecquerels as a single intravenous bolus on Day 1. Two PET C T acquisitions, mid-thigh to skull vertex: Day 1 at 1 to 4 hours, Day 2 at 24 plus or minus 6 hours.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of how a Phase 3 P S M A PET protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. Eighty protocol pages, plus this intro. After the last page, take the module quiz — dose, dual time point, standard of truth, high-risk gates, and A L A R A."
      ],
      "chips": [
        "P0000",
        "80 pages",
        "Web speech",
        "Protocol page on screen",
        "Same studio player"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c001.jpg",
      "cap": "CLP04 cover — ⁶⁴Cu-SAR-bisPSMA PET before prostatectomy (CLARIFY)",
      "pearls": [
        "P0000 is the CLARIFY (CLP04) audiobook — same play, pause, speed, atlas, and live-image dock as GP-STAR and BET-121.",
        "The photograph of each protocol page sits in the lesson so you can read while you listen. Signed PDF: assets/protocol/CLP04-CLARIFY-v2.0.pdf"
      ]
    },
    {
      "title": "Page 1 of 80 · Cover · CLARIFY Phase 3 diagnostic performance",
      "audio": [
        "CLINICAL STUDY PROTOCOL: C L P zero four Title: Positron Emission Tomography using copper-64 SAR-bis-P S M A in participants with high-risk prostate cancer prior to radical prostatectomy: A prospective, single-arm, multi-center, blinded-review, Phase 3 diagnostic performance study Short Title: CLARIFY copper-64 SAR-bis-P S M A Protocol No.: C L P zero four Sponsor: National Innovation Centre 4 Cornwallis St, Eveleigh NSW 2015 Australia Telephone: +61 2 9209 4037 I N D number: 158388 Phase: Phase 3 Medical Monitor: Dr Robert M Miller +44 203 2913032 robert.miller@claritypharmaceuticals.com Protocol Version (Date):",
        "2.0 (02-Dec-2024) This document contains information that is confidential and proprietary to Clarity Pharmaceuticals Ltd and is provided for the purpose of conducting a clinical trial for Clarity Pharmaceuticals Ltd. The contents of this document may be disclosed only to study personnel, the Institutional Review Board/Independent Ethics Committee, or duly authorized representatives of regulatory agencies for this purpose under the condition that they maintain confidentiality. The contents of this document may not be used in any other clinical trial, disclosed to any other person or entity, or published without prior written permission from Clarity Pharmaceuticals Ltd."
      ],
      "chips": [
        "CLARIFY",
        "CLP04",
        "Phase 3",
        "IND 158388"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c001.jpg",
      "cap": "Protocol page 1 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "CLARIFY (CLP04) is a Phase 3, single-arm, multi-center, blinded-review diagnostic study of copper-64 SAR-bisPSMA PET before radical prostatectomy.",
        "IND 158388. Sponsor: Clarity Pharmaceuticals, Eveleigh NSW. Protocol v2.0 dated 02-Dec-2024."
      ]
    },
    {
      "title": "Page 2 of 80 · Sponsor protocol approval · Clarity Pharmaceuticals",
      "audio": [
        "SPONSOR PROTOCOL APPROVAL Protocol Title: Positron Emission Tomography using copper-64 SAR-bis-P S M A in participants with high-risk prostate cancer prior to radical prostatectomy: A prospective, single-arm, multi-center, blinded- review, Phase 3 diagnostic performance study Protocol Number: C L P zero four Protocol Version (Date): 2.0 (02-Dec-2024) This version of the clinical protocol has been approved by Clarity Pharmaceuticals Ltd. Dr Othon Gervasio Chief Medical Officer Dr Robert M Miller Medical Director Eva Lengyelova (protocol author) EVP Clinical Development Glynn Morrish Statistician"
      ],
      "chips": [
        "CLP04",
        "p2/80",
        "Full protocol text"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c002.jpg",
      "cap": "Protocol page 2 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 3 of 80 · Synopsis · design, 200 MBq, Day 1 and Day 2 PET",
      "audio": [
        "PROTOCOL SYNOPSIS Protocol Number C L P zero four copper-64 SAR-bis-P S M A Protocol Title Positron Emission Tomography using copper-64 SAR-bis-P S M A in participants with high-risk prostate cancer prior to radical prostatectomy:",
        "A prospective, single-arm, multi-center, blinded-review, Phase 3 diagnostic performance study Short Title CLARIFY Phase Phase 3 I N D Number 158388 Study Sponsor Study Centers Planned Multi-center Study Design This is a multi-center, single-arm, non-randomized, open-label study of copper-64- SAR-bisPSMA administered to participants with untreated, histopathology- confirmed prostate cancer (prostate cancer), with high-risk features, who are proceeding to radical prostatectomy (radical prostatectomy) with pelvic lymph node dissection (pelvic lymph node dissection). Participants who provide informed consent will undertake screening visit(s) (Visit 1) to determine their eligibility to participate in the study.",
        "The maximum screening period is 28 days and will include institutional Standard of Care (standard of care) imaging work up (e.g., magnetic resonance imaging, computed tomography [CT], approved standard of care prostate specific membrane antigen [P S M A] positron emission tomography [PET]/CT). Eligible participants will receive a single administration of 200 megabecquerels of copper-64-SAR- bisPSMA on Day 1 (Visit 2), followed by a PET C T scan mid-thigh to the skull vertex at 1 to 4 hours post dose (denoted as \"Day 1 PET\") and at 24 ±6 hours post dose (denoted as \"Day 2 PET\", Visit 3).",
        "Safety assessments will be completed following the administration of copper-64-SAR- bisPSMA on Day 1, Day 2 and on Day 7 ±4 days (Visit 4) via a telephone call to capture any late-occurring adverse events (adverse events). After completion of Visit 4, participants will proceed to radical prostatectomy with pelvic lymph node dissection. The specimens from the surgery will be processed and analyzed locally. The local pathologist evaluating the samples will be blinded to the copper-64 SAR-bis-P S M A PET C T scans/results. The histopathology results will be recorded within 90 days of Day 1 (Visit 5 / End of Study Visit).",
        "The screening institutional standard of care imaging will be interpreted by a single independent, blinded, central reader without access to the copper-64 SAR-bis-P S M A PET C T scans. The Day 1 and Day 2 copper-64 SAR-bis-P S M A PET C T scans will be interpreted locally and by three independent, blinded, central readers. Each reader will assess the scans visually for the presence of abnormal copper-64 SAR-bis-P S M A uptake in the pelvic lymph nodes (lymph nodes), prostate gland, extra-pelvic lymph nodes, visceral/soft tissue and bone.",
        "If distant metastatic disease (lesion[s] within the extra-pelvic lymph nodes, bone or visceral/soft tissue regions) is detected on the copper-64- SAR-bisPSMA PET C T per the local interpretation of the scans, histopathology (from image-guided biopsy or surgery) should be obtained if clinically feasible. Abbreviations: lymph node=lymph node; PET=positron emission tomography; prostate cancer=prostate cancer Primary Objective Primary Endpoints To assess the diagnostic performance of copper-64-SAR- bisPSMA PET to detect regional nodal metastases. Independent primary endpoints for Day 1 and Day 2 PET: • Co-primary endpoint of sensitivity and specificity of copper-64-SAR- bisPSMA PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth."
      ],
      "chips": [
        "200 MBq",
        "Day 1 PET 1–4 h",
        "Day 2 PET 24 h",
        "RP + PLND"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c003.jpg",
      "cap": "Protocol page 3 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "One 200 MBq IV bolus on Day 1. PET/CT mid-thigh to skull vertex at 1–4 hours (Day 1 PET) and at 24 ± 6 hours (Day 2 PET).",
        "After a Day-7 safety call, participants proceed to RP with PLND. The local pathologist is blinded to the copper-64 scans."
      ]
    },
    {
      "title": "Page 4 of 80 · Synopsis · secondary endpoints (safety, PPV/NPV, kappa)",
      "audio": [
        "Secondary Objectives Secondary Endpoints To investigate the safety and tolerability of copper-64 SAR-bis-P S M A. Incidence and severity of treatment-emergent adverse events and SAEs following administration of copper-64 SAR-bis-P S M A. To assess the consistency of copper-64 SAR-bis-P S M A PET C T interpretations for the three central readers. Inter-reader reliability of agreement estimated with a multiple-reader kappa statistic. To assess the positive predictive value and negative predictive value of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes. Reported independently for Day 1 and Day 2 PET:",
        "• positive predictive value and negative predictive value of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth. To assess the ability of copper-64-SAR- bisPSMA PET to detect prostate cancer. Reported independently for Day 1 and Day 2 PET: • Sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the prostate, pelvic lymph nodes, extra-pelvic lymph nodes, bone and visceral/soft tissue regions compared to the Standard of Truth. To assess the ability of copper-64-SAR- bisPSMA PET to detect primary prostate cancer. Reported independently for Day 1 and Day 2 PET:",
        "• Sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the prostate gland compared to the Standard of Truth. To assess the diagnostic performance of copper-64-SAR- bisPSMA PET to detect regional nodal metastases without subregion matching. Reported independently for Day 1 and Day 2 PET: • Sensitivity and specificity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth, without the requirement of subregion (Left or Right) matching between copper-64 SAR-bis-P S M A PET and Standard of Truth. To determine the dosimetry, pharmacokinetics and excretion of copper-64 SAR-bis-P S M A in participants in the pharmacokinetics substudy.",
        "The following parameters will be expressed from the PET scans: • Absorbed dose (mGy/megabecquerels) in organs. • Effective dose (mSv/megabecquerels). The following parameters will be expressed from blood: • Radioactivity concentration per collection time (megabecquerels/mL), maximum concentration, AUC0-t, AUC0-inf, kel, CL, Vz, Tmax and t1/2e. • Ratios of blood-to-plasma radioactivity at each time point/per participant. • Metabolic profiles (via high-performance liquid chromatography). The following parameters will be expressed from urine: • Radioactivity concentration per collection time (megabecquerels/mL), Aeinterval, TRmax, Rmax, Ae0-t, %Fe0-t. • Metabolic profiles (via high-performance liquid chromatography). Abbreviations:",
        "%Fe0-t=percent of total dose recovered in urine; adverse event=adverse event; Ae0-t=cumulative amount of excreted radioactivity from time zero to the last collection interval; Aeinterval=total amount of excreted radioactivity per urine collection interval; AUC0-inf=area under the (activity-time) curve from time of dose administration to infinity; AUC0-t=area under the (activity-time) curve from time of dose to last measurable concentration; CL=total clearance; CT=computed tomography; kel=terminal elimination rate constant; lymph node=lymph node; negative predictive value=negative predictive value; PET=positron emission tomography; prostate cancer=prostate cancer; pharmacokinetics=pharmacokinetic; positive predictive value=positive predictive value; Rmax=rate max;",
        "serious adverse event=serious adverse event; t1/2e=elimination half-life; Tmax=time to reach the maximum concentration; TRmax=midpoint of the collection interval associated with the maximum observed excretion rate; Vz=total volume of distribution"
      ],
      "chips": [
        "CLP04",
        "p4/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c004.jpg",
      "cap": "Protocol page 4 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 5 of 80 · Synopsis · exploratory endpoints vs SOC PSMA PET",
      "audio": [
        "Exploratory Objectives Exploratory Endpoints To compare the diagnostic performance of copper-64 SAR-bis-P S M A PET to detect extra-prostatic prostate cancer to that of the baseline standard of care imaging. Reported independently for Day 1 and Day 2 PET: • Number and percentage of participants who are standard of care imaging pelvic lymph node negative, but copper-64 SAR-bis-P S M A PET pelvic lymph node positive and histopathology positive. • Number and percentage of participants who are copper-64-SAR- bisPSMA PET pelvic lymph node positive but standard of care imaging pelvic lymph node negative and histopathology negative.",
        "• Number and percentage of participants who are standard of care P S M A PET pelvic lymph node negative, but copper-64 SAR-bis-P S M A PET pelvic lymph node positive and histopathology positive. • Number and percentage of participants who are copper-64-SAR- bisPSMA PET pelvic lymph node positive but standard of care P S M A PET pelvic lymph node negative and histopathology negative. • Percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET compared to the standard of care imaging. • Percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET and confirmed as true positive by histopathology compared to the standard of care imaging.",
        "• Percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET compared to the standard of care P S M A PET. • Percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET and confirmed as true positive by histopathology compared to the standard of care P S M A PET. To assess the ability of copper-64-SAR- bisPSMA PET to detect distant metastatic disease (based on local assessment only). Reported independently for Day 1 and Day 2 PET: • positive predictive value of copper-64 SAR-bis-P S M A PET to detect distant metastatic prostate cancer within the extra-pelvic lymph nodes, bone and visceral/soft tissue regions compared to the Standard of Truth.",
        "To assess the number and location of lesion(s) detected on copper-64-SAR- bisPSMA PET compared to baseline standard of care imaging. Reported independently for Day 1 and Day 2 PET: • Number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to standard of care imaging. • Number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to standard of care P S M A PET. To investigate the efficacy of copper-64- SAR-bisPSMA as a function of baseline variables. Reported independently for Day 1 and Day 2 PET:",
        "• The efficacy parameters of copper-64 SAR-bis-P S M A PET will be assessed as a function of PSA at baseline, testosterone at baseline; Gleason Grade pre-prostatectomy, stage, grade, risk, germline information. To compare the detection of Day 1 and Day 2 copper-64 SAR-bis-P S M A PET. Difference in the total number of lesions detected per participant on Day 1 and Day 2. To explore the correlation between copper-64 SAR-bis-P S M A PET-positivity and true/false positivity. Reported independently for Day 1 and Day 2 PET: • Relationship between PET-positivity (S U V, tumor-to-background ratio), versus true/false positivity, and as a function of region and size. To explore the correlation between copper-64 SAR-bis-P S M A PET-positivity and aggressiveness of the disease.",
        "Reported independently for Day 1 and Day 2 PET: • Relationship between PET-positivity (S U V, tumor-to-background ratio) and Gleason Grade from the prostatectomy and pelvic lymph node dissection specimens. To compare lesion biodistribution and size parameters on Day 1 and Reported independently for Day 1 and Day 2 PET: • Comparison of S U V and tumor-to-background ratio for copper-64 SAR-bis-P S M A PET versus standard of care P S M A PET."
      ],
      "chips": [
        "CLP04",
        "p5/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c005.jpg",
      "cap": "Protocol page 5 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 6 of 80 · Synopsis · n=383, inclusion/exclusion, 200 MBq bolus",
      "audio": [
        "Day 2 copper-64 SAR-bis-P S M A PET with standard of care P S M A PET. • Comparison of lesion sizes detected on copper-64 SAR-bis-P S M A PET versus standard of care P S M A PET. Abbreviations: lymph node=lymph node; prostate cancer=prostate cancer; PET=positron emission tomography; positive predictive value=positive predictive value; PSA=prostate-specific antigen; standard of care=standard of care; S U V=standardized uptake value; tumor-to-background ratio=tumor-to-background ratio Number of Participants Planned 383 Target Population The target population for this study is untreated patients with a histopathology- confirmed diagnosis of prostate cancer with high-risk features, who are proceeding to radical prostatectomy with pelvic lymph node dissection.",
        "Inclusion Criteria 1. At least 18 years of age. 2. Signed informed consent. 3. Untreated (i.e. no therapy for prostate cancer, including no androgen deprivation therapy of any duration), histologically confirmed adenocarcinoma of the prostate. 4. High-risk or greater prostate cancer defined by National Comprehensive Cancer Network Guidelines Version 1.2023 (clinical stage ≥T3a, or Grade Group ≥4, or prostate-specific antigen >20 ng/mL). 5. Patients electing to undergo radical prostatectomy with pelvic lymph node dissection. 6. For patients who have partners of childbearing potential: partner and/or patient must use a method of birth control with adequate barrier protection. Exclusion Criteria 1.",
        "Administration of any high energy (>300 KeV) gamma-emitting radioisotope within 5 physical half-lives prior to Day 1. 2. Known or expected hypersensitivity to copper-64 SAR-bis-P S M A or any of its components. 3. Patients with known predominant small cell or neuroendocrine prostate cancer. 4. History of other active malignancy within 3 years prior to Day 1, except for adequately treated non-melanoma skin cancer and superficial bladder tumors. 5. Any serious medical condition or extenuating circumstance which the investigator feels may interfere with the procedures or evaluations of the study. Dose, and Regimen The investigational product administered in this study is copper-64 SAR-bis-P S M A. copper-64 SAR-bis-P S M A has three basic components:",
        "(a) the radionuclide (copper-64) chelated by (b) bis-COSAR (a bifunctional metal chelator) which is linked to (c) two urea based small molecule inhibitors of prostate specific membrane antigen. 200 megabecquerels of copper-64 SAR-bis-P S M A will be administered as a single bolus intravenous injection at Day 1. Statistical Methods A Statistical Analysis Plan (SAP) will be written after finalizing the protocol and prior to database lock. The SAP will detail the implementation of all the planned statistical analysis in accordance with the principal features stated in the protocol."
      ],
      "chips": [
        "n = 383",
        "NCCN high-risk",
        "No ADT",
        "bisPSMA"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c006.jpg",
      "cap": "Protocol page 6 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Planned n = 383 untreated high-risk prostate adenocarcinoma heading to RP + PLND.",
        "High-risk NCCN v1.2023: clinical stage ≥T3a, or Grade Group ≥4, or PSA >20 ng/mL. No ADT of any duration.",
        "Construct: copper-64 chelated by bisCOSAR, linked to two urea-based PSMA inhibitors."
      ]
    },
    {
      "title": "Page 7 of 80 · Table of contents · sections 1–5",
      "audio": [
        "TABLE OF CONTENTS SPONSOR PROTOCOL APPROVAL............................................................................. 2 PROTOCOL SYNOPSIS ................................................................................................... 3 TABLE OF CONTENTS ................................................................................................... 7 List of Tables ................................................................................................................. 10 List of Figures ................................................................................................................ 10 LIST OF ABBREVIATIONS AND DEFINITIONS OF TERMS ...............................",
        "11 AMENDMENT 1 (V2.0, 02-DEC-2024) .......................................................................... 13 1 INVESTIGATIONAL TEAM ................................................................................... 15 2 INTRODUCTION ...................................................................................................... 16 2.1 Background .......................................................................................................... 16 2.2 Imaging of Prostate Cancer .................................................................................. 16 2.3 Preclinical Experience .........................................................................................",
        "18 2.4 Clinical Experience .............................................................................................. 19 2.5 Rationale for the Study and Study Design ........................................................... 21 2.5.1 Patient Population/Endpoints ........................................................................ 21 2.5.2 Dose of copper-64 SAR-bis-P S M A ........................................................................ 22 2.5.3 Imaging Timepoint Selection ........................................................................ 22 2.6 Benefit/Risk Assessment ..................................................................................... 23 3 STUDY OBJECTIVES AND ENDPOINTS ............................................................",
        "25 3.1 Primary Objective and Endpoints ........................................................................ 25 3.2 Secondary Objectives and Endpoints ................................................................... 25 3.3 Exploratory Objectives and Endpoints ................................................................ 26 4 STUDY DESIGN ........................................................................................................ 28 4.1 Study Overview ................................................................................................... 28 4.1.1 Pharmacokinetic Substudy ............................................................................",
        "29 4.2 Study Duration, Beginning and End of Study ..................................................... 29 5 STUDY ENROLLMENT AND WITHDRAWAL .................................................. 30 5.1 Study Population .................................................................................................. 30 5.1.1 Inclusion Criteria .......................................................................................... 30 5.1.2 Exclusion Criteria ......................................................................................... 30 5.2 Enrollment and Method of Assigning Participants to Treatment Groups ............ 30 5.3 Study Blinding .....................................................................................................",
        "31 5.4 Participant Withdrawal and Replacement ............................................................ 31 5.4.1 Screening Failures and Rescreening ............................................................. 31 5.4.1.1 Screen Failures............................................................................................... 31 5.4.1.2 Rescreening.................................................................................................... 31 5.4.2 Withdrawal of Consent and Discontinuation of Participants from the Study .. 31 5.4.2.1 Individual Stopping Rules ............................................................................. 32 5.4.3 Pregnancy ......................................................................................................",
        "32 5.4.3.1 Acceptable Forms of Contraception .............................................................. 33"
      ],
      "chips": [
        "CLP04",
        "p7/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c007.jpg",
      "cap": "Protocol page 7 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 8 of 80 · Table of contents · sections 5–8",
      "audio": [
        "5.4.3.2 Sperm Donation ............................................................................................. 33 5.4.4 Replacement of Participants ......................................................................... 33 5.5 Premature Termination or Suspension of Study .................................................. 34 5.6 Safety Review Committee ................................................................................... 34 6 6.1 Dosage and Formulation ...................................................................................... 35 6.2 Supply, Packaging and Labeling ..........................................................................",
        "35 6.3 Storage and Stability ............................................................................................ 35 6.4 Dispensing and Administration ............................................................................ 36 6.4.1 Radiation protection ...................................................................................... 36 6.5 Compliance and Accountability ........................................................................... 36 6.5.1 Storage of Supplies ....................................................................................... 36 6.5.2 Control of Supplies .......................................................................................",
        "36 6.5.3 Disposition of Supplies ................................................................................. 37 6.6 6.6.1 Participant Preparation Prior to Dosing ........................................................ 37 6.7 Participant Release and Radioprotection Precautions .......................................... 37 7 CONCOMITANT MEDICATIONS ........................................................................ 38 7.1 Required Treatments ............................................................................................ 38 7.2 Permitted Treatments ...........................................................................................",
        "38 7.3 Prohibited Treatments .......................................................................................... 38 8 STUDY PROCEDURES AND ASSESSMENTS .................................................... 39 8.1 Demographics and Baseline Health Record ........................................................ 43 8.1.1 Baseline Demographics ................................................................................ 43 8.1.2 Body Weight and Height .............................................................................. 43 8.1.3 Medical and Medication History .................................................................. 43 8.1.4 Germline Information ...................................................................................",
        "43 8.2 Safety Assessments .............................................................................................. 43 8.2.1 Vital Signs ..................................................................................................... 43 8.2.2 Duplicate 12-lead Electrocardiogram ........................................................... 44 8.2.3 Clinical Laboratory Assessments .................................................................. 44 8.3 Imaging Assessments ........................................................................................... 44 8.3.1 Institutional standard of care Imaging ............................................................................",
        "45 8.3.1.1 Institutional standard of care Imaging Central Interpretation .......................................... 45 8.3.2 copper-64 SAR-bis-P S M A PET C T ....................................................................... 45 8.3.2.1 copper-64 SAR-bis-P S M A PET C T Local Interpretation ....................................... 46 8.3.2.2 copper-64 SAR-bis-P S M A PET C T Central Interpretation .................................... 46 8.4 Radical Prostatectomy and Pelvic Lymph Node Dissection ................................ 47 8.5 Histopathology ..................................................................................................... 47 8.5.1 Tissue from Radical Prostatectomy and Pelvic Lymph Node Dissection ....",
        "47 8.5.2 Tissue from Distant Metastasis ..................................................................... 47 8.6 Efficacy Assessments ........................................................................................... 47 8.6.1 Standard of Truth for Pelvic Lymph Nodes .................................................. 47 8.6.2 Standard of Truth for Prostate....................................................................... 48 8.6.3 Standard of Truth for Distant Metastatic Disease ......................................... 48 8.7 Assessment of Pharmacokinetics ......................................................................... 48 8.7.1 Blood and Urine Pharmacokinetics .............................................................. 48"
      ],
      "chips": [
        "CLP04",
        "p8/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c008.jpg",
      "cap": "Protocol page 8 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 9 of 80 · Table of contents · sections 8–12 and appendices",
      "audio": [
        "8.7.2 Radiation Dosimetry ..................................................................................... 49 9 VISIT-SPECIFIC PROCEDURES .......................................................................... 50 9.1.1 Screening Period ........................................................................................... 50 9.1.1.1 Visit 1 (Day -28 to Day 1) ............................................................................. 50 9.1.2 copper-64 SAR-bis-P S M A Imaging ....................................................................... 50 9.1.2.1 Visit 2 (Day 1) ...............................................................................................",
        "50 9.1.2.2 Visit 3 (Day 2) ............................................................................................... 51 9.1.3 Safety Call - Visit 4 (Day 7 ±4 days) ............................................................ 51 9.1.4 End Of Study - Visit 5 (Until Day 90) .......................................................... 51 10 ADVERSE EVENT MONITORING ....................................................................... 53 10.1 Adverse Events .................................................................................................... 53 10.1.1 Adverse Drug Reaction .................................................................................",
        "53 10.1.2 Unexpected Adverse Drug Reaction ............................................................. 54 10.1.3 Assessment of Adverse Events by the Investigator ...................................... 54 10.1.3.1 Assessment of Severity .................................................................................. 54 10.1.3.2 Causality Assessment .................................................................................... 54 10.2 Serious Adverse Event ......................................................................................... 55 10.3 Serious Adverse Event Reporting - Procedures for Investigators ....................... 56 10.3.1 Initial Reports................................................................................................",
        "56 10.3.2 Follow-Up Reports........................................................................................ 56 10.4 Pregnancy ............................................................................................................. 56 10.5 Expedited Reporting ............................................................................................ 56 11 STATISTICAL METHODS ..................................................................................... 58 11.1 General Considerations ........................................................................................ 58 11.2 Analysis Populations ............................................................................................",
        "58 11.2.1 All Participants Set ....................................................................................... 58 11.2.2 Enrolled Participants Set ............................................................................... 58 11.2.3 Evaluable Set ................................................................................................ 58 11.2.4 Full Analysis Set ........................................................................................... 58 11.2.5 Safety Set ...................................................................................................... 58 11.2.6 Blood/Plasma Pharmacokinetic Set ..............................................................",
        "59 11.2.7 Urine Pharmacokinetic Set ........................................................................... 59 11.2.8 Dosimetry Set................................................................................................ 59 11.3 Determination of Sample Size ............................................................................. 59 11.4 Analysis Methods ................................................................................................. 60 11.4.1 Enrollment and Disposition .......................................................................... 60 11.4.2 Demographic and Other Baseline Characteristics ........................................",
        "60 11.4.3 Prior and Concomitant Medication ............................................................... 60 11.4.4 Medical History ............................................................................................ 60 11.4.5 Germline Information ................................................................................... 60 11.4.6 Prostate Cancer History ................................................................................ 60 11.4.7 Institutional Standard of Care Imaging ......................................................... 61 11.4.8 Study Drug Administration ...........................................................................",
        "61 11.4.9 copper-64 SAR-bis-P S M A PET C T Imaging......................................................... 61 11.4.10 Protocol Deviations ....................................................................................... 61 11.4.11 Safety Analysis ............................................................................................. 61 11.4.11.1 Adverse Events .............................................................................................. 61 11.4.11.2 Clinical Laboratory Assessments................................................................... 61"
      ],
      "chips": [
        "CLP04",
        "p9/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c009.jpg",
      "cap": "Protocol page 9 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 10 of 80 · List of tables and figures",
      "audio": [
        "11.4.11.3 Vital Signs ..................................................................................................... 61 11.4.11.4 12-Lead ECG ................................................................................................. 61 11.4.11.5 Subgroup Safety Analysis .............................................................................. 62 11.4.12 Efficacy Analysis .......................................................................................... 62 11.4.12.1 Primary Efficacy Endpoints ........................................................................... 62 11.4.12.2 Sensitivity Analysis for the Primary Efficacy Endpoints ..............................",
        "63 11.4.12.3 Secondary Efficacy Endpoints ....................................................................... 63 11.4.12.4 Exploratory Efficacy Endpoints..................................................................... 65 11.4.13 Pharmacokinetic Analysis ............................................................................. 67 11.4.14 Dosimetry Analysis ....................................................................................... 68 11.5 Interim Analysis ................................................................................................... 68 11.6 Handling of Missing Data ....................................................................................",
        "68 12 STUDY ADMINISTRATION AND RESPONSABILITIES ................................. 69 12.1 General Investigator Responsibilities .................................................................. 69 12.2 Protocol Compliance ............................................................................................ 69 12.3 Compliance with Ethical and Regulatory Guidelines .......................................... 69 12.4 Institutional Review Board .................................................................................. 70 12.5 Informed Consent Process ................................................................................... 70 12.6 Confidentiality .....................................................................................................",
        "71 12.7 Study Files and Retention of Records and Biological Samples ........................... 72 12.8 Participant Screening Log .................................................................................... 73 12.9 Modifications of the Protocol or Informed Consent Documents ......................... 73 12.10 Case Report Forms ............................................................................................... 74 12.11 Clinical Monitoring .............................................................................................. 74 12.12 Inspections ...........................................................................................................",
        "74 12.13 Data Management ................................................................................................ 75 12.14 Clinical Study Insurance ...................................................................................... 75 12.15 Communications with Regulatory Authorities .................................................... 75 12.16 Publication and Information Disclosure Policy ................................................... 75 13 REFERENCES ........................................................................................................... 77 14 INVESTIGATOR AGREEMENT ...........................................................................",
        "79 List of Tables Table 1 Primary Study Objective and Endpoints .............................................................. 25 Table 2 Secondary Study Objectives and Endpoints ........................................................ 25 Table 3 Exploratory Study Objectives and Endpoints ...................................................... 26 Table 4 Investigational Product to be Administered......................................................... 35 Table 5 Schedule of Assessments - All Participants ........................................................ 40 Table 6 Schedule of Assessments - pharmacokinetics Substudy Participants Only ...............................",
        "42 Table 7 Regions and Subregions Assessed ....................................................................... 46 List of Figures Figure 1: Intra-individual PET C T images from two participants comparing 200 megabecquerels of copper-64 SAR-bis-P S M A (B, D) and gallium-68 P S M A eleven (A, C) .................................................. 20 Figure 2 Overall Study Design ......................................................................................... 28"
      ],
      "chips": [
        "CLP04",
        "p10/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c010.jpg",
      "cap": "Protocol page 10 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 11 of 80 · Abbreviations A–Q (64Cu, PSMA, PLND, PET)",
      "audio": [
        "List of Abbreviations and Definitions of Terms Abbreviation/Term Definition fluorine-18 fluorine-18 fluorine-18 F D G fluorine-18-fluorodeoxyglucose copper-64 copper-64 copper-64 SAR-bis-P S M A copper-64 labelled bis-COSAR-(Lys-urea-Glu)2 copper-67 copper-67 gallium-68 gallium-68 technetium-99m M D P 99mTc-methylene diphosphonate ADL activities of daily living androgen deprivation therapy androgen deprivation therapy adverse event adverse events ATC Anatomical/Therapeutic/Chemical BMI body mass index CFR Code of Federal Regulations CI confidence interval CKD-EPI Chronic Kidney Disease Epidemiology Collaboration CT computed tomography CV% coefficient of variation as a percentage DICOM Digital Imaging and Communications in Medicine electronic case report form electronic case report form EDC electronic data capture eGFR estimated glomerular filtration rate F D A Food and Drug Administration G C P Good Clinical Practice IA injected activity IB Investigator's Brochure informed consent form informed consent form I C H International Conference on Harmonisation I N D Investigational New Drug ISUP International Society of Urological Pathology IV intravenous I R B institutional review board lymph node lymph node mCRPC metastatic castrate resistant prostate cancer MedDRA Medical Dictionary for Regulatory Activities MRI magnetic resonance imaging natCu natural stable copper natCu-SAR-bisPSMA natCu-labeled SAR-bisPSMA NCI CTCAE National Cancer Institute Common Terminology Criteria for Adverse Events negative predictive value negative predictive value prostate cancer prostate cancer PET positron emission tomography pharmacokinetics pharmacokinetics pelvic lymph node dissection pelvic lymph node dissection positive predictive value positive predictive value PSA prostate-specific antigen P S M A prostate specific membrane antigen"
      ],
      "chips": [
        "CLP04",
        "p11/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c011.jpg",
      "cap": "Protocol page 11 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 12 of 80 · Abbreviations R–W (RP, SAE, SOC, SUV, TBR)",
      "audio": [
        "radical prostatectomy radical prostatectomy serious adverse event serious adverse events SAP Statistical Analysis Plan standard of care standard of care S U V standardized uptake value t1/2 half-life t1/2e elimination half-life tumor-to-background ratio tumor-to-background ratio treatment-emergent adverse event treatment emergent adverse event US United States WHODrug World Health Organization drug dictionary"
      ],
      "chips": [
        "CLP04",
        "p12/80",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/clp/c012.jpg",
      "cap": "Protocol page 12 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 13 of 80 · Amendment 1 (v2.0, 02-Dec-2024) rationale",
      "audio": [
        "AMENDMENT 1 (V2.0, 02-DEC-2024) Amendment rationale and summary of changes: The purpose of this amendment is to incorporate changes described in protocol clarification memos 1 to 5, incorporate new exploratory endpoints, align the protocol with the statistical analysis plan and study manuals, provide some clarifications on study assessments, the patient population, add flexibility for the scheduling of assessments and to address minor typographical errors. Summary of Changes Section Reference Version 2.0, 02-Dec-2024 Amendment Description Throughout the protocol Version and date of the document has been updated. Throughout the protocol Typographical, formatting corrections, administrative changes, and text clarifications.",
        "Sponsor Protocol Approval Signature page updated to include additional signatories. Synopsis, Section 5.1.2 Revision of study entry criteria: - Clarification of the meaning of \"untreated\" prostate cancer included. - Exclusion of participants diagnosed with other malignancies that are expected to alter life expectancy or may interfere with disease assessment. However, participants with a prior history of malignancy that has been adequately treated and who have been disease free for more than 3 years are eligible, as are participants with adequately treated non-melanoma skin cancer, superficial bladder cancer.",
        "Synopsis, Section 3.3, Section 8.3.1.1, Section 11.4.12.4 Additional exploratory endpoints were added to compare the Day 1 and Day 2 copper-64 SAR-bis-P S M A PET results with the standard of care P S M A PET results. Additional exploratory biodistribution objective and endpoints added to compare the Day 1 and Day 2 copper-64 SAR-bis-P S M A PET results with standard of care P S M A PET. Synopsis, Section 4.1, Section 9.1.3, Table 5 Day 7 visit window amendment to +/-4 days . Section 2.2, Section 2.5.2 Addition of fluorine-18-rhPSMA-7.3 (registered as POSLUMA)® to the list of approved P S M A PET agents and inclusion of relevant performance data. Clinical experience with copper-64 SAR-bis-P S M A updated.",
        "Section 4.1, Table 5, Section 8.3.1, Section 9.1.1.1 Inclusion of technetium-99m M D P bone scan as an example of an institutional standard of care imaging modality. Section 4.1.1, Table 6, Section 8.7 Day 7 visit (additional assessments for pharmacokinetics substudy) removed. Section 5.1, Section 8 Clarification added that prospective approval of protocol deviations to recruitment and enrollment criteria, or study assessments, also known as protocol waivers or exemptions, is not permitted. Section 6.1 Details of copper-64 SAR-bis-P S M A manufacturing standard added. Section 7.3 Folate supplements and new over the counter medications were removed from the list of prohibited medications. Table 5, Section 9.1.2.1 Removal of assessment of height from Visit 2.",
        "Table 5 Clarification added that for the calculation of Body Surface Area required for the reporting of eGFR at Visit 3, weight as assessed on Day 1 is to be used. Table 5, Section 8.3.1 Clarification of the minimum requirements for standard of care imaging at screening provided. Table 5, Section 8.2.3 Pre-prandial assessment of blood glucose was changed to a random blood glucose assessment."
      ],
      "chips": [
        "CLP04",
        "p13/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c013.jpg",
      "cap": "Protocol page 13 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 14 of 80 · Amendment 1 · entry criteria and endpoint alignment",
      "audio": [
        "Summary of Changes Section Reference Version 2.0, 02-Dec-2024 Amendment Description Table 5, Section 8.3.1, Section 9.1.1 Clarification added that all participants are required to have baseline standard of care imaging. If the required scans were performed within 60 days of Day 1, these scans will serve as baseline standard of care imaging and do not need to be repeated at screening. If the required scans are not available, the participant will undergo the missing scan(s) during the Screening period. Table 5, Section 9.1.2.2, Section 9.1.2.1, Section 9.1.2.2 Modification of assessment windows and schedule of assessments:",
        "- Window to perform urinalysis and laboratory assessments on Day 2 (Visit 3) increased to within 9 days after the copper-64 SAR-bis-P S M A administration. This is to allow for decay of radioactivity present in the samples. Due to this change, the Day 7 safety assessments in Table 6 are no longer unique to the Pharmacokinetic substudy and thus were removed from the additional assessments table. - Post-dose urinalysis on Day 1 was removed from the study. Section 8.3 The requirement to complete all PET scans on the same scanner was clarified. Section 8.3.2.1 Clarification provided on the definition of a PET-positive lesion. Section 8.5.1 The Pathology Manual is referenced for specifying data collection requirements from the prostate and pelvic lymph node histology.",
        "Section 8.7.1 Reference to the duplicate assessment of blood, plasma and urine samples was removed duplicates. Correction made to clarify that the metabolic profiles will be assessed by quantitative means. Section 11.2.5 Definition of the Safety Set was amended to all participants who receive any amount of copper-64 SAR-bis-P S M A regardless of safety assessment status. Section 11.4.2, Section 11.4.5, Section 11.4.6, Section 11.4.7 Analysis sets used were amended for the summary of demographics and other baseline characteristics, germline information, prostate cancer history, and institutional standard of care imaging. Section 11.4.12 Uptake of the product will be measured by Standardized Uptake Values (S U V).",
        "Specifics to exact S U V parameters reported will be specified in the imaging manuals. Section 11.4.12.1, Section 11.4.12.2, Section 11.6 Details on the imputation methods for the primary efficacy analyses were removed. These imputation methods will be described in detail in the Statistical Analysis Plan. Section 11.4.12.2 Details of the sensitivity analysis for the primary efficacy endpoint removed. Full details described in the SAP. Section 11.4.12.3 Clarification provided on the calculation of sensitivity to detect prostate cancer within the prostate, pelvic lymph nodes, extra-pelvic lymph nodes, bone and visceral/soft tissue regions.",
        "Section 11.6 Clarification added that missing data for adverse event relationship to copper-64- SAR-bisPSMA will be assumed to be 'related to copper-64 SAR-bis-P S M A' for safety analysis based on the worst-case scenario. Section 12.4 Clarification added that only United States study sites must forward a signed 1572 Form. Section 12.7 Clarification on the requirements for the retention of biological samples. Section 12.7 Mention of physical examination removed. Section 14 New Investigator Agreement language added for Investigators in Australia."
      ],
      "chips": [
        "CLP04",
        "p14/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c014.jpg",
      "cap": "Protocol page 14 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 15 of 80 · Investigational team",
      "audio": [
        "1 INVESTIGATIONAL TEAM Refer to the trial specific contact list for details of investigators, sponsor personnel, clinical research organization personnel and facilities used in the study."
      ],
      "chips": [
        "CLP04",
        "p15/80",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/clp/c015.jpg",
      "cap": "Protocol page 15 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 16 of 80 · Introduction · prostate cancer epidemiology",
      "audio": [
        "2 INTRODUCTION This study will be conducted in compliance with the protocol, applicable regulatory requirements, and International Conference on Harmonisation (I C H) Good Clinical Practice (G C P) E6 guidelines. 2.1 Background Prostate cancer (prostate cancer) is the second most frequent malignancy occurring in men worldwide1. The American Cancer Society estimates ~288,300 new cases of prostate cancer and 34,700 deaths from prostate cancer in 2023 in the United States (US) alone2. Incidence varies and correlates with age, running between 30% for patients 40 to 50 years old to 50 to 80% for patients aged 80 and over3. Although the etiology of the disease is unclear, the main risk factors include advanced age, ethnicity, and positive family history1.",
        "Median age at diagnosis is 67 years and median age at death is 81 years4,5. The 5-year relative survival rate for local or regional prostate cancer has been over 97% since 20006. While prostate cancer-specific mortality has decreased, in recent years there has been a trend toward diagnosis of prostate cancer at higher stages, which is presumably due to changes in prostate cancer screening practices7. The natural history of prostate cancer is variable, ranging from indolent tumors that remain confined to the prostate for decades to highly aggressive tumors that rapidly metastasize and lead to death. prostate cancer can metastasize throughout the body and is most likely to spread initially to the pelvic lymph nodes (lymph nodes).",
        "Once beyond the pelvic lymph nodes, the abdominal lymph nodes and bones are the most common locations of metastasis. More advanced patterns of tumor progression can involve extra-pelvic, non-nodal soft tissue sites like liver and lung. While some patients have indolent disease, where the patient's serum prostate-specific antigen (PSA) values are followed without further treatment, most patients will receive some treatment for their prostate cancer. Treatment of prostate cancer is largely dependent on the disease stage at initial presentation. At initial presentation roughly 74% of patients have local disease, 13% have regional disease, and 7% have metastatic disease, with the remaining 6% classified as unknown6.",
        "For patients with grade group 2 or higher prostate cancer that is localized to the prostate, local definitive therapy with either radical prostatectomy (radical prostatectomy) or radiation therapy is typically performed. Prostate specific membrane antigen (P S M A) is a type II transmembrane glycoprotein (glutamate carboxypeptidase type II) that is expressed in normal, benign and malignant prostate tissues, including intraepithelial neoplasia and metastatic specimens8. P S M A has two important enzymatic functions; folate hydrolase and N-acetylated-a-linked acidic dipeptidase, and exhibits an endocytic function, in which it spontaneously recycles through endocytic vesicles.",
        "Despite its name, P S M A is not specific to the prostate gland and is expressed in other tissues, including salivary and lacrimal glands, duodenal mucosa, proximal renal tubular cells, and subpopulations of neuroendocrine cells in the colonic crypts9. P S M A is strongly upregulated in all types of prostate cancer, and increases with tumor aggressiveness, metastatic disease, and recurrence, making it an excellent target for both imaging and therapy of PC10-12. positron emission tomography (PET) of P S M A-positive lesions in men with prostate cancer. The product is copper-64 (copper-64) labelled bis-COSAR-(Lys-urea-Glu)2 (designated as copper-64 SAR-bis-P S M A).",
        "2.2 Imaging of Prostate Cancer Until recently, imaging of prostate cancer has most commonly been carried out by a combination of magnetic resonance imaging (MRI), computed tomography (CT), and 99mTc-methylene diphosphonate (technetium-99m M D P) bone scan. These traditional imaging modalities, however, suffer"
      ],
      "chips": [
        "CLP04",
        "p16/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c016.jpg",
      "cap": "Protocol page 16 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 17 of 80 · Background · staging, NCCN high-risk, pelvic nodes",
      "audio": [
        "from limited sensitivity and specificity for the detection of disease. This can lead to disease under-staging and the improper selection of treatment. Given the limitations of traditional imaging modalities, the use of molecular imaging using PET has been explored to better identify sites of disease. A number of new PET diagnostic radiopharmaceuticals have therefore emerged in recent years. These include agents that accumulate on the basis of alterations in cellular metabolism as well as those that bind to specific proteins, such as P S M A.",
        "Diagnostic PET radiopharmaceuticals that are commonly used to image prostate cancer include 11C- choline, fluorine-18-fluciclovine (registered as AXUMIN®), and more recently, P S M A-based radiopharmaceuticals, gallium-68 P S M A eleven (registered as LOCAMETZ® and ILLUCIX®) and fluorine-18- DCFPyL (registered as PYLARIFY®) and fluorine-18-rhPSMA-7.3 (registered as POSLUMA)®. Although molecular imaging in oncology is most commonly performed with fluorine-18- fluorodeoxyglucose (fluorine-18 F D G) PET, this test has shown limited clinical utility in prostate cancer imaging. prostate cancer cells typically do not undergo increased aerobic glycolysis, limiting the use of fluorine-18 F D G.",
        "These cells do, however, display upregulated de novo lipid synthesis and activity of lipogenic enzymes. It is this increase that enables lipid precursors such as choline to function as radiotracers for PET imaging. 11C-choline was approved by the Food and Drug Administration (F D A) for local use by Mayo Clinic in 2012, but choline-based radiotracers are not cancer specific, and can be taken up in other tissues or areas of benign inflammation13. In addition, its use is affected by the short half-life (t1/2=20 minutes). In 2016, fluorine-18-fluciclovine was approved by the F D A to evaluate patients with suspected recurrent prostate cancer. fluorine-18-fluciclovine targets multiple sodium-dependent and independent channels which are upregulated in prostate cancer.",
        "fluorine-18-fluciclovine is a synthetic amino acid that is well tolerated and able to detect local and distant prostate cancer recurrences across a wide range of PSA values. Similarly, to 11C-choline, uptake of fluorine-18-fluciclovine is not specific to prostate cancer and may occur with other types of cancer and benign prostatic hypertrophy. Another limitation of fluorine-18-fluciclovine imaging includes patient preparation, which requires patients not to eat or drink for at least 4 hours before administration of the tracer. P S M A has been studied extensively as an imaging target in prostate cancer. The first commercialized P S M A-targeting imaging agent was 111In-labelled-capromab-pendetide (ProstaScint®), which was approved by the F D A in 1996.",
        "However, ProstaScint® was only able to bind to the intracellular epitope of P S M A and was therefore not capable of visualizing viable prostate cancer cells leading to poor clinical performance14. Since then, the class of P S M A-targeting agents that have been most extensively explored are the urea-based small molecule inhibitors of P S M A. Three of these, gallium-68 P S M A eleven in 2020, fluorine-18-DCFPyL in 2021, and fluorine-18-rhPSMA-7.3 in 2023 have been approved by the F D A for PET imaging of P S M A-positive lesions in men with prostate cancer with suspected metastasis who are candidates for initial definitive therapy or with suspected recurrence based on elevated serum PSA level.",
        "Evolving evidence demonstrates superior sensitivity and specificity of P S M A PET agents compared to conventional imaging, with frequent identification of sub-centimeter prostate cancer lesions. P S M A-targeted PET is effective for imaging disease in the prostate, lymph nodes, soft tissue, and bone in a single examination15. In studies comparing 11C-choline and fluorine-18-fluciclovine to gallium-68 P S M A eleven, gallium-68 P S M A eleven showed a higher detection rate than 11C-choline PET for lymph nodes as well as bone lesions16 and fluorine-18- fluciclovine was also shown to be inferior to gallium-68 P S M A eleven in prospective imaging trials17.",
        "In the Phase 3 trials, gallium-68 P S M A eleven, fluorine-18-DCFPyL and fluorine-18-rhPSMA-7.3 demonstrated high specificity (around 90%18, 96%19 and 95%20 respectively) yet a limited sensitivity (around 47%18, 35%19 and 27%20 per approved label, respectively) for the detection of lymph node metastases in candidates for initial definitive therapy. Thus, while a positive test can be quite helpful in"
      ],
      "chips": [
        "CLP04",
        "p17/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c017.jpg",
      "cap": "Protocol page 17 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 18 of 80 · Background · PSMA imaging and current tracers",
      "audio": [
        "directing therapy for men with newly diagnosed prostate cancer, a negative scan is of limited clinical utility. Therefore, new agents that are able detect and localize small metastatic lesions are highly desirable. copper-64 SAR-bis-P S M A offers a number of advantages over the recently approved P S M A PET agents for prostate cancer. These advantages are driven by the longer half-life of copper-64 (t1/2=12.7 hours) compared to gallium-68 (gallium-68, t1/2=68 minutes) and fluorine-18 (fluorine-18, t1/2=110 minutes) and by the two P S M A-targeting groups (bivalent structure) of SAR-bisPSMA - both of which can potentially increase the sensitivity of P S M A PET for the imaging of prostate cancer.",
        "Unlike the monomeric gallium-68 P S M A eleven, fluorine-18-DCFPyL and fluorine-18-rhPSMA-7.3 compounds, copper-64 SAR-bis-P S M A has a bivalent structure, which may lead to improved tumor uptake and retention. This was demonstrated in preclinical imaging studies, where copper-64 SAR-bis-P S M A outperformed the monomeric, copper-64-SAR-P S M A, with respect to both tumor uptake and retention21. Due to the short half-life of the isotopes, patients are usually imaged between 50 and 100 minutes after the administration of gallium-68 P S M A eleven, fluorine-18-DCFPyL and fluorine-18-rhPSMA-7.3. Imaging later than the recommended imaging window may adversely impact imaging performance due to the decay of the isotope.",
        "The longer half-life of copper-64 allows for additional imaging at later time points. The delayed imaging capability allows for flexibility in scheduling of patients, acquisition at multiple timepoints for more accurate dosimetry calculations, and may also enable the detection of additional smaller lesions due to increased uptake driven by the bivalent structure and by an enhanced tumor-to-background ratio (tumor-to-background ratio) following biological clearance of the unbound product from the rest of the body over time22,23.",
        "A Phase 1 trial (C L P zero three study, NCT04839367) measured the intensity of tracer uptake (as mean and maximum Standardized Uptake Value [S U V]) and tumor-to-background ratio on copper-64 SAR-bis-P S M A PET C T compared to gallium-68 P S M A eleven PET C T within the same prostate cancer patients. Concordant lesions across the scan pairs demonstrated increased tracer uptake and higher tumor-to-background ratio on copper-64 SAR-bis-P S M A compared to gallium-68 P S M A eleven PET C T, which supports the potential for improved tumor uptake using copper-64 SAR-bis-P S M A.",
        "Furthermore, the 12.7 hour half-life of copper-64 also allows production at industrial quantities on cyclotrons, permits centralized manufacturing of ready-to use current Good Manufacturing Practice product to clinical sites and a scalable supply. 2.3 Preclinical Experience A number of nonclinical studies have been conducted to assess the biodistribution, in vivo safety and tolerability as well as tumor imaging and efficacy of SAR-bisPSMA labelled with either natural stable copper (natCu), copper-64 or copper-67 (copper-67).",
        "A repeat dose toxicology study of four weekly intravenous (IV) injections of natCu-labeled SAR-bisPSMA (natCu-SAR-bisPSMA) in mice resulted in no clinical abnormalities, significant changes in weight or feed intake, and no product related effects in hematology, blood biochemistry and urine analyses. There were no product related macroscopic, nor microscopic findings in organs by histology analysis. The no observed adverse effect level was considered to be 2 mg/kg for natCu-SAR-bisPSMA, which corresponds to a safety factor of the chemical entity, of 192 times the proposed dose of the product24.",
        "Preclinical imaging studies with copper-64 SAR-bis-P S M A in a prostate cancer xenograft model showed high uptake and retention of the product in the tumor over 24 hours (22% injected activity [IA]/g at 1 hour and 26% IA/g at 24 hours post injection)21. These results compare favorably to other P S M A-targeted products in similar preclinical models. The preclinical biodistribution of copper-67- SAR-bisPSMA, the theranostic pair of copper-64 SAR-bis-P S M A, with identical chemical structure but longer half-life (t1/2=61.8 hours), showed that the predominant excretion pathway is via renal elimination, with >95% of the copper-67-SAR-bisPSMA activity in the kidneys clearing within"
      ],
      "chips": [
        "CLP04",
        "p18/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c018.jpg",
      "cap": "Protocol page 18 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 19 of 80 · Copper-64 physics and SAR-bisPSMA construct",
      "audio": [
        "24 hours. The biodistribution study enabled dosimetry calculations to determine the absorbed radiation dose to organs/tissues for adult males for copper-67-SAR-bisPSMA and to extrapolate the dosimetry of copper-64 SAR-bis-P S M A. For copper-64 SAR-bis-P S M A, the largest radiation dose is observed in the kidney and urinary bladder, with a value of 0.258 mGy/megabecquerels and 0.059 mGy/megabecquerels, respectively. The effective whole body dose was 0.012 mSv/megabecquerels, which for an administration of 200 megabecquerels of copper-64 SAR-bis-P S M A would result in an effective whole body dose of 2.43 mSv25.",
        "In summary, the nonclinical data indicate that copper-64 SAR-bis-P S M A binds to P S M A-expressing tumors with high affinity, appears to be well-tolerated and has the potential to be used to obtain high quality images of P S M A-expressing tumors in human cancers. Please refer to the current copper-64 SAR-bis-P S M A Investigator's Brochure (IB) for complete details of completed nonclinical studies. 2.4 Clinical Experience A Phase 1 study of copper-64 SAR-bis-P S M A (C L P zero three) has been completed, a Phase 1/2a study of copper-64 SAR-bis-P S M A (C L P zero six) has been completed (clinical study report pending) and one study utilizing copper-64 SAR-bis-P S M A is in progress (CLP05).",
        "The C L P zero three study (NCT04839367) was completed under Australia's Therapeutic Goods Administration Clinical Trial Notification scheme at three investigative sites in Australia. This was a prospective, Phase 1, multi-center, blinded review, dose-ranging, non-randomized study of copper-64 SAR-bis-P S M A in 30 participants with untreated, confirmed prostate cancer, with intermediate- to high-risk features prior to radical prostatectomy with pelvic lymph node dissection (pelvic lymph node dissection). The aims of the study were to evaluate safety and tolerability of copper-64 SAR-bis-P S M A, assess efficacy to detect primary prostate cancer and evaluate image quality at various dose levels.",
        "Screening standard of care (standard of care) imaging included a gallium-68 P S M A eleven PET C T (at 45 to 60 minutes post dose per institutional protocols) acquired within 5 weeks, but not closer than 6 hours prior to the administration of copper-64 SAR-bis-P S M A. Enrolled participants were sequentially allocated to one of three dose cohorts to receive either 100 megabecquerels (n=6), 150 megabecquerels (n=6) or 200 megabecquerels (n=18) of copper-64 SAR-bis-P S M A on Day 0, followed by a whole body PET C T at 3 ±1 hour post dose. Safety was assessed pre and post dose on Day 0, Day 1, between Day 5 to Day 28 and following the completion of prostatectomy up to 11 weeks post Day 0.",
        "Participants proceeded to radical prostatectomy following the completion of the Day 5 to Day 28 safety visit. The copper-64 SAR-bis-P S M A and pre-study gallium-68 P S M A eleven PET C T scans were interpreted in a randomized order by two independent, blinded, central readers. The intensity of tracer uptake was compared on the copper-64- SAR-bisPSMA and gallium-68 P S M A eleven PET C T in up to 5 concordant lesions per participant. A single dose of copper-64 SAR-bis-P S M A was found to be safe and well tolerated when administered to participants with confirmed prostate cancer by IV injection. There were no copper-64-SAR- bisPSMA related serious adverse events (SAEs) or deaths, or adverse events (adverse events) leading to premature discontinuation.",
        "There was only one adverse event that was considered related to copper-64-SAR- bisPSMA by the Investigator, which was Grade 1 dysgeusia (occasional metallic taste) in a participant enrolled in the 200 megabecquerels copper-64 SAR-bis-P S M A cohort. For the primary efficacy endpoint, in the 200 megabecquerels cohort, copper-64 SAR-bis-P S M A had a high true positive rate for the detection of primary prostate cancer confirmed by histopathology (100% by Reader 1 and 85.7% by Reader 2), and low false negative rate (0% by Reader 1 and 14.3% by Reader 2). Both readers independently scored 200 megabecquerels of copper-64 SAR-bis-P S M A as the dose level providing the highest image quality. This is the dose level that will be utilized in this study (refer to Section 2.5.2).",
        "In the 200 megabecquerels cohort, there were more PET-positive lesions detected by copper-64 SAR-bis-P S M A"
      ],
      "chips": [
        "Cu-64 T½ 12.7 h",
        "bisCOSAR",
        "Two PSMA motifs"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c019.jpg",
      "cap": "Protocol page 19 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Copper-64 half-life is 12.7 hours — long enough for a true delayed (24-hour) PET, unlike gallium-68 (68 minutes).",
        "bisPSMA puts two PSMA-binding motifs on one sarcophagine chelator, aiming for higher uptake and tumor-to-background at delay."
      ]
    },
    {
      "title": "Page 20 of 80 · Prior studies · CLP02 / CLP03 vs 68Ga-PSMA-11",
      "audio": [
        "compared to gallium-68 P S M A eleven PET C T by both central readers (Reader 1 identified 41 lesions using copper-64 SAR-bis-P S M A and 36 lesions using gallium-68 P S M A eleven, while Reader 2 identified 31 lesions using copper-64 SAR-bis-P S M A and 22 lesions using gallium-68 P S M A eleven). Concordant lesions identified on copper-64 SAR-bis-P S M A and gallium-68 P S M A eleven PET C T showed consistently higher uptake and tumor-to-background ratio on copper-64 SAR-bis-P S M A compared to gallium-68 P S M A eleven.",
        "Intra-individual PET C T images from two participants in the C L P zero three study in Figure 1 demonstrate higher uptake and clearer delineation of lesions on 200 megabecquerels of copper-64 SAR-bis-P S M A (B, D) compared to gallium-68 P S M A eleven (A, C). Note, the intra-individual image pairs were acquired on the same scanner. Figure 1:",
        "Intra-individual PET C T images from two participants comparing 200 megabecquerels of copper-64 SAR-bis-P S M A (B, D) and gallium-68 P S M A eleven (A, C) Participant #1 Participant #2 The CLP05 clinical study (NCT04868604) a is prospective, Phase 1/2a, multi-center, open- label, non-randomized, dose-escalation, dose-finding, cohort expansion, theranostic study of copper-64 SAR-bis-P S M A and copper-67-SAR-bisPSMA administered to participants with metastatic castrate resistant prostate cancer (mCRPC) being conducted at a number of clinical sites in the US. copper-64 SAR-bis-P S M A PET C T is used for identification and copper-67-SAR-bisPSMA for the treatment of P S M A-expressing lesions.",
        "The study consists of a Dosimetry Phase, a Dose Escalation Phase and a Cohort Expansion Phase. The Dosimetry Phase of the study is now completed. This phase investigated the safety and radiation dosimetry of 200 megabecquerels of copper-64- SAR-bisPSMA in 6 participants. A single dose of 200 megabecquerels of copper-64 SAR-bis-P S M A was well tolerated and resulted in a relatively low effective dose (refer to Section 2.5.2)."
      ],
      "chips": [
        "CLP04",
        "p20/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c020.jpg",
      "cap": "Protocol page 20 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 21 of 80 · Prior studies · CLP06 BCR cohort and safety",
      "audio": [
        "The C L P zero six clinical study (NCT05249127) is a prospective, Phase 1/2, multi-center, blinded review, non-randomized study of copper-64 SAR-bis-P S M A PET C T in 50 participants with biochemical recurrence of prostate cancer following initial definitive therapy. The primary objective of the study is to assess the safety and preliminary efficacy of copper-64 SAR-bis-P S M A PET C T to localize the site(s) of prostate cancer recurrence across two PET acquisition timepoints (at 1 to 4 hours and 24 hours post dose). The clinical data obtained indicate that PET with copper-64 SAR-bis-P S M A is well tolerated, with no reported serious adverse event deemed related to copper-64 SAR-bis-P S M A in any of the studies described above at any dose level tested.",
        "Furthermore, in the completed C L P zero three Phase 1 clinical trial, copper-64-SAR- bisPSMA has demonstrated a high true positive rate for the detection of primary prostate cancer, showed a greater number of PET-positive lesions, higher tracer accumulation and tumor-to-background ratio compared to gallium-68 P S M A eleven PET C T in concordant lesions. Thus, copper-64 SAR-bis-P S M A PET C T promises to be a useful diagnostic agent to image prostate cancer in patients with suspected metastasis who are candidates for initial definitive therapy. Please refer to the current copper-64 SAR-bis-P S M A IB for details on the completed clinical studies.",
        "2.5 Rationale for the Study and Study Design Several imaging modalities are currently employed for the diagnosis, staging and prognosis of prostate cancer metastases, however, none have optimal performance, particularly when it comes to the detection of small pelvic lymph node metastases in patients newly diagnosed with prostate cancer. The need for improved prostate cancer imaging is reflected in the recurrence rate of 20 to 40% following definitive therapy (with radical prostatectomy or radiation therapy) of what was thought to be disease localized to the prostate gland26. The nonclinical and clinical data obtained to date indicate that PET with copper-64- SAR-bisPSMA is well tolerated, with high true positive rate for the detection of primary prostate cancer.",
        "The number of PET-positive lesions identified, tracer uptake and tumor-to-background ratio of copper-64 SAR-bis-P S M A PET C T all compared favorably to that of gallium-68 P S M A eleven PET C T when studied in patients with untreated, histopathology-confirmed prostate cancer, proceeding to radical prostatectomy with pelvic lymph node dissection (refer to Section 2.4). These findings warrant further investigation in a Phase 3 clinical study. 2.5.1 Patient Population/Endpoints This study is a prospective, non-randomized, single-arm, open-label, multi-reader, multi- center, Phase 3 diagnostic performance study of copper-64 SAR-bis-P S M A PET C T.",
        "The aim of the study is to evaluate the safety and determine the sensitivity and specificity of copper-64-SAR- bisPSMA to detect prostate cancer within the pelvic lymph nodes at two PET acquisition timepoints, independently. The target study population is patients with high risk, untreated prostate cancer, who are proceeding to radical prostatectomy with pelvic lymph node dissection. Investigating copper-64 SAR-bis-P S M A PET C T in this population is reasonable as P S M A PET already plays an important role in the diagnostic workup of newly diagnosed patients who are candidates for initial definitive therapy.",
        "As prostate cancer most often spreads to the pelvic lymph nodes before becoming widely metastatic, assessing performance of copper-64 SAR-bis-P S M A PET C T for detection of pelvic lymph node involvement as an endpoint is both clinically relevant and practical. Focusing on a subset of patients undergoing surgery (as opposed to all patients being staged prior to definitive therapy) is deemed reasonable due to the need to obtain a histological confirmation of lymph node involvement that enables the assessment of sensitivity and specificity. The additional diagnostic efficacy assessments used in this study (e.g., positive and negative predictive values) are widely used and considered appropriate for the evaluation of performance of diagnostic imaging agents.",
        "The collection of standard safety parameters used in this study such as adverse event reporting, assessment of vital signs, clinical laboratory, and electrocardiograms (ECGs) are considered appropriate for monitoring the health and well-"
      ],
      "chips": [
        "CLP04",
        "p21/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c021.jpg",
      "cap": "Protocol page 21 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 22 of 80 · Rationale and benefit–risk",
      "audio": [
        "being of participants in late phase clinical studies. The biodistribution, elimination and dosimetry assessments were selected to further characterize the pharmacokinetics (pharmacokinetics) of copper-64 SAR-bis-P S M A in humans. This study will provide the Sponsor with information on the safety, efficacy and pharmacokinetics of copper-64- SAR-bisPSMA to further clinical development and support registration of copper-64-SAR- bisPSMA PET C T as a radioactive diagnostic agent for PET of P S M A-positive lesions in men with prostate cancer. 2.5.2 Dose of copper-64 SAR-bis-P S M A copper-64 SAR-bis-P S M A will be administered at a fixed administered activity of 200 megabecquerels.",
        "This activity yielded the highest image quality score in the dose ranging C L P zero three Phase 1 study in participants with known primary prostate cancer according to both independent, blinded, central readers for PET at 2 to 4 hours post dose. In terms of efficacy, the rate of participants deemed positive for primary prostate cancer for the 100, 150 and 200 megabecquerels cohort was 100%, 83%, 100% according to Reader 1 and 33%, 17% and 67% according to Reader 2, respectively. This activity is also utilized in the ongoing clinical studies with copper-64 SAR-bis-P S M A (CLP05 and C L P zero six) and preliminary data from these investigations also support the use of 200 megabecquerels.",
        "The C L P zero six Phase 1/2 study investigates the same PET acquisition timepoints as this study (i.e., 1 to 4 hours and at 24 ±6 hours post dose). Images obtained across multiple investigative sites demonstrate that 200 megabecquerels of copper-64 SAR-bis-P S M A is an adequate activity to allow sufficient image quality not only for the 1 to 4 hour timepoint but also for delayed imaging at 24 hours post dose using standard PET acquisition protocols. As part of the CLP05 Phase 1/2a trial, human biodistribution studies were used to estimate the organ radiation dosimetry of copper-64 SAR-bis-P S M A in adult males. An administration of 200 megabecquerels of copper-64 SAR-bis-P S M A enabled imaging out to 72 hours and resulted in a relatively low effective dose.",
        "According to the radiation dosimetry estimates obtained, the whole body effective dose to an adult male weighing 73 kg is 5.7 mSv for a 200 megabecquerels injection of copper-64- SAR-bisPSMA. A whole body effective dose of this magnitude is comparable to other routinely used imaging agents such as fluorine-18 F D G (8.4 mSv according to the Nuclear Medicine Radiation Dose Tool - Society of Nuclear Medicine and Molecular Imaging), and the recently approved gallium-68 P S M A eleven, fluorine-18-DCFPyL and fluorine-18-rhPSMA-7.3 at the higher end of the recommended administered activity (4.4 mSv18, 4.3 mSv19 and 4.1 mSv20, respectively).",
        "The safety data from the completed and ongoing studies indicate that this dose level is well tolerated, with no reported SAEs deemed related to the investigational product in any of the studies. Based on the overall safety, efficacy, dosimetry, and image quality results obtained to date, 200 megabecquerels of copper-64 SAR-bis-P S M A is deemed the optimal dose level for this protocol for acquisition of PET at 1 to 4 hours and at 24 ±6 hours post dose. 2.5.3 Imaging Timepoint Selection A PET C T scan will be acquired between 1 to 4 hours post administration of copper-64-SAR- bisPSMA (denoted as \"Day 1 PET\").",
        "This window is considered practical, provides flexibility, and allows clinicians to follow clinical routine already in place for P S M A PET agents (for gallium-68 P S M A eleven and fluorine-18-DCFPyL, PET acquisition is initiated approximately 1 hour post administration). A second PET C T at 24 ±6 hours post dose (denoted as \"Day 2 PET\") will also be completed as delayed imaging may enable detection of additional smaller lesions22 due"
      ],
      "chips": [
        "CLP04",
        "p22/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c022.jpg",
      "cap": "Protocol page 22 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 23 of 80 · Benefit–risk · delayed imaging and TBR",
      "audio": [
        "to enhanced TBRs following biological clearance of the unbound product from the rest of the body over time and continued tumor uptake of SAR-bisPSMA. Small animal PET C T images of LNCaP tumor-bearing NSG mice at 1, 4 and 24 hours post administration of copper-64 SAR-bis-P S M A showed that the tumor is clearly visible at 1 hour post dose with an average tumor-to-background ratio of 35.3 ±7.3. tumor-to-background ratio at 4 and 24 hours was much higher than at 1 hour (72.1 ±14.1 and 104.6 ±17.7, respectively), which demonstrates a high degree of accumulation and retention in tumor and clearance from background over time27. 2.6 Benefit/Risk Assessment Benefit:",
        "It is not known if study participants will gain any improvement in their own healthcare outcomes as a result of their participation in this study. A general societal benefit is widely considered to accrue from medical scientific knowledge accumulated through the conduct of ethical research on participants. It is hypothesized that due to the longer half-life of copper-64 and the dual targeting of P S M A, copper-64- SAR-bisPSMA will enable acquisition of PET scans at delayed imaging timepoints. Delayed imaging has the potential to improve lesion detection and allows clinics flexibility in scheduling of the scans.",
        "It also improves patient's access to care in areas with limited access to the current short half-life P S M A PET tracers, including but not limited to poorly serviced areas and underserved, underrepresented populations. Risk: All study participants will receive a single administration of copper-64 SAR-bis-P S M A. Specific foreseeable risks to study participants include: • Radiation dose received by the study participant: Human biodistribution studies in patients with mCRPC estimate that an administration of 200 megabecquerels of copper-64-SAR- bisPSMA would result in an effective dose of 5.7 mSv (i.e., 0.0285 mSv/megabecquerels), which is comparable to the effective doses of other routinely used imaging agents at their recommended administered activity.",
        "There is a potential hazard from the additional radiation burden to study participants. The study also involves low dose CT scan(s) performed for attenuation correction of the PET scan(s) and for the anatomical correlation to allow more precise delineation of organs. • Chemical toxicity of copper-64 SAR-bis-P S M A and other constituents of the injection: The constituents (including excipients and stabilizers) of copper-64 SAR-bis-P S M A are at concentrations that are known to be safe for human use. The investigational product, as supplied, will result in a maximum quantity not exceeding 50 μg of peptide mass per participant for an administration.",
        "The administered peptide mass is therefore at least 192 times less than the dose of natCu-SAR-bisPSMA that has been demonstrated to be without any relevant toxicity in rodent toxicology studies (based on a 60 kg subject)24. The administered dose is well below the limits specified by the F D A for microdosing studies. • Intravenous administration: Minor pain may occur at the time of venipuncture and minor bruising may also result; however, patients are exposed to these same risks during routine care. Whilst extravasation of PET radiopharmaceuticals is possible, it is unlikely to be associated with adverse outcomes due to the very small mass of materials contained in the injection, and the small amount of radioactivity available for injection.",
        "Nevertheless, an indwelling canula can be established prior to investigational product administration to mitigate this risk."
      ],
      "chips": [
        "CLP04",
        "p23/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c023.jpg",
      "cap": "Protocol page 23 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 24 of 80 · Incidental findings and local clinical review",
      "audio": [
        "• Incidental findings of possible clinical significance: Appropriate diagnostic testing can assist in making a correct diagnosis and in providing additional information to guide patient management. An incorrect diagnosis (e.g., false negative or false positive results of the diagnostic tests) can have important consequences in patient management. An incidental finding is an imaging finding of potential health importance concerning the study participant, which is discovered while conducting imaging research, but is beyond the aims of the study. It is the responsibility of the local site or of the study Investigator to arrange for routine clinical review of study scans and clinical follow-up, as required.",
        "Policies for the communication of the incidental finding to the research participant should align with national regulations and customs. As part of the informed consent process, research participants will be informed about the possibility that incidental imaging findings may be detected, and about the pathway for handling such findings."
      ],
      "chips": [
        "CLP04",
        "p24/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c024.jpg",
      "cap": "Protocol page 24 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 25 of 80 · Primary objective · pelvic LN sensitivity and specificity",
      "audio": [
        "3 STUDY OBJECTIVES AND ENDPOINTS 3.1 Primary Objective and Endpoints The primary study objective and endpoints to be evaluated in this study are presented in Table 1. Table 1 Primary Study Objective and Endpoints Objective Endpoint To assess the diagnostic performance of copper-64-SAR- bisPSMA PET to detect regional nodal metastases. Independent primary endpoints for Day 1 and Day 2 PET: • Co-primary endpoint of sensitivity and specificity of copper-64-SAR- bisPSMA PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth. Abbreviations: lymph node=lymph node; PET=positron emission tomography;",
        "prostate cancer=prostate cancer 3.2 Secondary Objectives and Endpoints The secondary study objectives and endpoints to be evaluated in this study are presented in Table 2. Table 2 Secondary Study Objectives and Endpoints Objective Endpoint To investigate the safety and tolerability of copper-64-SAR- bisPSMA. Incidence and severity of treatment-emergent adverse events and SAEs following administration of copper-64 SAR-bis-P S M A. To assess the consistency of copper-64 SAR-bis-P S M A PET C T interpretations for the three central readers. Inter-reader reliability of agreement estimated with a multiple-reader kappa statistic.",
        "To assess the positive predictive value and negative predictive value of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes. Reported independently for Day 1 and Day 2 PET: • positive predictive value and negative predictive value of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth. To assess the ability of copper-64- SAR-bisPSMA PET to detect prostate cancer. Reported independently for Day 1 and Day 2 PET: • Sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the prostate, pelvic lymph nodes, extra-pelvic lymph nodes, bone and visceral/soft tissue regions compared to the Standard of Truth.",
        "To assess the ability of copper-64- SAR-bisPSMA PET to detect primary prostate cancer. Reported independently for Day 1 and Day 2 PET: • Sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the prostate gland compared to the Standard of Truth. To assess the diagnostic performance of copper-64-SAR- bisPSMA PET to detect regional nodal metastases without subregion matching. Reported independently for Day 1 and Day 2 PET: • Sensitivity and specificity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth, without the requirement of subregion (Left or Right) matching between copper-64 SAR-bis-P S M A PET and Standard of Truth.",
        "To determine the dosimetry, pharmacokinetics and excretion of copper-64-SAR- bisPSMA in participants in the pharmacokinetics substudy. The following parameters will be expressed from the PET scans: • Absorbed dose (mGy/megabecquerels) in organs. • Effective dose (mSv/megabecquerels). The following parameters will be expressed from blood:"
      ],
      "chips": [
        "Co-primary",
        "Sensitivity + specificity",
        "Pelvic LNs"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c025.jpg",
      "cap": "Protocol page 25 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Co-primary: sensitivity AND specificity of copper-64 PET for pelvic lymph-node prostate cancer versus histopathology, independently at Day 1 and Day 2."
      ]
    },
    {
      "title": "Page 26 of 80 · Secondary endpoints · PPV, NPV, region sensitivity",
      "audio": [
        "• Radioactivity concentration per collection time (megabecquerels/mL), maximum concentration, AUC0-t, AUC0-inf, kel, CL, Vz, Tmax and t1/2e. • Ratios of blood-to-plasma radioactivity at each time point/per participant. • Metabolic profiles (via high-performance liquid chromatography). The following parameters will be expressed from urine: • Radioactivity concentration per collection time (megabecquerels/mL), Aeinterval, TRmax, Rmax, Ae0-t%Fe0-t. • Metabolic profiles (via high-performance liquid chromatography). Abbreviations: %Fe0-t=percent of total dose recovered in urine; adverse event=adverse event; Ae0-t=cumulative amount of excreted radioactivity from time zero to the last collection interval;",
        "Aeinterval=total amount of excreted radioactivity per urine collection interval; AUC0-inf=area under the (activity-time) curve from time of dose administration to infinity; AUC0-t=area under the (activity-time) curve from time of dose to last measurable concentration; CL=total clearance; CT=computed tomography; kel=terminal elimination rate constant; lymph node=lymph node; negative predictive value=negative predictive value; PET=positron emission tomography; prostate cancer=prostate cancer; pharmacokinetics=pharmacokinetic; positive predictive value=positive predictive value; Rmax=rate max; serious adverse event=serious adverse event; t1/2e=elimination half-life; Tmax=time to reach the maximum concentration;",
        "TRmax=midpoint of the collection interval associated with the maximum observed excretion rate; Vz=total volume of distribution 3.3 Exploratory Objectives and Endpoints The exploratory study objectives and endpoints to be evaluated in this study are presented in Table 3. Table 3 Exploratory Study Objectives and Endpoints Objective Endpoint To compare the diagnostic performance of copper-64-SAR- bisPSMA PET to detect extra- prostatic prostate cancer to that of the baseline standard of care imaging. Reported independently for Day 1 and Day 2 PET: • Number and percentage of participants who are standard of care imaging pelvic lymph node negative, but copper-64 SAR-bis-P S M A PET pelvic lymph node positive and histopathology positive.",
        "• Number and percentage of participants who are copper-64-SAR- bisPSMA PET pelvic lymph node positive but standard of care imaging pelvic lymph node negative and histopathology negative. • Number and percentage of participants who are standard of care P S M A PET pelvic lymph node negative, but copper-64 SAR-bis-P S M A PET pelvic lymph node positive and histopathology positive. • Number and percentage of participants who are copper-64-SAR- bisPSMA PET pelvic lymph node positive but standard of care P S M A PET pelvic lymph node negative and histopathology negative. • Percentage of participants upstaged to N1 or M1 based on the copper-64- SAR-bisPSMA PET compared to the standard of care imaging.",
        "• Percentage of participants upstaged to N1 or M1 based on the copper-64- SAR-bisPSMA PET and confirmed as true positive by histopathology compared to the standard of care imaging. • Percentage of participants upstaged to N1 or M1 based on the copper-64- SAR-bisPSMA PET compared to the standard of care P S M A PET. • Percentage of participants upstaged to N1 or M1 based on the copper-64- SAR-bisPSMA PET and confirmed as true positive by histopathology compared to the standard of care P S M A PET. To assess the ability of copper-64- SAR-bisPSMA PET to detect distant metastatic disease (based on local assessment only). Reported independently for Day 1 and Day 2 PET:",
        "• positive predictive value of copper-64 SAR-bis-P S M A PET to detect distant metastatic prostate cancer within the extra-pelvic lymph nodes, bone and visceral/soft tissue regions compared to the Standard of Truth."
      ],
      "chips": [
        "CLP04",
        "p26/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c026.jpg",
      "cap": "Protocol page 26 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 27 of 80 · Exploratory endpoints · lesion count and upstaging",
      "audio": [
        "To assess the number and location of lesion(s) detected on copper-64- SAR-bisPSMA PET compared to baseline standard of care imaging. Reported independently for Day 1 and Day 2 PET: • Number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to standard of care imaging. • Number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to standard of care P S M A PET. To investigate the efficacy of copper-64 SAR-bis-P S M A as a function of baseline variables. Reported independently for Day 1 and Day 2 PET:",
        "• The efficacy parameters of copper-64 SAR-bis-P S M A PET will be assessed as a function of PSA at baseline, testosterone at baseline; Gleason Grade pre-prostatectomy, stage, grade, risk, germline information. To compare the detection of Day 1 and Day 2 copper-64 SAR-bis-P S M A PET. Difference in the total number of lesions detected per participant on Day 1 and Day 2. To explore the correlation between copper-64 SAR-bis-P S M A PET-positivity and true/false positivity. Reported independently for Day 1 and Day 2 PET: • Relationship between PET-positivity (S U V, tumor-to-background ratio), versus true/false positivity, and as a function of region and size. To explore the correlation between copper-64 SAR-bis-P S M A PET-positivity and aggressiveness of the disease.",
        "Reported independently for Day 1 and Day 2 PET: • Relationship between PET-positivity (S U V, tumor-to-background ratio) and Gleason Grade from the prostatectomy and pelvic lymph node dissection specimens. To compare lesion biodistribution and size parameters on Day 1 and Day 2 copper-64 SAR-bis-P S M A PET with standard of care P S M A PET. Reported independently for Day 1 and Day 2 PET: • Comparison of S U V and tumor-to-background ratio for copper-64 SAR-bis-P S M A PET versus standard of care P S M A PET. • Comparison of lesion sizes detected on copper-64 SAR-bis-P S M A PET versus standard of care P S M A PET. Abbreviations: lymph node=lymph node; prostate cancer=prostate cancer; PET=positron emission tomography; positive predictive value=positive predictive value;",
        "PSA=prostate-specific antigen; standard of care=standard of care; S U V=standardized uptake value; tumor-to-background ratio=tumor-to-background ratio"
      ],
      "chips": [
        "CLP04",
        "p27/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c027.jpg",
      "cap": "Protocol page 27 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 28 of 80 · Study design overview · 383, dual-timepoint PET, RP+PLND",
      "audio": [
        "4 STUDY DESIGN 4.1 Study Overview This is a prospective, non-randomized, single-arm, open-label, multi-reader, multi-center, Phase 3 study designed to evaluate the safety and diagnostic performance of copper-64-SAR- bisPSMA PET C T in participants with untreated, histopathology-confirmed prostate cancer, with high-risk features, who are proceeding to radical prostatectomy with pelvic lymph node dissection. A total of 383 participants will be enrolled in this study. A schematic diagram of the study design is presented in Figure 2. Details of study procedures during each visit are described in Table 5. Figure 2 Overall Study Design Abbreviations: CT=computed tomography;",
        "PET=positron emission tomography Participants who provide informed consent will undertake screening visit(s) (Visit 1) to determine their eligibility to participate in the study. The maximum screening period is 28 days and will include institutional standard of care imaging work up (e.g., MRI, CT, approved standard of care P S M A PET C T, with or without technetium-99m M D P bone scan). Eligible participants will receive a single administration of 200 megabecquerels of copper-64 SAR-bis-P S M A on Day 1 (Visit 2), followed by a PET C T scan mid-thigh to the skull vertex at 1 to 4 hours post dose (denoted as \"Day 1 PET\") and at 24 ±6 hours post dose (denoted as \"Day 2 PET\", Visit 3).",
        "Safety assessments will be completed following the administration of copper-64 SAR-bis-P S M A on Day 1, Day 2 and on Day 7 ±4 days (Visit 4) via a telephone call to capture any late-occurring adverse events. After completion of Visit 4, participants will proceed to radical prostatectomy with pelvic lymph node dissection. The specimens from the surgery will be processed and analyzed locally. The local pathologist evaluating the samples will be blinded to the copper-64- SAR-bisPSMA PET C T scans/results.",
        "For participants who do not proceed to radical prostatectomy with pelvic lymph node dissection, obtaining histopathology from excisional biopsy or laparoscopic pelvic lymph node dissection will be attempted, if this is clinically feasible prior to the participant undergoing any alternate intervention for prostate cancer to enable the assessment of the primary endpoint. For these participants the alternate intervention for prostate cancer will also be recorded. The histopathology results will be recorded within 90 days of Day 1 (Visit 5 / End of Study Visit). The screening institutional standard of care imaging will be interpreted by a single independent, blinded, central reader without access to the copper-64 SAR-bis-P S M A PET C T scans.",
        "The Day 1 and Day 2 copper-64 SAR-bis-P S M A PET C T scans will be interpreted locally and by three independent, blinded, central readers. Each reader will assess the scans visually for the presence of abnormal copper-64 SAR-bis-P S M A uptake in the pelvic lymph nodes, prostate gland, extra-pelvic lymph nodes, visceral/soft tissue and bone. If distant metastatic disease (lesion[s] within the extra-pelvic lymph nodes, bone or visceral/soft tissue regions) is detected on the copper-64 SAR-bis-P S M A PET C T per the local"
      ],
      "chips": [
        "Single-arm",
        "Blinded readers",
        "Blinded pathology"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c028.jpg",
      "cap": "Protocol page 28 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Open-label administration, but multi-reader blinded central review of the PET and a pathologist blinded to PET.",
        "SOC imaging (MRI/CT/approved PSMA PET ± bone scan) is read centrally without access to the investigational scans."
      ]
    },
    {
      "title": "Page 29 of 80 · PK substudy (n=10) and study duration",
      "audio": [
        "interpretation of the scans, histopathology (from image-guided biopsy or surgery) should be obtained if clinically feasible. 4.1.1 Pharmacokinetic Substudy This study will also include a pharmacokinetics substudy to provide a more complete assessment of biodistribution, elimination and dosimetry of copper-64 SAR-bis-P S M A in humans. Approximately 1 to 2 clinical sites will be selected to participate in the pharmacokinetics substudy. A subset of 10 participants enrolled at these sites will be included in the pharmacokinetics substudy. These participants will complete additional assessments on Day 1, Day 2, and Day 3 as per Table 6.",
        "4.2 Study Duration, Beginning and End of Study Participants are considered enrolled in the study once they are appropriately consented and screened, with eligibility verified by an Investigator. The expected study recruitment period is ~12 months. The total trial duration is ~16 months. The expected maximum study involvement for a participant is ~ 4 months including: • Screening period of up to 28 days; • On-study period of up to 90 days. The end of study is defined as the date of the final participant visit/contact. In addition, the Sponsor may decide to terminate the study at any time (see Section 5.5)."
      ],
      "chips": [
        "CLP04",
        "p29/80",
        "Full protocol text"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c029.jpg",
      "cap": "Protocol page 29 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 30 of 80 · Enrollment · inclusion and exclusion criteria",
      "audio": [
        "5 STUDY ENROLLMENT AND WITHDRAWAL 5.1 Study Population The target population for this study is untreated patients with a histopathology-confirmed diagnosis of prostate cancer with high-risk features, who are proceeding to radical prostatectomy with pelvic lymph node dissection. The inclusion and exclusion criteria are outlined below. Prospective approval of protocol deviations to recruitment and enrollment criteria, also known as protocol waivers or exemptions, is not permitted. 5.1.1 Inclusion Criteria Study candidates must meet all the following criteria to be eligible for the study: 1. At least 18 years of age. 2. Signed informed consent. 3. Untreated (i.e.",
        "no therapy for prostate cancer, including no androgen deprivation therapy [androgen deprivation therapy] of any duration), histologically confirmed adenocarcinoma of the prostate. 4. High-risk or greater prostate cancer defined by National Comprehensive Cancer Network Guidelines Version 1.202328 (clinical stage ≥T3a, or Grade Group ≥4, or PSA >20 ng/mL). 5. Patients electing to undergo radical prostatectomy with pelvic lymph node dissection. 6. For patients who have partners of childbearing potential: partner and/or patient must use a method of birth control with adequate barrier protection. 5.1.2 Exclusion Criteria Study candidates who meet any of the following criteria are not to be enrolled in the study: 1.",
        "Administration of any high energy (>300 KeV) gamma-emitting radioisotope within 5 physical half-lives prior to Day 1. 2. Known or expected hypersensitivity to copper-64 SAR-bis-P S M A or any of its components. 3. Patients with known predominant small cell or neuroendocrine prostate cancer. 4. History of other active malignancy within 3 years prior to Day 1, except for adequately treated non-melanoma skin cancer and superficial bladder tumors. 5. Any serious medical condition or extenuating circumstance which the Investigator feels may interfere with the procedures or evaluations of the study. 5.2 Enrollment and Method of Assigning Participants to Treatment Groups This is a non-randomized, single-arm study.",
        "After completing the screening period, participants who meet all inclusion criteria and no exclusion criteria, will be enrolled into the study and receive a single administration of copper-64 SAR-bis-P S M A. A total of 383 participants will be enrolled into the study. Each participant will be identified in the study by a Participant Number, that is assigned when the participant is first entered into Screening and is retained as the primary identifier for the participant throughout his entire participation in the study. The Participant Number consists of"
      ],
      "chips": [
        "≥18 y",
        "Adenocarcinoma",
        "≥T3a / GG≥4 / PSA>20"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c030.jpg",
      "cap": "Protocol page 30 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Exclude: high-energy (>300 keV) gamma emitter within 5 half-lives, hypersensitivity, predominant small-cell/neuroendocrine PC, other active malignancy <3 years (except treated NMSC / superficial bladder)."
      ]
    },
    {
      "title": "Page 31 of 80 · Screening identifiers and enrollment number",
      "audio": [
        "the Centre Number (as assigned by the Sponsor to the investigative site) with a sequential Participant Number suffixed to it, so that each participant is numbered uniquely across the entire database. Upon signing the informed consent form (informed consent form), the participant is assigned to the next sequential Participant Number available to the Investigator.",
        "5.3 Study Blinding In this study all participants will receive copper-64 SAR-bis-P S M A and thus blinding of To allow for a non-biased assessment of the copper-64 SAR-bis-P S M A PET C T scans, the three independent, central readers will be blinded to the participants-specific information (identifiers, medical history, laboratory results), the timepoint of the scan (i.e., Day 1 or Day 2), results of evaluations as part of the Standard of Truth, results of other imaging modalities, final diagnosis / outcome, and details of the protocol.",
        "To allow for the non-biased assessment of the histopathology Standard of Truth, the Investigator must ensure that the local pathologist evaluating the samples for the primary endpoint is blinded to the copper-64 SAR-bis-P S M A PET C T scans/results. The screening standard of care imaging will be interpreted by a single, independent, central reader (distinct from the three readers evaluating the copper-64 SAR-bis-P S M A PET C T scans) who will be blinded to the copper-64 SAR-bis-P S M A PET C T scans/results, participants-specific information (identifiers, medical history, laboratory results), results of evaluations as part of the Standard of Truth, results of other imaging modalities, final diagnosis / outcome, and details of the protocol.",
        "This is to allow for a non-biased comparison of the number/location of lesions identified on the standard of care imaging and copper-64 SAR-bis-P S M A PET C T. 5.4 Participant Withdrawal and Replacement 5.4.1 Screening Failures and Rescreening 5.4.1.1 Screen Failures Screen failures are those participants who do not meet the study eligibility criteria. For participants who are considered a screen failure, the reason for screen failure will be entered on the Screening Log. The demographic information, informed consent, inclusion/exclusion and End of Study Visit pages must also be completed for screen failure participants.",
        "If the participant experiences an serious adverse event during the screening period, this information must also be entered (see Section 10.3 for serious adverse event reporting details). 5.4.1.2 Rescreening Participants who fail screening assessments may be re-screened. Rescreening and the specific assessments to be repeated are to be discussed on a case-by-case basis with the Medical Monitor. In the case of rescreening, a new participant number is to be assigned. Participants may only participate in the study once. 5.4.2 Withdrawal of Consent and Discontinuation of Participants from the Study Participants will be informed that they have the right to withdraw consent or discontinue from the study at any time for any reason, without prejudice to their medical care."
      ],
      "chips": [
        "CLP04",
        "p31/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c031.jpg",
      "cap": "Protocol page 31 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 32 of 80 · Withdrawal, discontinuation, and replacement",
      "audio": [
        "Following enrolment into the study, if a participant is discontinued or withdraws consent for any reason, whether related to the investigational product or not, the participant will be considered an early-discontinued participant. The reason for study discontinuation or withdrawal of consent is to be documented in the participants' source documents and electronic Case Report Form (electronic case report form). 1. Withdrawal of Consent to Participate in the Study Withdrawal of consent occurs only when a participant (or their substitute decision maker/person responsible) does not want to participate in the study any longer, does not want any further study related visits or assessments and does not want any further study related contact.",
        "The Sponsor will continue to retain and use all research results that have already been collected for the study evaluation up until the point of withdrawal of consent. All biological samples that have already been collected may be retained and analyzed at a later date (or as required by local regulations). If a participant withdraws consent, the Investigator should make an effort to determine the primary reason for this decision (however the participant is not required to provide a reason) and record this information along with the withdrawal of consent discussion, which should be documented in the patient notes.",
        "With the participants consent, the Investigator may perform some final safety evaluations to ensure that there are no safety risks associated with the participants withdrawal. Further attempts to contact the participant for study related discussions are not allowed unless safety findings require communication or follow-up. 2. Investigator Decision to Discontinue the Participant The Investigator also has the right to discontinue participants from the study for any of the following reasons: • Participant non-adherence to protocol requirements; • Any other reason based upon the medical judgment of the Investigator.",
        "The Investigator will make every effort to ensure that early-discontinued participants who have received investigational product complete safety follow-up assessments (refer to Schedule of Assessments). 3. Lost to Follow-up. Reasonable efforts will be made to keep in contact with enrolled study participants. Participants who have not responded to at least 3 such attempts for follow-up may be deemed 'lost to follow-up'. Efforts made to contact study participants must be documented in the participant's file. 5.4.2.1 Individual Stopping Rules As copper-64 SAR-bis-P S M A will be administered as a bolus IV injection on a single occasion, there are no individual stopping rules.",
        "5.4.3 Pregnancy There is no information about the effects that copper-64 SAR-bis-P S M A could have on the development of the fetus in humans. Therefore, it is important that female partners of sexually active participants, do not become pregnant during the study and agree to use adequate contraception. Participants will be instructed that known or suspected pregnancy occurring during the study in female partners, should be confirmed and reported to the Investigator."
      ],
      "chips": [
        "CLP04",
        "p32/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c032.jpg",
      "cap": "Protocol page 32 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 33 of 80 · Pregnancy of a partner and contraception",
      "audio": [
        "The Investigator should also be notified of a pregnancy of a female partner of the participant occurring during the study. In the event that a female partner of a participant is found to be pregnant whilst the participant is enrolled in the study, the pregnancy will be followed, and the status of mother and child will be reported to the Sponsor (or delegate). A Pregnancy Report Form will be completed and submitted for any pregnancy occurring in female partners of participants from enrolment until study completion.",
        "5.4.3.1 Acceptable Forms of Contraception Sexually active male participants with female partners of childbearing potential are eligible to participate if they agree to follow one of the following methods of contraception consistently, starting from Screening, during the study and for at least 5 days after the last dose of copper-64- SAR-bisPSMA: • Are abstinent from penile-vaginal intercourse as their usual and preferred lifestyle (abstinent on a long-term and persistent basis) and agree to remain abstinent; • Are sterilized (with the appropriate post-vasectomy documentation of the absence of sperm in the ejaculate);",
        "• Agree to use a male condom and have their partner use a contraceptive method with a failure rate of <1% per year as described below when having penile-vaginal intercourse with a woman of childbearing potential who is not currently pregnant, and who agrees to the use of a condom by her partner. Examples of acceptable contraception include: • Established use of oral, injected or implanted hormonal methods of contraception; • Placement of an intrauterine device or intrauterine system. Examples of non-acceptable methods of contraception include: • Condoms alone or double barrier; • Periodic abstinence (e.g., calendar, ovulation, symptothermal, post ovulation); • Withdrawal; • Spermicide.",
        "Sexually active male participants with a pregnant or breastfeeding partner must agree to remain abstinent from penile-vaginal intercourse; or use a male condom during each episode of penile penetration during the study. 5.4.3.2 Sperm Donation Male participants must refrain from donating sperm starting from screening, during the study and for at least 5 days after the administration of copper-64 SAR-bis-P S M A. 5.4.4 Replacement of Participants Early discontinued participants may be replaced if needed to achieve the target sample size. Participants who withdraw prior to receiving investigational product or prior to undergoing any copper-64 SAR-bis-P S M A PET C T will be replaced.",
        "The Sponsor should be contacted if the site intends to withdraw a patient if feasible, or immediately after withdrawal to discuss the possibility of a replacement."
      ],
      "chips": [
        "CLP04",
        "p33/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c033.jpg",
      "cap": "Protocol page 33 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 34 of 80 · Premature termination and Safety Review Committee",
      "audio": [
        "5.5 Premature Termination or Suspension of Study The study can be temporarily suspended or prematurely terminated at any time for any reason by the Sponsor if there is sufficient reasonable cause. Written notification, documenting the reason for study suspension or termination, will be provided by the Sponsor to the Investigator, and regulatory authorities. The Investigator may discontinue their study site from participation at any time by way of written notification to the Sponsor indicating their reason for discontinuation. Should this be necessary, the participants should be seen as soon as possible to perform an End of Study Visit.",
        "The Investigator may be informed of additional procedures to be followed in order to ensure that adequate consideration is given to the protection of the participant's interests. As directed by the Sponsor, all study materials must be collected and all eCRFs completed to the greatest extent possible. If the study is prematurely terminated or suspended, or if the Investigator discontinues their site from the study, the Investigator will be responsible for promptly informing the institutional review board (I R B) and will provide the reason(s) for the termination, suspension or site discontinuation. The Sponsor will be responsible for notifying the appropriate regulatory authorities. Circumstances that may warrant termination or suspension include, but are not limited to:",
        "• Determination of unexpected, significant, or unacceptable risk to participants; • Demonstration of efficacy that would warrant stopping; • Insufficient compliance to protocol requirements; • Data that are not sufficiently complete and/or evaluable; • Sponsor terminates the study for administrative, financial or other reasons. 5.6 Safety Review Committee A Safety Review Committee is not deemed necessary for this study based on what is known with regard to the safety of copper-64 SAR-bis-P S M A from other studies. The Medical Monitor will periodically review laboratory and adverse event data and will review serious adverse event reports in real time. Any clinically important findings will be shared with the Investigators."
      ],
      "chips": [
        "CLP04",
        "p34/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c034.jpg",
      "cap": "Protocol page 34 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 35 of 80 · Investigational product · 200 MBq IV bolus",
      "audio": [
        "6 INVESTIGATIONAL PRODUCT Refer to the Pharmacy Manual for further information on supply, storage, dispensing, and disposition of the investigational product. 6.1 Dosage and Formulation The investigational product administered in this study is copper-64-labelled SAR-bisPSMA (copper-64- SAR-bisPSMA). The Sponsor is developing this radiopharmaceutical for the diagnosis (PET imaging) of P S M A-expressing prostate cancer. copper-64 SAR-bis-P S M A has three basic components: (a) the radionuclide (copper-64) chelated by (b) bis-COSAR (a bifunctional metal chelator) which is linked to (c) two urea based small molecule inhibitors of P S M A. copper-64 SAR-bis-P S M A will be administered as a single bolus IV injection.",
        "copper-64 SAR-bis-P S M A will be formulated as a sterile solution for IV injection suitable for human use. copper-64 SAR-bis-P S M A is considered an investigational product by the F D A, and as such will be handled under controlled conditions for use in clinical trials. copper-64 SAR-bis-P S M A is manufactured under relevant regulatory requirements and applicable Good Manufacturing Practice standards. Details of the investigational product administration are found in Table 4.",
        "Table 4 Investigational Product to be Administered Route of administration Dose (megabecquerels) Dose Frequency copper-64 SAR-bis-P S M A Intravenous Single Bolus Injection 200 megabecquerels Single administration on Day 1 6.2 Supply, Packaging and Labeling copper-64 SAR-bis-P S M A will be manufactured, packaged, and labelled on behalf of the Sponsor and will be provided with appropriate documentation for human use. The release of each final batch of copper-64 SAR-bis-P S M A for human use is subject to the quality control measures (product specifications) established by the Sponsor, with quality control testing undertaken by the manufacturing facilities.",
        "Available analytical data for each batch will be reviewed by qualified personnel at the facility to ensure suitability for human administration. 6.3 Storage and Stability copper-64 SAR-bis-P S M A will be stored in a secure location (i.e., limited access area). The Investigator (or suitably qualified designee) agrees not to dispense the copper-64-SAR- bisPSMA from, nor store them at, any site other than the approved study sites as per local regulations. Once received at the clinical site, copper-64 SAR-bis-P S M A will be stored in a secure location at room temperature with an expiration time designated on the label. copper-64 decays to stable (non-radioactive) daughter products."
      ],
      "chips": [
        "200 MBq IV",
        "±10%",
        "Single bolus"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c035.jpg",
      "cap": "Protocol page 35 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "200 MBq as a single IV bolus. Injected activity must be within ±10% of prescribed."
      ]
    },
    {
      "title": "Page 36 of 80 · Dispensing, ±10% activity, radiation protection",
      "audio": [
        "6.4 Dispensing and Administration copper-64 SAR-bis-P S M A should be received, used, and administered only by suitably qualified persons at the study center. The receipt, storage, use, transfer, and disposal of copper-64-SAR- bisPSMA is subject to the regulations and/or appropriate license of the study center. copper-64 SAR-bis-P S M A should be handled by the user in a manner which satisfies both radiation safety and pharmaceutical quality requirements. Appropriate aseptic precautions should be taken. copper-64 SAR-bis-P S M A will be administered as a bolus IV injection under the supervision of the study Investigator or medically qualified delegate at 200 megabecquerels per administration of copper-64-SAR- bisPSMA.",
        "The Investigator or medically qualified delegate should ensure that the injected radioactivity is within ±10% of the prescribed activity. 6.4.1 Radiation protection copper-64 SAR-bis-P S M A is a radiopharmaceutical, therefore should only be used by personnel who are qualified by training and experience in the safe use and handling of radionuclides and whose experience and training have been approved by the appropriate governmental agency authorized to license the use of radionuclides. Radiation protection precautions must be taken in accordance with national and local regulations. Full details of restrictions and guidelines to the participant, friends, family and caregivers may be described in the informed consent form.",
        "6.5 Compliance and Accountability The Investigator (or designee) is responsible for investigational product accountability, reconciliation, and record maintenance at the investigational site. In accordance with all applicable regulatory requirements, the Investigator or designated site staff must maintain of investigational product received from the Sponsor, and the amount administered to participants, and any amount accidentally or deliberately destroyed will be documented. 6.5.1 Storage of Supplies Study materials will be stored by the study personnel according to the documentation provided with the study materials. The Sponsor reserves the right to inspect the investigational product storage area before and during the study.",
        "6.5.2 Control of Supplies Dispensing of the investigational product will be carefully recorded on appropriate monitoring visits. The accountability logs should include dates, quantities, batch numbers, and any unique pack numbers assigned to the investigational product and/or participant. The accountability logs will also include general details related to the study including the protocol, Sponsor and the Investigator."
      ],
      "chips": [
        "CLP04",
        "p36/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c036.jpg",
      "cap": "Protocol page 36 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 37 of 80 · Accountability, hydration, no fasting, release",
      "audio": [
        "6.5.3 Disposition of Supplies The study monitor will review the investigational product accountability logs which detail the disposition of used and unused investigational products by the site. 6.6 Investigational Product Administration 6.6.1 Participant Preparation Prior to Dosing There is no need for the participant to fast before the administration of copper-64 SAR-bis-P S M A. Instruct the participant to drink a sufficient amount of water to ensure adequate hydration prior to administration of copper-64 SAR-bis-P S M A and to continue to drink and void frequently following administration to reduce radiation exposure, particularly during the first hour after administration.",
        "6.7 Participant Release and Radioprotection Precautions Release of participants following administration of copper-64 SAR-bis-P S M A will be in accordance with any applicable regulations at the study center."
      ],
      "chips": [
        "CLP04",
        "p37/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c037.jpg",
      "cap": "Protocol page 37 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "No fasting. Hydrate before injection and void frequently, especially the first hour, to cut bladder dose."
      ]
    },
    {
      "title": "Page 38 of 80 · Concomitant meds · ADT and neoadjuvant therapy prohibited",
      "audio": [
        "7 CONCOMITANT MEDICATIONS Any medication or vaccine (including over the counter or prescription medicines, vitamins, and/or herbal supplements) that the participant receives during the study must be recorded on the electronic case report form along with: • Reason for use; • Dates of administration including start and end dates; • Dosage information including dose and frequency. If the use of any concomitant treatment becomes necessary (e.g., for treatment of an adverse event), the treatment and administration details must be recorded in the source documents and the electronic case report form. 7.1 Required Treatments Upon completion of Visit 4, participants will proceed to radical prostatectomy with pelvic lymph node dissection (see Section 8.4).",
        "For participants who do not proceed to radical prostatectomy with pelvic lymph node dissection, obtaining histopathology from excisional biopsy or laparoscopic pelvic lymph node dissection will be attempted, if this is clinically feasible. This is to be completed prior to the participant undergoing any alternate intervention for prostate cancer. If pelvic lymph node dissection (either as part of the radical prostatectomy or excisional biopsy or laparoscopic pelvic lymph node dissection) is not completed, this will be recorded as a protocol deviation. 7.2 Permitted Treatments All standard of care treatments are permitted throughout the duration of a participant's involvement in the study with restrictions and exceptions as outlined in Section 7.3.",
        "7.3 Prohibited Treatments From enrolment into the study until completion of radical prostatectomy with pelvic lymph node dissection (or excisional biopsy or laparoscopic pelvic lymph node dissection), the following interventions are strictly prohibited: • androgen deprivation therapy; • Any investigational neoadjuvant agent; • Any therapeutic intervention for prostate cancer; • Any investigational therapy. Patients who are known to require prohibited treatment should not be considered for participation in the study. The Medical Monitor must be notified of all prohibited medications/treatments administered to any participant, in order to assess the participant's eligibility to continue in the study."
      ],
      "chips": [
        "No ADT",
        "No neoadjuvant"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c038.jpg",
      "cap": "Protocol page 38 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Until RP+PLND is done: no ADT, no investigational neoadjuvant, no other PC therapy."
      ]
    },
    {
      "title": "Page 39 of 80 · Study procedures header",
      "audio": [
        "8 STUDY PROCEDURES AND ASSESSMENTS The following sections describe the study procedures and assessments to be performed during the study. Unplanned visits not specified by the protocol or unscheduled assessments may be performed as clinically indicated at the discretion of the Investigator; the associated data should be recorded on the relevant electronic case report form in support of an adverse event diagnosis or lesion assessments. Study procedures and their timing are summarized in the schedule of assessment tables. Protocol waivers or exemptions are not allowed. Refer to Table 5 for the schedule of assessments for all participants and additional assessments in Table 6 for participants in the pharmacokinetics substudy."
      ],
      "chips": [
        "CLP04",
        "p39/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c039.jpg",
      "cap": "Protocol page 39 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 40 of 80 · Schedule of assessments · all participants (Table 5)",
      "audio": [
        "Table 5 Schedule of Assessments - All Participants Screening copper-64 SAR-bis-P S M A Imaging Safety Call (Proceed to radical prostatectomy with pelvic lymph node dissection after this visit1) End of Study Visit (Post-Histopathology Follow-up)2 Visit 1 2 3 4 5 Study Day (Window) Day-28 to 1 Day 1 Day 2 Day 7 (±4 days) Until Day 90 Pre Dose Post Dose Informed Consent X Inclusion/Exclusion X Demographics X Body Weight X X Height X Medical and Medication History X Germline Information (If Available) X adverse events & Concomitant Medications X X X X X3 Hematology and Biochemistry4 X X5 eGFR (CKD-EPI) in mL/min X X6 Biochemical Markers (Total PSA, Testosterone) X Vital Signs (Blood Pressure, Heart Rate)7 X X X (pre-imaging) X Duplicate 12-Lead ECG X X8 Urinalysis9 X X10 (pre-imaging) Institutional standard of care Imaging11 X copper-64 SAR-bis-P S M A Dose X copper-64 SAR-bis-P S M A PET/CT12 X (1 to 4h post dose) X (24 ±6h post dose) Histopathology Results X (primary prostate) X (prostate, pelvic lymph nodes and distant metastasis) radical prostatectomy and pelvic lymph node dissection Details X Alternate prostate cancer Intervention (If Applicable)13 X Abbreviations:",
        "adverse event=adverse event; CKD-EPI=Chronic Kidney Disease Epidemiology Collaboration; CT=computed tomography; eGFR=estimated glomerular filtration rate; ECG=electrocardiogram; prostate cancer=prostate cancer; PET=positron emission tomography; pelvic lymph node dissection=pelvic lymph node dissection; PSA=prostate-specific antigen; radical prostatectomy=radical prostatectomy; standard of care="
      ],
      "chips": [
        "CLP04",
        "p40/80",
        "Full protocol text"
      ],
      "visual": "clarify",
      "image": "assets/protocol/clp/c040.jpg",
      "cap": "Protocol page 40 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 41 of 80 · Table 5 footnotes · SOC imaging and visit windows",
      "audio": [
        "standard of care 1 Upon completion of Visit 4, participants will proceed to radical prostatectomy with pelvic lymph node dissection (see Section 8.4). For participants who do not proceed to radical prostatectomy with pelvic lymph node dissection, obtaining histopathology from excisional biopsy or laparoscopic pelvic lymph node dissection will be attempted, if this is clinically feasible. This is to be completed prior to the participant undergoing any alternate intervention for prostate cancer.",
        "2 Visit 5 is to be completed after the participant has undergone radical prostatectomy with pelvic lymph node dissection (or excisional biopsy or laparoscopic pelvic lymph node dissection) and the histopathology results for pelvic lymph nodes (prostate and distant metastasis, if appliable) are available. Visit 5 may be completed via a telephone call. 3 If an adverse event is experienced, additional safety laboratory assessments may be completed as an unscheduled visit. 4 Hematology: hemoglobin, hematocrit, red blood cell count, white blood cell count, platelet count, absolute neutrophil count, and absolute lymphocyte count. Biochemistry:",
        "albumin, total protein, random blood glucose, sodium, potassium, blood urea nitrogen or urea, creatinine, calcium, uric acid, aspartate aminotransferase, alanine aminotransferase, and total bilirubin. 5 To be completed within 9 days after the copper-64 SAR-bis-P S M A administration. 6 To be completed within 9 days after the copper-64 SAR-bis-P S M A administration. For the calculation of Body Surface Area, height as assessed at Screening, and weight as assessed on Day 1 is to be used. 7 To be performed after the participant has rested comfortably in a seated position with feet on the floor or in a supine position for at least 3 minutes. 8 Post-dose ECG to be performed at 30 minutes (±10 minutes) post copper-64 SAR-bis-P S M A administration.",
        "9 Urinalysis to include determination of protein, glucose and leukocytes (dipstick test). 10 To be completed within 9 days after the copper-64 SAR-bis-P S M A administration. If urinalysis is completed during the Day 2 visit, it is to be completed prior to the PET C T. 11 Institutional standard of care imaging is defined as any single modality or a combination of modalities allowing the assessment of visceral organs, soft tissue, and bone in the chest, abdomen and pelvis (e.g., MRI, CT, approved standard of care P S M A PET C T, with or without technetium-99m M D P bone scan). If the required scans were performed within 60 days of Day 1, these scans will serve as baseline standard of care imaging and do not need to be repeated at screening.",
        "If the required scans are not available, the participant will undergo the missing scan(s) during the Screening period. A washout period of at least 72 hours must be applied between the administration of approved P S M A PET tracers and copper-64 SAR-bis-P S M A. 12 A whole-body low dose CT and PET scan will be acquired from the mid-thigh to the skull vertex. Participants to void their bladder immediately before the acquisition of the PET C T scan. 13 If a participant's planned procedure (radical prostatectomy with pelvic lymph node dissection) for prostate cancer changes, the alternate prostate cancer intervention and reason for the change will be recorded in the electronic case report form."
      ],
      "chips": [
        "CLP04",
        "p41/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c041.jpg",
      "cap": "Protocol page 41 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 42 of 80 · PK substudy schedule (Table 6) · blood, urine, extra PET",
      "audio": [
        "Table 6 Schedule of Assessments - pharmacokinetics Substudy Participants Only Study Day Day 1 Day 2 Day 3 Time (window) Pre Dose (T -1h to T0) T01 to T5min T0 +10min (±2min) T0 +30min (±5min) T0 +1h (±15min) T0 +2h (±15min) T0 +4h (±30min) T0 +6h (±30min) T0 +24h (±2h) T0 +48h (±2h) Blood & Plasma sample2 X X X X X X X X X X Urine collection3 X (T0 to T2h) X (T2h to T4h) X (T4h to T6h) copper-64 SAR-bis-P S M A PET/CT4 X X X X X adverse events & Concomitant Medications X Abbreviations: adverse event=adverse events; CT=computed tomography; h=hour; min=minute; PET=positron emission tomography; T=time 1 T0 is the time of copper-64 SAR-bis-P S M A administration. 2 Blood sampling is to be completed before the PET C T acquisition (where applicable).",
        "See Section 8.7.1 for details. 3 Urine samples will be collected over the following intervals: 0 to 2h, 2 to 4h, 4 to 6h post injection of copper-64 SAR-bis-P S M A. Participants to void their bladder at the end of the collection windows. See Section 8.7.1 for details. 4 Participants to void their bladder immediately before the acquisition of the PET C T scan."
      ],
      "chips": [
        "CLP04",
        "p42/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c042.jpg",
      "cap": "Protocol page 42 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 43 of 80 · Demographics, medical history, germline if available",
      "audio": [
        "8.1 Demographics and Baseline Health Record 8.1.1 Baseline Demographics Participant demographics will be recorded, including year of birth, race, ethnicity. 8.1.2 Body Weight and Height Body weight (in kg) (wearing light clothes, no shoes) and height (in cm) will be measured (rounded to one decimal place). 8.1.3 Medical and Medication History A complete prostate medical history will be obtained at screening and the following disease characteristics will be recorded, including date of initial diagnosis, tumor type, Gleason Score, International Society of Urological Pathology (ISUP) Grade Group, number of positive cores and locations of positive cores, clinical TNM staging and risk category (high or very high risk).",
        "Other clinically relevant medical history will also be collected. This should include any past and/or current medical conditions that, in the opinion of the Investigator, are clinically relevant regardless of whether it has been resolved, any prior malignancies other than prostate cancer or concurrent or past conditions that can change pelvic anatomy or cause lymphadenopathies (e.g., viral, bacterial or parasitic infections). Medication history (including vaccine, over the counter or prescription medicines, vitamins, and/or herbal supplements) that the participant is receiving within 14 days before signing informed consent must be recorded on the electronic case report form along with: • Reason for use; • Dates of administration including start and end dates;",
        "• Dosage information including dose and frequency. 8.1.4 Germline Information If available, germline information will be collected, including date of test and result (pathogenic germline variant, variant of uncertain clinical significance or benign). Details of any specific gene variant will also be collected where specified. 8.2 Safety Assessments 8.2.1 Vital Signs Vital signs measurements will include systolic and diastolic blood pressure and heart rate. Wherever possible, vital signs will be recorded after the participant has rested comfortably in a seated position with feet on the floor or in a supine position for at least 3 minutes (the position must be the same for a particular participant pre and post dose) and using consistent methods between participants.",
        "Isolated clinically significant observations, as deemed by the Investigator, will be recorded as adverse events."
      ],
      "chips": [
        "CLP04",
        "p43/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c043.jpg",
      "cap": "Protocol page 43 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 44 of 80 · Safety labs, ECG, vital signs",
      "audio": [
        "8.2.2 Duplicate 12-lead Electrocardiogram Duplicate 12-lead ECGs will be performed after the participant has rested comfortably in the supine position for at least 3 minutes. The following parameters will be assessed and recorded on the electronic case report form: heart rate, PR, RR, QRS, QT, QTcB (Bazett formula), QTcF (Fridericia formula). The Investigator (or a qualified delegate at the investigational site) will interpret the ECG using one of the following categories: within normal limits, abnormal but not clinically significant, or abnormal and clinically significant. Abnormal findings will also be specified on the electronic case report form. Clinically significant observations, as deemed by the Investigator, will be recorded as adverse events.",
        "8.2.3 Clinical Laboratory Assessments Clinical laboratory samples will be analyzed by the site's local laboratory. Blood samples will be collected for the following tests: • Hematology: Hemoglobin, hematocrit, red blood cell count, white blood cell count, platelet count, absolute neutrophil count, and absolute lymphocyte count. • Biochemistry: albumin, total protein, random blood glucose, sodium, potassium, blood urea nitrogen or urea, creatinine, calcium, uric acid, aspartate aminotransferase, alanine aminotransferase, and total bilirubin. Time of last meal is to be recorded on the electronic case report form. • Estimated glomerular filtration rate (eGFR):",
        "will be calculated from creatinine using the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI) formula and reported as mL/min. To convert mL/min/1.73m2 to mL/min, multiply by the individual's Body Surface Area (calculated using the Mosteller formula) and divide by 1.73. • Biochemical markers: total PSA and testosterone. Urine samples will be collected for the following tests: • Urinalysis: to include determination of protein, glucose and leukocytes (dipstick test). In the event of an unexplained, clinically significant abnormal laboratory test result, the test should be repeated and followed up until it has returned to the normal range and/or an adequate explanation of the abnormality is found.",
        "During the study, all out of range (abnormal) laboratory values (except for total PSA and testosterone), must be evaluated and commented on by the Investigator (or a qualified delegated observer at the investigational site) for clinical significance using one of the following categories: within normal limits, abnormal but not clinically significant, or abnormal and clinically significant.",
        "Clinically significant observations will be recorded as adverse events unless they are associated with a diagnosis that itself has been reported as an adverse event (e.g., raised white cells and fever associated with an infection - in this case the infection is the adverse event, and the lab value and fever are signs and symptoms of the adverse event and should not be reported separately). 8.3 Imaging Assessments For a given participant, the same PET scanner is preferred to be used to acquire the approved standard of care P S M A PET C T (if this scan is part of the institutional standard of care imaging work up at screening), and the Day 1 and Day 2 copper-64 SAR-bis-P S M A PET C T. If this is not possible, a scanner of the same make and model is requested. If neither are possible any standard of care P S M A PET"
      ],
      "chips": [
        "CLP04",
        "p44/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c044.jpg",
      "cap": "Protocol page 44 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 45 of 80 · SOC imaging and 64Cu PET/CT acquisition",
      "audio": [
        "or other standard of care scan as per each institutional standard is accepted. The Day 1 and Day 2 copper-64- SAR-bisPSMA PET/CTs are required to be done on the same scanner. 8.3.1 Institutional standard of care Imaging Institutional standard of care imaging will be performed as per the clinical study site's standard procedures. All participants are required to have baseline standard of care imaging which is defined as any single modality or a combination of modalities allowing the assessment of visceral organs, soft tissue, and bone in the chest, abdomen and pelvis (e.g., MRI, CT, approved standard of care P S M A PET C T, with or without technetium-99m M D P bone scan).",
        "If the required scans were performed within 60 days of Day 1, these scans will serve as baseline standard of care imaging and do not need to be repeated at screening. If the required scans are not available, the participant will undergo the missing scan(s) during the Screening period. A washout period of at least 72 hours must be applied between the administration of approved P S M A PET tracers and copper-64 SAR-bis-P S M A. The imaging modality, imaging type, date of acquisition, tracer used (if applicable), contrast used (if applicable), and the local interpretation for the relevant regions will be recorded on the electronic case report form.",
        "For the central image analysis of the institutional standard of care imaging, the site will transfer the images in a Digital Imaging and Communications in Medicine (DICOM) format to the central imaging core lab with de-identification of participant specific information as specified in the protocol-specific site imaging manual. 8.3.1.1 Institutional standard of care Imaging Central Interpretation An independent imaging core lab will receive and evaluate the standard of care images. The scans will be interpreted by a single independent, blinded, central reader without access to the copper-64-SAR- bisPSMA PET C T scans (refer to Section 5.3 for further detail on blinding).",
        "The reader will assess the same regions/subregions as described in Table 7 and record the number of lesion(s). The size, S U V and tumor-to-background ratio will be recorded for up to 5 lesions per region. For details on the interpretation of the standard of care imaging refer to the Imaging Review Charter. Note: The result of the central review of the study scans will not be provided to the clinical site. 8.3.2 copper-64 SAR-bis-P S M A PET C T The site will conduct the copper-64 SAR-bis-P S M A PET C T scans according to the protocol-specific site imaging manual, which contains details of scan acquisition, processing parameters and submission procedures. Participants will be asked to void immediately prior to each scan acquisition.",
        "After voiding, a whole-body low dose CT and PET scan will be acquired from the mid-thigh to the skull vertex. The date, start of scan acquisition, and scanner used will be recorded on the electronic case report form. All copper-64 SAR-bis-P S M A PET C T scans will be transferred in DICOM format to the central imaging core lab with anonymization of participant specific information as specified in the protocol-specific site imaging manual."
      ],
      "chips": [
        "CLP04",
        "p45/80",
        "Full protocol text"
      ],
      "visual": "dualpet",
      "image": "assets/protocol/clp/c045.jpg",
      "cap": "Protocol page 45 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 46 of 80 · Local and central blinded PET interpretation",
      "audio": [
        "8.3.2.1 copper-64 SAR-bis-P S M A PET C T Local Interpretation The Day 1 and Day 2 copper-64 SAR-bis-P S M A PET C T scans will be interpreted locally by an appropriately qualified Investigator in a non-blinded fashion. The reader will be required to evaluate the scans individually for the presence of abnormal copper-64 SAR-bis-P S M A uptake in the pelvic lymph nodes, prostate gland, extra-pelvic lymph nodes, visceral/soft tissue and bone. A positive lesion will be defined as uptake of copper-64 SAR-bis-P S M A that is greater than local background activity and judged by the reader to be consistent with prostate cancer. The number of PET-positive lesion(s) in each subregion will be documented (See Table 7).",
        "CT scans from the copper-64 SAR-bis-P S M A PET C T will be available to the reader to guide anatomical localization. Table 7 Regions and Subregions Assessed Regions: Subregion(s): 1. Prostate Gland (including seminal vesicles) 2. Pelvic lymph node Right Pelvic, Left Pelvic, Other 3. Extra-Pelvic lymph node Retroperitoneal, Supradiaphragmatic, Other 4. Bone Pelvic Bone Right, Pelvic Bone Left, Skull, Clavicle Right, Clavicle Left, Scapula Right, Scapula Left, Sternum, Ribcage Right, Ribcage Left, Spine, Extremities, Other 5.",
        "Visceral/soft tissue Lung/pleura, Liver, Other If distant metastatic disease (lesion[s] within the extra-pelvic lymph nodes, bone or visceral/soft tissue regions) is detected on the copper-64 SAR-bis-P S M A PET C T, histopathology (from image-guided biopsy or surgery) should be obtained if clinically feasible (see Section 8.5.2). The specimens will be processed and analyzed locally. Any incidental findings on the copper-64 SAR-bis-P S M A PET C T scan(s) that are of potential clinical relevance and are not directly associated with the objectives of the protocol should be evaluated and handled by the Investigator per standard medical/clinical judgment.",
        "8.3.2.2 copper-64 SAR-bis-P S M A PET C T Central Interpretation An independent imaging core lab will receive and evaluate the copper-64 SAR-bis-P S M A PET C T scans. The Day 1 and Day 2 copper-64 SAR-bis-P S M A PET C T scans will be interpreted by three different independent blinded readers in a random order at separate reading sessions. Central readers will be blinded as described in Section 5.3. The readers will be required to evaluate the Day 1 and Day 2 scans individually for the presence of abnormal copper-64 SAR-bis-P S M A uptake in the pelvic lymph nodes, prostate gland, extra-pelvic lymph nodes, visceral/soft tissue and bone.",
        "The same definition of a copper-64 SAR-bis-P S M A PET-positive lesion will be applied as for the local interpretation and the number of PET-positive lesion(s) in each subregion will be documented (refer to Section 8.3.2.1 for the definition of a PET-positive lesion and list of regions and subregions). A subregion/region will be considered positive for prostate cancer if it contains at least one PET-positive lesion and negative for prostate cancer if no lesion is recorded. CT scans from the copper-64-SAR- bisPSMA PET C T will be available to the reader to guide anatomical localization. Each central reader will also record the size, S U V, tumor-to-background ratio and reader confidence level for up to 5 lesions per region on each Day 1 and Day 2 scan.",
        "For the process of image randomization and interpretation refer to the Imaging Review Charter. Note: The result of the central review of the study scans will not be provided to the clinical site."
      ],
      "chips": [
        "CLP04",
        "p46/80",
        "Full protocol text"
      ],
      "visual": "dualpet",
      "image": "assets/protocol/clp/c046.jpg",
      "cap": "Protocol page 46 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 47 of 80 · Radical prostatectomy and PLND as standard of truth",
      "audio": [
        "8.4 Radical Prostatectomy and Pelvic Lymph Node Dissection Upon completion of Visit 4, participants will undergo radical prostatectomy with pelvic lymph node dissection as detailed in the Surgery Manual. Surgical staff will label all specimens removed during surgery to correlate with the specific anatomic location of removal (including region and subregion). The specimens will be processed and analyzed locally. If a participant does not proceed to radical prostatectomy with pelvic lymph node dissection, obtaining histopathology from excisional biopsy or laparoscopic pelvic lymph node dissection will be attempted, if this is clinically feasible. This is to be completed prior to the participant undergoing any alternate intervention for prostate cancer.",
        "The procedure, date of surgery and extent of pelvic lymph node dissection will be captured in the electronic case report form. If alternate intervention for prostate cancer is completed, the date, type of treatment and reason for the change in management will be recorded. 8.5 Histopathology 8.5.1 Tissue from Radical Prostatectomy and Pelvic Lymph Node Dissection Immediately following the radical prostatectomy with pelvic lymph node dissection (or excisional biopsy or laparoscopic pelvic lymph node dissection as per Section 8.4), the labelled specimens will be sent for histopathological processing and analysis at the site in accordance with the Pathology Manual.",
        "The local pathologist evaluating the samples will be blinded to the copper-64 SAR-bis-P S M A PET C T scans/results. The date of assessment and histopathology result will be extracted from the local report and recorded on the electronic case report form within 90 days of Day 1 (Visit 5). Refer to the Pathology Manual for reporting requirements. 8.5.2 Tissue from Distant Metastasis If distant metastatic disease (lesion[s] within the extra-pelvic lymph nodes, bone or visceral/soft tissue regions) is detected on the copper-64 SAR-bis-P S M A PET C T per the local interpretation of the scans, histopathology (from image-guided biopsy or surgery) should be obtained if clinically feasible.",
        "The specimens will be processed and analyzed locally according to the institutional protocols. For each distant metastatic lesion with histopathology, the procedure, date, imaging modality used to guide biopsy (if applicable), region and subregion allocation, size and local histopathology result for prostate cancer will be recorded on the electronic case report form within 90 days of Day 1 (Visit 5). 8.6 Efficacy Assessments To determine the efficacy of copper-64 SAR-bis-P S M A PET C T at Day 1 and Day 2, the scan result on the respective day will be matched against the Standard of Truth result. Matching of the Standard of Truth against the copper-64 SAR-bis-P S M A PET C T result will be completed via statistical programming.",
        "8.6.1 Standard of Truth for Pelvic Lymph Nodes The Standard of Truth for the pelvic lymph node subregions will be based on histopathology from pelvic lymph node dissection completed as part of the radical prostatectomy (or excisional biopsy or laparoscopic pelvic lymph node dissection as per Section 8.4). The Standard of Truth for a given subregion will be deemed positive if it contains at least one pelvic lymph node that is positive for prostate cancer based on histology, negative if pelvic lymph node dissection was completed but"
      ],
      "chips": [
        "SoT = histopathology",
        "Pathologist blinded"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c047.jpg",
      "cap": "Protocol page 47 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Standard of truth for the primary endpoint is histopathology of the pelvic nodes from RP+PLND (or laparoscopic PLND / excisional biopsy if RP is not done)."
      ]
    },
    {
      "title": "Page 48 of 80 · Histopathology rules · pelvic LN region matching",
      "audio": [
        "no pelvic lymph node was positive for prostate cancer and non-evaluable if the histopathology data are either not available or deemed insufficient for the evaluation of pelvic lymph node involvement. 8.6.2 Standard of Truth for Prostate According to the inclusion criteria, all enrolled participants must have a positive diagnosis of primary prostate cancer confirmed by histopathology at study entry. Therefore, the Standard of Truth for the prostate region will automatically be assigned as positive.",
        "8.6.3 Standard of Truth for Distant Metastatic Disease Where clinically feasible, histopathology should be obtained for distant metastatic lesion(s) detected on the copper-64 SAR-bis-P S M A PET C T based on the local interpretation of the scans (refer to Sections 8.3.2.1 and Section 8.5.2). The Standard of Truth for distant metastasis (extra-pelvic lymph nodes, bone and visceral/soft tissue regions) will be deemed positive, if at least one distant metastatic lesion is positive for prostate cancer based on histology, negative if histopathology was obtained, but no lesion was positive for prostate cancer and non-evaluable if histopathology data are either not available or deemed insufficient for the evaluation of distant metastatic prostate cancer.",
        "8.7 Assessment of Pharmacokinetics A subset of 10 participants enrolled into the pharmacokinetics substudy will complete additional assessments on Day 1, Day 2, and Day 3 as per Table 6. For detailed instructions on pharmacokinetics assessments, please refer to the pharmacokinetics Manual. 8.7.1 Blood and Urine Pharmacokinetics Aliquots of blood, plasma and urine samples will be analyzed to determine radioactivity counts using a gamma well counting method immediately following the sample collection period. The resulting radioactivity counts will be converted into radioactivity concentrations using a reference standard. Blood concentration-time data will be analyzed with non-compartmental analysis methods and pharmacokinetic parameters will be generated.",
        "The blood pharmacokinetics parameters to be estimated are described in Section 11.4.13. Ratios of blood-to-plasma radioactivity at each time point will be calculated. The total amount of excreted radioactivity per urine collection interval will be calculated as a product of urine radioactivity concentration and total volume collected over the time interval, and then expressed as a percent of administered dose. Urine concentration-time data will be analyzed with non-compartmental analysis methods and pharmacokinetic parameters will be generated. The urine pharmacokinetics parameters to be estimated are described in Section 11.4.13. Metabolic profiles in urine and plasma will be determined using radio-chromatographic methods.",
        "The areas under the radio-chromatographic peaks corresponding to the parent compounds and putative metabolites, if applicable, will be used in the quantitative assessment of metabolic profiles in urine and plasma. For detailed instructions on sample collection, processing, and analysis, please refer to the pharmacokinetics Manual."
      ],
      "chips": [
        "CLP04",
        "p48/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c048.jpg",
      "cap": "Protocol page 48 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 49 of 80 · Radiation dosimetry (PK subset)",
      "audio": [
        "8.7.2 Radiation Dosimetry The radiation dosimetry of copper-64 SAR-bis-P S M A for the organ/tissue absorbed doses (as mGy/megabecquerels) and whole body effective dose (as mSv/megabecquerels and mSv/200 megabecquerels) will be determined using standard methods established by the Committee on Medical Internal Radiation Dose. For participants in the pharmacokinetics substudy, whole body PET C T images will be acquired at 1, 4, 6, 24 and 48 hours post injection of copper-64 SAR-bis-P S M A (note: the number of scans and acquisition timepoints for the assessment of dosimetry may be modified during the study based on emerging data at the Sponsor's discretion). The PET C T images will be used to obtain volumes and activity concentrations for selected tissues/organs.",
        "Based on these data, time-integrated activity coefficients will be derived and used for subsequent calculation of radiation absorbed doses using the OLINDA/EXM software. The assessment of dosimetry will be completed centrally."
      ],
      "chips": [
        "CLP04",
        "p49/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c049.jpg",
      "cap": "Protocol page 49 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 50 of 80 · Visit 1 screening procedures",
      "audio": [
        "9 VISIT-SPECIFIC PROCEDURES 9.1.1 Screening Period 9.1.1.1 Visit 1 (Day -28 to Day 1) The following assessments must be performed/obtained within the 28 days before the participant receives the copper-64 SAR-bis-P S M A administration. Informed consent must be documented before any study-specific screening procedure is performed and may be obtained more than 28 days before the copper-64 SAR-bis-P S M A administration. Results of standard of care tests or examinations performed prior to obtaining informed consent and within 28 days prior to the copper-64 SAR-bis-P S M A administration (60 days in case of the institutional standard of care scans) may be used; such tests do not need to be repeated for screening.",
        "If the start date for the copper-64 SAR-bis-P S M A administration extends beyond 28 days from the start of the screening assessments (e.g., due to issues related to logistics), the Investigator in consultation with the Medical Monitor must determine if any screening assessments need to be repeated. Assessments to be completed:",
        "• Informed Consent • Inclusion/Exclusion • Demographics • Body Weight and Height • Medical and Medication History • Germline Information (If Available) • Adverse Events (ongoing) • Concomitant Medications (ongoing) • Hematology and Biochemistry • eGFR (CKD-EPI) in mL/min • Biochemical Markers (Total PSA, Testosterone) • Vital Signs (Blood Pressure, Heart Rate) • Urinalysis • Institutional standard of care imaging (e.g., MRI, CT, approved standard of care P S M A PET C T, with or without technetium-99m M D P bone scan) • Histopathology Results (primary prostate) 9.1.2 copper-64 SAR-bis-P S M A Imaging 9.1.2.1 Visit 2 (Day 1) Day 1 = Day of copper-64 SAR-bis-P S M A administration.",
        "A washout period of at least 72 hours must be applied between the administration of approved P S M A PET tracers (if this is the institutional standard of care imaging at screening) and copper-64-SAR- bisPSMA. Pre dose assessments to be completed on the day of but prior to the copper-64-SAR- bisPSMA administration. Post dose assessments to be completed as per the instructions / windows below. Assessments to be completed: • Adverse Events (ongoing)"
      ],
      "chips": [
        "CLP04",
        "p50/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c050.jpg",
      "cap": "Protocol page 50 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 51 of 80 · Visit 2 Day 1 dosing and Day 1 PET (1–4 h)",
      "audio": [
        "• Concomitant Medications (ongoing) Pre dose • Body Weight • Vital Signs (Blood Pressure, Heart Rate) • Duplicate 12-Lead ECG copper-64 SAR-bis-P S M A Dose Post dose • Duplicate 12-Lead ECG (to be performed at 30 minutes [±10 minutes] post copper-64-SAR- bisPSMA administration) • Vital Signs (Blood Pressure, Heart Rate) prior to the PET C T • copper-64 SAR-bis-P S M A PET C T at 1 to 4 hours post dose 9.1.2.2 Visit 3 (Day 2) This visit is to be completed 24 ±6 hours after the copper-64 SAR-bis-P S M A administration (note: urinalysis and laboratory assessments are to be completed within 9 days after the copper-64-SAR- bisPSMA administration). Assessments to be completed:",
        "• Adverse Events (ongoing) • Concomitant Medications (ongoing) • Hematology and Biochemistry (to be completed within 9 days after the copper-64-SAR- bisPSMA administration) • eGFR (CKD-EPI) in mL/min (to be completed within 9 days after the copper-64-SAR- bisPSMA administration) • Vital Signs (Blood Pressure, Heart Rate) • Urinalysis (to be completed within 9 days after the copper-64 SAR-bis-P S M A administration; if urinalysis is completed during the Day 2 visit, it is to be completed prior to the PET C T) • copper-64 SAR-bis-P S M A PET C T at 24 ±6 hours post dose 9.1.3 Safety Call - Visit 4 (Day 7 ±4 days) The site will contact the participant via telephone between Day 3 to Day 10. Assessments to be completed:",
        "• Adverse Events (ongoing) • Concomitant Medications (ongoing) Upon completion of Visit 4, participants will proceed to radical prostatectomy with pelvic lymph node dissection (see Section 8.4). For participants who do not proceed to radical prostatectomy with pelvic lymph node dissection, obtaining histopathology from excisional biopsy or laparoscopic pelvic lymph node dissection will be attempted, if this is clinically feasible. This is to be completed prior to the participant undergoing any alternate intervention for prostate cancer.",
        "9.1.4 End Of Study - Visit 5 (Until Day 90) This visit is to take place by Day 90 after the participant has completed the radical prostatectomy with pelvic lymph node dissection (or excisional biopsy or laparoscopic pelvic lymph node dissection) and the histopathology results for pelvic lymph nodes (prostate and distant metastasis, if appliable) are available. This visit may be completed via a telephone call. The End of Study Visit must take place by Day 90 for all participants, regardless of whether the participant completed the radical prostatectomy/pelvic lymph node dissection or not."
      ],
      "chips": [
        "CLP04",
        "p51/80",
        "Full protocol text"
      ],
      "visual": "dualpet",
      "image": "assets/protocol/clp/c051.jpg",
      "cap": "Protocol page 51 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "Day 1 PET is 1–4 hours post-dose, vertex-to-mid-thigh. Day 2 PET is 24 ± 6 hours."
      ]
    },
    {
      "title": "Page 52 of 80 · Visit 3 Day 2 PET (24 ± 6 h)",
      "audio": [
        "Assessments to be completed: • Histopathology Results (prostate, pelvic lymph nodes and distant metastasis) • radical prostatectomy and pelvic lymph node dissection Details • Alternate prostate cancer Intervention (if applicable)"
      ],
      "chips": [
        "CLP04",
        "p52/80",
        "Full protocol text"
      ],
      "visual": "dualpet",
      "image": "assets/protocol/clp/c052.jpg",
      "cap": "Protocol page 52 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 53 of 80 · Adverse event monitoring · definitions",
      "audio": [
        "10 ADVERSE EVENT MONITORING 10.1 Adverse Events An adverse event is defined as any untoward medical occurrence in a clinical investigation participant administered a pharmaceutical product, which does not necessarily have a causal relationship with this treatment. An adverse event can therefore be any unfavorable and/or unintended sign (including an abnormal laboratory finding), symptom, or disease temporally associated with the use of an including observed or volunteered problems, complaints, or symptoms, are to be recorded on the appropriate electronic case report form. adverse events should be recorded from the time of informed consent until completion of Visit 4.",
        "adverse events recorded before first administration of copper-64 SAR-bis-P S M A will be classified as non-treatment emergent adverse events. All adverse events recorded after copper-64 SAR-bis-P S M A administration will be classified as treatment emergent adverse events (TEAEs). Non-related adverse events will only be reported and followed up until completion of Visit 4. All related adverse events are to be followed up until resolved or judged to be no longer clinically significant, or until they become chronic to the extent that they can be fully characterized. An assessment should be made at the last study-related visit for each patient. Certain long-term adverse events cannot be followed until resolution within the settings of this protocol.",
        "In these cases, follow-up will be the responsibility of the treating physician. If during adverse event follow-up the case has progressed to the level of serious adverse event, or if a new serious adverse event is observed whose relationship to the study medication cannot be ruled out, the situation must be reported by the Investigator becoming aware of the information. Participants should be instructed to report any adverse event that they experience to the Investigator. Wherever possible, a specific disease or syndrome rather than individual associated signs and symptoms should be identified by the Investigator and recorded on the electronic case report form.",
        "However, if an observed or reported sign or symptom is not considered a component of a specific disease or syndrome by the Investigator, it should be recorded as a separate adverse event on the electronic case report form. Additionally, the condition that led to a medical or surgical procedure (e.g., surgery, endoscopy, tooth extraction, transfusion) should be recorded as an adverse event, not the procedure. adverse events should be entered into the electronic case report form within 5 days of reporting. Clinically significant abnormal laboratory or other examination (e.g., ECG) findings that are detected during the study should be reported as adverse events except as part of an alternate diagnosis or syndrome.",
        "The Investigator will exercise his or her medical and scientific judgment in deciding whether an abnormal laboratory finding, or other abnormal assessment is clinically significant. Clinically significant abnormal laboratory values occurring during the clinical study will be followed until repeat tests return to normal, stabilize, or are no longer clinically significant. Any abnormal test that is determined to be an error does not require reporting as an adverse event. Any event that in the opinion of the Investigator is solely due to the underlying disease should not be reported as an adverse event. 10.1.1 Adverse Drug Reaction All noxious and unintended responses to a medicinal product related to any dose should be considered an adverse drug reaction.",
        "\"Responses\" to a medicinal product means that a causal relationship between a medicinal product and an adverse event is at least a reasonable possibility; i.e., the relationship cannot be ruled out."
      ],
      "chips": [
        "CLP04",
        "p53/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c053.jpg",
      "cap": "Protocol page 53 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 54 of 80 · Unexpected ADR, severity, causality",
      "audio": [
        "10.1.2 Unexpected Adverse Drug Reaction An unexpected adverse drug reaction is defined as an adverse reaction, the nature or severity of which is not consistent with the applicable product information. For copper-64 SAR-bis-P S M A, the reference safety information is included in the current IB. The reference safety information is reviewed yearly, and the periodicity of the review will be harmonized with the reporting period of the Development Safety Update Report.",
        "10.1.3 Assessment of Adverse Events by the Investigator The Investigator will assess the severity (intensity) of each adverse event according to National Cancer Institute Common Terminology Criteria for Adverse Events (NCI CTCAE) criteria and will also categorize each adverse event as to its potential relationship to investigational product using the categories of related or not related. 10.1.3.1 Assessment of Severity Severity of adverse events will be graded according to definitions below. The Investigator will make an assessment of severity (intensity) for each adverse event and serious adverse event reported during the study using the NCI CTCAE V5.0 criteria. The assessments will be based on the Investigator's clinical judgment.",
        "The severity of each adverse event and serious adverse event recorded in the electronic case report form should be assigned to 1 of the following: Mild (Grade 1): Mild; asymptomatic or mild symptoms; clinical or diagnostic observations only; intervention not indicated. Moderate (Grade 2): Moderate; minimal, local or noninvasive intervention indicated; limiting age appropriate instrumental Activities of Daily Living (ADL)*. Severe (Grade 3): Severe or medically significant but not immediately life-threatening; hospitalization or prolongation of hospitalization indicated; disabling; limiting self-care ADL**. Life-threatening (Grade 4): Life-threatening consequences; urgent intervention indicated. Fatal (Grade 5): Death related to adverse event.",
        "*Instrumental ADL refers to preparing meals, shopping for groceries or clothes, using the telephone, managing money, etc. **Self-care ADL refers to bathing, dressing and undressing, feeding self, using the toilet, taking medications, and not being bedridden. 10.1.3.2 Causality Assessment The Investigator is obligated to assess the relationship between the investigational product and the occurrence of each adverse event/serious adverse event. The Investigator will use clinical judgment to determine the relationship to copper-64 SAR-bis-P S M A. Alternative causes, such as natural history of the underlying diseases, concomitant therapy, other risk factors, and the temporal relationship of the event to the investigational product will be considered and investigated."
      ],
      "chips": [
        "CLP04",
        "p54/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c054.jpg",
      "cap": "Protocol page 54 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 55 of 80 · Recording, follow-up, and SAE reporting clocks",
      "audio": [
        "The causal relationship of the adverse event to the investigational product or study procedures should be assessed by the Investigator (or medically qualified delegate) using the following classifications: Related: An adverse event that follows a temporal sequence from administration of the the drug, such as underlying diseases, concurrent medical conditions, concomitant drugs and concurrent treatments, are also possibly responsible. Not related: An adverse event that does not follow a temporal sequence from investigational product administration and/or that can reasonably be explained by other factors, such as underlying diseases, concurrent medical conditions, concomitant drugs and concurrent treatments.",
        "10.2 Serious Adverse Event Any adverse event, due solely to the underlying disease or disease progression, should not be reported as an serious adverse event, unless the study treatment contributed to the adverse event. An adverse event or adverse reaction is considered serious if, in the view of either the Investigator or Sponsor, it results in any of the following outcomes: • Death; • Life-threatening adverse event; Note: An adverse event or adverse reaction is considered \"life-threatening\" if, in the view of the Investigator or Sponsor, its occurrence places the participant at immediate risk of death.",
        "It does not include an event that, had it occurred in a more severe form, might have caused death.) • Requires hospitalization or prolongation of existing hospitalization; Note: Any hospital admission with at least 1 overnight stay will be considered an inpatient hospitalization. An emergency room visit without hospital admission will not be recorded as an serious adverse event under this criterion, nor will hospitalization for a procedure scheduled or planned before signing of informed consent. However, unexpected complications and/or prolongation of hospitalization that occur during elective surgery should be recorded as adverse events and assessed for seriousness.",
        "Admission to the hospital for social or situational reasons (e.g., no place to stay, live too far away to come for hospital visits) will not be considered inpatient hospitalizations. • A persistent or significant disability/incapacity or substantial disruption of the ability to conduct normal life functions; • A congenital anomaly/birth defect; • An important medical event; Note: Important medical events that may not result in death, be life-threatening, or require hospitalization may be considered an serious adverse event when, based upon appropriate medical judgment, they may jeopardize the participant and may require medical or surgical intervention to prevent 1 of the outcomes listed above. Examples of such"
      ],
      "chips": [
        "CLP04",
        "p55/80",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/clp/c055.jpg",
      "cap": "Protocol page 55 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 56 of 80 · Serious AE examples and expedited reporting",
      "audio": [
        "medical events include allergic bronchospasm requiring intensive treatment in an emergency room or at home, blood dyscrasias or convulsions that do not result in inpatient hospitalization, or the development of drug dependency or drug abuse. 10.3 Serious Adverse Event Reporting - Procedures for Investigators 10.3.1 Initial Reports All SAEs occurring from the time of consent until completion of Visit 4 must be reported within 24 hours of the knowledge of the occurrence (this refers to any adverse event that meets any of the aforementioned serious criteria).",
        "All SAEs that the Investigator considers related to To report an serious adverse event, complete the serious adverse event Report Form and email the completed serious adverse event Report Form within 24 hours of awareness. An serious adverse event Report Form will be supplied with the study binder. In addition to reporting the serious adverse event to Sponsor (or designee), the Investigator must also notify the I R B which approved the study according to their requirements. Copies of all correspondence relating to reporting of any SAEs should be maintained in the site's study files and will be checked routinely by the study monitor.",
        "If the Sponsor and the Investigator consider that the serious adverse event is investigational product related (i.e., an adverse reaction) and unexpected it will be reported to the appropriate regulatory authorities by the Sponsor (or designee) within the pre-defined timelines. 10.3.2 Follow-Up Reports The Investigator must continue to follow the participant until the serious adverse event has subsided or until the condition becomes chronic in nature, stabilizes (in the case of persistent impairment), or the participant dies. Within 24 hours of receipt of follow-up information, the Investigator must update the serious adverse event form and submit any supporting documentation (e.g., deidentified participant discharge summary, autopsy reports), if requested.",
        "10.4 Pregnancy Pregnancies occurring in a female partner of a participant after the first administration of copper-64- SAR-bisPSMA require immediate reporting. They must be reported within 24 hours after the Investigator has become aware of the pregnancy. A pregnancy report will be completed and sent to the Sponsor (or designee) within 24 hours of becoming aware of the pregnancy. The Investigator will collect follow-up information regarding the outcome of the pregnancy and any postnatal sequelae in the infant that must also be reported to the Sponsor or designee. Upon awareness of the outcome of the pregnancy, the Investigator must forward a follow-up Pregnancy Report with any relevant information.",
        "If the outcome of the pregnancy meets the criteria for immediate classification of an serious adverse event (e.g., spontaneous abortion, stillbirth, neonatal death, or congenital anomaly), the Investigator will report the event within 24 hours of being notified of the pregnancy report. 10.5 Expedited Reporting The Sponsor will report all relevant information about suspected unexpected serious adverse reactions that are fatal or life-threatening as soon as possible to the F D A and the IRBs, and in any case no later than 7 calendar days after knowledge by the Sponsor of such a case, and"
      ],
      "chips": [
        "CLP04",
        "p56/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c056.jpg",
      "cap": "Protocol page 56 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 57 of 80 · Pregnancy reporting",
      "audio": [
        "relevant follow-up information will subsequently be communicated within an additional 8 days. All other suspected unexpected serious adverse reactions will be reported to the F D A and the IRBs as soon as possible but within a maximum of 15 calendar days of first knowledge by the Sponsor. For non-US sites, the Sponsor will report all suspected unexpected serious adverse reactions according to relevant laws and regulations applicable to the countries / jurisdiction. The Sponsor will also inform all Investigators as required."
      ],
      "chips": [
        "CLP04",
        "p57/80",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/clp/c057.jpg",
      "cap": "Protocol page 57 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 58 of 80 · Statistical methods · analysis sets",
      "audio": [
        "11 STATISTICAL METHODS 11.1 General Considerations A Statistical Analysis Plan (SAP) will be written after finalizing the protocol and prior to database lock. The SAP will detail the implementation of all the planned statistical analysis in accordance with the principal features stated in the protocol. Any deviations from the SAP will be presented in the final clinical study report. Continuous variables will be summarized by the number of subjects, mean, standard deviation, standard error of the mean, median, 25th quartile, 75th quartile, minimum, and maximum values. For the summary of pharmacokinetics data, the coefficient of variation as a percentage (CV%), geometric mean and geometric CV% will also be presented where appropriate.",
        "Categorical variables will be summarized using frequency counts and percentages. For efficacy variables 95% two-sided confidence intervals (CI) will be presented along with 97.5% CIs for the primary endpoint efficacy outcomes. 11.2 Analysis Populations 11.2.1 All Participants Set The All Participants Set will include all participants that signed informed consent, including those participants that failed screening. The All Participants Set will be used for the listing and summary of screening information collected. 11.2.2 Enrolled Participants Set The Enrolled Participants Set will include all participants who signed informed consent and were enrolled into the study (regardless of dosing or assessments completed).",
        "The Enrolled Participant Set will be used for the summary of participant disposition data. 11.2.3 Evaluable Set The Evaluable Set will consist of all participants who have a copper-64 SAR-bis-P S M A PET result (positive or negative) and Standard of Truth (positive or negative). The Evaluable Set will be used for the supportive analysis for the primary efficacy endpoints and other selected secondary and exploratory analyses. For analyses conducted per copper-64 SAR-bis-P S M A imaging day, only participants in the Evaluable Set that have a copper-64 SAR-bis-P S M A PET for the respective imaging day will contribute data to the assessment for that imaging day.",
        "11.2.4 Full Analysis Set The Full Analysis Set will consist of all participants who have at least one copper-64 SAR-bis-P S M A PET result. The Full Analysis Set will be used for the primary efficacy endpoints and other select secondary and exploratory analyses. 11.2.5 Safety Set The Safety Set will include all participants who receive any amount of copper-64 SAR-bis-P S M A. The Safety Set will be used to assess all safety data."
      ],
      "chips": [
        "CLP04",
        "p58/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c058.jpg",
      "cap": "Protocol page 58 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 59 of 80 · Analysis sets continued (evaluable, PK)",
      "audio": [
        "11.2.6 Blood/Plasma Pharmacokinetic Set The Blood/Plasma pharmacokinetics Set will include all participants who receive any amount of copper-64-SAR- bisPSMA and have sufficient blood and plasma concentration data for the determination of at least one pharmacokinetics parameter. 11.2.7 Urine Pharmacokinetic Set The Urine pharmacokinetics Set will include all participants who receive any amount of copper-64 SAR-bis-P S M A and have urine data collected and analyzed for at least one full urine sampling collection period. 11.2.8 Dosimetry Set The Dosimetry Set will include all participants who receive any amount of copper-64-SAR- bisPSMA and complete the copper-64 SAR-bis-P S M A PET C T scans required for the assessment of dosimetry.",
        "11.3 Determination of Sample Size The sample size is calculated based on the co-primary endpoints of sensitivity and specificity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth, on both Day 1 and Day 2 (independently). At least two of the three central readers must reject the null hypothesis for specificity and sensitivity for the study to be deemed a success. The following null hypotheses will be tested independently for Day 1 and Day 2: 1. Sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth: H0se: πse = 0.20 versus H1se:",
        "πse ≠ 0.20 i.e., the lower bound of the two-sided 97.5% CI for sensitivity must be >0.20 (20% sensitivity) to conclude statistically significant success. 2. Specificity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth: H0sp: πsp = 0.85 versus H1sp: πsp ≠ 0.85 i.e., the lower bound of the two-sided 97.5% CI for specificity must be >0.85 (85% specificity) to conclude statistically significant success. Where πse and πsp are the true sensitivity and specificity, respectively, for copper-64-SAR- bisPSMA PET.",
        "Assuming a true sensitivity of 35% and a disease prevalence (i.e., positive detection by the Standard of Truth) of 25% a total of 324 participants will provide at least 80% power to reject the null hypothesis with a two-sided significance level of 2.5% (adjusted for multiplicity arising from independent assessments of Day 1 and Day 2 PET data). This sample size will provide > 94% power assuming the true specificity is 93%. This sample size is based on methods for exact Clopper-Pearson CIs. To account for a drop-out and non-evaluable rate of 15% the study should aim to enroll a minimum of 383 participants."
      ],
      "chips": [
        "CLP04",
        "p59/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c059.jpg",
      "cap": "Protocol page 59 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 60 of 80 · Analysis methods · disposition and baseline",
      "audio": [
        "11.4 Analysis Methods 11.4.1 Enrollment and Disposition Screening data including reason(s) for screen failure will be listed for the All Participant Set. Enrollment and study completion data will be listed for the Enrolled Participant Set. The number of participants screened, number of participants enrolled, number of participants who completed the study and number of participants who withdrew from the study, along with the reason for discontinuation will be summarized using the All Participants Set and Enrolled Participant Sets. The assignment to the Evaluable Set, Safety Set, Blood/Plasma pharmacokinetics Set and Urine pharmacokinetics Set will be listed and summarized for the Enrolled Participant Set. The reason for exclusion from an analysis set will be listed.",
        "11.4.2 Demographic and Other Baseline Characteristics Demographic and baseline characteristics will be listed and summarized descriptively for the Full Analysis Set and the Safety Set. The following demographic and baseline data will be summarized: age, race, ethnicity, height, weight and body mass index (BMI). Age is calculated from date of birth to date of informed consent. BMI is calculated from height and weight recorded at baseline. 11.4.3 Prior and Concomitant Medication Prior and concomitant medications will be recorded, and Anatomical/Therapeutic/Chemical (ATC) class and preferred name coded using the World Health Organization drug dictionary (WHODrug). Prior medications are those medications started before the first administration of copper-64 SAR-bis-P S M A.",
        "Concomitant medications are those medications taken after the administration of copper-64 SAR-bis-P S M A. Prior medications that continued after the use of study drug are also considered concomitant medications. Prior and concomitant medications will be summarized for the Safety Set by ATC class (level 3) and preferred name. 11.4.4 Medical History Medical history collected at screening will be coded using Medical Dictionary for Regulatory Activities (MedDRA). Medical history will be summarized for the Safety Set by system organ class and preferred term. 11.4.5 Germline Information Germline information will be listed for all participants with this information available in the Full Analysis Set and summarized.",
        "11.4.6 Prostate Cancer History Prior prostate cancer history data, including date of diagnosis, tumor type, Gleason Score, ISUP Grade Group, clinical TNM staging, risk category, number of positive cores and locations of positive cores, PSA level, and testosterone level will be listed and summarized for the Full Analysis Set."
      ],
      "chips": [
        "CLP04",
        "p60/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c060.jpg",
      "cap": "Protocol page 60 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 61 of 80 · SOC imaging analysis",
      "audio": [
        "11.4.7 Institutional Standard of Care Imaging Institutional standard of care imaging will be performed during screening. The type of scan, and the results for each region and subregion will be listed and summarized for the Full Analysis Set (or amongst participants with evaluable data in FAS as applicable). 11.4.8 Study Drug Administration All copper-64 SAR-bis-P S M A administrations will be listed with complete information from the copper-64 SAR-bis-P S M A administration electronic case report form. 11.4.9 copper-64 SAR-bis-P S M A PET C T Imaging All copper-64 SAR-bis-P S M A PET C T imaging information for both Day 1 and Day 2 will be listed.",
        "For each timepoint, the number of lesions in each region/subregion will be summarized for the Full Analysis Set for each of the central readers. The time from copper-64 SAR-bis-P S M A administration to acquisition of the Day 1 and Day 2 PET C T will be summarized for the Full Analysis Set. 11.4.10 Protocol Deviations All participant level protocol deviations will be listed. Participant level protocol deviations will also be tabulated by type of deviation and Sponsor defined major deviations will be summarized separately by type of deviation for the Enrolled Participants Set. 11.4.11 Safety Analysis All safety analyses will be conducted on the Safety Set. Where applicable, safety evaluations will be summarized by visit.",
        "11.4.11.1 Adverse Events adverse events will be coded using the latest version of MedDRA. A treatment-emergent adverse event is any adverse event that occurs after the administration of copper-64 SAR-bis-P S M A. TEAEs, TEAEs related to investigational product, TEAEs with grade 3 or higher, TEAEs by severity, and treatment-emergent SAEs will be tabulated by MedDRA system organ class and preferred term. All adverse events, SAEs, adverse events leading to study discontinuation and adverse events leading to death will be listed by participant. 11.4.11.2 Clinical Laboratory Assessments Hematology, biochemistry, urinalysis, eGFR, total PSA and testosterone measured values and change from baseline will be listed and summarized by visit.",
        "11.4.11.3 Vital Signs Vital signs measured values and change from baseline will be listed and summarized using descriptive statistics at all scheduled time points. 11.4.11.4 12-Lead ECG 12-Lead ECG observed values and change from baseline will be listed and summarized using descriptive statistics at all scheduled time points. The mean of the duplicate readings will be used for the summary and calculation of change from baseline."
      ],
      "chips": [
        "CLP04",
        "p61/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c061.jpg",
      "cap": "Protocol page 61 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 62 of 80 · ECG, labs, and vital-sign summaries",
      "audio": [
        "Findings of 12-lead ECGs will be classified as either \"normal\", \"abnormal, not clinically significant\", or \"abnormal, clinically significant\" and categorial variables summarized with a shift table. For duplicate ECGs, the assessment of greatest clinical severity will be used. The frequency of subjects with QTcF and QTcB pre dose and post dose values will be summarized according to the following categories: ≤450 msec, >450 and ≤ 480 msec, >480 and ≤ 500 msec, and >500 msec. In addition, the number and percentage of participants with the following maximum post-baseline increases in QTcF and QTcB will be summarized: <0 msec, 0 - 30 msec, >30 - 60 msec, > 60 msec.",
        "11.4.11.5 Subgroup Safety Analysis In addition to the planned safety analyses listed, where appropriate and where data allows, additional exploratory subgroup analyses will be undertaken to investigate renal and hepatic function on safety outcomes. 11.4.12 Efficacy Analysis Primary efficacy analyses will be conducted with the Full Analysis Set, unless otherwise noted. Sensitivity/supportive analyses of the primary efficacy endpoints will be conducted with the Full Analysis Set and the Evaluable Set. Determination of the Standard of Truths are described in Section 8.6. The primary efficacy null and alternative hypotheses are presented in Section 11.3.",
        "Within each imaging day, the type I error rate will be preserved by requiring that the null hypotheses for both sensitivity and specificity be rejected in order to draw the conclusion that copper-64 SAR-bis-P S M A is efficacious for imaging. In addition, type I error will be further controlled by having the three readers from the central imaging laboratory be independent and the conclusion of efficacy will require that the same two of three readers meet the success criteria for sensitivity and specificity. To account for independent assessments of the primary efficacy endpoints on Day 1 and Day 2 and control for multiplicity, the two-sided significance level (α) has been adjusted to 2.5% for assessment on each of the two imaging days.",
        "11.4.12.1 Primary Efficacy Endpoints The co-primary endpoints, on each of the copper-64 SAR-bis-P S M A imaging days, are sensitivity and specificity of copper-64 SAR-bis-P S M A PET C T to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth. The diagnostic performance of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph node region will be evaluated against the Standard of Truth. The result of the copper-64 SAR-bis-P S M A PET and Standard of Truth will be matched for the left and right pelvic lymph node subregions.",
        "Diagnostic performance will be calculated at a patient level, that is, at least one PET-positive pelvic lymph node on the PET scan and one prostate cancer positive lymph node by histopathology on the same side of the pelvis (Left or Right) will be counted a True Positive at the patient level. Sensitivity and specificity for pelvic lymph nodes will be calculated per reader and per PET timepoint as follows: Outcome (matched independently for left and right pelvic lymph node subregion) Pelvic lymph node SOT + Pelvic lymph node SOT -"
      ],
      "chips": [
        "CLP04",
        "p62/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c062.jpg",
      "cap": "Protocol page 62 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 63 of 80 · Primary analysis · 2×2 pelvic LN vs histopathology",
      "audio": [
        "Pelvic lymph node Region copper-64 PET + TP FP Pelvic lymph node Region copper-64 PET - FN TN Abbreviations: +=positive; -=negative; FN=false negative; FP=false positive; lymph node=lymph node; PET=positron emission tomography; SOT=Standard of Truth; TN= true negative; TP=true positive Sensitivity: TP/(TP+FN) x 100 Specificity: TN/(TN+FP) x 100 For participants with missing pelvic lymph node Standard of Truth, the Standard of Truth will be imputed. For participants who undergo copper-64 SAR-bis-P S M A on only one of the two imaging days, the result for the missing imaging day will also be imputed. Full details of the imputation methods for the primary endpoints will be described in the SAP.",
        "Assessment of the primary endpoints will be undertaken by determining the sensitivity and specificity point estimates and associated 2-sided 97.5% and 95.0% exact binomial CI [using the Clopper-Pearson method] for each of the three central readers and for Day 1 and Day 2 imaging, independently. The null hypothesis for specificity (for Day 1 and Day 2, independently) will be rejected if the lower limit of the 97.5% CI exceeds 0.85 (i.e., 85%) for two of the three central readers. The null hypothesis for sensitivity (for Day 1 and Day 2, independently) will be rejected if the lower limit of the 97.5% CI exceeds 0.20 (i.e., 20%) for two of the three central readers.",
        "If specificity is a success, then the same two central readers need to reject the null hypothesis for sensitivity leading to overall success of the primary endpoint. All copper-64 SAR-bis-P S M A PET C T for each central reader and the Standard of Truth for each participant will be listed. All histopathology findings will be listed and summarized including number of lesions biopsied and results for the respective anatomical regions for the Evaluable Set. 11.4.12.2 Sensitivity Analysis for the Primary Efficacy Endpoints Sensitivity analyses will be undertaken to investigate alternative imputation methods used for participants with missing Standard of Truth. Full details of these methods will be described in the SAP.",
        "11.4.12.3 Secondary Efficacy Endpoints The secondary endpoints, on each of the copper-64 SAR-bis-P S M A imaging days, are: • positive predictive value (positive predictive value) and negative predictive value (negative predictive value) of copper-64-SAR- bisPSMA PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth (Determined for Full Analysis Set and Evaluable Set); • sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the prostate, pelvic lymph nodes, extra-pelvic lymph nodes, bone and visceral/soft tissue regions compared to the Standard of Truth; • sensitivity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the prostate gland compared to the Standard of Truth;"
      ],
      "chips": [
        "CLP04",
        "p63/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c063.jpg",
      "cap": "Protocol page 63 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "2×2 at the pelvic-node region: PET+ path+ = TP, PET+ path− = FP, PET− path+ = FN, PET− path− = TN. Left vs right matching is specified in the SAP."
      ]
    },
    {
      "title": "Page 64 of 80 · Sensitivity/specificity without subregion matching",
      "audio": [
        "• sensitivity and specificity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph nodes compared to the Standard of Truth, without the requirement of subregion (Left or Right) matching between copper-64 SAR-bis-P S M A PET and Standard of Truth; • inter-reader reliability of agreement estimated with a multiple-reader kappa statistic. positive predictive value for pelvic lymph nodes will be calculated per reader and per PET timepoint as follows: Outcome (matched independently for left and right pelvic lymph node subregion) Pelvic lymph node SOT+ Pelvic lymph node SOT - Pelvic lymph node Region copper-64 PET + TP FP Abbreviations: +=positive; -=negative; FP=false positive; lymph node=lymph node; PET=positron emission tomography;",
        "SOT=Standard of Truth; TP=true positive positive predictive value: TP/(TP+FP) x 100 negative predictive value for pelvic lymph nodes will be calculated per reader and per PET timepoint as follows: Outcome (matched independently for left and right pelvic lymph node subregion) Pelvic lymph node SOT + Pelvic lymph node SOT - Pelvic lymph node Region copper-64 PET - FN TN Abbreviations: +=positive; -=negative; FN=false negative; lymph node=lymph node; PET=positron emission tomography; SOT=Standard of Truth; TN= true negative negative predictive value: TN/(TN+FN) x 100 Sensitivity to detect prostate cancer within the prostate, pelvic lymph nodes, extra-pelvic lymph nodes, bone and visceral/soft tissue regions will be calculated per reader and per PET timepoint as follows:",
        "Outcome Any region SOT + copper-64 PET + based on any matched region TP All regions copper-64 PET - or copper-64 PET- on any of matched region FN Abbreviations: +=positive; -=negative; FN=false negative; PET=positron emission tomography; SOT=Standard of Truth; TP=true positive Sensitivity: TP/(TP+FN) x 100 Sensitivity for the prostate gland will be calculated per reader and per PET timepoint as follows: Outcome Prostate SOT + Prostate Region copper-64 PET + TP Prostate Region copper-64 PET - FN Abbreviations: +=positive; -=negative; FN=false negative; PET=positron emission tomography; SOT=Standard of Truth; TP=true positive"
      ],
      "chips": [
        "CLP04",
        "p64/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c064.jpg",
      "cap": "Protocol page 64 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 65 of 80 · Formulas · TP/(TP+FN), TN/(TN+FP)",
      "audio": [
        "Sensitivity: TP/(TP+FN) x 100 Sensitivity and specificity of copper-64 SAR-bis-P S M A PET to detect prostate cancer within the pelvic lymph node region compared to the Standard of Truth, without the requirement of subregion (Left or Right) matching between copper-64 SAR-bis-P S M A PET and Standard of Truth will be calculated per reader and per PET timepoint. In contrast to the primary efficacy analysis, participants will be considered True Positive if there is at least one PET-positive pelvic lymph node on the PET scan and one prostate cancer positive lymph node by histopathology, regardless of whether the subregions for the positive lesion(s) match.",
        "All other methodology applied to the primary efficacy endpoint analysis will be implemented (excluding the supportive/sensitivity analyses). Assessment of the secondary endpoints will be undertaken by determining and tabulating the positive predictive value, negative predictive value and sensitivity point estimates and associated 2-sided 95.0% exact Clopper-Pearson binomial CI for each of the three central readers and for Day 1 and Day 2 imaging, independently. To assess the consistency of copper-64 SAR-bis-P S M A PET C T interpretations for the three central readers for the primary endpoint, inter-reader reliability of agreement will be estimated with a multiple-reader kappa statistic and associated 95% CI.",
        "11.4.12.4 Exploratory Efficacy Endpoints On each of the copper-64 SAR-bis-P S M A imaging days the following will be determined and tabulated: • the number and percentage of participants who are standard of care imaging pelvic lymph node negative, but copper-64 SAR-bis-P S M A PET pelvic lymph node positive and histopathology positive; • the number and percentage of participants who are copper-64 SAR-bis-P S M A PET pelvic lymph node positive but standard of care imaging pelvic lymph node negative and histopathology negative; • the number and percentage of participants who are standard of care P S M A PET pelvic lymph node negative, but copper-64 SAR-bis-P S M A PET pelvic lymph node positive and histopathology positive;",
        "• the number and percentage of participants who are copper-64 SAR-bis-P S M A PET pelvic lymph node positive but standard of care P S M A PET pelvic lymph node negative and histopathology negative; • the percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET compared to the standard of care imaging; • the percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET and confirmed as true positive by histopathology compared to the standard of care imaging. • the percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET compared to the standard of care P S M A PET.",
        "• the percentage of participants upstaged to N1 or M1 based on the copper-64 SAR-bis-P S M A PET and confirmed as true positive by histopathology compared to the standard of care P S M A PET. On each of the copper-64 SAR-bis-P S M A imaging days, positive predictive value of copper-64 SAR-bis-P S M A PET to detect distant metastatic prostate cancer within the extra-pelvic lymph nodes, bone and visceral/soft tissue regions compared to the Standard of Truth will be calculated, as follows:"
      ],
      "chips": [
        "CLP04",
        "p65/80",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/clp/c065.jpg",
      "cap": "Protocol page 65 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 66 of 80 · Region-level detection (prostate, bone, viscera)",
      "audio": [
        "Outcome Extra-pelvic lymph node / Visceral/soft tissue / Bone SOT + Extra-pelvic lymph node / Visceral/soft tissue / Bone SOT- Extra-pelvic lymph node / Visceral/soft tissue / Bone Region copper-64 PET + TP FP Abbreviations: +=positive; -=negative; FP=false positive; lymph node=lymph node; PET=positron emission tomography; SOT=Standard of Truth; TP=true positive positive predictive value: TP/(TP+FP) x 100 Assessment will be undertaken by determining and tabulating the positive predictive value point estimates and associated 2-sided 95.0% exact Clopper-Pearson binomial CIs for each of the three central readers and for Day 1 and Day 2 imaging, independently.",
        "On each of the copper-64 SAR-bis-P S M A imaging days, the number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to baseline standard of care imaging will be determined and tabulated. On each of the copper-64 SAR-bis-P S M A imaging days, relationship between PET-positivity (S U V, tumor-to-background ratio), versus true/false positivity and as a function of region and lesion size will be determined and summarized. Relationship between PET-positivity (S U V, tumor-to-background ratio) and Gleason Grade from the prostatectomy and pelvic lymph node dissection specimens will also be determined and summarized.",
        "On each of the copper-64 SAR-bis-P S M A imaging days, the lesion S U V, tumor-to-background ratio and size on copper-64- SAR-bisPSMA PET compared to standard of care P S M A PET will be determined and tabulated. S U V, size and tumor-to-background ratio in lesions will be listed and summarized by imaging day for the copper-64-SAR- bisPSMA PET and for the standard of care P S M A PET. The total number and difference in the total number of lesions detected per participant on Day 1 and Day 2 copper-64 SAR-bis-P S M A PET C T scans will be summarized descriptively by central reader. The number of lesions at Day 1 and Day 2 will be compared and p-value and mean difference summarized by central reader.",
        "On each of the copper-64 SAR-bis-P S M A imaging days, sub-group analysis will be undertaken and summarized for each group based on group classification for PSA at baseline, testosterone at baseline, Gleason Grade pre-prostatectomy, stage, grade, risk and germline information for the following variables: • sensitivity and specificity to detect prostate cancer within the pelvic lymph nodes; • positive predictive value and negative predictive value to detect prostate cancer within the pelvic lymph nodes; • sensitivity to detect prostate cancer within the participants overall; • sensitivity to detect prostate cancer within the prostate gland; • positive predictive value to detect distant metastatic prostate cancer;",
        "• number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to standard of care imaging;"
      ],
      "chips": [
        "CLP04",
        "p66/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c066.jpg",
      "cap": "Protocol page 66 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 67 of 80 · Lesion-count and upstaging analyses",
      "audio": [
        "• number of lesions detected per participant and per region (prostate gland, pelvic lymph nodes, extra-pelvic lymph nodes, bone, visceral/soft tissue) on copper-64 SAR-bis-P S M A PET compared to standard of care P S M A PET. Exploratory subgroup analysis will be undertaken to investigate the effect of copper-64-SAR- bisPSMA PET acquisition time relative to dose administration on the primary efficacy endpoints and number of lesions detected. In addition to the planned efficacy analyses described, where appropriate and where data allows, additional exploratory subgroup analyses will be undertaken to investigate renal and hepatic function on efficacy outcomes.",
        "11.4.13 Pharmacokinetic Analysis Individual blood copper-64 SAR-bis-P S M A concentration data will be listed and summarized by protocol specified collection timepoints, with descriptive statistics including the CV% and geometric mean. Individual and mean concentration-time profiles will also be presented graphically on linear and log-linear scales. Where data are sufficient for parameter determination, the following blood copper-64-SAR- bisPSMA pharmacokinetics parameters will be estimated using standard non-compartmental procedures: • Cmax: Maximum observed concentration; • Tmax: Time to reach the maximum concentration; • AUC0-last:",
        "Area under the plasma concentration-time curve from the time of the dose administration to the time of the last measurable concentration calculated by the linear up log down trapezoidal method; • AUC0-inf: Area under the concentration-time curve from the time of the dose administration to time infinity calculated by the linear up log down trapezoidal method; • kel: Terminal elimination rate constant, estimated by linear regression of the logarithmically transformed concentration-time data; • t1/2e: Elimination half-life associated with the terminal slope (kel) of the semilogarithmic concentration-time curve, calculated as 0.693/kel; • CL: The apparent total clearance; • Vz: The apparent total volume of distribution.",
        "Blood copper-64 SAR-bis-P S M A pharmacokinetics parameters will be listed and summarized with descriptive statistics including, %CV, geometric mean and geometric %CV. Further details on terminal elimination phase regression methods and acceptance criteria will be presented in the SAP. Ratios of blood-to-plasma radioactivity at each time point will be listed and summarized by timepoint. Individual urine copper-64 SAR-bis-P S M A amount excreted data, expressed as amount and percentage of total administered dose will be listed and summarized by protocol specified collection interval with descriptive statistics including the CV% and geometric mean. Individual and mean urine excreted amount-time profiles will also be presented graphically.",
        "Where data are sufficient for parameter determination the following urine copper-64 SAR-bis-P S M A pharmacokinetics parameters will be estimated using standard non-compartmental procedures:"
      ],
      "chips": [
        "CLP04",
        "p67/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c067.jpg",
      "cap": "Protocol page 67 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 68 of 80 · PK parameter definitions",
      "audio": [
        "• TRmax: Midpoint of the collection interval associated with the maximum observed excretion rate; • Rmax: Maximum observed excretion rate, at time TRmax; • Ae0-t: Cumulative amount recovered in urine from time zero to time of last collection interval, calculated as the sum of the amounts excreted over each collection interval; • %FE0-t: Fraction (percent) of total dose recovered in urine. Urine copper-64 SAR-bis-P S M A pharmacokinetics parameters will be listed and summarized with descriptive statistics including %CV, geometric mean and geometric %CV.",
        "In addition to the planned pharmacokinetics analyses described, where appropriate and where data allows, additional exploratory subgroup analyses will be undertaken to investigate renal and hepatic function on copper-64 SAR-bis-P S M A pharmacokinetics. 11.4.14 Dosimetry Analysis The dosimetry analysis will be conducted using the Dosimetry Set. Dosimetry will be assessed using the copper-64 SAR-bis-P S M A PET C T scans. The following data will be summarized using descriptive statistics: • Absorbed dose per unit administered activity (mGy/megabecquerels) in organs from copper-64-SAR- bisPSMA; • Effective dose per unit administered activity (mSv/megabecquerels) from copper-64 SAR-bis-P S M A; • Effective dose (mSv) from 200 megabecquerels of copper-64 SAR-bis-P S M A.",
        "11.5 Interim Analysis There is no interim analysis planned for this study. 11.6 Handling of Missing Data Missing disposition, safety (except for missing data about adverse event relationship to copper-64-SAR- bisPSMA, these will be imputed as 'related to copper-64 SAR-bis-P S M A') and pharmacokinetics data will not be imputed. Imputation methods for the primary efficacy analyses, and sensitivity analyses for assessment of the imputation method are described in the SAP."
      ],
      "chips": [
        "CLP04",
        "p68/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c068.jpg",
      "cap": "Protocol page 68 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 69 of 80 · Study administration · investigator responsibilities",
      "audio": [
        "12 STUDY ADMINISTRATION AND RESPONSABILITIES 12.1 General Investigator Responsibilities The Investigator must ensure that: • He or she will personally conduct or supervise the study; • His or her staff and all persons who assist in the conduct of the study clearly understand their responsibilities and have their names included in the protocol specific Study Personnel Responsibility/Signature Log; • The study is conducted according to the protocol and all applicable regulations; • The protection of each participant's rights and welfare is maintained; • Signed and dated informed consent and, when applicable, permission to use protected health information are obtained from each participant before conducting study procedures.",
        "If a participant withdraws permission to use protected health information, the Investigator will obtain a written request from the participant and will ensure that no further data will be collected from the participant; • The consent process is conducted in compliance with all applicable regulations and privacy acts; • The I R B complies with applicable regulations and conducts initial and ongoing reviews and approvals of the study; • Any amendment to the protocol is submitted promptly to the I R B; • Any significant protocol deviations are reported to the Medical Monitor, the Sponsor, and the I R B according to the guidelines at each study site;",
        "• Electronic case report form pages are completed within 5 days of each participant's visit (unless required earlier for serious adverse event reporting); • All SAEs and pregnancies are reported to the Sponsor or designee within 24 hours of knowledge and to the I R B per I R B requirements; • All safety reports are submitted promptly to the I R B, as per I R B requirements. 12.2 Protocol Compliance The Investigator is responsible for ensuring the study is conducted in accordance with the procedures and evaluations described in this protocol.",
        "12.3 Compliance with Ethical and Regulatory Guidelines The Investigator will ensure that this study is conducted in accordance with International Conference on Harmonization of Technical Requirements for Registration of Pharmaceuticals for Human Use, or with the laws and regulations of the country in which the research is conducted, whichever affords the greater protection to the study participant. For studies conducted under a US Investigational New Drug (I N D) application, the Investigator will ensure adherence to the basic principles of G C P as outlined in 21 Code of Federal Regulations (CFR) 312, subpart D, \"Responsibilities of Sponsors and Investigators\"; 21 CFR, Part 50, 1998; and 21 CFR, Part 56, 1998."
      ],
      "chips": [
        "CLP04",
        "p69/80",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/clp/c069.jpg",
      "cap": "Protocol page 69 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 70 of 80 · 21 CFR, financial disclosure, covered study",
      "audio": [
        "This study is also subject to and will be conducted in accordance with 21 CFR, Part 320, 1993, \"Retention of Bioavailability and Bioequivalence Testing Samples.\" Because this is a \"covered\" clinical study, the Investigator will ensure adherence to 21 CFR, Part 54, 1998;",
        "a covered clinical study is any \"study of a drug or device in humans submitted in a marketing application or reclassification petition subject to this part that the applicant or F D A relies on to establish that the product is effective (including studies that show equivalence to an effective product) or that make a significant contribution to the demonstration of safety.\" This requires that Investigators and all sub-Investigators must provide documentation of their financial interest or arrangements with the Sponsor, or proprietary interests in the drug being studied. This documentation must be provided before participation of the Investigator and any sub Investigator in the study.",
        "The Investigator or sub Investigator agrees to notify the Sponsor of any change in reportable financial interests during the study and for 1 year following completion of the study. Study completion is defined as the date that the last participant has completed the protocol-defined activities. 12.4 Institutional Review Board This protocol and any accompanying material to be provided to the participant (such as advertisements, participant information sheets, or descriptions of the study used to obtain informed consent) will be submitted by the Investigator to an I R B.",
        "Approval from the I R B must be obtained before starting the study and should be documented in a letter from the I R B to the Investigator specifying the protocol number, protocol version, protocol date, documents reviewed, and date on which the committee met and granted the approval. A signed protocol approval page, a letter confirming I R B approval of the protocol and informed consent, and a statement that the I R B is organized and operates according to G C P and the applicable laws and regulations must be forwarded to the Sponsor before screening participants for the study. Additionally, US study sites must forward a signed Form F D A 1572 (Investigator Obligation Form) to the Sponsor before screening participants for study enrollment.",
        "Any modifications or amendments made to the protocol or informed consent form after receipt of the initial I R B approval must also be submitted to the I R B for approval before implementation. Only changes necessary to eliminate apparent immediate hazards to the participants may be initiated prior to I R B approval. In that event, the Investigator must notify the I R B, the Medical Monitor, and the Sponsor in writing within 5 working days after implementation. If a change to the protocol in any way increases the risk to the participant or changes the scope of the study, then written documentation of I R B approval must be received by the Sponsor before the amendment may take effect.",
        "Additionally, under this circumstance, information on the increased risk and/or change in scope must be provided to participants already actively participating in the study, and they must read, understand, and sign any revised informed consent document confirming willingness to remain in the study. The Investigator must ensure that all local regulations and reporting requirements to the I R B are met. 12.5 Informed Consent Process Note: All references to \"participant\" in this section refer to the study participant or his legally authorized representative. The Sponsor (or its designee) will provide Investigators with a multicenter informed consent form for this study.",
        "Investigators may adapt the information to suit the needs of their institution, if necessary (although it must reflect the required elements of informed consent specified in 21 CFR Part"
      ],
      "chips": [
        "CLP04",
        "p70/80",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/clp/c070.jpg",
      "cap": "Protocol page 70 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 71 of 80 · IRB / IEC, ICF, Form FDA 1572",
      "audio": [
        "50.25). The final ICFs must be accepted by the Sponsor and approved by the I R B. Investigators must provide the Sponsor with an unsigned copy of the final ICFs before and after it is approved by the I R B. If any new information becomes available that might affect participants' willingness to participate in the study, or if any amendments to the protocol require changes to the informed consent form, the Sponsor will provide Investigators with a revised informed consent form. Prior to participating in any study-related procedure, each participant must sign and date an I R B-approved informed consent form written in a language the participant can understand. The informed consent form should be as nontechnical as practical and understandable to the participant.",
        "The informed consent form must provide the participant with all the information necessary to make an informed decision about their participation in the study, including the nature and intended purpose of the study, possible benefits, possible risks, and disclosures of the participant's personal information and personal health information for purposes of conducting the study. The informed consent form will include details of the requirements of the participant and the fact that he/she is free to withdraw at any time without giving a reason and without prejudice to their further medical care. Before informed consent is obtained, the participant should be given ample time and opportunity to inquire about the details of the study.",
        "All questions must be answered to the satisfaction of the participant. Once signed, the original informed consent form will be stored in the Investigator's site file and made available for review by the Sponsor. Documentation of the informed consent discussion must be noted in the participant's case history. All participants will receive a copy of their signed and dated informed consent form. If the informed consent form is revised during the study and requires the participant to be re consented, informed consent will be obtained in the same manner as for the original informed consent form. 12.6 Confidentiality Every effort will be made to maintain the anonymity and confidentiality of all participants during this clinical study.",
        "However, because of the experimental nature of this investigational product, the Investigator agrees to allow the I R B, representatives of the Sponsor and its designated agents, and authorized employees of appropriate regulatory agencies to inspect the facilities used in this study and, for purposes of verification, allow direct access to the study site records of all participants enrolled into this study. This includes providing by fax, e-mail, or regular mail de-identified copies of clinical, laboratory, ECG, radiology, pathology, and/or other test results when requested by the Sponsor. A statement to this effect will be included in the informed consent form and a permission form authorizing the use of protected health information will also be included.",
        "In accordance with local and national participant privacy regulations, the Investigator or designee must explain to each participant that in order to evaluate study results, the participant's protected health information obtained during the study may be shared with IRBs, the Sponsor and its designees, and regulatory agencies. It is the Investigator's or designee's responsibility to obtain written permission to use protected health information from each participant. If a participant withdraws permission to use protected health information, it is the Investigator's responsibility to obtain the withdrawal request in writing from the participant and to ensure that no further data will be collected from the participant.",
        "Any data collected on the participant before withdrawal will be used in the analysis of study results. The Sponsor will only use or disclose the participant's protected health information consistent as defined in the informed consent form. The Investigator must assure that each participant's anonymity will be strictly maintained, and that each participant's identity is protected from unauthorized parties. Only participant initials,"
      ],
      "chips": [
        "CLP04",
        "p71/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c071.jpg",
      "cap": "Protocol page 71 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 72 of 80 · Privacy, identifiers, and data protection",
      "audio": [
        "date of birth, and an identification code (but no participant names) should be recorded on any form or biological sample submitted to the I R B, to the Sponsor or its designees (e.g., laboratories), or to regulatory authorities. However, sufficient information must be retained at the study site to permit sample data and data in the database to be connected with the unique participant number assigned to each study participant. The Investigator agrees that all information received from the Sponsor, including, but not limited to, the investigational product, the IB, this protocol, the eCRFs, and any other study information remain the sole and exclusive property of the Sponsor during the conduct of the study and thereafter.",
        "This information is not to be disclosed to any third party (except employees or agents directly involved in the conduct of the study or as required by law) without prior written consent from the Sponsor. The Investigator further agrees to take all reasonable precautions to prevent the disclosure by any employee or agent of the study site to any third party or otherwise into the public domain. 12.7 Study Files and Retention of Records and Biological Samples The Investigator must maintain adequate and accurate records to enable the conduct of the study to be fully documented and the study data to be subsequently verified by the I R B, representatives of the Sponsor and its designated agents, and authorized employees of appropriate regulatory agencies.",
        "These documents should be classified into at least the following 2 categories: Investigator's study file and participant clinical source documents. The Investigator's study file will contain the protocol/amendments, electronic case report form and query forms, the I R B and governmental approval with correspondence, signed informed consent form, drug accountability records, staff curriculum vitae and authorization forms (e.g., Form F D A 1572), and other appropriate documents and correspondence pertaining to the conduct of the study. The required source data referenced in the monitoring plan for the study should include sequential notes containing at least the following information for each participant:",
        "• Participant identification (name, date of birth, sex, race and ethnicity); • Documentation that participant meets each of the eligibility criteria, e.g., history and confirmation of diagnosis (to support inclusion and exclusion criteria); • Participation in study (including study number); • Study discussed and date of informed consent/re-consent; • Dates of all visits; • Documentation that protocol-specific procedures were performed; • Results of efficacy parameters, as required by the protocol; • Start and end date (including dose regimen) of investigational products (including relevant drug dispensing information); • Record of all adverse events and other safety parameters (including start and end date, causality, and severity [intensity]);",
        "• Concomitant medications (including start and end date and dose if relevant dose changes occur); • Date of study completion and reason for discontinuation, if applicable."
      ],
      "chips": [
        "CLP04",
        "p72/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c072.jpg",
      "cap": "Protocol page 72 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 73 of 80 · Record retention (at least 2 years after NDA)",
      "audio": [
        "All clinical study documents must be retained by the Investigator until at least 2 years after the last approval of a marketing application in an I C H region (the United States, Europe, or Japan) and until there are no pending or contemplated marketing applications in an I C H region; or, if no application is filed or if the application is not approved for such indication, until 2 years after the investigation is discontinued and regulatory authorities have been notified or for 15 years, whichever is longer. Investigators may be required to retain documents longer if required by applicable regulatory requirements, by local regulations, or by an agreement with the Sponsor.",
        "The Investigator must notify the Sponsor and obtain written approval from the Sponsor before destroying any clinical study records. The Investigator will promptly notify the Sponsor in the event of accidental loss or destruction of any study records. The Sponsor will inform the Investigator of the date that study records may be destroyed or returned to the Sponsor. The Sponsor must be notified in advance and must provide express written approval of any change in the maintenance of the foregoing documents if the Investigator wishes to move study records to another location or assign responsibility for record retention to another party.",
        "If the Investigator cannot guarantee this archiving requirement at the study site for any or all of the documents, special arrangements must be made between the Investigator and the Sponsor to store these in sealed containers outside of the study site so that they can be returned sealed to the Investigator in case of a regulatory audit. When source documents are required for the continued care of the participant, appropriate copies should be made for storage outside of the study site. Biological samples should be stored according to institutional guidelines, aligned with state and federal recommendations, e.g. a minimum of 2 years for specimen blocks and 10 years for histology slides..",
        "The Investigator should promptly notify the Sponsor in the event of accidental loss or destruction of any study samples. With the permission of the Sponsor, the retained samples may be transferred to an acceptable designee, such as another Investigator, another institution, a contract storage site, or to the Sponsor. 12.8 Participant Screening Log The Investigator must keep a record that lists all participants who signed the informed consent form (including those who did not undergo screening assessments). For those participants who declined to participate, post signing the informed consent form or were subsequently excluded from enrollment, the reasons for not enrolling in the study must be described.",
        "12.9 Modifications of the Protocol or Informed Consent Documents Protocol modifications, except those intended to reduce immediate risk to study participants, will be made only by the Sponsor. All protocol modifications must be submitted to the I R B in accordance with local requirements. Except as noted in Section 12.4, I R B approval must be obtained before changes can be implemented. The informed consent form cannot be changed without prior written approval by the Sponsor and the study site's I R B. The Sponsor may not reimburse the Investigator for cases in which study procedures and evaluations are not conducted in line with the I R B approved protocol."
      ],
      "chips": [
        "CLP04",
        "p73/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c073.jpg",
      "cap": "Protocol page 73 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 74 of 80 · eCRF completion and monitoring",
      "audio": [
        "12.10 Case Report Forms Authorized study site personnel will complete eCRFs designed for this study according to the completion guidelines that will be provided. An electronic case report form is required and must be completed for each enrolled participant, with all required study data accurately recorded such that the information matches the data contained in medical records (e.g., physicians' notes, nurses' notes, study site charts, or other study-specific source documents). The Investigator will ensure that the eCRFs are accurate, complete, legible, and completed within 5 days of each participant's visit (unless required earlier for serious adverse event reporting).",
        "The Investigator will ensure that source documents that are required to verify the validity and completeness of data transcribed on the eCRFs are never obliterated or destroyed. As required by the protocol, eCRFs should also be completed for those participants who fail to complete the study (even during the screening period). If a participant withdraws from the study, the reason must be noted on the electronic case report form and thorough efforts should be made to clearly document outcome. The eCRFs for this study will exist within a web-based electronic data capture (EDC) system.",
        "After the Investigator or the Investigator's designees (e.g., research coordinators) have been appropriately trained, they will be given access to the EDC system and will enter the data required by the protocol into the EDC system. Any change of data will be made via the EDC system, with all changes tracked by the system to provide an audit trail. The electronic case report form must be completed and signed by the principal Investigator or sub-Investigator (as appropriate) within a reasonable time period after data collection. This signature serves to attest that the information contained in the electronic case report form is true. 12.11 Clinical Monitoring Representatives of the Sponsor or its designee will monitor this study until completion.",
        "Monitoring will be conducted through personal visits with the Investigator and study site staff as well as any appropriate communications by mail, e-mail, or telephone. The monitor is responsible for routine review of the eCRFs at regular intervals throughout the study to verify adherence to the protocol and the completeness, consistency, and accuracy of the data being entered on them. The purpose of monitoring is to ensure compliance with the protocol and the quality and integrity of the data. In accordance with G C P, the study monitor must have direct access to the Investigator's source documentation in order to verify the data recorded in the eCRFs for consistency.",
        "The Investigator agrees to cooperate with the monitor to ensure that any problems detected in the course of these monitoring visits are resolved. 12.12 Inspections The source documents for this study must be made available to appropriately qualified personnel from the Sponsor or its representatives, to the I R B, and to regulatory authority or health authority inspectors as a part of their responsibility to protect human participants in research. The Investigator agrees to provide access to records, facilities, and personnel for the effective conduct of any inspection or audit to representatives of the Sponsor and regulatory agencies.",
        "It is important that the Investigator and relevant institutional personnel are available during monitoring visits and possible audits or inspections and that sufficient time is devoted to the process. If the Investigator is notified of an inspection by a regulatory authority, the Investigator agrees to notify the Sponsor immediately."
      ],
      "chips": [
        "CLP04",
        "p74/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c074.jpg",
      "cap": "Protocol page 74 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 75 of 80 · Data management, quality, and audits",
      "audio": [
        "12.13 Data Management Electronic data capture will be used to enter study data eCRFs and to transfer the data into a study-specific electronic database. Instances where the electronic case report form captured data are considered source data will be outlined in separate study specific documentation. During the data collection process, automated quality assurance programs will be used to identify missing data, out-of-range data, and other data inconsistencies. Requests for data clarification or correction will be forwarded to the investigative study site for resolution.",
        "Quality assurance and quality control systems will be implemented and maintained according to written standard operating procedures to ensure that the data are generated, recorded, and reported in compliance with the protocol, G C P, and applicable regulatory requirements. Data collection and storage systems will provide an audit trail, security mechanisms, and electronic signature capabilities that meet the requirements of F D A Title 21 of CFR Part 11 regarding electronic records and electronic signatures. Data security will be controlled through appropriate and specific restriction of access to only data and systems required by individual users to accomplish their roles in the data management process.",
        "Individual login and password protections will be employed at study sites and at the Sponsor or its designee. The database will exist on physically secured servers. Data backups will be done regularly and will be stored in separate facilities. Printed documents relating to the study will be secured when not under review. 12.14 Clinical Study Insurance The Sponsor will secure clinical study insurance. An insurance certificate will be made available to the participating study sites before study initiation. 12.15 Communications with Regulatory Authorities The Sponsor, working either directly or through designees, will assume responsibility for regulatory interactions with relevant regulatory authorities.",
        "The Sponsor will maintain an I N D application for the investigational product in support of the study in the United States and will maintain similar regulatory applications with other regulatory authorities as required for conduct of the study. In fulfilling this responsibility, the Sponsor (or a designee) will collect, assemble, and communicate all required regulatory documents (e.g., Form F D A 1572, Investigator financial disclosure forms, protocol and protocol amendments, IB, informed consent documents, annual reports) as required by regulation. The Sponsor (or a designee) will also assume responsibility for safety reporting to regulatory authorities as described in Section 10.5.",
        "12.16 Publication and Information Disclosure Policy All information provided by the Sponsor and all data and information generated by the site as part of the study (other than a participant's medical records) are the sole property of Sponsor. For clinical interventional studies in patients, Sponsor will post study results on websites such as https://clinicaltrials.gov/ in accordance with F D A reporting rules. The results of this study may be published or presented at scientific meetings. If this is foreseen, the investigator agrees to submit all manuscripts or abstracts to the sponsor before submission. This allows the sponsor to protect proprietary information and to provide comments.",
        "Patient or institution specific publications (this includes but is not limited to manuscripts, presentations,"
      ],
      "chips": [
        "CLP04",
        "p75/80",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/clp/c075.jpg",
      "cap": "Protocol page 75 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 76 of 80 · Publication policy",
      "audio": [
        "abstracts, posters) are only allowed after the main study results are analyzed and presented, or upon approval by the Sponsor. The sponsor will comply with the requirements for publication of study results. In accordance with standard editorial and ethical practice, the sponsor will generally support publication of multicenter studies only in their entirety and not as individual site data. In this case, a coordinating investigator will be designated by mutual agreement. Authorship will be determined by mutual agreement and in line with International Committee of Medical Journal Editors authorship requirements."
      ],
      "chips": [
        "CLP04",
        "p76/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c076.jpg",
      "cap": "Protocol page 76 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 77 of 80 · References (epidemiology through PSMA literature)",
      "audio": [
        "13 REFERENCES 1. Rawla P. Epidemiology of Prostate Cancer. World journal of oncology. 2019;10(2):63- 89. doi:10.14740/wjon1191 2. Institute NC. Cancer Statistics Center - Prostate. American Cancer Society. Accessed 04-04-2023, 2023. https://cancerstatisticscenter.cancer.org/#!/cancer-site/Prostate 3. Bangma CH, Roobol MJ, Steyerberg EW. Predictive models in diagnosing indolent cancer. Cancer. Jul 1 2009;115(13 Suppl):3100-6. doi:10.1002/cncr.24347 4. Hoffman RM. Screening for Prostate Cancer. New England Journal of Medicine. 2011;365(21):2013-2019. doi:10.1056/NEJMcp1103642 5. Nelson WG, De Marzo AM, Isaacs WB. Prostate Cancer. New England Journal of Medicine. 2003;349(4):366-381. doi:10.1056/NEJMra021562 6. Prostate Cancer Statistics. Cancer Australia.",
        "Accessed 02/02/2022, https://www.canceraustralia.gov.au/cancer-types/prostate-cancer/statistics 7. publication ACSsA. Cancer Facts & Figures 2022. Accessed 28 April, 2023. https://www.cancer.net/cancer-types/prostate-cancer/statistics 8. Salas Fragomeni RA, Amir T, Sheikhbahaei S, et al. Imaging of Nonprostate Cancers Using P S M A-Targeted Radiotracers: Rationale, Current State of the Field, and a Call to Arms. J Nucl Med. Jun 2018;59(6):871-877. doi:10.2967/jnumed.117.203570 9. Silver DA, Pellicer I, Fair WR, Heston WD, Cordon-Cardo C. Prostate-specific membrane antigen expression in normal and malignant human tissues. Clin Cancer Res. Jan 1997;3(1):81-5. 10. Sweat SD, Pacelli A, Murphy GP, Bostwick DG.",
        "Prostate-specific membrane antigen expression is greatest in prostate adenocarcinoma and lymph node metastases. Urology. Oct 1998;52(4):637-40. doi:10.1016/s0090-4295(98)00278-7 11. Santoni M, Scarpelli M, Mazzucchelli R, et al. Targeting prostate-specific membrane antigen for personalized therapies in prostate cancer: morphologic and molecular backgrounds and future promises. J Biol Regul Homeost Agents. Oct-Dec 2014;28(4):555-63. 12. Wright GL, Jr., Grob BM, Haley C, et al. Upregulation of prostate-specific membrane antigen after androgen-deprivation therapy. Urology. Aug 1996;48(2):326-34. doi:10.1016/s0090-4295(96)00184-7 13. S. S, M. S, J. KB. Choline PET and PET C T in Primary Diagnosis and Staging of Prostate Cancer. Published online 2012 Mar 15. doi:",
        "10.7150/thno.4008: Theranostics; 2012. p. 318-330. 14. Wilkinson S, Chodak G. The role of 111indium-capromab pendetide imaging for assessing biochemical failure after radical prostatectomy. The Journal of urology. Jul 2004;172(1):133-6. doi:10.1097/01.ju.0000132138.02846.08 15. Hofman MS, Lawrentschuk N, Francis RJ, et al. Prostate-specific membrane antigen PET-CT in patients with high-risk prostate cancer before curative-intent surgery or radiotherapy (proPSMA): a prospective, randomised, multi-centre study. The Lancet. 2020;395(10231):1208-1216. doi:10.1016/S0140-6736(20)30314-7 16. Alonso O, Dos Santos G, Garcia Fontes M, Balter H, Engler H. (68)Ga-P S M A and (11)C-Choline comparison using a tri-modality PET C T-MRI (3.0 T) system with a dedicated shuttle.",
        "European journal of hybrid imaging. 2018;2(1):9. doi:10.1186/s41824-018-0027-1 17. Calais J, Ceci F, Eiber M, et al. (18)F-fluciclovine PET-CT and (68)Ga-P S M A-11 PET- CT in patients with early biochemical recurrence after prostatectomy: a prospective, single- centre, single-arm, comparative imaging trial. The Lancet Oncology. Sep 2019;20(9):1286- 1294. doi:10.1016/s1470-2045(19)30415-2"
      ],
      "chips": [
        "CLP04",
        "p77/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c077.jpg",
      "cap": "Protocol page 77 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 78 of 80 · References continued · Ga-68 PSMA-11 PI and trials",
      "audio": [
        "18. Highlights of prescribing information for Gallium Ga 68 P S M A-11. US Food and Drug Administration. Accessed Jan 28 2021, 2020. https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/212642s000lbl.pdf 19. Highlights of prescribing information for PYLARIFY. US Food and Drug Administration. Accessed 01/14, 2022. https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/214793s000lbl.pdf 20. POSLUMA® Prescribing Information Label (2023). 21. Zia N, Cullinane C, VanZuylekom J, et al. A Bivalent Inhibitor of Prostate Specific Membrane Antigen Radiolabeled with Copper-64 with High Tumour Uptake and Retention. Angewandte Chemie (International ed in English). Aug 22 2019;58(42):14991-14994. doi:10.1002/anie.201908964 22. Hicks RJ, Jackson P, Kong G, et al.",
        "First-in-human trial of copper-64-SARTATE PET imaging of patients with neuroendocrine tumours demonstrates high tumor uptake and retention, potentially allowing prospective dosimetry for peptide receptor radionuclide therapy. Submitted for publication; 23. Dietlein F, Kobe C, Vázquez SM, et al. An (89)Zr-Labeled P S M A Tracer for PET C T Imaging of Prostate Cancer Patients. J Nucl Med. Apr 2022;63(4):573-583. doi:10.2967/jnumed.121.262290 24. Firefly I. Clarity Internal Preclinical Report (ID: PSM-T-r-001-2020), Unpublished: REPEATED DOSE 28-DAY INTRAVENOUS TOXICITY STUDY OF COSAR-(LYS- UREA-GLU)2 IN RODENT BASED ON OECD 407 (GLP STUDY). 2020. 25. WASHU. Clarity Internal Preclinical Report (ID: PSM-V-r-006-2020), Unpublished:",
        "Study to assess the biodistribution and dosimetry of copper-67-SAR-bisPSMA in C57BL6 mice. 2020. 26. Tourinho-Barbosa R, Srougi V, Nunes-Silva I, et al. Biochemical recurrence after radical prostatectomy: what does it mean? Int Braz J Urol. Jan-Feb 2018;44(1):14-21. doi:10.1590/s1677-5538.Ibju.2016.0656 27. PMCC. Clarity Internal Preclinical Report (ID: 08_2018 CLA24 &CLA25), Unpublished: Preclinical assessment of a novel Cu-64 MeCOSar-P S M A dimer. 2018. 28. Network NCC. National Comprehensive Cancer Network Guidelines® Clinical Practice Guidelines in Oncology (N C C N Guidelines®) Prostate Cancer Version 1.2023. N C C N.org: N C C N Guidelines®; 2023."
      ],
      "chips": [
        "CLP04",
        "p78/80",
        "Full protocol text"
      ],
      "visual": "cu64",
      "image": "assets/protocol/clp/c078.jpg",
      "cap": "Protocol page 78 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 79 of 80 · Investigator agreement (US)",
      "audio": [
        "14 INVESTIGATOR AGREEMENT Protocol Number: C L P zero four Protocol Title: Positron Emission Tomography using copper-64 SAR-bis-P S M A in participants with high-risk prostate cancer prior to radical prostatectomy: A prospective, single-arm, multi-center, blinded-review, Phase 3 diagnostic performance study For an Investigator in the United States: I have carefully read and understand the foregoing protocol and agree that it contains all the necessary information for conducting this study safely. I will conduct this study in strict accordance with this protocol, I C H guidelines for G C P, the CFR, the Health Insurance Portability and Accountability Act, and local regulatory guidelines. I will attempt to complete the study within the time designated.",
        "I will ensure that the rights, safety, and welfare of participants under my care are protected. I will ensure control of the drugs under investigation in this study. I will provide copies of the protocol and all other study-related information supplied by the Sponsor to all personnel responsible to me who participate in the study. I will discuss this information with them to assure that they are adequately informed regarding the drug and conduct of the study. I agree to keep records on all participant information (case report forms, shipment and drug return forms, and all other information collected during the study) and drug disposition in accordance with F D A regulations.",
        "I will not enroll any participants into this protocol until I R B approval and Sponsor approval are obtained. Site or Institution Name Site number Investigator Name (Print) Investigator Signature Date"
      ],
      "chips": [
        "CLP04",
        "p79/80",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/clp/c079.jpg",
      "cap": "Protocol page 79 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 80 of 80 · Investigator agreement (Australia) and signature",
      "audio": [
        "For an Investigator in Australia: The investigator will conduct this study as detailed herein, in compliance with current standards for the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use, Good Clinical Practice and the applicable regulatory requirements and will make every reasonable effort to complete the study within the time designated. The investigator will assure that no deviation from, or changes to the protocol will take place without prior agreement from the sponsor and documented approval from the Human Research Ethics Committee, except where necessary to eliminate an immediate hazard(s) to the study participants.",
        "This document contains information that is privileged or writing by the Sponsor or such disclosure is required by federal or other laws or regulations. Persons to whom any of this information is to be disclosed must first be informed that the information is confidential. These restrictions on disclosure will apply equally to all future information supplied, which is indicated as privileged or confidential. The investigator agrees that all staff members involved in the conduct of this study are informed about their obligations in meeting the above commitments. Site or Institution Name Site number Investigator Name (Print) Investigator Signature Date"
      ],
      "chips": [
        "CLP04",
        "p80/80",
        "Full protocol text"
      ],
      "visual": "pet",
      "image": "assets/protocol/clp/c080.jpg",
      "cap": "Protocol page 80 of 80 — CLP04 v2.0 CLARIFY",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What activity of ⁶⁴Cu-SAR-bisPSMA is given in CLARIFY?",
      "choices": [
        "185 MBq ± 10% (the GP-STAR FAPI dose)",
        "A single 200 MBq intravenous bolus on Day 1, injected activity within ±10%",
        "Two millicuries per kilogram over 10 minutes",
        "Generator elution, uncalibrated"
      ],
      "a": 1,
      "why": "Synopsis and Table 4: 200 MBq as a single IV bolus on Day 1; investigator confirms ±10% of prescribed."
    },
    {
      "q": "When are the two CLARIFY PET/CT acquisitions?",
      "choices": [
        "Only a 60-minute post-injection scan, like ⁶⁸Ga-PSMA-11",
        "Day 1 at 1–4 hours AND Day 2 at 24 ± 6 hours, mid-thigh to skull vertex",
        "Immediate and 6-hour only",
        "After radical prostatectomy"
      ],
      "a": 1,
      "why": "Copper-64 T½ 12.7 h makes a true delayed scan possible. Co-primary endpoints are reported independently at each time point."
    },
    {
      "q": "What is the CLARIFY co-primary endpoint?",
      "choices": [
        "Overall survival at 5 years",
        "Change in PSA after the scan",
        "Sensitivity AND specificity of ⁶⁴Cu PET for pelvic-node prostate cancer versus histopathology, independently on Day 1 and Day 2",
        "Agreement with the local radiologist only"
      ],
      "a": 2,
      "why": "Table 1. Standard of truth is histopathology, not the SOC PSMA PET."
    },
    {
      "q": "Who is blinded to the investigational PET when the pelvic nodes are read as truth?",
      "choices": [
        "Nobody — this is open-label pathology",
        "The local pathologist evaluating RP/PLND specimens",
        "Only the statistician",
        "The surgeon, who must operate from the copper-64 map"
      ],
      "a": 1,
      "why": "Synopsis: local pathologist is blinded to the ⁶⁴Cu-SAR-bisPSMA PET/CT scans/results."
    },
    {
      "q": "NCCN high-risk gate used for enrollment?",
      "choices": [
        "Any PSA",
        "Clinical stage ≥T3a, OR Grade Group ≥4, OR PSA >20 ng/mL (NCCN v1.2023)",
        "Gleason 6 only",
        "Metastatic castration-resistant disease"
      ],
      "a": 1,
      "why": "Inclusion criterion 4. Untreated adenocarcinoma — no ADT of any duration."
    },
    {
      "q": "Planned sample size?",
      "choices": [
        "10 (first-in-human)",
        "50",
        "383",
        "2,000"
      ],
      "a": 2,
      "why": "Synopsis and §4.1: 383 participants. PK substudy is a 10-participant subset at 1–2 sites."
    },
    {
      "q": "What is SAR-bisPSMA, structurally?",
      "choices": [
        "An FDG analogue",
        "A monoclonal antibody to PSMA",
        "Copper-64 chelated by bisCOSAR (sarcophagine) linked to two urea-based PSMA inhibitors",
        "A bone-seeking bisphosphonate"
      ],
      "a": 2,
      "why": "Synopsis dose section: three components — radionuclide, bifunctional chelator, dual PSMA motifs."
    },
    {
      "q": "Patient prep immediately around dosing?",
      "choices": [
        "NPO after midnight and oral contrast",
        "No fasting; hydrate well and void frequently, especially the first hour",
        "Furosemide mandatory",
        "Thyroid blockade with SSKI"
      ],
      "a": 1,
      "why": "§6.6.1. Void again immediately before each PET acquisition."
    },
    {
      "q": "Which treatments are prohibited from enrollment until RP+PLND?",
      "choices": [
        "Any antibiotic",
        "ADT, investigational neoadjuvant agents, and any other therapeutic intervention for prostate cancer",
        "Iodinated CT contrast",
        "Pain medication"
      ],
      "a": 1,
      "why": "§7.3. The diagnostic study must not be confounded by treatment that shrinks or hides nodes."
    },
    {
      "q": "Why can CLARIFY image at 24 hours when ⁶⁸Ga-PSMA-11 typically cannot?",
      "choices": [
        "Because the mass dose is higher",
        "Copper-64 physical half-life is 12.7 hours versus 68 minutes for gallium-68, so delayed TBR is physically available",
        "The PET camera is different",
        "Patients stay in hospital for a week"
      ],
      "a": 1,
      "why": "Background/rationale: delayed imaging after clearance of unbound tracer is the point of a Cu-64 bisPSMA construct."
    }
  ]
};


(function bootP00Clarify() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p00clarify: COURSE not ready");
    return;
  }
  const MOD_ID = "p0000";
  const ALIASES = { p0000: 1, P0000: 1, clp04protocol: 1, P00: 1, p00: 1 };
  function isP0000(id) {
    return !!ALIASES[id] || String(id || "").toLowerCase() === "p0000" || String(id || "").toLowerCase() === "p00";
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== "p0000" && m.id !== "clp04protocol");
  COURSE.modules.unshift(MODULE00);

  function protocolSrc(lesson) {
    if (!lesson || !lesson.image) return "";
    try { return (typeof resolveAsset === "function") ? resolveAsset(lesson.image) : lesson.image; }
    catch (e) { return lesson.image; }
  }
  function currentP00Lesson() {
    const st = window.NMBState;
    if (!st || !isP0000(st.moduleId)) return null;
    const mod = COURSE.modules.find(m => m.id === MOD_ID);
    return mod && mod.lessons && mod.lessons[st.lesson];
  }
  function pinProtocolPage() {
    const lesson = currentP00Lesson();
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
      if (mod && isP0000(mod.id) && lesson && lesson.image) {
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
      if (isP0000(id)) id = MOD_ID;
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
      if (window.NMBState && isP0000(NMBState.moduleId)) keepPinned();
    };
  }

  const extras = P00V;
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
      if (mod && isP0000(mod.id) && raw && extras[raw]) return raw;
      if (mod && isP0000(mod.id) && raw) {
        if (extras[raw]) return raw;
        const map = { clarify: "suv", psma: "psma", cu64: "decaymath", dualpet: "annihilation", truth2x2: "deauville" };
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
      if (!pager || document.getElementById("startP0000")) return;
      const b = document.createElement("button");
      b.id = "startP0000";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open P0000 protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule(MOD_ID);
      pager.appendChild(b);
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP && !/P0000/.test(heroP.textContent || "")) {
        heroP.textContent = "New: P0000 is CLARIFY — all 80 pages of CLP04 (⁶⁴Cu-SAR-bisPSMA PET before prostatectomy) with the same audio, atlas, and live-image player. P0P is GP-STAR. P01 is BET-121. Modules 00–13 stay the ABNM audiobook. Modules 14–30 add DR Core.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    const alias = { clarify: "pet", psma: "therapy", cu64: "f18", dualpet: "pet", truth2x2: "deauville" };
    if (Theater.clips) {
      Theater.clips.clarify = Theater.clips.pet || Theater.clips.fdg || Theater.clips.talk;
      Theater.clips.psma = Theater.clips.therapy || Theater.clips.pet;
      Theater.clips.cu64 = Theater.clips.f18 || Theater.clips.decay || Theater.clips.talk;
      Theater.clips.dualpet = Theater.clips.pet || Theater.clips.fdg;
      Theater.clips.truth2x2 = Theater.clips.deauville || Theater.clips.fdg;
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
        if (window.NMBState && isP0000(NMBState.moduleId)) {
          pinProtocolPage();
          return;
        }
        return origClip(key);
      };
    }
    if (typeof Theater.showVideo === "function") {
      const origShow = Theater.showVideo.bind(Theater);
      Theater.showVideo = function (on) {
        if (window.NMBState && isP0000(NMBState.moduleId)) {
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
    if (want && isP0000(want) && typeof openModule === "function") {
      openModule(MOD_ID);
      return;
    }
  } catch (e) {}
  const stage = document.getElementById("stage");
  if (stage && stage.querySelector(".hero-card") && typeof renderHome === "function") {
    renderHome();
  }
})();
