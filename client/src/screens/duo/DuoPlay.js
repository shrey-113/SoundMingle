import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateProvider } from "../../utils/StateProvider";
import { socket } from "./index";
import axios from "axios";

function DuoPlay(props) {
  const [{ token }] = useStateProvider();
  const [play, setPlay] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [buttonstate, setbuttonstate] = useState(false);

  const userName = localStorage.getItem("userName");
  const SoundMingleId=localStorage.getItem("SoundMingleId")

  const trackUris = [props.TrackUri, props.othersUri];

  trackUris.sort();

  socket.on("turnRed", () => {
    setbuttonstate(true);
  });

  socket.on("closeConnection", () => {
    socket.disconnect();
    window.location.replace("/duo");
  });

  const ClickedSkip = () => {
    console.log(socket.id);

    socket.emit("skipped", {
      roomid: `${props.roomsid}`,
      userName: `${userName}`,
    });

    let playlistId = SoundMingleId; // replace with your playlist id
    let tracks = trackUris; // replace with the tracks you want to add
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
      data: {
        uris: tracks
      }
    };
  
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });



  };

  const handlePlayerCallback = ({ type, ...data }) => {
    if (type === "trackEnded") {
      setCurrentTrackIndex((index) => index + 1);
    }
  };

  useEffect(() => {
    if (currentTrackIndex >= 2) {
      setPlay(false);
    }
  }, [currentTrackIndex]);

  if (!token) return null;

  return (
    <div className="absolute bg-black z-10 w-full h-full">
      <h1 className="text-white text-center mt-16 text-xl underline">
        Your Recomendation
      </h1>
      <img
        src={props.imageUrl}
        alt="album"
        className="mt-8 border-8 border-grey-600 rounded-md"
      />
      <h1 className="text-white text-center mt-2 text-lg">{props.songName}</h1>
      <h1 className="text-white text-center text-sm">{props.artistNames}</h1>
      <div className="bg-gray-800 text-white p-2">
        <SpotifyPlayer
          token={token}
          play={play}
          uris={trackUris}
          callback={handlePlayerCallback}
          styles={{
            sliderColor: "#1cb954",
            color: "white",
            trackArtistColor: "#b3b3b3",
            trackNameColor: "white",
          }}
        />
      </div>
      <div className="flex justify-center align-middle">
        <button
          id="user"
          onClick={ClickedSkip}
          className={`text-white bg-transparent border-2 rounded-full p-2 w-20 mx-2 ${
            buttonstate ? "border-red-500" : "border-white"
          }`}
        >
          Skip
        </button>
      </div>
      <div className="absolute top-14 translate-x-96 left-96">
        <h1 className="text-white text-center">Next</h1>
        <img src={""} alt="album" className="w-20" />
      </div>

      <div className="absolute top-64 translate-x-96 left-96 ">
        <div
          className="w-20 h-20 rounded-full overflow-hidden bg-slate-100"
          style={{ aspectRatio: "1/1" }}
        >
          <img
            src={props.othersprofileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div class="relative">
          <div class="absolute top-2 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300 animate-ping"></div>
          <div class="absolute top-2 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300"></div>
        </div>
        <h1 className="text-white text-center">{props.othersusername}</h1>
      </div>
    </div>
  );
}

export default DuoPlay;
