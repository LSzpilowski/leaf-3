import Image from "next/image";
import ProjectsList from "./project/projectList";
import FilterProjects from "./project/filterProjects";

function Projects() {
  return (
    <div className="w-full flex flex-col items-center gap-10 bg-[#E4E4E4]">
      <div className="relative w-full h-64">
        <Image
          src={"/images/pkpark.png"}
          alt="Parkour Park"
          fill={true}
          quality={100}
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <div className="absolute inset-0 z-10 h-80 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold text-white">PROJECTS</p>
          <p className="text-xl text-white">
            Submitted to Edinburgh Citizen{"'"}s Budget
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-3/4">
        <div className="sticky top-44 w-1/3 text-center p-5">
          <FilterProjects />
        </div>
        <div className="w-2/3 p-5">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default Projects;
