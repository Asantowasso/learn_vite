import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="src/assets/waterCliffs.jpg"
        alt="An image of a body of water surrounded by foliage and sheer rock"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <h1>I'm Aaron Santowasso, Welcome to my site!</h1>
        <h2>
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
            style={{ fontSize: "1em", display: "inline-block", paddingLeft: '5px' }}
            repeat={Infinity}
          />
        </h2>
      </div>
    </div>
  );
};

export default Main;
