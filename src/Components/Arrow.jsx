import React from "react";

const Arrow = () => {
  return (
    <div className="w-[50px] h-[100px] flex justify-center items-center absolute max-sm:h-[75px] max-sm:w-[40px]">
      <div className="h-[80%] w-[20%] rounded-b-2xl bg-[#005cef]"></div>
      <div className="h-[40%] w-[20%] bg-[#005cef] absolute rotate-[45deg] bottom-1 right-2.5 max-sm:right-2"></div>
      <div className="h-[40%] w-[20%] bg-[#005cef] absolute rotate-[-45deg] bottom-1 left-[9px] max-sm:left-2"></div>
    </div>
  );
};

export default Arrow;
