'use client'

import { useGitHub } from '@/hooks/useGitHub'
import { PERSONAL, PROJECTS } from '@/lib/data'
import { Star, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const LEVEL_BG: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: 'bg-white/[0.05]',
  1: 'bg-[#0e4429]',
  2: 'bg-[#006d32]',
  3: 'bg-[#26a641]',
  4: 'bg-[#39d353]',
}

export function GitHubContent() {
  const { data, loading } = useGitHub()

  return (
    <div className="p-6 max-h-[500px] overflow-y-auto scroll-smooth">

      {/* header (sticky) */}
      <div className="mb-4 flex items-center justify-between sticky top-0 bg-[#0d1117] z-10 pb-3">
        <div>
          <p className="font-mono text-sm font-medium text-white">
            {PERSONAL.github}
          </p>
          <p className="font-mono text-[11px] text-white/30">
            {PERSONAL.bio.slice(0, 60)}…
          </p>
        </div>

        <a
          href={`https://github.com/${PERSONAL.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/50 hover:text-white transition-colors"
        >
          <ExternalLink size={11} />
          GitHub
        </a>
      </div>

      {/* Contribution graph */}
      <div className="mb-5 rounded-lg border border-white/[0.07] bg-white/[0.02] p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/30">
            Contributions this year
          </span>
          <span className="font-mono text-[11px] text-white/50">
            {loading ? '…' : `${data?.totalContributions?.toLocaleString() ?? 0} total`}
          </span>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex gap-[2px]">
              {Array.from({ length: 53 }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[2px]">
                  {Array.from({ length: 7 }).map((_, d) => (
                    <div
                      key={d}
                      className="h-[8px] w-[8px] rounded-[1px] bg-white/[0.05] animate-pulse"
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-[2px]">
              {data?.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[2px]">
                  {week.days.map((day, di) => (
                    <div
                      key={di}
                      title={`${day.date}: ${day.count}`}
                      className={cn(
                        'h-[8px] w-[8px] rounded-[1px]',
                        LEVEL_BG[day.level]
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* pinned repos */}
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/25">
        Pinned
      </p>

      <div className="grid grid-cols-2 gap-3">
        {PROJECTS.personal.slice(0, 4).map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5 hover:border-white/[0.15] transition-colors"
          >
            <p className="mb-1 font-mono text-[12px] font-medium text-white group-hover:text-white/80">
              {repo.name}
            </p>

            <p className="mb-2.5 font-mono text-[10px] leading-relaxed text-white/30 line-clamp-2">
              {repo.description}
            </p>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-mono text-[10px] text-white/25">
                <Star size={9} /> {repo.stars}
              </span>
              <span className="font-mono text-[10px] text-white/20">
                {repo.stack[0]}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* bottom spacing */}
      <div className="h-10" />
    </div>
  )
}