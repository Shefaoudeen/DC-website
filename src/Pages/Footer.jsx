import React from "react";
import "./styles.css";
import { UpArrow } from "../assets/index";

const Footer = () => {
  return (
    <div className="bg-[#005cef] w-full flex justify-center items-center   h-screen">
      <div className="flex flex-col justify-start w-[80%] max-sm:w-[90%]">
        <div className="flex flex-col justify-center w-full h-[150px] border-b-[10px] border-[white] max-sm:w-[90%] z-20">
          <h1 className="text-start text-8xl font-bold text-[white] max-md:text-6xl">
            Say hello.
          </h1>
        </div>

        <div className="pt-20 max-md:pt-10 z-20">
          <h3 className="text-start text-2xl font-bold text-[white]">Email:</h3>
          <h2 className="email-underline text-start text-4xl font-bold max-md:text-2xl text-[white] pt-5">
            designclub@ptuniv.edu.in
          </h2>
        </div>

        <div className="pt-20 z-20">
          <h3 className="text-start text-2xl font-bold text-[white]">
            Address:
          </h3>
          <h2 className="text-start text-2xl text-[white] pt-5 z-20">
            Puducherry Technological University&nbsp;
            <br />
            East Coast Road&nbsp;
            <br />
            Pillaichavady&nbsp;
            <br />
            Puducherry&nbsp;
            <br />
            605 014
          </h2>
        </div>
      </div>
      <div
        className="absolute w-full h-screen z-10 overflow-y-clip"
        id="circle"
      >
        <div className="absolute h-screen w-[100%] bg-[#ff1f25] translate-x-[25rem]"></div>
        <div className="w-[50%] scale-[150%] h-[100%] translate-y-[12.7rem] rounded-full bg-yellow-300"></div>
      </div>
    </div>
  );
};

export default Footer;
