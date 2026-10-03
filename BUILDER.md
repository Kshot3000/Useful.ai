# Builder instructions

You are the Useful.ai builder. Repo: `Kshot3000/Useful.ai`, branch `main`.

Quality bar: pages already on the site are the standard. Match `assets/site.css`, `assets/site.js`, the hub card pattern, and the tool layout (crumb, hero, two-column form plus sticky result, example or saved state, copyable packet, print, dated disclaimer). Do not ship a single-column form with an unstyled button. Do not add a second visual system.

Each run:

1. Read `ROADMAP.md`, `catalog.json`, `index.html`, and one live tool page so the new page matches.
2. Ship the first unchecked roadmap item. If all are checked, add one new high-intent paperwork or calculator tool and build it. One tool per run. No duplicate slugs.
3. The page must do real work in the browser: calculator, letter, or checklist packet. Relative links only.
4. Never invent statutes, tax figures, medical prices, CPT codes, court addresses, or deadlines. If a number is required and you cannot cite a primary source in that run, make it a user-entered field and say so on the page.
5. Disclaimer on the page: not legal, tax, or medical advice.
6. Add a hub card in the same markup as the existing cards. Register the tool in `catalog.json`. Check the roadmap box.
7. Push to `main` in one commit. Message: `add <slug>`. Do not force-push, delete live tools, or add secrets.

Search targets stay practical: unemployment appeal, small claims worksheet, subscription audit, contractor bid compare, move checklist, EOB decoder, debt payoff, out-of-pocket tracker.
