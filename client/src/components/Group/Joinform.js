import { useState } from "react";
import { Link } from "react-router-dom";
import { socket } from "../../screens/group/index";

function Joinform() {
  const [groupId, setGroupId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const socketID = socket.id;
    const userdata = {
      userid: localStorage.getItem("userId"),
      userName: localStorage.getItem("userName"),
      profileImage: localStorage.getItem("profileImage"),
      socketid: socket.id,
    };
    socket.emit("joingroup", groupId, socketID, userdata);
    // handle form submission here, e.g. navigate to room with entered groupId
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <label
        htmlFor="group-id"
        className="block text-gray-700 font-medium mb-2"
      >
        Enter Group ID:
      </label>
      <input
        type="text"
        id="group-id"
        name="group-id"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
        className="border border-gray-300 py-2 px-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <Link to={`/group/${groupId}/room`}>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Join Room
        </button>
      </Link>
    </form>
  );
}

export default Joinform;
