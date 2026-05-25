import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const ns  = process.env.COUNTAPI_NAMESPACE ?? 'portfolio'
  const key = process.env.COUNTAPI_KEY       ?? 'visits'

  try {
    const res  = await fetch(`https://api.countapi.xyz/hit/${ns}/${key}`, { next: { revalidate: 0 } })
    const data = await res.json()
    return NextResponse.json({ count: data.value ?? 0 })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
