'use client'

import { useState, useEffect } from 'react'

export function useVisitors() {
  const [count, setCount]     = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/visitors')
      .then((r) => r.json())
      .then((d) => setCount(d.count as number))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { count, loading }
}
