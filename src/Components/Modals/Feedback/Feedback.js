import React from "react";
import { CgCloseO } from "react-icons/cg";

export const Feedback = ({ size, color }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px]"
          : size === "Medium"
          ? "w-[480px]"
          : "Large"
          ? " w-[580px]"
          : "w-[480px] "
      }  relative bg-white  w-[480px] h-[226px]  grid justify-items-center rounded-md `}
    >
      <p className=" w-[214px] h-[36px] text-[30px] mt-[59px] font-bold text-dark  ">
        Let’s feedback
      </p>

      <div className=" flex cursor-pointer flex-row ">
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
