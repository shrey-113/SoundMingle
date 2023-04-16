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
      io.emit("roomsData", room);
      console.log(room);
      socket.join(roomID);
      curRoomId = roomID;

      await fsp.writeFile("./data/rooms.json", JSON.stringify({ rooms }));
    }
  });

  socket.on("deleteRoom", (roomId) => {
    console.log(roomId);
    const roomsData = JSON.parse(fs.readFileSync("./rooms.json"));

    const roomIndex = roomsData.rooms.findIndex(
      (room) => room.RoomId === roomId
    );

    if (roomIndex !== -1) {
      roomsData.rooms.splice(roomIndex, 1);
      fs.writeFileSync("./rooms.json", JSON.stringify(roomsData));
      socket.emit("roomsData", roomsData);
      console.log(`Room ${roomId} deleted`);
    }
  });

  socket.on("skipped", (data) => {
    const a = fs.readFileSync("./rooms.json", "utf-8");
    const userData = JSON.parse(a);
    const participants = userData.rooms[0].participants;
    const users = [];
    participants.forEach((participant) => {
      const userName = Object.values(participant)[0].userName;
      users.push(userName);
    });
    console.log(users);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
