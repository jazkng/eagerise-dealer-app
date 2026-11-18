import { showroom as c, displayFont } from '@/lib/showroom.js'

// Whole card opens the detail page; inquiry lives there so the grid stays calm.
export default function ShowroomProductCard({ product, language = 'zh', onOpen }) {
  const src = product.images?.[0]
  const price = product.price != null
    ? `RM ${product.price.toLocaleString()}`
    : (language === 'zh' ? '价格请询问' : 'Price on request')
  return (
    <button
      onClick={() => onOpen(product)}
      className="group text-left flex flex-col rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      style={{ color: c.ink, outlineColor: c.ink }}
    >
      <div className="aspect-square w-full rounded-lg overflow-hidden flex items-center justify-center" style={{ background: c.stage }}>
        {src
          ? <img src={src} alt={product.name} loading="lazy" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" />
          : <span className="text-7xl">{product.image}</span>}
      </div>
      <div className="pt-4 pb-2 flex flex-col gap-1 flex-1" style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-3xl font-bold leading-none" style={displayFont}>{product.model ?? product.brand}</span>
          {product.model && <span className="text-sm" style={{ color: c.muted }}>{product.brand}</span>}
        </div>
        <span className="text-[15px] leading-snug" style={{ color: c.muted }}>{product.name}</span>
        <span className="mt-auto pt-2 text-xl font-semibold" style={displayFont}>{price}</span>
      </div>
    </button>
  )
}
