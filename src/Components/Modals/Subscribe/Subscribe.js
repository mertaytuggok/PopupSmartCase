import React from "react";
import { CgCloseO } from "react-icons/cg";

export const Subscribe = () => {
  return (
    <div className=" relative   w-[740px] h-[400px]  grid justify-items-center rounded-md bg-[#7D4AEA]  ">
      <p className=" w-[490px] h-[44px] text-[36px] mt-[59px] font-bold text-white  ">
        Subscribe to our newsletter
      </p>
      <p className=" w-[420px] h-[29px] text-[24px] font-normal text-white  ">
        Receive the flash news in your inbox.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="  w-[349px] h-[47px] text-white bg-[#7D4AEA] border-2 rounded-md p-3 "
      />

      <div className=" flex flex-row justify-items-start    ">
        <input type="radio" className=" w-[23px] h-[23px] accent-[#7D4AEA] " />
        <label className=" w-[314px] h-[17px] text-[14px] text-white font-normal ml-[11px]  ">
          By subscribe this form I agree to Privacy Policy.
        </label>
      </div>

      <button className=" ml-[160px] bg-white w-[168px] h-[48px] text-[16px] font-medium  border-2 rounded-md ">
        Sign up now
      </button>

      <div className=" absolute top-[23px] right-[23px] ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
