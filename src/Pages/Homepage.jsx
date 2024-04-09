import React from "react";
import Home from "../Components/Home";
import VideoBox from "../Components/VideoBox";
import Units from "../Components/Units";
import Works from "../Components/Works";
import About from "../Components/About";
import Team from "../Components/Team";

const Homepage = () => {
  return (
    <>
      <Home />
      <About />
      <VideoBox />
      <Units />
      <Works />
      <Team />
    </>
  );
};

export default Homepage;
