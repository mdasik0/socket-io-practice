/* eslint-disable react/prop-types */

const ChatCard = ({openChat}) => {
    return (
        <div onClick={openChat} className="bg-zinc-300 rounded p-3 flex justify-between cursor-pointer">
        <div>
          <h4>User Name</h4>
          <span className="text-sm">Last message was sent</span>
        </div>
        <span className="text-sm">10 min </span>
      </div>
    );
};

export default ChatCard;