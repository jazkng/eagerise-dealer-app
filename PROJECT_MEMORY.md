# Project memory

This file is shared by Codex, Claude Code and Antigravity through Git. Read it before continuing work; update important verified results before handing off. Keep entries concise and project-specific. Central rule synchronization creates this file only when absent and never replaces existing content.

## Entry format

Use stable project-scoped IDs. Date format: YYYY-MM-DD; include timezone for precise times. Source should identify a user decision, repository file, PR, commit, build or other inspectable evidence. No secrets or unnecessary personal/customer details.

Statuses: proposed, user-confirmed, verified, pending, completed, superseded. A user-confirmed intention is not proof of installation, a signed agreement, deployment or acceptance.

| ID | Date | Category | Status | Fact / decision | Source | Next action |
|---|---|---|---|---|---|---|
| MAINT-20261118-001 | 2026-11-18 | Repository hygiene | pending | Add missing .gitignore and PR lint/build workflow; remove unused selectedOrder state and use an ESM-compatible Vite alias. Add docs/MODULE_MAP.md. Preserve static sample business data and UI behavior. | GitHub maintenance request; .gitignore. | Verify PR checks and merge; this change does not verify deployment or change runtime data. |
| CATALOG-20261123-001 | 2026-11-23 | Product catalog | pending | Added EXCEDIO APEX 7870 and ELITE 7865 (multi-image), enriched T9/T100/T133/360/6-Way with supplier specs; order APEX→ELITE→VISION→CORE→WIDE→cameras. ELITE TS10 listed in lineup xlsx but has no image/copy, not added. Price/stock/warranty still missing. | Supplier Google Drive folder; src/App.jsx | Get TS10 assets, prices and warranty from supplier. |
| WEB-SEO-20261123-001 | 2026-11-23 | SEO / sharing | pending | Following 85mega website practice: each product has a URL /products/<slug>; build writes static HTML per photo-backed product (title, description, og, Product JSON-LD) plus sitemap/robots when SITE_URL or Vercel production URL is available; language remembered in localStorage; brand favicon. Sample Aurora/Clif products are not indexed. | Jake request 2026-11-23; scripts/build-seo.mjs | After merge, verify live /products/<slug> serves static head on Vercel and submit sitemap in Search Console. |
| INQUIRY-20261123-001 | 2026-11-23 | Customer enquiry | user-confirmed | Product enquiries should go to the dealer via WhatsApp, not to Eagerise HQ. The current inquiry form only shows a fake success. Dealer list is still sample data. | Jake answer 2026-11-23 | Needs real dealer list with WhatsApp numbers before implementing. |

## Current work

Record the active goal, verified progress, blockers and next step when known. No project facts have been seeded by the central template.

## Superseded decisions

Retain the old ID, the replacement ID and the reason/date when a material decision changes. Reconcile conflicts explicitly; preserve unrelated entries when merging concurrent updates.
