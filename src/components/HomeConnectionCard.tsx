import React from "react";

const HomeConnectionCard = ({ connection }) => {
  const { profileBackgroundImage, profileImage, username, bio } = connection;
  return (
    <div className="w-[22%] h-[260px] bg-bgPrimary rounded-lg flex flex-col items-center justify-start cursor-pointer mt-1 border-[1px] border-gray-200 ">
      <div
        className="relative w-[100%] h-[28%]  flex items-center justify-center
      "
      >
        <img
          className="w-[100%] h-[100%] rounded-tl-lg rounded-tr-lg"
          src={profileBackgroundImage}
          alt=""
        />
        <img
          className="absolute top-8 w-[75px] h-[75px] rounded-full border-2 border-textPrimary"
          src={profileImage}
          alt=""
        />
      </div>
      <p className="mt-11 text-[14px] font-semibold text-textPrimary">
        {username}
      </p>
      <p className="text-[10px] text-textTertiary p-4">{bio}</p>
      <button className="w-[80%] py-1 flex justify-center items-center mt-auto mb-3 text-primary text-[10px] font-semibold border-2 border-primary rounded-lg bg-bgPrimary">
        Message
      </button>
    </div>
  );
};

export default HomeConnectionCard;