import React, { useEffect } from "react";
import { useState } from "react";
import "./home.css";
import sm from "./2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpotifyPlaylist from "../../components/home/spotifyPlaylist";
import TopArtists from "../../components/home/topArtists";
import Loading from "../LoadingPage/Loading";
import { Configuration, OpenAIApi } from "openai";

function Homepage() {
  const [playlistCreated, setPlaylistCreated] = useState(false);
  const [load, setLoading] = useState(true);
  const [playlistNames, setplaylistNames] = useState([]);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

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

      let array = [];

      playlists.forEach((element) => {
        array.push(element.name);
      });

      setplaylistNames(array);
    };
    getPlaylists();
  }, [token]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setLoading(false);
    } else {
      setTimeout(() => {
        localStorage.setItem("isLoggedIn", true);
        setLoading(false);
      }, 4400);
    }
  }, []);

  const createPlaylist = () => {
    if (!playlistCreated) {
      let soundMingleExists = false;

      playlistNames.forEach((element) => {
        if (element === "SoundMingle") {
          soundMingleExists = true;
        }
      });

      if (!soundMingleExists) {
        let data = JSON.stringify({
          name: "SoundMingle",
          description: "Your recently played songs on SoundMingle",
          public: true,
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `https://api.spotify.com/v1/users/${userId}/playlists`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(response.data);
            setPlaylistCreated(true);
          })
          .catch((error) => {
            console.log(error.response.data);
          });

        window.location.href = "/home";
      } else {
        console.log("SoundMingle playlist already exists");
        setPlaylistCreated(true);
      }
    }
  };

  const [quote, setQuote] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  useEffect(() => {
    const topArtists = JSON.parse(localStorage.getItem("myArray"));
    let isMounted = true;

    const generateQuote = async () => {
      try {
        if (topArtists && topArtists.length > 0) {
          const randomIndex = Math.floor(Math.random() * topArtists.length);
          const randomArtist = topArtists[randomIndex];

          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate a quote on ${randomArtist} songs lyrics`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          if (isMounted) {
            setQuote(response.data.choices[0].text);
          }
        } else {
          console.log("No top artists found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (!quote) {
      generateQuote();
    }

    return () => {
      isMounted = false;
    };
  }, [quote]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="flex flex-row mt-20 mx-20">
          <div>
            <img className="h-28" src={sm} alt="alt"></img>
          </div>
          <div className="mt-9">
            <h1 className="text-white text-4xl">SOUND MINGLE</h1>
            <p className="text-white text-lg w-96 mt-8">{quote}</p>
            <h1 className="text-white text-3xl font-bold my-6 mt-28">
              Your Top Artists
            </h1>
            <div>
              <TopArtists />
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={createPlaylist}
              className="bg-white text-black font-bold py-2 px-10 border border-black rounded-full focus:outline-none focus:shadow-outline hover:bg-gray-100 w-full"
            >
              create soundMingle Playlist
            </button>
            <SpotifyPlaylist />
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
