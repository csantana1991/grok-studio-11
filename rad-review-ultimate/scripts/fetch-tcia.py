"""One JPEG per public TCIA series. Lung window for CT. Not a full DICOM download."""

from __future__ import annotations

import json
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from io import BytesIO
from pathlib import Path

import numpy as np
import pydicom
from PIL import Image

ROOT = Path("/tmp/grok11/public/meta-image/tcia")
API = "https://services.cancerimagingarchive.net/nbia-api/services/v1/"
WORKERS = 8


def get_json(url: str):
    with urllib.request.urlopen(url, timeout=60) as res:
        raw = res.read()
    if not raw:
        return []
    return json.loads(raw)


def series(collection: str, modality: str) -> list[dict]:
    q = urllib.parse.urlencode({"Collection": collection, "Modality": modality})
    data = get_json(API + "getSeries?" + q)
    return data if isinstance(data, list) else []


def middle_sop(series_uid: str) -> str:
    rows = get_json(API + "getSOPInstanceUIDs?SeriesInstanceUID=" + urllib.parse.quote(series_uid))
    if not rows:
        raise RuntimeError("no sop")
    row = rows[len(rows) // 2]
    return row["SOPInstanceUID"] if isinstance(row, dict) else row


def fetch_dicom(series_uid: str, sop: str) -> bytes:
    q = urllib.parse.urlencode({"SeriesInstanceUID": series_uid, "SOPInstanceUID": sop})
    with urllib.request.urlopen(API + "getSingleImage?" + q, timeout=90) as res:
        return res.read()


def to_jpeg(data: bytes, kind: str, path: Path) -> None:
    ds = pydicom.dcmread(BytesIO(data), force=True)
    arr = ds.pixel_array
    if getattr(arr, "ndim", 0) == 3:
        arr = arr[arr.shape[0] // 2]
    hu = arr.astype(np.float32) * float(getattr(ds, "RescaleSlope", 1) or 1)
    hu += float(getattr(ds, "RescaleIntercept", 0) or 0)
    if kind == "ct":
        lo, hi = -1350.0, 150.0
    else:
        lo, hi = np.percentile(hu, [0.5, 99.5])
        if hi <= lo:
            hi = lo + 1
    img = np.clip((hu - lo) / (hi - lo), 0, 1)
    if getattr(ds, "PhotometricInterpretation", "") == "MONOCHROME1":
        img = 1 - img
    im = Image.fromarray((img * 255).astype(np.uint8))
    im.thumbnail((512, 512))
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "JPEG", quality=70, optimize=True)


def safe(name: str) -> str:
    return "".join(ch if ch.isalnum() or ch in "-_" else "-" for ch in name)


def one_per_patient(rows: list[dict], prefer) -> list[dict]:
    best: dict[str, dict] = {}
    for row in rows:
        pid = row["PatientID"]
        if pid not in best or prefer(row) < prefer(best[pid]):
            best[pid] = row
    return [best[pid] for pid in sorted(best)]


def jobs() -> list[dict]:
    out = []
    lidc = series("LIDC-IDRI", "CT")
    lidc.sort(key=lambda r: (r["PatientID"], -(r.get("ImageCount") or 0)))
    seen: dict[str, int] = {}
    for row in lidc:
        n = seen.get(row["PatientID"], 0) + 1
        seen[row["PatientID"]] = n
        stem = safe(row["PatientID"]) + ("" if n == 1 else f"-{n}")
        out.append(
            {
                "kind": "ct",
                "anatomy": "chest",
                "uid": row["SeriesInstanceUID"],
                "file": f"ct/{stem}.jpg",
                "shows": f"Axial chest CT, lung window. {row['PatientID']}. LIDC-IDRI.",
                "license": "CC BY 3.0",
                "credit": "LIDC-IDRI, The Cancer Imaging Archive. CC BY 3.0.",
                "page": "https://www.cancerimagingarchive.net/collection/lidc-idri/",
            }
        )

    pet = [r for r in series("FDG-PET-CT-Lesions", "PT") if (r.get("BodyPartExamined") or "") == "WHOLEBODY"]
    pet = one_per_patient(pet, lambda r: -(r.get("ImageCount") or 0))
    for row in pet:
        out.append(
            {
                "kind": "pet",
                "anatomy": "whole body",
                "uid": row["SeriesInstanceUID"],
                "file": f"pet/{safe(row['PatientID'])}.jpg",
                "shows": f"FDG PET, one slice from a whole-body series. {row['PatientID']}. FDG-PET-CT-Lesions.",
                "license": "CC BY 4.0",
                "credit": "FDG-PET-CT-Lesions, The Cancer Imaging Archive. CC BY 4.0.",
                "page": "https://www.cancerimagingarchive.net/collection/fdg-pet-ct-lesions/",
            }
        )

    import re

    bad = re.compile(r"diff|adc|\bfa\b|trace|perf|dsc|dwi|localizer|scout", re.I)
    good = re.compile(r"flair|t1|t2", re.I)

    def mri_rank(row: dict):
        desc = (row.get("SeriesDescription") or "") + " " + (row.get("ProtocolName") or "")
        if bad.search(desc) or not good.search(desc) or (row.get("ImageCount") or 0) < 12:
            return (9, 0)
        if re.search(r"flair", desc, re.I):
            tier = 0
        elif re.search(r"t1", desc, re.I):
            tier = 1
        else:
            tier = 2
        return (tier, -(row.get("ImageCount") or 0))

    mr = [r for r in series("UPENN-GBM", "MR") if mri_rank(r)[0] < 9]
    mr = one_per_patient(mr, mri_rank)
    for row in mr:
        desc = (row.get("SeriesDescription") or "Brain MRI").split(":")[0].strip()
        out.append(
            {
                "kind": "mri",
                "anatomy": "brain",
                "uid": row["SeriesInstanceUID"],
                "file": f"mri/{safe(row['PatientID'])}.jpg",
                "shows": f"{desc}. {row['PatientID']}. UPENN-GBM brain MRI.",
                "license": "CC BY 4.0",
                "credit": "UPENN-GBM, The Cancer Imaging Archive. CC BY 4.0.",
                "page": "https://www.cancerimagingarchive.net/collection/upenn-gbm/",
            }
        )
    return out


def run_one(job: dict) -> dict | None:
    try:
        sop = middle_sop(job["uid"])
        data = fetch_dicom(job["uid"], sop)
        to_jpeg(data, job["kind"], ROOT / job["file"])
        return job
    except Exception as exc:
        print("skip", job["file"], type(exc).__name__, str(exc)[:120], flush=True)
        return None


def main() -> None:
    planned = jobs()
    print("planned", len(planned), {k: sum(1 for j in planned if j["kind"] == k) for k in ("ct", "pet", "mri")}, flush=True)
    done = []
    with ThreadPoolExecutor(WORKERS) as pool:
        futs = [pool.submit(run_one, job) for job in planned]
        for i, fut in enumerate(as_completed(futs), 1):
            row = fut.result()
            if row:
                done.append(row)
            if i % 50 == 0 or i == len(futs):
                print("progress", i, "/", len(futs), "kept", len(done), flush=True)
    catalog = [
        {
            "src": "tcia/" + row["file"],
            "modality": row["kind"],
            "anatomy": row["anatomy"],
            "shows": row["shows"],
            "license": row["license"],
            "credit": row["credit"],
            "page": row["page"],
        }
        for row in sorted(done, key=lambda r: r["file"])
    ]
    (ROOT / "catalog.json").write_text(json.dumps(catalog, separators=(",", ":")))
    ts = Path("/tmp/grok11/rad-review-ultimate/src/data/tciaCatalog.ts")
    lines = [
        "export type TciaRow = { src: string; modality: 'ct' | 'mri' | 'pet'; anatomy: string; shows: string; license: string; credit: string; page: string }",
        "export const TCIA: TciaRow[] = " + json.dumps([{**row, "src": "/meta-image/" + row["src"]} for row in catalog], indent=2),
        "",
    ]
    ts.write_text("\n".join(lines))
    print("wrote", len(catalog), flush=True)


if __name__ == "__main__":
    main()
