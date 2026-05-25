'use client'
import type { CanvasWidgetProps } from '@/types/canvas'

import { Widget } from '@/components/ui/Widget'
import { useVisitors } from '@/hooks/useVisitors'

export function VisitorsWidget(props: CanvasWidgetProps) {
  const { count, loading } = useVisitors()

  return (
    <Widget {...props} label="Visitors">
      <div className="font-display text-[42px] font-bold leading-none text-text">
        {loading ? (
          <span className="text-muted">—</span>
        ) : (
          (count ?? 0).toLocaleString()
        )}
      </div>
      <p className="mt-1.5 text-[10px] uppercase tracking-[0.1em] text-muted">
        Total Visits
      </p>
    </Widget>
  )
}
