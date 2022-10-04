import React from "react";
import { HeyThere } from "../../../Assets/HeyThere/HeyThere";
import { CgCloseO } from "react-icons/cg";

export const DesignModal = () => {
  return (
    <>
      <div className=" relative   w-[480px] h-[425px] bg-[#F6F1FF] grid justify-items-center rounded-md  ">
        <div className="mb-[40px] w-full h-[60px] bg-white grid justify-items-center">
          {" "}
          <HeyThere />{" "}
        </div>
        <p className=" w-[340px] h-[36px] text-[30px] mt-[30px] mb-5 font-bold  ">
          Do you like our design?
        </p>
        <p className=" w-[200px] h-[24px] mb-[41px] text-[20px] font-normal  ">
          Help us to improve it.
        </p>

        <div className=" bg-white w-full h-[245px] justify-center flex flex-row ">
          <button className="mt-[22.5px] w-[60px] h-[60px]  rounded-full border-2 text-center items-center ">
            <p className="  text-[30px]  ">🥳</p>
          </button>

          <button className="mt-[22.5px] w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center ">
            <p className="  text-[30px] ">😊</p>
          </button>
          <button className="mt-[22.5px] w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center ">
            <p className="  text-[30px] ">😋</p>
          </button>
          <button className="mt-[22.5px] w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center ">
            <p className="  text-[30px] ">🤗</p>
          </button>
          <button className="mt-[22.5px] w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center ">
            <p className="  text-[30px] ">☹️</p>
          </button>
        </div>

        <div className=" absolute top-[83px] right-[23px] ">
          <CgCloseO size={30} color="gray" />
        </div>
      </div>
    </>
  );
};
