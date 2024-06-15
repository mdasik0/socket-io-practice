/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";

const CreateRoom = () => {
  const [isRoomOpen, setIsRoomOpen] = useState(false);

  // Todo: set item to localstorage through a function

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomName = e.target.roomName.value;
    const roomPass = e.target.roomPass.value;

    // Generate a random ID
    const roomId =
      "room_id_" + Date.now() + "-" + Math.floor(Math.random() * 1000);

    const roomObj = { roomId, roomName, roomPass };

    // Retrieve existing rooms from localStorage
    const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
    // returns [{obj},{obj}] or []
    
    // Add the new room to the array
    rooms.push(roomObj);
    // returns [{newObj},{prevObj}]


    // Save the updated rooms array to localStorage
    localStorage.setItem("rooms", JSON.stringify(rooms));

    localStorage.setItem("Joined-room", JSON.stringify(roomObj))

    setIsRoomOpen(!isRoomOpen);
  };

  return (
    <>
      <button
        onClick={() => setIsRoomOpen(!isRoomOpen)}
        className="bg-green-500 hover:bg-green-400 duration-300 px-4 py-2 rounded text-white"
      >
        Create a Room
      </button>{" "}
      <Modal setIsRoomOpen={setIsRoomOpen} isOpen={isRoomOpen}>
        <h1 className="text-xl font-semibold">Create a Room</h1>
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
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded mt-3"
            >
              Create Room
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

export default CreateRoom;
