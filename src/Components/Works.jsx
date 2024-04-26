import React, { useState } from "react";
import "./styles.css";
import { works } from "../Data/works";
import "./work.css";
import "../fonts.css";
import Arrow from "./Arrow";
import { data } from "autoprefixer";
import Social from "./Social";

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
      className="bg-[#005cef] max-md:min-h-[130vh] w-full flex justify-center items-start h-[120vh] mt-20 max-w-screen"
      id="works"
      style={{ userSelect: "none" }}
    >
      <Social />
      <div className="h-[100%] flex flex-col justify-start pt-20 w-[80%] max-sm:w-[90%]">
        <h1 className="text-start text-8xl poppins-semibold text-[white] max-md:text-6xl ">
          Our Works.
        </h1>

        <div className=" poppins-regular py-5 text-[#0b46a3] text-opacity-80 max-md:text-2xl relative mt-10 max-md:px-5">
          <p className="text-justify md:leading-[80px] max-md:text-center pb-10">
            {works.map((activity, id) => {
              return (
                <span
                  className="text-5xl hover:text-white max-md:flex max-md:justify-center max-md:py-2.5  transition-all delay-50 ease-linear cursor-pointer max-md:text-xl max-md:text-white max-md:px-10 md:border-l-none md:border-r-none border-[#7599d3]"
                  onClick={() => funcCall(id)}
                >
                  {activity.title}
                </span>
              );
            })}
          </p>
          <div
            id="slide"
            className={`w-[100%] h-min ${
              slide ? "bg-[#0b46a3]" : "bg-[#005cef]"
            } absolute top-0 ease-linear 
            ${slide ? `right-[0%]` : `right-[100%]`} 
            transition-all delay-100 z-10 ${
              slide ? "text-[white]" : "text-[#005cef]"
            } p-10 text-2xl text-justify`}
          >
            <div
              className={`absolute right-10 top-5 rotate-90 ${
                slide == false ? `invisible` : `visible`
              } delay-200 group cursor-pointer`}
              onClick={() => funcCall(id)}
            >
              <Arrow
                className="bg-[#ffdd18]"
                color="bg-[#ffdd18] group-hover:translate-y-10 duration-100 ease-linear"
              />
            </div>
            <h1 className="pt-20 md:px-10 max-md:text-lg">
              {works[id].description}
            </h1>
            <div className="flex cursor-pointer ml-10 justify-start w-[80%] relative mt-10">
              <div className="bg-[#ffdd18] text-[#005cef] w-[190px] justify-center z-10 px-6 py-4 poppins-semibold text-xl hover:translate-x-3 hover:-translate-y-3 transition-all delay-100 ease-linear">
                <a href={works[id].link} target="_blank">
                  Open Sesame
                </a>
              </div>

              <div className="bg-[#c5a604] h-full w-[175px] absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
