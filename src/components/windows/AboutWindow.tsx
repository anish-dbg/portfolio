'use client'

import { PERSONAL } from '@/lib/data'
import { Twitter, Github, BookOpen } from 'lucide-react'

export function AboutContent() {
  return (
    <div className="flex h-full flex-col justify-between p-8">
      <div>
        <h1 className="mb-2 font-display text-5xl font-bold leading-tight text-white">
          {PERSONAL.name.split(' ')[0]}<br />{PERSONAL.name.split(' ')[1]}
        </h1>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          {PERSONAL.role}
        </p>
        <div className="mb-8 h-px bg-white/10" />
        <p className="font-mono text-sm leading-relaxed text-white/60">
          {PERSONAL.bio}
        </p>
      </div>

      {/* Footer card */}
      <div className="mt-8 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10 flex items-center justify-center text-white/40 text-xs font-bold">
            AK
          </div>
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white">
              {PERSONAL.handle}
            </p>
            <p className="font-mono text-[10px] text-white/40">{PERSONAL.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href={`https://twitter.com/${PERSONAL.twitter.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
            <Twitter size={15} />
          </a>
          <a href={`https://github.com/${PERSONAL.github}`} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
            <Github size={15} />
          </a>
          <a href={PERSONAL.notion} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
            <BookOpen size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}
