# chaitanya-bajpai.xyz — Portfolio OS

A macOS-style desktop portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## What's inside

Every section opens as a draggable, closeable macOS window launched from the dock at the bottom.

| Window     | Content                                         |
|------------|-------------------------------------------------|
| About      | Name, bio, role, social links                   |
| Experience | Work history with stack tags                    |
| Projects   | Personal + Client work with stars               |
| Blogs      | Technical + Philosophical writing               |
| Contact    | Email, Cal.com, X links                         |
| Résumé     | Full resume with skills + experience            |
| Terminal   | Fully interactive terminal (try `help`)         |
| Uses       | Hardware, editor, terminal, apps                |
| Notes      | Raw personal notes by month                     |
| GitHub     | Contribution graph + pinned repos               |
| X          | Latest tweets                                   |

## Quick start

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000

## Personalizing

**All content is in one file: `src/lib/data.ts`**

Edit `PERSONAL`, `EXPERIENCE`, `PROJECTS`, `BLOGS`, `NOTES`, `USES`, `RESUME_SKILLS`, `RESUME_EXPERIENCE`.

## Tech stack

- **Next.js 15** (App Router, `'use client'`)
- **TypeScript** strict mode
- **Tailwind CSS** with CSS variables for theming
- **Framer Motion** for window open/close, drag, dock animations
- **Lucide React** icons
- **date-fns** for clock formatting
- **Resend** for contact form emails

## Project structure

```
src/
├── app/
│   ├── api/
│   │   ├── spotify/route.ts   ← Now playing
│   │   ├── github/route.ts    ← Contributions
│   │   ├── visitors/route.ts  ← Visit counter
│   │   └── contact/route.ts   ← Email via Resend
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               ← Desktop canvas + window manager
├── components/
│   ├── ui/
│   │   ├── MacWindow.tsx      ← Draggable macOS window base
│   │   ├── MacDock.tsx        ← Bottom icon dock
│   │   └── TopBar.tsx         ← Top menu bar with clock
│   └── windows/               ← One file per window
│       ├── AboutWindow.tsx
│       ├── ExperienceWindow.tsx
│       ├── ProjectsWindow.tsx
│       ├── BlogsWindow.tsx
│       ├── ContactWindow.tsx
│       ├── ResumeWindow.tsx
│       ├── TerminalWindow.tsx
│       ├── UsesWindow.tsx
│       ├── NotesWindow.tsx
│       ├── GitHubWindow.tsx
│       └── XWindow.tsx
├── hooks/
│   ├── useClock.ts
│   ├── useSpotify.ts
│   ├── useGitHub.ts
│   └── useVisitors.ts
└── lib/
    ├── data.ts                ← ALL your content here
    ├── spotify.ts
    ├── github.ts
    └── utils.ts
```

## Setting up live data

### GitHub contributions
1. Go to https://github.com/settings/tokens
2. Generate classic token with `read:user` scope
3. Add `GITHUB_TOKEN=...` and `GITHUB_USERNAME=...` to `.env.local`

### Spotify now playing
1. Create app at https://developer.spotify.com/dashboard
2. Add `http://localhost:3001/callback` as Redirect URI
3. Add `SPOTIFY_CLIENT_ID` + `SPOTIFY_CLIENT_SECRET` to `.env.local`
4. Run `node scripts/get-spotify-token.js` and follow instructions
5. Add `SPOTIFY_REFRESH_TOKEN=...` to `.env.local`

### Visit counter
1. Go to https://countapi.xyz and pick a namespace
2. Add `COUNTAPI_NAMESPACE` + `COUNTAPI_KEY` to `.env.local`

### Contact email
1. Sign up at https://resend.com (free tier: 3000 emails/month)
2. Add `RESEND_API_KEY=...` and `RESEND_TO_EMAIL=...` to `.env.local`

## Deploy

```bash
npx vercel
```

Add all `.env.local` values in Vercel dashboard → Settings → Environment Variables.

## Terminal commands

The terminal window is fully interactive. Try:

```
help          — list all commands
whoami        — about me
ls -a         — list files
cat about.txt — print file
neofetch      — system info
open projects — open Projects window
open resume   — open Résumé window
ping google.com
history
env
```
