import { Link } from "react-router-dom";

import React, { useState } from "react";
import Arrow from "./Arrow";
import { units } from "../Data/units";
import Social from "./Social";

const Units = () => {
  const [toggle, setToggle] = useState(null);
  const [enableMultiSelection, setEnableMulitSelection] = useState(true);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (getId) => {
    if (getId == toggle) {
      setToggle(null);
    } else {
      setToggle(toggle !== null ? getId : getId);
    }
  };

  const handleMultipleSelection = (getId) => {
    let cpyMultiple = [...multiple];
    const findIndexofCurrent = cpyMultiple.indexOf(getId);
    if (findIndexofCurrent === -1) cpyMultiple.push(getId);
    else cpyMultiple.splice(findIndexofCurrent, 1);
    setMultiple(cpyMultiple);
  };

  let blue = "#005cef";
  let red = "#f43f5e";
  let size1 = "500px";
  let size2 = "0px";

  const checkborder = (getId) => {
    let cpyMultiple = [...multiple];
    const findIndexofCurrent = cpyMultiple.indexOf(getId);
    if (toggle == getId) return 0;
    else return 10;
  };

  const checkColor1 = (getId) => {
    if (toggle === getId) return red;
    else return blue;
  };

  const checkColor2 = (getId) => {
    if (toggle === getId) return blue;
    else return red;
  };

  return (
    <div
      className="flex justify-center items-center w-full min-h-screen max-w-screen"
      style={{ userSelect: "none" }}
      id="units"
    >
      <Social />
      <div className="flex flex-col justify-center items-center w-[100%]">
        <div className="flex flex-col justify-center w-[80%] h-[150px] border-b-[10px] border-[#005cef] max-sm:w-[90%]">
          <h1 className="text-start text-[#005cef] text-8xl poppins-semibold max-sm:text-7xl">
            Our Units.
          </h1>
        </div>
        {/* For Desktop */}
        <div className="w-full max-md:hidden">
          {units.map((dataItems) => {
            return (
              <div className="w-[100%] flex flex-col items-center">
                <div
                  onClick={() => handleClick(dataItems.id)}
                  className={`flex flex-col justify-center w-[80%] max-sm:w-[90%] border-b-[${checkborder(
                    dataItems.id
                  )}px] border-[#005cef] cursor-pointer`}
                >
                  <div className="flex flex-col justify-center relative h-[200px]">
                    <div className="text-[#f43f5e]">
                      <h1
                        className={`text-[${checkColor1(
                          dataItems.id
                        )}] text-2xl font-semibold transition-colors delay-5 ease-linear`}
                      >
                        {dataItems.motto}
                      </h1>
                      <h1
                        className={`text-[${checkColor2(
                          dataItems.id
                        )}] text-7xl font-bold transition-colors delay-5 ease-linear max-sm:text-4xl`}
                      >
                        {dataItems.division}
                      </h1>
                    </div>
                    <div
                      className={`absoulte ${
                        toggle !== dataItems.id ? "rotate-0" : "rotate-180"
                      } w-[50px] h-[100px] absolute transition-all duration-[250ms] ease-in max-sm:right-0 flex justify-center items-center  right-2 max-sm:scale-[80%]`}
                    >
                      <Arrow color="bg-[#005cef]" />
                    </div>
                  </div>
                  <div
                    className={`${
                      toggle === dataItems.id ? `h-[500px]` : `h-[00px]`
                    }  transition-all duration-[400ms] ease-linear overflow-y-clip relative z-${
                      dataItems.index
                    }`}
                  >
                    <div
                      className={`h-[500px] duration-500 max-lg:h-[700px] flex max-lg:flex-col bg-[#ff1f25] transition-all delay-300 ease-linear`}
                    >
                      <div className="w-1/2 max-lg:w-full max-lg:h-[40%] h-full bg-[#005cef]">
                        <img
                          src={dataItems.video}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex  gap-10 justify-center flex-col items-center w-1/2 h-full max-lg:w-full bg-rose-600">
                        <div className="flex  gap-10 justify-center flex-col items-center w-full h-full bg-rose-600">
                          <div className="text-white text-5xl font-bold font-sans w-[80%] max-sm:text-4xl">
                            <h1>DC {dataItems.division}</h1>
                          </div>
                          <div className="w-[78%] text-xl text-white block max-sm:text-lg">
                            <span>{dataItems.description1}</span>
                            <span className="font-bold">{dataItems.works}</span>
                            <span>{dataItems.description2}</span>
                          </div>
                          <div className="flex justify-start w-[80%] relative">
                            <Link to={dataItems.link} className="z-10">
                              <div className="bg-yellow-400 w-[175px] justify-start z-10 px-6 py-4 font-bold text-xl hover:translate-x-3 hover:-translate-y-3 transition-all delay-100 ease-linear">
                                View Project
                              </div>
                            </Link>
                            <div className="bg-yellow-600 h-full w-[175px] absolute"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:hidden">
          {/*For Mobile */}
          {units.map((dataItems) => {
            return (
              <div className="w-[100%] flex flex-col items-center">
                <Link
                  className="w-full flex justify-center"
                  to={dataItems.link}
                >
                  <div
                    className={`flex flex-col justify-center w-[80%] max-sm:w-[90%] border-b-[10px] border-[#005cef] cursor-pointer`}
                  >
                    <div className="flex flex-col justify-center relative h-[200px]">
                      <div className="text-[#f43f5e]">
                        <h1
                          className={`text-[${blue}] text-2xl font-semibold transition-colors delay-5 ease-linear`}
                        >
                          {dataItems.motto}
                        </h1>
                        <h1
                          className={`text-[${red}] text-7xl font-bold transition-colors delay-5 ease-linear max-md:text-5xl max-md:font-semibold`}
                        >
                          {dataItems.division}
                        </h1>
                      </div>
                      <div
                        className={`absoulte w-[50px] h-[100px] absolute max-sm:right-0 flex justify-center items-center  right-2 max-md:scale-[80%] -rotate-90 `}
                      >
                        <Arrow color="bg-[#005cef]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Units;
