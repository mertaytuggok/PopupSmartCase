import React from "react";
import { ExpandIcon } from "../../Assets/ExpandIcon/ExpandIcon";
import Logo from "../../Assets/LogoSvg/Logo";

const Header = () => {
  return (
    <div className=" flex  flex-row pl-[14.4%]  ">
      <div className="flex flex-row ">
        <div>
          <Logo />
        </div>
        <div className=" decoration-black  not-italic  text-[16px]  font-extrabold  leading-[18px] ml-[10px] mt-[9px] tracking-tighter">
          modal.cards
        </div>
      </div>
      <div className=" flex  flex-row sm:space-x-[150px] space-x-[371px] ">
        <div className="flex flex-row decoration-black not-italic text-[16px] leading-[18px] ml-[82px] items-center font-medium">
          <button className="flex flex-row">
            Solution
            <ExpandIcon />
          </button>
          <button className="ml-[53px]">Product Tour</button>
          <button className="ml-[30px]">Showcase</button>
          <button className="ml-[30px]">Pricing</button>
        </div>

        <div className="flex flex-row items-center space-x-2 sm:space-1 decoration-black not-italic text-[16px] leading-[18px] font-medium">
          <button className="flex sm:w-[48px] ">Sign in</button>
          <button className=" text-white bg-[#7D4AEA] w-[121px] h-[36px]  justify-center rounded-xl shadow-[0_3px_7px_11px_rgba(124, 74, 234, 0.2)]">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
