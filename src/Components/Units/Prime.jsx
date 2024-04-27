import React from "react";
import Arrow from "../Arrow";
import { Link } from "react-router-dom";
import Footer from "../../Pages/Footer";

const Prime = () => {
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
            <h1 className="text-8xl poppins-bold">DC PRIME</h1>
            <h1 className="text-xl poppins-medium text-gray-400 tracking-widest">
              Think, Design, Innovate!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]" id="about">
          <div className="py-10">
            <h1 className={`text-[${red}] poppins-bold text-4xl`}>
              About
            </h1>
          </div>
          <div className="flex w-[100%] max-md:flex-col text-xl">
            <div className="w-2/5 max-md:w-full">
              <div className="text-gray-600">
                <h1>
                  <span className="text-black poppins-medium">Unit President: </span>
                  Yogeshwaran
                </h1>
                <h1>
                  <span className="text-black poppins-medium">Inception: </span>
                  2024
                </h1>
                <h1>
                  <span className="text-black poppins-medium">
                  Secretaries:{" "}
                  </span>
                  9
                </h1>
                <h1>
                  <span className="text-black poppins-medium">Softwares: </span>
                  Adobe Photoshop, Illustrator, and Spline
                </h1>
              </div>
            </div>
            <div className="w-3/5 max-md:w-full">
              <div className="m-4">
                <h1 className="text-gray-600 text-justify poppins-regular">
                The unit secretaries, representing various years, include Devanathan B, Yogeshwaran, Uma Maheswari, Dhineshkumar, Devanathan, Shrikaanth, Chuniit, Pradheepraj, Mugesh Kumar, and Vishnu Vardhan.
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
            As part of the DC 2024 slate, the club has been divided into three vital units, and PRIME holds a prominent position among them. At PRIME, we specialize in creating captivating visuals using Adobe Photoshop, Illustrator, and a variety of other design tools. Whether it's designing posters, banners, or any other project that can be accomplished using Adobe Photoshop, Illustrator, and more, PRIME ensures that each task is executed with precision and creativity, leaving a lasting impact through our impactful designs.
            </span>
            <span className="text-gray-600 w-1/2 max-md:w-full">
            With a dedicated focus on visual excellence, PRIME plays a crucial role within DC 2024. From concept to execution, PRIME takes charge of every project that involves visual design, ensuring that each piece is delivered with the utmost creativity and attention to detail. Our talented team of designers strives to bring out the best in every project, creating visually stunning and impactful designs that leave a lasting impression.
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
            PRIME has been instrumental in designing various projects, including Rejouir-Pecofes, the university festival, Neura 2023, a symposium by the Department of Information Technology, and the PTU 2024 Calendar. Additionally, we have created magazines for various clubs, such as the Reflections Newsletter: Edition 1 for the Literary Club and the Fine Arts Club Magazine. Our portfolio also includes designing posters for university events, the DC Pamphlet, and much more.
            </span>

            <span className="text-gray-600 w-1/2 max-md:w-full ">
            Through our work, we aim to make a significant impact on every project we undertake. Whether it's designing visually stunning posters, creating captivating magazine layouts, or crafting memorable event materials, PRIME ensures that each project is executed with creativity, precision, and attention to detail.
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

export default Prime;
