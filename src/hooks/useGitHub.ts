'use client'

import { useState, useEffect } from 'react'
import type { GitHubContributions } from '@/types'

export function useGitHub() {
  const [data, setData]       = useState<GitHubContributions | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then((d) => setData(d as GitHubContributions))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
