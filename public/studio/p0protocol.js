/* GP-STAR / ST1530-1 full protocol audiobook module for NucMed Board Studio.
   Loads after the main studio script. Mutates window.COURSE. */

  const P0V = {
    gpstar: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#3ee0c4" font-size="16">GP-STAR · ST1530-1 · two parallel cohorts</text>
      <rect x="20" y="48" width="480" height="44" rx="10" fill="#10232e" stroke="#3ee0c4"/>
      <text x="260" y="76" text-anchor="middle" fill="#e8f2f7" font-size="13">Screening · FDG PET/CT within 60 days · ICF · ECOG 0–2</text>
      <rect x="20" y="110" width="220" height="88" rx="10" fill="#10232e" stroke="#7cb8ff"/>
      <text x="130" y="138" text-anchor="middle" fill="#7cb8ff" font-size="13">Cohort 1 · n ≈ 10</text>
      <text x="130" y="160" text-anchor="middle" fill="#c5d8e3" font-size="12">Solid tumors</text>
      <text x="130" y="178" text-anchor="middle" fill="#c5d8e3" font-size="12">suspected peritoneal mets</text>
      <rect x="280" y="110" width="220" height="88" rx="10" fill="#10232e" stroke="#f5d76e"/>
      <text x="390" y="138" text-anchor="middle" fill="#f5d76e" font-size="13">Cohort 2 · n ≈ 10</text>
      <text x="390" y="160" text-anchor="middle" fill="#c5d8e3" font-size="12">NSCLC</text>
      <text x="390" y="178" text-anchor="middle" fill="#c5d8e3" font-size="12">suspected nodal mets</text>
      <rect x="20" y="214" width="480" height="48" rx="10" fill="#10232e" stroke="#fb7185"/>
      <text x="260" y="234" text-anchor="middle" fill="#fb7185" font-size="13">185 MBq ±10% ⁶⁸Ga-GP-01 · PET/CT · surgery/biopsy · FAP IHC</text>
      <text x="260" y="252" text-anchor="middle" fill="#9bb3c2" font-size="11">First 6: multi-timepoint PET + PK + dosimetry · later: 1 PET</text>
    </svg>`,
    fap: `<svg viewBox="0 0 520 280" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="280" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#f5d76e" font-size="16">FAP target · cancer-associated fibroblast</text>
      <circle cx="150" cy="140" r="54" fill="#163746" stroke="#fb7185" stroke-width="3"/>
      <text x="150" y="136" text-anchor="middle" fill="#fb7185" font-size="13">tumor</text>
      <text x="150" y="154" text-anchor="middle" fill="#c5d8e3" font-size="11">cell</text>
      <circle cx="310" cy="100" r="28" fill="#10232e" stroke="#3ee0c4" stroke-width="2"/>
      <circle cx="360" cy="150" r="28" fill="#10232e" stroke="#3ee0c4" stroke-width="2"/>
      <circle cx="300" cy="180" r="28" fill="#10232e" stroke="#3ee0c4" stroke-width="2"/>
      <text x="360" y="154" text-anchor="middle" fill="#3ee0c4" font-size="10">CAF</text>
      <text x="300" y="184" text-anchor="middle" fill="#3ee0c4" font-size="10">FAP+</text>
      <rect x="400" y="118" width="96" height="44" rx="8" fill="#1a2a14" stroke="#3ee0c4"/>
      <text x="448" y="138" text-anchor="middle" fill="#3ee0c4" font-size="11">GP-01</text>
      <text x="448" y="154" text-anchor="middle" fill="#9bb3c2" font-size="10">⁶⁸Ga · 511 keV</text>
      <text x="260" y="250" text-anchor="middle" fill="#c5d8e3" font-size="12">Small-molecule FAP inhibitor · stroma, not the epithelial cell</text>
    </svg>`,
    gadosedose: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="32" text-anchor="middle" fill="#3ee0c4" font-size="16">Intended diagnostic dose</text>
      <text x="260" y="78" text-anchor="middle" fill="#f5d76e" font-size="28">185 MBq ± 10%</text>
      <text x="260" y="112" text-anchor="middle" fill="#7cb8ff" font-size="18">5 mCi ± 10% · mass ≤ 50 µg</text>
      <text x="40" y="160" fill="#e8f2f7" font-size="14">Bolus IV · then PET/CT</text>
      <text x="40" y="188" fill="#e8f2f7" font-size="14">Ga-68 T½ 68 min · positron → 511 keV pair</text>
      <text x="40" y="216" fill="#9bb3c2" font-size="13">ALARA: lowest activity that still yields diagnostic images</text>
      <text x="40" y="242" fill="#9bb3c2" font-size="13">Matches published FAPI diagnostic activities</text>
    </svg>`,
    truth2x2: `<svg viewBox="0 0 520 260" class="svg-box" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="260" fill="#08141c"/>
      <text x="260" y="28" text-anchor="middle" fill="#3ee0c4" font-size="16">Pathology = standard of truth</text>
      <text x="300" y="58" fill="#9bb3c2" font-size="12">Path +</text>
      <text x="410" y="58" fill="#9bb3c2" font-size="12">Path −</text>
      <rect x="250" y="70" width="100" height="64" rx="8" fill="#10232e" stroke="#4ade80"/>
      <text x="300" y="108" text-anchor="middle" fill="#4ade80" font-size="18">TP</text>
      <rect x="360" y="70" width="100" height="64" rx="8" fill="#10232e" stroke="#fb923c"/>
      <text x="410" y="108" text-anchor="middle" fill="#fb923c" font-size="18">FP</text>
      <rect x="250" y="144" width="100" height="64" rx="8" fill="#10232e" stroke="#fb7185"/>
      <text x="300" y="182" text-anchor="middle" fill="#fb7185" font-size="18">FN</text>
      <rect x="360" y="144" width="100" height="64" rx="8" fill="#10232e" stroke="#7cb8ff"/>
      <text x="410" y="182" text-anchor="middle" fill="#7cb8ff" font-size="18">TN</text>
      <text x="40" y="108" fill="#e8f2f7" font-size="13">PET +</text>
      <text x="40" y="182" fill="#e8f2f7" font-size="13">PET −</text>
      <text x="40" y="236" fill="#f5d76e" font-size="12">Resected PET+ / path− region is FP (v1.2 correction)</text>
    </svg>`
  };

  const MODULE = {
  "id": "p0protocol",
  "num": "P0P",
  "title": "GP-STAR protocol · ST1530-1 full 90 pages",
  "time": "~3–4 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this GP-STAR protocol audiobook",
      "audio": [
        "This module is a full read-through of clinical protocol S T 1530-1, study nickname G P STAR, version 1.2, dated 29 April 2026.",
        "Sponsor: Grand Sirtex, Chengdu, Medical Technology. Compound: gallium-68 G P zero one, a small-molecule fibroblast activation protein inhibitor for PET C T.",
        "It is an exploratory, open-label Phase I/II in two parallel cohorts: solid tumors with suspected peritoneal metastases, and non-small cell lung cancer with suspected nodal metastases.",
        "The player is the same Board Studio audiobook you already use. Press play. The script on the right is spoken. The left pane shows the real protocol page plus the matching nuclear-medicine diagram and video.",
        "Open the atlas for F A P and F D G teaching plates while you listen. Slow the rate on tables. Double-click a term for live images.",
        "This is a teaching walk-through of how a first-in-human F A P PET protocol is written. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence.",
        "Work page by page. Ninety protocol pages, plus this intro. After the last page, take the module quiz — dose, cohorts, truth standard, transporters, and A L A R A."
      ],
      "chips": [
        "90 pages",
        "Web speech",
        "Protocol page on screen",
        "Same studio player"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p001.jpg",
      "cap": "ST1530-1 cover — open-label ⁶⁸Ga-GP-01 (GP-STAR)",
      "pearls": [
        "Same play, pause, speed, atlas, and live-image dock as every other studio module.",
        "The photograph of each protocol page sits in the lesson so you can read while you listen."
      ]
    },
    {
      "title": "Page 1 of 90 · Cover · GP-STAR clinical protocol ST1530-1",
      "audio": [
        "CLINICAL PROTOCOL Protocol Title: An Exploratory, Open-label Study of Safety, Pharmacokinetics, Biodistribution and Dosimetry of gallium-68 G P zero one in Participants with Solid Tumors (G P STAR) Protocol Number: S T 1530-1 Compound: gallium-68 G P zero one Study Phase: Phase I/II Sponsor: Grand Sirtex (Chengdu) Medical Technology Co., Ltd.",
        "This document contains confidential information by Grand Sirtex (Chengdu) Medical Technology Co., Ltd.",
        "Acceptance of this document constitutes the agreement by the recipient that no unpublished information contained herein will be published or disclosed without the prior written approval from Grand Sirtex (Chengdu) Medical Technology Co., Ltd. except that this document may only be disclosed to the appropriate institutional review boards/ethical committees so long as they are requested to maintain its confidentiality."
      ],
      "chips": [
        "ST1530-1",
        "GP-STAR",
        "Phase I/II",
        "v1.2"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p001.jpg",
      "cap": "Protocol page 1 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "GP-STAR is an exploratory open-label Phase I/II of gallium-68 GP-01 in solid tumors.",
        "Sponsor: Grand Sirtex (Chengdu). Protocol ST1530-1, version 1.2, 29 April 2026."
      ]
    },
    {
      "title": "Page 2 of 90 · Protocol version history (v1.0 → v1.2)",
      "audio": [
        "PROTOCOL VERSION HISTORY Version No. Version Date 1.0 2025/11/07 1.1 2026/03/25 1.2 2026/04/29"
      ],
      "chips": [
        "ST1530-1",
        "p2/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p002.jpg",
      "cap": "Protocol page 2 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 3 of 90 · Amendments from v1.0 — Ga-68, vital signs, FP vs FN",
      "audio": [
        "AMENDMENT AND UPDATES Summary of Changes for Protocol # S T 1530-1: Original Version: v1.0 Date: 2025/11/07 Sections Affected Description of Changes Brief Rationale Synopsis - Investigational Product and dose regimen Removed explanation that Gallium-68 is a radionuclide emitting γ radiation.",
        "Gallium-68 is a positron-emitting radioisotope. The explanation is removed to avoid misunderstanding. Table 1 Study Procedure and Schedule of Activity Added a vital sign assessment within 0.5 h post administration of IP. An early timepoint assessment of safety is necessary for an early phase clinical study.",
        "Table 2 Study Procedure and Schedule of Activity (PET C T scanning, blood & urine sampling) Revised footnote #3. For participants who only need 1 PET C T assessment, the scanning time may be optimized according to the results of the first enrolled 6 participants.",
        "The time window of 30~60 min post dose is a preliminary one and may be adjusted based on the study results. Section 3.1 Added surgical approach or other therapeutic management should be based on conventional images rather than gallium-68 G P zero one PET C T results.",
        "If it is necessary at the discretion of the surgeon, more work-ups could be conducted for a change in surgical or therapeutic strategy. As this is an exploratory study, there is not sufficient evidence to support a change in clinical decisions.",
        "Synopsis and Section 4.2 Exclusion Criteria Removed “the planned” administration from the exclusion criteria. The exact administration time of IP and fluorine-18 F D G will be reviewed for patient enrollment.",
        "Synopsis and Section 4.2 Exclusion Criteria Added participants taking P-glycoprotein or B C R P transporters within 1 week or 5 half-lives (whichever is longer) prior to administration of IP. gallium-68 G P zero one is a substrate of P-glycoprotein and B C R P according to preclinical studies.",
        "Restrictions are needed to minimize the potential impact on distribution of gallium-68 G P zero one. Section 5.5.1 Prohibited Medication/ Therapy Added restrictions on P-glycoprotein or B C R P transporters prior to the administration of IP and throughout the test period.",
        "Section 7.4 Biodistribution Analysis Removed “after the CT scanning” from the sentence. Making the process more understandable.",
        "Section 7.6.1 Definitions Changed “If a pathology from surgery shows negative for a PET C T-positive region, and it is confirmed that the PET C T-positive lesion was resected, the region should be classified as FN.” to the region should be classified as FP. Making definitions correct.",
        "Section 8.3.2 and Section 9.3.3 Safety Changed C T C A E v5.0 to C T C A E v6.0 C T C A E v6.0 could be used after studies started after 01/01/2026 according to NCI. Section 17.6 Added appendix of examples of inhibitors for P-glycoprotein and B C R P inhibitors.",
        "Examples of P-glycoprotein and B C R P inhibitors are provided for reference. Original Version: v1.1 Date: 2026/03/25 Sections Affected Description of Changes Brief Rationale"
      ],
      "chips": [
        "Amendment",
        "positron not gamma",
        "FP not FN",
        "CTCAE v6"
      ],
      "visual": "annihilation",
      "image": "assets/protocol/p003.jpg",
      "cap": "Protocol page 3 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Amendment: gallium-68 is a positron emitter — do not call it a gamma emitter.",
        "If pathology of a resected PET-positive region is negative, that region is FP, not FN."
      ]
    },
    {
      "title": "Page 4 of 90 · Amendments from v1.1 — sponsor, FDG window, P-gp",
      "audio": [
        "Sponsor - Front Page and throughout the protocol Updated sponsor name to Grand Sirtex (Chengdu) Medical Technology Co., Ltd. Synopsis and Section 3.1 Overall Design Broaden the time window for fluorine-18 F D G PET C T imaging to 60 days before IP administration.",
        "Correlate the time window for 18FFDG PET C T with conventional imaging.",
        "Synopsis and Section 4.1 Inclusion Criteria Revised inclusion criteria #4, making clear that solid tumors with confirmed or suspected peritoneal metastasis could be enrolled and the primary malignancies are not limited to the malignancies listed in the protocol.",
        "Correlate the inclusion criteria with the target indication “solid tumors” with suspected peritoneal metastases. Synopsis and Section 4.2 Exclusion Criteria Revised exclusion criteria #4, adding restrictions only on strong P-glycoprotein or B C R P transporters. Removed hydronephrosis in the exclusion criteria.",
        "Only strong P-glycoprotein or B C R P transporters might be clinically relevant to the IP. Adequate renal function is defined in the inclusion criteria and thus hydronephrosis itself is removed as an exclusion criterion.",
        "Synopsis Statistical Methods Switched “MedDRA 28.0 or higher” to “the most recent version of MedDRA” Table 1 Study Procedure and Schedule of Activity Revised footnote #4 and 6, making clear that recent imaging, labs, pregnancy test and ECGs during a standard-of-care assessment at the investigational site would be accepted.",
        "Reduce the burden of repeated standard-of-care tests for patients to be enrolled. Table 3 Tests Required in Examination or Evaluation Corrected typos.",
        "Section 5.5.1 and Appendix 6 Emphasized only strong P-glycoprotein or B C R P transporters are prohibited in the study and listed examples of strong inhibitors in the appendix. Correlate with exclusion criteria #4.",
        "Section 8.1 Removed the descriptions for circumstances when conditions existed before signing informed consent form. In this study, adverse events are recorded after administration of IP and thus this is no longer applicable."
      ],
      "chips": [
        "ST1530-1",
        "p4/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p004.jpg",
      "cap": "Protocol page 4 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "FDG PET/CT window broadened to 60 days before investigational product.",
        "Only strong P-gp or BCRP inhibitors are prohibited; hydronephrosis dropped as an exclusion."
      ]
    },
    {
      "title": "Page 5 of 90 · Site principal investigator signature page",
      "audio": [
        "Site Principal Investigator Signature Protocol Title: An Exploratory, Open-label Study of Safety, Pharmacokinetics, Biodistribution and Dosimetry of gallium-68 G P zero one in Participants with Solid Tumors (G P STAR) Protocol Number: S T 1530-1 Protocol Version and Date: V1.2, 2026/04/29 As the Principal Investigator of this study at this site, I have carefully read and fully understood the study protocol, the drug labeling, and/or the Investigator’s Brochure.",
        "I confirm that the protocol contains all necessary elements for the conduct of the study and that I am fully aware of my responsibilities related to this study.",
        "I agree to conduct this study in accordance with the protocol and its amendments, and I will strictly adhere to the Declaration of Helsinki, Good Clinical Practice (G C P), the Drug Registration Regulations, and other relevant laws and regulations in fulfilling my duties.",
        "Principal Investigator Signature Date Name (Printed) Site Name"
      ],
      "chips": [
        "ST1530-1",
        "p5/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p005.jpg",
      "cap": "Protocol page 5 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 6 of 90 · Sponsor signature page — Grand Sirtex Chengdu",
      "audio": [
        "Sponsor Signature Protocol Title: An Exploratory, Open-label Study of Safety, Pharmacokinetics, Biodistribution and Dosimetry of gallium-68 G P zero one in Participants with Solid Tumors (G P STAR) Protocol Number: S T 1530-1 Protocol Version and Date: V1.2, 2026/04/29 As the Sponsor’s representative, I have thoroughly reviewed and fully understood the study protocol, and I confirm that the protocol meets all applicable scientific and medical requirements.",
        "The Sponsor’s team will strictly adhere to the Declaration of Helsinki, Good Clinical Practice (G C P), the Drug Registration Regulations, and other relevant laws and regulations in fulfilling our obligations as the Sponsor. Signature Date Name (Printed) Title Clinical Medicine Director Yu Hu"
      ],
      "chips": [
        "ST1530-1",
        "p6/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p006.jpg",
      "cap": "Protocol page 6 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 7 of 90 · Table of contents · sections 1–5",
      "audio": [
        "Table of Contents TABLE OF CONTENTS 1 LIST OF ABBREVIATIONS 5 PROTOCOL SYNOPSIS 8 FLOW CHART 12 EXAMINATION/EVALUATION DETAILS 15 1 INTRODUCTION 17 1.1 Background 17 1.2 Nonclinical Study 19 1.2.1 Pharmacology 19 1.2.2 Pharmacokinetics and Biodistribution 22 1.2.3 Toxicology 24 1.3 Clinical Study 25 1.4 Study Rationale 26 1.5 Benefit-Risk Assessment 27 2 STUDY OBJECTIVES/STUDY ENDPOINTS 29 3 STUDY DESIGN 30 3.1 Overall Design 30 3.2 Justification for Dose 30 4 STUDY POPULATION 34 4.1 Inclusion Criteria 34 4.2 Exclusion Criteria 35 4.3 Participant Complete or Discontinuation from Study 36 4.3.1 Criteria for Completing the Study 36 4.3.2 Criteria for Discontinuation 36 4.3.3 Withdrawal Procedure 36 4.3.4 Replacement 37 4.4 Criteria for End of Study, Early Suspension or Termination of the Study 37 4.4.1 Criteria for End of Study 37 4.4.2 Criteria for Suspension of the Study 37 4.5 Screen Failures and Rescreen 38 5 STUDY TREATMENT 39 5.1 gallium-68 G P zero one 39 5.1.1 Chemical Properties 39"
      ],
      "chips": [
        "ST1530-1",
        "p7/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p007.jpg",
      "cap": "Protocol page 7 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 8 of 90 · Table of contents · sections 5–8",
      "audio": [
        "5.1.2 Pharmacological Properties 39 5.1.3 Packaging and Labeling 39 5.1.4 Supply, Storage, Distribution and Handling 40 5.1.5 Dosage and Administration 41 5.2 Treatment Assignment 41 5.3 Treatment Compliance 41 5.4 Radiation Precautions 42 5.5 Prior and Concomitant Medication/Therapy 42 5.5.1 Prohibited Medication/Therapy 43 5.5.2 Permitted Concomitant Medication/Therapy 43 6 STUDY PROCEDURES 44 6.1 Unscheduled Visit 44 6.2 Sample Retention/Destruction 44 7 STUDY ANALYSIS 45 7.1 Safety Analysis 45 7.2 Imaging Parameters 45 7.3 Dosimetry Analysis 45 7.3.1 Radiation Dosimetry 45 7.4 Biodistribution Analysis 45 7.5 Pharmacokinetic Analysis 46 7.6 Diagnostic Performance 46 7.6.1 Definitions 46 7.6.2 Evaluation on Region Level 48 7.6.3 Evaluation on Patient Level 50 7.7 SUVs and tumor to background ratios Comparison Between PET C T Scans 50 7.8 SUVs Correlation with immunohistochemistry Results 50 8 SAFETY 52 8.1 Adverse Events 52 8.2 Serious Adverse Events 52 8.3 Assessment of Adverse Events 54 8.3.1 Seriousness 54 8.3.2 Severity 54 8.3.3 Causal relationship 55 8.3.4 Measures Taken Regarding IP 56 8.3.5 Measures Taken Regarding AEs 56"
      ],
      "chips": [
        "ST1530-1",
        "p8/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p008.jpg",
      "cap": "Protocol page 8 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 9 of 90 · Table of contents · sections 8–17",
      "audio": [
        "8.3.6 Outcomes 56 8.4 Collection of Adverse Events 57 8.5 Documentation of Adverse Events 57 8.6 Disease Progression and Death 59 8.7 Follow-up of Adverse Events 59 8.8 Reporting of Serious Adverse Events 60 8.9 Contraception 60 8.10 Reporting of Pregnancy 62 9 STATISTICAL METHODS AND DETERMINATION OF SAMPLE SIZE 64 9.1 Sample Size Determination 64 9.2 Analysis Sets 64 9.3 Statistical Methods 64 9.3.1 General principles 64 9.3.2 Baseline Characteristics and Demographics 65 9.3.3 Primary Variables 65 9.3.4 Secondary Variables 66 10 DATA MANAGEMENT 68 10.1 Data Management 68 10.1.1 Electronic Data Capture (electronic data capture) System Database Setup 68 10.1.2 Electronic Case Report Form (electronic case report form) Entry 68 10.2 Data Locking 68 10.3 Monitoring 69 10.4 electronic case report form Archiving 69 10.5 Source Document 70 11 ETHICAL AND LEGAL ASPECTS 71 11.1 Informed Consent and Signature of Informed Consent Form 71 11.2 Ethical and Legal Conduct of the Study 71 12 QUALITY ASSURANCE AND QUALITY CONTROL 73 13 PROTOCOL DEVIATION 74 14 INSURANCE 75 15 PUBLICATION POLICY AND CONFIDENTIALITY 76 15.1 Publication Policy 76 15.2 Confidentiality 76 16 REFERENCES 77 17 APPENDIX 79"
      ],
      "chips": [
        "ST1530-1",
        "p9/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p009.jpg",
      "cap": "Protocol page 9 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 10 of 90 · Table of contents · appendices 17.1–17.6",
      "audio": [
        "17.1 Appendix 1 The Cockcroft and Gault formula 79 17.2 Appendix 2 Eastern Cooperative Group (E C O G) Performance Status Scale 80 17.3 Appendix 3 The QT interval Fridericia's correction formula 81 17.4 Appendix 4: peritoneal cancer index Calculation 82 17.5 Appendix 5: N Staging in non-small cell lung cancer (I A S L C 9th Edition) 83 17.6 Appendix 6: Examples of strong inhibitors for transporters 84"
      ],
      "chips": [
        "ST1530-1",
        "p10/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p010.jpg",
      "cap": "Protocol page 10 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 11 of 90 · Abbreviations A–F (ALARA, FAP, FDG, DOTA)",
      "audio": [
        "List of Abbreviations Abbreviation Definition ABC Transporter ATP-Binding Cassette (ABC) Transporter AEs Adverse Events A L A R A As Low as Reasonably Achievable ALP Alkaline Phosphatase ALT Alanine Aminotransferase ANC Absolute Neutrophil Count aPTT activated Partial Thromboplastin Time AST Aspartate Aminotransferase AUC Area Under the Curve B C R P Breast Cancer Resistance Protein CAFs Cancer-associated Fibroblasts CD-ROM Compact Disc Read-Only Memory Cmax Maximum Concentration cGMP Good Manufacturing Practices CL Clearance colorectal cancer Colorectal Cancer CRO Contract Research Organization CRS/HIPEC Cytoreductive Surgery and hyperthermic intraperitoneal chemotherapy CT Computed Tomography DOTA 1,4,7,10-Tetraazacyclododecane-1,4,7,10-Tetraacetic acid DWI Diffusion Weighted Imaging EC Ethics Committee ECGs Electrocardiograms electronic case report form Electronic Case Report Form electronic data capture Electronic Data Capture F A P Fibroblast Activation Protein F A PI Fibroblast Activation Protein Inhibitor FDG Fluorodeoxyglucose"
      ],
      "chips": [
        "ST1530-1",
        "p11/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p011.jpg",
      "cap": "Protocol page 11 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 12 of 90 · Abbreviations F–P (FN/FP, GCP, NSCLC, PET/CT)",
      "audio": [
        "FN False Negative FP False Positive GC Gastric Cancer G C P Good Clinical Practice GI Gastrointestinal GGT Gamma-glutamyl Transferase HEK Human Embryonic Kidney informed consent form Informed Consent Form ICH International Conference on Harmonization immunohistochemistry Immunohistochemistry IIT Investigator-Initiated Trial IP Investigational Product INR International Normalised Ratio IV Intravenous LN Lymph Node MATE1 Multidrug and Toxin Extrusion 1 MRI Magnetic Resonance Imaging N C C N National Comprehensive Cancer Network NCI-C T C A E National Cancer Institute-Common Terminology Criteria for Adverse Events no observed adverse effect level No Observed Adverse Effect Level NOG NOD/SCID/γcnull non-small cell lung cancer Non-Small Cell Lung Cancer OAT1 Organic Anion Transporter 1 OATP1B1 Organic Anion Transporting Polypeptide 1B1 OCT2 Organic Cation Transporter 2 OS Overall Survival PC Peritoneal Carcinomatosis PET C T Positron Emission Tomography/Computed Tomography PFS Progression-free Survival"
      ],
      "chips": [
        "ST1530-1",
        "p12/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p012.jpg",
      "cap": "Protocol page 12 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 13 of 90 · Abbreviations P–U (P-gp, SUV, TEAE, TBR)",
      "audio": [
        "P-glycoprotein P-glycoprotein PK Pharmacokinetics PPV Positive Predictive Value PR P-R interval PSMA Prostate-Specific Membrane Antigen QT Q-T interval QTcF Corrected QT Interval using Fridericia’s corrections ROI Region of Interest serious adverse event Serious Adverse Event SAP Statistical Analysis Plan SD Sprague Dawley SD* Standard Deviation SLC Human Solute Carrier Transporters SNMMI Society of Nuclear Medicine and Molecular Imaging SOPs Standard Operating Procedures SUSAR Suspected Unexpected Serious Adverse Reactions SUV Standard Uptake Value T1/2 Half-life Time TACs Time Activity Curves Tmax Time to Maximum tumor to background ratio Tumor-to-Background Ratio treatment-emergent adverse events Treatment Emergent Adverse Events TN True Negative TP True Positive ULN Upper Limit of Normal Vd Volume of Distribution"
      ],
      "chips": [
        "ST1530-1",
        "p13/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p013.jpg",
      "cap": "Protocol page 13 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 14 of 90 · Synopsis · title, 185 MBq dose, primary endpoints",
      "audio": [
        "Protocol Synopsis Study Title An Exploratory, Open-label Study of Safety, Pharmacokinetics, Biodistribution and Dosimetry of gallium-68 G P zero one in Participants with Solid Tumors (G P STAR) Sponsor Grand Sirtex (Chengdu) Medical Technology Co., Ltd.",
        "Investigational Product and dose regimen Investigational product: gallium-68 G P zero one, a small molecular inhibitor of Fibroblast Activation Protein (F A P) radiolabeled with Gallium-68.",
        "Dose: Participants will receive one bolus dose of 185 megabecquerels plus or minus 10% (5 millicuries plus or minus 10%) gallium-68 G P zero one ( less than or equal to 50 micrograms mass dose) prior to Positron Emission Tomography (PET) imaging. Target Indication 1. Solid tumors with suspected peritoneal metastases 2.",
        "Non-small cell lung cancer (non-small cell lung cancer) with suspected nodal metastases Phase of Study Phase I/II Protocol Number S T 1530-1 Number of Participants An anticipated number of 20 participants will be enrolled in this study, with 10 participants in each cohort.",
        "The number of participants may be adjusted or increased to ensure adequate accumulated data.",
        "Study Objectives and Endpoint Objectives Endpoints Primary To evaluate the safety of gallium-68 G P zero one Frequency, duration and severity of treatment emergent adverse events (treatment-emergent adverse events), and changes in clinical laboratory and 12-lead electrocardiograms (ECGs) parameters compared to baseline.",
        "To evaluate the preliminary diagnostic performance of gallium-68 G P zero one To assess the diagnostic efficacy of gallium-68 G P zero one by evaluating sensitivity, specificity, accuracy, positive predictive value (PPV) and negative predictive value (NPV).",
        "To compare with fluorine-18 fluorodeoxyglucose (FDG) by S U V max, S U V mean and tumor to background ratios.",
        "Secondary To evaluate the imaging parameters of gallium-68 G P zero one Imaging parameters (e.g., imaging time window and acquisition parameters) will be determined. by the following points: The imaging quality using Likert scale.",
        "Tumor-to-Background Ratios (tumor to background ratios) To evaluate the dosimetry of gallium-68 G P zero one Absorbed dose of the tumor lesions and major organs and total body effective dose will be summarized.",
        "To evaluate the biodistribution of gallium-68 G P zero one PET C T images, the Standard Uptake Value (S U V max, S U V mean), and percent injected dose per gram (the percentage of radioactivity per gram of tissue in the total injection dose) of the major organs and tumor lesions will be summarized.",
        "To evaluate the pharmacokinetic characteristics of gallium-68 G P zero one AUC, T1/2, CL, Tmax, Cmax, Vd, etc.",
        "To evaluate gallium-68 G P zero one accumulation and F A P expression Correlation of S U V max and S U V mean generated on gallium-68 G P zero one PET C T images with F A P expression by immunohistochemistry (immunohistochemistry) in obtained"
      ],
      "chips": [
        "185 MBq ±10%",
        "≤50 µg",
        "n≈20",
        "FAP PET"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p014.jpg",
      "cap": "Protocol page 14 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Dose: one bolus 185 MBq ± 10% (5 mCi ± 10%), mass dose ≤ 50 micrograms.",
        "Two target indications: solid tumors with suspected peritoneal mets, and NSCLC with suspected nodal mets."
      ]
    },
    {
      "title": "Page 15 of 90 · Synopsis · two-cohort design and inclusion",
      "audio": [
        "tumor tissue. Study Design This is a multicenter, open label study aimed at evaluating the safety, dosimetry, biodistribution, pharmacokinetics and preliminary ability to detect primary/metastatic disease of gallium-68 G P zero one in participants with solid tumors. The study will contain 2 parallel cohorts.",
        "Cohort 1 will enroll about 10 participants with suspected peritoneal metastases of solid tumors, who are planned to undergo surgical resection or laparoscopic exploration.",
        "Cohort 2 will enroll about 10 participants with suspected and/or confirmed non-small cell lung cancer, who need lymph node assessment followed by the lymph node dissection with surgery or biopsy (with endoscopy, bronchoscopy or mediastinoscopy).",
        "For all participants, a fluorine-18 F D G PET C T scan within 60 days prior to administration of gallium-68 G P zero one will be conducted. After administration of gallium-68 G P zero one, participants would undergo prescheduled surgery or biopsy.",
        "Pathologic and immunohistochemistry tests will be performed to confirm the diagnosis of PET C T images and expression of F A P within acquired tissue samples. For individual participant, the study consists of a screening period, a test period and a post-test pathology period.",
        "Imaging parameters, dosimetry, biodistribution and pharmacokinetics will be analyzed in first enrolled 6 participants. For the remaining participants, PK sampling is not mandated and only 1 PET C T scan is required after dosing.",
        "Inclusion Criteria Participants must meet all the following criteria to be eligible to participate in the study. 1. Agree to participate by providing a signed informed consent form and can comply with study-related procedures. 2. Male or female aged greater than or equal to 18 years old. 3. E C O G 0-2. 4.",
        "Participant must have solid tumors who are scheduled to undergo surgical resection, or biopsy for pathology confirmation.",
        "1) Cohort 1: Participants with confirmed or highly suspected peritoneal metastases from solid tumors, where solid tumor types include but are not limited to gastric, colorectal, ovarian or fallopian tube primary malignancies. Primary malignancies will have been confirmed by pathology.",
        "2) Cohort 2: Participants with non-small cell lung cancer confirmed or highly suspected to have lymph node metastases based on prior history, imaging, and/or pathology. 5.",
        "Participants have available Computed Tomography/Magnetic Resonance Imaging (CT/MRI) images of their primary and suspected lymph node positive, and metastatic regions. 6. Participants must be capable of undergoing and completing an fluorine-18 F D G PET C T scan. 7.",
        "Adequate renal function as determined by a creatinine clearance greater than or equal to 50 mL/min (calculated using the Cockcroft-Gault formula)."
      ],
      "chips": [
        "Cohort 1 peritoneum",
        "Cohort 2 NSCLC",
        "First 6 = PK",
        "FDG ≤60 d"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p015.jpg",
      "cap": "Protocol page 15 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Two parallel cohorts of about 10 each. First 6 participants get full PK, multi-timepoint PET, biodistribution, and dosimetry.",
        "Everyone else: one post-dose PET/CT. Pathology and FAP IHC are the standard of truth."
      ]
    },
    {
      "title": "Page 16 of 90 · Synopsis · remaining inclusion, labs, exclusion start",
      "audio": [
        "8. Adequate liver function as determined by total bilirubin < 1.5 times ULN, alanine aminotransferase (ALT) < 3 times ULN, aspartate aminotransferase (AST) < 3 times ULN prior to administration of gallium-68 G P zero one. 9. Females of childbearing potential must have a negative pregnancy test. 10.",
        "Male and female participants of childbearing potential must use at least 2 highly effective forms of contraception, one of which must be a barrier method, or agree to remain abstinent for duration of study participation and for 3 months following Ga agent.",
        "Exclusion Criteria Participants who meet any of the following criteria are not eligible to participate in the study. 1. Any PET scan done within 10 physical half-lives of the PET agent prior to administration of gallium-68 G P zero one. 2.",
        "Exposure to any investigational agent within 4 weeks prior to administration of gallium-68 G P zero one. 3. Any surgery, systemic anti-cancer therapy or radiotherapy within 4 weeks prior to fluorine-18 F D G PET C T scan. 4.",
        "Planned antineoplastic therapies from time of fluorine-18 F D G PET C T scan to surgical resection or biopsy. 5. Any strong P-glycoprotein or B C R P transporters taken within 1 week or 5 half-lives (whichever is longer) prior to administration of gallium-68 G P zero one. 6.",
        "Past or current history of another malignancy, except for curatively treated nonmelanoma skin cancer, in situ carcinoma of the cervix, or other cancer curatively treated and with no evidence of disease for at least 3 years. 7.",
        "Co-morbidities (e.g., kidney failure, liver failure, serious infections that cannot be controlled or other conditions) that in the opinion of the investigator could compromise participant safety and/or protocol objectives. 8.",
        "Known history of QT/QTc interval prolongation or mean QTcF > 450 msec obtained from three electrocardiograms prior to administration of gallium-68 G P zero one. 9. A history of additional risk factors for Torsades de Pointes (e.g., heart failure, hypokalemia, family history of long QT syndrome). 10.",
        "Participant is taking or have taken fibroblast-targeting drugs (such as Nintedanib or pirfenidone) prior to signing the informed consent form or planning to receive fibroblast-targeting drugs before obtaining of the tumor tissue for pathology confirmation. 11.",
        "Participant who plans to participate in any drug or device clinical study during the study period. 12. Has a known or suspected allergic reaction to any components of the formulation used in gallium-68 G P zero one. 13.",
        "Not compatible with PET C T scanning (e.g., unwilling or unable to lie flat on the scanner for 1 hour). 14. In the opinion of the investigator, the participant is unlikely to comply with study procedures due to medical, psychological, or social condition."
      ],
      "chips": [
        "ST1530-1",
        "p16/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p016.jpg",
      "cap": "Protocol page 16 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 17 of 90 · Synopsis · remaining exclusion and statistical methods",
      "audio": [
        "15. Female participants who are pregnant or lactating. Statistical Methods Descriptive statistics will be used to summarize the study data. Further description of the statistical methods and analysis will be provided in the statistical analysis plan.",
        "Safety analysis Safety will be assessed in all participants taking gallium-68 G P zero one. All Adverse events (AEs) and Serious Adverse Events (serious adverse events) will be coded in accordance with the most recent version of Medical Dictionary for Regulatory Activities (MedDRA).",
        "Safety parameters include AEs, ECGs, changes in vital signs, physical examination data, and laboratory values.",
        "The number of participants and incidence of treatment-emergent adverse event will be reported by MedDRA system organ class and preferred term. treatment-emergent adverse event, Death, serious adverse event, and AE will be summarized and listed by participant.",
        "Diagnostic Performance The sensitivity, specificity and PPV, NPV and accuracy of gallium-68 G P zero one and fluorine-18 F D G would be calculated separately for 2 enrolled cohorts.",
        "SUVs and tumor to background ratios Comparison Between PET C T Scans S U V max, S U V mean values and tumor to background ratios determined from 2 ways of PET C T scans would be compared among all lesions identified on PET C T images and true positive lesions.",
        "Imaging Quality Scores obtained from Likert scale will be summarized using frequencies/percentages Dosimetry Analysis Organ absorbed dose and whole-body effective dose will be calculated.",
        "Biodistribution Analysis SUV (S U V max, S U V mean), tumor to background ratio and percent injected dose per gram of tumor lesions and selected organs at risk will be summarized.",
        "TACs, describing the percentage of the injected activity versus time will be derived for selected organs and tumor lesions; absorbed radiation doses in critical organs (e.g., kidneys, liver) and tumor lesions will be calculated.",
        "Pharmacokinetic Analysis The PK parameters of radioactivity included but not limited to AUC, T1/2, CL, Tmax and Cmax. Descriptive statistics, including but not limited to geometric mean and geometric Coefficient of Variation (CV), will be presented.",
        "SUVs Correlation with immunohistochemistry Results The S U V max and S U V mean on gallium-68 G P zero one PET C T images of the resected/biopsied lesions should be recorded and correlation with F A P expression will be summarized."
      ],
      "chips": [
        "ST1530-1",
        "p17/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p017.jpg",
      "cap": "Protocol page 17 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 18 of 90 · Flow chart · Table 1 schedule of activities",
      "audio": [
        "Flow Chart Table 1 Study Procedure and Schedule of Activity Screening Test Period Post-Test Examination/Evaluation Baseline Imaging Safety9 Pathology Study Day Day -28 ~ -1 Day 1 Day 5 plus or minus 2 up to Day 60 Time Point Pre-dose Dose(0 h) Within 0.5 h post dose 6 plus or minus 2 h post dose Informed Consent X Enhanced CT or MRI1 X Verify inclusion/exclusion criteria2 X Medical history X Physical examination X Vital signs X X3 X X Routine hematology and blood biochemistry4 X X X Coagulation Tests4 X Urinalysis4 X X X Pregnancy Test4, 5 X X3 12-lead ECG4 X X3 X8 Concomitant Medication10 X X10 Adverse Events9 X fluorine-18 F D G PET C T6 X PK Blood sampling7 X PK Urine Sampling7 X gallium-68 G P zero one Administration X gallium-68 G P zero one PET C T Imaging7 X Surgery/biopsy and Pathology, immunohistochemistry test X"
      ],
      "chips": [
        "ST1530-1",
        "p18/90",
        "Full protocol text"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p018.jpg",
      "cap": "Protocol page 18 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 19 of 90 · Table 1 footnotes · 60-day imaging, SOC labs, FDG",
      "audio": [
        "Footnotes: 1. Previous CT/MRI images of primary and metastatic lesions within 60 days before the administration of gallium-68 G P zero one would be permitted. If multiple imaging has been performed, the images from the most recent examination should be assessed as baseline. 2.",
        "Participants will be permitted to be retested once to meet the criteria. 3. Vitals, pregnancy test and ECG results will be confirmed within 24h before dosing. 4. Pregnancy test, ECGs and lab results will be collected up to 7 days prior to administration of gallium-68 G P zero one.",
        "If these tests have already been done during standof-care at investigational site and within the time window, the results could be accepted, and no repeated tests are needed. Use the most recent results if multiple tests have been done. 5. Only for females of childbearing potential.",
        "Serum pregnancy test is required during screening period and urine pregnancy test will be permitted pre-dose (within 24h before dosing). 6.",
        "If fluorine-18 F D G PET C T has already been performed during a stand-of-care assessment at investigational site within 60 days before the administration of gallium-68 G P zero one, images could be accepted.",
        "If multiple imaging has been performed, the images from the most recent examination should be assessed as baseline. 7. PK and dosimetry analysis is mandated for first enrolled 6 participants. Refer to Table 2 for gallium-68 G P zero one PET C T scanning, PK blood sampling and urine sampling schedule.",
        "For the remaining participants, PK sampling is not mandated and only 1 PET C T scan is required 30 ~ 60 minutes after dosing. 8. 12-lead ECG will be performed at 5 plus or minus 3 min post dose (post dose means the time point after injection started).",
        "If ECG and PK sampling time overlap, PK sampling is preferred ahead of ECG collection. 9. AE collection period is from the time of administration of IP to the last day of test period. 10. Concomitant medications will be documented from 7 days prior to IP administration to the last day of test period.",
        "All anticancer therapy shall be documented before the day of surgery/biopsy."
      ],
      "chips": [
        "ST1530-1",
        "p19/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p019.jpg",
      "cap": "Protocol page 19 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 20 of 90 · Table 2 · PET/CT, blood and urine sampling times",
      "audio": [
        "Table 2 Study Procedure and Schedule of Activity (PET C T scanning, blood & urine sampling) Test Period Examination/Evaluation Imaging Study Day Day 1 Time Point1 for Scan2 and Blood Sampling Within 24 h pre-dose 5 plus or minus 3 min post dose 15 plus or minus 5 min post dose 30 plus or minus 5 min post dose 1 h plus or minus 10 min post dose 2 h plus or minus 10 min post dose 3 h plus or minus 30 min post dose 6 h plus or minus 30 min post dose gallium-68 G P zero one PET C T Imaging X X X X X PK blood sampling3 X X X X X X X X Time Point1 for Urine Within 24 h pre-dose Within 3 h post-dose Between 3 h - 6 h post-dose PK Urine Sampling3 X X X Footnotes:",
        "1. Post dose means the time point after gallium-68 G P zero one injection started. The dosing and collection date and time will be recorded. 2. Time points for PET C T scans written here represent the start time of scans. 3. PK blood and Urine sampling will be performed only in firstly enrolled 6 participants.",
        "For the remaining participants, PK sampling is not mandated and only 1 PET C T scan is required after dosing. The preliminary window for participants who only receive 1 PET C T scan is scheduled for 30~60 minutes post dose and the final time point will be revised according to the results from the first 6 participants."
      ],
      "chips": [
        "Multi-timepoint PET",
        "Blood PK",
        "Urine",
        "First 6"
      ],
      "visual": "annihilation",
      "image": "assets/protocol/p020.jpg",
      "cap": "Protocol page 20 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 21 of 90 · Table 3 · examination and evaluation details (1)",
      "audio": [
        "Examination/Evaluation Details Table 3 Tests Required in Examination or Evaluation Examination/Evaluation Tests Required Enhanced CT/MRI Chest, abdomen and pelvis images of both primary and suspected metastatic regions are required Physical Examination Head and face, skin, lymph nodes, eyes (sclera, pupils), ears, nose, throat, mouth, respiratory system, cardiovascular system, abdomen, genitourinary system, musculoskeletal system, neurological and mental status.",
        "A complete physical examination will be performed at screening and further examination of any abnormal systems, as appropriate.",
        "Vital Signs Body temperature, blood pressure, heart rate and respiratory rate Routine Hematology Red blood cells, hemoglobin, white blood cells and differential (neutrophils, eosinophils, basophils, lymphocytes, monocytes) and platelets Serum Chemistry Sodium, potassium, chloride, calcium, creatinine, urea or urea nitrogen, albumin, total bilirubin, AST, ALT, ALP, GGT, total protein Coagulation Tests Prothrombin time, INR, aPTT Urinalysis Density, pH, protein, glucose, blood, urobilinogen, erythrocytes, leukocytes, ketones, bilirubin Pregnancy Test Serum or urine pregnancy test"
      ],
      "chips": [
        "ST1530-1",
        "p21/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p021.jpg",
      "cap": "Protocol page 21 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 22 of 90 · Table 3 · examination and evaluation details (2)",
      "audio": [
        "Examination/Evaluation Tests Required 12-lead-Electrocardiogram QT, PR. QT interval data is corrected using Fridericia’s corrections. Triplicate ECG recordings should be taken at screening period. If the ECG is normal or abnormal but is not clinically significant, it is performed once at each time point thereafter.",
        "If a clinically significant abnormal QTcF is observed at any time during the study, two additional ECGs should be performed at that timepoint. Thereafter, three ECGs should be performed at each scheduled time point until the QTcF value returns to normal or abnormal with no clinical significance.",
        "For each time point where repeated ECG measurements are required, it is recommended that the interval between each measurement be about 5min."
      ],
      "chips": [
        "ST1530-1",
        "p22/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p022.jpg",
      "cap": "Protocol page 22 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 23 of 90 · §1.1 Background · GI tumors and peritoneal disease",
      "audio": [
        "1 Introduction 1.1 Background Gastrointestinal (GI) tumors, including esophageal, gastric, colorectal, pancreatic, and liver cancers, represent a significant global health burden.",
        "Globally, colorectal cancer (colorectal cancer) and gastric cancer (GC) still constitute major health problems, with more than 1,926,000 and 968,000 new cases, resulting in approximately 903,000 and 660,000 deaths respectively in 2022, making colorectal cancer and GC the top 5 most frequently diagnosed and death-related cancer in the world[1].",
        "Peritoneum is the most common metastatic site among patients with gastric cancer, with an incidence rate of 15-43%. For colorectal cancer, the relative incidence of synchronous peritoneal metastases is 4-15%.",
        "Peritoneal carcinomatosis (PC) can lead to bowel obstruction and formation of massive amounts of malignant ascites, leaving patients with a shorter progression-free-survival (PFS) and overall survival (OS). In GC, the 5-year survival rate of peritoneal metastatic patients ranges from 1328%[2].",
        "Positive peritoneal cytology even in the absence of visible peritoneal implants is associated with poor prognosis.",
        "As a result, according to National Comprehensive Cancer Network (N C C N) guidelines, GC patients who are medically fit and are considering perioperative therapy and/or surgery, diagnostic laparoscopy is recommended[3].",
        "In colorectal cancer patients, evaluation of patients with laparoscopy is recommended since cytoreductive surgery and hyperthermic intraperitoneal chemotherapy (CRS/HIPEC) might be curative in selected patients. However, its use also has limitations with its invasive procedure and financial cost.",
        "Since the diagnostic and prognostic implications of patients are critically reliant on accurate determination of PC, other efficacious as well as less invasive diagnostic tools are encouraged.",
        "Ovarian cancer is the most common cause of death due to gynecologic malignancies with more than 70% of patients presenting with advanced stage disease at the time of diagnosis. Ovarian cancer and fallopian tube cancer are other types of cancer that constituted a high rate of peritoneal metastases[1].",
        "A recent review indicates that at initial diagnosis, 70% of patients with ovarian cancer already have peritoneal disease. Imaging patients with advanced stage ovarian cancer can be challenging due to complex peritoneal anatomy and the occasional subtlety of peritoneal implants.",
        "The evaluation for peritoneal disease can be even more difficult after neoadjuvant"
      ],
      "chips": [
        "ST1530-1",
        "p23/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p023.jpg",
      "cap": "Protocol page 23 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 24 of 90 · Background · why CT/MRI miss peritoneal implants",
      "audio": [
        "chemotherapy because tumor shrinkage can lead to scarring, retraction, fat infiltration, and altered anatomy. The accuracy of CT for peritoneal implant detection ranges between 70%-90%.",
        "Limitations of CT include small lesion size with sensitivity decreasing to 25%-50% for peritoneal disease less than 1 cm and specific lesion locations, such as the lesser sac, bowel serosa, and mesentery.",
        "Studies have shown that MRI has improved sensitivity and specificity for detecting peritoneal disease compared with CT, with a sensitivity and specificity of MRI with Diffusion Weighted Imaging (DWI) as high as 90% and 95.5%, respectively.",
        "Several studies reported that CT and MRI findings and/or the combination of imaging and clinical factors might predict the outcome of cytoreductive surgery in patients with advanced ovarian cancer, with sensitivity ranging from 52% to 79%.",
        "However, these models suffer from a relatively small population and wide interobserver variability[4]. Lung cancer is the leading cause of cancer-related deaths in the whole world. In 2022, 2,480, 675 new cases of lung cancer have been diagnosed with 1,817,469 mortality cases[1].",
        "The clinical stage of non-small cell lung cancer is highly correlated with patients’ prognosis. For patients with distant metastases, the 5-year relative survival rate is only 8%. By contrast, for patients with localized lung cancer, the 5year survival rate could reach greater than or equal to 60%.",
        "As a result, after patients are confirmed to have non-small cell lung cancer based on a pathologic diagnosis, a clinical evaluation needs to be done.",
        "Besides disease history, physical examination, CT chest and upper abdomen and regular labs evaluation, FDG PET C T scan is also recommended as an initial assessment of the hilar and mediastinal nodes to determine N stage.",
        "Identification of metastatic spread to lymph nodes in the N2 or N3 region is critical because patients with N0/1 disease are usually referred to surgery while those with N2/3 disease may require multi-modal treatment[5].",
        "FDG PET C T, however, has the major drawback of falsepositive (FP) findings in thoracic lymph node staging, which is due to FDG uptake in nonneoplastic processes such as granulomas or other inflammatory disease, especially when intrapulmonary lesions and mediastinal lymph nodes are both FDG-avid.",
        "In a study from a tuberculosis-endemic country, the positive predictive value of FDG PET C T in mediastinal lymph nodes was reported to be only 42% per patient basis and 27% per node station basis[6]. As a result, a more effective early screening and diagnostic tool is encouraged."
      ],
      "chips": [
        "ST1530-1",
        "p24/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p024.jpg",
      "cap": "Protocol page 24 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 25 of 90 · FAP biology and why gallium-68 GP-01 was built",
      "audio": [
        "Fibroblast activation protein (F A P) is a transmembrane protein highly expressed by cancerassociated fibroblasts (CAFs), which are stromal cells found in over 90% of epithelial cancers to varying degrees.",
        "Moreover, F A P can also be expressed directly in a limited number of cancer cells, such as in some ovarian, breast, pancreatic cancers as well as in sarcomas, suggesting possible theranostic applications in the future.",
        "To date, various F A P-targeting tracers have been synthesized and explored in different types of cancer. Loktev et al.[7] developed fibroblast activation protein inhibitor (F A PI)-01 and F A PI-02, with F A PI-02 demonstrating superior cellular uptake and retention.",
        "Clinical studies in three patients confirmed its tumor specificity and high contrast. Further optimization led to 15 new F A PI compounds, among which F A PI-04 emerged as the best for imaging due to its rapid tumor internalization, strong retention (over 24 hours), and favorable tumor-to-organ ratios.",
        "Kratochwil et al.[16] validated F A PI-04 in 80 patients across 28 types of cancer, achieving high contrast and clear tumor delineation, consolidating F A P as a promising target in tumor diagnosis.",
        "Here we synthesized gallium-68 G P zero one, which is a diagnostic radiopharmaceutical targeting F A P based on radionuclide-small molecule inhibitor conjugation technology. It is intended for use with PET C T in the diagnosis of malignant solid tumors.",
        "We are proposing this clinical study to investigate the safety, dosimetry, biodistribution, pharmacokinetics and preliminary diagnostic performance of gallium-68 G P zero one in patients with solid tumors.",
        "1.2 Nonclinical Study 1.2.1 Pharmacology 1.2.1.1 Enzyme Inhibition Assay Dissolve G P zero one in DMSO and perform gradient dilution. Incubate G P zero one solutions at different concentrations with F A P, and set up positive controls and negative controls.",
        "The result showed The IC50 value of G P zero one at 4 hours is 0.3013 nM, and the IC50 value at 24 hours is 0.3328 nM, which means G P zero one has a high affinity for F A P."
      ],
      "chips": [
        "FAP",
        "CAFs",
        "DOTA",
        "Ga-68"
      ],
      "visual": "fap",
      "image": "assets/protocol/p025.jpg",
      "cap": "Protocol page 25 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "FAP is a transmembrane serine protease on cancer-associated fibroblasts, not the tumor cell itself.",
        "GP-01 is a small-molecule FAP inhibitor chelated to gallium-68 via DOTA-class chemistry."
      ]
    },
    {
      "title": "Page 26 of 90 · Nonclinical · cell uptake and internalization",
      "audio": [
        "1.2.1.2 Cell Uptake and Internalization After incubation with Human Embryonic Kidney (HEK)-293-F A P cells at 37℃ for 1 h, 2 h, and 3 h the uptake rate of gallium-68 G P zero one Injection was 47.72 plus or minus 3.15%, 47.43 plus or minus 2.81%, and 44.40 plus or minus 1.39%, and internalization rate was 45.51 plus or minus 3.04%, 44.19 plus or minus 3.34%, 40.31 plus or minus 1.61%.",
        "After incubation with HEK-293-F A P cells at 37℃ for 1 h, 2 h, and 3 h, the uptake rate of FDG was 27.58 plus or minus 7.09%, 19.66 plus or minus 6.58%, and 20.52 plus or minus 6.32%, and internalization rate was 0.12 plus or minus 0.01%, 0.50 plus or minus 0.06%, 0.41 plus or minus 0.08%. gallium-68 G P zero one exhibits high uptake in F A P-positive cells.",
        "1.2.1.3 Tissue Distribution Following a single IV administration of gallium-68 G P zero one Injection (0.15-0.2 millicuries/animal) in NOD/SCID/γcnull (NOG) mice bearing HEK293-F A P tumor cells, gallium-68 G P zero one was mainly distributed in the bladder, kidney and tumor, and less distributed in other organs.",
        "The distribution in tumors exhibited a gradual increase during 10 min to 3 h, while the distribution in other organs gradually decreased.",
        "The tissue distribution of the drug demonstrated that it was initially rapidly uptake by the liver and kidney, with a subsequent significant accumulation in the bladder, indicating effective renal clearance. Tumor uptake increased steadily over time, indicating the potential for targeted diagnostic effects.",
        "Following a single IV administration of FDG (0.15-0.2 millicuries/animal) in NOG mice bearing HEK293-F A P tumor cells, FDG was mainly distributed in the bladder, heart and kidney, followed by the brain, liver, lung and tumor, and less distributed in other organs.",
        "After a single IV dose of gallium-68 G P zero one or FDG, percent injected dose per gram or %ID/mL of tissues/body fluid at different time points are shown as Figure 1 and Figure 2."
      ],
      "chips": [
        "ST1530-1",
        "p26/90",
        "Full protocol text"
      ],
      "visual": "generator",
      "image": "assets/protocol/p026.jpg",
      "cap": "Protocol page 26 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 27 of 90 · Figure 1 · %ID/g biodistribution after IV GP-01",
      "audio": [
        "Figure 1 percent injected dose per gram of tissues at different time point after a single IV administration of gallium-68 G P zero one Injection in NOG mice bearing HEK293-F A P tumor cells Figure 2 percent injected dose per gram of tissues at different time point after a single IV administration of FDG in NOG mice bearing HEK293-F A P tumor cells In NOG mice bearing HEK293-F A P tumor cells, the ratio of tumor and muscle percent injected dose per gram of gallium-68 G P zero one Injection continuously increased from 0 to 3 h, and the ratio of tumor and muscle percent injected dose per gram of 0.00 50.00 100.00 150.00 200.00 250.00 300.00 brain heart liver lung kidney joint bone muscle tumor bladder percent injected dose per gram Tissues/body fluid 1min 2min 3min 4min 5min 10min 20min 30min 45min 60min 75min 90min 105min 120min 180min 0.00 5.00 10.00 15.00 20.00 25.00 30.00 brain heart liver lung kidney joint bone muscle tumor percent injected dose per gram Tissues/body fluid 1min 2min 3min 4min 5min 10min 20min 30min 45min 60min 75min 90min 105min 120min 180min 0.00 20.00 40.00 60.00 80.00 100.00 120.00 140.00 160.00 brain heart liver lung kidney joint bone muscle tumor bladder percent injected dose per gram Tissues/body fluid 1min 2min 3min 4min 5min 10min 20min 30min 45min 60min 75min 90min 105min 120min 180min"
      ],
      "chips": [
        "ST1530-1",
        "p27/90",
        "Full protocol text"
      ],
      "visual": "decaymath",
      "image": "assets/protocol/p027.jpg",
      "cap": "Protocol page 27 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 28 of 90 · Nonclinical · tumor uptake versus FDG over time",
      "audio": [
        "FDG gradually increased and then decreased. It indicates that the tumor-specific uptake of gallium-68 G P zero one Injection is more significant than that of FDG. PET C T images are shown as Figure 3.",
        "Figure 3 PET C T Images of tissues/body fluids at different time points after a single intravenous administration of gallium-68 G P zero one Injection or FDG in 1 NOG mice bearing HEK293-F A P tumor cells 1.2.2 Pharmacokinetics and Biodistribution 1.2.2.1 Metabolite(s) Profiling and Identification Comparing the results across the tested animal species, all the metabolites detected in human liver microsomes were detected in at least four tested animal species, suggesting that no unique metabolite was found in human liver microsomes after the incubation at 37℃ for 120 min.",
        "1.2.2.2 Pharmacokinetics Study Following a single IV administration of 0.2 millicuries/kg, 0.6 millicuries/kg and 1.8 millicuries/kg of gallium-68 G P zero one Injection in Sprague Dawley (SD) rats, the mean pharmacokinetic parameters of gallium-68 G P zero one are listed in Table 4."
      ],
      "chips": [
        "ST1530-1",
        "p28/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p028.jpg",
      "cap": "Protocol page 28 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 29 of 90 · Table 4 · mean pharmacokinetic parameters",
      "audio": [
        "Table 4 Summary of mean pharmacokinetic parameters of gallium-68 G P zero one Injection after single intravenous injection of 0.2 millicuries/kg, 0.6 millicuries/kg, and 1.8 millicuries/kg in SD rats (Mean plus or minus SD*, n=6) Parameters Unit Group 1(0.2 millicuries/kg) Group 2(0.6 millicuries/kg) Group 3(1.8 millicuries/kg) AUCINF obs** h*{kBq/mL} - - - AUClast h*{kBq/mL} 26.95 plus or minus 5.70 66.32 plus or minus 5.92 152.77 plus or minus 12.63 C0 {kBq/mL} 26.21 plus or minus 5.61 66.62 plus or minus 9.91 255.51 plus or minus 102.92 Cl obs** mL/h/kg - - - Cmax kBq/mL 23.31 plus or minus 4.78 56.29 plus or minus 7.02 177.49 plus or minus 47.19 MRTlast h 1.20 plus or minus 0.19 1.43 plus or minus 0.06 1.44 plus or minus 0.07 T1/2 z h 1.41 plus or minus 0.28 1.86 plus or minus 0.30 2.12 plus or minus 0.02 Tmax h 0.03 plus or minus 0.00 0.03 plus or minus 0.00 0.03 plus or minus 0.00 Vss obs** mL/kg - - - Vz obs mL/kg 447.59 plus or minus 118.17 677.45 plus or minus 113.95 1073.41 plus or minus 137.84 1.2.2.3 Tissue Distribution Study After a single IV dose of gallium-68 G P zero one Injection (0.6 millicuries/rat) in SD rats, gallium-68 G P zero one Injection was mainly distributed in the small intestine, salivary glands and thyroid gland, followed by the uterus, large intestine, bladder, plasma, urethra and ovaries. It is less distributed in other organs.",
        "The Olinda software was employed to assess the human internal dose, and the results are as follows: for adult males, the absorbed dose of the left colon is the maximum, at 0.0207 mGy/megabecquerels, while the effective dose of the total body is 0.00965 millisieverts/megabecquerels.",
        "For adult females, the absorbed dose of the left colon is the maximum, at 0.0256 mGy/megabecquerels, while the effective dose of the total body is 0.0137 millisieverts/megabecquerels.",
        "1.2.2.4 Plasma Stability Study After a single IV dose of gallium-68 G P zero one Injection (2 millicuries/rat) in SD rats, radioactive substances in plasma mainly existed in the form of gallium-68 G P zero one Injection, and a small amount existed in the form of free gallium-68 and other metabolites."
      ],
      "chips": [
        "ST1530-1",
        "p29/90",
        "Full protocol text"
      ],
      "visual": "decaymath",
      "image": "assets/protocol/p029.jpg",
      "cap": "Protocol page 29 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 30 of 90 · CYP phenotyping and transporter liability",
      "audio": [
        "1.2.2.5 Cytochrome P450 Reaction Phenotyping Study of G P zero one Using Human Liver Microsomes and Recombinant Human Cytochrome P450 Enzymes In the specific chemical inhibition assay, the human liver microsomal working solutions were preincubated with G P zero one (1 μM) for 15, 30, 60 and 120 minutes in the presence or absence of specific inhibitors of each one of the seven human cytochrome P450 enzymes (CYP1A2, CYP2B6, CYP2C8, CYP2C9, CYP2C19, CYP2D6 and CYP3A4).",
        "The result concluded that G P zero one was not metabolized by CYP1A2, CYP2B6, CYP2C8, CYP2C9, CYP2C19, CYP2D6 and CYP3A4.",
        "1.2.2.6 In Vitro Study for Evaluating G P zero one as A Potential Substrate of ATP-Binding Cassette (ABC) Transporter P-glycoprotein(P-glycoprotein) and Breast Cancer Resistance Protein (B C R P) The result showed that at concentrations of 1.00 μM, 10.0 μM and 30.0 μM, G P zero one was a lowpermeability compound, with no concentration-dependent changes in permeability.",
        "G P zero one was a substrate of P-glycoprotein and B C R P transporter.",
        "1.2.2.7 In Vitro Study for Evaluating G P zero one as A Potential Substrate of Human Solute Carrier (SLC) Transporters The study was conducted to evaluate whether G P zero one was a substrate of organic anion transporting polypeptide 1B1(OATP1B1), OATP1B3, organic cation transporter 2 (OCT2), organic anion transporter 1(OAT1), OAT3, multidrug and toxin extrusion 1(MATE1) and MATE2-K transporters using HEK293 cells expressing the above transporters, respectively.",
        "The results showed the uptake ratios of G P zero one mediated by these transporters were all less than 2.0, indicating that at the conditions of this experiment G P zero one was not a substrate of OATP1B1, OATP1B3, OCT2, OAT1, OAT3, MATE1 or MATE2-K transporters.",
        "1.2.3 Toxicology 1.2.3.1 Extended Single-Dose Toxicity Three groups with 15 animals per sex per group in the study, for a total of 90 animals, received dose formulation of vehicle control at 0 millicuries/kg (the formulation was consistent with test article except for the gallium-68 G P zero one), gallium-68 G P zero one Injection at 2.19~2.64 millicuries/kg or gallium-68 G P zero one Injection at 4.12~4.94 millicuries/kg for once via IV injection. Dose amount was adjusted based on the radioactive"
      ],
      "chips": [
        "ST1530-1",
        "p30/90",
        "Full protocol text"
      ],
      "visual": "generator",
      "image": "assets/protocol/p030.jpg",
      "cap": "Protocol page 30 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 31 of 90 · Toxicology, NOAEL, and mass-dose margin",
      "audio": [
        "concentration corresponding to the latest dosing time. The dosage of nonradioactive ligand G P zero one was about 12.44 micrograms /kg and 24.95 micrograms /kg for the low dose group and high dose group since the concentration was 8.29 micrograms /mL, respectively.",
        "Ten animals/sex/group were sacrificed on Day 2, and the remaining animals (five animals/sex/group) were sacrificed on Day 15. In summary, under the conditions of this study, SD rats received at 2 millicuries/kg or 4 millicuries/kg for once via intravenous injection.",
        "The no observed adverse effect level (No Observed Adverse Effect Level) of gallium-68 G P zero one Injection is 4 millicuries/kg.",
        "1.2.3.2 An Extended Single Dose Toxicity Study of natGa-G P zero one via Intravenous Injection in Sprague-Dawley Rats SD rats were administered with natGa-G P zero one at the dose level of 1-10 mg/kg via intravenous injection for a single dose and observed for 2 weeks post-dose, no significant toxicity changes were found.",
        "Therefore, under the condition of this study, the no observed adverse effect level was 10 mg/kg at which the corresponding Cmax and AUC0-t on D1 were 38400 ng/mL and 20300 ng*h/mL in females and 32100 ng/mL and 17800 ng*h/mL in males, respectively.",
        "1.3 Clinical Study Five participants were enrolled and administered gallium-68 G P zero one in an ongoing Investigator-Initiated Trial (IIT) in China.",
        "The administered dose was 170.2 plus or minus 19.61megabecquerels (4.6 plus or minus 0.53 millicuries) (mean plus or minus SD*) and image acquisition was carried out at 1 h after injection.",
        "Preliminary efficacy analysis of the imaging data demonstrated that gallium-68 G P zero one provides clear and consistent tumor visualization, with excellent tumor to background ratios observed in most cases.",
        "Initial qualitative assessment indicated successful detection of both primary and metastatic lesions across evaluated participants, with representative imaging examples demonstrating the agent's diagnostic potential. In Figure 4, gallium-68 G P zero one PET C T was shown for a 61-year-old male patient with lung cancer.",
        "The gallium-68 G P zero one PET C T clearly visualized primary lung cancer lesions along with metastatic sites in liver, lymph nodes and bones. No adverse events were observed. All participants tolerated the administration procedure well.",
        "In summary, this IIT suggested good tolerance and promising imaging performance of gallium-68 G P zero one, and final report remains ongoing."
      ],
      "chips": [
        "ST1530-1",
        "p31/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p031.jpg",
      "cap": "Protocol page 31 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 32 of 90 · Figure 4 · MIP and fused transaxial GP-01 PET/CT",
      "audio": [
        "Figure 4 Maximum intensity projection (MIP) and fused transaxial slices of gallium-68 G P zero one PET C T at 1 h Note: p.i. in a 61-year-old male patient with lung cancer showing visualized primary lung cancer lesions (marked with red triangle) along with metastatic sites in liver, lymph nodes, and bones.",
        "1.4 Study Rationale The tolerability of gallium-68 G P zero one has been validated in the single dose, acute and extended toxicity study on SD rats.",
        "With an intravenous (IV) dose of up to 4 millicuries/kg, no treatment-related effects on general observation, body weights, food consumption, ophthalmology examination, hematology and coagulation, serum chemistry, urinalysis and gross necropsy were observed.",
        "Tissue distribution of gallium-68 G P zero one has also been demonstrated on tumor-bearing mice.",
        "Following a single intravenous administration of gallium-68 G P zero one (0.15-0.2 millicuries/animal) in mice bearing HEK293-F A P tumor cells (high F A P expression), gallium-68 G P zero one was mainly distributed in the bladder, kidney and tumor, and less distributed in other organs.",
        "The distribution of tumors exhibited a gradual increase during 10 min to 3 h, while the distribution in other organs gradually decreases.",
        "The tissue distribution of the drug demonstrated that it is initially rapidly uptaken by the liver and kidney, with a subsequent significant accumulation in the bladder, indicating effective renal clearance. Tumor uptake increased steadily over time, indicating the potential for targeted diagnostic effects.",
        "Regarding the favorable tissue distribution and non-toxic profile from preclinical studies, a very robust benefit/risk and safety characteristics are expected and will be studied and confirmed during further product development."
      ],
      "chips": [
        "ST1530-1",
        "p32/90",
        "Full protocol text"
      ],
      "visual": "annihilation",
      "image": "assets/protocol/p032.jpg",
      "cap": "Protocol page 32 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 33 of 90 · §1.5 Benefit–risk assessment",
      "audio": [
        "1.5 Benefit-Risk Assessment PET imaging is now a fundamental part in patient management in oncology practice. Its risk mainly comes from radiation exposure from radiopharmaceuticals and pharmacological effects of the tracer. (1) Radiation exposure PET relies on radiolabeled tracers.",
        "According to the preclinical studies, the effective dose of the total body for adult males is 0.00965 millisieverts/megabecquerels and for females is 0.0137 millisieverts/megabecquerels.",
        "The absorbed/effective dose was calculated accordingly and resulted in a total whole-body effective dose of 2.50 millisieverts and 3.55 millisieverts for 259 megabecquerels (7 millicuries), for adult males and females respectively.",
        "As a result, the radiation risk is considered low. (2) Pharmacological and allergic risk In preclinical extended single dose toxicity study, under a dose of 14 megabecquerels/kg (4 millicuries/kg) for rats (24.05 megabecquerels/kg equivalent to adults), no treatment-related effects on general observation, body weights, food consumption, ophthalmology examination, hematology and coagulation, serum chemistry, urinalysis and gross necropsy were observed.",
        "No Investigational Product (IP)-related death or moribundity was observed, either. As a result, the preliminary tolerability of IP could be concluded.",
        "Currently, fluorine-18 F D G is the most commonly used PET agent for the diagnosis, but its limitations are also well known, including high physiological uptake in certain structures, increased uptake in inflammation or infection, and low or lack of uptake by several tumors[8]. gallium-68 G P zero one can overcome these limitations by targeting tumoral stroma.",
        "Previous studies on similar products indicate that in GC patients, gallium-68-F A PI PET displayed superior sensitivity to fluorine-18 F D G PET in diagnosing primary tumors (0.95 vs. 0.72), recurrent tumors (1.00 vs. 0.48), lymph node metastases (0.72 vs. 0.47), distant metastases (0.83 vs.",
        "0.50) and peritoneal metastases (0.98 vs 0.47)[9]. For non-small cell lung cancer patients with lymph node metastases, when lesions are small (<10mm), visibility is often low for FDG PET C T due to the physiological uptake in mediastinal region and partial volume effect[6].",
        "In comparison, F A PI PET C T has low mediastinal background, and more"
      ],
      "chips": [
        "ST1530-1",
        "p33/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p033.jpg",
      "cap": "Protocol page 33 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 34 of 90 · Benefit–risk · nodes, radiation, exploratory use",
      "audio": [
        "intense tracer uptake than FDG PET C T in metastatic lymph nodes and thus may be less susceptible to partial volume effect. In conclusion, gallium-68 G P zero one provides a tracer for PET C T scan with high tumor uptake and low tumor-background ratio and less affected by inflammation or infection.",
        "Its benefit outweighs the risk and studies in greater depth are needed."
      ],
      "chips": [
        "ST1530-1",
        "p34/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p034.jpg",
      "cap": "Protocol page 34 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 35 of 90 · §2 Study objectives and endpoints",
      "audio": [
        "2 Study Objectives/Study Endpoints Objectives Endpoints Primary To evaluate the safety of gallium-68 G P zero one Frequency, duration and severity of treatment-emergent adverse events, and changes in clinical laboratory and 12-lead ECGs parameters compared to baseline.",
        "To evaluate the preliminary diagnostic performance of gallium-68 G P zero one ⚫ To assess the diagnostic efficacy of gallium-68 G P zero one by evaluating sensitivity, specificity, accuracy, PPV and NPV. ⚫ To compare with fluorine-18 F D G by S U V max, S U V mean and tumor to background ratios.",
        "Secondary To evaluate the imaging parameters of gallium-68 G P zero one Imaging parameters (e.g., imaging time window and acquisition parameters) will be determined by the following points: ⚫ The imaging quality using Likert scale ⚫ Tumor-to-Background Ratios (tumor to background ratios).",
        "To evaluate the dosimetry of gallium-68 G P zero one Absorbed dose of the major organs and tumor lesions and total body effective dose will be summarized.",
        "To evaluate the biodistribution of gallium-68 G P zero one PET C T images, the Standard Uptake Value (S U V max, S U V mean), and percent injected dose per gram (the percentage of radioactivity per gram of tissue in the total injection dose) of the major organs and tumor lesions will be summarized.",
        "To evaluate the pharmacokinetic characteristics of gallium-68 G P zero one AUC, T1/2, CL, Tmax, Cmax, Vd, etc.",
        "To evaluate gallium-68 G P zero one accumulation and F A P expression Correlation of S U V max and S U V mean generated on gallium-68 G P zero one PET C T images with F A P expression by immunohistochemistry in obtained tumor tissue."
      ],
      "chips": [
        "ST1530-1",
        "p35/90",
        "Full protocol text"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p035.jpg",
      "cap": "Protocol page 35 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 36 of 90 · §3.1 Overall design · two parallel cohorts",
      "audio": [
        "3 Study Design 3.1 Overall Design This is a multicenter, open label, exploratory study to evaluate safety, pharmacokinetics, biodistribution, dosimetry, and preliminary ability to detect primary/metastatic disease of gallium-68 G P zero one in participants with solid tumors. The study will contain 2 parallel cohorts.",
        "For all participants, a fluorine-18 F D G PET C T image within 60 days prior to administration of gallium-68 G P zero one would be conducted.",
        "After administration of gallium-68 G P zero one, participants will undergo prescheduled surgery or biopsy, pathologic and immunohistochemistry test would be performed to confirm the diagnosis of PET C T images and expression of F A P of acquired tissue samples.",
        "The surgical plan was formulated based on prior conventional morphological imaging, with PET C T serving as a supplementary reference. Participants may be found to have an extra focus of increased radioactivity accumulation that is suspicious for metastatic disease.",
        "In these participants, the surgeon may elect to undertake further diagnostic work-up including additional imaging, which may result in a change in surgical or therapeutic strategy. For individual participant, the study consists of a screening period, a test period and a post-test pathology period.",
        "Imaging parameters, dosimetry, biodistribution and pharmacokinetics will be analyzed in first enrolled 6 participants. For the remaining participants, PK sampling is not mandated and only 1 PET C T scan is required after dosing.",
        "3.2 Justification for Dose The fundamental concept behind dose selection for the diagnostic product is to select a dose of the diagnostic radiopharmaceutical that is driven by the goal of administering the lowest radiation dose while providing diagnostically adequate images, in accordance with the As Low as Reasonably Achievable (A L A R A) principle.",
        "The dose must ensure adequate target-to-background signal, optimal imaging time window, and acceptable radiation safety to each enrolled participant."
      ],
      "chips": [
        "Open-label",
        "2 cohorts",
        "Exploratory",
        "Do not change surgery"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p036.jpg",
      "cap": "Protocol page 36 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Surgical plan is based on conventional imaging. GP-01 is supplementary and must not drive the operation by itself.",
        "An unexpected GP-01 focus may trigger extra work-up at the surgeon's discretion."
      ]
    },
    {
      "title": "Page 37 of 90 · §3.2 Dose justification and ALARA",
      "audio": [
        "The mass dose of gallium-68 G P zero one is at microgram level (50 micrograms ). As a result, only the radiation dose should be considered in this study.",
        "The initial intended administered activity of gallium-68 G P zero one is “185 megabecquerels plus or minus 10% (5 millicuries plus or minus 10%) and is scientifically justified for this study for the following reasons:",
        "(1) Preclinical Safety & Tolerability (no observed adverse effect level Established) • In a single-dose toxicity study in SD rats, gallium-68 G P zero one demonstrated excellent tolerability at doses up to 148 megabecquerels/kg (4millicuries/kg) (equivalent to 24.05 megabecquerels/kg [0.65millicuries/kg] in humans), with no adverse effects observed in clinical pathology, organ function, or histopathology. • The no observed adverse effect level (148 megabecquerels/kg [4millicuries/kg] in rats) supports a wide safety margin for the proposed human dose (185 megabecquerels, approximately 2.64 megabecquerels/kg for a 70 kg adult), providing a 9.1-fold safety margin relative to the Human Equivalent Dose (HED) (24.05 megabecquerels/kg [0.65 millicuries/kg]). (2) Human Dosimetry (Extrapolated from Nonclinical Data) • Biodistribution studies in rats showed gallium-68 G P zero one primarily localized in small intestine, salivary glands, and thyroid, with minimal retention in other organs. • Olinda dosimetry modeling predicts that the total body effective dose is 0.00965millisieverts/megabecquerels in male and 0.0137millisieverts/megabecquerels in female.",
        "At 185megabecquerels (5 millicuries), the estimated effective dose is approximately 1.79millisieverts in male and approximately 2.53millisieverts in female, well below safety thresholds for diagnostic radiopharmaceuticals[15]. • The radiation burden from administered F A PI tracers is at the lower end of the spectrum compared to other common diagnostic PET radiopharmaceuticals in oncology [eg, 18FDG (activity of 450 plus or minus 32 megabecquerels was 9.0 plus or minus 1.6 millisieverts) [11], gallium-68-PSMA (0.023 plus or minus 0.004 millisieverts/megabecquerels) [12], and gallium-68-DOTA-Somatostatin receptor targeting peptides (0.021 plus or minus 0.003 millisieverts/megabecquerels)] [13] in accordance with the A L A R A principle. (3) Benchmarking Against Other F A PI Tracers"
      ],
      "chips": [
        "ST1530-1",
        "p37/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p037.jpg",
      "cap": "Protocol page 37 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 38 of 90 · Published FAPI administered-activity range",
      "audio": [
        "• Many reviews[14] on F A PI PET have already been published, there is a wide range of administered activities (56-370 megabecquerels) for gallium-68-F A PI-04. • A mean/median administered activity of 80-200 megabecquerels and/or 1.6-2.4 megabecquerels/kg was most common for all F A PI tracers. • No association was found between the administered activity and the scan indication. • Comparable F A P-targeting agents use 185 megabecquerels plus or minus 10% (5 millicuries plus or minus 10%) clinically, validating our proposed dose. (4) Recommendations from Society of Nuclear Medicine and Molecular Imaging (SNMMI) • According to SNMMI[10], most studies using gallium-68 based radiopharmaceuticals report administered activities ranging from 120-300 megabecquerels (3.24-8.11 millicuries), with average values of approximately 150 megabecquerels, corresponding to an estimated radiation exposure of around 2.0 megabecquerels/kg. • Overall, an administered activity of 100-200 megabecquerels (2.70-5.41 millicuries) or 2 megabecquerels/kg (0.05 millicuries/kg) is recommended for gallium-68 compounds. • The intended radiation dose of gallium-68 G P zero one is 185 megabecquerels plus or minus 10% (5 millicuries plus or minus 10%), which is well correlated with industry standards. (5) Clinical Experience from Ongoing IIT • Preliminary data from IIT in China (5 patients enrolled) using gallium-68 G P zero one demonstrate excellent safety profile at 170.2 plus or minus 19.61 megabecquerels (4.6 plus or minus 0.53millicuries, mean plus or minus SD*).",
        "No adverse events were observed. • The imaging data demonstrates that gallium-68 G P zero one provides clear and consistent tumor visualization, with excellent tumor to background ratios observed in the majority of cases."
      ],
      "chips": [
        "ST1530-1",
        "p38/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p038.jpg",
      "cap": "Protocol page 38 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 39 of 90 · Intended dose 185 MBq ± 10% (5 mCi ± 10%)",
      "audio": [
        "In summary, the intended dose 185 megabecquerels plus or minus 10% (5 millicuries plus or minus 10%) of gallium-68 G P zero one is well correlated with industry standards and has demonstrated good tolerance in clinical practice."
      ],
      "chips": [
        "185 MBq",
        "5 mCi",
        "ALARA",
        "Mass ≤50 µg"
      ],
      "visual": "gadosedose",
      "image": "assets/protocol/p039.jpg",
      "cap": "Protocol page 39 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Intended dose 185 MBq ± 10% matches published FAPI diagnostic activities and ALARA.",
        "Mass dose is microgram-level, so the radiation absorbed dose — not pharmacology — drives risk."
      ]
    },
    {
      "title": "Page 40 of 90 · §4.1 Inclusion criteria",
      "audio": [
        "4 Study Population 4.1 Inclusion Criteria Participants must meet all the following criteria to be eligible to participate in the study. 1. Agree to participate by providing a signed informed consent form and can comply with study-related procedures. 2. Male or female aged greater than or equal to 18 years old. 3.",
        "E C O G 0-2. 4. Participant must have solid tumors who are scheduled to undergo surgical resection, or biopsy for pathology confirmation.",
        "1) Cohort 1: Participants with confirmed or highly suspected peritoneal metastases from solid tumors, where solid tumor types include but are not limited to gastric, colorectal, ovarian or fallopian tube primary malignancies. Primary malignancies will have been confirmed by pathology.",
        "2) Cohort 2: Participants with non-small cell lung cancer confirmed or highly suspected to have lymph node metastases based on prior history, imaging, and/or pathology. 5.",
        "Participants have available Computed Tomography/Magnetic Resonance Imaging (CT/MRI) images of their primary and suspected lymph node positive, metastatic regions. 6. Participants must be capable of receiving fluorine-18 F D G PET C T scan. 7.",
        "Adequate renal function as determined by a creatinine clearance greater than or equal to 50 mL/min (calculated using the Cockcroft-Gault formula). 8.",
        "Adequate liver function as determined by total bilirubin < 1.5 times ULN, alanine aminotransferase (ALT) < 3 times ULN, aspartate aminotransferase (AST) < 3 times ULN prior to administration of gallium-68 G P zero one. 9. Females of childbearing potential must have a negative pregnancy test. 10.",
        "Male and female participants of childbearing potential must use at least 2 highly effective forms of contraception, one of which must be a barrier method, or agree to remain abstinent for duration of study participation and for 3 months following Ga agent."
      ],
      "chips": [
        "ECOG 0–2",
        "CrCl ≥50",
        "Age ≥18",
        "ICF"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p040.jpg",
      "cap": "Protocol page 40 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Inclusion: ≥18, ECOG 0–2, CrCl ≥ 50 mL/min, able to complete FDG PET/CT, scheduled resection or biopsy.",
        "Cohort 1 peritoneal primaries are not limited to the gastric/colorectal/ovarian list."
      ]
    },
    {
      "title": "Page 41 of 90 · §4.2 Exclusion criteria",
      "audio": [
        "4.2 Exclusion Criteria Participants who meet any of the following criteria are not eligible to participate in the study. 1. Any PET scan done within 10 physical half-lives of the PET agent prior to administration of gallium-68 G P zero one. 2.",
        "Exposure to any investigational agent within 4 weeks prior to administration of gallium-68 G P zero one. 3. Any surgery, systemic anti-cancer therapy or radiotherapy within 4 weeks prior to 18FFDG PET C T scan. 4. Planned antineoplastic therapies from time of fluorine-18 F D G PET C T scan to surgery or biopsy. 5.",
        "Any strong P-glycoprotein or B C R P transporters taken within 1 week or 5 half-lives (whichever is longer) prior to administration of gallium-68 G P zero one. 6.",
        "Past or current history of another malignancy, except for curatively treated nonmelanoma skin cancer, in situ carcinoma of the cervix, or other cancer curatively treated and with no evidence of disease for at least 3 years. 7.",
        "Co-morbidities (e.g., kidney failure, liver failure, serious infections that cannot be controlled or other conditions) that in the opinion of the investigator could compromise patient safety and/or protocol objectives. 8.",
        "Known history of QT/QTc interval prolongation or mean QTcF > 450 msec obtained from three electrocardiograms prior to administration of gallium-68 G P zero one. 9. A history of additional risk factors for Torsades de Pointes (e.g., heart failure, hypokalemia, family history of long QT syndrome). 10.",
        "Participant is taking or have taken fibroblast-targeting drugs (such as nintedanib or pirfenidone) prior to signing the informed consent form or planning to receive fibroblast-targeting drugs before obtaining of the tumor tissue for pathology confirmation. 11.",
        "Participant who plans to participate in any drug or device clinical study during the study period. 12. Has a known or suspected allergic reaction to any components of the formulation used in gallium-68 G P zero one."
      ],
      "chips": [
        "ST1530-1",
        "p41/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p041.jpg",
      "cap": "Protocol page 41 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 42 of 90 · Exclusion · PET compatibility, pregnancy, P-gp",
      "audio": [
        "13. Not compatible with PET C T scanning (e.g., unwilling or unable to lie flat on the scanner for 1 hour). 14. In the opinion of the investigator, the participant is unlikely to comply with study procedures due to medical, psychological, or social condition. 15. Female participants who are pregnant or lactating.",
        "4.3 Participant Complete or Discontinuation from Study 4.3.1 Criteria for Completing the Study A participant is considered to have completed the study if he/she has completed all phases of the study shown in the Schedule of Activities.",
        "4.3.2 Criteria for Discontinuation Participants may discontinue from the study at any time and for any reason without prejudice to their further medical care. The investigator may also withdraw a participant from the study for any of the following reasons:",
        "• The participant requests to discontinue the study. • Unacceptable AEs:",
        "if continued participation of the participant would be a risk to the participant's health, in the opinion of the investigator. • Major protocol deviation and it would be a risk for participant to proceed with the study in the opinion of the investigator and sponsor. • Pregnancy or breast feeding. • The participant is deceased or has been lost to follow-up. • Suspension or termination of the study. • Other reasons determined by the investigator.",
        "4.3.3 Withdrawal Procedure Although the participant is not obliged to state the reason for his/her early withdrawal from the study, the investigator should make every effort to ascertain the reason for withdrawal while fully respecting the participant's rights.",
        "The investigator will try to contact the participant and complete"
      ],
      "chips": [
        "ST1530-1",
        "p42/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p042.jpg",
      "cap": "Protocol page 42 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 43 of 90 · Early termination and CRF documentation",
      "audio": [
        "the Termination page on the case report form (CRF). Any known reason for early termination should also be noted on this form.",
        "4.3.4 Replacement Participants who are enrolled, but are then either not administered IP, or who do not undergo PET C T imaging after administration of IP, in whom PET C T images cannot be analyzed due to technical failure, or in whom surgical/biopsied material cannot be assessed for pathological confirmation, are defined as drop-outs.",
        "Drop-out participants will be replaced to achieve the target study sample size of 10 evaluable participants in each cohort.",
        "4.4 Criteria for End of Study, Early Suspension or Termination of the Study 4.4.1 Criteria for End of Study The end of the study is the time point at which data collection from participants is discontinued.",
        "This study will continue until the last participant completes all phases of the study shown in the Schedule of Activities, death, loss to follow-up, or study discontinuation by the sponsor, whichever occurs first.",
        "4.4.2 Criteria for Suspension of the Study Reasons for suspension, early termination or early closure of the study site include but are not limited to the following:",
        "• Unacceptable safety events (any IP related grade 3 or higher adverse event occurs) identified in the study. • The Sponsor may terminate the study for any scientific, medical, or ethical reason, provided that the rights, safety, and overall well-being of enrolled participants are fully considered. • Other reasons deemed by the Sponsor or Investigator to warrant discontinuation of the study. • Regulatory authorities require termination of the study for other reasons."
      ],
      "chips": [
        "ST1530-1",
        "p43/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p043.jpg",
      "cap": "Protocol page 43 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 44 of 90 · Study suspension or premature termination",
      "audio": [
        "If the study is suspended or prematurely terminated, the investigator should promptly inform the participant and give the participant appropriate medical advice and follow-up. All efforts should be made to collect study materials and to complete the electronic case report form.",
        "Once the reasons that led to the study suspension are resolved and approval is obtained from the sponsor, ethics committee, or regulatory authorities, the study may proceed.",
        "4.5 Screen Failures and Rescreen Screen failures are defined as participants who consent to participate in the clinical study but are not subsequently entered in the study.",
        "A minimal set of screen failure information is required to ensure transparent reporting of screen failure participants to meet the Consolidated Standards of Reporting Trials publishing requirements and to respond to queries from regulatory authorities.",
        "Minimal information includes demography, screen failure details, eligibility criteria, and any serious adverse event. Rescreening would be permitted in this study.",
        "Individuals with questionable inclusion/exclusion assessment results within screening period which need to be confirmed by one repeating the test per investigator's judgement."
      ],
      "chips": [
        "ST1530-1",
        "p44/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p044.jpg",
      "cap": "Protocol page 44 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 45 of 90 · §5 Study treatment · chemistry and cold kit",
      "audio": [
        "5 Study Treatment 5.1 gallium-68 G P zero one 5.1.1 Chemical Properties gallium-68 G P zero one is a radioconjugate of an inhibitor of F A P conjugated to the radioisotope gallium-68 based on radionuclide-small molecule inhibitor conjugation technology.",
        "The molecular formula is C50H61F268GaN12O14S with a molecular weight of 1192.09. 5.1.2 Pharmacological Properties gallium-68 G P zero one is supplied as a sterile, clear and colorless solution.",
        "The sterile Cold Kit is supplied for labeling with [gallium-68]GaCl3 in radiopharmacies with an injected mass dose of less than or equal to 50 micrograms .",
        "5.1.3 Packaging and Labeling To meet the need for labeling in radiopharmacies, the Kit for the Preparation of gallium-68 G P zero one Injection (hereafter referred to as G P zero one Sterile Cold Kit) comes supplied for preparation of the gallium-68 G P zero one injection.",
        "The sterile cold kit contains two vials: • Vial 1 (G P zero one sterile vial): contains 50 micrograms of the active drug substance (G P zero one) and 10 micrograms D-mannose as a combined lyophilized powder. • Vial 2 (Sterile Acetate Buffer Vial): 85 mg sodium acetate in 1mL of sterile water for injection.",
        "The precursor vial (G P zero one sterile vial) is utilized for both the labeling reaction and subsequent storage of the final product until administration.",
        "The G P zero one Sterile Cold Kit will be provided by the sponsor should include at least the following information: • Name of the Sponsor • Study No. • Name of IP and Formulation • Dose Strength"
      ],
      "chips": [
        "Cold kit",
        "50 µg GP-01",
        "Acetate buffer",
        "GaCl3"
      ],
      "visual": "generator",
      "image": "assets/protocol/p045.jpg",
      "cap": "Protocol page 45 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 46 of 90 · Packaging, labeling, batch and expiry",
      "audio": [
        "• Batch No. • Expiry Date • Storage Instructions • \"For Clinical Study Use Only\" All manufacturing, formulation, and sub-labeled will be done in accordance with applicable current Good Manufacturing Practices (cGMP), guidelines, and regulations.",
        "5.1.4 Supply, Storage, Distribution and Handling To meet the need for labeling in radiopharmacies, the G P zero one Sterile Cold Kit is supplied for preparation of gallium-68 G P zero one. The G P zero one Sterile Cold Kit will be manufactured, handled and stored in compliance with cGMP guidelines.",
        "Upon final labeling in the radiopharmacy, gallium-68 G P zero one contains radioactive material and should only be handled by personnel trained in the use of appropriately shielded and monitored radioisotopes. gallium-68 G P zero one may only be used by facilities that hold all appropriate licensures.",
        "The study site was required to provide all necessary documentation, e.g., written approval by the IEC/IRB and regulatory authorities, as appropriate, prior to recruiting participants. Please refer to the IP Handling Manual for instructions on ordering, cancelling or amending the IP order.",
        "The site should follow the IP handling manual to dispose of the product accordingly. The kits will be stored in a secure, temperature-controlled, limited access location and in compliance with the site's radiopharmaceutical regulatory requirements.",
        "The original package of the kit should be stored upright and refrigerated at 2 °C-8 °C (36 °F-46 °F). Do not freeze. It should be used before the expiration date indicated on the label. Avoid exposure to direct sunlight.",
        "After radiolabeling, gallium-68 G P zero one should be stored upright at ambient temperature (25°C [77°F]; excursions permitted to 15°C-30°C [59°F-86°F]) with appropriate shielding to protect personnel from radiation exposure. Use gallium-68 G P zero one within 4 hours of end of synthesis (EOS)."
      ],
      "chips": [
        "ST1530-1",
        "p46/90",
        "Full protocol text"
      ],
      "visual": "generator",
      "image": "assets/protocol/p046.jpg",
      "cap": "Protocol page 46 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 47 of 90 · Accountability, storage, disposal",
      "audio": [
        "Storage, disposal and destruction of gallium-68 G P zero one must be conducted in accordance with national guidelines for the management of radioactive waste. Details will be provided in the IP Handling Manual.",
        "5.1.5 Dosage and Administration At calibration time for IV administration, the IP will contain 185 megabecquerels plus or minus 10% (5 millicuries plus or minus 10%) radiation dose for study use. The actual radiation dose and mass dose used in each individual participant will be accurately recorded.",
        "No dietary constrictions prior to dosing are necessary. Each participant will receive a syringe injected bolus of gallium-68 G P zero one (no more than 2 minutes) on Day 1. The start and end administration date and time will be recorded.",
        "Residual activity in the syringe will be measured, and the measurement date and time will be recorded for final accurate injection radioactivity calculation. Detailed information will be found in IP Handling Manual.",
        "5.2 Treatment Assignment The screening period will be initiated if the participant is deemed potentially eligible. Once eligibility is confirmed, the date of the imaging period must be scheduled prior to IP administration, after which the participant number will be assigned.",
        "After assigning the participant number, the authorized representative at the study site can order the IP in accordance with the IP Handling Manual. Refer to the IP Handling Manual for further details on this procedure.",
        "5.3 Treatment Compliance gallium-68 G P zero one will be administered as a single dose at the study site by appropriately delegated study personnel. For this reason, the risk of overdose or underdose is minimal."
      ],
      "chips": [
        "ST1530-1",
        "p47/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p047.jpg",
      "cap": "Protocol page 47 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 48 of 90 · §5.4 Radiation precautions",
      "audio": [
        "5.4 Radiation Precautions The medical management of radioactive diagnostic tracers is guided by national radiation safety regulations. Excretion limits acceptable for discharge will be defined by the investigators in compliance with the local regulations.",
        "The participant is encouraged to increase fluid intake and urinate frequently on the day of dosing.",
        "The following safety precautions apply to participants: • Participants should be advised to follow strict hygiene practices and avoid contamination of others using the same toilet facility. • A double toilet flush is recommended. • Participants should wash their hands thoroughly every time after using the toilet.",
        "The following precautions apply to health care workers and laboratory personnel: It is recommended to limit the amount of time that health care providers have close contact with participants who have been injected with gallium-68-labeled radiopharmaceuticals. Use appropriate precautions on the day of dosing.",
        "Due to the potential presence of radioactivity in some blood and urine samples, laboratory personnel must follow the laboratory manual and/or standard operating procedures (SOPs) and/or guidelines and regulations for the handling of any radioactive material. Please also consult the IP Handling Manual.",
        "5.5 Prior and Concomitant Medication/Therapy Any prior antineoplastic therapy or antineoplastic therapy initiated before the surgery or biopsy for pathologic confirmation must be recorded in the participant’s electronic case report form.",
        "Other prior and concomitant medication/therapy (including herbal remedies) must be recorded from 7 days prior to IP administration to the last day of test period. If an AE occurs, the treatment of the AE (concomitant medication or therapy) must also be recorded in the participant's electronic case report form."
      ],
      "chips": [
        "ST1530-1",
        "p48/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p048.jpg",
      "cap": "Protocol page 48 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 49 of 90 · §5.5.1 Prohibited strong P-gp / BCRP inhibitors",
      "audio": [
        "5.5.1 Prohibited Medication/Therapy Strong P-glycoprotein or B C R P transporters are not allowed within 1 week or 5 half-lives (whichever is longer) prior to the administration of gallium-68 G P zero one and throughout the test period.",
        "No antineoplastic therapy is allowed during the study period between fluorine-18 F D G PET C T scan and day of surgery/biopsy. Once participants undergo planned surgery/biopsy and have tissue samples obtained, antineoplastic therapy can be commenced according to standard of care.",
        "Participants may be allowed to stay in the study if antineoplastic therapy is used during study period after discussion with the medical monitor.",
        "5.5.2 Permitted Concomitant Medication/Therapy Palliative and supportive care for AE or disease-related symptoms including antibiotics, antivirals, analgesics or nutritional infusions are allowed during the study and must be recorded in the electronic case report form.",
        "The care should be provided based on the investigator’s judgment and corresponding guidelines. Participants with chronic medical conditions (e.g., hypertension) that require ongoing medication will be required to continue medication unless these medications are part of the above list of prohibited medications."
      ],
      "chips": [
        "ST1530-1",
        "p49/90",
        "Full protocol text"
      ],
      "visual": "generator",
      "image": "assets/protocol/p049.jpg",
      "cap": "Protocol page 49 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Strong P-gp or BCRP inhibitors are banned from 1 week or 5 half-lives (whichever is longer) through the test period.",
        "GP-01 is a substrate of those transporters in preclinical work."
      ]
    },
    {
      "title": "Page 50 of 90 · §6 Study procedures and visit flow",
      "audio": [
        "6 Study Procedures Participants are required to sign a written informed consent form before any study-related procedures are performed. A detailed schedule of activities and specific examination/evaluation requirements are included in Table 1, Table 2 and Table 3. Some special circumstances are described as follows.",
        "6.1 Unscheduled Visit Additional visits may be scheduled at any time if deemed necessary by the investigator. If an AE occurs, additional examinations/evaluations could be taken in the opinion of the investigator.",
        "6.2 Sample Retention/Destruction Blood and urine samples need to be processed immediately for safety reasons. No samples will be retained. Blood samples for analysis will be discarded/destroyed after completion of analysis."
      ],
      "chips": [
        "ST1530-1",
        "p50/90",
        "Full protocol text"
      ],
      "visual": "gpstar",
      "image": "assets/protocol/p050.jpg",
      "cap": "Protocol page 50 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 51 of 90 · §7.1 Safety analysis",
      "audio": [
        "7 Study Analysis 7.1 Safety Analysis Frequency, duration and severity of adverse events will be assessed and documented. Refer to Chapter 8 Safety for more information. Changes in vital signs, physical examinations, clinical laboratory and 12-lead ECGs parameters will be compared to baseline.",
        "Refer to Table 3 Examination/Evaluation Details for tests required. If abnormal test results occur, they will be documented as AEs if deemed clinically significant by the investigator. If necessary, repeat testing may be performed to confirm the accuracy of the laboratory findings.",
        "7.2 Imaging Parameters Imaging parameters, such as imaging time window and acquisition parameters will be determined by using image quality scores from blinded central reviewers with data acquired from first 6 participants.",
        "The PET Imaging Quality assessment for imaging timepoint and radiology review criteria will be described in the Imaging Review Charter. The PET acquisition parameters will be fully specified in the site-facing Technical Operations Manual (TOM) and Site Setup Report.",
        "7.3 Dosimetry Analysis 7.3.1 Radiation Dosimetry Organ absorbed dose and whole-body effective dose will be calculated. Organ absorbed dose will be expressed as the normalized absorbed dose, calculated as the ratio of absorbed dose to administered radioactivity.",
        "Whole body effective doses will also be calculated as normalized whole body effective dose. 7.4 Biodistribution Analysis Whole body PET C T scans will be performed immediately after administration of gallium-68 G P zero one.",
        "SUV (S U V max, S U V mean), tumor to background ratio and percent injected dose per gram of tumor lesions and selected organs at risk will be summarized.",
        "Time Activity Curves (TACs), describing the percentage of the injected activity versus time will be derived for selected organs and tumor lesions; absorbed radiation doses in critical organs (e.g., kidneys, liver) and tumor lesions will be calculated."
      ],
      "chips": [
        "ST1530-1",
        "p51/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p051.jpg",
      "cap": "Protocol page 51 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 52 of 90 · Image analysis by the central imaging vendor",
      "audio": [
        "Image data analysis will be performed by a central imaging vendor. Details of the assessments will be described in the Imaging Review Charter provided by the central laboratory. 7.5 Pharmacokinetic Analysis Blood and urine samples will be drawn for pharmacokinetic analysis.",
        "The PK parameters of radioactivity include but not limited to AUC, T1/2, CL, Tmax and Cmax. Refer to the TOM for further details and instructions.",
        "7.6 Diagnostic Performance 7.6.1 Definitions PET C T-positive lesions will be defined as either the gallium-68 G P zero one or fluorine-18 F D G uptake is focal and greater than background (after exclusion of definite physiological uptake and benign pathologies).",
        "For PET C T-positive lesions, the anatomical regions and quantity should be recorded respectively.",
        "To obtain the paired S U V max of the lesion on both fluorine-18 F D G and gallium-68 G P zero one, if a lesion was positive on gallium-68 G P zero one PET C T but negative on fluorine-18 F D G PET C T, the regions of interest (ROIs) of the S U V max on fluorine-18 F D G PET C T was set according to the same region on gallium-68 G P zero one PET C T and vice versa.",
        "For PET C T-positive lesions, surgical resection/biopsy material, along with appropriate documentation of its in situ origin, allowing identification with lesion localisation on PET images will be sent to the local pathology department for routine histological work-up.",
        "For participants in Cohort 1, if the diagnosis is made by ascites or peritoneal lavage cytology in the absence of pathology result from surgery or biopsy tissue, the diagnostic performance of PET C T agents could only be assessed on patient-level.",
        "Otherwise, the diagnostic performance should be assessed both on regional and patient-level. The pathological results will be used for the confirmation of diagnosis and classification of the PET C T-positive lesions as TP, FP, FN or TN with the following table.",
        "The sensitivity, specificity and PPV, NPV and accuracy of gallium-68 G P zero one and fluorine-18 F D G would be calculated separately for 2 enrolled cohorts."
      ],
      "chips": [
        "ST1530-1",
        "p52/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p052.jpg",
      "cap": "Protocol page 52 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 53 of 90 · Diagnostic 2×2 · pathology as standard of truth",
      "audio": [
        "Reference Standard Pathology (Standard of Truth) Total Positive Negative Outcome of PET C T Scan Positive TP FP # of cases with positive PET C T: TP+FP Negative FN TN # of cases with negative PET C T: FN+TN Total # of cases with peritoneal/lymph nodes metastases:",
        "TP+FN # of cases without peritoneal/lymph nodes metastases: FP+TN N If a pathology from surgery shows negative for a PET C T-positive region, the participant would be advised to undergo another CT or MRI scan, if clinically feasible, to determine whether the PET C T-positive lesion was resected.",
        "If the PET C T-positive lesion was resected, the region should be classified as FP.",
        "If the rescanning could not be accomplished, the lesion should be classified as non-assessable. • Sensitivity is defined as the proportion of study participants with a TP PET C T scan, relative to those with positive pathologic diagnosis:",
        "Sensitivity (%) = TP / (TP+FN) • Specificity is defined as the proportion of study participants with a TN PET C T imaging result, relative to those with negative pathological diagnosis: Specificity (%) = TN / (TN+FP) • Accuracy is defined as the proportion of all test results that are correct:",
        "Accuracy (%) = (TN+TP) / (TP + TN + FP + FN) • Positive predictive value is defined as the proportion of study participants with a TP PET C T imaging result, relative to those with positive PET C T findings:",
        "PPV (%) = TP / (TP+FP) • Negative predictive value is defined as the proportion of study participants with a TN PET C T imaging result, relative to those with negative PET C T findings:",
        "NPV (%) = TN / (TN+FN) If metastatic lesions other than lymph nodes or peritoneum are identified through gallium-68 G P zero one PET C T, the anatomical regions and quantity could also be recorded and summarized."
      ],
      "chips": [
        "Sensitivity",
        "Specificity",
        "PPV/NPV",
        "Pathology truth"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/p053.jpg",
      "cap": "Protocol page 53 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Pathology of resected/biopsied tissue is the standard of truth for sensitivity, specificity, PPV, NPV, accuracy.",
        "Compare GP-01 versus FDG on SUVmax, SUVmean, and tumor-to-background ratio."
      ]
    },
    {
      "title": "Page 54 of 90 · Region-level · Cohort 1 peritoneal cancer index",
      "audio": [
        "7.6.2 Evaluation on Region Level 7.6.2.1 Region-Identification for Cohort 1 Peritoneal Cancer Index (peritoneal cancer index) would be followed in identifying regions for peritoneal metastasis.",
        "In summary, 13 regions and peritoneal cancer index scores will be evaluated and documented respectively based on PET C T findings and laparoscopic exploration or cytoreductive surgery (CRS).",
        "Region Number Abdominopelvic regions 0 Central, midline abdominal incision - entire greater omentum - transverse colon 1 Right upper, superior surface of the right lobe of the liver - undersurface of the right hemidiaphragm - right retro hepatic space 2 Epigastrium, epigastric fat pad - left lobe of the liver - lesser omentum - falciform ligament 3 Left upper, Undersurface of the left hemidiaphragm - spleen - tail of pancreas - anterior and posterior surfaces of the stomach 4 Left flank, descending colon - left abdominal gutter 5 Left lower, pelvic sidewall lateral to the sigmoid colon - sigmoid colon 6 Pelvis, female internal genitalia with ovaries, tubes and uterus - bladder, Douglas pouch - rectosigmoid colon 7 Right lower, right pelvic sidewall - cecum - appendix 8 Right flank, right abdominal gutter - ascending colon 9 Upper jejunum 10 Lower jejunum 11 Upper ileum 12 Lower ileum peritoneal cancer index scores based on traditional image and gallium-68 G P zero one would be calculated respectively.",
        "Refer to the Appendix 4 for peritoneal cancer index score calculation."
      ],
      "chips": [
        "PCI",
        "13 regions",
        "Cohort 1"
      ],
      "visual": "suv",
      "image": "assets/protocol/p054.jpg",
      "cap": "Protocol page 54 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 55 of 90 · Region-level · Cohort 2 IASLC 9th-edition N stage",
      "audio": [
        "7.6.2.2 Region-Identification for Cohort 2 International Association for the Study of Lung Cancer (I A S L C) lymph node map (2024, version 9) would be followed for lymph node regional analysis. In summary, stations 10-14 will be combined and recorded as 1 region for assessment.",
        "Stations 1-9 will be recorded and assessed as individual regions.",
        "Region Number Nodal Station Location the metastatic lymph nodes 1 1R/1L Supraclavicular, low cervical, sternal notch nodes 2 2R/2L Upper paratracheal 3 3a/3p Prevascular, retrotracheal 4 4R/4L Lower paratracheal 5 5 Subaortic station 6 6 Paraaortic station 7 7 Subcarinal station 8 8 Para-esophageal station 9 9 Inferior pulmonary ligament 10 10-14 Hilar stations (10), interlobar stations (11), lobar stations (12), segmental stations (13), subsegmental stations (14) N staging based on traditional image and gallium-68 G P zero one would be recorded respectively.",
        "Refer to the Appendix 5 for NN staging for lung cancer. 7.6.2.3 Diagnostic Performance Evaluation on Region Level Each region will be classified as true positive, false positive, true negative, or false negative based on the following criteria.",
        "Lesions without pathology confirmation will be deemed as nonassessable and excluded from the region-level analysis."
      ],
      "chips": [
        "IASLC 9th",
        "N0–N3",
        "Cohort 2"
      ],
      "visual": "vq",
      "image": "assets/protocol/p055.jpg",
      "cap": "Protocol page 55 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 56 of 90 · TP / FP / FN / TN region classification rules",
      "audio": [
        "(1) TP region: a region is classified as true positive if pathological examination confirms at least 1 true positive lesion within it (2) FP region: a region is classified as false positive if it contains at least 1 false positive lesion but no true positive lesion (3) TN region:",
        "a region is classified as true negative if it contains no true positive or false positive lesions, and pathological examinations confirm the region is negative for disease (4) FN region:",
        "a region is classified as false negative if it contains at least 1 false negative lesion, but no true positive or false positive lesions 7.6.3 Evaluation on Patient Level (1) TP participant: a participant is classified as true positive if any of their regions is designated as a true positive region (2) FP participant:",
        "a participant is classified as false positive if they have no true positive region but have at least one false positive region (3) TN participant: a participant is classified as true negative if they have no true positive or false positive regions, and all regions are confirmed as true negative (4) FN participant:",
        "a participant is classified as false negative if they have no true positive or false positive regions but have at least one false negative region 7.7 SUVs and tumor to background ratios Comparison Between PET C T Scans S U V max, S U V mean values and tumor to background ratios determined from 2 ways of PET C T scans would be compared among all lesions identified on PET C T images and true positive lesions.",
        "7.8 SUVs Correlation with immunohistochemistry Results F A P-expression via immunohistochemistry will be assessed and summarized in the resected/biopsied tissues. The S U V max and S U V mean on gallium-68 G P zero one PET C T images of the"
      ],
      "chips": [
        "ST1530-1",
        "p56/90",
        "Full protocol text"
      ],
      "visual": "truth2x2",
      "image": "assets/protocol/p056.jpg",
      "cap": "Protocol page 56 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "PET-positive + pathology-positive = TP. PET-positive + pathology-negative (and the region was resected) = FP.",
        "PET-negative + pathology-positive = FN. PET-negative + pathology-negative = TN."
      ]
    },
    {
      "title": "Page 57 of 90 · FAP immunohistochemistry correlation",
      "audio": [
        "resected/biopsied lesions should be recorded and correlation with F A P expression will be summarized."
      ],
      "chips": [
        "ST1530-1",
        "p57/90",
        "Full protocol text"
      ],
      "visual": "fap",
      "image": "assets/protocol/p057.jpg",
      "cap": "Protocol page 57 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 58 of 90 · §8.1 Adverse events — ICH E2A definition",
      "audio": [
        "8 Safety 8.1 Adverse Events According to International Conference on Harmonization (ICH) E2A guideline \"Management of Clinical Safety Data: Definitions and Standards for Expedited Reporting”, AEs are any adverse medical occurrence in a participant after administration, but it does not necessarily have a causal relationship with the treatment.",
        "AE can be any unfavorable and unintended sign (including abnormal laboratory findings), symptom, or disease related to the use of a medicinal (investigational) product, whether or not related to the medicinal (investigational) product.",
        "Abnormal laboratory values or test results will only be considered AEs if deemed clinically significant (e.g., deviations from normal reference ranges with potential diagnostic relevance, induction of clinical signs or symptoms, requirement for treatment, or need for study drug adjustment).",
        "In this study, the collection of safety information will commence upon the administration of IP.",
        "After receiving study treatment: • Conditions that emerge or worsen after receiving the investigational product, considered clinically significant in the medical and scientific judgment of the investigator, should be recorded as AEs.",
        "8.2 Serious Adverse Events A serious adverse event as defined by ICH is any untoward medical occurrence that at any dose meets any of the following conditions: • Results in death; • Is life-threatening (The participant was at risk of death at the time of the event.",
        "It does not refer to an event that hypothetically might have caused death if it were more severe);"
      ],
      "chips": [
        "ST1530-1",
        "p58/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p058.jpg",
      "cap": "Protocol page 58 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 59 of 90 · Serious adverse event criteria",
      "audio": [
        "• Requires inpatient hospitalization or prolongation of existing hospitalization; • Results in persistent or significant disability/incapacity; • Is a congenital anomaly/birth defect; • Important medical events.",
        "Medical or scientific judgment should be exercised by the investigator in deciding whether serious adverse event reporting is appropriate in other situations, such as important medical events that may not be immediately life-threatening or result in death or hospitalization but may jeopardize the participant or may require medical or surgical intervention to prevent one of the other outcomes listed in the above definition.",
        "These events should usually be considered as serious. Hospitalization Adverse events reported from studies associated with hospitalization or prolongations of hospitalization are considered serious. Any initial admission (even if less than 24 hours) to a healthcare facility meets these criteria.",
        "Hospitalization also includes transfer within the hospital to an acute/ intensive care unit (e.g., from the psychiatric ward to a medical unit).",
        "Hospitalization does not include the following: • Rehabilitation facilities • Hospice facilities; • Respite care (e.g., Caregiver relief); • Skilled nursing facilities; • Nursing homes; • Routine emergency room admissions; • Same day surgeries (as out-patient/ same day/ ambulatory procedures).",
        "Hospitalization or prolongation of hospitalization with following reasons will not be reported as a serious adverse event: • Admission for treatment of a pre-existing condition not associated with the development of a new adverse event or with a worsening of the pre-existing condition (e.g., for work-up of persistent pre-treatment lab abnormality); • Social admission (e.g., participant has no place to sleep);"
      ],
      "chips": [
        "ST1530-1",
        "p59/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p059.jpg",
      "cap": "Protocol page 59 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 60 of 90 · Hospitalization exceptions that are not SAEs",
      "audio": [
        "• Administrative admission (e.g., for yearly physical exam); • Protocol-specified admission during a study (e.g., for a procedure required by the study protocol); • Optional admission not associated with a precipitating clinical adverse event (e.g., for elective cosmetic surgery);",
        "• Pre-planned treatments or surgical procedures should be noted in the baseline documentation for the entire protocol and/ or for the individual participant; • Admission exclusively for the administration of blood products.",
        "8.3 Assessment of Adverse Events 8.3.1 Seriousness The seriousness of each AE must be determined according to the criteria in Section 8.2. 8.3.2 Severity The severity of AEs was graded according to NCI-C T C A E version 6.0. For AEs not defined in the NCI-C T C A E, refer to below table to determine the severity.",
        "Table 5 Severity Grading of Adverse Events Grade C T C A E status 1 Mild: asymptomatic or mild symptoms; clinical or diagnostic observations only; intervention not indicated. 2 Moderate: minimal, local or non-invasive intervention indicated; limiting age-appropriate instrumental activities of daily living*.",
        "3 Severe or medically significant but not immediately life-threatening; hospitalization or prolongation of hospitalization indicated; disabling: limiting self-care activities of daily living**. 4 Life-threatening consequences: urgent intervention indicated.",
        "5 Death related to AE *: Instrumental activities of daily living refer to preparing meals, shopping for groceries or clothes, using the telephone, managing money, etc."
      ],
      "chips": [
        "ST1530-1",
        "p60/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p060.jpg",
      "cap": "Protocol page 60 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 61 of 90 · CTCAE v6.0 severity grading",
      "audio": [
        "**: Self-care activities of daily living refer to bathing, dressing and undressing, feeding self, using the toilet, taking medications, etc., and not bedridden. Attention should be paid to distinguish the severity and intensity of AEs.",
        "Severe is used to describe intensity and is not necessarily an serious adverse event. For example, headache may be severe in intensity but should not be listed as an serious adverse event unless it meets serious adverse event criteria.",
        "8.3.3 Causal relationship All AEs must have their relationship to study intervention assessed by the investigator based on temporal relationship and his/her clinical judgment. The degree of certainty about causality will be graded using the categories below.",
        "In a clinical study, the study product must always be suspected. Related AEs will be defined as those with a possible, probable, or definite classification.",
        "The specific evaluation method is shown in below: Table 6 Causal relationship between adverse events and IP Definitely related There is clear evidence to suggest a causal relationship, and other possible contributing factors can be ruled out.",
        "The clinical event, including an abnormal laboratory test result, occurs in a plausible time relationship to study intervention administration and cannot be explained by concurrent disease or other drugs or chemicals. The response to withdrawal of the study intervention (dechallenge) should be clinically plausible.",
        "The event must be pharmacologically or phenomenologically definitive, with use of a satisfactory rechallenge procedure if necessary. Probably related There is evidence to suggest a causal relationship, and the influence of other factors is unlikely.",
        "The clinical event, including an abnormal laboratory test result, occurs within a reasonable time after administration of the study intervention, is unlikely to be attributed to concurrent disease or other drugs or chemicals, and follows a clinically reasonable response on withdrawal (dechallenge).",
        "Rechallenge information is not required to fulfill this definition. Possibly related There is some evidence to suggest a causal relationship (e.g., the event occurred within a reasonable time after administration of the study medication).",
        "However, other factors may have contributed to the event (e.g., the participant’s clinical condition, other concomitant events). Although an AE may"
      ],
      "chips": [
        "CTCAE v6.0",
        "TEAE",
        "SAE"
      ],
      "visual": "alara",
      "image": "assets/protocol/p061.jpg",
      "cap": "Protocol page 61 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Use CTCAE version 6.0 — the protocol switched from v5.0 because the study starts after 1 January 2026."
      ]
    },
    {
      "title": "Page 62 of 90 · Causality assessment",
      "audio": [
        "rate only as “possibly related” soon after discovery, it can be flagged as requiring more information and later be upgraded to “probably related” or “definitely related”, as appropriate.",
        "Unlikely related A clinical event, including an abnormal laboratory test result, whose temporal relationship to study intervention administration makes a causal relationship improbable (e.g., the event did not occur within a reasonable time after administration of the IP) and in which other drugs or chemicals or underlying disease provides plausible explanations (e.g., the participant’s clinical condition, other concomitant treatments).",
        "Not related The AE is completely independent of IP administration, and/or evidence exists that the event is definitely related to another etiology. There must be an alternative, definitive etiology documented by the Investigator.",
        "When an serious adverse event is suspected, the investigator may initially have limited information available. However, before submitting the serious adverse event report, the investigator must assess the relationship between the serious adverse event and the study treatment.",
        "The investigator may subsequently modify or correct the causality assessment in follow-up reports as needed.",
        "Similarly, causality must also be determined when reporting the serious adverse event to regulatory authorities 8.3.4 Measures Taken Regarding IP This is a single administration medication and is expected to be administered in minutes. As a result, measures taken regarding IP may not be applicable.",
        "8.3.5 Measures Taken Regarding AEs The measures taken for AEs should be recorded in the electronic case report form as follows: • No measures were taken (none) • Pharmacological Treatment • Other Therapeutic Measures 8.3.6 Outcomes The outcome of the AE should be recorded as follows: • Fatal"
      ],
      "chips": [
        "ST1530-1",
        "p62/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p062.jpg",
      "cap": "Protocol page 62 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 63 of 90 · AE outcome and action taken",
      "audio": [
        "• Not recovered/not resolved/ongoing • Recovered • Recovered with sequelae • Recovering/resolving • Unknown 8.4 Collection of Adverse Events Adverse events occurring from the time of administration of IP to the last day of test period need to be collected and recorded.",
        "All AEs occurring within the AE collection period, including investigator-observed AEs, AEs elicited through questioning, and spontaneously reported AEs by participants, shall be completely recorded in the participant's electronic case report form.",
        "After the AE collection period, active collection of newly occurring AEs (including deaths) is not required; investigators shall only report serious adverse events considered related to the investigational product/treatment.",
        "The investigator should follow up all AEs until one of the following occurs: - The participant has recovered or improved to baseline status. - The participant has reached a steady state, or no further improvement is expected. - The participant lost to follow-up. - The participant has deceased and no follow-up is possible.",
        "All AEs should be monitored and documented in participant’s original medical record by the investigator. 8.5 Documentation of Adverse Events Documentation of AEs should include: • Name: All AEs shall be documented using standardized medical terminology rather than participant-reported terms.",
        "When applicable, the documentation should include symptoms, signs, abnormal laboratory findings, and diagnoses. If the same participant experiences more than one occurrence of the same AE, with recovery in between,"
      ],
      "chips": [
        "ST1530-1",
        "p63/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p063.jpg",
      "cap": "Protocol page 63 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 64 of 90 · How to record AE onset, stop, and recurrences",
      "audio": [
        "each episode shall be recorded as separate AE instances. • Onset Date: the onset date shall be documented as the date when the participant first experiences the AE or its associated symptoms.",
        "For AEs identified through clinically significant abnormal laboratory results or diagnostic findings, the onset date should be recorded as the specimen collection date or procedure date.",
        "The onset date of serious adverse event is the time when the serious criteria are met. • End Date: the AE end date should be documented as the date when the AEs resolve completely, or AE-related symptoms/disabilities permanently cease.",
        "If AE persists as the end of the study, no end date shall be documented. • Seriousness • Severity • Causal Relationship • Measures Taken • Outcomes The AE name shall be documented using standardized medical terminology, with priority given to established medical diagnoses.",
        "If a definitive diagnosis cannot be determined initially, symptoms or signs may be recorded temporarily. Upon subsequent confirmation of the diagnosis, the AE record must be updated to replace the symptom/sign description with the confirmed diagnosis.",
        "Each AE name must represent a discrete medical event (e.g., one diagnosis, symptom, or sign = one AE). The investigator shall assess and grade all AEs according to chapter 8.3.2.",
        "For serious adverse events, the investigator shall ensure complete documentation in the electronic case report form in compliance with serious adverse event reporting standards.",
        "The sponsor shall conduct an independent evaluation of all serious adverse events, including assessment of expectedness, severity and causality."
      ],
      "chips": [
        "ST1530-1",
        "p64/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p064.jpg",
      "cap": "Protocol page 64 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 65 of 90 · §8.6 Disease progression and death",
      "audio": [
        "8.6 Disease Progression and Death During AE collection period, confirmed disease progression of malignancy (including radiographic progression or progression of clinical symptoms/signs) should not be recorded or reported as an AE.",
        "Similarly, when such confirmed disease progression meets serious adverse event criteria (including hospitalization/prolonged hospitalization, life-threatening events, death, etc.), it should not be recorded or reported as an serious adverse event.",
        "All deaths not caused by disease progression must be reported as serious adverse events. For fatal cases, the underlying cause of death shall be recorded as the AE term, rather than “death” itself.",
        "If the cause remains undetermined at the time of reporting, the serious adverse event term shall be recorded as \"death of unknown etiology\".",
        "8.7 Follow-up of Adverse Events After the initial AE report, investigators must actively follow up with each participant and provide the sponsor with additional information regarding the participant's condition.",
        "Any ongoing AEs recorded with previous follow-up/contact information shall continue to be assessed at the next follow-up/contact. All AEs require follow-up until resolution, stabilization of the condition, the event is otherwise explained, or the participant is lost to follow-up or dead.",
        "If a resolution occurs, the AE information must be updated accordingly. Investigators shall ensure that follow-up investigations are conducted to clarify the nature or causality of AEs, which may include additional laboratory or diagnostic tests, or consultations with other healthcare professionals.",
        "The sponsor may also request additional tests or evaluations to determine the AE’s nature or causality, and investigators are obligated to comply."
      ],
      "chips": [
        "ST1530-1",
        "p65/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p065.jpg",
      "cap": "Protocol page 65 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 66 of 90 · SAE reporting timelines and updates",
      "audio": [
        "For serious adverse events, all new or updated information must be documented in the original serious adverse event report. If any modification occurs, the investigators shall sign and date all modifications and updated serious adverse event reports must be submitted to the sponsor timely.",
        "8.8 Reporting of Serious Adverse Events All AEs meeting the criteria for \"seriousness\" required completion of the serious adverse event Report Form in addition to being recorded on the AE page of the participant's electronic case report form.",
        "This applies to all serious adverse events regardless of relationship to study treatment.",
        "Once the investigator or other site personnel become aware of the event, the serious adverse event must be reported within 24 hours, and an initial written report should be prepared using the serious adverse event Report Form and sent to the sponsor (pv-sirtex@grandpharma.cn) and designee.",
        "Other relevant documents, such as anonymized copies of medical records, may also be attached.",
        "If follow-up information of an serious adverse event or any significant new information related to the serious adverse event becomes available, such as changes in the outcome of the serious adverse event, alteration in its severity, or modification in the causality assessment with the investigational product, a follow-up report shall be submitted immediately.",
        "If the investigator considers that previously reported serious adverse event information was erroneous, a follow-up report may be submitted to correct, withdraw, or downgrade the serious adverse event with justification, and shall be reported in accordance with the serious adverse event reporting procedures.",
        "Upon receipt of an serious adverse event, the Sponsor will fully analyze, assess, and judge the serious adverse event and will be responsible for reporting safety-related information to the appropriate regulatory authorities and/or institutional ethics committees in accordance with applicable national regulations and institutional and ethics committee requirements.",
        "The investigator is required to report appropriate safety-related information in accordance with applicable national regulations and the requirements of the investigational site and ethics committee. 8.9 Contraception It is not known if gallium-68 G P zero one has transient adverse effects on the composition of sperm."
      ],
      "chips": [
        "ST1530-1",
        "p66/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p066.jpg",
      "cap": "Protocol page 66 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 67 of 90 · Reproductive potential definitions",
      "audio": [
        "For this study, male participants will be considered to be of non-reproductive potential if they have azoospermia (whether due to having had a vasectomy or due to an underlying medical condition).",
        "Female participants will be considered of non-reproductive potential if they meet one of the following conditions: ⚫ Postmenopausal (defined as at least 12 months with no menses without an alternative medical cause; in women <45 years of age a high follicle-stimulating hormone level in the postmenopausal range may be used to confirm a postmenopausal state in women not using hormonal contraception or hormonal replacement therapy.",
        "In the absence of 12 months of amenorrhea, a single FSH measurement is insufficient). ⚫ Have had a hysterectomy and/or bilateral oophorectomy, bilateral salpingectomy, or bilateral tubal ligation/occlusion at least 6 weeks prior to screening. ⚫ Has a congenital or acquired condition that prevents childbearing.",
        "Female and male participants of reproductive potential must agree to avoid becoming pregnant or impregnating a partner, respectively, while receiving study drug, starting with the first dose of study medication through at least 180 days or longer based on local regulation, after the last dose of study drug by complying with one of the following:",
        "⚫ practice abstinence† from heterosexual activity. ⚫ use (or have their partner use) acceptable contraception during heterosexual activity.",
        "Acceptable methods of contraception are‡: Single method (one of the following is acceptable): • intrauterine device (IUD) • vasectomy of a female participant’s male partner • contraceptive rod implanted into the skin Combination method (requires use of two of the following):"
      ],
      "chips": [
        "ST1530-1",
        "p67/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p067.jpg",
      "cap": "Protocol page 67 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 68 of 90 · Required contraception methods",
      "audio": [
        "• diaphragm with spermicide (cannot be used in conjunction with cervical cap/spermicide) • cervical cap with spermicide (nulliparous women only) • contraceptive sponge (nulliparous women only) • male condom or female condom (cannot be used together) • hormonal contraceptive:",
        "oral contraceptive pill (estrogen/progestin pill or progestin-only pill), contraceptive skin patch, vaginal contraceptive ring, or subcutaneous contraceptive injection. †Abstinence (relative to heterosexual activity) can be used as the sole method of contraception if it is consistently employed as the participant’s preferred and usual lifestyle and if considered acceptable by local regulatory agencies and ERCs/IRBs.",
        "Periodic abstinence (e.g., calendar, ovulation, sympto-thermal, post-ovulation methods, etc.) and withdrawal are not acceptable methods of contraception. Participants should be informed that taking the study medication may involve unknown risks to the fetus (unborn baby) if pregnancy were to occur during the study.",
        "In order to participate in the study participants of childbearing potential must adhere to the contraception requirement (described above) starting with the first dose of study medication through at least 180 days or longer based on local regulation, after the last dose of study therapy.",
        "If there is any question that a participant of childbearing potential will not reliably comply with the requirements for contraception, that participant should not be entered into the study.",
        "8.10 Reporting of Pregnancy The Investigator will collect pregnancy information on any female participant, or female partner of a male participant, while the participant is in this study.",
        "Pregnancy, in and of itself, is not regarded as an AE, unless there is suspicion that study drug may have interfered with the effectiveness of a contraceptive medication or method.",
        "The procedures that will be followed based on whether a pregnancy is confirmed by a positive serum or urine test result are listed below. • Investigator and participant must notify each other immediately. • Investigator must notify the Sponsor immediately"
      ],
      "chips": [
        "ST1530-1",
        "p68/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p068.jpg",
      "cap": "Protocol page 68 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 69 of 90 · Pregnancy during the study — what to do",
      "audio": [
        "• Withdraw the participant from the study • Perform the required end-of-treatment visit study evaluations • Investigator must complete and submit the Pregnancy Initial and Follow-Up report forms to the Sponsor within 24 hours after awareness of the pregnancy • A serum pregnancy test must be performed to confirm the urine test result. (The serum test should be performed at the investigative site to ensure that the test will be performed promptly, and the result is available immediately for review.) If a negative serum test does not confirm the urine test result, then:",
        "• The Investigator will use his/her expert judgment, based on an assessment of the potential benefit/risk to the participant, to determine if it is in the participant’s best interest to resume with the study drug and continue participation in the study.",
        "The collection time of pregnancy report is consistent with the collection time for adverse events. Any pregnancy incidents that occur within the specified reporting period should be immediately reported to the sponsor or designee.",
        "The outcome of all such pregnancies (i.e., spontaneous miscarriage, elective termination, normal birth, or congenital abnormality) must be documented and followed-up on a form that will be provided by the Sponsor.",
        "The pregnancy will be followed to term and the outcome, including any premature termination, must be reported to the Sponsor. All live births must be followed for a minimum of 30 days or to the first well-baby visit.",
        "All reports of congenital abnormalities/birth defects and spontaneous abortions/miscarriages should be reported as an serious adverse event for this study."
      ],
      "chips": [
        "ST1530-1",
        "p69/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p069.jpg",
      "cap": "Protocol page 69 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 70 of 90 · §9 Statistical methods and sample size",
      "audio": [
        "9 Statistical Methods and Determination of Sample Size A detailed description of the study analyses and statistical methods will be presented in the Statistical Analysis Plan (SAP). The SAP will be prepared by the statistician and approved by the sponsor before the start of the statistical analysis.",
        "Analyses will be conducted using validated software SAS® v9.4 or higher version. 9.1 Sample Size Determination For diagnostic radiopharmaceuticals, 6-12 participants with dosimetry/radiation PK data would be sufficient for a robust analysis.",
        "As a result, about 10 evaluable participants in each cohort are planned to be included. The number of participants may be adjusted or increased to ensure adequate accumulated data. 9.2 Analysis Sets The Full Analysis Set (FAS) will consist of all participants who have received gallium-68 G P zero one.",
        "The FAS will be used to summarize demographic and baseline characteristics, and to analyze all endpoints except for safety and PK. The Safety Analysis Set (SS) will consist of all participants who have received the gallium-68 G P zero one and conducted safety assessment after administration. The SS will be used for safety analysis.",
        "The Pharmacokinetic Analysis Set (PKS) will consist of all participants who have received gallium-68 G P zero one and have at least one concentration detected at the scheduled PK blood collection point in the study, and do not have a significant protocol violation that could significantly affect the PK evaluation.",
        "PKS will be used to analyze pharmacokinetics. All data analysis sets will be confirmed by Data Review Committee. 9.3 Statistical Methods 9.3.1 General principles Continuous Variables: Will be summarized using descriptive statistics, including:"
      ],
      "chips": [
        "ST1530-1",
        "p70/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p070.jpg",
      "cap": "Protocol page 70 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 71 of 90 · Descriptive statistics for continuous data",
      "audio": [
        "Number of observations, mean, standard deviation (SD*), median, minimum, maximum and quartiles. Categorical Variables: Will be summarized by frequency counts and percentages.",
        "9.3.2 Baseline Characteristics and Demographics Summary tables and listings will be provided for demographics and other baseline characteristics, including: • Age, ethnic origin, sex, physical exam • Medical/surgical history and baseline findings • Prior and concomitant medication 9.3.3 Primary Variables The primary objectives are to evaluate the safety and preliminary diagnostic performance of gallium-68 G P zero one.",
        "Safety Frequency, duration and severity of treatment-emergent adverse events, and changes in clinical laboratory and 12-lead ECGs parameters compared to baseline will be analyzed using safety set. treatment-emergent adverse event refers to AEs that occur, having been absent before the first dose of study treatment, or have worsened in severity after initiating the study treatment.",
        "The incidence of treatment-emergent adverse events will be summarized overall by SOC and PT, presenting both the number and percentage of participants who experienced each event. Adverse events will be categorized by severity (NCI C T C A E version 6.0) and relationship to treatment.",
        "All serious adverse events (serious adverse events) will be listed individually. Safety variables including vital signs, physical examinations, clinical laboratory, 12-lead ECGs and other findings will be summarized descriptively for actual values and changes from baseline at each scheduled assessment time point. Clinically significant abnormalities will be summarized."
      ],
      "chips": [
        "ST1530-1",
        "p71/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p071.jpg",
      "cap": "Protocol page 71 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 72 of 90 · Labs, ECGs, shift tables, imaging stats",
      "audio": [
        "Shift tables from baseline to the worst post-baseline grade will be presented for laboratory parameters. Diagnostic Performance Sensitivity/Specificity/Accuracy/PPV/NPV will be calculated with 95% Clopper-Pearson Exact confidence intervals using pathology as reference standard.",
        "Sensitivity (%) = TP / (TP+FN) Specificity (%) = TN / (TN+FP) Accuracy (%) = (TP+TN) / (TP+FP+TN+FN) PPV (%) = TP / (TP+FP) NPV (%) = TN / (TN+FN) Tracer Comparison Diagnostic performance, SUVs and tumor to background ratios will be compared for differences between gallium-68 G P zero one and fluorine-18 F D G and analyzed in descriptive statistics.",
        "9.3.4 Secondary Variables Imaging Quality: Likert scale scores will be summarized using frequencies/percentages. Radiation Dosimetry Absorbed doses for critical organs and tumor lesions, and total body effective dose will be summarized using descriptive statistics.",
        "Biodistribution Whole body PET C T scans will be performed after administration of gallium-68 G P zero one. SUV values (S U V max, S U V mean), tumor to background ratios and ID% of tumor lesions and selected organs at risk will be summarized in descriptive statistics (mean, SD*, median, range) by cohort/time point."
      ],
      "chips": [
        "ST1530-1",
        "p72/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p072.jpg",
      "cap": "Protocol page 72 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 73 of 90 · SUV formula, %ID/g, blood and urine PK",
      "audio": [
        "SUV, the standardized uptake value, equals the activity concentration in the image voxel or region, C image, divided by injected dose over body weight.",
        "Percent injected dose per gram, percent I.D. per g, is the radioactivity per gram of tissue as a percentage of the total injected activity.",
        "Pharmacokinetics: whole blood and urine radioactivity will be measured, and time-activity curves will be built for the first enrolled six participants.",
        "Typical parameters to summarize: area under the curve, half-life, clearance, T max, C max, and volume of distribution.",
        "For later participants, PK sampling is not mandated. One post-dose PET/CT is enough once the imaging window is locked from the first six."
      ],
      "chips": [
        "ST1530-1",
        "p73/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p073.jpg",
      "cap": "Protocol page 73 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "SUV = activity concentration in the image divided by injected activity per body weight.",
        "Report SUVmax, SUVmean, TBR, and % injected dose per gram for organs and lesions."
      ]
    },
    {
      "title": "Page 74 of 90 · §10 Data management and EDC setup",
      "audio": [
        "10 Data Management 10.1 Data Management 10.1.1 Electronic Data Capture (electronic data capture) System Database Setup The data manager establishes the study data collection system in accordance with the study protocol and configures logical checks for data verification.",
        "Prior to system use, all electronic data capture users must receive adequate training and obtain authorized access credentials for the system login.",
        "10.1.2 Electronic Case Report Form (electronic case report form) Entry electronic case report form will be used for data collection in the study. • All data in the electronic case report form will be derived from the original source documents and filled by the investigator or authorized person.",
        "The timeliness, completeness and accuracy of the information should be ensured, and follow the principles of ALCOA (Attributable, Legible, Contemporaneous, Original, and Accurate). • All items in electronic case report form must be completed. • All required laboratory tests and auxiliary examinations have been entered. • This database must be managed exclusively by the investigator or authorized person who has completed protocol-specific training and demonstrated G C P compliance competency. • After completing all required electronic case report form entries, the investigator must apply electronic signature using unique credentials upon verification of research monitor and data manager.",
        "Any subsequent data modifications require re-signature of the updated electronic case report form pages.",
        "All electronic case report form pages for both screened participants and enrolled participants also require investigator's verified e-signature 10.2 Data Locking After the data is reviewed and confirmed to be correct, the database lock documents signed in written form should be executed according to the database lock procedure.",
        "After obtaining written database lock approval documents from all parties, Data Administrator should perform database"
      ],
      "chips": [
        "ST1530-1",
        "p74/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p074.jpg",
      "cap": "Protocol page 74 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 75 of 90 · Query, lock, and handoff to statistics",
      "audio": [
        "lock operation. After the database is locked, the data manager will export the database files and hand them to the statistical team for statistical analysis. 10.3 Monitoring A study monitor appointed by the Sponsor/ Contract Research Organization (CRO) is responsible for monitoring all stages of the study.",
        "The monitor shall perform the following activities: 1) Perform on-site verification of informed consent documentation and screening and enrollment of the participants. 2) May discuss electronic case report form and source document verification findings with site investigator.",
        "Investigators must correct or provide clarifications on any identified data errors, omissions or queries in the database. 3) Ensure all AEs are accurately documented in electronic case report form and confirm all serious adverse events have been properly reported and documented.",
        "4) Verify IP handling procedures, including supply, storage, dispensing, preparation, administration, returning and destruction. 5) May contact designated site personnel to obtain required source documents and complete source data verification.",
        "Schedule meetings during study conduct to discuss study progress updates with investigators. 6) Conduct point-to-point verification of electronic case report form entries against hospital medical records (primary source documents) and may work with sites to verify data sources.",
        "Document the nature and location of all source files. 10.4 electronic case report form Archiving The investigator shall maintain comprehensive original documentation for all study participants to ensure the accuracy, completeness, and timeliness of database records.",
        "Source documents and medical records must be clearly and thoroughly documented, readily identifiable by all personnel involved in the clinical study."
      ],
      "chips": [
        "ST1530-1",
        "p75/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p075.jpg",
      "cap": "Protocol page 75 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 76 of 90 · eCRF archiving and source documents",
      "audio": [
        "Upon study completion, the data manager shall export participant electronic case report forms in PDF format from the electronic data capture system.",
        "These data shall be archived on non-rewritable Compact Disc Read-Only Memory (CD-ROMs), with copies retained separately by both the sponsor and participating institutions for audit and/or regulatory inspection purposes. All study documentation shall be preserved and managed in full compliance with G C P requirements.",
        "Prior to destroying any study-related records, the investigator must notify the sponsor in advance. The sponsor shall retain all clinical study documentation for a minimum of 5 years following drug approval or, in cases of premature study termination, for 5 years after study closure.",
        "10.5 Source Document In accordance with ICH E6 guidelines, applicable regulations, and institutional requirements for the protection of participants' personal information, each participating study site must securely maintain all treatment and research records related to this clinical investigation.",
        "As part of the research sponsored or supported by Grand Sirtex (Chengdu) Medical Technology Co., Ltd., each site shall permit authorized representatives of Grand Sirtex (Chengdu) and regulatory authorities (where legally permitted, including the right to obtain copies) to access clinical records for quality assurance, auditing, and evaluation of safety, study progress, and data validity.",
        "Source data constitute all original information necessary for the reconstruction and evaluation of the clinical study, representing the primary records of clinical findings, observations, or other study-related activities. Examples of source documents and data include, but are not limited to:",
        "hospital records, laboratory reports, clinical notes, participant diary cards, pharmacy dispensing logs, recorded consultation meetings, automated instrument outputs, certified true copies of original documents, microfilms, photographic negatives, microfiches, magnetic media, X-ray films, and all participant-related records maintained by investigational pharmacies, laboratories, and medical departments participating in the study."
      ],
      "chips": [
        "ST1530-1",
        "p76/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p076.jpg",
      "cap": "Protocol page 76 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 77 of 90 · §11 Ethics, ICF, Declaration of Helsinki",
      "audio": [
        "11 Ethical and Legal Aspects 11.1 Informed Consent and Signature of Informed Consent Form During the informed consent process, the investigator must provide each participant with detailed information regarding the study types, purpose, procedures, expected duration, potential risks and benefits, and any possible discomforts associated with the study.",
        "Each participant must be informed that participation is voluntary and that they may withdraw from the study at any time without prejudice to their rights.",
        "After explaining the essential aspects of the study and ensuring that each possible participant fully understands its objectives, the investigator shall request the participant or their legally authorized representative to sign and date the informed consent form and provide contact information.",
        "The investigator must also sign the informed consent form after the participant or their legally authorized representative has agreed to participate and signed the form.",
        "The informed consent form shall be prepared in duplicate, with one copy retained by the clinical research site for archiving and the other given to the participant for their records. Participants who have not provided informed consent or signed the informed consent form may not participate in this study.",
        "11.2 Ethical and Legal Conduct of the Study Prior to initiating a clinical study, the investigator must obtain written approval from the EC. No participant screening may occur before written EC approval is secured.",
        "Before and during the study, the investigator must provide the EC with all documents required for ethical review. The investigator must conduct the study strictly in compliance with the protocol approved by the EC.",
        "No modifications or deviations from the protocol are permitted without prior agreement from both the sponsor and the EC, except for changes necessary to eliminate immediate hazards to participants or administrative adjustments (e.g., monitor replacement, contact number updates) that do not affect study conduct.",
        "If protocol modifications or deviations are implemented to address immediate risks to participants without prior EC approval, the investigator must promptly report such actions to the EC and"
      ],
      "chips": [
        "ST1530-1",
        "p77/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p077.jpg",
      "cap": "Protocol page 77 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 78 of 90 · Ethics committee and regulatory notification",
      "audio": [
        "sponsor, along with a justification. Regulatory authorities (e.g., the drug administration) must also be notified if warranted. The investigator must report to the EC any Suspected Unexpected Serious Adverse Reactions (SUSARs) provided by the sponsor.",
        "In the event of study termination or suspension by either the investigator or sponsor, the investigator must immediately notify the study site, and EC, submitting a detailed written explanation. The investigator must submit annual reports to the EC or provide progress reports as requested.",
        "Any circumstances that may significantly impact study conduct or increase participant risks must be reported in writing to the sponsor, EC, and study site as soon as possible. Upon study completion, the investigator must provide the EC with a summary of the study results."
      ],
      "chips": [
        "ST1530-1",
        "p78/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p078.jpg",
      "cap": "Protocol page 78 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 79 of 90 · §12 Quality assurance and quality control",
      "audio": [
        "12 Quality Assurance and Quality Control The sponsor shall establish a comprehensive quality management system for clinical study, covering the entire study process, including study design, implementation, documentation, evaluation, result reporting, and document archiving.",
        "Additionally, the sponsor shall form dedicated clinical study research and management teams to guide and oversee study conduct, identify critical study processes and key data, and implement risk-based quality management to mitigate study risks.",
        "Key measures include protocol design and implementation, monitoring plans, contracts with clearly defined responsibilities, adherence to SOPs, and relevant training programs.",
        "The sponsor shall develop, implement, and promptly update SOPs for the quality assurance and quality control systems to ensure that study conduct, data generation, documentation, and reporting comply with the protocol, G C P, and applicable regulatory requirements.",
        "All clinical study activities at investigational sites and laboratory testing processes must strictly adhere to the quality management SOPs. Each stage of data processing shall undergo quality control to ensure data reliability and accuracy throughout the handling process.",
        "The investigator must permit study-related monitoring, audits, IRB/IEC review, and regulatory agency inspections and provide direct access to source documents."
      ],
      "chips": [
        "ST1530-1",
        "p79/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p079.jpg",
      "cap": "Protocol page 79 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 80 of 90 · §13 Protocol deviations",
      "audio": [
        "13 Protocol Deviation Protocol deviation refers to any non-compliance with the clinical study protocol, SOPs, or applicable regulatory requirements. Such non-compliance may arise from participants, investigators, or clinical study site staff.",
        "The investigator or their designated research personnel must document and provide an explanation for any protocol deviations. All protocol deviations must be submitted to the EC for review in accordance with its requirements. Corrective actions should be implemented to address deviations.",
        "In cases of major protocol deviations, after evaluation (if necessary), the sponsor may terminate the study prematurely."
      ],
      "chips": [
        "ST1530-1",
        "p80/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p080.jpg",
      "cap": "Protocol page 80 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 81 of 90 · §14 Insurance",
      "audio": [
        "14 Insurance Participants and investigators taking part in the study will be supplied with insurance cover according to the local requirements."
      ],
      "chips": [
        "ST1530-1",
        "p81/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p081.jpg",
      "cap": "Protocol page 81 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 82 of 90 · §15 Publication policy and confidentiality",
      "audio": [
        "15 Publication Policy and Confidentiality 15.1 Publication Policy All research results obtained in this study are the property of Grand Sirtex (Chengdu) Medical Technology Co., Ltd.",
        "If the investigator intends to publish any study-related data or information, they must provide Grand Sirtex (Chengdu) Medical Technology Co., Ltd. with the manuscript, abstract, or full text of all planned publications (including posters, invited presentations, or guest lectures) at least 30 days prior to submission for publication or any other form of dissemination.",
        "The investigator must obtain the sponsor's written approval before submitting academic articles or abstracts. 15.2 Confidentiality All research materials related to the investigational product (including manufacturing processes) shall be deemed confidential unless publicly disclosed.",
        "Research data obtained in this study shall also be treated as confidential. Grand Sirtex (Chengdu) Medical Technology Co., Ltd. reserves the right to disclose such data to other clinical researchers, or other government agencies when deemed appropriate.",
        "To ensure the integrity of clinical study data analysis, investigators are obligated to provide the sponsor with complete study results and datasets. Investigators must safeguard participant privacy and shall not disclose personally identifiable information to unauthorized third parties.",
        "CRFs and other documents submitted to the sponsor shall not contain participant names, using only unique identification codes for tracking. Investigators may maintain participant enrollment logs containing identification codes, names, and addresses.",
        "Signed informed consent forms and other confidential documents shall be strictly protected and must not be submitted to the sponsor."
      ],
      "chips": [
        "ST1530-1",
        "p82/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p082.jpg",
      "cap": "Protocol page 82 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 83 of 90 · §16 References (1)",
      "audio": [
        "16 References [1] Bray F, Laversanne M, Sung H, et al. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J Clin. 2024;74(3):229-263. doi:10.3322/caac.21834 [2] Cortés-Guiral, D. et al. Primary and metastatic peritoneal surface malignancies.",
        "Nature reviews. Disease primers 7, 91, doi:10.1038/s41572-021-00326-6 (2021). [3] Jaffer A. Ajani, T. A. D. A., David J. Bentrem. N C C N Guidelines Version 2.2025 Gastric Cancer. (2025). [4] Nougaret, S. et al. The BUMPy road of peritoneal metastases in ovarian cancer.",
        "Diagnostic and interventional imaging 103, 448-459, doi:10.1016/j.diii.2022.05.003 (2022). [5] Kidane, B. et al. The American Association for Thoracic Surgery (AATS) 2023 Expert Consensus Document: Staging and multidisciplinary management of patients with earlystage non-small cell lung cancer.",
        "The Journal of thoracic and cardiovascular surgery 166, 637-654, doi:10.1016/j.jtcvs.2023.04.039 (2023). [6] Wan, Q. C., Bai, L., Wang, Z. Y. & Ji, B. Diagnostic Performance of F A PI PET C T for the Detection of Lymph Node Metastases in Lung Cancer Patients: A Meta-analysis.",
        "Academic radiology 32, 3030-3038, doi:10.1016/j.acra.2024.09.026 (2025). [7] Loktev, A. et al. Development of Fibroblast Activation Protein-Targeted Radiotracers with Improved Tumor Retention.",
        "Journal of nuclear medicine : official publication, Society of Nuclear Medicine 60, 1421-1429, doi:10.2967/jnumed.118.224469 (2019). [8] García Megías, I. et al. F A PI radiopharmaceuticals in nuclear oncology and theranostics of solid tumours: are we nearer to surrounding the hallmarks of cancer?",
        "Annals of nuclear medicine 39, 407-423, doi:10.1007/s12149-025-02022-x (2025). [9] Ruan, D. et al. Evaluation of F A PI PET imaging in gastric cancer: a systematic review and meta-analysis. Theranostics 13, 4694-4710, doi:10.7150/thno.88335 (2023). [10] Hope, T. A. et al.",
        "SNMMI Procedure Standard/EANM Practice Guideline for Fibroblast Activation Protein (F A P) PET. Journal of nuclear medicine : official publication, Society of Nuclear Medicine 66, 26-33, doi:10.2967/jnumed.124.269002 (2025). [11] Quinn, B., Dauer, Z., Pandit-Taskar, N., Schoder, H. & Dauer, L. T.",
        "Radiation dosimetry of fluorine-18 F D G PET C T: incorporating exam-specific parameters in dose estimates. BMC medical imaging 16, 41, doi:10.1186/s12880-016-0143-y (2016). [12] Afshar-Oromieh, A. et al. Radiation dosimetry of (68)Ga-PSMA-11 (HBED-CC) and preliminary evaluation of optimal imaging timing.",
        "European journal of nuclear medicine and molecular imaging 43, 1611-1620, doi:10.1007/s00259-016-3419-0 (2016). [13] Sandström, M. et al. Comparative biodistribution and radiation dosimetry of 68GaDOTATOC and gallium-68-DOTATATE in patients with neuroendocrine tumors. Journal of"
      ],
      "chips": [
        "ST1530-1",
        "p83/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p083.jpg",
      "cap": "Protocol page 83 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 84 of 90 · References (2) · FAPI and SNMMI papers",
      "audio": [
        "nuclear medicine : official publication, Society of Nuclear Medicine 54, 1755-1759, doi:10.2967/jnumed.113.120600 (2013). [14] Bentestuen, M., Nalliah, S., Stolberg, M. M. K. & Zacho, H. D. How to Perform F A PI PET?",
        "An Expedited Systematic Review Providing a Recommendation for F A PI PET Imaging With Different F A PI Tracers. Seminars in nuclear medicine 54, 345-355, doi:10.1053/j.semnuclmed.2023.11.003 (2024). [15] 21 C.F.R. § 361.1(b)(3)(i) - Radioactive drugs for certain research uses. U.S. Food and Drug Administration.",
        "2024. [Accessed 2024 Jun 24]. Available from: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-361/section-361.1 [16] Kratochwil C, Flechsig P, Lindner T, et al. gallium-68-F A PI PET C T: Tracer Uptake in 28 Different Kinds of Cancer. J Nucl Med. 2019;60(6):801-805. doi:10.2967/jnumed.119.227967."
      ],
      "chips": [
        "ST1530-1",
        "p84/90",
        "Full protocol text"
      ],
      "visual": "psma",
      "image": "assets/protocol/p084.jpg",
      "cap": "Protocol page 84 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 85 of 90 · Appendix 1 · Cockcroft–Gault creatinine clearance",
      "audio": [
        "Appendix 1 is the Cockcroft and Gault formula for creatinine clearance.",
        "Creatinine clearance in milliliters per minute equals one hundred forty minus age in years, times weight in kilograms, times zero point eight five if the participant is female, divided by seventy-two times serum creatinine in milligrams per deciliter.",
        "Units: CrCl milliliters per minute. Age years. Weight kilograms. Serum creatinine milligrams per deciliter.",
        "Inclusion criterion 7 requires creatinine clearance of at least fifty milliliters per minute by this formula."
      ],
      "chips": [
        "ST1530-1",
        "p85/90",
        "Full protocol text"
      ],
      "visual": "renogram",
      "image": "assets/protocol/p085.jpg",
      "cap": "Protocol page 85 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Cockcroft–Gault: CrCl (mL/min) = [(140 − age) × kg × (0.85 if female)] / (72 × serum creatinine in mg/dL).",
        "Inclusion requires CrCl ≥ 50 mL/min."
      ]
    },
    {
      "title": "Page 86 of 90 · Appendix 2 · ECOG performance status 0–5",
      "audio": [
        "17.2 Appendix 2 Eastern Cooperative Group (E C O G) Performance Status Scale E C O G Performance Status* Grade E C O G 0 Fully active, able to carry on all pre-disease performance without restriction 1 Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light housework, office work 2 Ambulatory and capable of all selfcare but unable to carry out any work activities.",
        "Up and about more than 50% of waking hours 3 Capable of only limited selfcare, confined to bed or chair more than 50% of waking hours 4 Completely disabled. Cannot carry on any selfcare.",
        "Totally confined to bed or chair 5 Dead *From E C O G, Robert Comis, MD, Group Chair Reference: Oken MM., Creech RH, Tormey DC, Horton J, Davis TE, McFadden ET, Carbone PP. Toxicity and Response Criteria of The Eastern Cooperative Oncology Group. Am J Clin Oncol 1982; 5:649-655."
      ],
      "chips": [
        "ST1530-1",
        "p86/90",
        "Full protocol text"
      ],
      "visual": "blueprint",
      "image": "assets/protocol/p086.jpg",
      "cap": "Protocol page 86 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "ECOG 0 fully active; 1 restricted in strenuous activity; 2 ambulatory, up more than 50% of waking hours. 0–2 may enroll."
      ]
    },
    {
      "title": "Page 87 of 90 · Appendix 3 · Fridericia QTcF formula",
      "audio": [
        "Appendix 3 is Fridericia's correction of the QT interval.",
        "QTcF equals the measured QT interval divided by the cube root of the R-R interval, when both are in seconds.",
        "Report QT, PR, and QTcF on the twelve-lead ECG. Use the same formula at baseline and after dosing so a change is comparable.",
        "A QTcF prolongation that meets CTCAE thresholds is recorded as an adverse event."
      ],
      "chips": [
        "ST1530-1",
        "p87/90",
        "Full protocol text"
      ],
      "visual": "alara",
      "image": "assets/protocol/p087.jpg",
      "cap": "Protocol page 87 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 88 of 90 · Appendix 4 · peritoneal cancer index (PCI)",
      "audio": [
        "17.4 Appendix 4: peritoneal cancer index Calculation For each region identified on peritoneum, an estimation of tumor volume using four categories is performed: V0: indicates the absence of cancer at a particular abdominopelvic region or anatomic site; VI: indicates tumor nodules <0.5cm in diameter (minimal volume); V2: indicates tumor 0.5-5cm in diameter (moderate volume); V3: indicates tumor >5cm in diameter (gross volume).",
        "If an organ is coated by a mat of tumor (confluent disease), this region or site is scored as V3. Scores are added for each region to get a total peritoneal cancer index. Reference: Jacquet P, Sugarbaker PH. Clinical research methodologies in diagnosis and staging of patients with peritoneal carcinomatosis.",
        "Cancer Treat Res. 1996;82:359-374. doi:10.1007/978-1-46131247-5_23"
      ],
      "chips": [
        "ST1530-1",
        "p88/90",
        "Full protocol text"
      ],
      "visual": "suv",
      "image": "assets/protocol/p088.jpg",
      "cap": "Protocol page 88 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "PCI scores 13 peritoneal regions 0–3 by lesion size; sum is 0–39."
      ]
    },
    {
      "title": "Page 89 of 90 · Appendix 5 · IASLC 9th-edition N staging NSCLC",
      "audio": [
        "17.5 Appendix 5:",
        "N Staging in non-small cell lung cancer (I A S L C 9th Edition) N0 No regional lymph node metastasis N1 Metastasis(es) in ipsilateral pulmonary or hilar lymph nodes N2 Metastasis(es) in ipsilateral mediastinal and/or subcarinal lymph node(s) N2a …involving a single ipsilateral mediastinal/subcarinal nodal station N2b …involving multiple ipsilateral/subcarinal mediastinal nodal stations N3 Metastasis in supraclavicular or scalene node(s) or contralateral mediastinal/hilar node(s) Reference:",
        "Detterbeck FC, Woodard GA, Bader AS, et al. The Proposed Ninth Edition TNM Classification of Lung Cancer. Chest. 2024;166(4):882-895. doi:10.1016/j.chest.2024.05.026"
      ],
      "chips": [
        "ST1530-1",
        "p89/90",
        "Full protocol text"
      ],
      "visual": "vq",
      "image": "assets/protocol/p089.jpg",
      "cap": "Protocol page 89 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Cohort 2 regions follow IASLC 9th-edition N stage: N0, N1 ipsilateral pulm/hilar, N2 ipsilateral mediastinal/subcarinal, N3 contralateral or supraclavicular."
      ]
    },
    {
      "title": "Page 90 of 90 · Appendix 6 · strong P-gp and BCRP inhibitor examples",
      "audio": [
        "17.6 Appendix 6: Examples of strong inhibitors for transporters P-glycoprotein Inhibitors B C R P Inhibitors Itraconazole Quinidine Verapamil Cyclosporine Darolutamide Fostamatinib This list is not intended to be exhaustive, and a similar restriction will apply to other agents that are known to strongly inhibit transporters activity.",
        "Reference: ICH guideline M12. DRUG INTERACTION STUDIES. 21 May 2024"
      ],
      "chips": [
        "ST1530-1",
        "p90/90",
        "Full protocol text"
      ],
      "visual": "generator",
      "image": "assets/protocol/p090.jpg",
      "cap": "Protocol page 90 of 90 — ST1530-1 v1.2 GP-STAR",
      "pearls": [
        "Strong P-gp examples: itraconazole, quinidine, verapamil. Strong BCRP examples are listed in the same appendix."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What activity of ⁶⁸Ga-GP-01 is given?",
      "choices": [
        "370 MBq (10 mCi) infusion over 10 minutes",
        "One bolus 185 MBq ± 10% (5 mCi ± 10%), mass ≤ 50 µg",
        "Two millicuries per kilogram",
        "Generator elution, uncalibrated"
      ],
      "a": 1,
      "why": "Synopsis and §3.2: 185 MBq ± 10%, mass dose ≤ 50 micrograms, single bolus before PET."
    },
    {
      "q": "How is GP-STAR designed?",
      "choices": [
        "Single-arm FDG-only study",
        "Randomized versus surgery",
        "Two parallel cohorts: peritoneal solid tumors, and NSCLC with suspected nodal mets",
        "Three dose-escalation arms"
      ],
      "a": 2,
      "why": "Open-label, two parallel cohorts of about 10 each. Exploratory Phase I/II."
    },
    {
      "q": "Who gets multi-timepoint PET, PK, biodistribution, and dosimetry?",
      "choices": [
        "Every participant",
        "Only cohort 2",
        "The first enrolled 6 participants; later participants have one post-dose PET and PK is not mandated",
        "Only screen failures"
      ],
      "a": 2,
      "why": "§3.1: imaging parameters, dosimetry, biodistribution, and PK in the first six."
    },
    {
      "q": "May ⁶⁸Ga-GP-01 PET/CT by itself change the surgical plan?",
      "choices": [
        "Yes, it is the standard of care map",
        "No. Surgery is based on conventional imaging; unexpected GP-01 foci may trigger extra work-up at the surgeon's discretion",
        "Only if SUVmax > 10",
        "Only in cohort 2"
      ],
      "a": 1,
      "why": "v1.2 amendment and §3.1: exploratory — insufficient evidence to drive the operation."
    },
    {
      "q": "A PET-positive region is resected and pathology is negative. How is it classified?",
      "choices": [
        "True positive",
        "False negative",
        "False positive",
        "Non-evaluable"
      ],
      "a": 2,
      "why": "v1.2 corrected FN → FP when the PET-positive lesion was actually resected and path-negative."
    },
    {
      "q": "Which drugs are prohibited around dosing?",
      "choices": [
        "All antibiotics",
        "Strong P-gp or BCRP inhibitors, from 1 week or 5 half-lives (whichever is longer) through the test period",
        "Any statin",
        "Iodinated contrast only"
      ],
      "a": 1,
      "why": "Preclinical: GP-01 is a P-gp and BCRP substrate. Appendix 6 lists examples."
    },
    {
      "q": "What is the biologic target of GP-01?",
      "choices": [
        "PSMA on prostate epithelium",
        "Somatostatin receptor type 2",
        "Fibroblast activation protein on cancer-associated fibroblasts",
        "NIS on thyroid follicular cells"
      ],
      "a": 2,
      "why": "FAP is a transmembrane protein highly expressed by CAFs in stroma."
    },
    {
      "q": "Which AE scale does v1.2 use?",
      "choices": [
        "CTCAE v4.03",
        "CTCAE v5.0",
        "CTCAE v6.0",
        "MedDRA only"
      ],
      "a": 2,
      "why": "Switched to v6.0 because studies starting after 1 January 2026 may use it."
    },
    {
      "q": "FDG PET/CT relative to GP-01 dosing?",
      "choices": [
        "Must be same-day",
        "Within 60 days before investigational product",
        "After surgery only",
        "Not required"
      ],
      "a": 1,
      "why": "v1.1/v1.2: 60-day window, aligned with conventional imaging."
    },
    {
      "q": "Inclusion renal gate?",
      "choices": [
        "Any creatinine",
        "eGFR ≥ 90 only",
        "Creatinine clearance ≥ 50 mL/min by Cockcroft–Gault",
        "Dialysis allowed"
      ],
      "a": 2,
      "why": "Appendix 1 formula. Hydronephrosis itself was removed as an exclusion in v1.2."
    }
  ]
};

(function bootP0Protocol() {
  const COURSE = window.COURSE;
  if (!COURSE || !Array.isArray(COURSE.modules)) {
    console.warn("p0protocol: COURSE not ready");
    return;
  }
  COURSE.modules = COURSE.modules.filter(m => m.id !== "p0protocol");
  COURSE.modules.unshift(MODULE);

  function protocolSrc(lesson) {
    if (!lesson || !lesson.image) return "";
    try { return (typeof resolveAsset === "function") ? resolveAsset(lesson.image) : lesson.image; }
    catch (e) { return lesson.image; }
  }
  function currentP0Lesson() {
    const st = window.NMBState;
    if (!st || st.moduleId !== "p0protocol") return null;
    const mod = COURSE.modules.find(m => m.id === "p0protocol");
    return mod && mod.lessons && mod.lessons[st.lesson];
  }
  function pinProtocolPage() {
    const lesson = currentP0Lesson();
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
    if (hero && (!LiveHero.browsing)) { hero.src = src; hero.alt = item.cap; }
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
      if (mod && mod.id === "p0protocol" && lesson && lesson.image) {
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
      if (id === "p0protocol") keepPinned();
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
      if (window.NMBState && NMBState.moduleId === "p0protocol") keepPinned();
    };
  }

  const extras = P0V;
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
      if (raw && origDK({ title: "", visual: raw, audio: [""] }, mod)) {
        /* keep explicit */
      }
      if (mod && mod.id === "p0protocol" && raw) {
        const map = { gpstar: "suv", fap: "psma", gadosedose: "decaymath", truth2x2: "deauville", petwin: "annihilation" };
        if (extras[raw]) return raw;
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
      if (!pager || document.getElementById("startProtocol")) return;
      const b = document.createElement("button");
      b.id = "startProtocol";
      b.className = "primary";
      b.type = "button";
      b.textContent = "Open GP-STAR protocol →";
      b.style.marginLeft = "8px";
      b.onclick = () => openModule("p0protocol");
      pager.appendChild(b);
      if (!document.getElementById("dlGpstarSheet")) {
        const a = document.createElement("a");
        a.id = "dlGpstarSheet";
        a.className = "primary";
        a.href = "GP-STAR-ST1530-1-study-sheet.pdf";
        a.download = "GP-STAR-ST1530-1-study-sheet.pdf";
        a.textContent = "Download GP-STAR study sheet (PDF)";
        a.style.cssText = "display:inline-block;margin-left:8px;text-decoration:none";
        pager.appendChild(a);
      }
      const heroP = document.querySelector(".hero-card p:nth-of-type(2)");
      if (heroP && !/GP-STAR/.test(heroP.textContent || "")) {
        heroP.textContent = "New: GP-STAR protocol module (P0P) reads all 90 pages of ST1530-1 with the same audio, video, atlas, and live-image player as the rest of the studio. Modules 00–13 stay the ABNM audiobook. Modules 14–30 add DR Core. Pin the atlas beside any lesson.";
      }
    };
  }
  if (typeof Theater !== "undefined") {
    const alias = { gpstar: "fdg", fap: "therapy", gadosedose: "f18", truth2x2: "deauville" };
    if (Theater.clips) {
      Theater.clips.gpstar = Theater.clips.fdg || Theater.clips.pet || Theater.clips.talk;
      Theater.clips.fap = Theater.clips.therapy || Theater.clips.pet;
      Theater.clips.gadosedose = Theater.clips.f18 || Theater.clips.decay || Theater.clips.talk;
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
    if (typeof Theater.showVideo === "function") {
      const origShow = Theater.showVideo.bind(Theater);
      Theater.showVideo = function (on) {
        if (window.NMBState && NMBState.moduleId === "p0protocol") {
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
    if (q.get("mod") === "p0protocol" && typeof openModule === "function") {
      openModule("p0protocol");
      return;
    }
  } catch (e) {}
  const stage = document.getElementById("stage");
  if (stage && stage.querySelector(".hero-card") && typeof renderHome === "function") {
    renderHome();
  }
})();
