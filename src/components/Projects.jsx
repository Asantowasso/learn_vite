import React from "react";
import Projectitem from "./Projectitem";
import Vet from "../assets/Vet.jpg";
import Solar from "../assets/Solarsystem.jpeg";
import MET from "../assets/MET.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Sample text sample text sample text sample text sample text sample text
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={Vet} title="Pet-to-Vet" />
        <Projectitem img={Solar} title="Solar System" />
        <Projectitem img={MET} title="MET Guide" />
      </div>
    </div>
  );
};

export default Projects;
