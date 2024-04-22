import React from "react";
import Home from "../Components/Home";
import VideoBox from "../Components/VideoBox";
import Units from "../Components/Units";
import Works from "../Components/Works";
import Team from "../Components/Team";

const Homepage = () => {
  return (
    <>
      <Home />
      <VideoBox />
      <Units id="units" />
      <Works />
      <Team />
    </>
  );
};

export default Homepage;
