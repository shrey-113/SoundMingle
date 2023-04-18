import React, { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import "./duo.css";
import BridgeLoad from "./BridgeLoad";
import Chatbox from "../../components/Duo/chatbox";
export const socket = io.connect("http://localhost:3001");

function Duo() {
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

  const [{ token }, dispatch] = useStateProvider();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [songSelected, setSongSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Uri, setUri] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [artistNames, setartistNames] = useState([]);

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

    setLoading(true);

    const userId = localStorage.getItem("userId");
    const profileImage = localStorage.getItem("profileImage");
    const userName = localStorage.getItem("userName");
    let data = {};
    data = {
      userid: userId,
      userName: userName,
      profileImage: profileImage,
      song_name: searchValue,
      artist_name: artistNames,
      track_uri: Uri,
      song_image: imageUrl,
      socketid: socket.id,
      skipped: false,
    };
    socket.emit("join", data);
  };

  return (
    <>
      <div className="flex items-center w-full">
        <div
          className="bg-black flex flex-col justify-center items-center h-screen relative"
          style={{
            transform: "translate(-50%, -50%)",
            position: "absolute",
            top: "47%",
            left: "50%",
          }}
        >
          <h1 className="text-white text-4xl text-center whitespace-nowrap mb-8">
            Select a song to recommend
          </h1>
          <div
            className="relative"
            style={{ height: "464px", width: "454px", overflow: "hidden" }}
          >
            <svg
              className="absolute top-0 left-0 mt-2 ml-2 w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Songs"
              required
              className="w-80 pl-10 mb-4 rounded-md border border-gray-300 p-2 text-gray-800 focus:outline-none focus:border-green-500"
              value={searchValue}
              onChange={handleSearch}
              style={{ width: "454px" }}
            />
            <div style={{ overflowY: "scroll", height: "376px" }}>
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
          <button
            type="match"
            onClick={() => {
              if (!songSelected) {
                alert("Please select a song before matching!");
              } else {
                handleClick();
              }
            }}
            className="bg-blue-600 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-lg focus:outline-none focus:shadow-outline-blue border-white border-2"
          >
            Match
          </button>
          {loading && (
            <div className="w-full h-full absolute">
              <BridgeLoad
                Songname={searchValue}
                TrackUri={Uri}
                imageUrl={imageUrl}
                artistNames={artistNames}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Duo;
