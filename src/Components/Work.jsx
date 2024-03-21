import React, { useState } from "react";
import Arrow from "./Arrow";
import { work } from "../Data/work";
import { luffy } from "../assets";

const Work = () => {
  const [toggle, setToggle] = useState(null);

  const handleClick = (getId) => {
    setToggle(toggle === null ? getId : null);
  };

  let blue = "#005cef";
  let red = "#f43f5e";

  return (
    <div className="flex justify-center items-center w-screen ">
      <div className="flex flex-col justify-center items-center w-[100%]">
        <div className="flex flex-col justify-center w-[80%] h-[150px] border-b-[10px] border-[#005cef]">
          <h1 className="text-start text-[#005cef] text-8xl font-bold max-sm:text-7xl">
            Our Work.
          </h1>
        </div>
        {work.map((dataItems) => {
          return (
            <div className="w-[100%] flex flex-col items-center">
              <div
                onClick={() => handleClick(dataItems.id)}
                className={`flex flex-col justify-center w-[80%] border-b-[${
                  toggle == dataItems.id ? 0 : 10
                }px] border-[#005cef] cursor-pointer`}
              >
                <div className="flex flex-col justify-center relative h-[200px]">
                  <div className="text-[#f43f5e]">
                    <h1
                      className={`text-[${
                        toggle == dataItems.id ? red : blue
                      }] text-2xl font-semibold transition-colors delay-5 ease-linear`}
                    >
                      {dataItems.motto}
                    </h1>
                    <h1
                      className={`text-[${
                        toggle == dataItems.id ? blue : red
                      }] text-7xl font-bold transition-colors delay-5 ease-linear max-sm:text-5xl`}
                    >
                      {dataItems.division}
                    </h1>
                  </div>
                  <div
                    className={`absoulte w-[50px] h-[100px] absolute max-sm:right-0 flex justify-center items-center  right-2 rotate-['${
                      toggle === dataItems.id ? 180 : null
                    }']`}
                  >
                    <Arrow
                      className={`animate-${toggle === true ? "spin" : null}`}
                    />
                  </div>
                </div>
                <div className="transition-trasform delay-500 ease-linear">
                  {toggle === dataItems.id ? (
                    <div className="h-[600px] max-lg:h-[900px] flex max-lg:flex-col bg-[#ff1f25] transition-all delay-300 ease-linear">
                      <div className="w-1/2 max-lg:w-full max-lg:h-[40%] h-full bg-[#005cef]">
                        <img
                          src={luffy}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex  gap-10 justify-center flex-col items-center w-1/2 h-full max-lg:w-full bg-rose-600">
                        <div className="flex  gap-10 justify-center flex-col items-center w-full h-full bg-rose-600">
                          <div className="text-white text-5xl font-bold font-sans w-[80%]">
                            <h1>DC {dataItems.division}</h1>
                          </div>
                          <div className="w-[78%] text-xl text-white block">
                            <span>{dataItems.description1}</span>
                            <span className="font-bold">{dataItems.works}</span>
                            <span>{dataItems.description2}</span>
                          </div>
                          <div className="flex justify-start w-[80%] relative">
                            <div className="bg-yellow-400 w-[175px] justify-start z-10 px-6 py-4 font-bold text-xl hover:translate-x-3 hover:-translate-y-3 transition-all delay-100 ease-linear">
                              View Project
                            </div>
                            <div className="bg-yellow-600 h-full w-[175px] absolute"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
