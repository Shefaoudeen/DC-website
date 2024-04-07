import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-start border-2 border-black max-sm:text-6xl">
      <section className="hero">
        <div id="anim-mask" className="">
          <img
            src="src\assets\home_square_pole.svg"
            alt=""
            className="square"
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
