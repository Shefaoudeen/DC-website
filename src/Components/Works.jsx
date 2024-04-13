import React, { useState } from "react";
import "./styles.css";
import { works } from "../Data/works";
import "./work.css";
import Arrow from "./Arrow";
import { data } from "autoprefixer";

const Works = () => {
  const [slide, setSlide] = useState(false);
  const [id, setid] = useState(0);
  const [slidepos, setSlidepos] = useState(100);

  function funcCall(num) {
    setSlide(!slide);
    console.log(num);
    setid(num);
    console.log(slide);
  }

  return (
    <div
      className="bg-[#005cef] w-full flex justify-center items-start min-h-[100vh] mt-20"
      style={{ userSelect: "none" }}
    >
      <div className="h-[100%] flex flex-col justify-start pt-20 w-[80%] max-sm:w-[90%]">
        <h1 className="text-start text-8xl font-bold text-[white] max-md:text-6xl h-[20%]">
          Our Works.
        </h1>

        <div className="min-h-[70%] font-bold  pt-10 text-[#7599d3] max-md:text-2xl relative mt-10">
          <p className="text-justify leading-[60px]">
            {works.map((activity, id) => {
              return (
                <span
                  className="text-6xl hover:text-white transition-all delay-50 ease-linear cursor-pointer"
                  onClick={() => funcCall(id)}
                >
                  {" "}
                  {activity.title}{" "}
                </span>
              );
            })}
          </p>
          <div
            id="slide"
            className={`w-[100%] min-h-full ${
              slide ? "bg-[#4d89e9]" : "bg-[#005cef]"
            } absolute top-0 ease-linear 
            right-[${slide ? `0%` : `100%`}] 
            transition-all delay-100 z-10 ${
              slide ? "text-[white]" : "text-[#005cef]"
            } p-10 text-3xl text-justify`}
          >
            <div
              className={`absolute right-10 top-5 rotate-90 ${
                slide == false ? `invisible` : `visible`
              } delay-200`}
              onClick={() => funcCall(id)}
            >
              <Arrow className="bg-[#ffff00]" color="bg-[#ffff00]" />
            </div>
            <h1 className="pt-20 px-10">{works[id].description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
