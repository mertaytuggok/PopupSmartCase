import React from "react";
import { Capmer } from "../../Assets/Camper/Capmer";
import MainModalPng from "../../Assets/MainModalCardPng/MainModalCardPng.png";

const MainModalCard = () => {
  return (
    <div className="w-[1680px] pl-[14.4%]">
      <div className=" font-poppins w-[800px] h-[468px] bg-white mt-[90px] rounded-[40px]">
        <div className=" pt-[55px]">
          <div className="ml-[147px]">
            <Capmer />
          </div>

          <p className=" mt-[32px] ml-[67px] w-[296px] h-[54px] font-semibold text-[40px] leading-[54px] text-center ">
            Join the club
          </p>
          <p className="mt-[10px]  w-[277px]  h-[48px]  ml-[57px]  text-[18px]  text-center   font-normal  ">
            Subscribe and Get an Extra <br />
            <b className="underline">25% Off</b> on your first purchase.
          </p>
          <input
            type="mail"
            placeholder="Email address"
            className=" w-[300px]  h-[48px]  mt-[30px]  ml-[50px]  p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] "
          />
          <div>
            <button className=" w-[300px] h-[48px] mt-[15px] ml-[50px] bg-black text-white rounded-[12px] text-[16px] font-semibold text-center">
              Subscribe
            </button>
            <p className=" w-[250px] h-[36px] mt-[20px] ml-[50px] font-normal text-[12px] text-[#777777]">
              By signing up, you agree to{" "}
              <b className="underline font-normal">Privacy Policy</b> and{" "}
              <b className="underline font-normal">Terms of Use.</b>
            </p>
          </div>
        </div>
        <div className=" absolute top-[90px]  left-[690px] ">
          <img className="rounded-r-[40px]" src={MainModalPng} width={400} />
        </div>
      </div>

      <div>
        <div className="flex flex-row font-poppins sm:text-8 sm:space-x-[50px] sm:space-y-0  text-black  h-[225px] sm:h-[50px] space-y-[120px]  space-x-[200px]">
          <p className=" leading-[80px] mt-[120px]  sm:text-4xl  w-[80px] h-[80px] font-semibold text-[72px] text-[#FFFFFF] ">
            3x
          </p>
          <p className=" leading-[80px] sm:text-4xl  w-[80px] h-[80px] font-semibold text-[72px] text-[#FFFFFF]  ">
            120%
          </p>
          <p className=" leading-[80px] sm:text-4xl  w-[80px] h-[80px] font-semibold text-[72px] text-[#FFFFFF]  ">
            390%
          </p>
          <p className=" leading-[44px]  sm:text-2xl w-[344px] h-[132px] font-semibold text-[36px] text-[#FFFFFF] ">
            Popupsmart meets all your business needs.
          </p>
        </div>

        <div className="flex flex-row leading-[22px]  sm:space-x-[25px] space-x-[180px] sm:space-y-0   font-poppins  ">
          <p
            className=" flex  flex-row w-[139px] sm:text-xs h-[44px] font-medium text-[16px] text-[#FFFFFF]
        "
          >
            Increase Conversion Rate
          </p>
          <p className="flex flex-row w-[87px] sm:text-xs  h-[44px] font-medium text-[16px] text-[#FFFFFF]  mr-[200px]  ">
            Email Subscribers
          </p>
          <p className=" flex flex-row w-[155px] sm:text-xs  h-[44px] font-medium text-[16px] text-[#FFFFFF] ">
            More Customer Engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainModalCard;
