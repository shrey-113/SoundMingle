import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-8xl text-white font-bold text-center">
        404
      </h1>
      <div className='mt-10'>
        <button className='bg-red-500 py-2 px-4 text-xl rounded-full  hover:text-white'>Back to Home</button>
      </div>

    </div>

  )
}
