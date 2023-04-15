import React from 'react'
import weeknd from "../../assets/weeknd.jpg"
import taylor from "../../assets/taylor.jpeg"
import shrey from "../../assets/shrey.jpeg"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function DuoPlay(props) {
    return (
        <div className='absolute bg-black z-10 w-full h-full '>
            <h1 className='text-white text-center mt-16 text-xl underline'>Your Recomendation</h1>
            <img src={weeknd} alt='album' className='mt-8 border-8 border-grey-600 rounded-md' />
            <h1 className='text-white text-center mt-2 text-lg'>After Hours</h1>
            <h1 className='text-white text-center text-sm'>The Weeknd</h1>
            <div className="bg-gray-800 text-white p-2">
                <AudioPlayer
                    autoPlayAfterSrcChange={false}
                    src="path/to/audio/file.mp3"
                />
            </div>
            <div className='flex justify-center align-middle'>
                <button className='text-white bg-transparent border-2 border-white rounded-full p-2 w-20 mx-2'>Skip</button>
                <button className='text-white bg-transparent border-2 border-white rounded-full p-2 w-20'>Skip</button>
            </div>
            <div className='absolute top-14 translate-x-96 left-96'>
                <h1 className='text-white text-center'>Next</h1>
                <img src={taylor} alt='album' className='w-20' />
            </div>

            <div className='absolute top-80 translate-x-96 left-96 '>
                <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100" style={{ aspectRatio: '1/1' }}>
                    <img src={shrey} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className='text-white text-center'>Shreyansh Tiwari</h1>
            </div>
        </div>
    )
}

export default DuoPlay