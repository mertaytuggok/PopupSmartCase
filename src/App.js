import "./tailwind.css";
import LandingPage from "./Screen/LandingPage/LandingPage";
import ModalProvider from "./Context/ModalContext/ModalContext";

function App() {
  return (
    <ModalProvider>
      <LandingPage />
    </ModalProvider>
  );
}

export default App;
