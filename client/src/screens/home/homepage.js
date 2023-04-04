import React from 'react'
import "./home.css"
import sm from "./2.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./500x500.jpg"
import img2 from "./500x500 (1).jpg"
import img3 from "./size_l.jpg"

function Homepage() {
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
            <Carousel showStatus={false} showIndicators={false}  showThumbs={false}swipeable={true} infiniteLoop={true}>
              <div>
                <img src={img1} alt="img1" className="cc-img" />
              </div>
              <div>
                <img src={img2} alt="img2" className="cc-img" />
              </div>
              <div>
                <img src={img3} alt="img3" className="cc-img" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage