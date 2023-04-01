import React, { useState } from 'react';
import loginimg from './png/My project (5).png';
import spotifyLogo from './png/spotify.png';

function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  function handleSignIn() {
    window.location.href = '/home';
  }

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleFormSubmit = (event) => {
    // Handle form submission
    event.preventDefault();
  };

  return (
    <>
      {!showLoginForm ? (
        <div className="w-full h-screen bg-black text-white absolute flex flex-col justify-center items-center">
          <img src={loginimg} alt="png_login" className="w-1/3 h-auto" />
          <button
            onClick={handleLoginClick}
            className="bg-emerald-400 text-white rounded p-2 text-lg hover:bg-emerald-300 w-40"
          >
            Login to Spotify
          </button>
        </div>
      ) : (
        <div className="w-full h-screen bg-black text-white absolute flex flex-col justify-center items-center">
          <img src={spotifyLogo} alt="Spotify Logo" className="w-24 h-auto" />
          <h1 className="text-2xl font-bold mb-4">Sign in to Spotify</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-center items-center"
          >
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-80 mb-4 rounded-md border border-gray-300 p-2 text-gray-800 focus:outline-none focus:border-green-500"
              required
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-80 mb-4 rounded-md border border-gray-300 p-2 text-gray-800 focus:outline-none focus:border-green-500"
              required
            />
            <div className="flex items-center justify-between mb-4 w-80">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="rounded border-gray-300 text-green-500 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-400">
                  Remember me
                </label>
              </div>
              <a href="#/" className="text-green-500 hover:text-green-400">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white rounded-md px-4 py-2 text-lg focus:outline-none focus:shadow-outline-green"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginPage;
