import React from "react";
import "../fonts.css";

const About = () => {
  return (
    <div className="bg-[#005cef] w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center w-[75%] max-sm:w-[90%]  z-20 max-md:text-xl px-5">
        <h1 className="text-[#0b46a3] text-opacity-80 poppins-semibold text-8xl max-md:text-4xl py-10 max-md:pt-10 max-md:pb-5">
          Who are we?
        </h1>
        <h1 className="text-[white] poppins-semibold text-4xl leading-tight pt-5 max-md:text-2xl text-justify md:py-10">
          Established in 2019 by visionary student founders Rupam Chirom, Najmu
          Sehar Wani, Hemachandar R and Ram Vignesh B under the guidance of
          Faculty Dr. Shanthi Simon, Puducherry Technological University's{" "}
          <a
            className="hover:text-[#ffdd18] transition ease-in-out delay-60"
            href="https://ptuniv.edu.in/4c/design-club"
            target="_blank"
          >
            Design Club
          </a>{" "}
          is a beacon of creativity and innovation. Led by{" "}
          <a
            className="hover:text-[#ffdd18] transition ease-in-out delay-60"
            href="https://www.linkedin.com/in/dr-sathiyamurthy-k-8b271453/"
            target="_blank"
          >
            Dr. K. Sathiyamurthy
          </a>{" "}
          , the club shapes the university's identity through dynamic design
          initiatives.
        </h1>
        <h4 className="text-[white] poppins-regular text-opacity-80 text-justify py-5 max-md:text-lg max-md:pb-12">
          Since its establishment, the Design Club has been a driving force for
          innovation, leading numerous impactful projects across various
          domains. Noteworthy accomplishments encompass the launch of the
          university's website, development of the PTU Logo, creation of the PTU
          Official 2024 Calendar, and publication of several symposium and club
          magazines. The club has also contributed designs for festivals and
          symposium events like Rejouir and Neura, showcasing its commitment to
          design excellence and creativity. With a diverse portfolio including
          workshops such as DC101 - Adobe Photoshop, the club remains at the
          forefront of design innovation within the university community.
          Explore more about DC's{" "}
          <a href="/#units" className="underline">
            units
          </a>{" "}
          and their{" "}
          <a href="/#works" className="underline">
            works
          </a>
          .
        </h4>
      </div>
    </div>
  );
};

export default About;
