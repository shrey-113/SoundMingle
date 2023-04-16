const fs = require("fs").promises;
const path = require("path");

const createRoom = async (user1, roomid) => {
  const filePath = path.join(__dirname, "..", "data", "rooms.json");

  try {
    const data = await fs.readFile(filePath, "utf8");
    const obj = await JSON.parse(data);

    const room = {
      room_id: roomid,
      user_1: user1,
      user_2: null,
      isfull: false,
    };
    console.log(obj);
    obj.rooms.push(room);

    const newData = JSON.stringify(obj);
    await fs.writeFile(filePath, newData);
  } catch (err) {
    console.error(err);
  }
};

module.exports = createRoom;
