# Excedio website V1

Local, responsive brand website. Open index.html directly, or serve this directory with any static web server. No build step, third-party scripts, API key or backend is required.

Includes brand homepage, four provisional category entry points, brand introduction, dealer search with dependent state/city filters and pagination, phone links, Google Maps search links for fuller addresses, support FAQs and mobile navigation.

Data: 172 named candidate stores, excluding the unnamed account and consolidating the three old-account pairs. The original five reports remain authoritative; the later consolidated workbook omitted some contact data. Only name, address, state, city, postcode and primary phone candidate are exposed. Private account codes, salesperson data and credit terms are excluded. WhatsApp buttons follow the owner-approved mobile-prefix rule (01 numbers), including secondary mobile numbers. Active WhatsApp accounts have not been independently checked. Precise coordinates and current authorised status remain unverified.

Product categories and conceptual CSS illustrations are V1 design content based on the prior brief, not a confirmed product catalogue. Supply current models, specifications and product photos before public release. The actual supplied Excedio PDF logo is used. No office address or brand phone is displayed.

For updates edit dealers.js. Store phone as +60 digits. Store mobile numbers in mobiles. 01 numbers open WhatsApp with a prefilled enquiry; primary landlines open the phone dialler. Product category selection carries into the enquiry. Filters persist in the URL; more complete addresses sort first. Missing cities/states are blank. Maps links perform a search, not verified navigation. Latitude/longitude slots are reserved; nearby ranking and embedded map are not enabled until positions are verified.

Published as a client preview at https://excedio-preview.jazkng2012.chatgpt.site. noindex is intentional for this draft. Before release confirm public dealer list, phone types, brand/product copy, asset rights and intended hosting/domain, then change indexing settings. No form sends messages or stores visitors' location.

Category images updated using built-in image_gen: unbranded photorealistic multimedia dashboard, surround-view parking display, windshield dashcam and component audio set. AI illustrations, not verified Excedio product photos. The original prompt file was outside the imported source and is not included here.

## Repository and source

Imported from ChatGPT Sites on 2026-11-23 (Asia/Kuala_Lumpur), replacing the retired Eagerise application at the owner's request. The repository name remains `jazkng/eagerise-dealer-app`; its current application is Excedio.

Source Site: `appgprj_6aa2cea3ac748191a76481dc36d13648`, published version 1. Imported source commit: `cca11c7a2cb2cacbd6aa5f8b722948252442c73f`.

The website HTML, CSS, JavaScript, dealer data and five images are imported without changes. The former React/Vite application and its obsolete dependencies have been removed. Existing Git history is retained; no legacy backup branch is created.

## Development

No dependencies or API keys are required. Use Node.js 22 or newer:

```sh
npm run lint
npm run build
python3 -m http.server 8000 --directory dist
```

Edit root source files; the build copies them into `dist/`. Commit source and generated output together. See [deployment guide](DEPLOYMENT_GUIDE.md), [module map](docs/MODULE_MAP.md) and [project memory](PROJECT_MEMORY.md).

ChatGPT Sites and GitHub keep separate source repositories. This import does not set up automatic synchronization. Existing public-preview indexing settings and business behavior are preserved.
