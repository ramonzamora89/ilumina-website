# Ilumina Communications — Website Project

## Overview
3-page bilingual (EN/ES) static website for Ilumina Communications, a strategic communications consultancy. Hosted on GitHub Pages. No build step — pure HTML, CSS, and JavaScript.

**Live URL:** https://iluminacomms.com  
**GitHub repo:** https://github.com/ramonzamora89/ilumina-website  

The old Pages URL (`ramonzamora89.github.io/ilumina-website`) 301-redirects to the custom domain, so there is only one live deployment.

---

## Pages
| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, Who We Are, Services |
| Team | `team.html` | 5 team member profiles |
| Press | `press.html` | 67 press entries, grouped by client, clients ordered by most recent article |

---

## Tech Stack
- **HTML/CSS/JS** — no framework, no build step
- **Fonts** — DM Serif Display (headings) + Open Sans (body) via Google Fonts
- **Hosting** — GitHub Pages (branch: `main`, root `/`), custom domain `iluminacomms.com` via `CNAME` in the repo root
- **Press data pipeline** — Google Sheets → GitHub Actions cron → `data/press.json`

## Design System
| Token | Value |
|---|---|
| Primary blue | `#2B3A8C` |
| Background | `#ffffff` |
| Surface / nav | `#f4f6f7` (matches logo background exactly) |
| Text | `#1A1A2E` |
| Muted | `#555566` |
| Border | `#E2E0DB` |

---

## File Structure
```
ilumina-website/
├── index.html              # Home
├── team.html               # Team
├── press.html              # Press
├── css/style.css           # All styles
├── js/main.js              # Translations (T), team data (TEAM), all renderers
├── assets/
│   ├── logo.png
│   └── team/               # 5 profile photos
├── data/press.json         # Auto-generated — DO NOT edit manually
├── scripts/fetch_press.py  # Run by GitHub Actions to update press.json
└── .github/workflows/
    └── update-press.yml    # Daily cron at 13:00 UTC (8am EST)
```

---

## Bilingual (EN/ES)
- All strings live in the `T` object in `js/main.js`
- HTML elements use `data-i18n="key.path"` (text) or `data-i18n-html="key.path"` (HTML content)
- Language preference saved to `localStorage` key `ilumina-lang`
- Toggle button switches between EN ↔ ES
- Spanish translations drafted by Claude — **should be reviewed by the team**

---

## Press Data Pipeline
The press page reads from `data/press.json` at runtime via `fetch()`.

### Client ordering (recency)
Clients are ordered automatically by their most recent article — whoever got press last appears at the top of the page. Driven by an optional `Date` column in the Google Sheet.

- **Format:** `YYYY-MM-DD` (the parser also accepts `M/D/YYYY` and `D/M/YYYY`).
- **Blank or unparseable = "legacy entry"** — it sorts to the bottom instead of breaking the order. The 54 original entries are intentionally left blank.
- **Ties** (e.g. all clients undated) fall back to `LEGACY_CLIENT_ORDER` in `js/main.js`, so the page looks exactly as curated until real dates arrive.
- A client is ranked by its **newest** article, so adding an old note never demotes it.
- Do NOT seed old entries with today's date — a genuinely new article published a few days earlier would sort *below* the seed and fail to rise. Blank is the correct value for legacy rows.

### Updating press data
1. Add rows to the Google Sheet (columns: `Client` · `Outlet` · `Article` · `Date`)
2. The GitHub Actions workflow runs automatically every morning at 8am EST
3. It fetches the sheet as CSV, scrapes `og:image` + `og:title` for new URLs, and commits the updated `press.json`
4. To trigger manually: GitHub repo → Actions → "Update Press Data" → Run workflow

### Google Sheet setup
- Published CSV URL is stored as GitHub secret: `PRESS_SHEET_URL`
- Sheet columns must be: `Client`, `Outlet`, `Article`
- OG data is cached per URL — existing entries are not re-fetched unless the URL changes

### Notes on OG image coverage
Paywalled outlets (NYT, FT, Bloomberg, Economist, WaPo) block scraping — their cards show a styled placeholder with the outlet name instead of an image.

⚠️ **Correction (2026-08-15):** earlier versions of this file claimed you could add images by simply adding an `og_image` column to the Google Sheet. **That does not work** — verified by test, 0 of 2 manual values survived a run. `fetch_press.py` unconditionally overwrites `og_image` on every row: cached URLs get clobbered by `row.update(og_cache[url])`, and uncached ones by `row["og_image"] = img` from the scrape (which writes `""` when the scrape fails).

To make the manual column work, `fetch_press.py` must preserve a non-empty value coming from the sheet — read it before the cache/scrape branch and re-apply it after:

```python
manual_img = (row.get("og_image") or "").strip()
# ... existing cache / fetch_og logic ...
if manual_img:
    row["og_image"] = manual_img   # sheet wins over cache and scrape
```

`pressCard()` in `js/main.js` already renders `og_image` when present, so no front-end change is needed.

#### Intended editorial workflow (proposed, awaiting team decision)
The idea Ilumina is considering: when an article ships without a usable photo, the person maintaining the Google Sheet picks an image, hosts it somewhere public, and pastes the link into the `og_image` column. This is editorial control over how a note is promoted on the site, not just a technical patch — worth doing properly.

Three conditions must ALL hold. As of 2026-08-15, none do:

| # | Condition | Status |
|---|---|---|
| 1 | `fetch_press.py` preserves the sheet value | ❌ Not implemented — see patch above. Nothing works without this. |
| 2 | The image is publicly readable | ⬜ Depends on where they host it |
| 3 | The URL points at the image bytes, not a viewer page | ⬜ See below |

**Hosting is irrelevant to condition 1.** The overwrite happens before the URL is ever used, so Drive / Dropbox / anywhere all fail identically. The test that proved this used ordinary external URLs.

**On Google Drive (condition 3):** the normal share link is a viewer page, not an image.

- `https://drive.google.com/file/d/FILE_ID/view?usp=sharing` → returns `text/html`. Pasted into the column it would render a broken image even after the patch.
- `https://drive.google.com/uc?export=view&id=FILE_ID` → `303` redirect to `drive.usercontent.google.com/download?...`, which is the right shape. Google has changed this route repeatedly and throttles hotlinking, so **test it with a real public file before standardising on it** — the check above used invalid file IDs and only confirms URL shape, not real-file behaviour.

**Recommended alternative:** commit the images to `assets/press/` in this repo and put a relative path (`assets/press/billboard-bresh.jpg`) in the column. Same origin, no throttling, no link rot, versioned with the site. Trade-off: uploading requires repo access, which the sheet maintainer may not have. If they don't, Drive is reasonable — just validate one real image end to end first.

**When the team decides yes:** apply the patch, then verify one real image all the way through (sheet → workflow → `press.json` → rendered card) before loading the remaining six.

---

## Contact & Links
- **Email (footer/CTA):** iluminacommunications@gmail.com
- **LinkedIn (footer):** https://www.linkedin.com/company/ilumina-communications ← confirm this URL
- **CTA button:** "Get in touch" / "Ponete en contacto" → opens mailto

---

## Pending / Future Work
- [ ] Confirm LinkedIn company URL
- [ ] Human review of all Spanish translations (in `js/main.js` → `T.es`)
- [ ] **Awaiting decision from the Ilumina team** — supply cover images manually for articles that can't be scraped, via an `og_image` column in the Google Sheet.
  - **Why it matters now:** 7 of the 13 Carabela / Bresh notes added on 2026-08-15 render the outlet-name placeholder instead of an image, and Carabela currently sits at the top of the press page, so the gap is more visible than before.
  - **Which ones:** Billboard, Billboard (Spanish), K-Jewel 99.3 FM, Dealroom.com, IQ Magazine (×2) fail consistently. Radio Facts is intermittent — it returned an image on a manual retry, and since the cron re-scrapes uncached entries daily it will likely resolve on its own. So realistically **6** need manual images.
  - **This DOES require a code change** — verified by test, see the OG image note above. Adding the column alone is not enough; `fetch_press.py` overwrites it, regardless of where the image is hosted.
  - The proposed workflow (sheet maintainer picks and hosts an image, pastes the link) plus the Drive URL caveats are written up under "Intended editorial workflow" above.
- [x] Add custom domain — **done**, `iluminacomms.com` live via `CNAME` in the repo root
- [ ] Update `actions/checkout@v4` → `@v5` in `.github/workflows/update-press.yml` (minor, removes a deprecation warning)

---

## Changelog

### 2026-08-15 — Client rename: Carroll Street Capital → Carabela
- Client renamed to `Carabela / Bresh` in the Google Sheet.
- **Gotcha found:** the client name is ALSO hardcoded in the `clientOrder` array in `js/main.js` (`renderPress()`), which controls the display order of client groups on the press page. The Sheet does not update this. A renamed client that isn't in `clientOrder` still renders, but falls to the bottom of the page. Updated to `'Carabela / Bresh'`.
- **Second gotcha:** one Sheet row had `Carabela/ Bresh` (missing space), which split the client into two separate groups on the page, since grouping matches on the exact string. Fixed in the Sheet; workflow re-triggered manually to regenerate `press.json`.
- Note: the Billboard entry's `og_title` still reads "Bresh Partners With Carroll Street Capital…" — that is the outlet's actual headline, scraped from the article. Left as is.

**Rule of thumb for future client renames:** update the Google Sheet *and* `LEGACY_CLIENT_ORDER` in `js/main.js`, then re-run the workflow manually instead of waiting for the 8am cron.

### 2026-08-15 — Dynamic client ordering by recency
- Client groups on the press page now sort by their most recent article instead of a fixed hardcoded list. See "Client ordering (recency)" above.
- Added `parsePressDate()` and replaced the `clientOrder` array with `LEGACY_CLIENT_ORDER`, now used only as a tiebreaker.
- `scripts/fetch_press.py` needed no changes — it uses `csv.DictReader` and passes the whole row through, so any new Sheet column lands in `press.json` automatically.
- **Rejected approach:** scraping publication dates from the articles. Measured coverage was only 23/54 (20 blocked by paywalls, 11 with no date metadata), and at least one date was demonstrably wrong — a Univision-era New Yorker piece reported `2024-08-17` via `og:published_time`, which would have wrongly pushed Univision News to the top. Silent failure mode, so the explicit `Date` column won.
- **Done same day:** `Date` column added to the Sheet, 13 new Carabela / Bresh notes loaded dated `2026-08-15`, workflow run. `press.json` went 54 → 67 entries and Carabela / Bresh moved to the top of the page — first real use of the recency ordering, verified against the deployed assets.
- Note: the 13 new notes were dated with the load date, not each article's real publication date. Fine for client ordering; would need real dates to sort notes *within* a client or to display a date on the card.

### 2026-08-15 — Custom domain + docs correction
- Confirmed `iluminacomms.com` is live via the `CNAME` file in the repo root; the old `ramonzamora89.github.io/ilumina-website` URL 301-redirects to it. Updated the Overview and Tech Stack sections, which still listed the old URL.
- **Corrected a long-standing documentation error** about adding images manually via an `og_image` Sheet column — it never worked, see "Notes on OG image coverage". Also documented the editorial workflow Ilumina is considering, the three conditions it needs, and why a Google Drive share link won't work as an image source.
- Reminder: GitHub Pages serves with `cache-control: max-age=600`, so after a workflow run you need a hard refresh (`Cmd+Shift+R`) for ~10 minutes to see changes. New visitors are unaffected.

### 2026-06-26 — Initial launch
- Built 3-page site from scratch using content from `Home.docx`, `short_bios.xlsx`, `Press.xlsx`
- Implemented bilingual EN/ES toggle with full translations
- Set up GitHub Pages hosting at ramonzamora89.github.io/ilumina-website
- Set up Google Sheets → GitHub Actions → press.json pipeline (daily cron at 8am EST)
- Scraped OG image + title for 21/54 press entries (rest are paywalled)
- Hero: 2-column layout with animated rotating sun SVG + CTA button (mailto:iluminacommunications@gmail.com)
- Team page: vertical list layout with round profile photos and full bios with links from Excel
- Press page: visual card grid (image, title, outlet) grouped by client
- Nav background set to `#f4f6f7` to match logo background exactly (sampled from PNG pixel)
- PROJECT.md created and committed to repo

### 2026-06-26 — Pipeline fix
- **Issue:** Google Sheet secret `PRESS_SHEET_URL` was set to the sharing URL (`/edit?usp=sharing`). The script parsed the redirect/HTML response and coincidentally wrote only 11 entries (the first Univision News block) instead of 54.
- **Fix:** URL updated to `/export?format=csv` format. Workflow re-triggered manually and confirmed `Wrote 54 entries` with no unwanted commit (data was already in sync).
- **Note for future:** The correct URL format for `PRESS_SHEET_URL` is:
  `https://docs.google.com/spreadsheets/d/SHEET_ID/export?format=csv`
  The sheet must be set to "Anyone with the link can view" for the export to work without authentication.
