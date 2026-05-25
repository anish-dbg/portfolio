import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'

export const metadata: Metadata = {
  title: 'Anish Kumar',
  description: 'Sr. Rust / Solana Protocol Engineer. Building at the intersection of distributed computing and on-chain finance.',
  openGraph: {
    title: 'Anish Kumar',
    description: 'Sr. Rust / Solana Protocol Engineer',
    type: 'website',
    url: 'https://chaitanya-bajpai.xyz',
  },
  twitter: {
    card: 'summary',
    creator: '@anish-dbg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
