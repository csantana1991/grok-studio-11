/* Lantheus SPARROW / RM2-3301 / P000000000000000 ⁶⁸Ga-LNTH-2401 protocol audiobook.
   Loads last among protocol scripts. Mutates window.COURSE. */


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

  const MODULE15 = {
  "id": "p000000000000000",
  "num": "P000000000000000",
  "title": "P000000000000000 · SPARROW protocol · ⁶⁸Ga-LNTH-2401 GRPR PET/CT",
  "time": "~4 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this P000000000000000 · SPARROW protocol audiobook",
      "audio": [
        "This module is P 000000000000000 — a full read-through of Lantheus protocol R M 2-3301, study nickname SPARROW: Staging Prostate Cancer with Advanced R M 2 Radiotracer Oncologic Workup. Version 1.0, 30 April 2026.",
        "Investigational product: gallium-68 L N T H-2401, a gastrin-releasing peptide receptor tracer. Precursor is D O T A-R M 2. This is not P S M A. Complementary target in prostate cancer.",
        "Phase 2: up to 12 imaging-evaluable patients, 5 plus or minus 1 millicurie, 148 to 222 megabecquerels, serial PET for dose and time-window selection. Phase 3: about 396 newly diagnosed high-risk or suspected metastatic men heading to radical prostatectomy plus pelvic node dissection. Total about 408.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram.",
        "This is a teaching walk-through of a Phase 2/3 diagnostic PET protocol. It is not a substitute for the signed site protocol, the imaging charter, or I R B correspondence.",
        "Work page by page. One hundred protocol pages, plus this intro. After the last page, take the module quiz — G R P R versus P S M A, the millicurie range, Phase 2 I Q S rule, and the Phase 3 sensitivity and specificity bars."
      ],
      "chips": [
        "P000000000000000",
        "100 pages",
        "Web speech",
        "Protocol page on screen",
        "Same studio player"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s001.jpg",
      "cap": "SPARROW cover — ⁶⁸Ga-LNTH-2401 GRPR PET/CT in prostate cancer",
      "pearls": [
        "P000000000000000 is SPARROW / RM2-3301 — same play, pause, speed, atlas, and live-image dock as VECTRA and the other protocol modules.",
        "GRPR (bombesin / RM2), not PSMA. Phase 2 picks the millicurie and time window; Phase 3 is the histopathology-anchored pivotal.",
        "Teaching copy of a confidential sponsor protocol. Do not image or dose from this module."
      ]
    },
    {
      "title": "Page 1 of 100 · Cover · SPARROW · ⁶⁸Ga-LNTH-2401 GRPR PET/CT",
      "audio": [
        "CLINICAL STUDY PROTOCOL Protocol Title: A Prospective Phase 2/3, Multicenter, Open Label Study of [68Ga]- L N T H-2401 PET C T Imaging in Participants with Prostate Cancer: Phase 2 Dose Optimization in either Newly Diagnosed or Biochemically Recurrent Prostate Cancer and Phase 3 Diagnostic Performance in Participants who are Newly Diagnosed and Have at least High Risk or Suspected Metastatic Disease and Planning to Undergo Radical Prostatectomy Plus Pelvic Lymph Node",
        "Dissection (SPARROW) Protocol Number R M 2-3301 Investigational Product: gallium-68 L N T H-2401 Indication: Prostate Cancer Study Phase: Phase 2/3 Brief Title: Phase 2/3 gallium-68 L N T H-2401 PET C T Dose Optimization and Diagnostic Performance in Prostate Cancer (SPARROW [Staging Prostate Cancer with Advanced RM2 Radiotracer Oncologic Workup]).",
        "Sponsor Authorized Officer Name: Andrew Stephens, MD, PhD Head of Clinical Development Sponsor Institution: Lantheus Medical Imaging, Inc. 201 Burlington Road Bedford, MA 01730, USA Study Identifier Number(s) US - I N D Number 177584 (FDA) Protocol Version Number and Date Version 1.0, 30 April 2026 Confidentiality Statement This document contains confidential information of Lantheus Medical Imaging, Inc.",
        "and may only be used as expressly authorized by Lantheus Medical Imaging, Inc. Unauthorized use, distribution, copying, or disclosure is strictly prohibited unless required by applicable law. Persons receiving this information must be notified that it is confidential and may not be further distributed, copied, or disclosed without the prior written approval of Lantheus Medical Imaging, Inc."
      ],
      "chips": [
        "SPARROW",
        "p1/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s001.jpg",
      "cap": "Protocol page 1 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "SPARROW is Lantheus Phase 2/3 ⁶⁸Ga-LNTH-2401 GRPR PET/CT in prostate cancer.",
        "Protocol RM2-3301 v1.0, 30 April 2026. Teaching copy only."
      ]
    },
    {
      "title": "Page 2 of 100 · Sponsor signature · Stephens and Stambler · May 2026",
      "audio": [
        "SPONSOR SIGNATURE PAGE Protocol Title: A Prospective Phase 2/3, Multicenter, Open Label Study of gallium-68 L N T H-2401 PET C T Imaging in Participants with Prostate Cancer: Phase 2 Dose Optimization in Either Newly Diagnosed or Biochemically Recurrent Prostate Cancer and Phase 3 Diagnostic Performance in Participants who are Newly Diagnosed and Have at least High Risk or Have Suspected Metastatic Disease and Planning to Undergo Radical Prostatectomy Plus Pelvic Lymph Node",
        "Dissection (SPARROW) Protocol No: R M 2-3301 Version/Date: Version 1.0, 30 April 2026 This study protocol was subject to critical review and has been approved by the Sponsor.",
        "The information it contains is consistent with the risk/benefit evaluation of the investigational product as well as with the ethical, moral, and scientific principles governing clinical research as set out in the Declaration of Helsinki and the I C H guidelines on Good Clinical Practice and applicable laws and regulations. Sponsor’s Authorized Officer: Andrew Stephens, MD, PhD Head of Clinical Development Lantheus Medical Imaging, Inc.",
        "Date Nancy Stambler, MD, DRPh VP, Data Science Lantheus Medical Imaging, Inc. Date 07-May-2026 | 09:23 EDT 05-May-2026 | 16:51 EDT"
      ],
      "chips": [
        "SPARROW",
        "p2/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s002.jpg",
      "cap": "Protocol page 2 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 3 of 100 · Investigator agreement",
      "audio": [
        "INVESTIGATOR’S AGREEMENT Protocol Number: R M 2-3301 Version/Date: Version 1.0, 30 April 2026 Protocol Title: A Prospective Phase 2/3, Multicenter, Open Label Study of gallium-68 L N T H-2401 PET C T Imaging in Participants with Prostate Cancer: Phase 2 Dose Optimization in Either Newly Diagnosed or Biochemically Recurrent Prostate Cancer and Phase 3 Diagnostic Performance in Participants who are Newly Diagnosed and Have at least High Risk or Have Suspected Metastatic",
        "Disease and Planning to Undergo Radical Prostatectomy Plus Pelvic Lymph Node Dissection (SPARROW) I acknowledge that I have read the attached protocol and agree to conduct the study as outlined within.",
        "I agree to comply with all stated provisions, including but not limited to regulations/guidelines relevant to the conduct of human studies, as set forth by the Declaration of Helsinki, International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (I C H) guidelines on G C P, and applicable laws and regulations.",
        "I will not initiate the study until I have obtained written approval from the appropriate Institutional Review Board (I R B)/Ethics Committee (I E C). I will obtain written informed consent from all study participants prior to performing any screening procedures. I agree to maintain the confidentiality of all information received or developed in connection with this protocol.",
        "I understand and acknowledge that confidential information includes, but is not limited to, (i) the protocol, (ii) the data derived from the study, and (iii) my impressions of the progress or results of the study. I further agree that I will not use such confidential information for any purpose other than the evaluation or execution of the clinical investigation.",
        "I certify that I have not been disqualified by any regulatory authority or otherwise disqualified from serving as a Principal Investigator. I also agree that in the event I become debarred, I shall immediately cease all activities relating to the study. I am not presently, nor will I be, during the term of the study, a consultant or advisor to any division of any financial or securities firm.",
        "I understand that my signature on a case report form indicates that the data therein have been reviewed and is deemed to be complete, accurate, and acceptable to me. Principal Investigator Name (Printed) Signature of Investigator Date"
      ],
      "chips": [
        "SPARROW",
        "p3/100",
        "Full protocol text"
      ],
      "visual": "doseopt",
      "image": "assets/protocol/sparrow/s003.jpg",
      "cap": "Protocol page 3 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 4 of 100 · Emergency contacts · JeBailey / Stephens",
      "audio": [
        "CONTACTS IN CASE OF EMERGENCY Role in Study Name Email and Telephone Number Clinical Study Lead Lellean JeBailey, PhD Email: lellean.jebailey@lantheus.com Medical Monitor Andrew Stephens, MD, PhD Email: Andrew.Stephens@lantheus.com"
      ],
      "chips": [
        "SPARROW",
        "p4/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s004.jpg",
      "cap": "Protocol page 4 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 5 of 100 · TABLE OF CONTENTS SPONSOR SIGNATURE PAGE 2 INVESTIGATOR’S AGREEMENT 3 CONTACTS IN…",
      "audio": [
        "TABLE OF CONTENTS SPONSOR SIGNATURE PAGE 2 INVESTIGATOR’S AGREEMENT 3 CONTACTS IN CASE OF EMERGENCY 4 LIST OF ABBREVIATIONS AND DEFINITIONS 9 1. PROTOCOL SUMMARY 12 1.1. Synopsis 12 1.2. Schema 23 1.3. Schedule of Activities 24 2. BACKGROUND INFORMATION 31 2.1. Prostate Cancer Landscape and Evolving Diagnostics 31 2.2. G R P R as a Target in Prostate Cancer and gallium-68 L N T H-2401 31 2.3. Study Rationale 32 2.4. Summary of Nonclinical and Clinical Experience 33 2.5.",
        "Benefit/Risk Assessment 34 2.5.1. Risk Assessment 34 2.5.2. Benefit Assessment 35 2.5.3. Overall Benefit/Risk Conclusion 35 3. OBJECTIVES AND ENDPOINTS 37 3.1. Estimands 39 4. STUDY DESIGN 43 4.1. Phase 2 Dose Optimization Period 43 4.2. Phase 3 Diagnostic Performance Period 44 4.3. Justification for the Study Design 44 4.4. Justification for the Dose 45 4.5. End of Study Definition 45 5. STUDY POPULATION 47 5.1. Global Inclusion Criteria 47 5.2.",
        "Global Exclusion Criteria 48 5.3. Lifestyle Considerations 49 5.4. Screen Failures 49"
      ],
      "chips": [
        "SPARROW",
        "p5/100",
        "Full protocol text"
      ],
      "visual": "schema",
      "image": "assets/protocol/sparrow/s005.jpg",
      "cap": "Protocol page 5 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 6 of 100 · Protocol body · page 6",
      "audio": [
        "6. STUDY INTERVENTION 50 6.1. Description of Study Intervention 50 6.2. Preparation, Dosing, and Administration 50 6.3. Handling, Storage, and Accountability 51 6.4. Assignment to Study Intervention 51 6.5. Study Intervention Compliance 51 6.6. Treatment and Reporting of Overdose 52 6.7. Prior and Concomitant Medications 52 7. DISCONTINUATION OF INVESTIGATIONAL PRODUCT AND PARTICIPANT WITHDRAWAL FROM STUDY 53 7.1. Discontinuation of Investigational Product 53 7.2.",
        "Replacement of Participants 53 7.3. Lost to Follow-up 54 8. STUDY ASSESSMENTS AND PROCEDURES 55 8.1. Demographics and Baseline Characteristics 55 8.1.1. Timing and Requirements of Screening Assessments for Eligibility 55 8.1.2. Informed Consent 55 8.1.3. Baseline Medical Assessment 55 8.1.4. ECOG Performance Status 57 8.2. Imaging Assessments 57 8.2.1. Conventional Imaging 57 8.2.2. P S M A PET C T Assessment 58 8.2.3. Whole Body gallium-68 L N T H-2401 PET C T 58 8.2.3.1.",
        "Phase 2 Dose Optimization 58 8.2.3.2. Phase 3 Diagnostic Accuracy 58 8.2.4. Image-guided Biopsy 59 8.3. Medical Management Questionnaire 59 8.4. Safety Assessments 59 8.4.1. Vital Signs Measurements 59 8.4.2. 12-Lead ECG 60 8.4.3. Follow-up 60 8.5. Clinical Safety Laboratory Tests 60 8.6. Disease-related Biomarker Laboratory Assessments 60"
      ],
      "chips": [
        "SPARROW",
        "p6/100",
        "Full protocol text"
      ],
      "visual": "doseopt",
      "image": "assets/protocol/sparrow/s006.jpg",
      "cap": "Protocol page 6 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 7 of 100 · Protocol body · page 7",
      "audio": [
        "8.7. Adverse Events, SAEs, SUSARs, and Other Safety Reporting 61 8.7.1. Recording of Adverse Events 61 8.7.2. Regulatory Reporting Requirements for SAEs, S U S A R, and Periodic Reports 62 8.7.3. Collection and Reporting of Pregnancy 63 9. STATISTICAL CONSIDERATIONS 64 9.1. Statistical Hypotheses 64 9.1.1. Phase 2 Dose Optimization Period 64 9.1.2. Phase 3 Diagnostic Performance Period 64 9.2. Analysis Sets 64 9.2.1. Phase 2 Dose Optimization Period 64 9.2.2.",
        "Phase 3 Diagnostic Performance Period 65 9.3. Statistical Analyses 66 9.3.1. General Considerations 66 9.3.2. Primary Endpoints Analysis 66 9.3.3. Secondary Endpoint Analysis 67 9.3.4. Exploratory Endpoints Analysis (Phase 3 Diagnostic Performance Period Only) 69 9.3.5. Safety Analyses 69 9.3.6. Sample Size 70 10. REFERENCES 71 11. APPENDICES 74 APPENDIX 1. EASTERN COOPERATIVE ONCOLOGY GROUP ASSESSMENT 74 APPENDIX 2. CONTRACEPTION AND BARRIER GUIDANCE 75 APPENDIX 3.",
        "CLINICAL LABORATORY TESTS 76 APPENDIX 4. EXAMPLE PREDOSE PLANNED MEDICAL MANAGEMENT QUESTIONNAIRE 77 APPENDIX 5. EXAMPLE POSTDOSE PLANNED MEDICAL MANAGEMENT QUESTIONNAIRE 79 APPENDIX 6. EXAMPLE 6-MONTH POST-DOSE [68]GA-L N T H-2401 PLANNED MEDICAL MANAGEMENT QUESTIONNAIRE 81 APPENDIX 7. RADIOPROTECTION PRECAUTIONS FOR PARTICIPANTS 83 APPENDIX 8. DEFINITIONS AND PROCEDURES FOR RECORDING, EVALUATING, FOLLOW-UP, AND REPORTING ADVERSE EVENTS 84"
      ],
      "chips": [
        "SPARROW",
        "p7/100",
        "Full protocol text"
      ],
      "visual": "doseopt",
      "image": "assets/protocol/sparrow/s007.jpg",
      "cap": "Protocol page 7 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 8 of 100 · Protocol body · page 8",
      "audio": [
        "APPENDIX 9.",
        "GENERAL CONSIDERATIONS: REGULATORY, ETHICAL AND STUDY OVERSIGHT 90 LIST OF TABLES Table 1: Schedule of Activities for Phase 2 Dose Optimization Period 24 Table 2: Schedule of Activities for Phase 3 Diagnostic Performance Period 27 Table 3: Summary of Co-Primary Estimands for Phase 3 40 Table 4: Summary of Secondary Estimands 41 Table 5: Specifications of the drug product gallium-68 L N T H-2401 50 Table 6: List of Protocol-specific Clinical Laboratory Assessments 76 LIST OF",
        "FIGURES Figure 1: R M 2-3301 Phase 2 Dose Optimization Study Workflow 23 Figure 2: R M 2-3301 Phase 3 Diagnostic Performance Period Study Workflow 23"
      ],
      "chips": [
        "SPARROW",
        "p8/100",
        "Full protocol text"
      ],
      "visual": "schema",
      "image": "assets/protocol/sparrow/s008.jpg",
      "cap": "Protocol page 8 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 9 of 100 · LIST OF ABBREVIATIONS AND DEFINITIONS Abbreviation Definition [18F]-FCH…",
      "audio": [
        "LIST OF ABBREVIATIONS AND DEFINITIONS Abbreviation Definition [18F]-FCH [18F]-fluoromethylcholine ADR Adverse Drug Reaction adverse event Adverse events AESI Adverse events of special interest ALP Alkaline phosphatase ALT Alanine aminotransferase ARPI Androgen receptor pathway inhibitor AST Aspartate aminotransferase B C R Biochemically recurrent BMI Body mass index BUN Blood urea nitrogen CI Confidence interval CNS Central nervous system CrCl Creatinine clearance composite",
        "standard of truth Composite standard of truth CT Computed tomography C T C A E Common Terminology Criteria for Adverse Events CTIS Clinical Trials Information System DES Dosimetry - Evaluable Set external beam radiation External beam radiation therapy ECG Electrocardiograms ECOG Eastern Cooperative Oncology Group eCRF Electronic case report form eGFR estimated glomerular filtration rate EXM Exponential Modeling FDG Flurodeoxyglucose FFPE Formalin-fixed paraffin-embedded G C",
        "P Good Clinical Practice GGT Gamma-glutamyl transferase"
      ],
      "chips": [
        "SPARROW",
        "p9/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s009.jpg",
      "cap": "Protocol page 9 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 10 of 100 · Abbreviation Definition GRP Gastrin-releasing peptide GRPR Gastrin-releasing peptide…",
      "audio": [
        "Abbreviation Definition GRP Gastrin-releasing peptide G R P R Gastrin-releasing peptide receptor HIV Human immunodeficiency virus ICC Intra-class correlation coefficient ICF Informed consent form I C H International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use ICRP International Commission on Radiological Protection I D M C Independent Data Monitoring Committee I E C Independent ethics committees imaging evaluable set Imaging",
        "Evaluable Set image quality score Image quality scores I R B Institutional Review Board intent-to-image Intent-to-Image set IUC International Union Against Cancer IV Intravenous LAM Lactational amenorrhea method LDH Lactate dehydrogenase LNCaP Lymph node carcinoma of the prostate LQTS Long QT syndrome MedDRA Medical dictionary for regulatory activities MIRD Medical Internal Radiation Dose MMQ Medical Management Questionnaire mpMRI Multiparametric magnetic resonance imaging",
        "MRI Magnetic resonance imaging N Sample size NOEL No-observed effect level NCCN National Comprehensive Cancer Network NYHA New York Heart Association OLINDA Organ Level Internal Dose Assessment"
      ],
      "chips": [
        "SPARROW",
        "p10/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s010.jpg",
      "cap": "Protocol page 10 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 11 of 100 · Abbreviation Definition PCa Prostate cancer PET Positron emission tomography PK…",
      "audio": [
        "Abbreviation Definition prostate cancer Prostate cancer PET Positron emission tomography PK pharmacokinetics pelvic lymph node dissection Pelvic lymph node dissection PPV Positive predictive value PPS Per-protocol set PSA Prostate-specific antigen P S M A Prostate-specific membrane antigen PT Preferred term RLT Radioligand therapy radical prostatectomy Radical prostatectomy RPT Radiopharmaceutical therapy S A E Serious adverse event SAP Statistical analysis plan SAS Safety",
        "analysis set SD Standard deviation SOA Schedule of activities SOC System organ class SOD Sum of the diameters SOP Standard operating procedures standard of truth Standard of truth S U S A R Suspected unexpected serious adverse reactions SUVmax Maximum standardized uptake value SUVpeak Peak standardized uptake value SUVr Ratio to reference tissue standardized uptake value TAC Time activity curves TdP Torsade de pointes TEAE Treatment-emergent adverse events ULN Upper limit of",
        "normal"
      ],
      "chips": [
        "SPARROW",
        "p11/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s011.jpg",
      "cap": "Protocol page 11 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 12 of 100 · Synopsis · Phase 2/3 SPARROW",
      "audio": [
        "1. PROTOCOL SUMMARY 1.1. Synopsis Name of Sponsor: Lantheus Medical Imaging, Inc.",
        "Protocol Number: R M 2-3301 Title: A Prospective Phase 2/3, Multicenter, Open Label Study of gallium-68 L N T H-2401 PET C T Imaging in Participants with Prostate Cancer: Phase 2 Dose Optimization in Either Newly Diagnosed or Biochemically Recurrent Prostate Cancer and Phase 3 Diagnostic Performance in Participants Who are Newly Diagnosed and Have at Least High Risk or Suspected Metastatic Disease and Planning to Undergo Radical Prostatectomy Plus Pelvic Lymph Node",
        "Dissection (SPARROW) Name of Investigational Product: gallium-68 L N T H-2401 Population: Phase 2: Participants with either newly diagnosed or biochemically recurrent (B C R) prostate cancer (prostate cancer).",
        "Phase 3: Participants with newly diagnosed prostate cancer who are at least high-risk or have suspected metastatic disease (e.g., clinical suspicion without confirmation) and are planning to undergo radical prostatectomy plus pelvic lymph node dissection (radical prostatectomy plus pelvic lymph node dissection).",
        "Study Design: Open-label multicenter study consisting of: • Phase 2 Dose Optimization Period to assess dosimetry, biodistribution, and clinical safety of gallium-68 L N T H-2401 in participants with either newly diagnosed or B C R prostate cancer • Phase 3 Diagnostic Performance Period in participants with newly diagnosed prostate cancer who are at least high risk or have suspected metastatic disease to assess the diagnostic performance of gallium-68 L N T H-2401 PET C T",
        "imaging for detecting prostate cancer in pelvic lymph nodes (primary; compared to histopathology) and in other anatomic regions, as defined by study endpoints. Study Center(s) and Geography: Multicenter, United States Projected Number of Sites and Participants: In the Phase 2 Dose Optimization Period, up to 12 imaging evaluable participants will be enrolled.",
        "An estimated 396 participants are expected to be enrolled in the Phase 3 Diagnostic Performance Period at up to 30 planned study sites. The total study sample size is anticipated to be 408 participants. Duration (projected): Recruitment is expected to be completed in ~10 months for the Phase 2 Dose Optimization Period and approximately 24 months for the Phase 3 Diagnostic Performance Period.",
        "In the Phase 2 Period, participants are expected to participate for approximately 36 days. Participants are expected to participate in this study for approximately 6 months, from Screening through gallium-68 L N T H-2401 PET C T scanning and follow-up in the Phase 3 Period."
      ],
      "chips": [
        "SPARROW",
        "p12/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s012.jpg",
      "cap": "Protocol page 12 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 13 of 100 · 5 ± 1 mCi Phase 2 · two formulations",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 Investigational Product, Dosage, and Mode of Administration: gallium-68 L N T H-2401 is a Gastrin-releasing peptide receptor (G R P R) targeting radioligand that will be administered as a single intravenous injection (slow bolus). There will be two formulations used in this study: • Formulation 1 will be used during the Phase 2 period for dose and imaging-parameter optimization.",
        "• Formulation 2 will be used during the Phase 3 pivotal period for evaluation of diagnostic performance using the optimized parameters. During the Phase 2 period, gallium-68 L N T H-2401 will be administered at 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels). During the Phase 3 period, the intended commercial-use manufactured gallium-68 L N T H-2401 product will be administered for imaging at the optimized dose selected from the Phase 2 period.",
        "Study Design and Methodology: This is an open-label, nonrandomized, multicenter study conducted in two sequential parts: an initial Phase 2 Dose Optimization Period followed by the Phase 3 Diagnostic Performance Period.",
        "After the optimal administered activity and imaging time window are selected in Phase 2, Phase 3 will enroll participants with recently diagnosed prostate cancer who are at least high risk or have suspected metastatic disease and are eligible for radical prostatectomy with pelvic lymph node dissection (radical prostatectomy plus pelvic lymph node dissection).",
        "Safety assessments throughout the study will include monitoring of adverse events, vital signs, ECGs, and clinical laboratory parameters. Participants will be enrolled sequentially in a nonrandomized manner, with competitive enrollment across study sites.",
        "Phase 2 Dose Optimization Period During the Phase 2 period, participants will receive 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels) of [68Ga]- L N T H-2401 for PET C T imaging with the primary objectives of determining the optimal administered activity, imaging parameters and tissue dosimetry.",
        "Up to 12 participants with G R P R-positive lesion(s) will undergo serial PET C T scans at multiple time points during the first imaging visit to assess dosimetry and biodistribution. Data from 6 eligible participants with G R P R-positive lesion(s) will be used to determine the optimal administered activity and imaging time window for Phase 3, with the possibility of enrolling additional participants if warranted.",
        "Dosimetry will be estimated from imaging data collected during the dose optimization period and analyzed using standard, validated methodologies appropriate for PET radiopharmaceuticals. Dosimetry calculations will be performed using Organ Level Internal Dose Assessment (OLINDA)."
      ],
      "chips": [
        "SPARROW",
        "p13/100",
        "Full protocol text"
      ],
      "visual": "doseopt",
      "image": "assets/protocol/sparrow/s013.jpg",
      "cap": "Protocol page 13 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "Phase 2: 5 ± 1 mCi (148–222 MBq), up to 12 imaging-evaluable, newly diagnosed or BCR.",
        "Formulation 1 for optimization; Formulation 2 (commercial-intent) for Phase 3."
      ]
    },
    {
      "title": "Page 14 of 100 · Phase 3 pelvic-LN histopathology SOT",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 Image quality evaluation will include qualitative assessment by qualified image readers and quantitative assessment of tumor-to-background characteristics for lesions identified on PET C T. Lesion(s) demonstrating uptake consistent with G R P R expression may be evaluated to support assessment of lesion conspicuity, contrast, and interpretability across evaluated imaging parameters.",
        "These exploratory evaluations will be used solely to support selection of the optimized administered activity and imaging time window. Phase 2 dosimetry, biodistribution, and image quality assessment data will not contribute to the Phase 3 primary diagnostic performance analyses.",
        "Phase 3 Diagnostic Performance Period The Phase 3 Diagnostic Performance Period is designed to evaluate the diagnostic accuracy of gallium-68 L N T H-2401 PET C T for detecting prostate cancer in pelvic lymph nodes (primary; compared to histopathology) and in other anatomic regions, as defined by study endpoints. All Phase 3 participants will undergo gallium-68 L N T H-2401 PET C T imaging using the optimized administered activity and imaging time window selected in Phase 2.",
        "Diagnostic accuracy will be assessed using local histopathological evaluation of surgically removed pelvic lymph nodes, or other anatomic regions (as applicable) as the primary standard of truth (standard of truth).",
        "The primary diagnostic performance endpoints are participant-level sensitivity and participant-level specificity of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes, derived from pelvic lymph node region-level classifications compared with region-matched histopathology.",
        "Secondary diagnostic performance assessments will use a composite standard of truth (composite standard of truth) incorporating histopathology and, where applicable, anatomic correlation with conventional imaging modalities and/or P S M A PET imaging. All imaging data will be reviewed by 3 blinded central readers, and the composite standard of truth will be established by an Independent Data Monitoring Committee (I D M C) in accordance with a predefined charter.",
        "Additionally, safety and tolerability will be evaluated following administration of [68Ga]- L N T H-2401 using the Phase 2-selected imaging parameters. Regional detection performance across anatomic sites and assessment of the impact of gallium-68 L N T H-2401 PET C T imaging on intended clinical management will also be explored in the Phase 3 portion of the study.",
        "Justification for the 2-part Study Design: The two-part study design, consisting of an initial Phase 2 Dose Optimization Period followed by the Phase 3 Diagnostic Performance Period, is intended to support robust evaluation of gallium-68 L N T H-2401 PET C T imaging while ensuring that diagnostic performance is assessed using optimized and well-characterized imaging parameters.",
        "The Phase 2 period allows for systematic evaluation of candidate administered activity levels and imaging time windows to identify parameters that provide acceptable image quality, tumor-to-background contrast, and assess safety in the participant population. This approach is appropriate for a novel G R P R-targeted PET radiotracer, for which optimization of imaging parameters is critical to ensure reliable lesion detection and interpretability across study sites."
      ],
      "chips": [
        "SPARROW",
        "p14/100",
        "Full protocol text"
      ],
      "visual": "doseopt",
      "image": "assets/protocol/sparrow/s014.jpg",
      "cap": "Protocol page 14 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "Phase 3 primary SOT is histopathology of pelvic nodes after RP+PLND.",
        "Three blinded central readers. Secondary CSOT may add CI / PSMA PET."
      ]
    },
    {
      "title": "Page 15 of 100 · Name of Sponsor: Lantheus Medical Imaging, Inc",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 Conducting this evaluation prior to the assessment of diagnostic accuracy reduces the risk that suboptimal imaging parameters could adversely affect diagnostic accuracy outcomes. The Phase 3 period is designed to evaluate the diagnostic performance of gallium-68 L N T H-2401 PET C T using the optimized imaging parameters selected during the Phase 2 period.",
        "By separating parameter selection from diagnostic performance evaluation, the study ensures that Phase 3 results reflect the performance of the imaging agent under conditions intended for clinical use. This separation also supports clear interpretation of diagnostic accuracy endpoints and alignment with regulatory expectations for pivotal imaging studies.",
        "Overall, the two-part design enables efficient clinical development by integrating early optimization within the same protocol while preserving the scientific and regulatory integrity of the pivotal diagnostic evaluation. This approach minimizes protocol amendments, reduces variability in imaging performance, and supports a clear and defensible evidentiary package for regulatory review.",
        "Objectives: Phase 2 Dose Optimization Period Primary Objective Primary Endpoint(s) To determine the optimal administered activity (radioactivity) and imaging time window for gallium-68 L N T H-2401 PET C T based on image quality and interpretability in participants with either newly diagnosed or B C R prostate cancer • Selected administered activity (radioactivity) and imaging time window for gallium-68 L N T H-2401 PET C T, based on prespecified image quality score (image",
        "quality score) criteria. To assess the biodistribution and radiation dosimetry of gallium-68 L N T H-2401 in participants with either newly diagnosed or B C R prostate cancer. • Time activity curves (TACs), describing the percentage of the injected activity versus time will be derived for standard organs. • Absorbed radiation doses of gallium-68 L N T H-2401in standard organs; whole-body effective dose will also be estimated.",
        "Evaluate the safety and tolerability of [68Ga] LNTH 2401 in participants with either newly diagnosed or B C R prostate cancer. • Frequency and severity of AEs per C T C A E version 6.0 for gallium-68 L N T H-2401. • Changes in clinical laboratory parameters (e.g., hematology, chemistry), vital signs, and ECG parameters after administration of gallium-68 L N T H-2401.",
        "• Correlation of dosimetry results after administration of gallium-68 L N T H-2401 with incidence and severity of AEs. Secondary Objective Secondary Endpoint(s) Refine the G R P R positivity definition • Prior and newly collected radioactivity uptake data to refine tumor-to-normal reference tissue (e.g., rectum) background criteria (e.g., SUVmean, SUVmax ranges) to support classification of lesions as G R P R-positive in participants with either newly"
      ],
      "chips": [
        "SPARROW",
        "p15/100",
        "Full protocol text"
      ],
      "visual": "doseopt",
      "image": "assets/protocol/sparrow/s015.jpg",
      "cap": "Protocol page 15 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 16 of 100 · Name of Sponsor: Lantheus Medical Imaging, Inc",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 diagnosed or B C R prostate cancer Phase 3 Diagnostic Performance Period Primary Objective(s) Primary Endpoint(s) Diagnostic accuracy (sensitivity and specificity) of gallium-68 L N T H-2401 PET C T imaging for detecting prostate cancer in pelvic lymph nodes, compared to histopathology.",
        "Co-primary endpoints of: • Participant-level specificity (TN/[TN + FP]) of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes relative to histopathology. • Participant-level sensitivity (TP/[TP + FN]) of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes relative to histopathology. Secondary Objective(s) Secondary Endpoint(s) Evaluation of the safety and tolerability of gallium-68 L N T H-2401.",
        "• Frequency and severity of AEs per C T C A E version 6.0 for gallium-68 L N T H-2401. • Changes in clinical laboratory parameters (e.g., hematology, chemistry), vital signs, and ECG parameters after administration of gallium-68 L N T H-2401.",
        "Determination of (true) detection rates of gallium-68 L N T H-2401 and conventional imaging (CT/MRI of pelvis, ultrasound, bone scan) or P S M A PET C T or PET/MRI among anatomic regions (e.g., bone, pelvic lymph nodes, extra-pelvic lymph nodes, soft tissue, prostate gland and prostatic regions other than lymph nodes).",
        "• The true detection and detection rates of gallium-68 L N T H-2401 PET C T among regions (e.g., bone, pelvic lymph nodes, extra-pelvic lymph nodes, soft tissue, prostate gland) between gallium-68 L N T H-2401 and conventional (CT/ MRI of pelvis, ultrasound, bone scan) and/or P S M A PET imaging. • Comparison of detection rates between P S M A and G R P R imaging, based on pre-specified analysis.",
        "Assessment of the diagnostic performance of gallium-68 L N T H-2401 PET C T imaging of prostate cancer within the prostatic region. • Specificity (TN/ [TN + FP]) of [68Ga]- L N T H-2401 PET C T imaging to determine the absence of prostate cancer within prostatic region relative to histopathology. • Sensitivity (TP/ [TP + FN)] of gallium-68 L N T H-2401 PET C T imaging a to determine the presence of prostate cancer within prostate relative to histopathology.",
        "To determine the patient level and region level diagnostic performance of [68Ga]- L N T H-2401 PET C T imaging prostate cancer within the pelvic lymph nodes or other metastatic lesions. PPV and NPV of gallium-68 L N T H-2401 PET C T imaging for prostate cancer relative to the composite standard of truth."
      ],
      "chips": [
        "SPARROW",
        "p16/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s016.jpg",
      "cap": "Protocol page 16 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 17 of 100 · To assess the impact of [68Ga]-LNTH-2401 PET/CT imaging on intended clinical…",
      "audio": [
        "To assess the impact of gallium-68 L N T H-2401 PET C T imaging on intended clinical management plans. Proportion of participants with any change in intended clinical management plan from pre-dose to post-dose gallium-68 L N T H-2401 PET C T, based on a review of clinical and radiographic participant data, and captured by the treating physician using a structured Medical Management Questionnaire (MMQ).",
        "Exploratory Objective(s) Exploratory Endpoint(s) To assess gallium-68 L N T H-2401 uptake among lesion locations (e.g., bone, lymph nodes, soft tissue, prostate gland).",
        "gallium-68 L N T H-2401 uptake in different anatomic regions (e.g., bone, lymph nodes, soft tissue, prostate gland) as defined by peak standardized uptake value (SUVpeak), maximum standardized uptake value (SUVmax), ratio to reference tissue standardized uptake value (SUVr) results derived from central readers, compared to histopathology.",
        "To assess the relationship between [68Ga]- L N T H-2401 and P S M A uptake in prostatic and extraprostatic lesions with baseline serum prostate-specific antigen (PSA) and/or serum testosterone levels and/or Gleason Score at time of diagnosis. The relationship between SUVpeak, SUVmax, and SUVr in prostatic and extraprostatic lesions with each of the following: baseline serum PSA, serum testosterone level, and Gleason Score at time of initial diagnosis.",
        "To assess the correlation between G R P R expression, as determined by immunohistochemistry (IHC), and the diagnostic outcomes of gallium-68 L N T H-2401 PET C T imaging to detect prostate cancer within the prostate gland and metastatic pelvic lymph nodes. Correlation between the expression levels of G R P R, as detected through IHC and gallium-68 L N T H-2401 PET C T imaging in participants.",
        "To compare the IHC-based expression of G R P R to P S M A Characterization of expression of G R P R and P S M A through IHC. Compare the diagnostic outcomes of [68Ga]- L N T H-2401 PET C T to P S M A PET C T or PET/MRI. Sensitivity and specificity of gallium-68 L N T H-2401 PET C T between P S M A PET C T or PET/MRI in identifying prostate cancer within the prostate gland, bone, pelvic lymph nodes, extra-pelvic lymph nodes and soft tissue.",
        "To evaluate the diagnostic performance of gallium-68 L N T H-2401 PET C T imaging in detecting pelvic lymph nodes greater than 5 mm in size. Sensitivity and specificity of gallium-68 L N T H-2401 PET C T imaging for detecting metastatic involvement in pelvic lymph nodes that are greater than 5 mm in size. To assess concordance between intended clinical management plans and subsequent management at 6 months post-dose, based on a 6-month follow-up MMQ.",
        "Concordance between intended management (predose and post-dose MMQ) and management reported on the 6-month follow-up MMQ (descriptive).",
        "Abbreviations: adverse event= Adverse events; B C R= Biochemically Recurrent; CT=computed tomography; C T C A E=Common Terminology Criteria for Adverse Events; ECG=electrocardiogram; FN=False Negative; FP=False Positive; G R P R=gastrin-releasing peptide receptor; IHC=immunohistochemistry; MMQ=Medical Management Questionnaire; MRI=Magnetic resonance imaging; NPV=negative predictive value; PET=positron emission tomography; PPV=positive predictive value; PSA=prostate-specific",
        "antigen; P S M A=prostate-specific membrane antigen; SUVmax=maximum standardized uptake value; SUVpeak=peak standardized uptake value; SUVr=ratio to reference tissue standardized uptake value; TN=True Negative; TP=True Positive."
      ],
      "chips": [
        "SPARROW",
        "p17/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s017.jpg",
      "cap": "Protocol page 17 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 18 of 100 · Study Population: Global Criteria (Applies to all Phases): The Global Inclusion and…",
      "audio": [
        "Study Population: Global Criteria (Applies to all Phases): The Global Inclusion and Global Exclusion criteria below applies to all phases unless superseded by phase-specific criteria. Global Inclusion Criteria Participants must meet all of the criteria below as defined to be enrolled in the study. 1. Participants must be male and greater than or equal to 18 years old or defined as adults per applicable local laws and regulations, at the time of signing the informed consent.",
        "2. Participants who are sexually active must agree to the following during the study and for 7 days after last administration of study drug: a. Use 2 highly effective contraceptive methods when engaging in sexual intercourse with partners who are pregnant or of childbearing potential (Appendix 2). b. Refrain from donating sperm. 3. Participants who are claustrophobic must be willing to take an anti-anxiety medication prescribed by their physician one hour prior to the scan.",
        "4. Eastern Cooperative Oncology Group (ECOG) performance status of 0 to 2. 5.",
        "Adequate organ function, defined as follows: Bone marrow reserve White blood cell count greater than or equal to 2.5 times 109/L OR absolute neutrophil count (ANC) greater than or equal to 1.5 times 109/L Platelets greater than or equal to 100 times 109/L Hemoglobin greater than or equal to 9 g/dL Liver function Total bilirubin less than or equal to 1.5 times institutional upper limit of normal (ULN).",
        "For participants with known Gilbert’s syndrome, less than or equal to 3 times ULN is permitted. Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) less than or equal to 3.0 times ULN Renal function Estimated glomerular filtration rate (eGFR >60 mL/min/1.73 m2) calculated using the CKD EPI 2021 creatinine equation (raceneutral).80 The eGFR must be derived from a serum creatinine value measured at Screening Albumin greater than or equal to 30 g/L.",
        "Pancreatic function Serum amylase and lipase less than or equal to 1.5 times ULN. 6. All participants must have histological, pathological, and/or cytological confirmation of adenocarcinoma of the prostate and meet either disease population based on the phase-specific criteria below, as applicable. a.",
        "Newly Diagnosed Prostate Cancer (Phase 2 and 3): high-risk prostate cancer as defined by the National Comprehensive Cancer Network (NCCN) Guidelines, Version 5.2026 (clinical stage greater than or equal to T3a, or PSA >20 ng/mL, or Grade Group 4-5"
      ],
      "chips": [
        "SPARROW",
        "p18/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s018.jpg",
      "cap": "Protocol page 18 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 19 of 100 · Name of Sponsor: Lantheus Medical Imaging, Inc",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 [Gleason score 8-10]), and planned treatment with radical prostatectomy plus pelvic lymph node dissection (radical prostatectomy plus pelvic lymph node dissection) or b.",
        "Biochemically Recurrent Prostate Cancer (Phase 2 Only) Post-definitive-therapy disease with suspected recurrence, based on elevated prostate-specific antigen (PSA) following definitive therapy, meeting one of the following criteria: • Post-radical prostatectomy (radical prostatectomy): Detectable or rising serum PSA greater than or equal to 0.2 ng/mL with a confirmatory serum PSA greater than or equal to 0.2 ng/mL, consistent with American Urological Association (AUA)",
        "recommendations; or • Post-radiation therapy (RT), cryotherapy, or brachytherapy: Increase in serum PSA greater than or equal to 2.0 ng/mL above the nadir, consistent with the American Society for Therapeutic Radiology and Oncology (ASTRO)-Phoenix consensus definition. 7. Must be able and willing to comply with all study requirements and treatments as well as the timing and nature of required assessments.",
        "Global Exclusion Criteria Participants meeting any of the following exclusion criteria are not eligible for this study. 1. Participants that have been administered any high-energy (> 300 KeV) gammaemitting radioisotope within 5 physical half-lives, or any intravenous (IV) iodinated contrast medium within 24 hours, or any high-density oral contrast medium (oral water contrast is acceptable) within 5 days prior to study drug injection. 2.",
        "Participants are excluded if they have received any other prior anti-cancer therapy (including radioligand therapy) or investigational agent within less than or equal to 28 days (or 5 halflives, whichever is shorter) prior to the first dose of study treatment. Note: Prior external beam radiation therapy (external beam radiation) is permitted for Phase 2 participants with B C R prostate cancer only. 3.",
        "Participants who are planning to undergo alternate medical procedures for prostate cancer from the time of dosing (Day 1) to surgery. 4. History of malignancy other than prostate cancer that, in the opinion of the Investigator, is expected to alter life expectancy or may interfere with study assessments, including imaging interpretation or histopathological evaluation.",
        "Participants with adequately treated nonmelanoma skin cancer, superficial bladder cancer, or other malignancies that have been disease free for more than 2 years are eligible. 5. Any medical, psychological, familial, sociological, or geographical condition that, in the opinion of the Investigator, may compromise the participant’s ability to comply with study requirements, undergo study procedures, or result in the collection of reliable data. 6.",
        "Active participation in another clinical study at the time of screening for this study."
      ],
      "chips": [
        "SPARROW",
        "p19/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s019.jpg",
      "cap": "Protocol page 19 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 20 of 100 · Name of Sponsor: Lantheus Medical Imaging, Inc",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 7. Known contraindications or hypersensitivity to gallium-68 L N T H-2401 and/or excipients. 8. Clinical evidence or history of central nervous system metastases. 9. Clinically significant cardiovascular disease, that in the opinion of the Investigator may pose an unacceptable risk to the participant or interfere with study assessments. This includes any of the following: a.",
        "recent myocardial infarction or arterial thrombotic events (in the past 6 months); current history of New York Heart Association (NYHA) Class III or IV heart failure, uncontrolled angina, or severe uncontrolled ventricular arrhythmias; or bradycardia or left ventricular ejection fraction measurement of <50% (in the past 3 months); and/or b.",
        "history of additional risk factors for Torsade de pointes (e.g., heart failure, hypokalemia, congenital long QT syndrome, and/or familial history of prolonged QT syndrome) or taking medication known to cause QT/QTc prolongation; or marked baseline prolongation of the QT/QTc interval (e.g., repeated demonstration of a QTc interval, calculated with Fridericia’s correction, >450 ms), 10.",
        "Treatment-related adverse events from prior or concurrent therapies that have not resolved to grade less than or equal to 1 according to the C T C A E Version 6.0. 11. Imaging evidence of metastatic disease that precludes surgical indication.",
        "Statistical Methods and Analysis Overview This study comprises two sequential components: a Phase 2 Dose Optimization Period to optimize administered activity and imaging parameters, followed by the Phase 3 Diagnostic Performance Period to evaluate the diagnostic performance of gallium-68 L N T H-2401 PET C T using the optimized parameters.",
        "Statistical analyses are aligned with the objectives of each phase and are conducted separately, with global methods applied where appropriate. Binary endpoints will be summarized using point estimates and two-sided 95% confidence intervals. The normal approximation to the binomial distribution will be used where assumptions are met. If the assumptions are not met, exact methods will be used. Descriptive statistics will be used for exploratory endpoints.",
        "Phase 2 Dose Optimization Period The Phase 2 period is descriptive and exploratory in nature; no formal hypothesis testing is planned. Analyses will be conducted in participants with either newly diagnosed or B C R prostate cancer cancer enrolled in Phase 2. Biodistribution and radiation dosimetry, TACs, absorbed radiation doses of gallium-68 L N T H-2401 in standard organs, and whole-body effective dose will be estimated based on imaging"
      ],
      "chips": [
        "SPARROW",
        "p20/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s020.jpg",
      "cap": "Protocol page 20 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 21 of 100 · Name of Sponsor: Lantheus Medical Imaging, Inc",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 data collected during the Phase 2 period and summarized with descriptive statistics by organ and time point. Image quality scores assessed by central readers and quantitative assessment of tumor-tobackground characteristics for lesions identified on PET C T will be summarized with descriptive statistics.",
        "Phase 3 Diagnostic Performance Period Primary Analysis The primary objective of the Phase 3 period is to evaluate the diagnostic accuracy of [68Ga]- L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes and other anatomic regions as applicable, using histopathology as the primary standard of truth.",
        "The primary diagnostic performance endpoints are participant-level sensitivity and participantlevel specificity of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes, derived from pelvic lymph node region-level classifications compared with region-matched histopathology. Participant-level sensitivity and specificity will be estimated for each reader with point estimates and two-sided 95% confidence intervals.",
        "The normal approximation to the binomial distribution will be used where assumptions are met. If the assumptions are not met, exact methods will be used.",
        "Secondary and Sensitivity Analyses Secondary diagnostic performance endpoints will be evaluated using a hierarchical composite standard of truth, incorporating: • Histopathology (local) of surgically removed prostate gland and pelvic lymph nodes; and • Anatomical correlation with conventional imaging and/or P S M A PET imaging, where applicable.",
        "Secondary analyses will estimate positive predictive value (PPV) and negative predictive value (NPV) at the participant level for gallium-68 L N T H-2401 PET C T relative to the composite standard of truth. Additionally, (true) detection rates across anatomic regions (e.g., pelvic lymph nodes, extrapelvic lymph nodes, bone, soft tissue, and prostate gland) will be summarized, including comparative summaries versus conventional imaging and/or P S M A PET imaging as applicable.",
        "Additional analyses will assess inter-reader and intra-reader agreement using kappa statistics with two-sided 95% confidence intervals. Safety Analyses Safety endpoints, including adverse events, laboratory parameters, vital signs, and ECGs, will be summarized descriptively using the safety analysis set. Adverse events will be coded using"
      ],
      "chips": [
        "SPARROW",
        "p21/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s021.jpg",
      "cap": "Protocol page 21 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 22 of 100 · Name of Sponsor: Lantheus Medical Imaging, Inc",
      "audio": [
        "Name of Sponsor: Lantheus Medical Imaging, Inc. Protocol Number: R M 2-3301 the current version of MedDRA and summarized by system organ class, preferred term, severity, and relationship to study drug. Sample Size Determination The Phase 2 Dose Optimization Period will enroll up to 12 imaging evaluable participants to support optimization of administered activity and imaging time window.",
        "No formal sample size justification is planned for Phase 2, as analyses are descriptive and exploratory. The Phase 3 Diagnostic Performance Period is planned to enroll approximately 396 participants.",
        "The sample size is based on assumptions of pelvic lymph node region-level specificity of 75% (with a lower bound of the two-sided 95% CI greater than or equal to 65%) and participant-level sensitivity of 35% (with a lower bound greater than or equal to 25%), assuming a true positive rate of approximately 30% and a dropout or early withdrawal rate of approximately 20%.",
        "Region-level classifications are used as the basis for deriving participant-level TP/FP/FN/TN using the prespecified priority rule; therefore, the region-level specificity assumption is intended to support precision of the participant-level specificity endpoint.",
        "Analysis Populations • Intent-to-Image (intent-to-image) Set (Primary Efficacy Population): All participants who receive [68Ga]-LNTH‑2401, regardless of whether PET C T imaging and/or the standard of truth (standard of truth) is available, valid, or evaluable. • Imaging Evaluable Set (imaging evaluable set): All participants in the intent-to-image Set with interpretable [68Ga]-LNTH‑2401 PET C T imaging per the Imaging Manual/charter.",
        "Analyses on the imaging evaluable set are supportive. • Per‑Protocol Set (PPS): A defined subset of the Imaging Evaluable Set (imaging evaluable set) excluding participants with major protocol deviations that may impact the primary diagnostic performance endpoints. Analyses on the PPS are supportive. • Safety Analysis Set (SAS): All participants who receive [68Ga]-LNTH‑2401. The safety analyses will be performed on the SAS.",
        "The schedule of activities (SoA) for the study is shown in Section 1.3."
      ],
      "chips": [
        "SPARROW",
        "p22/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s022.jpg",
      "cap": "Protocol page 22 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 23 of 100 · Figures 1–2 study workflows",
      "audio": [
        "1.2. Schema Figure 1: R M 2-3301 Phase 2 Dose Optimization Study Workflow Abbreviations: N=sample size; prostate cancer=prostate cancer; t=time. Figure 2: R M 2-3301 Phase 3 Diagnostic Performance Period Study Workflow Abbreviations: N, sample size; prostate cancer, prostate cancer; t, time."
      ],
      "chips": [
        "SPARROW",
        "p23/100",
        "Full protocol text"
      ],
      "visual": "schema",
      "image": "assets/protocol/sparrow/s023.jpg",
      "cap": "Protocol page 23 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 24 of 100 · Protocol body · page 24",
      "audio": [
        "1.3. Schedule of Activities The Phase 2 Dose Optimization Period SOA is provided in Table 1, and the Phase 3 Diagnostic Performance Period SOA is provided in Table 2. Table 1: Schedule of Activities for Phase 2 Dose Optimization Period Assessment/Procedure Notes Screening Visita Imaging Visit Follow-up Day −28 to −1 Day 1 Day 5 post dose ( plus or minus 2 days) Pre-Dose Time 0 PostDose Informed consent Must be completed before any study procedures.",
        "X Eligibility X X Demographics Collected at Screening as outlined in Section 8.1 X Medical history, including cancer and smoking historiesb A detailed prostate cancer medical history (e.g., diagnosis and staging information, surgeries), as well as relevant prior PSA and testosterone results and prior conventional/ P S M A imaging results (if available) needs to be included. See Section 8.1 for more information.",
        "X Prior cancer therapiesc X ECOG performance status At Screening; confirm at Imaging/EOS. X X X Height/Weight Height collected at Screening, weight collected at Screening, then as noted here.",
        "X (Height & Weight) Weight only Weight only (as applicable) Vital signs Vital signs will be collected at same time as height and weight collection and at 15 ( plus or minus 5) min before as well as 30 ( plus or minus 5) and 60 ( plus or minus 5) min after administration of gallium-68 L N T H-2401. See Section 8.4.1 for details. X X X X"
      ],
      "chips": [
        "SPARROW",
        "p24/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s024.jpg",
      "cap": "Protocol page 24 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 25 of 100 · Assessment/Procedure Notes Screening Visita Imaging Visit Follow-up Day −28 to −1…",
      "audio": [
        "Assessment/Procedure Notes Screening Visita Imaging Visit Follow-up Day −28 to −1 Day 1 Day 5 post dose ( plus or minus 2 days) Pre-Dose Time 0 PostDose 12-lead ECGd All ECGs must be 12-lead and conducted after greater than or equal to 5 minutes of recumbency or semi-recumbency.",
        "Each study drug administration requiring ECG monitoring will include two single-timepoint ECGs: one obtained less than or equal to 1 hour prior to the start of administration and one obtained at completion of administration (+3 minutes).",
        "X X X gallium-68 L N T H-2401 administration X gallium-68 L N T H-2401 PET/CTe Imaging post gallium-68 L N T H-2401 administration at 15 plus or minus 5, 30 plus or minus 10, 60 plus or minus 10, and 120 plus or minus 15 minutes to support dosimetry and biodistribution assessments. Participants should have a full bladder at the 15 plus or minus 5 min timepoint and empty post the 60 plus or minus 10 min timepoint. See footnote and Section 8.2.3 for full instructions.",
        "X adverse event/S A E Collect from time of first study drug administration through last Follow-Up. X X X X X Prior and concomitant medications and proceduresf Collect within 28 days prior to signing informed consent through the Follow-up visit, or until participant withdrawal.",
        "X X X X X PSA PSA levels are to be measured at Screening per eligibility criteria; pre-dose if needed X Testosterone Testosterone levels are to be measured at Screening per eligibility criteria; pre-dose if needed X Hematology Laboratory tests performed within 3 days of [68Ga]- L N T H-2401 administration do not need to be repeated on Day 1. Only clinically significant laboratory values that meet criteria for AEs or SAEs as described in the protocol will be captured. X X X"
      ],
      "chips": [
        "SPARROW",
        "p25/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s025.jpg",
      "cap": "Protocol page 25 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 26 of 100 · Assessment/Procedure Notes Screening Visita Imaging Visit Follow-up Day −28 to −1…",
      "audio": [
        "Assessment/Procedure Notes Screening Visita Imaging Visit Follow-up Day −28 to −1 Day 1 Day 5 post dose ( plus or minus 2 days) Pre-Dose Time 0 PostDose Serum biochemistry Laboratory tests performed within 3 days of [68Ga]- L N T H-2401 administration do not need to be repeated on Day 1. Only clinically significant laboratory values that meet criteria for AEs or SAEs as described in the protocol will be captured.",
        "X X X End of Study The Day 5 ( plus or minus 2 days) post-dose Follow-up visit constitutes the EOS visit, unless the participant withdraws earlier. See Section 4.5 and Section 8.4.3 for details. X aScreening procedures are to be completed within 28 days prior to administration of gallium-68 L N T H-2401 unless otherwise noted. Applicable assessments performed as part of the participant’s standard of care within the Screening window are acceptable for Screening assessments.",
        "Laboratory testing may be repeated within the Screening window as needed. bRelevant ongoing and past medical conditions must be recorded, including chronic illnesses and any unresolved treatment effects from prior therapy inclusive of a detailed prostate cancer medical history will be collected. See Section 8.1 for more information.",
        "cAll prior cancer therapies, including initial and/or salvage treatments, radiation absorbed dose to critical organs from previous radiotherapy, and prior systemic treatments for prostate cancer, with best overall response and reasons for discontinuation must be recorded. dA single ECG is required at Screening to determine eligibility. Additional ECGs may be performed at the Investigator’s discretion to ensure participant safety.",
        "ECGs will be recorded electronically and evaluated locally. See Section 8.4.2 for more information. eRefer to Section 8.2 and the Imaging Technical Operations Manual for details of PET C T Imaging. All [68Ga]-LNTH 2401 PET C T images will be sent to the central imaging core laboratory for analysis.",
        "fCollect all medications (including over-the-counter and prescription medications, vitamins and/or herbal supplements) and any non-cancer therapy medical procedures/interventions as outlined in Section 6.7 and Section 8.1.",
        "Abbreviations: adverse event=adverse event; CT=computed tomography; ECG=electrocardiogram; ECOG=Eastern Cooperative Oncology Group; EOS=end of study; ICF=informed consent form; MMQ=Medical Management Questionnaire; prostate cancer=prostate cancer; PET=positron emission tomography; PI=Principal Investigator; PSA=prostate-specific antigen; P S M A=prostate-specific membrane antigen; S A E=serious adverse event."
      ],
      "chips": [
        "SPARROW",
        "p26/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s026.jpg",
      "cap": "Protocol page 26 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 27 of 100 · Table 2: Schedule of Activities for Phase 3 Diagnostic Performance Period…",
      "audio": [
        "Table 2: Schedule of Activities for Phase 3 Diagnostic Performance Period Assessment/Procedure Notes Screening Visit Imaging Visit Follow-up Day −28 to −1 Day 1 Post Dosing Predose Time 0 Post dosea Day 5 post dose ( plus or minus 2 days) Within 28 ( plus or minus 2) days post dose 6 months ( plus or minus 2) post dose Informed consent Must be completed before any study procedures.",
        "X Eligibility X X Demographics Collected at Screening as outlined in Section 8.1 X Medical history, including cancer and smoking historiesb A detailed prostate cancer medical history (e.g., diagnosis and staging information, surgeries), as well as relevant prior PSA and testosterone results and prior conventional/ P S M A imaging results (if available) needs to be included. See Section 8.1 for more information.",
        "X Prior cancer therapiesc X ECOG Performance Status At Screening; confirm at Imaging/EOS. X X X Height/Weight Height collected at Screening, weight collected at Screening, then as noted here. X (height/Weight ) Weight only Weight only P S M A PET/CTd Any commercially available and approved tracer may be used for P S M A PET C T per standard of care.",
        "X Conventional imaging (e.g., CTe or MRI, Bone Scanf) Obtain a contrast‑enhanced CT if not already obtained within 6 weeks prior to first dose. See Section 8.2.1 for additional information.",
        "X PSA (Total) PSA levels are to be measured at Screening per eligibility criteria; pre-dose if needed X Testosterone (Total) Testosterone levels are to be measured at Screening per eligibility criteria; pre-dose if needed X Vital signs Vital signs will be collected at same time as height and weight and at 15 ( plus or minus 5) min before as X X (predose) X X"
      ],
      "chips": [
        "SPARROW",
        "p27/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s027.jpg",
      "cap": "Protocol page 27 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 28 of 100 · Assessment/Procedure Notes Screening Visit Imaging Visit Follow-up Day −28 to −1 Day…",
      "audio": [
        "Assessment/Procedure Notes Screening Visit Imaging Visit Follow-up Day −28 to −1 Day 1 Post Dosing Predose Time 0 Post dosea Day 5 post dose ( plus or minus 2 days) Within 28 ( plus or minus 2) days post dose 6 months ( plus or minus 2) post dose well as 30 ( plus or minus 5) min and 60 ( plus or minus 5) min after administration of gallium-68 L N T H-2401. See Section 8.4.1 for details.",
        "(preimaging) 12-Lead ECGg All ECGs must be 12-lead and conducted after greater than or equal to 5 minutes of recumbency or semi-recumbency. Each study drug administration requiring ECG monitoring will include two single-timepoint ECGs: one obtained less than or equal to 1 hour prior to the start of administration and one at completion of administration (+3 minutes).",
        "X (predose) X (preimaging) Hematology Laboratory tests performed within 3 days of gallium-68 L N T H-2401 administration do not need to be repeated on Day 1. Only clinically significant laboratory values that meet criteria for AEs or SAEs as described in the protocol will be captured. X X X Serum biochemistry Only clinically significant laboratory values that meet criteria for AEs or SAEs as described in the protocol will be captured.",
        "X X X Prior and concomitant medications and proceduresh Collect within 28 days prior to signing informed consent through the Follow-up visit, or until participant withdrawal.",
        "X X X X X X X gallium-68 L N T H-2401 administration X Whole body [68Ga]- L N T H-2401 PET/CTi X Medical management questionnaire (MMQ)j The MMQ will be completed for participants who signed informed consent and met eligibility prior to Day 1 dosing and then at the subsequent timepoints as indicated here and the footnote below. See Section 8.3 for additional details. X X (post dosing, pre-surgery, and 6month follow-up MMQ)"
      ],
      "chips": [
        "SPARROW",
        "p28/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s028.jpg",
      "cap": "Protocol page 28 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 29 of 100 · Assessment/Procedure Notes Screening Visit Imaging Visit Follow-up Day −28 to −1 Day…",
      "audio": [
        "Assessment/Procedure Notes Screening Visit Imaging Visit Follow-up Day −28 to −1 Day 1 Post Dosing Predose Time 0 Post dosea Day 5 post dose ( plus or minus 2 days) Within 28 ( plus or minus 2) days post dose 6 months ( plus or minus 2) post dose adverse event/S A E Collect from time of first study drug administration through last Follow-Up. X X X X X X X Surgery k Standard of care radical prostatectomy plus pelvic lymph node dissection is expected following dosing.",
        "Surgery can only occur after the Day 5 Post Dose ( plus or minus 2 days) Visit but less than or equal to 45 days after dosing. X Image guided biopsy Image-guided biopsy for metastatic lesion confirmation may be performed if the lesion is accessible.",
        "(Section 8.2.4) X Follow-upl Day 5 ( plus or minus 2 days) Post Dose must be a site visit; all others can be conducted via telephone X (post dosing and pre-surgery) End of Study X aPost dose Imaging will be completed within the Phase 2-selected optimal parameters.",
        ", including cancer and smoking historiesbRelevant ongoing and past medical conditions must be recorded, including chronic illnesses and any unresolved treatment effects from prior therapy inclusive of a detailed detailed prostate cancer medical history will be collected. See Section 8.1 for more information.",
        "cAll prior cancer therapies, including initial and/or salvage treatments, radiation absorbed dose to critical organs from previous radiotherapy, and prior systemic treatments for prostate cancer, with best overall response and reasons for discontinuation must be recorded. dPSMA PET C T images will be submitted to the central imaging core laboratory per Section 8.1, Section 8.2, and imaging documentation.",
        "eIf CT is conducted at Screening, IV iodinated contrast medium must not be administered within 24 hours of study drug injection; high‑density oral contrast medium (oral water contrast acceptable) must not be administered within 5 days prior to study drug injection. fIf conducted as part of Screening, ¹⁸F‑NaF PET bone scans must be completed at least five physical half‑lives (10 hours) prior to [68Ga]-LNTH‑2401 injection.",
        "gA single ECG is required at Screening to determine eligibility. Additional ECGs may be performed at the Investigator’s discretion to ensure participant safety. ECGs will be recorded electronically and evaluated locally. See Section 8.4.2 for more information.",
        "hCollect all medications (including over-the-counter and prescription medications, vitamins and/or herbal supplements) and any non-cancer therapy medical procedures/interventions as outlined in Section 6.7 and Section 8.1. iRefer to Section 8.2 and the Imaging Technical Operations Manual for details of PET C T Imaging. All [68Ga]-LNTH 2401 PET C T images will be sent to the central imaging core laboratory for analysis.",
        "jThe post-dose MMQ will be completed after participants complete gallium-68 L N T H-2401 PET C T imaging and prior to surgery (when applicable). A 6-month follow-up MMQ will be completed at 6 ( plus or minus 2) months post dose to capture subsequent management."
      ],
      "chips": [
        "SPARROW",
        "p29/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s029.jpg",
      "cap": "Protocol page 29 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 30 of 100 · kIf a participant’s planned RP+PLND changes following [68Ga]-LNTH‑2401 imaging,…",
      "audio": [
        "kIf a participant’s planned radical prostatectomy plus pelvic lymph node dissection changes following [68Ga]-LNTH‑2401 imaging, record the alternate and/or additional procedure(s) and the corresponding histopathology data.",
        "lDay 5 post‑dose ( plus or minus 2 days) is the visit‑based early follow‑up timepoint; Within 28 ( plus or minus 2) days post‑dose captures protocol‑defined post‑dose follow-up activities (including standard‑of‑care procedure timing and other required follow‑up items, as applicable); 6 ( plus or minus 2) months post‑dose is the later follow-up timepoint and should not be moved to align with surgery scheduling.",
        "Abbreviations: adverse event=adverse event; CT=computed tomography; ECG=electrocardiogram; ECOG=Eastern Cooperative Oncology Group; EOS=end of study; ICF=informed consent form; MMQ=Medical Management Questionnaire; prostate cancer, prostate cancer; PE, physical examination; PET, positron emission tomography; PI, Principal Investigator; PSA, prostate-specific antigen; P S M A, prostate-specific membrane antigen; S A E, serious adverse event"
      ],
      "chips": [
        "SPARROW",
        "p30/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s030.jpg",
      "cap": "Protocol page 30 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 31 of 100 · Protocol body · page 31",
      "audio": [
        "2. BACKGROUND INFORMATION 2.1. Prostate Cancer Landscape and Evolving Diagnostics Prostate cancer (prostate cancer) represents a substantial global health burden and is the second-leading cause of cancer-related mortality among men in the United States.",
        "According to estimates from the American Cancer Society, approximately 313,780 new cases of prostate cancer were anticipated in 2025, resulting in an estimated 35,770 deaths.(Siegel, RL, et al., 2025; NCI Seer, 2024) The majority of prostate cancer deaths are attributable to metastatic and/or recurrent disease, underscoring the importance of accurate detection and localization across the disease continuum.(Roehl KA, et al, 2004) The most common approaches in diagnosing",
        "prostate cancer include serum PSA testing, image-guided biopsies, and contemporary imaging such as multiparametric prostate magnetic resonance imaging (mpMRI). However, up to 65% of lesions classified as suspicious on mpMRI may represent false-positive findings, and approximately 10% of prostate cancer cases may be missed by mpMRI.(Duan H, et al.",
        ", 2023; Le JD, et al, 2015; Rouvière O, et al, 2019; Leest MVD, et al, 2019; Truong M, et al, 2017; Johnson DC, et al, 2019) Furthermore, conventional anatomic imaging modalities (e.g., CT and MRI) and bone scintigraphy may be limited in localizing recurrent and/or metastatic prostate cancer, particularly at low PSA levels.",
        "(Oyen RH, et al, 1994; Pucar D, et al, 2008; Scheidler J, et al, 1999; Blomqvist L, et al, 2014) Molecular imaging with PET has therefore become an important component of the diagnostic and staging paradigm. As a result, the landscape of prostate cancer staging has evolved to include molecular imaging modalities such as target- based positron emission tomography (PET)/computed tomography (CT) and PET/magnetic resonance imaging (MRIs).",
        "Among the most promising targets is prostate-specific membrane antigen (P S M A), which is overexpressed in 90% to 95% of prostate cancer. Accordingly, P S M A-targeted PET imaging has become a standard component of prostate cancer diagnosis and management, and multiple P S M A PET agents have received FDA approval. (Duan H, et al.",
        ", 2023; Le JD, et al, 2015; Rouvière O, et al, 2019; Leest MVD, et al, 2019; Truong M, et al, 2017; Johnson DC, et al, 2019) Several pivotal studies have been conducted in prostate cancer patients across different stages of their disease development, to determine that P S M A PET C T is generally effective and accurate.",
        "However, P S M A-PET C T sensitivity varies widely (15%-100%), and while specificity is more consistent (73%-100%), there is room for improvement for primary tumor detection.",
        "In addition, P S M A-based imaging has recognized limitations, including heterogeneous P S M A expression and the potential for false-positive findings, and a subset of tumors may be insufficiently PSMAexpressing for reliable detection, underscoring the need for complementary imaging targets such as G R P R to support sensitive detection across P S M A-negative disease. (Oyen RH, et al, 1994; Pucar D, et al, 2008; Scheidler J, et al, 1999) 2.2.",
        "G R P R as a Target in Prostate Cancer and gallium-68 L N T H-2401 Gastrin-releasing peptide receptor (G R P R) is overexpressed in various malignant tumors across multiple anatomical sites, including the breast, prostate, lung, and gastrointestinal tract."
      ],
      "chips": [
        "SPARROW",
        "p31/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s031.jpg",
      "cap": "Protocol page 31 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 32 of 100 · (Baratto L, et al, 2020) It is highly expressed in the pancreas, inducing the…",
      "audio": [
        "(Baratto L, et al, 2020) It is highly expressed in the pancreas, inducing the release of endogenous gastric hormones and regulating the secretion of pancreatic enzymes.",
        "In prostate cancer specifically, G R P R is overexpressed in a high proportion of cases (reported in 60% to 100% of cases, particularly in earlier-stage disease) and is typically low in benign prostatic hyperplasia and prostatitis, supporting its evaluation as a complementary imaging target.13,14 gallium-68 L N T H-2401 is an investigational positron emission tomography (PET) radiotracer designed to image G R P R positive lesions.",
        "It consists of the synthetic bombesin receptor antagonist RM2 linked to a DOTA chelator and labeled with the positron-emitting radionuclide gallium-68, forming a stable radiolabeled complex suitable for PET imaging.",
        "In recent years, attention has shifted toward G R P R-targeting imaging on prostate cancer due to limitations observed in established imaging methods and confirmed receptor-specific binding of radiolabeled bombesin in prostatic intraepithelial neoplasia, with minimal binding in benign prostate or normal prostate tissue.",
        "gallium-68 L N T H-2401 has a significant potential for imaging prostate cancer at different stages of disease development with high specificity and favorable pharmacokinetics (PK).",
        "(Mansi R, et al, 2011; Minamimoto R, et al, 2018; Kähkönen E, et al, 2013; Minamimoto R, et al, 2016; Touijer KA, et al, 2019; Wangerin KA, et al, 2018; Wieser G, et al, 2017) Sponsor-led and Investigator-sponsored studies have evaluated the biodistribution, diagnostic performance, and safety of gallium-68 L N T H-2401; a concise rationale is provided in Section 2.3 and additional study details are summarized in the Clinical Experience section of this protocol.",
        "Refer to the Investigator’s Brochure (IB) for additional details on gallium-68 L N T H-2401, including chemistry, nonclinical pharmacology, and clinical experience. 2.3. Study Rationale The current diagnostic landscape for prostate cancer has improved with molecular imaging providing more accurate detection, but heterogeneous target expression and false-positive findings remain, creating an unmet need for the exploration of additional target-based imaging modalities.",
        "Based on its expression profile, the interest in G R P R based-prostate cancer diagnosis has expanded to include the evaluation of gallium-68 L N T H-2401 in Sponsor-led studies (Study 14269 and Study RM2-01-01-14) and multiple Investigator-led studies.",
        "(Mansi R, et al, 2011; Minamimoto R, et al, 2018; Kähkönen E, et al, 2013; Minamimoto R, et al, 2016; Touijer KA, et al, 2019; Wangerin KA, et al, 2018; Wieser G, et al, 2017) Collectively, these data suggest gallium-68 L N T H-2401 can provide high diagnostic specificity in visualizing of G R P R-positive prostate cancer lesions with favorable pharmacokinetics and safety profiles, supporting further evaluation of its performance in diagnosing prostate cancer tumors across",
        "the disease continuum. This Phase 2/3 study first aims to identify an optimal dose and further evaluate the dosimetry, biodistribution, and clinical safety of gallium-68 L N T H-2401 in participants with either newly diagnosed or B C R prostate cancer.",
        "The Phase 3 portion of the study will further evaluate the safety and tolerability of gallium-68 L N T H-2401 with the primary objectives to test its diagnostic performance in newly diagnosed participants who have at least high risk or suspected metastatic disease against histopathologybased standard of truth."
      ],
      "chips": [
        "SPARROW",
        "p32/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s032.jpg",
      "cap": "Protocol page 32 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 33 of 100 · Protocol body · page 33",
      "audio": [
        "2.4. Summary of Nonclinical and Clinical Experience Nonclinical studies were performed with gallium-68 L N T H-2401 and with D O T A R M 2 (the metalfree precursor). Where appropriate, non-radioactive gallium (69Ga) or alternate metal complexes (177Lu or 111In) were used as surrogates to support the development of gallium-68 L N T H-2401.",
        "In vitro pharmacology studies demonstrated high binding affinity of D O T A R M 2 to human G R P R and confirmed its antagonistic properties. D O T A R M 2 was selective for G R P R compared with other bombesin receptor subtypes. In preclinical PET imaging studies, gallium-68 L N T H-2401 demonstrated higher tumor-tobackground ratios in PC-3 human tumor-bearing mice compared with commonly used tracers such as [18F]-choline and [18F]-fluorodeoxyglucose (FDG).",
        "gallium-68 L N T H-2401 accumulated in PC-3 and lymph node carcinoma of the prostate (LNCaP) xenografts, enabling clear visualization by small-animal PET. Target specificity was confirmed by reduced tumor uptake following co-administration of non-radioactive D O T A R M 2 (blocking). Biodistribution and dosimetry studies in PC-3- and LNCaP-bearing mice demonstrated high tumor uptake, low nontarget organ uptake, and rapid excretion.",
        "Nonclinical safety studies with labeled or unlabeled D O T A R M 2 demonstrated substantial selectivity for G R P R versus other receptors and transporters, with a wide safety margin (>1575fold) for respiratory, cardiovascular, and central nervous system (CNS) effects at the targeted clinical dose.",
        "D O T A R M 2 showed low plasma protein binding (free fraction 72% to 81% in human plasma, 57% to 65% in rat plasma, and 70% to 71% in dog plasma) and rapid clearance, with most compound recovered in urine. In an extended single-dose rat study, a >15750-fold margin was observed between the no observed effect level (NOEL) and the anticipated clinical mass dose. No genotoxic potential of D O T A R M 2 or derivatives was observed in vitro.",
        "Clinical experience with gallium-68 L N T H-2401 includes two Sponsor-led studies (Lantheus Medical Imaging, Inc.; Study 14269 and Study RM2-0101-14) and multiple investigatorsponsored studies. In Study 14269, 19 participants (5 healthy volunteers and 14 participants with prostate cancer) received a single dose of gallium-68 L N T H-2401 (140 megabecquerels; range 134 to 145 megabecquerels).",
        "In healthy volunteers, highest activity was observed in the urinary bladder and liver (approximately 36% and 14% of injected activity, respectively). The highest mean absorbed dose was to the pancreas (0.51 mSv/megabecquerels [1.9 rem/millicuries]), followed by the urinary bladder wall (0.24 mSv/megabecquerels [0.88 rem/millicuries]).",
        "Pharmacokinetic assessments indicated rapid metabolism and renal/urinary excretion; unchanged tracer reached maximum plasma concentration at approximately 10 minutes and had a terminal half-life (t1/2) of 81 minutes. Treatment-emergent adverse events (TEAEs) were reported in 5 participants with prostate cancer and 2 healthy volunteers; none were considered related to gallium-68 L N T H-2401 and were attributed to study procedures.",
        "In Study RM2-0101-14, 30 participants with prostate cancer received a single dose of gallium-68 L N T H-2401 (140 megabecquerels). Histopathology and visual assessment of gallium-68 L N T H-2401 PET C T images were analyzed and compared with multiparametric MRI (mpMRI) and [18F]-fluoromethylcholine (FCH) PET C T. gallium-68 L N T H-2401 PET C T demonstrated sensitivity and specificity of 74% and 90%, compared with 60% and 80% for [18F]-FCH PET C T; results were comparable to"
      ],
      "chips": [
        "SPARROW",
        "p33/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s033.jpg",
      "cap": "Protocol page 33 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 34 of 100 · mpMRI (72% and 89%, respectively)",
      "audio": [
        "mpMRI (72% and 89%, respectively). Five mild adverse events were reported (including stomachache, headache, and dizziness); none were considered related to gallium-68 L N T H-2401. The initial Sponsor-led studies were followed by multiple investigator-sponsored studies, including experience in more than 300 participants.",
        "(Pucar D, et al, 2008; Touijer KA, et al , 2019; Wangerin KA, et al , 2018; Wieser G, et al, 2017; Mohseninia N, et al., 2025; Grzmil M, et al, 2025; Duan H, et al, 2023; Mapelli P, et al, 2022; Baratto L, et al, 2020; Fernández R, et al, 2023) Additional details on the chemistry, pharmacology, efficacy, and safety of gallium-68 L N T H-2401 are provided in the Investigator’s Brochure (IB). 2.5. Benefit/Risk Assessment 2.5.1.",
        "Risk Assessment Risks of Intervention As a radiodiagnostic agent, administration of gallium-68 L N T H-2401 results in ionizing radiation exposure from the radiopharmaceutical and the associated PET C T procedure. In this study, the administered activity in Phase 2 is 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels) with total body effective dose equivalent 4.1 to 6.2 mSv, respectively; in Phase 3, participants will receive the Phase 2-selected activity.",
        "Radiation exposure is expected to be within ranges used for other clinically employed PET radiopharmaceuticals, but any exposure to ionizing radiation is associated with a potential increased risk of malignancy. Pregnant or breastfeeding individuals will not be administered gallium-68 L N T H-2401. Because this study enrolls males, reproductive risk is limited to potential exposure of a partner and/or fetus.",
        "Therefore, participants who are sexually active with a partner who is pregnant or of childbearing potential must comply with the contraception requirements described in Appendix 2. There is no clinical experience with overdose of gallium-68 L N T H-2401. In the event of inadvertent administration of excess radioactivity, management would be supportive and may include hydration and frequent voiding to promote clearance, as clinically appropriate.",
        "The likelihood of overdose is minimized by site procedures for radiopharmaceutical preparation and administration, including verification of the administration volume and radioactivity using a dose calibrator prior to injection and administration by qualified site personnel (Section 6).",
        "Risks of Study Procedures Participants will continue to receive standard-of-care management for prostate cancer, including radical prostatectomy with pelvic lymph node dissection and/or biopsy, as clinically indicated. These procedures are not study interventions and will be performed at the discretion of the treating physician. The treating physician will counsel participants regarding the risks associated with any standard-of-care procedures and treatments.",
        "Study-specific procedures require coordination of gallium-68 L N T H-2401 administration and PET C T imaging with subsequent standard-of-care surgery and/or biopsy within protocolspecified windows (Section 1.3). Inadequate scheduling could result in missed windows, incomplete standard-of-truth data, or protocol deviations. These risks are mitigated through site training, protocol-defined windows, and active tracking of imaging and surgical/biopsy dates."
      ],
      "chips": [
        "SPARROW",
        "p34/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s034.jpg",
      "cap": "Protocol page 34 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 35 of 100 · Variability in image acquisition and interpretation may affect diagnostic performance",
      "audio": [
        "Variability in image acquisition and interpretation may affect diagnostic performance. This risk is mitigated through standardized imaging procedures, reader training, and blinded central image review by a core imaging laboratory, as specified in the Imaging Manual and applicable charters.",
        "Protocol-specified safety assessments (e.g., vital signs, ECGs, and clinical laboratory testing) may require venipuncture, which may be associated with transient pain or discomfort, bruising and/or bleeding, and, rarely, infection at the puncture site. Risks of Radiodiagnostic Procedures In addition to radiopharmaceutical-related exposure, the CT component of PET C T contributes additional ionizing radiation.",
        "Radiation dose will be minimized, consistent with achieving diagnostic-quality images, by adherence to the Imaging Manual and local radiation safety procedures. Participants will be instructed on practical measures to facilitate clearance of the radiopharmaceutical (e.g., hydration and frequent voiding), as appropriate. As with any diagnostic imaging test, false-positive and false-negative findings may occur.",
        "A negative gallium-68 L N T H-2401 PET C T scan does not exclude the presence of prostate cancer, and a positive scan may reflect nonmalignant processes or physiologic uptake in normal tissues. Study endpoints include assessment of false-positive and false-negative findings (Section 3).",
        "Image interpretation is intended to be considered in the context of other clinical information and, where applicable, will be evaluated against histopathology and/or the composite standard of truth as defined in this protocol. 2.5.2. Benefit Assessment This is a diagnostic imaging study, and participants may not receive direct clinical benefit from gallium-68 L N T H-2401 PET C T.",
        "Imaging results may provide additional information about disease extent that could be considered by the treating physician; however, participant management remains at the discretion of the treating team and per standard of care. Participants will undergo safety monitoring and protocol-required clinical assessments as described in the Schedule of Activities.",
        "Abnormal findings identified during required assessments may be communicated to the participant and managed by the Investigator consistent with standard clinical practice. Information obtained from this study is expected to contribute to the understanding of the safety, dosimetry, and diagnostic performance of gallium-68 L N T H-2401 PET C T, which may inform future clinical use and benefit future patients with prostate cancer. 2.5.3.",
        "Overall Benefit/Risk Conclusion Based on the available nonclinical and clinical data summarized in Section 2.3 and in the Investigator’s Brochure, gallium-68 L N T H-2401 has demonstrated a biodistribution profile and dosimetry consistent with a diagnostic PET radiopharmaceutical and has been administered in clinical studies without identification of unexpected safety concerns.",
        "The primary foreseeable risks to participants in this study are exposure to ionizing radiation and risks associated with imaging procedures and venipuncture, as well as the potential for false-positive or false-negative imaging results. These risks are mitigated by protocol-specified administered activity limits,"
      ],
      "chips": [
        "SPARROW",
        "p35/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s035.jpg",
      "cap": "Protocol page 35 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 36 of 100 · standardized imaging procedures, central blinded image review, and use of…",
      "audio": [
        "standardized imaging procedures, central blinded image review, and use of histopathology and/or a composite standard of truth for evaluation of diagnostic performance. The study is designed to generate clinically relevant evidence regarding the diagnostic performance of gallium-68 L N T H-2401 PET C T in the intended population.",
        "On balance, the anticipated scientific and potential clinical value of the information obtained justifies the foreseeable risks when the protocol-specified risk mitigation measures are implemented."
      ],
      "chips": [
        "SPARROW",
        "p36/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s036.jpg",
      "cap": "Protocol page 36 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 37 of 100 · Protocol body · page 37",
      "audio": [
        "3.",
        "OBJECTIVES AND ENDPOINTS Phase 2 Dose Optimization Period Primary Objective Primary Endpoint(s) To determine the optimal administered activity (radioactivity) and imaging time window for gallium-68 L N T H-2401 PET C T based on image quality and interpretability in participants with either newly diagnosed or B C R prostate cancer • Selected administered activity (radioactivity) and imaging time window for gallium-68 L N T H-2401 PET C T, based on prespecified image quality",
        "score (image quality score) criteria. To assess the biodistribution and radiation dosimetry of gallium-68 L N T H-2401 in participants with either newly diagnosed or B C R prostate cancer • Time activity curves (TACs), describing the percentage of the injected activity versus time will be derived for standard organs. • Absorbed radiation doses of gallium-68 L N T H-2401in standard organs; whole-body effective dose will also be estimated.",
        "Evaluate the safety and tolerability of [68Ga] LNTH 2401 in participants with either newly diagnosed or B C R prostate cancer • Frequency and severity of AEs per C T C A E version 6.0 for gallium-68 L N T H-2401. • Changes in clinical laboratory parameters (e.g., hematology, chemistry), vital signs, and ECG parameters after administration of gallium-68 L N T H-2401.",
        "• Correlation of dosimetry results after administration of gallium-68 L N T H-2401 with incidence and severity of AEs.",
        "Secondary Objective Secondary Endpoint(s) Refine the G R P R positivity definition • Prior and newly collected radioactivity uptake data to refine tumor-to-normal reference tissue (e.g., rectum) background criteria (e.g., SUVmean, SUVmax ranges) to support classification of lesions as GRPRpositive in participants with either newly diagnosed or B C R prostate cancer Phase 3 Diagnostic Performance Period Primary Objective(s) Primary Endpoint(s) Diagnostic accuracy (sensitivity",
        "and specificity) of gallium-68 L N T H-2401 PET C T imaging for detecting prostate cancer in pelvic lymph nodes, compared to histopathology. Co-primary endpoints of: • Participant-level specificity (TN/[TN + FP]) of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes relative to histopathology.",
        "• Participant-level sensitivity (TP/[TP + FN]) of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes relative to histopathology."
      ],
      "chips": [
        "SPARROW",
        "p37/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s037.jpg",
      "cap": "Protocol page 37 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 38 of 100 · Phase 3 Diagnostic Performance Period Secondary Objective(s) Secondary Endpoint(s)…",
      "audio": [
        "Phase 3 Diagnostic Performance Period Secondary Objective(s) Secondary Endpoint(s) Evaluation of the safety and tolerability of gallium-68 L N T H-2401. • Frequency and severity of AEs per C T C A E version 6.0 for gallium-68 L N T H-2401. • Changes in clinical laboratory parameters (e.g., hematology, chemistry), vital signs, and ECG parameters after administration of gallium-68 L N T H-2401.",
        "Determination of (true) detection rates of gallium-68 L N T H-2401 and conventional imaging (CT/MRI of pelvis, ultrasound, bone scan) or P S M A PET C T or PET/MRI among anatomic regions (e.g., bone, pelvic lymph nodes, extra-pelvic lymph nodes, soft tissue, prostate gland and prostatic regions other than lymph nodes).",
        "• The true detection and detection rates of gallium-68 L N T H-2401 PET C T among regions (e.g., bone, pelvic lymph nodes, extra-pelvic lymph nodes, soft tissue, prostate gland) between [68Ga]- L N T H-2401 and conventional (CT/ MRI of pelvis, ultrasound, bone scan) and/or P S M A PET imaging. • Comparison of detection rates between P S M A and G R P R imaging, based on pre-specified analysis.",
        "Assessment of the diagnostic performance of gallium-68 L N T H-2401 PET C T imaging of prostate cancer within the prostatic region. • Specificity (TN/ [TN + FP]) of gallium-68 L N T H-2401 PET C T imaging to determine the absence of prostate cancer within prostatic region relative to histopathology. • Sensitivity (TP/ [TP + FN)] of gallium-68 L N T H-2401 PET C T imaging a to determine the presence of prostate cancer within prostate relative to histopathology.",
        "To determine the patient level and region level diagnostic performance of [68Ga]- L N T H-2401 PET C T imaging prostate cancer within the pelvic lymph nodes or other metastatic lesions. PPV and NPV of gallium-68 L N T H-2401 PET C T imaging for prostate cancer relative to the composite standard of truth. To assess the impact of gallium-68 L N T H-2401 PET C T imaging on intended clinical management plans.",
        "Proportion of participants with any change in intended clinical management plan from pre- to post-[68Ga]- L N T H-2401 PET C T, based on a review of clinical and radiographic participant data, and captured by the treating physician using a structured questionnaire (MMQ). Exploratory Objective(s) Exploratory Endpoint(s) To assess gallium-68 L N T H-2401 uptake among lesion locations (e.g., bone, lymph nodes, soft tissue, prostate gland).",
        "gallium-68 L N T H-2401 uptake in different anatomic regions (e.g., bone, lymph nodes, soft tissue, prostate gland) as defined by peak standardized uptake value (SUVpeak), maximum standardized uptake value (SUVmax), ratio to reference tissue standardized uptake value (SUVr) results derived from central readers, compared to histopathology.",
        "To assess the relationship between [68Ga]- L N T H-2401 and P S M A uptake in prostatic and extraprostatic lesions with baseline serum prostate-specific antigen (PSA) The relationship between SUVpeak, SUVmax, and SUVr in prostatic and extraprostatic lesions with each of the following: baseline serum PSA, serum testosterone level, and Gleason Score at time of initial diagnosis."
      ],
      "chips": [
        "SPARROW",
        "p38/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s038.jpg",
      "cap": "Protocol page 38 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 39 of 100 · Phase 3 Diagnostic Performance Period and/or serum testosterone levels and/or…",
      "audio": [
        "Phase 3 Diagnostic Performance Period and/or serum testosterone levels and/or Gleason Score at time of diagnosis. To assess the correlation between G R P R expression, as determined by immunohistochemistry (IHC), and the diagnostic outcomes of gallium-68 L N T H-2401 PET C T imaging to detect prostate cancer within the prostate gland and metastatic pelvic lymph nodes.",
        "Correlation between the expression levels of G R P R, as detected through IHC and gallium-68 L N T H-2401 PET C T imaging in participants. To compare the IHC-based expression of G R P R to P S M A Characterization of expression of G R P R and P S M A through IHC. Compare the diagnostic outcomes of [68Ga]- L N T H-2401 PET C T to P S M A PET C T or PET/MRI.",
        "Sensitivity and specificity of gallium-68 L N T H-2401 PET C T between P S M A PET C T or PET/MRI in identifying prostate cancer within the prostate gland, bone, pelvic lymph nodes, extra-pelvic lymph nodes and soft tissue. To evaluate the diagnostic performance of gallium-68 L N T H-2401 PET C T imaging in detecting pelvic lymph nodes greater than 5 mm in size.",
        "Sensitivity and specificity of gallium-68 L N T H-2401 PET C T imaging for detecting metastatic involvement in pelvic lymph nodes that are greater than 5 mm in size. To assess concordance between intended clinical management plans and subsequent management at 6 months post-dose, based on a 6-month follow-up MMQ. Concordance between intended management (pre-dose and post-dose MMQ) and management reported on the 6-month follow-up MMQ (descriptive).",
        "Abbreviations: adverse event= Adverse event; B C R= Biochemically Recurrent; CT=computed tomography; C T C A E=Common Terminology Criteria for Adverse Events; ECG=electrocardiogram; FN= False Negative; FP= False Positive; G R P R=gastrin-releasing peptide receptor; IHC=immunohistochemistry; MMQ= Medical Management Questionnaire; MRI=Magnetic resonance imaging; NPV=negative predictive value; PET=positron emission tomography; PPV=positive predictive value;",
        "PSA=prostate-specific antigen; P S M A=prostate-specific membrane antaigen; SUVmax=maximum standardized uptake value; SUVpeak=peak standardized uptake value; SUVr=ratio to reference tissue standardized uptake value; TN= True Negative; TP= True Positive. 3.1.",
        "Estimands The primary clinical questions of interest for Phase 3 to be addressed are to determine the participant level specificity and sensitivity of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes, relative to region-matched histopathology, as assessed by independent blinded central readers in Phase 3 participants with newly diagnosed prostate cancer who have at least high risk or suspected metastatic disease and are planning to",
        "undergo radical prostatectomy plus pelvic lymph node dissection. Further details on the co-primary estimands are summarized in Table 3. Specificity and sensitivity are the standard measures of diagnostic accuracy for an imaging test intended to detect pelvic nodal metastases.",
        "As summarized in Table 3, defining estimands at the participant level and anchoring classification to region-matched histopathology supports clinically interpretable performance estimates for the intended-use setting, while independent blinded central reads and reader-specific summaries align with the prespecified Phase 3 success criteria."
      ],
      "chips": [
        "SPARROW",
        "p39/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s039.jpg",
      "cap": "Protocol page 39 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 40 of 100 · Secondary estimands for key secondary objectives in Phase 3 are summarized in Table…",
      "audio": [
        "Secondary estimands for key secondary objectives in Phase 3 are summarized in Table 3 Supplementary estimands may be defined in the SAP for supportive analyses (e.g., per-protocol analyses or alternative success rules for the co-primary endpoints). Estimands for exploratory objectives (e.g., uptake metrics such as SUVpeak/SUVmax/SUVr and comparisons with P S M A imaging) are exploratory and will be summarized descriptively as prespecified in the SAP.",
        "Table 3: Summary of Co-Primary Estimands for Phase 3 Estimand attribute Estimand: Specificity Estimand: Sensitivity Population Phase 3 participants with newly diagnosed prostate cancer who have at least high risk or suspected metastatic disease and are planning to undergo radical prostatectomy plus pelvic lymph node dissection, who receive gallium-68 L N T H-2401 and have interpretable gallium-68 L N T H-2401 PET C T and evaluable pelvic lymph node histopathology (Imaging",
        "Evaluable Set [imaging evaluable set], as defined in the SAP). Same as specificity. Treatment condition Single administration of gallium-68 L N T H-2401 at the Phase 2-selected administered activity followed by PET C T imaging at the Phase 2-selected imaging time window (treatment policy strategy). Same as specificity.",
        "Endpoint Participant-level specificity (TN/[TN+FP]) for pelvic lymph node detection, where participantlevel TP/FP/FN/TN are derived from pelvic lymph node region-level classifications versus regionmatched histopathology using the prespecified priority rule TP > FP > FN > TN (Section 9.3.3.2).",
        "Participant-level sensitivity (TP/[TP+FN]) for pelvic lymph node detection, where participant-level TP/FP/FN/TN are derived from pelvic lymph node regionlevel classifications versus regionmatched histopathology using the prespecified priority rule TP > FP > FN > TN (Section 9.3.3.2).",
        "Intercurrent events and handling strategy Intercurrent events that may preclude endpoint assessment (e.g., gallium-68 L N T H-2401 not administered, PET C T not performed or not interpretable, radical prostatectomy plus pelvic lymph node dissection not performed, pelvic lymph node histopathology not available) are handled using a hypothetical strategy by restricting the estimand to participants with evaluable imaging and the applicable standard of truth; details of analysis",
        "populations and handling of missing data are provided in the SAP. Same as specificity. Population-level summary For each independent blinded central reader: point estimate of participant-level specificity with a twosided 95% confidence interval. Study-level success is evaluated using the prespecified success rule and hierarchical testing strategy described in Section 1.1 and in the SAP.",
        "For each independent blinded central reader: point estimate of participant-level sensitivity with a two-sided 95% confidence interval. Study-level success is evaluated using the prespecified success rule and hierarchical testing strategy described in Section 9.3.3.2 and in the SAP."
      ],
      "chips": [
        "SPARROW",
        "p40/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s040.jpg",
      "cap": "Protocol page 40 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 41 of 100 · Table 4: Summary of Secondary Estimands Estimand Clinical question / Endpoint…",
      "audio": [
        "Table 4: Summary of Secondary Estimands Estimand Clinical question / Endpoint Treatment condition Population and ICE handling Population-level summary PPV/NPV vs composite standard of truth What are participantlevel PPV and NPV of gallium-68 L N T H-2401 PET C T relative to the composite standard of truth? Endpoint: Participantlevel PPV and NPV relative to composite standard of truth.",
        "Single administration of gallium-68 L N T H-2401 at the Phase 2- selected administered activity followed by PET C T imaging at the Phase 2-selected imaging time window (treatment policy strategy). Population: Phase 3 participants in the composite standard of truth analysis set (SAP-defined) with evaluable PET C T and composite standard of truth determination.",
        "ICE handling: Missing composite standard of truth handled using a hypothetical strategy by restricting to evaluable composite standard of truth (SAP-defined). Point estimates with twosided 95% CIs, summarized by reader as specified in the SAP. (True) detection rate by region What are detection rate and true detection rate across prespecified anatomic regions, and how do they compare descriptively with conventional imaging and/or P S M A PET imaging where available?",
        "Endpoint: By region, (a) detection rate ( greater than or equal to 1 PET-positive finding) and (b) true detection rate ( greater than or equal to 1 PET-positive finding that is CSOTpositive for that region), as defined in the SAP. Single administration of gallium-68 L N T H-2401 at the Phase 2- selected administered activity followed by PET C T imaging at the Phase 2-selected imaging time window (treatment policy strategy).",
        "Population: Phase 3 participants in the composite standard of truth regional analysis set (SAPdefined) with evaluable PET C T and evaluable regional composite standard of truth for the region(s) summarized. ICE handling: Missing regional composite standard of truth handled using a hypothetical strategy by restricting to evaluable regional composite standard of truth (SAP-defined). Point estimates by region with two-sided 95% CIs, summarized by reader where applicable.",
        "Comparative summaries are descriptive unless otherwise prespecified. Change in intended management (MMQ) What is the proportion of participants with any change in intended clinical management from pre- to postimaging MMQ? Endpoint: Any change in intended management plan (change vs no change) from pre- to post-imaging MMQ.",
        "Intended management assessed before and after receipt of gallium-68 L N T H-2401 PET C T imaging performed at the Phase 2-selected parameters (treatment policy strategy). Population: Phase 3 participants with evaluable paired MMQs (pre and post), SAP-defined. ICE handling: Missing pre- or postimaging MMQ handled using a hypothetical strategy by restricting to evaluable paired MMQs; missingness described.",
        "Proportion with any change and two-sided 95% CI; descriptive summaries by type of change per SAP."
      ],
      "chips": [
        "SPARROW",
        "p41/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s041.jpg",
      "cap": "Protocol page 41 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 42 of 100 · Estimand Clinical question / Endpoint Treatment condition Population and ICE…",
      "audio": [
        "Estimand Clinical question / Endpoint Treatment condition Population and ICE handling Population-level summary Safety and tolerability What is the safety profile of a single administration of [68Ga]- L N T H-2401? Endpoint: Incidence/severity of AEs (including TEAEs) and changes in safety assessments (laboratory parameters, vital signs, ECG), as specified.",
        "Single administration of gallium-68 L N T H-2401 (Phase 2 administered activity range; Phase 3 Phase 2-selected administered activity) and associated PET C T procedure (treatment policy strategy). Population: All participants who receive [68Ga]- L N T H-2401 (Safety Analysis Set). ICE handling: Treatment policy strategy (summarize regardless of protocol deviations). Descriptive summaries (counts/percentages) and descriptive statistics/shift tables as specified in the SAP."
      ],
      "chips": [
        "SPARROW",
        "p42/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s042.jpg",
      "cap": "Protocol page 42 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 43 of 100 · Protocol body · page 43",
      "audio": [
        "4. STUDY DESIGN This is an open-label, nonrandomized, multicenter Phase 2/3 study conducted in two sequential parts: Phase 2 Dose Optimization followed by Phase 3 Diagnostic Performance. Phase 2 prospectively evaluates administered activity and imaging time window and characterizes biodistribution, dosimetry, image quality, and safety to select imaging parameters for Phase 3 (Section 4.1).",
        "Phase 3 then evaluates diagnostic performance using the Phase 2-selected parameters in participants with newly diagnosed prostate cancer who have at least high risk or suspected metastatic disease and are planning to undergo radical prostatectomy plus pelvic lymph node dissection (Section 4.2). There will be 2 formulations of drug used in this study. During the Phase 2 period for dose and imaging-parameter optimization, Formulation 1 will be used.",
        "Formulation 2 will be used during the Phase 3 pivotal period for evaluation of diagnostic performance using the optimized parameters. Participants will be enrolled sequentially with competitive enrollment across sites, and safety will be monitored throughout the study per the Schedule of Activities in Section 1.3. 4.1.",
        "Phase 2 Dose Optimization Period During Phase 2, up to 12 imaging evaluable participants with either newly diagnosed or B C R prostate cancer will receive 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels) of gallium-68 L N T H-2401 for PET C T imaging.",
        "Participants will undergo PET C T imaging at one or more post-administration time points to support dosimetry and biodistribution assessment; at least 6 participants with G R P R-positive lesion(s) are expected to contribute to selection of the administered activity and imaging time window for Phase 3.",
        "Phase 2 PET C T acquisitions will include whole-body scans at 15 plus or minus 5, 30 plus or minus 10, 60 plus or minus 10, and 120 plus or minus 15 minutes post-administration, to support dosimetry and biodistribution assessments. Dosimetry calculations will be performed using Organ Level Internal Dose Assessment (OLINDA).",
        "List-mode PET data will be re-processed on the scanner and reconstructed to simulate scans of the same participant with lower radioactivity (4, 3, and 2 millicuries).",
        "Consistent with published evidence demonstrating that reader-determined diagnostic image quality can be achieved at appropriate administered activities, dose optimization will be based on image quality scores (image quality score) derived from PET C T images acquired at candidate administered activity levels and imaging time windows for the first 6 evaluable participants.",
        "Image quality will be assessed independently by three blinded central readers, with each participant’s image quality score calculated as the mean of the three reader scores and summarized across participants. The lowest administered activity level and time window meeting the prespecified acceptability criterion (mean image quality score greater than or equal to 10.5) will be selected as the optimal radioactivity and scan time.",
        "If the selected activity is <5 ( plus or minus 1) millicuries (148 to 222 megabecquerels), a validation cohort of additional 6 participants with G R P R-positive lesion(s) will be evaluated at the selected parameters. If the validation cohort does not meet the image quality score acceptability threshold, 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels)"
      ],
      "chips": [
        "SPARROW",
        "p43/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s043.jpg",
      "cap": "Protocol page 43 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 44 of 100 · will be designated as the final optimal activity",
      "audio": [
        "will be designated as the final optimal activity. Selection of the optimal imaging time window will be based on the totality of image quality, biodistribution, and dosimetry data. Exploratory lesion-based summaries to support administered activity and time-window selection will be based on participants with G R P R-positive lesion(s) (target n greater than or equal to 6).",
        "For this subset, qualitative and quantitative image characteristics (e.g., lesion conspicuity and tumor-tobackground measures for lesions demonstrating uptake consistent with G R P R expression) will be summarized descriptively across evaluated parameters. Phase 2 analyses are descriptive and exploratory in nature and will not contribute to the Phase 3 primary diagnostic performance analyses.",
        "Image quality evaluation will include qualitative assessment by qualified readers and quantitative assessment of lesion conspicuity (e.g., tumor-to-background characteristics) on PET C T. Lesions demonstrating uptake consistent with G R P R expression may be evaluated to support selection of the optimized administered activity and imaging time window.",
        "Phase 2 dosimetry, biodistribution, and image quality assessment data will not contribute to the Phase 3 primary diagnostic performance analyses. 4.2. Phase 3 Diagnostic Performance Period The Phase 3 Diagnostic Performance Period is designed to evaluate the diagnostic accuracy of gallium-68 L N T H-2401 PET C T for detecting prostate cancer in pelvic lymph nodes, compared with histopathology.",
        "All Phase 3 participants will undergo gallium-68 L N T H-2401 PET C T imaging using the optimized administered activity and imaging time window selected in Phase 2. Diagnostic accuracy will be assessed using local histopathological evaluation of surgically removed pelvic lymph nodes as the primary standard of truth (standard of truth).",
        "The primary diagnostic performance endpoints are participant-level sensitivity and participant-level specificity of gallium-68 L N T H-2401 PET C T for detection of prostate cancer in pelvic lymph nodes, derived from pelvic lymph node region-level classifications compared with region-matched histopathology.",
        "Secondary diagnostic performance assessments will use a composite standard of truth (composite standard of truth) incorporating histopathology and, where applicable, anatomic correlation with conventional imaging modalities and/or P S M A PET imaging. All imaging data will be reviewed by blinded central readers, and the composite standard of truth will be established by an Independent Data Monitoring Committee (I D M C) in accordance with a predefined charter.",
        "Additionally, safety and tolerability will be evaluated following administration of gallium-68 L N T H-2401 using the Phase 2-selected imaging parameters. Regional detection performance across anatomic sites and assessment of the impact of gallium-68 L N T H-2401 PET C T imaging on intended clinical management, based on comparison of management plans before and after imaging will also be explored in the Phase 3 portion of the study. 4.3.",
        "Justification for the Study Design This study is designed to support regulatory evaluation of gallium-68 L N T H-2401 PET C T by generating well-controlled evidence on safety, dosimetry, and diagnostic performance in the intended-use population. The protocol uses a sequential two-part approach to prospectively"
      ],
      "chips": [
        "SPARROW",
        "p44/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s044.jpg",
      "cap": "Protocol page 44 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 45 of 100 · optimize key imaging parameters for this GRPR-targeted radiotracer and then confirm…",
      "audio": [
        "optimize key imaging parameters for this G R P R-targeted radiotracer and then confirm diagnostic performance using the fixed parameters selected in Phase 2. Phase 2 evaluates candidate administered activity levels and imaging time windows to identify settings that provide acceptable image quality and lesion conspicuity while characterizing biodistribution, radiation dosimetry, and safety.",
        "Completing optimization prior to confirmatory analyses reduces the risk that non-optimized acquisition parameters could bias Phase 3 performance estimates or introduce avoidable variability across sites and readers. Phase 3 evaluates diagnostic performance using the Phase 2-selected administered activity and imaging time window, so performance estimates reflect conditions intended for clinical use.",
        "The Phase 3 design incorporates blinded central image interpretation and prespecified endpoint definitions to support robust and interpretable diagnostic accuracy results. 4.4. Justification for the Dose Radiation dosimetry of gallium-68 L N T H-2401 has been estimated in a Phase 1 proof-of-concept study.",
        "Five healthy participants were injected with 134 to 145 megabecquerels of gallium-68 L N T H-2401 and scanned on a PET C T at 1, 10, 20, 40, 100, and 200 minutes post-injection. Dosimetry analysis was conducted following the methodology and principles in the Medical Internal Radiation Dose (MIRD) pamphlet no.16 document.",
        "(Siegel JA, et al, 1999) Organ Level Internal Dose Assessment/Exponential Modeling (OLINDA/EXM) software (version 1.1) was used to estimate the organ absorbed dose and effective dose. (Stabin, et al, 2005) Based on collected data, the pancreas was identified as the limiting organ receiving the highest absorbed dose (0.51 mGy/megabecquerels) while the whole-body effective dose was estimated at 0.028 mSv/megabecquerels.",
        "Based on these data, administration of 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels) followed by a saline flush is proposed for this study. At the upper bound of 6 millicuries (222 megabecquerels) of gallium-68 L N T H-2401, the absorbed dose to the pancreas is estimated at 113.2 mGy, with a corresponding whole-body effective dose of 6.2 mSv.",
        "This radiation burden falls within the range of other routinely used [68Ga]-labeled tracers and is below the annual exposure limits recommended by the International Commission on Radiological Protection (ICRP). Furthermore, clinical experience supports the safety of the proposed activity range.",
        "Approximately 300 participants have been imaged with gallium-68 L N T H-2401 across several studies, in different patient populations, typically with injected activities around 3.8 millicuries (140 mBq). (Mohseninia, N, et al, 2025) In practice, the injected dose varied with a maximum of 6.7 millicuries (247.9 megabecquerels) reported.",
        "(Duan H, et al, 2022) Taken together, these findings support the proposed administration of up to 5 ( plus or minus 1) millicuries (148 to 222 megabecquerels) gallium-68 L N T H-2401 as safe, consistent with the international dosimetry guidelines, and appropriate to achieve adequate image quality for interpretation in this study.",
        "If a lower optimal activity dose is determined during the course of the study, the dose of gallium-68 L N T H-2401 may be amended for the rest of the participants. 4.5. End of Study Definition The end of study is defined as the date of the last visit or procedure shown in the schedule of activities (SoA) for the last participant in the study, or the data at which the last data point required for follow-up for the last participant is obtained, whichever occurs later."
      ],
      "chips": [
        "SPARROW",
        "p45/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s045.jpg",
      "cap": "Protocol page 45 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 46 of 100 · A participant is considered to have completed the study after completing all study…",
      "audio": [
        "A participant is considered to have completed the study after completing all study visits, including the Follow-Up visit(s)."
      ],
      "chips": [
        "SPARROW",
        "p46/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s046.jpg",
      "cap": "Protocol page 46 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 47 of 100 · Protocol body · page 47",
      "audio": [
        "5. STUDY POPULATION Prospective approval of protocol deviations to recruitment and enrollment criteria, also known as protocol waivers or exemptions, is not permitted. 5.1. Global Inclusion Criteria Participants must meet all of the criteria below as defined to be enrolled in the study. 1. Participants must be male and greater than or equal to 18 years old or defined as adults per applicable local laws and regulations, at the time of signing the informed consent. 2.",
        "Participants who are sexually active must agree to the following during the study and for 7 days after last administration of study drug: a. Use 2 highly effective contraceptive methods when engaging in sexual intercourse with partners who are pregnant or of childbearing potential (Appendix 2). b. Refrain from donating sperm. 3. Participants who are claustrophobic must be willing to take an anti-anxiety medication prescribed by their physician one hour prior to the scan. 4.",
        "Eastern Cooperative Oncology Group (ECOG) performance status of 0 to 2. 5. Adequate organ function, defined as follows: Bone marrow reserve White blood cell count greater than or equal to 2.5 times 109/L OR absolute neutrophil count (ANC) greater than or equal to 1.5 times 109/L Platelets greater than or equal to 100 times 109/L Hemoglobin greater than or equal to 9 g/dL Liver function Total bilirubin less than or equal to 1.5 times institutional upper limit of normal (ULN).",
        "For participants with known Gilbert’s syndrome, less than or equal to 3 times ULN is permitted. Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) less than or equal to 3.0 times ULN Renal function Estimated glomerular filtration rate (eGFR >60 mL/min/1.73 m2) calculated using the CKD EPI 2021 creatinine equation (race-neutral).80 The eGFR must be derived from a serum creatinine value measured at Screening Albumin greater than or equal to 30 g/L.",
        "Pancreatic function Serum amylase and lipase less than or equal to 1.5 times ULN. 6. All participants must have histological, pathological, and/or cytological confirmation of adenocarcinoma of the prostate and meet either disease population based on the phasespecific criteria below, as applicable. a.",
        "Newly Diagnosed Prostate Cancer (Phase 2 and 3): high-risk prostate cancer as defined by the National Comprehensive Cancer Network (NCCN) Guidelines, Version 5.2026 (clinical stage greater than or equal to T3a, or PSA >20 ng/mL, or Grade Group 4-5 [Gleason score 8-10]), and planned treatment with radical prostatectomy plus pelvic lymph node dissection (radical prostatectomy plus pelvic lymph node dissection) or b.",
        "Biochemically Recurrent Prostate Cancer (Phase 2 Only) Post-definitive-therapy disease with suspected recurrence, based on elevated prostate-specific antigen (PSA) following definitive therapy, meeting one of the following criteria:"
      ],
      "chips": [
        "SPARROW",
        "p47/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s047.jpg",
      "cap": "Protocol page 47 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 48 of 100 · • Post-radical prostatectomy (RP): Detectable or rising serum PSA greater than or…",
      "audio": [
        "• Post-radical prostatectomy (radical prostatectomy): Detectable or rising serum PSA greater than or equal to 0.2 ng/mL with a confirmatory serum PSA greater than or equal to 0.2 ng/mL, consistent with American Urological Association (AUA) recommendations; or • Post-radiation therapy (RT), cryotherapy, or brachytherapy: Increase in serum PSA greater than or equal to 2.0 ng/mL above the nadir, consistent with the American Society for Therapeutic Radiology and Oncology",
        "(ASTRO)-Phoenix consensus definition. 7. Must be able and willing to comply with all study requirements and treatments as well as the timing and nature of required assessments. 5.2. Global Exclusion Criteria Participants meeting any of the following exclusion criteria are not eligible for this study. 1.",
        "Participants that have been administered any high-energy (> 300 KeV) gamma-emitting radioisotope within 5 physical half-lives, or any intravenous (IV) iodinated contrast medium within 24 hours, or any high-density oral contrast medium (oral water contrast is acceptable) within 5 days prior to study drug injection. 2.",
        "Participants are excluded if they have received any other prior anti-cancer therapy (including radioligand therapy) or investigational agent within less than or equal to 28 days (or 5 half-lives, whichever is shorter) prior to the first dose of study treatment. Note: Prior external beam radiation therapy (external beam radiation) is permitted for Phase 2 participants with B C R prostate cancer only. 3.",
        "Participants who are planning to undergo alternate medical procedures for prostate cancer from the time of dosing (Day 1) to surgery. 4. History of malignancy other than prostate cancer that, in the opinion of the Investigator, is expected to alter life expectancy or may interfere with study assessments, including imaging interpretation or histopathological evaluation.",
        "Participants with adequately treated nonmelanoma skin cancer, superficial bladder cancer, or other malignancies that have been disease free for more than 2 years are eligible. 5. Any medical, psychological, familial, sociological, or geographical condition that, in the opinion of the Investigator, may compromise the participant’s ability to comply with study requirements, undergo study procedures, or result in the collection of reliable data. 6.",
        "Active participation in another clinical study at the time of screening for this study. 7. Known contraindications or hypersensitivity to gallium-68 L N T H-2401 and/or excipients. 8. Clinical evidence or history of central nervous system metastases. 9. Clinically significant cardiovascular disease, that in the opinion of the Investigator may pose an unacceptable risk to the participant or interfere with study assessments. This includes any of the following: a.",
        "recent myocardial infarction or arterial thrombotic events (in the past 6 months); current history of New York Heart Association (NYHA) Class III or IV heart failure, uncontrolled angina, or severe uncontrolled ventricular arrhythmias; or bradycardia or left ventricular ejection fraction measurement of <50% (in the past 3 months); and/or"
      ],
      "chips": [
        "SPARROW",
        "p48/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s048.jpg",
      "cap": "Protocol page 48 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 49 of 100 · Protocol body · page 49",
      "audio": [
        "b. history of additional risk factors for Torsade de pointes (e.g., heart failure, hypokalemia, congenital long QT syndrome, and/or familial history of prolonged QT syndrome) or taking medication known to cause QT/QTc prolongation; or marked baseline prolongation of the QT/QTc interval (e.g., repeated demonstration of a QTc interval, calculated with Fridericia’s correction, >450 ms). 10.",
        "Treatment-related adverse events from prior or concurrent therapies that have not resolved to grade less than or equal to 1 according to the C T C A E Version 6.0. 11. Imaging evidence of metastatic disease that precludes surgical indication. 5.3. Lifestyle Considerations gallium-68 L N T H-2401 is an ionizing radiation emitter that may have potentially toxic effects on the human body.",
        "gallium-68 L N T H-2401 is used as a diagnostic, small amounts of radiation are administered only once and the radiation source has a short half-life, therefore exposure is short. If a participant's partner becomes pregnant during the study, the participant should inform the Investigator. Participants will be given written instructions outlining the precautions they must take to minimize radiation exposure to people around them; details are provided in Appendix 6. 5.4.",
        "Screen Failures A screen failure occurs when a participant who consents to participate in the clinical study is not subsequently entered in the study. A minimal set of screen failure information is required to ensure transparent reporting of screen failure patients to meet the Consolidated Standards of Reporting Trials (CONSORT) publishing requirements and to respond to queries from regulatory authorities.",
        "Minimal information includes demography, screen failure details, eligibility criteria, and any S A E. Individuals who do not meet the criteria for participation in this study (screen failure) may be rescreened in either part of the study. Rescreened participants will be assigned a new patient number for every screening/rescreening event."
      ],
      "chips": [
        "SPARROW",
        "p49/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s049.jpg",
      "cap": "Protocol page 49 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 50 of 100 · Table 5 · drug product 3–6 mCi · DOTA-RM2",
      "audio": [
        "6. STUDY INTERVENTION Study interventions are all pre-specified, investigational, and non-investigational medicinal products, medical devices, and other interventions (e.g., surgical and behavioral) intended to be administered to the study participants during the study conduct. Dose modification is not applicable for this study as participants will receive a single dose, with no planned dose adjustments based on safety or tolerability. 6.1.",
        "Description of Study Intervention gallium-68 L N T H-2401 will be administered to identify newly diagnosed prostate cancer. gallium-68 L N T H-2401 will be prepared as a sterile ready-to-use solution as a single-dose injection product and manufactured and dispensed by a radiopharmacy as described per the Pharmacy Manual and local procedures. Details regarding gallium-68 L N T H-2401 and its excipients are listed in Table 5: . There will be two formulations used in this study.",
        "Formulation 1 will be used during the Phase 2 period for dose and imaging-parameter optimization. Formulation 2 will be used during the Phase 3 pivotal period for evaluation of diagnostic performance using the optimized parameters.",
        "Table 5: Specifications of the drug product gallium-68 L N T H-2401 Product Name gallium-68 L N T H-2401 Dosage Form Sterile solution for injection Appearance Clear, colorless to yellow sterile solution free of particulate matter pH 4.0-6.5 Radioactivity (68Ga) per dose at the time of injection Each dose contains an acceptable range of 3-6 millicuries (111-222 megabecquerels) of gallium-68 L N T H-2401 Drug Substance Precursor D O T A R M 2 (non-radioactive) less than or",
        "equal to 40 µg per dose Excipients (per 1 mL) Normal Saline (0.95 mL) Ethanol, Anhydrous (0.05 mL) Ascorbic acid (0.135 mg) Route of Administration gallium-68 L N T H-2401 will be administered as a single intravascular injection (slow bolus) 6.2. Preparation, Dosing, and Administration gallium-68 L N T H-2401 will be administered by or under the supervision of the Investigator or authorized user.",
        "Details of the study drug administration will be captured in each participant’s source records. gallium-68 L N T H-2401 will be administered as an intravascular injection (slow bolus) followed by a saline flush. The targeted injected dose (radioactivity) has an acceptable range of 3-6 millicuries (111-"
      ],
      "chips": [
        "SPARROW",
        "p50/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s050.jpg",
      "cap": "Protocol page 50 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "DOTA-RM2 precursor ≤40 µg. Labelled injection range 3–6 mCi (111–222 MBq).",
        "Slow IV bolus + saline flush. Ready-to-use from the radiopharmacy."
      ]
    },
    {
      "title": "Page 51 of 100 · MBq) of [68Ga]-LNTH-2401",
      "audio": [
        "222 megabecquerels) of gallium-68 L N T H-2401. If the dose is modified (delayed, reduced, or interrupted), the reason for the modification must be reported. 6.3. Handling, Storage, and Accountability The Investigator must allow adequate time for ordering, manufacturing, shipment, and receipt of gallium-68 L N T H-2401. Instructions on ordering and dose preparation are provided in the Pharmacy Manual.",
        "Only participants enrolled in the study may receive gallium-68 L N T H-2401 and only authorized site staff may supply or administer gallium-68 L N T H-2401. gallium-68 L N T H-2401 must be stored in a secure area in accordance with the labeled storage conditions with controlled access to authorized site staff.",
        "The radiolabeled drug substances gallium-68 L N T H-2401 contain radioactive material and should only be handled by personnel trained and experienced in using radioactive isotopes with proper shielding and monitoring. Receipt and use are limited to facilities authorized by the local government authority for Radioactive Material Control. Products should be stored in a suitable shielded container, i.e. lead or tungsten, at ambient temperature.",
        "gallium-68 L N T H-2401 will be inventoried and disposed of according to the applicable local regulations and will be stored in a secure, locked place with limited authorized access at the investigational site. Unused or residual waste should be disposed of as radioactive waste following the institution’s standard operating procedures (SOPs), applicable regulations and guidance required for radioactive materials.",
        "The site should ensure traceability of receipt and disposal of gallium-68 L N T H-2401 and maintain the related documentation in the Investigator file. The study Pharmacy Manual provides further guidance and information on the final disposition of unused study interventions. 6.4. Assignment to Study Intervention This is an open-label study, and all participants will receive gallium-68 L N T H-2401. 6.5.",
        "Study Intervention Compliance Participants should be encouraged to increase their fluid intake both before and after image acquisition to maintain proper hydration throughout the study period, decrease radiation exposure to the kidneys and urinary bladder, and improve image quality. Additionally, participants should be encouraged to void as frequently as possible. At a minimum, voiding post-study drug injection and after imaging is strongly encouraged.",
        "Radiation activity will be undetectable after gallium-68 L N T H-2401 administration within 12 hours due to the short half-life of 68Ga (68 minutes). While this radiation is not harmful to others, it may be detected by sensitive radiation detectors at ports of entry, such as international airports and border crossings by boat, car, or foot.",
        "Participants will be discharged from the study center according to the Code of Federal Regulations (10 CFR part 35) or equivalent local governing body. Where required by regulation, written instructions shall be provided to participants that conform to these regulations and in compliance with any and all requirements in the clinical site radioactive materials authorization."
      ],
      "chips": [
        "SPARROW",
        "p51/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s051.jpg",
      "cap": "Protocol page 51 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 52 of 100 · Protocol body · page 52",
      "audio": [
        "6.6. Treatment and Reporting of Overdose An overdose is defined as any dose of the study drug administered to a participant that exceeds the dose assigned to the participant according to the protocol. The risk of overdosage in this study is extremely low as the administration volume and the total radioactivity to be injected are verified with a dose calibrator prior to injection.",
        "In addition, intentional overdose by participants can be ruled out, as gallium-68 L N T H-2401 will only be administered by authorized site staff. However, in the event of an overdose, the participant should be monitored for any AEs for the duration of the safety reporting period. The study site should report to the Sponsor within 24 hours of first becoming aware of the overdose.",
        "The study site should comply with the reporting requirements of their radioactive materials license and 10 CFR Part 35 Medical Use of Byproduct Material (CFR, 2023). 6.7.",
        "Prior and Concomitant Medications As per the exclusion criteria (Section 5), participants are ineligible if they have received any other prior anti-cancer therapy (including radioligand therapy) or any investigational agent within less than or equal to 28 days (or 5 half-lives, whichever is shorter) prior to the first administration of [68Ga]- L N T H-2401.",
        "Prior external beam radiation therapy (external beam radiation) is permitted for Phase 2 participants with B C R prostate cancer only. If participants are actively participating in another clinical study at the time of screening for this study, they are ineligible for study participation.",
        "Additionally, participants cannot have been administered any high-energy (> 300 KeV) gammaemitting radioisotope within 5 physical half-lives; any IV iodinated contrast medium within 24 hours; or any high-density oral contrast medium (oral water contrast is acceptable) within 5 days prior to gallium-68 L N T H-2401 administration."
      ],
      "chips": [
        "SPARROW",
        "p52/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s052.jpg",
      "cap": "Protocol page 52 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 53 of 100 · Protocol body · page 53",
      "audio": [
        "7. DISCONTINUATION OF INVESTIGATIONAL PRODUCT AND PARTICIPANT WITHDRAWAL FROM STUDY 7.1. Discontinuation of Investigational Product A participant may withdraw from the study at any time for any reason without prejudice to future medical care by the physician or at the study site. Likewise, the Investigator and/or Sponsor have the right to withdraw participants from the study.",
        "Participants may be discontinued for any of the following reasons: • Significant protocol deviation or noncompliance • Adverse event(s) that precludes further participation • Best medical interest of the participant (Investigator decision) • Sponsor terminates the study • Participant withdraws consent • Participant is lost to follow-up • Partner pregnancy • Death Participants who wish to no longer participate in the study should not be considered withdrawn unless they",
        "withdraw consent. Should a participant withdraw from the study, the Investigator should make a reasonable effort to ascertain the reason(s), while fully respecting the participant’s rights. The Investigator should consider if a discussion with the participant or the participant’s legally acceptable representative is appropriate.",
        "This discussion should focus on the reasons for withdrawal to determine if there are ways to address the concerns such that the participant could reconsider their withdrawal without unduly influencing the participant’s decision. The Investigator or delegated Investigator site staff should consider explaining to the participant the value of continuing their participation to minimize study participants withdrawal.",
        "In this process, the Investigator should ensure that it does not interfere with the participant’s decision to refuse or withdraw participation at any time. The Investigator should make reasonable effort to complete the required study procedures as thoroughly as possible prior to withdrawal. Data will be collected for all withdrawn participants up until the time of discontinuation. The reason for discontinuation from the study will be recorded.",
        "If the participant withdraws consent for the disclosure of future information, the Sponsor may retain and continue to use any data collected before such a withdrawal of consent. 7.2. Replacement of Participants If a participant withdraws from the study prior to administration of gallium-68 L N T H-2401, then the participant may be replaced.",
        "If a participant is considered non-evaluable (as defined in the SAP), enrollment of a new participant will be considered to complete the required number of evaluable participants."
      ],
      "chips": [
        "SPARROW",
        "p53/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s053.jpg",
      "cap": "Protocol page 53 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 54 of 100 · Protocol body · page 54",
      "audio": [
        "7.3. Lost to Follow-up A participant will be considered lost to follow-up if they fail to return for scheduled visits without stating an intention to withdraw consent and is unable to be contacted by the study site.",
        "The following actions must be taken if a participant fails to return to the clinic for a required study visit: • The site must attempt to contact the participant and reschedule the missed visit as soon as possible, counsel the participant on the importance of maintaining the assigned visit schedule and ascertain whether the participant wishes to and/or should continue in the study.",
        "• Before a participant is deemed lost to follow-up, the Investigator or designee must make every effort to regain contact with the participant (where possible, 3 telephone calls, and if necessary, a certified letter to the participant’s last known mailing address or local equivalent methods). These contact attempts should be documented in the participant’s medical record."
      ],
      "chips": [
        "SPARROW",
        "p54/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s054.jpg",
      "cap": "Protocol page 54 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 55 of 100 · Protocol body · page 55",
      "audio": [
        "8. STUDY ASSESSMENTS AND PROCEDURES Study procedures and their timing are summarized for each period Section 1.3. The SOA for the Phase 2 Dose Optimization Period is in Table 1 and the Phase 3 Diagnostic Performance Period is provided in Table 2. Protocol waivers or exemptions are not allowed. Safety concerns should be discussed with the medical monitor immediately upon occurrence or awareness to determine if the participant should remain on study.",
        "Adherence to the study design requirements, including those specified in the SoA, is essential and required for study conduct. 8.1. Demographics and Baseline Characteristics 8.1.1.",
        "Timing and Requirements of Screening Assessments for Eligibility • Most screening procedures are to be completed within 28 days prior to the administration of gallium-68 L N T H-2401 according to the SOA (Section 1.3), with the exception of the P S M A PET C T assessment − P S M A PET C T imaging in Screening is to be completed within 45 days prior to the administration of gallium-68 L N T H-2401.",
        "Please refer to Section 8.2.2 for additional study-specific considerations regarding P S M A PET C T imaging. − If P S M A scan was conducted prior to signing ICF and withing the 45-day window, P S M A results will be accepted, and images/ data will be collected. • All screening evaluations must be completed and reviewed to confirm that potential participants meet all eligibility criteria.",
        "• The Investigator will maintain a screening log to record details of all participants screened and to confirm eligibility or record reasons for screening failure, as applicable. • Applicable assessments performed as part of the participant’s standard of care within the screening period will be acceptable for screening assessments. 8.1.2.",
        "Informed Consent A signed and dated informed consent form (ICF) must be obtained prior to any study procedures and any screening activities that are not otherwise considered part of normal patient care. Following informed consent, all participants will complete all screening procedures to determine eligibility within 28 days prior to the administration of gallium-68 L N T H-2401. 8.1.3.",
        "Baseline Medical Assessment At Screening, a baseline medical assessment will be performed in a sufficient manner to confirm eligibility and support participant safety. This assessment must include collection of the following variables."
      ],
      "chips": [
        "SPARROW",
        "p55/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s055.jpg",
      "cap": "Protocol page 55 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 56 of 100 · Demographics Demographic information to be obtained and recorded at screening…",
      "audio": [
        "Demographics Demographic information to be obtained and recorded at screening includes the participant’s age, sex, race, height, weight, ethnicity, and body mass index (BMI) as allowed by local law and regulations. Prostate Cancer and Other Ongoing or Relevant Medical and Surgical History A complete prostate medical history will be obtained at the first screening visit.",
        "Prostate medical history includes the following: • Review of prostate disease history • Prostate cancer staging • PSA results • Testosterone levels • Biopsy results (including Grade Group and corresponding Gleason score/pattern from the initial diagnostic biopsy), • All past/present therapies within 28 days prior to the administration of gallium-68 L N T H-2401 − Any past/present therapies associated with prostate medical history should be collected, even if outside the",
        "28-day window including radiation absorbed dose to critical organs from previous radiotherapy (external beam radiation and/or RPT) • Other clinically relevant medical history will be collected. This should include any past and/or current medical conditions that, in the opinion of the investigator, are clinically relevant regardless of resolution.",
        "• Special attention should be paid to prior malignancies other than prostate cancer or concurrent or past conditions that can change pelvic anatomy or cause lymphadenopathies (e.g., viral, bacterial, or parasitic infections).",
        "Prior and Concomitant Medications and Procedures, Including Surgery • Collect all medications (including over the counter and prescription medications, vitamins, and/or herbal supplements) and any non-cancer therapy medical procedures/interventions, as well as all ongoing medical history conditions or AEs, prophylactic treatments, and supplements within 28 days prior to signing the informed consent through the last Follow-Up visit or participant withdraws consent.",
        "• In addition to the exclusion criteria (see Section 5.2), any prostate cancer therapy is strictly prohibited from time of dosing (Day 1) to surgery or conventional imaging follow-up. • If a participant reports having received a prostate cancer therapy (e.g., hormone, drug, biologic, radiologic, or chemotherapy) or alternate medical procedure(s) for prostate cancer, during these time periods, the participant should be discontinued from the study."
      ],
      "chips": [
        "SPARROW",
        "p56/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s056.jpg",
      "cap": "Protocol page 56 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 57 of 100 · • Any surgical procedure needs to occur at least 12 hours after the [68Ga]-LNTH-2401…",
      "audio": [
        "• Any surgical procedure needs to occur at least 12 hours after the gallium-68 L N T H-2401 dose, and not more than 45 days from dosing. • If a participant’s planned procedure (radical prostatectomy with pelvic lymph node dissection) for prostate cancer changes following gallium-68 L N T H-2401 imaging, the alternate or additional prostate cancer procedure and corresponding histopathology data will be recorded. 8.1.4.",
        "ECOG Performance Status Performance status will be assessed using the ECOG performance status assessment tool at the timepoints outlined in the using the standard-clinician-rating scale used to assess a participant’s functional capacity and ability to carry out daily activities. It provides a general measure of the participant’s overall health and is a key criterion for eligibility, treatment tolerability, and safety monitoring in oncology studies. 8.2.",
        "Imaging Assessments Planned timepoints for imaging assessments are provided in the SOA (Section 1.3). Additionally, please refer to the Technical Operations Manual and Independent Review Charter for further details. 8.2.1.",
        "Conventional Imaging • A contrast-enhanced CT of the chest, abdomen, and pelvis (or non-contrast CT chest with Gadolinium-enhanced MRI of the abdomen and pelvis for participants who have a medical contraindication to iodinated contrast) will be obtained at Screening if not already obtained within 45 days prior to study drug injection. − If CT is conducted at Screening, IV iodinated contrast medium cannot be administered within 24 hours of study drug injection.",
        "− High-density oral contrast medium (oral water contrast is acceptable) cannot be administered within 5 days prior to study drug injection. − All images will be sent to the central imaging core laboratory (who are blinded to all clinical information and reviews only the scans) for analysis.",
        "− When available, if conventional imaging is conducted outside of the Screening, within 45 days, images are to be shared with Sponsor • A radionuclide bone scan (either 99mTc-MDP or 18F-NaF PET C T, depending upon the site’s standard of care) will be obtained at Screening if one has not been obtained 45 days prior to study drug injection.",
        "− If conducted as part of Screening, 18F-NaF PET bone scans must be done at least five physical half-lives (10 hours) prior to gallium-68 L N T H-2401 injection. − All images will be sent to the central imaging core laboratory (who are blinded to all clinical information and reviews only the scans) for analysis."
      ],
      "chips": [
        "SPARROW",
        "p57/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s057.jpg",
      "cap": "Protocol page 57 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 58 of 100 · Protocol body · page 58",
      "audio": [
        "8.2.2. P S M A PET C T Assessment • P S M A PET C T imaging in Screening is to be completed within 45 days prior to the administration of gallium-68 L N T H-2401. • Any commercially available and approved tracer can be used for the P S M A PET C T. • All P S M A PET C T images will be submitted to the central imaging core laboratory for blinded, scan-only review and protocol-specified diagnostic imaging analyses.",
        "− Images will also be provided to the local site for assessment of intended clinical management. 8.2.3. Whole Body gallium-68 L N T H-2401 PET C T 8.2.3.1. Phase 2 Dose Optimization • Six participants with G R P R-positive lesion(s) will be scanned to assess the optimal dose (radioactivity). If the selected activity is <5 ( plus or minus 1) millicuries (148 to 222 megabecquerels), a validation cohort of additional 6 participants will be evaluated at the selected parameters.",
        "Participant scanned in Phase 2 with no G R P R-positive lesion will be excluded in dose optimization, but included in dosimetry analysis.",
        "• A lesion will be considered G R P R- positive for tumor involvement if, based on visual (qualitative) assessment by the interpreting reader, it demonstrates gallium-68 L N T H-2401 PET- based imaging characteristics consistent with malignant disease, taking into account lesion location, morphology, and/or tracer uptake relative to expected physiologic background and known patterns of disease.",
        "• gallium-68 L N T H-2401 PET imaging will be performed on local PET C T scanners with CT for correction of physical effects (e.g., attenuation, scatter) and anatomic localization at the following time points: 15 plus or minus 5, 30 plus or minus 10, 60 plus or minus 10, 120 plus or minus 15 min post [68Ga]‑LNTH‑2401 administration.",
        "• Participants may void their bladder before gallium-68 L N T H-2401 administration but should not void between gallium-68 L N T H-2401 administration and the 15 plus or minus 5 min scan. If the participant voids between gallium-68 L N T H-2401 administration and the 15 plus or minus 5 min scan, the site may collect the urine for further analysis. Participants should empty their bladder prior to the 60 plus or minus 10 min scan.",
        "• All gallium-68 L N T H-2401 PET C T images will be sent to the central imaging core laboratory (who are blinded to all clinical information and reviews only the scans) for analysis. 8.2.3.2. Phase 3 Diagnostic Accuracy • gallium-68 L N T H-2401 PET imaging will be performed on local PET C T scanners with CT for correction of physical effects (e.g., attenuation, scatter) and anatomic localization."
      ],
      "chips": [
        "SPARROW",
        "p58/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s058.jpg",
      "cap": "Protocol page 58 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 59 of 100 · • At 1-2 hours post [68Ga]-LNTH-2401 injection, the participant will be asked to…",
      "audio": [
        "• At 1-2 hours post gallium-68 L N T H-2401 injection, the participant will be asked to empty bladder (void), and a whole body CT and PET scan will be acquired from the midthigh through the vertex of the skull. • All gallium-68 L N T H-2401 PET C T images will be sent to the central imaging core laboratory (who are blinded to all clinical information and reviews only the scans) for analysis related to diagnostic imaging and locally for assessment of management. 8.2.4.",
        "Image-guided Biopsy • If a lesion suspected of being metastatic is identified through imaging and is accessible, a biopsy should be performed for confirmation per standard of care and at the discretion of the treating physician. • Imaging guidance should be used. 8.3.",
        "Medical Management Questionnaire The treating Investigator must complete the Predose gallium-68 L N T H-2401 Medical Management Questionnaire (MMQ; Appendix 4) to document the initial intended management plan for the participant based on available clinical information and local conventional imaging results.",
        "For all participants who complete the gallium-68 L N T H-2401 PET C T scan, the Post-gallium-68 L N T H-2401 MMQ (Appendix 5) must be completed by the treating Investigator based on the additional results from the local gallium-68 L N T H-2401 PET C T scan to document whether a change to the initial intended management plan may be warranted due to the gallium-68 L N T H-2401 finding.",
        "Additionally, a 6-month follow-up MMQ (Appendix 6) should be completed by the treating Investigator at the 6-month follow-up visit to document subsequent or actual prostate cancer management and to support descriptive assessment of concordance between intended management and management reported at 6 months post dose. 8.4. Safety Assessments Planned timepoints for all safety assessments are provided in the SoA. 8.4.1.",
        "Vital Signs Measurements • Vital signs measurements will include body temperature, systolic and diastolic blood pressure, heart rate, and oxygen saturation by pulse oximetry. • Participants will abstain from strenuous exercise for 1 hour before vital signs acquisition. • Vital signs (temperature, pulse rate, respiratory rate, and blood pressure) will be measured with the participant in a sitting/semi-recumbent position after 3 minutes of rest, as feasible.",
        "• Body temperature will be measured with either an oral (temperature taken at floor of the mouth) or tympanic thermometer."
      ],
      "chips": [
        "SPARROW",
        "p59/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s059.jpg",
      "cap": "Protocol page 59 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 60 of 100 · • A properly sized and calibrated blood pressure cuff will be used to measure blood…",
      "audio": [
        "• A properly sized and calibrated blood pressure cuff will be used to measure blood pressure each time. The use of an automated device for measuring blood pressure and heart rate is acceptable. • When the timing of these measurements coincides with a blood collection, blood pressure and heart rate are to be obtained prior to the nominal time of the blood collection. 8.4.2.",
        "12-Lead ECG A single-timepoint 12-lead electrocardiogram (ECG) will be taken at two intervals on the day of dosing, including pre-dosing and post dose/pre-imaging. The onsite Investigator has the responsibility to evaluate the ECG for the assessment of participant safety. 8.4.3.",
        "Follow-up Telephone calls will be allowed for any subsequent required follow-up during the Follow-up Period after the Day 5 ( plus or minus 2 days) Post Dose Follow-Up, as specified in the SoA (Table 1 for Phase 2 Dose Optimization Period and Table 2 for Phase 3 Diagnostic Performance Period).",
        "For each telephone follow-up, the following will be assessed and recorded: • adverse event/S A E review (see Section 8.7) • Concomitant medication review • Concomitant procedure review 8.5. Clinical Safety Laboratory Tests • See Appendix 3 for the list of clinical laboratory tests to be performed and the SoA (Section 1.3) for the timing and frequency. • Laboratory samples will be analyzed by a local laboratory, as applicable.",
        "• The Investigator or authorized site staff must review the laboratory results, document this review, and record any clinically significant changes occurring during the study as an adverse event as outlined in Section 8.7. The laboratory results must be retained with source documents.",
        "• If laboratory values from non-protocol-specified laboratory tests performed at the institution’s local laboratory require a change in participant management or are considered clinically significant by the Investigator (eg, S A E or adverse event or dose modification), then the results and actions must be recorded. 8.6.",
        "Disease-related Biomarker Laboratory Assessments • The disease-related biomarker laboratory assessments listed below will be performed as specified in the SoA to characterize the study population and support protocoldefined analyses."
      ],
      "chips": [
        "SPARROW",
        "p60/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s060.jpg",
      "cap": "Protocol page 60 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 61 of 100 · − Prostate-specific antigen (PSA): Total serum PSA will be collected at Screening",
      "audio": [
        "− Prostate-specific antigen (PSA): Total serum PSA will be collected at Screening. If PSA has not been measured within 28 days prior to administration of gallium-68 L N T H-2401, a blood sample will be collected pre-dose on Day 1. − Testosterone: Total serum testosterone will be collected at Screening. If testosterone has not been measured within 28 days prior to administration of gallium-68 L N T H-2401, a blood sample will be collected pre-dose on Day 1.",
        "− G R P R and P S M A: Formalin-fixed, paraffin-embedded (FFPE) prostate tissue specimens and pelvic lymph nodes obtained from surgical resection will be used for exploratory immunohistochemistry (IHC) analyses. No additional biopsy procedures are required for participation in this study unless explicitly specified elsewhere in the protocol. G R P R and P S M A expression by IHC will be evaluated for exploratory objectives.",
        "• Clinically significant abnormal findings identified during study-related testing should be managed by standard clinical practice and documented in the source records. • Samples may be prepared and analyzed by a local laboratory, as applicable, using the laboratory’s standard methods and reference ranges. • Biomarker values will be recorded in the eCRF as required. 8.7.",
        "Adverse Events, SAEs, SUSARs, and Other Safety Reporting All AEs will be recorded continuously from the time of administration of study treatment through Follow-up (see Section 1.3). Beyond the Follow-up, the Investigator will report SAEs deemed causally related to gallium-68 L N T H-2401. AEs will be assessed by a general question regarding the participant’s overall health. Care will be taken not to introduce bias when detecting AEs and/or SAEs.",
        "Open-ended and non-leading verbal questioning of the participant is the preferred method to inquire about adverse event occurrences. Only clinically significant laboratory abnormalities deemed to be AEs will be documented, including their severity (graded per Common Terminology Criteria for Adverse Events [C T C A E] v6.0), relationship to the study drug, and any resulting actions taken.",
        "Once a clinically significant adverse event has been documented, the adverse event will be directly followed up until it resolved to baseline or the end of the study participation. The Investigator or any qualified designee is responsible for detecting, evaluating, documenting, and recording events that meet the definition of an adverse event or S A E and remains responsible for following up all AEs or SAEs. 8.7.1.",
        "Recording of Adverse Events After the initial adverse event/S A E report, the Investigator is required to proactively follow each participant at subsequent visits/contacts. All SAEs will be followed until resolution, stabilization, the event is otherwise explained, or the participant is lost to follow-up (as defined in Section 7.3). Further information on follow-up procedures is provided in Appendix 8."
      ],
      "chips": [
        "SPARROW",
        "p61/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s061.jpg",
      "cap": "Protocol page 61 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 62 of 100 · Protocol body · page 62",
      "audio": [
        "8.7.2. Regulatory Reporting Requirements for SAEs, S U S A R, and Periodic Reports The Sponsor has a legal responsibility to notify both the local regulatory authority and other regulatory agencies about the safety of a study intervention under clinical investigation. The Sponsor will comply with country-specific regulatory requirements relating to safety reporting to the regulatory authority, IRBs/IECs, and investigators.",
        "An Investigator who receives a safety report describing an S A E or other specific safety information (e.g., summary or listing of SAEs) from the Sponsor will review and then file it along with the IB and will notify the I R B/I E C, if appropriate according to local requirements. Investigator safety reports must be prepared for SUSARs (defined in Appendix 8) according to local regulatory requirements. The Sponsor will forward to Investigators as necessary.",
        "Reports of these reactions are subject to expedited submission to regulatory authorities. The Sponsor will make the determination whether the event is unexpected. This determination should be undertaken by assessing the expectedness of the reaction in relation to the applicable product information (e.g., the RSI contained within the IB or alternative documents) in accordance with applicable regulatory requirements.",
        "The Sponsor or designee will report all relevant information about SUSARs that are fatal or life threatening as soon as possible to the relevant agency(ies), and, in any case, no later than 7 days after knowledge by the Sponsor of such a case. Relevant follow-up information will subsequently be communicated within an additional 8 days.",
        "The Sponsor or designee will report all other SUSARs to the relevant agency(ies) as soon as possible but within 15 days of the Sponsor’s first knowledge of the event. The Sponsor will also report any additional expedited or periodic safety reports required in accordance with the timelines outlined in country-specific legislation.",
        "The Investigator must complete the S A E documentation, verify the accuracy of the information recorded on the S A E pages with the corresponding source records, and send a copy by email to Sponsor, or designee. If the S A E cannot be documented electronically, then the site will use the paper S A E data collection tool to report the event within 24 hours. The site will then enter the S A E data into the electronic system as soon as the data become available.",
        "After the study is completed at a given site, the electronic data collection tool will be taken offline to prevent the entry of new data or changes to existing data. Any SAEs considered at least possibly related to gallium-68 L N T H-2401 and discovered by the Investigator at any time after the protocol-defined reporting period, should be reported to the Sponsor (studysafety@lantheus.com) or designee within 24 hours of the first awareness of the event by email.",
        "Participants with SAEs must be followed until the event resolves, the event or sequelae stabilizes, or it is unlikely that additional information can be obtained after due diligence with follow-up efforts (i.e., the participant or Investigator is unable to provide additional information), or the participant is lost to follow-up.",
        "Additional follow-up information, if required or available, should promptly be emailed or faxed to Sponsor, or designee, via a follow-up S A E report form, within 24 hours of first becoming aware of the additional information."
      ],
      "chips": [
        "SPARROW",
        "p62/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s062.jpg",
      "cap": "Protocol page 62 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 63 of 100 · Protocol body · page 63",
      "audio": [
        "8.7.3. Collection and Reporting of Pregnancy For participants with partners who become pregnant while on study, and pregnancies that occur within 3 months of receiving the last dose of gallium-68 L N T H-2401 injection, the Investigator will attempt to collect pregnancy information.",
        "After obtaining the necessary signed Informed Consent Form from the pregnant female partner directly, the Investigator will record pregnancy information on the appropriate form and submit it to the Sponsor within 24 hours of learning of the partner’s pregnancy. The female partner will be followed to determine the outcome of the pregnancy. Information on the status of the female partner and neonate will be forwarded to the Sponsor.",
        "The Investigator will follow the pregnancy for the duration until the date of abortion or delivery and for 6 months after delivery to determine the outcome. Any termination of pregnancy will be reported regardless of fetal status (presence or absence of anomalies) or indication for the procedure. Congenital anomalies, spontaneous miscarriages, or birth defects are considered SAEs and should be reported on the S A E Report Form.",
        "Pregnancy of participant’s partner will lead to definitive treatment discontinuation and withdrawal from the study in all cases (Section 7.1)."
      ],
      "chips": [
        "SPARROW",
        "p63/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s063.jpg",
      "cap": "Protocol page 63 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 64 of 100 · §9.1 · sensitivity ≥25% / specificity ≥65% bars",
      "audio": [
        "9. STATISTICAL CONSIDERATIONS The Statistical Analysis Plan (SAP) will include a more technical and detailed description of the statistical analyses described in this section. Any deviation(s) from the SAP will be described and justified in the clinical study report. 9.1. Statistical Hypotheses 9.1.1. Phase 2 Dose Optimization Period There are no formal statistical hypotheses; all statistical methods will be descriptive in nature. 9.1.2.",
        "Phase 3 Diagnostic Performance Period Null hypothesis (H0) • For specificity: The null hypothesis is that the specificity of gallium-68 L N T H-2401 PET C T imaging is less than a predefined threshold, specifically that the lower bound of the two-sided 95% confidence interval for specificity is less than 65%.",
        "• For sensitivity: The null hypothesis is that the sensitivity of gallium-68 L N T H-2401 PET C T imaging is less than a predefined threshold, specifically that the lower bound of the two-sided 95% confidence interval for sensitivity is less than 25%.",
        "Alternative hypothesis (H1) • For specificity: The alternative hypothesis is that the specificity of gallium-68 L N T H-2401 PET C T imaging is equal to or greater than the predefined threshold, meaning that the lower bound of the two-sided 95% confidence interval for specificity is at least 65%.",
        "• For sensitivity: The alternative hypothesis is that the sensitivity of gallium-68 L N T H-2401 PET C T imaging is equal to or greater than the predefined threshold, meaning that the lower bound of the two-sided 95% confidence interval for sensitivity is at least 25%. This study is testing whether the diagnostic tool can correctly identify patients with the condition (sensitivity) at least 25% of the time.",
        "If the lower bound of the 95% confidence interval meets or exceeds 25%, the test indicates the tool is effective at detecting the newly diagnosed prostate cancer. 9.2. Analysis Sets 9.2.1. Phase 2 Dose Optimization Period All participants enrolled and dosed with gallium-68 L N T H-2401 will be included in the analysis. The following analysis populations are defined: • Consented Set: All participants who sign an informed consent document.",
        "This analysis set accounts for participant flow."
      ],
      "chips": [
        "SPARROW",
        "p64/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s064.jpg",
      "cap": "Protocol page 64 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "H0 fail if sensitivity CI lower bound < 25% or specificity CI lower bound < 65%.",
        "Phase 2 has no formal hypothesis — descriptive dosimetry and IQS only."
      ]
    },
    {
      "title": "Page 65 of 100 · • Safety Analysis Set: All enrolled participants who received a dose of [68Ga]-LNTH2401",
      "audio": [
        "• Safety Analysis Set: All enrolled participants who received a dose of gallium-68 L N T H-2401. The safety analyses will be performed on the Safety Analysis Set. • Per Protocol Set: A subset of the Safety Analysis Set who completes the study without any major protocol deviations. This analysis set may be used for optional analyses of imaging data if there are sufficient numbers of participants.",
        "• Dose Optimization Set: The dose optimization set includes all participants who receive a dose of gallium-68 L N T H-2401, undergo PET imaging for at least 3 timepoints, and have G R P R-positive lesion(s) determined by central readers. This analysis set is intended to assess the optimum dose and imaging time for Phase 3.",
        "• Dosimetry-Evaluable Set (DE Set): All participants selected for the dosimetry analysis and with sufficient post-injection PET C T data, as defined below, to enable derivation of time activity curve (TAC) for organ dosimetry: − At least 3 valid post-administration imaging time points are available. − Time points must cover early (at least one of 15 min and 30 min time points), intermediate (60 min), and late phases (120 min) of tracer distribution and clearance.",
        "− This analysis set will be used to calculate dosimetry results. • Imaging Evaluable Set (imaging evaluable set): All participants with at least one evaluable PET C T scan for assessment of image quality or tumor uptake. This analysis set will be used to evaluate imaging results. 9.2.2.",
        "Phase 3 Diagnostic Performance Period All participants who receive [68Ga]-LNTH‑2401 will be included in the primary efficacy analysis population consistent with an intent‑to‑treat principle (intent‑to‑image [intent-to-image]).",
        "The following analysis populations are defined: • Intent-to-Image (intent-to-image) Set (Primary Efficacy Population): All participants who receive gallium-68 L N T H-2401, regardless of whether PET C T imaging and/or the standard of truth (standard of truth) is available, valid, or evaluable. • Imaging Evaluable Set (imaging evaluable set): All participants in the intent-to-image Set with interpretable gallium-68 L N T H-2401 PET C T imaging per the Imaging Manual/charter.",
        "Analyses on the imaging evaluable set are supportive. • Per-Protocol Set (PPS): A defined subset of the Imaging Evaluable Set (imaging evaluable set) excluding participants with major protocol deviations that may impact the primary diagnostic performance endpoints. Analyses on the PPS are supportive. • Safety Analysis Set (SAS): All participants who receive gallium-68 L N T H-2401. The safety analyses will be performed on the SAS."
      ],
      "chips": [
        "SPARROW",
        "p65/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s065.jpg",
      "cap": "Protocol page 65 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 66 of 100 · Protocol body · page 66",
      "audio": [
        "9.3. Statistical Analyses 9.3.1. General Considerations Descriptive statistics (including mean, standard deviations, minima, medians, and maxima for continuous variables, and number of observations and proportions for discrete variables) will be used to summarize data with two-sided 95% confidence intervals as appropriate. Details of the planned analyses will be included in a separate SAP.",
        "All continuous variables will be summarized, reporting the number of observations, the mean, median, standard deviation, minimum, and maximum values. All categorical data will be summarized reporting the respective number of observations and percentages. 9.3.2.",
        "Primary Endpoints Analysis Phase 2 Dose Optimization Period The biodistribution, radiation dosimetry, optimal dose (radioactivity), and the imaging time window of gallium-68 L N T H-2401 in participants with either newly diagnosed or B C R prostate cancer will be assessed based on the DE Set.",
        "For biodistribution and radiation dosimetry, TACs, absorbed radiation doses of gallium-68 L N T H-2401 in critical organs, and whole-body effective dose will be estimated by the dosimetry vendor (details will be outlined in the dosimetry documents) and summarized with descriptive statistics by organs and timepoints.",
        "For optimal dose (radioactivity) and imaging time window of gallium-68 L N T H-2401, the image quality score will be calculated for each radioactivity level at each imaging time point. For a given radioactivity level at a given imaging time point, the image quality score will be the sum of the 6 participants’ average reading quality score (for a given activity, this will range from 0 to 12).",
        "The lowest dose level with an average image quality score greater than or equal to 10.5 will be considered as the lowest dose (radioactivity) that provides diagnostic-quality images. The image quality score will be summarized by reader with descriptive statistics. The time window will be determined based on the totality of the data. The optimal dose and time window will be reviewed and evaluated by the I D M C (see Appendix 9).",
        "The safety and tolerability profile of gallium-68 L N T H-2401 in participants with newly diagnosed prostate cancer will be assessed on Safety Analysis Set. adverse event data will be summarized by the number and percent of participants reporting each MedDRA preferred term (PT) for all participants. The number and percent of AEs reported as related to study drug will be presented for all participants, as will the number and percent of events of C T C A E Grade 3 and above.",
        "All SAEs will be tabulated. All adverse event data will also be included in a participant listing. Vital signs, laboratory data, ECG results, and the respective changes from baseline will be summarized for all participants using descriptive statistics. ECG results will be tabulated by visit for all participants.",
        "Logistic regression may be conducted to evaluate the association between occurrence of AEs or TEAEs and dosimetry parameters (i.e., absorbed dose for critical organs and whole-body effective dose)."
      ],
      "chips": [
        "SPARROW",
        "p66/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s066.jpg",
      "cap": "Protocol page 66 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 67 of 100 · Phase 3 Diagnostic Performance Period For the assessment of the primary objective,…",
      "audio": [
        "Phase 3 Diagnostic Performance Period For the assessment of the primary objective, the standard of truth (standard of truth) will be based on histology results obtained from surgical specimens, a comprehensive benchmark used to validate diagnostic imaging results.",
        "The results of the central reader assessments of positive or negative scans derived from pelvic lymph node region-level classifications will be compared with region-matched histopathology for the pelvic lymph nodes (i.e., right side pelvic lymph nodes, left side pelvic lymph nodes, sacral pelvic lymph nodes and other pelvic lymph nodes).",
        "Participant-level TP/FP/FN/TN will be derived from pelvic lymph node region-level classifications (compared with region-matched histopathology) using the prespecified priority rule TP > FP > FN > TN. The primary analysis will compute point estimates and 95% two-sided CIs for specificity first and if the null hypothesis of the lower bound of the 95% CI is at least 65% is rejected for specificity, then sensitivity will be tested next.",
        "If the lower bound of the 95% CI for sensitivity is at least 25%, the null hypothesis will be rejected. The outcomes are on the regional level for specificity and the participant level for sensitivity level (one overall outcome per participant) in the intent-to-image set. If a per-protocol population exists, then this analysis will be performed on the per-protocol population as a supplemental analysis.",
        "The normal approximation to the binomial distribution will be used if the assumptions for the normal approximation are met. Sensitivity and specificity will be computed for each of the 3 central imaging core lab independent readers. The success criterion for the study is if at least two of the same readers reject the null hypotheses for both specificity and sensitivity.",
        "A sensitivity analysis will be performed to allow any 2 of the 3 central readers to reject the null hypothesis for sensitivity only after specificity has been deemed a success. This analysis will not require the same 2 central readers to reject the null hypothesis for specificity and sensitivity. This analysis will be performed for the evaluable and per-protocol populations.",
        "Missing or unevaluable efficacy variables included in the analysis of the primary endpoint will include multiple imputation and worst-case imputations. The specifics of these analyses will be discussed in the Statistical analysis plan. 9.3.3.",
        "Secondary Endpoint Analysis Phase 2 Dose Optimization Period For all participants in the Phase 2 imaging evaluable set, tumor tissue uptake results and tumor-to-reference ratios by lesion and critical organs, and reference uptake results will be summarized using descriptive statistics. Lesion-to-reference ratios of maximum standard uptake value (SUVmax) will be assessed by descriptive summary statistics to examine G R P R positivity.",
        "In addition, imaging parameters will be compared between prior and newly collected scans. Phase 3 Diagnostic Performance Period For the assessment of the secondary endpoints related to the diagnostic performance of [68Ga]- L N T H-2401 PET C T, a 2-level hierarchical composite standard of truth will be used in descending order of priority, and the applicable charter:"
      ],
      "chips": [
        "SPARROW",
        "p67/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s067.jpg",
      "cap": "Protocol page 67 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 68 of 100 · • Level 1: Histopathology (local) of the surgically removed prostate gland and…",
      "audio": [
        "• Level 1: Histopathology (local) of the surgically removed prostate gland and pelvic lymph nodes. • Level 2: Anatomical correlation of the gallium-68 L N T H-2401-suspected lesion(s) with a conventional imaging modality (CT/MRI of pelvis, ultrasound, bone scan) and/or P S M A PET C T or PET/MRI, where applicable.",
        "All imaging data will be reviewed by blinded central readers and the composite standard of truth will be established by an I D M C in accordance with a predefined charter (Appendix 9).",
        "The following secondary diagnostic performance and clinical utility endpoint analyses will be generated on the appropriate SAP-defined analysis sets, consistent with Section 3.1: • Lesions per participant, as detected by gallium-68 L N T H-2401 PET C T and, where available, conventional imaging and/or P S M A/PET imaging, will be summarized for each tissue type (e.g., bone, lymph nodes, soft tissue, and prostate gland) for each of the 3 central imaging core lab independent",
        "readers. • The intended clinical management plans before and after review of gallium-68 L N T H-2401 PET C T scans and any respective changes will be summarized, based on the Medical Management Questionnaires, as defined in Section 3.1. − Intended Change in Patient Management (MMQ): The intended change in clinical management will be assessed using the pre-imaging and post-imaging Medical Management Questionnaires (MMQs).",
        "Analyses will be performed on the SAPdefined analysis set of participants with evaluable paired MMQs (both pre- and post-imaging). The endpoint will be summarized as the proportion of participants with any change in intended management from pre- to post-imaging (change vs no change), with the corresponding two-sided 95% confidence interval.",
        "Descriptive summaries will also be provided for the type/category of change (as defined in the MMQ) and direction of change, as applicable. Participants with missing pre- or post-imaging MMQ will be excluded from the paired-MMQ analysis; the extent and pattern of missing MMQ data will be summarized descriptively.",
        "Point estimates and two-sided 95% CIs will be presented for the following secondary endpoints: • Positive predictive value (PPV) and negative predictive value (NPV) will be computed for the composite standard of truth (one observation per participant), summarized at the participant level and by reader as specified in the SAP.",
        "The normal approximation to the binomial distribution will be used for endpoints having one observation per participant if the assumptions for the normal approximation are met. The null hypothesis will be rejected for each if the lower limit of the 95% CI exceeds the predefined thresholds. Statistics will be computed for each of the 3 independent central imaging lab readers.",
        "Inter-reader and intra-reader agreement among the blinded gallium-68 L N T H-2401 PET C T readers (who are blinded to all clinical information and review only the scans) will be assessed using Kappa statistics. Intra-reader agreement is assessed using pairwise Kappas and their respective two-sided 95% confidence intervals. Inter-reader agreement is assessed using Fleiss' generalized Kappa and its two-sided 95% confidence interval."
      ],
      "chips": [
        "SPARROW",
        "p68/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s068.jpg",
      "cap": "Protocol page 68 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 69 of 100 · Protocol body · page 69",
      "audio": [
        "9.3.4.",
        "Exploratory Endpoints Analysis (Phase 3 Diagnostic Performance Period Only) Exploratory analyses will be generated on the appropriate SAP-defined analysis set(s), generally requiring interpretable imaging (e.g., the imaging evaluable set) and, where applicable, evaluable histopathology or other reference information as defined in Section 3 and the SAP, for the following exploratory endpoints: • The number of lesions per participant will be plotted against baseline serum PSA",
        "and/or baseline serum testosterone and/or Gleason score for each of the 3 central imaging core lab independent readers using participants in the SAP-defined imagingevaluable analysis set (e.g., imaging evaluable set).",
        "• Maximum standardized uptake value (SUVmax), peak standardized uptake value (SUVpeak), and peak standardized uptake value (SUVr) will be summarized for each tissue type (e.g., bone, lymph nodes, soft tissue, and prostate gland) and each of the three central imaging core lab independent readers using evaluable participants.",
        "The relationship between SUVr in prostatic lesions and baseline serum PSA and/or serum testosterone levels, and/or Gleason score at time of initial diagnostic biopsy will be evaluated. • SUVmax, SUVpeak, and SUVr will be summarized with positive and negative histopathology. Each will be summarized by the Gleason score for the single or dominant prostate tumor nodule.",
        "• The characterization of the relationship for G R P R and P S M A expression levels as measured by IHC and the diagnostic outcomes of gallium-68 L N T H-2401 and P S M A PET C T imaging. Each will be summarized by e.g., correlation and descriptive analyses. • Two-sided 95% confidence intervals for sensitivity and specificity will be computed to assess the precision of the estimates for metastatic involvement in pelvic lymph nodes measuring greater than 5 mm. 9.3.5.",
        "Safety Analyses The safety analysis set includes all participants who received a dose of gallium-68 L N T H-2401. The full analysis set includes all who receive gallium-68 L N T H-2401 and undergo a PET scan. All safety parameters will be presented for the safety analysis set. Volume administered (mL) and activity administered (millicuries) of gallium-68 L N T H-2401 will be summarized using the safety analysis set.",
        "Adverse event verbatim terms will be coded using the current version of the Medical Dictionary for Regulatory Activities (MedDRA). This version will be used throughout the course of the study. Only clinically significant laboratory abnormalities deemed to be AEs will be documented, including their severity (graded per C T C A E v6.0), relationship to the study drug, and any resulting actions taken.",
        "The frequency and percentage of participants with an adverse event and the number of events will be summarized by system organ class (SOC) and preferred term (PT). Adverse events will also be summarized by severity and, separately, by relationship to treatment. Serious AEs and AEs leading to study discontinuation will be listed."
      ],
      "chips": [
        "SPARROW",
        "p69/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s069.jpg",
      "cap": "Protocol page 69 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 70 of 100 · Clinical laboratory observed values and changes from baseline will be tabulated…",
      "audio": [
        "Clinical laboratory observed values and changes from baseline will be tabulated using summary statistics for those in the safety analysis set. ECG observed values and changes from baseline will be tabulated for each visit using summary statistics. Shift tables comparing pre- to postdosing categorical ECG values will be presented using the safety analysis set. Vital signs observed values and changes will be tabulated using summary statistics in the safety analysis set. 9.3.6.",
        "Sample Size The co-primary endpoints are specificity and sensitivity at the patient level, where at least one true positive gallium-68 L N T H-2401 lesion is confirmed in a patient for sensitivity, and where no positive gallium-68 L N T H-2401 lesions are detected and confirmed in a patient for specificity.",
        "The estimate for specificity is 75% against null hypotheses of 65%, based on literature reports from early studies and experience with P S M A PET imaging in the OSPREY trial. The sample size for specificity with 90% power at a significance level of 0.05 is 70 participants. When adjusted for a prevalence of 70% negative scans and 20% early withdrawals, the sample size for specificity is 120 participants. The estimate for sensitivity is 35% against a null hypothesis of 25%.",
        "The sample size for specificity with 90% power at a significance level of 0.05 is 69 participants. When adjusted for a prevalence of 30% positive scans and 20% early withdrawals, the sample size for specificity is 276 participants. The estimated sample size for both co-primary endpoints is 396 participants. Adding 6-12 participants in the dose optimization part of the study, the maximum estimated sample size for the study is 408 participants."
      ],
      "chips": [
        "SPARROW",
        "p70/100",
        "Full protocol text"
      ],
      "visual": "phase3",
      "image": "assets/protocol/sparrow/s070.jpg",
      "cap": "Protocol page 70 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 71 of 100 · Protocol body · page 71",
      "audio": [
        "10. REFERENCES Baratto, L., et al., Imaging the Distribution of Gastrin-Releasing Peptide Receptors in Cancer. J Nucl Med, 2020. 61(6):792-798. Baratto, L., et al., Physiological 68Ga-RM2 uptake in patients with biochemically recurrent prostate cancer: an atlas of semi-quantitative measurements. Eur J Nucl Med Mol Imaging, 2020. 47(1):115-122. Blomqvist L, Carlsson S, Gjertsson P, et al. Limited evidence for the use of imaging to detect prostate cancer: a systematic review.",
        "Eur J Radiol, 2014. 83:1601-1606. Delpassand ES, Ranganathan D, Wagh N, Shafie A, Gaber A, Abbasi A, et al. ^64Cu‑DOTATATE PET C T for imaging patients with known or suspected somatostatin receptor-positive neuroendocrine tumors: results of the first U.S. prospective, reader‑masked clinical trial. J Nucl Med. 2020;61(6):890‑896. doi:10.2967/jnumed.119.236091.",
        "Duan H., et al., Correlation of 68Ga-RM2 PET with Postsurgery Histopathology Findings in Patients with Newly Diagnosed Intermediate- or High-Risk Prostate Cancer. J Nucl Med, 2022. 63(12):1829-1835. Duan, H., et al., A Pilot Study of 68Ga-PSMA11 and 68Ga-RM2 PET/MRI for Evaluation of Prostate Cancer Response to High-Intensity Focused Ultrasound Therapy. J Nucl Med, 2023. 64(4): 592-597.",
        "Duan, H., et al., A Pilot Study of 68Ga-PSMA11 and 68Ga-RM2 PET/MRI for Biopsy Guidance in Patients with Suspected Prostate Cancer. J Nucl Med, 2023. 64(5):744-750. Fernández. R., et al., Imaging GRPr Expression in Metastatic Castration-Resistant Prostate Cancer with [68Ga]Ga-RM2-A Head-to-Head Pilot Comparison with [68Ga]Ga-P S M A-11. Cancers, 2023. 29;16(1):173. Grzmil M, Spahn MA, Berger P, Schibli R, Béhé M.",
        "Comparative evaluation of radiolabeled bombesin analogs [177Lu]Lu-AMBA and [177Lu]Lu-RM2 for targeting G R P R in glioblastoma model. Nucl Med and Biology, 2025. 109041: 146-147. Johnson, D.C., et al., Detection of Individual Prostate Cancer Foci via Multiparametric Magnetic Resonance Imaging. Eur Urol, 2019. 75(5):712-720. Kähkönen, E., et al., In vivo imaging of prostate cancer using [68Ga]-labeled bombesin analog BAY86-7548. Clin Cancer Res, 2013. 19(19):5434-43.",
        "Le, J.D., et al., Multifocality and prostate cancer detection by multiparametric magnetic resonance imaging: correlation with whole-mount histopathology. Eur Urol, 2015. 67(3):569-76.",
        "Leest, M.V.D., et al., Head-to-head Comparison of Transrectal Ultrasound-guided Prostate Biopsy Versus Multiparametric Prostate Resonance Imaging with Subsequent Magnetic Resonance-guided Biopsy in Biopsy-naïve Men with Elevated Prostate-specific Antigen: A Large Prospective Multicenter Clinical Study. Eur Urol, 2019. 75(4):570-578. Mansi, R., et al., Development of a potent DOTA-conjugated bombesin antagonist for targeting GRPr-positive tumours.",
        "Eur J Nucl Med Mol Imaging, 2011. 38(1):97-107."
      ],
      "chips": [
        "SPARROW",
        "p71/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s071.jpg",
      "cap": "Protocol page 71 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 72 of 100 · Protocol body · page 72",
      "audio": [
        "Mapelli, P., et al., 68Ga-P S M A and 68Ga-D O T A R M 2 PET/MRI in Recurrent Prostate Cancer: Diagnostic Performance and Association with Clinical and Histopathological Data. Cancers, 2022. 14(2):334 Minamimoto, R., et al., Pilot Comparison of 68Ga-RM2 PET and 68Ga-P S M A-11 PET in Patients with Biochemically Recurrent Prostate Cancer. J Nucl Med, 2016. 57(4):557-62.",
        "Minamimoto, R., et al., Prospective Evaluation of 68Ga-RM2 PET/MRI in Patients with Biochemical Recurrence of Prostate Cancer and Negative Findings on Conventional Imaging. J Nucl Med, 2018. 59(5):803-808. Mohseninia, N., et al., Diagnostic Value of Gastrin-Releasing Peptide Receptor-Targeted PET Imaging in Oncology: A Systematic Review. Semin Nucl Med, 2025. 55(5):776-788. National Cancer Institute - Cancer Stat Facts: Prostate Cancer.",
        "Available from: https://seer.cancer.gov/statfacts/html/prost.html Oyen RH, Van Poppel HP, Ameye FE, Van de Voorde WA, Baert AL, Baert LV. Lymph node staging of localized prostatic carcinoma with CT and CT‐guided fine‐needle aspiration biopsy: prospective study of 285 patients. Radiology, 1994. 190:315-322. Pucar D, Sella T, Schöder H. The role of imaging in the detection of prostate cancer local recurrence after radiation therapy and surgery. Current Opinion in Urology, 2008.",
        "18:87-97 Roehl KA, Han M, Ramos CG, Antenor JAV, Catalona WJ. Cancer progression and survival rates following anatomical radical retropubic prostatectomy in 3,478 consecutive patients: long‐ term results. J Urol, 2004. 172:910-914. Rouvière, O., et al., Use of prostate systematic and targeted biopsy on the basis of multiparametric MRI in biopsy-naive patients (MRI-FIRST): a prospective, multicentre, paired diagnostic study. Lancet Oncol, 2019. 20(1):100-109.",
        "Scheidler J, Hricak H, Vigneron DB, et al. Prostate cancer: localization with three-dimensional proton MR spectroscopic imaging-clinicopathologic study. Radiology, 1999. 213:473-480. Siegel, J.A., et al., MIRD pamphlet no. 16: Techniques for quantitative radiopharmaceutical biodistribution data acquisition and analysis for use in human radiation dose estimates. J Nucl Med, 1999. 40(2):37S-61S. Siegel, R.L., et al., Cancer statistics, 2025. CA Cancer J Clin, 2025. 75(1):10-45.",
        "Stabin, M.G., Sparks, R.B., and Crowe, E., OLINDA/EXM: the second-generation personal computer software for internal dose assessment in nuclear medicine. J Nucl Med, 2005. 46(6):1023-7. Touijer, K.A., et al., Prospective Study of the Radiolabeled G R P R Antagonist BAY86-7548 for Positron Emission Tomography/Computed Tomography Imaging of Newly Diagnosed Prostate Cancer. Eur Urol Oncol, 2019. 2(2):166-173.",
        "Truong, M., et al., Impact of Gleason Subtype on Prostate Cancer Detection Using Multiparametric Magnetic Resonance Imaging: Correlation with Final Histopathology. J Urol, 2017. 198(2):316-321."
      ],
      "chips": [
        "SPARROW",
        "p72/100",
        "Full protocol text"
      ],
      "visual": "grpr",
      "image": "assets/protocol/sparrow/s072.jpg",
      "cap": "Protocol page 72 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 73 of 100 · Protocol body · page 73",
      "audio": [
        "Wangerin, K.A., et al., Clinical Evaluation of 68Ga-P S M A-II and 68Ga-RM2 PET Images Reconstructed With an Improved Scatter Correction Algorithm. AJR Am J Roentgenol, 2018. 211(3):655-660. Wieser, G., et al., Diagnosis of recurrent prostate cancer with PET C T imaging using the gastrinreleasing peptide receptor antagonist 68Ga-RM2: Preliminary results in patients with negative or inconclusive [18F] Fluoroethylcholine-PET C T. Eur J Nucl Med Mol Imaging, 2017.",
        "44(9):1463-1472."
      ],
      "chips": [
        "SPARROW",
        "p73/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s073.jpg",
      "cap": "Protocol page 73 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 74 of 100 · Protocol body · page 74",
      "audio": [
        "11. APPENDICES APPENDIX 1. EASTERN COOPERATIVE ONCOLOGY GROUP ASSESSMENT ECOG Performance Status (ECOG-PS): A measure of the patient’s level of functioning in terms of ability to care for themselves, daily activity, and physical activity. Score Description 0 Fully active; able to carry on all pre-disease performance without restriction.",
        "1 Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature (e.g., light housework, office work). 2 Ambulatory and capable of all self-care but unable to carry out any work activities; up and about more than 50% of waking hours. 3 Capable of only limited self-care; confined to bed or chair more than 50% of waking hours. 4 Completely disabled; cannot carry on any self-care; totally confined to bed or chair. 5 Dead.",
        "Eastern Cooperative Oncology Group (ECOG). ECOG Performance Status. Originally described in: Oken MM et al. Am J Clin Oncol. 1982;5:649-655."
      ],
      "chips": [
        "SPARROW",
        "p74/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s074.jpg",
      "cap": "Protocol page 74 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 75 of 100 · Protocol body · page 75",
      "audio": [
        "APPENDIX 2. CONTRACEPTION AND BARRIER GUIDANCE Contraception, Barrier Guidance, and Pregnancy Testing Definitions Women of Childbearing Potential Women in the following categories are considered women of childbearing potential (WOCBP) (i.e., fertile): • Premenopausal female capable of becoming pregnant.",
        "Women of Nonchildbearing Potential Women in the following categories are considered women of nonchildbearing potential (WONCBP): Premenopausal females with permanent infertility due to documented hysterectomy, documented bilateral salpingectomy or documented bilateral oophorectomy. Postmenopausal females as defined as no menses for 12 months without an alternative medical cause.",
        "Highly Effective Forms of Contraception Allowed While on Study Participants who are sexually active, including with partners that are of childbearing potential or pregnant, are required to use 2 highly effective contraceptive methods during the study and for 7 days after the last study drug administration. Participants must not donate sperm during the study and for 7 days after last administration of study drug.",
        "The following highly effective forms of contraception (defined as having a failure rate of <1% per year when used consistently and correctly) are allowed: • Oral, intravaginal, transdermal, hormonal contraception associated with inhibition of ovulation • Oral, injectable, or implantable progestogen-only hormone contraception associated with inhibition of ovulation • Intrauterine device (IUD) • Intrauterine hormone-releasing system (IUS) • Bilateral tubal occlusion •",
        "Vasectomy • True sexual abstinence: when this is in line with the preferred and usual lifestyle of the participant • Declaration of abstinence and withdrawal are not acceptable methods of abstinence. • Use of spermicides only, and lactational amenorrhea method (LAM) are not acceptable methods of contraception for the study."
      ],
      "chips": [
        "SPARROW",
        "p75/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s075.jpg",
      "cap": "Protocol page 75 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 76 of 100 · Protocol body · page 76",
      "audio": [
        "APPENDIX 3. CLINICAL LABORATORY TESTS Table 6: List of Protocol-specific Clinical Laboratory Assessments Assessments (parameters) Hematology Complete blood count including: WBC count; WBC differential (neutrophils, lymphocytes, monocytes, eosinophils, basophils); RBC count; hematocrit; hemoglobin; platelets.",
        "Serum biochemistry Sodium; potassium; calcium; chloride; glucose; lipase; amylase; blood urea nitrogen (BUN); creatinine; total bilirubin; ALT; AST; alkaline phosphatase; albumin; total protein. Hormones/Endocrinology testosterone"
      ],
      "chips": [
        "SPARROW",
        "p76/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s076.jpg",
      "cap": "Protocol page 76 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 77 of 100 · Protocol body · page 77",
      "audio": [
        "APPENDIX 4. EXAMPLE PREDOSE PLANNED MEDICAL MANAGEMENT QUESTIONNAIRE 1) Genetic Testing ☐Request additional biomarker testing (e.g., BRCA1/2, MMR, ATM) 2) Active Imaging Surveillance ☐Repeat imaging; ☐ every 6 months ☐ every 12 months ☐ Other ☐Repeat biopsy (e.g.",
        "suspected metastases); ☐ every 6 months ☐ every 12 months ☐Other 3) Surgical Plan (select all that apply) ☐Radical prostatectomy ☐Pelvic lymph node dissection ☐Extended pelvic lymph node dissection ☐Resection of non- pelvic lymph node metastatic lesions ☐Nerve sparing; ☐ Bilateral ☐ Unilateral ☐Seminal vesicle involvement; ☐ Proximal ☐ Entire ☐Cryosurgery; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please specify: 4) Planned Therapy (select all that apply) Neoadjuvant (treatment",
        "prior to surgery) ☐External beam radiotherapy ☐Stereotactic Body Radiation Therapy ☐Androgen Deprivation Therapy (A D T); (specify treatment duration) Click or tap here to enter text. ☐Other, please specify Click or tap here to enter text. Adjuvant (treatment post-surgery) ☐A D T; (specify treatment duration) Click or tap here to enter text. ☐Androgen Receptor Pathway Inhibitor (ARPI); (specify treatment duration) Click or tap here to enter text.",
        "☐Radiotherapy; (specify type and duration of treatment ) Click or tap here to enter text. ☐Chemotherapy (specify type and duration of treatment ) Click or tap here to enter text."
      ],
      "chips": [
        "SPARROW",
        "p77/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s077.jpg",
      "cap": "Protocol page 77 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 78 of 100 · ☐High intensity focused ultrasound; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please…",
      "audio": [
        "☐High intensity focused ultrasound; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please specify Click or tap here to enter text. 5) Was the questionnaire completed after reaching a shared decision with the participant? ☐Yes / ☐ No. If no, explain why: Click or tap here to enter text. 6) If the questionnaire was completed by an Investigator who is not a treating physician, was the treating physician consulted prior to completion of this questionnaire? ☐ Yes / ☐ No.",
        "If no, explain why: Click or tap here to enter text. Completed by: ☐Principal Investigator ☐ Principal Investigator ☐ Study coordinator ☐Other Click or tap here to enter text. Signature: Click or tap here to enter text. Date of completion: Click or tap here to enter text."
      ],
      "chips": [
        "SPARROW",
        "p78/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s078.jpg",
      "cap": "Protocol page 78 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 79 of 100 · Protocol body · page 79",
      "audio": [
        "APPENDIX 5. EXAMPLE POSTDOSE PLANNED MEDICAL MANAGEMENT QUESTIONNAIRE 1) Was there a change in planned clinical management for this participant since [68]Ga-L N T H-2401 administration and imaging?",
        "☐No changes were made to the intended Management Plan ☐Yes changes were made to the intended Management Plan 2) Genetic Testing ☐Requested additional biomarker testing (e.g., BRCA1/2, MMR, ATM) 3) Active Imaging Surveillance ☐Repeat imaging; ☐ every 6 months ☐ every 12 months ☐ Other ☐Repeat biopsy (e.g.",
        "metastases); ☐ every 6 months ☐ every 12 months ☐ Other 4) Surgical Plan (select all that apply) ☐Cryosurgery; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please specify: 5) Planned Therapy (select all that apply) ☐Adjuvant (treatment post-surgery) ☐External beam radiotherapy ☐Stereotactic Body Radiation Therapy ☐Androgen Deprivation Therapy (A D T); (specify treatment duration) Click or tap here to enter text.",
        "☐Androgen Receptor Pathway Inhibitor (ARPI); specify treatment duration Click or tap here to enter text. ☐Radiotherapy; (specify type and duration of treatment) Click or tap here to enter text. ☐Chemotherapy; (please specify type and duration of treatment) Click or tap here to enter text. ☐High intensity focused ultrasound; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please specify Click or tap here to enter text.",
        "6) Was the questionnaire completed after reaching a shared decision with the participant? ☐Yes / ☐ No. If no, explain why: Click or tap here to enter text."
      ],
      "chips": [
        "SPARROW",
        "p79/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s079.jpg",
      "cap": "Protocol page 79 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 80 of 100 · 7) If the questionnaire was completed by an Investigator who is not a treating…",
      "audio": [
        "7) If the questionnaire was completed by an Investigator who is not a treating physician, was the treating physician consulted prior to completion of this questionnaire? ☐Yes / ☐ No. If no, explain why: Click or tap here to enter text. Completed by: ☐Principal Investigator ☐ Sub- Investigator ☐ Study coordinator ☐Other Click or tap here to enter text. Signature: Date of completion: Click or tap here to enter text."
      ],
      "chips": [
        "SPARROW",
        "p80/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s080.jpg",
      "cap": "Protocol page 80 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 81 of 100 · Protocol body · page 81",
      "audio": [
        "APPENDIX 6. EXAMPLE 6-MONTH POST-DOSE [68]GA-L N T H-2401 PLANNED MEDICAL MANAGEMENT QUESTIONNAIRE 1) Was there a change in planned clinical management for this participant since [68]Ga-L N T H-2401 administration and imaging?",
        "☐No changes were made to the intended Management Plan ☐Yes changes were made to the intended Management Plan 2) Genetic Testing ☐Requested additional biomarker testing (e.g., BRCA1/2, MMR, ATM) 3) Active Imaging Surveillance ☐Repeat imaging; ☐ every 6 months ☐ every 12 months ☐ Other ☐Repeat biopsy (e.g.",
        "metastases); ☐ every 6 months ☐ every 12 months ☐ Other 4) Surgical Plan (select all that apply) ☐Cryosurgery; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please specify: 5) Planned Therapy (select all that apply) ☐Adjuvant (treatment post-surgery) ☐External beam radiotherapy ☐Stereotactic Body Radiation Therapy ☐Androgen Deprivation Therapy (A D T); (specify treatment duration) Click or tap here to enter text.",
        "☐Androgen Receptor Pathway Inhibitor (ARPI); specify treatment duration Click or tap here to enter text. ☐Radiotherapy; (specify type and duration of treatment) Click or tap here to enter text. ☐Chemotherapy; (please specify type and duration of treatment) Click or tap here to enter text. ☐High intensity focused ultrasound; ☐ Bilateral ☐ Focal ☐ Confined ☐Other, please specify Click or tap here to enter text.",
        "6) Was the questionnaire completed after reaching a shared decision with the participant? ☐Yes / ☐ No. If no, explain why: Click or tap here to enter text."
      ],
      "chips": [
        "SPARROW",
        "p81/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s081.jpg",
      "cap": "Protocol page 81 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 82 of 100 · 7) If the questionnaire was completed by an Investigator who is not a treating…",
      "audio": [
        "7) If the questionnaire was completed by an Investigator who is not a treating physician, was the treating physician consulted prior to completion of this questionnaire? ☐Yes / ☐ No. If no, explain why: Click or tap here to enter text. Completed by: ☐Principal Investigator ☐ Sub- Investigator ☐ Study coordinator ☐Other Click or tap here to enter text. Signature: Date of completion: Click or tap here to enter text."
      ],
      "chips": [
        "SPARROW",
        "p82/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s082.jpg",
      "cap": "Protocol page 82 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 83 of 100 · Protocol body · page 83",
      "audio": [
        "APPENDIX 7. RADIOPROTECTION PRECAUTIONS FOR PARTICIPANTS After administration of gallium-68 L N T H-2401 is completed, participants should be encouraged to urinate at the treatment facility before they are released from the facility. • Participants should stay well-hydrated and attempt to empty their bladder frequently post-treatment. • Participants should be instructed to report signs of dehydration, hypovolemia, or urinary retention immediately.",
        "• After release from the facility, participants will be free to interact with other people without any restrictions. However, precautions should still be taken to minimize residual radiation exposure to family or other household members, including the following: − The IP will be excreted through urine and feces, so adequate toilet paper should be frequently provided whenever the toilet is used, and hands should always be washed to prevent inadvertent contamination.",
        "− The toilet should be flushed with the lid closed 2 or more times after each use. − Disposable gloves or gowns should be used by any caregivers handling bodily fluids, and soiled clothing or linen should be cleaned immediately and separately from other clothing. − These precautions should be taken throughout treatment and for 24 hours following the last dose of gallium-68 L N T H-2401.",
        "• Sexually active male participants must use a condom during intercourse for 7 days after receiving gallium-68 L N T H-2401 and should not father a child during this period. − Male participants whose sexual partners are WOCBP must use a second form of highly effective contraception while receiving gallium-68 L N T H-2401 and for 24 hours following the last dose of gallium-68 L N T H-2401.",
        "Alternatively, total abstinence is also considered a highly effective contraception method when this is in line with the preferred and usual lifestyle of the participant. − A condom is required to be used also by vasectomized men as well as during intercourse with a male partner to prevent delivery of the drug via seminal fluid."
      ],
      "chips": [
        "SPARROW",
        "p83/100",
        "Full protocol text"
      ],
      "visual": "hydrate",
      "image": "assets/protocol/sparrow/s083.jpg",
      "cap": "Protocol page 83 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 84 of 100 · Protocol body · page 84",
      "audio": [
        "APPENDIX 8. DEFINITIONS AND PROCEDURES FOR RECORDING, EVALUATING, FOLLOW-UP, AND REPORTING ADVERSE EVENTS DEFINITIONS Definitions of Adverse Events An adverse event is any unfavorable medical occurrence in a study participant administered the study intervention. The adverse event does not necessarily have a causal relationship with the treatment.",
        "AEs include, but are not limited to: • Exacerbation of a pre-existing disease or medical condition, if considered medically relevant. • Increase in frequency or intensity of a pre-existing episodic disease or medical condition. • Disease or medical condition detected or diagnosed during the study, even if it may have been present prior to study start. • Continuous or persistent disease or symptoms present at study start that worsen after initiation of study intervention.",
        "• Abnormal physical examination or ECG findings that represent a clinically significant change from baseline or worsening during the study, as determined by Investigator/delegate medical judgment, and/or that lead to dose reduction, interruption, or permanent discontinuation of study intervention.",
        "• Laboratory test abnormalities that represent a clinically significant finding (symptomatic or not), including those that: − Are associated with clinical signs or symptoms − Result in dose reduction, interruption, or permanent discontinuation of study intervention, − Initiate a diagnostic work-up, or − Require therapeutic intervention (e.g., transfusion).",
        "• Disease Progression − Disease progression or lack of efficacy/failure of expected pharmacological action per se should not be reported as an adverse event.",
        "However, when clinical disease progression or lack of efficacy is identified, the specific clinical event that marks or identifies progression (e.g., new or worsening symptom, complication, or clinical deterioration) should be reported as the adverse event term for standard adverse event reporting, including S A E reporting, as appropriate. Events not meeting the adverse event definition"
      ],
      "chips": [
        "SPARROW",
        "p84/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s084.jpg",
      "cap": "Protocol page 84 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 85 of 100 · • Medical or surgical procedure (e",
      "audio": [
        "• Medical or surgical procedure (e.g., endoscopy, appendectomy): the condition that leads to the procedure is the adverse event. • Situations in which an untoward medical occurrence did not occur (e.g., social and/or convenience admission to a hospital). • Anticipated day-to-day fluctuations of pre-existing disease(s) or condition(s) present or detected at the start of the study that do not worsen. All AEs must be recorded according to Section 8.7.1.",
        "The latest version of Medical Dictionary for Regulatory Activities (MedDRA v28) will be used by the Sponsor to code AEs.",
        "Definition of Adverse Drug Reaction An adverse drug reaction (ADR), for the pre-approval clinical experience with a study intervention or its new usages (particularly as the therapeutic dose[s] may not be established) is defined as: unfavorable and unintended responses, such as a sign (e.g., laboratory results), symptom or disease related to any dose of a medicinal product, where a causal relationship between a medicinal product and an adverse event is a reasonable",
        "possibility. The level of certainty about the relatedness of the ADR to the study intervention will vary. If the ADR is suspected to be medicinal product-related with a high level of certainty, it should be included in the reference safety information (RSI) and/or the IB.",
        "For marketed medicinal products: response to a drug that is noxious and unintended and that occurs at doses normally used in humans for prophylaxis, diagnosis, or therapy of diseases or for modification of physiological function. Definitions of Serious Adverse Events An S A E is defined as any unfavorable medical occurrence that is considered serious at any dose if it meets one or more of the criteria listed: • Results in Death.",
        "• Is considered life-threatening by the Investigator or Sponsor. − places the participant at immediate risk of death; life-threatening event does not include an event that hypothetically may have caused death if it were more severe.",
        "− Requires inpatient hospitalization or prolongation of existing hospitalization where hospitalization signifies that the participant has been admitted at the hospital or emergency ward for observation and/or treatment that would not have been appropriate in the physician’s office or outpatient setting. • Complications that occur during hospitalization are AEs. − If a complication prolongs hospitalization or fulfills any other serious criteria, the event is serious.",
        "When in doubt as to whether hospitalization occurred or was necessary, the adverse event should be considered serious."
      ],
      "chips": [
        "SPARROW",
        "p85/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s085.jpg",
      "cap": "Protocol page 85 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 86 of 100 · − Hospitalization for a social reason, a planned procedure or elective treatment of…",
      "audio": [
        "− Hospitalization for a social reason, a planned procedure or elective treatment of a pre-existing condition that did not worsen from baseline is not considered a S A E. • Results in persistent or significant disability/incapacity that leads to substantial disruption in a person’s ability to conduct normal daily activities.",
        "− This definition is not intended to include experiences of relatively minor medical significance such as uncomplicated headache, nausea, vomiting, diarrhea, influenza, and accidental trauma (e.g., sprained ankle) that may interfere with or prevent everyday life functions but do not constitute a substantial disruption.",
        "• Is a congenital anomaly/birth defect defined as a condition believed to have been the result of exposure to study drug just before conception or during (partner’s) pregnancy. • Any other important medical event.",
        "Medical or scientific judgement should be exercised by the Investigator in deciding whether S A E reporting is appropriate in other situations such as important medical events that may not be immediately lifethreatening or result in death or hospitalization that may jeopardize the participant or that may require intervention to prevent one of the other outcomes listed in the above definition. These events should generally be considered as serious.",
        "− Examples of such medical events include (but are not limited to): seizure, allergic bronchospasm requiring intensive treatment, blood dyscrasias, or the development of drug dependency or drug abuse. Disease-related Events or Outcomes Not Qualifying as AEs or SAEs Disease progression itself should not be reported as an adverse event.",
        "When clinical disease progression is identified, the clinical event which marks or identifies the disease progression should be reported (Section 8.7). Definition of Suspected Unexpected Serious Adverse Reaction A Suspected Unexpected Serious Adverse Reaction (S U S A R) is an adverse drug reaction that meets three criteria: suspected, unexpected, and serious. • Suspected: There is a reasonable possibility that the drug caused the adverse drug reaction.",
        "• Unexpected: An adverse reaction, the nature or severity of which is not consistent with the applicable product information (e.g., Investigator’s brochure or alternative documents according to applicable regulatory requirements; see RSI). • Serious: See Section 11.3 for S A E definition.",
        "Definition of Adverse Events of Special Interest An adverse event of special interest (AESI) is of scientific, clinical, and medical concern specific to the Sponsor’s product or program, for which ongoing monitoring and rapid communication by the Investigator to the Sponsor can be appropriate. There have been no prior identified AESIs for gallium-68 L N T H-2401."
      ],
      "chips": [
        "SPARROW",
        "p86/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s086.jpg",
      "cap": "Protocol page 86 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 87 of 100 · RELATIONSHIP AND SEVERITY ASSESSMENT Relationship Assessments of Adverse Events The…",
      "audio": [
        "RELATIONSHIP AND SEVERITY ASSESSMENT Relationship Assessments of Adverse Events The Investigator is obligated to assess the relationship between the study intervention and the occurrence of each adverse event or S A E. The Investigator will use clinical judgment to determine the relationship. The causality assessment is one of the criteria used when determining regulatory reporting requirements and any adverse event, independent of relationship, must be documented.",
        "Causality is the determination of whether an adverse event is related to a study treatment or procedure. For example, an adverse event may be considered associated with the study treatment or procedure if there is a reasonable possibility that the adverse event was caused by gallium-68 L N T H-2401 injection.",
        "An adverse event may be considered not associated with the study treatment/procedure if there is not a reasonable possibility that the adverse event was caused by participating in the study. A \"reasonable possibility\" of a relationship conveys that there are facts, evidence, and/or arguments to suggest a causal relationship. The Investigator will use clinical judgment to determine the relationship.",
        "Causality categories are: • Related - adverse event is likely related to the study treatment or procedure. • Unrelated - adverse event is clearly NOT related to the study treatment or procedure. For each adverse event or S A E, the Investigator must document in the medical notes that he/she has reviewed the adverse event, S A E and has provided an assessment of causality.",
        "There may be situations where an S A E has occurred, and the Investigator has minimal information to include in the initial report to the Sponsor. However, it is very important that the Investigator always make an assessment of causality for every event before the initial transmission of the S A E data to the Sponsor.",
        "The Investigator may change his/her opinion of causality in light of follow-up information and send an S A E follow-up report with the updated causality assessment. Severity Assessments of Adverse Events The National Cancer Institute (NCI) C T C A E v6.0 will be utilized for reporting of severity and grade of AEs and SAEs. Any adverse event, independent of severity, must be documented.",
        "If the C T C A E grading is not defined in the NCI C T C A E grading table for a particular adverse event, severity will be rated according to the following categories: • Mild: Asymptomatic or mild symptoms; clinical or diagnostic observations only; intervention not indicated. Awareness of a sign or symptom but easily tolerated. • Moderate: Minimal, local or non-invasive intervention indicated; limiting ageappropriate instrumental activities of daily living.",
        "Discomfort sufficient to cause interference with normal activities. • Severe: Severe or medically significant but not immediately life-threatening; hospitalization or prolongation of hospitalization indicated; disabling or incapacitating, with inability to perform normal activities."
      ],
      "chips": [
        "SPARROW",
        "p87/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s087.jpg",
      "cap": "Protocol page 87 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 88 of 100 · • Life-threatening: immediate risk of death from the event as it occurred",
      "audio": [
        "• Life-threatening: immediate risk of death from the event as it occurred. • Death: death related to adverse event. It is important to distinguish between seriousness and severity of AEs. Severity is a measure of intensity, whereas seriousness is defined by the criteria in Section 11.3. An adverse event of severe intensity may not be considered serious. Conversely, a serious adverse event can be of mild or moderate intensity.",
        "Recording and Follow-Up of AEs and/or SAEs Recording AEs must follow the guidelines set by regulatory bodies such as the Food and Drug Administration (FDA) and the International Union Against Cancer (IUC). These guidelines ensure that all AEs are accurately documented, assessed, and reported, contributing to the safety and integrity of clinical studies.",
        "All AEs must be documented accurately including the participant’s condition at screening or baseline, the nature and timing of the event in relation to the treatment. The primary method for reporting to the Sponsor is via paper S A E form. S A E Reporting to Sponsor via a Paper S A E Form • The primary mechanism for reporting an S A E to Sponsor will be the paper S A E form (email to: studysafety@lantheus.com).",
        "• The site will use the paper S A E form to report the event within 24 hours. • The Investigator must receive acknowledgment by the Sponsor that the information about the S A E has been received. • If a site receives a report of a new S A E from a study participant, then the site can report this information in a follow-up paper S A E form (see next table). • Additional contacts for S A E reporting can be found in the Safety Management Plan and/or Study Contact Sheet.",
        "All AEs and SAEs will be recorded continuously from the time of first dose of study drug administration through Follow-up. Medical occurrences that begin before the start of study intervention but after obtaining informed consent will be recorded as medical history/current medical conditions, not as AEs.",
        "When an adverse event or S A E occurs, it is the responsibility of the Investigator to review all documentation (e.g., hospital progress notes, laboratory reports, and diagnostics reports) related to the event. All AEs must be properly documented and recorded to maintain the participant safety and data integrity. After the initial adverse event/S A E report, the Investigator is required to proactively follow up with each participant at the safety phone call.",
        "All AEs, SAEs, and all related non-serious AEs that occur during the study will be followed until resolution, stabilization, or the participant is lost to follow-up (as defined in Section 7.3). If an adverse event/S A E is not resolved or stabilized by the time of"
      ],
      "chips": [
        "SPARROW",
        "p88/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s088.jpg",
      "cap": "Protocol page 88 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 89 of 100 · safety phone call specified in the SoA, the Sponsor, in consultation with the…",
      "audio": [
        "safety phone call specified in the SoA, the Sponsor, in consultation with the Investigator, will decide whether to continue monitoring the AEs or if no further follow-up is necessary. Reporting of Adverse Events of Special Interest No AESIs have been reported for gallium-68 L N T H-2401 and therefore reporting requirements are not applicable."
      ],
      "chips": [
        "SPARROW",
        "p89/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s089.jpg",
      "cap": "Protocol page 89 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 90 of 100 · Protocol body · page 90",
      "audio": [
        "APPENDIX 9. GENERAL CONSIDERATIONS: REGULATORY, ETHICAL AND STUDY OVERSIGHT REGULATORY AND ETHICAL CONSIDERATIONS This study will be conducted in accordance with the protocol and with the following: • Consensus ethical principles derived from international guidelines including the Declaration of Helsinki and Council for International Organizations of Medical Sciences international ethical guidelines.",
        "• Applicable I C H G C P guidelines, including the European Union Clinical Trial (EU CT) Regulation 536/2014. • Applicable laws and regulations. The protocol, protocol amendments, ICF, Investigator’s brochure, investigational directions for use, participant-facing materials, and other relevant documents (e.g., advertisements) must be submitted to an I R B/I E C by the Investigator and reviewed and approved by the I R B/I E C before the study is initiated.",
        "Any amendments to the protocol will require I R B/I E C approval before implementing changes to the study design, except for changes necessary to eliminate an immediate hazard to study participants. Protocols and any substantial amendments to the protocol will require health authority approval prior to initiation, except for changes necessary to eliminate an immediate hazard to study participants (e.g., urgent safety measures).",
        "In cases of urgent safety measures, the relevant authorities will be notified as early as possible in line with the legislative requirements. Whether the study is completed or prematurely terminated, or an interim analysis is undertaken for regulatory submission, the Sponsor should ensure that the clinical study reports, including interim reports, are prepared and provided to the regulatory authority(ies) as required by the applicable regulatory requirement(s).",
        "The Sponsor should also ensure that the clinical study reports in marketing applications meet the standards of I C H E3 or are otherwise in accordance with applicable regulatory requirements. The Sponsor will notify the authorities as applicable (in line with country/region requirements) about serious breaches of regulations, I C H G C P, or the version of the protocol applicable at the time of the breach.",
        "A ‘serious breach’ means a breach likely to affect to a significant degree the safety and rights of a participant or the reliability and robustness of the data generated in the clinical study. The Investigator or the Sponsor, in line with country/region requirements, will be responsible for the following: • Providing written summaries of the status of the study to the I R B/I E C in accordance with local regulatory requirements or upon request.",
        "• Notifying the I R B/I E C of SAEs or other significant safety findings as required by I R B/I E C procedures."
      ],
      "chips": [
        "SPARROW",
        "p90/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s090.jpg",
      "cap": "Protocol page 90 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 91 of 100 · • Providing oversight of the conduct of the study at the site and adherence to…",
      "audio": [
        "• Providing oversight of the conduct of the study at the site and adherence to requirements of 21 CFR, European regulation 536/2014 for clinical studies, I C H guidelines, the I R B/I E C, and all other applicable local regulations. The Sponsor should determine necessary study-specific criteria for classifying protocol deviations as important.",
        "Important protocol deviations are a subset of protocol deviations that may significantly impact the completeness, accuracy and/or reliability of the study data or that may significantly affect a participant’s rights, safety or wellbeing. The Investigator should document all protocol deviations.",
        "In addition to those identified by the Investigator themselves, protocol deviations relevant to their study participants and their conduct of the study may be communicated to them by the Sponsor. In either case, the Investigator should review the deviations, and for those deviations deemed “important” per Sponsor’s classification, the Investigator should explain the deviation and implement appropriate measures to prevent a recurrence, where applicable.",
        "Financial Disclosure The disclosed financial interest of the Investigator must be provided to the Sponsor before screening the first participant, following study completion at the Investigator site and 1 year following overall study completion. The Investigator should promptly update this information and inform the Sponsor if any relevant changes occur during these periods.",
        "Informed Consent Process The Investigator or designee will explain the nature of the study, including the risks and benefits, to the participant and answer all questions regarding the study. Potential participants must be informed that their participation is voluntary and that the participant may decide to stop taking the investigational product or withdraw from the study at any time, without penalty or loss of benefits to which the participant is otherwise entitled.",
        "Potential participants will be required to sign a statement of informed consent that meets the requirements of 21 CFR 50, local regulations, I C H G C P guidelines, privacy and data protection requirements, where applicable, and the I R B/I E C or study center. The medical record must include a statement that written informed consent was obtained before the participant was enrolled in the study and the date the written consent was obtained.",
        "The authorized person obtaining the informed consent must also sign the ICF. Participants must be reconsented to the most current version of the ICF(s) during their participation in the study. Participants who are rescreened are required to sign a new ICF. New information (e.g., information on emerging safety concerns) should be clearly identified in the revised informed consent materials. A copy of the signed and dated ICF(s) must be provided to the participant.",
        "The signature and date may be done physically or electronically. Potential participants who are related to or dependent on the Investigator or the study site staff are eligible; however, the consent and signature process must be conducted by an impartial medical professional different from the Investigator or the related or dependent staff member."
      ],
      "chips": [
        "SPARROW",
        "p91/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s091.jpg",
      "cap": "Protocol page 91 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 92 of 100 · In emergency situations, where consent cannot be obtained prior to study…",
      "audio": [
        "In emergency situations, where consent cannot be obtained prior to study participation, consent should be obtained from the participant or their legally acceptable representative as soon as possible in accordance with applicable regulatory requirements and the processes approved by the I R B/I E C. Data Protection Participant names will not be provided to the Sponsor. Participants will be assigned a unique identifier by the Sponsor.",
        "Any participant records or datasets that are transferred to the Sponsor will contain the identifier only; participant names or any information which would make the participant identifiable must be redacted on the copy supplied to the Sponsor. All records will be kept confidential to the extent provided by federal, state, and local laws. The participant must be informed that the Sponsor will use his/her personal study-related data in accordance with local data protection law.",
        "The participant must be informed that his/her medical records may be examined by authorized personnel appointed by the Sponsor, by appropriate I R B/I E C members, and by inspectors from regulatory authorities to verify information collected and that all personal information made available for inspection will be handled in strict confidence in accordance with local data protection laws.",
        "Data protection wording shall be provided to study participants as part of the ICF or a stand-alone form added to the ICF. The contract between Sponsor and study sites specifies the responsibilities of the parties regarding data protection, including handling of data security breaches and respective communication and cooperation of the parties.",
        "The process to handle data security breaches, in order to mitigate the possible adverse effects of such breaches to the privacy of study participants, must be described. Organizational and technical arrangements that will be implemented to avoid unauthorized access, disclosure, dissemination, alteration, or loss of personal data processed must be described in study documents.",
        "In particular, the information technology systems used to collect, process, and store study-related data are secured through the implementation such as technical and organizational security measures. Review Committees An Independent Data Monitoring Committee (I D M C) will be appointed for this study.",
        "The I D M C will be an independent committee with appropriate clinical and statistical expertise and will periodically review accumulating study data (including participant safety data and other prespecified data relevant to benefit-risk and study conduct). Based on its review, the I D M C may provide recommendations to the Sponsor regarding continuation of the study as planned, modification of the study, temporary suspension, or termination, as applicable.",
        "The I D M C will operate under a separate I D M C Charter, which will describe committee membership and independence, roles and responsibilities, meeting frequency, data to be reviewed, and decisionmaking and communication procedures. The I D M C Charter will also describe any responsibilities related to independent review processes supporting establishment of the composite standard of truth (composite standard of truth), if applicable."
      ],
      "chips": [
        "SPARROW",
        "p92/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s092.jpg",
      "cap": "Protocol page 92 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 93 of 100 · Data Acquisition All participant data obtained for this study will be recorded in a…",
      "audio": [
        "Data Acquisition All participant data obtained for this study will be recorded in a 21 CFR Part 11-compliant data management system provided by the Sponsor or designee. All data will be recorded with an electronic data capture system unless otherwise transmitted to the Sponsor or designee electronically (e.g., laboratory data).",
        "The Investigator is responsible for verifying that data entries are accurate and correct by electronically signing the final completed electronic case report form (eCRF) casebook for each participant. The Investigator must provide access to original study records to permit a representative from the Sponsor to verify the proper transcription of data.",
        "Data reported in the eCRFs should be consistent with and substantiated by the participant’s medical record and original source records. Regulatory authorities, I R B/I E C, and an auditor authorized by the Sponsor may request access to all source records, eCRFs, and other study documents for an on-site audit or inspection. The Investigator must guarantee direct access to these documents and provide support at all times for these activities.",
        "Medical records and other study documents may be copied during an audit or health authority inspection, provided that participant names are obliterated on the copies to ensure confidentiality. Quality tolerance limits will be predefined to identify systematic issues that can impact participant safety and/or reliability of study results.",
        "These predefined parameters will be monitored during the study, and important deviations from the quality tolerance limits and remedial actions taken will be summarized in the clinical study report.",
        "Monitoring details describing strategy, including definition of study critical data items and processes (e.g., risk-based initiatives in operations and quality, such as risk management and mitigation strategies and analytical risk-based monitoring), methods, responsibilities, and requirements, including handling of noncompliance issues and monitoring techniques (central, remote, or on-site monitoring) are provided in the study plans.",
        "The Sponsor assumes accountability for actions delegated to other individuals (e.g., service providers). Essential records should be retained securely by Sponsors and Investigators for the required period in accordance with applicable regulatory requirements. No records may be destroyed during the retention period without the written approval of the Sponsor. No records may be transferred to another location or party without written notification to the Sponsor.",
        "Source Records Study data will be collected based on source records. Source records documentation (the point of initial recording of a piece of data) provides evidence for the existence of the participant and substantiates the integrity of the data collected. Source records are filed at the Investigator’s site. Data transcribed from source records and recorded in the eCRFs must be consistent with the source records or the discrepancies must be explained.",
        "Definition of what constitutes source data and its origin can be found in the Monitoring Plan."
      ],
      "chips": [
        "SPARROW",
        "p93/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s093.jpg",
      "cap": "Protocol page 93 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 94 of 100 · Study and Site Start and Closure The first act of recruitment is the date the first…",
      "audio": [
        "Study and Site Start and Closure The first act of recruitment is the date the first study participant signs the study informed consent, which is considered the first act of recruitment and will be the study start date. The Sponsor or designee reserves the right to close the study site or terminate the study at any time for any reason at the sole discretion of the Sponsor. Study sites will be closed upon study completion.",
        "A study site is considered closed when all required documents and study supplies have been collected and a study-site closure visit has been performed. The Investigator may initiate study-site closure at any time, provided there is reasonable cause and sufficient notice is given in advance of the intended termination.",
        "Reasons for the early closure of a study site by the Sponsor or Investigator may include but are not limited to: For study termination: • Discontinuation of further study intervention development. For site termination: • Failure of the Investigator to comply with the protocol, the requirements of the I R B/I E C or local health authorities, the Sponsor’s procedures, or G C P guidelines.",
        "• Inadequate or no recruitment (evaluated after a reasonable amount of time) of participants by the investigator. If the study is prematurely terminated or suspended, the Sponsor shall promptly inform the investigators, the IRBs/IECs, the regulatory authorities, and any service provider(s) used in the study of the reason for termination or suspension, as specified by the applicable regulatory requirements.",
        "The Investigator shall promptly inform the participant and should ensure appropriate participant therapy and/or follow-up.",
        "Where the Investigator terminates or suspends their involvement in a study without prior agreement by the Sponsor, the Investigator should promptly inform the institution, where applicable, the Sponsor, the I R B/I E C, and the regulatory authorities in accordance with applicable regulatory requirements and should provide a detailed explanation of the reasons.",
        "If the I R B/I E C terminates or suspends its approval/favorable opinion of a study, the Investigator should inform the institution, where applicable, and the Investigator/institution should promptly notify the Sponsor. Sample/Image Storage and Destruction Samples and images will be collected per the schedule outlined in Section 1.3, as applicable. Instructions for the storage and shipping of biological samples will be provided in the respective study manuals.",
        "Destruction or return of samples will be conducted following standard practice at the designated laboratory. Images collected during the study may be used for future research purposes, with consent from study participants, and should be stored in a secure storage space with adequate measures to protect participant confidentiality."
      ],
      "chips": [
        "SPARROW",
        "p94/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s094.jpg",
      "cap": "Protocol page 94 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 95 of 100 · Publication Policy The results of this study may be published or presented at…",
      "audio": [
        "Publication Policy The results of this study may be published or presented at scientific meetings. If this is foreseen, the Investigator agrees to submit all manuscripts or abstracts to the Sponsor before submission. This allows the Sponsor to protect proprietary information and to provide comments. The Sponsor will comply with the requirements for publication of study results.",
        "In accordance with standard editorial and ethical practice, the Sponsor will generally support publication of multicenter studies only in their entirety and not as individual site data. In this case, a coordinating Investigator will be designated by mutual agreement. Authorship will be determined by mutual agreement and in line with International Committee of Medical Journal Editors authorship requirements.",
        "Recruitment Strategy For recruitment, potential participants will be identified by the Investigators and their research teams. Depending on local regulations, this may include but is not limited to review of patient databases, review of patients attending outpatient appointments in clinics, routine clinical referrals, contacts with other clinics and hospitals, or discussion in multidisciplinary meetings."
      ],
      "chips": [
        "SPARROW",
        "p95/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s095.jpg",
      "cap": "Protocol page 95 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 96 of 100 · Certificate Of Completion Envelope Id: EF1E474F-4EE7-8751-8011-5D48E7C11436 Status:…",
      "audio": [
        "Certificate Of Completion Envelope Id: EF1E474F-4EE7-8751-8011-5D48E7C11436 Status: Completed Subject: Complete with Docusign: R M 2-3301 Newly Diagnosed Protocol V1 Final 30Apr2026-formatted.pdf Source Envelope: Document Pages: 95 Signatures: 2 Envelope Originator: Certificate Pages: 5 Initials: 0 Joanne Magnotta AutoNav: Enabled EnvelopeId Stamping: Disabled Time Zone: (UTC-05:00) Eastern Time (US & Canada) joanne.magnotta@lantheus.com IP Address: 170.85.70.178 Record",
        "Tracking Status: Original 5/5/2026 4:47:06 PM Holder: Joanne Magnotta joanne.magnotta@lantheus.com Location: DocuSign Signer Events Signature Timestamp Andrew Stephens andrew.stephens@lantheus.com Security Level: Email, Account Authentication (Required), Login with SSO Signature Adoption: Uploaded Signature Image Signature ID: 1AE88048-F419-4227-816A-5E6DBF633414 Using IP Address: 212.91.230.98 With Signing Authentication via Docusign password With Signing Reasons (on each",
        "tab): I approve this document Sent: 5/5/2026 4:50:07 PM Resent: 5/6/2026 9:19:03 AM Resent: 5/6/2026 12:31:23 PM Viewed: 5/7/2026 9:22:14 AM Signed: 5/7/2026 9:23:27 AM Electronic Record and Signature Disclosure: Accepted: 5/7/2026 9:22:14 AM ID: 05537719-e7aa-4df4-9b48-f132115c319e Nancy Stambler Nancy.stambler@lantheus.com Vice President, Data Science Lantheus Holdings Security Level: Email, Account Authentication (Required), Login with SSO Signature Adoption: Pre-selected",
        "Style Signature ID: 7C6D1808-40AD-4D10-9AEB-517B3324454D Using IP Address: 72.80.11.175 With Signing Authentication via Docusign password With Signing Reasons (on each tab): I approve this document Sent: 5/5/2026 4:50:07 PM Viewed: 5/5/2026 4:51:17 PM Signed: 5/5/2026 4:51:40 PM Electronic Record and Signature Disclosure: Accepted: 11/19/2020 12:54:32 PM ID: 656d4a4a-47ac-4719-b71c-9063a70a37ca In Person Signer Events Signature Timestamp Editor Delivery Events Status",
        "Timestamp Agent Delivery Events Status Timestamp"
      ],
      "chips": [
        "SPARROW",
        "p96/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s096.jpg",
      "cap": "Protocol page 96 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 97 of 100 · Intermediary Delivery Events Status Timestamp Certified Delivery Events Status…",
      "audio": [
        "Intermediary Delivery Events Status Timestamp Certified Delivery Events Status Timestamp Carbon Copy Events Status Timestamp Joanne Magnotta joanne.magnotta@lantheus.com Security Level: Email, Account Authentication (Required) Sent: 5/5/2026 4:50:08 PM Resent: 5/7/2026 9:23:31 AM Electronic Record and Signature Disclosure: Not Offered via Docusign Witness Events Signature Timestamp Notary Events Signature Timestamp Envelope Summary Events Status Timestamps Envelope Sent",
        "Hashed/Encrypted 5/5/2026 4:50:08 PM Certified Delivered Security Checked 5/5/2026 4:51:17 PM Signing Complete Security Checked 5/5/2026 4:51:40 PM Completed Security Checked 5/7/2026 9:23:27 AM Payment Events Status Timestamps Electronic Record and Signature Disclosure"
      ],
      "chips": [
        "SPARROW",
        "p97/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s097.jpg",
      "cap": "Protocol page 97 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 98 of 100 · ELECTRONIC RECORD AND SIGNATURE DISCLOSURE From time to time, Lantheus Medical…",
      "audio": [
        "ELECTRONIC RECORD AND SIGNATURE DISCLOSURE From time to time, Lantheus Medical Imaging, Inc. - Part 11 (we, us or Company) may be required by law to provide to you certain written notices or disclosures. Described below are the terms and conditions for providing to you such notices and disclosures electronically through the DocuSign system.",
        "Please read the information below carefully and thoroughly, and if you can access this information electronically to your satisfaction and agree to this Electronic Record and Signature Disclosure (ERSD), please confirm your agreement by selecting the check-box next to ‘I agree to use electronic records and signatures’ before clicking ‘CONTINUE’ within the DocuSign system.",
        "Getting paper copies At any time, you may request from us a paper copy of any record provided or made available electronically to you by us. You will have the ability to download and print documents we send to you through the DocuSign system during and immediately after the signing session and, if you elect to create a DocuSign account, you may access the documents for a limited period of time (usually 30 days) after such documents are first sent to you.",
        "After such time, if you wish for us to send you paper copies of any such documents from our office to you, you will be charged a $0.00 per-page fee. You may request delivery of such paper copies from us by following the procedure described below.",
        "Withdrawing your consent If you decide to receive notices and disclosures from us electronically, you may at any time change your mind and tell us that thereafter you want to receive required notices and disclosures only in paper format. How you must inform us of your decision to receive future notices and disclosure in paper format and withdraw your consent to receive notices and disclosures electronically is described below.",
        "Consequences of changing your mind If you elect to receive required notices and disclosures only in paper format, it will slow the speed at which we can complete certain steps in transactions with you and delivering services to you because we will need first to send the required notices or disclosures to you in paper format, and then wait until we receive back from you your acknowledgment of your receipt of such paper notices or disclosures.",
        "Further, you will no longer be able to use the DocuSign system to receive required notices and consents electronically from us or to sign electronically documents from us. All notices and disclosures will be sent to you electronically Electronic Record and Signature Disclosure created on: 2/21/2019 10:06:12 AM Parties agreed to: Andrew Stephens, Nancy Stambler"
      ],
      "chips": [
        "SPARROW",
        "p98/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s098.jpg",
      "cap": "Protocol page 98 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 99 of 100 · Unless you tell us otherwise in accordance with the procedures described herein, we…",
      "audio": [
        "Unless you tell us otherwise in accordance with the procedures described herein, we will provide electronically to you through the DocuSign system all required notices, disclosures, authorizations, acknowledgements, and other documents that are required to be provided or made available to you during the course of our relationship with you.",
        "To reduce the chance of you inadvertently not receiving any notice or disclosure, we prefer to provide all of the required notices and disclosures to you by the same method and to the same address that you have given us. Thus, you can receive all the disclosures and notices electronically or in paper format through the paper mail delivery system. If you do not agree with this process, please let us know as described below.",
        "Please also see the paragraph immediately above that describes the consequences of your electing not to receive delivery of the notices and disclosures electronically from us. How to contact Lantheus Medical Imaging, Inc.",
        "- Part 11: You may contact us to let us know of your changes as to how we may contact you electronically, to request paper copies of certain information from us, and to withdraw your prior consent to receive notices and disclosures electronically as follows: To contact us by email send messages to: sandra.monte@lantheus.com To advise Lantheus Medical Imaging, Inc.",
        "- Part 11 of your new email address To let us know of a change in your email address where we should send notices and disclosures electronically to you, you must send an email message to us at sandra.monte@lantheus.com and in the body of such request you must state: your previous email address, your new email address. We do not require any other information from you to change your email address.",
        "If you created a DocuSign account, you may update it with your new email address through your account preferences. To request paper copies from Lantheus Medical Imaging, Inc. - Part 11 To request delivery from us of paper copies of the notices and disclosures previously provided by us to you electronically, you must send us an email to sandra.monte@lantheus.com and in the body of such request you must state your email address, full name, mailing address, and telephone number.",
        "We will bill you for any fees at that time, if any. To withdraw your consent with Lantheus Medical Imaging, Inc. - Part 11 To inform us that you no longer wish to receive future notices and disclosures in electronic format you may:"
      ],
      "chips": [
        "SPARROW",
        "p99/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s099.jpg",
      "cap": "Protocol page 99 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 100 of 100 · Protocol body · page 100",
      "audio": [
        "i. decline to sign a document from within your signing session, and on the subsequent page, select the check-box indicating you wish to withdraw your consent, or you may; ii. send us an email to sandra.monte@lantheus.com and in the body of such request you must state your email, full name, mailing address, and telephone number. We do not need any other information from you to withdraw consent..",
        "The consequences of your withdrawing consent for online documents will be that transactions may take a longer time to process.. Required hardware and software The minimum system requirements for using the DocuSign system may change over time. The current system requirements are found here: https://support.docusign.com/guides/signer-guidesigning-system-requirements.",
        "Acknowledging your access and consent to receive and sign documents electronically To confirm to us that you can access this information electronically, which will be similar to other electronic notices and disclosures that we will provide to you, please confirm that you have read this ERSD, and (i) that you are able to print on paper or electronically save this ERSD for your future reference and access; or (ii) that you are able to email this ERSD to an email address where",
        "you will be able to print on paper or save it for your future reference and access. Further, if you consent to receiving notices and disclosures exclusively in electronic format as described herein, then select the check-box next to ‘I agree to use electronic records and signatures’ before clicking ‘CONTINUE’ within the DocuSign system.",
        "By selecting the check-box next to ‘I agree to use electronic records and signatures’, you confirm that:  You can access and read this Electronic Record and Signature Disclosure; and  You can print on paper this Electronic Record and Signature Disclosure, or save or send this Electronic Record and Disclosure to a location where you can print it, for future reference and access; and  Until or unless you notify Lantheus Medical Imaging, Inc.",
        "- Part 11 as described above, you consent to receive exclusively through electronic means all notices, disclosures, authorizations, acknowledgements, and other documents that are required to be provided or made available to you by Lantheus Medical Imaging, Inc. - Part 11 during the course of your relationship with Lantheus Medical Imaging, Inc. - Part 11."
      ],
      "chips": [
        "SPARROW",
        "p100/100",
        "Full protocol text"
      ],
      "visual": "sparrow",
      "image": "assets/protocol/sparrow/s100.jpg",
      "cap": "Protocol page 100 of 100 — SPARROW RM2-3301 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What receptor does ⁶⁸Ga-LNTH-2401 target?",
      "choices": [
        "PSMA, same as ⁶⁸Ga-PSMA-11",
        "GRPR (gastrin-releasing peptide receptor); precursor DOTA-RM2 ≤40 µg",
        "SSTR2, same as DOTATATE",
        "HER2, same as DWJ155"
      ],
      "a": 1,
      "why": "Synopsis / Table 5. Bombesin-family GRPR tracer. Complementary to PSMA, not a replacement."
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
      "why": "§1.1 / Table 5. Single diagnostic injection. Phase 3 uses the Phase 2-selected activity."
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
      "why": "§9.3.2. IQS range 0–12. Phase 2 data do not feed the Phase 3 primary diagnostic analysis."
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
      "why": "Synopsis Population. Pathology of pelvic nodes is the primary standard of truth."
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
      "why": "§9.1.2. Three blinded central readers. Secondary CSOT may add conventional imaging / PSMA PET via iDMC charter."
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
      "why": "Synopsis Projected Number of Sites and Participants. Open-label, nonrandomised, competitive enrollment."
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
      "why": "§9.2.2. Imaging-evaluable and per-protocol sets are supportive."
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
      "why": "§6.7. Hydrate before and after to drop kidney/bladder dose and clean the images."
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
      "why": "§6.1 / synopsis. Same GRPR ligand, two manufacturing intents sequenced inside one protocol."
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
      "why": "Cover / brief title. Head of Clinical Development named: Andrew Stephens, MD, PhD."
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
      "why": "Synopsis Phase 2 / design rationale. Keeps the pivotal imaging claim clean for regulators."
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
      "why": "Table 5 / §6.2. No planned dose modifications. Overdose is a dose-calibrator + authorised-user problem, reported in 24 h."
    }
  ]
};


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
