import React from 'react';
import YourTopArtists from './yourTopArtists'


const TopArtists = () => {
  const topArtists = [
    {
      id: 1,
      name: 'Billie Eilish',
      genre: 'Pop',
      imageUrl: 'https://assets.vogue.in/photos/609bc43f330168cc92114390/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg',
      link: 'https://google.com'
    },
    {
      id: 2,
      name: 'The Weeknd',
      genre: 'R&B',
      imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_1200x1200-210430163406-1200-the-weeknd.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top',
      link: 'https://google.com'
    },
    {
      id: 3,
      name: 'Ed Sheeran',
      genre: 'Pop',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
      link: 'https://google.com'
    }
  ];

  return (
    <div className="flex justify-between">
      {topArtists.map(artist => (
        <YourTopArtists key={artist.id} artist={artist}/>
      ))}
    </div>
  );
};

export default TopArtists;
