'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { TERMINAL_COMMANDS, PERSONAL, PROJECTS, EXPERIENCE } from '@/lib/data'

interface HistoryEntry {
  type: 'input' | 'output' | 'system'
  text: string
}

function runCommand(input: string, openWindow?: (id: string) => void): string {
  const parts = input.trim().split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)

  if (!cmd) return ''

  if (cmd === 'help') {
    return `Available commands:
  whoami              About me
  ls [-a] [path]      List directory
  cat <file>          Print file
  cd [dir]            Change directory
  pwd                 Working directory
  date                Current date/time
  echo <text>         Echo text
  open <section>      Open a window
  neofetch            System info
  ping <host>         Ping a host
  man <cmd>           Manual page
  history             Command history
  env                 Environment variables
  clear               Clear terminal`
  }

  if (cmd === 'clear') return '__CLEAR__'
  if (cmd === 'date') return new Date().toString()
  if (cmd === 'echo') return args.join(' ')

  if (cmd === 'ping') {
    const host = args[0] || 'localhost'
    return `PING ${host}: 56 data bytes
64 bytes from ${host}: icmp_seq=0 ttl=64 time=0.${Math.floor(Math.random() * 900 + 100)} ms
64 bytes from ${host}: icmp_seq=1 ttl=64 time=0.${Math.floor(Math.random() * 900 + 100)} ms
--- ${host} ping statistics ---
2 packets transmitted, 2 received, 0% packet loss`
  }

  if (cmd === 'ls') {
    const path = args.find(a => !a.startsWith('-')) || '~'
    const showAll = args.includes('-a')

    if (path === '~' || path === 'projects/' || path === 'projects') {
      const entries = PROJECTS.personal.map(p =>
        p.name.toLowerCase().replace(/\s+/g, '-')
      )
      if (showAll) entries.unshift('.git', '.env')
      return entries.join('  ')
    }

    if (path === 'experience/' || path === 'experience') {
      return EXPERIENCE.map(e =>
        e.company.toLowerCase().replace(/\s+/g, '-') + '.md'
      ).join('  ')
    }

    return showAll
      ? '. .. about.txt projects/ experience/ blogs/ contact.md resume.pdf'
      : 'about.txt  projects/  experience/  blogs/  contact.md  resume.pdf'
  }

  if (cmd === 'cat') {
    const file = args[0]
    if (!file) return 'cat: missing file operand'
    if (file === 'about.txt') return TERMINAL_COMMANDS.whoami
    if (file === 'contact.md')
      return `# Contact
Email: ${PERSONAL.email}
Twitter: ${PERSONAL.twitter}
GitHub: github.com/${PERSONAL.github}`

    return `cat: ${file}: No such file or directory`
  }

  if (cmd === 'cd') {
    const dir = args[0]
    if (!dir || dir === '~') return ''
    if (['projects', 'experience', 'blogs'].includes(dir)) {
      return `changed directory to ${dir}`
    }
    return `cd: ${dir}: No such file or directory`
  }

  if (cmd === 'man') {
    const manCmd = args[0]
    if (!manCmd) return 'What manual page do you want?'

    const manuals: Record<string, string> = {
      whoami: 'whoami — display current user info and bio',
      ls: 'ls [-a] [path] — list directory contents',
      cat: 'cat <file> — print file contents',
      open: 'open <section> — open a portfolio window',
    }

    return manuals[manCmd] || `No manual entry for ${manCmd}`
  }

  if (cmd === 'open') {
    const section = args[0]
    const valid = ['about', 'projects', 'experience', 'blogs', 'contact', 'resume']

    if (!section) return 'open: missing section'
    if (valid.includes(section)) {
      openWindow?.(section)
      return `Opening ${section}…`
    }
    return `open: unknown section '${section}'`
  }

  if (cmd in TERMINAL_COMMANDS) {
    return TERMINAL_COMMANDS[cmd]
  }

  return `command not found: ${cmd}`
}

interface TerminalContentProps {
  openWindow?: (id: string) => void
}

export function TerminalContent({ openWindow }: TerminalContentProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'system', text: 'Portfolio OS v1.0.0' },
    { type: 'system', text: 'Type "help" for available commands.' },
  ])

  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [history])

  function submit() {
    if (!input.trim()) return

    const cmd = input.trim()
    const result = runCommand(cmd, openWindow)

    if (result === '__CLEAR__') {
      setHistory([])
      setInput('')
      return
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmd } as HistoryEntry,
      ...(result ? [{ type: 'output', text: result } as HistoryEntry] : []),
    ])

    setCmdHistory(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit()

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInput(cmdHistory[next] ?? '')
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : cmdHistory[next] ?? '')
    }
  }

  return (
     <div
      className="h-[500px] overflow-y-auto bg-[#0d1117] p-4 font-mono text-[13px] text-[#c9d1d9] leading-tight"
      ref={scrollRef}
      onClick={() => inputRef.current?.focus()}
    >
      {/* history */}
      {history.map((entry, i) => (
        <div key={i}>
          {entry.type === 'input' ? (
            <div>
              <span className="text-[#58a6ff]">ak@portfolio</span>
              <span className="text-[#8b949e]"> ~ % </span>
              {entry.text}
            </div>
          ) : (
            <pre className="whitespace-pre-wrap text-[#8b949e] m-0">
              {entry.text}
            </pre>
          )}
        </div>
      ))}

      {/* input directly after history */}
      <div className="flex items-center">
        <span className="text-[#58a6ff]">ak@portfolio</span>
        <span className="text-[#8b949e]"> ~ % </span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          autoFocus
          className="flex-1 bg-transparent outline-none text-[#c9d1d9]"
        />
      </div>
    </div>
  )

}