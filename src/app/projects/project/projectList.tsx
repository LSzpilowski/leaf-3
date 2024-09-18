import ProjectCard from "./projectCard";
import { IMockProjects } from "@/app/mockData";
import CustomPagination from "@/app/components/utils/customPagination";

const areas = ["South-East", "South-West", "North-East", "North-West"];

interface IProjectList {
  filteredProjects: IMockProjects[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

function ProjectsList({
  filteredProjects,
  currentPage,
  setCurrentPage,
}: IProjectList) {
  const rowsPerPage = 10;

  const projectsInAllAreas = areas
    .map((area) =>
      filteredProjects.filter((project) => project.district === area)
    )
    .flat();

  const totalPages = Math.ceil(projectsInAllAreas.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(
    startIndex + rowsPerPage,
    projectsInAllAreas.length
  );

  return (
    <div className="flex flex-col gap-5 items-center min-h-[60vh] justify-between">
      {projectsInAllAreas.slice(startIndex, endIndex).map((project, index) => (
        <ProjectCard
          area={project.district}
          index={startIndex + index}
          project={project}
          key={startIndex + index}
        />
      ))}
      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default ProjectsList;
