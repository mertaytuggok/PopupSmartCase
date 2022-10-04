import React from "react";
import { CgCloseO } from "react-icons/cg";

export const Hello = ({ size, color }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px]"
          : size === "Medium"
          ? "w-[480px]"
          : "Large"
          ? " w-[580px] h-[360px]"
          : "w-[480px] "
      } ${
        color === "Black"
          ? "bg-black text-white"
          : color === "Orange"
          ? "bg-[#F37C34]"
          : color === "Gray"
          ? " bg-[#777777]"
          : color === "White"
          ? " bg-[#DDDDDD]"
          : " bg-[#7D4AEA] text-black"
      } relative    h-[283px]  grid justify-items-center rounded-md `}
    >
      <p className=" w-[172px] h-[36px] text-[30px] mt-[59px] font-bold text-white  ">
        Hi, stranger
      </p>
      <p className=" w-[349px] h-[24px] text-[20px] font-normal text-white  ">
        Sign up now, and get a 30% discount
      </p>

      <div className=" flex flex-row ">
        <button className="{` bg-[#7D4AEA] mr-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md`} ">
          Log In
        </button>
        <button
          className={`${
            color === "Black" ? "bg-black text-white" : "bg-white text-black"
          } bg-white w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md `}
        >
          Sign up now
        </button>
      </div>
      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
