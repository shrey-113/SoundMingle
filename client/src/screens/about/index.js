import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import tailwind from '../../assets/tailwind.png'
import socket from '../../assets/socket.png'
import express from '../../assets/express.png'
import postman from '../../assets/postman.png'
import profile from '../../assets/profile.png'
import json from '../../assets/json.png'



const About = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col w-full items-center bg-black'>
                <h1 className='text-black text-4xl py-5 bg-gray-500 w-full text-center mb-5 font-semibold'>TECHNOLOGIES</h1>
                <div className='flex items-center mb-5'>
                 <img className='h-28 mx-6 transform hover:scale-105 transition duration-300' src={html} alt='html' />
                 <img className='h-28 mx-10 transform hover:scale-105 transition duration-300' src={css} alt='css' />
                 <img className='h-28 mx-10 transform hover:scale-105 transition duration-300' src={js}  alt='js' />
                 <img className='h-24 mx-10 mt-2 transform hover:scale-105 transition duration-300' src={react} alt='react'  />
                 <img className='h-20 mx-10 mt-8 transform hover:scale-105 transition duration-300' src={node} alt='node'  />
                </div>
                <div className='flex items-center mb-5'>
                 <img className='h-28 mx-6 transform hover:scale-105 transition duration-300' src={tailwind} alt='tailwind' />
                 <img className='h-28 mx-10 transform hover:scale-105 transition duration-300' src={socket} alt='socket' />
                 <img className='h-20 mx-10 transform hover:scale-105 transition duration-300' src={express} alt='express'  />
                 <img className='h-20 mx-10 transform hover:scale-105 transition duration-300 ' src={mongodb}  alt='mongodb'/>
                </div>

            </div>
            <div className='flex flex-col w-full items-center bg-black h-full'>
                <h1 className='text-black bg-gray-500 text-center w-full text-4xl py-5  font-semibold'>TEAM</h1>
                <div className="flex justify-evenly w-full items-center pt-5">

                    <div className='flex flex-col items-center text-white'>
                        <img className="h-44 m-4" src={profile} alt='profile'></img>
                        <h1 className='text-center font-semibold text-xl'>Shravya Kanalli</h1>
                        <h1 className='text-center font-semibold'>Design</h1>
                    </div>
                    <div className='flex flex-col items-center text-white'>
                        <img className="h-44 m-4" src={profile} alt='prof'></img>
                        <h1 className='text-center font-semibold text-xl'>Ratnesh Kherudkar</h1>
                        <h1 className='text-center font-semibold'>Design / Frontend</h1>
                    </div>
                    <div className='flex flex-col items-center text-white'>
                        <img className="h-44 m-4" src={profile} alt='file'></img>
                        <h1 className='text-center font-semibold text-xl'>Ashith Shetty</h1>
                        <h1 className='text-center font-semibold'>Design / Frontend</h1>
                    </div>
                    <div className='flex flex-col items-center text-white'>
                        <img className="h-44 m-4" src={profile} alt='prf'></img>
                        <h1 className='text-center font-semibold text-xl'>Mandar Dighe</h1>
                        <h1 className='text-center font-semibold'>Frontend / Backend</h1>
                    </div>
                    <div className='flex flex-col items-center text-white'>
                        <img className="h-44 m-4" src={profile} alt='pl'></img>
                        <h1 className='text-center font-semibold text-xl'>Shreyansh Tiwari</h1>
                        <h1 className='text-center font-semibold'>Frontend / Backend</h1>
                    </div>
  
                </div>
            </div>
        </div>
    )
}

export default About
