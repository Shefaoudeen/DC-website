import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-black via-slate-700 to-black mt-4">
      <div
        className="flex justify-center
   h-[20vh] items-center"
      >
        <div className="text-white w-[60%] h-[50%] flex justify-center items-center flex-col">
          <h1 className="text-lg font-semibold">DEVELOPED BY: </h1>
          <h1 className="text-2xl font-bold">SHEFAOUDEEN Z</h1>
          <div className="w-[50%] flex justify-around text-3xl mt-4 max-sm:w-full ">
            <a
              href="https://www.instagram.com/shefaoudeen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Shefaoudeen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
