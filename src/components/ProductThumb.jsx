// Real product photo when available; older catalog entries still use an emoji placeholder.
export default function ProductThumb({ product, emojiClass, imgClass = 'w-full aspect-square object-contain rounded-lg mb-4 bg-[#2A2E33]' }) {
  const src = product.images?.[0]
  if (src) return <img src={src} alt={product.name} loading="lazy" className={imgClass} />
  return <div className={emojiClass}>{product.image}</div>
}
