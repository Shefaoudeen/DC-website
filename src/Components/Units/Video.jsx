import React from "react";
import Arrow from "../Arrow";
import { Link } from "react-router-dom";
import Footer from "../../Pages/Footer";

const Video = () => {
  let blue = "#005cef";
  let red = "#f43f5e";

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <a href="#about">
            <div className="scale-[60%] w-min hover:translate-y-5 delay-100 transition-all ease-linear">
              <Arrow color="bg-[#005cef] select-none" />
            </div>
          </a>
          <div>
            <h1 className="text-8xl poppins-bold">DC VIDEO</h1>
            <h1 className="text-xl poppins-medium text-gray-400 tracking-widest">
              Lights, Camera, Edit!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10" id="about">
            <h1 className={`text-[${red}] poppins-bold text-4xl`}>
              About
            </h1>
          </div>
          <div className="flex w-[100%] max-md:flex-col text-xl">
            <div className="w-2/5 max-md:w-full">
            <div className="text-gray-600">
                <h1>
                  <span className="text-black poppins-medium">Unit President: </span>
                  Abhinavkumar
                </h1>
                <h1>
                  <span className="text-black poppins-medium">Inception: </span>
                  2024
                </h1>
                <h1>
                  <span className="text-black poppins-medium">
                  Secretaries:{" "}
                  </span>
                  4
                </h1>
                <h1>
                  <span className="text-black poppins-medium">Softwares: </span>
                  Adobe Premiere Pro, After Effects, Blender, and Davinci Resolve
                </h1>
              </div>
            </div>
            <div className="w-3/5 max-md:w-full">
              <div className="m-4">
                <h1 className="text-gray-600 text-justify poppins-regular">
                The unit secretaries, comprising members from different academic years, include Sreeraam, Ashwath Sundhar, and Kaushik Kumar.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10">
            <h1 className={`text-[${red}] poppins-bold text-4xl`}>Brief</h1>
          </div>
          <div className="flex w-[100%] poppins-regular text-xl max-md:flex-col md:gap-10 text-justify">
            <span className="text-gray-600 w-1/2 max-md:w-full">
            As part of the DC 2024 slate, the club has been divided into three vital units, and the VIDEO unit holds a significant position among them. Specializing in dynamic visual content, the VIDEO unit is the creative force behind all projects involving motion graphics and video production.
            </span>
            <span className="text-gray-600 w-1/2 max-md:w-full">
            Small yet highly impactful, the VIDEO unit thrives on challenges. From concept to execution, every project is meticulously crafted to deliver engaging and visually stunning results. With a dedicated focus on excellence, the VIDEO unit plays a crucial role within DC 2024, bringing ideas to life through the power of video.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10">
            <h1 className={`text-[${red}] poppins-bold text-4xl`}>Works</h1>
          </div>
          <div className="flex w-[100%] poppins-regular text-xl max-md:flex-col text-justify gap-10">
            <span className="text-gray-600 w-1/2 max-md:w-full">
            The Video Unit of DC, a newly formed division as part of the DC 2024 slate, has already embarked on several exciting projects. From creating the PTU Intro to producing Symposium Teasers and the DC Intro, our team is dedicated to delivering high-quality video content that engages and inspires.
            </span>

            <span className="text-gray-600 w-1/2 max-md:w-full ">
            Currently, we have several projects in production, including the PTU Intro, Symposium Teasers, DC Intro, and more. With our talented team of videographers and editors, we are committed to producing visually compelling and impactful videos that showcase the best of DC. Stay tuned for these exciting releases!
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 ">
        <Link to="/" className="flex justify-center items-center group  w-full">
          <div className="w-[80%] flex justify-between items-center cursor-pointer">
            <div>
              <h1 className={`text-6xl poppins-bold text-[${blue}]`}>
                Other Units
              </h1>
            </div>

            <div className="rotate-[270deg] md:mx-[100px] group-hover:translate-x-10 delay-100 transition-all ease-linear">
              <Arrow color="bg-[#005cef]" />
            </div>
          </div>
        </Link>
      </div>
      <Footer status="hidden" />
    </div>
  );
};

export default Video;
