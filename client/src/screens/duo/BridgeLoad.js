import React, { useState, useEffect } from "react";
import Loadingcount from "./Loadingcount";
import DuoPlay from "./DuoPlay";
import { socket } from "./index";

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
  const [otherssongname, setotherssongname] = useState("");
  const [othersartist, setothersartist] = useState([]);
  const [otherssongimage, setotherssongimage] = useState("");
  const [roomsid, setroomsid] = useState("");
  // const[roomsdata,setroomsdata]=useState("")
  const [roomsstatus, setroomstatus] = useState();
  const[trackuriarray,settrackuriarray]=useState();

  useEffect(() => {
    socket.on("roomsData", (data) => {
      // setroomsdata(data)
      console.log(data);
      setroomsid(data.room_id);
      console.log(data.room_id);

      const myUsername = localStorage.getItem("userName");
      const participants = [data.user_1, data.user_2];
      setroomstatus(!data.isfull);

      participants.forEach((participant) => {
        const participantUsername = participant.userName;
        const participantprofileImage = participant.profileImage;
        const participanttrackuri = participant.track_uri;
        const participantsongname = participant.song_name;
        const participantartist = participant.artist_name;
        const participantsongimage = participant.song_image;

        if (participantUsername !== myUsername && !roomsstatus) {
          setotherssongname(participantsongname);
          setothersartist(participantartist);
          setotherssongimage(participantsongimage);
          setothersUri(participanttrackuri);
          setothersUsername(participantUsername);
          setothersProfileImage(participantprofileImage);
          setBothUsersConnected(true);
        }
      });

      // socket.emit("deleteRoom", roomsid);
    });

    // return () => {
    //   socket.off("roomsData");
    // };
  }, []);

  
  useEffect(() => {
    socket.on("trackarray", (data) => {

      console.log(data)
      settrackuriarray(data)


    });

  }, []);




  useEffect(() => {
    // setShowLoading(true)
    setUri(props.TrackUri);
    setImageUrl(props.imageUrl);
    setArtistNames(props.artistNames);
    setSearchValue(props.Songname);
  }, [props.TrackUri, props.imageUrl, props.artistNames, props.Songname]);

  if (showLoading && bothUsersConnected) {
    return (
      <DuoPlay
        roomsid={roomsid}
        othersartist={othersartist}
        otherssongimage={otherssongimage}
        otherssongname={otherssongname}
        othersUri={othersUri}
        othersprofileImage={othersprofileImage}
        othersusername={othersusername}
        Songname={searchValue}
        TrackUri={Uri}
        imageUrl={imageUrl}
        artistNames={artistNames}
        trackuriarray={trackuriarray}
      />
    );
  } else {
    return (
      <Loadingcount
        othersprofileImage={othersprofileImage}
        othersusername={othersusername}
      />
    );
  }
}

export default BridgeLoad;
