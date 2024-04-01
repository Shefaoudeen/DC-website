import React from "react";
import Arrow from "./Arrow";

const Prime = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="scale-[60%] w-min">
            <Arrow />
          </div>
          <div>
            <h1 className="text-8xl font-bold">DC PRIME</h1>
            <h1 className="text-xl font-medium text-gray-400 tracking-widest">
              Innovate, Create, Design!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10">
            <h1 className="text-[#f43f5e] font-bold text-4xl">About Project</h1>
          </div>
          <div className="flex w-[100%] text-xl">
            <div className="w-2/5">
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
            <div className="w-3/5">
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
            <h1 className="text-[#f43f5e] font-bold text-4xl">Brief</h1>
          </div>
          <div className="flex w-[100%] text-xl">
            <div className="w-1/2">
              <div className="m-4">
                <h1 className="text-gray-600">
                  And so it began. Since we have a larger task of building the
                  showreel itself, we split our 3D team to focus on the idents,
                  whilst the 2D team began building the larger reel. With such a
                  clean slate,
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="m-4">
                <h1 className="text-gray-600">
                  we made sure to spend time iterating on multiple potential
                  routes. The core approach was to build 5 different visual
                  snippets, each showcasing the hero MakeReign logo mark in
                  unique vignettes.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="py-10">
            <h1 className="text-[#f43f5e] font-bold text-4xl">Process</h1>
          </div>
          <div className="flex w-[100%] text-xl">
            <div className="w-1/2">
              <div className="m-4">
                <h1 className="text-gray-600">
                  Working with Houdini, Redshift, and Cinema4D, we built growth,
                  smoke, collision, and inflation systems. Each of these were
                  tweaked and refined through iteration to finally get to a
                  fidelity we were all
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="m-4">
                <h1 className="text-gray-600">
                  happy with. A timely exercise, but a super insightful one.
                  Strangely, one of the most difficult tasks was getting a laser
                  projection to feel right. It's the easiest stuff that
                  sometimes hurts the most.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-[80%] flex justify-between">
          <div>
            <h1 className="text-6xl font-bold text-[#005cef]">
              Other Divisions
            </h1>
          </div>
          <div className="rotate-[270deg]">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prime;
