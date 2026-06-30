/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 *
 * 👉 This is the FIRST file to edit when forking the template.
 * Everything else (projects, experience, skills, blogs) lives in
 * its own file inside /config so the data stays easy to maintain.
 * ─────────────────────────────────────────────────────────────
 */

// ── Types ───────────────────────────────────────────────────────────

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  /** Two-letter badge shown in the mobile status bar (e.g. "JD"). */
  initials: string
  /** Short role shown under your name in the Hero (e.g. "Frontend Engineer"). */
  role: string
  /** Longer title shown on the résumé header. */
  shortRole: string
  /** One-paragraph bio shown in the Hero. */
  tagline: string
  /** "City, Country" — displayed in Hero footer and résumé header. */
  location: string
  age: number | string
  /** Path (in /public) to your avatar image. */
  avatar: string
  /** Handle shown next to the avatar (no @). */
  username: string
}

export interface Social {
  github: string
  twitter: string
  /** Medium, Hashnode, personal blog, etc. */
  blog: string
  /** Bare GitHub username used in labels + API calls. */
  githubUsername: string
  /** Twitter/X handle, no @. */
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "twitter" | "github"
  href: string
  label: string
  /** Short monospaced value shown on the right of each row. */
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  /** If true, the arrow-arrow-b-a Konami code triggers an easter egg overlay. */
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  /** URL to an external résumé (Notion page, Google Doc, hosted PDF). */
  resumeLink: string
  features: Features
}

// ── EDIT BELOW ──────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Anish",
    lastName: "Kumar",
    fullName: "Anish Kumar",
    initials: "AK",
    role: "AI Engineer",
    shortRole: "AI Engineer",
    tagline:
      "I'm passionate about using technology to create better user experiences. Throughout my journey, I've focused on solving complex problems. I like breaking down complicated technical challenges into straightforward solutions that anyone can understand, I'm curious about artificial Intelligence, especially its working principles and long-term impact on Technology and society.",
    location: "India",
    age: 22,
    avatar: "/avatar.svg",
    username: "anish-kr",
  },

  social: {
    github: "https://github.com/anish-dbg",
    twitter: "https://x.com/anishkr_dbg",
    blog: "https://example.com/blog",
    githubUsername: "anish-dbg",
    twitterHandle: "anish-dbg",
  },

  contact: {
    email: "anishkr0098@gmail.com",
    calendar: "https://cal.com/janedeveloper",
    heading: "Let's Connect",
    subheading: "Open to collaborations, freelance work, or just a conversation.",
    rows: [
      { icon: "mail",     href: "anishkr0098@gmail.com",                 label: "Email",           mono: "anishkr0098@gmail.com" },
      { icon: "calendar", href: "https://cal.com/janedeveloper",         label: "Schedule a call", mono: "cal.com/janedeveloper" },
      { icon: "twitter",  href: "https://x.com/anishkr_dbg",           label: "X / Twitter",     mono: "@anish-dbg" },
      { icon: "github",   href: "https://github.com/anish-dbg",           label: "GitHub",          mono: "anish-dbg" },
    ],
  },

  seo: {
    title: "Anish Kumar",
    description: "Personal portfolio and writing by Anish Kumar.",
  },

  resumeLink: "https://example.com/resume",

  features: {
    konami: false,
  },
}
