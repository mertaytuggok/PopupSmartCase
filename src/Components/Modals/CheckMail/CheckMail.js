import React from "react";
import { CheckMail } from "../../../Assets/CheckMail/CheckMail";
import { CgCloseO } from "react-icons/cg";

export const CheckMailModal = ({
  size,
  color,
  title,
  input,
  button,
  comment,
}) => {
  return (
    <div
      className={`relative ${
        size === "Small"
          ? "w-[380px]  h-[584x]"
          : size === "Medium"
          ? "w-[480px]  h-[584x]"
          : "Large"
          ? " w-[580px] h-[684x]"
          : "w-[480px]  h-[584x]  "
      }  bg-white   grid justify-items-center rounded-md `}
    >
      <div className="   mt-[50px] ">
        {" "}
        <CheckMail />{" "}
      </div>
      <p className=" w-[254px] h-[36px] text-[30px] text-center mt-[20px] font-bold  ">
        {title ? title : "Check your email"}
      </p>
      <p className=" w-[351px] h-[48px] mt-[20px] text-[20px] font-normal text-center    ">
        {comment
          ? comment
          : " Once you deletet your account, you’ll lose all data associatted with it."}
      </p>

      <input
        type="email"
        placeholder={`${input ? input : "Enter your email"}`}
        className="  w-[349px] h-[47px] mt-[43.5px] border-2 rounded-md p-3 "
      />
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
        }  bg-[#7D4AEA] mt-[15.5px] text-white font-medium w-[350px] text-center h-[48px] text-[16px] border-2 rounded-md `}
      >
        {button ? button : "Sign up "}
      </button>

      <p className=" w-[171px] h-[17px] mt-[20px] text-[14px] ">
        Already
        <b className=" font-normal underline underline-offset-2 ">
          {" "}
          have an account?
        </b>
      </p>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
