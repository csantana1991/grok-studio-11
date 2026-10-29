#!/usr/bin/env python3
"""Check local teaching assets and the RAD REVIEW figure index.

The 33,000 encounters are generated in the browser. This script audits the
files and the figure index those encounters actually point at.
"""
import json
import os
import re
import struct
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PUBLIC = os.path.join(ROOT, "public")
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".mp4", ".pdf"}


def jpeg_ok(f):
    head = f.read(2)
    if head != b"\xff\xd8":
        return False
    f.seek(2)
    while True:
        b = f.read(1)
        if not b:
            return False
        if b != b"\xff":
            continue
        while b == b"\xff":
            b = f.read(1)
            if not b:
                return False
        marker = b[0]
        if marker in (0xD8, 0xD9):
            continue
        if marker == 0xDA:
            return False
        ln = f.read(2)
        if len(ln) < 2:
            return False
        seglen = struct.unpack(">H", ln)[0]
        if marker in (0xC0, 0xC1, 0xC2):
            return True
        f.seek(max(0, seglen - 2), 1)


def file_ok(path):
    size = os.path.getsize(path)
    if size == 0:
        return "zero-byte"
    ext = os.path.splitext(path)[1].lower()
    with open(path, "rb") as f:
        head = f.read(16)
        if ext in (".jpg", ".jpeg"):
            f.seek(0)
            return None if jpeg_ok(f) else "bad-jpeg"
        if ext == ".png":
            return None if head.startswith(b"\x89PNG\r\n\x1a\n") else "bad-png"
        if ext == ".webp":
            return None if head[:4] == b"RIFF" and head[8:12] == b"WEBP" else "bad-webp"
        if ext == ".mp4":
            return None if b"ftyp" in head or head[4:8] == b"moov" else "bad-mp4"
        if ext == ".pdf":
            return None if head.startswith(b"%PDF") else "bad-pdf"
    return None


def main():
    checked = 0
    bad = []
    for dirpath, _, files in os.walk(PUBLIC):
        for name in files:
            if os.path.splitext(name)[1].lower() not in EXTS:
                continue
            path = os.path.join(dirpath, name)
            checked += 1
            reason = file_ok(path)
            if reason:
                bad.append((reason, os.path.relpath(path, PUBLIC)))

    html_path = os.path.join(PUBLIC, "studio", "NucMed-Board-Studio.html")
    html = open(html_path, encoding="utf-8", errors="replace").read()
    refs = set(re.findall(r"/studio/assets/videos/[A-Za-z0-9_./-]+\.mp4", html))
    disk = {
        "/studio/assets/videos/" + n
        for n in os.listdir(os.path.join(PUBLIC, "studio", "assets", "videos"))
        if n.endswith(".mp4")
    }
    missing_video = sorted(refs - disk)

    index_path = os.path.join(PUBLIC, "rru", "match-index.json")
    index = json.load(open(index_path))
    urls = set()
    empty = 0
    for entry in index["entries"].values():
        results = entry.get("results") or []
        if not results:
            empty += 1
        for row in results:
            if row.get("url"):
                urls.add(row["url"])

    report = {
        "localFilesChecked": checked,
        "corruptOrEmpty": len(bad),
        "bad": bad[:20],
        "lectureVideosReferenced": len(refs),
        "lectureVideosMissing": missing_video,
        "indexedFindings": len(index["entries"]),
        "uniqueFigureUrls": len(urls),
        "findingsWithNoFigure": empty,
    }
    print(json.dumps(report, indent=2))
    return 1 if bad or missing_video else 0


if __name__ == "__main__":
    sys.exit(main())
