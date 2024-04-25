import React from "react";
import { VideoForBox } from "../assets/index";

const VideoBox = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center max-md:h-min max-w-screen">
      <video
        className="w-full h-full object-cover z-30"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={VideoForBox} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBox;
