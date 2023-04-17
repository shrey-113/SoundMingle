import React from 'react';
import YourTopArtists from './yourTopArtists'


const TopArtists = () => {

  const [{ token }, dispatch] = useStateProvider();

  const [toponeartist, settoponeartist] = useState(null);
  const [topsecondartist, settopsecondartist] = useState(null);
  const [topthirdartist, settopthirdartist] = useState(null);

  const [toponeartistimg, settoponeartistimg] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg?20201103073518"
  );
  const [topsecondartistimg, settopsecondartistimg] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg?20201103073518"
  );
  const [topthirdartistimg, settopthirdartistimg] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg?20201103073518"
  );

  const [toponeartistlink, settoponeartistlink] = useState(null);
  const [topsecondartistlink, settopsecondartistlink] = useState(null);
  const [topthirdartistlink, settopthirdartistlink] = useState(null);

  useEffect(() => {
    const getTopArtists = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response.data.items.length);

      if (response.data.items.length === 1) {
        settoponeartist(response.data.items[0].name);
        settoponeartistimg(response.data.items[0].images[0].url);
        settoponeartistlink(response.data.items[0].external_urls.spotify);
      } else if (response.data.items.length === 2) {
        settoponeartist(response.data.items[0].name);
        settoponeartistimg(response.data.items[0].images[0].url);
        settoponeartistlink(response.data.items[0].external_urls.spotify);

        settopsecondartist(response.data.items[1].name);
        settopsecondartistimg(response.data.items[1].images[0].url);
        settopsecondartistlink(response.data.items[1].external_urls.spotify);
      } else {
        settoponeartist(response.data.items[0].name);
        settopsecondartist(response.data.items[1].name);
        settopthirdartist(response.data.items[2].name);

        settoponeartistimg(response.data.items[0].images[0].url);
        settopsecondartistimg(response.data.items[1].images[0].url);
        settopthirdartistimg(response.data.items[2].images[0].url);

        settoponeartistlink(response.data.items[0].external_urls.spotify);
        settopsecondartistlink(response.data.items[1].external_urls.spotify);
        settopthirdartistlink(response.data.items[2].external_urls.spotify);
      }
    };
    getTopArtists();
  }, [dispatch, token]);

  const topArtists = [
    {
      id: 1,
      name: toponeartist || "",
      imageUrl: toponeartistimg || "",
      link: toponeartistlink,

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
