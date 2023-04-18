import React, { useEffect } from 'react';
import { useState } from 'react';
import "./home.css";
import sm from "./2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
// import { useStateProvider } from '../../utils/StateProvider';
import SpotifyPlaylist from '../../components/home/spotifyPlaylist';
import TopArtists from '../../components/home/topArtists';
import Loading from '../LoadingPage/Loading';

function Homepage() {


  const [playlistCreated, setPlaylistCreated] = useState(false);
  const [load, setLoading] = useState(true);
  const[playlistNames,setplaylistNames]=useState([])

  const userId=localStorage.getItem('userId')
  const token=localStorage.getItem('token')

  // console.log(token)



  useEffect(() => {
    const getPlaylists = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      // console.log(response.data.items)

      const playlists = response.data.items;

      let array=[]

      playlists.forEach(element=>{

        // console.log(element.name)
        array.push(element.name)

      })



      setplaylistNames(array)


    };
    getPlaylists();
  }, [token]);

// console.log(playlistNames)

  useEffect(() => {
   
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLoading(false);
    } else {
 
      setTimeout(() => {
   
        localStorage.setItem('isLoggedIn', true);
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

          window.location.href='/home'
      } else {
        console.log("SoundMingle playlist already exists");
        setPlaylistCreated(true);
      }
    }
  };
  
  

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
