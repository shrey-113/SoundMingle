import React, { useState } from "react";

const Playlist = () => {
    const [songs, setSongs] = useState([
        { id: 1, name: "Bohemian Rhapsody" },
        { id: 2, name: "Hotel California" },
        { id: 3, name: "Stairway to Heaven" },
        { id: 4, name: "Imagine" },
        { id: 5, name: "Smells Like Teen Spirit" },
        { id: 6, name: "Back in Black" },
        { id: 7, name: "Sweet Child o' Mine" },
        { id: 8, name: "Billie Jean" },
        { id: 9, name: "Purple Rain" },
        { id: 10, name: "I Will Always Love You" },
        { id: 1, name: "Bohemian Rhapsody" },
        { id: 2, name: "Hotel California" },
        { id: 3, name: "Stairway to Heaven" },
        { id: 4, name: "Imagine" },
        { id: 5, name: "Smells Like Teen Spirit" },
        { id: 6, name: "Back in Black" },
        { id: 7, name: "Sweet Child o' Mine" },
        { id: 8, name: "Billie Jean" },
        { id: 9, name: "Purple Rain" },
        { id: 10, name: "I Will Always Love You" }
      ]);
      

  const [newSong, setNewSong] = useState("");

  const handleInputChange = (event) => {
    setNewSong(event.target.value);
  };

  const handleAddSong = () => {
    const newSongObj = { id: songs.length + 1, name: newSong };
    setSongs([...songs, newSongObj]);
    setNewSong("");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-lg font-bold mb-4">Playlist</h2>
      <ul className="border rounded-lg overflow-hidden divide-y overflow-y-auto h-96">
        {songs.map((song) => (
          <li key={song.id} className="px-4 py-2 flex justify-between items-center">
            <span>{song.name}</span>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded" type="button">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex mt-4">
        <input
          className="flex-grow border rounded-l-lg px-4 py-2 mr-2 text-black"
          type="text"
          placeholder="Enter song name"
          value={newSong}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-lg"
          type="button"
          onClick={handleAddSong}
        >
          Add Song
        </button>
      </div>
    </div>
  );
};

export default Playlist;
