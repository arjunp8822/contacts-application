import React from "react";
import "./css/Toggle.css";

const Toggle = (props) => {
  return (
    <div className="toggle-button">
      <div className={props.mode ? "toggle-ball" : "toggle-ball-right"}></div>
    </div>
  );
};

export default Toggle;
