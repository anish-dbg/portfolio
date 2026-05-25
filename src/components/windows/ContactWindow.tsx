'use client'

import { PERSONAL } from '@/lib/data'
import { Mail, Calendar, Twitter } from 'lucide-react'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
  },
  {
    icon: Calendar,
    label: 'Schedule a call',
    value: PERSONAL.cal,
    href: `https://${PERSONAL.cal}`,
  },
  {
    icon: Twitter,
    label: 'X / Twitter',
    value: PERSONAL.twitter,
    href: `https://twitter.com/${PERSONAL.twitter.replace('@', '')}`,
  },
]

export function ContactContent() {
  return (
    <div className="p-8">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
        Contact
      </p>
      <h2 className="mb-2 font-display text-3xl font-bold text-white">
        Let&apos;s Connect
      </h2>
      <p className="mb-8 font-mono text-sm text-white/40">
        Open to collaborations, freelance work, or just a conversation.
      </p>

      <div className="space-y-0">
        {CONTACT_ITEMS.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-b border-white/[0.07] py-5 last:border-0 group"
          >
            <div className="flex items-center gap-3">
              <item.icon size={15} className="text-white/30 group-hover:text-white transition-colors" />
              <span className="font-mono text-sm font-medium text-white">{item.label}</span>
            </div>
            <span className="font-mono text-[12px] text-white/30 group-hover:text-white/60 transition-colors">
              {item.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
