import ProjectCard from "./projectCard";

import { IMockProjects } from "@/app/mockData";
const areas = ["South-East", "South-West", "North-East", "North-West"];

interface IProjectList {
  filteredProjects: IMockProjects[];
}

function ProjectsList({ filteredProjects }: IProjectList) {
  let globalIndex = -1;

  return (
    <div className="flex flex-col gap-5">
      {areas.map((area) => {
        const projectsInArea = filteredProjects.filter(
          (project) => project.district === area
        );

        if (projectsInArea.length > 0) {
          return (
            <div key={area} className="flex flex-col gap-5">
              {projectsInArea.map((project) => {
                globalIndex++;
                return (
                  <ProjectCard
                    area={project.district}
                    index={globalIndex}
                    project={project}
                    key={globalIndex}
                  />
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProjectsList;
