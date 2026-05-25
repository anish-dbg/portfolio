'use client'
import type { CanvasWidgetProps } from '@/types/canvas'

import { Widget } from '@/components/ui/Widget'
import { STATUS_ITEMS, STATUS_OPEN_TO_WORK } from '@/lib/config'

export function StatusWidget(props: CanvasWidgetProps) {
  return (
    <Widget {...props}>
      {/* open to work badge */}
      <div className="mb-5 flex items-center gap-2">
        <span
          className={cn(
            'h-[7px] w-[7px] rounded-full',
            STATUS_OPEN_TO_WORK ? 'bg-accent animate-pulse-dot' : 'bg-muted'
          )}
        />
        <span className="text-[11px] uppercase tracking-[0.08em] text-accent">
          {STATUS_OPEN_TO_WORK ? 'Open to Work' : 'Not Available'}
        </span>
      </div>

      {/* rows */}
      <div className="flex flex-col gap-3">
        {STATUS_ITEMS.map((item) => (
          <div key={item.key} className="flex gap-3">
            <span className="min-w-[68px] pt-px text-[9px] uppercase tracking-[0.1em] text-muted">
              {item.key}
            </span>
            <span className="text-[11px] leading-[1.4] text-text">{item.value}</span>
          </div>
        ))}
      </div>
    </Widget>
  )
}

// need cn here
function cn(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(' ')
}
