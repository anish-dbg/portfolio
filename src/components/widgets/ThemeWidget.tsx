'use client'
import type { CanvasWidgetProps } from '@/types/canvas'

import { Widget } from '@/components/ui/Widget'
import { useTheme } from '@/lib/theme-context'
import { THEMES } from '@/lib/config'
import { cn } from '@/lib/utils'

export function ThemeWidget(props: CanvasWidgetProps) {
  const { theme, setTheme } = useTheme()

  return (
    <Widget {...props}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.12em] text-muted">Theme</span>
        <span className="text-[9px] uppercase tracking-[0.12em] text-text">
          {THEMES.find((t) => t.name === theme)?.label}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {THEMES.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={cn(
              'group overflow-hidden rounded-[8px] border-[1.5px] transition-all duration-200',
              theme === t.name ? 'border-text' : 'border-transparent hover:border-white/20'
            )}
          >
            {/* preview swatch */}
            <div
              className="flex aspect-square w-full items-center justify-center rounded-[6px]"
              style={{ background: t.previewBg }}
            >
              <div
                className="h-3.5 w-3.5 rounded-[3px] opacity-70 transition-opacity group-hover:opacity-100"
                style={{ background: t.accent }}
              />
            </div>
            <p
              className={cn(
                'mt-1 text-center text-[8px] uppercase tracking-[0.06em]',
                theme === t.name ? 'text-text' : 'text-muted'
              )}
            >
              {t.label}
            </p>
          </button>
        ))}
      </div>
    </Widget>
  )
}
