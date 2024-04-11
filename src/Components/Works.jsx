import React from "react";
import "./styles.css";

const Works = () => {
  return (
    <div
      className="bg-[#005cef] w-full flex justify-center items-start h-screen mt-20"
      style={{ userSelect: "none" }}
    >
      <div className="flex flex-col justify-start pt-20 w-[80%] max-sm:w-[90%]">
        <h1 className="text-start text-8xl font-bold text-[white] max-md:text-6xl">
          Our Works.
        </h1>

        <div className="text-[#0148b9] text-4xl font-bold text-justify pt-10 text-[gray] max-md:text-2xl">
          <a className="works-hover">PTU Calendar </a>
          <a className="works-hover">Reflections Magazine Edition-1 </a>
          <a className="works-hover">Adobe Photoshop Workshop </a>
          <a className="works-hover">Fine Arts Club Magazine </a>
          <a className="works-hover">Neura'2023 </a>
          <a className="works-hover">Rejouir-Pecofes </a>
          <a className="works-hover">PTU Intro </a>
          <a className="works-hover">DC Intro </a>
          <a className="works-hover">DC Club Pamphlet </a>
          <a className="works-hover">Rejouir-Pecofes </a>
          <a className="works-hover">Neura'2023 </a>
          <a className="works-hover">Rejouir-Pecofes </a>
          <a className="works-hover">DC Club Pamphlet </a>
          <a className="works-hover">Neura'2023 </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
