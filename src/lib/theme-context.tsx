'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { THEMES, DEFAULT_THEME } from '@/lib/config'
import type { ThemeName, Theme } from '@/types'

interface ThemeContextValue {
  theme: ThemeName
  themeData: Theme
  setTheme: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME)

  const themeData = THEMES.find((t) => t.name === theme) ?? THEMES[0]

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as ThemeName | null
    if (saved && THEMES.find((t) => t.name === saved)) {
      setThemeState(saved)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-accent',   themeData.accent)
    root.style.setProperty('--color-bg',       themeData.bg)
    root.style.setProperty('--color-surface',  themeData.surface)
    root.style.setProperty('--color-surface2', themeData.surface2)
  }, [themeData])

  function setTheme(name: ThemeName) {
    setThemeState(name)
    localStorage.setItem('portfolio-theme', name)
  }

  return (
    <ThemeContext.Provider value={{ theme, themeData, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
