import React from "react";
import "../fonts.css";

const About = () => {
  return (
    <div className="bg-[#005cef] w-full min-h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-center w-[75%] max-sm:w-[90%]  z-20 max-md:text-xl pt-10 px-5">
        {/* color change */}
        <h1 className="text-[#b3c8e9] poppins-semibold text-7xl max-md:text-4xl pb-10">
          Who we are?
        </h1>
        <h1 className="text-[white] poppins-semibold text-4xl leading-tight pt-5 max-md:text-2xl text-justify mdpy-20">
          Established in 2019 by visionary student founders Rupam Chirom, Najmu
          Sehar Wani, Hemachandar R and Ram Vignesh B under the guidance of
          Faculty Dr. Shanthi Simon, Puducherry Technological University's{" "}
          <a
            className="text-"
            href="https://ptuniv.edu.in/4c/design-club"
            target="_blank"
          >
            Design Club
          </a>{" "}
          is a beacon of creativity and innovation. Led by Dr. K. Sathiyamurthy,
          the club shapes the university's identity through dynamic design
          initiatives.
        </h1>
        <h4 className="text-[white] poppins-extrathin text-justify py-5 max-md:text-lg">
          Since its inception, the Design Club has been a catalyst for
          innovation, spearheading numerous impactful projects across various
          domains. Notable achievements include the launch of the university's
          website, PTU Logo, and PTU Official 2024 Calendar. The club has also
          organized flagship events like Rejouir and Neura, reflecting its
          dedication to excellence in design and creativity. Moreover, the club
          has conducted workshops such as DC101 - Adobe Photoshop, engaging and
          empowering students with valuable skills. With a diverse portfolio
          that includes the creation of the PTU Official 2024 Calendar and
          workshops such as DC101 - Adobe Photoshop, the club remains at the
          forefront of design innovation within the university community.
          Explore more about our endeavors and achievements at our{" "}
          <a
            className="underline"
            href="https://ptuniv.edu.in/4c/design-club"
            target="_blank"
          >
            university website.
          </a>
        </h4>
      </div>
    </div>
  );
};

export default About;
