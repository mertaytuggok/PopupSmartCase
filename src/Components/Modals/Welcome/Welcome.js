import React from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegSmileBeam } from "react-icons/fa";

export const Welcome = () => {
  return (
    <div className=" relative   w-[480px] h-[466px]  grid justify-items-center rounded-md bg-[#7D4AEA]  ">
      <div className="  bg-[#7D4AEA] rounded-full mt-[60px] ">
        {" "}
        <FaRegSmileBeam color="white" size={120} />{" "}
      </div>
      <p className=" w-[236px] h-[36px] text-[30px] text-white font-bold  ">
        Welcome to talk
      </p>
      <p className=" w-[322px] h-[72x] text-[20px] mb-[55px] text-center text-white font-normal  ">
        Send friends photos, videos, locations, songs, voice messages, and more.
      </p>

      <div className=" absolute bg-[#000000] opacity-10 bottom-0 w-full h-[64px]">
        <button className="   text-[#FFFFFF] font-medium w-full h-[64px] text-[20px]">
          Let’s get started
        </button>
      </div>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
