// src/components/SongCard.jsx
import React from "react";

const SongCard = ({ song, setPlaylist, playlist, setCurrentSong, onRemove }) => {
  const addToPlaylist = () => {
    if (!playlist.some((item) => item.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} className="song-image" />
      <h3>{song.title}</h3>
      <button onClick={() => setCurrentSong(song)}>▶ Play</button>
      {onRemove ? (
        <button onClick={() => onRemove(song.id)}>❌ Remove</button>
      ) : (
        <button onClick={addToPlaylist}>➕ Add to Playlist</button>
      )}
    </div>
  );
};

export default SongCard;






// // src/components/SongCard.jsx
// import React from "react";

// const SongCard = ({ song, setPlaylist, playlist, setCurrentSong, onRemove }) => {
//   const addToPlaylist = () => {
//     if (!playlist.some((item) => item.id === song.id)) {
//       setPlaylist([...playlist, song]);
//     }
//   };

//   return (
//     <div className="song-card">
//       <img src="/images/image.jpg" alt={song.title} className="song-image" />
//       <h3>{song.title}</h3>
//       <button onClick={() => setCurrentSong(song)}>▶ Play</button>
//       {onRemove ? (
//         <button onClick={() => onRemove(song.id)}>❌ Remove</button>
//       ) : (
//         <button onClick={addToPlaylist}>➕ Add to Playlist</button>
//       )}
//     </div>
//   );
// };

// export default SongCard;
