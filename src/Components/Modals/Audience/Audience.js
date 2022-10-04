import React from "react";
import { HeyThere } from "../../../Assets/HeyThere/HeyThere";
import { CgCloseO } from "react-icons/cg";
import { TailwindSvg } from "../../../Assets/Tailwind/Tailwind";

export const Audience = () => {
  return (
    <>
      <div className=" relative   w-[740px] h-[150]  rounded-md flex flex-row   ">
        <div className="mb-[40px] mt-[30px] ml-[30px] w-[90px] h-[90px] bg-[#7D4AEA] rounded-full  ">
          <p className="  p-5 ml-2 ">
            <TailwindSvg />
          </p>
        </div>
        <div className="ml-5">
          <p className=" w-[375px] h-[29px] text-[24px] mt-[30px] mb-5 font-bold  ">
            Reach and grow your audiennce
          </p>
          <p className=" w-[257px] h-[24px] mb-[41px] text-[20px] font-normal text-[#777777]  ">
            Build a better popup today.
          </p>
        </div>

        <div className=" absolute top-[23px] right-[23px] ">
          <CgCloseO size={30} color="gray" />
        </div>
      </div>
    </>
  );
};
