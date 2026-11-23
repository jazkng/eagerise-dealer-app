# Excedio deployment

The website is static HTML, CSS and JavaScript with no runtime dependencies, API keys or database.

## Build and preview

```sh
npm run lint
npm run build
python3 -m http.server 8000 --directory dist
```

Node.js 22 or newer is required for the build. No dependency installation is needed. Publish the contents of `dist/` to a static host; the application uses relative asset paths and hash navigation.

## ChatGPT Sites

The existing client preview is https://excedio-preview.jazkng2012.chatgpt.site.

`.openai/hosting.json` retains the original Site project ID and uses `dist/`. GitHub and ChatGPT Sites are separate repositories: a GitHub push alone does not synchronize or publish the ChatGPT Site. Use the supported Sites source and publication workflow for an explicit Site update.

## Vercel

`vercel.json` explicitly selects a static build, runs `npm run build`, and serves `dist/`, replacing the retired Vite setup. Existing integration and production alias configuration must be checked in the deployment result; no domain or billing changes are part of this import.

## Other static hosts

Serve `dist/`. For GitHub Pages, select a supported deployment mechanism separately; relative assets work under the repository path. No Pages publication has been configured by this import.

## Preserved preview limits

Keep `noindex,nofollow`. Category pictures are conceptual AI illustrations. Dealer locations, authorization status, phone/WhatsApp availability and current product models remain subject to verification as described in README.md. This source migration does not certify them or alter contact behavior.
