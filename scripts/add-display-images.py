#!/usr/bin/env python3
"""Add verified displayable images from Commons and Europe PMC. No other source is copied."""
import json, re, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone

UA = {"User-Agent": "BoardStudioTeaching/1.0 (educational catalog; license-filtered)"}
JUNK = re.compile(r"\b(cygnus|galaxy|nebula|telescope|astro|boeing|aircraft|flag|skyline|parrot|bird|snake|lizard)\b", re.I)
MED = re.compile(r"\b(pet|ct\b|mri|scan|scint|radio|x-?ray|tomo|ultra|mammo|bone|thyroid|lung|brain|liver|heart|chest|abdomen|fracture|tumor|cancer|spect|fdg|axial|coronal|sagittal|nuclear|angi|contrast|radiograph)\b", re.I)

def log(*args):
    print(*args, flush=True)

def allows(license_):
    s = re.sub(r"\s+", " ", (license_ or "").lower().replace("_", " ")).strip()
    if not s or re.search(r"non-?commercial|\bnc\b|all rights reserved|unspecified|not stated", s):
        return False
    if re.search(r"public domain|\bcc0\b|\bcc zero\b", s):
        return True
    if "creative commons attribution" in s:
        return True
    if re.match(r"^cc by( ?-?(sa|nd))?( \d(\.\d)?)?$", s) or s == "cc by" or s.startswith("cc by "):
        return True
    return False

def fetch(url, timeout=18):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as res:
        return res.headers.get("content-type") or "", res.read()

def image_ok(url):
    try:
        req = urllib.request.Request(url, headers={**UA, "Range": "bytes=0-32"})
        with urllib.request.urlopen(req, timeout=8) as res:
            ctype = res.headers.get("content-type") or ""
            body = res.read(40)
        if not ctype.startswith("image/"):
            return False
        return body[:3] == b"\xff\xd8\xff" or body[:8] == b"\x89PNG\r\n\x1a\n" or body[:4] == b"RIFF" or body[:6] in (b"GIF87a", b"GIF89a")
    except Exception:
        return False

def keep_verified(rows, need, have):
    pending = [r for r in rows if r["imageUrl"] not in have]
    if not pending:
        return []
    with ThreadPoolExecutor(max_workers=16) as pool:
        flags = list(pool.map(image_ok, [r["imageUrl"] for r in pending]))
    kept = []
    for row, ok in zip(pending, flags):
        if ok and row["imageUrl"] not in have:
            have.add(row["imageUrl"])
            kept.append(row)
            if len(kept) >= need:
                break
    return kept

def modality(text):
    t = text.lower()
    if re.search(r"\b(pet|fdg|spect|scint)\b", t):
        return "NM"
    if re.search(r"\bmri|magnetic resonance\b", t):
        return "MR"
    if re.search(r"\b(ct|computed tomography|tomo)\b", t):
        return "CT"
    if re.search(r"\b(x-?ray|radiograph|mamm)\b", t):
        return "DX"
    if "ultra" in t:
        return "US"
    return ""

def commons(need, have):
    queries = [
        "PET scan nuclear medicine", "SPECT scintigraphy", "chest radiograph", "CT scan abdomen",
        "MRI brain", "bone scan", "mammogram", "thyroid ultrasound", "angiogram radiograph", "FDG PET CT",
    ]
    out = []
    for q in queries:
        if len(out) >= need:
            break
        for offset in (0, 50, 100):
            if len(out) >= need:
                break
            url = (
                "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="
                + urllib.parse.quote(q + " filetype:bitmap")
                + f"&gsrnamespace=6&gsrlimit=50&gsroffset={offset}&prop=imageinfo&iiprop=url|mime|extmetadata&iiurlwidth=640&format=json"
            )
            try:
                _, body = fetch(url, timeout=25)
                pages = ((json.loads(body.decode("utf-8", "replace")).get("query") or {}).get("pages")) or {}
            except Exception as exc:
                log("commons fail", q, offset, exc)
                continue
            batch = []
            for page in pages.values():
                info = (page.get("imageinfo") or [{}])[0]
                title = str(page.get("title") or "").removeprefix("File:")
                if JUNK.search(title) or not MED.search(title):
                    continue
                meta = info.get("extmetadata") or {}
                lic = re.sub(r"<[^>]+>", "", str((meta.get("LicenseShortName") or {}).get("value") or ""))
                thumb = str(info.get("thumburl") or "")
                page_url = str(info.get("descriptionurl") or "")
                if not allows(lic) or not thumb or not page_url:
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
                    "modality": modality(title),
                    "diagnosis": None,
                })
            got = keep_verified(batch, need - len(out), have)
            out.extend(got)
            log("commons", q, offset, "kept", len(out))
    return out

def pmc_figures(paper):
    pmcid = str(paper.get("pmcid") or "")
    lic = str(paper.get("license") or "")
    title = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", str(paper.get("title") or ""))).strip()
    if not pmcid or not allows(lic) or not title:
        return []
    try:
        _, xmlb = fetch("https://www.ebi.ac.uk/europepmc/webservices/rest/" + pmcid + "/fullTextXML", timeout=18)
        xml = xmlb.decode("utf-8", "replace")
    except Exception:
        return []
    rows = []
    for path in re.findall(r"cloudpmc-path (blobs/[^ ?<]+\.(?:webp|jpe?g|png|gif))", xml, re.I):
        if not path.lower().endswith((".webp", ".jpg", ".jpeg", ".png")):
            continue
        fig = "https://cdn.ncbi.nlm.nih.gov/pmc/" + path
        rows.append({
            "id": "pmc:" + pmcid + ":" + path.split("/")[-1][:80],
            "source": "pmc",
            "sourceName": "PubMed Central via Europe PMC",
            "kind": "image",
            "title": title[:180],
            "caption": title[:180],
            "pageUrl": "https://europepmc.org/articles/" + pmcid,
            "imageUrl": fig,
            "license": lic.strip(),
            "attribution": ", ".join(str(paper.get(k) or "") for k in ("authorString", "journalTitle", "pubYear") if paper.get(k))[:240],
            "permittedUse": "display",
            "loadStatus": "verified",
            "modality": modality(title),
            "diagnosis": None,
            "identifiers": {"pmcid": pmcid},
        })
        if len(rows) >= 4:
            break
    return rows

def europe_pmc(need, have):
    queries = [
        'OPEN_ACCESS:Y HAS_FT:Y (LICENSE:"cc by" OR LICENSE:"cc by-sa" OR LICENSE:"cc by-nd" OR LICENSE:"cc0") AND (scintigraphy OR SPECT OR "positron emission" OR "bone scan")',
        'OPEN_ACCESS:Y HAS_FT:Y (LICENSE:"cc by" OR LICENSE:"cc by-sa" OR LICENSE:"cc0") AND ("computed tomography" OR "magnetic resonance" OR radiograph) AND (brain OR chest OR abdomen OR thyroid)',
        'OPEN_ACCESS:Y HAS_FT:Y (LICENSE:"cc by" OR LICENSE:"cc by-sa" OR LICENSE:"cc0") AND (mammogra* OR ultrasound OR angiogra*)',
    ]
    out = []
    for q in queries:
        if len(out) >= need:
            break
        cursor = "*"
        for page_no in range(8):
            if len(out) >= need:
                break
            url = (
                "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query="
                + urllib.parse.quote(q)
                + "&resultType=core&pageSize=25&format=json&cursorMark="
                + urllib.parse.quote(cursor)
            )
            try:
                _, body = fetch(url, timeout=25)
                data = json.loads(body.decode("utf-8", "replace"))
            except Exception as exc:
                log("pmc search fail", exc)
                break
            papers = ((data.get("resultList") or {}).get("result")) or []
            with ThreadPoolExecutor(max_workers=8) as pool:
                groups = list(pool.map(pmc_figures, papers))
            batch = [row for group in groups for row in group]
            got = keep_verified(batch, need - len(out), have)
            out.extend(got)
            log("pmc", page_no, "kept", len(out))
            next_cursor = data.get("nextCursorMark") or ""
            if not next_cursor or next_cursor == cursor or not papers:
                break
            cursor = next_cursor
    return out

def main():
    records = json.load(open("/workspace/public/library/records.json"))
    have = {r.get("imageUrl") for r in records if r.get("imageUrl")}
    commons_rows = commons(100, have)
    pmc_rows = europe_pmc(100, have)
    fresh = commons_rows + pmc_rows
    records.extend(fresh)
    json.dump(records, open("/workspace/public/library/records.json", "w"))
    json.dump(fresh, open("/workspace/public/library/display-images.json", "w"))
    status = json.load(open("/workspace/public/library/status.json"))
    added_pmc = sum(1 for r in fresh if r["source"] == "pmc")
    added_commons = sum(1 for r in fresh if r["source"] == "commons")
    status["usableImages"] = sum(1 for r in records if r.get("kind") == "image" and r.get("loadStatus") == "verified" and r.get("imageUrl"))
    status["gap"] = 33000 - status["usableImages"]
    status["verifiedAt"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    status["counts"]["images"] = status["usableImages"]
    status["totals"]["usable"] = status["usableImages"]
    status["totals"]["imported"] = status.get("totals", {}).get("imported", 0) + len(fresh)
    status["audit"]["usableImages"] = status["usableImages"]
    status["audit"]["shortfall"] = status["gap"]
    status["audit"]["completion"] = False
    for src in status["sources"]:
        if src["id"] == "pmc":
            src["imported"] = src.get("imported", 0) + added_pmc
            src["usable"] = src.get("usable", 0) + added_pmc
    if not any(s.get("id") == "commons" for s in status["sources"]):
        status["sources"].append({
            "id": "commons",
            "name": "Wikimedia Commons",
            "href": "https://commons.wikimedia.org/w/api.php",
            "imported": added_commons,
            "skipped": 0,
            "duplicate": 0,
            "restricted": 0,
            "failed": 0,
            "pending": 0,
            "usable": added_commons,
            "access": "MediaWiki imageinfo API. LicenseShortName checked per file.",
            "licenseSummary": "Only CC BY, CC BY-SA, CC BY-ND, CC0, and public domain. NC excluded.",
            "note": "Each thumbnail was checked and returned an image. These are references, not case matches.",
        })
    json.dump(status, open("/workspace/public/library/status.json", "w"), indent=2)
    log("ADDED", len(fresh), "commons", added_commons, "pmc", added_pmc, "usable", status["usableImages"])

if __name__ == "__main__":
    main()
