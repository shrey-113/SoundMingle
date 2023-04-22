import React, { useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { useEffect } from "react";

const Playlist = () => {
  const [{ token }, dispatch] = useStateProvider();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [songSelected, setSongSelected] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [Uri, setUri] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [artistNames, setartistNames] = useState([]);

  const [songs, setSongs] = useState([]);
  const SearchResultCard = ({ songName, artistNames, imageUrl, onClick }) => {
    return (
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={onClick}
      >
        <img
          src={imageUrl}
          style={{ width: "100px", height: "100px", marginRight: "16px" }}
          alt={songName}
        />
        <div>
          <h3
            style={{
              marginBottom: "8px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {songName}
          </h3>
          <p style={{ fontSize: "16px", color: "#666" }}>{artistNames}</p>
        </div>
      </div>
    );
  };

  const [newSong, setNewSong] = useState("");

  useEffect(() => {
    const searchTracks = async () => {
      if (searchValue === "" || songSelected) return;
      setSearchResults([]);

      console.log(searchValue);

      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${searchValue}&type=track&limit=10`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const items = response.data.tracks.items;

      setSearchResults(
        items.map((item) => {
          const songName = item.name;
          const artistNames = item.artists
            .map((artist) => artist.name)
            .join(", ");
          const imageUrl = item.album.images[0].url;

          const TrackUri = item.uri;

          return { songName, artistNames, imageUrl, TrackUri };
        })
      );
    };
    searchTracks();
  }, [searchValue, token, dispatch, songSelected]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setSearchResults([]);
    setSongSelected(false);
    setNewSong(e.target.value);
  };

  const handleSongSelect = (songName, TrackUri, imageUrl, artistNames) => {
    setSearchValue(songName);
    setUri(TrackUri);
    setimageUrl(imageUrl);
    setartistNames(artistNames);

    setSongSelected(true);
  };

  const handleClick = () => {
    if (!songSelected) {
      return;
    }

    const newSongObj = {
      id: Uri,
      name: searchValue,
      imageUrl: imageUrl,
      artistNames: artistNames,
    };
    setSongs([...songs, newSongObj]);
    setNewSong("");
  };

  return (
    <div className="max-w-lg mx-auto w-96">
      <h2 className="text-lg font-bold mb-4">Playlist</h2>
      <ul className="border rounded-lg overflow-hidden divide-y overflow-y-auto h-96">
        {songs.map((song) => (
          <li
            key={song.id}
            className="px-4 py-2 flex justify-between items-center"
          >
            <span>{song.name}</span>
          </li>
        ))}
      </ul>
      <div className="flex mt-4">
        <input
          className="flex-grow border rounded-l-lg px-4 py-2 mr-2 text-black"
          type="text"
          placeholder="Enter song name"
          value={searchValue}
          onChange={handleSearch}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-lg"
          type="button"
          onClick={handleClick}
        >
          Add Song
        </button>
      </div>

      <div className="mt-4" style={{ overflowY: "scroll", height: "200px" }}>
        {searchValue !== "" &&
          searchResults.map((result, index) => (
            <SearchResultCard
              key={result.id || index}
              songName={result.songName}
              artistNames={result.artistNames}
              imageUrl={result.imageUrl}
              onClick={() => {
                handleSongSelect(
                  result.songName,
                  result.TrackUri,
                  result.imageUrl,
                  result.artistNames
                );
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Playlist;
