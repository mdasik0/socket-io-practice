import { useState } from "react";
import JoinOrCreate from "./component/JoinOrCreate";

const App = () => {
  const [room, setRoom] = useState({
    key: null,
  });
  if (room.key) {
    return <div className="w-screen h-screen bg-yellow-50">
      welcome to chat room
    </div>;
  } else {
    return (
      <>
      <JoinOrCreate />
      </>
    );
  }
};

export default App;

