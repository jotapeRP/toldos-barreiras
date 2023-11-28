import { useState } from "react";

//components
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Local from "./components/Local";
import SendForm from "./components/SendForm";
import Servico from "./components/Servico";

function App() {
  const [isActive, setIsActive] = useState(true);

  const handleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <SendForm handleClass={handleClass} isActive={isActive} />
      <Home handleClass={handleClass} />
      <AboutUs />
      <Servico />
      <Local handleClass={handleClass} />
    </>
  );
}

export default App;
