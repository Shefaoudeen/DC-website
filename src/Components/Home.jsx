import React from "react";
import { HomeImage } from "../assets/index";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center overflow-x-clip items-start border-2 border-black max-sm:text-6xl">
      <section className="hero ">
        <div id="anim-mask" className="">
          <img
            src={HomeImage}
            alt=""
            className="square max-md:scale-75 max-md:-translate-x-[300px] max-md:-translate-y-[100px]"
          />
        </div>
        <div className="wrapper">
          <h1 className="hero-title">
            Hey,&nbsp;
            <br />
            We’re DC!
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
