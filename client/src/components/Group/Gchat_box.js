import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:3001"; // replace with your own backend endpoint

const Gchatbox = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    newSocket.emit("user-connect", currentUser);

    newSocket.on("user-connect", (users) => {
      setUsers(users);
    });

    newSocket.on("user-disconnect", (users) => {
      setUsers(users);
    });

    newSocket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    return () => newSocket.disconnect();
  }, [currentUser, messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", {
      from: currentUser,
      message: inputMessage,
    });
    setInputMessage("");
  };

  return (
    <div className="bg-black m-20 border-solid border-white border-2 rounded h-96 w-60 overflow-y-auto overflow-hidden">
      <div className="text-white m-2 font-bold">
        Group chat with {users.join(", ")}
      </div>
      <div className="">
        {messages.map((message, index) => (
          <div
            className={`m-2 rounded ${
              message.from === currentUser ? "bg-blue-700" : "bg-green-700"
            }`}
            key={index}
          >
            <div className="text-white mx-2 text-xs font-thin">
              {message.from}
            </div>
            <div className="text-white mx-2 ">{message.message}</div>
          </div>
        ))}
      </div>
      <div class="fixed bottom-0 left-0 w-full bg-gray-200 p-2">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between "
        >
          <input
            className="flex-1 mr-4 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            type="text"
            value={inputMessage}
            placeholder="Enter your message"
            onChange={(event) => setInputMessage(event.target.value)}
            style={{ color: "black" }}
          />
          <button
            className="px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Gchatbox;
