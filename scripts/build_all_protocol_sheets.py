#!/usr/bin/env python3
"""Plain-language study sheets for every Board Studio protocol. Does not edit protocol text."""
from pathlib import Path
from fpdf import FPDF

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONTB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
OUTDIR = Path("/workspace/public/studio")
ART = Path("/workspace/artifacts")
NAVY = (18, 42, 66)
TEAL = (14, 116, 128)
GOLD = (146, 98, 22)
INK = (22, 28, 36)
MUTED = (70, 82, 94)
RULE = (210, 216, 222)
PALE = (244, 248, 250)
PALE2 = (232, 244, 246)
WARN = (255, 247, 230)


class Sheet(FPDF):
    def __init__(self, short, banner):
        super().__init__(format="letter", unit="mm")
        self.short = short
        self.banner = banner
        self.set_auto_page_break(auto=True, margin=18)
        self.add_font("Body", "", FONT)
        self.add_font("Body", "B", FONTB)
        self.set_title(short + " study sheet")
        self.set_author("NucMed Board Studio teaching sheet")

    def header(self):
        if self.page_no() == 1:
            return
        self.set_fill_color(*NAVY)
        self.rect(0, 0, 216, 10, "F")
        self.set_font("Body", "B", 8)
        self.set_text_color(255, 255, 255)
        self.set_xy(14, 3)
        self.cell(140, 5, self.banner)
        self.cell(0, 5, "Teaching sheet — not the signed site protocol", align="R")
        self.set_text_color(*INK)
        self.set_y(14)

    def footer(self):
        self.set_y(-14)
        self.set_draw_color(*RULE)
        self.line(14, self.get_y(), 202, self.get_y())
        self.set_font("Body", "", 8)
        self.set_text_color(*MUTED)
        self.set_y(-12)
        self.cell(90, 6, "Educational summary · " + self.short)
        self.cell(0, 6, f"Page {self.page_no()}/{{nb}}", align="R")
        self.set_text_color(*INK)

    def h1(self, t):
        self.set_font("Body", "B", 15)
        self.set_text_color(*NAVY)
        self.ln(1)
        self.set_x(14)
        self.multi_cell(0, 7.5, t)
        self.set_draw_color(*TEAL)
        self.set_line_width(0.7)
        y = self.get_y()
        self.line(14, y, 86, y)
        self.set_line_width(0.2)
        self.ln(3)
        self.set_text_color(*INK)

    def h2(self, t):
        self.set_x(14)
        self.set_font("Body", "B", 12)
        self.set_text_color(*TEAL)
        self.ln(1)
        self.multi_cell(0, 6.2, t)
        self.ln(1)
        self.set_text_color(*INK)

    def p(self, t):
        self.set_x(14)
        self.set_font("Body", "", 11)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.7, t)
        self.ln(1.6)

    def bullet(self, t):
        self.set_x(18)
        self.set_font("Body", "", 11)
        self.cell(5, 5.7, "•")
        self.multi_cell(0, 5.7, t)
        self.ln(0.4)

    def box(self, title, body, fill=PALE2, bar=TEAL):
        w = 178
        self.set_font("Body", "", 10.5)
        lines, cur = [], ""
        for w0 in body.split():
            trial = (cur + " " + w0).strip()
            if self.get_string_width(trial) > w:
                if cur:
                    lines.append(cur)
                cur = w0
            else:
                cur = trial
        if cur:
            lines.append(cur)
        h = 14 + len(lines) * 5.3
        if self.get_y() + h > 268:
            self.add_page()
        start = self.get_y()
        self.set_fill_color(*fill)
        self.set_draw_color(*bar)
        self.rect(14, start, 188, h, "FD")
        self.set_fill_color(*bar)
        self.rect(14, start, 3.2, h, "F")
        self.set_xy(20, start + 3)
        self.set_font("Body", "B", 10)
        self.set_text_color(*bar)
        self.cell(0, 6, title)
        self.set_text_color(*INK)
        self.set_font("Body", "", 10.5)
        y = start + 10
        for ln in lines:
            self.set_xy(20, y)
            self.cell(0, 5.3, ln)
            y += 5.3
        self.set_y(start + h + 3)

    def table(self, headers, rows, colw=None):
        n = len(headers)
        w = colw or [188 / n] * n
        if self.get_y() > 248:
            self.add_page()
        x0, y = 14, self.get_y()
        self.set_fill_color(*NAVY)
        self.set_text_color(255, 255, 255)
        self.set_font("Body", "B", 8.5)
        for i, hd in enumerate(headers):
            self.rect(x0 + sum(w[:i]), y, w[i], 8, "F")
            self.set_xy(x0 + sum(w[:i]) + 1.4, y + 1.6)
            self.cell(w[i] - 2.8, 5, hd)
        y += 8
        self.set_text_color(*INK)
        self.set_font("Body", "", 8.8)
        for ri, row in enumerate(rows):
            cell_lines = []
            max_n = 1
            for i, cell in enumerate(row):
                lines, cur = [], ""
                for w0 in str(cell).split():
                    trial = (cur + " " + w0).strip()
                    if self.get_string_width(trial) > w[i] - 4:
                        if cur:
                            lines.append(cur)
                        cur = w0
                    else:
                        cur = trial
                if cur:
                    lines.append(cur)
                cell_lines.append(lines or [""])
                max_n = max(max_n, len(cell_lines[-1]))
            rh = max_n * 4.5 + 3.5
            if y + rh > 272:
                self.add_page()
                y = self.get_y()
            bg = (255, 255, 255) if ri % 2 == 0 else PALE
            self.set_fill_color(*bg)
            self.set_draw_color(*RULE)
            for i, lines in enumerate(cell_lines):
                cx = x0 + sum(w[:i])
                self.rect(cx, y, w[i], rh, "FD")
                self.set_xy(cx + 1.4, y + 1.6)
                self.multi_cell(w[i] - 2.8, 4.5, "\n".join(lines))
            y += rh
        self.set_y(y + 3.5)
        self.set_text_color(*INK)

    def qa(self, items):
        for q, a in items:
            if self.get_y() > 248:
                self.add_page()
            self.set_x(14)
            self.set_font("Body", "B", 11)
            self.set_text_color(*NAVY)
            self.multi_cell(0, 5.5, "Q. " + q)
            self.set_x(14)
            self.set_font("Body", "", 11)
            self.set_text_color(*INK)
            self.multi_cell(0, 5.5, "A. " + a)
            self.ln(1.5)


def cover(pdf, meta):
    pdf.add_page()
    pdf.set_fill_color(*NAVY)
    pdf.rect(0, 0, 216, 58, "F")
    pdf.set_fill_color(*TEAL)
    pdf.rect(0, 58, 216, 3.5, "F")
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("Body", "", 10)
    pdf.set_xy(16, 12)
    pdf.cell(0, 5, "NucMed Board Studio  ·  protocol study sheet")
    pdf.set_font("Body", "B", 22)
    pdf.set_xy(16, 22)
    pdf.cell(0, 10, meta["short"])
    pdf.set_font("Body", "B", 12)
    pdf.set_xy(16, 34)
    pdf.cell(0, 6, meta["full"])
    pdf.set_font("Body", "", 10)
    pdf.set_xy(16, 43)
    pdf.cell(0, 6, meta["version"])
    pdf.set_text_color(*INK)
    pdf.set_y(70)
    cover_img = Path(meta["cover"]) if meta.get("cover") else None
    if cover_img and cover_img.exists():
        pdf.image(str(cover_img), x=14, y=68, w=68)
        pdf.set_xy(90, 70)
        pdf.set_font("Body", "B", 12)
        pdf.multi_cell(108, 6, "What this study is, in one breath")
        pdf.set_x(90)
        pdf.set_font("Body", "", 11)
        pdf.multi_cell(108, 5.6, meta["one"])
        pdf.ln(2)
        pdf.set_x(90)
        pdf.set_font("Body", "B", 11)
        pdf.multi_cell(108, 5.6, meta["notthis"])
        pdf.set_y(max(pdf.get_y(), 158))
    pdf.box(
        "If the protocol feels like a wall of words",
        "A protocol is a recipe: who can join, what is injected, how much, when you scan or treat, and how you decide if a picture or outcome was right. This sheet is the same idea in normal English. It does not replace the signed site copy.",
    )


def write(meta, body_fn):
    pdf = Sheet(meta["short"], meta["banner"])
    pdf.alias_nb_pages()
    cover(pdf, meta)
    body_fn(pdf)
    pdf.add_page()
    pdf.h1("What to know cold")
    pdf.qa(meta["qa"])
    pdf.box(
        "How to use this with Board Studio",
        "Open the matching protocol module and press play. The left pane is the signed page. Use this PDF when legalese stalls you. If anything conflicts, the signed protocol wins.",
    )
    pdf.ln(2)
    pdf.set_font("Body", "", 9)
    pdf.set_text_color(*MUTED)
    pdf.set_x(14)
    pdf.multi_cell(
        0,
        4.7,
        "Disclaimer. Educational summary for board-style study. Not medical advice, not a recruitment brochure, not a substitute for the signed protocol, and not affiliated with the sponsor, ABR, ABNM, ACGME, SNMMI, NRC, or FDA. Confirm numbers against the current site copy before any clinical use.",
    )
    out = OUTDIR / meta["file"]
    ART.mkdir(parents=True, exist_ok=True)
    pdf.output(str(out))
    pdf.output(str(ART / meta["file"]))
    print("wrote", out, out.stat().st_size)
    return out


def gpstar(pdf):
    pdf.h1("1. The tracer")
    pdf.p("Gallium-68 GP-01 is a small-molecule FAP inhibitor for PET/CT. FAP sits on cancer-associated fibroblasts (stroma), not usually on the epithelial cancer cell.")
    pdf.bullet("Ga-68 is a positron emitter (T½ 68 min → 511 keV pair). Not a gamma emitter.")
    pdf.bullet("Dose: 185 MBq ± 10% (5 mCi ± 10%), mass ≤ 50 µg, one IV bolus.")
    pdf.bullet("Strong P-gp / BCRP inhibitors are prohibited (1 week or 5 half-lives).")
    pdf.h1("2. Two parallel cohorts (~10 each)")
    pdf.table(
        ["", "Cohort 1", "Cohort 2"],
        [
            ["Who", "Solid tumors with suspected peritoneal mets (gastric, CRC, ovarian/FT and others). Path-proven primary.", "NSCLC with suspected nodal mets, heading to dissection or biopsy."],
            ["Truth", "Surgery/laparoscopy + path + FAP IHC", "Node path + FAP IHC"],
        ],
        colw=[28, 80, 80],
    )
    pdf.p("FDG PET/CT within 60 days before GP-01. Do not change the operation off this scan. First 6 people get multi-timepoint PET, PK, biodistribution, and dosimetry; everyone else gets one PET (~30–60 min, may move).")
    pdf.h1("3. How a scan is scored")
    pdf.p("Pathology of the piece they actually took is truth. Hot PET + negative path on that resected region = false positive (v1.2 fixed this). Sensitivity/specificity/PPV/NPV/accuracy are calculated separately per cohort. Compare FAP vs FDG on SUVmax, SUVmean, TBR.")
    pdf.box("Primary endpoints", "Safety (TEAEs, labs, ECG; CTCAE v6.0) and preliminary diagnostic performance vs pathology, plus SUV comparison with FDG.", fill=WARN, bar=GOLD)


def clarify(pdf):
    pdf.h1("1. The tracer")
    pdf.p("Copper-64 SAR-bisPSMA (CLARIFY / CLP04) is a diagnostic PSMA PET agent. Two PSMA-binding arms plus a sarcophagine cage that holds copper-64 so you can image the next day.")
    pdf.bullet("Not FDG. Not a therapy. Not an antibody.")
    pdf.bullet("Cu-64 T½ 12.7 h — long enough for a delayed scan.")
    pdf.bullet("Dose: 200 MBq IV bolus ± 10% of prescribed, once on Day 1.")
    pdf.bullet("No fasting. Hydrate and void; bladder is a critical organ.")
    pdf.h1("2. Who and why")
    pdf.p("Untreated high-risk prostate cancer, planned for radical prostatectomy plus pelvic lymph-node dissection. Screen ≤ 28 days. They already have SOC MRI/CT / approved PSMA PET; the Cu-64 scans are extra.")
    pdf.bullet("n = 383. Three central PET readers. Pathologist is blinded to the investigational PET.")
    pdf.bullet("Standard of truth = pelvic-node histopathology, not the SOC PSMA scan.")
    pdf.h1("3. Two PET time points")
    pdf.table(
        ["When", "Window", "Why"],
        [
            ["Day 1 PET", "1–4 hours after injection, mid-thigh → vertex", "Early map; blood pool still visible"],
            ["Day 2 PET", "24 ± 6 hours, same coverage", "Clearance → higher tumor-to-background; hunt small nodes"],
            ["Day 7 ± 4 d", "Safety phone call", "Then the planned RP + PLND"],
        ],
        colw=[40, 78, 70],
    )
    pdf.p("Co-primary endpoints (sensitivity and specificity vs pathology) are reported independently at each time point. Void immediately before each acquisition.")
    pdf.h1("4. Scoring")
    pdf.p("PET+ means focal uptake greater than background after excluding physiologic and known benign uptake. TP/FP/FN/TN vs the node the pathologist actually scored. Sensitivity = TP/(TP+FN). Specificity = TN/(TN+FP).")


def bet121(pdf):
    pdf.h1("1. The drug")
    pdf.p("BET-121 is ¹⁷⁷Lu-rhPSMA-10.1 (Blue Earth Therapeutics, NCT05413850): a radiohybrid small-molecule PSMA ligand for radioligand therapy in PSMA-positive mCRPC. Same targeting idea as Pluvicto, different ligand pharmacokinetics (faster kidney washout in mice than 7.3C or PSMA-I&T).")
    pdf.bullet("Lu-177: T½ 6.7 days, β− therapy. Activity tolerance ±10% of prescribed.")
    pdf.bullet("Extravasation = SAE. Large-bore IV, saline flush.")
    pdf.bullet("Kidney is the dose-limiting organ. SPECT/CT uses the therapeutic emission — no extra tracer.")
    pdf.h1("2. Design")
    pdf.table(
        ["Part", "Who", "Dose idea"],
        [
            ["Phase 1 (done)", "Post-taxane mCRPC · n ≈ 12 · BOIN", "5.55 then 7.40 GBq q6w, max 3 cycles"],
            ["Phase 2A", "Chemo-naïve for mCRPC · n ≈ 30", "2 × 10.00 GBq then ≤5 × 7.40 GBq, all q6w"],
            ["Phase 2B", "Same pool · n ≈ 30", "≤8 × 7.40 GBq; first 3 at q3w then q6w"],
            ["Phase 2C optional", "TSC may open · n ≈ 10", "2 × 14.80 GBq then ≤4 × 7.40 q6w"],
        ],
        colw=[42, 70, 76],
    )
    pdf.p("Phase 2 is open-label, ~70 people, ~25 centres. Primary: PSA50 (≥50% PSA drop from baseline to end of treatment). Futility if estimated PSA50 ≤ 20% in a cohort.")
    pdf.h1("3. Organ limits and SPECT clock")
    pdf.bullet("Kidney 23 Gy (Phase 2 absolute 35 Gy, re-consent if exceeding 23). Marrow 2 Gy (absolute 2.5). Salivary 24 Gy tracked. eGFR ≥ 60 (CKD-EPI 2009).")
    pdf.bullet("Phase 1 SPECT every cycle at 3, 24, 48, 168 h + PK blood.")
    pdf.bullet("Phase 2: Cycle 1 at 3/24/48/168 h; later cycles a single 48 h scan (2B first two keep 168 h). Results back before the next cycle so caps can stop dosing.")
    pdf.box("Do not mix this with diagnostic PSMA PET", "POSLUMA (¹⁸F-rhPSMA) 296 MBq is mentioned for Phase 1 imaging only. The therapy molecule is ¹⁷⁷Lu-rhPSMA-10.1.", fill=WARN, bar=GOLD)


def dwj(pdf):
    pdf.h1("1. Theranostic pair")
    pdf.p("Novartis CPBQ663A12101 is first-in-human Phase I of DWJ155, a HER2-targeting peptide. Same ligand, two radionuclides: ⁶⁸Ga for PET (see the target) and ²²⁵Ac for alpha therapy (treat the target). Not trastuzumab, not T-DXd, not FDG.")
    pdf.table(
        ["IMP", "Role", "Starting numbers"],
        [
            ["⁶⁸Ga-DWJ155", "Imaging · PET/CT or PET/MRI", "~250 MBq (window 200–275). Screening + end of treatment."],
            ["²²⁵Ac-DWJ155", "Therapy · α emitter", "Start 2 MBq (54 µCi) Q6W, up to 4 cycles. Provisional 2 / 4 / 6 / 8 MBq."],
        ],
        colw=[42, 48, 98],
    )
    pdf.p("Positive imaging PET: at least one measurable lesion with DWJ155 uptake. That scan gates whether you get actinium. Mass dose ~40 µg at start, up to ~400 µg if activity climbs.")
    pdf.h1("2. Who")
    pdf.p("Solid tumors across the HER2 spectrum (IHC 3+ down to IHC 0 — the PET is the in-vivo IHC): breast, NSCLC ± AGA, gastroesophageal, bladder. Escalation ~21–48 people; expansion ~135; 36-month follow-up.")
    pdf.h1("3. Escalation rules")
    pdf.bullet("BHLRM (Bayesian hierarchical logistic regression) plus EWOC: do not escalate into an excessive-toxicity posterior.")
    pdf.bullet("Q6W opens first; Q8W and Q4W can follow under the same model.")
    pdf.bullet("DLT window = first cycle (4, 6, or 8 weeks matching the schedule).")
    pdf.bullet("Recommended dose = activity per cycle + number of cycles + schedule, not a single number.")
    pdf.box("Alpha vs PET", "Do not swap the names. Gallium maps. Actinium treats. Organs at risk are radiation to normal tissue, not cold-peptide pharmacology.", fill=WARN, bar=GOLD)


def vectra(pdf):
    pdf.h1("1. What VECTRA-01 is")
    pdf.p("AstraZeneca D9735C00001: open-label Phase III of ²²⁵Ac zadavotide guraxetan (AZD2265 / FPI-2265, PSMA-I&T alpha) versus investigator-choice standard of care in PSMA-positive mCRPC after ARPI, a taxane, and one PSMA beta radioligand. Coordinating investigator Morris. ~670 randomised 1:1, ~1,120 screened. No crossover.")
    pdf.table(
        ["Arm", "What they get"],
        [
            ["A", "12 MBq IV ²²⁵Ac-PSMA-I&T every 6 weeks, up to 6 cycles (≤ 36 weeks). Fixed activity, not weight-based."],
            ["B SoC", "Investigator choice: cabazitaxel 20 mg/m² Q3W (+ pred 10 mg), or ARPI (enza 160 / abi 1 g), or radium-223 55 kBq/kg Q4W × 6."],
        ],
        colw=[32, 156],
    )
    pdf.p("Stratify on intended SoC, number of taxane courses (1 vs >1), and timing of beta-PSMA progression. IDMC watches safety, efficacy, futility. Dual primary: rPFS and OS.")
    pdf.h1("2. PET gate (not the IMP)")
    pdf.bullet("Central BICR must call the patient PSMA-positive before randomisation.")
    pdf.bullet("⁶⁸Ga-PSMA-11 111–259 MBq (preferred; EU) or ¹⁸F-DCFPyL 296–370 MBq (not in EU). Same tracer at screen and follow-up. Window 28 days.")
    pdf.bullet("Those diagnostic tracers are auxiliary products. The IMP is 12 MBq actinium.")
    pdf.bullet("Prior PSMA beta RC allowed if ≥ 3 months from last dose. No prior alpha-targeted RC.")
    pdf.h1("3. Renal and salivary gates (v3.0)")
    pdf.bullet("eGFR ≥ 60 mL/min (tightened from 50 after EMA). AKI, CKD, uncontrolled DM excluded.")
    pdf.bullet("Xerostomia Grade 1 allowed; ≥ Grade 2 excluded (salivary is an OAR for PSMA alpha).")
    pdf.bullet("Marrow: Hb ≥ 9, platelets ≥ 100, ANC ≥ 1.5, ECOG 0–2.")
    pdf.box("Not Pluvicto, not radium-223", "Same PSMA motif as ¹⁷⁷Lu-PSMA-I&T, but alpha instead of beta. Kidney and salivary glands take a harder hit than Lu-177.", fill=WARN, bar=GOLD)


def sparrow(pdf):
    pdf.h1("1. Not a PSMA agent")
    pdf.p("Lantheus SPARROW / RM2-3301 is ⁶⁸Ga-LNTH-2401 (DOTA-RM2), a GRPR / bombesin-family PET tracer for prostate cancer. Complementary to PSMA, not a substitute. IND 177584. Precursor ≤ 40 µg. Sterile ready-to-use, pH 4.0–6.5.")
    pdf.bullet("Phase 2 start: 5 ± 1 mCi (148–222 MBq). Labelled range 3–6 mCi (111–222 MBq).")
    pdf.bullet("Slow IV bolus + saline flush. Single dose. No planned dose modifications.")
    pdf.bullet("Do not call this PSMA-11, Pylarify, or Pluvicto.")
    pdf.h1("2. Two sequential parts, no randomisation")
    pdf.table(
        ["Part", "Who / n", "What it answers"],
        [
            ["Phase 2 dose opt", "≤12 imaging-evaluable GRPR+ (ND or BCR)", "Pick activity + time window. Serial PET 15/30/60/120 min. IQS ≥ 10.5."],
            ["Phase 3 pivotal", "~396 at ≤30 US sites; total study ~408", "High-risk newly diagnosed, planning RP+PLND. Histopathology is SOT."],
        ],
        colw=[42, 70, 76],
    )
    pdf.p("Formulation 1 in Phase 2, Formulation 2 (commercial-intent) in Phase 3. iDMC reviews the chosen activity/window before Phase 3. Phase 2 dosimetry does not feed the Phase 3 primary analysis.")
    pdf.h1("3. Phase 3 primary")
    pdf.p("Participant-level pelvic lymph-node sensitivity and specificity vs RP+PLND pathology. Three blinded central readers. 95% CI lower bound targets: sensitivity ≥ 25%, specificity ≥ 65%. Primary analysis set = everyone who got the tracer (intent-to-image).")
    pdf.p("Secondary composite SOT can add conventional imaging and PSMA PET under an iDMC charter. Newly diagnosed, at least high-risk or suspected M1, planning RP+PLND.")
    pdf.h1("4. NM handling")
    pdf.bullet("Hydrate before and after. No high-energy (>300 keV) gamma tracer within 5 physical half-lives.")
    pdf.bullet("No IV iodinated contrast within 24 h; no high-density oral contrast within 5 days (water contrast OK).")
    pdf.bullet("Prior anti-cancer therapy or investigational agent within 28 days / 5 half-lives = ineligible. EBRT only in Phase 2 BCR.")


def jnj(pdf):
    pdf.h1("1. Two products, one DLL3 antibody")
    pdf.p("Janssen 99526687SCC1001 is a first-in-human Phase 1 protocol-elements document (v1.0, 08 June 2026) for extensive-stage small-cell lung cancer. Same ~100 kDa bivalent spFv-Fc targeting DLL3, two labels. Not tarlatamab (IMDELLTRA), not a T-cell engager, not PSMA, not FDG.")
    pdf.table(
        ["IMP", "Role", "Starting numbers"],
        [
            ["JNJ-99526726", "Companion PET · Zr-89 · DFO chelator", "2 mCi IV. Mass starts 3 mg, SET may go to 20 mg. Serial PET 0-4 h, 24+/-6 h, 42-78 h, 120-216 h."],
            ["JNJ-99526687", "Therapy · Ac-225 · macropa chelator JNJ-95981860", "Start 0.75 uCi/kg on 3 mg, IV 7-10 days after the imaging dose. BOIN on uCi."],
        ],
        colw=[38, 52, 98],
    )
    pdf.p("Both products mix labeled plus unlabeled spFv-Fc to hit the assigned mass. If blood-pool uptake is much greater than tumor, SET may repeat Zr-89 PET at a revised mass before allowing therapy.")
    pdf.h1("2. Who")
    pdf.p("Adults with histologically confirmed recurrent ES-SCLC after platinum-based chemotherapy and a checkpoint inhibitor. ECOG 0-1. About 100 people: ~60 image/mass optimization plus ~40 dose expansion. Additional DLL3 tumor types may be added later.")
    pdf.bullet("Part 1: measurable or evaluable disease. Part 2: at least one RECIST 1.1 lesion.")
    pdf.bullet("eGFR >= 50 mL/min (CKD-EPI, adjusted BSA). Hb >= 9, ANC >= 1.5 (or 1.0 if benign ethnic neutropenia), platelets >= 100.")
    pdf.bullet("Exclude ILD/pneumonitis in the prior 12 months, NYHA III/IV, QTcF >470 ms, untreated active CNS disease.")
    pdf.h1("3. Design")
    pdf.p("Open-label BOIN. n=8-12 at 3 mg / 2 mCi Zr-89 until imaging mass is optimized, then radioactivity is escalated (schema: 50 then 100 then X uCi Ac-225). Stagger >= 1 week between the first patient on a new dose and the next. SET (investigators + sponsor, chaired by the sponsor Study Responsible Physician) owns mass and uCi decisions. No randomisation in this elements document.")
    pdf.bullet("CT C/A/P/brain (or MRI) every 6 +/- 1 weeks for 24 weeks, then every 12 +/- 1 weeks. RECIST 1.1.")
    pdf.bullet("Ac-225 SPECT after therapy for selected patients: post-treatment dosimetry vs EBRT-equivalent organ thresholds.")
    pdf.bullet("Subsequent Ac-225 doses no sooner than 8 weeks, and only if Table 4 retreatment gates are met 7+/-1 days before.")
    pdf.h1("4. DLT window is 42 days after first Ac-225")
    pdf.table(
        ["Bucket", "Counts as DLT (related)"],
        [
            ["Heme", "G4 ANC >5 days or febrile neutropenia; G3 TCP with bleed or G4 TCP; any Grade 5."],
            ["Lung", "Grade >=2 pneumonitis / ILD."],
            ["Other", ">= G3 non-heme with listed exceptions (short-lived fatigue/GI, isolated ALP/GGT, Hy's law still counts)."],
        ],
        colw=[32, 156],
    )
    pdf.box(
        "Alpha antibody, not tarlatamab",
        "DLL3 is the same target as IMDELLTRA, but this construct carries actinium-225. Pulmonary DLT starts at Grade 2. Do not copy VECTRA 12 MBq PSMA numbers or BET-121 lutetium cycles.",
        fill=WARN,
        bar=GOLD,
    )


def bactinium(pdf):
    pdf.h1("1. Two products, one 49-aa miniprotein")
    pdf.p("Aktis BActinium-2 / AKY-2519-02 is Phase 1b of a B7-H3 (CD276) radiopharmaceutical. Same synthetic 49-amino-acid miniprotein with a DOTA-PEG4 spacer, two labels. Not an antibody, not PSMA, not DLL3, not tarlatamab.")
    pdf.table(
        ["IMP", "Role", "Starting numbers"],
        [
            ["[64Cu]Cu-AKY-2519", "Companion PET. T1/2 12.7 h.", "148-222 MBq (4-6 mCi) IV. Gate: uptake > background in >=1 lesion at 90-180 min."],
            ["[225Ac]Ac-AKY-2519", "Therapy. Alpha. T1/2 9.9 d.", "Start 6 MBq IV bolus Q4W. BOIN 6 / 9 / 12 MBq (DL-1 = 4; intermediates 7.5 / 10.5)."],
        ],
        colw=[42, 48, 98],
    )
    pdf.p("Store both upright in lead at 15-30 C. Ac-225 use-by 96 h from end of production; Cu-64 48 h. IND 178062 (therapy) / 178063 (imaging).")
    pdf.h1("2. Who")
    pdf.p("Adults with B7-H3 PET-positive locally advanced or metastatic NSCLC, ES-SCLC, mCRPC, HNSCC, ESCC, or CRC after therapies known to help that tumor. ECOG 0-1. ~20-25 sites. Up to 152 enrolled (~119 unique after rollover).")
    pdf.bullet("NSCLC: progressed on PD-(L)1 and chemotherapy (together or separate).")
    pdf.bullet("eGFR >= 60. Hb >= 9, ANC >= 1.5, platelets >= 100, no transfusion or G-CSF in 7 days.")
    pdf.bullet("Hard exclusions: any prior radioligand therapy, any prior B7-H3 targeted therapy, pregnancy, QTcF >470 ms.")
    pdf.h1("3. Design")
    pdf.p("Open-label two-part Phase 1b. Part 1: BOIN dose escalation (n ~21, 3 evaluable per level, <=1 mCRPC or CRC per dose) plus backfill at two SRC-chosen levels (up to 30 each, >=15 NSCLC, <=3 mCRPC). Part 2 at the recommended expansion dose: Cohort 1 up to 31 NSCLC; Cohort 2 up to 40 other PET-positive solid tumors, no mCRPC, <=20 of any one type. BOP2 futility.")
    pdf.bullet("Up to 4 cycles >=4 weeks apart. Two extra cycles only if dose <=9 MBq and clinical benefit. No intra-patient dose escalation.")
    pdf.bullet("Disease imaging every 8 +/- 1 weeks (CT; bone scan if mCRPC). RECIST 1.1 or PCWG3.")
    pdf.bullet("~10 patients at select sites: Cu-64 PET x3 and Ac-225 SPECT x3 (Table 20). Everyone else only needs the 90-180 min PET gate.")
    pdf.h1("4. DLT window is 4 weeks after first Ac-225")
    pdf.table(
        ["Bucket", "Counts as DLT"],
        [
            ["Heme", "G4 ANC or platelets >7 days; >=G3 TCP with clinically significant bleed; febrile neutropenia any grade."],
            ["Non-heme", ">=G3 with listed exceptions (short nausea/diarrhea, <1 week G3 fatigue, brief electrolytes, asymptomatic lipase). Hy's law."],
            ["Other", ">14-day delay or permanent stop; death not clearly PD."],
        ],
        colw=[32, 156],
    )
    pdf.box(
        "Miniprotein alpha, not lutetium and not an antibody",
        "Cu-64 PET is the gate. Ac-225 is the treatment. Do not copy BET-121 GBq numbers, VECTRA 12 MBq PSMA, or P1239 0.75 uCi/kg antibody doses.",
        fill=WARN,
        bar=GOLD,
    )


def main():
    sheets = [
        (
            {
                "short": "GP-STAR",
                "full": "ST1530-1  ·  ⁶⁸Ga-GP-01 FAP PET  ·  Phase I/II",
                "version": "Grand Sirtex (Chengdu)  ·  v1.2  ·  29 April 2026  ·  90 pages",
                "banner": "GP-STAR  ·  ST1530-1 v1.2",
                "file": "GP-STAR-ST1530-1-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/p001.jpg",
                "one": "Give a person with solid tumors one FAP PET injection, take pictures, then compare them to surgery or biopsy plus FAP staining.",
                "notthis": "Diagnostic imaging study. Not a cancer treatment trial.",
                "qa": [
                    ("What is GP-01?", "Small-molecule FAP inhibitor labeled with Ga-68 for PET/CT."),
                    ("Dose?", "185 MBq ± 10% (5 mCi ± 10%), mass ≤ 50 µg, one IV bolus."),
                    ("Two cohorts?", "Peritoneal mets of solid tumors, and NSCLC nodal mets. ~10 each."),
                    ("Truth?", "Pathology + FAP IHC. Hot PET + negative resected path = FP."),
                    ("Change surgery off this scan?", "No. Conventional imaging remains the clinical driver."),
                ],
            },
            gpstar,
        ),
        (
            {
                "short": "CLARIFY",
                "full": "CLP04  ·  ⁶⁴Cu-SAR-bisPSMA PET  ·  Phase 3 diagnostic",
                "version": "P0000 in Board Studio  ·  80 pages",
                "banner": "CLARIFY  ·  CLP04",
                "file": "CLARIFY-CLP04-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/clp/c001.jpg",
                "one": "One copper-64 PSMA injection in untreated high-risk prostate cancer, two PET time points, then surgery. Pathology of pelvic nodes is the answer key.",
                "notthis": "Diagnostic PET. Not a therapy. Not FDG.",
                "qa": [
                    ("Tracer?", "Copper-64 SAR-bisPSMA. Two PSMA arms + cage chelator. T½ 12.7 h."),
                    ("Dose?", "200 MBq IV once on Day 1, ±10% of prescribed."),
                    ("Two scans?", "Day 1 at 1–4 h and Day 2 at 24 ± 6 h. Co-primaries at each time point."),
                    ("Who?", "Untreated high-risk PC heading to RP + PLND. n = 383."),
                    ("Truth?", "Pelvic-node histopathology. Pathologist never sees the investigational PET."),
                ],
            },
            clarify,
        ),
        (
            {
                "short": "BET-121",
                "full": "¹⁷⁷Lu-rhPSMA-10.1  ·  integrated Phase 1 & 2  ·  NCT05413850",
                "version": "Blue Earth Therapeutics  ·  P01 in Board Studio  ·  120 pages",
                "banner": "BET-121  ·  ¹⁷⁷Lu-rhPSMA-10.1",
                "file": "BET-121-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/bet/b001.jpg",
                "one": "Give lutetium-177 radiohybrid PSMA therapy to PSMA-positive mCRPC, watch PSA, and stop if kidney or marrow dose caps are hit on SPECT/CT.",
                "notthis": "This is radioligand therapy, not a diagnostic PET trial.",
                "qa": [
                    ("Ligand?", "rhPSMA-10.1. Same PSMA idea as Pluvicto, different PK (faster kidney washout)."),
                    ("Nuclide?", "Lu-177, T½ 6.7 d, β−. ±10% of prescribed. Extravasation = SAE."),
                    ("Phase 2 primary?", "PSA50 from baseline to end of treatment."),
                    ("Kidney cap?", "23 Gy (Phase 2 absolute 35 Gy). Marrow 2 Gy (absolute 2.5)."),
                    ("SPECT?", "Uses the therapeutic emission. Results back before the next cycle."),
                ],
            },
            bet121,
        ),
        (
            {
                "short": "BActinium-2",
                "full": "AKY-2519-02  ·  64Cu / 225Ac AKY-2519 B7-H3  ·  Phase 1b",
                "version": "Aktis Oncology  ·  P02 in Board Studio  ·  08 APR 2026  ·  118 pages",
                "banner": "BActinium-2  ·  AKY-2519-02 v1.0",
                "file": "BACTINIUM-2-AKY-2519-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/aky/a001.jpg",
                "one": "Copper-64 B7-H3 PET to pick imaging-positive solid tumors, then actinium-225 on the same 49-amino-acid miniprotein every 4 weeks.",
                "notthis": "Alpha miniprotein therapy plus companion PET. Not an antibody. Not PSMA. Not lutetium.",
                "qa": [
                    ("Target?", "B7-H3 / CD276 on a 49-aa DOTA-PEG4 miniprotein. Not an antibody."),
                    ("Imaging?", "[64Cu]Cu-AKY-2519, 4-6 mCi. Gate: uptake > background at 90-180 min."),
                    ("Therapy?", "[225Ac]Ac-AKY-2519 start 6 MBq IV Q4W. BOIN 6 / 9 / 12 MBq."),
                    ("Who / n?", "PET+ NSCLC, ES-SCLC, mCRPC, HNSCC, ESCC, CRC. ~152 enrolled."),
                    ("DLT?", "4-week window after first Ac-225. G4 ANC/TCP >7 d; febrile neutropenia."),
                ],
            },
            bactinium,
        ),
        (
            {
                "short": "DWJ155",
                "full": "CPBQ663A12101  ·  ⁶⁸Ga / ²²⁵Ac DWJ155  ·  Phase I theranostic",
                "version": "Novartis  ·  P000000 in Board Studio",
                "banner": "DWJ155  ·  CPBQ663A12101",
                "file": "DWJ155-CPBQ-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/cpbq/n001.jpg",
                "one": "Same HER2-targeting peptide: gallium-68 PET to see the target, actinium-225 alpha to treat it, in HER2-spectrum solid tumors.",
                "notthis": "Not trastuzumab. Not T-DXd. Imaging gates therapy.",
                "qa": [
                    ("Pair?", "⁶⁸Ga-DWJ155 PET (~250 MBq) and ²²⁵Ac-DWJ155 therapy (start 2 MBq Q6W)."),
                    ("Who?", "Breast, NSCLC, GEA, bladder across HER2 3+ down to IHC 0 if PET is positive."),
                    ("Escalation?", "BHLRM + EWOC. Provisional 2 / 4 / 6 / 8 MBq. Q6W first."),
                    ("Gate?", "At least one measurable lesion with DWJ155 uptake on the screening PET."),
                    ("RD means?", "Activity per cycle + number of cycles + schedule."),
                ],
            },
            dwj,
        ),
        (
            {
                "short": "VECTRA-01",
                "full": "D9735C00001  ·  ²²⁵Ac-PSMA-I&T vs SoC  ·  Phase III",
                "version": "AstraZeneca  ·  v3.0 04 June 2026  ·  221 pages",
                "banner": "VECTRA-01  ·  D9735C00001 v3.0",
                "file": "VECTRA-01-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/vectra/v001.jpg",
                "one": "Randomise PSMA-positive mCRPC (after ARPI, taxane, and one PSMA beta) 1:1 to 12 MBq actinium every 6 weeks or investigator-choice SoC. Dual primary rPFS and OS.",
                "notthis": "Alpha therapy. Not Pluvicto. Not the diagnostic PSMA PET used to enter the trial.",
                "qa": [
                    ("IMP?", "12 MBq ²²⁵Ac zadavotide guraxetan IV Q6W, up to 6 cycles."),
                    ("Control?", "Cabazitaxel, ARPI, or radium-223. No crossover."),
                    ("PET gate?", "BICR PSMA-positive on Ga-11 or DCFPyL. Those are not the IMP."),
                    ("Renal?", "eGFR ≥ 60. Xerostomia ≥ G2 excluded."),
                    ("Primaries?", "rPFS and OS. ~670 randomised."),
                ],
            },
            vectra,
        ),
        (
            {
                "short": "SPARROW",
                "full": "RM2-3301  ·  ⁶⁸Ga-LNTH-2401 GRPR PET  ·  Phase 2/3",
                "version": "Lantheus  ·  IND 177584  ·  100 pages",
                "banner": "SPARROW  ·  RM2-3301",
                "file": "SPARROW-RM2-3301-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/sparrow/s001.jpg",
                "one": "Inject a GRPR (bombesin) PET tracer, pick the dose in Phase 2, then in Phase 3 ask whether pelvic-node pictures match prostatectomy pathology.",
                "notthis": "Diagnostic PET. Not PSMA. Not a therapy.",
                "qa": [
                    ("Target?", "GRPR / bombesin (DOTA-RM2). Complementary to PSMA."),
                    ("Phase 2 dose?", "Start 5 ± 1 mCi (148–222 MBq). Lowest activity with mean IQS ≥ 10.5."),
                    ("Phase 3 n?", "~396 high-risk ND heading to RP+PLND. Total study ~408."),
                    ("Primary?", "Participant-level pelvic LN sensitivity (CI ≥ 25%) and specificity (CI ≥ 65%) vs pathology."),
                    ("Readers?", "Three blinded central readers. Path is the SOT."),
                ],
            },
            sparrow,
        ),
        (
            {
                "short": "P1239 JNJ",
                "full": "99526687SCC1001  ·  Ac-225 DLL3 antibody + Zr-89 PET  ·  Phase 1",
                "version": "Janssen  ·  v1.0 08 June 2026  ·  19-page elements document",
                "banner": "P1239  ·  JNJ-99526687 SCC1001",
                "file": "JNJ-99526687-SCC1001-study-sheet.pdf",
                "cover": "/workspace/public/studio/assets/protocol/jnj/j001.jpg",
                "one": "Give a zirconium-89 DLL3 antibody PET so you can see the tumor, then 7-10 days later give the same antibody labeled with actinium-225 to treat recurrent extensive-stage small-cell lung cancer.",
                "notthis": "Alpha-antibody therapy plus companion PET. Not tarlatamab. Not PSMA. Not FDG.",
                "qa": [
                    ("Target?", "DLL3 on a ~100 kDa bivalent spFv-Fc. Not a T-cell engager."),
                    ("Imaging?", "JNJ-99526726, Zr-89 DFO, 2 mCi IV. Mass 3 mg start, may go to 20 mg."),
                    ("Therapy?", "JNJ-99526687, Ac-225 macropa. Start 0.75 uCi/kg on 3 mg, 7-10 d after PET."),
                    ("Who / n?", "Recurrent ES-SCLC after platinum + ICI. ECOG 0-1. ~100 (60 + 40)."),
                    ("DLT lung?", "Grade >=2 pneumonitis/ILD. 42-day window after first Ac-225."),
                ],
            },
            jnj,
        ),
    ]
    for meta, fn in sheets:
        write(meta, fn)


if __name__ == "__main__":
    main()
