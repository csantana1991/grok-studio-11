#!/usr/bin/env python3
"""134-slice NSCLC teaching atlas PDF: lung/mediastinum/bone windows, normal vs superimposed split."""
from __future__ import annotations

import io
from pathlib import Path

from fpdf import FPDF
from PIL import Image, ImageDraw, ImageFont

FONT = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
FONT_SM = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 12)
FONT_LG = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 22)

N = 134
TITLE = "NSCLC-Radiomics LUNG1 teaching atlas"
OUT = Path("/workspace/public/studio/NSCLC-LUNG1-teaching-atlas.pdf")

BANDS = [
    (0.00, 0.05, "LUNG APICES / LOWER NECK",
     "Lung apices, C7–T1, midline trachea, thyroid, sternocleidomastoid, extra-pleural apical fat.",
     "Search apices for Pancoast mass, thyroid nodules, tracheal deviation, apical scarring."),
    (0.05, 0.12, "THORACIC INLET",
     "Sternoclavicular joints, lung apices, esophagus, brachiocephalic veins, brachial-plexus fat.",
     "Inlet mass, lymphadenopathy, clavicles, first ribs."),
    (0.12, 0.22, "UPPER LOBES / AORTIC ARCH",
     "Aortic arch, SVC, trachea, upper lobes, prevascular fat.",
     "Mediastinal nodes, aortic aneurysm, RUL and LUL parenchyma."),
    (0.22, 0.34, "AORTOPULMONARY WINDOW",
     "AP window, main PA, carina approaching, upper-lobe bronchi.",
     "AP-window nodes. RUL mass typical of NSCLC teaching cases sits near this band."),
    (0.34, 0.48, "HILA / CARINA",
     "Carina, main bronchi, hilar vessels, azygos, upper heart border.",
     "Hilar nodes, endobronchial lesion, measure any RUL spiculated mass on lung then mediastinum windows."),
    (0.48, 0.62, "HEART / MID LUNGS",
     "Four cardiac chambers, coronary grooves, mid-lobe and lingula, descending aorta.",
     "Heart size, pericardium, pulmonary embolus in PA, lower-lobe nodules."),
    (0.62, 0.76, "LOWER LOBES / DOME OF LIVER",
     "Lower lobes, costophrenic sulci starting, dome of liver, IVC, esophagus hiatus.",
     "Bases, adrenal on the next slices, pleural fluid, bone windows for vertebrae."),
    (0.76, 0.90, "COSTOPHRENIC / ADRENALS",
     "Posterior costophrenic recesses, adrenals, upper poles of kidneys, stomach bubble.",
     "Adrenal mets in NSCLC staging, pleural fluid, compression fracture."),
    (0.90, 1.01, "UPPER ABDOMEN / EXIT",
     "Liver, spleen, kidneys, pancreas tail, remaining lung bases.",
     "Incidental abdomen. Confirm lung, mediastinum, bone, and tubes on the way down."),
]

WINDOWS = {
    "lung": dict(label="LUNG  W/L −500 / 1500", bg=(8, 10, 12), soft=(42, 52, 64),
                 lung=(16, 20, 26), bone=(214, 222, 230), heart=(58, 68, 80), mass=(232, 168, 42)),
    "med": dict(label="MEDIASTINUM  W/L 40 / 400", bg=(22, 24, 28), soft=(96, 102, 110),
                lung=(30, 32, 36), bone=(186, 190, 196), heart=(128, 96, 96), mass=(210, 72, 56)),
    "bone": dict(label="BONE  W/L 300 / 1500", bg=(6, 6, 8), soft=(28, 28, 32),
                 lung=(10, 10, 12), bone=(248, 248, 250), heart=(44, 44, 48), mass=(210, 210, 70)),
}


def band(i: int):
    t = i / max(1, N - 1)
    for a, b, *rest in BANDS:
        if a <= t < b:
            return (t,) + tuple(rest)
    return (t,) + tuple(BANDS[-1][2:])


def has_mass(t: float) -> bool:
    return 0.28 < t < 0.50


def draw_axial(im: Image.Image, i: int, pal: dict, overlay: bool) -> None:
    d = ImageDraw.Draw(im)
    w, h = im.size
    t = i / max(1, N - 1)
    d.rectangle([0, 0, w, h], fill=pal["bg"])
    cx, cy = w // 2, h // 2 + 6
    rx, ry = int(w * 0.36), int(h * (0.30 + t * 0.07))
    d.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=pal["soft"])
    lung_y = cy - 8 + int(t * 14)
    lung_h = int(ry * (0.70 - t * 0.10))
    lx = int(rx * 0.36)
    d.ellipse([cx - int(rx * 0.78), lung_y - lung_h, cx - int(rx * 0.08), lung_y + lung_h], fill=pal["lung"])
    d.ellipse([cx + int(rx * 0.08), lung_y - lung_h, cx + int(rx * 0.78), lung_y + lung_h], fill=pal["lung"])
    d.rectangle([cx - 9, cy + int(ry * 0.42), cx + 9, cy + int(ry * 0.62)], fill=pal["bone"])
    d.rectangle([cx - 5, cy - 4, cx + 5, cy + int(ry * 0.42)], fill=pal["bone"])
    if 0.35 < t < 0.75:
        hx, hy = int(rx * 0.22), int(ry * 0.22)
        d.ellipse([cx - hx, cy + 4, cx + hx, cy + 4 + hy * 2], fill=pal["heart"])
    if overlay and has_mass(t):
        mx, my = cx - int(rx * 0.30), cy - int(ry * 0.22)
        d.ellipse([mx - 16, my - 12, mx + 16, my + 12], fill=pal["mass"])
        d.ellipse([mx - 7, my - 18, mx + 5, my - 6], fill=pal["mass"])


def panel(i: int, win: str, overlay: bool, size=(420, 280)) -> Image.Image:
    pal = WINDOWS[win]
    im = Image.new("RGB", size, pal["bg"])
    draw_axial(im, i, pal, overlay)
    d = ImageDraw.Draw(im)
    tag = pal["label"] + ("  ·  SUPERIMPOSE" if overlay else "  ·  NORMAL")
    d.rectangle([0, 0, size[0], 22], fill=(0, 0, 0))
    d.text((8, 4), tag, fill=(230, 230, 230), font=FONT_SM)
    return im


def composite(i: int) -> Image.Image:
    W, H = 1260, 860
    page = Image.new("RGB", (W, H), (8, 10, 14))
    d = ImageDraw.Draw(page)
    t, station, anatomy, look = band(i)
    d.text((16, 8), f"{TITLE}   ·   SLICE {i+1:03d} / {N}   ·   {station}", fill=(255, 255, 255), font=FONT)
    d.text((16, 26), "Split screen: NORMAL (left)  |  PATHOLOGY SUPERIMPOSED (right)   ·  Teaching schematic, not source DICOM", fill=(160, 170, 180), font=FONT_SM)
    coords = [
        ("lung", False, 12, 48), ("lung", True, 430, 48),
        ("med", False, 12, 330), ("med", True, 430, 330),
        ("bone", False, 848, 48), ("bone", True, 848, 330),
    ]
    for win, ov, x, y in coords:
        page.paste(panel(i, win, ov, (400, 270)), (x, y))
    d.rectangle([12, 612, W - 12, H - 12], outline=(60, 70, 82))
    mass = "RUL spiculated mass present — measure on lung, stage on mediastinum, check chest wall." if has_mass(t) else "No mass mapped on this slice. Still search lungs, mediastinum, bone, and devices."
    text = (
        f"Anatomy expanded: {anatomy}\n"
        f"Search pattern: {look}\n"
        f"{mass}\n"
        "Windows: lung (−500/1500) for parenchyma and the mass edge; mediastinum (40/400) for nodes, vessels, heart; "
        "bone (300/1500) for vertebrae, ribs, and chest-wall invasion. Superimpose = normal anatomy with the teaching lesion drawn on."
    )
    y = 622
    for line in wrap(text, 118):
        d.text((22, y), line, fill=(220, 224, 230), font=FONT_SM)
        y += 18
        if y > H - 24:
            break
    return page


def wrap(text: str, width: int) -> list[str]:
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if len(trial) > width:
            if cur:
                lines.append(cur)
            cur = w
        else:
            cur = trial
    if cur:
        lines.append(cur)
    return lines


def jpeg_bytes(im: Image.Image) -> bytes:
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=72, optimize=True)
    return buf.getvalue()


def main() -> None:
    pdf = FPDF(orientation="L", unit="mm", format="A4")
    pdf.set_auto_page_break(False)
    pdf.set_title(TITLE)
    pdf.set_author("NucMed Board Studio · teaching schematic")
    cover = Image.new("RGB", (1260, 860), (10, 16, 28))
    d = ImageDraw.Draw(cover)
    d.text((40, 70), TITLE, fill=(255, 255, 255), font=FONT_LG)
    d.text((40, 120), "134 axial chest-CT teaching slices  ·  slow-dictation transcript", fill=(180, 200, 220), font=FONT)
    d.text((40, 170), "Each page: split-screen NORMAL | SUPERIMPOSED pathology", fill=(220, 220, 220), font=FONT)
    d.text((40, 200), "Three windows: lung (−500/1500), mediastinum (40/400), bone (300/1500)", fill=(220, 220, 220), font=FONT)
    d.text((40, 250), "Schematic atlas for Board Studio cine. Not the TCIA DICOM pixels.", fill=(160, 160, 160), font=FONT_SM)
    d.text((40, 290), "Education only. Does not replace supervised case review.", fill=(160, 160, 160), font=FONT_SM)
    pdf.add_page()
    pdf.image(io.BytesIO(jpeg_bytes(cover)), x=8, y=8, w=281)
    for i in range(N):
        pdf.add_page()
        pdf.image(io.BytesIO(jpeg_bytes(composite(i))), x=8, y=8, w=281)
        if i % 20 == 0:
            print("slice", i + 1, flush=True)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(OUT)
    print("wrote", OUT, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    main()
