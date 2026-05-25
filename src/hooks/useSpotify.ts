'use client'

import { useState, useEffect } from 'react'
import type { SpotifyTrack } from '@/types'

const POLL_INTERVAL = 30_000 // 30 seconds

export function useSpotify() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)

  async function fetchTrack() {
    try {
      const res  = await fetch('/api/spotify')
      const data = await res.json() as SpotifyTrack
      setTrack(data)
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrack()
    const id = setInterval(fetchTrack, POLL_INTERVAL)
    return () => clearInterval(id)
  }, [])

  return { track, loading }
}
