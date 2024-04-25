import React from "react";
import Footer from "../Pages/Footer";
import "./Team.css";
import { team } from "../Data/team";
import { Logo } from "../assets";

const Team = () => {
  return (
    <div className="bg-[#ff1f25] w-full flex flex-col justify-center items-center pt-20 z-50 relative max-w-screen">
      <div className="flex flex-col justify-start w-[80%] max-sm:w-[90%]">
        <h1 className="text-[white] text-8xl font-bold max-sm:text-6xl">
          Team DC.
        </h1>
      </div>
      <div className="flex pt-10 flex-col gap-10 w-[90%] items-center justify-center">
        {team.map((person) => {
          return (
            <div
              className={`flex w-[50%] ${
                person.id % 2 !== 0 ? "justify-between" : "justify-between"
              } ${
                person.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-[200px] py-5 items-center`}
            >
              {" "}
              <div>
                <div className="max-w-[300px] min-w-[300px] relative min-h-[300px] bg-yellow-400 rounded-full flex justify-center items-center group cursor-pointer">
                  <div className="absolute bg-yellow-600 w-full h-full rounded-full -z-10 -translate-x-2 translate-y-2"></div>
                  <img src={Logo} alt="" className="absolute scale-75" />
                  <div className="relative max-w-[250px] min-w-[250px] cursor-pointer min-h-[250px] bg-blue-600 rounded-full origin-bottom group-hover:rotate-180 duration-[400ms]">
                    <div className="absolute max-w-[20px] min-w-[20px] max-h-[20px] min-h-[20px] bg-orange-700 rounded-full  bottom-2 right-[50%]"></div>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <h1 className="text-[white] text-4xl font-bold">
                  {person.name}
                </h1>
                <h5 className="text-[white] text-2xl">{person.designation}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
