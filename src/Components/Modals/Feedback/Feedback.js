import React from "react";
import { CgCloseO } from "react-icons/cg";

export const Feedback = ({ size, color, title, comment }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px]  h-[256px]"
          : size === "Medium"
          ? "w-[480px]  h-[256px]"
          : "Large"
          ? " w-[580px] h-[356px]"
          : "w-[480px]  h-[256px]"
      }  relative bg-white   grid justify-items-center rounded-md `}
    >
      <p className=" w-[214px] h-[36px] text-center text-[30px] mt-[59px] font-bold text-dark  ">
        {title ? title : " Let’s feedback"}
      </p>
      <p className=" w-[306px] h-[48px] text-[20px] font-normal text-center  ">
        {comment ? comment : ""}
      </p>

      <div className=" flex cursor-pointer mb-6 flex-row ">
        <button
          className={`  ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-white"
          } w-[60px] h-[60px]  rounded-full border-2 text-center items-center text-[30px]`}
        >
          😶
        </button>

        <button
          className={`  ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-white"
          } w-[60px] h-[60px] ml-[15.5px]  rounded-full border-2 text-center items-center text-[30px]`}
        >
          ☹️
        </button>
        <button
          className={`  ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-white"
          } w-[60px] h-[60px] ml-[15.5px]  rounded-full border-2 text-center items-center text-[30px]`}
        >
          😊
        </button>
        <button
          className={`  ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-white"
          } w-[60px] h-[60px] ml-[15.5px]  rounded-full border-2 text-center items-center text-[30px]`}
        >
          🤗
        </button>
        <button
          className={`  ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-white"
          } w-[60px] h-[60px] ml-[15.5px]  rounded-full border-2 text-center items-center text-[30px]`}
        >
          😄
        </button>
      </div>
      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
