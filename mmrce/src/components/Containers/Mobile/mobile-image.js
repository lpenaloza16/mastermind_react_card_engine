import React from "react";
let MobImage = (props) => {
  return (
    <div className="mob-img-container">
      <img src={props.source} />
    </div>
  );
};

export default MobImage;
