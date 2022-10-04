import React from "react";
import { Tarsh } from "../../../Assets/Trash/Tarsh";
import { CgCloseO } from "react-icons/cg";

export const Delete = ({ size, color, title, input, button, comment }) => {
  return (
    <div
      className={` ${
        size === "Small"
          ? "w-[380px]  h-[516px] "
          : size === "Medium"
          ? "w-[480px]  h-[516px] "
          : "Large"
          ? " w-[580px] h-[616px]"
          : "w-[480px]  h-[516px] "
      } relative bg-white  grid justify-items-center rounded-md  `}
    >
      <div
        className={`  ${
          color === "Black"
            ? "bg-black"
            : color === "Orange"
            ? "bg-[#F37C34]"
            : color === "Gray"
            ? " bg-[#777777]"
            : color === "White"
            ? " bg-[#DDDDDD]"
            : "bg-[#7D4AEA] "
        } w-[90px] h-[90px] rounded-full mt-10 p-5 `}
      >
        {" "}
        <Tarsh />{" "}
      </div>
      <p className=" w-[271px] h-[36px] text-[30px] text-center font-bold  ">
        {title ? title : "Delete your profile"}
      </p>
      <p className=" w-[306px] h-[48px] text-[20px] font-normal text-center  ">
        {comment
          ? comment
          : "  Your profile will be automatically deleted after 1 month."}
      </p>
      <p className=" w-[239px] h-[38px] text-[#777777] text-[16px] font-normal text-center  ">
        {input
          ? input
          : " You won’t be able to access to your profile after 30.08.2021."}
      </p>
      <button
        className={`${
          color === "Black"
            ? "bg-black"
            : color === "Orange"
            ? "bg-[#F37C34]"
            : color === "Gray"
            ? " bg-[#777777]"
            : color === "White"
            ? " bg-[#DDDDDD]"
            : "bg-white , text-black"
        }  ml-[15px] text-white font-medium w-[350px] h-[48px] text-center text-[16px] border-2 rounded-md`}
      >
        {button ? button : "Continue"}
      </button>
      <button className=" ml-4 w-[350px] h-[48px] text-[16px] font-medium border-2 rounded-md ">
        Cancel
      </button>
      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
