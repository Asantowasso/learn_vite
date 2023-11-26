import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaStackOverflow, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="src/assets/waterCliffs.jpg"
        alt="An image of a body of water surrounded by foliage and sheer rock"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <div className="max-w-[700px]  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Aaron Santowasso
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Writer",
                2000,
                "IT Professional",
                2000,
                "Diligent Worker",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaStackOverflow className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
