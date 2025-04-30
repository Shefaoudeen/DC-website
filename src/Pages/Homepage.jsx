import React from "react";
import Home from "../Components/Home";
import VideoBox from "../Components/VideoBox";
import Units from "../Components/Units";
import Works from "../Components/Works";
import Team from "../Components/Team";
import Footer from "./Footer";
import ExCrew from "../Components/ExCrew";

const Homepage = () => {
  return (
    <>
      <Home />
      <VideoBox />
      <Units />
      <Works />
      <Team />
      <ExCrew />
      <Footer />
    </>
  );
};

export default Homepage;
