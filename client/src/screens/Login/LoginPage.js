import React from 'react';
import loginimg from './png/My project (5).png';


export default function LoginPage() {
 


  const handleLoginClick = () => {
    
    const clientId = "dd847ce2367845fc80ac53dea8eac929";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read"
    ];

    window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(


      " "
    )}&response_type=token&show_daialog=true`;


  };


  return (
  
     
        <div className="w-full h-screen bg-black text-white absolute flex flex-col justify-center items-center">
          <img src={loginimg} alt="png_login" className="w-1/3 h-auto" />
          <button
            onClick={handleLoginClick}
            className="bg-emerald-400 text-white rounded p-2 text-lg hover:bg-emerald-300 w-40"
          >
            Login to Spotify
          </button>
        </div>

  
  );
}


