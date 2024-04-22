import React from "react";

const About = () => {
  return (
    <div className="bg-[#005cef] w-full min-h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-center w-[75%] max-sm:w-[90%]  z-20 max-md:text-xl pt-10 px-5">
        {/* color change */}
        <h1 className="text-[#b3c8e9] text-8xl font-bold max-md:text-6xl pb-10">
          Who we are?
        </h1>
        <h1 className="text-[white] text-5xl font-bold pt-5 max-md:text-2xl max-md:px-5 max-md:font-semibold text-justify mdpy-20">
          Design Club of Puducherry Technological University is your hub to
          connect with designers and shape a collaborative, boundless creative
          space. Join us for dynamic discussions, project sharing, and elevate
          your passion for design in our vibrant community!
        </h1>
        <h4 className="text-[white] text-justify py-5 max-md:text-lg">
          Nullam odio nunc, placerat sit amet odio nec, gravida lobortis eros.
          In vel volutpat dolor, at accumsan velit. Fusce egestas molestie enim,
          vel elementum tellus euismod eget. Sed cursus augue lobortis augue
          sollicitudin congue. Vivamus a justo est. Sed sapien ligula, porttitor
          at tellus rutrum, lobortis porta dui. Nunc in augue erat. Donec quis
          arcu at neque efficitur elementum. Vestibulum commodo iaculis sapien,
          vel rutrum lectus faucibus a. Morbi faucibus dictum convallis. Cras mi
          ipsum, facilisis eget nulla vel, commodo suscipit dolor. Pellentesque
          nec magna facilisis ipsum consequat efficitur ac et tellus.
          Pellentesque aliquet felis ac justo cursus, nec dignissim turpis
          pulvinar. Suspendisse porttitor eros vitae augue venenatis, id
          pharetra sapien congue. Sed vulputate eros leo, vulputate scelerisque
          purus venenatis nec. Quisque vel ex tincidunt, vulputate sapien eu,
          lobortis nunc.
        </h4>
      </div>
    </div>
  );
};

export default About;
