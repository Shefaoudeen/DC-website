import React from "react";

const Team = () => {
  return (
    <div className="bg-[#ff1f25] w-full flex justify-center items-center py-20 z-50 relative">
      <div className="flex flex-col justify-start w-[80%] max-sm:w-[90%]">
        <h1 className="text-[white] text-8xl font-bold max-sm:text-6xl">
          Team DC.
        </h1>
        <div className="pt-10">
          <h1 className="text-[white] text-4xl font-bold">Kuhan</h1>
          <h5 className="text-[white] text-2xl">President</h5>
        </div>
      </div>
    </div>
  );
};

export default Team;
