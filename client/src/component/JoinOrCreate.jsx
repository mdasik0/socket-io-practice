import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

const JoinOrCreate = () => {
  

  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <div>
        <CreateRoom  />
        <JoinRoom  />
        {/* crate room  */}
      </div>
    </div>
  );
};

export default JoinOrCreate;
