import React from "react";
import { CgCloseO } from "react-icons/cg";
import { Reminders } from "../../../Assets/Reminders/Reminders";

export const RemindersModal = ({size, color}) => {
  return (
    <div className=  {`${
      size === "Small"
        ? "w-[380px]"
        : size === "Medium"
        ? "w-[480px]"
        : "Large"
        ? " w-[580px] h-[560px]"
        : "w-[480px] "
    }  relative  bg-white   h-[446px]  grid justify-items-center rounded-md`}     >
      <div className=" mt-[56.25px] ">
        <Reminders />
      </div>
      <p className=" w-[158px] h-[36px] text-[30px] font-bold  ">Reminders</p>
      <p className=" w-[262px] h-[48px] text-[20px] text-center font-normal  ">
        How often would you like to be reminded to write?
      </p>

      <button className= {`${
          color === "Black"
            ? "bg-black text-white"
            : color === "Orange"
            ? "bg-[#F37C34]"
            : color === "Gray"
            ? " bg-[#777777]"
            : color === "White"
            ? " bg-[#DDDDDD]"
            : "bg-white text-black"
        } border-[#7D4AEA] font-medium mt-[41.5px] w-[350px] h-[48px] text-[16px] border-2 rounded-md `}>
        Daily
      </button>
      <button className=  {`${
          color === "Black"
            ? "bg-black text-white"
            : color === "Orange"
            ? "bg-[#F37C34]"
            : color === "Gray"
            ? " bg-[#777777]"
            : color === "White"
            ? " bg-[#DDDDDD]"
            : "bg-white text-black"
        } border-[#7D4AEA]  w-[350px] h-[48px] text-[16px] font-medium border-2 rounded-md `} >
        Weekly
      </button>
      <p className=" w-[108px] h-[19px]  mt-[28.5px] text-[16px] font-medium ">
        No Reminders
      </p>

      <div className=" absolute top-[23px] right-[23px]  ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
