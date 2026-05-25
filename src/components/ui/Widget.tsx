'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WidgetProps {
  children: React.ReactNode
  className?: string
  delay?: number
  label?: string
  defaultX?: number
  defaultY?: number
  width?: number
  zIndex?: number
  onFocus?: () => void
}

export function Widget({
  children,
  className,
  delay = 0,
  label,
  defaultX = 0,
  defaultY = 0,
  width = 260,
  zIndex = 1,
  onFocus,
}: WidgetProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      whileDrag={{ scale: 1.025 }}
      onMouseDown={onFocus}
      style={{
        position: 'absolute',
        left: defaultX,
        top: defaultY,
        width,
        zIndex,
        cursor: 'grab',
        touchAction: 'none',
      }}
      className={cn(
        'rounded-[14px] border border-white/[0.07] bg-surface p-[18px]',
        'hover:border-white/[0.12] transition-colors duration-200 select-none',
        className
      )}
    >
      {/* drag handle pill */}
      <div className="mx-auto mb-4 h-[3px] w-7 rounded-full bg-white/20 transition-colors hover:bg-white/40" />

      {label && (
        <p className="mb-3 text-[9px] uppercase tracking-[0.12em] text-muted">{label}</p>
      )}

      {/* stop drag propagation on interactive inner content */}
      <div
        onPointerDown={(e) => e.stopPropagation()}
        style={{ cursor: 'default' }}
      >
        {children}
      </div>
    </motion.div>
  )
}
