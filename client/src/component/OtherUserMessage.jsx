/* eslint-disable react/prop-types */

const OtherUserMessage = ({children,name}) => {
    return (
        <div className="flex flex-col justify-start">
        <span className="text-sm ml-3 text-gray-600">{name}</span>
        <div className="bg-gray-300 w-fit px-4 py-1.5 rounded-tl-2xl rounded-r-2xl">
         {children}
        </div>
      </div>
    );
};

export default OtherUserMessage;