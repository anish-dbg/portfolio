'use client'
import type { CanvasWidgetProps } from '@/types/canvas'

import { Widget } from '@/components/ui/Widget'
import { useGitHub } from '@/hooks/useGitHub'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

const LEVEL_CLASSES: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: 'bg-surface2',
  1: 'bg-[#0e4429]',
  2: 'bg-[#006d32]',
  3: 'bg-[#26a641]',
  4: 'bg-[#39d353]',
}

/**
 * Builds a 53-column week grid anchored to TODAY.
 *
 * - The last column always ends on today's weekday.
 * - The first column starts on the Sunday that is ≥52 full weeks before today.
 * - Every cell carries the real calendar date so the grid re-renders correctly
 *   on every new day without any manual intervention.
 */
function buildDateGrid() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Anchor the grid's last day to today
  const lastDay = new Date(today)

  // Step back to the Sunday of today's week to know the grid's last column end
  // The grid is made of 53 columns (weeks). Column 0 = oldest, column 52 = current week.
  // Total cells = 53 * 7 = 371 days going backwards from the last Sunday ≥ today.

  // Find the first day of the grid:
  // Go back 52 full weeks from today's week-start (Sunday), then that's column 0.
  const todayDow = today.getDay() // 0 = Sun … 6 = Sat

  // The grid ends on today. The last column has (todayDow + 1) cells filled,
  // the rest are empty padding (rendered as level-0 placeholders).
  // Start date = 52 weeks back from the most recent Sunday on or before today.
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - todayDow - 52 * 7) // go to Sunday 52 weeks ago

  const weeks: { date: string; dow: number }[][] = []
  const cursor = new Date(startDate)

  while (cursor <= lastDay) {
    const week: { date: string; dow: number }[] = []
    for (let d = 0; d < 7; d++) {
      if (cursor > lastDay) break
      week.push({
        date: cursor.toISOString().slice(0, 10),
        dow: cursor.getDay(),
      })
      cursor.setDate(cursor.getDate() + 1)
    }
    weeks.push(week)
  }

  return { weeks, startDate, today }
}

export function GitHubWidget(props: CanvasWidgetProps) {
  const { data, loading } = useGitHub()

  // Build the date skeleton once per render (cheap — just date math)
  const { weeks: dateGrid } = buildDateGrid()

  // Index contribution data by date string for O(1) lookup
  const contributionMap = new Map<string, { count: number; level: 0 | 1 | 2 | 3 | 4 }>()
  if (data) {
    for (const week of data.weeks) {
      for (const day of week.days) {
        contributionMap.set(day.date, { count: day.count, level: day.level })
      }
    }
  }

  return (
    <Widget {...props}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[12px] text-muted">⌥ {SITE_CONFIG.githubUser}</span>
        <span className="text-[11px] text-muted">
          {loading
            ? '…'
            : `${(data?.totalContributions ?? 0).toLocaleString()} contributions this year`}
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-[3px]">
          {dateGrid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map(({ date }) => {
                const contrib = contributionMap.get(date)
                const level = loading ? 0 : (contrib?.level ?? 0)
                const count = contrib?.count ?? 0

                return (
                  <div
                    key={date}
                    title={`${date}: ${count} contributions`}
                    className={cn(
                      'h-[10px] w-[10px] rounded-[2px] transition-opacity hover:opacity-70',
                      loading && 'animate-pulse',
                      LEVEL_CLASSES[level],
                    )}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </Widget>
  )
}