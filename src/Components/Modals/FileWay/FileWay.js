import React from "react";
import { CgCloseO } from "react-icons/cg";

export const FileWay = ({ size, color, title, comment, button }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px] h-[283px]"
          : size === "Medium"
          ? "w-[480px] h-[283px] "
          : size === "Large"
          ? " w-[580px] h-[430px] "
          : "w-[480px] h-[283px] "
      } relative bg-white    grid justify-items-center rounded-md  `}
    >
      <p className=" w-[303px] h-[36px] text-center text-[30px] mt-[50px] font-bold  ">
        {title ? title : " The file is on it's way"}
      </p>
      <p className=" w-[290px] h-[48px] text-center text-[20px] font-normal  ">
        {comment
          ? comment
          : " You’ll get an notified when the receiver has opened the email."}
      </p>

      <button
        className={` ${
          color === "Black"
            ? "bg-black"
            : color === "Orange"
            ? "bg-[#F37C34]"
            : color === "Gray"
            ? " bg-[#777777]"
            : color === "White"
            ? " bg-[#DDDDDD]"
            : "bg-white text-black"
        } bg-[#7D4AEA] ml-[15px] text-white font-medium w-[350px] h-[48px] text-[16px] border-2 rounded-md `}
      >
        {button ? button : " Go to dashboard "}
      </button>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
