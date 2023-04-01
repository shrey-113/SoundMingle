import React from 'react';

function Duo() {
  return (
    <div className='bg-black flex flex-col justify-center items-center h-screen' style={{ transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }}>
      <h1 className='text-white text-4xl text-center whitespace-nowrap mb-8'>Select a song to recommend</h1>
      <div className='relative'>
        <svg className='absolute top-0 left-0 mt-2 ml-2 w-6 h-6 text-gray-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='11' cy='11' r='8'></circle>
          <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
        </svg>
        <input
          type='text'
          placeholder='Search'
          required
          className='w-80 pl-10 mb-4 rounded-md border border-gray-300 p-2 text-gray-800 focus:outline-none focus:border-green-500'
        />
      </div>
      <button
        type='match'
        className='bg-blue-600 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-lg focus:outline-none focus:shadow-outline-blue border-white border-2'
      >
        Match
      </button>
    </div>
  );
}

export default Duo;
