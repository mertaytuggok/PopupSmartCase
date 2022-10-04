import React from "react";
import { BsLaptop } from "react-icons/bs";
import { MdSmartphone } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

export const TargetingRules = () => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#7D4AEA",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  return (
    <div className="font-poppins  pl-[14.4%]">
      <div className=" mt-[90px] flex flex-row ">
        <div className="w-[36px] h-[36px] bg-[#EAEAEA] rounded-full">
          <p className="mt-[6px] font-semibold text-[16px] text-black text-center justify-center ">
            4
          </p>
        </div>
        <p className=" w-[156px] h-[36px] font-semibold text-[18px] leading-9 not-italic ml-[15px]">
          Targeting Rules
        </p>
      </div>

      <div className=" flex flex-row mt-[30px]">
        <p className=" w-[112px] h-[18px] font-semibold text-[14px] text-black  leading-4  ">
          Visitor Device
        </p>
        <div className=" ml-[240px]">
          <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
          </Stack>
        </div>
      </div>

      <div className=" flex flex-row mt-[20px] ">
        <button className=" w-[179px] h-[48px] rounded-[12px] bg-[#F5F5F5] text-center justify-items-center ">
          <div className="flex flex-row text-center justify-items-center p-1">
            {" "}
            <input
              type="checkbox"
              className=" w-[18px] h-[18px] mr-[10px] ml-[15px] accent-[#7D4AEA] "
            />
            <BsLaptop size={18} color="#7D4AEA" />
            <p className=" ml-1 w-[57px] h-[18px] text-[18px] leading-4">
              Desktop
            </p>
          </div>
        </button>
        <button className=" w-[179px] h-[48px] rounded-[12px] bg-[#F5F5F5] text-center justify-items-center ml-5 ">
          <div className="flex flex-row text-center justify-items-center p-1">
            {" "}
            <input
              type="checkbox"
              className=" w-[18px] h-[18px] mr-[10px] ml-[15px] accent-[#7D4AEA] "
            />
            <MdSmartphone size={18} color="#7D4AEA" />
            <p className=" ml-1 w-[57px] h-[18px] text-[18px] leading-4">
              Mobile
            </p>
          </div>
        </button>
      </div>

      <div className=" flex flex-row mt-[30px]">
        <p className=" w-[125px] h-[18px] font-semibold text-[14px] text-black  leading-4  ">
          After X seconds
        </p>
        <div className=" ml-[235px]">
          <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
          </Stack>
        </div>
      </div>
      <input
        type="name"
        className=" w-[378px] h-[36px] border-[#DDDDDD] border-2 rounded-md p-2 mt-[15px] "
      />

      <div className=" flex flex-row mt-[30px]">
        <p className=" w-[107px] h-[18px] font-semibold text-[14px] text-black  leading-4  ">
          After % Scroll
        </p>
        <div className=" ml-[250px]">
          <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
          </Stack>
        </div>
      </div>
      <input
        type="name"
        className=" w-[378px] h-[36px] border-[#DDDDDD] border-2 rounded-md p-2 mt-[15px] "
      />

      <div className=" flex flex-row mt-[30px]">
        <p className=" w-[107px] h-[18px] font-semibold text-[14px] text-black  leading-4  ">
          Traffic Source
        </p>
        <div className=" ml-[250px]">
          <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
          </Stack>
        </div>
      </div>
      <input
        type="name"
        className=" w-[378px] h-[36px] border-[#DDDDDD] border-2 rounded-md p-2 mt-[15px] "
        placeholder="Enter your traffic source domain"
      />

      <div className=" flex flex-row mt-[30px]">
        <p className=" w-[146px] h-[18px] font-semibold text-[14px] text-black  leading-4  ">
          Browser Language
        </p>
      </div>
      <select className=" w-[378px] h-[36px]  border-[#DDDDDD] border-2 rounded-md pl-2 mt-[15px] ">
        <option>Engilish</option>
        <option>French</option>
        <option>German</option>
        <option>Türkçe</option>
      </select>

      <div className=" flex flex-row mt-[30px]">
        <p className=" w-[154px] h-[18px] font-semibold text-[14px] text-black  leading-4  ">
          Exit Intent Targeting
        </p>

        <div className=" ml-[200px]">
          <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};
