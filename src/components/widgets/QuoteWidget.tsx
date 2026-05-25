'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Widget } from '@/components/ui/Widget'
import { useQuotes } from '@/hooks/useQuotes'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'
import type { CanvasWidgetProps } from '@/types/canvas'

export function QuoteWidget(props: CanvasWidgetProps) {
  const { quote, index, total, setIndex } = useQuotes()

  return (
    <Widget {...props}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          className="mb-4 font-display text-sm leading-relaxed text-text"
        >
          &ldquo;{quote.text}&rdquo;
        </motion.p>
      </AnimatePresence>

      {/* dots */}
      <div className="mb-2 flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              'h-[3px] rounded-full transition-all duration-300',
              i === index ? 'w-4 bg-text' : 'w-1.5 bg-white/20'
            )}
          />
        ))}
      </div>

      <p className="text-[10px] uppercase tracking-[0.1em] text-muted">
        — {SITE_CONFIG.name} · {quote.category}
      </p>
    </Widget>
  )
}
