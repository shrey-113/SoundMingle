import React from 'react';

const YourTopArtists = ({ artist }) => {
  return (
    <div className="mr-20">
     <a href={artist.link} target="_blank" rel="noopener noreferrer">
        <img className="h-40 w-40" src={artist.imageUrl} alt={artist.name} />
      </a>
      <div className="flex flex-col items-center justify-center mt-2">
        <h3 className="text-white">{artist.name}</h3>
        <p className="text-gray-500">{artist.genre}</p>
      </div>
    </div>
  );
};

export default YourTopArtists;
