'use client'

import { EXPERIENCE } from '@/lib/data'
export function ExperienceContent() {
  return (
    <div className="p-8 max-h-[500px] overflow-y-auto">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
        Experience
      </p>
      <div className="space-y-0">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="border-b border-white/[0.07] py-6 last:border-0">
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-base font-bold text-white">{job.company}</span>
                <span className="font-mono text-[10px] text-white/30">{job.role}</span>
              </div>
              <span className="flex-shrink-0 font-mono text-[11px] text-white/30">{job.period}</span>
            </div>
            <p className="mb-3 font-mono text-sm text-white/55">{job.description}</p>
            {job.stack.length > 0 && (
              <div className="flex flex-wrap gap-x-3">
                {job.stack.map((tech, j) => (
                  <span key={j} className="font-mono text-[10px] text-white/25">
                    {j > 0 && <span className="mr-3 text-white/15">·</span>}
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
