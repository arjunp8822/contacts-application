import React, { useState } from "react";
import "./css/Navbar.css";
import Toggle from "./Toggle";

const Navbar = () => {
  const [modeLight, setModeLight] = useState(true);

  const toggleMode = () => {
    setModeLight(!modeLight);
    if (modeLight === true) {
      // document.documentElement.style.setProperty("--primary", "red");
      document.documentElement.style.setProperty(
        "--light-secondary",
        "rgb(34, 87, 73)"
      );
      document.documentElement.style.setProperty("--body-bg", "#121212");
      document.documentElement.style.setProperty("--font-main", "#fff");
      document.documentElement.style.setProperty(
        "--secondary",
        "rgb(189, 189, 189)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary",
        "rgb(34, 87, 73)"
      );
      document.documentElement.style.setProperty(
        "--light-secondary",
        "rgb(225, 225, 225)"
      );
      document.documentElement.style.setProperty("--body-bg", "#fff");
      document.documentElement.style.setProperty("--font-main", "#000");
      document.documentElement.style.setProperty(
        "--secondary",
        "rgb(93, 93, 93)"
      );
    }
  };

  return (
    <nav>
      <h1>Contact Application</h1>
      <div onClick={toggleMode}>
        <Toggle mode={modeLight} />
      </div>
    </nav>
  );
};

export default Navbar;
