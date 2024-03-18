import React from "react";

const Arrow = () => {
  return (
    <div className="w-[50px] h-[100px] flex justify-center items-center absolute">
      <div className="h-[80px] w-[10px] rounded-b-2xl bg-blue-800"></div>
      <div className="h-[40px] w-[10px] bg-blue-800 absolute rotate-[45deg] bottom-1 right-2.5"></div>
      <div className="h-[40px] w-[10px] bg-blue-800 absolute rotate-[-45deg] bottom-1 left-[9px]"></div>
    </div>
  );
};

export default Arrow;
