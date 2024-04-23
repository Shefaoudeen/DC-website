import React from "react";
import Hamburger from "../Components/Hamburger";
import { DC24 } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center text-2xl">
      <div className="flex justify-between w-[90%] max-md:w-[90%] border-b-4 border-black py-5">
        <div>
          <img src={DC24} className="w-[200px]" />
        </div>
        <div className="flex items-center text-4xl font-bold justify-center text-center">
          Puducherry Technological University
        </div>
        <div className="flex justify-around items-center">
          <div className="flex w-[100%] text-2xl justify-around max-md:hidden font-bold gap-2">
            <a href="/#units">
              <button className=" px-4 py-2 hover:bg-[#005cef] delay-100 transition-colors ease-linear hover:text-white rounded-lg">
                Units
              </button>
            </a>
            <a href="/#works">
              <button className=" px-4 py-2 hover:bg-yellow-300 delay-100 transition-colors ease-linear hover:text-white rounded-lg">
                Works
              </button>
            </a>
            <button className=" px-4 py-2 hover:bg-[#ff1f25] delay-100 transition-colors ease-linear hover:text-white rounded-lg">
              Follow us
            </button>
            {/*<div>Hall of Fame</div>*/}
            {/*<div>Upcoming Events</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
