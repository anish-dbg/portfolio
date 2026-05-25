'use client'

import { motion } from 'framer-motion'
import { useClock } from '@/hooks/useClock'
import { useVisitors } from '@/hooks/useVisitors'

export function TopBar() {
  const { display } = useClock()
  const { count } = useVisitors()

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-[999] flex h-9 items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a]/90 px-5 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4 font-mono text-[11px]">
        <span className="font-medium text-white">AK</span>
        <span className="text-white/20">|</span>
        <span className="text-white/35">Desktop</span>
      </div>
      <div className="flex items-center gap-5 font-mono text-[11px] text-white/30">
        {count !== null && (
          <span>↑ {count.toLocaleString()}</span>
        )}
        <span className="text-white/50">{display}</span>
      </div>
    </motion.header>
  )
}
