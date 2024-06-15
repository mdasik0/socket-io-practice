import { useState } from "react";
import ChatCard from "./ChatCard";
import UserMessage from "./UserMessage";
import OtherUserMessage from "./OtherUserMessage";

const Chats = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => {
    setIsChatOpen(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    alert(message);
  };
  return (
    <div className="mx-10 p-3 h-[80vh] rounded-lg bg-gray-300 flex gap-3">
      {/* chat sidebar */}
      <div className="bg-gray-100 p-3 h-full overflow-y-auto scrollbar w-1/5 rounded-md flex flex-col gap-3">
        {/* chat card */}
        <ChatCard openChat={openChat} />
        <ChatCard />
        <ChatCard />
      </div>
      {/* chat section  */}
      {isChatOpen && (
        <div className="bg-gray-100 p-3 h-full  w-4/5 rounded-md flex flex-col justify-between gap-3">
          {/* chat card */}
          {/* Message box */}
          <div className="overflow-y-auto scrollbar flex flex-col gap-3">
            <OtherUserMessage name={"Md siyam"}>
              Hi, How are you Asik?
            </OtherUserMessage>
            <UserMessage>Hello i am fine</UserMessage>
          </div>
          {/* input box */}
          <div>
            <form onSubmit={handleSendMessage} className="flex gap-4">
              <input
                className="bg-gray-300 px-4 py-2 w-full rounded-md outline-none"
                type="text"
                placeholder="Enter your message"
                name="message"
                id="message"
              />
              <button
                className="bg-green-500 hover:bg-green-400 duration-300 text-white px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
