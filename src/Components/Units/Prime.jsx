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
              <Arrow />
            </div>
          </a>
          <div>
            <h1 className="text-8xl font-bold">DC PRIME</h1>
            <h1 className="text-xl font-medium text-gray-400 tracking-widest">
              Innovate, Create, Design!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]" id="about">
          <div className="py-10">
            <h1 className={`text-[${red}] font-bold text-4xl`}>
              About Project
            </h1>
          </div>
          <div className="flex w-[100%] max-md:flex-col text-xl">
            <div className="w-2/5 max-md:w-full">
              <div className="text-gray-600">
                <h1>
                  <span className="text-black font-medium">Client: </span>
                  MakeReign
                </h1>
                <h1>
                  <span className="text-black font-medium">Concept: </span>
                  Okalpha
                </h1>
                <h1>
                  <span className="text-black font-medium">
                    Creative Direction:{" "}
                  </span>
                  Okalpha + MakeReign
                </h1>
                <h1>
                  <span className="text-black font-medium">Animation: </span>
                  Okalpha
                </h1>
              </div>
            </div>
            <div className="w-3/5 max-md:w-full">
              <div className="m-4">
                <h1 className="text-gray-600">
                  The bi-product of a brief to build a showreel, a set of idents
                  needed to be created to be used across MakeReign collateral
                  and to introduce the reel itself. Sometimes certain briefs are
                  better than others. This brief was one of those times. An
                  opportunity to learn and create.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10">
            <h1 className={`text-[${red}] font-bold text-4xl`}>Brief</h1>
          </div>
          <div className="flex w-[100%] text-xl max-md:flex-col md:gap-10 text-justify">
            <span className="text-gray-600 w-1/2 max-md:w-full">
              And so it began. Since we have a larger task of building the
              showreel itself, we split our 3D team to focus on the idents,
              whilst the 2D team began building the larger reel. With such a
              clean slate,
            </span>
            <span className="text-gray-600 w-1/2 max-md:w-full">
              we made sure to spend time iterating on multiple potential routes.
              The core approach was to build 5 different visual snippets, each
              showcasing the hero MakeReign logo mark in unique vignettes.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10">
            <h1 className={`text-[${red}] font-bold text-4xl`}>Process</h1>
          </div>
          <div className="flex w-[100%] text-xl max-md:flex-col text-justify gap-10">
            <span className="text-gray-600 w-1/2 max-md:w-full">
              Working with Houdini, Redshift, and Cinema4D, we built growth,
              smoke, collision, and inflation systems. Each of these were
              tweaked and refined through iteration to finally get to a fidelity
              we were all
            </span>

            <span className="text-gray-600 w-1/2 max-md:w-full ">
              happy with. A timely exercise, but a super insightful one.
              Strangely, one of the most difficult tasks was getting a laser
              projection to feel right. It's the easiest stuff that sometimes
              hurts the most.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 ">
        <Link to="/" className="flex justify-center items-center group  w-full">
          <div className="w-[80%] flex justify-between items-center cursor-pointer">
            <div>
              <h1 className={`text-6xl font-bold text-[${blue}]`}>
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
