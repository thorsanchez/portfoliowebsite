import { useLanguage } from '../contexts/LanguageContext';
import './Listening.css';

function Listening() {
  const { currentLanguage } = useLanguage();

  const content = {
    is: {
      title: "Það sem ég er að hlusta á þessa daga",
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

  // data mock
  const recentlyPlayed = [
    {
      song: "Heaven Takes You Home (feat. Connie Constance)",
      artist: "Swedish House Mafia",
      album: "Paradise Again",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One Last Dance",
      artist: "Audien",
      album: "One Last Dance",
      played: "Dec 3, 2025",
      albumArt: null
    },
    {
      song: "One (Your Name)",
      artist: "Swedish House Mafia",
      album: "Until Now",
      played: "Dec 3, 2025",
      albumArt: null
    }
  ];

  const text = content[currentLanguage];

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
                    <div className="album-art-placeholder"></div>
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
