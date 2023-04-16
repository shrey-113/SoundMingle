import React, { useEffect } from "react";
import YourTopArtists from "./yourTopArtists";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { useState } from "react";

const TopArtists = () => {
  const [{ token }, dispatch] = useStateProvider();

  const [toponeartist, settoponeartist] = useState(null);
  const [topsecondartist, settopsecondartist] = useState(null);
  const [topthirdartist, settopthirdartist] = useState(null);

  const [toponeartistimg, settoponeartistimg] = useState(null);
  const [topsecondartistimg, settopsecondartistimg] = useState(null);
  const [topthirdartistimg, settopthirdartistimg] = useState(null);

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

     
      console.log(response.data)
      settoponeartist(response.data.items[0].name);
      settopsecondartist(response.data.items[1].name);
      settopthirdartist(response.data.items[2].name);

      settoponeartistimg(response.data.items[0].images[0].url);
      settopsecondartistimg(response.data.items[1].images[0].url);
      settopthirdartistimg(response.data.items[2].images[0].url);

      settoponeartistlink(response.data.items[0].external_urls.spotify);
      settopsecondartistlink(response.data.items[1].external_urls.spotify);
      settopthirdartistlink(response.data.items[2].external_urls.spotify);
    };
    getTopArtists();
  }, [dispatch, token]);

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
      {topArtists.map((artist) => (
        <YourTopArtists key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default TopArtists;
