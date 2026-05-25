'use client'
import type { CanvasWidgetProps } from '@/types/canvas'

import { useMemo } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isToday,
  isSameMonth,
} from 'date-fns'
import { Widget } from '@/components/ui/Widget'
import { cn } from '@/lib/utils'

const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export function CalendarWidget(props: CanvasWidgetProps) {
  const today = new Date()

  const days = useMemo(() => {
    const start = startOfMonth(today)
    const end   = endOfMonth(today)
    const monthDays = eachDayOfInterval({ start, end })

    // leading empty slots
    const leading = Array.from({ length: getDay(start) }, (_, i) => ({
      date: null as Date | null,
      key: `lead-${i}`,
    }))

    return [
      ...leading,
      ...monthDays.map((d) => ({ date: d, key: d.toISOString() })),
    ]
  }, [])

  return (
    <Widget {...props}>
      {/* header */}
      <div className="mb-4 flex items-baseline justify-between">
        <span className="font-display text-lg font-medium text-text">
          {format(today, 'MMMM')}
        </span>
        <span className="text-[11px] text-muted">{format(today, 'yyyy')}</span>
      </div>

      {/* day labels */}
      <div className="mb-1 grid grid-cols-7 gap-[2px]">
        {DAY_LABELS.map((l, i) => (
          <div
            key={i}
            className="py-1 text-center text-[9px] uppercase tracking-[0.05em] text-muted"
          >
            {l}
          </div>
        ))}
      </div>

      {/* day cells */}
      <div className="grid grid-cols-7 gap-[2px]">
        {days.map(({ date, key }) =>
          date ? (
            <div
              key={key}
              className={cn(
                'rounded-[5px] py-[5px] text-center text-[11px] transition-colors duration-150',
                isToday(date)
                  ? 'bg-text font-medium text-bg'
                  : isSameMonth(date, today)
                  ? 'cursor-pointer text-text hover:bg-surface2'
                  : 'text-muted'
              )}
            >
              {format(date, 'd')}
            </div>
          ) : (
            <div key={key} />
          )
        )}
      </div>
    </Widget>
  )
}
