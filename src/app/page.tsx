'use client'

import { MacDock, WindowId, DOCK_ITEMS } from "@/components/ui/MacDock"
import { MacWindow } from "@/components/ui/MacWindow"
import { TopBar } from "@/components/ui/TopBar"
import { CalendarWidget } from "@/components/widgets/CalendarWidget"
import { GitHubWidget } from "@/components/widgets/GitHubWidget"
import { LinksWidget } from "@/components/widgets/LinksWidget"
import { QuoteWidget } from "@/components/widgets/QuoteWidget"
import { SpotifyWidget } from "@/components/widgets/SpotifyWidget"
import { StatusWidget } from "@/components/widgets/StatusWidget"
import { ThemeWidget } from "@/components/widgets/ThemeWidget"
import { VisitorsWidget } from "@/components/widgets/VisitorsWidget"
import { AboutContent } from "@/components/windows/AboutWindow"
import { BlogsContent } from "@/components/windows/BlogsWindow"
import { ContactContent } from "@/components/windows/ContactWindow"
import { ExperienceContent } from "@/components/windows/ExperienceWindow"
import { GitHubContent } from "@/components/windows/GitHubWindow"
import { NotesContent } from "@/components/windows/NotesWindow"
import { ProjectsContent } from "@/components/windows/ProjectsWindow"
import { ResumeContent } from "@/components/windows/ResumeWindow"
import { TerminalContent } from "@/components/windows/TerminalWindow"
import { UsesContent } from "@/components/windows/UsesWindow"
import { XContent } from "@/components/windows/XWindow"
import { useCallback, useState } from "react"



// ── widgets ─────────────────────────────────────────────
type WidgetId =
  | 'quote' | 'theme' | 'calendar' | 'status'
  | 'links' | 'visitors' | 'spotify' | 'github'

type AllId = WindowId | WidgetId

// ── layout ──────────────────────────────────────────────
const INITIAL_LAYOUT = {
  quote:    { x: 20,   y: 52,   w: 260 },
  theme:    { x: 800,  y: 52,   w: 300 },
  calendar: { x: 1170,  y: 280,   w: 300 },
  status:   { x: 1200,  y: 52,   w: 260 },
  links:    { x: 20,   y: 220,  w: 260 },
  visitors: { x: 296,  y: 52,  w: 300 },
  spotify:  { x: 570,   y: 230,  w: 260 },
  github:   { x: 285,  y: 330,  w: 892 },
}

// ── windows config ──────────────────────────────────────
const WINDOW_CONFIG = {
  about:      { title: 'About', width: 500, height: 460, x: 280,  y: 40 },
  experience: { title: 'Experience', width: 600, height: 460, x: 280, y: 80 },
  projects:   { title: 'Projects', width: 600, height: 460, x: 280, y: 80 },
  blogs:      { title: 'Blogs', width: 600, height: 460, x: 280, y: 80 },
  contact:    { title: 'Contact', width: 500, height: 380, x: 280, y: 60 },
  resume:     { title: 'Resume', width: 600, height: 460, x: 280, y: 80 },
  terminal:   { title: 'Terminal', width: 600, height: 450, x: 320, y: 100 },
  uses:       { title: 'Uses', width: 560, height: 450, x: 280, y: 80 },
  notes:      { title: 'Notes', width: 520, height: 540, x: 150, y: 60 },
  github:     { title: 'GitHub', width: 680, height: 560, x: 120, y: 60 },
  x:          { title: 'X', width: 560, height: 520, x: 160, y: 70 },
}

// ── window content ──────────────────────────────────────
function WindowContent({ id, openWindow }: { id: WindowId, openWindow: (id: WindowId) => void }) {
  switch (id) {
    case 'about': return <AboutContent />
    case 'experience': return <ExperienceContent />
    case 'projects': return <ProjectsContent />
    case 'blogs': return <BlogsContent />
    case 'contact': return <ContactContent />
    case 'resume': return <ResumeContent />
    case 'terminal': return <TerminalContent openWindow={(id: string) => openWindow(id as WindowId)} />
    case 'uses': return <UsesContent />
    case 'notes': return <NotesContent />
    case 'github': return <GitHubContent />
    case 'x': return <XContent />
  }
}

export default function Home() {
  const WINDOW_IDS = DOCK_ITEMS.map(i => i.id)

  const [openWindows, setOpenWindows] = useState<Set<WindowId>>(new Set(['about' as WindowId]))
  const [focusedWindow, setFocusedWindow] = useState<WindowId | null>('about')

  const [zMap, setZMap] = useState<Record<string, number>>({})
  const [topZ, setTopZ] = useState(10)

  // ✅ FIXED bringToFront
  const bringToFront = useCallback((id: AllId) => {
    setTopZ(prev => {
      const newZ = prev + 1
      setZMap(z => ({ ...z, [id]: newZ }))
      return newZ
    })

    if (WINDOW_IDS.includes(id as WindowId)) {
      setFocusedWindow(id as WindowId)
    }
  }, [])

  const openWindow = (id: WindowId) => {
    setOpenWindows(prev => new Set(prev).add(id))
    bringToFront(id)
  }

  const closeWindow = (id: WindowId) => {
    setOpenWindows(prev => {
      const n = new Set(prev)
      n.delete(id)
      return n
    })
  }

  return (
    <div className="h-screen w-screen bg-[#0a0a0a] overflow-hidden">
      <TopBar />

      {/* ✅ SINGLE CANVAS */}
      <main className="relative h-[calc(100vh-36px)] mt-[36px] pb-32">

        {/* ── Widgets ── */}
         <QuoteWidget
          defaultX={INITIAL_LAYOUT.quote.x}   defaultY={INITIAL_LAYOUT.quote.y}
          width={INITIAL_LAYOUT.quote.w}      zIndex={zMap.quote}
          delay={0.05}                onFocus={() => bringToFront('quote')}
        />

        <ThemeWidget
          defaultX={INITIAL_LAYOUT.theme.x}   defaultY={INITIAL_LAYOUT.theme.y}
          width={INITIAL_LAYOUT.theme.w}      zIndex={zMap.theme}
          delay={0.1}                 onFocus={() => bringToFront('theme')}
        />

        <CalendarWidget
          defaultX={INITIAL_LAYOUT.calendar.x} defaultY={INITIAL_LAYOUT.calendar.y}
          width={INITIAL_LAYOUT.calendar.w}    zIndex={zMap.calendar}
          delay={0.15}                 onFocus={() => bringToFront('calendar')}
        />

        <StatusWidget
          defaultX={INITIAL_LAYOUT.status.x}  defaultY={INITIAL_LAYOUT.status.y}
          width={INITIAL_LAYOUT.status.w}     zIndex={zMap.status}
          delay={0.2}                 onFocus={() => bringToFront('status')}
        />

        <LinksWidget
          defaultX={INITIAL_LAYOUT.links.x}   defaultY={INITIAL_LAYOUT.links.y}
          width={INITIAL_LAYOUT.links.w}      zIndex={zMap.links}
          delay={0.25}                onFocus={() => bringToFront('links')}
        />

        <VisitorsWidget
          defaultX={INITIAL_LAYOUT.visitors.x} defaultY={INITIAL_LAYOUT.visitors.y}
          width={INITIAL_LAYOUT.visitors.w}    zIndex={zMap.visitors}
          delay={0.3}                  onFocus={() => bringToFront('visitors')}
        />

        <SpotifyWidget
          defaultX={INITIAL_LAYOUT.spotify.x}  defaultY={INITIAL_LAYOUT.spotify.y}
          width={INITIAL_LAYOUT.spotify.w}     zIndex={zMap.spotify}
          delay={0.35}                 onFocus={() => bringToFront('spotify')}
        />

        <GitHubWidget
          defaultX={INITIAL_LAYOUT.github.x}   defaultY={INITIAL_LAYOUT.github.y}
          width={INITIAL_LAYOUT.github.w}      zIndex={zMap.github}
          delay={0.4}                  onFocus={() => bringToFront('github')}
        />

        {/* ── Windows ── */}
        {DOCK_ITEMS.map(item => {
          const cfg = WINDOW_CONFIG[item.id]

          return (
            <MacWindow
              key={item.id}
              id={item.id}
              title={cfg.title}
              isOpen={openWindows.has(item.id)}
              isFocused={focusedWindow === item.id}
              onClose={() => closeWindow(item.id)}
              onFocus={() => bringToFront(item.id)}
              defaultX={cfg.x}
              defaultY={cfg.y}
              width={cfg.width}
              height={cfg.height}
              zIndex={zMap[item.id]}
            >
              <WindowContent id={item.id} openWindow={openWindow} />
            </MacWindow>
          )
        })}
      </main>
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]">
      <MacDock
        openWindows={openWindows}
        focusedWindow={focusedWindow}
        onOpen={openWindow}
      />
       </div>
    </div>
  )
}