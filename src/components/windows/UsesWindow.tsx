'use client'

import { USES } from '@/lib/data'

function UseSection({ title, items }: { title: string; items: { name: string; detail: string }[] }) {
  return (
    <div className="mb-6">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
        {title}
      </p>

      <div className="space-y-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/[0.06] py-3.5 last:border-0"
          >
            <span className="font-mono text-sm font-medium text-white">
              {item.name}
            </span>
            <span className="font-mono text-[11px] text-white/30">
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function UsesContent() {
  return (
    <div className="p-8 max-h-[500px] overflow-y-auto scroll-smooth">
      
      {/* header */}
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
        Uses
      </p>

      <UseSection title="Hardware" items={USES.hardware} />
      <UseSection title="Editor" items={USES.editor} />
      <UseSection title="Terminal" items={USES.terminal} />
      <UseSection title="Apps" items={USES.apps} />

      {/* bottom spacing */}
      <div className="h-10" />
    </div>
  )
}