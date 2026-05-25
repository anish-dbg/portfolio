'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export function useClock() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return {
    display: format(now, "EEE, MMM d  HH:mm"),
    date: now,
  }
}
