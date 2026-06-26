# Ilumina Communications — Website Project

## Overview
3-page bilingual (EN/ES) static website for Ilumina Communications, a strategic communications consultancy. Hosted on GitHub Pages. No build step — pure HTML, CSS, and JavaScript.

**Live URL:** https://ramonzamora89.github.io/ilumina-website/  
**GitHub repo:** https://github.com/ramonzamora89/ilumina-website  

---

## Pages
| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, Who We Are, Services |
| Team | `team.html` | 5 team member profiles |
| Press | `press.html` | 54+ press entries, grouped by client |

---

## Tech Stack
- **HTML/CSS/JS** — no framework, no build step
- **Fonts** — DM Serif Display (headings) + Open Sans (body) via Google Fonts
- **Hosting** — GitHub Pages (branch: `main`, root `/`)
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

### Updating press data
1. Add rows to the Google Sheet (columns: `Client` · `Outlet` · `Article`)
2. The GitHub Actions workflow runs automatically every morning at 8am EST
3. It fetches the sheet as CSV, scrapes `og:image` + `og:title` for new URLs, and commits the updated `press.json`
4. To trigger manually: GitHub repo → Actions → "Update Press Data" → Run workflow

### Google Sheet setup
- Published CSV URL is stored as GitHub secret: `PRESS_SHEET_URL`
- Sheet columns must be: `Client`, `Outlet`, `Article`
- OG data is cached per URL — existing entries are not re-fetched unless the URL changes

### Notes on OG image coverage
Paywalled outlets (NYT, FT, Bloomberg, Economist, WaPo) block scraping — their cards show a styled placeholder with the outlet name instead of an image. To add images for these manually, add an `og_image` column to the Google Sheet with the image URL for that row.

---

## Contact & Links
- **Email (footer/CTA):** iluminacommunications@gmail.com
- **LinkedIn (footer):** https://www.linkedin.com/company/ilumina-communications ← confirm this URL
- **CTA button:** "Get in touch" / "Ponete en contacto" → opens mailto

---

## Pending / Future Work
- [ ] Confirm LinkedIn company URL
- [ ] Human review of all Spanish translations (in `js/main.js` → `T.es`)
- [ ] Add custom domain (e.g. iluminacommunications.com) — add CNAME file to repo root
- [ ] Add `og_image` column to Google Sheet for paywalled articles if desired
- [ ] Update `actions/checkout@v4` → `@v5` in `.github/workflows/update-press.yml` (minor, removes a deprecation warning)

---

## Changelog

### 2026-06-26 — Initial launch
- Built 3-page site from scratch using content from `Home.docx`, `short_bios.xlsx`, `Press.xlsx`
- Implemented bilingual EN/ES toggle with full translations
- Set up GitHub Pages hosting at ramonzamora89.github.io/ilumina-website
- Set up Google Sheets → GitHub Actions → press.json pipeline
- Scraped OG image + title for 21/54 press entries (rest are paywalled)
- Hero: 2-column layout with animated rotating sun SVG + CTA button
- Team page: vertical list layout with round profile photos and full bios with Excel links
- Press page: visual card grid (image, title, outlet) grouped by client
- Nav background set to `#f4f6f7` to match logo background seamlessly
