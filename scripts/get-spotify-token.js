/**
 * Run once to get your Spotify refresh token.
 *
 * Steps:
 *   1. Set CLIENT_ID and CLIENT_SECRET below (from https://developer.spotify.com/dashboard)
 *   2. In your Spotify app dashboard, add http://localhost:3001/callback as a Redirect URI
 *   3. Run:  node scripts/get-spotify-token.js
 *   4. Visit the URL it prints, authorize, and copy the refresh_token from the output
 *   5. Paste it into .env.local as SPOTIFY_REFRESH_TOKEN
 */

const http    = require('http')
const url     = require('url')
const { exec } = require('child_process')

// ── FILL THESE IN ─────────────────────────────────────────────
const CLIENT_ID     = process.env.SPOTIFY_CLIENT_ID     || 'YOUR_CLIENT_ID'
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || 'YOUR_CLIENT_SECRET'
const REDIRECT_URI  = 'http://localhost:3001/callback'
const SCOPE         = 'user-read-currently-playing user-read-playback-state'
// ──────────────────────────────────────────────────────────────

const authUrl =
  `https://accounts.spotify.com/authorize?` +
  `response_type=code` +
  `&client_id=${CLIENT_ID}` +
  `&scope=${encodeURIComponent(SCOPE)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`

console.log('\n🎵 Open this URL in your browser:\n')
console.log(authUrl)
console.log('\nWaiting for callback on http://localhost:3001/callback …\n')

const server = http.createServer(async (req, res) => {
  const { query } = url.parse(req.url, true)
  if (!query.code) { res.end('No code found.'); return }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type:   'authorization_code',
      code:          query.code,
      redirect_uri:  REDIRECT_URI,
    }),
  })

  const data = await tokenRes.json()

  console.log('✅ Success! Add this to your .env.local:\n')
  console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`)

  res.end('<h2>Done! Check your terminal for the refresh token. You can close this tab.</h2>')
  server.close()
})

server.listen(3001)
