import React from "react";
import { CgCloseO } from "react-icons/cg";
import { Robot } from "../../../Assets/Robot/Robot";

export const Found = ({ size, color, button, title, comment }) => {
  return (
    <div
      className={`${
        size === "Small"
          ? "w-[380px]  h-[508px] "
          : size === "Medium"
          ? "w-[480px]  h-[508px] "
          : "Large"
          ? " w-[580px] h-[608px]"
          : "w-[480px]  h-[508px]  "
      }  relative  bg-white  grid justify-items-center rounded-md`}
    >
      <div className=" mt-[56.25px] ">
        <Robot />
      </div>
      <p className=" w-[79px] h-[36px] mt-[35px] text-[30px] text-center  font-bold  ">
        {title ? title : "Opps"}
      </p>
      <p className=" w-[145px] h-[48px] text-[20px] mt-[10px] text-center font-normal  ">
        {comment ? comment : "Page not found"}
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
        }  font-medium mb-[20px]  w-[349px] text-center h-[47px] text-[16px] border-2 rounded-md `}
      >
        {button ? button : "Back to home"}
      </button>

      <div className=" absolute top-[23px] right-[23px]  ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
