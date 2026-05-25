'use client'

import { useState } from 'react'
import { BLOGS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function BlogsContent() {
  const [tab, setTab] = useState<'technical' | 'philosophical'>('technical')
  const list = BLOGS[tab]

  return (
    <div className="p-8 max-h-[500px] overflow-y-auto">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
        Writing
      </p>

      {/* tabs */}
      <div className="mb-6 flex gap-6 border-b border-white/[0.07]">
        {(['technical', 'philosophical'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              'pb-3 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors',
              tab === t
                ? 'border-b-2 border-white text-white'
                : 'text-white/30 hover:text-white/60'
            )}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-0">
        {list.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-b border-white/[0.07] py-5 last:border-0"
          >
            <div className="mb-1 flex items-start justify-between gap-4">
              <span className="font-mono text-[13px] font-medium text-white transition-colors group-hover:text-white/80">
                {post.title}
              </span>
              <span className="flex-shrink-0 font-mono text-[11px] text-white/25">
                {post.date}
              </span>
            </div>
            <p className="font-mono text-[11px] leading-relaxed text-white/35">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}