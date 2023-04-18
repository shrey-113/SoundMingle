import { useParams } from "react-router-dom";
import album from "../../assets/weeknd.jpg";
import SpotifyPlayer from "react-spotify-web-playback";
import Chatbox from "../../components/Duo/chatbox";
import Playlist from "../../components/Group/Playlist";
import { socket } from "./index";

function Groupplayer() {
  const { groupId } = useParams();

  return (
    <div className="text-white flex flex-col items-center w-screen ">
      <h1 className="font-sans text-4xl mt-10 font-semibold underline">
        Group Player
      </h1>
      <p className="font-sans mt-1 font-light">Group Id: {groupId}</p>

      <p1 className="text-white mt-4">Current Song:</p1>

      <img
        src={album}
        alt="album"
        className="border-8 border-grey-600 rounded-md w-80"
      />
      <h1 className="text-white text-center text-lg">After Hours</h1>
      <h1 className="text-white text-center text-sm">Weeknd</h1>
      <div className="bg-gray-800 text-white p-2 mt-8">
        <SpotifyPlayer
          styles={{
            sliderColor: "#1cb954",
            color: "white",
            trackArtistColor: "#b3b3b3",
            trackNameColor: "white",
          }}
        />
      </div>
      <div className="flex justify-center align-middle">
        <button
          id="user"
          className="text-white bg-transparent border-2 rounded-full px-4 py-1 mx-2 whitespace-nowrap mt-4 border-white hover:bg-red-500"
        >
          Leave Group
        </button>
      </div>
      <div className="fixed top-0 right-0 mt-16">
        <Chatbox />
      </div>

      <div className="fixed left-32 top-20">
        <Playlist />
      </div>
    </div>
  );
}

export default Groupplayer;
