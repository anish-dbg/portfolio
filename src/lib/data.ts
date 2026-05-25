// ─── PERSONAL ─────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Anish Kumar',
  handle: 'anish kr',
  role: 'SR. RUST / SOLANA PROTOCOL ENGINEER',
  location: 'Bihar · 22',
  bio: 'Building systems at the intersection of distributed computing and on-chain finance. Protocols, indexers, smart contracts. Occasionally writes about Rust and the examined life.',
  email: 'anishkr0098@gmail.com',
  twitter: '@anish-dbg',
  github: 'anish-dbg',
  cal: 'cal.com/chaitanya-bajpai',
  notion: 'https://notion.so',
  avatar: '/avatar.jpg',
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: 'Exo Technologies',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    description: 'Building Solana-based protocols and infrastructure solutions.',
    stack: ['Solana', 'Rust', 'TypeScript', 'Anchor'],
  },
  {
    company: 'Wildcard',
    role: 'Full-Stack Blockchain Engineer',
    period: 'Past',
    description: 'Smart wallet infrastructure and multi-chain blockchain applications.',
    stack: ['Rust', 'Solana', 'EVM', 'Next.js'],
  },
  {
    company: 'Swifey AI',
    role: 'Full-Stack Engineer',
    period: 'Past',
    description: 'Full-stack development across web, mobile, blockchain, and AI agents.',
    stack: ['FastAPI', 'Node.js', 'React', 'Flutter', 'Solana', 'Rust'],
  },
  {
    company: 'Veritas AO',
    role: 'Founding Engineer',
    period: 'Apr – Nov 2024',
    description: "Fair-launch token platform on Arweave's AO compute protocol.",
    stack: ['AO', 'Lua', 'TypeScript', 'React'],
  },
  {
    company: 'Grafieks',
    role: 'Full-Stack Engineering Intern',
    period: '2023',
    description: 'Internal tooling, data pipelines, and dashboard components.',
    stack: [],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = {
  personal: [
    {
      name: 'Exchange',
      stars: 16,
      description: 'High-performance CEX backend with a trade matching engine, pub/sub order book, and TimescaleDB for tick data.',
      stack: ['Rust', 'Actix Web', 'PostgreSQL', 'Redis', 'TimescaleDB'],
      url: 'https://github.com/cb7chaitanya',
    },
    {
      name: 'Networking',
      stars: 15,
      description: 'Low-level TCP/UDP networking primitives and async I/O patterns built in Rust from scratch.',
      stack: ['Rust'],
      url: 'https://github.com/cb7chaitanya',
    },
    {
      name: 'StreamVault',
      stars: 7,
      description: 'Decentralized video sharing platform on WeaveVM with permanent on-chain storage and EVM contract integration.',
      stack: ['WeaveVM', 'Arweave', 'React', 'Solidity'],
      url: 'https://github.com/cb7chaitanya',
    },
    {
      name: 'Bonding Curve',
      stars: 7,
      description: 'Solana smart contracts implementing bonding curve mechanics for fair token launches on Swifey.',
      stack: ['Rust', 'Anchor', 'Solana'],
      url: 'https://github.com/cb7chaitanya',
    },
  ],
  client: [
    {
      name: 'Wildcard Smart Wallet',
      stars: 0,
      description: 'Backend APIs and Rust-based multi-chain indexer for Solana + EVM smart wallet consumer app.',
      stack: ['Rust', 'Solana', 'EVM', 'Node.js'],
      url: null,
    },
    {
      name: 'SKR Tokenomics',
      stars: 0,
      description: 'Two-step tokenomics program architecture for the SKR token launch at Exo Technologies.',
      stack: ['Rust', 'Anchor', 'Solana'],
      url: null,
    },
  ],
}

// ─── BLOGS ────────────────────────────────────────────────────────────────────
export const BLOGS = {
  technical: [
    {
      title: 'Building a Reliable TCP-Like Transport Over UDP in Rust',
      description: 'Packet reliability, congestion control, and adversarial network simulation over raw UDP.',
      date: 'Mar 2026',
      url: '#',
    },
    {
      title: 'Building a DNS Resolver from Scratch in Rust',
      description: 'Full iterative resolver covering wire formats, compression, caching, and concurrency.',
      date: 'Feb 2026',
      url: '#',
    },
    {
      title: 'Video Diffusion Models: Teaching Machines To Imagine Motion',
      description: 'Deep dive into video generation using diffusion models and text-to-video guidance.',
      date: 'Dec 2025',
      url: '#',
    },
    {
      title: 'When process.env Bites Back: A Node.js Performance Lesson',
      description: 'A real-world API optimization story — why repeated env lookups can silently cost you.',
      date: 'May 2025',
      url: '#',
    },
    {
      title: 'Cookie-based Authentication: A Simple Guide for Secure Sessions',
      description: 'How cookie-based auth works under the hood and the right way to implement it.',
      date: 'Jul 2024',
      url: '#',
    },
    {
      title: "Understanding TypeScript's Handling of Object Literal Types",
      description: 'Quirks in TypeScript object literal type checking that trip up experienced developers.',
      date: 'Jun 2024',
      url: '#',
    },
  ],
  philosophical: [
    {
      title: 'On Solitude and Self-Sufficiency',
      description: 'What it means to be genuinely comfortable alone, and why that\'s worth building.',
      date: 'Mar 2026',
      url: '#',
    },
    {
      title: 'The Patience Problem',
      description: 'Been thinking lately about how underrated patience is in a world optimized for speed.',
      date: 'Feb 2026',
      url: '#',
    },
  ],
}

// ─── NOTES ────────────────────────────────────────────────────────────────────
export const NOTES = [
  {
    month: 'MAR 2026',
    content: 'Eyes open. Hands steady. Mind clear. Heart quiet. Back straight.\n\nMarch through life.',
  },
  {
    month: 'FEB 2026',
    content: "Been thinking lately about how underrated patience is.\n\nI've always struggled with wanting instant results from anything I put real effort into. When things don't click immediately, it feels unfair. But maybe not getting something right away is exactly what makes it meaningful later. Maybe waiting for something is preparation for that something, and isn't being better prepared a gift?",
  },
]

// ─── USES ─────────────────────────────────────────────────────────────────────
export const USES = {
  hardware: [
    { name: 'MacBook Pro M3 Pro', detail: '18GB · primary machine' },
    { name: 'LG 27" 4K Monitor', detail: '27UN850' },
    { name: 'Keychron K2 V2', detail: 'Brown switches' },
    { name: 'AirPods Pro 2', detail: 'for deep work' },
  ],
  editor: [
    { name: 'VS Code', detail: 'daily driver' },
    { name: 'Neovim', detail: 'config: lazyvim' },
    { name: 'Catppuccin Mocha', detail: 'theme' },
    { name: 'JetBrains Mono', detail: 'font, 14px' },
  ],
  terminal: [
    { name: 'WezTerm', detail: 'terminal emulator' },
    { name: 'Fish Shell', detail: 'with starship prompt' },
    { name: 'tmux', detail: 'session manager' },
  ],
  apps: [
    { name: 'Notion', detail: 'notes & planning' },
    { name: 'Linear', detail: 'project tracking' },
    { name: 'Raycast', detail: 'launcher' },
    { name: 'Arc', detail: 'browser' },
  ],
}

// ─── RESUME SKILLS ────────────────────────────────────────────────────────────
export const RESUME_SKILLS = [
  { category: 'Protocol / Chain', skills: ['Solana', 'Anchor', 'PDAs', 'CPIs', 'SPL Tokens', 'AO Protocol', 'Arweave', 'EVM', 'Solidity'] },
  { category: 'Systems / Backend', skills: ['Rust', 'Actix Web', 'Node.js', 'TypeScript', 'Go', 'FastAPI', 'Lua'] },
  { category: 'Data / Infra', skills: ['PostgreSQL', 'TimescaleDB', 'Redis', 'Docker', 'AWS S3', 'Indexer Architecture'] },
  { category: 'Frontend / Mobile', skills: ['React', 'Next.js', 'TailwindCSS', 'Flutter'] },
]

export const RESUME_EXPERIENCE = [
  {
    company: 'Exo Technologies',
    role: 'Senior Protocol Engineer',
    period: 'Jun 2025 – Present',
    bullets: [
      'Auditing the Solana Record Service — an official Solana Foundation extension to the Solana Name Service (SNS)',
      "Building indexing solutions and TypeScript SDKs for Doma's Solana DomainFi contracts",
      'Designed and implemented a two-step tokenomics program architecture for the SKR token launch',
    ],
  },
  {
    company: 'Independent Contractor',
    role: 'Full-Stack Blockchain Engineer',
    period: 'Jan 2024 – Jun 2025',
    sub: 'via Wildcard · Swifey AI',
    bullets: [
      'Built and maintained backend APIs and a Rust-based multi-chain indexer (Solana + EVM) for Wildcard\'s smart wallet consumer app',
     'Built Bonding Curve Solana programs for Swifey AI\'s fair token launch infrastructure',,
    ],
  },
]

// ─── TERMINAL COMMANDS ────────────────────────────────────────────────────────
export const TERMINAL_COMMANDS: Record<string, string> = {
  whoami: `Anish Kumar\nSr. Rust / Solana Protocol Engineer\nDelhi, India · 22 years old\nBuilding at the intersection of distributed computing and on-chain finance.`,
  pwd: `/home/anishkr`,
  date: new Date().toString(),
  neofetch: `        #####\n       #######           anishkr@portfolio\n       ##O#O##           ─────────────────────\n       #######           OS: Portfolio OS v1.0.0\n     ###########         Host: chaitanya-bajpai.xyz\n    #############        Shell: zsh\n   ###############       Languages: Rust, TypeScript, Solana\n   ####  #  ######       Editor: Neovim (lazyvim)\n  ####  ##  #####        Location: Delhi, India\n   ###########           Status: Open to work\n    #########`,
  env: `USER=anishkr\nHOME=/home/anishkr\nEDITOR=nvim\nSHELL=zsh\nLANG=en_US.UTF-8\nTZ=Asia/Kolkata\nSTACK=Rust,TypeScript,Solana\nSTATUS=open_to_work`,
  history: `1  neofetch\n2  ls -a projects/\n3  cat about.txt\n4  cd experience/\n5  ls\n6  cat exo-technologies.md\n7  cd ~/projects\n8  git log --oneline exchange\n9  open contact\n10 help`,
}
