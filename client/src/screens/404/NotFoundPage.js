import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-8xl text-white font-bold text-center">
        404
      </h1>
      <div className='mt-10'>
        <Link to="/home">
        <button className='bg-red-500 py-2 px-4 text-xl rounded-full  hover:text-white'>Back to Home</button>
        </Link>
      </div>

    </div>

  )
}
