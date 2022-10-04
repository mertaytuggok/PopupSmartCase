import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import AppearancaPng from "../../Assets/AppearancePng/Png.png";

const Content = () => {
  return (
    <div className="pl-[14.4%] font-inter">
      <div className=" mt-[90px] flex flex-row ">
        <div className="w-[36px] h-[36px] bg-[#EAEAEA] rounded-full">
          <p className="mt-[6px] font-semibold text-[16px] text-black text-center justify-center ">
            3
          </p>
        </div>
        <p className="font-semibold font-poppins w-[71px] h-[36px] text-[18px] leading-9 not-italic ml-[15px]">
          Content
        </p>
      </div>

      <p className=" w-[154px] h-[18px] font-normal text-[14px] text-black mt-[30px]  ">
        Edit your content
      </p>
      <div className="grid grid-cols-1 ">
        <input
          type="name"
          placeholder="Sign Up "
          className=" w-[378px] focus:border-[#7D4AEA]  hover:border-[#7D4AEA]  h-[36px]  mt-[15px]  p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] "
        />
        <input
          type="mail"
          placeholder="Enter your email "
          className=" w-[378px]  h-[36px]  mt-[15px] hover:border-[#7D4AEA]   p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] "
        />
        <input
          type="name"
          placeholder="Sign Up "
          className=" w-[378px]  h-[36px]  mt-[15px] hover:border-[#7D4AEA] p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] "
        />
        <input
          type="mail"
          placeholder="By singning up, you agree to Privacy Policy "
          className=" w-[378px]  h-[36px]  mt-[15px] hover:border-[#7D4AEA]   p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] "
        />
      </div>

      <p className=" w-[92px] h-[18px] font-normal text-[14px] text-black mt-[30px]  ">
        Upload image
      </p>

      <div className=" mt-[15px] w-[378px] h-[178px] border-dashed border-2 rounded-lg border-[#DDDDDD] ">
        <div className=" ml-[149px] mr-[149px] mt-[30px] w-[80px] h-[80px] bg-[#7D4AEA] opacity-10 " />
        <button className=" relative  left-[150px] bottom-[80px]  ">
          <img src={AppearancaPng} width={80} />
        </button>

        <p className=" relative left-[65px] font-inter bottom-[80px] flex flex-row text-[14px] text-black  w-[250px] h-[18px] font-normal  ">
          <BiCloudUpload size={25} />
          Drop your image here or
          <button className="ml-[2px] flex flex-row text-[#7D4AEA] font-semibold underline decoration-[#7D4AEA]">
            upload
          </button>
        </p>
      </div>
    </div>
  );
};

export default Content;
