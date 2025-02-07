import React from "react";
import Hamburger from "../Components/Hamburger";
import { DC25, Logo } from "../assets";
import { Link } from "react-router-dom";
import "../fonts.css";

const Header = () => {
  return (
    <div className="flex justify-center text-2xl  w-full" id="nav">
      <div className="flex justify-between max-md:justify-center w-[80%] max-md:w-[90%] border-b-4 border-black py-5">
        <div>
          <a href="https://ptu-designclub.netlify.app">
            <img src={Logo} className="w-[50px] max-md:hidden" />
          </a>
        </div>

        <div>
          <a href="https://ptu-designclub.netlify.app">
            <img src={DC25} className="w-[100px]" />
          </a>
        </div>

        <div className="flex justify-around items-center max-md:hidden">
          <div className="flex w-[100%] poppins-light text-2xl justify-around max-md:hidden gap-2">
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
            <a href="/#footer">
              <button className=" px-4 py-2 hover:bg-[#ff1f25] delay-100 transition-colors ease-linear hover:text-white rounded-lg">
                Contact us
              </button>
            </a>
            {/*<div>Hall of Fame</div>*/}
            {/*<div>Upcoming Events</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
