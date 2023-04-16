import React from 'react'
import { FaPlus, FaDoorOpen } from 'react-icons/fa';


function Group() {
    return (
        <div className="flex flex-col mt-10 w-full h-screen text-center">
            <div className='flex flex-row h-10 ml-auto mr-4'>
                <button className="bg-blue-600 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-lg focus:outline-none focus:shadow-outline-blue border-white border-2 flex items-center">
                    <FaPlus className="mr-2" />
                    Create Room
                </button>
                <button className="bg-blue-600 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-lg focus:outline-none focus:shadow-outline-blue border-white border-2 flex items-center">
                    <FaDoorOpen className="mr-2" />
                    Join Room
                </button>
            </div>
            <h1 className='text-2xl text-white'>Join the Beat: Your Online Music Room</h1>
            <div className="flex w-full items-center mt-16">
                <div className="text-white border-2 rounded-md whitespace-nowrap border-white p-2 text-xl font-bold">Active Room</div>
                <div className="bg-white h-[2px] w-full"></div>
            </div>

        </div>
    )
}

export default Group
