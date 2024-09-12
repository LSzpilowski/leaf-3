import mockProjects from "@/app/mockData";
import ProjectCard from "./projectCard";

const areas = ["South-East", "South-West", "North-East", "North-West"];

function ProjectsList() {
  return (
    <div className="flex flex-col gap-5">
      {areas.map((area, index) => {
        return (
          <div key={index} className="flex flex-col gap-5">
            {mockProjects
              .filter((project) => project.district === area)
              .map((project, index) => {
                return (
                  <ProjectCard
                    area={project.district}
                    index={index}
                    project={project}
                    key={index}
                  />
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
