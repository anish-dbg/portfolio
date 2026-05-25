// ─── SPOTIFY ─────────────────────────────────────────────────────────────────
export interface SpotifyTrack {
  isPlaying: boolean
  title: string
  artist: string
  album: string
  albumArt: string
  songUrl: string
}

// ─── GITHUB ───────────────────────────────────────────────────────────────────
export interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface ContributionWeek {
  days: ContributionDay[]
}

export interface GitHubContributions {
  totalContributions: number
  weeks: ContributionWeek[]
}

// ─── THEMES ───────────────────────────────────────────────────────────────────
export type ThemeName = 'default' | 'logic' | 'weeknd' | 'radiohead'

export interface Theme {
  name: ThemeName
  label: string
  accent: string
  bg: string
  surface: string
  surface2: string
  previewBg: string
}

// ─── CONFIG ───────────────────────────────────────────────────────────────────
export interface Quote {
  text: string
  category: string
}

export interface ReadingLink {
  title: string
  author: string
  tag: string
  url: string
}

export interface StatusItem {
  key: string
  value: string
}
