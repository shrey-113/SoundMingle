import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMusicalNote } from "react-icons/io";

function Creatform() {
  const [groupName, setGroupName] = useState("");
  const [totalMembers, setTotalMembers] = useState("");
  const [genre, setGenre] = useState("");
  const [roomType, setRoomType] = useState("public");

  const navigate = useNavigate(); // Get the history object

  const handleSubmit = (e) => {
    e.preventDefault();
    // generate random group ID
    const groupId = Math.floor(Math.random() * 1000000);
    // navigate to new room page
    navigate(`/group/${groupId}/room`);
  };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto mt-8">
            <div className="flex flex-col mb-4">
                <label htmlFor="group-name" className="mb-2 font-medium text-gray-700">
                    Group Name
                </label>
                <input
                    type="text"
                    id="group-name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="total-members" className="mb-2 font-medium text-gray-700">
                    Total Members
                </label>
                <input
                    type="number"
                    id="total-members"
                    value={totalMembers}
                    onChange={(e) => setTotalMembers(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="genre" className="mb-2 font-medium text-gray-700">
                    Genre
                </label>
                <input
                    type="text"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="flex flex-col mb-4">
                <label htmlFor="room-type" className="mb-2 font-medium text-gray-700">
                    Room Type
                </label>
                <div className="flex items-center justify-center">
                    <button
                        className={"flex-1 py-2 text-center focus:outline-none " + (roomType === "public" ? "bg-gray-200 text-gray-700 font-medium" : "bg-gray-100 text-gray-500")}
                        onClick={() => setRoomType("public")}
                    >
                        Public
                    </button>
                    <button
                        className={"flex-1 py-2 text-center focus:outline-none " + (roomType === "private" ? "bg-gray-200 text-gray-700 font-medium" : "bg-gray-100 text-gray-500")}
                        onClick={() => setRoomType("private")}
                    >
                        Private
                    </button>
                </div>
            </div>

            <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                <span className="flex items-center justify-center space-x-2">
                    <IoMdMusicalNote className="w-5 h-5" />
                    <span>Create Room</span>
                </span>
            </button>
        </form>
    );


}

export default Creatform;

