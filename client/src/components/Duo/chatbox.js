import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:3001"; // replace with your own backend endpoint

const Chatbox = ({ currentUser, recipientUser }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    return () => newSocket.close(); // cleanup the socket connection when component unmounts
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.emit("joinRoom", {
      currentUser,
      recipientUser,
    });

    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [socket, currentUser, recipientUser, messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", {
      from: currentUser,
      to: recipientUser,
      message: inputMessage,
    });
    setInputMessage("");
  };

  return (
    <div className="bg-black m-20 border-solid border-white border-2 rounded max-h-96">
      <div className="text-white m-2 font-bold">Chatting with {recipientUser}</div>
      <div className="">
        {messages.map((message, index) => (
          <div className="bg-blue-700 m-2 rounded" key={index}>
            <div className="text-white mx-2 text-xs font-thin">{message.from}</div>
            <div className="text-white mx-2 ">{message.message}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input className="m-2 border-solid border-white border-2 rounded text-sm p-1"
          type="text"
          value={inputMessage}
          placeholder="Enter your message"
          onChange={(event) => setInputMessage(event.target.value)}
        />
        <button className="text-white bg-gray-500 border-white rounded text-sm p-2 mr-2" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbox;
