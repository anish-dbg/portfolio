'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MacWindowProps {
  id: string
  title: string
  children: React.ReactNode
  isOpen: boolean
  isFocused: boolean
  onClose: () => void
  onFocus: () => void
  defaultX?: number
  defaultY?: number
  width?: number
  height?: number
  zIndex?: number
}

export function MacWindow({
  id,
  title,
  children,
  isOpen,
  isFocused,
  onClose,
  onFocus,
  defaultX = 120,
  defaultY = 80,
  width = 640,
  height = 520,
  zIndex = 10,
}: MacWindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={id}
          drag
          dragMomentum={false}
          dragElastic={0}
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          whileDrag={{ scale: 1.01 }}
          onMouseDown={onFocus}
          style={{
            position: 'absolute',
            left: defaultX,
            top: defaultY,
            width,
            zIndex,
            touchAction: 'none',
          }}
          className={cn(
            'flex flex-col overflow-hidden rounded-xl select-none',
            'border shadow-2xl',
            isFocused
              ? 'border-white/[0.15] shadow-black/60'
              : 'border-white/[0.07] shadow-black/40'
          )}
          // stop content from triggering drag
        >
          {/* ── Title bar ── */}
          <div
            className={cn(
              'flex h-10 flex-shrink-0 items-center gap-2 px-4',
              'border-b border-white/[0.07]',
              isFocused ? 'bg-[#1c1c1c]' : 'bg-[#161616]'
            )}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <button
                onPointerDown={(e) => { e.stopPropagation(); onClose() }}
                className="h-3 w-3 rounded-full bg-[#ff5f57] transition-opacity hover:opacity-80"
              />
              <div className="h-3 w-3 rounded-full bg-[#febc2e] opacity-40" />
              <div className="h-3 w-3 rounded-full bg-[#28c840] opacity-40" />
            </div>

            {/* Title */}
            <span className="absolute left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.15em] text-white/40">
              {title}
            </span>
          </div>

          {/* ── Content ── */}
          <div
            onPointerDown={(e) => e.stopPropagation()}
            className={cn(
              'flex-1 overflow-y-auto',
              isFocused ? 'bg-[#1a1a1a]' : 'bg-[#171717]'
            )}
            style={{ height: height - 40, cursor: 'default' }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
