import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function SpotifyPlaylist() {
  const token = localStorage.getItem("token");
  const [Id, setId] = useState("");

  useEffect(() => {
    const getPlaylists = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const playlists = response.data.items;

      for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].name === "SoundMingle") {
          setId(playlists[i].id);
       
          break;
        }
      }
    };
    getPlaylists();

  }, [token]);
  localStorage.setItem("SoundMingleId", Id);

  console.log(Id)

  console.log(Id)
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://open.spotify.com/embed/playlist/${Id}?utm_source=generator&theme=0" width="300" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
      }}
    />
  );
}

export default SpotifyPlaylist;
