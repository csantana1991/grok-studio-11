#!/usr/bin/env python3
"""Pull real open-access radiology figures from NIH Open-i (PubMed Central).

Does not scrape Radiopaedia, Eurorad, LearningRadiology, or the other
copyrighted teaching files. Those stay as outbound links.
"""
import json, re, time, urllib.parse, urllib.request
from pathlib import Path

UA = "RadReviewUltimate/1.0 (residency teaching; open-access figures only)"
API = "https://openi.nlm.nih.gov/api/search"
OUT = Path("/workspace/public/rru/oa-catalog.json")
OUT2 = Path("/workspace/rad-review-ultimate/public/oa-catalog.json")

QUERIES = [
    ("PETHYB", "FDG PET CT"),
    ("PETHYB", "PET CT lymphoma"),
    ("PETHYB", "PSMA PET prostate"),
    ("PETHYB", "DOTATATE PET"),
    ("CT", "chest CT"),
    ("CT", "abdomen CT"),
    ("CT", "head CT"),
    ("CT", "CT pulmonary embolism"),
    ("CT", "pelvis CT"),
    ("MRI", "brain MRI"),
    ("MRI", "spine MRI"),
    ("MRI", "knee MRI"),
    ("MRI", "liver MRI"),
    ("MRI", "prostate MRI"),
    ("MRI", "shoulder MRI"),
    ("US", "abdominal ultrasound"),
    ("US", "thyroid ultrasound"),
    ("US", "obstetric ultrasound"),
    ("MAMMO", "mammography"),
    ("RAD", "chest radiograph"),
    ("RAD", "fracture radiograph"),
    ("RAD", "pediatric radiograph"),
    ("RAD", "abdominal radiograph"),
    ("NUC", "bone scintigraphy"),
    ("NUC", "thyroid scintigraphy"),
    ("NUC", "SPECT CT"),
    ("NUC", "VQ scan"),
    ("CARDIAC", "myocardial perfusion SPECT"),
    ("CARDIAC", "cardiac MRI"),
    ("PEDS", "pediatric chest radiograph"),
    ("PEDS", "intussusception ultrasound"),
    ("QREADY", "computed tomography"),
    ("THERAPY", "radioiodine thyroid scan"),
    ("THERAPY", "radiation therapy planning CT"),
]

IMAGING = re.compile(
    r"\b(ct|mri|mr imaging|pet|ultrasound|sonograph|radiograph|x-ray|xray|"
    r"scintigraph|mammogra|spect|angiogra|fluoroscop|nuclear medicine)\b",
    re.I,
)
TAG = re.compile(r"<[^>]+>")
STOP = set(
    "with and the of for versus post left right bilateral mild severe acute "
    "chronic study scan imaging image showing shows new male female year old "
    "suv primary uptake disease lesion mass patient after from into over "
    "this that were was has have been being their its not but".split()
)


def strip(html: str) -> str:
    return re.sub(r"\s+", " ", TAG.sub(" ", html or "")).strip()


def tokens(text: str) -> set[str]:
    return {w for w in re.findall(r"[a-z]{4,}", text.lower()) if w not in STOP}


def get(query: str, start: int, n: int = 100) -> dict:
    url = API + "?" + urllib.parse.urlencode(
        {"query": query, "it": "x", "m": start, "n": n}
    )
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read().decode("utf-8", "replace"))


def main() -> None:
    images: list[dict] = []
    seen: set[str] = set()
    for cat, query in QUERIES:
        start = 1
        pages = 0
        while pages < 6 and len(images) < 36000:
            try:
                data = get(query, start)
            except Exception as e:
                print(f"  fail {query} @{start}: {e}", flush=True)
                time.sleep(2)
                break
            batch = data.get("list") or []
            added = 0
            for item in batch:
                rel = (item.get("imgLarge") or item.get("imgThumbLarge") or "").strip()
                if not rel or rel in seen:
                    continue
                cap = strip((item.get("image") or {}).get("caption") if isinstance(item.get("image"), dict) else "")
                title = strip(item.get("title") or "")
                blob = f"{cap} {title}"
                if not IMAGING.search(blob):
                    continue
                seen.add(rel)
                pmcid = str(item.get("pmcid") or "")
                if pmcid and not pmcid.startswith("PMC"):
                    pmcid = "PMC" + pmcid
                authors = item.get("authors") or ""
                if isinstance(authors, list):
                    authors = ", ".join(str(a) for a in authors)
                year = ""
                jd = item.get("journal_date") or {}
                if isinstance(jd, dict):
                    year = str(jd.get("year") or "")
                images.append(
                    {
                        "url": "https://openi.nlm.nih.gov" + rel,
                        "caption": (cap or title)[:400],
                        "title": title[:240],
                        "authors": str(authors)[:180],
                        "journal": str(item.get("journal_title") or item.get("journal_abbr") or "PubMed Central")[:120],
                        "year": year,
                        "pmcid": pmcid,
                        "doi": "",
                        "license": "PMC open access via Open-i",
                        "tier": "finding",
                        "relevance": 2,
                        "cats": [cat],
                        "tokens": sorted(tokens(blob))[:40],
                    }
                )
                added += 1
            print(f"{cat} {query} @{start} +{added} unique {len(images)}", flush=True)
            if len(batch) < 100:
                break
            start += 100
            pages += 1
            time.sleep(0.2)
        if len(images) >= 36000:
            break

    findings = []
    text = Path("/workspace/rad-review-ultimate/src/data/findings.ts").read_text()
    # category id sits above each pool; walk the source simply
    current = "CT"
    for line in text.splitlines():
        m = re.match(r"\s*([A-Z]+):\s*\[", line)
        if m:
            current = m.group(1)
            continue
        sm = re.search(r"'([^'\\]{8,})'", line)
        if sm:
            findings.append((current, sm.group(1)))

    by_finding: dict[str, list[int]] = {}
    for cat, finding in findings:
        need = tokens(finding)
        scored: list[tuple[int, int]] = []
        for i, img in enumerate(images):
            overlap = len(need & set(img["tokens"]))
            if cat in img["cats"]:
                overlap += 1
            if overlap >= 2:
                scored.append((overlap, i))
        scored.sort(reverse=True)
        ids = []
        seen_i = set()
        for _, i in scored:
            if i in seen_i:
                continue
            seen_i.add(i)
            ids.append(i)
            if len(ids) >= 40:
                break
        if len(ids) < 8:
            for i, img in enumerate(images):
                if cat in img["cats"] and i not in seen_i and len(need & set(img["tokens"])) >= 1:
                    ids.append(i)
                    seen_i.add(i)
                    if len(ids) >= 24:
                        break
        by_finding[finding] = ids

    covered = sum(1 for v in by_finding.values() if v)
    assigned = sum(len(v) for v in by_finding.values())
    # Drop token lists from the shipped file.
    slim = []
    for img in images:
        slim.append({k: v for k, v in img.items() if k != "tokens" and k != "cats"})
    payload = {
        "source": "https://openi.nlm.nih.gov",
        "note": "Real PubMed Central figures via NIH Open-i. Not copied from Radiopaedia or other copyrighted teaching sites.",
        "unique": len(slim),
        "findings": len(by_finding),
        "findingsWithImage": covered,
        "images": slim,
        "map": by_finding,
    }
    raw = json.dumps(payload, separators=(",", ":"))
    OUT.write_text(raw)
    OUT2.parent.mkdir(parents=True, exist_ok=True)
    OUT2.write_text(raw)
    print(f"WROTE {len(slim)} images, {covered}/{len(by_finding)} findings, slots {assigned}, bytes {len(raw)}")


if __name__ == "__main__":
    main()
