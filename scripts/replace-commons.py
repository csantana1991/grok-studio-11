#!/usr/bin/env python3
import json, re, urllib.parse, urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor

UA = {"User-Agent": "BoardStudioTeaching/1.0 (educational catalog; license-filtered)"}
CLINICAL = re.compile(
    r"\b(scintigraph|spect\b|fdg|fluorodeoxyglucose|radiograph|x-?ray|mammogra|ultrasound|sonograph|angiogra|bone scan|positron emission tomography|computed tomography|magnetic resonance|\bmri\b|nuclear medicine|pet[- /]?ct|ga-68|tc-99|technetium|lymphoma|metastasis|metastases)\b",
    re.I,
)
JUNK = re.compile(
    r"\b(bottle|hamster|mouse|rooster|rabbit|bird|shop|commodore|cemetery|bunara|miyav|rat\b|navy|scanner|detektor|detector|schema|pet art|pet station)\b",
    re.I,
)

def allows(license_):
    s = re.sub(r"\s+", " ", (license_ or "").lower().replace("_", " ")).strip()
    if not s or re.search(r"non-?commercial|\bnc\b|all rights reserved", s):
        return False
    if re.search(r"public domain|\bcc0\b|\bcc zero\b", s) or "creative commons attribution" in s:
        return True
    return bool(re.match(r"^cc by( ?-?(sa|nd))?( \d(\.\d)?)?$", s) or s == "cc by" or s.startswith("cc by "))

def image_ok(url):
    try:
        req = urllib.request.Request(url, headers={**UA, "Range": "bytes=0-32"})
        with urllib.request.urlopen(req, timeout=8) as res:
            ctype = res.headers.get("content-type") or ""
            body = res.read(20)
        return ctype.startswith("image/") and (body[:3] == b"\xff\xd8\xff" or body[:8] == b"\x89PNG\r\n\x1a\n" or body[:4] == b"RIFF")
    except Exception:
        return False

def good_title(title):
    return bool(CLINICAL.search(title)) and not JUNK.search(title)

def main():
    records = json.load(open("/workspace/public/library/records.json"))
    fresh = json.load(open("/workspace/public/library/display-images.json"))
    drop_urls = {r["imageUrl"] for r in fresh if r["source"] == "commons" and not good_title(r["title"])}
    print("dropped", len(drop_urls), flush=True)
    fresh = [r for r in fresh if r.get("imageUrl") not in drop_urls]
    records = [r for r in records if r.get("imageUrl") not in drop_urls]
    have = {r.get("imageUrl") for r in records if r.get("imageUrl")}
    need = 100 - sum(1 for r in fresh if r["source"] == "commons")
    print("commons kept", 100 - len(drop_urls), "need", need, flush=True)
    queries = [
        "scintigraphy", "SPECT bone scan", "chest radiograph", "mammogram x-ray",
        "thyroid ultrasound", "FDG PET CT", "positron emission tomography brain",
        "computed tomography abdomen", "magnetic resonance brain MRI", "technetium scan",
    ]
    added = []
    for q in queries:
        if len(added) >= need:
            break
        for offset in (0, 50, 100):
            if len(added) >= need:
                break
            url = (
                "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="
                + urllib.parse.quote(q + " filetype:bitmap")
                + f"&gsrnamespace=6&gsrlimit=50&gsroffset={offset}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=640&format=json"
            )
            try:
                data = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=25))
            except Exception as exc:
                print("fail", q, exc, flush=True)
                continue
            batch = []
            for page in ((data.get("query") or {}).get("pages") or {}).values():
                info = (page.get("imageinfo") or [{}])[0]
                title = str(page.get("title") or "").removeprefix("File:")
                if not good_title(title):
                    continue
                meta = info.get("extmetadata") or {}
                lic = re.sub(r"<[^>]+>", "", str((meta.get("LicenseShortName") or {}).get("value") or ""))
                thumb = str(info.get("thumburl") or "")
                page_url = str(info.get("descriptionurl") or "")
                if not allows(lic) or not thumb or not page_url or thumb in have:
                    continue
                credit = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", str((meta.get("Artist") or meta.get("Credit") or {}).get("value") or "Wikimedia Commons"))).strip()
                batch.append({
                    "id": "commons:" + title[:140],
                    "source": "commons",
                    "sourceName": "Wikimedia Commons",
                    "kind": "image",
                    "title": title[:180],
                    "caption": title[:180],
                    "pageUrl": page_url,
                    "imageUrl": thumb,
                    "license": lic.strip(),
                    "attribution": credit[:240],
                    "permittedUse": "display",
                    "loadStatus": "verified",
                    "diagnosis": None,
                })
            if not batch:
                print("commons", q, offset, "candidates 0", "added", len(added), flush=True)
                continue
            with ThreadPoolExecutor(max_workers=12) as pool:
                flags = list(pool.map(image_ok, [r["imageUrl"] for r in batch]))
            for row, ok in zip(batch, flags):
                if ok and row["imageUrl"] not in have and len(added) < need:
                    have.add(row["imageUrl"])
                    added.append(row)
            print("commons", q, offset, "added", len(added), "/", need, flush=True)
    fresh.extend(added)
    records.extend(added)
    json.dump(records, open("/workspace/public/library/records.json", "w"))
    json.dump(fresh, open("/workspace/public/library/display-images.json", "w"))
    imgs = [r for r in records if r.get("kind") == "image" and r.get("loadStatus") == "verified" and r.get("imageUrl")]
    by = Counter(r["source"] for r in imgs)
    status = json.load(open("/workspace/public/library/status.json"))
    status["usableImages"] = len(imgs)
    status["gap"] = 33000 - len(imgs)
    status["counts"]["images"] = len(imgs)
    status["totals"]["usable"] = len(imgs)
    status["audit"]["usableImages"] = len(imgs)
    status["audit"]["shortfall"] = status["gap"]
    for src in status["sources"]:
        if src["id"] in by:
            src["usable"] = by[src["id"]]
            if src["id"] == "commons":
                src["imported"] = by[src["id"]]
    json.dump(status, open("/workspace/public/library/status.json", "w"), indent=2)
    print("LEDGER", len(imgs), dict(by), flush=True)

if __name__ == "__main__":
    main()
