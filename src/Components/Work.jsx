import React, { useState } from "react";
import Arrow from "./Arrow";
import { rotateIn } from "react-animations";

const Work = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(toggle === true ? false : true);
  };

  const rotateDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;

  return (
    <div className="flex justify-center items-center w-screen ">
      <div className="flex flex-col justify-center items-center w-[100%]">
        <div className="flex flex-col justify-center w-[80%] h-[150px] border-b-[10px] border-[#005cef]">
          <h1 className="text-start text-[#005cef] text-8xl font-bold">
            Our Work.
          </h1>
        </div>
        <div
          onClick={() => handleClick()}
          className={`flex flex-col justify-center w-[80%] h-[${
            toggle === true ? 1000 : 200
          }px] border-b-[10px] border-[#005cef] cursor-pointer`}
        >
          <div className="flex flex-col justify-center relative h-[200px]">
            <h1 className="text-[#ff1f25] text-2xl font-semibold">
              Brand Idents
            </h1>
            <h1 className="text-[#ff1f25] text-7xl font-bold">MakeReign.</h1>
            <div
              className={`absoulte w-[50px] h-[100px] absolute right-2 rotate-${
                toggle === true ? 180 : null
              }`}
            >
              <Arrow className={`animate-${toggle === true ? "spin" : null}`} />
            </div>
          </div>
          {toggle === true ? (
            <div className="h-[600px] flex bg-[#ff1f25]">
              <div className="w-1/2 h-full bg-[#005cef]"></div>
              <div className="flex  gap-10 justify-center flex-col items-center w-1/2 h-full bg-rose-600">
                <div className="text-white text-5xl font-bold font-sans w-[80%]">
                  <h1>MakeReign's new</h1>
                  <h1>look comes to life.</h1>
                </div>
                <div className="w-[80%] text-xl text-white">
                  <h1>
                    A set of animated idents built to introduce MakeReign's 2023
                    reel. Killer branding, meet killer visuals.
                  </h1>
                </div>
                <div className="flex justify-start w-[80%]">
                  <div className="bg-yellow-400 justify-start px-6 py-4 font-bold text-xl">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Work;
