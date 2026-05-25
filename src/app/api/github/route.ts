import { NextResponse } from 'next/server'
import { getGitHubContributions } from '@/lib/github'
import { SITE_CONFIG } from '@/lib/config'

export const revalidate = 3600 // 1 hour

export async function GET() {
  const data = await getGitHubContributions(SITE_CONFIG.githubUser)
  return NextResponse.json(data)
}
