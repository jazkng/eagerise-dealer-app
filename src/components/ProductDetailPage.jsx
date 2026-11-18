import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Star, ShoppingCart, Check, FileText, ImageIcon } from 'lucide-react'

const labels = {
  zh: {
    back: '返回产品列表',
    price: '价格',
    priceOnRequest: '价格请询问',
    highlights: '产品亮点',
    overview: '产品介绍',
    specs: '规格参数',
    inBox: '包装内容',
    downloads: '资料下载',
    warranty: '保修',
    inquire: '立即询价',
    pending: '资料待补充',
  },
  en: {
    back: 'Back to products',
    price: 'Price',
    priceOnRequest: 'Price on request',
    highlights: 'Highlights',
    overview: 'Overview',
    specs: 'Specifications',
    inBox: "What's in the box",
    downloads: 'Downloads',
    warranty: 'Warranty',
    inquire: 'Inquire now',
    pending: 'Details coming soon',
  },
}

// Template for the full product detail page. Every rich field is optional so
// products can be filled in gradually: old records with only name/price/
// description/features still render, and empty sections show a placeholder.
// Optional fields: images[], highlights[], specs[{label,value}], inBox[],
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
    <section className="py-6 border-t">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      {empty ? <p className="text-sm text-gray-400 italic">{l.pending}</p> : children}
    </section>
  )

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      style={{ height: '100dvh', overscrollBehavior: 'contain' }}
    >
      <header
        className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <button onClick={onBack} className="flex items-center gap-2 min-h-[44px] text-gray-700 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            {l.back}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4" style={{ paddingBottom: 'calc(6rem + env(safe-area-inset-bottom))' }}>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 py-6">
          {/* Gallery */}
          <div>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
              {images.length > 0 ? (
                <img src={images[activeImage]} alt={product.name} className="w-full h-full object-contain" />
              ) : product.image ? (
                <span className="text-8xl">{product.image}</span>
              ) : (
                <ImageIcon className="w-16 h-16 text-gray-300" />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 shrink-0 rounded-lg border-2 overflow-hidden ${i === activeImage ? 'border-green-600' : 'border-transparent'}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              {product.brand && <Badge className="bg-green-100 text-green-700 border-green-200">{product.brand}</Badge>}
              {product.category && <span className="text-sm text-gray-500">{product.category}</span>}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            {product.rating && (
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-semibold">{product.rating}</span>
              </div>
            )}
            <p className="text-sm text-gray-500">{l.price}</p>
            <p className="text-3xl font-bold text-green-600 mb-6">
              {product.price != null ? `RM ${product.price.toLocaleString()}` : l.priceOnRequest}
            </p>
            {highlights.length > 0 && (
              <ul className="space-y-2 mb-6">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            <Button className="hidden md:flex w-full min-h-[44px] bg-gradient-to-r from-green-600 to-green-500" onClick={onInquire}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              {l.inquire}
            </Button>
          </div>
        </div>

        <Section title={l.overview} empty={!product.description}>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
        </Section>

        <Section title={l.specs} empty={!product.specs?.length}>
          <dl className="divide-y rounded-lg border">
            {product.specs?.map((s) => (
              <div key={s.label} className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
                <dt className="text-gray-500">{s.label}</dt>
                <dd className="font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title={l.inBox} empty={!product.inBox?.length}>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {product.inBox?.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={l.warranty} empty={!product.warranty}>
          <p className="text-gray-700">{product.warranty}</p>
        </Section>

        <Section title={l.downloads} empty={!product.downloads?.length}>
          <div className="flex flex-col gap-2">
            {product.downloads?.map((d) => (
              <a key={d.url} href={d.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 min-h-[44px] text-green-700 hover:underline">
                <FileText className="w-5 h-5" />
                {d.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      {/* Sticky inquire bar on mobile so the main action is always reachable */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t px-4 pt-3"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <Button className="w-full min-h-[44px] bg-gradient-to-r from-green-600 to-green-500" onClick={onInquire}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          {l.inquire}
        </Button>
      </div>
    </div>
  )
}
