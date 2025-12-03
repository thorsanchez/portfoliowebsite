"""
Sækja nýlega spiluð lög frá Spotify og vista í JSON.
"""

import os
import json
import requests
from datetime import datetime
from pathlib import Path

# Load .env file if it exists (for local testing)
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).parent.parent / '.env'
    load_dotenv(env_path)
except ImportError:
    pass  # dotenv not installed, use environment variables directly

# Spotify API endpoints
TOKEN_URL = "https://accounts.spotify.com/api/token"
RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played"

def get_access_token(refresh_token, client_id, client_secret):
    """Sækja nýtt access token með því að nota refresh token."""
    response = requests.post(
        TOKEN_URL,
        data={
            'grant_type': 'refresh_token',
            'refresh_token': refresh_token,
            'client_id': client_id,
            'client_secret': client_secret,
        }
    )

    if response.status_code != 200:
        print(f"Error getting access token: {response.text}")
        return None

    return response.json()['access_token']

def fetch_recently_played(access_token, limit=20):
    """Fetch nýlega spilaða lög frá spotify.“"""
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    params = {
        'limit': limit
    }

    response = requests.get(
        RECENTLY_PLAYED_URL,
        headers=headers,
        params=params
    )

    if response.status_code != 200:
        print(f"Error fetching recently played: {response.text}")
        return None

    return response.json()

def format_tracks(spotify_data):
    """fromata spotify api response i einfaldara snið"""
    tracks = []

    for item in spotify_data.get('items', []):
        track = item['track']

        # Get album art (minnsta)
        album_art = None
        if track['album']['images']:
            album_art = track['album']['images'][-1]['url']

        # Formata played_at date
        played_at = item['played_at']
        # Breyta í sama og var i ui "Dec 3, 2025"
        dt = datetime.fromisoformat(played_at.replace('Z', '+00:00'))
        formatted_date = dt.strftime("%b %d, %Y")

        tracks.append({
            'song': track['name'],
            'artist': ', '.join([artist['name'] for artist in track['artists']]),
            'album': track['album']['name'],
            'played': formatted_date,
            'albumArt': album_art,
            'spotifyUrl': track['external_urls']['spotify']
        })

    return tracks

def main():
    # get credentials fra environment variables
    refresh_token = os.getenv('SPOTIFY_REFRESH_TOKEN')
    client_id = os.getenv('SPOTIFY_CLIENT_ID')
    client_secret = os.getenv('SPOTIFY_CLIENT_SECRET')

    if not all([refresh_token, client_id, client_secret]):
        print("Error: Missing environment variables")
        print("Required: SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET")
        return 1

    # get access token
    print("Getting access token...")
    access_token = get_access_token(refresh_token, client_id, client_secret)
    if not access_token:
        return 1

    # Fetch siðustu spiluð lög
    print("Fetching recently played tracks...")
    spotify_data = fetch_recently_played(access_token)
    if not spotify_data:
        return 1

    # Format tracks
    tracks = format_tracks(spotify_data)
    print(f"Found {len(tracks)} tracks")

    # Vista i json skra
    output_file = os.path.join(os.path.dirname(__file__), '..', 'public', 'spotify-data.json')

    data = {
        'lastUpdated': datetime.now().isoformat(),
        'tracks': tracks
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Successfully saved {len(tracks)} tracks to {output_file}")
    return 0

if __name__ == '__main__':
    exit(main())
