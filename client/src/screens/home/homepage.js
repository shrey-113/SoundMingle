import React, { useEffect } from 'react';
import { useState } from 'react';
import "./home.css";
import sm from "./2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import { useStateProvider } from '../../utils/StateProvider';
import SpotifyPlaylist from '../../components/home/spotifyPlaylist';
import TopArtists from '../../components/home/topArtists';
import Loading from '../LoadingPage/Loading';

function Homepage() {

  const [{ token }, dispatch] = useStateProvider();
  const [playlistImages, setPlaylistImages] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    const getPlaylistpic = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      // console.log(response)

      const playlists = response.data.items;
      // console.log(`Number of playlists: ${playlists.length}`);

      const id = playlists.map((playlists) => {
        return playlists.id;
      });

      console.log(id); //getting id's of playlists it will be usefull to get tracks in that playlist

      const images = playlists.map((playlist) => {
        return playlist.images[0].url;
      });

      setPlaylistImages(images);
    };
    getPlaylistpic();
  }, [dispatch, token]);

  useEffect(() => {
    // Check if user has already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLoading(false);
    } else {
      // Simulate loading time
      setTimeout(() => {
        // Mark user as logged in
        localStorage.setItem('isLoggedIn', true);
        setLoading(false);
      }, 4400);
    }
  }, []);

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
            <p className="text-white text-sm w-96 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna eget massa fermentum lobortis ac eget
              tortor. Sed consequat, ipsum non dignissim malesuada, purus velit tincidunt dolor, ac faucibus lorem enim et
              diam. Integer mattis massa sit amet erat vehicula, vel malesuada orci venenatis.
            </p>
            <h1 className="text-white text-3xl font-bold my-6 mt-28">Your Top Artists</h1>
            <div>
              <TopArtists />
            </div>
          </div>
          <div className="mt-8">
            <SpotifyPlaylist />
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
