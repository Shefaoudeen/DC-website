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
      className="bg-[#005cef] w-full flex justify-center items-start min-h-[100vh] max-md:min-h-[110vh] mt-20"
      id="works"
      style={{ userSelect: "none" }}
    >
      <div className="h-[100%] flex flex-col justify-start pt-20 w-[80%] max-sm:w-[90%]">
        <h1 className="text-start text-8xl font-bold text-[white] max-md:text-6xl h-[20%]">
          Our Works.
        </h1>

        <div className="min-h-[70%] font-bold  pt-10 text-[#7599d3] max-md:text-2xl relative mt-10 max-md:px-5">
          <p className="text-justify md:leading-[80px] max-md:text-center">
            {works.map((activity, id) => {
              return (
                <span
                  className="text-6xl hover:text-white max-md:flex max-md:justify-center max-md:py-2.5  transition-all delay-50 ease-linear cursor-pointer max-md:text-xl max-md:text-white px-5 max-md:px-10 md:border-l-none md:border-r-none border-[#7599d3]"
                  onClick={() => funcCall(id)}
                >
                  {activity.title}
                </span>
              );
            })}
          </p>
          <div
            id="slide"
            className={`w-[100%] min-h-full ${
              slide ? "bg-[#4d89e9]" : "bg-[#005cef]"
            } absolute top-0 ease-linear 
            ${slide ? `right-[0%]` : `right-[100%]`} 
            transition-all delay-100 z-10 ${
              slide ? "text-[white]" : "text-[#005cef]"
            } p-10 text-3xl text-justify`}
          >
            <div
              className={`absolute right-10 top-5 rotate-90 ${
                slide == false ? `invisible` : `visible`
              } delay-200 group cursor-pointer`}
              onClick={() => funcCall(id)}
            >
              <Arrow
                className="bg-[#ffff00]"
                color="bg-[#ffff00] group-hover:translate-y-10 duration-100 ease-linear"
              />
            </div>
            <h1 className="pt-20 md:px-10 max-md:text-lg">
              {works[id].description}
            </h1>
            <div className="flex cursor-pointer ml-10 justify-start w-[80%] relative mt-10">
              <div className="bg-yellow-400 w-[175px] justify-start z-10 px-6 py-4 font-bold text-xl hover:translate-x-3 hover:-translate-y-3 transition-all delay-100 ease-linear">
                View Project
              </div>

              <div className="bg-yellow-600 h-full w-[175px] absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
