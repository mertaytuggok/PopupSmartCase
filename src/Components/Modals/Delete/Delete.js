import React from "react";
import { Tarsh } from "../../../Assets/Trash/Tarsh";
import { CgCloseO } from "react-icons/cg";

export const Delete = ({ size, color }) => {
  return (
    <div
      className={` ${
        size === "Small"
          ? "w-[380px]"
          : size === "Medium"
          ? "w-[480px]"
          : "Large"
          ? " w-[580px]"
          : "w-[480px] "
      } relative bg-white  h-[516px]  grid justify-items-center rounded-md  `}
    >
      <div className= {`  ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-[#7D4AEA] "
          } w-[90px] h-[90px] rounded-full mt-10 p-5 `}>
        {" "}
        <Tarsh />{" "}
      </div>
      <p className=" w-[271px] h-[36px] text-[30px] font-bold  ">
        Delete your profile
      </p>
      <p className=" w-[306px] h-[48px] text-[20px] font-normal text-center  ">
        Your profile will be automatically deleted after 1 month.
      </p>
      <p className=" w-[239px] h-[38px] text-[#777777] text-[16px] font-normal  ">
        You won’t be able to access to your profile after <b>30.08.2021.</b>
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
        }  ml-[15px] text-white font-medium w-[350px] h-[48px] text-[16px] border-2 rounded-md`}
      >
        Continue
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
