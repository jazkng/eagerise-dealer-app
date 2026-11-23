# Project memory

This file is shared by Codex, Claude Code and Antigravity through Git. Read it before continuing work; update important verified results before handing off. Keep entries concise and project-specific. Central rule synchronization creates this file only when absent and never replaces existing content.

## Entry format

Use stable project-scoped IDs. Date format: YYYY-MM-DD; include timezone for precise times. Source should identify a user decision, repository file, PR, commit, build or other inspectable evidence. No secrets or unnecessary personal/customer details.

Statuses: proposed, user-confirmed, verified, pending, completed, superseded. A user-confirmed intention is not proof of installation, a signed agreement, deployment or acceptance.

| ID | Date | Category | Status | Fact / decision | Source | Next action |
|---|---|---|---|---|---|---|
| MAINT-20261118-001 | 2026-11-18 | Repository hygiene | superseded | Add missing .gitignore and PR lint/build workflow; remove unused selectedOrder state and use an ESM-compatible Vite alias. Add docs/MODULE_MAP.md. Preserve static sample business data and UI behavior. | GitHub maintenance request; .gitignore. | Superseded by EXCEDIO-IMPORT-20261123-001: the owner retired the former application. |

## Current work

Record the active goal, verified progress, blockers and next step when known. No project facts have been seeded by the central template.

## Superseded decisions

Retain the old ID, the replacement ID and the reason/date when a material decision changes. Reconcile conflicts explicitly; preserve unrelated entries when merging concurrent updates.

## Excedio replacement

| ID | Date | Category | Status | Fact / decision | Source | Next action |
|---|---|---|---|---|---|---|
| EXCEDIO-IMPORT-20261123-001 | 2026-11-23 | Source migration | user-confirmed | Replace the retired Eagerise application with the Excedio ChatGPT Site source; no legacy backup branch is wanted. Preserve existing Git history. | Owner instruction in ChatGPT on 2026-11-23. | Merge the import PR after checks pass. |
| EXCEDIO-IMPORT-20261123-002 | 2026-11-23 | Provenance | verified | Imported Site appgprj_6aa2cea3ac748191a76481dc36d13648 version 1, source commit cca11c7a2cb2cacbd6aa5f8b722948252442c73f. Root website files, dealer data and images match that source. | Sites version metadata and source checkout. | Keep GitHub and Sites changes explicit; no automatic synchronization is configured. |
| EXCEDIO-IMPORT-20261123-003 | 2026-11-23 | Deployment and acceptance | pending | This migration preserves the client preview, noindex setting, conceptual imagery and existing dealer-data limitations. Vercel deployment and physical-device acceptance are separate from source import. | Source README and hosting manifest. | Inspect CI/Vercel results; do not claim browser/device acceptance from syntax checks. |

| EXCEDIO-IMPORT-20261123-004 | 2026-11-23 | Validation | verified | npm run lint and npm run build passed. All nine root runtime files/images match the imported source byte-for-byte; local asset links and referenced element IDs resolve; no obvious secret patterns were found in the replacement tree. | Local import validation. | Await GitHub CI and deployment results; physical-device behavior remains unverified. |
