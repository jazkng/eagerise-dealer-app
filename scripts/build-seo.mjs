// Post-build step: writes a real HTML file for every public product URL so links can be shared
// (WhatsApp/Facebook previews read og: tags without running JavaScript) and search engines see
// the product name, description and photo directly. React replaces #root content on load.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { getProducts } from '../src/data/products.js'

const dist = join(dirname(new URL(import.meta.url).pathname), '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

// Absolute URLs are required for canonical, og:image and sitemap. Vercel provides the production
// domain at build time; without it (local builds) those tags are skipped rather than guessed.
const rawOrigin = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || ''
const origin = rawOrigin ? (rawOrigin.startsWith('http') ? rawOrigin : `https://${rawOrigin}`).replace(/\/+$/, '') : ''

const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const noCategory = new Proxy({}, { get: () => '' })
const en = getProducts('en', noCategory)
const zh = getProducts('zh', noCategory)

// 👑 Only products with real supplier photos get public pages and sitemap entries; the emoji
// sample products (Aurora / Clif Designs) are placeholders and must not be indexed as real items.
const published = en.filter((p) => p.images?.length)

function page({ path, title, description, image, body = '', jsonLd }) {
  const url = origin ? `${origin}${path}` : ''
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    url && `<link rel="canonical" href="${url}" />`,
    url && `<meta property="og:url" content="${url}" />`,
    image && origin && `<meta property="og:image" content="${origin}${image}" />`,
    image && `<meta name="twitter:card" content="summary_large_image" />`,
    jsonLd && `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n    ')
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<meta property="og:title"[^>]*>/, '')
    .replace(/\s*<meta property="og:description"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  // <path>.html is what Vercel serves for /path with cleanUrls; <path>/index.html covers static
  // hosts and `vite preview`, which only resolve directory indexes.
  for (const file of [join(dist, `${path}.html`), join(dist, path, 'index.html')]) {
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, html)
  }
}

for (const p of published) {
  const z = zh.find((x) => x.id === p.id)
  page({
    path: `/products/${p.slug}`,
    title: `${p.name} | Eagerise`,
    description: p.description,
    image: p.images[0],
    body: `<main lang="en"><h1>${esc(p.name)}</h1><img src="${esc(p.images[0])}" alt="${esc(p.name)}" width="600" height="600" />`
      + `<p>${esc(p.description)}</p><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`
      + `<section lang="zh-Hans"><h2>${esc(z.name)}</h2><p>${esc(z.description)}</p></section></main>`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      description: p.description,
      brand: { '@type': 'Brand', name: p.brand },
      ...(p.model && { model: p.model }),
      image: origin ? p.images.map((i) => `${origin}${i}`) : p.images,
      ...(p.specs?.length && { additionalProperty: p.specs.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })) }),
    },
  })
}

page({
  path: '/products',
  title: 'Products | Eagerise',
  description: 'EXCEDIO Android car multimedia players (APEX, ELITE, VISION, CORE, WIDE) and 360° camera systems.',
  body: `<main><h1>Products</h1><ul>${published.map((p) => `<li><a href="/products/${p.slug}">${esc(p.name)}</a></li>`).join('')}</ul></main>`,
})
page({
  path: '/dealers',
  title: 'Find a Dealer | Eagerise',
  description: 'Find verified Eagerise dealers in Malaysia for EXCEDIO car multimedia and camera systems.',
})

if (origin) {
  const urls = ['/', '/products', '/dealers', ...published.map((p) => `/products/${p.slug}`)]
  writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${origin}${u}</loc></url>`).join('\n')}\n</urlset>\n`)
  writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
}
console.log(`build-seo: ${published.length} product pages${origin ? `, sitemap for ${origin}` : ' (no SITE_URL: canonical/sitemap skipped)'}`)
