import React from "react";

const Hamburger = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[30px] bg-black h-[5px] rounded-xl"></div>
      <div className="w-[30px] bg-black h-[5px] rounded-xl"></div>
      <div className="w-[30px] bg-black h-[5px] rounded-xl"></div>
    </div>
  );
};

export default Hamburger;
