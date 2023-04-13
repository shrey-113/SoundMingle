import React,{useEffect} from 'react'
import { useState } from 'react';
import "./home.css"
import sm from "./2.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



import axios from 'axios';
import { useStateProvider } from '../../utils/StateProvider';

function Homepage() {

  const [{ token }, dispatch] = useStateProvider();
  const [playlistImages, setPlaylistImages] = useState([]);



  useEffect(() => {
    const getPlaylistpic = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      console.log(response)

      const playlists = response.data.items;
      // console.log(`Number of playlists: ${playlists.length}`);



      const id=playlists.map((playlists)=>{

        return playlists.id;
      })

      console.log(id)  //getting id's of playlists it will be usefull to get tracks in that playlist

      const images = playlists.map((playlist) => {
        return playlist.images[0].url;
      });

      


      setPlaylistImages(images);
    };
    getPlaylistpic();
  }, [dispatch, token]);



  return (
    <>
     
      <div className='grid grid-cols-2'>
        <div className='translate-y-20'>
          <div className='flex'>
            <img className='w-40 h-20' src={sm} alt="logosm" />
            <h1 className='text-white font-serif font-extrabold text-4xl '>Sound Mingle</h1>
          </div>
          <div className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className='flex flex-col items-center justify-center'>

          <h1 className='text-white text-2xl py-4'>Your Playlist</h1>
          <div className='bg-white w-80 h-80'>
            <Carousel showStatus={false} showIndicators={false}  showThumbs={false}swipeable={true} infiniteLoop={true}  autoPlay={true} interval={3000}>
              {playlistImages.map((image, index) => (
                <div  key={index}>
                  <img  src={image} alt={`Playlist ${index + 1}`} className="cc-img" />
                </div>
              ))}
            </Carousel>

          </div>
        </div>
      </div>

 
    </>
  )
}

export default Homepage