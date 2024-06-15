/* eslint-disable react/prop-types */

const UserMessage = ({children}) => {
    return (
        <div className="flex flex-col justify-end items-end">
          <div className="bg-green-400 text-white w-fit px-4 py-1.5 rounded-tr-2xl rounded-l-2xl">
           {children}
          </div>
        </div>
    );
};

export default UserMessage;