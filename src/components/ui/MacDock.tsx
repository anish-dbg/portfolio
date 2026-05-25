'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Briefcase, Code2, BookOpen, Mail,
  FileText, Terminal, Cpu, StickyNote,
  Github, X as XIcon
} from 'lucide-react'

import { cn } from '@/lib/utils'

export type WindowId =
  | 'about' | 'experience' | 'projects' | 'blogs'
  | 'contact' | 'resume' | 'terminal' | 'uses'
  | 'notes' | 'github' | 'x'

export const DOCK_ITEMS: { id: WindowId; icon: React.ElementType; label: string }[] = [
  { id: 'about',      icon: User,       label: 'About'      },
  { id: 'experience', icon: Briefcase,  label: 'Experience' },
  { id: 'projects',   icon: Code2,      label: 'Projects'   },
  { id: 'blogs',      icon: BookOpen,   label: 'Blogs'      },
  { id: 'contact',    icon: Mail,       label: 'Contact'    },
  { id: 'resume',     icon: FileText,   label: 'Résumé'     },
  { id: 'terminal',   icon: Terminal,   label: 'Terminal'   },
  { id: 'uses',       icon: Cpu,        label: 'Uses'       },
  { id: 'notes',      icon: StickyNote, label: 'Notes'      },
  { id: 'github',     icon: Github,     label: 'GitHub'     },
  { id: 'x',          icon: XIcon,      label: 'X'          },
]

interface MacDockProps {
  openWindows: Set<WindowId>
  focusedWindow: WindowId | null
  onOpen: (id: WindowId) => void
}

export function MacDock({ openWindows, focusedWindow, onOpen }: MacDockProps) {
  const [hovered, setHovered] = useState<WindowId | null>(null)

  return (
    <div className="fixed bottom-4 left-1/2  -translate-x-1/2 backdrop-blur-xl bg-white/10 px-4 py-2 rounded-2xl shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex items-end gap-1.5 rounded-2xl border border-white/[0.12] bg-[#1a1a1a]/80 px-3 py-2.5 backdrop-blur-2xl"
      >
        {DOCK_ITEMS.map((item) => {
          const isOpen = openWindows.has(item.id)
          const isFocused = focusedWindow === item.id
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hovered === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.9 }}
                    transition={{ duration: 0.12 }}
                    className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-white/[0.1] bg-[#1a1a1a] px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-white/70"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon button */}
              <motion.button
                onClick={() => onOpen(item.id)}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-150',
                  isFocused
                    ? 'bg-white/[0.15] text-white'
                    : isOpen
                    ? 'bg-white/[0.08] text-white/70'
                    : 'bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/70'
                )}
              >
                <Icon size={16} />
              </motion.button>

              {/* Open indicator dot */}
              {isOpen && (
                <div className="mt-1 h-[3px] w-[3px] rounded-full bg-white/50" />
              )}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
