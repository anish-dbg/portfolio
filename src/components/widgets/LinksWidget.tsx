'use client'
import type { CanvasWidgetProps } from '@/types/canvas'

import { Widget } from '@/components/ui/Widget'
import { READING_LINKS } from '@/lib/config'

export function LinksWidget(props: CanvasWidgetProps) {
  return (
    <Widget {...props} label="Links · Worth Reading">
      <div className="flex flex-col">
        {READING_LINKS.map((link, i) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'group py-[10px]',
              i < READING_LINKS.length - 1
                ? 'border-b border-white/[0.07]'
                : '',
            ].join(' ')}
          >
            <p className="mb-[3px] text-[12px] text-text transition-colors duration-200 group-hover:text-accent">
              {link.title}
            </p>
            <p className="text-[10px] text-muted">
              {link.author}
              <span className="mx-1 text-white/20">·</span>
              {link.tag}
            </p>
          </a>
        ))}
      </div>
    </Widget>
  )
}
