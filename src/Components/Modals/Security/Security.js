import React from "react";
import { Securitysvg } from "../../../Assets/Security/Securitysvg";
import { CgCloseO } from "react-icons/cg";

export const Security = ({ size, color }) => {
  return (
    <div>
      <div
        className={`relative ${
          size === "Small"
            ? "w-[380px] h-[446px]"
            : size === "Medium"
            ? "w-[480px] h-[446px]"
            : "Large"
            ? " w-[580px] h-[546px]"
            : "w-[480px] h-[446px] "
        }   bg-white grid justify-items-center rounded-md `}
      >
        <div
          className={` ${
            color === "Black"
              ? "bg-black"
              : color === "Orange"
              ? "bg-[#F37C34]"
              : color === "Gray"
              ? " bg-[#777777]"
              : color === "White"
              ? " bg-[#DDDDDD]"
              : "bg-[#7D4AEA] "
          } w-[90px] h-[90px]  rounded-full mt-10 p-5 `}
        >
          {" "}
          <Securitysvg />{" "}
        </div>
        <p className=" w-[209px] h-[36px] text-[30px] font-bold  ">
          Security Code
        </p>
        <p className=" w-[278px] h-[24px] text-[20px] font-normal  ">
          This code expires in 24 hours
        </p>

        <input
          type="text"
          placeholder="Code"
          className=" w-[349px] h-[47px] border-2 rounded-md p-3 "
        />
        <div className=" flex flex-row ">
          <button className=" w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md ">
            Cancel
          </button>
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
                : "bg-white , text-black"
            }  ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md `}
          >
            Continue
          </button>
        </div>

        <div className=" absolute top-[23px] right-[23px] ">
          <CgCloseO size={30} color="gray" />
        </div>
      </div>
    </div>
  );
};
