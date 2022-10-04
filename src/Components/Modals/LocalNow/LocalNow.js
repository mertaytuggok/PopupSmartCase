import React from "react";
import { CgCloseO } from "react-icons/cg";

export const LocalNow = () => {
  return (
    <div className=" relative   w-[480px] h-[600px]  grid justify-items-center rounded-md  ">
      <div className=" w-[480px] h-[300px]  ">
        {" "}
        <img src="LocalNow.png" />{" "}
      </div>
      <p className=" w-[236px] h-[36px] text-[30px] font-bold  ">
        Install local now
      </p>
      <p className=" w-[233px] h-[24px] text-[20px] font-normal  ">
        We’ve gone native, try it!
      </p>

      <button className=" bg-[#7D4AEA] ml-[15px] text-white font-medium w-[350px] h-[48px] text-[16px] border-2 rounded-md ">
        Continue
      </button>
      <button className=" ml-4 w-[350px] h-[48px] text-[16px] font-medium border-2 rounded-md ">
        Not Now
      </button>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
