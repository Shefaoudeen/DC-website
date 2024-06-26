import React from "react";
import { VideoForBox } from "../assets/index";
import Social from "./Social";

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
      <Social />
    </div>
  );
};

export default VideoBox;
