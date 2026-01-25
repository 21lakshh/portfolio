const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env' }); // Load env vars

// 1. Token Setup
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
}

async function fetchRecentlyPlayed() {
  const { access_token } = await getAccessToken();

  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  // Debugging: If items is undefined, log the whole response to see what's wrong
  if (!data.items) {
      console.error("Unexpected response from Spotify:", JSON.stringify(data, null, 2));
      return [];
  }

  const tracks = data.items.map((item) => ({
    title: item.track.name,
    artist: item.track.artists.map((a) => a.name).join(', '),
    url: item.track.external_urls.spotify,
    albumArt: item.track.album.images[0].url,
    playedAt: item.played_at
  }));

  return tracks;
}

(async () => {
  try {
    const tracks = await fetchRecentlyPlayed();
    
    // Ensure the directory exists before writing
    const outputPath = path.join(__dirname, '../src/data/spotify.json');
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(tracks, null, 2));
    console.log('Spotify data updated successfully!');
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    process.exit(1);
  }
})();