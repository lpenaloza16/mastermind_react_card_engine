import React from "react";
import "./mobile-image.css";
let MobImage = (props) => {
  return (
    <div className="mob-img-container">
      <img alt="notebook" className="mob-img-source" src={props.source} />
    </div>
  );
};

export default MobImage;
