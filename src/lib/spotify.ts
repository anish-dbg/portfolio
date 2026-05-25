import type { SpotifyTrack } from '@/types'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

async function getAccessToken(): Promise<string> {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    throw new Error('Missing Spotify env vars')
  }

  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
    next: { revalidate: 0 },
  })

  const data = await res.json()
  return data.access_token
}

export async function getNowPlaying(): Promise<SpotifyTrack> {
  try {
    const accessToken = await getAccessToken()

    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 30 }, // re-fetch every 30s
    })

    if (res.status === 204 || res.status > 400) {
      return { isPlaying: false, title: '', artist: '', album: '', albumArt: '', songUrl: '' }
    }

    const song = await res.json()

    if (song.currently_playing_type !== 'track') {
      return { isPlaying: false, title: '', artist: '', album: '', albumArt: '', songUrl: '' }
    }

    return {
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((a: { name: string }) => a.name).join(', '),
      album: song.item.album.name,
      albumArt: song.item.album.images[0]?.url ?? '',
      songUrl: song.item.external_urls.spotify,
    }
  } catch {
    return { isPlaying: false, title: '', artist: '', album: '', albumArt: '', songUrl: '' }
  }
}
