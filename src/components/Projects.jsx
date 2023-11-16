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
        A selection of projects showcasing my web development skills
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={Vet} desc="Users can create a profile for thier pet to be viewed by a veterinarian" title="Pet-to-Vet" url="https://github.com/Asantowasso/pet-to-vet" deployed="https://damp-forest-39395.herokuapp.com/login"/>

        <Projectitem img={Solar} desc="A showcase of earth's solar system and various attributes of the planets" title="Solar System" url="https://github.com/Asantowasso/planets-and-moons" deployed="https://asantowasso.github.io/planets-and-moons/" />

        <Projectitem img={MET} title="MET Guide"  />
        
      </div>
    </div>
  );
};

export default Projects;
