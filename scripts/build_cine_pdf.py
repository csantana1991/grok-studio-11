#!/usr/bin/env python3
"""Board Studio cine atlas: 134-slice dictation + windowed split-screen plates."""
from pathlib import Path
from fpdf import FPDF
from PIL import Image, ImageDraw, ImageFont

OUT = Path("/workspace/public/studio/NSCLC-LUNG1-teaching-atlas.pdf")
ART = Path("/workspace/artifacts/NSCLC-LUNG1-teaching-atlas.pdf")
TMP = Path("/tmp/cine-pdf")
TMP.mkdir(parents=True, exist_ok=True)

N = 134
TITLE = "NSCLC chest CT teaching series"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONTB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

BANDS = [
    (0.00, 0.05, "LUNG APICES / LOWER NECK",
     "Lung apices, C7–T1, midline trachea, thyroid, sternocleidomastoid, extra-pleural apical fat.",
     "Search apices for Pancoast mass, thyroid nodules, tracheal deviation, apical scarring.",
     "1–7"),
    (0.05, 0.12, "THORACIC INLET",
     "Sternoclavicular joints, lung apices, esophagus, brachiocephalic veins, brachial-plexus fat.",
     "Inlet mass, lymphadenopathy, clavicles, first ribs.",
     "8–16"),
    (0.12, 0.22, "UPPER LOBES / AORTIC ARCH",
     "Aortic arch, SVC, trachea, upper lobes, prevascular fat.",
     "Mediastinal nodes, aortic aneurysm, RUL and LUL parenchyma.",
     "17–29"),
    (0.22, 0.34, "AORTOPULMONARY WINDOW",
     "AP window, main PA, carina approaching, upper-lobe bronchi.",
     "AP-window nodes. RUL mass typical of NSCLC teaching cases sits near this band.",
     "30–45"),
    (0.34, 0.48, "HILA / CARINA",
     "Carina, main bronchi, hilar vessels, azygos, upper heart border.",
     "Hilar nodes, endobronchial lesion. Measure any RUL spiculated mass on lung then mediastinum.",
     "46–64"),
    (0.48, 0.62, "HEART / MID LUNGS",
     "Four cardiac chambers, coronary grooves, mid-lobe and lingula, descending aorta.",
     "Heart size, pericardium, pulmonary embolus in PA, lower-lobe nodules.",
     "65–83"),
    (0.62, 0.76, "LOWER LOBES / DOME OF LIVER",
     "Lower lobes, costophrenic sulci starting, dome of liver, IVC, esophageal hiatus.",
     "Bases, adrenal on the next slices, pleural fluid, bone windows for vertebrae.",
     "84–102"),
    (0.76, 0.90, "COSTOPHRENIC / ADRENALS",
     "Posterior costophrenic recesses, adrenals, upper poles of kidneys, stomach bubble.",
     "Adrenal mets in NSCLC staging, pleural fluid, compression fracture.",
     "103–120"),
    (0.90, 1.01, "UPPER ABDOMEN / EXIT",
     "Liver, spleen, kidneys, pancreas tail, remaining lung bases.",
     "Incidental abdomen. Confirm you reviewed lung, mediastinum, bone, and tubes on the way down.",
     "121–134"),
]

WINDOWS = [
    ("lung", "LUNG WINDOW", "WW ~1500 HU · WL ~-600 HU · parenchyma, nodules, airways"),
    ("med", "MEDIASTINAL WINDOW", "WW ~350 HU · WL ~40 HU · nodes, vessels, heart, fat planes"),
    ("bone", "BONE WINDOW", "WW ~2000 HU · WL ~300 HU · cortex, ribs, vertebrae, hardware"),
]

PAL = {
    "lung": dict(bg=(8, 10, 12), soft=(42, 52, 64), lung=(16, 20, 26), bone=(214, 222, 230), heart=(58, 68, 80), mass=(232, 168, 42)),
    "med": dict(bg=(22, 24, 28), soft=(96, 102, 110), lung=(30, 32, 36), bone=(186, 190, 196), heart=(128, 96, 96), mass=(210, 72, 56)),
    "bone": dict(bg=(6, 6, 8), soft=(28, 28, 32), lung=(10, 10, 12), bone=(248, 248, 250), heart=(44, 44, 48), mass=(210, 210, 70)),
}


def band_for(i):
    t = i / max(1, N - 1)
    for row in BANDS:
        if t >= row[0] and t < row[1]:
            return row
    return BANDS[-1]


def script(i):
    b = band_for(i)
    t = i / max(1, N - 1)
    mass = 0.28 < t < 0.5
    lines = [
        f"Slice {i + 1} of {N}. Axial chest CT. {TITLE}.",
        f"Station {b[2]}. Anatomy on this slice: {b[3]}",
        f"How to read it: {b[4]}",
        "Teaching lesion: spiculated right-upper-lobe mass at this level, NSCLC-Radiomics LUNG1 pattern. Window lung then mediastinum. Check chest wall, fissure, and nodes."
        if mass
        else "No mass mapped at this exact level. Still search lungs, mediastinum, bone, and support devices.",
        "Read lung window, then mediastinum, then bone. Split screen: LEFT normal anatomy, RIGHT same slice with the teaching lesion superimposed.",
    ]
    return " ".join(lines)


def _thorax(draw, cx, cy, rx, ry, t, pal, overlay):
    bbox = [cx - rx, cy - ry, cx + rx, cy + ry]
    draw.ellipse(bbox, fill=pal["soft"])
    lung_y = cy - 8 + t * 12
    lung_h = ry * (0.72 - t * 0.12)
    for sx in (-1, 1):
        draw.ellipse(
            [cx + sx * rx * 0.42 - rx * 0.34, lung_y - lung_h,
             cx + sx * rx * 0.42 + rx * 0.34, lung_y + lung_h],
            fill=pal["lung"],
        )
    draw.rectangle([cx - 10, cy + ry * 0.55, cx + 10, cy + ry * 0.55 + 18], fill=pal["bone"])
    draw.rectangle([cx - 6, cy, cx + 6, cy + ry * 0.55], fill=pal["bone"])
    if 0.35 < t < 0.75:
        draw.ellipse([cx - rx * 0.22, cy + 4, cx + rx * 0.22, cy + 4 + ry * 0.44], fill=pal["heart"])
    if overlay and 0.28 < t < 0.5:
        draw.ellipse([cx - rx * 0.28 - 16, cy - ry * 0.18 - 12,
                      cx - rx * 0.28 + 16, cy - ry * 0.18 + 12], fill=pal["mass"])


def draw_split(path, i, win):
    w, h = 1600, 780
    pal = PAL[win]
    t = i / max(1, N - 1)
    im = Image.new("RGB", (w, h), (5, 7, 10))
    d = ImageDraw.Draw(im)
    font = ImageFont.truetype(FONTB, 22)
    small = ImageFont.truetype(FONT, 16)
    mid = w // 2
    d.rectangle([0, 40, mid - 2, h - 36], fill=pal["bg"])
    d.rectangle([mid + 2, 40, w, h - 36], fill=pal["bg"])
    _thorax(d, mid // 2, h // 2 + 10, 220, 210 + t * 30, t, pal, False)
    _thorax(d, mid + mid // 2, h // 2 + 10, 220, 210 + t * 30, t, pal, True)
    d.line([(mid, 40), (mid, h - 36)], fill=(59, 130, 246), width=3)
    d.text((16, 8), f"SLICE {i+1:03d}/{N}  ·  {band_for(i)[2]}  ·  {win.upper()} WINDOW", fill=(255, 255, 255), font=font)
    d.text((16, 48), "NORMAL", fill=(255, 255, 255), font=small)
    d.text((mid + 16, 48), "SUPERIMPOSED (teaching lesion)", fill=(255, 255, 255), font=small)
    d.text((16, h - 28), "Split-screen cine plate · schematic teaching overlay · not source DICOM pixels", fill=(154, 170, 180), font=small)
    im.save(path, "PNG")


class Atlas(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("DejaVu", "", 8)
        self.set_text_color(80)
        self.cell(0, 6, "NucMed Board Studio  ·  NSCLC LUNG1 teaching atlas  ·  education only, not a diagnostic study", align="C")
        self.ln(4)

    def footer(self):
        self.set_y(-12)
        self.set_font("DejaVu", "", 8)
        self.set_text_color(90)
        self.cell(0, 8, f"{self.page_no()}", align="C")


def add_fonts(pdf):
    pdf.add_font("DejaVu", "", FONT)
    pdf.add_font("DejaVu", "B", FONTB)


def h1(pdf, t):
    pdf.set_font("DejaVu", "B", 16)
    pdf.set_text_color(18, 49, 92)
    pdf.multi_cell(0, 8, t)
    pdf.ln(2)


def body(pdf, t, size=10):
    pdf.set_font("DejaVu", "", size)
    pdf.set_text_color(20)
    pdf.multi_cell(0, 5, t)
    pdf.ln(1)


def build():
    # representative slice per band (midpoint)
    plates = []
    for bi, b in enumerate(BANDS):
        lo, hi = b[0], min(b[1], 0.999)
        mid_t = (lo + hi) / 2
        i = int(round(mid_t * (N - 1)))
        for win, wname, _ in WINDOWS:
            p = TMP / f"b{bi}_{win}.png"
            draw_split(p, i, win)
            plates.append((b, i, win, wname, p))

    pdf = Atlas(orientation="P", unit="mm", format="Letter")
    pdf.set_auto_page_break(auto=True, margin=16)
    add_fonts(pdf)

    # Cover
    pdf.add_page()
    pdf.set_font("DejaVu", "B", 22)
    pdf.set_text_color(18, 49, 92)
    pdf.ln(28)
    pdf.multi_cell(0, 10, "NSCLC-Radiomics LUNG1\nTeaching atlas")
    pdf.ln(4)
    pdf.set_font("DejaVu", "", 12)
    pdf.multi_cell(0, 6,
        "134-slice axial chest CT cine, translated from the Board Studio slow dictation.\n"
        "Each anatomy station is expanded across three imaging windows.\n"
        "Split screen: LEFT = normal anatomy  ·  RIGHT = same slice with the teaching lesion superimposed.\n\n"
        "Not the TCIA source DICOM. Not a radiology report. Education only.")
    pdf.ln(8)
    body(pdf, "Contents\n1. How to use windows and split screen\n2. Nine anatomy stations × lung / mediastinum / bone\n3. Full 134-slice dictation log (the spoken script)\n4. Honesty and limits")

    # Method
    pdf.add_page()
    h1(pdf, "1. Windows, split screen, and the search pattern")
    body(pdf,
         "Chest CT is not one picture. You change the window, then you change the question. "
         "Lung window for parenchyma and nodules. Mediastinal window for nodes, vessels, and heart. "
         "Bone window for cortex, ribs, and vertebrae. The cine in Board Studio toggles the same three palettes.")
    for win, wname, hint in WINDOWS:
        pdf.set_font("DejaVu", "B", 11)
        pdf.set_text_color(18, 49, 92)
        pdf.cell(0, 7, wname, ln=1)
        body(pdf, hint)
    body(pdf,
         "Split-screen capability: the left pane is the normal teaching map for that slice. "
         "The right pane is the identical geometry with the NSCLC RUL mass superimposed when the slice falls in the 28–50% band "
         "(approximately slices 38–67). Scroll in the app and the dictation continues; this PDF freezes every spoken line.")
    body(pdf,
         "Search order on every slice: lungs → mediastinum → bone → tubes and lines → review the left-right comparison. "
         "If you annotated a slice in the app, that note is local to your browser and is not printed here.")

    # Station plates
    pdf.add_page()
    h1(pdf, "2. Anatomy stations expanded by imaging window")
    body(pdf, "Nine contiguous bands cover slices 001–134. Each station has three split-screen plates (lung, mediastinum, bone) and the dictation that plays when you stop on that band.")

    for b, i, win, wname, path in plates:
        pdf.add_page()
        h1(pdf, f"{b[2]}")
        pdf.set_font("DejaVu", "B", 11)
        pdf.set_text_color(29, 78, 216)
        pdf.cell(0, 6, f"{wname}  ·  representative slice {i+1:03d} / {N}  ·  band slices {b[5]}", ln=1)
        pdf.ln(1)
        y = pdf.get_y()
        img_h = 186 * (780 / 1600)
        if y + img_h > 250:
            pdf.add_page()
            y = pdf.get_y()
        pdf.image(str(path), x=12, y=y, w=186)
        pdf.set_xy(12, y + img_h + 3)
        pdf.set_font("DejaVu", "B", 10)
        pdf.set_text_color(18, 49, 92)
        pdf.cell(0, 6, "Anatomy (expanded)", ln=1)
        body(pdf, b[3], 10)
        pdf.set_font("DejaVu", "B", 10)
        pdf.set_text_color(18, 49, 92)
        pdf.cell(0, 6, "How to read this window", ln=1)
        body(pdf, b[4] + " On this window: " + dict(WINDOWS)[win] if False else b[4], 10)
        hint = [h for w, n, h in WINDOWS if w == win][0]
        body(pdf, "Window: " + hint, 10)
        pdf.set_font("DejaVu", "B", 10)
        pdf.cell(0, 6, "Slow dictation (this slice)", ln=1)
        body(pdf, script(i), 9)

    # 134 log
    pdf.add_page()
    h1(pdf, "3. Entire study — slow dictation per slice")
    body(pdf, "These are the words the Board Studio player speaks, in order, when you dictate remaining from slice 1. "
              "Each line is one cine stop. Superimpose/split applies on slices 38–67.")

    for i in range(N):
        if pdf.get_y() > 248:
            pdf.add_page()
        pdf.set_x(pdf.l_margin)
        b = band_for(i)
        pdf.set_font("DejaVu", "B", 9)
        pdf.set_text_color(18, 49, 92)
        mass = 0.28 < (i / max(1, N - 1)) < 0.5
        tag = "  ·  SUPERIMPOSE ON" if mass else ""
        pdf.multi_cell(0, 5, f"Slice {i+1:03d} / {N}  ·  {b[2]}{tag}")
        pdf.set_x(pdf.l_margin)
        body(pdf, script(i), 8)

    pdf.add_page()
    h1(pdf, "4. Honesty and limits")
    body(pdf,
         "This atlas is a teaching translation of the Board Studio cine, not a dump of TCIA NSCLC-Radiomics LUNG1-001 DICOM. "
         "The OHIF viewer in the Rad Atlas widget remains the public source study. "
         "Plates are schematic split-screens (normal | superimposed) across lung, mediastinum, and bone windows. "
         "They do not replace a PACS read, a faculty over-read, or the collection’s data-use terms. "
         "Do not treat SUV, measurements, or mass location as this patient’s pixels. "
         "If a live PubMed or Wikimedia figure is open beside the cine, that figure keeps its own caption and license.")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    ART.write_bytes(OUT.read_bytes())
    print("wrote", OUT, OUT.stat().st_size, "pages", pdf.page_no())


if __name__ == "__main__":
    build()
