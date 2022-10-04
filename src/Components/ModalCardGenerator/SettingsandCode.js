import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const SettingsandCode = () => {
  return (
    <div className="font-poppins pl-[14.4%]">
      <div className=" mt-[90px] flex flex-row ">
        <div className="w-[36px] h-[36px] bg-[#EAEAEA] rounded-full">
          <p className="mt-[6px] font-semibold text-[16px] text-black text-center justify-center ">
            5
          </p>
        </div>
        <p className="font-semibold w-[180px] h-[36px] text-[18px] leading-9 not-italic ml-[15px]">
          Settings and Code
        </p>
      </div>

      <p className=" w-[198px] h-[18px] font-semibold text-[14px] text-black mt-[30px] leading-9  ">
        Webhook to Send data
      </p>
      <p className=" w-[171px] h-[14px] font-normal text-[14px] text-black mt-[15px] leading-3   ">
        Enter youe Webhook URL
      </p>
      <p className=" w-[272px] h-[14px] font-normal text-[12px] text-black mt-[5px] leading-3   ">
        You can create a simple one with <b>make.com</b>
      </p>
      <div className="grid grid-cols-1 ">
        <input
          type="name"
          placeholder="Your Webhook URL "
          className=" w-[378px] focus:border-[#7D4AEA]  hover:border-[#7D4AEA]  h-[36px]  mt-[15px]  p-4  rounded-[8px]  border-2  border-gray  bg-[#FFFFFF] "
        />

        <div className="flex flex-row mt-[15px]">
          <input type="checkbox" className=" checked:bg-[#7D4AEA]" />
          <p className="ml-[10px] font-normal text-[14px] leanding-4 ">
            Send form submissions
          </p>
        </div>
        <div className="flex flex-row mt-[15px]">
          <input type="checkbox" className=" checked:bg-[#7D4AEA]" />
          <p className="ml-[10px] font-normal text-[14px] leanding-4 ">
            Send click data
          </p>
        </div>
      </div>

      <div className=" ">
        <button className=" w-[184px] h-[60px] bg-[#7D4AEA] rounded-[12px] text-white text-[18px] mt-[50px] ">
          Get your Code
        </button>
      </div>

      <div className="flex flex-row mt-[15px]">
        <IoIosInformationCircleOutline size={20} />
        <p className=" flex flex-row text-[12px] w-[331px] h-[32px] font-normal ml-[7px] ">
          Copy and paste the embed code above just before the closing body tag
          of your website template file.
        </p>
      </div>
    </div>
  );
};

export default SettingsandCode;
