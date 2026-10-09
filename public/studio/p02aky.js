/* Aktis BActinium-2 / AKY-2519-02 / P02 Ac-225 B7-H3 protocol audiobook.
   Loads after p01bet.js. Inserts after BET-121. Mutates window.COURSE. */


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

  const MODULE02 = {
  "id": "aky2519protocol",
  "num": "P02",
  "title": "P02 · BActinium-2 protocol · Ac-225 / Cu-64 AKY-2519 B7-H3",
  "time": "~4 h spoken",
  "weight": "Entire signed protocol",
  "atlasKey": "nuclear",
  "lessons": [
    {
      "title": "How to use this P02 · BActinium-2 AKY-2519 protocol audiobook",
      "audio": [
        "This module is P 02 — a page-by-page read of Aktis Oncology protocol A K Y-2519-02, version 1.0, dated 08 April 2026. Study nickname BActinium-2.",
        "Investigational products: copper-64 A K Y-2519, the B 7-H 3 imaging PET, and actinium-225 A K Y-2519, the B 7-H 3 alpha therapy. Same 49 amino-acid miniprotein. DOTA-P E G 4 chelator. Different radionuclide.",
        "Phase 1 b, two parts, open-label. About 152 adults with B 7-H 3 imaging-positive solid tumors: non-small cell lung, extensive-stage small cell lung, m C R P C, head and neck squamous, esophageal squamous, and colorectal.",
        "The player is the same Board Studio audiobook. Press play. The script on the right is spoken. The left pane shows the real protocol page.",
        "This is a teaching walk-through of a theranostic alpha-miniprotein protocol. It is not a substitute for the signed site protocol, the investigator brochure, or I R B correspondence. Do not dose or image from this module.",
        "Work page by page. One hundred eighteen protocol pages, plus this intro. After the last page, take the module quiz — B 7-H 3 versus P S M A, copper-64 PET gate, 6 megabecquerel start, and the 4-week D L T window."
      ],
      "chips": [
        "P02",
        "118 pages",
        "Web speech",
        "Protocol page on screen",
        "Ac-225 + Cu-64"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a001.jpg",
      "cap": "P02 cover — BActinium-2 [225Ac]Ac-AKY-2519 B7-H3, Aktis",
      "pearls": [
        "P02 is Aktis AKY-2519-02 — same play, pause, speed, atlas, and live-image dock as BET-121 and P1239.",
        "Cu-64 PET ([64Cu]Cu-AKY-2519, 4–6 mCi) is the imaging gate at 90–180 min. Ac-225 is the therapy, 6 MBq Q4W to start.",
        "Teaching copy of a confidential sponsor protocol. Not affiliated with Aktis. Do not image or dose from this module."
      ]
    },
    {
      "title": "Page 1 of 118 · Cover · BActinium-2 · Ac-225 / Cu-64 AKY-2519 · B7-H3",
      "audio": [
        "Protocol Title: BActinium-2: A Phase 1b, 2-part, Multicenter, Open-label Study to Evaluate the Safety and Efficacy of Intravenous Administration of a B 7-H 3 Radiopharmaceutical (actinium-225 A K Y-2519) in Participants with B 7-H 3 Imaging Positive Solid Tumors Protocol Number: A K Y-2519-02 Compounds: actinium-225 A K Y-2519 (B 7-H 3 therapeutic) copper-64 A K Y-2519 (B 7-H 3 imaging) Study Phase: Phase 1b Amendment Number: N/A Protocol Date: Study Sponsor: Aktis Oncology,",
        "Inc. 17 Drydock Avenue, Suite # 17-401 Boston, MA 02210 Regulatory Agency Identifier Number(s): I N D 178062 (therapeutic); I N D 178063 (imaging) Confidentiality Statement This document is a confidential communication of Aktis Oncology.",
        "Acceptance of this document constitutes the agreement by the recipient that no information contained herein will be published or disclosed without written authorization from Aktis Oncology except to the extent necessary to obtain informed consent from those persons to whom the drug may be administered.",
        "Furthermore, the information is only meant for review and compliance by the recipient, their staff, and applicable institutional review committee and regulatory agencies to enable conduct of the study."
      ],
      "chips": [
        "P02",
        "p1/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a001.jpg",
      "cap": "Protocol page 1 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "Aktis BActinium-2: Ac-225 B7-H3 miniprotein in imaging-positive solid tumors.",
        "Companion Cu-64 PET is [64Cu]Cu-AKY-2519. Teaching copy only."
      ]
    },
    {
      "title": "Page 2 of 118 · Sponsor signature · Tiffany Wang · 09 Apr 2026",
      "audio": [
        "SPONSOR SIGNATURE PAGE Sponsor Signatory: This clinical trial will be conducted in compliance with current guidelines on Good Clinical Practice (GCP) and in accordance with local regulatory and legal requirements, including data privacy laws, of each country in which the clinical trial is being conducted.",
        "I have read and understood the contents of this clinical protocol for Study A K Y-2519-02 dated 08 APR 2026 and I agree to meet all obligations of the sponsor as detailed in all applicable regulations and guidelines. In addition, I will inform the Principal Investigator (PI) and all other investigators of all relevant information that becomes available during the conduct of this study. This protocol has been approved by Aktis Oncology.",
        "Tiffany Wang, MD, MBA, MS Executive Director, Clinical Development Date The Sponsor’s Medical Expert name and contact information will be maintained in the Trial Master File (TMF) and in each Investigator’s Study File throughout the course of the clinical trial. \u0002\u0005\u0001\u0006\u0007\b\u0001\u0003\u0002\u0003\u0004"
      ],
      "chips": [
        "P02",
        "p2/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a002.jpg",
      "cap": "Protocol page 2 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 3 of 118 · Investigator agreement",
      "audio": [
        "INVESTIGATOR’S AGREEMENT The A K Y-2519-02 study was designed and will be conducted, recorded, and reported according to the procedures and regulations described in this protocol and shall be adherent to the standards set by International Council for Harmonisation (ICH)/GCP. The signature below constitutes that I agree to the following: I have reviewed the protocol and agree to abide by all provisions set forth therein.",
        "x I agree to comply with the ICH Tripartite Guideline on GCP and applicable national or regional regulations/guidelines. x I agree not to use confidential information contained in the document for any purpose other than for the evaluation or conduct of the clinical investigation without the prior written consent of Aktis Oncology.",
        "x I agree to periodic site monitoring of case report forms and source documents by Aktis Oncology or designee and by appropriate regulatory authorities. x I agree to supply Aktis Oncology with any information regarding ownership interest and financial ties with Aktis Oncology as the Sponsor for the purpose of complying with regulatory requirements. x I agree to provide Aktis Oncology with an updated Curriculum Vitae.",
        "x I agree to ensure that all persons assisting me with the study are adequately informed about the investigational product(s) and other study-related duties and functions as described in the protocol.",
        "x I agree not to implement any changes to the protocol without prior written agreement from Aktis Oncology and approval from the Institutional Review Board (IRB) or Independent Ethics Committee (IEC), except where necessary to eliminate an immediate hazard to the participants, or where permitted by all applicable regulatory requirements (for example, for administrative aspects of the study). Name of Principal Investigator: Investigator Signature: Date:"
      ],
      "chips": [
        "P02",
        "p3/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a003.jpg",
      "cap": "Protocol page 3 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 4 of 118 · Synopsis · Phase 1b two-part design",
      "audio": [
        "1. PROTOCOL SUMMARY 1.1. Synopsis Name of Sponsor: Aktis Oncology, Inc.",
        "Compound: actinium-225 A K Y-2519 (B 7-H 3 therapeutic) copper-64 A K Y-2519 (B 7-H 3 imaging) Study Title: BActinium-2: A Phase 1b, 2-part, Multicenter, Open-label Study to Evaluate the Safety and Efficacy of Intravenous Administration of B 7-H 3 Radiopharmaceutical (actinium-225 A K Y-2519) in Participants with B 7-H 3 Imaging Positive Solid Tumors I N D No.: 178062 (Therapeutic) 178063 (Imaging) Study Number: A K Y-2519-02 Phase: 1b Study Design: Up to 152 participants",
        "will be enrolled in this Phase 1b, 2-part, multicenter, open label study to evaluate the safety, tolerability, dosimetry, and pharmacokinetics (pharmacokinetics) of copper-64 A K Y-2519 and actinium-225 A K Y-2519, as well as the preliminary antitumor activity of actinium-225 A K Y-2519 in participants with B 7-H 3 imaging positive solid tumors. The study will be a two-part study consisting of a dose escalation phase with backfill (Part 1) and a dose expansion phase (Part 2).",
        "Part 1 dose escalation will determine the maximum tolerated (maximum tolerated dose) or maximum administrated dose (maximum administered dose) of actinium-225 A K Y-2519 in up to 81 participants with the following locally advanced or metastatic solid tumors: x non-small cell lung cancer (non-small cell lung cancer) x extensive-stage small cell lung cancer (extensive-stage small cell lung cancer) x metastatic castration-resistant prostate cancer (m C R P C) x head and neck",
        "squamous cell carcinoma (head and neck squamous cell carcinoma) x esophageal squamous cell carcinoma (esophageal squamous cell carcinoma) x colorectal cancer (colorectal cancer) Part 1 is open to participants with copper-64 A K Y-2519 positron emission tomography (PET)/computed tomography (CT) imaging-positive tumors, defined as tumor uptake greater than background in at least one lesion on [64Cu]CuA K Y-2519 PET/CT images at the 90-180 min timepoint (refer to imaging manual",
        "for further detail). Participants with non-small cell lung cancer will be required to have progressed on, or after, prior anti-programmed cell death protein 1/programmed cell death ligand 1 (PD-[L]1) and chemotherapy given either concurrently or separately. All other eligible B 7-H 3 imaging positive tumor types will be required to have received prior therapies known to provide clinical benefit for their tumor type and stage, if eligible and appropriate.",
        "Three dose levels (6 megabecquerels, 9 megabecquerels, and 12 megabecquerels) are planned to be explored during dose escalation, dosing (de)escalation decisions will be based on 3 evaluable participants at a given dose level. No more than one participant with a diagnosis of metastatic-castration resistant prostate cancer (m C R P C) or colorectal cancer (colorectal cancer) may be enrolled at any dose level.",
        "Alternative dose levels may be explored based on tolerability following a review of available data and discussion with the Safety Review Committee (safety review committee). Dose escalation will be guided by a Bayesian Optimal Interval (B O I N) design.",
        "Dose-limiting toxicities (DLTs) will be defined as any predefined adverse event (AE; defined in Table 1) that occurs during the 4-week dose-limiting toxicity observation period following the first dose of actinium-225 A K Y-2519, except those that are clearly and incontrovertibly due to extraneous circumstances (e.g., disease progression or intercurrent illness). A discussion with the Sponsor’s Medical Expert is required before an AE is designated as a dose-limiting toxicity.",
        "Part 1 will also incorporate a backfill strategy to evaluate two dose levels for identification of the recommended expansion dose (recommended expansion dose) to be used in Part 2. The total number of participants allotted for Part 1 (N= up to 81) will include participants enrolled during dose escalation (N ≈ 21) and those being enrolled in two selected backfilled dose levels (up to N=30 at each dose level)."
      ],
      "chips": [
        "P02",
        "p4/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a004.jpg",
      "cap": "Protocol page 4 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "Part 1 BOIN 6 / 9 / 12 MBq, n≤21 + two backfill levels up to 30 each.",
        "PET+ at 90–180 min required. NSCLC after PD-(L)1 and chemo."
      ]
    },
    {
      "title": "Page 5 of 118 · Backfill, RED, Part 2 cohorts, SPECT subset",
      "audio": [
        "During Part 1, participants may be backfilled at two dose levels (Dose Level A and B) to gather further information on the safety and efficacy to determine a dose to be used for dose expansion (Part 2). Two dose levels will be selected for backfilling up to 30 participants at each dose level. The total number of participants per dose level (N=30) includes those participants enrolled during dose escalation at the selected dose levels for backfill.",
        "The backfill dose levels will have been determined safe per B O I N design, show preliminary anti-tumor activity and will be decided on by the Sponsor following review of all available data with the safety review committee. Participants enrolled in the backfill will be required to meet the same enrollment criteria outlined for dose escalation (i.e., copper-64 A K Y-2519 PET/CT positive lesion, prior anti-cancer therapies, etc.).",
        "Each backfill dose level will enroll a minimum of 15 (N greater than or equal to 15) participants with non-small cell lung cancer. The remainder of participants (N less than or equal to 15) will be comprised of the other eligible B 7-H 3 imaging positive tumors listed above. Additionally, no more than 3 participants with m C R P C may be enrolled per dose level during backfill.",
        "Based on data collected in Part 1-including toxicity, efficacy, tolerability, pharmacokinetics and pharmacodynamics-the dose that optimizes the overall risk-benefit profile, namely the recommended expansion dose, may be used to proceed to dose expansion (Part 2) in two cohorts following Part 1: x Cohort 1: up to 31 B 7-H 3 imaging positive non-small cell lung cancer participants x Cohort 2: up to 40 B 7-H 3 imaging positive solid tumors (with the exception of m C R P C)",
        "Cohort 2 will enroll no more than 20 (N less than or equal to 20) participants of a given tumor type and may not enroll any participants with m C R P C. Additionally, the Sponsor reserves the right to select specific non-small cell lung cancer subtypes for enrollment to Cohort 1, as well as the tumor types to be enrolled in Cohort 2 following the review of Part 1 data.",
        "The occurrence of treatment-emergent AEs (TEAEs) as well as the observed clearance of radioactivity from blood and absorbed normal tissue doses predicted by copper-64 A K Y-2519 and actinium-225 A K Y-2519 based dosimetry will be considered in selecting the recommended dose for expansion. In addition to safety, preliminary efficacy data will also be considered.",
        "Participants treated at the recommended expansion dose in Part 1 who meet the eligibility criteria for Cohort 1 or 2 will count toward the target sample size in Part 2 for each respective cohort for assessing the efficacy and safety of actinium-225 A K Y-2519 in the respective indication.",
        "Participants enrolled in Part 2 of the study will be required to have at least one [64Cu]Cu-AKY2519 PET/CT positive lesion at the 90-180 min timepoint and will need to continue to meet the prior anti-cancer therapies requirement set forth in Part 1.",
        "At select sites, approximately 10 evaluable participants will undergo actinium-225 A K Y-2519 SPECT/CT and [64Cu]CuA K Y-2519 PET/CT imaging to support direct actinium-225 A K Y-2519 dosimetry analysis and assess the use of [64Cu]CuA K Y-2519 as a surrogate.",
        "Additionally, the described imaging will be used to understand the variability in predicted absorbed dose to normal tissues across the patient population and to characterize the dose to tumor for future correlation of absorbed dose and treatment response/toxicity. Participants will undergo copper-64 A K Y-2519 PET/CT imaging at three timepoints during screening as described in Table 20.",
        "The selected participants will also undergo direct [225Ac]AcA K Y-2519 SPECT/CT imaging at three timepoints following actinium-225 A K Y-2519 administration on Cycle 1 Day 1 as outlined in Table 20. Depending on the day of actinium-225 A K Y-2519 dosing, actinium-225 A K Y-2519 SPECT/CT may be collected at either the 40-56 hour or 72-96 hour imaging window.",
        "The selected imaging window should align with the copper-64 A K Y-2519 PET/CT imaging window selected during the screening visit. No more than 4 participants, of the 10 undergoing actinium-225 A K Y-2519 SPECT/CT and copper-64 A K Y-2519 PET/CT imaging, may share the same tumor type. All other participants will only be required to undergo copper-64 A K Y-2519 imaging at the 90-180 min timepoint during screening to confirm eligibility.",
        "In addition, serial blood and urine samples will be collected following copper-64 A K Y-2519 administration during screening for determination of copper-64 A K Y-2519 pharmacokinetics (via measured radioactivity). Serial blood and urine samples will be collected for determination of actinium-225 A K Y-2519 pharmacokinetics during Part 1 and Part 2 on Cycle 1 Day 1 followed by sparse sampling on Day 1 of subsequent cycles.",
        "Collection of blood for actinium-225 A K Y-2519 pharmacokinetics in Part 2 may be reduced based on the findings in Part 1. Prior to the administration of the next treatment cycle, participants must meet all criteria for treatment continuation. Treatment may be delayed up to two weeks from the next planned date of actinium-225 A K Y-2519 administration for logistical reasons, to allow recovery from an AE, or at the investigator’s discretion after agreement with the sponsor.",
        "Treatment delays >2 weeks will require approval from the Medical Monitor prior to resuming treatment. Intra-participant dose escalation will not be permitted. In Parts 1 and 2, participants undergoing treatment with actinium-225 A K Y-2519 will receive up to 4 cycles separated by at least 4 weeks. For participants who demonstrate clinical benefit, and are receiving a dose of less than or equal to 9 megabecquerels, an additional 2"
      ],
      "chips": [
        "P02",
        "p5/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a005.jpg",
      "cap": "Protocol page 5 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 6 of 118 · Objectives · Part 1 primary / secondary / exploratory",
      "audio": [
        "cycles may be administered to maintain or further improve participant benefit. Clinical benefit will be defined as demonstration of stable disease or an objective response, or additionally for m C R P C only, sustained PSA response as characterized by continued decline or maintenance of PSA levels at a reduced level under treatment without radiographic progression. Archival tissue will be collected for all participants, if available.",
        "Participants with tumors that are safely accessible to biopsy and show uptake on copper-64 A K Y-2519 PET/CT images will be approached for an optional pre-treatment biopsy. Participants enrolling in the backfill will be required to provide an on-treatment biopsy, at Cycle 2 or later, until on-treatment biopsies are collected from 15 participants.",
        "Participants enrolled in Part 2 expansion cohorts will also be required to provide on-treatment biopsies until a total of 10 are collected per cohort. Tissue collected will be evaluated for B 7-H 3 expression to explore the relationship with imaging findings. Parts 1 and 2 of the study will have a Screening, a Treatment, and a Follow-up Phase.",
        "The Screening Phase starts when the participant has signed the informed consent form and will last up to 28 days from the date of informed consent. The Treatment Phase begins on the day of the first dose of actinium-225 A K Y-2519 treatment and is completed at the End of Treatment (end of treatment) visit. The Follow-Up Phase will begin following the completion of the end of treatment visit and will last up to 5 years or until death, whichever occurs earlier.",
        "Clinical follow-up will occur at scheduled intervals to assess disease response, survival and any AEs of special interest (AESIs). Study Objectives: Primary Objectives (Part 1): x Evaluate the safety and tolerability of actinium-225 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers.",
        "x Determine the maximum tolerated dose (maximum tolerated dose) or maximum administrated dose (maximum administered dose) and recommended expansion dose (recommended expansion dose) of actinium-225 A K Y-2519 Secondary Objectives (Part 1): x Evaluate the safety and tolerability of copper-64 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers. x Characterize the pharmacokinetics of copper-64 A K Y-2519 and actinium-225 A K Y-2519.",
        "x Determine the objective response rate (objective response rate), duration of objective response (duration of response), and progression free-survival (progression-free survival) for participants treated with actinium-225 A K Y-2519, utilizing Response Evaluation Criteria in Solid Tumors (R E C I S T) v1.1, as determined by the Investigator, or Prostate Cancer Working Group 3 (P C W G 3) modified R E C I S T v1.1 for m C R P C, including PSA50 and PSA90 response rates.",
        "x Characterize the population-based dosimetry of actinium-225 A K Y-2519 using copper-64 A K Y-2519 as a surrogate. Exploratory Objectives (Part 1): x Compare copper-64 A K Y-2519 PET/CT dosimetry versus direct actinium-225 A K Y-2519 SPECT/CT dosimetry x Explore the relationship between the actinium-225 A K Y-2519 predicted absorbed tumor dose, using copper-64 A K Y-2519 as a surrogate, and objective response.",
        "x Explore impact of [225Ac]Ac-AKY2519 on tumor transcriptional profiles and immunomodulation in the tumor microenvironment via biopsy prior to Cycle 2 (or any other cycle after that or at end of treatment). x Explore changes in circulating markers of progression and immunomodulation pre- and post-treatments. x Explore changes in urinary biomarkers of acute kidney injury following administration of [225Ac]Ac-AKY2519.",
        "x Explore anti-drug antibodies (anti-drug antibody) generation in serum samples. x Explore the relationship between copper-64 A K Y-2519 tumor uptake (SUVmax/mean)/dose with B 7-H 3 tumor expression. x Assess health-related quality of life."
      ],
      "chips": [
        "P02",
        "p6/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a006.jpg",
      "cap": "Protocol page 6 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 7 of 118 · Part 2 objectives · n and sites",
      "audio": [
        "x Determine the treatment response using a quantitative volumetric assessment on copper-64 A K Y-2519 PET/CT at screening and 12 weeks from Cycle 1 Day 1 for exploratory comparison with R E C I S T v1.1 (or PXWG3 modified R E C I S T v1.1 for m C R P C) assessment.",
        "Primary Objectives (Part 2): x Determine the objective response rate by tumor type to actinium-225 A K Y-2519, utilizing R E C I S T v1.1, as determined by the Investigator, in participants with previously treated locally advanced or metastatic cancers. Secondary Objectives (Part 2): x Determine the duration of response, progression-free survival, and overall survival of each tumor type for participants treated with actinium-225 A K Y-2519.",
        "x Characterize the safety and tolerability of copper-64 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers. x Characterize the safety and tolerability of actinium-225 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers. x Characterize the pharmacokinetics of copper-64 A K Y-2519 and actinium-225 A K Y-2519.",
        "Exploratory Objectives (Part 2): x Explore the relationship between the actinium-225 A K Y-2519 predicted absorbed tumor dose, using copper-64 A K Y-2519 as a surrogate, and objective response x Explore the impact of actinium-225 A K Y-2519 on tumor transcriptional profiles and immunomodulation in the microenvironment via biopsy prior to Cycle 2 (or any other cycle after that or at end of treatment).",
        "x Explore circulating markers of progression and immunomodulation pre- and post-treatments. x Explore changes in urinary biomarkers of acute kidney injury following administration of [225Ac]Ac-AKY2519. x Explore anti-drug antibody generation in serum samples. x Explore the relationship between copper-64 A K Y-2519 tumor uptake (SUVmax/mean)/dose with B 7-H 3 tumor expression. x Assess health-related quality of life.",
        "x Determine the treatment response using a quantitative volumetric assessment on copper-64 A K Y-2519 PET/CT at screening and 12 weeks from Cycle 1 Day 1 for exploratory comparison with R E C I S T v1.1. Participant Population: Participants with B 7-H 3 imaging positive, locally advanced or metastatic cancers who have progressed on standard therapy. Number of Participants: Approximately 152 total Part 1: Up to 81 participants.",
        "Actual enrollment totals will be adjusted based on the number of dose escalation participants treated at the backfill dose levels. -Dose Escalation: up to 21 participants -Backfill: approximately 30 participants per dose level (2 dose levels) Part 2 Dose Expansion: up to 71 participants. Actual enrollment totals will be adjusted based on the number of Part 1 participants treated at the recommended expansion dose who are eligible for the Part 2 expansion cohort.",
        "Cohort 1 (non-small cell lung cancer) : up to 31 Cohort 2 (B 7-H 3 Basket): up to 40 Under the proposed seamless design, the total sample size for the trial-comprising both Part 1 and Part 2-is expected to Number of Sites: Approximately 20-25"
      ],
      "chips": [
        "P02",
        "p7/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a007.jpg",
      "cap": "Protocol page 7 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 8 of 118 · Dose schema 6 / 9 / 12 MBq · inclusion 1–8",
      "audio": [
        "be 21+ (60-12) + (71-15-6) = 119 participants. This calculation assumes that 12 participants from the dose-escalation phase will be rolled over into the backfill cohorts in Part 1, and 21 participants treated at the recommended expansion dose in Part 1 will be rolled over into the Part 2 cohort expansion (15 for Cohort 1 and 6 for Cohort 2). Dose Levels: Up to three planned dose levels will be evaluated.",
        "Intermediate doses may be investigated if higher doses are not tolerated. Route of Administration: Bolus Intravenous Injection Duration of Treatment: Up to 4 cycles (~ 4 months) of actinium-225 A K Y-2519. An additional 2 cycles (~2 months) may be added for participants dosing at less than or equal to 9 megabecquerels who are deriving clinical benefit.",
        "Period of Evaluation: Evaluation will begin with the first dose of the actinium-225 A K Y-2519 therapeutic and continue through 5 years of long-term follow-up. Criteria for Inclusion: Participants must meet the following criteria to be eligible for the study: 1. Age greater than or equal to 18 years 2. Radiologic confirmation of disease on standard of care imaging (CT, MRI or PET/CT) with at least one measurable tumor lesion per R E C I S T v1.1.",
        "Participants with m C R P C are not required to have measurable disease per R E C I S T v1.1. 3. Must have uptake greater than background in one or more lesions on the copper-64 A K Y-2519 PET/CT images at the 90-180 min timepoint 4. Easter Cooperative Oncology Group (E C O G) Performance Status 0 to 1 5.",
        "Adequate end-organ function: x Bone Marrow: hemoglobin (Hb) greater than or equal to 9g/dL, absolute neutrophil count (ANC) greater than or equal to 1.5x109/L, platelets greater than or equal to 100 x 109/L; without transfusion or injection of hematopoietic factors such as granulocyte colonystimulating factor (GCSF) in the last 7 days x Renal: estimated glomerular filtration rate (E G F R) greater than or equal to 60 mL/min/1.73 m2 using institutional standard calculation x",
        "Liver: aspartate aminotransferase (AST)/alanine aminotransferase (ALT) less than or equal to 3x ULN; less than or equal to 5x ULN in the presence of liver metastasis, total bilirubin less than or equal to 1.5x ULN; <3x ULN in known Gilbert’s disease 6. Ability to give informed consent and comply with study requirements including imaging 7.",
        "Participants with history of brain metastases must be neurologically stable, asymptomatic and not have received corticosteroids for the purpose of maintaining neurological integrity for greater than or equal to 2 weeks prior to initiating study treatment. Participants with confirmed leptomeningeal metastasis, brainstem metastasis, or spinal cord compression may not enroll. 8.",
        "Participants with a prior history of additional malignancy unrelated to enrollment in this study who have been disease-free for more than 1 year are eligible. If the risk of metastasis and death are negligible, participant is eligible regardless of time since diagnosis"
      ],
      "chips": [
        "P02",
        "p8/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a008.jpg",
      "cap": "Protocol page 8 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "Start 6 MBq IV bolus. Extra 2 cycles only if ≤9 MBq and clinical benefit.",
        "eGFR ≥60. Measurable disease except mCRPC. ECOG 0–1."
      ]
    },
    {
      "title": "Page 9 of 118 · Contraception · NSCLC / other / mCRPC inclusion",
      "audio": [
        "9. Participants must have documented disease progression on, or after the most recent prior line of therapy 10.",
        "Contraception: Females must be either post-menopausal, permanently sterile (i.e., total hysterectomy or bilateral oophorectomy), or be utilizing highly effective contraception throughout treatment and for the 6 months following the last treatment administration x Post-menopausal is defined as one of the following: at least 60 years of age, medically confirmed ovarian failure, or <60 years old with cessation of menses for at least 12 consecutive months (without alternative",
        "pathological or physiological cause such as chemotherapy or hormonally-induced amenorrhea) and serum levels of follicle stimulating hormone (FSH) within the reference range for post-menopausal females x Highly effective contraception is defined as a-e, provided it has been used (or was performed if a procedure) for an adequate period of time to ensure effectiveness, in addition to the barrier method described below: (a) Combined (estrogen and progestogen containing) hormonal",
        "contraception (oral, intravaginal, transdermal) associated with inhibition of ovulation (b) Progestogen-only hormonal contraception associated with inhibition of ovulation (oral, injectable, implantable, intrauterine device, intrauterine hormone-releasing system) (c) Bilateral tubal occlusion (d) Male sterilization with confirmed absence of sperm in the post-vasectomy ejaculate (e) Sexual abstinence For this study, sexual abstinence is considered a highly effective method of",
        "birth control only if refraining completely from heterosexual intercourse during the entire period of risk (i.e., during study treatment, including during temporary breaks from treatment, and for at least 6 months following actinium-225 A K Y-2519 treatment or for 3 months after copper-64 A K Y-2519 imaging alone).",
        "In addition to one of the options described in a - d, a barrier method must be also used by participants and/or their partners (i.e., condom without spermicidal foam/gel/cream/suppository or fat or oil-containing lubricants) throughout treatment and for the 6 months following the last treatment administration.",
        "Non-sterilized male participants should avoid fathering a child via true abstinence (no heterosexual intercourse during treatment and for 6 months following last treatment administration) or use of a condom. Female partners should be either post-menopausal or utilizing highly effective contraception including a barrier method as described above through treatment and for the 6 months following the last treatment administration.",
        "Additional Inclusion Criteria for Parts 1 and 2: 11. For non-small cell lung cancer participants: a. Histologic or cytologic confirmation of locally advanced or metastatic non-small cell lung cancer b. Progressed on, or after prior anti-P D L 1 and chemotherapy given concurrently or separately, or are ineligible for standard of care treatment 12. For other B 7-H 3 imaging positive solid tumors: a.",
        "Histologic or cytologic confirmation of locally advanced or metastatic extensive-stage small cell lung cancer, head and neck squamous cell carcinoma, esophageal squamous cell carcinoma or colorectal cancer b. Participants must have received prior therapies known to provide clinical benefit for their tumor type and stage, if eligible and appropriate 13.For m C R P C only: a. Histologic or cytologic confirmation of metastatic prostatic adenocarcinoma b.",
        "Participants must have received prior therapies known to provide clinical benefit for their tumor type and stage, if eligible and appropriate c. Two consecutive increases in assessed PSA levels during or after the most recent systemic therapy with a minimum final PSA value of 2 ng/mL d. Castrate levels of serum testosterone (<50 ng/dL) Criteria for Exclusion: Participants who meet any of the following criteria will be excluded from the study:"
      ],
      "chips": [
        "P02",
        "p9/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a009.jpg",
      "cap": "Protocol page 9 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 10 of 118 · Exclusion · prior RLT and B7-H3 · DLT intro",
      "audio": [
        "1. Any investigational agent administered within 28 days prior to actinium-225 A K Y-2519 initiation or 5 half-lives, whichever is earlier 2. Known hypersensitivity to copper-64 A K Y-2519 or actinium-225 A K Y-2519 or formulation components 3.",
        "Cytotoxic chemotherapy, targeted therapy, biologic agents for oncologic treatment, immunotherapy, or external beam-radiotherapy delivered within the 28 days prior or 5 half-lives, whichever is earlier, to actinium-225 A K Y-2519 initiation. Palliative radiation must have been completed greater than or equal to 2 weeks prior to treatment initiation. 4. Treatment with a prior radioligand therapy 5. Prior treatment with a B 7-H 3 targeted therapy 6.",
        "Clinical presentation of metastatic disease with a high likelihood of rapid functional or physical decline in the 3 months following enrollment (e.g., leptomeningeal disease, peritoneal carcinomatosis, symptomatic brain metastasis requiring urgent treatment) per judgement of the Investigator. Clinical scenarios in which prognosis is unclear should be discussed with the Medical Monitor 7.",
        "Participants with impaired cardiac function or clinically significant cardiac disease including: a. Baseline-corrected mean QT level using Fridericia formula (QTcF) >470 ms or congenital QT syndrome. For participants with known bundle-branch blocks, use the QTcR equation b. Severe/unstable angina, New York Heart Association (NYHA) classification 4 congestive heart failure (CHF) 8.",
        "Concurrent serious medical conditions, including, but not limited to, known and uncontrolled infection, active hepatitis B or C, or other significant co-morbid conditions that would impair study participation or impact the assessment of treatment related toxicity. In participants with a history of hepatitis B virus (HBV), hepatitis B core antibody (HBcAb) testing is required and if positive, HBV DNA testing will be performed, and if positive, the participant will be excluded.",
        "Participants with a history of hepatitis C virus (HCV) infection should have completed curative anti-HCV treatment and have HCV viral load below the limit of quantification. Participants with a history of human immunodeficiency virus (HIV) infection should have CD4+ T-cell (CD4+) counts greater than or equal to 350 cells/μL 9.",
        "Pregnancy or lactating/breastfeeding Main Criteria for Evaluation and Analyses: Safety copper-64 A K Y-2519 Safety will be assessed through the evaluation of clinical AEs, physical examination reports, vitals, and safety labs.",
        "TEAEs will be defined as AEs that result in the worsening of a previous ongoing condition, or the emergence of a new AE with onset on or after the first administration of copper-64 A K Y-2519 up to 6 days after the date of the initial dose of copper-64 A K Y-2519 or until the first dose of actinium-225 A K Y-2519, if earlier. Safety will be assessed through the evaluation of clinical AEs, including DLTs (Table 1), physical examination reports, vitals, and safety labs.",
        "TEAEs will be defined as AEs that result in the worsening of a previous ongoing condition, or the emergence of a new AE with an onset on or after the first administration of actinium-225 A K Y-2519 up to and including 30 days after the final actinium-225 A K Y-2519 treatment administration. TEAEs will be summarized by indication, level of administered activity and preferred term.",
        "DLTs DLTs will be defined as any predefined T E A E (Table 1) that occurs during the 4-week dose-limiting toxicity observation period following the first dose of actinium-225 A K Y-2519, except those that are clearly and incontrovertibly due to extraneous circumstances (e.g., disease progression or intercurrent illness). Table 1: Dose-Limiting Toxicities Adverse Event Any of the following:"
      ],
      "chips": [
        "P02",
        "p10/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a010.jpg",
      "cap": "Protocol page 10 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 11 of 118 · Table 1 DLT · Cu-64 PK times",
      "audio": [
        "Hematologic Grade 4 neutropenia or thrombocytopenia for more than 7 days Grade 3 or higher thrombocytopenia with clinically significant bleeding (clinically significant as determined per the investigator's clinical judgment) Febrile neutropenia of any grade Non-hematologic adverse events Any Grade 3 or higher with exception of:  Grade 3 nausea/vomiting or diarrhea for less than 72 hours with adequate antiemetic and other supportive care  Grade 3 fatigue for less than 1",
        "week  Grade 3 or higher electrolyte abnormality that lasts up to 72 hours, is not clinically complicated, and resolves spontaneously or responds to conventional medical interventions  Grade 3 or higher amylase or lipase that is not associated with symptoms or clinical manifestations of pancreatitis.",
        "Hy's law cases Others Any toxicity that results in a >14-day treatment delay from the next scheduled date of administration or permanent treatment discontinuation Any death not clearly due to the disease progression or extraneous causes Pharmacokinetics: Blood and urine samples will be obtained for assessment of copper-64 A K Y-2519 pharmacokinetics during Part 1 (Table 2) and actinium-225 A K Y-2519 pharmacokinetics during Part 1 and Part 2 (Table 3).",
        "Collection of blood for actinium-225 A K Y-2519 pharmacokinetics in Part 2 may be reduced based on the findings in Part 1. Participants will be instructed to void and collect the pre-dose urine sample within the 30 minutes prior to treatment administration. Day 1 blood and urine samples of each cycle may be collected up to Cycle 6 for those participants demonstrating clinical benefit who are dosing at less than or equal to 9 megabecquerels.",
        "Table 2: copper-64 A K Y-2519 Blood and Urine pharmacokinetics Collection Times Study Period Part 1 Dose Escalation and Backfill Blood Urine Screening Pre-dose 5-15 min 1 hr ( plus or minus 15 min) 2 hr ( plus or minus 15 min) 4 hr ( plus or minus 30 min) 6 hr ( plus or minus 30 min) 8 hr ( plus or minus 30 min) Pre-dose 0-2 hr 2-4 hr 4-6 hr 6-8 hr hr = hour(s), min = minute(s) Table 3: actinium-225 A K Y-2519 Blood and Urine pharmacokinetics Collection Times Study Period",
        "Part 1 Dose Escalation and Backfill Part 2 Dose Expansion Blood Urine Blood Urine"
      ],
      "chips": [
        "P02",
        "p11/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a011.jpg",
      "cap": "Protocol page 11 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "Heme DLT: G4 ANC or platelets >7 days; ≥G3 TCP with bleed; febrile neutropenia.",
        "4-week DLT window after first Ac-225. CTCAE v6."
      ]
    },
    {
      "title": "Page 12 of 118 · Ac-225 PK · dosimetry 4–6 mCi Cu-64",
      "audio": [
        "Cycle 1 Day 1 Pre-dose 5-15 min 1 hr ( plus or minus 15 min) 2 hr ( plus or minus 15 min) 4 hr ( plus or minus 30 min) 6 hr ( plus or minus 30 min) 8 hr ( plus or minus 30 min) Pre-dose 0-2 hr 2-4 hr 4-6 hr 6-8 hr Pre-dose 5-15 min 1 hr ( plus or minus 15 min) 2 hr ( plus or minus 15 min) 4 hr ( plus or minus 30 min) 6 hr ( plus or minus 30 min) 8 hr ( plus or minus 30 min) Pre-dose 0-2 hr 2-4 hr 4-6 hr 6-8 hr Cycles 2-4* Day 1 5-15 min 2 hr ( plus or minus 15 min) 5-15 min",
        "2 hr ( plus or minus 15 min) *Up to Cycle 6 for those demonstrating clinical benefit and dosing at less than or equal to 9 megabecquerels; hr = hour(s), min = minute(s) Dosimetry: At select sites, approximately 10 evaluable participants will undergo actinium-225 A K Y-2519 SPECT/CT and [64Cu]CuA K Y-2519 PET/CT imaging to support direct actinium-225 A K Y-2519 dosimetry analysis and assess the use of copper-64 A K Y-2519 as a surrogate.",
        "Following a 148-222 megabecquerels (4-6 millicuries) administration of copper-64 A K Y-2519, participants will undergo static whole body (skull vertex to mid-thigh) copper-64 A K Y-2519 PET/CT imaging at three timepoints during screening as described in Table 20. The selected participants will also undergo direct [225Ac]AcA K Y-2519 SPECT/CT imaging at three timepoints following actinium-225 A K Y-2519 SPECT/CT administration on Cycle 1 Day 1 as outlined in Table 20.",
        "Future scans for a participant may be interrupted if either of the initial 2 scans are unevaluable due to dosing or administration issues (e.g., significant extravasation). Dosimetry analysis of the participants will be conducted utilizing FDA cleared dosimetry software for dose estimation. Normal tissue and tumor ROIs will be identified and estimated cumulative absorbed dose (Gy) by organ will be determined for each participant.",
        "All other participants will undergo copper-64 A K Y-2519 PET/CT imaging at the 90-180 min timepoint during screening to confirm eligibility. copper-64 A K Y-2519 Characterization: copper-64 A K Y-2519 imaging is intended as a tool to select participants who may benefit from treatment with actinium-225 A K Y-2519. To further characterize copper-64 A K Y-2519 as a participant selection tool, copper-64 A K Y-2519 images, as well as tumor tissue, will be collected.",
        "Archival tissue will be obtained when available, to characterize B 7-H 3 protein expression, tumor transcriptional profiles and immune status prior to treatment with actinium-225 A K Y-2519. Participants with tumors that are accessible to biopsy and show uptake on copper-64 A K Y-2519 PET/CT images will be approached for an optional fresh pretreatment biopsy.",
        "The participants providing on-treatment biopsies will have the biopsies collected prior to dosing on Cycle 2 Day 1, or any other cycle after that. Paired fresh pretreatment and on-treatment biopsies will be utilized to characterize B 7-H 3 expression and changes to the tumor transcriptome and tumor microenvironments.",
        "Any lesions undergoing biopsy will have the SUVmax/mean of that lesion recorded on the 90-180 min copper-64 A K Y-2519 PET/CT images to evaluate the relationship with B 7-H 3 expression. In addition, the biopsied region of interest will be identified on additional images obtained for dosimetry. FDA cleared dosimetry software will be utilized to estimate cumulative absorbed dose (Gy) for each tumor and the relationship between absorbed dose and response will be evaluated.",
        "Treatment Efficacy: Participants will undergo clinical staging for assessment of tumor response utilizing the same imaging modality as at baseline (contrast-enhanced CT and Tc-99m bone scan [m C R P C only]). Imaging will be completed every 8 weeks ( plus or minus 1 week) throughout the duration of the study, including the follow-up period. Scan intervals should remain every 8"
      ],
      "chips": [
        "P02",
        "p12/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a012.jpg",
      "cap": "Protocol page 12 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 13 of 118 · BOIN Table 4 · BOP2 start",
      "audio": [
        "weeks ( plus or minus 1 week) regardless of dose interruptions. Scans may be performed earlier if clinically indicated. Tumor response will be assessed using R E C I S T v1.1 (Appendix 3) or P C W G 3 modified R E C I S T v1.1 (m C R P C only; Appendix 4). Participants exhibiting a complete or partial response will require a confirmation scan at least 4 weeks from the original scan that showed a response.",
        "Participant management will be dictated by Investigator assessment of response. Statistical Considerations: Part 1 Dose Escalation: Dose escalation will be guided by a B O I N design with the target dose-limiting toxicity rate of 25%. The 3 potential dose levels will evaluate administration of 6 megabecquerels, 9 megabecquerels and 12 megabecquerels of actinium-225 A K Y-2519.",
        "If the starting dose of 6 megabecquerels is not tolerated, a lower dose level (DL -1) may be explored at 4 megabecquerels. Should a dose of 9 megabecquerels be deemed intolerable, an intermediate dose of 7.5 megabecquerels will be explored and should 12 megabecquerels be found to be intolerable then a 10.5 megabecquerels intermediate dose will be explored.",
        "Dose intolerability will be determined based on the totality of safety data, including-but not limited to-dose-limiting toxicity, non-dose-limiting toxicity toxicity, and dose disruptions. The cohort size for dose escalation is three evaluable participants (N=3), no more than one of which may be m C R P C or colorectal cancer. Dosing will begin at dose level 1 (6 megabecquerels).",
        "Given this setup, the B O I N design will escalate the dose if the observed dose-limiting toxicity rate at the current dose is less than or equal to 0.197 and de-escalate if it exceeds >0.298. The corresponding decision table is shown in Table 4.",
        "During Part 1, participants may be backfilled at two dose levels (Dose Level A and B) to gather further information on the safety and efficacy of a dose in a given indication and to support the identification of the recommended expansion dose.",
        "Up to 30 participants will be enrolled at the selected dose levels, at least 15 of which must be non-small cell lung cancer participants while the remaining participants may be small cell lung cancer, head and neck squamous cell carcinoma, esophageal squamous cell carcinoma, colorectal cancer or m C R P C. No more than 3 m C R P C participants may enroll in a backfill cohort.",
        "The total number of participants per dose level (N=30) includes those participants enrolled during dose escalation. Backfilling will be guided by the rule of BF-B O I N design proposed by Zhao et al. (2024) to ensure patient safety. The estimated sample size for Part 1 dose escalation, including backfill participants, is up to 81.",
        "Part 2 dose expansion may commence once there is sufficient evidence to support dose selection, with at least 15 participants treated at each backfill dose.",
        "Table 4: Dose Escalation/De-Escalation Rules for the B O I N Design The number of evaluable participants treated at current dose Decision Escalate if # of dose-limiting toxicity less than or equal to Stay if # of dose-limiting toxicity = 1* NA 3-4 De-escalate if # of dose-limiting toxicity greater than or equal to Eliminate if # of dose-limiting toxicity greater than or equal to Note.",
        "“# of dose-limiting toxicity” is the number of participants with at least 1 dose-limiting toxicity. “*” indicates the modification of the decision from “deescalate” to “stay”, aligning with common practice when observing 1 dose-limiting toxicity out of 3 participants.",
        "Part 2 Dose Expansion: Based on data collected from Part 1, including toxicity, efficacy, tolerability, pharmacokinetics and pharmacodynamics, the dose that provides the optimal overall risk-benefit profile may be selected as the recommended expansion dose for dose expansion.",
        "Up to two cohorts may be explored during dose expansion; Cohort 1 will enroll up to 31 non-small cell lung cancer participants and Cohort 2 will enroll up to 40 B 7-H 3 imaging positive solid tumors (previously listed), with the exception of m C R P C. The decision to proceed to dose expansion will be made at the discretion of the Sponsor, considering the totality of clinical safety, and efficacy data.",
        "Participants treated at the recommended expansion dose during Part 1 will be pooled with those in the expansion cohort to assess the efficacy and safety of actinium-225 A K Y-2519 in the respective indication. To prioritize patient benefit, a Bayesian optimal phase 2 (B O P 2) design will be employed to monitor efficacy within each cohort. For Cohort 1, an initial stage of 16 participants will be enrolled.",
        "If 0 or 1 objective responses are observed, the cohort may be terminated for futility following an evaluation of the totality of data; otherwise, an additional 15 participants will be enrolled. If 6 or more responses are observed by the end of the cohort expansion, the treatment will be considered promising for Cohort 1. For Cohort 2, an initial stage of 20 participants will be enrolled. If 0 or 1 objective responses"
      ],
      "chips": [
        "P02",
        "p13/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a013.jpg",
      "cap": "Protocol page 13 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 14 of 118 · BOP2 toxicity stop · efficacy stats",
      "audio": [
        "are observed, the cohort may be terminated for futility following an evaluation of the totality of data; otherwise, an additional 20 participants will be enrolled. If 7 or more responses are observed by the end of the cohort expansion, the treatment will be considered promising for Cohort 2. In addition, B O P 2 will be employed to independently monitor grade 4 or higher treatment-related toxicity in each cohort expansion.",
        "Table 5 below provides the stopping boundaries of the B O P 2 design. If a cohort exceeds the stopping boundary, the accrual for that cohort will be paused for potential early termination after assessment of the totality of safety data. Accrual may continue during the safety interim analysis.",
        "Table 5: Optimized Toxicity Stopping Boundaries Cohort 1 Cohort 2 # evaluable patients Stop if # of patients with Grade 4 or higher TRAE greater than or equal to # evaluable patients Stop if # of patients with Grade 4 or higher TRAE greater than or equal to * *Grade 4 neutropenia or thrombocytopenia lasting less than 7 days will not be included Safety: Toxicities will be graded using the National Cancer Institute Common Terminology Criteria for AEs (C T C A E v6 or most",
        "current). Summary statistics of raw data and change from baseline values for each laboratory parameter will be presented by T E A E group (imaging/treatment) and timepoint. Data will be summarized as appropriate to the variable type (i.e. continuous or categorical variables). Individual participant changes will be identified through shift tables.",
        "Shift tables will be presented for each laboratory parameter with counts and percentages of participants, by T E A E group and timepoint, for shift from baseline, using the normal ranges. In addition, all the data from physical examinations, 12-lead ECGs and vital signs will also be descriptively summarized. Analyses of safety outcomes will be conducted using the safety population.",
        "The Safety Populations (copper-64 A K Y-2519 and actinium-225 A K Y-2519) will be defined as all participants receiving at least one dose of the imaging and/or therapeutic agent. AEs will be coded using the most recent version of MedDRA. TEAEs will be summarized by treatment group, System Organ Class, and preferred term. Efficacy: Efficacy outcome analyses will be conducted using the Treatment Efficacy Population.",
        "The Treatment Efficacy Population will be defined as any participant who receives at least one dose of actinium-225 A K Y-2519 and has at least 1 post-baseline tumor assessment, clinical progression or death before their first post-baseline scan. Evaluation of tumor response will continue until the earliest of the following: disease progression, withdrawal of consent, death, loss to follow-up or initiation of subsequent anticancer therapy.",
        "Overall timepoint response will be determined using R E C I S T v1.1 (Appendix 3) or P C W G 3 modified R E C I S T v1.1 (m C R P C only; Appendix 4) as determined by the Investigator. Participants achieving a complete response (CR) or partial response (PR) that is confirmed at the subsequent timepoint will be determined to have an objective response. Duration of objective response is the time between first objective CR or PR response and disease progression or death.",
        "Progression-free survival (progression-free survival) is defined as the time from initial administration of the study drug until the date of radiologic disease progression or death. Overall survival (overall survival) is defined as the time from initial administration of the study drug to death. Responses and other binary endpoints will be summarized by rates and 95% exact confidence intervals using the Pearson-Clopper method.",
        "progression-free survival, overall survival and duration of objective response will be summarized using the Kaplan-Meir method. Logistic regression and the proportional hazard model will be used to assess the relationship copper-64 A K Y-2519 predicted absorbed tumor dose and objective response and overall survival and progression-free survival, respectively.",
        "pharmacokinetics: Blood and urine copper-64 A K Y-2519 and actinium-225 A K Y-2519 pharmacokinetics (via measured radioactivity) will be listed by participant and summarized by dose level."
      ],
      "chips": [
        "P02",
        "p14/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a014.jpg",
      "cap": "Protocol page 14 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 15 of 118 · Sample size · ROSE backfill · BOP2 power",
      "audio": [
        "Dosimetry: Participants receiving one dose of copper-64 A K Y-2519 or actinium-225 A K Y-2519 and at least one imaging timepoint will be included for consideration of dosimetry analysis. Final criteria for inclusion will be outlined in the dosimetry analysis plan. The total number of participants undergoing imaging may include greater than the planned N=10, if needed.",
        "Summary statistics will be presented for cumulative activity and estimated absorbed dose in bone marrow, whole body, and other organs/tumors of interest. Data will be summarized as appropriate to the variable type (i.e., continuous or categorical variables). copper-64 A K Y-2519 Characterization: Summary statistics will be presented for B 7-H 3 expression in tumor biopsies and SUVmax/mean or dose (Gy) values as well as absorbed dose and tumor response.",
        "The correlation between B 7-H 3 expression and SUVmax/mean values or dose (Gy) and tumor response will be evaluated using Pearson or Spearman correlation. When one variable is represented as a categorical variable, regression model will be used to assess the association between the two variables.",
        "Sample Size Justification: The estimated sample size for Part 1 is up to 81 participants, comprising 21 patients in the dose-escalation phase and up to 60 in the backfill cohorts (Dose Level A and B) for dose optimization. The sample size for dose escalation is not based on a traditional power calculation but rather selected to align with typical dose-finding trials and calibrated using simulation to provide reasonable accuracy in identifying the maximum tolerated dose.",
        "The sample size for backfilling is based on the randomized optimal selection (ROSE) design, providing 66% probability of correctly selecting the recommended expansion dose. This assumes a 0.3 high-dose response rate and a 0.1 margin favoring the higher dose. The estimated sample size for Part 2 is 71 participants, comprising 31 in Cohort A and 40 in Cohort B.",
        "Based on the B O P 2 design described previously, a sample size of 31 for Cohort A provides 80% power to detect an alternative objective response rate of 25% against a null objective response rate of 10%, with a one-sided significant level of 0.1. For Cohort B, a sample size of 40 yields 89.5% power to detect an alternative objective response rate of 25% against a null objective response rate of 10%, controlling the one-sided significant level at 0.1.",
        "The decision to proceed to dose expansion will be made at the discretion of the sponsor, considering the totality of clinical, safety, and efficacy data."
      ],
      "chips": [
        "P02",
        "p15/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a015.jpg",
      "cap": "Protocol page 15 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 16 of 118 · Figure · Part 1 / backfill / Part 2 schema",
      "audio": [
        "Section 1.2 Schema, page 16. This page is a figure. Part 1 dose escalation in B 7-H 3 imaging-positive tumors, n up to 21. Imaging: copper-64 A K Y-2519 PET at 90 to 180 minutes, with optional 20 to 28 hour and 40 to 56 or 72 to 96 hour scans, plus actinium-225 SPECT at 20 to 28 hours, 40 to 56 or 72 to 96 hours, and 140 to 148 hours. Therapy: actinium-225 A K Y-2519 every 4 weeks. Dose level 1 is 6 megabecquerels. Dose level 2 is 9. Dose level 3 is 12.",
        "Intermediate 7.5 if 9 is not tolerated. Intermediate 10.5 if 12 is not tolerated. Dose minus 1 is 4 megabecquerels. Cycle 1 has a 4-week dose-limiting toxicity window. Then cycles 2, 3, and 4, each 4 weeks apart. Cycles 5 and 6 only if the patient is deriving benefit and the dose is 9 megabecquerels or less. Part 1 backfill, n up to 60, same imaging then therapy at two selected dose levels, up to 30 each, including people rolled over from escalation.",
        "Part 2 dose expansion at the recommended expansion dose. Cohort 1, non-small cell lung cancer, n equals 31. Cohort 2, other B 7-H 3 imaging-positive solid tumors, n equals 40. No m C R P C in Cohort 2, and no more than 20 of any one tumor type. About 10 patients at select sites get both the copper-64 PET series and the actinium-225 SPECT series for dosimetry."
      ],
      "chips": [
        "P02",
        "p16/118",
        "B7-H3 Ac-225"
      ],
      "visual": "schema",
      "image": "assets/protocol/aky/a016.jpg",
      "cap": "Protocol page 16 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "Schema: Cu-64 PET then Ac-225 Q4W. Part 2 = 31 NSCLC + 40 basket (no mCRPC).",
        "n≈10 get paired PET/SPECT dosimetry. Photograph is the source of truth."
      ]
    },
    {
      "title": "Page 17 of 118 · Table 7 · SoA Part 1 dose escalation and backfill",
      "audio": [
        "1.3.",
        "Schedule of Events (“SoE”) Table 7: Schedule of Activities (Part 1: Dose Escalation and Backfill) Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7 days) 5-year LTFU3 Every 3 months ( plus or minus 14 days) for 2 years then every 6 ( plus or minus 1) months Protocol Reference Section Cycle Week: Week 1 Week 2 Week 3 Week 4 Week 1 Week 3 Cycle Day: Day -28 to Day -1 Day 1 Day 8 ( plus or minus 1 day) Day 15 ( plus or minus 1 day) Day 22 (",
        "plus or minus 1 day) Day 1 ( plus or minus 1 day) Day 15 ( plus or minus 2 day) Study Procedures Informed Consent X Section 12.1.3 Inclusion/ Exclusion Criteria X Section 7 Demographics X Section 10.1 Medical History X Prior/ Concomitant medication review X X---------------------------------------------------------------------------------------------------------------X4 AE monitoring5 X5",
        "X---------------------------------------------------------------------------------------------------------------X5 Section 10.3 Height X Section 10.2.2 Weight X X X X E C O G X X X X Section 10.2.3 Physical Exam X X X6 X6 Section 10.2.1 Vital Signs X7 X7 X7 X Section 10.2.2 12 Lead ECG8 X X X (Cycle 2 only) X Section 10.2.4 Serum Pregnancy Test9 (in WOCBP) X X X X Section 10.2.5 Section 12.2 FSH9 (postmenopausal) X PRO Questionnaires10 X X (Cycle 4 only) X10 Section 10.9",
        "Survival Status X-----------------------------------------------------------------------------------------------------------X Section 6.2 Treatment Administration administration11 X X Section 8.7 Local Laboratory Analysis 12 Hematology X 13 X X X X X X X"
      ],
      "chips": [
        "P02",
        "p17/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a017.jpg",
      "cap": "Protocol page 17 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 18 of 118 · Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7…",
      "audio": [
        "Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7 days) 5-year LTFU3 Every 3 months ( plus or minus 14 days) for 2 years then every 6 ( plus or minus 1) months Protocol Reference Section Cycle Week: Week 1 Week 2 Week 3 Week 4 Week 1 Week 3 Cycle Day: Day -28 to Day -1 Day 1 Day 8 ( plus or minus 1 day) Day 15 ( plus or minus 1 day) Day 22 ( plus or minus 1 day) Day 1 ( plus or minus 1 day) Day 15 ( plus or minus 2 day) Chemistry X13 X X X X",
        "X X X Section 10.2.5 Section 12.2 Urinalysis X13 X X X X X X X Coagulation X13 PSA Levels (m C R P C only)14 X X X X Section 12.2 Serum Testosterone (m C R P C only)14 X Section 12.2 Central Lab Specimen Collection Tissue Collection (Archival plus or minus fresh biopsy)15 X Section 10.7 Section 10.8 Blood Collection (pharmacokinetics)16 X X X Section 10.4 Urine Collection (pharmacokinetics)17 X X X ctDNA18 X X X X X X Section 10.8 Cytokine Profiling18 X X X X X X Peripheral",
        "Immunophenotyping18 X X X X X X Anti-Drug Antibodies18 X X X X X X TCR Seq18 X X X X X X Urinary biomarkers19 X X X X X On-treatment biopsy20 X (Cycle 2 preferred) X Imaging copper-64 A K Y-2519 PET/CT11,21 X X21 (Week 12) Section 10.5 actinium-225 A K Y-2519 SPECT/CT22 SELECTED SITES ONLY (See Section 10.5) X Section 10.5 Tumor Assessment CT (contrastenhanced)/Tc-99m Bone Scan (m C R P C only)23 X Contrast-enhanced CT of the chest, abdomen, and pelvis should occur every 8",
        "weeks ( plus or minus 1 week) throughout the duration of the study, including the follow-up period, and without regard to dose interruptions. CT may be completed on the same day as actinium-225 A K Y-2519 administration if imaging occurs in close proximity to a X Section 10.6"
      ],
      "chips": [
        "P02",
        "p18/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a018.jpg",
      "cap": "Protocol page 18 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 19 of 118 · Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7…",
      "audio": [
        "Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7 days) 5-year LTFU3 Every 3 months ( plus or minus 14 days) for 2 years then every 6 ( plus or minus 1) months Protocol Reference Section Cycle Week: Week 1 Week 2 Week 3 Week 4 Week 1 Week 3 Cycle Day: Day -28 to Day -1 Day 1 Day 8 ( plus or minus 1 day) Day 15 ( plus or minus 1 day) Day 22 ( plus or minus 1 day) Day 1 ( plus or minus 1 day) Day 15 ( plus or minus 2 day) treatment cycle.",
        "For m C R P C participants, a Tc-99m bone scan should also be completed on the same interval as the CT.",
        "Abbreviations: anti-drug antibody: anti-drug antibody; AE: adverse events; A E S I: adverse event of special interest; CT: computed tomography; CT-DNA: circulating tumor DNA; end of treatment: end of treatment; ECG: electrocardiogram; E C O G: Eastern Cooperative Oncology Group performance status; FSH: follicle-stimulating hormone; informed consent form: informed consent form; IV: intravenous; LTFU: long term follow up; MRI: magnetic resonance imaging; PET: positron emission",
        "tomography; pharmacokinetics: pharmacokinetic; PRO: patient reported outcomes; PSA: prostate specific antigen; SAE: serious adverse event; WOCBP: women of child-bearing potential 1 An additional 2 cycles (total of 6) may be administered to participants dosing at less than or equal to 9 megabecquerels and who are demonstrating clinical benefit. 2 End of treatment (end of treatment) is defined as the date of last administration of actinium-225 A K Y-2519.",
        "end of treatment visit should be conducted 30 plus or minus 7 days after the end of treatment date, or when the decision is made to permanently discontinue treatment ( plus or minus 5 days) if the decision is made after the 30-day period. 3 LTFU: Participants who discontinue or complete the study treatment will be followed for 5 years or until death, whichever is earlier.",
        "Tumor assessment by contrast-enhanced CT (and Tc-99m bone scan for m C R P C only) will be done every 8 weeks ( plus or minus 1 week) until disease progression or initiation of subsequent systemic anticancer therapy, whichever is earlier. LTFU visits will be conducted every 3 months ( plus or minus 14 days) in the first 2 years and then every 6 months ( plus or minus 1 month) or until the start of a new systemic anti-cancer therapy.",
        "LTFU visits may be conducted via telephone and contrast-enhanced CT (as well as Tc-99m bone scan for m C R P C only) may be performed locally to aid with scheduling. Survival follow up with A E S I monitoring will continue for 5 years or until death, withdrawal of consent, loss to follow up, or study closure, whichever is earlier.",
        "Sponsor may request survival status outside of the scheduled visits (e.g., for survival sweeps), which can be confirmed by telephone or other types of contact with the participant or participant’s caregiver. 4 Only information regarding the administration of a new anti-cancer agent should be collected during the LTFU period. All SAEs will be collected from the signing of the informed consent form until the end of treatment visit.",
        "All AEs will be collected from the administration of copper-64 A K Y-2519 until the end of treatment visit. Approximately 7 days after copper-64 A K Y-2519 administration, a follow-up visit/telehealth visit will be conducted for AE assessment. Only AESIs will be collected during the LTFU period.",
        "6 An abbreviated physical exam may be performed at Cycle 2 Day 1 and all subsequent visits, with the exception of the end of treatment visit where a full physical exam will be performed 7 Vital signs will be obtained immediately before (within 15 mins prior) and after (within 30 mins post) copper-64 A K Y-2519 administration during screening and at the 12-week copper-64 A K Y-2519 PET/CT, as well as before and after actinium-225 A K Y-2519 administration on Day 1 of every",
        "cycle. 8 Triplicate 12-lead ECGs, in close succession (approximately 5 minutes apart), will be taken with the participants in a supine/semi-recumbent position at screening, before and immediately after administration of actinium-225 A K Y-2519 on Cycle 1 Day 1 and Cycle 2 Day 1, and at end of treatment. ECG should be done before blood collection if occurring on the same day.",
        "Serum pregnancy test will be conducted at screening, within 72 hours before drug administration of all cycles and end of treatment visit for all female participants with child-bearing potential. For postmenopausal females <60 years old, a confirmatory FSH result at screening is required. 10 The questionnaires include: Functional Assessment of Cancer Therapy- General (FACT-G), Brief Pain Inventory-Short Form (BPI-SF), EQ-5D-5L and XeQOLS xerostomia questionnaire.",
        "Questionnaires should be completed at baseline and at the Cycle 4 visit, but prior to Cycle 4 treatment initiation. For participants continuing past 4 cycles, the assessment should also be collected at the end of treatment visit.",
        "11 A saline flush with greater than or equal to 10 mL of normal saline (and visualized blood in tubing in reverse syringe pressure) must be administered to ensure patency of the IV line before administering both actinium-225 A K Y-2519 and copper-64 A K Y-2519. After administration of actinium-225 A K Y-2519 or copper-64 A K Y-2519, a greater than or equal to 10 mL"
      ],
      "chips": [
        "P02",
        "p19/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a019.jpg",
      "cap": "Protocol page 19 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 20 of 118 · saline flush will follow",
      "audio": [
        "saline flush will follow. The time of administration for each investigational agent and flush must be recorded. The total activity administered must be measured (megabecquerels) and recorded. 12 Clinical laboratory results will be conducted within 72 hours before drug administration on Cycles 2-4 (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit) for evaluation of treatment eligibility and continuation.",
        "Results must be available and eligibility confirmed prior to initiation of the Cycle. 13 Clinical safety laboratory assessments will be conducted prior to copper-64 A K Y-2519 administration and repeated within a week of copper-64 A K Y-2519 administration. The results may be used for evaluation of treatment eligibility if obtained within 72 hours before administration of actinium-225 A K Y-2519.",
        "Coagulation assessments may be conducted whenever clinically indicated following the screening assessment. 14 Blood samples to evaluate PSA levels will be collected for m C R P C only. Collection will occur at screening and pre-dose on Cycles 1 to 4 (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit). Serum testosterone levels will be collected for m C R P C only during screening.",
        "15 Archival tissue, if available, will be collected for all participants. Participants with tumors that are accessible to biopsy and show uptake on copper-64 A K Y-2519 PET/CT images will be approached for pre-treatment fresh biopsy. Pre-treatment biopsies are not a requirement for participants to be enrolled.",
        "For participants that agree to a fresh biopsy, the sample can be collected at any time following copper-64 A K Y-2519 PET/CT through 72 hours prior to administration of actinium-225 A K Y-2519. For fresh tumor tissue biopsy, biopsy of target lesions per R E C I S T v1.1 is strongly discouraged. Lesions that have been previously irradiated may be biopsied if uptake is observed on copper-64 A K Y-2519 PET/CT images.",
        "16 Blood samples for copper-64 A K Y-2519 pharmacokinetics will be collected during Screening at the following times: pre-dose, 5-15 minutes, 1 hour ( plus or minus 15 minutes), 2 hours ( plus or minus 15 minutes), 4 hours ( plus or minus 30 minutes), 6 hours ( plus or minus 30 minutes) and 8 hours ( plus or minus 30 minutes) post copper-64 A K Y-2519 administration.",
        "Blood samples for actinium-225 A K Y-2519 pharmacokinetics will be collected during Cycle 1 Day 1 at the following times: pre-dose, 5-15 minutes, 1 hour ( plus or minus 15 minutes), 2 hours ( plus or minus 15 minutes), 4 hours ( plus or minus 30 minutes), 6 hours ( plus or minus 30 minutes) and 8 hours ( plus or minus 30 minutes) post actinium-225 A K Y-2519 administration, and Day 1 of subsequent cycles at 5-15 minutes and 2 hours ( plus or minus 15 minutes) post",
        "actinium-225 A K Y-2519 administration (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit). 17 Participants should be instructed to void and collect the pre-dose urine sample within 30 minutes prior to treatment administration.",
        "Urine samples for copper-64 A K Y-2519 pharmacokinetics will be collected during Screening at the following times: pre-dose, 0-2 hours, 2-4 hours, 4-6 hours and 6-8 hours post copper-64 A K Y-2519 administration.",
        "Urine samples for actinium-225 A K Y-2519 pharmacokinetics will be collected during Cycle 1 Day 1 at the following times: pre-dose, 0-2 hours, 2-4 hours, 4-6 hours and 6-8 hours post actinium-225 A K Y-2519 administration (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit).",
        "18 Blood or serum samples will be collected for all participants at screening and pre-dose on Day 1 and Day 15 of every cycle (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit), and end of treatment. On Day 1 of each cycle, serum samples will be collected before administration of actinium-225 A K Y-2519.",
        "19 Urine samples will be collected at screening, pre-dose on Day 1 and Day 15 of Cycle 1 and Day 1 of Cycles 2-4 (up to Cycle 6 for those with clinical benefit), and end of treatment for evaluation of urinary biomarkers of acute kidney injury following administration of actinium-225 A K Y-2519. On Day 1 of each cycle, urine samples will be collected before administration of actinium-225 A K Y-2519.",
        "20 On-treatment biopsies will be collected for up to 15 participants enrolled into backfill before Cycle 2 (at least 72 hrs before drug administration at cycle 2). On-treatment biopsies may be collected at least 72 hours before drug administration at later cycles or at end of treatment if Cycle 2 sampling is not feasible. 21 All copper-64 A K Y-2519 PET/CT imaging should be completed at least 24 hrs before actinium-225 A K Y-2519 administration.",
        "Approximately 10 evaluable participants will undergo a static whole body (skull vertex to mid-thigh) PET/CT at the timepoints outlined in Section 10.5 during screening. Depending on the day of copper-64 A K Y-2519 dosing, copper-64 A K Y-2519 PET/CT may be collected at either the 40-56 hour or 72-96 hour imaging window. The selected imaging window should also align with the actinium-225 A K Y-2519 SPECT/CT imaging window selected during Cycle 1 Day 1.",
        "All other participants will undergo imaging at the 90-180 min timepoint to confirm eligibility. Participants will undergo copper-64 A K Y-2519 PET/CT at 90-180 min after administration of copper-64 A K Y-2519 at 12 weeks and can be completed at the same visit as the pre-Cycle 4 labs (within 72 hours before next cycle’s drug administration), but must be completed before Cycle 4 Day 1 actinium-225 A K Y-2519 administration."
      ],
      "chips": [
        "P02",
        "p20/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a020.jpg",
      "cap": "Protocol page 20 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 21 of 118 · For selected sites, SPECT/CT imaging of [225Ac]Ac-AKY-2519 will be collected for…",
      "audio": [
        "22 For selected sites, SPECT/CT imaging of actinium-225 A K Y-2519 will be collected for approximately 10 evaluable participants. For participants undergoing posttreatment SPECT/CT imaging, actinium-225 A K Y-2519 should be administered no less than 5 days after [64Cu]Cu-AKY-251 administration in these selected participants. Participants will be imaged at the timepoints outlined in Section 10.5.",
        "Depending on the day of actinium-225 A K Y-2519 dosing, [225Ac]Ac-AKY2519 SPECT/CT may be collected at either the 40-56 hour or 72-96 hour imaging window. The selected imaging window should align with the [64Cu]Cu-AKY2519 PET/CT imaging window selected during the screening visit. 23 Intravenous contrast-enhanced, diagnostic quality CT of the chest, abdomen, and pelvis should be conducted. Oral contrast should be used, at the Investigator’s discretion, where additive.",
        "Non-contrast chest CT plus contrasted MRI of the abdomen/pelvis is allowed as an alternative for participants that are allergic to iodinated contrast. For participants who are allergic to iodinated and gadolinium contrasts, non-contrast CT of chest, non-contrast MRI of the abdomen/pelvis is allowed. Baseline imaging for R E C I S T assessment (and bone scan for m C R P C only) must be completed within 4 weeks of the planned Cycle 1 Day 1.",
        "CT (and bone scan, m C R P C only) must be completed before administration of actinium-225 A K Y-2519 if being conducted on the same day. MRI of the brain should be completed prior to enrollment if clinically indicated."
      ],
      "chips": [
        "P02",
        "p21/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a021.jpg",
      "cap": "Protocol page 21 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 22 of 118 · Table 8 · SoA Part 2 dose expansion",
      "audio": [
        "Table 8: Schedule of Activities (Part 2: Dose Expansion) Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7 days) 5-year LTFU3 Every 3 months ( plus or minus 14 days) for 2 years then every 6 ( plus or minus 1) months Protocol Reference Section Cycle Week: Week 1 Week 3 Week 1 Week 3 Cycle Day: Day -28 to Day -1 Day 1 Day 15 ( plus or minus 1 day) Day 1 ( plus or minus 1 day) Day 15 ( plus or minus 2 day) Study Procedures Informed Consent X",
        "Section 12.1.3 Inclusion/ Exclusion Criteria X Section 7 Demographics X Section 10.1 Medical History X Prior/ Concomitant medication review X X--------------------------------------------------------------------------------------------------X4 AE monitoring5 X X--------------------------------------------------------------------------------------------------X5 Section 10.3 Height X Section 10.2.2 Weight X X X X E C O G X X X X Section 10.2.3 Physical Exam X X X6 X6 Section",
        "10.2.1 Vital Signs X7 X7 X7 X Section 10.2.2 12 Lead ECG8 X X X (Cycle 2 only) X Section 10.2.4 Serum Pregnancy Test9 (in WOCBP) X X X X Section 10.2.5 Section 12.2 FSH9 (postmenopausal) X PRO Questionnaires10 X X (Cycle 4 only) X10 Section 10.9 Survival Status X------------------------------------------------------------------------------------------------------X Section 6.2 Treatment Administration administration11 X X Section 8.7 Local Laboratory Analysis 12 Hematology",
        "X13 X X X X X Section 10.2.5 Section 12.2 Chemistry X13 X X X X X Urinalysis X13 X X X X X"
      ],
      "chips": [
        "P02",
        "p22/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a022.jpg",
      "cap": "Protocol page 22 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 23 of 118 · Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7…",
      "audio": [
        "Study Period: Screening/ Baseline Cycle 1 Cycles 2-41 EOT2 (30 days plus or minus 7 days) 5-year LTFU3 Every 3 months ( plus or minus 14 days) for 2 years then every 6 ( plus or minus 1) months Protocol Reference Section Cycle Week: Week 1 Week 3 Week 1 Week 3 Cycle Day: Day -28 to Day -1 Day 1 Day 15 ( plus or minus 1 day) Day 1 ( plus or minus 1 day) Day 15 ( plus or minus 2 day) Coagulation X13 Central Lab Specimen Collection Tissue Collection (Archival plus or minus",
        "fresh biopsy)14 X Section 10.7 Section 10.8 Blood Collection (pharmacokinetics)15 X X Section 10.4 Urine Collection (pharmacokinetics)16 X X ctDNA17 X X X X X X Section 10.8 Cytokine Profiling17 X X X X X X Peripheral Immunophenotyping17 X X X X X X Anti-Drug Antibodies17 X X X X X X TCR Seq17 X X X X X X Urinary biomarkers18 X X X X X On-treatment biopsy18 X (Cycle 2 preferred) X Imaging copper-64 A K Y-2519 PET/CT 11, 20 X X20 (Week 12) Section 10.5 actinium-225 A K Y-2519",
        "SPECT/CT21 SELECTED SITES ONLY (See Section 10.5) X Section 10.5 Tumor Assessment CT (contrastenhanced)22 X Contrast-enhanced CT of the chest, abdomen, and pelvis should occur every 8 weeks ( plus or minus 1 week) throughout the duration of the study, including the follow-up period, and without regard to dose interruptions. CT may be completed on the same day as actinium-225 A K Y-2519 administration if imaging occurs in close proximity to a treatment cycle.",
        "X Section 10.6 Abbreviations: anti-drug antibody: anti-drug antibody; AE: adverse events; A E S I: adverse event of special interest; CT: computed tomography; ctDNA: circulating tumor DNA; end of treatment: end of treatment; ECG: electrocardiogram; E C O G: Eastern Cooperative Oncology Group performance status; FSH: follicle-stimulating hormone; informed consent form: informed consent form; IV: intravenous; LTFU: long term follow up; PET: positron emission tomography; PRO:",
        "patient reported outcomes; PSA: prostate specific antigen; SAE: serious adverse event; WOCBP: women of child-bearing potential"
      ],
      "chips": [
        "P02",
        "p23/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a023.jpg",
      "cap": "Protocol page 23 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 24 of 118 · An additional 2 cycles (total of 6) may be administered to participants dosing at…",
      "audio": [
        "1 An additional 2 cycles (total of 6) may be administered to participants dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit. 2 End of treatment (end of treatment) is defined as the date of last administration of actinium-225 A K Y-2519.",
        "end of treatment visit should be conducted 30 plus or minus 7 days after the end of treatment date, or when the decision is made to permanently discontinue treatment ( plus or minus 5 days) if the decision is made after the 30-day period. LTFU: Participants who discontinue or complete the study treatment will be followed for 5 years or until death, whichever is earlier.",
        "Tumor assessment by contrast-enhanced CT will be done every 8 weeks ( plus or minus 1 week) until disease progression or initiation of subsequent systemic anticancer therapy, whichever is earlier. LTFU visits will be conducted every 3 months ( plus or minus 14 days) in the first 2 years and then every 6 months ( plus or minus 1 month) or until the start of a new systemic anti-cancer therapy.",
        "LTFU visits may be conducted via telephone and contrast-enhanced CT may be performed locally to aid with scheduling. Survival follow up with A E S I monitoring will continue for 5 years or until death, withdrawal of consent, loss to follow up, or study closure, whichever is earlier.",
        "Sponsor may request survival status outside of the scheduled visits (e.g., for survival sweeps), which can be confirmed by telephone or other types of contact with the participant or participant’s caregiver. 4 Only information regarding the administration of a new anti-cancer agent should be collected during the LTFU period. All SAEs will be collected from the signing of the informed consent form until the end of treatment visit.",
        "All AEs will be collected from the administration of copper-64 A K Y-2519 until the end of treatment visit. Approximately 7 days after copper-64 A K Y-2519 administration, a follow-up visit/telehealth visit will be conducted for AE assessment. Only AESIs will be collected during the LTFU period.",
        "6 An abbreviated physical exam may be performed at Cycle 2 Day 1 and all subsequent visits, with the exception of the end of treatment visit where a full physical exam will be performed. 7 Vital signs will be obtained immediately before (within 15 mins prior) and after (within 30 mins post) copper-64 A K Y-2519 administration during screening as well as before and after actinium-225 A K Y-2519 administration on Day 1 of every cycle.",
        "Triplicate 12-lead ECGs, in close succession (approximately 5 minutes apart), will be taken with the participants in a supine/semi-recumbent position at screening, before and immediately after administration of actinium-225 A K Y-2519 on Cycle 1 Day 1 and Cycle 2 Day 1, and at end of treatment. ECG should be done before blood collection if occurring on the same day.",
        "Serum pregnancy test will be conducted at screening, within 72 hours before all cycles and end of treatment visit for all female participants with child-bearing potential. For postmenopausal females <60 years old, a confirmatory FSH result at screening is required. 10 The questionnaires include: Functional Assessment of Cancer Therapy- General (FACT-G), Brief Pain Inventory-Short Form (BPI-SF), EQ-5D-5L and XeQOLS xerostomia questionnaire.",
        "Questionnaires should be completed at baseline, at the Cycle 4 visit but prior to Cycle 4 treatment initiation. For participants continuing past 4 cycles, the assessment should also be collected at the end of treatment visit.",
        "11 A saline flush with greater than or equal to 10 mL of normal saline (and visualized blood in tubing in reverse syringe pressure) must be administered to ensure patency of the IV line before administering both the actinium-225 A K Y-2519 and copper-64 A K Y-2519. After administration of actinium-225 A K Y-2519 or copper-64 A K Y-2519, a greater than or equal to 10 mL saline flush will follow.",
        "The time of administration for each investigational agent and flush must be recorded. The total activity administered must be measured (megabecquerels) and recorded. 12 Clinical safety laboratory results will be conducted within 72 hours before drug administration on Cycles 2-4 (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit) for evaluation of treatment eligibility and continuation.",
        "Results must be available and eligibility for treatment confirmed prior to initiation of the Cycle. 13 Clinical laboratory assessments will be conducted prior to copper-64 A K Y-2519 administration and repeated within a week of copper-64 A K Y-2519 administration. The results may be used for evaluation of treatment eligibility if obtained within 72 hours before administration of actinium-225 A K Y-2519.",
        "Coagulation assessments may be conducted whenever clinically indicated following the screening assessment. 14 Archival tissue, if available, will be collected for all participants. Participants with tumors that are accessible to biopsy and show uptake on copper-64 A K Y-2519 PET/CT images will be approached for pre-treatment fresh biopsy. Pre-treatment biopsies are not a requirement for participants to be enrolled.",
        "For participants that agree to a fresh biopsy, the sample can be collected at any time following copper-64 A K Y-2519 PET/CT through 72 hours prior to administration of"
      ],
      "chips": [
        "P02",
        "p24/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a024.jpg",
      "cap": "Protocol page 24 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 25 of 118 · [225Ac]Ac-AKY-2519",
      "audio": [
        "actinium-225 A K Y-2519. For fresh tumor tissue biopsy, biopsy of target lesions per R E C I S T v1.1 is strongly discouraged. Lesions that have been previously irradiated may be biopsied if uptake is observed on copper-64 A K Y-2519 PET/CT images.",
        "15 Blood samples for actinium-225 A K Y-2519 pharmacokinetics will be collected during Cycle 1 Day 1 at the following times: pre-dose, 5-15 minutes, 1 hour ( plus or minus 15 minutes), 2 hours ( plus or minus 15 minutes), 4 hours ( plus or minus 30 minutes), 6 hours ( plus or minus 30 minutes) and 8 hours ( plus or minus 30 minutes) post actinium-225 A K Y-2519 administration, and Day 1 of subsequent cycles at 5-15 minutes and 2 hours ( plus or minus 15 minutes) post",
        "actinium-225 A K Y-2519 administration (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit). 16 Participants should be instructed to void and collect the pre-dose urine sample within 30 minutes prior to treatment administration.",
        "Urine samples for actinium-225 A K Y-2519 pharmacokinetics will be collected during Cycle 1 Day 1 at the following times: pre-dose, 0-2 hours, 2-4 hours, 4-6 hours and 6-8 hours post actinium-225 A K Y-2519 administration (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit).",
        "17 Blood or Serum samples will be collected for all participants at screening and pre-dose on Day 1 and Day 15 of every cycle (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit), and end of treatment. On Day 1 of each cycle, serum samples will be collected before administration of actinium-225 A K Y-2519.",
        "18 Urine samples will be collected at screening, pre-dose on Day 1 and Day 15 of Cycle 1 and Day 1 of Cycles 2-4 (up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and displaying clinical benefit) and end of treatment visit for evaluation of urinary biomarkers of acute kidney injury following administration of actinium-225 A K Y-2519. On Day 1 of each cycle, urine samples will be collected before administration of actinium-225 A K Y-2519.",
        "19 On-treatment biopsies will be collected in 10 participants per expansion cohort before Cycle 2 (at least 72 hrs before actinium-225 A K Y-2519 administration on Cycle 2 Day 1). On-treatment biopsies may be collected at least 72 hours before actinium-225 A K Y-2519 administration at later cycles or at end of treatment if Cycle 2 sampling is not feasible.",
        "20 All copper-64 A K Y-2519 PET/CT imaging should be completed at least 24 hrs before actinium-225 A K Y-2519 administration. Approximately 10 evaluable participants in will undergo a static whole body (skull vertex to mid-thigh) PET/CT at the timepoints outlined in Section 10.5 during screening. Depending on the day of copper-64 A K Y-2519 dosing, copper-64 A K Y-2519 PET/CT may be collected at either the 40-56 hour or 72-96 hour imaging window.",
        "The selected imaging window should align with the actinium-225 A K Y-2519 SPECT/CT imaging window selected during Cycle 1 Day 1. All other participants will undergo imaging at the 90-180 min timepoint to confirm eligibility.",
        "Participants will undergo copper-64 A K Y-2519 PET/CT at 90-180 min after administration of copper-64 A K Y-2519 at 12 weeks and can be completed at the same visit as the pre-Cycle 4 labs (within 72 hours before next cycle’s drug administration), but must be completed before Cycle 4 Day 1 actinium-225 A K Y-2519 administration. 21 For selected sites, SPECT/CT imaging of actinium-225 A K Y-2519 will be collected for approximately 10 evaluable participants.",
        "For participants undergoing posttreatment SPECT/CT imaging, actinium-225 A K Y-2519 should be administered no less than 5 days after [64Cu]Cu-AKY-251 administration in these selected participants. Participants will be imaged at the timepoints outlined in Section 10.5. Depending on the day of actinium-225 A K Y-2519 dosing, actinium-225 A K Y-2519 SPECT/CT may be collected at either the 40-56 hour or 72-96 hour imaging window.",
        "The selected imaging window should align with the copper-64 A K Y-2519 PET/CT imaging window selected during the screening visit. 22 Intravenous contrast-enhanced, diagnostic quality CT of the chest, abdomen, and pelvis should be conducted. Oral contrast should be used, at the investigator’s discretion, were additive. Non-contrast chest CT plus contrasted MRI of the abdomen/pelvis is allowed as an alternative for participants that are allergic to iodinated contrast.",
        "For participants who are allergic to iodinated and gadolinium contrasts, non-contrast CT of chest, non-contrast MRI of the abdomen/pelvis is allowed. Baseline imaging for R E C I S T assessment must be completed within 4 weeks of the planned Cycle 1 Day 1. CT must be completed before administration of actinium-225 A K Y-2519 if being conducted on the same day. MRI of the brain should be completed prior to enrollment if clinically indicated."
      ],
      "chips": [
        "P02",
        "p25/118",
        "B7-H3 Ac-225"
      ],
      "visual": "soa",
      "image": "assets/protocol/aky/a025.jpg",
      "cap": "Protocol page 25 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 26 of 118 · Table of contents",
      "audio": [
        "2. TABLE OF CONTENTS, LIST OF TABLES, AND LIST OF FIGURES TABLE OF CONTENTS SPONSOR SIGNATURE PAGE 2 INVESTIGATOR’S AGREEMENT 3 1. PROTOCOL SUMMARY 4 1.1. Synopsis 4 1.2. Schema 16 1.3. Schedule of Events (“SoE”) 17 2. TABLE OF CONTENTS, LIST OF TABLES, AND LIST OF FIGURES 26 3. LIST OF ABBREVIATIONS AND DEFINITIONS OF TERMS 33 4. INTRODUCTION 38 4.1. Background 38 4.1.1. B 7-H 3 38 4.1.2. A K Y-2519 38 4.1.3. Disease Backgrounds and Study Populations 38 4.1.3.1.",
        "Lung Cancer 38 4.1.3.2. Metastatic Castration-Resistant Prostate Cancer 39 4.1.3.3. Head and Neck Squamous Cell Carcinoma 39 4.1.3.4. Esophageal Squamous Cell Carcinoma 40 4.1.3.5. Colorectal Cancer 40 4.2. Clinical Experience 40 4.2.1. Safety 41 4.2.2. Normal Tissue Dosimetry 41 4.2.3. Tumor Dosimetry and Uptake 42 4.3. Study Rationale 45 4.3.1. Nonclinical Efficacy of actinium-225 A K Y-2519 in a mouse model of non-small cell lung cancer 46 4.3.2.",
        "Nonclinical Efficacy of B 7-H 3 Targeting Tool Molecule [225Ac]Ac-AKY3212 in a Prostate Cancer Patient-Derived Xenograft Model 47 4.3.3. Rationale for the Starting Dose 48 4.3.4. Imaging-Based Participant Selection and Dosimetry 49 4.4. Benefit/Risk Assessment 50"
      ],
      "chips": [
        "P02",
        "p26/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a026.jpg",
      "cap": "Protocol page 26 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 27 of 118 · Protocol body · page 27",
      "audio": [
        "4.4.1. Risk Assessment 50 4.4.2. Benefit Assessment 51 4.4.3. Overall Benefit: Risk Conclusion 51 5. OBJECTIVES AND ENDPOINTS 52 5.1. Part 1 52 5.2. Part 2 53 6. STUDY DESIGN 55 6.1. Overall Design 55 6.2. Duration of the Study 58 6.3. End of Study Definition 58 7. STUDY POPULATION 59 7.1. Inclusion Criteria 59 7.2. Exclusion Criteria 61 7.3. Screen Failures 62 8. STUDY INTERVENTION(S) AND CONCOMITANT THERAPY 63 8.1. Study Intervention(s) Administered 63 8.2.",
        "Packaging and Labeling 65 8.3. Preparation, Handling, Storage, and Accountability 66 8.3.1. Preparation 66 8.3.1.1. Administration 66 8.3.2. Storage 66 8.3.3. Accountability 66 8.3.4. Handling and Disposal 66 8.4. Measures to Minimize Bias: Randomization and Blinding 67 8.5. Study Intervention Compliance 67 8.6. Dose Regimen 67 8.7. Study Drug Administration 67 8.8. Dose-Limiting Toxicities 67 8.9. Treatment Continuation Criteria 68 8.10. Dose Delays and Modification 69 8.11.",
        "Overdose 70 8.12. Supportive Care 70 8.13. Concomitant Therapy 71"
      ],
      "chips": [
        "P02",
        "p27/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a027.jpg",
      "cap": "Protocol page 27 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 28 of 118 · Protocol body · page 28",
      "audio": [
        "8.13.1. Permitted Concomitant Medications 71 8.13.2. Prohibited Concomitant Medications 71 9. DISCONTINUATION OF STUDY INTERVENTION AND PARTICIPANT DISCONTINUATION/WITHDRAWAL 73 9.1. Treatment Discontinuation 73 9.2. Participant Discontinuation/Withdrawal from the Study 73 9.3. Lost to Follow-up 74 9.4. Replacement of Participants 74 10. STUDY ASSESSMENT AND PROCEDURES 75 10.1. General Procedures 75 10.1.1. Demographic Data 75 10.1.2.",
        "Medical History and Cancer Treatment History 75 10.1.3. Concomitant Medications 75 10.2. Safety Assessments 75 10.2.1. Physical Examination 75 10.2.2. Vital Sign 76 10.2.3. E C O G Performance Status 76 10.2.4. Electrocardiograms 76 10.2.5. Clinical Laboratory Tests 77 10.3. Adverse Events and Serious Adverse Events 77 10.3.1. Definition of AE 77 10.3.2. Definition of SAE 78 10.3.3. Adverse Events of Special Interest (AESIs) 78 10.3.4.",
        "Evaluating and Recording Adverse Events 79 10.3.4.1. Time Period and Frequency for Collecting AE and SAE Information 79 10.3.4.2. Method for Evaluating AE and SAE 79 10.3.5. Reporting of SAEs 81 10.3.5.1. Sponsor Contact for Immediate Reporting 81 10.3.5.2. Regulatory Reporting Requirements for SAEs 82 10.3.5.3. Follow-up of AEs and SAEs 82 10.3.6. Reporting of Pregnancies 82 10.4. Pharmacokinetics 83 10.5. Dosimetry 84"
      ],
      "chips": [
        "P02",
        "p28/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a028.jpg",
      "cap": "Protocol page 28 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 29 of 118 · Protocol body · page 29",
      "audio": [
        "10.6. Efficacy Assessment 84 10.7. Imaging/Pathology Concordance 85 10.8. Exploratory Biomarkers for Correlative Analysis 86 10.9. Patient Reported Outcomes 87 11. STATISTICAL CONSIDERATIONS 88 11.1. Analysis Sets 88 11.1.1. Safety Population 88 11.1.2. Pharmacokinetic Population 88 11.1.3. Dosimetry Population 88 11.1.4. Treatment Efficacy Population 88 11.2. Statistical Analyses 88 11.2.1. Safety Analyses 88 11.2.2. Pharmacokinetic Analyses 89 11.2.3.",
        "Dosimetry Analyses 89 11.2.4. Imaging/Pathology Concordance 89 11.2.5. Exploratory Biomarkers for Correlative Analysis 89 11.2.6. Treatment Efficacy Analyses 90 11.3. Dose Escalation 90 11.4. Backfill 92 11.5. Dose Expansion 93 11.6. Sample Size Determination 96 12. SUPPORTING DOCUMENTATION AND OPERATIONAL CONSIDERATIONS 98 12.1. Appendix 1: Regulatory, Ethical, and Study Oversight Considerations 98 12.1.1. Regulatory and Ethical Considerations 98 12.1.2.",
        "Financial Disclosure 98 12.1.3. Informed Consent Process 99 12.1.4. Data Protection 99 12.1.5. Committees Structure 100 12.1.5.1. Safety Review Committee 100 12.1.6. Dissemination of Clinical Study Data 100 12.1.7. Data Quality Assurance 100 12.1.8. Source Documents 101"
      ],
      "chips": [
        "P02",
        "p29/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a029.jpg",
      "cap": "Protocol page 29 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 30 of 118 · Protocol body · page 30",
      "audio": [
        "12.1.9. Study and Site Closure 101 12.1.10. Clinical Study Report 102 12.1.11. Publication Policy 102 12.2. Appendix 2: Clinical Laboratory Tests 103 12.3. Appendix 3: R E C I S T v1.1 104 12.4. Appendix 4: Prostate Cancer Working Group 3 (P C W G 3) Criteria 106 13. REFERENCES 109"
      ],
      "chips": [
        "P02",
        "p30/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a030.jpg",
      "cap": "Protocol page 30 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 31 of 118 · LIST OF TABLES Table 1: Dose-Limiting Toxicities 10 Table 2: [64Cu]Cu-AKY-2519 Blood…",
      "audio": [
        "LIST OF TABLES Table 1: Dose-Limiting Toxicities 10 Table 2: copper-64 A K Y-2519 Blood and Urine pharmacokinetics Collection Times 11 Table 3: actinium-225 A K Y-2519 Blood and Urine pharmacokinetics Collection Times 11 Table 4: Dose Escalation/De-Escalation Rules for the B O I N Design 13 Table 5: Optimized Toxicity Stopping Boundaries 14 Table 6: Abbreviations and Specialist Terms 33 Table 7: Compound Identifiers 37 Table 8: Predicted Absorbed Doses in Selected Normal",
        "Tissues or Organs (N=16) 41 Table 9: Predicted Absorbed Doses to Tumor and Normal Tissue at a Therapeutic lutetium-177 A K Y-2519 Administered Activity; in a Representative Patient with m C R P C 43 Table 10: Allometrically Scaled Predictions of Kidney and Bone Marrow Dosimetry in Participants 49 Table 11: Objectives and Endpoints (Part 1) 52 Table 12: Objectives and Endpoints (Part 2) 53 Table 13: actinium-225 A K Y-2519 and copper-64 A K Y-2519 Description 64 Table 14:",
        "Composition of actinium-225 A K Y-2519 Injection 64 Table 15: Composition of copper-64 A K Y-2519 Injection 65 Table 16: Dose-Limiting Toxicities 68 Table 17: Toxicity Management and Dose Modification Recommendations 69 Table 18: copper-64 A K Y-2519 Blood and Urine pharmacokinetics Collection Times 83 Table 19: actinium-225 A K Y-2519 Blood and Urine pharmacokinetics Collection Times 83 Table 20: Dosimetry Imaging Timepoints 84 Table 21: Dose Escalation/De-Escalation Rules",
        "for the B O I N Design 91 Table 22: Definition of Conflict 93 Table 23: Operating Characteristics of B O P 2 for Futility Monitoring 95 Table 24: Optimized Toxicity Stopping Boundaries 95 Table 25: Operating Characteristics 96 Table 26: Protocol-required Laboratory Tests 103 Table 27: Evaluation of Best Overall Response 105 Table 28: Overall Assessment for Radiological Response per P C W G 3 108"
      ],
      "chips": [
        "P02",
        "p31/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a031.jpg",
      "cap": "Protocol page 31 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 32 of 118 · LIST OF FIGURES Figure 1: SPECT Images in a Representative Patient with mCRPC 42…",
      "audio": [
        "LIST OF FIGURES Figure 1: SPECT Images in a Representative Patient with m C R P C 42 Figure 2: Representative Dose-Volume Histogram from a Patient with m C R P C 43 Figure 3: PET/CT Images from a Representative Patient with m C R P C Receiving gallium-68 A K Y-2519 44 Figure 4: Comparison of [68Ga]Ga-PSMA-11 and gallium-68 A K Y-2519 PET/CT 45 Figure 5: Nonclinical Efficacy of actinium-225 A K Y-2519 in Mouse Model of non-small cell lung cancer with Demonstrated Survival",
        "Benefit 46 Figure 6: non-small cell lung cancer TMA Demonstrating B 7-H 3 Expression 47 Figure 7: Prostate Cancer Tissue Microarray (TMA) Demonstrating B 7-H 3 47 Figure 8: Nonclinical Efficacy of B 7-H 3 Targeting Tool Molecule [225Ac]Ac-AKY3212 in a Prostate Cancer PDX Model Demonstrating Tumor Growth Inhibition or Regression 48 Figure 9: Part 1 Dose Levels 58 Figure 10: Structure of actinium-225 A K Y-2519 63 Figure 11: Structure of copper-64 A K Y-2519 63"
      ],
      "chips": [
        "P02",
        "p32/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a032.jpg",
      "cap": "Protocol page 32 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 33 of 118 · Abbreviations",
      "audio": [
        "3. LIST OF ABBREVIATIONS AND DEFINITIONS OF TERMS The following abbreviations and specialist terms are used in this study protocol.",
        "Table 6: Abbreviations and Specialist Terms Abbreviation Definition anti-drug antibody anti-drug antibod(ies) ADC antibody drug conjugate AE adverse event A E S I adverse event of special interest ALT alanine aminotransferase ANC absolute neutrophil count AST aspartate aminotransferase AUCinf area under the curve from time zero to infinity B O I N Bayesian Optimal Interval CFR Code of Federal Regulations CHF congestive heart failure CI confidence interval CIOMS Council for",
        "International Organizations of Medical Sciences CL clearance Cmax maximum concentration CNS central nervous system CR complete response CRF case report form CT computed tomography C T C A E Common Terminology Criteria for Adverse Events ctDNA circulating tumor DNA dose-limiting toxicity dose-limiting toxicity duration of response duration of response ECG electrocardiogram E C O G Eastern Cooperative Oncology Group eCRF electronic case report form E G F R estimated glomerular",
        "filtration rate eMTD estimated maximum tolerated dose end of treatment End of Treatment"
      ],
      "chips": [
        "P02",
        "p33/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a033.jpg",
      "cap": "Protocol page 33 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 34 of 118 · Abbreviation Definition ER estrogen receptor ET endocrine therapy FDA Food and Drug…",
      "audio": [
        "Abbreviation Definition ER estrogen receptor ET endocrine therapy FDA Food and Drug Administration FSH follicle stimulating hormone GCP Good Clinical Practice GCSF granulocyte colony-stimulating factor GFR glomerular filtration rate GLP Good Laboratory Practice Gy gray Hb hemoglobin HBV hepatitis B virus HBcAb hepatitis B core antibody HCV hepatitis C virus HIV human immunodeficiency virus HR hazard ratio HR hormone receptor IB Investigator’s Brochure informed consent form",
        "informed consent form ICH International Council for Harmonisation IEC Independent Ethics Committee IHC immunohistochemistry ILD interstitial lung disease IRB Institutional Review Board IV intravenous LLOQ lower limit of quantification LTFU long-term follow-up maximum administered dose maximum administered dose MRD minimal residual disease mRNA messenger ribonucleic acid maximum tolerated dose maximum tolerated dose NCI C T C A E National Cancer Institute Common Terminology",
        "Criteria for Adverse Events NOAEL no observed adverse effect level"
      ],
      "chips": [
        "P02",
        "p34/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a034.jpg",
      "cap": "Protocol page 34 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 35 of 118 · Abbreviation Definition NPS Named Participant Supply NSCLC non-small cell lung…",
      "audio": [
        "Abbreviation Definition NPS Named Participant Supply non-small cell lung cancer non-small cell lung cancer NuMeRI Nuclear Medicine Research Infrastructure NYHA New York Heart Association objective response rate objective response rate OE overexpression overall survival overall survival PD-1 programmed cell death protein 1 P D L 1 programmed cell death ligand 1 PET positron emission tomography progression-free survival progression-free survival PI Principal Investigator",
        "pharmacokinetics pharmacokinetic(s) PR progesterone receptor/partial response PSMA prostate-specific membrane antigen QC quality control QTcF baseline-corrected QT level using Fridericia formula R E C I S T Response Evaluable Criteria in Solid Tumors ROI region of interest ROSE randomized optimal selection recommended expansion dose recommended expansion dose SAE serious adverse event SAP Statistical Analysis Plan SE standard error SoE Schedule of Events SPECT single-photon",
        "emission computed tomography SPR surface plasmon resonance safety review committee Safety Review Committee SUSAR suspected unexpected serious adverse reaction t1/2 half-life TAC time-activity curves TCR T-cell receptor"
      ],
      "chips": [
        "P02",
        "p35/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a035.jpg",
      "cap": "Protocol page 35 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 36 of 118 · Abbreviation Definition TEAE treatment-emergent adverse event TGI tumor growth…",
      "audio": [
        "Abbreviation Definition T E A E treatment-emergent adverse event TGI tumor growth inhibition TIA time-integrated activity Tmax time to maximum concentration TMF Trial Master File TK toxicokinetic(s) ULN upper limit of normal US United States VOI volume of interest WOCBP women of childbearing potential"
      ],
      "chips": [
        "P02",
        "p36/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a036.jpg",
      "cap": "Protocol page 36 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 37 of 118 · Different constructs of AKY-2519, as well as the core sequence, AKY-2933, have been…",
      "audio": [
        "Different constructs of A K Y-2519, as well as the core sequence, AKY-2933, have been used in various experiments throughout the development program. A list of these compound identifiers and their descriptions are provided in Table 7.",
        "Table 7: Compound Identifiers Program Identifier Codes to be Used Description Comments AKY- 2933 Core sequence Miniprotein binder with free Nterminal amine A K Y-2519 DOTA P E G 4-AKY-2933 Miniprotein binder with linker and chelator (without radioactive isotope) Biotin-AKY-2933 Biotin-PEG4-AKY-2933 Biotinylated version In-A K Y-2519 In-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with stable indium La-A K Y-2519 La-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with stable lanthanum",
        "[111In]In-A K Y-2519 [111In]In-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with radioactive isotope In-111 gallium-68 A K Y-2519 [68Ga]Ga-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with radioactive isotope Ga-68 lutetium-177 A K Y-2519 [177Lu]Lu-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with radioactive isotope Lu-177 copper-64 A K Y-2519 [64Cu]Cu-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with radioactive isotope copper-64 [225Ac]Ac-DOTA P E G 4-AKY-2933 A K Y-2519 labeled with",
        "radioactive isotope actinium-225 Injection Drug Product for Therapy Formally drug product in CMC materials; otherwise may be referenced as [225Ac]Ac‑AKY‑2519 copper-64 A K Y-2519 Injection Drug Product for Imaging Formally drug product in CMC materials; otherwise may be referenced as copper-64 A K Y-2519"
      ],
      "chips": [
        "P02",
        "p37/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a037.jpg",
      "cap": "Protocol page 37 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 38 of 118 · B7-H3 (CD276) and AKY-2519 miniprotein",
      "audio": [
        "4. INTRODUCTION Aktis Oncology is developing a B 7-H 3-directed radiotherapeutic for the treatment of participants with locally advanced or metastatic cancers. 4.1. Background 4.1.1. B 7-H 3 The B7 family of proteins is comprised of membrane proteins known as immune checkpoints that, together with the CD28 family of receptors, are involved in actuating inhibitory or co-stimulating adaptive immune responses.",
        "Tumor expression of B7 family members such as P D L 1 and B7-DC has been implicated in cancer immune evasion, resulting in tumor progression, dissemination, and relapse (Chapoval et al., 2001; Zou et al., 2008; Collins et al., 2005). B 7-H 3, also referred to as C D 276, is a type 1 transmembrane protein with two isoforms in humans and has been shown to play a dual role in both innate and T-cell-involved adaptive immunity.",
        "Various reports have demonstrated B 7-H 3 to be linked to cancer progression, migration, angiogenesis, invasion, and metabolic reprogramming. Overexpression has been reported in a wide range of malignancies such as lung, esophageal, breast, melanoma, and prostate and has been associated with poor prognosis in several indications (MacGregor et al., 2019; Seaman et al., 2017; Yim et al., 2020; Carvajal-Hausdorf et al., 2019; Altan et al., 2017).",
        "B 7-H 3 expression has also been observed in stromal compartments of various solid tumors, primarily in tumor vascular endothelial cells and fibroblasts, representing a potential opportunity to target the tumor microenvironment (MacGregor et al., 2019; Seaman et al., 2017; Costa et al., 2018; Parente et al., 2025).",
        "Although widely expressed at the transcriptional level across normal tissues, protein expression appears limited and finely controlled at the post-transcriptional level via microRNA (Xu et al., 2009; Kontos et al., 2021) with limited protein expression in normal cells outside of some immune cell subsets in response to certain inflammatory stimuli (Zhou et al 2021).",
        "It is also reported that patients with low B 7-H 3 expression have shown increased expression after receiving immunotherapy, adding support to pursuing this indication in the clinic (Yim et al., 2020). 4.1.2. A K Y-2519 A K Y-2519 is a synthetic 49 amino acid miniprotein that can be chelated with various imaging and therapeutic radioisotopes for evaluation of biodistribution, participant selection, and treatment administration.",
        "The overall A K Y-2519 development program includes 2 development candidates: actinium-225 A K Y-2519 and copper-64 A K Y-2519. actinium-225 A K Y-2519 is a B 7-H 3 binder being developed as a targeted radiopharmaceutical for the treatment of adult participants with locally advanced or metastatic cancers. copper-64 A K Y-2519 is under development as an imaging tool for the identification of patients who may benefit from actinium-225 A K Y-2519 treatment. 4.1.3.",
        "Disease Backgrounds and Study Populations 4.1.3.1. Lung Cancer Over the next 25 years, the number of global lung cancer cases are predicted to rise to 4.26 million and result in 3.55 million deaths (Zhou et al., 2024). In 2025, lung cancers are estimated to account for ~226,650 new cases and ~124,730 cancer-related deaths in the United States alone with"
      ],
      "chips": [
        "P02",
        "p38/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a038.jpg",
      "cap": "Protocol page 38 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "B7-H3 = CD276. 49-aa synthetic miniprotein, not an antibody.",
        "DOTA holds Cu-64 (T½ 12.7 h) or Ac-225 (T½ 9.9 d)."
      ]
    },
    {
      "title": "Page 39 of 118 · NSCLC and SCLC subtypes accounting for ~85% and ~15% of those cases, respectively…",
      "audio": [
        "non-small cell lung cancer and small cell lung cancer subtypes accounting for ~85% and ~15% of those cases, respectively (Duma et al., 2019). B 7-H 3 expression is observed in both subtypes at a high frequency, ~80% of non-small cell lung cancer and cases ~65% of small cell lung cancer, with those demonstrating high expression having worse overall survival outcomes (Altan et al., 2017; Qiu et al., 2021). 4.1.3.1.1.",
        "Non-small Cell Lung Cancer The 5-year survival rate for patients diagnosed with distantly metastasized non-small cell lung cancer (non-small cell lung cancer) remains very low at approximately 12% (SEER Cancer Stat Facts). For patients with progressive disease on first-line treatments few options, such as combination of ramucirumab and docetaxel, remain.",
        "Overall response rates and median progression free survival in this setting remain underwhelming at ~23% and 4.5 months, respectively (Garon et al., 2014). Despite some advances in later line therapies, most patients will develop resistant disease that leads to progression, thus highlighting the need for additional treatment options in this population (Jani et al., 2025). 4.1.3.1.2.",
        "Extensive-stage Small Cell Lung Cancer Extensive-stage small cell lung cancer (extensive-stage small cell lung cancer) makes up the majority of small cell lung cancer cases, diagnosed in 60-70% of patients, and is associated with a poor 5-year survival rate of 2.9% (Cohen et al., 2023).",
        "Initial treatment with chemotherapy plus immune checkpoint blockade has demonstrated improvements in overall survival and progression-free survival over chemotherapy alone, however relapses remain common within months of treatment resulting in median progression-free survival values of ~5 months (Pietanza et al., 2015).",
        "Effective second-line options remain limited and the development of targeted agents are beginning to emerge as an approach to improve outcomes in these settings (Zhai et al., 2025; Lau et al., 2022). 4.1.3.2. Metastatic Castration-Resistant Prostate Cancer It is estimated in 2025 that a total of 313,780 new cases of prostate cancer will be diagnosed with an estimated 35,770 deaths attributable to the disease (SEER Cancer Stat Facts).",
        "While the majority of prostate cancer is diagnosed in a localized setting, approximately 6.8% of men in the US will initially be diagnosed with metastatic disease (Devasia 2023). Androgen deprivation therapy (ADT), androgen receptor signaling inhibition (ARSI) and chemotherapy are the main treatment options for these patients (Posdzich 2023).",
        "Despite the effectiveness of these treatments, it is common for patients on these agents to develop castrate resistant disease (Choi 2022). Metastatic castration resistant prostate cancer (m C R P C) is the most aggressive form of the disease and exhibits a dismal overall survival of less than 2 years (Shore 2021).",
        "Attempts to improve these outcomes have been focused on the development of new therapies that include PARP inhibitors for tumors with known defects in DNA repair genes and radioligand therapies that aim to precisely deliver a therapeutic radionuclide to sites of tumor-specific target expression such as PSMA (Mateo 2017; Sartor 2021). 4.1.3.3.",
        "Head and Neck Squamous Cell Carcinoma head and neck squamous cell carcinoma is the sixth most common malignancy and accounts for 4.7% of all cancer-related deaths worldwide (Bray et al., 2024). Development of the disease is largely driven by tobacco/alcohol use and oncogenic viral infections such as human papilloma virus or Epstein-Barr virus (Barsouk et al., 2023).",
        "While smoking rates have declined over time, the incidence of head and neck squamous cell carcinoma, particularly"
      ],
      "chips": [
        "P02",
        "p39/118",
        "B7-H3 Ac-225"
      ],
      "visual": "b7h3",
      "image": "assets/protocol/aky/a039.jpg",
      "cap": "Protocol page 39 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 40 of 118 · oropharyngeal cancer, has continued to rise due to HPV infection (Chaturvedi et al",
      "audio": [
        "oropharyngeal cancer, has continued to rise due to HPV infection (Chaturvedi et al., 2023). Earlystage disease is often treated with curative intent via surgery or radiation therapy while systemic therapies, including platinum-based chemotherapy and immune checkpoint inhibitors, are utilized in more advanced settings (Bhatia et al., 2023).",
        "Despite advances in the treatment of head and neck squamous cell carcinoma, the median overall survival (mOS) for patients with recurrent or metastatic disease remains low at 13 months. The short mOS highlights the need for more efficacious agents in clinic for the treatment of advanced head and neck squamous cell carcinoma (Abouelkheer et al., 2025). 4.1.3.4.",
        "Esophageal Squamous Cell Carcinoma Worldwide, esophageal squamous cell carcinoma was diagnosed in more than 510,000 patients and accounted for more than 440,000 deaths in 2022 (Bray et al., 2024). Locally advanced disease undergoes chemoradiotherapy followed by surgical resection as standard of care, however the risk of recurrence remains high in these patients (Korpan et al., 2024).",
        "For patients with advanced esophageal squamous cell carcinoma, treatment with a platinum-fluoropyrimidine doublet used in conjunction with, or without immune checkpoint inhibition (ICI), is the first-line option. Patients with a high combined positive score (CPS; >10) demonstrate the most positive survival outcomes in this setting, while those with CPS <10 don’t demonstrate a clear benefit from the addition on an ICI (Shah et al., 2024).",
        "Second line treatments remain limited for these patients with ICI rechallenge or further chemotherapy administration, dependent on fitness (Obermannová et al., 2022). Even with the advancements in the treatment of esophageal squamous cell carcinoma, the overall prognosis remains poor, emphasizing the need for additional treatment modalities in this population. 4.1.3.5.",
        "Colorectal Cancer Colorectal cancer (colorectal cancer) is the third most commonly diagnosed and second most common cause of cancer-related mortality in the world (Sung et al., 2021). In the advanced or metastatic setting, the 5-year survival rate of patients remains low at 14% (Jiang et al., 2021). Historically, colorectal cancer has been treated with a systemic chemotherapy combination of 5-fluorouracil, oxaliplatin, irinotecan and capecitabine.",
        "While effective, this regimen often leads to treatment interruption or discontinuation due to intolerability or ultimate disease resistance (Mo et al., 2024). Recent advancements in the treatment of colorectal cancer include targeted therapies and ICI approaches.",
        "Therapies targeting VEGF, BRAF, KRAS, HER2 and EGFR have been developed, while ICI have been utilized in colorectal cancer populations that have been determined to be mismatch-repair-deficient (dMMR) or microsatellite instability-high (MSI-H). Even with the identification of actionable targets and the use of ICIs in this population, the number of patients suitable to receive these treatments is limited.",
        "In addition, the emergence of resistant disease continues to be an issue that must be overcome (Mo et al., 2024). To that point, the development of agents targeting differentiated targets or delivering novel payloads is greatly needed for patients diagnosed with mCRC. 4.2. Clinical Experience First-in-human studies have not yet been conducted with actinium-225 A K Y-2519 Injection.",
        "Under the SAPHRA Section 21 provision of the Medicines and Related Substances Act, 16 patients with m C R P C have been administrated and imaged with gallium-68 A K Y-2519 and lutetium-177 A K Y-2519 at Nuclear Medicine Research Infrastructure (NuMeRI, South Africa; Named Patient Supply). Additionally, 8 patients with various solid tumors have been administrated"
      ],
      "chips": [
        "P02",
        "p40/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a040.jpg",
      "cap": "Protocol page 40 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 41 of 118 · Named-patient Lu-177 / Ga-68 dosimetry",
      "audio": [
        "and imaged with gallium-68 A K Y-2519 at the University Hospital Essen (Germany; Single Patient Use). The Named Patient Supply provision and Single Patient Use allow administering physicians to offer unapproved medicines to consenting patients with life-threatening conditions where alternative therapies are unavailable. The preliminary clinical experience on safety and dosimetry with gallium-68 A K Y-2519 and lutetium-177 A K Y-2519 are described below. 4.2.1.",
        "Safety No injection site or infusion-related adverse reactions were reported. No adverse events (AEs) attributable to the administration of either gallium-68 A K Y-2519 or lutetium-177 A K Y-2519 were reported. No pre-medications were required. 4.2.2. Normal Tissue Dosimetry Normal tissues radiation exposure, especially to the bone marrow and kidneys, has historically contributed to the potential for clinical toxicity following administration of radiopharmaceuticals.",
        "Assessing predicted doses to those two critical organs can be utilized to estimate the potential of toxicity prior to therapeutic administration and to provide justifications for starting doses in a clinical study. Normal tissue dosimetry for A K Y-2519 was conducted in 16 patients with m C R P C to inform starting dose selection in the Phase 1b study.",
        "At the administering institution (NuMeRI), single-photon emission computed tomography (SPECT) scans were acquired for 16 patients at 3, 24, and 144 hours post-injection of ~0.55-0.76 gigabecquerels (~15-21 millicuries) lutetium-177 A K Y-2519. SPECTs were reconstructed and doses in humans were estimated with MIM SurePlan™ MRT (v7.3.7) software and with the exception of bone marrow, normal tissues were identified using the Protégé AI™ Auto-Contouring workflow.",
        "Due to the volume of bone metastases in this patient cohort, a region of predicted high-volume hematopoiesis (pelvis) was contoured manually by a nuclear medicine medical doctor/physicist at NuMeRI, in order to identify a region of interest without metastatic uptake for normal bone marrow evaluation. Estimated absorbed dose coefficients for the bone marrow, liver, kidneys and salivary glands are provided below in Table 8.",
        "Representative images from a patient with m C R P C, who received 0.76 gigabecquerels (20.5 millicuries) of lutetium-177 A K Y-2519 for dosimetry imaging, are presented below (Figure 1). Visually, no significant accumulation was noted in normal tissues with the exception of initial uptake in the liver which was rapidly cleared.",
        "Table 8: Predicted Absorbed Doses in Selected Normal Tissues or Organs (N=16) Tissue/Organ Mean Absorbed Dose Coefficient (Gy/gigabecquerels) Standard Deviation (SD) Predicted Dose at 7.4 gigabecquerels times 4 (Gy) RPT/external beam radiation Benchmark# Bone Marrow 0.04 0.02 1.18 2-3 Gy Liver 0.32 0.10 9.47 30-32 Gy Kidneys 0.47 0.13 13.91 23-26 Gy Salivary Glands 0.15 0.05 4.44 25 Gy Calculations were performed with MIM following low administered activity ~15-21",
        "millicuries of lutetium-177 A K Y-2519 and 3 timepoint imaging series at 3h, 24h and 144h. #Reference clinical benchmark (Wahl et al., 2021)."
      ],
      "chips": [
        "P02",
        "p41/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a041.jpg",
      "cap": "Protocol page 41 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 42 of 118 · Figure 1: SPECT Images in a Representative Patient with mCRPC SPECT: single photon…",
      "audio": [
        "Figure 1: SPECT Images in a Representative Patient with m C R P C SPECT: single photon emission computed tomography Dosimetry analysis confirmed that at a typical therapeutic administered activity of 177Lu (7.4 gigabecquerels for 4 cycles), the predicted absorbed dose to the liver is expected to be well below the reference clinical benchmark (Table 8), despite initial activity in the liver and in line with the renal clearance pathway for A K Y-2519.",
        "Similarly, the predicted absorbed doses to the kidneys are well below the reference clinical benchmark (Table 8). In addition, the predicted absorbed doses for the salivary glands are low, which is anticipated to lead to a differentiated tolerability profile for actinium-225 A K Y-2519] in patients with prostate cancer, compared to lutetium Lu-177 vipivotide tetraxetan (PLUVICTO, US prescribing information).",
        "The absorbed doses for actinium-225 A K Y-2519 at the proposed starting dose (6 megabecquerels for 4 cycles) in the study are anticipated to be comparable to, or lower than, those associated with a typical therapeutic administered activity of 177Lu (7.4 gigabecquerels for 4 cycles).",
        "Accordingly, the preliminary dosimetry data suggests a manageable safety profile for actinium-225 A K Y-2519 at the proposed starting dose of 6 megabecquerels administered over four planned administration cycles. 4.2.3. Tumor Dosimetry and Uptake Tumor Dosimetry Together with the predicted doses to normal tissues, the potential therapeutic index of actinium-225 A K Y-2519 is anticipated to be driven by absorbed doses to tumors.",
        "Therefore, the Sponsor performed evaluation of selected tumor lesions from a representative patient with m C R P C (NuMeRI). Manual review of tumor regions was conducted by a radiation oncology medical doctor in MIM v7.4.4 and tumor regions of interest were identified to include multiple metastatic sites as well as the primary site.",
        "In addition, normal tissues were delineated with the Protégé AI AutoContouring workflow in order to directly assess the potential therapeutic index in the same patient. Predicted absorbed doses to the tumors and normal tissues were evaluated and are represented in the dose-volume histogram (DVH) (Figure 2)."
      ],
      "chips": [
        "P02",
        "p42/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a042.jpg",
      "cap": "Protocol page 42 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 43 of 118 · Doses for each selected metastatic deposit and the primary tumor far exceed those…",
      "audio": [
        "Doses for each selected metastatic deposit and the primary tumor far exceed those predicted absorbed doses in normal tissues, as evidenced by the strong separation (right shift) between the tumor and normal tissue curves. The curves of normal tissues remain in close proximity to the y-axis, indicating low predicted absorbed doses in comparison with those to tumors.",
        "Figure 2: Representative Dose-Volume Histogram from a Patient with m C R P C The absolute doses in the DVH presented in the figure reflect the low lutetium-177 A K Y-2519 activity administered for dosimetry imaging. When scaled to expected therapeutic administered activities (Table 9), robust absorbed doses are projected across multiple identified tumor sites of interest.",
        "In addition, the predicted absorbed doses to normal tissues are well within the reference clinical benchmarks (Wahl et al., 2021).",
        "Table 9: Predicted Absorbed Doses to Tumor and Normal Tissue at a Therapeutic lutetium-177 A K Y-2519 Administered Activity; in a Representative Patient with m C R P C Selected Tumor Sites Dose Coefficient (Gy/gigabecquerels) Predicted Dose at 7.4 gigabecquerels (Gy) Bone vertebral lesion 2.12 15.70 Para-aortic node 2.57 19.04 Pelvic node 4.33 32.04 Primary 3.22 23.84 Normal Tissues Kidney 0.31 2.32"
      ],
      "chips": [
        "P02",
        "p43/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a043.jpg",
      "cap": "Protocol page 43 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 44 of 118 · Selected Tumor Sites Dose Coefficient (Gy/GBq) Predicted Dose at 7",
      "audio": [
        "Selected Tumor Sites Dose Coefficient (Gy/gigabecquerels) Predicted Dose at 7.4 gigabecquerels (Gy) Glands 0.13 0.97 Liver 0.29 2.12 These projected data demonstrate that lutetium-177 A K Y-2519 is expected to deliver an efficacious dose (Ells et al., 2024) to areas of tumor (~15-32 Gy) while limiting deposition within normal tissues when administered therapeutically.",
        "Furthermore, the predicted absorbed doses to normal tissue suggest that repeat administrations at therapeutic levels of activity are projected to be clinically tolerated with the proposed starting dose.",
        "Comparison of Tumor Uptake with gallium-68 A K Y-2519 and [68Ga]Ga-PSMA-11 Given the high degree of target expression, PSMA-targeting radioligand therapy (lutetium Lu-177 vipivotide tetraxetan) has been developed as a therapeutic option for patients with m C R P C (Sartor et al., 2021). Evaluation of the tumor uptake for radiopharmaceutical diagnostic agents, as measured by SUVmax, has been shown to be a valuable indicator of potential clinical efficacy.",
        "Particularly, the SUVmax values above ~11 correlate with positive clinical outcomes (Rosar et al., 2024). Therefore, the Sponsor conducted analyses of tumor uptake with gallium-68 A K Y-2519 uptake, in comparison with [68Ga]Ga-PSMA-11, in representative patients who were administered both agents. Representative PET/CT images of a patient with m C R P C are provided in (Figure 3).",
        "The patient was administered 199 megabecquerels of gallium-68 A K Y-2519 and subsequently imaged at 15 min, 60 min and 120 min post-injection. High levels of activity observed in the bladder confirm renal clearance of A K Y-2519, which is in alignment with nonclinical data. Of note, biodistribution to normal tissue is described in Section 4.2.2.",
        "Additionally, it was observed that measured SUVmax values in the reported lesions exceed those reported to be necessary for eliciting an efficacious response in the clinic indicating sufficient accumulation of the A K Y-2519 miniprotein radioconjuate to induce a therapeutic response. Figure 3: PET/CT Images from a Representative Patient with m C R P C Receiving gallium-68 A K Y-2519 PET/CT: positron emission tomography/computed tomography; SUV: standard uptake value"
      ],
      "chips": [
        "P02",
        "p44/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a044.jpg",
      "cap": "Protocol page 44 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 45 of 118 · Tumor uptake of [68Ga]Ga-AKY-2519 was also compared to [68Ga]Ga-PSMA-11 to evaluate…",
      "audio": [
        "Tumor uptake of gallium-68 A K Y-2519 was also compared to [68Ga]Ga-PSMA-11 to evaluate the concordance of uptake between the B 7-H 3-targeting and PSMA-targeting agents.",
        "Figure 4 shows representative PET/CT scans from two patients with m C R P C who were first administered and imaged with [68Ga]Ga-PSMA-11 at 1-hour post-injection; after at least one day washout of [68Ga]Ga-PSMA-11, patients received gallium-68 A K Y-2519 and were subsequently imaged 1- and 2-hour post-injection.",
        "Figure 4: Comparison of [68Ga]Ga-PSMA-11 and gallium-68 A K Y-2519 PET/CT Strong concordance of tumor uptake is observed between [68Ga]Ga-PSMA-11 and [68Ga]GaA K Y-2519. It is worthwhile noting that the uptake to salivary glands appears to be less for gallium-68 A K Y-2519 than that observed for [68Ga]Ga-PSMA-11. Low salivary gland uptake is further supported by dosimetry data presented in Table 8 and Table 9.",
        "Taken together, these data indicate that gallium-68 A K Y-2519 is comparable to [68Ga]Ga-PSMA-11 in detecting disease and may reduce salivary gland toxicity often associated with PSMA-targeted radioligand therapies (Langbein et al., 2022). 4.3. Study Rationale Radiotherapy, including radioisotopes, has been an integral part of cancer care for almost a century.",
        "The mechanism of radiation related cell death is well characterized and the biologic potency of a wide variety of radioisotopes was established years ago, well before widespread clinical application was feasible. In recent years, changes in radioisotope accessibility and an improved understanding of target biology have led to an explosion of potential radiopharmaceutical options including the recently approved 177Lu-PSMA-617 (PLUVICTO™) (Sgouros et al., 2020).",
        "In a heavily pretreated"
      ],
      "chips": [
        "P02",
        "p45/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a045.jpg",
      "cap": "Protocol page 45 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 46 of 118 · population of patients with metastatic castration resistant prostate cancer,…",
      "audio": [
        "population of patients with metastatic castration resistant prostate cancer, PLUVICTO™increased the median overall survival by 4 months over standard care (Sartor et al., 2021). High grade AEs were not uncommon but were primarily related to bone marrow toxicity and <10% of patients discontinued therapy. Encouraging outcomes have also been noted with PSMA-617 - conjugated with the alpha emitter 225Ac (Sathekge et al., 2022).",
        "Alpha emitting radioisotopes release heavy particles that result in dense ionization on the cellular level. Capacity for resulting DNA damage repair is limited and this translates to a profound potential for tumor cell kill. This rationale for actinium-225 A K Y-2519 as a B 7-H 3 directed radiotherapeutic in the treatment of patients with B 7-H 3 copper-64 A K Y-2519 imaging positive tumors is further described below. 4.3.1.",
        "Nonclinical Efficacy of actinium-225 A K Y-2519 in a mouse model of non-small cell lung cancer To evaluate the efficacy of actinium-225 A K Y-2519, a cell line-derived subcutaneous xenograft model was established using the NCI-H358 non-small cell lung cancer cell line. NCI-H358 xenografts express endogenous levels of B 7-H 3 as shown (Figure 5, Panel A).",
        "Cell line-derived xenografts (CDX) were established in athymic-nude mice and were used for proof-of-concept efficacy studies. Tumors were grown to 150-250 mm3 and animals were dosed intravenously with either vehicle or a single administration of actinium-225 A K Y-2519.",
        "Robust anti-tumor activity was observed at both dose levels (0.5 μCi and 1.0 μCi) (Panel B) with a statistically significant extension in median survival observed in both dosing groups (Panels C and E) with no impacts on animal weights (Panel C), indicating the administered activities were well-tolerated with a broad therapeutic index.",
        "Figure 5: Nonclinical Efficacy of actinium-225 A K Y-2519 in Mouse Model of non-small cell lung cancer with Demonstrated Survival Benefit In order to evaluate the potential for targeting B 7-H 3 in non-small cell lung cancer, we examined a collection of tumor cores in a tissue microarray (TMA) containing both adenocarcinoma and squamous subsets from multiple stages.",
        "As shown in Figure 6, the majority of samples examined demonstrated membranous B 7-H 3 expression; the median H-score of the evaluated cores was 38. The NCI-H358 in vivo model shows an H-score slightly above the median, but is a strong representative of the"
      ],
      "chips": [
        "P02",
        "p46/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a046.jpg",
      "cap": "Protocol page 46 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 47 of 118 · majority of NSCLC samples (Figure 6, Left Panel)",
      "audio": [
        "majority of non-small cell lung cancer samples (Figure 6, Left Panel). Additionally, when tumor proportion score (TPS) was examined, it was shown that the majority of non-small cell lung cancer cores have high TPS score, suggesting homogeneous B 7-H 3 expression in tumors (Figure 6, Right Panel).",
        "Taken together, these expression levels, coupled with the robust anti-tumor efficacy observed in the NCI-H358 model suggest a significant opportunity to target and treat non-small cell lung cancer with actinium-225 A K Y-2519. Figure 6: non-small cell lung cancer TMA Demonstrating B 7-H 3 Expression As shown in Figure 7, the vast majority of prostate cancer samples examined showed membranous B 7-H 3 expression with a median H-score of 118.",
        "The NCI-H358 control shows a lower H-score than the median for prostate cancer samples, and the majority of prostate cancer cores stained higher than the NCI-H358 sections (Figure 7, Left Panel). Additionally, when TPS was examined, it was shown that the vast majority of prostate cancer cores have a high TPS score, suggesting homogenous B 7-H 3 expression in tumors (Figure 7, Right Panel).",
        "Taken together, these expression levels, coupled with the robust anti-tumor efficacy observed in the NCI-H358 model which expresses comparatively lower levels of B 7-H 3, suggest a significant opportunity to target prostate cancer with actinium-225 A K Y-2519. Figure 7: Prostate Cancer Tissue Microarray (TMA) Demonstrating B 7-H 3 4.3.2.",
        "Nonclinical Efficacy of B 7-H 3 Targeting Tool Molecule actinium-225 A K Y-3212 in a Prostate Cancer Patient-Derived Xenograft Model To evaluate the potential for targeting B 7-H 3 in prostate cancer, a single dose of the B 7-H 3-targeting tool molecule actinium-225 A K Y-3212 was tested at multiple activity levels in a prostate cancer patient-derived xenograft (PDX) model that endogenously expresses B 7-H 3.",
        "Both 1 μCi and 2 μCi groups showed significant tumor growth inhibition or regression compared to vehicle group (Panel A) with good tolerability as monitored by body weight (Figure 8, Panel B). At Day 31, tumor volumes in the 1 μCi and 2 μCi actinium-225 A K Y-3212 treatment groups were significantly smaller than those in the vehicle group (one-way ANOVA with Tukey’s multiple"
      ],
      "chips": [
        "P02",
        "p47/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a047.jpg",
      "cap": "Protocol page 47 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 48 of 118 · Starting-dose rationale · kidney 0.48 RBE5Gy/MBq",
      "audio": [
        "comparisons; p = 0.0012 and p = 0.0001, respectively). Tumor regression from initial volume peaked at 66% on Day 10 for the 1 μCi group, with regression maintained through Day 28. For the 2 μCi group, regression peaked at 83% on Day 28 with sustained regression through end of study period. The highest dose level showed sustained tumor regression through end of study period.",
        "Therefore, a single administration of the B 7-H 3-targeting tool molecule actinium-225 A K Y-3212 was well tolerated and produced significant anti-tumor efficacy in a prostate cancer patient-derived xenograft model. The study demonstrated a clear dose-dependent effect, with higher doses resulting in greater tumor growth suppression.",
        "This study leveraging a tool molecule with similarities to actinium-225 A K Y-2519, serves as proof-of-concept for targeting B 7-H 3 in prostate tumors with a targeted radiopharmaceutical. Figure 8: Nonclinical Efficacy of B 7-H 3 Targeting Tool Molecule actinium-225 A K Y-3212 in a Prostate Cancer PDX Model Demonstrating Tumor Growth Inhibition or Regression 4.3.3.",
        "Rationale for the Starting Dose Aktis has selected miniprotein binders in part because of their favorable pharmacological characteristics that allow for rapid clearance, increased tumor deposition and retention with reduced renal uptake. A K Y-2519 freely clears the kidney in preclinical species.",
        "Allometric scaling of time-activity curves from mouse models predicts an absorbed actinium-225 dose to the human kidneys of 0.48 RBE5Gy/megabecquerels, while scaling from minipig models predicts an absorbed dose to the human kidneys of 0.76 RBE5Gy/megabecquerels.",
        "When scaling the preclinical dosimetry to the full proposed starting therapeutic dose of 6 megabecquerels (up to 4 doses), A K Y-2519 is predicted to be well under the external beam radiation benchmark of 23 Gy (Emami et al., 1991; Table 10). This is further supported by predictions from the human dosimetry data presented in Section 4.2, the predicted absorbed Lu-177 dose to human kidney was estimated to be 0.47 Gy/gigabecquerels.",
        "Nonclinical biodistribution studies in mice demonstrate that the kidney is expected to be the doselimiting organ when assessed against thresholds established for external beam radiation however, studies conducted in the minipig, using a conservative methodology to estimate absorbed dose to the bone marrow, suggest that bone marrow may be the dose limiting organ.",
        "The conclusions derived from this minipig data are further supported by the clinical dosimetry data, where an absorbed Lu-177 dose to the marrow is observed to be 0.04 Gy/gigabecquerels. The clinical findings of absorbed dose to the marrow are supported by mouse biodistribution data, which predict a favorable 0.018 RBE5Gy/megabecquerels"
      ],
      "chips": [
        "P02",
        "p48/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a048.jpg",
      "cap": "Protocol page 48 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 49 of 118 · absorbed dose",
      "audio": [
        "absorbed dose. These data further support the maintenance of an ample safety window below the 2-3 Gy benchmark (Wahl et al., 2021) at a starting dose of 6 megabecquerels. In addition to the observed favorable human kidney dosimetry, clinically meaningful changes in renal function are not anticipated given that radiation-related nephrotoxicity typically manifests several years after exposure (Lambert et al., 2004).",
        "Hematological toxicity is more likely to be dose-limiting in a patient population who have often received prior chemotherapy and potentially other radioligand therapies, both of which are associated with significant hematological toxicities. The expected rapid clearance of A K Y-2519 from the serum and plasma is expected to minimize radiation exposure to the bone marrow.",
        "To provide further insight into predicted absorbed dose in participants and leveraging physiological and anatomical similarity of minipig and human (Suenderhauf and Parrott, 2013), a full dosimetry study was executed in the minipig including allometric scaling to estimate kidney and bone marrow dosimetry in patients (Table 10).",
        "Table 10: Allometrically Scaled Predictions of Kidney and Bone Marrow Dosimetry in Participants Species Absorbed Dose to Kidneys (RBE5Gy/megabecquerels) Estimated Absorbed Dose to Kidney after 4 Administrations at 6 megabecquerels (RBE5Gy) Absorbed Dose to Bone Marrow (RBE5Gy/megabecquerels) Estimated Absorbed Dose to Bone Marrow after 4 Administrations at 6 megabecquerels (RBE5Gy) Mouse 0.48* 11.5 0.018 0.43 Minipig 0.76# 18.2 0.14 3.36 Absorbed Dose to Kidneys",
        "(Gy/gigabecquerels; SD) Estimated absorbed dose to kidney after 4 administrations at 7.4 gigabecquerels (Gy) Absorbed Dose to Bone Marrow (Gy/gigabecquerels; SD) Estimated absorbed dose to bone marrow after 4 administrations at 7.4 gigabecquerels (Gy) Human 0.47^ (0.13) 13.91 0.04$ (0.02) 1.18 *Mean of 6 nonclinical studies (n=18 mice) #Gender average of n=6 animals from 2 experiments ^Mean of 16 participants $Mean from 15 participants Together, these predictions suggest",
        "that 4 administrations of actinium-225 A K Y-2519 at 6 megabecquerels will result in a level of absorbed dose to the kidneys and bone marrow that is well below the conservative benchmarks prescribed for external beam radiation in participants and which is expected to be safe and well tolerated. Further, the external beam dose benchmarks are not clearly linked to participant safety.",
        "The benchmarks will be utilized as guidance for the initial dose level, but more than 4 administrations or higher administered activities may be feasible before encountering clinically significant toxicity. 4.3.4. Imaging-Based Participant Selection and Dosimetry copper-64 A K Y-2519 is intended to be utilized as a participant selection tool throughout the AKY2519-02 study. copper-64 A K Y-2519 PET/CT imaging at the 90-180 min timepoint will be used"
      ],
      "chips": [
        "P02",
        "p49/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a049.jpg",
      "cap": "Protocol page 49 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 50 of 118 · to identify participants with a [64Cu]Cu-AKY-2519 positive lesion for treatment with…",
      "audio": [
        "to identify participants with a copper-64 A K Y-2519 positive lesion for treatment with actinium-225 A K Y-2519. Additionally, approximately participants will undergo copper-64 A K Y-2519 PET/CT and actinium-225 A K Y-2519 SPECT/CT imaging (outlined in Table 20) as part of an integrated dosimetry study. For all other participants, imaging-based participant selection will continue using the 90-180 min imaging timepoint to confirm participant eligibility. 4.4.",
        "Benefit/Risk Assessment More detailed information about the known and expected benefits and risks and reasonably expected AEs may be found in the Investigator’s Brochures. 4.4.1. Risk Assessment In preclinical studies conducted to date evaluating the toxicity of the A K Y-2519 binder, no toxicity related to the A K Y-2519 binder was observed. In addition, preclinical studies suggest a low likelihood of normal tissue toxicity at planned administered activities.",
        "However, toxicities common to radiopharmaceuticals are described below. Nephrotoxicity Nephrotoxicity is an adverse effect commonly associated with radiopharmaceuticals. Renal clearance is the primary expected excretion route for A K Y-2519. To mitigate this potential adverse drug reaction, kidney function will be documented prior to initiation of treatment and monitored per protocol throughout therapy.",
        "No clinically relevant nephrotoxicity is anticipated from [⁶4Cu]Cu-A K Y-2519 given the extremely low levels of absorbed dose anticipated from this administration (see Investigator’s Brochure). Hematological Toxicities Given the risk of bone marrow toxicities associated with radiopharmaceuticals, participants must demonstrate adequate bone marrow function in order to be eligible for the study [see Inclusion Criteria Section 7.1].",
        "In addition, prior to initiation of each subsequent treatment cycle, documentation of adequate bone marrow function is required for continuation of treatment. Treatment will be delayed for participants not meeting the prespecified thresholds. If adequate recovery is not observed and the subsequent cycle is delayed >4 weeks the treating Investigator will consider discontinuation of treatment. Treatment continuation after a delay of >4 weeks requires Medical Monitor approval.",
        "No clinically relevant bone marrow toxicity is anticipated from copper-64 A K Y-2519 given the extremely low levels of absorbed dose anticipated from this administration. Drug Interactions There is no available data on drug-drug interactions with actinium-225 A K Y-2519 or [64Cu]Cu-AKY2519.",
        "Fertility, Pregnancy, and Lactation The effects of actinium-225 A K Y-2519 or copper-64 A K Y-2519 on fertility have not been specifically studied, but reproductive organs are known to be exquisitely sensitive to radiation. Participants"
      ],
      "chips": [
        "P02",
        "p50/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a050.jpg",
      "cap": "Protocol page 50 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 51 of 118 · with fertility concerns should not be offered treatment with [225Ac]Ac-AKY-2519 or…",
      "audio": [
        "with fertility concerns should not be offered treatment with actinium-225 A K Y-2519 or imaging with copper-64 A K Y-2519. The effects of actinium-225 A K Y-2519 or copper-64 A K Y-2519 on pregnancy have not been specifically studied, but the developing fetus is known to be exquisitely sensitive to radiation.",
        "Women of child-bearing potential (WOCBP) who are candidates for actinium-225 A K Y-2519 should be on a highly effective method of contraception prior to initiation of imaging/treatment and be willing to continue through treatment and for 6 months following treatment completion or for 3 months after copper-64 A K Y-2519 imaging alone for participants who are not eligible to continue on to treatment.",
        "A female is considered of childbearing potential following menarche and until becoming postmenopausal unless permanently sterile (i.e., total hysterectomy or bilateral oophorectomy). WOCBP should be confirmed as non-pregnant [see Inclusion Criteria- Section 7.1] prior to initiation of imaging and treatment and confirmed as non-pregnant during treatment as described in the Schedule of Assessments.",
        "Similarly, male participants should avoid impregnating their female partners of child-bearing potential via true abstinence or use of a condom. Female partners should be utilizing highly effective contraception throughout treatment and for 6 months following their partners actinium-225 A K Y-2519 treatment completion or for 3 months after copper-64 A K Y-2519 imaging alone.",
        "All participants should avoid sperm or oocyte donation throughout treatment and for 6 months following treatment completion. The effects of actinium-225 A K Y-2519 and copper-64 A K Y-2519 on lactation and the possibility of transmission of radioactivity to the infant are unknown. As a result, lactating mothers should not be offered treatment with actinium-225 A K Y-2519 or imaging with copper-64 A K Y-2519. 4.4.2.",
        "Benefit Assessment Clinical benefit has not yet been demonstrated since this is the first-in-human study with actinium-225 A K Y-2519. 4.4.3. Overall Benefit: Risk Conclusion Taking into account the measures to minimize risk to participants participating in this study, the potential risks identified in association with the study drug are justified by the potential benefits that may be afforded to previously treated participants with locally advanced or metastatic cancers."
      ],
      "chips": [
        "P02",
        "p51/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a051.jpg",
      "cap": "Protocol page 51 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 52 of 118 · Protocol body · page 52",
      "audio": [
        "5. OBJECTIVES AND ENDPOINTS 5.1. Part 1 Table 11: Objectives and Endpoints (Part 1) Objectives Endpoints Primary x Evaluate the safety and tolerability of actinium-225 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers.",
        "x Occurrence of adverse events (AEs) by severity x Occurrence of serious adverse events (SAEs) x Determine the maximum tolerated dose (maximum tolerated dose) or maximum administrated dose (maximum administered dose) and recommended expansion dose (recommended expansion dose) of x Occurrence of dose-limiting toxicity (dose-limiting toxicity) Secondary x Evaluate the safety and tolerability of copper-64 A K Y-2519 in participants with previously treated locally advanced or",
        "metastatic cancers. x Occurrence of AEs by severity x Occurrence of SAEs x Characterize the pharmacokinetics of copper-64 A K Y-2519 and actinium-225 A K Y-2519.",
        "x Blood and urine radioactivity x Determine the objective response rate (objective response rate), duration of objective response (duration of response), and progression free survival (progression-free survival) by dose level to actinium-225 A K Y-2519, utilizing Response Evaluation Criteria in Solid Tumors (R E C I S T) v1.1, as determined by the Investigator, or Prostate Cancer Working Group 3 (P C W G 3) modified R E C I S T v1.1 for m C R P C, including PSA50 and PSA90",
        "response rates. x objective response rate (R E C I S T v1.1; P C W G 3 [m C R P C]) x duration of response x progression-free survival x PSA50 response rate (m C R P C) x PSA90 response rate (m C R P C) x Characterize the population-based dosimetry of actinium-225 A K Y-2519 using copper-64 A K Y-2519 as a surrogate.",
        "x Absorbed dose to normal tissues x Absorbed dose to tumors Exploratory x Compare copper-64 A K Y-2519 PET/CT dosimetry versus direct actinium-225 A K Y-2519 SPECT/CT dosimetry. x actinium-225 A K Y-2519 absorbed dose to normal tissues x copper-64 A K Y-2519 absorbed dose to normal tissues x Explore the relationship between copper-64 A K Y-2519 predicted absorbed tumor dose and objective response.",
        "x Absorbed dose to tumors x Objective response rate (R E C I S T v1.1; P C W G 3 [m C R P C]) x Explore the impact of actinium-225 A K Y-2519 on tumor transcriptional profiles and immunomodulation in the tumor microenvironment via biopsy prior to Cycle 2 (or any other cycle after that or at end of treatment).",
        "x Global transcriptional response to actinium-225 A K Y-2519 in tumor or surrogate tissue x Baseline and post-treatment immune signatures in participants treated with x Explore circulating markers of progression and immunomodulation in pre- and post-treatment blood or serum samples. x Changes in ctDNA in response to"
      ],
      "chips": [
        "P02",
        "p52/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a052.jpg",
      "cap": "Protocol page 52 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 53 of 118 · Objectives Endpoints x Changes in circulating immune cells or cytokine levels x…",
      "audio": [
        "Objectives Endpoints x Changes in circulating immune cells or cytokine levels x Explore changes in urinary biomarkers of acute kidney injury following administration of actinium-225 A K Y-2519. x Alteration in kidney injury markers (e.g. NGal, KIM1 or similar) in relation to administered activity x Explore anti-drug antibody (anti-drug antibody) generation in serum samples.",
        "x Presence and concentration of ADAs in serum x Explore the relationship between copper-64 A K Y-2519 tumor uptake (SUVmax/mean)/dose with B 7-H 3 tumor expression. x B 7-H 3 tumor expression x SUVmax/mean x Absorbed tumor dose (Gy) x Assess health-related quality of life.",
        "x Change in quality of life over time x Determine the treatment response using a quantitative volumetric assessment on copper-64 A K Y-2519 PET/CT at screening and 12 weeks from Cycle 1 Day 1 for exploratory comparison with R E C I S T v1.1 (or PXWG3 modified R E C I S T v1.1 for m C R P C) assessment. x Tumor response with CT per R E C I S T v1.1 assessment (P C W G 3 [m C R P C]) x Tumor response with copper-64 A K Y-2519 PET/CT per volumetric assessment 5.2.",
        "Part 2 Table 12: Objectives and Endpoints (Part 2) Objectives Endpoints Primary x Determine the objective response rate by tumor type to actinium-225 A K Y-2519, utilizing R E C I S T v1.1, as determined by the Investigator, in participants with previously treated locally advanced or metastatic cancers.",
        "x objective response rate (R E C I S T v1.1; P C W G 3 [m C R P C]) Secondary x Determine the duration of objective response, progression free and overall survival in each tumor type for participants treated with [225Ac]Ac-AKY2519.",
        "x duration of response x progression-free survival x overall survival x PSA50 response rate (m C R P C) x PSA90 response rate (m C R P C) x Further characterize the safety and tolerability of actinium-225 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers.",
        "x Occurrence of AEs by severity x Occurrence of SAEs x Further characterize the safety and tolerability of copper-64 A K Y-2519 in participants with previously treated locally advanced or metastatic cancers. x Occurrence of AEs by severity x Occurrence of SAEs x Characterize the pharmacokinetics of copper-64 A K Y-2519 and actinium-225 A K Y-2519.",
        "x Blood and urine radioactivity Exploratory x Explore the relationship between copper-64 A K Y-2519 predicted absorbed tumor dose and objective response. x Absorbed dose to tumors. x Objective response rate (R E C I S T v1.1; P C W G 3 [m C R P C])"
      ],
      "chips": [
        "P02",
        "p53/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a053.jpg",
      "cap": "Protocol page 53 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 54 of 118 · Objectives Endpoints x Explore the impact of [225Ac]Ac-AKY-2519 on tumor…",
      "audio": [
        "Objectives Endpoints x Explore the impact of actinium-225 A K Y-2519 on tumor transcriptional profiles and immunomodulation in the microenvironment via biopsy prior to Cycle 2 (or any other cycle after that or at end of treatment).",
        "x Global transcriptional response to actinium-225 A K Y-2519 in tumor or surrogate tissue x Baseline and post-treatment immune signatures in participants treated with x Explore circulating markers of progression and immunomodulation in pre- and post-treatment blood or serum samples.",
        "x Changes in ctDNA in response to x Changes in circulating immune cells or cytokines levels x Explore changes in urinary biomarkers of acute kidney injury following administration of actinium-225 A K Y-2519. x Alteration in kidney injury markers (e.g. NGal, KIM1 or similar) in relation to administered activity x Explore anti-drug antibody (anti-drug antibody) generation in serum samples.",
        "x Presence and concentration of ADAs in serum x Explore the relationship between copper-64 A K Y-2519 tumor uptake (SUVmax/mean)/dose with B 7-H 3 expression. x B 7-H 3 expression x SUVmax/mean x Absorbed tumor dose (Gy) x Assess health-related quality of life. x Change in quality of life over time.",
        "x Determine the treatment response using a quantitative volumetric assessment on copper-64 A K Y-2519 PET/CT at screening and 12 weeks from Cycle 1 Day 1 for exploratory comparison with R E C I S T v1.1. x Tumor response with CT per R E C I S T v1.1 or P C W G 3 (m C R P C) assessment x Tumor response with copper-64 A K Y-2519 PET/CT per volumetric assessment"
      ],
      "chips": [
        "P02",
        "p54/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a054.jpg",
      "cap": "Protocol page 54 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 55 of 118 · Protocol body · page 55",
      "audio": [
        "6. STUDY DESIGN 6.1. Overall Design Up to 152 participants will be enrolled in this Phase 1b, 2-part, multicenter, open label study to evaluate the safety, tolerability, dosimetry, and pharmacokinetics (pharmacokinetics) of copper-64 A K Y-2519 and/or actinium-225 A K Y-2519, as well as the preliminary antitumor activity of [225Ac]Ac-AKY2519 in participants with B 7-H 3 imaging positive solid tumors.",
        "The study will be a two-part study consisting of a dose escalation phase with backfill (Part 1) and a dose expansion phase (Part 2).",
        "Part 1 dose escalation will determine the maximum tolerated (maximum tolerated dose) or maximum administrated dose (maximum administered dose) of actinium-225 A K Y-2519 in up to 81 participants with the following locally advanced or metastatic solid tumors:  non-small cell lung cancer (non-small cell lung cancer)  extensive-stage small cell lung cancer (extensive-stage small cell lung cancer)  metastatic castration-resistant prostate cancer (m C R P C)  head and neck",
        "squamous cell carcinoma (head and neck squamous cell carcinoma)  esophageal squamous cell carcinoma (esophageal squamous cell carcinoma)  colorectal cancer (colorectal cancer) Part 1 is open to participants with copper-64 A K Y-2519 positron emission tomography (PET)/computed tomography (CT) imaging-positive tumors, defined as tumor uptake greater than background in at least one lesion on copper-64 A K Y-2519 PET/CT images at the 90-180 min timepoint (refer to imaging",
        "manual for further detail). Participants with non-small cell lung cancer will be required to have progressed on, or after prior anti-programmed cell death protein 1/programmed cell death ligand 1 (PD-[L]1) and chemotherapy given either concurrently or separately. All other eligible B 7-H 3 imaging positive tumor types will be required to have received prior therapies known to provide clinical benefit for their tumor type and stage, if eligible and appropriate.",
        "Three dose levels (6 megabecquerels, 9 megabecquerels and 12 megabecquerels) are planned to be explored during dose escalation, dosing (de)escalation decisions will be based on 3 evaluable participants at a given dose level. No more than one participant with a diagnosis of metastatic-castration resistant prostate cancer (m C R P C) or colorectal cancer (colorectal cancer) may be enrolled at any dose level.",
        "Alternative dose levels may be explored based on tolerability following a review of available data and discussion with the Safety Review Committee (safety review committee). Dose escalation will be guided by a Bayesian Optimal Interval (B O I N) design.",
        "Dose limiting toxicities (DLTs) will be defined as any predefined adverse event (AE; defined in Table 1) that occurs during the 4-week dose-limiting toxicity observation period following the first dose of actinium-225 A K Y-2519, except those that are clearly and incontrovertibly due to extraneous circumstances (e.g., disease progression or intercurrent illness). A discussion with the Sponsor’s Medical Expert is required before an AE is designated as a dose-limiting toxicity.",
        "Part 1 will also incorporate a backfill strategy to evaluate two dose levels for identification of the recommended expansion dose (recommended expansion dose) to be used in Part 2. The total number of participants allotted for Part 1 (N= up to 81) will include participants enrolled during dose escalation (N ≈ 21) and those being enrolled in two selected backfilled dose levels (up to N=30 at each dose level)."
      ],
      "chips": [
        "P02",
        "p55/118",
        "B7-H3 Ac-225"
      ],
      "visual": "schema",
      "image": "assets/protocol/aky/a055.jpg",
      "cap": "Protocol page 55 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 56 of 118 · During Part 1, participants may be backfilled at two dose levels (Dose Level A and…",
      "audio": [
        "During Part 1, participants may be backfilled at two dose levels (Dose Level A and B) to gather further information on the safety and efficacy to determine a dose to be used for dose expansion (Part 2). Two dose levels will be selected for backfilling up to 30 participants at each dose level. The total number of participants per dose level (N=30) includes those participants enrolled during dose escalation at the selected dose levels for backfill.",
        "The backfill dose levels will have been determined safe per B O I N design, show promising anti-tumor activity and will be decided on by the Sponsor following review of all available data with the safety review committee. Participants enrolled in the backfill will be required to meet the same enrollment criteria outlined for dose escalation (i.e., copper-64 A K Y-2519 PET/CT positive lesion, prior anti-cancer therapies, etc.).",
        "Each backfill dose level will enroll a minimum of 15 (N greater than or equal to 15) participants with non-small cell lung cancer. The remainder of participants (N less than or equal to 15) will be comprised of the other eligible B 7-H 3 imaging positive tumors listed above. Additionally, no more than 3 participants with m C R P C may be enrolled per dose level during backfill.",
        "Part 2 dose expansion may commence once there is sufficient evidence to support dose selection, with at least 15 participants treated at each backfill dose.",
        "Based on data collected in Part 1-including toxicity, efficacy, tolerability, pharmacokinetics and pharmacodynamics-the dose that optimizes the overall risk-benefit profile, namely the recommended expansion dose, may be used to proceed to dose expansion (Part 2) in two cohorts following Part 1:  Cohort 1: up to 31 B 7-H 3 imaging positive non-small cell lung cancer participants  Cohort 2: up to 40 B 7-H 3 imaging positive solid tumors (with the exception of m C R P C)",
        "Cohort 2 will enroll no more than 20 (N less than or equal to 20) participants of a given tumor type and may not enroll any participants with m C R P C. Additionally, the Sponsor reserves the right to select specific non-small cell lung cancer subtypes for enrollment to Cohort 1, as well as the tumor types to be enrolled in Cohort 2 following the review of Part 1 data.",
        "The occurrence of treatment-emergent AEs (TEAEs) as well as the observed clearance of radioactivity from blood and absorbed normal tissue doses predicted by copper-64 A K Y-2519 and actinium-225 A K Y-2519 based dosimetry will be considered in selecting the recommended expansion dose. In addition to safety, preliminary efficacy data will also be considered.",
        "Participants treated at the recommended expansion dose in Part 1 who meet the eligibility criteria for Cohort 1 or 2 will count toward the Part 2 target sample size for each respective cohort for assessing the efficacy and safety of actinium-225 A K Y-2519 in the respective indication.",
        "Participants enrolled in Part 2 of the study will be required to have at least one copper-64 A K Y-2519 PET/CT positive lesion at the 90-180 min timepoint and will need to continue to meet the prior anti-cancer therapies requirement set forth in Part 1.",
        "At select sites, approximately 10 evaluable participants will undergo actinium-225 A K Y-2519 SPECT/CT and copper-64 A K Y-2519 PET/CT imaging to support direct actinium-225 A K Y-2519 dosimetry analysis and assess the use of copper-64 A K Y-2519 as a surrogate.",
        "Additionally, the described imaging will be used to understand the variability in predicted absorbed dose to normal tissues across the patient population and to characterize the dose to tumor for future correlation of absorbed dose and treatment response/toxicity. Participants will undergo copper-64 A K Y-2519 PET/CT imaging at three timepoints during screening as described in Table 20.",
        "The selected participants will also undergo direct actinium-225 A K Y-2519 SPECT/CT imaging at three timepoints following actinium-225 A K Y-2519 administration on Cycle 1 Day 1 as outlined in Table 20. Depending on the day of actinium-225 A K Y-2519 dosing, actinium-225 A K Y-2519 SPECT/CT may be"
      ],
      "chips": [
        "P02",
        "p56/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a056.jpg",
      "cap": "Protocol page 56 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 57 of 118 · collected at either the 40-56 hour or 72-96 hour imaging window",
      "audio": [
        "collected at either the 40-56 hour or 72-96 hour imaging window. The selected imaging window should align with the copper-64 A K Y-2519 PET/CT imaging window selected during the screening visit. No more than 4 participants, of the 10 undergoing actinium-225 A K Y-2519 SPECT/CT and copper-64 A K Y-2519 PET/CT imaging, may share the same tumor type.",
        "All other participants will only be required to undergo copper-64 A K Y-2519 imaging at the 90-180 min timepoint during screening to confirm eligibility. In addition, serial blood and urine samples will be collected following copper-64 A K Y-2519 administration during screening for determination of copper-64 A K Y-2519 pharmacokinetics (via measured radioactivity).",
        "Serial blood and urine samples will be collected for determination of actinium-225 A K Y-2519 pharmacokinetics during Part 1 and Part 2 on Cycle 1 Day 1 followed by sparse sampling on Day 1 of subsequent cycles. Collection of blood for actinium-225 A K Y-2519 pharmacokinetics in Part 2 may be reduced based on the findings in Part 1. Prior to the administration of the next treatment cycle, participants must meet all criteria for treatment continuation.",
        "Treatment may be delayed up to two weeks from the next planned date of actinium-225 A K Y-2519 administration for logistical reasons, to allow recovery from an AE, or at the investigator’s discretion after agreement with the sponsor. Treatment delays >2 weeks will require approval from the Medical Monitor prior to resuming treatment. Intra participant dose escalation will not be permitted.",
        "In Parts 1 and 2, participants undergoing treatment with actinium-225 A K Y-2519 will receive up to 4 cycles separated by at least 4 weeks. For participants who demonstrate clinical benefit, and are receiving a dose of less than or equal to 9 megabecquerels, an additional 2 cycles may be administered to maintain or further improve participant benefit.",
        "Clinical benefit will be defined as demonstration of stable disease or an objective response, or additionally for m C R P C only, sustained PSA response as characterized by continued decline or maintenance of PSA levels at a reduced level under treatment without radiographic progression. Archival tissue will be collected for all participants, if available.",
        "Participants with tumors that are safely accessible to biopsy and show uptake on copper-64 A K Y-2519 PET/CT images will be approached for an optional pre-treatment biopsy. Participants enrolling in the backfill will be required to provide an on-treatment biopsy, at Cycle 2 or later, until on-treatment biopsies are collected from 15 participants.",
        "Participants enrolled in Part 2 expansion cohorts will also be required to provide on-treatment biopsies until a total of 10 are collected per cohort. Tissue collected will be evaluated for B 7-H 3 expression to explore the relationship with imaging findings. Parts 1 and 2 of the study will have a Screening, Treatment, and Follow up Phase.",
        "The Screening Phase starts when the participant has signed the informed consent form and will last up to 28 days from the date of informed consent. The Treatment Phase begins on the day of the first dose of actinium-225 A K Y-2519 treatment and is completed at the End of Treatment (end of treatment) visit. The Follow-Up Phase will begin following the completion of the end of treatment visit and will last up to 5 years or until death, whichever occurs earlier.",
        "Clinical follow up will occur at scheduled intervals to assess disease response, survival and any AEs of special interest (AESIs)."
      ],
      "chips": [
        "P02",
        "p57/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a057.jpg",
      "cap": "Protocol page 57 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 58 of 118 · Figure 9: Part 1 Dose Levels 6",
      "audio": [
        "Figure 9: Part 1 Dose Levels 6.2. Duration of the Study Duration of the study will be divided into 3 phases: Screening, Treatment, and Follow-up. The Screening period will last up to 28 days prior to Cycle 1 Day 1. The Treatment Phase begins on the day of the first dose of actinium-225 A K Y-2519 treatment and is completed at the end of treatment Visit. end of treatment is defined as the date of last administration of actinium-225 A K Y-2519.",
        "The end of treatment visit should be conducted 30 days ( plus or minus 7 days) after the end of treatment date. After the end of treatment, participants will be followed for 5 years (every 3 months [ plus or minus 14 days] in the first 2 years and then every 6 months [ plus or minus 1 month]) or until death, whichever is earlier, in long-term follow-up (LTFU).",
        "Tumor assessment by contrast-enhanced CT of the chest, abdomen, and pelvis, as well as bone scans for m C R P C participants, will be done every 8 weeks ( plus or minus 1 week) throughout the duration of the study, including the follow-up period, until disease progression or initiation of subsequent anticancer therapy.",
        "Survival follow-up with adverse event of special interest (A E S I) monitoring will continue for up to 5 years or until death, withdrawal of consent, loss to follow up, or study closure, whichever is earlier. Participants who are lost to follow-up or withdraw consent from treatment will be followed for survival, either through direct contact or by collecting public records (e.g., death certificate) unless prohibited by local laws. 6.3.",
        "End of Study Definition The end of the study is defined as the time at which the last participant completes the last protocol defined assessment, or is considered lost to follow-up, withdraws consent, or dies; or when the study is ended by the Sponsor; or when the study is ended as per request of a competent authority. The Sponsor may terminate or suspend the study at any time.",
        "In this case, the Sponsor will promptly inform the Investigators, the IECs/IRBs, the regulatory authorities, and any contract research organization(s) used in the study of the reason for termination or suspension, as specified by the applicable regulatory requirements. The Investigator will promptly inform participants and should ensure appropriate participant therapy and/or follow-up.",
        "All participants actively under treatment will complete treatment unless the study was terminated for safety reasons."
      ],
      "chips": [
        "P02",
        "p58/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a058.jpg",
      "cap": "Protocol page 58 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 59 of 118 · Protocol body · page 59",
      "audio": [
        "7. STUDY POPULATION 7.1. Inclusion Criteria Participants must meet the following criteria to be eligible for the study: 1. Age greater than or equal to 18 years 2. Radiologic confirmation of disease on standard of care imaging (CT, MRI or PET/CT) with at least one measurable tumor lesion per R E C I S T v1.1. Participants with m C R P C are not required to have measurable disease per R E C I S T v1.1. 3.",
        "Must have uptake greater than background in one or more lesions on the [64Cu]Cu-AKY2519 PET/CT images at the 90-180 min timepoint 4. Easter Cooperative Oncology Group (E C O G) Performance Status 0 to 1 5.",
        "Adequate end-organ function: x Bone Marrow: hemoglobin (Hb) greater than or equal to 9g/dL, absolute neutrophil count (ANC) greater than or equal to 1.5x109/L, platelets greater than or equal to 100 x 109/L; without transfusion or injection of hematopoietic factors such as granulocyte colony-stimulating factor (GCSF) in the last 7 days x Renal: estimated glomerular filtration rate (E G F R) greater than or equal to 60 mL/min/1.73 m2 using institutional standard calculation x",
        "Liver: aspartate aminotransferase (AST)/alanine aminotransferase (ALT) less than or equal to 3x ULN; less than or equal to 5x ULN in the presence of liver metastasis, total bilirubin less than or equal to 1.5x ULN; <3x ULN in known Gilbert’s disease 6. Ability to give informed consent and comply with study requirements including serial imaging 7.",
        "Participants with a history of brain metastases must be neurologically stable, asymptomatic and not have received corticosteroids for the purpose of maintaining neurological integrity for greater than or equal to 2 weeks prior to initiating study treatment. Participants with confirmed leptomeningeal metastasis, brainstem metastasis, or spinal cord compression may not enroll. 8.",
        "Participants with a prior history of additional malignancy unrelated to enrollment in this study who have been disease-free for more than 1 year are eligible. If the risk of metastasis and death are negligible, participant is eligible regardless of time since diagnosis 9. Participants must have documented disease progression on, or after most recent prior line of therapy 10.",
        "Contraception: Females must be either post-menopausal, permanently sterile (i.e., total hysterectomy or bilateral oophorectomy), or be utilizing highly effective contraception throughout treatment and for the 6 months following the last treatment administration x Post-menopausal is defined as one of the following: at least 60 years of age, medically confirmed ovarian failure, or <60 years old with cessation of menses for at least 12 consecutive months (without alternative",
        "pathological or physiological cause such as"
      ],
      "chips": [
        "P02",
        "p59/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a059.jpg",
      "cap": "Protocol page 59 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 60 of 118 · chemotherapy or hormonally-induced amenorrhea) and serum levels of follicle…",
      "audio": [
        "chemotherapy or hormonally-induced amenorrhea) and serum levels of follicle stimulating hormone (FSH) within the reference range for post-menopausal females x Highly effective contraception is defined as a-e, provided it has been used (or was performed if a procedure) for an adequate period of time to ensure effectiveness, in addition to the barrier method described below: a.",
        "Combined (estrogen and progestogen containing) hormonal contraception (oral, intravaginal, transdermal) associated with inhibition of ovulation b. Progestogen-only hormonal contraception associated with inhibition of ovulation (oral, injectable, implantable, intrauterine device, intrauterine hormone-releasing system) c. Bilateral tubal occlusion d. Male sterilization with confirmed absence of sperm in the post-vasectomy ejaculate e.",
        "Sexual abstinence For this study, sexual abstinence is considered a highly effective method of birth control only if refraining completely from heterosexual intercourse during the entire period of risk (i.e., during study treatment, including during temporary breaks from treatment, and for at least 6 months following actinium-225 A K Y-2519 treatment or for 3 months after [64Cu]CuA K Y-2519 imaging alone).",
        "In addition to one of the options described in a - d, a barrier method must be also used by participants and/or their partners (i.e., condom without spermicidal foam/gel/cream/suppository or fat or oil-containing lubricants) throughout treatment and for the 6 months following the last treatment administration.",
        "Non-sterilized male participants should avoid fathering a child via true abstinence (no heterosexual intercourse during treatment and for 6 months following last treatment administration) or use of a condom. Female partners should be either post-menopausal or utilizing highly effective contraception including a barrier method as described above through treatment and for the 6 months following the last treatment administration.",
        "Additional Inclusion Criteria for Parts 1 and 2: 11. For non-small cell lung cancer participants: a. Histologic or cytologic confirmation of locally advanced or metastatic non-small cell lung cancer b. Progressed on, or after prior anti-P D L 1 and chemotherapy given concurrently or separately, or are ineligible for standard of care treatment 12. For other B 7-H 3 imaging positive solid tumors: a.",
        "Histologic or cytologic confirmation of locally advanced or metastatic extensive-stage small cell lung cancer, head and neck squamous cell carcinoma, esophageal squamous cell carcinoma or colorectal cancer b. Participants must have received prior therapies known to provide clinical benefit for their tumor type and stage, if eligible and appropriate 13. For mCPRC only: a. Histologic or cytologic confirmation of metastatic prostatic adenocarcinoma"
      ],
      "chips": [
        "P02",
        "p60/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a060.jpg",
      "cap": "Protocol page 60 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 61 of 118 · Protocol body · page 61",
      "audio": [
        "b. Participants must have received prior therapies known to provide clinical benefit for their tumor type and stage, if eligible and appropriate c. Two consecutive increases in assessed PSA levels during or after the most recent systemic therapy with a minimum final PSA value of 2 ng/mL d. Castrate levels of serum testosterone (<50 ng/dL) 7.2. Exclusion Criteria Participants who meet any of the following criteria will be excluded from the study: 1.",
        "Any investigational agent administered within 28 days prior to actinium-225 A K Y-2519 initiation or 5 half-lives, whichever is earlier 2. Known hypersensitivity to copper-64 A K Y-2519 or actinium-225 A K Y-2519 or formulation components 3. Cytotoxic chemotherapy, targeted therapy, biologic agents, immunotherapy, or external beam-radiotherapy delivered within the 28 days prior or 5 half-lives, whichever is earlier, to actinium-225 A K Y-2519 initiation.",
        "Palliative radiation must have been completed greater than or equal to 2 weeks prior to treatment initiation. 4. Treatment with a prior radioligand therapy 5. Prior treatment with a B 7-H 3 targeted therapy 6.",
        "Clinical presentation of metastatic disease with a high likelihood of rapid functional or physical decline in the 3 months following enrollment (e.g., leptomeningeal disease, peritoneal carcinomatosis, symptomatic brain metastasis requiring urgent treatment) per judgement of the Investigator. Clinical scenarios in which prognosis is unclear should be discussed with the Medical Monitor 7.",
        "Participants with impaired cardiac function or clinically significant cardiac disease including: a. Baseline-corrected mean QT level using Fridericia formula (QTcF) >470 ms or congenital QT syndrome. For participants with known bundle-branch blocks, use the QTcR equation b. Severe/unstable angina, New York Heart Association (NYHA) classification 4 congestive heart failure (CHF) 8.",
        "Concurrent serious medical conditions, including, but not limited to, known and uncontrolled infection, active hepatitis B or C, or other significant co-morbid conditions that would impair study participation or impact the assessment of treatment related toxicity. In participants with a history of hepatitis B virus (HBV), hepatitis B core antibody (HBcAb) testing is required and if positive, HBV DNA testing will be performed, and if positive, the participant will be excluded.",
        "Participants with a history of hepatitis C virus (HCV) infection should have completed curative anti-HCV treatment and have HCV viral load below the limit of quantification. Participants with a history of human immunodeficiency virus (HIV) infection should have CD4+ T-cell (CD4+) counts greater than or equal to 350 cells/μL 9. Pregnancy or lactating/breastfeeding"
      ],
      "chips": [
        "P02",
        "p61/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a061.jpg",
      "cap": "Protocol page 61 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 62 of 118 · Protocol body · page 62",
      "audio": [
        "7.3. Screen Failures A screen failure occurs when a participant who has consented to participate in the clinical study is not subsequently enrolled. A minimal set of screen failure information is required to ensure transparent reporting of screen failure participants to meet the CONSORT publishing requirements and to respond to queries from regulatory authorities. Minimal information includes demography, screen failure details, eligibility criteria, and any SAE.",
        "Individuals who do not meet the criteria for participation in this study (screen failure) may be rescreened once within 1 month of their original screening. Participants rescreened will be assigned a new ID number."
      ],
      "chips": [
        "P02",
        "p62/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a062.jpg",
      "cap": "Protocol page 62 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 63 of 118 · IMP · 49-aa DOTA-PEG4 · Figures 10–11",
      "audio": [
        "8. STUDY INTERVENTION(S) AND CONCOMITANT THERAPY 8.1. Study Intervention(s) Administered A K Y-2519 is a synthetic 49 amino acid miniprotein with a C-terminal amide and a DOTA P E G 4 spacer covalently attached to the amino terminus. The DOTA is a chelator that allows for stable conjugation of Actinium-225 (225Ac) or Copper-64 (64Cu).",
        "The 225Ac is an alpha-emitting radionuclide with a half-life of 9.9 days, and 64Cu is a positron-emitting radionuclide with a half-life of 12.7 hours. The actinium-225 A K Y-2519 is being developed as a targeted radiopharmaceutical for the treatment of adult patients with locally advanced or metastatic cancers. copper-64 A K Y-2519 is under development as an imaging tool for the identification of patients who may benefit from actinium-225 A K Y-2519 treatment.",
        "Figure 10: Structure of actinium-225 A K Y-2519 Figure 11: Structure of copper-64 A K Y-2519"
      ],
      "chips": [
        "P02",
        "p63/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a063.jpg",
      "cap": "Protocol page 63 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "C-terminal amide + DOTA-PEG4 on the amino terminus.",
        "Not PSMA, not DLL3, not tarlatamab. Same chelator, two nuclides."
      ]
    },
    {
      "title": "Page 64 of 118 · Table 13: [225Ac]Ac-AKY-2519 and [64Cu]Cu-AKY-2519 Description Description…",
      "audio": [
        "Table 13: actinium-225 A K Y-2519 and copper-64 A K Y-2519 Description Description copper-64 A K Y-2519 Name: Actinium 225 - Nα [(4,7,10Tricarboxymethyl-1,4,7,10tetrazacyclododec-1-yl)acetyl]-aminopolyethylene glycol 4-propionyl-LCysteinyl-L-Alanyl-Ltrimethylammoniolysyl-L-Glutamyl-LLysinyl- L-Isoleucyl- L-Alanyl- L-Alanyl- LLeucyl-LSeryl- L-Glutamyl- L-Isoleucyl- LIsoleucyl-L-Tryptophanyl-L-Leucyl- LProlyl-L-Cysteinyl-",
        "L-Leucyl-Threonyl-LTyrosyl-L-Alanyl-L-Glutaminyl-L-IsoleucylL-methylammoniolysyl-L-Alanyl-LPhenylalanyl-L-Isoleucyl-L-Alanyl-Lmethylammoniolysyl-L-Leucyl-LAsparaginyl-L-methylammoniolysyl-LAspartyl-L-Prolyl-L-Cysteinyl-LGlutaminyl-L-Seryl-L-Seryl-L- Glutamyl-LIsoleucyl-L-Leucyl-L-Seryl-L-Glutamyl-LAlanyl-L- methylammoniolysyl-L-GlutamylL-Leucyl-L-Cysteinyl-L- Serinamide cyclic (1 → 35, 17 → 48) disulfide Copper64 - Nα",
        "[(4,7,10-Tricarboxymethyl1,4,7,10-tetrazacyclododec-1-yl)acetyl]-aminopolyethylene glycol 4-propionyl-L-CysteinylL-Alanyl-L-trimethylammoniolysyl-LGlutamyl-L-Lysinyl- L-Isoleucyl- L-Alanyl- LAlanyl- L-Leucyl-LSeryl- L-Glutamyl- LIsoleucyl- L-Isoleucyl-L-Tryptophanyl-LLeucyl- L-Prolyl-L-Cysteinyl-",
        "L-LeucylThreonyl-L-Tyrosyl-L-Alanyl-L-Glutaminyl-LIsoleucyl-L-methylammoniolysyl-L-Alanyl-LPhenylalanyl-L-Isoleucyl-L-Alanyl-Lmethylammoniolysyl-L-Leucyl-L-AsparaginylL-methylammoniolysyl-L-Aspartyl-L-Prolyl-LCysteinyl-L-Glutaminyl-L-Seryl-L-Seryl-L- Glutamyl-L-Isoleucyl-L-Leucyl-L-Seryl-LGlutamyl-L-Alanyl-L- methylammoniolysyl-LGlutamyl-L-Leucyl-L-Cysteinyl-L- Serinamide cyclic (1 → 35, 17 → 48) disulfide Molecular Formula: 225AcC276H453N65O83S4 64CuC276H454N65O83S4",
        "Molecular Weight (Average): 6363.3 g/mol 6202.8 g/mol actinium-225 A K Y-2519 Injection and copper-64 A K Y-2519 Injection are manufactured under current Good Manufacturing Practice (cGMP) and supplied in a septum-sealed 10 mL glass vial as a unit dose containing up to 10 mL of sterile, non-pyrogenic aqueous solution calibrated to a time of use. The composition of the actinium-225 A K Y-2519 Injection and copper-64 A K Y-2519 is shown in Table 14 and Table 15, respectively.",
        "Table 14: Composition of actinium-225 A K Y-2519 Injection Name of ingredient(s) Quantity per Unit dose Function Up to 325 μCi* Active pharmaceutical ingredient A K Y-2519 Up to 184 μg Total quantity of precursor Sodium acetate 0.4% (w/v) Buffer Sodium hydroxide 0.8% (w/v) pH modifier Sodium ascorbate 0.2% (w/v) Stabilizer DiethyleneTriamine PentaAcetate (DTPA) 0.005% (w/v) Metal ion scavenger N-Acetyl-DL-Tryptophan 0.2% (w/v) Stabilizer Ethanol 9% (v/v) Eluent"
      ],
      "chips": [
        "P02",
        "p64/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a064.jpg",
      "cap": "Protocol page 64 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 65 of 118 · Protocol body · page 65",
      "audio": [
        "0.9% Sodium Chloride Injection QS to 10 mL Diluent, Isotonicity * Calibrated to the time of use Table 15: Composition of copper-64 A K Y-2519 Injection Name of ingredient(s) Quantity per Unit dose Function copper-64 A K Y-2519 4 - 6 millicuries* Active pharmaceutical ingredient A K Y-2519 Up to 184 μg Total quantity of precursor Sodium ascorbate 0.2% (w/v) Stabilizer Ethanol 9% (v/v) Eluent 0.9% Sodium Chloride Injection QS to final volume Diluent, Isotonicity * Calibrated",
        "to the time of use 8.2. Packaging and Labeling The actinium-225 A K Y-2519 Injection and copper-64 A K Y-2519 Injection will be supplied in a septum-sealed 10 mL glass vial with an aluminum crimp seal. The glass vial will be labeled and shipped to the clinical site with appropriate packaging.",
        "The glass vial of all study drugs will contain label(s) that will include the following minimum information: x Name of study drug x Dosage strength x Batch number x Subject ID x Expiry date and time The outer packaging of all study drugs will contain label(s) which will include the following minimum information: x Name and address of sponsor x Study number x Investigator identification x Name of study drug x Dosage strength x Batch number x Subject ID x Expiry date and time"
      ],
      "chips": [
        "P02",
        "p65/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a065.jpg",
      "cap": "Protocol page 65 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 66 of 118 · Prep, storage 15–30 °C, 96 h / 48 h",
      "audio": [
        "8.3. Preparation, Handling, Storage, and Accountability 8.3.1. Preparation The dose from the unit dose vial will be withdrawn from the vial using aseptic technique and radiation shielding for both actinium-225 A K Y-2519 Injection and copper-64 A K Y-2519 Injection. These are radioactive products and subject to the radioactive material regulations and licensing requirements of the state as well as local regulations.",
        "Storage and disposal of unused material must be completed in accordance with national or local procedures. 8.3.1.1. Administration The participants will receive IV actinium-225 A K Y-2519 and copper-64 A K Y-2519 Injection as per the schedule of events [Section 1.3]. Administration with actinium-225 A K Y-2519 and copper-64 A K Y-2519 must be performed in accordance with national and/or local radiation and safety requirements.",
        "Compatible administration materials should be used for study drug preparation and administration. For compatible administration materials, refer to the Pharmacy Manual. Refer to the Pharmacy Manual for the maximum hold time for the drug product in the syringe. Details of study drug administration are described in Section 8.1 and Section 8.7. 8.3.2. Storage actinium-225 A K Y-2519 Injection should be stored upright in a lead-shielded container at 15-30 °C, 59-86 °F.",
        "actinium-225 A K Y-2519 Injection is stable up to 96 hours from end of production and should be used by the expiration date and time printed on the label. copper-64 A K Y-2519 Injection should be stored upright in a lead-shielded container at 15-30 °C, 59-86 °F. copper-64 A K Y-2519 Injection is stable up to 48 hours from end of production and should be used by the expiration date and time printed on the label. 8.3.3.",
        "Accountability During the study, use of drug product(s) will be documented and accounted for in the drug accountability form. At the completion of the study, there will be a final reconciliation of drug manufactured, drug consumed, and drug discarded. Access to drug will be limited to Investigators and trained personnel acting under the direction of physicians. While not being used, drug will be stored in a secure area. 8.3.4.",
        "Handling and Disposal The actinium-225 A K Y-2519 Injection and copper-64 A K Y-2519 Injection contain radioactive material and should only be handled by personnel trained in the use of radioactive materials with proper shielding and monitoring. Receipt and use of both actinium-225 A K Y-2519 Injection and copper-64 A K Y-2519 Injection is limited to institutions holding an appropriate handling permit by their competent national or state authority."
      ],
      "chips": [
        "P02",
        "p66/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a066.jpg",
      "cap": "Protocol page 66 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 67 of 118 · Dose regimen, DLT, continuation",
      "audio": [
        "8.4. Measures to Minimize Bias: Randomization and Blinding Not applicable, this is an open-label study. 8.5. Study Intervention Compliance The investigational medicinal product will be administered only at the investigational site under the direction of the Investigator. 8.6. Dose Regimen For background and additional details on copper-64 A K Y-2519, refer to the copper-64 A K Y-2519 Investigator’s Brochure.",
        "For background and additional details on actinium-225 A K Y-2519, refer to the actinium-225 A K Y-2519 Investigator’s Brochure. Participants will be injected IV with a single 148-222 megabecquerels (4-6 millicuries) administration of copper-64 A K Y-2519 and static whole body (skull vertex to mid-thigh) PET/CT images obtained at 90-180 min and timepoints as described in Section 10.5 after administration.",
        "Participants eligible for study participation will receive an IV injection at the assigned dose of actinium-225 A K Y-2519 in Part 1 and expansion dose in Part 2. Participants will be evaluated for repeat dosing every 4 weeks and may receive up to 6 cycles of actinium-225 A K Y-2519 if dosing at less than or equal to 9 megabecquerels and clinical benefit is observed. 8.7.",
        "Study Drug Administration Treatment with actinium-225 A K Y-2519 must be performed in accordance with national and/or local radiation and safety requirements. A saline flush with greater than or equal to 10 mL of normal saline (and visualized blood in tubing in reverse syringe pressure) must be administered to ensure patency of the IV line before administering both the actinium-225 A K Y-2519 and copper-64 A K Y-2519.",
        "actinium-225 A K Y-2519 and copper-64 A K Y-2519 drug products will be administered as a slow bolus intravenous injection with an in-line filter. After administration of actinium-225 A K Y-2519 or copper-64 A K Y-2519, a greater than or equal to 10 mL saline flush will follow. The time of administration for each investigational agent and flush must be recorded.",
        "The activity prior to and after administration must be measured (megabecquerels) and recorded, and the total activity administered be calculated accordingly and recorded. Participants should also be monitored for any evidence of pain or burning sensation during the injection. Participants should be encouraged to maintain a good fluid intake on the days of copper-64 A K Y-2519 or actinium-225 A K Y-2519 administration and the day following therapy.",
        "Hydration via IV drip is recommended. As a pre-emptive measure, a resuscitation cart must be available during injection, the waiting period, and during imaging. Vital signs will be collected within 15 minutes before injection and within 30 minutes following injection for both copper-64 A K Y-2519 and actinium-225 A K Y-2519 to ensure that vital signs are within normal limits (pre-injection levels) before participants are allowed to be discharged. 8.8.",
        "Dose-Limiting Toxicities DLTs will be defined as any predefined T E A E (Table 16) that occurs during the 4-week dose-limiting toxicity observation period following the first dose of actinium-225 A K Y-2519, except those that are clearly"
      ],
      "chips": [
        "P02",
        "p67/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a067.jpg",
      "cap": "Protocol page 67 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 68 of 118 · and incontrovertibly due to extraneous circumstances (e",
      "audio": [
        "and incontrovertibly due to extraneous circumstances (e.g., disease progression or intercurrent illness).",
        "Table 16: Dose-Limiting Toxicities Adverse Event Any of the following: Hematologic Grade 4 neutropenia or thrombocytopenia for more than 7 days Grade 3 or higher thrombocytopenia with clinically significant bleeding (clinically significant as determined per the investigator's clinical judgment) Febrile neutropenia of any grade Non-hematologic adverse events Any Grade 3 or higher with exception of: x Grade 3 nausea/vomiting or diarrhea for less than 72 hours with adequate",
        "antiemetic and other supportive care x Grade 3 fatigue for less than 1 week x Grade 3 or higher electrolyte abnormality that lasts up to 72 hours, is not clinically complicated, and resolves spontaneously or responds to conventional medical interventions x Grade 3 or higher amylase or lipase that is not associated with symptoms or clinical manifestations of pancreatitis.",
        "Hy's law cases Others Any toxicity that results in a >14-day treatment delay or permanent treatment discontinuation Any death not clearly due to the disease progression or extraneous causes 8.9. Treatment Continuation Criteria Every effort should be made to keep the treatment cycles 4 weeks apart at the prescribed doses. Assessment for AEs, including safety labs, must be conducted prior to initiation of each therapeutic treatment cycle.",
        "Results of all safety labs must be available prior to administration of the next cycle and may be obtained up to 72 hours prior to treatment administration.",
        "Participants must meet the following criteria in order to proceed with the next cycle: x Hb greater than or equal to 8 g/dL x ANC greater than or equal to 1.0 x 109/L x Platelet count of greater than or equal to 50 x 109/L x E G F R (in mL/min/1.73 m2) greater than or equal to 30 x Resolution of AEs from prior cycle to less than or equal to Grade 2 or baseline Only labs obtained for evaluation of treatment continuation should be utilized to determine need for dose",
        "modification. At the discretion of the Investigator, a dose of actinium-225 A K Y-2519 may be delayed or reduced (see Table 17 below). Once a dose is reduced, treatment with actinium-225 A K Y-2519 should not be re-escalated."
      ],
      "chips": [
        "P02",
        "p68/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a068.jpg",
      "cap": "Protocol page 68 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 69 of 118 · Protocol body · page 69",
      "audio": [
        "8.10. Dose Delays and Modification Treatment may be delayed up to two weeks for logistical reasons or to allow the participant to recover from an AE. Treatment delays >2 weeks will require discussion with the Medical Monitor prior to resuming treatment. Participants will be allowed 2 dose reductions during the study. The details for toxicity management and dose modification are listed in Table 17.",
        "Clinical scenarios in which dose modification is unclear should be discussed with the Medical Monitor.",
        "Table 17: Toxicity Management and Dose Modification Recommendations Event Grade Management Hematological toxicity: x Hemoglobin <8 g/dL x ANC <1.0 x 109/L x Platelet count of < 50 x 109/L Hgb, ANC and Platelet count greater than or equal to Grade 3 Mandatory: First Occurrence: Hold actinium-225 A K Y-2519 administration until improvement to Grade 2 or baseline and start at the same dose level.",
        "Subsequent Occurrence: Hold [225Ac]Ac-AKY2519 administration until improvement to Grade 2 or baseline and start at 25% reduced dose. For subsequent occurrence, hold [225Ac]Ac-AKY2519 administration until improvement to Grade 2 or baseline and consider another 25% actinium-225 A K Y-2519 dose reduction. Discontinue if recurrent after 50% dose reduction. The use of growth factors is permitted but should be discontinued once the AE resolves to Grade 1 or baseline.",
        "Prophylactic use of growth factors needs to be discussed and approved by Sponsor. Checking hematinic levels (iron, B12, and folate) and providing supplementation is advocated. Transfusions may be given as clinically indicated for anemia and thrombocytopenia. E G F R (in mL/min/1.73 m2) <30 Mandatory: If corrected to greater than or equal to 30 mL/min/1.73 m2 by supportive care measures (i.e., fluid hydration), continue at the same dose.",
        "Reduce actinium-225 A K Y-2519 dose by 25% if recurrent. Otherwise, discontinue actinium-225 A K Y-2519."
      ],
      "chips": [
        "P02",
        "p69/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a069.jpg",
      "cap": "Protocol page 69 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 70 of 118 · Event Grade Management Drug-induced liver injury: x Hy’s law (ALT or AST >3xULN and…",
      "audio": [
        "Event Grade Management Drug-induced liver injury: x Hy’s law (ALT or AST >3xULN and TBL >2xULN or INR >1.5) x ALT or AST >3xULN with the appearance of fatigue, nausea, vomiting, right upper quadrant pain or tenderness, fever, rash, and/or eosinophilia (>5%) Discontinue treatment for Hy’s law. Discussion with Medical Monitor for other druginduced liver injury.",
        "Non-hematological, clinically significant toxicity not otherwise stated greater than or equal to Grade 3 First Occurrence: Hold actinium-225 A K Y-2519 administration until resolved to Grade less than or equal to 2 or baseline for the first occurrence and start at the same dose level. Subsequent Occurrence: Hold [225Ac]Ac-AKY2519 administration until improvement to Grade 2 or baseline and consider 25% [225Ac]Ac-AKY2519 dose reduction.",
        "Discontinue if recurrent after 50% dose reduction. 8.11. Overdose Overdose is defined as a 20% overage relative to the planned dose level. In the event of [225Ac]AcA K Y-2519 overdose, the primary goal of management is to reduce absorbed dose to the participants by increasing radionuclide elimination from the body, which may include: x Intravenous hydration, x Diuretic therapy (such as loop diuretic), and x Frequent bladder voiding.",
        "A nephrology consult should be obtained and Investigators should promptly contact the Medical Monitor. The quantity of the excess dose should be documented in the CRF. 8.12. Supportive Care Supportive care should be provided as deemed necessary by the treating physician.",
        "At the regular safety meetings, tolerance to prior doses of actinium-225 A K Y-2519 should be reviewed and consideration given to specific supportive therapies that could be utilized in subsequent dose cohorts as needed. The following flow chart outlines the recommended management steps for the extravasation of actinium-225 A K Y-2519 or copper-64 A K Y-2519. These guidelines are intended to mitigate potential tissue damage and ensure participant safety."
      ],
      "chips": [
        "P02",
        "p70/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a070.jpg",
      "cap": "Protocol page 70 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 71 of 118 · Flow chart adapted from the protocol in use at Maastricht University Medical Center…",
      "audio": [
        "Flow chart adapted from the protocol in use at Maastricht University Medical Center (van der Pol et al., 2017). 8.13. Concomitant Therapy 8.13.1. Permitted Concomitant Medications Other treatments not specifically excluded as part of the study, should be used in accordance with the routine clinical practice and at the discretion of the Investigator. These may include corticosteroids, anti-emetics, or ketoconazole.",
        "Participants with m C R P C may continue using androgen deprivation therapy to maintain castrate levels of serum testosterone throughout treatment as well as bone-modifying agents to maintain bone integrity. Medications for myelosuppression: Use of blood or platelet transfusions, erythropoietin stimulation agents and GCSF/granulocyte-macrophage colony-stimulating factors are allowed throughout the study in response to bone marrow suppression.",
        "This includes use of GCSF/granulocyte-macrophage colony-stimulating factors and erythropoietin stimulation agents at the beginning of a subsequent cycle following a bone marrow suppression event in the previous cycle. However, use of growth factors prior to any bone marrow suppression event is generally discouraged and needs to be discussed and approved by the Sponsor. 8.13.2.",
        "Prohibited Concomitant Medications The following treatments are prohibited while in this study: x Investigational agents x Cytotoxic chemotherapy x Biologic agents for oncologic treatment"
      ],
      "chips": [
        "P02",
        "p71/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a071.jpg",
      "cap": "Protocol page 71 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 72 of 118 · x Targeted therapy x Immunotherapy x Systemic radio isotopes x External beam…",
      "audio": [
        "x Targeted therapy x Immunotherapy x Systemic radio isotopes x External beam radiotherapy treatment"
      ],
      "chips": [
        "P02",
        "p72/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a072.jpg",
      "cap": "Protocol page 72 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 73 of 118 · Protocol body · page 73",
      "audio": [
        "9. DISCONTINUATION OF STUDY INTERVENTION AND PARTICIPANT DISCONTINUATION/WITHDRAWAL Discontinuation of specific sites or of the study as a whole are detailed in Section 12.1.9. 9.1. Treatment Discontinuation If study treatment is permanently discontinued, every effort should be made to complete the end of treatment visit assessments, and the participant will continue to be followed in LTFU.",
        "See the Schedule of Events (SoE) for data to be collected at the end of treatment visit, during LTFU and for any further evaluations that need to be completed.",
        "A participant may discontinue treatment permanently before completing 4 cycles of treatment (6 cycles if dosing at less than or equal to 9 megabecquerels and demonstrating benefit) in the following scenarios: x Evidence of tumor progression by radiological assessment as measured with R E C I S T v1.1 or according to PCWG 3 criteria (m C R P C only) x Determination by the treating physician that the participant has clinical evidence of disease progression x Unacceptable AE x",
        "Participant withdrawal of consent for treatment. Participants who wish to withdraw from study treatment are encouraged to complete all remaining assessments. Participants who consent to remain in the study will continue to be followed as per follow-up assessment guidelines. x Lost to follow-up x Any situation in which the Investigator thinks that treatment continuation is not in the participant’s best interest. x Study termination by the Sponsor x Death 9.2.",
        "Participant Discontinuation/Withdrawal from the Study Participants have the right to withdraw from the study at any time and for any reason without prejudice to their future medical care. Participants may decline study treatment at any time during the study but continue to participate in the study. This is referred to as withdrawal of consent to treatment.",
        "If withdrawal of consent to treatment occurs, the Investigator must discuss with the participant the appropriate process for discontinuation from the study treatment or other protocol-required therapies and must discuss options for continued participation, completion of procedures and the associated data collection as outlined in the SoE.",
        "Participants who withdraw only from treatment should have their end of treatment visit 30 days ( plus or minus 7 days) after the day of last treatment administration, or when the decision is made to permanently discontinue treatment ( plus or minus 5 days) if the decision is made after the 30-day period and then continue with additional follow-up visits as required per protocol."
      ],
      "chips": [
        "P02",
        "p73/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a073.jpg",
      "cap": "Protocol page 73 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 74 of 118 · The participant’s withdrawal of consent to study means that the participant does not…",
      "audio": [
        "The participant’s withdrawal of consent to study means that the participant does not wish to receive further protocol required treatment, undergo study procedures, or continue any further study follow up. The Sponsor will be notified of all study withdrawals. Participant data and samples collected up to the date of withdrawal of consent will be retained and included in the analyses.",
        "If participants withdraw consent for biospecimen storage or analysis, no future analysis or generation of data from these samples will be completed. Where permitted by local regulations, publicly available data (e.g., death records) may be included after withdrawal of consent. 9.3. Lost to Follow-up A participant will be considered lost to follow-up if the participant repeatedly fails to return for scheduled visits and is unable to be contacted by the study site.",
        "The following actions must be taken if a participant fails to return to the clinic for a required study visit: x The site must attempt to contact the participant and reschedule the missed visit as soon as possible, counsel the participant on the importance of maintaining the assigned visit schedule and ascertain whether the participant wishes to and/or should continue in the study.",
        "x Before a participant is deemed lost to follow-up, the Investigator or designee must make every effort to regain contact with the participant (where possible, 3 telephone calls, and if necessary, a certified letter to the participant’s last known mailing address or local equivalent methods). These contact attempts should be documented in the participant’s medical record.",
        "x Should the participant continue to be unreachable, the participant will be considered to have discontinued the study. x Site personnel, or an independent third party, will attempt to collect the vital status of the participant within legal and ethical boundaries for all participants treated. Public sources may be searched for vital status information.",
        "If vital status is determined as deceased, this will be documented, and the participant will not be considered lost to follow-up. Sponsor personnel will not be involved in any attempts to collect vital status information. 9.4.",
        "Replacement of Participants During dose escalation, participants who withdraw before receiving all protocol specified treatment during the dose-limiting toxicity evaluation period for a reason other than DLTs will be considered to have inadequate data to support dose escalation. In this case, additional participants may be enrolled at the same dose level to complete the cohort. Participant numbers will not be reused."
      ],
      "chips": [
        "P02",
        "p74/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a074.jpg",
      "cap": "Protocol page 74 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 75 of 118 · Protocol body · page 75",
      "audio": [
        "10. STUDY ASSESSMENT AND PROCEDURES x Study assessments/procedures and their timing are summarized in the SoE (Section 1.3). Protocol waivers or exemptions are not allowed. x Adherence to the study design requirements, including those specified in the SoE, is essential and required for study conduct. x All screening evaluations must be completed and reviewed to confirm that potential participants meet all eligibility criteria.",
        "x Written informed consent must be obtained before the participant undergoes any study related procedures. Procedures conducted as part of the participant’s routine clinical management (e.g., blood count, CT) and obtained before signing of the informed consent form (informed consent form) may be utilized for screening or baseline purposes provided the procedures met the protocol specified criteria and were performed within the timeframe defined in the SoE.",
        "x In the event of a significant study continuity issue (e.g., caused by a pandemic), alternate strategies for participant visits, assessments, medication distribution and monitoring may be implemented by the Sponsor or the Investigator, as per local health authority/ethics requirements. 10.1. General Procedures 10.1.1.",
        "Demographic Data Demographic data and baseline characteristics (age, gender, race and ethnicity, height, and weight) will be collected during the Screening Period. 10.1.2.",
        "Medical History and Cancer Treatment History The Investigator or designee will collect medical and cancer treatment history during the Screening Period to include recording of cancer history, tumor mutation information, previous anticancer therapies, surgical history, past and ongoing medical conditions and treatments starting prior to enrollment through the time of consent. 10.1.3.",
        "Concomitant Medications All concurrent therapies should be recorded from the date of the informed consent form signature until the end of treatment. 10.2. Safety Assessments 10.2.1. Physical Examination A thorough physical exam will be conducted including general appearance, skin, neck, eyes, ears, nose, throat, lungs, heart, abdomen, back, lymph nodes, extremities, and neurologic examination."
      ],
      "chips": [
        "P02",
        "p75/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a075.jpg",
      "cap": "Protocol page 75 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 76 of 118 · Protocol body · page 76",
      "audio": [
        "10.2.2. Vital Sign Height will be collected at baseline. Weight and vital signs will be collected at timepoints specified in SoE. Vital signs will be measured in the seated position after 5 minutes rest and will include temperature, systolic and diastolic blood pressure, and pulse. 10.2.3. E C O G Performance Status The Investigator or qualified designee will assess E C O G performance status at the visits noted in the SoE.",
        "Grade E C O G Fully active, able to carry on all pre-disease performance without restriction Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light housework, office work Ambulatory and capable of all selfcare but unable to carry out any work activities.",
        "Up and about more than 50% of waking hours Capable of only limited selfcare, confined to bed or chair more than 50% of waking hours Completely disabled. Cannot carry on any selfcare. Totally confined to be or chair Dead Source: Oken 1982. 10.2.4.",
        "Electrocardiograms Triplicate 12-lead ECGs, in close succession (approximately 5 minutes apart), will be taken with the participants in a supine/semi-recumbent position at screening, before and immediately after administration of actinium-225 A K Y-2519 on Cycle 1 Day 1 and Cycle 2 Day 1, and at end of treatment. Participants will remain in a supine or semi-recumbent position for approximately 5 minutes prior to ECG recording.",
        "ECGs should be collected prior to any blood draw if possible; if not possible, ECG should be collected at least 15 min after the blood draw. The 12-lead ECGs will be interpreted by the Investigator or qualified designee at the site, and original ECGs will be retained with the participant’s source document. All ECGs will be signed and dated by the Investigator or qualified designee.",
        "At the request of the Sponsor, a copy of the original ECG will be made available to the Sponsor or a delegate of the Sponsor. Repeat measurements will be performed if needed. Clinically notable abnormalities that are considered clinically significant in the judgment of the Investigator are to be reported as AEs."
      ],
      "chips": [
        "P02",
        "p76/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a076.jpg",
      "cap": "Protocol page 76 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 77 of 118 · Protocol body · page 77",
      "audio": [
        "10.2.5. Clinical Laboratory Tests See Section 12.2 for the list of clinical laboratory tests to be performed and the SoE (Section 1.3) for the timing and frequency. x The Investigator must review the laboratory results, document this review, and record any clinically significant changes occurring during the study as an AE. The laboratory results must be retained with source documents.",
        "x Abnormal laboratory findings associated with the underlying disease are not considered clinically significant unless judged by the Investigator to be more severe than expected for the participant’s condition. x All laboratory tests with values considered clinically significantly abnormal during participation in the study should be repeated until the values return to normal or baseline or are no longer considered clinically significant by the Investigator or Medical Monitor.",
        "\u0010 If clinically significant values do not return to normal/baseline within a period of time judged reasonable by the Investigator, the etiology should be identified, and the Sponsor notified. \u0010 All protocol-required laboratory tests, as defined in Section 12.2, must be conducted in accordance with the laboratory manual and the SoE (Section 1.3).",
        "\u0010 If laboratory values from non-protocol-specified laboratory tests performed at the institution’s local laboratory require a change in participant management or are considered clinically significant by the Investigator (e.g., SAE or AE or dose modification), then the results must be recorded. 10.3. Adverse Events and Serious Adverse Events 10.3.1.",
        "Definition of AE An AE is any unfavorable or unintended event, physical or psychological, associated with a research study, which causes harm or injury to a research participant as a result of the participant’s involvement in a research study. The event can include abnormal laboratory findings, symptoms, or disease associated with the research study.",
        "The event may not necessarily have a causal relationship with the research, any risk associated with the research, the research intervention, or the research assessments.",
        "Adverse events may be the result of the interventions and interactions used in the research; the collection of identifiable private information in the research; an underlying disease, disorder, or condition of the participant; and/or other circumstances unrelated to the research or any underlying disease, disorder, or condition of the participant.",
        "For the purpose of this study, clinical or laboratory findings associated with the malignancy at baseline or as a result of disease progression would not be considered AEs and would not be recorded in the database."
      ],
      "chips": [
        "P02",
        "p77/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a077.jpg",
      "cap": "Protocol page 77 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 78 of 118 · Protocol body · page 78",
      "audio": [
        "10.3.2. Definition of SAE An SAE is any adverse experience occurring at any dose that results in any of the following outcomes: x Results in death. x Is a life-threatening adverse experience. The term life-threatening in the definition of serious refers to an adverse event in which the participant was at risk of death at the time of the event. It does not refer to an adverse event which hypothetically might have caused death if it were more severe.",
        "x Requires inpatient hospitalization or prolongation of existing hospitalization. Any adverse event leading to hospitalization or prolongation of hospitalization will be considered as Serious, UNLESS at least one of the following expectations is met: \u0010 The admission is pre-planned (e.g., elective or scheduled surgery arranged prior to the start of the study) OR \u0010 The admission is not associated with an adverse event (e.g., social hospitalization for purposes of respite care).",
        "However, it should be noted that invasive treatment during any hospitalization may fulfill the criteria of “medically important” and as such may be reportable as a serious adverse event dependent on clinical judgment. In addition, where local regulatory authorities specifically require a more stringent definition, the local regulation takes precedent. x Results in persistent or significant disability/incapacity.",
        "The definition of disability is a substantial disruption of a person’s ability to conduct normal life’s functions. x Is a congenital anomaly/birth defect. x Is an important medical event.",
        "Important medical events that may not result in death, be life-threatening, or require hospitalization may be considered a serious adverse experience when, based upon appropriate medical judgment, they may jeopardize the participant and may require medical or surgical intervention to prevent one of the outcomes listed in this definition.",
        "Examples of such medical events include allergic bronchospasm requiring intensive treatment in an emergency room or at home, blood disease or disorders, or convulsions that do not result in inpatient hospitalization, or the development of drug dependency or drug abuse. The development of a new cancer is always considered an important medical event. 10.3.3. Adverse Events of Special Interest (AESIs) No AESIs have been identified at this time.",
        "AESIs will be determined based on the available preclinical data, review of cumulative literature, reported toxicities for the same class of agents, and early safety data from other studies. Evaluation of AESIs will be incorporated in evaluation of maximum tolerated dose/maximum administered dose and dose for expansion but may be refined during review of Phase 1 safety data, for evaluation in LTFU.",
        "In addition, late radiation AESIs will be assessed through 5 years or death for participants with a life expectancy of less than 5 years. At a minimum, participants will be"
      ],
      "chips": [
        "P02",
        "p78/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a078.jpg",
      "cap": "Protocol page 78 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 79 of 118 · monitored for late renal toxicity, but other toxicities may be added during Phase 1…",
      "audio": [
        "monitored for late renal toxicity, but other toxicities may be added during Phase 1 as data emerge. The complete list of AESIs will be determined prior to database lock. 10.3.4. Evaluating and Recording Adverse Events 10.3.4.1. Time Period and Frequency for Collecting AE and SAE Information All SAEs will be collected from the signing of the informed consent form until the end of treatment visit.",
        "All AEs will be collected from the administration of copper-64 A K Y-2519 until the end of treatment visit at the timepoints specified in the SoE (Section 1.3). A E S I will be collected through the LTFU period. Medical occurrences that begin before the start of study intervention but after obtaining informed consent will be recorded as medical history/current medical conditions, not as AEs.",
        "All SAEs will be recorded and reported to the Sponsor or designee immediately and under no circumstance should this exceed 24 hours, as indicated in Section 10.3.5. The Investigator will submit any updated SAE data to the Sponsor within 24 hours of it being available. Investigators are not obligated to actively seek information on AEs or SAEs after conclusion of the study participation.",
        "However, if the Investigator learns of any SAE, including a death, at any time after a participant has been discharged from the study, and the Investigator considers the event to be reasonably related to the study intervention or study participation, the investigator must promptly notify the sponsor. 10.3.4.2.",
        "Method for Evaluating AE and SAE The Investigator or designee is responsible for ensuring that all SAEs observed by the clinical team or reported by the participant, following the signing of the informed consent, are fully recorded in the participant’s medical records. All non-SAEs observed or reported will be recorded after the participant has received copper-64 A K Y-2519 until the end of treatment visit. Source documentation must be available to support all AEs.",
        "A laboratory test abnormality considered clinically relevant (e.g., causing the participant to withdraw from the study, requiring treatment or causing apparent clinical manifestations, results in a delay or dose modification of study treatment, or judged relevant by the Investigator), should be reported as an AE.",
        "The Investigator or sub-Investigator (treating physician if applicable) will provide the following information for all adverse events (both serious and non-serious): x Event term (as per Common Terminology Criteria for Adverse Events [C T C A E]) x Description of the event x Date of onset and resolution x Expectedness of the toxicity x Grade of toxicity x Attribution of relatedness to the investigational therapy/agent (this must be assigned by an Investigator,",
        "sub-Investigator, or treating physician)"
      ],
      "chips": [
        "P02",
        "p79/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a079.jpg",
      "cap": "Protocol page 79 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 80 of 118 · x Action taken as a result of the event, including but not limited to; no changes,…",
      "audio": [
        "x Action taken as a result of the event, including but not limited to; no changes, dose interrupted, reduced, discontinued, etc. or action taken with regard to the event, i.e. no action, received concomitant medicine or other intervention, etc. x Outcome of event Descriptions and grading scales found in the NCI C T C A E version 6.0 (or most current version at the time of evaluation) will be utilized for AE reporting.",
        "Adverse event monitoring for treatment emergent events will commence- with baseline imaging for copper-64 A K Y-2519 and continue through 6 days after the date of the initial dose of copper-64 A K Y-2519 or, if earlier, until the first dose of actinium-225 A K Y-2519. Monitoring will commence following Cycle 1 Day 1 for actinium-225 A K Y-2519 and continue up to and including 30 days after the final [225Ac]Ac-AKY2519 treatment administration.",
        "AEs or abnormal test findings considered associated with copper-64 A K Y-2519 and/or actinium-225 A K Y-2519, will be followed until the event, its sequelae or the abnormal test finding resolves or stabilizes at a level acceptable to the Investigator.",
        "The Investigator will promptly review AEs and abnormal test findings to determine if: x The abnormal test finding should be classified as an AE, x There is a reasonable possibility that the AE was caused by study treatment, and x If the AE meets the criteria for a SAE. If the final determination of causality is unknown and questionable relationship to study treatment, the AE will be classified as associated with the use of study treatment for reporting purposes.",
        "For AEs not listed in NCI C T C A E version 6.0, the following criteria will be used to estimate the grade of severity: x Mild: Transient or mild discomfort (< 48 hours); no medical intervention/therapy required. x Moderate: Mild to moderate limitation in activity, some assistance may be needed; no or minimal medical intervention/therapy required.",
        "x Severe: Marked limitation in activity, some assistance usually required; medical intervention/therapy required; hospitalization is possible. x Life-threatening: Extreme limitation in activity, significant assistance required; significant medical intervention/therapy required; hospitalization or hospice care probable.",
        "x Fatal An expected AE is an event previously known or anticipated to result from participation in the research study or any underlying disease, disorder, or condition of the participant. Please refer to the respective IB for expected AEs for copper-64 A K Y-2519 and actinium-225 A K Y-2519. An unexpected AE is an AE not previously known or anticipated to result from the research study or any underlying disease, disorder, or condition of the participant.",
        "Attribution is the relationship between an AE or SAE and the study drug. Attribution will be assigned as follows:"
      ],
      "chips": [
        "P02",
        "p80/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a080.jpg",
      "cap": "Protocol page 80 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 81 of 118 · x Definite - The AE is clearly related to the study drug",
      "audio": [
        "x Definite - The AE is clearly related to the study drug. x Probable - The AE is likely related to the study drug. x Possible - The AE may be related to the study drug. x Unlikely - The AE is doubtfully related to the study drug. x Unrelated - The AE is clearly NOT related to the study drug.",
        "Action: The Investigator must provide the action taken with regard to each event: x None x Study drug dosing interrupted x Use of intervention to treat the AE (provide details, records as needed) x Discontinuation of the study drug Outcome of AE: The Investigator must provide the outcome of the AE: x Recovered/Resolved x Recovered/Resolved with sequelae x Not recovered/Not resolved x Fatal x Unknown 10.3.5.",
        "Reporting of SAEs The Investigator will ensure that all relevant safety information as required by local and/or national laws, directives and/or regulations are reported to the appropriate competent authorities as well as the Principal Investigator and/or IRBs/Ethics Committees.",
        "For the purposes of safety reporting, all SAEs that occur after signing the informed consent form through 30 days after the final dose of actinium-225 A K Y-2519 will be reported whether or not considered causally related to the IMP or to the study procedure(s). Serious adverse events and deaths that occur during this period will be recorded in the source documents.",
        "All SAEs should be monitored until they are resolved or are clearly determined to be due to a participant’s stable or chronic condition or intercurrent illness(es). Related AEs will be followed until resolution to baseline or Grade 1 or stabilization. 10.3.5.1. Sponsor Contact for Immediate Reporting Serious adverse events and follow-up information should be reported by submitting an SAE form to the email address below.",
        "Investigators must report all SAEs to Aktis within 24 hours of awareness or notification of the event. The Investigator must also provide follow-up information on the SAE until final resolution. The completed SAE form will be emailed to the following dedicated safety inbox email address: SafetyDesk@psi-cro.com"
      ],
      "chips": [
        "P02",
        "p81/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a081.jpg",
      "cap": "Protocol page 81 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 82 of 118 · Protocol body · page 82",
      "audio": [
        "10.3.5.2. Regulatory Reporting Requirements for SAEs x Prompt notification by the Investigator to the Sponsor of an SAE is essential so that legal obligations and ethical responsibilities towards the safety of participants and the safety of a study intervention under clinical investigation are met.",
        "x The Sponsor has a legal responsibility to notify both the local regulatory authority and other regulatory agencies about the safety of a study intervention under clinical investigation. The Sponsor will comply with country-specific regulatory requirements relating to safety reporting to the regulatory authority, IRBs/IECs, and Investigators.",
        "x An Investigator who receives an Investigator safety report describing an SAE or other specific safety information (e.g., summary or listing of SAEs) from the Sponsor will review and then file it along with the IB and will notify the IRB/IEC, if appropriate according to local requirements.",
        "x Investigator safety reports must be prepared for suspected unexpected serious adverse reactions (SUSARs) according to local regulatory requirements and Sponsor policy and forwarded to Investigators as necessary. 10.3.5.3. Follow-up of AEs and SAEs After the initial AE/SAE report, the Investigator is required to proactively follow each participant at subsequent visits/contacts.",
        "All SAEs and AESIs (as defined in Section 10.3.3) will be followed until resolution, stabilization, the event is otherwise explained, or the participant is lost to follow-up (as defined in Section 9.3). 10.3.6. Reporting of Pregnancies Pregnancy is not considered an AE unless there is reason to believe that the investigational product interfered with the effectiveness of a contraceptive medication resulting in an unplanned pregnancy.",
        "x While pregnancy itself is not considered to be an AE or SAE, any pregnancy complication or elective termination of a pregnancy for medical reasons will be reported as an AE or SAE. Pregnancy in a study participant or partner must be reported to the PI within 24 hours of learning of its occurrence. If a participant becomes pregnant, study treatment must be discontinued immediately.",
        "If a pregnancy is reported, the Investigator will record pregnancy information on the appropriate form and submit it to the Sponsor within 24 hours of learning of the female participant or female partner of male participant pregnancy. Follow-up should continue to determine the pregnancy outcome, details of the birth, and health of the child even if the participant or partner withdraws from the study or the study is completed.",
        "Abnormal pregnancy outcomes (e.g., spontaneous abortion, fetal death, stillbirth, congenital anomalies, ectopic pregnancy) are considered SAEs and will be reported as such. Details of all pregnancies in female participants and female partners of male participants will be collected after the start of study intervention and until 6 months after the last dose of study drug.",
        "Any post-study pregnancy-related SAE considered reasonably related to the study intervention by the Investigator will be reported to the Sponsor. While the Investigator is not obligated to actively"
      ],
      "chips": [
        "P02",
        "p82/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a082.jpg",
      "cap": "Protocol page 82 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 83 of 118 · seek this information in former study participants/pregnant female partner, they may…",
      "audio": [
        "seek this information in former study participants/pregnant female partner, they may learn of an SAE through spontaneous reporting. 10.4. Pharmacokinetics Blood and urine samples will be obtained for assessment of copper-64 A K Y-2519 pharmacokinetics during Part 1 (Table 18) and actinium-225 A K Y-2519 pharmacokinetics during Part 1 and Part 2 (Table 19).",
        "Collection of blood for actinium-225 A K Y-2519 pharmacokinetics in Part 2 may be reduced based on the findings in Part 1. Participants will be instructed to void and collect the pre-dose urine sample within the 30 minutes prior to treatment administration. Day 1 blood and urine samples of each cycle may be collected up to Cycle 6 for those participants dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit.",
        "Table 18: copper-64 A K Y-2519 Blood and Urine pharmacokinetics Collection Times Study Period Part 1 Dose Escalation and Backfill Blood Urine Screening Pre-dose 5-15 min 1 hr ( plus or minus 15 min) 2 hr ( plus or minus 15 min) 4 hr ( plus or minus 30 min) 6 hr ( plus or minus 30 min) 8 hr ( plus or minus 30 min) Pre-dose 0-2 hr 2-4 hr 4-6 hr 6-8 hr hr = hour(s), min = minute(s) Table 19: actinium-225 A K Y-2519 Blood and Urine pharmacokinetics Collection Times Study Period",
        "Part 1 Dose Escalation and Backfill Part 2 Dose Expansion# Blood Urine Blood Urine Cycle 1 Day 1 Pre-dose 5-15 min 1 hr ( plus or minus 15 min) 2 hr ( plus or minus 15 min) 4 hr ( plus or minus 30 min) 6 hr ( plus or minus 30 min) 8 hr ( plus or minus 30 min) Pre-dose 0-2 hr 2-4 hr 4-6 hr 6-8 hr Pre-dose 5-15 min 1 hr ( plus or minus 15 min) 2 hr ( plus or minus 15 min) 4 hr ( plus or minus 30 min) 6 hr ( plus or minus 30 min) 8 hr ( plus or minus 30 min) Pre-dose 0-2 hr 2-4",
        "hr 4-6 hr 6-8 hr Cycles 2-4* Day 1 5-15 min 2 hr ( plus or minus 15 min) 5-15 min 2 hr ( plus or minus 15 min) # Collection of blood for actinium-225 A K Y-2519 pharmacokinetics in Part 2 may be reduced based on the findings in Part 1. *Up to Cycle 6 for those dosing at less than or equal to 9 megabecquerels and demonstrating clinical benefit; hr = hour(s), min = minute(s)."
      ],
      "chips": [
        "P02",
        "p83/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a083.jpg",
      "cap": "Protocol page 83 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 84 of 118 · Table 20 · Cu-64 PET and Ac-225 SPECT clocks",
      "audio": [
        "Each sample will be marked with unique identifiers such as the study number, participant number, and the nominal sample time. The date and actual time that the blood sample was taken will be recorded on the electronic case report form (eCRF) or electronically with a bar code or other method. Please refer to the laboratory manual for further details regarding collection, processing, storage, and shipment. 10.5.",
        "Dosimetry At select sites, approximately 10 evaluable participants will undergo actinium-225 A K Y-2519 SPECT/CT and copper-64 A K Y-2519 PET/CT imaging to support direct dosimetry analysis and assess the use of copper-64 A K Y-2519 as a surrogate for actinium-225 A K Y-2519 dosimetry.",
        "Additionally, the described imaging will be used to understand the variability in predicted absorbed dose to normal tissues across the patient population and to characterize the dose to tumor for future correlation of absorbed dose and treatment response/toxicity. Participants will undergo copper-64 A K Y-2519 PET/CT imaging at three timepoints during screening as described in Table 20.",
        "The selected participants will also undergo direct actinium-225 A K Y-2519 SPECT/CT imaging at three timepoints following actinium-225 A K Y-2519 SPECT/CT administration on Cycle 1 Day 1 as outlined in Table 20. Depending on the day of actinium-225 A K Y-2519 dosing, [225Ac]AcA K Y-2519 SPECT/CT may be collected at either the 40-56 hour or 72-96 hour imaging window.",
        "The selected imaging window should align with the copper-64 A K Y-2519 PET/CT imaging window selected during the screening visit.",
        "Table 20: Dosimetry Imaging Timepoints actinium-225 A K Y-2519 SPECT/CT and copper-64 A K Y-2519 PET/CT imaging participants (N≈10) Imaging Timepoints for Dosimetry 90-180 min 4-6 h 20-28 h 40-56 h 72-96 h 140-148 h [64Cu]Cu-AKY2519 PET/CT X - X X* X* - [225Ac]Ac-AKY2519 SPECT/CT - - X X* X* X *Depending on planned 225Ac administration day either of these timepoints is acceptable as an intermediate imaging timepoint and should be aligned across the two modalities.",
        "No more than 4 participants, of the 10 undergoing actinium-225 A K Y-2519 SPECT/CT and copper-64 A K Y-2519 PET/CT imaging, may share the same tumor type. Dosimetry analysis of the participants will be conducted utilizing FDA cleared dosimetry software for dose estimation. Normal tissue and tumor ROIs will be identified and estimated cumulative absorbed dose (Gy) by organ will be determined for each participant.",
        "Please refer to the imaging and dosimetry manuals for detailed description of equipment calibration, imaging quality control (QC) procedures and dosimetry processes. 10.6. Efficacy Assessment The clinical activity of actinium-225 A K Y-2519 treatment will be assessed by evaluating tumor response using R E C I S T v1.1 (Appendix 3) and P C W G 3 criteria (m C R P C; Appendix 4)."
      ],
      "chips": [
        "P02",
        "p84/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a084.jpg",
      "cap": "Protocol page 84 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "Table 20: PET 90–180 min / 20–28 h / 40–56 or 72–96 h.",
        "SPECT 20–28 h / 40–56 or 72–96 h / 140–148 h. Align windows."
      ]
    },
    {
      "title": "Page 85 of 118 · Participants will undergo clinical staging for assessment of tumor response…",
      "audio": [
        "Participants will undergo clinical staging for assessment of tumor response utilizing the same imaging modality as at baseline (contrast-enhanced CT and bone scan [m C R P C]). Imaging will be completed every 8 weeks ( plus or minus 1 week) throughout the duration of the study, including the follow up period until disease progression or start of a new systemic anticancer therapy, whichever is earlier.",
        "Participants exhibiting a complete or partial response will require a confirmation scan at least 4 weeks from the original scan that showed a response. Participant management will be dictated by Investigator assessment of response. CT may be completed on the same day as [225Ac]Ac-AKY2519 administration if imaging occurs in close proximity to a treatment cycle. The following efficacy endpoints will be assessed.",
        "Part 1: Secondary Efficacy Endpoint x objective response rate assessed by Investigator review based on R E C I S T v1.1 or P C W G 3 criteria. The objective response rate is defined as the proportion of participants who had the best overall response (BOR) of complete response (CR) or partial response (PR).",
        "x Duration of response (duration of response) x progression-free survival x PSA50/90 response rates (m C R P C) Part 2: Primary Efficacy Endpoint x objective response rate assessed by Investigator review based on R E C I S T v1.1 or P C W G 3 criteria. Secondary Efficacy Endpoint x duration of response x progression-free survival x overall survival x PSA50/90 response rates (m C R P C) 10.7.",
        "Imaging/Pathology Concordance copper-64 A K Y-2519 imaging is intended as a tool to select participants who may benefit from treatment with actinium-225 A K Y-2519. In order to further characterize copper-64 A K Y-2519 as a participant selection tool, copper-64 A K Y-2519 images as well as tumor tissue will be collected. All participants will provide archival tissue samples, when available.",
        "Up to 15 participants who enroll into the backfill will provide an on-treatment biopsy (pre dose C2 or any other cycle after that). Participants enrolled in Part 2 expansion cohorts will also be required to provide on-treatment biopsies until a total of 10 are collected per cohort. Additionally, optional fresh tissue biopsies may be collected during screening (baseline) or while on-treatment (pre dose C2 or any other cycle after that) for all remaining participants.",
        "Any lesions undergoing optional biopsy during screening will have the SUVmax/mean of that lesion recorded on the 90-180 min copper-64 A K Y-2519 PET/CT images to evaluate the relationship with"
      ],
      "chips": [
        "P02",
        "p85/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a085.jpg",
      "cap": "Protocol page 85 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 86 of 118 · B7-H3 expression",
      "audio": [
        "B 7-H 3 expression. In addition, the biopsied region of interest will be identified on serial images obtained for dosimetry. FDA cleared dosimetry software will be utilized to estimate cumulative absorbed dose (Gy) for each tumor and the relationship between absorbed dose and response will be evaluated. Biopsy of target lesions per R E C I S T v1.1 is strongly discouraged.",
        "copper-64 A K Y-2519 images at 90-180 mins post administration will be reviewed by a board certified, nuclear medicine physician as needed to assist the site Investigator in identifying lesions accessible to biopsy. Retrospectively, lesions undergoing biopsy will be identified as a region of interest and SUVmax/mean and predicted absorbed dose determined.",
        "Please refer to the laboratory manual for further details regarding collection, processing, storage, and shipment of biopsy samples intended for analysis. 10.8. Exploratory Biomarkers for Correlative Analysis Tumor tissue samples will be obtained as described in the SoE, to assess B 7-H 3 expression, and to explore the impact of actinium-225 A K Y-2519 treatment on transcriptional profiles and immune modulation in the tumor and tumor microenvironment.",
        "Baseline archival tissue will be obtained for all patients when available. Additionally, optional fresh tissue biopsies may be collected during screening. Archival and fresh tissues biopsies will be used to characterize B 7-H 3 protein expression, tumor transcriptional profiles and immune status prior to treatment with actinium-225 A K Y-2519.",
        "Upregulation of pro-inflammatory signaling pathways and global changes to the tumor transcriptome in response to actinium-225 A K Y-2519 will be characterized in available paired baseline (archival or fresh) and post-treatment biopsies. Differences in the amount of tumor infiltrating lymphocytes before and after treatment with actinium-225 A K Y-2519, indicative of an immune active tumor microenvironment, may be also evaluated.",
        "Differences in the genetic and transcriptional tumor profiles between participants who have progressed and those exhibiting clinical benefit will be investigated for potential mechanisms of tumor adaptation or resistance to actinium-225 A K Y-2519 through the analysis of optional biopsy obtained at end of treatment using baseline tumor tissue samples as reference.",
        "Serum samples will be obtained to assess circulating markers of progression and immunomodulation in response to actinium-225 A K Y-2519, as indicated in the SoE. A decrease in the relative abundance of total ctDNA content (MRD) or in the frequency of specific mutations will be investigated for potential association with clinical response as indicative of molecular response.",
        "Changes in the abundance of circulating immune cells or cytokine levels reflective of proinflammatory response upon treatment with actinium-225 A K Y-2519 will also be evaluated in longitudinally collected blood samples. Incidence and persistence of actinium-225 A K Y-2519 immunogenicity will be investigated by anti-drug antibody assessment in serum samples at specific timepoints.",
        "Urine samples will be collected as indicated in the SoE for evaluation of urinary biomarkers of acute kidney injury (i.e., NGal, KIM-1) following administration of actinium-225 A K Y-2519."
      ],
      "chips": [
        "P02",
        "p86/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a086.jpg",
      "cap": "Protocol page 86 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 87 of 118 · The timing of serum and urine collections may be amended if in the course of…",
      "audio": [
        "The timing of serum and urine collections may be amended if in the course of analyses it is estimated that a different collection schedule will be more informative. Please refer to the laboratory manual for further details regarding collection, processing, storage, and shipment of all samples for exploratory biomarker analysis. 10.9. Patient Reported Outcomes Participant reported quality of life assessment will be conducted to evaluate the change in quality of life over time.",
        "The assessment tools will include Functional Assessment of Cancer Therapy- General (FACT-G), Brief Pain Inventory-Short Form (BPI-SF), EQ-5D-5L and XeQOLS xerostomia questionnaire. The questionnaires will be completed by participants at the visits specified in SoE."
      ],
      "chips": [
        "P02",
        "p87/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a087.jpg",
      "cap": "Protocol page 87 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 88 of 118 · Protocol body · page 88",
      "audio": [
        "11. STATISTICAL CONSIDERATIONS The Statistical Analysis Plan (SAP) will include a more technical and detailed description of the statistical analyses described in this section. 11.1. Analysis Sets 11.1.1. Safety Population The Safety Populations ([64Cu]Cu-AKY 2519 and actinium-225 A K Y-2519) will be defined as all participants receiving at least one dose of the imaging and/or therapeutic agent.",
        "Safety monitoring for copper-64 A K Y-2519 begins following administration for baseline screening through 6 days after the date of dose of copper-64 A K Y-2519, or until the first dose of actinium-225 A K Y-2519, whichever is earlier. Safety monitoring for treatment emergent actinium-225 A K Y-2519 events will commence with initial dosing of actinium-225 A K Y-2519 and continue up to and including 30 days after the final actinium-225 A K Y-2519 treatment administration.",
        "Monitoring of A E S I will begin with initial dosing of actinium-225 A K Y-2519 and continue through 5 years. 11.1.2. Pharmacokinetic Population The Pharmacokinetic Population will be defined as all participants who have received at least one dose of copper-64 A K Y-2519 or actinium-225 A K Y-2519 and provided at least one evaluable bioanalytical result(s). 11.1.3.",
        "Dosimetry Population Participants receiving one dose of copper-64 A K Y-2519 or actinium-225 A K Y-2519 and at least one imaging timepoint will be included for consideration of dosimetry analysis. Final criteria for inclusion will be outlined in the dosimetry analysis plan. 11.1.4.",
        "Treatment Efficacy Population The Treatment Efficacy Population will be defined as any participant who receives at least one dose of actinium-225 A K Y-2519 and has at least 1 post-baseline tumor assessment, clinical progression or death before their first post-baseline scan 11.2. Statistical Analyses 11.2.1. Safety Analyses Analyses of safety outcomes will be conducted using the Safety Population. Adverse events will be coded using the most recent version of MedDRA.",
        "Treatment-emergent AEs (TEAEs) will be defined as AEs with an onset on or after the first administration of the copper-64 A K Y-2519. TEAEs occurring after the first imaging administration but prior to the first actinium-225 A K Y-2519 administration will be summarized separately from those occurring only following actinium-225 A K Y-2519 administration. TEAEs will be summarized by treatment group, System Organ Class, and preferred term.",
        "For participants who have received prior external beam radiotherapy, prior mean dose to the kidneys will be collected where feasible. Dose will be"
      ],
      "chips": [
        "P02",
        "p88/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a088.jpg",
      "cap": "Protocol page 88 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 89 of 118 · recorded only when the specific dose to the kidney can be obtained from the…",
      "audio": [
        "recorded only when the specific dose to the kidney can be obtained from the radiation treatment plan. Prescribed total dose (ex. prostate and regional nodes) will not be used as a surrogate. Safety will be reported and stratified by and correlated with prior radiation therapy dose, study treatment dose, and cumulative dose (i.e., the prior radiation dose plus the study treatment dose) where applicable.",
        "Summary statistics of raw data and change from baseline values for each laboratory parameter will be presented by T E A E group (imaging/treatment) and timepoint. Data will be summarized as appropriate to the variable type (i.e. continuous or categorical variables). Individual participant changes will be identified through shift tables.",
        "Shift tables will be presented for each laboratory parameter with counts and percentages of participants, by T E A E group and timepoint, for shift from baseline, using the normal ranges. In addition, all the data from physical examinations, 12lead ECGs and vital signs will also be descriptively summarized. Toxicities will be graded using the National Cancer Institute Common Terminology Criteria for AEs (C T C A E v6 or most current). 11.2.2.",
        "Pharmacokinetic Analyses Blood and urine copper-64 A K Y-2519 and actinium-225 A K Y-2519 pharmacokinetics (via measured radioactivity) will be listed by participant and summarized by dose level.",
        "Population pharmacokinetics analyses may be performed to characterize copper-64 A K Y-2519 and [225Ac]AcA K Y-2519 dispositions, quantify the effects of clinical and demographic factors on variability in exposure, and predict individual participant exposures for exploratory exposure-response analyses and further modeling, if warranted. 11.2.3.",
        "Dosimetry Analyses Based on retrospective dosimetric analysis, the total number of participants undergoing copper-64 A K Y-2519 PET/CT and actinium-225 A K Y-2519 SPECT/CT imaging may therefore include greater than the planned N=10, if needed. Summary statistics will be presented for cumulative activity and estimated absorbed dose in blood, whole body, and organs/tumors of interest.",
        "Data will be summarized as appropriate to the variable type (i.e., continuous or categorical variables). 11.2.4. Imaging/Pathology Concordance Summary statistics will be presented for B 7-H 3 expression and SUVmax/mean or absorbed dose (Gy) values as well as absorbed dose and tumor response. The potential association between B 7-H 3 expression and SUVmax/mean values or dose (Gy) and tumor response will be evaluated using Pearson or Spearman correlation.",
        "When one variable is represented as a categorical variable, regression model will be used to assess the association between the two variables. 11.2.5. Exploratory Biomarkers for Correlative Analysis Protein expression of B 7-H 3 and potentially that of other biomarkers (g-H2AX, CD8+, CD4+,or others) will be presented for participants with available tumor samples.",
        "Gene expression differences in pathways of interest in the tumor and tumor microenvironment before and after treatment actinium-225 A K Y-2519, will be presented as fold changes from the"
      ],
      "chips": [
        "P02",
        "p89/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a089.jpg",
      "cap": "Protocol page 89 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 90 of 118 · baseline (pre-treatment) for participants with available paired baseline and…",
      "audio": [
        "baseline (pre-treatment) for participants with available paired baseline and on-treatment tumor biopsy samples. Changes in serum markers of progression (i.e., ctDNA, immune cell populations, and circulating cytokine levels during treatment with actinium-225 A K Y-2519) will be monitored longitudinally and presented as fold changes from baseline.",
        "Results of TCR repertoire and anti-drug antibody analysis on peripheral blood samples will be investigated at specific timepoints for participants with samples available. Results from TCR repertoire analysis will be presented as changes in diversity or other T-cell related parameters. Results from anti-drug antibody analysis will be presented as positive (presence of anti-drug antibody) or negative (absence of anti-drug antibody).",
        "Changes in urine levels of NGal or KIM-1 kidney injury biomarkers in response to actinium-225 A K Y-2519 treatment may be presented for the Safety Population. 11.2.6. Treatment Efficacy Analyses Efficacy outcome analyses will be conducted using the Treatment Efficacy Population.",
        "The Treatment Efficacy Population will be defined as any participant who receives at least one dose of actinium-225 A K Y-2519 and has at least 1 post-baseline tumor assessment, clinical progression or death before their first post-baseline scan. Overall timepoint response will be determined using R E C I S T v1.1 (Appendix 3) and/or P C W G 3 criteria (Appendix 4; m C R P C only) as determined by the Investigator.",
        "Participants achieving a complete response (CR) or partial response (PR) that is confirmed at the subsequent timepoint will be determined to have an objective response. Duration of objective response is the time between first objective CR or PR response and disease progression or death, whichever occurs first.",
        "Progression-free survival (progression-free survival) is defined as the time from initial administration of the study drug until the date of radiologic disease progression or death, whichever occurs first. Overall survival (overall survival) is defined as the time from initial administration of the study drug to death.",
        "Responses (including objective response and PSA50 and PSA90 responses for m C R P C) and other binary endpoints will be summarized by rates and 95% exact confidence intervals using the Pearson-Clopper method. progression-free survival, overall survival and duration of objective response will be summarized using the Kaplan-Meir method.",
        "Logistic regression and the proportional hazard model will be used to assess the relationship copper-64 A K Y-2519 predicted absorbed tumor dose and objective response and overall survival and progression-free survival, respectively. 11.3. Dose Escalation Dose escalation will be guided by the Bayesian Optimal Interval (B O I N) design with the target dose-limiting toxicity rate of 25%.",
        "Dose-limiting toxicities will be defined as any predefined T E A E (Section 8.8) that occurs during the 4-week dose-limiting toxicity period, except those that are clearly and incontrovertibly due to extraneous circumstances (e.g., disease progression or intercurrent illness). The 3 potential dose levels will evaluate administration of 6 megabecquerels, 9 megabecquerels and 12 megabecquerels of actinium-225 A K Y-2519.",
        "If the starting dose of 6 megabecquerels is not tolerated, a lower dose level (DL -1) may be explored at 4 megabecquerels. Should a dose of 9 megabecquerels be deemed intolerable, an intermediate dose of 7.5 megabecquerels be explored. Similarly, should 12 megabecquerels be found to be intolerable then a 10.5 megabecquerels intermediate dose will be explored.",
        "Dose intolerability will be determined based on the totality of safety data, including-but not limited to-dose-limiting toxicity, non-dose-limiting toxicity toxicity, and dose disruptions. The"
      ],
      "chips": [
        "P02",
        "p90/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a090.jpg",
      "cap": "Protocol page 90 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 91 of 118 · cohort size for dose escalation is three evaluable participants (N=3)",
      "audio": [
        "cohort size for dose escalation is three evaluable participants (N=3). Four participants may be enrolled in each dose level to ensure at least 3 are evaluable, but no more than one of which may be m C R P C or colorectal cancer. Dosing will begin at dose level 1 (6 megabecquerels). Given this setup, the B O I N design will escalate the dose if the observed dose-limiting toxicity rate at the current dose is less than or equal to 0.197 and de-escalate if it exceeds >0.298.",
        "The corresponding decision table is shown in Table 21. Table 21: Dose Escalation/De-Escalation Rules for the B O I N Design The number of evaluable participants treated at current dose Decision Escalate if # of dose-limiting toxicity less than or equal to Stay if # of dose-limiting toxicity = 1* NA 3-4 De-escalate if # of dose-limiting toxicity greater than or equal to Eliminate if # of dose-limiting toxicity greater than or equal to Note.",
        "“# of dose-limiting toxicity” is the number of participants with at least 1 dose-limiting toxicity. “*” indicates the modification of the decision from “deescalate” to “stay”, aligning with common practice when observing 1 dose-limiting toxicity out of 3 participants.",
        "For the purpose of overdose control, current and higher dose levels will be eliminated (i.e., no future participants treated at the current or higher doses) if the probability of the toxicity rate at the current dose level exceeding the target toxicity rate of 0.25 is higher than 0.95. Together, this results in the dose escalation and elimination rule as displayed in Table 21.",
        "The estimated sample size for Part 1 is 81 participants (including up to 21 patients for dose escalation and up to 60 patients for backfilling). For dose escalation, participants will be treated in cohorts with planned size of 3. Data will be reviewed and dose escalation decision will be discussed in Safety Review Meeting once at least 3 dose-limiting toxicity evaluable participants complete the dose-limiting toxicity observation period.",
        "The dose escalation/de-escalation decision will be made based on the actual number of evaluable participants. The steps to implement the B O I N design are described as follows: 1. Participants in the first cohort are treated at dose level 1. 2. To assign a dose to the next cohort of participants, conduct dose escalation/de-escalation according to the rules specified in Table 21; noting the following: a.",
        "When a dose is eliminated, the dose is de-escalated to the next lower level. When the lowest dose is eliminated, the study is stopped for safety. In this case, no dose is selected as the maximum tolerated dose. b. If the current dose is the lowest dose and the rule indicates dose de-escalation, the next cohort of participants are treated at the lowest dose unless the number of DLTs reaches the elimination boundary, at which point the study is stopped for safety. c.",
        "If the current dose is the highest dose and the rule indicates dose escalation, the next cohort will be treated at the current dose or at a newly added higher dose, if appropriate. 3. Repeat step 2 until the maximum sample size of 21 is reached or up to 9 evaluable participants are treated at the current dose and the decision according to step 2 is to stay at the current dose."
      ],
      "chips": [
        "P02",
        "p91/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a091.jpg",
      "cap": "Protocol page 91 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 92 of 118 · After the study is completed, selection of the MTD/MAD will be based on isotonic…",
      "audio": [
        "After the study is completed, selection of the maximum tolerated dose/maximum administered dose will be based on isotonic regression as specified in Liu (2015) and Yuan (2016). Specifically, select the maximum tolerated dose as the dose for which the isotonic estimate of the toxicity rate is closest to the target toxicity rate.",
        "If there are ties, select the higher dose level when the isotonic estimate is lower than the target toxicity rate and select the lower dose level when the isotonic estimate is greater than or equal to the target toxicity rate. A minimum of six participants will be required for a dose to be selected as the maximum tolerated dose.",
        "Owing to the adaptive nature of the B O I N design, the expected number of participants treated at the maximum tolerated dose is 9 or more, depending on the observed data and the dose escalation process. During Part 1, participants may be backfilled at two dose levels (Dose Level A and B) to gather further information on the safety and efficacy of a dose and to support the identification of the recommended expansion dose.",
        "Dose levels selected for backfilling will have been determined safe per B O I N design and show promising anti-tumor activity. The backfill dose levels will be agreed to by the Sponsor and reviewed by the safety review committee. The total number of participants allotted for Part 1 (N=81) will include participants being enrolled in the selected backfilled dose levels. Up to 30 participants will be enrolled at the backfill dose levels.",
        "The total number of participants per dose level (N=30) includes those participants enrolled during dose escalation. The backfill may continue after dose escalation is completed. Participants enrolled in the backfill will be required to meet the same enrollment criteria outlined for dose escalation (i.e., copper-64 A K Y-2519 PET/CT positive lesion, prior anti-cancer therapies, etc.).",
        "Backfilling will be conducted according to the method described by Zhao (2024), and is described in the next section. Backfilling provides additional data (e.g., safety, efficacy, pharmacokinetics/PD) in multiple doses to inform the risk-benefit assessment of maximum tolerated dose and lower doses for determination of the optimal dose.",
        "Since the 30 participants include both dose-escalation and backfill patients, and dose escalation may not require the full 21, the planned total sample size of up to 81 for Part 1 is expected to be sufficient. Part 2 dose expansion may commence once there is sufficient evidence to support dose selection, with at least 15 participants treated at each backfill dose. 11.4.",
        "Backfill A dose level b is regarded as eligible for backfilling if it satisfies the following two conditions: x (Cleared for safety) b is lower than the current dose of the dose escalation. x (Demonstrate activity) At least one response or sufficient antitumor activity based on the totality of the data is observed at b or at a dose lower than b.",
        "When multiple doses are eligible for backfilling, the dose to be prioritized will be determined by the Sponsor and trial investigators, based on the overall risk-benefit assessment.",
        "Dose level b will be closed for backfilling if (i) the number of evaluable participants treated at b is greater than or equal to 30, or (ii) both of the following two conditions are met: o The observed dose-limiting toxicity rate based on all cumulative participants completed dose-limiting toxicity assessment at b is greater than the de-escalation boundary 0.298, and o the pooled dose-limiting toxicity rate based on the pooled dose-limiting toxicity data over b and b+1 is",
        "also greater than 0.298."
      ],
      "chips": [
        "P02",
        "p92/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a092.jpg",
      "cap": "Protocol page 92 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 93 of 118 · For condition (i), if additional participants from certain lung cancer subtypes are…",
      "audio": [
        "For condition (i), if additional participants from certain lung cancer subtypes are enrolled in order to reach 12 participants, the number of patients backfilled at b are allowed to be greater than 30. For condition (ii), the requirement to examine the pooled (b and b+1) dose-limiting toxicity rate is needed to reduce the risk of accidentally closing backfilling caused by the variation associated with small sample sizes at b (Zhao 2024).",
        "When b is closed for backfilling due to rule (ii), the doses higher than b should also be closed for backfilling. A dose closed to backfilling for toxicity may later be reopened for backfilling when accruing toxicity data indicate that the dose is actually safe and the backfill closing conditions no longer hold.",
        "One unique challenge of backfill is that an excessively high dose-limiting toxicity rate may be observed at dose b during the backfill, which previously demonstrated safety during dose escalation based on a small sample size. This may result in backfill-dose-escalation conflicts: the decision based on the data observed at the current dose c conflicts with that based on the data observed at the backfill dose. The definition of conflict is provided in Table 22.",
        "Table 22: Definition of Conflict Decision according to the data observed at the current dose c Decision according to the data observed at a backfilling dose b Escalation Stay De-escalation or elimination Escalation no conflict no conflict no conflict Stay conflict no conflict no conflict De-escalation or elimination conflict conflict conflict To protect participant safety, such a conflict, when it occurs, will be addressed using the method described by Zhao (2024) as follows.",
        "Let ܾ כ\u0003ሺܾ כ ൏ܿሻ denote the backfill dose where the conflict occurs, and let ݉ and ݐ respectively denote the total number of participants who completed dose-limiting toxicity assessment and the total number of participants who experienced dose-limiting toxicity, pooled from ܾ כ to the current dose ܿ.",
        "Based on the pooled data ݉ and ݐ, perform dose escalation/de-escalation according to Table 21 , using the same rules described in Step 2 of the B O I N design, described in Section 11.3, with the following modification: If the decision according to Table 21 is to de-escalate the dose, rather than simply de-escalating to ܿ െͳ, de-escalate to the highest dose level ݇ that is deemed safe with ݍො௞൑ 0.298, where ܾ כ ൑݇ ൑ܿ െͳ. If such a dose does not exist, de-escalate to ܾ כ െͳ.",
        "Here, ݍො௞ is the pooled dose-limiting toxicity rate from ܾ כ to a higher dose ݇\u0003ሺ݇ ൒ܾ כሻ, defined as: ݍො௞ൌ ݐ݄݁ \u0003ݐ݋ݐ݈ܽ \u0003݊ݑܾ݉݁ ݎ\u0003݋݂\u0003݌ܽݐ݅݁݊ ݐݏ\u0003݁ݔ݌݁ݎ݅݁݊ܿ݁݀ \u0003ܦܮܶ\u0003݂ݎ݋݉ \u0003݀݋ݏ݁\u0003ܾ כ\u0003ݐ݋\u0003݇ ݐ݄݁ \u0003ݐ݋ݐ݈ܽ \u0003݊ݑܾ݉݁ ݎ\u0003݋݂\u0003݌ܽݐ݅݁݊ ݐݏ\u0003ܿ݋݉ ݌݈݁ ݐ݁݀ \u0003ܦܮܶ\u0003ܽݏݏ݁ݏݏ݉݁݊ ݐ\u0003݂ݎ݋݉ \u0003݀݋ݏ݁\u0003ܾ כ\u0003ݐ݋\u0003݇Ǥ 11.5.",
        "Dose Expansion Based on data collected in Part 1-including toxicity, efficacy, tolerability, pharmacokinetics and pharmacodynamics-the recommended expansion dose (recommended expansion dose) that optimizes the overall riskbenefit profile will be identified and used to proceed dose expansion (Part 2) in non-small cell lung cancer and/or other B 7-H 3 imaging positive tumors. Specifically, the occurrence of treatment-emergent AEs"
      ],
      "chips": [
        "P02",
        "p93/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a093.jpg",
      "cap": "Protocol page 93 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 94 of 118 · (TEAEs) as well as the observed clearance of radioactivity from blood and absorbed…",
      "audio": [
        "(TEAEs) as well as the observed clearance of radioactivity from blood and absorbed normal tissue doses predicted based on copper-64 A K Y-2519 and actinium-225 A K Y-2519 dosimetry will be considered in selecting the dose for expansion. In addition to safety, preliminary efficacy data will also be considered.",
        "Participants treated at the recommended expansion dose in Part 1 who meet the eligibility criteria for Cohort 1 or 2 will be rolled over into Part 2 to contribute toward the target sample size for each respective cohort. To prioritize patient benefit, a Bayesian optimal phase 2 (B O P 2) design will be employed to monitor efficacy within each cohort. For Cohort 1, an initial stage of 16 participants will be enrolled.",
        "If 0 or 1 objective responses are observed, the cohort may be terminated for futility following an evaluation of the totality of data; otherwise, an additional 15 participants will be enrolled. If 6 or more responses are observed by the end of the cohort expansion, the treatment will be considered promising for Cohort 1. For Cohort 2, an initial stage of 20 participants will be enrolled.",
        "If 0 or 1 objective responses are observed, the cohort may be terminated for futility following an evaluation of the totality of data; otherwise, an additional 20 participants will be enrolled. If 7 or more responses are observed by the end of the cohort expansion, the treatment will be considered promising for Cohort 2. Accrual may continue during the interim analysis. The decision rule for Cohort 1 is obtained as follows.",
        "Let ݊ denote the interim sample size and ܰ denote the maximum sample size. Let ݌௘௙௙ denote the objective response rate and define the null hypothesis ܪ଴ǣ ݌௘௙௙൑ͲǤͳ, under which the treatment is deemed as unacceptable.",
        "We will stop enrolling patients and claim that the treatment is unacceptable if ܲ ݎ൫݌௘௙௙൐ͲǤͳȁ݀ܽ ݐܽ൯൏ߣቀ݊ܰቁ ఈ ǡ where ߣ=0.82 and ߙ=0.62 are design parameters optimized to maximize power under the alternative hypothesis ܪଵǣ ݌௘௙௙ൌͲǤʹͷ, (i.e., the probability of correctly claiming that the treatment is acceptable under ܪଵ), while controlling the one-sided type I error rate (i.e., the probability of incorrectly claiming that the treatment is acceptable under ܪ଴) at 0.079.",
        "This optimization is performed assuming a vague prior Beta(0.1,0.9) for ݌௘௙௙. The optimized decision rule yields a statistical power of 0.805 under ܪଵ. The decision rule for Cohort 2 is obtained in a similar way with ܪ଴ǣ ݌௘௙௙൑ͲǤͳ under which the treatment is deemed as unacceptable.",
        "We will stop enrolling patients and claim that the treatment is unacceptable if ܲ ݎ൫݌௘௙௙൐ͲǤͳȁ݀ܽ ݐܽ൯൏ߣቀ݊ܰቁ ఈ ǡ where ߣ=0.81 and ߙ=1 are design parameters optimized to maximize power under the alternative hypothesis ܪଵǣ ݌௘௙௙ൌͲǤʹͷ, (i.e., the probability of correctly claiming that the treatment is acceptable under ܪଵ), while controlling the one-sided type I error rate (i.e., the probability of incorrectly claiming that the treatment is acceptable under ܪ଴) at 0.096.",
        "This optimization is performed assuming a vague prior Beta(0.1,0.9) for ݌௘௙௙. The optimized decision rule yields a statistical power of 0.895 under ܪଵ."
      ],
      "chips": [
        "P02",
        "p94/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a094.jpg",
      "cap": "Protocol page 94 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 95 of 118 · Below are the operating characteristics of the design using the BOP2 web application…",
      "audio": [
        "Below are the operating characteristics of the design using the B O P 2 web application (B O P 2 V1.4.25.0).",
        "Table 23: Operating Characteristics of B O P 2 for Futility Monitoring Scenario objective response rate Early Stopping (%) Claim Acceptable (%) Average Sample Size Cohort 1 0.05 81.08 0.36 18.8 0.10 51.47 7.88 23.3 0.25 6.35 80.53 30.0 0.35 0.98 97.61 30.9 Cohort 2 0.05 73.58 0.33 25.3 0.10 39.17 9.62 32.2 0.25 2.43 89.50 39.5 0.35 0.21 99.41 40.0 In addition, B O P 2 will be employed to independently monitor grade 4 or higher treatment-related toxicity in each cohort",
        "expansion. Table 24 provides the stopping boundaries of the B O P 2 design. If a cohort exceeds the stopping boundary, the accrual for that cohort will be paused for potential early termination after assessment of the totality of safety data. Accrual may continue during the safety interim analysis.",
        "Table 24: Optimized Toxicity Stopping Boundaries Cohort 1 Cohort 2 # evaluable patients Stop if # of patients with Grade 4 or higher TRAE greater than or equal to # evaluable patients Stop if # of patients with Grade 4 or higher TRAE greater than or equal to * *Grade 4 neutropenia or thrombocytopenia lasting less than 7 days will not be included The above safety monitoring rule is obtained as follows.",
        "Let ݌௧௢௫ denote the true toxicity rate, the above stopping rule is obtained by maximizing Pr(claim that the treatment is safe | ݌௧௢௫ൌͲǤʹ),"
      ],
      "chips": [
        "P02",
        "p95/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a095.jpg",
      "cap": "Protocol page 95 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 96 of 118 · while controlling Pr(claim that the treatment is safe | ݌௧௢௫ൌͲǤͶ) = 0",
      "audio": [
        "while controlling Pr(claim that the treatment is safe | ݌௧௢௫ൌͲǤͶ) = 0.197, based on the following Bayesian stopping rule: the treatment is deemed unacceptably toxic if: ܲ ݎሺ݌௧௢௫൑ͲǤͶȁ݀ܽ ݐܽሻ൏ߣቀ݊ܰቁ ఈȀଷ ǡ where, ݊ is the interim sample size, ܰ is the maximum sample size, and ߣ=0.62 and ߙ=0 for Cohort 1 and =0.65 and ߙ=0.86 for Cohort 2 are design parameters optimized, assuming a vague prior Beta(0.4,0.6) for ݌௧௢௫ to make “go/no-go” decision.",
        "Note that the original publication of the design used the probability cutoff ߣሺ݊Ȁܰሻఈ, here the attenuation factor 3 is added (i.e., ߙ/3) to obtain stricter interim stopping boundaries to enhance safety.",
        "Below are the operating characteristics of the design using the B O P 2 web application (B O P 2 V1.4.25.0), Table 25: Operating Characteristics Scenario Pr(dose-limiting toxicity) Early Stopping (%) Claim Acceptable (%) Average Sample Size Cohort 1 0.1 1.80 98.20 30.6 0.2 14.27 85.60 27.8 0.3 44.05 54.42 22.0 0.4 77.41 19.67 15.3 Cohort 2 0.1 1.60 98.40 39.5 0.2 10.85 88.87 36.4 0.3 33.38 60.97 29.7 0.4 65.92 20.80 20.5 Beyond the specific statistical safety monitoring",
        "rules for dose escalation, backfill, and cohort expansion, we will impose a global safety constraint: if two or more participant deaths occur from the same cause (unrelated to disease progression) at any point during the trial, accrual will be suspended immediately. A comprehensive review of the totality of safety data by the Safety Review Committee (safety review committee) and the sponsor will be required to determine if trial or cohort termination is warranted. 11.6.",
        "Sample Size Determination The estimated sample size for Part 1 is up to 81 participants, comprising 21 patients in the doseescalation phase and up to 60 in the backfill cohorts (Dose Level A and B) for dose optimization. The sample size for dose escalation is not based on a traditional power calculation but rather selected to align with typical dose-finding trials and calibrated using simulation to provide"
      ],
      "chips": [
        "P02",
        "p96/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a096.jpg",
      "cap": "Protocol page 96 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 97 of 118 · reasonable accuracy in identifying the MTD",
      "audio": [
        "reasonable accuracy in identifying the maximum tolerated dose. The sample size for backfilling dose optimization is based on the randomized optimal selection (ROSE) design, providing 66% probability of correctly selecting the recommended expansion dose. This assumes a 0.3 high-dose response rate and a 0.1 margin favoring the higher dose. The estimated sample size for Part 2 is up to 71 participants, comprising 31 in Cohort A and 40 in Cohort B.",
        "Based on the B O P 2 design described previously, a sample size of 31 for Cohort A provides 80% power to detect an alternative objective response rate of 25% against a null objective response rate of 10%, with a onesided significant level of 0.1. For Cohort B, a sample size of 40 yields 89.5% power to detect an alternative objective response rate of 25% against a null objective response rate of 10%, controlling the one-sided significant level at 0.1.",
        "The decision to proceed to dose expansion will be made at the discretion of the sponsor, considering the totality of clinical, safety, and efficacy data. Under the proposed seamless design, the total sample size for the trial-comprising both Part 1 and Part 2-is expected to be 21+ (60-12) + (71-15-6) = 119 participants.",
        "This calculation assumes that 12 participants from the dose-escalation phase will be rolled over into the backfill cohorts in Part 1, and 21 participants treated at the recommended expansion dose in Part 1 will be rolled over into the Part 2 cohort expansion (15 for Cohort 1 and 6 for Cohort 2)."
      ],
      "chips": [
        "P02",
        "p97/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a097.jpg",
      "cap": "Protocol page 97 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 98 of 118 · Protocol body · page 98",
      "audio": [
        "12. SUPPORTING DOCUMENTATION AND OPERATIONAL CONSIDERATIONS 12.1. Appendix 1: Regulatory, Ethical, and Study Oversight Considerations 12.1.1. Regulatory and Ethical Considerations x This study will be conducted in accordance with the protocol and with the following: \u0010 Consensus ethical principles derived from international guidelines including the Declaration of Helsinki and Council for International Organizations of Medical Sciences (CIOMS) international ethical guidelines.",
        "These standards are consistent with the requirements of the US Code of Federal Regulations (CFR) Title 21, Part 312, as well as local legislation. \u0010 The Investigator, Sponsor and its third-party vendors will ensure that the study is conducted in accordance with ICH/GCP (ICH E6[R2] addendum) guidelines and applicable laws and regulations.",
        "\u0010 Applicable laws and regulations x The protocol, protocol amendments, informed consent form, Investigator’s Brochure, and other relevant documents (e.g., advertisements) must be submitted to an IRB/IEC by the Investigator and reviewed and approved by the IRB/IEC before the study is initiated.",
        "x Any amendments to the protocol will require IRB/IEC approval before implementation of changes made to the study design, except for changes necessary to eliminate an immediate hazard to study participants. x Protocols and any substantial amendments to the protocol will require health authority approval prior to initiation except for changes necessary to eliminate an immediate hazard to study participants.",
        "x The Investigator will be responsible for the following, as applicable: \u0010 Providing written summaries of the status of the study to the IRB/IEC annually or more frequently in accordance with the requirements, policies, and procedures established by the IRB/IEC \u0010 Notifying the IRB/IEC of SAEs or other significant safety findings as required by IRB/IEC procedures \u0010 Providing oversight of the conduct of the study at the site and adherence to requirements of 21 CFR, ICH",
        "guidelines, the IRB/IEC, European regulation 536/2014 for clinical studies, and all other applicable local regulations 12.1.2. Financial Disclosure Investigators and sub-Investigators will provide the Sponsor with sufficient, accurate financial information as requested to allow the Sponsor to submit complete and accurate financial certification or disclosure statements to the appropriate regulatory authorities. Investigators are"
      ],
      "chips": [
        "P02",
        "p98/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a098.jpg",
      "cap": "Protocol page 98 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 99 of 118 · responsible for providing information on financial interests prior to the…",
      "audio": [
        "responsible for providing information on financial interests prior to the Investigator’ participation, during the course of the study and for up to 1 year after completion of the study. 12.1.3. Informed Consent Process x The Investigator or the Investigator’s representative will explain the nature of the study, including the risks and benefits, to the potential participant and answer all questions regarding the study.",
        "x Potential participants must be informed that their participation is voluntary. will be required to sign a statement of informed consent that meets the requirements of 21 CFR 50, local regulations, ICH guidelines, privacy and data protection requirements, where applicable, and the IRB/IEC or study center.",
        "x Written informed consent must be obtained before the participant undergoes any study-related procedures and the date and time the written consent was obtained must be recorded. The authorized person obtaining the informed consent must also sign the informed consent form. x Participants must be reconsented to the most current version of the informed consent form(s) during their participation in the study.",
        "x A copy of the informed consent form(s) must be provided to the participant. x The informed consent process will be documented as part of the participant’s study records. 12.1.4. Data Protection x Participants will be assigned a unique identifier by the Sponsor. Any participant records or datasets that are transferred to the Sponsor will contain the identifier only; participant names or any information which would make the participant identifiable will not be transferred.",
        "x The participant must be informed that their personal study-related data will be used by the Sponsor in accordance with local data protection law. The level of disclosure must also be explained to the participant who will be required to give consent for their data to be used as described in the informed consent.",
        "Per federal regulations and ICH GCP guidelines, the parties below may have access to information about the participant’s identity and other personal information within source documents and/or medical records for the purpose of verifying study data. The parties listed will follow procedures to maintain protection for unauthorized disclosure. \u0010 Sponsor and third-party vendors (e.g.",
        "contract research organization) \u0010 IRB/EC \u0010 Regulatory agencies x The participant must be informed that their medical records may be examined by Clinical Quality Assurance auditors or other authorized personnel appointed by the"
      ],
      "chips": [
        "P02",
        "p99/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a099.jpg",
      "cap": "Protocol page 99 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 100 of 118 · Sponsor, by appropriate IRB/IEC members, and by inspectors from regulatory authorities",
      "audio": [
        "Sponsor, by appropriate IRB/IEC members, and by inspectors from regulatory authorities. x The contract between Sponsor, or its contract research organizations, and study sites specifies responsibilities of the parties related to personal data protection.",
        "x Information technology systems used to collect, process, and store study-related data are secured by technical and organizational security measures designed to protect such data against accidental or unlawful loss, alteration, or unauthorized disclosure or access. 12.1.5. Committees Structure 12.1.5.1.",
        "Safety Review Committee A Safety Review Committee (safety review committee) will conduct regularly scheduled monitoring meetings to discuss individual participant status, DLTs, safety findings, and safety management for participants in the study. Medical representation will include a Sponsor MD, clinical research organization (CRO) pharmacovigilance representative, and one of the lead investigators at minimum.",
        "In addition, the safety review committee will meet after all participants in a dose cohort have completed their dose-limiting toxicity period to review the safety data from the dose-limiting toxicity period, as well as the cumulative safety data from participants who have remained on treatment beyond the dose-limiting toxicity period. The safety review committee will make dose level recommendations.",
        "The decision to open a new cohort at a higher dose level, to expand the current dose level (to obtain additional safety data prior to dose escalation), or to dose de-escalate will be made based on the parameters of the B O I N design. safety review committee will transition to regular evaluation of aggregate safety data in Part 2. 12.1.6.",
        "Dissemination of Clinical Study Data Results of clinical drug studies will be provided on the publicly funded website ClinicalTrials.gov and EU Clinical Trials Register in line with the applicable regulations. All Sponsor-sponsored clinical studies are considered for publication in the scientific literature irrespective of whether the results of the clinical studies are positive or negative. 12.1.7.",
        "Data Quality Assurance x All participant data relating to the study will be recorded on printed or eCRFs unless transmitted to the Sponsor or designee electronically (e.g., laboratory data). The Investigator is responsible for verifying that data entries are accurate and correct by physically or electronically signing the CRF. x Guidance on completion of CRFs will be provided in eCRF Completion Guideline.",
        "x The Investigator must permit study-related monitoring, audits, IRB/IEC review, and regulatory agency inspections and provide direct access to source documents.",
        "x Monitoring details describing strategy, including definition of study critical data items and processes (e.g., risk-based initiatives in operations and quality such as risk management and mitigation strategies and analytical risk-based monitoring), methods, responsibilities, and requirements, including handling of noncompliance issues and"
      ],
      "chips": [
        "P02",
        "p100/118",
        "B7-H3 Ac-225"
      ],
      "visual": "dlt",
      "image": "assets/protocol/aky/a100.jpg",
      "cap": "Protocol page 100 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 101 of 118 · monitoring techniques (central, remote, or on-site monitoring) are provided in the…",
      "audio": [
        "monitoring techniques (central, remote, or on-site monitoring) are provided in the monitoring plan. x The Sponsor or designee is responsible for the data management of this study, including quality checking of the data. x The Sponsor assumes accountability for actions delegated to other individuals (e.g., contract research organizations).",
        "x Records and documents, including signed ICFs, pertaining to the conduct of this study must be retained by the Investigator for 5 years after study completion unless local regulations or institutional policies require a longer retention period. No records may be destroyed during the retention period without the written approval of the sponsor. No records may be transferred to another location or party without written notification to the Sponsor. 12.1.8.",
        "Source Documents x Source documents provide evidence for the existence of the participant and substantiate the integrity of the data collected. Source documents are filed at the Investigator’s site. x Data reported on the CRF or entered in the eCRF that are transcribed from source documents must be consistent with the source documents or the discrepancies must be explained.",
        "The Investigator may need to request previous medical records or transfer records, depending on the study. Also, current medical records must be available. x The Investigator must maintain accurate documentation (source data) that supports the information entered in the CRF.",
        "x The Sponsor or designee will perform monitoring to confirm that data entered into the CRF by authorized site personnel are accurate, complete, and verifiable from source documents; that the safety and rights of participants are being protected; and that the study is being conducted in accordance with the currently approved protocol and any other study agreements, ICH GCP, and all applicable regulatory requirements. 12.1.9.",
        "Study and Site Closure Site Termination Study sites will be closed upon study completion or early termination of study or early termination of a site. The Sponsor reserves the right to close a study site or terminate the study at any time for any reason at the sole discretion of the Sponsor. A study site is considered closed when all required documents and study supplies have been collected and a study-site closure visit has been performed.",
        "The Investigator may initiate study-site closure at any time, provided there is reasonable cause and sufficient notice is given in advance of the intended termination. Reasons for the early closure of a study site by the Sponsor or Investigator may include but are not limited to: For study termination:"
      ],
      "chips": [
        "P02",
        "p101/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a101.jpg",
      "cap": "Protocol page 101 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 102 of 118 · x Discontinuation of further study intervention development For site termination: x…",
      "audio": [
        "x Discontinuation of further study intervention development For site termination: x Failure of the Investigator to comply with the protocol, the requirements of the IRB/IEC or local health authorities, the Sponsor’s procedures, or GCP guidelines x Inadequate or no recruitment (evaluated after a reasonable amount of time) of participants by the Investigator x Total number of participants included earlier than expected If the study is prematurely terminated or suspended, the",
        "Sponsor shall promptly inform the Investigators, the IECs/IRBs, the regulatory authorities, and any contract research organization(s) used in the study of the reason for termination or suspension, as specified by the applicable regulatory requirements. The Investigator will promptly inform participants and should ensure appropriate participant therapy and/or follow-up. 12.1.10.",
        "Clinical Study Report A CSR will be written once the last participant has completed dosing and all follow-up data are available from 12 months following their initial dosing and all planned analyses have been completed. 12.1.11. Publication Policy x The results of this study may be published or presented at scientific meetings. If this is foreseen, the Investigator agrees to submit all manuscripts or abstracts to the Sponsor before submission.",
        "This allows the Sponsor to protect proprietary information and to provide comments. x The Sponsor will comply with the requirements for publication of study results. In accordance with standard editorial and ethical practice, the Sponsor will generally support publication of multicenter studies only in their entirety and not as individual site data. In this case, a coordinating Investigator will be designated by mutual agreement.",
        "x Authorship will be determined by mutual agreement and in line with International Committee of Medical Journal Editors authorship requirements."
      ],
      "chips": [
        "P02",
        "p102/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a102.jpg",
      "cap": "Protocol page 102 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 103 of 118 · Protocol body · page 103",
      "audio": [
        "12.2. Appendix 2: Clinical Laboratory Tests x The tests detailed in Table 26 will be performed by the local laboratory. x Protocol-specific requirements for inclusion or exclusion of participants are detailed in Section 7 of the protocol. x Additional tests may be performed at any time during the study as determined necessary by the Investigator or required by local regulations. x Investigators must document their review of each laboratory safety report.",
        "Table 26: Protocol-required Laboratory Tests Chemistry Hematology x Albumin x Blood urea nitrogen x Creatinine x E G F R x Glucose x Potassium x Sodium x Chloride x Calcium x AST x ALT x Alkaline phosphatase x Total and direct bilirubin x Total protein x Lactate dehydrogenase CBC with differential count: x Platelet count x RBC count x Hemoglobin x Hematocrit x WBC count x Neutrophils x Lymphocytes PSA Levels x Prostate-specific antigen levels only required for m C R P C",
        "participants Testosterone Levels x Serum testosterone levels only required for m C R P C participants Urinalysis Coagulation x pH x Glucose x Protein x Blood x Ketones x Others: bilirubin, urobilinogen, nitrite, leukocyte esterase x INR x Prothrombin time (PT) x Activated partial thromboplastin time (aPTT) Beta hCG Pregnancy Test FSH x Only required for women of childbearing potential x Only required at screening for postmenopausal women < 60 years old"
      ],
      "chips": [
        "P02",
        "p103/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a103.jpg",
      "cap": "Protocol page 103 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 104 of 118 · Protocol body · page 104",
      "audio": [
        "12.3. Appendix 3: R E C I S T v1.1 R E C I S T v1.1 Response and Evaluation Endpoints: Measurable Disease. Measurable tumor lesions (nodal, subcutaneous, lung parenchyma, solid organ metastases) are defined as those that can be accurately measured in at least one dimension (longest diameter to be recorded) as greater than or equal to 20 mm with chest x-ray and as greater than or equal to 10 mm with CT scan or clinical examination.",
        "Bone lesions are considered measurable only if assessed by CT scan and have an identifiable soft tissue component that meets these requirements (soft tissue component greater than or equal to 10 mm by CT scan). Malignant lymph nodes must be greater than or equal to 15 mm in the short axis to be considered measurable; only the short axis will be measured and followed. All tumor measurements must be recorded in millimeters (or decimal fractions of centimeters).",
        "Previously irradiated lesions are not considered measurable unless progression has been documented in the lesion. Non-measurable Disease. All other lesions (or sites of disease), including small lesions are considered non-measurable disease.",
        "Bone lesions without a measurable soft tissue component, leptomeningeal disease, ascites, pleural/pericardial effusions, lymphangitis cutis/pulmonis, inflammatory breast disease, lymphangitic involvement of lung or skin and abdominal masses followed by clinical examination are all non-measurable. Lesions in previously irradiated areas are non-measurable, unless progression has been demonstrated. Target Lesions.",
        "When more than one measurable tumor lesion is present at baseline all lesions up to a maximum of 5 lesions total (and a maximum of 2 lesions per organ) representative of all involved organs should be identified as target lesions and will be recorded and measured at baseline.",
        "Target lesions should be selected on the basis of their size (lesions with the longest diameter), be representative of all involved organs, but in addition should be those that lend themselves to reproducible repeated measurements. Note that pathological nodes must meet the criterion of a short axis of greater than or equal to 15 mm by CT scan and only the short axis of these nodes will contribute to the baseline sum.",
        "All other pathological nodes (those with short axis greater than or equal to 10 mm but <15 mm) should be considered non-target lesions. Nodes that have a short axis <10 mm are considered non-pathological and should not be recorded or followed. At baseline, the sum of the target lesions (longest diameter of tumor lesions plus short axis of lymph nodes: overall maximum of 5) is to be recorded.",
        "R E C I S T response: All participants will have their BEST RESPONSE from the start of study treatment until the end of treatment classified as outlined below: Complete Response (CR): disappearance of target and non-target lesions and normalization of tumor markers. Pathological lymph nodes must have short axis measures.",
        "Partial Response (PR): at least a 30% decrease in the sum of measures (longest diameter for tumor lesions and short axis measure for nodes) of target lesions, taking as reference the baseline sum of diameters. Non target lesions must be non-PD. Confirmation of response is only required in non-randomized studies.",
        "Stable Disease (SD): Neither sufficient shrinkage to qualify for PR nor sufficient increase to qualify for PD taking as reference the smallest sum of diameters on study."
      ],
      "chips": [
        "P02",
        "p104/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a104.jpg",
      "cap": "Protocol page 104 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 105 of 118 · Progressive Disease (PD): at least a 20% increase in the sum of diameters of…",
      "audio": [
        "Progressive Disease (PD): at least a 20% increase in the sum of diameters of measured lesions taking as references the smallest sum of diameters recorded on study (including baseline) AND an absolute increase of greater than or equal to 5 mm. Appearance of new lesions will also constitute progressive disease (including lesions in previously unassessed areas).",
        "In exceptional circumstances, unequivocal progression of non-target disease may be accepted as evidence of disease progression. Modest increases in the size of one or more non-target lesions are NOT considered unequivocal progression. If the evidence of PD is equivocal (target or non-target), treatment may continue until the next assessment, but if confirmed, the earlier date must be used.",
        "Table 27: Evaluation of Best Overall Response Target Lesions Non-Target Lesions New Lesions Overall Response Best Response for this Category also Requires Target lesions plus or minus non-target lesions CR CR No CR Normalization of tumor markers, tumor nodes <10 mm CR Non-CR/Non-PD No PR CR Not all evaluated No PR Target lesions plus or minus non target lesions PR Non-PD / Not all evaluated No PR SD Non-PD / not all evaluated No SD Documented at least once greater than or",
        "equal to 4 wks.",
        "from baseline Not all evaluated Non-PD No NE PD Any Any PD Any PD Any PD Any Any Yes PD Non target lesions ONLY No target CR No CR Normalization of tumor markers, tumor nodes <10 mm No target Non-CR/Non-PD No Non-CR/Non- P D No target Not all evaluated No NE No target Unequivocal PD Any PD No target Any Yes * PD Note: Participants with a global deterioration of health status requiring discontinuation of treatment without objective evidence of disease progression at that time",
        "should be reported as “symptomatic deterioration”. This is a reason for stopping therapy, but is NOT objective PD. Every effort should be made to document the objective progression even after discontinuation of treatment. *Investigators should record all new lesions; if the new lesion is felt to be equivocal, treatment may be continued pending further assessments."
      ],
      "chips": [
        "P02",
        "p105/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a105.jpg",
      "cap": "Protocol page 105 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 106 of 118 · Protocol body · page 106",
      "audio": [
        "12.4.",
        "Appendix 4: Prostate Cancer Working Group 3 (P C W G 3) Criteria Variable P C W G 3 (2016) PSA x PSA50/90 response should be confirmed no earlier than 3 weeks following the initial documented response x Recognize that a favorable effect on PSA may be delayed for 12 weeks or more, even for a cytotoxic drug x Monitor PSA by cycle but plan to continue through early rises for a minimum of 12 weeks unless other evidence of progression x Ignore early rises (prior to12 weeks) in",
        "determining PSA response For control/relieve/eliminate endpoints: x Describe absolute changes in PSA over time from baseline to best response For delay/prevent endpoints: Decline from baseline: x Record time from start of therapy to first PSA increase that is greater than or equal to 25% and greater than or equal to 2ng/mL above the nadir, and which is confirmed by a second value 3 or more weeks later (i.e., a confirmed rising trend) No decline from baseline: x PSA",
        "progression greater than or equal to 25% and greater than or equal to 2 ng/mL after 12 weeks Soft-tissue lesions For control/relieve/eliminate endpoints: Use R E C I S T with caveats: x Record up to 5 lesions per site of disease x Record changes in nodal, lung, liver, adrenal and CNS sites separately x Only report changes in lymph nodes that were greater than or equal to 1.5 cm in diameter in short axis at baseline x Record changes in pelvic (regional) nodes vs extra pelvic",
        "(distant/metastatic) nodes separately x Only report changes in visceral lesions (liver, lung, adrenal, CNS) that were greater than or equal to 1.0 cm in the longest dimension x Record complete elimination of disease at any site separately x Confirm favorable change with second scan x Record changes using waterfall plot For delay/prevent endpoints: x Record changes in nodal and visceral disease separately x Record up to 5 lesions per site of spread x Use RECIST1.1 criteria",
        "for progression, but clearly record type of progression (growth of existing lesions vs development of new lesions) separately by site. With additional requirement that progression at first assessment be confirmedbyasecondscan6 or more weeks later.",
        "(Particularly important when anticipated effect on PSA is delayed or for biologic therapies) x Previously normal (<1.0 cm) lymph nodes must have grown by greater than or equal to 5mm in the short axis from baseline or nadir and be greater than or equal to 1.0 cm in the short axis to be considered to have progressed. Nodes that have progressed to 1.0 to less than 1.5 cm are pathologic, subject to clinical discretion, and nonmeasurable.",
        "For existing pathologic adenopathy ( greater than or equal to 1.5cm), progression is defined per R E C I S T 1.1 Bone For control/relieve eliminate end points: x Record outcome as new lesions, no new lesions or resolved lesion x First scheduled reassessment: o No new lesions: continue therapy o New lesions: perform a confirmatory scan 6 or more weeks later x Confirmatory scan: o No new lesions: continue therapy"
      ],
      "chips": [
        "P02",
        "p106/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a106.jpg",
      "cap": "Protocol page 106 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 107 of 118 · Variable PCWG3 (2016) o Additional new lesions: progression x Subsequent scheduled…",
      "audio": [
        "Variable P C W G 3 (2016) o Additional new lesions: progression x Subsequent scheduled reassessments: o No new lesions: continue o New lesions: progression x Changes in intensity or uptake do not constitute regression or progression For prevent/delay end points (progression): x Exclude pseudoprogression in the absence of symptoms or other signs of progression x At least two new lesions on first post-treatment scan, with at least two additional lesions on the next scan (2+2",
        "rule) x If at least two additional new lesions are seen on the next (confirmatory) scan, the date of progression is the date of the first post-treatment scan, when the first two new lesions were documented x For scans after the first post-treatment scan, at least two new lesions relative to the first posttreatment scan confirmed on a subsequent scan x Date of progression is the date of the scan that first documents the second lesion x Changes in intensity of uptake alone do",
        "not constitute either progression or regression x Report the proportion of patients who have not progressed at fixed time intervals (6 and 12 months) Symptoms Pain palliation assessment requires a patient population with clinically meaningful pain at baseline (e.g., greater than or equal to 4 on a 10-point pain intensity scale) and response defined as a clinically meaningful score improvement at a subsequent timepoint (e.g., a 30% relative or 2-point absolute improvement",
        "from baseline at 12 weeks, confirmed at least 2 weeks later, without an overall increase in opiate use). For control/relieve eliminate endpoints: x Serial (e.g., daily x 7 days) assessments at each timepoint can improve the stability of values Principles may be extended for any PRO for which a clinically meaningful baseline PRO score has been determined together with a responder definition that is based on a sustained clinically meaningful score improvement.",
        "For delay/prevent endpoints: Patients with any level of baseline pain, including no pain, are eligible to be evaluated for prevent/delay endpoints; those without pain are followed for development of pain, whereas those with baseline pain are followed for progression (e.g., a 2-point increase without an overall decrease in opiate use). Pain assessment should be administered at treatment discontinuation and once again if feasible (e.g., 2 to 4 weeks later).",
        "Time to deterioration of physical function and/or health-related quality of life scores should also be included, with a priori thresholds defining clinically meaningful deterioration score changes that are based on prior published data for the selected questionnaire. CNS = central nervous system; P C W G 3 = Prostate Cancer Working Group 3; PSA = prostate-specific antigen; R E C I S T = Response Evaluation Criteria in Solid Tumors. Refer to Scher et al 2016 for more details."
      ],
      "chips": [
        "P02",
        "p107/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a107.jpg",
      "cap": "Protocol page 107 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 108 of 118 · Table 28: Overall Assessment for Radiological Response per PCWG3 Soft Tissue Disease…",
      "audio": [
        "Table 28: Overall Assessment for Radiological Response per P C W G 3 Soft Tissue Disease Bone Progression Status Overall Radiographic Response CR Non-PD CR CR (NTL only disease at baseline) Non-PD Non-CR/Non-PD PR Non-PD PR PR NE NE SD Non-PD SD SD NE NE Non-CR/Non-PD Non-PD Non-CR/Non-PD Non-CR/Non-PD NE NE None Non-PD Non-PD None NE NE NE Non-PD or NE NE PD Any PD Any (except PD or NE) Any (except PDu or PDc) NE Any PDc PD Any (except PD) PDu PDu CR = Complete Response, PR",
        "= Partial Response, SD = Stable Disease, PD = Disease Progression, NE = Not Evaluable, NTL = Non-Target Lesions, PDc = Disease Progression Confirmed, PDu= Disease Progression Unconfirmed"
      ],
      "chips": [
        "P02",
        "p108/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a108.jpg",
      "cap": "Protocol page 108 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 109 of 118 · Protocol body · page 109",
      "audio": [
        "13. REFERENCES Abouelkheer Y, Bhatia A. Head and neck cancer - emerging targeted therapies. Front Oncol. 2025 Sep 11;15:1640960. Altan M, Pelekanou V, Schalper KA, Toki M, Gaule P, Syrigos K, Herbst RS, Rimm DL. B 7-H 3 Expression in non-small cell lung cancer and Its Association with B7-H4, P D L 1 and Tumor-Infiltrating Lymphocytes. Clin Cancer Res. 2017 Sep 1;23(17):5202-5209. Ballal S, Yadav MP, Tripathi M, Sahoo RK, Bal C.",
        "Survival Outcomes in Metastatic Gastroenteropancreatic Neuroendocrine Tumor Patients receiving Concomitant 225AcDOTATATE Targeted Alpha Therapy and Capecitabine: A Real-world Scenario Management Based Long-term Outcome Study. J Nucl Med. 2022 Jul 21:jnumed.122.264043. Barsouk A, Aluru JS, Rawla P, Saginala K, Barsouk A. Epidemiology, Risk Factors, and Prevention of Head and Neck Squamous Cell Carcinoma. Med Sci (Basel). 2023 Jun 13;11(2):42. Bhatia A, Burtness B.",
        "Treating Head and Neck Cancer in the Age of Immunotherapy: A 2023 Update. Drugs. 2023 Feb;83(3):217-248. Bray F, Laversanne M, Sung H, Ferlay J, Siegel RL, Soerjomataram I, Jemal A. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. CA Cancer J Clin. 2024 May-Jun;74(3):229-263. Carvajal-Hausdorf D, Altan M, Velcheti V, Gettinger SN, Herbst RS, Rimm DL, Schalper KA.",
        "Expression and clinical significance of P D L 1, B 7-H 3, B7-H4 and TILs in human small cell lung Cancer (small cell lung cancer). J Immunother Cancer. 2019 Mar 8;7(1):65. Chapoval AI, Ni J, Lau JS, Wilcox RA, Flies DB, Liu D, Dong H, Sica GL, Zhu G, Tamada K, Chen L. B 7-H 3: a costimulatory molecule for T cell activation and IFN-gamma production. Nat Immunol. 2001 Mar;2(3):269-74.",
        "Chaturvedi AK, Engels EA, Pfeiffer RM, Hernandez BY, Xiao W, Kim E, Jiang B, Goodman MT, Sibug-Saber M, Cozen W, Liu L, Lynch CF, Wentzensen N, Jordan RC, Altekruse S, Anderson WF, Rosenberg PS, Gillison ML. Human Papillomavirus and Rising Oropharyngeal Cancer Incidence in the United States. J Clin Oncol. 2023 Jun 10;41(17):3081-3088. Choi E, Buie J, Camacho J, Sharma P, de Riese WTW.",
        "Evolution of Androgen Deprivation Therapy (ADT) and Its New Emerging Modalities in Prostate Cancer: An Update for Practicing Urologists, Clinicians and Medical Providers. Res Rep Urol. 2022 Mar 30;14:87-108. Cohen S, et al. Temporal trends in small cell lung cancer: Analysis of the U.S. Surveillance, Epidemiology and End Results (SEER) database. JCO. 2023;41:e20641-e20641. Collins M, Ling V, Carreno BM. The B7 family of immune-regulatory ligands. Genome Biol. 2005;6(6):223.",
        "Costa F, Das R, Kini Bailur J, Dhodapkar K, Dhodapkar MV. Checkpoint Inhibition in Myeloma: Opportunities and Challenges. Front Immunol. 2018 Sep 26;9:2204. Devasia TP, Mariotto AB, Nyame YA, Etzioni R. Estimating the Number of Men Living with Metastatic Prostate Cancer in the United States. Cancer Epidemiol Biomarkers Prev. 2023 May 1;32(5):659-665."
      ],
      "chips": [
        "P02",
        "p109/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a109.jpg",
      "cap": "Protocol page 109 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 110 of 118 · Duma N, Santana-Davila R, Molina JR",
      "audio": [
        "Duma N, Santana-Davila R, Molina JR. Non-Small Cell Lung Cancer: Epidemiology, Screening, Diagnosis, and Treatment. Mayo Clin Proc. 2019 Aug;94(8):1623-1640. Ells Z, Grogan TR, Czernin J, Dahlbom M, Calais J. Dosimetry of [177Lu]Lu-PSMA-Targeted Radiopharmaceutical Therapies in Patients with Prostate Cancer: A Comparative Systematic Review and Metaanalysis. J Nucl Med. 2024;65(8):1264-1271.",
        "Emami B, Lyman J, Brown A, Coia L, Goitein M, Munzenrider JE, Shank B, Solin LJ, Wesson M. Tolerance of normal tissue to therapeutic irradiation. Int J Radiat Oncol Biol Phys. 1991 May 15;21(1):109-22. Feuerecker B, Biechl P, Seidl C, Bruchertseifer F, Morgenstern A, Schwaiger M, Eisenreich W. Diverse metabolic response of cancer cells treated with a 213Bi-anti-EGFR-immunoconjugate. Sci Rep. 2021 Mar 18;11(1):6227.",
        "Garon EB, Ciuleanu TE, Arrieta O, Prabhash K, Syrigos KN, Goksel T, Park K, Gorbunova V, Kowalyszyn RD, Pikiel J, Czyzewicz G, Orlov SV, Lewanski CR, Thomas M, Bidoli P, Dakhil S, Gans S, Kim JH, Grigorescu A, Karaseva N, Reck M, Cappuzzo F, Alexandris E, Sashegyi A, Yurasov S, Pérol M.",
        "Ramucirumab plus docetaxel versus placebo plus docetaxel for second-line treatment of stage IV non-small-cell lung cancer after disease progression on platinum-based therapy (REVEL): a multicentre, double-blind, randomised phase 3 trial. Lancet. 2014 Aug 23;384(9944):665-73.",
        "Goldman JW, Dvorkin M, Chen Y, Reinmuth N, Hotta K, Trukhin D, Statsenko G, Hochmair MJ, Özgüroğlu M, Ji JH, Garassino MC, Voitko O, Poltoratskiy A, Ponce S, Verderame F, Havel L, Bondarenko I, Każarnowicz A, Losonczy G, Conev NV, Armstrong J, Byrne N, Thiyagarajah P, Jiang H, Paz-Ares L; CASPIAN investigators.",
        "Durvalumab, with or without tremelimumab, plus platinum-etoposide versus platinum-etoposide alone in first-line treatment of extensive-stage small-cell lung cancer (CASPIAN): updated results from a randomised, controlled, open-label, phase 3 trial. Lancet Oncol. 2021 Jan;22(1):51-65. Jani CT, Desai A, Lopes GL Jr. Clinical Strategies for Advanced Non-Small Cell Lung Cancer. JAMA Netw Open. 2025 Jun 2;8(6):e2514535.",
        "Jiang Y, Yuan H, Li Z, Ji X, Shen Q, Tuo J, Bi J, Li H, Xiang Y. Global pattern and trends of colorectal cancer survival: a systematic review of population-based registration data. Cancer Biol Med. 2021 Sep 6;19(2):175-86. Klaus R, Niyazi M, Lange-Sperandio B. Radiation-induced kidney toxicity: molecular and cellular pathogenesis. Radiat Oncol. 2021 Feb 25;16(1):43. Kontos F, Michelakos T, Kurokawa T, Sadagopan A, Schwab JH, Ferrone CR, Ferrone S.",
        "B 7-H 3: An Attractive Target for Antibody-based Immunotherapy. Clin Cancer Res. 2021 Mar 1;27(5):1227-1235. Korpan, M., Puhr, H.C., Prager, G.W. et al. State-of-the-art therapy and innovative treatment strategies in esophageal squamous cell cancer. memo 17, 274-279 (2024). Kratochwil C, Apostolidis L, Rathke H, Apostolidis C, Bicu F, Bruchertseifer F, Choyke PL, Haberkorn U, Giesel FL, Morgenstern A.",
        "Dosing 225Ac-DOTATOC in patients with somatostatinreceptor-positive solid tumors: 5-year follow-up of hematological and renal toxicity. Eur J Nucl Med Mol Imaging. 2021 Dec;49(1):54-63."
      ],
      "chips": [
        "P02",
        "p110/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a110.jpg",
      "cap": "Protocol page 110 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 111 of 118 · Lambert B, Cybulla M, Weiner SM, Van De Wiele C, Ham H, Dierckx RA, Otte A",
      "audio": [
        "Lambert B, Cybulla M, Weiner SM, Van De Wiele C, Ham H, Dierckx RA, Otte A. Renal toxicity after radionuclide therapy. Radiat Res. 2004 May;161(5):607-11. Langbein T, Kulkarni HR, Schuchardt C, Mueller D, Volk GF, Baum RP. Salivary Gland Toxicity of PSMA-Targeted Radioligand Therapy with 177Lu-PSMA and Combined 225Ac- and 177LuLabeled PSMA Ligands (TANDEM-PRLT) in Advanced Prostate Cancer: A Single-Center Systematic Investigation. Diagnostics (Basel). 2022 Aug 10;12(8):1926.",
        "Lau SCM, Pan Y, Velcheti V, Wong KK. Squamous cell lung cancer: Current landscape and future therapeutic options. Cancer Cell. 2022 Nov 14;40(11):1279-1293. Lawal IO, Morgenstern A, Vorster M, Knoesen O, Mahapane J, Hlongwa KN, Maserumule LC, Ndlovu H, Reed JD, Popoola GO, Mokoala KMG, Mdlophane A, Bruchertseifer F, Sathekge MM.",
        "Hematologic toxicity profile and efficacy of [225Ac]Ac-PSMA-617 α-radioligand therapy of patients with extensive skeletal metastases of castration-resistant prostate cancer. Eur J Nucl Med Mol Imaging. 2022 Aug;49(10):3581-3592. Lenzo N, Capp A, Singh A, et al. CUPID (64Cu-TLX592 phase 1 pharmacokinetics, biodistribution and dosimetry): A proof-of-concept study of TLX592-targeted alpha therapy in prostate cancer. J Clin Oncol. Meeting Abstract. 2025;43(4).",
        "ASCO Genitourinary Cancers Symposium. Liu S, Y. Y. (2015). Bayesian optimal interval designs for phase I clinical trials. Journal of the Royal Statistical Society, 2015; 64(3): 507-523. MacGregor HL, Sayad A, Elia A, Wang BX, Katz SR, Shaw PA, Clarke BA, Crome SQ, RobertTissot C, Bernardini MQ, Nguyen LT, Ohashi PS. High expression of B 7-H 3 on stromal cells defines tumor and stromal compartments in epithelial ovarian cancer and is associated with limited immune activation.",
        "J Immunother Cancer. 2019 Dec 31;7(1):357. Mateo J, Boysen G, Barbieri CE, Bryant HE, Castro E, Nelson PS, et al. DNA repair in prostate cancer: biology and clinical implications. Eur Urol. 2017;71(3):417-425. Mo C, Chadha B, Kuang C. An Evolving Landscape: New Therapies for Metastatic Colorectal Cancer. Clin Colorectal Cancer. 2024 Dec;23(4):337-345. Molinier O, Goupil F, Debieuvre D, Auliac JB, Jeandeau S, Lacroix S, Martin F, Grivaux M.",
        "Fiveyear survival and prognostic factors according to histology in 6101 non-small-cell lung cancer patients. Respir Med Res. 2020 Mar;77:46-54. Obermannová R, Alsina M, Cervantes A, Leong T, Lordick F, Nilsson M, van Grieken NCT, Vogel A, Smyth EC; ESMO Guidelines Committee. Electronic address: clinicalguidelines@esmo.org. Oesophageal cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol. 2022 Oct;33(10):992-1004.",
        "Oken MM, Creech RH, Tormey DC, et al. Toxicity And Response Criteria Of The Eastern Cooperative Oncology Group. Am J Clin Oncol 5:649-655, 1982. Parente P, Ciardiello D, Angerilli V, Gasparello J, Fassan M. B 7-H 3 in Colorectal Adenocarcinoma: Are We Focusing on the Right Target? Clin Colorectal Cancer. 2025 Dec;24(4):492-497.",
        "Parker C, Nilsson S, Heinrich D, Helle SI, O'Sullivan JM, Fosså SD, Chodacki A, Wiechno P, Logue J, Seke M, Widmark A, Johannessen DC, Hoskin P, Bottomley D, James ND, Solberg A,"
      ],
      "chips": [
        "P02",
        "p111/118",
        "B7-H3 Ac-225"
      ],
      "visual": "cu64",
      "image": "assets/protocol/aky/a111.jpg",
      "cap": "Protocol page 111 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 112 of 118 · Syndikus I, Kliment J, Wedel S, Boehmer S, Dall'Oglio M, Franzén L, Coleman R,…",
      "audio": [
        "Syndikus I, Kliment J, Wedel S, Boehmer S, Dall'Oglio M, Franzén L, Coleman R, Vogelzang NJ, O'Bryan-Tear CG, Staudacher K, Garcia-Vargas J, Shan M, Bruland ØS, Sartor O; ALSYMPCA Investigators. Alpha emitter radium-223 and survival in metastatic prostate cancer. N Engl J Med. 2013 Jul 18;369(3):213-23.",
        "Paz-Ares L, Luft A, Vicente D, Tafreshi A, Gümüş M, Mazières J, Hermes B, Çay Şenler F, Csőszi T, Fülöp A, Rodríguez-Cid J, Wilson J, Sugawara S, Kato T, Lee KH, Cheng Y, Novello S, Halmos B, Li X, Lubiniecki GM, Piperdi B, Kowalski DM; KEYNOTE-407 Investigators. Pembrolizumab plus Chemotherapy for Squamous Non-Small-Cell Lung Cancer. N Engl J Med. 2018 Nov 22;379(21):2040-2051. Pietanza MC, Byers LA, Minna JD, Rudin CM.",
        "Small cell lung cancer: will recent progress lead to improved outcomes? Clin Cancer Res. 2015 May 15;21(10):2244-55. Porta-Sánchez A, Gilbert C, Spears D, Amir E, Chan J, Nanthakumar K, Thavendiranathan P. Incidence, Diagnosis, and Management of QT Prolongation Induced by Cancer Therapies: A Systematic Review. J Am Heart Assoc. 2017 Dec 7;6(12):e007724. Posdzich P, Darr C, Hilser T, Wahl M, Herrmann K, Hadaschik B, Grünwald V.",
        "Metastatic Prostate Cancer-A Review of Current Treatment Options and Promising New Approaches. Cancers (Basel). 2023 Jan 11;15(2):461. Qiu MJ, Xia Q, Chen YB, Fang XF, Li QT, Zhu LS, Jiang X, Xiong ZF, Yang SL. The Expression of Three Negative Co-Stimulatory B7 Family Molecules in Small Cell Lung Cancer and Their Effect on Prognosis. Front Oncol. 2021 Apr 15;11:600238.",
        "Rosar F, Burgard C, David S, Marlowe RJ, Bartholomä M, Maus S, Petto S, Khreish F, SchaeferSchuler A, Ezziddin S. Dual FDG/PSMA PET imaging to predict lesion-based progression of m C R P C during PSMA-RLT. Sci Rep. 2024 May 17;14(1):11271. Santos ES, Rodriguez E. Treatment Considerations for Patients With Advanced Squamous Cell Carcinoma of the Lung. Clin Lung Cancer. 2022 Sep;23(6):457-466.",
        "Sartor O., de Bono J., Chi K.N., Herrmann K., Rahbar K., Tagawa S.T., Nordquist L.T., Vaishampajan N., El-Haddad G., Park C.H., et al. Lutetium-177-PSMA-617 for Metastatic Castration-Resistant Prostate Cancer. N. Engl. J. Med. 2021;385:1091-1103. Sathekge M, Bruchertseifer F, Vorster M, et al. m C R P C Patients Receiving 225Ac-PSMA-617 Therapy in the Post-Androgen Deprivation Therapy Setting: Response to Treatment and Survival Analysis. J Nucl Med. 2022;63(10):1496-1502.",
        "Sathekge MM, Lawal IO, Bal C, Bruchertseifer F, Ballal S, Cardaci G, Davis C, Eiber M, Hekimsoy T, Knoesen O, Kratochwil C, Lenzo NP, Mahapane J, Maserumule LC, Mdlophane AH, Mokoala KMG, Ndlovu H, Pant V, Rathke H, Reed J, Sen IB, Singh A, Sood A, Tauber R, Thakral P, Yadav MP, Morgenstern A. Actinium-225-PSMA radioligand therapy of metastatic castration-resistant prostate cancer (WARMTH Act): a multicentre, retrospective study. Lancet Oncol. 2024 Feb;25(2):175-183.",
        "Seaman S, Zhu Z, Saha S, Zhang XM, Yang MY, Hilton MB, Morris K, Szot C, Morris H, Swing DA, Tessarollo L, Smith SW, Degrado S, Borkin D, Jain N, Scheiermann J, Feng Y, Wang Y, Li J, Welsch D, DeCrescenzo G, Chaudhary A, Zudaire E, Klarmann KD, Keller JR, Dimitrov DS,"
      ],
      "chips": [
        "P02",
        "p112/118",
        "B7-H3 Ac-225"
      ],
      "visual": "ac225",
      "image": "assets/protocol/aky/a112.jpg",
      "cap": "Protocol page 112 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 113 of 118 · Protocol body · page 113",
      "audio": [
        "St Croix B. Eradication of Tumors through Simultaneous Ablation of C D 276/B 7-H 3-Positive Tumor Cells and Tumor Vasculature. Cancer Cell. 2017 Apr 10;31(4):501-515.e8. SEER Cancer Stat Facts: Prostate Cancer. National Cancer Institute. Bethesda, MD, https://seer.cancer.gov/statfacts/html/prost.html SEER Cancer Stat Facts. SEER*Explorer: An interactive website for SEER cancer statistics [Internet]. Surveillance Research Program, National Cancer Institute.",
        "Accessed at https://seer.cancer.gov/explorer/ on June 13, 2025. Sgouros G, Bodei L, McDevitt MR, Nedrow JR. Radiopharmaceutical therapy in cancer: clinical advances and challenges. Nat Rev Drug Discov. 2020;19(9):589-608. Shah MA, Sun J-M, Shen L, Kato K, Enzinger PC, Adenis A, et al. First-line pembrolizumab (pembro) plus chemotherapy (chemo) for advanced esophageal cancer: 5-year outcomes from the phase 3 KEYNOTE-590 study. JCO. 2024;42:250-250.",
        "Shore ND, Laliberté F, Ionescu-Ittu R, Yang L, Mahendran M, Lejeune D, Yu LH, Burgents J, Duh MS, Ghate SR. Real-World Treatment Patterns and Overall Survival of Patients with Metastatic Castration-Resistant Prostate Cancer in the US Prior to PARP Inhibitors. Adv Ther. 2021 Aug;38(8):4520-4540. Suenderhauf C, Parrott N. A physiologically based pharmacokinetic model of the minipig: data compilation and model implementation. Pharm Res. 2013 Jan;30(1):1-15.",
        "Sung H, Ferlay J, Siegel RL, Laversanne M, Soerjomataram I, Jemal A, Bray F. Global Cancer Statistics 2020: GLOBOCAN Estimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries. CA Cancer J Clin. 2021 May;71(3):209-249. To J, Magid R, Cleland J, Panier V, Wu J. The landscape for radioligand therapies in oncology. Nat Rev Drug Discov. 2025 Jun 3. van der Pol J, Vöö S, Bucerius J, Mottaghy FM.",
        "Consequences of radiopharmaceutical extravasation and therapeutic interventions: a systematic review. Eur J Nucl Med Mol Imaging. 2017 Jul;44(7):1234-1243. Wahl RL, Sgouros G, Iravani A, Jacene H, Pryma D, Saboury B, Capala J, Graves SA. NormalTissue Tolerance to Radiopharmaceutical Therapies, the Knowns and the Unknowns. J Nucl Med. 2021 Dec;62(Suppl 3):23S-35S. Xu H, Cheung IY, Guo HF, Cheung NK.",
        "MicroRNA miR-29 modulates expression of immunoinhibitory molecule B 7-H 3: potential implications for immune based therapy of human solid tumors. Cancer Res. 2009 Aug 1;69(15):6275-81. Yuan Y, Hess KR, Hilsenbeck SG, Gilbert, MR. Bayesian Optimal Interval Design: A Simple and Well-Performing Design for Phase I Oncology Trials. Clin Cancer Res, 2016; 22(17): 4291-4301. Yim J, Koh J, Kim S, Song SG, Ahn HK, Kim YA, Jeon YK, Chung DH.",
        "Effects of B 7-H 3 expression on tumour-infiltrating immune cells and clinicopathological characteristics in nonsmall-cell lung cancer. Eur J Cancer. 2020 Jul;133:74-85. Zappa C, Mousa SA. Non-small cell lung cancer: current treatment and future advances. Transl Lung Cancer Res. 2016 Jun;5(3):288-300."
      ],
      "chips": [
        "P02",
        "p113/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a113.jpg",
      "cap": "Protocol page 113 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 114 of 118 · Zhai X, Zhang Z, Chen Y, Wu Y, Zhen C, Liu Y, Lin Y, Chen C",
      "audio": [
        "Zhai X, Zhang Z, Chen Y, Wu Y, Zhen C, Liu Y, Lin Y, Chen C. Current and future therapies for small cell lung carcinoma. J Hematol Oncol. 2025 Apr 1;18(1):37. Zhao Y, Yuan Y, Korn EL, Freidlin B. Backfilling Patients in Phase I Dose-Escalation Trials Using Bayesian Optimal Interval Design (B O I N). Clin Cancer Res. 2024 Feb 16;30(4):673-679. Zhou WT, Jin WL. B 7-H 3/C D 276: An Emerging Cancer Immunotherapy. Front Immunol. 2021 Jul 19;12:701006.",
        "Zhou J, Xu Y, Liu J, Feng L, Yu J, Chen D. Global burden of lung cancer in 2022 and projections to 2050: Incidence and mortality estimates from GLOBOCAN. Cancer Epidemiol. 2024 Dec;93:102693. Zou W, Chen L. Inhibitory B7-family molecules in the tumour microenvironment. Nat Rev Immunol. 2008 Jun;8(6):467-77."
      ],
      "chips": [
        "P02",
        "p114/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a114.jpg",
      "cap": "Protocol page 114 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 115 of 118 · Certificate Of Completion Envelope Id: 2F0231F9-39CE-827B-80B6-79C16CCB1AD9 Status:…",
      "audio": [
        "Certificate Of Completion Envelope Id: 2F0231F9-39CE-827B-80B6-79C16CCB1AD9 Status: Completed Subject: Complete with Docusign: Protocol A K Y-2519-02 v1.0 08Apr2026_Final.docx Source Envelope: Document Pages: 114 Signatures: 1 Envelope Originator: Certificate Pages: 4 Initials: 0 Nate Demars AutoNav: Enabled EnvelopeId Stamping: Disabled Time Zone: (UTC-08:00) Pacific Time (US & Canada) 450 Kendall St Cambridge, MA 02142 ndemars@aktisoncology.com IP Address: 72.74.212.238",
        "Record Tracking Status: Original 09-Apr-2026 | 11:00 Holder: Nate Demars ndemars@aktisoncology.com Location: DocuSign Signer Events Signature Timestamp Tiffany Wang twang@aktisoncology.com Executive Medical Director Security Level: Email, Account Authentication (Required), Logged in Signature Adoption: Pre-selected Style Signature ID: 00BDB65F-9520-4EE5-912B-86CDAD41281C Using IP Address: 146.115.145.85 With Signing Authentication via Docusign password With Signing Reasons",
        "(on each tab): I approve this document Sent: 09-Apr-2026 | 11:03 Viewed: 09-Apr-2026 | 11:04 Signed: 09-Apr-2026 | 11:04 Electronic Record and Signature Disclosure: Accepted: 23-Jan-2026 | 10:19 ID: 8a963af0-b814-4d3c-b28b-183fdec5ea0e In Person Signer Events Signature Timestamp Editor Delivery Events Status Timestamp Agent Delivery Events Status Timestamp Intermediary Delivery Events Status Timestamp Certified Delivery Events Status Timestamp Carbon Copy Events Status",
        "Timestamp Witness Events Signature Timestamp Notary Events Signature Timestamp Envelope Summary Events Status Timestamps Envelope Sent Hashed/Encrypted 09-Apr-2026 | 11:03 Certified Delivered Security Checked 09-Apr-2026 | 11:04 Signing Complete Security Checked 09-Apr-2026 | 11:04 Completed Security Checked 09-Apr-2026 | 11:04 Payment Events Status Timestamps"
      ],
      "chips": [
        "P02",
        "p115/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a115.jpg",
      "cap": "Protocol page 115 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 116 of 118 · Electronic Record and Signature Disclosure",
      "audio": [
        "Electronic Record and Signature Disclosure"
      ],
      "chips": [
        "P02",
        "p116/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a116.jpg",
      "cap": "Protocol page 116 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 117 of 118 · ELECTRONIC RECORD AND SIGNATURE DISCLOSURE From time to time, Aktis Oncology - Part…",
      "audio": [
        "ELECTRONIC RECORD AND SIGNATURE DISCLOSURE From time to time, Aktis Oncology - Part 11 (we, us or Company) may be required by law to provide to you certain written notices or disclosures. Described below are the terms and conditions for providing to you such notices and disclosures electronically through the DocuSign system.",
        "Please read the information below carefully and thoroughly, and if you can access this information electronically to your satisfaction and agree to this Electronic Record and Signature Disclosure (ERSD), please confirm your agreement by selecting the check-box next to ‘I agree to use electronic records and signatures’ before clicking ‘CONTINUE’ within the DocuSign system.",
        "Getting paper copies At any time, you may request from us a paper copy of any record provided or made available electronically to you by us. You will have the ability to download and print documents we send to you through the DocuSign system during and immediately after the signing session and, if you elect to create a DocuSign account, you may access the documents for a limited period of time (usually 30 days) after such documents are first sent to you.",
        "After such time, if you wish for us to send you paper copies of any such documents from our office to you, you will be charged a $0.00 per-page fee. You may request delivery of such paper copies from us by following the procedure described below.",
        "Withdrawing your consent If you decide to receive notices and disclosures from us electronically, you may at any time change your mind and tell us that thereafter you want to receive required notices and disclosures only in paper format. How you must inform us of your decision to receive future notices and disclosure in paper format and withdraw your consent to receive notices and disclosures electronically is described below.",
        "Consequences of changing your mind If you elect to receive required notices and disclosures only in paper format, it will slow the speed at which we can complete certain steps in transactions with you and delivering services to you because we will need first to send the required notices or disclosures to you in paper format, and then wait until we receive back from you your acknowledgment of your receipt of such paper notices or disclosures.",
        "Further, you will no longer be able to use the DocuSign system to receive required notices and consents electronically from us or to sign electronically documents from us.",
        "All notices and disclosures will be sent to you electronically Unless you tell us otherwise in accordance with the procedures described herein, we will provide electronically to you through the DocuSign system all required notices, disclosures, authorizations, acknowledgements, and other documents that are required to be provided or made available to you during the course of our relationship with you.",
        "To reduce the chance of you inadvertently not receiving any notice or disclosure, we prefer to provide all of the required notices and disclosures to you by the same method and to the same address that you have given us. Thus, you can receive all the disclosures and notices electronically or in paper format through the paper mail delivery system. If you do not agree with this process, please let us know as described below.",
        "Please also see the paragraph immediately above that describes the consequences of your electing not to receive delivery of the notices and disclosures electronically from us.",
        "How to contact Aktis Oncology - Part 11: You may contact us to let us know of your changes as to how we may contact you electronically, to request paper copies of certain information from us, and to withdraw your prior consent to receive notices and disclosures electronically as follows: To contact us by email send messages to: ndemars@aktisoncology.com To advise Aktis Oncology - Part 11 of your new email address To let us know of a change in your email address where we",
        "should send notices and disclosures electronically to you, you must send an email message to us at ndemars@aktisoncology.com and in the body of such request you must state: your \u0019\u0015\u0013 \u001b\u001a\u0018\u0013\u0001\u000e\u0015\u0013\u001b \u0014\u0001\u0012\u001a\u0014\u0001\u000f\u0018\u0017\u001a\u0012 \u0015\u0001 \u0018 \u0013\u0019\u001b \u0015\u0001\u0013 \u0015\u0012 \u0015\u0014\u0001\u001b\u001a \u0001\u0004\u0006\u0002 \u0015\u0013\u0002\u0005\u0003\u0005\u0007\u0001!\u0001\u0004\u0005 \b \u0012 \u0018\u0015 \u0001\u0012\u0017 \u0015\u0015\u0014\u0001 \u001b \u0001\u0010\u0018\u0016\u0016\u0012\u001a \u0001\u0011\u0012\u001a\u0017"
      ],
      "chips": [
        "P02",
        "p117/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a117.jpg",
      "cap": "Protocol page 117 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    },
    {
      "title": "Page 118 of 118 · previous email address, your new email address",
      "audio": [
        "previous email address, your new email address. We do not require any other information from you to change your email address If you created a DocuSign account, you may update it with your new email address through your account preferences.",
        "To request paper copies from Aktis Oncology - Part 11 To request delivery from us of paper copies of the notices and disclosures previously provided by us to you electronically, you must send us an email to ndemars@aktisoncology.com and in the body of such request you must state your email address, full name, mailing address, and telephone number. We will bill you for any fees at that time, if any.",
        "To withdraw your consent with Aktis Oncology - Part 11 To inform us that you no longer wish to receive future notices and disclosures in electronic format you may: i. decline to sign a document from within your signing session, and on the subsequent page, select the check-box indicating you wish to withdraw your consent, or you may; ii.",
        "send us an email to ndemars@aktisoncology.com and in the body of such request you must state your email, full name, mailing address, and telephone number. We do not need any other information from you to withdraw consent. The consequences of your withdrawing consent for online documents will be that transactions may take a longer time to process. Required hardware and software The minimum system requirements for using the DocuSign system may change over time.",
        "The current system requirements are found here: https://support.docusign.com/guides/signer-guide-signing-system-requirements.",
        "Acknowledging your access and consent to receive and sign documents electronically To confirm to us that you can access this information electronically, which will be similar to other electronic notices and disclosures that we will provide to you, please confirm that you have read this ERSD, and (i) that you are able to print on paper or electronically save this ERSD for your future reference and access; or (ii) that you are able to email this ERSD to an email address where",
        "you will be able to print on paper or save it for your future reference and access. Further, if you consent to receiving notices and disclosures exclusively in electronic format as described herein, then select the checkbox next to ‘I agree to use electronic records and signatures’ before clicking ‘CONTINUE’ within the DocuSign system.",
        "By selecting the check-box next to ‘I agree to use electronic records and signatures’, you confirm that: You can access and read this Electronic Record and Signature Disclosure; and You can print on paper this Electronic Record and Signature Disclosure, or save or send this Electronic Record and Disclosure to a location where you can print it, for future reference and access; and Until or unless you notify Aktis Oncology - Part 11 as described above, you consent to receive",
        "exclusively through electronic means all notices, disclosures, authorizations, acknowledgements, and other documents that are required to be provided or made available to you by Aktis Oncology - Part 11 during the course of your relationship with Aktis Oncology - Part 11."
      ],
      "chips": [
        "P02",
        "p118/118",
        "B7-H3 Ac-225"
      ],
      "visual": "aky",
      "image": "assets/protocol/aky/a118.jpg",
      "cap": "Protocol page 118 of 118 — AKY-2519-02 v1.0",
      "pearls": [
        "This lesson is the source protocol text, spoken in full.",
        "Match the page image on the left with the highlighted script."
      ]
    }
  ],
  "quiz": [
    {
      "q": "What does AKY-2519 target, and what kind of molecule is it?",
      "choices": [
        "PSMA on a small-molecule urea ligand, same as Pluvicto",
        "B7-H3 (CD276) on a synthetic 49-amino-acid miniprotein with a DOTA-PEG4 spacer",
        "DLL3 on a 100 kDa spFv-Fc antibody",
        "SSTR2 with DOTATATE"
      ],
      "a": 1,
      "why": "§4.1.2 / §8.1. Not an antibody and not PSMA. Same scaffold is labeled with Cu-64 or Ac-225."
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
      "why": "Synopsis / Table 20. Cu-64 T½ 12.7 h. Named-patient Ga-68 / Lu-177 experience is background, not this trial's IMP pair."
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
      "why": "§1.1 / §4.3.3 / Table 4. Target DLT rate 25%. Escalate if observed DLT ≤0.197; de-escalate if >0.298."
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
      "why": "§5.1 / inclusion 3, 11–13. NSCLC must have progressed on PD-(L)1 and chemotherapy (concurrent or separate)."
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
      "why": "Table 1. Also ≥G3 non-heme (with listed exceptions), Hy's law, >14-day delay or permanent stop, any death not clearly PD."
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
      "why": "Synopsis duration of treatment. Intra-participant dose escalation is not permitted. Delay ≤2 weeks; longer needs Medical Monitor."
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
      "why": "Exclusion 4–5. Also investigational agent or cytotoxic / targeted / IO / EBRT within 28 days or 5 half-lives (palliative RT ≥2 weeks)."
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
      "why": "Inclusion 5. Marrow: Hb ≥9, ANC ≥1.5, platelets ≥100, no transfusion or G-CSF in 7 days."
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
      "why": "Synopsis / §1.1. Part 1 RED patients who fit a cohort count toward Part 2 n. Futility: 0–1 responses in first 16 (Cohort 1) or 20 (Cohort 2)."
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
      "why": "Table 20. Everyone else only needs the 90–180 min Cu-64 PET for eligibility. ≤4 of the 10 may share one tumor type."
    }
  ]
};


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
