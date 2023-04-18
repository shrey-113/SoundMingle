import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-950">
      <h1 className="text-8xl font-bold text-center text-red-500 mb-10">
        404
      </h1>
      <p className="text-3xl font-bold text-white mb-10">
        Oops! Page not found.
      </p>
      <div>
        <Link to="/home">
          <button className="bg-red-500 py-3 px-6 text-lg rounded-full text-white hover:bg-red-600 transition duration-300 ease-in-out">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
