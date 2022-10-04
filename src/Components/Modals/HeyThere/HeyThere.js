import React from "react";
import { HeyThere } from "../../../Assets/HeyThere/HeyThere";
import { CgCloseO } from "react-icons/cg";

export const HeyThereModal = ({ size, color, button, title, comment }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px] h-[471px]"
          : size === "Medium"
          ? "w-[480px] h-[471px]"
          : "Large"
          ? " w-[580px]  h-[571px]"
          : "w-[480px] h-[471px]"
      } relative  bg-white    grid justify-items-center rounded-md`}
    >
      <div className="mt-[50px]">
        {" "}
        <HeyThere />{" "}
      </div>
      <p className=" w-[300px] h-[58px] text-[48px] text-center font-bold  ">
        {title ? title : "Hey there🥳"}
      </p>
      <p className=" w-[306px] h-[48px] mt-[24px] text-[20px] text-center font-normal  ">
        {comment
          ? comment
          : "We’re launching our product and we would be happy to have you."}
      </p>

      <button
        className={`${
          color === "Black"
            ? "bg-black text-white"
            : color === "Orange"
            ? "bg-[#F37C34]"
            : color === "Gray"
            ? " bg-[#777777]"
            : color === "White"
            ? " bg-[#DDDDDD]"
            : "bg-white text-black"
        }  bg-[#7D4AEA] mt-[33px] text-white font-medium w-[350px] h-[48px] text-[16px] border-2 rounded-lg`}
      >
        {button ? button : "Sign up"}
      </button>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
