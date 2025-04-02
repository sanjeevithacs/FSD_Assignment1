// src/components/Home.jsx
import React from "react";
import SongCard from "./SongCard";

const Home = ({ setPlaylist, playlist, setCurrentSong }) => {
  const songs = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    title: `Song ${i + 1}`,
    src: `/music/song${i + 1}.mp3`,
    image: "/images/image.jpg",
    category: i % 2 === 0 ? "Vibe" : "Sad",
  }));

  return (
    <div className="home-page" style={{ overflowY: "auto", maxHeight: "80vh", paddingBottom: "150px" }}>
      <h2>🎵 "Feel the Beat, Live the Moment!"</h2>
      <div className="song-grid">
        {songs.slice(0, 17).map((song) => (
          <SongCard
            key={song.id}
            song={song}
            setPlaylist={setPlaylist}
            playlist={playlist}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
