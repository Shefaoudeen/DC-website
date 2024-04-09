import React from "react";
import { Link } from "react-router-dom";
import { HomeImage, DownArrow } from "../assets/index";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full min-h-[80vh]">
      <div className="flex flex-col justify-center w-[100%] max-sm:w-[90%] home-custom-1">
        <div
          className="w-full h-full flex justify-start overflow-x-clip items-start max-sm:text-6xl"
          style={{ userSelect: "none" }}
        >
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
            <div className="absolute left-6 mt-10 ml-2 mb-2">
              <Link to="" className="">
                <img
                  src={DownArrow}
                  alt=""
                  className="w-10 transition-transform hover:translate-y-5"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
