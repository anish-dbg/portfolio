'use client'

import { useState } from 'react'
import { PROJECTS } from '@/lib/data'
import { Star, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
export function ProjectsContent() {
  const [tab, setTab] = useState<'personal' | 'client'>('personal')
  const list = PROJECTS[tab]

  return (
    <div className="p-8 max-h-[500px] overflow-y-auto">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
        Projects
      </p>

      {/* tabs */}
      <div className="mb-6 flex gap-6 border-b border-white/[0.07]">
        {(['personal', 'client'] as const).map((t) => (
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
            {t === 'personal' ? 'Personal' : 'Client Work'}
          </button>
        ))}
      </div>

      <div className="space-y-0">
        {list.map((project, i) => (
          <div key={i} className="group border-b border-white/[0.07] py-5 last:border-0">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-display text-[15px] font-bold text-white">
                  {project.name}
                </span>
                {project.stars > 0 && (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-white/30">
                    <Star size={10} />
                    {project.stars}
                  </span>
                )}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white"
                >
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
            <p className="mb-2.5 font-mono text-[12px] leading-relaxed text-white/50">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-1.5">
              {project.stack.map((tech, j) => (
                <span key={j} className="font-mono text-[10px] text-white/25">
                  {j > 0 && <span className="mr-1.5 text-white/15">·</span>}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}