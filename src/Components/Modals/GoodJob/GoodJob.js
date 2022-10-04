import React from "react";
import { CgCloseO } from "react-icons/cg";
import { GoodJobSVG } from "../../../Assets/GoodJob/GoodJob";

export const GoodJob = () => {
  return (
    <div className=" relative   w-[480px] h-[448px]  grid justify-items-center rounded-md  ">
      <div className=" mt-[56.25px] ">
        <GoodJobSVG />
      </div>
      <p className=" w-[234px] h-[36px] mt-[35px] text-[30px]   ">
        Good job, <b className="font-bold">Jenny</b>
      </p>
      <p className=" w-[262px] h-[48px] text-[20px] mt-[20px] text-center font-normal  ">
        Your profile is created!
      </p>

      <button className=" bg-[#7D4AEA] text-white font-medium mt-[31px] w-[192px] h-[48px] text-[16px] border-2 rounded-md ">
        Go to my profile
      </button>

      <p className=" w-[91px] h-[19px]   text-[16px] font-normal ">
        Go to Home
      </p>

      <div className=" absolute top-[23px] right-[23px]  ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
