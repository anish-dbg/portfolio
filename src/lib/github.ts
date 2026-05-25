import type { GitHubContributions } from '@/types'

const GITHUB_API = 'https://api.github.com/graphql'

const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

type GHLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE'

function levelToNumber(level: GHLevel): 0 | 1 | 2 | 3 | 4 {
  const map: Record<GHLevel, 0 | 1 | 2 | 3 | 4> = {
    NONE:             0,
    FIRST_QUARTILE:   1,
    SECOND_QUARTILE:  2,
    THIRD_QUARTILE:   3,
    FOURTH_QUARTILE:  4,
  }
  return map[level] ?? 0
}

export async function getGitHubContributions(username: string): Promise<GitHubContributions> {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    // Return empty data when token not set
    return { totalContributions: 0, weeks: [] }
  }

  try {
    const res = await fetch(GITHUB_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: CONTRIBUTIONS_QUERY, variables: { username } }),
      next: { revalidate: 3600 }, // cache for 1 hour
    })

    const { data } = await res.json()
    const calendar = data.user.contributionsCollection.contributionCalendar

    return {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks.map((w: { contributionDays: { date: string; contributionCount: number; contributionLevel: GHLevel }[] }) => ({
        days: w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: levelToNumber(d.contributionLevel),
        })),
      })),
    }
  } catch {
    return { totalContributions: 0, weeks: [] }
  }
}
