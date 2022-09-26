import {  HeyThereModal } from "./Components/Modals/HeyThere/HeyThere";
import { CheckMail, CheckMailModal } from "./Components/Modals/CheckMail/CheckMail";
import { FileWay } from "./Components/Modals/FileWay/FileWay";
import { Hello } from "./Components/Modals/Hello/Hello";
import { LocalNow } from "./Components/Modals/LocalNow/LocalNow";
import { MailList } from "./Components/Modals/MailList/MailList";
import { Plans } from "./Components/Modals/Plans/Plans";
import { Subscribe } from "./Components/Modals/Subscribe/Subscribe";
import { Welcome } from "./Components/Modals/Welcome/Welcome";
import LandingPage from "./Screen/LandingPage/LandingPage"
import "./tailwind.css"
import { RemindersModal } from "./Components/Modals/Reminders/Reminders";
import { MissOut } from "./Components/Modals/MissOut/MissOut";

function App() {
  return (
   <LandingPage />
  // <MissOut/>
  );
}

export default App;
