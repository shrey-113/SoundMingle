import React, { useState } from "react";
import { FaPlus, FaDoorOpen, FaTimes } from "react-icons/fa";
import Tablebody from "../../components/Group/Tablebody";
import Joinform from "../../components/Group/Joinform";
import Creatform from "../../components/Group/Createform";
import io from "socket.io-client";
export const socket = io.connect("http://localhost:3001");

function Group() {
  const [showCreatePopUp, setShowCreatePopUp] = useState(false);
  const [showJoinPopUp, setShowJoinPopUp] = useState(false);

  const handleCreateRoomClick = () => {
    setShowCreatePopUp(true);
  };

  const handleJoinRoomClick = () => {
    setShowJoinPopUp(true);
  };

  const handleClosePopUpClick = () => {
    setShowCreatePopUp(false);
    setShowJoinPopUp(false);
  };
  return (
    <div className="flex flex-col mt-10 w-full h-screen text-center">
      <div className="flex flex-row h-10 ml-auto mr-4">
        <button
          className="bg-blue-600 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-lg focus:outline-none focus:shadow-outline-blue border-white border-2 flex items-center"
          onClick={handleCreateRoomClick}
        >
          <FaPlus className="mr-2" />
          Create Room
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-lg focus:outline-none focus:shadow-outline-blue border-white border-2 flex items-center"
          onClick={handleJoinRoomClick}
        >
          <FaDoorOpen className="mr-2" />
          Join Room
        </button>
      </div>
      {showCreatePopUp && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Create Music Room</h2>
              <button onClick={handleClosePopUpClick}>
                <FaTimes className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <Creatform />
          </div>
        </div>
      )}
      {showJoinPopUp && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Join Music Room</h2>
              <button onClick={handleClosePopUpClick}>
                <FaTimes className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <Joinform />
          </div>
        </div>
      )}

      <h1 className="text-2xl text-white">
        Join the Beat: Your Online Music Room
      </h1>
      <div className="flex w-full items-center mt-12">
        <div className="text-white border-2 rounded-md whitespace-nowrap border-white p-2 text-xl font-bold ml-10">
          Active Room
        </div>
        <div className="bg-white h-[2px] w-full"></div>
      </div>
      <div className=" mt-4">
        <div className="overflow-y-auto h-3/6 mx-10">
          <table className="table h-full w-full">
            <thead
              className="bg-gray-600 text-white font-sans text-lg "
              style={{ position: "sticky", top: "0" }}
            >
              <tr>
                <td className="py-4">Group Id</td>
                <td className="py-4">Name</td>
                <td className="py-4">Genre</td>
                <td className="py-4">Total Members</td>
                <td className="py-4">Action</td>
              </tr>
            </thead>
            <tbody className="bg-white">
              <Tablebody
                g_id="847648"
                g_name="Melody Mates"
                genre="Rock"
                t_members="8"
              />
              <Tablebody
                g_id="123456"
                g_name="Jazz Junkies"
                genre="Jazz"
                t_members="5"
              />
              <Tablebody
                g_id="987654"
                g_name="Pop Pals"
                genre="Pop"
                t_members="10"
              />
              <Tablebody
                g_id="453987"
                g_name="The Beatles"
                genre="Rock"
                t_members="4"
              />
              <Tablebody
                g_id="440985"
                g_name="Nirvana"
                genre="Grunge"
                t_members="3"
              />
              <Tablebody
                g_id="809652"
                g_name="Pink Floyd"
                genre="Progressive Rock"
                t_members="5"
              />
              <Tablebody
                g_id="598451"
                g_name="The Rolling Stones"
                genre="Rock"
                t_members="4"
              />
              <Tablebody
                g_id="098764"
                g_name="Led Zeppelin"
                genre="Hard Rock"
                t_members="4"
              />
              <Tablebody
                g_id="949867"
                g_name="Metallica"
                genre="Heavy Metal"
                t_members="4"
              />
              <Tablebody
                g_id="740597"
                g_name="Radiohead"
                genre="Alternative Rock"
                t_members="5"
              />
              <Tablebody
                g_id="823048"
                g_name="Queen"
                genre="Rock"
                t_members="4"
              />
              <Tablebody
                g_id="550976"
                g_name="AC/DC"
                genre="Hard Rock"
                t_members="5"
              />
              <Tablebody
                g_id="100495"
                g_name="Red Hot Chili Peppers"
                genre="Alternative Rock"
                t_members="4"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Group;
