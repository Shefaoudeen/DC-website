import React from "react";
import "./styles.css";
import { UpArrow } from "../assets/index";
import { useParams } from "react-router-dom";
import EmailForm from "../Components/EmailForm";
import Social from "../Components/Social";
import "../Data/color.js";

const Footer = (props) => {
  let { id } = useParams();
  console.log({ id });
  return (
    <div
      className="bg-[#005cef] w-full flex justify-center items-center h-screen max-md:h-min relative overflow-x-clip select-none max-w-screen"
      id="footer"
    >
      <Social />
      <div className="flex flex-col justify-start w-[80%] max-sm:w-[90%] max-md:pt-10">
        <div className="flex flex-col justify-center w-full h-[150px] border-b-[10px] max-md:border-b-[4px] max-md:h-[90px] border-[white] max-sm:w-[90%] z-20">
          <h1 className="text-start text-8xl poppins-semibold text-[white] max-md:text-5xl max-md:font-semibold ">
            Say hello.
          </h1>
        </div>

        <div className="flex w-full justify-between items-center max-md:flex-col">
          <div className="flex flex-col justify-center">
            <div className=" max-md:pt-10 z-20">
              <h3 className="text-start text-2xl poppins-regular text-[white]">
                Email:
              </h3>
              <h2 className="email-underline text-start text-4xl poppins-medium max-md:text-2xl text-[white] pt-5 select-text">
                designclub@ptuniv.edu.in
              </h2>
            </div>

            <div className="pt-20 z-20 max-md:text-xl">
              <h3 className="text-start text-2xl poppins-regular text-[white] max-md:text-xl">
                Address:
              </h3>
              <h2 className="text-start poppins-regular text-xl text-[white] pt-5 z-20 max-md:text-xl">
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
          <div className="z-[100] w-1/2 max-md:w-full max-md:pb-20">
            {" "}
            <div className="z-[100]">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute ${props.status} w-[100vh] h-[100vh] overflow-y-clip max-md:bottom-0 z-10 md:overflow-y-clip max-md:w-[550px] max-md:h-[550px] `}
        id="circle"
      >
        <div className="absolute h-screen w-[100%] bg-[#ff1f25] translate-x-[25rem] max-md:translate-x-[16rem]  max-md:translate-y-[4rem]"></div>
        <div className="w-[100vh] max-md:w-[70vh] max-md:h-[70vh] scale-[150%] h-[100vh] translate-y-[11.4rem] rounded-full bg-yellow-300"></div>
      </div>
      <div className="absolute bottom-0 pb-1 w-full bg-gray-900 z-[100] text-center">
        <h1 className="text-white text-2xl py-2">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/shefaoudeen-z"
            target="_blank"
            className="hover:underline"
          >
            Shefaoudeen
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/kuhan-s-a28328201/"
            target="_blank"
            className="hover:underline"
          >
            Kuhan
          </a>
        </h1>
      </div>
      <Social />
    </div>
  );
};

export default Footer;
