'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Briefcase, Code2, BookOpen, Mail,
  StickyNote, Settings, X,
} from 'lucide-react'
import { DOCK_ITEMS } from '@/lib/config'
import { cn } from '@/lib/utils'

const ICON_MAP = { User, Briefcase, Code2, BookOpen, Mail, StickyNote, Settings, X }

export function Dock() {
  const [tooltip, setTooltip] = useState<string | null>(null)

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex items-center gap-1.5 rounded-[18px] border border-white/[0.12] bg-surface/85 px-4 py-2.5 backdrop-blur-xl"
      >
        {DOCK_ITEMS.map((item, i) => {
          const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP]
          return (
            <div key={item.label} className="relative">
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onMouseEnter={() => setTooltip(item.label)}
                onMouseLeave={() => setTooltip(null)}
                className={cn(
                  'flex h-[38px] w-[38px] items-center justify-center rounded-[10px]',
                  'text-muted transition-all duration-150',
                  'hover:-translate-y-0.5 hover:bg-surface2 hover:text-text'
                )}
              >
                <Icon size={16} />
              </a>

              <AnimatePresence>
                {tooltip === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/[0.12] bg-surface2 px-2.5 py-1 text-[10px] tracking-[0.05em] text-text"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* separator + close */}
        <div className="mx-1 h-5 w-px bg-white/[0.12]" />
        <button
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-muted transition-all duration-150 hover:bg-surface2 hover:text-text"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <X size={14} />
        </button>
      </motion.div>
    </div>
  )
}
