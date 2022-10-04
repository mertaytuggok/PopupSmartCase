import React from "react";
import { CgCloseO } from "react-icons/cg";
import { DarkModeSvg } from "../../../Assets/DarkMode/DarkModeSvg";
import { Eye } from "../../../Assets/DarkMode/Eye";
import { Home } from "../../../Assets/DarkMode/Home";

export const DarkMode = () => {
  return (
    <div className=" relative   w-[480px] h-[672px]  grid justify-items-center rounded-md  ">
      <div className=" mt-[50px] ">
        <DarkModeSvg />
      </div>
      <p className=" w-[159px] h-[36px] text-[30px] mt-3 font-bold  ">
        Dark mode
      </p>
      <p className=" w-[234px] h-[48px] text-[20px] mt-4 text-center font-normal  ">
        Just letting you know that we have dark mode.
      </p>

      <div>
        <div className=" mt-8 flex flex-row-2 ">
          <div>
            <Eye />
          </div>
          <p className=" w-[91px] h-[24px] text-[20px]  font-bold ml-[15.5px] ">
            Eye relief
          </p>
        </div>
        <p className=" w-[271px] h-[38px]  text-4 font-normal mb-[41px] ml-[50px] ">
          With dark mode you won’t be giving your eyes shock in the morning.
        </p>
        <div className=" h-[24px] flex flex-row">
          <div>
            <Home />{" "}
          </div>
          <p className=" w-[91px] h-[24px] text-[20px] font-bold ml-[15.5px] ">
            Environment
          </p>
        </div>
        <p className=" w-[260px] h-[38px] text-4 font-normal mb-[41px] ml-[50px]  ">
          Change the mode depending in which place you’re at the moment.
        </p>
      </div>

      <button className=" bg-[#7D4AEA] text-white font-medium  mt-[46px] w-[350px] h-[48px] text-[16px] border-2 rounded-md ">
        Turn on dark mode
      </button>
      <button className="  bg-white  w-[350px] h-[48px] text-[16px] mt-[14.5px] font-medium border-2 rounded-md ">
        Keep using light mode
      </button>
      <div className=" absolute top-[23px] right-[23px]  ">
        <CgCloseO size={30} color="gray" />
      </div>
    </div>
  );
};
