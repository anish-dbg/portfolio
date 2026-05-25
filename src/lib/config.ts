import type { Quote, ReadingLink, StatusItem, Theme, ThemeName } from '@/types'

// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: 'AK',
  handle: 'anish-dbg',
  githubUser: 'anish-dbg',
  desktopLabel: 'Desktop',
} as const

// ─── QUOTES ───────────────────────────────────────────────────────────────────
export const QUOTES: Quote[] = [
  { text: 'Intensity becomes identity when you forget you chose it.', category: 'WRITING' },
  { text: 'Build things people use, not things that look used.', category: 'ENGINEERING' },
  { text: 'The stack matters less than the taste you bring to it.', category: 'PHILOSOPHY' },
  { text: 'Rust is not a language. It\'s a discipline.', category: 'SYSTEMS' },
  { text: 'Ship the idea. Refine the execution.', category: 'PRODUCT' },
]

// ─── STATUS ───────────────────────────────────────────────────────────────────
export const STATUS_OPEN_TO_WORK = true

export const STATUS_ITEMS: StatusItem[] = [
  { key: 'BUILDING', value: 'SKR Tokenomics @ Exo Technologies' },
  { key: 'READING',  value: 'The Stranger by Albert Camus'       },
  { key: 'WRITING',  value: 'Rust Networking Series'             },
]

// ─── READING LINKS ────────────────────────────────────────────────────────────
export const READING_LINKS: ReadingLink[] = [
  { title: 'The Zen of Erlang',       author: 'Fred Hebert',    tag: 'systems',    url: 'https://ferd.ca/the-zen-of-erlang.html' },
  { title: 'Fearless Concurrency',    author: 'The Rust Book',  tag: 'rust',       url: 'https://doc.rust-lang.org/book/ch16-00-concurrency.html' },
  { title: 'without.boats',           author: 'withoutboats',   tag: 'rust',       url: 'https://without.boats/' },
  { title: 'Meditations',             author: 'Marcus Aurelius', tag: 'philosophy', url: 'https://en.wikipedia.org/wiki/Meditations' },
  { title: 'Solana Program Library',  author: 'Solana Labs',    tag: 'solana',     url: 'https://spl.solana.com/' },
]

// ─── DOCK ITEMS ───────────────────────────────────────────────────────────────
export const DOCK_ITEMS = [
  { icon: 'User',      label: 'Profile',  href: '#profile'  },
  { icon: 'Briefcase', label: 'Projects', href: '#projects' },
  { icon: 'Code2',     label: 'Code',     href: 'https://github.com/anish-dbg' },
  { icon: 'BookOpen',  label: 'Blog',     href: '#blog'     },
  { icon: 'Mail',      label: 'Mail',     href: 'mailto:anishkr0098@gmail.com'   },
  { icon: 'StickyNote', label: 'Notes',  href: '#notes'    },
  { icon: 'Settings',  label: 'Settings', href: '#settings' },
] as const

// ─── THEMES ───────────────────────────────────────────────────────────────────
export const THEMES: Theme[] = [
  {
    name: 'default',
    label: 'DEFAULT',
    accent: '#1db954',
    bg: '#0a0a0a',
    surface: '#111111',
    surface2: '#161616',
    previewBg: '#111111',
  },
  {
    name: 'logic',
    label: 'LOGIC',
    accent: '#4f8ef7',
    bg: '#0a0a14',
    surface: '#0f1128',
    surface2: '#141832',
    previewBg: '#0f1128',
  },
  {
    name: 'weeknd',
    label: 'THE WEEKND',
    accent: '#c0392b',
    bg: '#0a0505',
    surface: '#120808',
    surface2: '#1a0c0c',
    previewBg: '#120808',
  },
  {
    name: 'radiohead',
    label: 'RADIOHEAD',
    accent: '#d4a017',
    bg: '#080808',
    surface: '#111009',
    surface2: '#191710',
    previewBg: '#111009',
  },
]

export const DEFAULT_THEME: ThemeName = 'default'
