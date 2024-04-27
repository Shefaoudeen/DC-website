import React from "react";
import Arrow from "../Arrow";
import { Link } from "react-router-dom";
import Footer from "../../Pages/Footer";

const Development = () => {
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
            <h1 className="text-8xl poppins-bold">DC DEVELOPMENT</h1>
            <h1 className="text-xl poppins-medium text-gray-400 tracking-widest">
              Coding Dreams into Reality!
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
                  Shefaoudeen
                </h1>
                <h1>
                  <span className="text-black poppins-medium">Inception: </span>
                  2024
                </h1>
                <h1>
                  <span className="text-black poppins-medium">
                  Secretaries:{" "}
                  </span>
                  7
                </h1>
                <h1>
                  <span className="text-black poppins-medium">Technologies: </span>
                  MERN, TailwindCSS, and Bootstrap
                </h1>
              </div>
            </div>
            <div className="w-3/5 max-md:w-full">
              <div className="m-4">
                <h1 className="text-gray-600">
                The unit secretaries, comprising members from different academic years, include Anish, Anupama, Cyrill, Sabarinathan, Harshit, and Dwaipayan
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
            The Development Unit, created as part of the DC 2024 slate, is an essential division responsible for all coding-related tasks within the club. Using a variety of technologies such as ReactJS, Vanilla JavaScript, and CSS frameworks like Tailwind and Bootstrap, as well as the MERN Stack, our team tackles a wide range of projects. From developing interactive web applications to creating robust backend systems, the Development Unit ensures that every technical aspect of our projects is executed with precision and excellence.
            </span>
            <span className="text-gray-600 w-1/2 max-md:w-full">
            With a dedicated focus on technical excellence, the Development Unit plays a crucial role within DC 2024. Our team of skilled developers works tirelessly to bring projects to life, using the latest technologies and coding practices. Whether it's building dynamic web applications, implementing complex algorithms, or optimizing performance, the Development Unit is committed to delivering high-quality code that meets the club's standards of excellence.
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
            Before the club split into specialized units, we were responsible for developing the PTU website and its maintenance. However, since the formation of the Development Unit, we have taken on more ambitious projects. Our first major project is the website you are currently browsing, the DC portfolio.
            </span>

            <span className="text-gray-600 w-1/2 max-md:w-full ">
            As we continue to grow and expand our capabilities, there are many ongoing projects in the pipeline. From developing new web applications to optimizing existing systems, the Development Unit is dedicated to pushing the boundaries of what we can achieve with code. Stay tuned for more exciting projects from our team!
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

export default Development;
