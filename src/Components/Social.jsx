import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  const [open, setOpen] = useState(false);

  const changeState = () => {
    setOpen(!open);
  };

  return (
    <button
      className="fixed scale-75 -right-[100px] top-[40%]  w-[200px] h-[200px]  rounded-full bg-blue-500 hover:bg-[#005cef] duration-150 ease-linear transition-colors z-[999]"
      onClick={changeState}
    >
      <div
        className={`w-full h-full relative 400 group ${
          open ? "-translate-x-12" : null
        }`}
      >
        <div
          className={`rotate-[-90deg] absolute top-[0%] w-full left-[30%] h-full ${
            open ? "translate-x-12" : null
          }`}
        >
          <h1 className="mb-2 text-xl w-full poppins-medium text-white">
            Follow DC
          </h1>
        </div>
        <div
          className={`absolute flex justify-center items-center w-1/2 h-1/2 text-right origin-bottom-left  right-0  ${
            open ? "rotate-[-225deg]" : null
          }  duration-[200ms] ease-linear`}
        >
          <a href="https://www.instagram.com/designclub_ptu" target="_blank">
            <FaInstagram className="rotate-[-135deg] drop-shadow-2xl shadow-2xl text-6xl p-3 bg-[#ffdd18] rounded-full" />
          </a>
        </div>
        <div
          className={`absolute flex justify-center items-center w-1/2 h-1/2 text-right origin-bottom-left  right-0 ${
            open ? "rotate-[-135deg]" : null
          } duration-[300ms] ease-linear`}
        >
          <a
            href="https://whatsapp.com/channel/0029VaSa6BxJENxzvr9wHb0k"
            target="_blank"
          >
            <FaWhatsapp className="rotate-[135deg] drop-shadow-2xl shadow-2xl text-6xl p-3 bg-[#ffdd18] rounded-full" />
          </a>
        </div>
        <div
          className={`absolute flex justify-center  items-center w-1/2 h-1/2 text-right origin-bottom-left  right-0 ${
            open ? "rotate-[-45deg]" : null
          } duration-[400ms] ease-linear`}
        >
          <a
            href="https://www.linkedin.com/company/design-club-ptu"
            target="_blank"
          >
            <FaLinkedinIn className="rotate-[45deg] drop-shadow-2xl shadow-2xl text-6xl ml-1 p-3 bg-[#ffdd18] rounded-full" />
          </a>
        </div>
      </div>
    </button>
  );
};

export default Social;
