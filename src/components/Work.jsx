import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2022,
    title: "Campus Technician, Compucom",
    duration: "to present",

    details:
      "Resolve software and hardware issues for clients. Assist new hires in obtaining and configuring the correct programs and tools. Keep up to date with the latest procedures to best serve customers.",
  },

  {
    year: 2022,
    title: "Marketing & Communications Intern, SOAR365",
    duration: "to May 2022",
    details:
      "Used print and digital resources to create a history of the organization. Synthesize information onto written material appropriate for the public that informs them about the organization. Coordinated with staff members both in person and remotely.",
  },

  {
    year: 2021,
    title: "IT Contractor, Strategic Systems",
    duration: "to May 2022",
    details:
      "Configure workstations at office locations according to client needs. Arrive on time to worksites and finish tasks in a timely manner.",
  },

  {
    year: 2020,
    title: "Communications Intern",
    duration: "to December 2020",
    details:
      "Research Virginia history topics to create material to educate the public using WordPress. Filmed and edited videos for social media. Met in person and remotely with staff members to plan the release of media and promotional material for in-person and online events.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#252525]">
      <h1 className="text-4xl font-bold text-center text-[white]">
        Work and Internships
      </h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
