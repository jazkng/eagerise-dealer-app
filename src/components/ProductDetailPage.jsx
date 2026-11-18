import { useEffect, useState } from 'react'
import { ArrowLeft, Star, MessageSquareText, FileText, ImageIcon } from 'lucide-react'

const labels = {
  zh: {
    back: '产品',
    priceOnRequest: '价格请询问',
    priceNote: '经销商报价，含安装请询问',
    overview: '产品介绍',
    specs: '规格',
    inBox: '包装内容',
    downloads: '说明书与资料',
    warranty: '保修',
    inquire: '向经销商询价',
    pending: '资料整理中，可先询价了解',
  },
  en: {
    back: 'Products',
    priceOnRequest: 'Price on request',
    priceNote: 'Dealer pricing; ask about installation',
    overview: 'Overview',
    specs: 'Specifications',
    inBox: "What's in the box",
    downloads: 'Manuals & downloads',
    warranty: 'Warranty',
    inquire: 'Ask a dealer for a quote',
    pending: 'Details are being prepared. Ask a dealer in the meantime.',
  },
}

// Showroom palette: the product posters are already loud (neon on black), so the page
// stays quiet and cool so the poster is the one bright thing on screen.
const c = {
  floor: '#F3F4F2',   // showroom white
  stage: '#2A2E33',   // graphite display plinth behind the product
  rule: '#C9CDD1',    // brushed aluminium dividers
  ink: '#1B1E21',
  muted: '#5F666D',
  go: '#0B8F5A',      // Eagerise green, used only for the inquiry action
}
const display = { fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif' }

// Template for the full product detail page. Every rich field is optional so
// products can be filled in gradually: old records with only name/price/
// description/features still render, and empty sections show a placeholder.
// Optional fields: model, images[], highlights[], specs[{label,value}], inBox[],
// downloads[{label,url}], warranty.
export default function ProductDetailPage({ product, language = 'zh', onBack, onInquire }) {
  const l = labels[language] ?? labels.zh
  const images = product.images ?? []
  const [activeImage, setActiveImage] = useState(0)
  const highlights = product.highlights ?? product.features ?? []

  // 👑 Lock body scroll while the full-screen page is open (iOS Safari otherwise scrolls the page behind).
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const Section = ({ title, empty, children }) => (
    <section className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-7" style={{ borderTop: `1px solid ${c.rule}` }}>
      <h2 className="text-2xl font-semibold" style={{ ...display, color: c.ink }}>{title}</h2>
      {empty ? <p style={{ color: c.muted }}>{l.pending}</p> : <div>{children}</div>}
    </section>
  )

  const InquireButton = ({ className = '' }) => (
    <button
      onClick={onInquire}
      className={`flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-md text-white font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={{ background: c.go, outlineColor: c.go }}
    >
      <MessageSquareText className="w-5 h-5" />
      {l.inquire}
    </button>
  )

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ height: '100dvh', overscrollBehavior: 'contain', background: c.floor, color: c.ink }}
    >
      <header className="sticky top-0 z-10 backdrop-blur" style={{ background: 'rgba(243,244,242,.92)', borderBottom: `1px solid ${c.rule}`, paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 min-h-[44px] pr-3 rounded focus-visible:outline focus-visible:outline-2" style={{ color: c.ink }}>
            <ArrowLeft className="w-5 h-5" />
            {l.back}
          </button>
          {product.brand && <span className="text-xl font-semibold" style={{ ...display, color: c.muted }}>{product.brand}</span>}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4" style={{ paddingBottom: 'calc(7rem + env(safe-area-inset-bottom))' }}>
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-6 md:gap-12 pt-6 md:pt-10 pb-10">
          {/* Graphite plinth: frames dark product posters and plain photos alike */}
          <div>
            <div className="aspect-square rounded-lg flex items-center justify-center overflow-hidden" style={{ background: c.stage }}>
              {images.length > 0 ? (
                <img src={images[activeImage]} alt={product.name} className="w-full h-full object-contain" />
              ) : product.image ? (
                <span className="text-8xl">{product.image}</span>
              ) : (
                <ImageIcon className="w-16 h-16" style={{ color: c.muted }} />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(i)}
                    aria-label={`${i + 1} / ${images.length}`}
                    className="w-16 h-16 shrink-0 rounded overflow-hidden"
                    style={{ outline: i === activeImage ? `2px solid ${c.ink}` : 'none', outlineOffset: 2 }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:pt-2">
            {/* The model code is the memorable element: dealers and installers talk in model numbers */}
            {product.model && (
              <p className="font-bold leading-[0.85] tracking-tight" style={{ ...display, fontSize: 'clamp(4.5rem, 14vw, 8.5rem)', color: c.ink }}>
                {product.model}
              </p>
            )}
            <h1 className={product.model ? 'mt-3 text-lg md:text-xl font-medium' : 'text-3xl md:text-4xl font-semibold'} style={{ color: product.model ? c.muted : c.ink, ...(product.model ? {} : display) }}>
              {product.name}
            </h1>

            <div className="mt-6 pb-6" style={{ borderBottom: `1px solid ${c.rule}` }}>
              <p className="text-4xl font-semibold" style={{ ...display, color: c.ink }}>
                {product.price != null ? `RM ${product.price.toLocaleString()}` : l.priceOnRequest}
              </p>
              <p className="text-sm mt-1" style={{ color: c.muted }}>{l.priceNote}</p>
              {product.rating && (
                <p className="flex items-center gap-1 mt-2 text-sm" style={{ color: c.muted }}>
                  <Star className="w-4 h-4 fill-current" style={{ color: '#C98A0B' }} />
                  {product.rating}
                </p>
              )}
            </div>

            {highlights.length > 0 && (
              <ul className="mt-6 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 items-baseline">
                    <span className="w-3 h-[2px] shrink-0 translate-y-[-4px]" style={{ background: c.ink }} />
                    <span className="text-[17px]">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <InquireButton className="hidden md:flex w-full mt-8" />
          </div>
        </div>

        <Section title={l.overview} empty={!product.description}>
          <p className="leading-relaxed whitespace-pre-line max-w-[65ch]" style={{ color: c.ink }}>{product.description}</p>
        </Section>

        <Section title={l.specs} empty={!product.specs?.length}>
          <dl className="max-w-[65ch]">
            {product.specs?.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 py-3" style={{ borderBottom: `1px dashed ${c.rule}` }}>
                <dt style={{ color: c.muted }}>{s.label}</dt>
                <dd className="font-medium text-right tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title={l.inBox} empty={!product.inBox?.length}>
          <ul className="space-y-1">
            {product.inBox?.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={l.warranty} empty={!product.warranty}>
          <p>{product.warranty}</p>
        </Section>

        <Section title={l.downloads} empty={!product.downloads?.length}>
          <div className="flex flex-col gap-1">
            {product.downloads?.map((d) => (
              <a key={d.url} href={d.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 min-h-[44px] underline underline-offset-4" style={{ color: c.ink }}>
                <FileText className="w-5 h-5" />
                {d.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      {/* Mobile: keep the one action reachable without scrolling back up */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 px-4 pt-3"
        style={{ background: c.floor, borderTop: `1px solid ${c.rule}`, paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <InquireButton className="w-full" />
      </div>
    </div>
  )
}
