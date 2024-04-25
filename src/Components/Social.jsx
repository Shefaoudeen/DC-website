import React from "react";
import { Logo } from "../assets";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <div className="fixed -right-[100px] top-[50%]  w-[200px] h-[200px]  rounded-full bg-blue-500 z-[999]">
      <div className="w-full h-full relative 400 group hover:-translate-x-12">
        <div className="rotate-[-90deg] absolute top-[0%] w-full left-[30%] h-full group-hover:translate-x-12">
          <h1 className="mb-2 text-xl font-bold ml-6 text-white">
            Contact with us
          </h1>
        </div>
        <div className="absolute flex justify-center items-center w-1/2 h-1/2 text-right origin-bottom-left  right-0 group-hover:rotate-[-225deg] duration-[200ms] ease-linear">
          <a href="https://www.instagram.com/designclub_ptu" target="_blank">
            <FaInstagram className="rotate-[-135deg] text-6xl p-3 bg-violet-200 rounded-full" />
          </a>
        </div>
        <div className="absolute flex justify-center items-center w-1/2 h-1/2 text-right origin-bottom-left  right-0 group-hover:rotate-[-135deg] duration-[300ms] ease-linear">
          <a
            href="https://whatsapp.com/channel/0029VaSa6BxJENxzvr9wHb0k"
            target="_blank"
          >
            <FaWhatsapp className="rotate-[135deg] text-6xl p-3 bg-violet-200 rounded-full" />
          </a>
        </div>
        <div className="absolute flex justify-center items-center w-1/2 h-1/2 text-right origin-bottom-left  right-0 group-hover:rotate-[-45deg] duration-[400ms] ease-linear">
          <a
            href="https://www.linkedin.com/company/design-club-ptu"
            target="_blank"
          >
            <FaLinkedinIn className="rotate-[45deg] text-6xl ml-1 p-3 bg-violet-200 rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
