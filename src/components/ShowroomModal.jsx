import { useEffect } from 'react'
import { X } from 'lucide-react'
import { showroom as c, displayFont } from '@/lib/showroom.js'

// Bottom sheet on phones, centered panel on larger screens.
export default function ShowroomModal({ title, subtitle, onClose, closeLabel = 'Close', children }) {
  // 👑 Lock body scroll while open (iOS Safari otherwise scrolls the page behind the sheet).
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center md:p-4"
      style={{ background: 'rgba(27,30,33,.55)' }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full md:max-w-md overflow-y-auto rounded-t-xl md:rounded-xl"
        style={{ background: c.floor, color: c.ink, maxHeight: '92dvh', overscrollBehavior: 'contain', paddingBottom: 'env(safe-area-inset-bottom)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-4" style={{ borderBottom: `1px solid ${c.rule}` }}>
          <div>
            <h2 className="text-3xl font-bold leading-none" style={displayFont}>{title}</h2>
            {subtitle && <p className="mt-2 text-[15px]" style={{ color: c.muted }}>{subtitle}</p>}
          </div>
          <button onClick={onClose} aria-label={closeLabel} className="w-11 h-11 -mr-2 -mt-2 flex items-center justify-center shrink-0">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  )
}
