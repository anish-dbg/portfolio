'use client'

import { PERSONAL } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

export function XContent() {
  return (
    <a
      href={`https://x.com/anish_dbg`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 h-full w-full p-6 
                 rounded-lg border border-white/10 bg-white/[0.02]
                 font-mono text-sm text-white/50 
                 hover:text-white hover:bg-white/[0.05] transition-all"
    >
      <ExternalLink size={14} />
      Open X Profile
    </a>
  )
}