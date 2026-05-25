'use client'

import { NOTES } from '@/lib/data'

export function NotesContent() {
  return (
    <div className="p-8 max-h-[500px] overflow-y-auto scroll-smooth">

      {/* header */}
      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
          Notes
        </p>
        <p className="mb-6 font-mono text-sm text-white/30">
          Raw thoughts. Not edited for an audience.
        </p>
      </div>

      {/* content */}
      <div className="space-y-0">
        {NOTES.map((note, i) => (
          <div key={i} className="border-b border-white/[0.07] py-6 last:border-0">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/25">
              {note.month}
            </p>

            {note.content.split('\n\n').map((para, j) => (
              <p
                key={j}
                className="mb-3 font-mono text-sm leading-relaxed text-white/70 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* bottom spacing */}
      <div className="h-10" />
    </div>
  )
}