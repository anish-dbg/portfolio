'use client'

import { useState, useEffect } from 'react'
import { QUOTES } from '@/lib/config'

export function useQuotes(intervalMs = 5000) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return {
    quote:   QUOTES[index],
    index,
    total:   QUOTES.length,
    setIndex,
  }
}
