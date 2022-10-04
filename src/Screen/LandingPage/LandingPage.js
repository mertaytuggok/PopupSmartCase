import React from "react";
import Header from "../../Components/Header/Header";
import MainModalCard from "../../Components/MainModalCard/MainModalCard";
import MainText from "../../Components/mainText/MainText";
import Appearance from "../../Components/ModalCardGenerator/Appearance";
import Content from "../../Components/ModalCardGenerator/Content";
import Footer from "../../Components/ModalCardGenerator/Footer";
import ModalCardGenerator from "../../Components/ModalCardGenerator/ModalCardGenerator";
import SettingsandCode from "../../Components/ModalCardGenerator/SettingsandCode";
import { TargetingRules } from "../../Components/ModalCardGenerator/TargetingRules";
import { Security } from "../../Components/Modals/Security/Security";
import { CheckMailModal } from "../../Components/Modals/CheckMail/CheckMail";
import { Delete } from "../../Components/Modals/Delete/Delete";
import { Feedback } from "../../Components/Modals/Feedback/Feedback";
import { FileWay } from "../../Components/Modals/FileWay/FileWay";
import { Found } from "../../Components/Modals/Found/Found";
import { HeyThereModal } from "../../Components/Modals/HeyThere/HeyThere";
import { MailList } from "../../Components/Modals/MailList/MailList";
import { MissOut } from "../../Components/Modals/MissOut/MissOut";
import { Plans } from "../../Components/Modals/Plans/Plans";
import { RemindersModal } from "../../Components/Modals/Reminders/Reminders";
import { Hello } from "../../Components/Modals/Hello/Hello";
import { useModal } from "../../Context/ModalContext/ModalContext";

const LandingPage = () => {
  const { modalName, title, size, color, position, input, button, comment } =
    useModal();

  return (
    <div className=" relative   sm:space-x-2 sm:w-[350px] lg:space-x-8 lg:w-[1000px]  mt-[23px] w-[100%] ">
      <div className="bg-gradient-to-t w-[100%] h-[910px]    from-[#E3F2F7] min-h-screenpt-[23px] sm:pl-1">
        <Header />
        <MainText />
      </div>
      <div className=" sm:w-[1150px] w-[100%] h-[66vh] pt-[23px] bg-[#666666]">
        <div className="mt-[-40vh]     rounded-[40px]   absolute">
          <MainModalCard />
        </div>
      </div>
      <div className="sm:space-y-[30px] flex  w-[100%] pt-[23px]  ">
        <ModalCardGenerator />
      </div>
      <div>
        <div className="sticky top-0 ">
          <div
            class={`absolute ${
              position === "TopLeft"
                ? "top-[64px] right-[450px]"
                : position === "Top"
                ? "top-[64px] right-[200px]"
                : position === "TopRight"
                ? "top-[64px] right-0"
                : position === "Left"
                ? "top-[128px] right-[450px]"
                : position === "Right"
                ? "top-[128px] right-0"
                : position === "BottomLeft"
                ? "top-[192px] right-[450px]"
                : position === "Bottom"
                ? "top-[192px] right-[200px]"
                : position === "BottomRight"
                ? "top-[192px] right-0"
                : "top-[128px] right-[200px] "
            } bottom-0  drop-shadow-lg rounded-md `}
          >
            {" "}
            {
              {
                SecurityModal: (
                  <Security
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
                CheckMailModal: (
                  <CheckMailModal
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
                DeleteModal: (
                  <Delete
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
                Feedback: (
                  <Feedback
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    comment={comment}
                  />
                ),
                File: (
                  <FileWay
                    size={size}
                    color={color}
                    title={title}
                    button={button}
                    comment={comment}
                  />
                ),
                Found: (
                  <Found
                    size={size}
                    color={color}
                    title={title}
                    button={button}
                    comment={comment}
                  />
                ),
                HeyThere: (
                  <HeyThereModal
                    size={size}
                    color={color}
                    title={title}
                    button={button}
                    comment={comment}
                  />
                ),
                MailList: (
                  <MailList
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
                MissOut: (
                  <MissOut
                    size={size}
                    title={title}
                    comment={comment}
                  />
                ),
                Plans: (
                  <Plans
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
                Reminders: (
                  <RemindersModal
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
                Stranger: (
                  <Hello
                    size={size}
                    color={color}
                    title={title}
                    input={input}
                    button={button}
                    comment={comment}
                  />
                ),
              }[modalName]
            }
          </div>
        </div>
        <div className="w-[100%] pt-[23px]  ">
          <Appearance />
        </div>
        <div className="w-[100%] pt-[23px]  ">
          <Content />
        </div>
        <div className="w-[100%] pt-[23px]  ">
          <TargetingRules />
        </div>
      </div>
      <div className="w-[100%] pt-[23px]  ">
        <SettingsandCode />
      </div>

      <div className="w-[100%] pt-[23px]  ">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
