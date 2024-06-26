/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";

const JoinRoom = () => {
  const [isRoomOpen, setIsRoomOpen] = useState(false);
  const [error, setError] = useState({ status: 0, message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomName = e.target.roomName.value;
    const roomPass = e.target.roomPass.value;

    console.log({ roomName, roomPass });
    const getRooms = JSON.parse(localStorage.getItem("rooms"));
    if (!getRooms) {
      setError({
        status: 500,
        message: "No rooms found. please create a new room",
      });
    }
    const roomNameMatch = getRooms.find((r) => r.roomName === roomName);
    if (!roomNameMatch) {
      setError({
        status: 500,
        message: "No rooms found by the same name",
      });
    }
    if(roomNameMatch.roomPass !== roomPass) {
      setError({
        status: 500,
        message: "Room Password didn't matched. Please try again.",
      });
    }
    localStorage.setItem("Joined-room",JSON.stringify(roomNameMatch));
    setError({ status: 0, message: "" })
    window.location.reload()
    
  };

  return (
    <>
      <button
        onClick={() => setIsRoomOpen(!isRoomOpen)}
        className="bg-blue-500 hover:bg-blue-400 duration-300 px-4 py-2 rounded text-white"
      >
        Join a Room
      </button>{" "}
      <Modal setIsRoomOpen={setIsRoomOpen} isOpen={isRoomOpen}>
        <h1 className="text-xl font-semibold">Join a Room</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6">
            <label htmlFor="roomName" className="text-sm text-gray-500">
              Room name
            </label>
            <input
              name="roomName"
              placeholder="Enter your Room Name"
              id="roomName"
              className="border focus:outline-none px-3 py-1.5 rounded"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="roomPass" className="text-sm text-gray-500">
              Room Password
            </label>
            <input
              name="roomPass"
              placeholder="Enter your Room Password"
              id="roomPass"
              className="border focus:outline-none px-3 py-1.5 rounded"
              type="text"
              required
            />
          </div>
          {error.message && (
            <span className="text-sm text-red-400">
              Error: {error?.message}
            </span>
          )}
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded mt-3"
            >
              Join Room
            </button>
            <button
              onClick={() => {
                setIsRoomOpen(!isRoomOpen);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded mt-3"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default JoinRoom;
