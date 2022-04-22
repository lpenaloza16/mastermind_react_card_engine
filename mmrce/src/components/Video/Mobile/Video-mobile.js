import React from "react";
import "./Video-mobile.css";

const Vpm = () => {
  return (
    <div className="video-player-wrapper">
      <iframe
        width="313.502546"
        height="211.8694776816"
        src="https://www.youtube.com/embed/yD3GprDreQc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Vpm;
