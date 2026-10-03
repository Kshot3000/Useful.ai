# Useful.ai

Static tools for the paperwork the internet explains badly. Built to rank for high-intent searches and to stay accurate.

Live (after GitHub Pages is enabled on `main` / root): https://kshot3000.github.io/Useful.ai/

## What is live
- Medical bill dispute packet — duplicate finder, paid-vs-billed math, letter draft
- 2026 federal take-home estimate — single and married filing jointly, IRS IR-2025-103 figures only
- 72-hour car accident checklist — sequence and packet, no invented state statutes

## Rules
- No invented laws, tax brackets, CPT codes, or deadlines
- Every sourced number is dated in the page
- Tools are checklists and calculators, not legal, tax, or medical advice
- One new tool per build, registered in `catalog.json` before it is called live
- Prefer a calculator or a fill-in packet on every page. That is the search hook

## Build
No build step. Open `index.html`. GitHub Actions workflow `.github/workflows/pages.yml` deploys the repo root to Pages.

## Builder
See `BUILDER.md` and `ROADMAP.md`. The hourly automation should ship the next unchecked roadmap item, then check it off.

Built by [@kshot9000](https://x.com/kshot9000)
