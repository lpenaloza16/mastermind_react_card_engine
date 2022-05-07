import React from "react";
import "./MobButton.css";
const MobButton = (props) => {
  return (
    <div className="mob-button-container">
      <button className="mob-button">{props.value}</button>
    </div>
  );
};

export default MobButton;
