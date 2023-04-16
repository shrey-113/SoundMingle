const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const fsp = require("fs").promises;
const { log } = require("console");
const createRoom = require("./controllers/createroom");
const { loadavg } = require("os");
const path = require("path");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", async (data) => {
    const filePath = path.join(__dirname, "data", "rooms.json");
    const fileData = await fsp.readFile(filePath, "utf8");
    const roomsData = JSON.parse(fileData);

    const incompleteRooms = roomsData.rooms.filter((room) => !room.isfull); // filter the incomplete rooms
    const incompleteRoomIds = incompleteRooms.map((room) => room.room_id); // extract the room_ids of the incomplete rooms
    var curRoomId = null;

    if (incompleteRoomIds.length === 0) {
      const newRoomId = uuidv4();
      await createRoom(data, newRoomId);
      socket.join(newRoomId);
      curRoomId = newRoomId;
    } else {
      roomID = incompleteRoomIds[0];
      rooms = roomsData.rooms;
      const room = rooms.find((room) => room.room_id === roomID);

      room.user_2 = data;
      if (room.user_1 && room.user_2) {
        room.isfull = true;
      }

      const trackuriarray=[room.user_1.track_uri,room.user_1.track_uri]

      io.emit("trackarray",trackuriarray)
      console.log(room);
      socket.join(roomID);
      curRoomId = roomID;
      io.to(curRoomId).emit("roomsData", room);

      await fsp.writeFile("./data/rooms.json", JSON.stringify({ rooms }));
    }
  });

  socket.on("skipped", async (data) => {
    const filePath = path.join(__dirname, "data", "rooms.json");
    const a = await fsp.readFile(filePath, "utf8");
    const userData = JSON.parse(a);
    const rooms = userData.rooms;

    const room = rooms.find((r) => r.room_id === data.roomid);

    // if the room was found, update the value of skipped for the specified user

    if (room.user_1.userName === data.userName) {
      room.user_1.skipped = true;
    } else if (room.user_2 && room.user_2.userName === data.userName) {
      room.user_2.skipped = true;
    } else {
      console.log("Room not found.");
    }
    await fsp.writeFile("./data/rooms.json", JSON.stringify({ rooms }));

    // check if both users have skipped
    if (room.user_1.skipped && room.user_2.skipped) {
      io.to(room.user_1.socketid)
        .to(room.user_2.socketid)
        .emit("closeConnection");
    } else {
      io.to(room.user_1.socketid).to(room.user_2.socketid).emit("turnRed");
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
