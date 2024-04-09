import React from "react";
import { Link } from "react-router-dom";
import { HomeImage, DownArrow } from "../assets/index";
import "./Home.css";
import About from "./About";
import Arrow from "./Arrow";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full min-h-[80vh] select-none">
      <div className="min-h-screen w-[100%]">
        <div className="flex flex-col justify-center w-[100%] max-sm:w-[90%] home-custom-1">
          <div className="w-full h-full flex justify-start overflow-x-clip items-start max-sm:text-6xl">
            <section className="hero relative">
              <div id="anim-mask" className="ease-in-out">
                <img
                  src={HomeImage}
                  alt=""
                  className="square z-10 max-md:scale-75 max-md:-translate-x-[300px] max-md:-translate-y-[100px]"
                />
              </div>
              <div className="wrapper z-50">
                <h1 className="hero-title">
                  Design&nbsp;
                  <br />
                  Club.
                </h1>
              </div>
              <div className="absolute left-6 mt-10 ml-2 mb-2 hover:translate-y-5 delay-200 transition-all ease-linear">
                <a href="#about">
                  <Arrow />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div id="about">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
