import React,{useState} from 'react';
import axios from 'axios';
import YourTopArtists from './yourTopArtists'
import { useStateProvider } from '../../utils/StateProvider';
import { useEffect } from 'react';


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

  const[TopArtistsarray,setTopArtistsarray]=useState([])

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

        setTopArtistsarray([toponeartist])

      } else if (response.data.items.length === 2) {
        settoponeartist(response.data.items[0].name);
        settoponeartistimg(response.data.items[0].images[0].url);
        settoponeartistlink(response.data.items[0].external_urls.spotify);

        settopsecondartist(response.data.items[1].name);
        settopsecondartistimg(response.data.items[1].images[0].url);
        settopsecondartistlink(response.data.items[1].external_urls.spotify);

        setTopArtistsarray([toponeartist,topsecondartist])
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

        setTopArtistsarray([toponeartist,topsecondartist,topthirdartist])
      }



     
    };
    getTopArtists();



  }, [dispatch, token,toponeartist, topsecondartist, topthirdartist]);

  localStorage.setItem('myArray', JSON.stringify(TopArtistsarray));

  

  const topArtists = [
    {
      id: 1,
      name: toponeartist || "",
      imageUrl: toponeartistimg || "",
      link: toponeartistlink
    },
    {
      id: 2,
      name: topsecondartist || "",

      imageUrl: topsecondartistimg || "",
      link: topsecondartistlink,
    },
    {
      id: 3,
      name: topthirdartist || "",

      imageUrl: topthirdartistimg || "",
      link: topthirdartistlink,
    },
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
