#!/usr/bin/env python3
"""
Fetches the Ilumina Communications press Google Sheet (published as CSV),
enriches each entry with og:image and og:title, and writes data/press.json.

Columns expected: Client, Outlet, Article
Set PRESS_SHEET_URL as a GitHub Actions secret.

OG data is cached per URL — existing values are preserved unless the URL changes.
"""

import csv, html, json, os, re, sys, time, urllib.request

SHEET_URL = os.environ.get("PRESS_SHEET_URL")
OUT_PATH  = os.path.join(os.path.dirname(__file__), "..", "data", "press.json")

if not SHEET_URL:
    print("ERROR: PRESS_SHEET_URL is not set.", file=sys.stderr)
    sys.exit(1)

# ── Fetch sheet ──────────────────────────────────────────────────────────────
try:
    with urllib.request.urlopen(SHEET_URL) as r:
        raw = r.read().decode("utf-8")
except Exception as e:
    print(f"ERROR fetching sheet: {e}", file=sys.stderr)
    sys.exit(1)

sheet_rows = [row for row in csv.DictReader(raw.splitlines()) if any(row.values())]

# ── Load existing OG cache ───────────────────────────────────────────────────
og_cache = {}
if os.path.exists(OUT_PATH):
    try:
        for entry in json.load(open(OUT_PATH)):
            url = (entry.get("Article") or "").strip()
            if url and (entry.get("og_image") or entry.get("og_title")):
                og_cache[url] = {
                    "og_image": entry.get("og_image", ""),
                    "og_title": entry.get("og_title", ""),
                }
    except Exception:
        pass

# ── OG scraper ───────────────────────────────────────────────────────────────
def fetch_og(url):
    try:
        req = urllib.request.Request(url, headers={
            "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
        })
        with urllib.request.urlopen(req, timeout=8) as r:
            raw = r.read(80000).decode("utf-8", errors="ignore")
    except Exception:
        return "", ""

    og = {}
    for m in re.finditer(
        r'<meta\s+(?:property=["\']og:(image|title)["\'][^>]*content=["\']([^"\']+)["\']'
        r'|content=["\']([^"\']+)["\'][^>]*property=["\']og:(image|title)["\'])',
        raw, re.IGNORECASE
    ):
        prop = (m.group(1) or m.group(4) or "").lower()
        val  = html.unescape(m.group(2) or m.group(3) or "")
        if prop not in og:
            og[prop] = val

    if "title" not in og:
        m = re.search(r"<title[^>]*>(.*?)</title>", raw, re.IGNORECASE | re.DOTALL)
        if m:
            og["title"] = html.unescape(m.group(1).strip())

    return og.get("image", ""), og.get("title", "")

# ── Enrich rows ──────────────────────────────────────────────────────────────
output = []
for row in sheet_rows:
    url = (row.get("Article") or row.get("Article URL") or "").strip()
    if url in og_cache:
        row.update(og_cache[url])
    elif url:
        img, title = fetch_og(url)
        row["og_image"] = img
        row["og_title"] = title
        print(f"  fetched OG for: {(row.get('Outlet') or '').strip()}")
        time.sleep(0.3)
    else:
        row["og_image"] = ""
        row["og_title"] = ""
    output.append(row)

with open(OUT_PATH, "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Wrote {len(output)} entries to data/press.json")
