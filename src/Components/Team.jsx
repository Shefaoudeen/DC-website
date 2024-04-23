import React from "react";
import Footer from "../Pages/Footer";
import "./Team.css";

const Team = () => {
  return (
    <div className="bg-[#ff1f25] w-full flex flex-col justify-center items-center pt-20 z-50 relative">
      <div className="flex flex-col justify-start w-[80%] max-sm:w-[90%]">
        <h1 className="text-[white] text-8xl font-bold max-sm:text-6xl">
          Team DC.
        </h1>
        <div className="pt-10">
          <h1 className="text-[white] text-4xl font-bold">Kuhan</h1>
          <h5 className="text-[white] text-2xl">President</h5>
        </div>
        <div>
          <div className="max-w-[200px] min-h-[200px] bg-blue-400 rounded-full flex justify-center items-center group">
            <div className="max-w-[180px] min-w-[180px] cursor-pointer min-h-[180px] bg-blue-800 rounded-full profile-circle duration-200"></div>
          </div>
        </div>
      </div>
      <div className="pt-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
