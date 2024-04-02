import React from "react";
import Hamburger from "../Components/Hamburger";

const Header = () => {
  return (
    <div className="flex justify-center text-2xl">
      <div className="flex justify-between w-[80%] max-md:w-[90%] border-b-4 border-black py-10">
        <div>DC</div>
        <div className="flex w-[25%] justify-around">
          <div className="flex w-[100%] justify-around max-md:hidden">
            <div>Home</div>
            <div>Work</div>
            <div>Shop</div>
            <div>Contact</div>
          </div>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
