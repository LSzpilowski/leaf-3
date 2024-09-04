import Image from "next/image";
import React from "react";
import FilterProjects from "./filterProjects";
import ProjectsList from "./projectList";

function Projects() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="relative w-full h-64">
        <Image
          src={"/images/pkpark.png"}
          alt="Parkour Park"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <div className="absolute inset-0 z-10 h-80 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold text-white">PROJECTS</p>
          <p className="text-xl text-white">
            Submitted to Edinburgh Citizen{"'"}s Budget
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-3/4 bg-orange-200">
        <div className="sticky top-20 bg-pink-200 w-1/3 text-center">
          <FilterProjects />
        </div>
        <div className="bg-yellow-50 w-2/3 ">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default Projects;
