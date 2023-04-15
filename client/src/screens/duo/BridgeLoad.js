import React, { useState, useEffect } from 'react';
import Loadingcount from './Loadingcount'
import DuoPlay from './DuoPlay'
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function BridgeLoad(props) {
  const [showLoading, setShowLoading] = useState(true);
  const [Uri, setUri] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [artistNames, setArtistNames] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [bothUsersConnected, setBothUsersConnected] = useState(false);
  const [othersUri, setothersUri] = useState("");
  const [othersusername, setothersUsername] = useState("");
  const [othersprofileImage, setothersProfileImage] = useState("");
  const [otherssongname,  setotherssongname] = useState("");
  const [othersartist, setothersartist] = useState([]);
  const[otherssongimage,setotherssongimage]=useState("")
  const[roomsdata,setroomsdata]=useState("")

  

  useEffect(() => {
    socket.on("roomsData", (data) => {

      setroomsdata(data.rooms[0].RoomId);
      const myUsername = localStorage.getItem("userName");
      const participants = data.rooms[0].participants;

      participants.forEach(participant => {
        const participantData = Object.values(participant)[0];
        const participantUsername = participantData.userName;
        const participantprofileImage= participantData.profileImage;
        const participanttrackuri=participantData.track_uri
        const participantsongname=participantData.song_name
        const participantartist=participantData.artist_name
        const participantsongimage=participantData.song_image
        

        if (participantUsername !== myUsername) {

          setotherssongname(participantsongname)
          setothersartist(participantartist)
          setotherssongimage(participantsongimage)
          setothersUri(participanttrackuri)
          setothersUsername(participantUsername);
          setothersProfileImage(participantprofileImage);
          setBothUsersConnected(true);

        }
      });
    });

    return () => {
      socket.off("roomsData");
    };
  }, []);

  useEffect(() => {
    // setShowLoading(true)
    setUri(props.TrackUri);
    setImageUrl(props.imageUrl);
    setArtistNames(props.artistNames);
    setSearchValue(props.Songname);
  }, [props.TrackUri, props.imageUrl, props.artistNames, props.Songname]);

  if (showLoading && bothUsersConnected) {
    return  <DuoPlay roomsdata={roomsdata}  othersartist={othersartist} otherssongimage={otherssongimage} otherssongname={otherssongname} othersUri={othersUri} othersprofileImage={othersprofileImage} othersusername={othersusername} Songname={searchValue} TrackUri={Uri} imageUrl={imageUrl} artistNames={artistNames} />;
  } else {
    return <Loadingcount othersprofileImage={othersprofileImage} othersusername={othersusername} />;
  }
}
  
export default BridgeLoad;
