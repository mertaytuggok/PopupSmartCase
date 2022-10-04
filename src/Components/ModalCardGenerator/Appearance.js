import React from "react";
import Uploadsvg from "../../Assets/UploadSvg/Uploadsvg";
import { BiCloudUpload } from "react-icons/bi";
import { useModal } from "../../Context/ModalContext/ModalContext";

const Appearance = () => {
  const { setSize, setColor, setPosition } = useModal();

  return (
    <div className="relative pl-[14.4%] pr-[14.4%] ">
      <div>
        <div className=" mt-[90px] flex flex-row ">
          <div className="w-[36px] h-[36px] bg-[#EAEAEA] rounded-full">
            <p className="mt-[6px] font-semibold text-[16px] text-black text-center justify-center ">
              2
            </p>
          </div>
          <p className="font-normal  font-poppins   w-[284px] h-[36px] text-[18px] leading-9 not-italic ml-[15px]">
            <b>Appearance</b> (Size, colors, logo)
          </p>
        </div>

        <p className=" w-[28px] font-inter h-[18px] font-normal text-[14px] text-black mt-[30px]  ">
          Size
        </p>
        <div className=" font-inter mt-[15px]  flex flex-row  w-[240px]  bg-[#F5F5F5] rounded-xl  text-center ">
          {["Small", "Medium", "Large"].map((item) => (
            <button
              onClick={() => setSize(item)}
              className=" w-[80px] h-[40px] rounded-xl  bg-[#F5F5F5] focus:bg-white   hover:bg-white "
            >
              {item}
            </button>
          ))}
        </div>

        <p className=" font-inter w-[28px] h-[18px] font-normal text-[14px] text-black mt-[30px]  ">
          Position
        </p>

        <div className=" h-[55px]  w-[82px] mt-[15px] ">
          <button
            onClick={() => setPosition("TopLeft")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] rounded-tl-md "
          ></button>
          <button
            onClick={() => setPosition("Top")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] "
          ></button>
          <button
            onClick={() => setPosition("TopRight")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px]  bg-[#DDDDDD] rounded-tr-md"
          ></button>
          <button
            onClick={() => setPosition("Left")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] "
          ></button>
          <button
            onClick={() => setPosition("Default")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] "
          ></button>
          <button
            onClick={() => setPosition("Right")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px]  bg-[#DDDDDD]  "
          ></button>
          <button
            onClick={() => setPosition("BottomLeft")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] rounded-bl-md "
          ></button>
          <button
            onClick={() => setPosition("Bottom")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] "
          ></button>
          <button
            onClick={() => setPosition("BottomRight")}
            className="  hover:bg-[#7D4AEA] w-[24px] h-[15px]  bg-[#DDDDDD] rounded-br-md "
          ></button>
        </div>

        <p className=" font-inter w-[28px] h-[18px] font-normal text-[14px] text-black mt-[30px]  ">
          Colors
        </p>

        <div className=" mt-[15px]   flex flex-row  ">
          <button
            onClick={() => setColor("Black")}
            className="  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-4 bg-black focus:border-slate-400  hover:border-slate-4 00 "
          />
          <button
            onClick={() => setColor("Orange")}
            className="  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-4 bg-[#F37C34]  focus:border-slate-400    hover:border-slate-400  "
          />
          <button
            onClick={() => setColor("Gray")}
            className="  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-4 bg-[#777777]  focus:border-slate-400    hover:border-slate-400 "
          />
          <button
            onClick={() => setColor("White")}
            className="  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-4 bg-[#DDDDDD]  focus:border-slate-400    hover:border-slate-400 "
          />
          <button
            onClick={() => setColor("Default")}
            className="  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-4 bg-white  focus:border-slate-400    hover:border-slate-400 "
          />
        </div>

        <p className=" font-inter w-[85px] h-[18px] font-normal text-[14px] text-black mt-[30px]  ">
          Upload Logo
        </p>

        <div className=" mt-[15px] w-[378px] h-[178px] border-dashed border-2 rounded-lg border-[#DDDDDD] ">
          <div className=" ml-[149px] mr-[149px] mt-[30px] w-[80px] h-[80px] bg-[#7D4AEA] opacity-10 " />
          <button className=" relative   left-[175.5px] bottom-[54.5px]  ">
            <Uploadsvg />
          </button>

          <p className=" font-inter relative left-[60px] bottom-[20px] font-normal flex flex-row font-normal text-[14px] text-black  w-[250px] h-[18px] ">
            <BiCloudUpload size={25} />
            Drop your image here or
            <button className="ml-[2px] flex flex-row text-[#7D4AEA] font-semibold underline decoration-[#7D4AEA]">
              upload
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Appearance;
