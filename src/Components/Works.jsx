import React from "react";
import "./styles.css";
import { works } from "../Data/works";

const Works = () => {
  return (
    <div
      className="bg-[#005cef] w-full flex justify-center items-start min-h-[100vh] mt-20"
      style={{ userSelect: "none" }}
    >
      <div className="h-[100%] flex flex-col justify-start pt-20 w-[80%] max-sm:w-[90%]">
        <h1 className="text-start text-8xl font-bold text-[white] max-md:text-6xl">
          Our Works.
        </h1>

        <div className="h-[60%] font-bold  pt-10 text-[#7599d3] max-md:text-2xl">
          <p className="text-justify leading-[60px]">
            {works.map((activity) => {
              return (
                <span className="text-6xl hover:text-white transition-all delay-50 ease-linear">
                  {" "}
                  {activity.title}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
