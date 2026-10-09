#!/usr/bin/env python3
"""Plain-language study sheet for ST1530-1 / GP-STAR."""
from pathlib import Path
from fpdf import FPDF

OUT = Path("/workspace/artifacts/GP-STAR-ST1530-1-study-sheet.pdf")
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONTB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
COVER = Path("/workspace/public/studio/assets/protocol/p001.jpg")

NAVY = (18, 42, 66)
TEAL = (14, 116, 128)
GOLD = (146, 98, 22)
INK = (22, 28, 36)
MUTED = (70, 82, 94)
RULE = (210, 216, 222)
PALE = (244, 248, 250)
PALE2 = (232, 244, 246)
WARN = (255, 247, 230)
RED = (140, 40, 40)


class Sheet(FPDF):
    def __init__(self):
        super().__init__(format="letter", unit="mm")
        self.set_auto_page_break(auto=True, margin=18)
        self.add_font("Body", "", FONT)
        self.add_font("Body", "B", FONTB)
        self.set_title("GP-STAR (ST1530-1) — plain-language study sheet")
        self.set_author("NucMed Board Studio teaching sheet")

    def header(self):
        if self.page_no() == 1:
            return
        self.set_fill_color(*NAVY)
        self.rect(0, 0, 216, 10, "F")
        self.set_font("Body", "B", 8)
        self.set_text_color(255, 255, 255)
        self.set_xy(14, 3)
        self.cell(120, 5, "GP-STAR  ·  Protocol ST1530-1 v1.2  ·  29 April 2026")
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
        self.cell(90, 6, "Educational summary of ST1530-1 / GP-STAR")
        self.cell(0, 6, f"Page {self.page_no()}/{{nb}}", align="R")
        self.set_text_color(*INK)

    def h1(self, t):
        self.set_font("Body", "B", 16)
        self.set_text_color(*NAVY)
        self.ln(2)
        self.multi_cell(0, 8, t)
        self.set_draw_color(*TEAL)
        self.set_line_width(0.7)
        y = self.get_y()
        self.line(14, y, 90, y)
        self.set_line_width(0.2)
        self.ln(4)
        self.set_text_color(*INK)

    def h2(self, t):
        self.set_font("Body", "B", 12)
        self.set_text_color(*TEAL)
        self.ln(2)
        self.multi_cell(0, 6.5, t)
        self.ln(1)
        self.set_text_color(*INK)

    def p(self, t):
        self.set_font("Body", "", 11)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.8, t)
        self.ln(2)

    def boldp(self, label, rest):
        self.set_x(self.l_margin)
        self.set_font("Body", "B", 11)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.8, label + " " + rest)
        self.ln(1.5)

    def bullet(self, t):
        self.set_x(self.l_margin)
        x = self.l_margin
        self.set_x(x + 4)
        self.set_font("Body", "", 11)
        self.cell(5, 5.8, "•")
        self.multi_cell(0, 5.8, t)
        self.ln(0.6)

    def box(self, title, body, fill=PALE2, bar=TEAL):
        self.ln(1)
        start = self.get_y()
        self.set_font("Body", "B", 10)
        # measure
        w = 188
        self.set_xy(16, start + 4)
        t_h = 6
        self.set_font("Body", "", 10.5)
        # We'll draw after computing height by rendering off-page? simpler: wrap manually
        self.set_font("Body", "B", 10)
        title_h = 6
        self.set_font("Body", "", 10.5)
        # estimate lines
        words = body.split()
        lines, cur = [], ""
        for w0 in words:
            trial = (cur + " " + w0).strip()
            if self.get_string_width(trial) > w - 10:
                lines.append(cur)
                cur = w0
            else:
                cur = trial
        if cur:
            lines.append(cur)
        h = 8 + title_h + len(lines) * 5.4 + 6
        if start + h > 270:
            self.add_page()
            start = self.get_y()
        self.set_fill_color(*fill)
        self.set_draw_color(*bar)
        self.set_line_width(0.4)
        self.rect(14, start, 188, h, "FD")
        self.set_fill_color(*bar)
        self.rect(14, start, 3.2, h, "F")
        self.set_xy(20, start + 3.5)
        self.set_font("Body", "B", 10)
        self.set_text_color(*bar)
        self.cell(0, 6, title)
        self.set_text_color(*INK)
        self.set_font("Body", "", 10.5)
        y = start + 10
        for ln in lines:
            self.set_xy(20, y)
            self.cell(0, 5.4, ln)
            y += 5.4
        self.set_y(start + h + 3)
        self.set_line_width(0.2)

    def table(self, headers, rows, colw=None):
        n = len(headers)
        w = colw or [188 / n] * n
        if self.get_y() > 250:
            self.add_page()
        self.set_fill_color(*NAVY)
        self.set_text_color(255, 255, 255)
        self.set_font("Body", "B", 9)
        x0 = 14
        y = self.get_y()
        h = 8
        self.set_xy(x0, y)
        for i, hd in enumerate(headers):
            self.set_xy(x0 + sum(w[:i]), y)
            self.rect(x0 + sum(w[:i]), y, w[i], h, "F")
            self.set_xy(x0 + sum(w[:i]) + 1.5, y + 1.5)
            self.cell(w[i] - 3, 5, hd)
        y += h
        self.set_text_color(*INK)
        self.set_font("Body", "", 9)
        for ri, row in enumerate(rows):
            # wrap each cell
            cell_lines = []
            max_lines = 1
            for i, cell in enumerate(row):
                words = str(cell).split()
                lines, cur = [], ""
                for w0 in words:
                    trial = (cur + " " + w0).strip()
                    if self.get_string_width(trial) > w[i] - 4:
                        if cur:
                            lines.append(cur)
                        cur = w0
                    else:
                        cur = trial
                if cur:
                    lines.append(cur)
                if not lines:
                    lines = [""]
                cell_lines.append(lines)
                max_lines = max(max_lines, len(lines))
            rh = max_lines * 4.6 + 4
            if y + rh > 272:
                self.add_page()
                y = self.get_y()
            bg = (255, 255, 255) if ri % 2 == 0 else PALE
            self.set_fill_color(*bg)
            self.set_draw_color(*RULE)
            for i, lines in enumerate(cell_lines):
                cx = x0 + sum(w[:i])
                self.rect(cx, y, w[i], rh, "FD")
                self.set_xy(cx + 1.5, y + 2)
                self.multi_cell(w[i] - 3, 4.6, "\n".join(lines))
            y += rh
        self.set_y(y + 4)
        self.set_text_color(*INK)


def build():
    pdf = Sheet()
    pdf.alias_nb_pages()

    # COVER
    pdf.add_page()
    pdf.set_fill_color(*NAVY)
    pdf.rect(0, 0, 216, 62, "F")
    pdf.set_fill_color(*TEAL)
    pdf.rect(0, 62, 216, 4, "F")
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("Body", "", 11)
    pdf.set_xy(16, 14)
    pdf.cell(0, 6, "NucMed Board Studio  ·  protocol study sheet")
    pdf.set_font("Body", "B", 26)
    pdf.set_xy(16, 26)
    pdf.cell(0, 11, "GP-STAR")
    pdf.set_font("Body", "B", 14)
    pdf.set_xy(16, 40)
    pdf.cell(0, 7, "Protocol ST1530-1  ·  version 1.2  ·  29 April 2026")
    pdf.set_font("Body", "", 11)
    pdf.set_xy(16, 50)
    pdf.cell(0, 6, "Plain-language walkthrough of the signed FAP PET study")

    pdf.set_text_color(*INK)
    pdf.set_y(76)
    if COVER.exists():
        pdf.image(str(COVER), x=14, y=74, w=72)
        pdf.set_xy(94, 76)
        pdf.set_font("Body", "B", 13)
        pdf.multi_cell(100, 6.5, "What this study is, in one breath")
        pdf.set_x(94)
        pdf.set_font("Body", "", 11)
        pdf.multi_cell(
            100,
            5.8,
            "Give a person with cancer one injection of a FAP-targeted PET tracer (gallium-68 GP-01). Take PET/CT pictures. Then compare those pictures to what the surgeon or pathologist actually finds.",
        )
        pdf.ln(2)
        pdf.set_x(94)
        pdf.set_font("Body", "B", 11)
        pdf.multi_cell(100, 5.8, "It is a diagnostic imaging study.\nIt is not a cancer treatment trial.")
        pdf.set_y(max(pdf.get_y(), 168))
    else:
        pdf.set_y(76)

    pdf.box(
        "Read this first if the protocol feels like a wall of words",
        "A clinical protocol is a legal recipe: who can join, what drug, how much, when you scan, what you measure, and how you decide if a picture was right or wrong. Below, each section is the same idea in normal English, then the exact numbers from ST1530-1 v1.2. You do not need to memorize page numbers. You do need the dose, the two cohorts, the truth standard, and the rules that can fail screening.",
    )

    pdf.h2("The official title (decoded)")
    pdf.p(
        "“An Exploratory, Open-label Study of Safety, Pharmacokinetics, Biodistribution and Dosimetry of gallium-68 GP-01 in Participants with Solid Tumors (GP-STAR).”"
    )
    pdf.bullet("Exploratory / Phase I/II — early. They are still learning how the tracer behaves in people.")
    pdf.bullet("Open-label — everyone knows they got GP-01. There is no placebo arm.")
    pdf.bullet("Sponsor — Grand Sirtex (Chengdu) Medical Technology Co., Ltd.")
    pdf.bullet("Protocol number — ST1530-1. Nickname — GP-STAR.")
    pdf.bullet("About 20 people (10 per cohort). First 6 people get extra scans and blood draws.")

    # PAGE 2 — tracer
    pdf.add_page()
    pdf.h1("1. The tracer: what is being injected")
    pdf.p(
        "The investigational product is gallium-68 GP-01. Two parts: a small molecule that sticks to FAP, and a radioactive metal (gallium-68) that makes PET photons."
    )
    pdf.h2("FAP — the biological target")
    pdf.p(
        "FAP means fibroblast activation protein. It sits on cancer-associated fibroblasts — the scar-like support cells around a tumor, not usually on the cancer cell itself. That is why FAP PET can light up stroma-rich tumors even when FDG (which follows glucose in the tumor cell) is quiet, and why a FAP-cold lump of epithelial tumor can still be disease."
    )
    pdf.box(
        "Board pearl",
        "PSMA PET looks at the cancer-cell surface (prostate). FAP PET looks at the neighborhood the tumor built. Different lock. Different key. Do not mix them up on a protocol quiz.",
    )
    pdf.h2("Gallium-68 — the physics")
    pdf.bullet("Ga-68 is a positron (β+) emitter. It is not a “gamma emitter.” Version 1.2 of this protocol deleted that wrong wording.")
    pdf.bullet("Half-life ≈ 68 minutes.")
    pdf.bullet("The positron travels a short distance, then annihilates with an electron. Two 511 keV photons leave in opposite directions. That pair is what PET detects.")
    pdf.bullet("No collimator. Coincidence electronics. Same PET physics as FDG, different molecule.")

    pdf.h2("The dose they actually give")
    pdf.table(
        ["Item", "ST1530-1 number"],
        [
            ["Activity", "185 MBq ± 10%   (that is 5 mCi ± 10%)"],
            ["Mass of GP-01", "≤ 50 micrograms"],
            ["How it is given", "One intravenous bolus, then PET/CT"],
            ["How many doses", "One. This is not a multi-cycle therapy."],
            ["ALARA idea", "Lowest activity that still makes a readable scan"],
        ],
        colw=[62, 126],
    )
    pdf.p(
        "In millicurie language you already use: 5 mCi, give or take 10%, so roughly 4.5–5.5 mCi. Mass stays tiny so you do not flood FAP sites with cold drug."
    )

    pdf.h2("A transporter rule you will fail screening on")
    pdf.p(
        "Preclinical work says GP-01 is a substrate of P-glycoprotein (P-gp) and BCRP (breast cancer resistance protein). Strong inhibitors of those pumps can change where the tracer goes."
    )
    pdf.bullet("Prohibited: strong P-gp or BCRP inhibitors within 1 week or 5 half-lives (whichever is longer) before GP-01, and during the test period.")
    pdf.bullet("v1.2 narrowed this to strong inhibitors only. Weak ones are not the same rule.")
    pdf.bullet("Examples live in Appendix 6 of the protocol (amiodarone, cyclosporine, itraconazole-class drugs, etc. — check the appendix, do not guess).")

    # PAGE 3 — cohorts
    pdf.add_page()
    pdf.h1("2. Who is in the study — two parallel cohorts")
    pdf.p(
        "Think of two separate waiting rooms that run the same scan. About 10 people each. The number can be adjusted if they need more complete data."
    )
    pdf.table(
        ["", "Cohort 1 — peritoneum", "Cohort 2 — lung nodes"],
        [
            [
                "Who",
                "Solid tumors with confirmed or highly suspected peritoneal metastases. Gastric, colorectal, ovarian, fallopian tube are examples — not a closed list. Primary must be path-proven.",
                "NSCLC with suspected or confirmed lymph-node metastases (history, imaging, and/or pathology).",
            ],
            [
                "Why this group",
                "Peritoneum is a common, ugly metastatic site. CT/MRI and even FDG miss small implants. Laparoscopy is invasive.",
                "Nodal stage decides operability. They need a better map of which nodes are real disease.",
            ],
            [
                "What happens after the scan",
                "Planned surgical resection or laparoscopic exploration.",
                "Lymph-node dissection, or biopsy via endoscopy / bronchoscopy / mediastinoscopy.",
            ],
            [
                "Truth standard",
                "Pathology + FAP immunohistochemistry on the tissue they actually take.",
                "Same: pathology + FAP IHC on the node tissue.",
            ],
        ],
        colw=[32, 78, 78],
    )
    pdf.box(
        "In other words",
        "They only enroll people who were already going to have an operation or a biopsy. The scan is extra information. The cut tissue is the answer key.",
    )
    pdf.h2("Shared inclusion (everyone)")
    pdf.bullet("Signed consent; can follow procedures.")
    pdf.bullet("Age ≥ 18.")
    pdf.bullet("ECOG 0, 1, or 2 (can be up and about at least part of the day).")
    pdf.bullet("Scheduled for resection or biopsy.")
    pdf.bullet("CT/MRI of the primary and the suspected metastatic regions available.")
    pdf.bullet("Able to complete an FDG PET/CT.")
    pdf.bullet("Kidneys: creatinine clearance ≥ 50 mL/min (Cockcroft–Gault). Hydronephrosis by itself is no longer an exclusion.")
    pdf.bullet("Liver: bilirubin < 1.5× ULN; ALT and AST < 3× ULN.")
    pdf.bullet("Negative pregnancy test if relevant; contraception for 3 months after the Ga agent.")

    pdf.h2("The FDG clock")
    pdf.p(
        "Every participant needs an F-18 FDG PET/CT within 60 days before GP-01. That window was broadened in v1.2 so it matches ordinary “recent staging scan” timing. They will compare FAP pictures to those FDG pictures (SUVmax, SUVmean, tumor-to-background)."
    )

    # PAGE 4 — visit flow
    pdf.add_page()
    pdf.h1("3. What actually happens, in order")
    pdf.p("Three periods: screening, test day, then pathology after the operation or biopsy.")

    pdf.table(
        ["Step", "What you do", "Why"],
        [
            ["1. Screen", "Consent, history, ECOG, labs, ECG, pregnancy test, collect prior CT/MRI.", "Prove they are safe to inject and that tissue will be obtained."],
            ["2. FDG PET/CT", "If not already done in the last 60 days, do FDG.", "Comparator scan. Also a screening filter."],
            ["3. Inject GP-01", "One IV bolus 185 MBq ± 10%, mass ≤ 50 µg.", "The only dose of investigational product."],
            ["4. Safety watch", "Vital signs within 0.5 hour after injection.", "Added in v1.2 because this is early-phase."],
            ["5. PET/CT", "See the two scan schedules below.", "The pictures the study is about."],
            ["6. Surgery / biopsy", "Already planned. Do not change the operation because of GP-01.", "v1.2 is explicit: not enough evidence to redirect surgery."],
            ["7. Path + FAP IHC", "Look at the tissue. Score FAP.", "This is the standard of truth for every lesion."],
        ],
        colw=[32, 78, 78],
    )

    pdf.h2("Two scan schedules (this is the “first 6 vs the rest” split)")
    pdf.table(
        ["People", "PET after GP-01", "Blood / urine / extra math"],
        [
            [
                "First 6 enrolled",
                "Several PET time points (multi-timepoint) so they can see when the tracer peaks in tumor vs organs.",
                "Full pharmacokinetics (AUC, Tmax, Cmax, T½, clearance, volume). Biodistribution. Organ dosimetry and whole-body effective dose. Likert image-quality scores.",
            ],
            [
                "Everyone after that",
                "One PET/CT after the dose. The 30–60 minute window is a starting guess and may move after they look at the first 6.",
                "PK sampling is not required. Still get safety labs/ECG as scheduled.",
            ],
        ],
        colw=[40, 74, 74],
    )
    pdf.box(
        "Why the first six exist",
        "In a brand-new tracer you do not yet know the best imaging time, how fast it leaves the blood, or which organ gets the highest radiation dose. Those six people are the physics and pharmacy chapter. The later fourteen people are mostly the diagnostic-performance chapter.",
    )

    pdf.h2("The rule that protects patients")
    pdf.p(
        "Section 3.1 (v1.2): surgical approach or other treatment should be based on conventional images, not on ⁶⁸Ga-GP-01 PET/CT. If a surgeon wants extra work-up, they can, but the protocol does not authorize changing the operation off this scan. Exploratory means “we do not have that evidence yet.”"
    )

    # PAGE 5 — endpoints + 2x2
    pdf.add_page()
    pdf.h1("4. What they are trying to prove")
    pdf.h2("Primary (the two headlines)")
    pdf.boldp("Safety.", "How often, how long, and how severe are treatment-emergent adverse events? Do labs and 12-lead ECGs move? Adverse events are graded with CTCAE v6.0 (the protocol switched from v5.0 because the study starts after 1 Jan 2026).")
    pdf.boldp(
        "Preliminary diagnostic performance.",
        "Sensitivity, specificity, accuracy, PPV, NPV — calculated separately in Cohort 1 and Cohort 2 — using pathology as truth. Also compare FAP PET with FDG using SUVmax, SUVmean, and tumor-to-background ratios.",
    )
    pdf.h2("Secondary (the supporting lab notebook)")
    pdf.bullet("Best imaging time window and acquisition settings (Likert quality + TBR).")
    pdf.bullet("Dosimetry: absorbed dose to lesions and major organs; whole-body effective dose.")
    pdf.bullet("Biodistribution: SUVs and % injected dose per gram in organs and tumors; time-activity curves.")
    pdf.bullet("Pharmacokinetics of the radioactivity: AUC, T½, CL, Tmax, Cmax, Vd.")
    pdf.bullet("Does SUVmax / SUVmean on FAP PET match FAP staining on the actual slide?")

    pdf.h2("The 2×2 table — how a picture is scored as right or wrong")
    pdf.p("Pathology of the resected or biopsied region is the answer key. PET is only the guess.")
    pdf.table(
        ["", "Pathology positive (disease there)", "Pathology negative (no disease there)"],
        [
            ["PET positive (hot)", "True positive (TP)  — tracer was right", "False positive (FP)  — tracer cried wolf"],
            ["PET negative (cold)", "False negative (FN)  — tracer missed it", "True negative (TN)  — both agree it is clean"],
        ],
        colw=[50, 69, 69],
    )
    pdf.box(
        "The v1.2 correction you must not reverse",
        "If PET is hot, the surgeon removes that exact region, and pathology is negative, that region is FALSE POSITIVE (FP), not false negative. Version 1.0 had FN written there. That was wrong. Hot scan + negative path on the piece they took = FP.",
        fill=WARN,
        bar=GOLD,
    )
    pdf.p(
        "Sensitivity = TP / (TP+FN). Specificity = TN / (TN+FP). PPV = TP / (TP+FP). NPV = TN / (TN+FN). They compute these twice: once for peritoneal Cohort 1, once for NSCLC Cohort 2. Do not pool them in your head as if they were one disease."
    )

    # PAGE 6 — exclusions
    pdf.add_page()
    pdf.h1("5. Who cannot join (the screening list)")
    pdf.p("Any one of these knocks a person out. This is the practical list, not legal fluff.")
    pdf.table(
        ["#", "Exclusion in plain English"],
        [
            ["1", "Any other PET within 10 physical half-lives of that PET agent before GP-01 (residual activity would contaminate the new scan)."],
            ["2", "Any investigational drug within 4 weeks."],
            ["3", "Surgery, systemic anti-cancer therapy, or radiotherapy within 4 weeks before the FDG PET/CT."],
            ["4", "Planned anti-cancer therapy between the FDG scan and the surgery/biopsy (the disease would change in the middle of the comparison)."],
            ["5", "Strong P-gp or BCRP inhibitor within 1 week or 5 half-lives, whichever is longer."],
            ["6", "Another cancer, unless curatively treated and NED ≥ 3 years (exceptions: non-melanoma skin, in-situ cervix)."],
            ["7", "Kidney failure, liver failure, uncontrolled infection, or anything the investigator thinks will sink safety or the pictures."],
            ["8–9", "Long QT: mean QTcF > 450 ms on three ECGs, or extra Torsades risk (heart failure, low potassium, family long-QT)."],
            ["10", "Fibroblast-targeting drugs (nintedanib, pirfenidone) — they would fight the FAP target."],
            ["11", "Planning to join another drug or device trial during this one."],
            ["12", "Allergy to any component of GP-01."],
            ["13", "Cannot lie flat on a PET/CT about 1 hour."],
            ["14", "Unlikely to follow the schedule (medical, psychological, or social)."],
            ["15", "Pregnant or lactating."],
        ],
        colw=[18, 170],
    )
    pdf.box(
        "Three screening traps to say out loud",
        "1) FDG must be ≤ 60 days old.  2) Strong P-gp/BCRP drugs.  3) Fibroblast drugs. A person can look “perfectly eligible” on ECOG and labs and still fail these three.",
    )

    # PAGE 7 — why peritoneal
    pdf.add_page()
    pdf.h1("6. Why peritoneal FAP PET exists")
    pdf.p(
        "This is the clinical story in the protocol’s background, compressed so you can teach it."
    )
    pdf.bullet("Stomach cancer: peritoneum is the most common metastatic site in many series (about 15–43%). Five-year survival with peritoneal disease is poor. Even positive peritoneal washings without visible implants are a bad sign.")
    pdf.bullet("Colorectal cancer: synchronous peritoneal metastases in roughly 4–15%. Selected people may be cured by cytoreductive surgery plus HIPEC — but you have to know the implants are there, and laparoscopy is invasive and expensive.")
    pdf.bullet("Ovarian / fallopian tube: more than 70% present already advanced; a large fraction already have peritoneal disease. Implants can be tiny and hide in a complex peritoneal cavity, especially after neoadjuvant therapy.")
    pdf.p(
        "CT and MRI miss small-volume peritoneal disease. FDG PET helps some tumors and fails others (mucinous, some ovarian, low-grade). FAP is often high in the reactive stroma of peritoneal implants, which is the scientific bet of GP-01."
    )
    pdf.h2("Cohort 2 in one paragraph")
    pdf.p(
        "In NSCLC, whether mediastinal nodes are involved changes stage from a surgical problem to a combined-modality problem. CT size and FDG both over- and under-call nodes. This cohort asks whether FAP PET, scored against actual dissected or biopsied nodes, is any better. N-staging language in the appendix follows IASLC 9th edition."
    )

    pdf.h2("How this protocol sits next to the other ones in the studio")
    pdf.table(
        ["Module", "Ligand / idea", "Not the same as GP-STAR because"],
        [
            ["ST1530-1 GP-STAR", "⁶⁸Ga-GP-01  ·  FAP PET (diagnostic)", "Imaging only. One dose. Stroma target."],
            ["BET-121", "¹⁷⁷Lu-rhPSMA-10.1", "Therapy. PSMA on prostate-cancer cells."],
            ["VECTRA-01", "²²⁵Ac-PSMA", "Alpha therapy. Different particle, different toxicity."],
            ["SPARROW", "⁶⁸Ga GRPR / bombesin-family PET", "Different receptor (GRPR), still diagnostic PET."],
            ["DWJ155 / CLARIFY", "Their own sponsor products", "Different molecule, different endpoints."],
        ],
        colw=[42, 68, 78],
    )
    pdf.p(
        "Shared physics: 511 keV, SUV clocks, ALARA. Shared clinical habit: never let a pretty scan override pathology when the protocol says pathology is truth."
    )

    # PAGE 8 — recap
    pdf.add_page()
    pdf.h1("7. What to know cold (the quiz list)")
    pdf.p("If you can answer these without flipping back, you understand ST1530-1 well enough to talk about it.")
    items = [
        ("What is GP-01?", "A small-molecule FAP inhibitor labeled with Ga-68 for PET/CT. Diagnostic, not therapy."),
        ("Dose?", "185 MBq ± 10% (5 mCi ± 10%), mass ≤ 50 µg, one IV bolus."),
        ("Ga-68 physics?", "Positron emitter, T½ 68 min, detected as a 511 keV pair. Not a gamma emitter."),
        ("How many people?", "About 20, 10 per cohort. First 6 get PK + multi-timepoint PET + dosimetry."),
        ("Cohort 1?", "Solid tumors with suspected peritoneal mets, headed to surgery or laparoscopy."),
        ("Cohort 2?", "NSCLC with suspected nodal mets, headed to node dissection or biopsy."),
        ("Comparator scan?", "FDG PET/CT within 60 days before GP-01."),
        ("Truth standard?", "Pathology of the resected/biopsied region plus FAP immunohistochemistry."),
        ("Hot PET, negative path on that piece?", "False positive. v1.2 fixed this."),
        ("Can the surgeon change the operation off this scan?", "No. Conventional imaging remains the clinical driver."),
        ("Transporter rule?", "No strong P-gp or BCRP inhibitors (1 week or 5 half-lives)."),
        ("Fibroblast drugs?", "Nintedanib / pirfenidone are out — they hit the same biology."),
        ("Safety scale?", "CTCAE v6.0."),
        ("Sponsor / number / date?", "Grand Sirtex (Chengdu); ST1530-1; v1.2 29 April 2026."),
    ]
    for q, a in items:
        if pdf.get_y() > 250:
            pdf.add_page()
        pdf.set_x(14)
        pdf.set_font("Body", "B", 11)
        pdf.set_text_color(*NAVY)
        pdf.multi_cell(0, 5.6, "Q. " + q)
        pdf.set_x(14)
        pdf.set_font("Body", "", 11)
        pdf.set_text_color(*INK)
        pdf.multi_cell(0, 5.6, "A. " + a)
        pdf.ln(1.8)

    pdf.box(
        "How to use Board Studio with this sheet",
        "Open module P0P · GP-STAR. Press play. The left pane is the real signed page; the right pane is the spoken script. Use this PDF when a page of legalese stalls you. Slow the audio on tables. This sheet is a teaching translation. The signed site protocol, investigator brochure, and IRB file still win if anything ever conflicts.",
    )
    pdf.ln(2)
    pdf.set_font("Body", "", 9)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(
        0,
        4.8,
        "Disclaimer. This document is an educational summary prepared for board-style study. It is not medical advice, not a recruitment brochure, not a substitute for ST1530-1 v1.2, and not affiliated with Grand Sirtex, the ABR, ABNM, ACGME, or any listed professional body. Numbers and rules are taken from the v1.2 protocol text used in the teaching module. If you are a study team member, follow the signed copy at your site.",
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print("wrote", OUT, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    build()
