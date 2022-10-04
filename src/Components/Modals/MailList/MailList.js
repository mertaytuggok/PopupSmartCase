import React from "react";
import { CgCloseO } from "react-icons/cg";
import { ModalList } from "../../../Assets/ModalList/ModalList";

export const MailList = ({ size, color, title, input, button, comment }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px]  h-[446px]"
          : size === "Medium"
          ? "w-[480px]  h-[446px]"
          : "Large"
          ? " w-[580px]  h-[546px]"
          : "w-[480px]   h-[446px]"
      } relative  bg-white   grid justify-items-center rounded-md  `}
    >
      <div className=" mt-[40px]">
        {" "}
        <ModalList />{" "}
      </div>
      <p className=" w-[239px] h-[36px] text-[30px] text-center font-bold  ">
        {title ? title : "Join our mail list"}
      </p>
      <p className=" w-[323px] h-[24px] text-[20px] text-center font-normal  ">
        {comment ? comment : "Save up to 30% of your next order"}
      </p>

      <input
        type="email"
        placeholder={`${input ? input : "Enter your email"}`}
        className=" w-[349px] h-[47px] border-2 rounded-md p-3 "
      />
      <div className=" flex flex-row ">
        <button className=" w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md ">
          Later
        </button>
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
              : color === "Default"
              ? "bg-white text-black"
              : "bg-[#7D4AEA]"
          } ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md`}
        >
          {button ? button : "Join Now"}
        </button>
      </div>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
