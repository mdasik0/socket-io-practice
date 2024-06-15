import { useEffect, useState } from "react";
import JoinOrCreate from "./component/JoinOrCreate";
import Chats from "./component/Chats";

const App = () => {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const currentlyJoined = JSON.parse(localStorage.getItem("Joined-room"));
    console.log(currentlyJoined);
    setRoom(currentlyJoined);
  }, []);

  const leaveRoom = () => {
    localStorage.removeItem("Joined-room")
    setRoom(null)
  }

  if (room) {
    return (
      <div className="w-screen h-screen bg-yellow-50 text-black">
        <div className="flex justify-between items-center p-10">
        <h1 className="text-3xl">
          welcome to <span className="font-semibold">{room.roomName}</span>
        </h1>
        <button onClick={leaveRoom} className="px-4 py-2 bg-red-500 text-white hover:bg-red-400 duration-300 rounded">Leave room</button>
        </div>
        <Chats />
      </div>
    );
  } else {
    return (
      <>
        <JoinOrCreate />
      </>
    );
  }
};

export default App;

