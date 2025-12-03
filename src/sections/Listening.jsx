import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './styles/Listening.css';

function Listening() {
  const { currentLanguage } = useLanguage();
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [loading, setLoading] = useState(true);

  const content = {
    is: {
      title: "Nýlega hlustað",
      songHeader: "Lag",
      artistHeader: "Flytjandi",
      albumHeader: "Plata",
      playedHeader: "Spilað"
    },
    en: {
      title: "Recently Played",
      songHeader: "Song",
      artistHeader: "Artist",
      albumHeader: "Album",
      playedHeader: "Played"
    },
    no: {
      title: "Nylig avspilt",
      songHeader: "Sang",
      artistHeader: "Artist",
      albumHeader: "Album",
      playedHeader: "Spilt"
    }
  };

  // Fetch Spotify data from JSON file
  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch('/spotify-data.json');
        const data = await response.json();
        setRecentlyPlayed(data.tracks || []);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
        // Fallback to empty array
        setRecentlyPlayed([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  const text = content[currentLanguage];

  if (loading) {
    return (
      <div className="section-container listening-container">
        <h2 className="section-title-spotify">{text.title}</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="section-container listening-container">
      <h2 className="section-title-spotify">{text.title}</h2>

      <div className="listening-table-wrapper">
        <table className="listening-table">
          <thead>
            <tr>
              <th>{text.songHeader}</th>
              <th>{text.artistHeader}</th>
              <th>{text.albumHeader}</th>
              <th>{text.playedHeader}</th>
            </tr>
          </thead>
          <tbody>
            {recentlyPlayed.map((track, index) => (
              <tr key={index}>
                <td className="song-cell">
                  <div className="song-info">
                    {track.albumArt ? (
                      <img
                        src={track.albumArt}
                        alt={track.album}
                        className="album-art"
                      />
                    ) : (
                      <div className="album-art-placeholder"></div>
                    )}
                    <span>{track.song}</span>
                  </div>
                </td>
                <td>{track.artist}</td>
                <td>{track.album}</td>
                <td>{track.played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listening;
