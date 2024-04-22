import React from "react";
import "./styles.css";
import { UpArrow } from "../assets/index";

const Footer = () => {
  return (
    <div
      className="bg-[#005cef] w-full flex justify-center items-center h-screen max-md:h-min relative"
      id="footer"
    >
      <div className="flex flex-col justify-start w-[80%] max-sm:w-[90%]">
        <div className="flex flex-col justify-center w-full h-[150px] border-b-[10px] max-md:border-b-[4px] max-md:h-[90px] border-[white] max-sm:w-[90%] z-20">
          <h1 className="text-start text-8xl font-bold text-[white] max-md:text-5xl max-md:font-semibold">
            Say hello.
          </h1>
        </div>

        <div className="pt-20 max-md:pt-10 z-20">
          <h3 className="text-start text-2xl font-bold text-[white]">Email:</h3>
          <h2 className="email-underline text-start text-4xl font-bold max-md:text-2xl text-[white] pt-5">
            designclub@ptuniv.edu.in
          </h2>
        </div>

        <div className="pt-20 z-20 max-md:text-xl">
          <h3 className="text-start text-2xl font-bold text-[white] max-md:text-xl">
            Address:
          </h3>
          <h2 className="text-start text-2xl text-[white] pt-5 z-20 max-md:text-xl">
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
        className="absolute w-[100%] h-[100%] overflow-y-clip max-md:bottom-0 z-10 md:overflow-y-clip max-md:w-[550px] max-md:h-[550px] "
        id="circle"
      >
        <div className="absolute h-screen w-[100%] bg-[#ff1f25] translate-x-[25rem] max-md:translate-x-[16rem]  max-md:translate-y-[4rem]"></div>
        <div className="w-[50%] max-md:w-[100%] scale-[150%] h-[100%] translate-y-[12.7rem] rounded-full bg-yellow-300"></div>
      </div>
    </div>
  );
};

export default Footer;
