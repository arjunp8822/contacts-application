import React from "react";
import "./css/Toggle.css";

const Toggle = (props) => {
  console.log(props.mode);
  return (
    <div className="toggle-button">
      <div className={props.mode ? "toggle-ball-right" : "toggle-ball"}></div>
    </div>
  );
};

export default Toggle;
