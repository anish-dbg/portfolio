'use client'

import { PERSONAL, RESUME_SKILLS, RESUME_EXPERIENCE } from '@/lib/data'
import { ExternalLink, MapPin, Mail, Github, Twitter } from 'lucide-react'

export function ResumeContent() {
  return (
    <div className="p-8 max-h-[600px] overflow-y-auto scroll-smooth">
      
      {/* header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="mb-1 font-display text-3xl font-bold text-white">{PERSONAL.name}</h1>
          <p className="mb-3 font-mono text-sm text-white/40">
            Senior Rust / Solana Protocol &amp; Systems Engineer
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/30">
              <MapPin size={11} /> Delhi, India
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/30">
              <Mail size={11} /> {PERSONAL.email}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/30">
              <Github size={11} /> {PERSONAL.github}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/30">
              <Twitter size={11} /> {PERSONAL.twitter}
            </span>
          </div>
        </div>

        <a
          href={PERSONAL.notion}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-2 font-mono text-[11px] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
        >
          <ExternalLink size={11} />
          View on Notion
        </a>
      </div>

      <div className="mb-px h-px bg-white/[0.07]" />

      {/* skills */}
      <div className="my-6">
        <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">Skills</h2>
        <div className="space-y-3">
          {RESUME_SKILLS.map((row) => (
            <div key={row.category} className="flex gap-6">
              <span className="w-36 flex-shrink-0 font-mono text-[11px] text-white/25">
                {row.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {row.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/[0.1] px-3 py-0.5 font-mono text-[10px] text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-px h-px bg-white/[0.07]" />

      {/* experience */}
      <div className="mt-6 pb-16">
        <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
          Experience
        </h2>
        <div className="space-y-6">
          {RESUME_EXPERIENCE.map((job, i) => (
            <div key={i}>
              <div className="mb-1 flex items-baseline justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-base font-bold text-white">
                    {job.company}
                  </span>
                  <span className="font-mono text-[11px] text-white/35">
                    {job.role}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-white/30">
                  {job.period}
                </span>
              </div>

              {'sub' in job && job.sub && (
                <p className="mb-2 font-mono text-[11px] text-white/25">
                  {job.sub}
                </p>
              )}

              <ul className="space-y-1.5 pl-4">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative font-mono text-[12px] leading-relaxed text-white/50 before:absolute before:-left-3 before:text-white/20 before:content-['•']"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}