import React from "react";

const User = ({ user, setUserActive }) => {
  return (
    <div className="absolute w-[500px] border-2 border-green-800 bg-white flex p-4 gap-4 rounded-md top-[50%] transform translate-x-[-50%] translate-y-[-50%] left-[50%]">
      <div>
        <img className="rounded-md w-full min-w-[250px] max-w-[250px]" src={user.avatar} />
      </div>
      <div className="flex flex-col justify-between w-[50%]">
        <div className="flex flex-col gap-2">
          <h4 className="text-green-800 font-[700] text-[20px] uppercase ">
            {user.name}
          </h4>
          <p className="bg-green-800 text-[14px] w-fit px-2 rounded-full font-serif text-white py-1">
            {user.role}
          </p>
          <p className="text-[14px] text-gray-700 font-[500] font">
            {user.email}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setUserActive((prev) => !prev)}
            className="w-fit bg-red-500 px-2 py-1 text-white font-[600] rounded-md uppercase text-[14px]"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
