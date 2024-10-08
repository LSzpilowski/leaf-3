"use client";

import { useState } from "react";
import { mockProjects } from "../mockData";
import GenBgImage from "../components/utils/genBgImage";
import dynamic from "next/dynamic";

const FilterProjects = dynamic(() => import("./project/filterProjects"), {
  ssr: false,
});

const ProjectList = dynamic(() => import("./project/projectList"), {
  ssr: false,
});

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const [selectedZone, setSelectedZone] = useState("All");
  const [projectId, setProjectId] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleZoneChange = (zone: string) => {
    setSelectedZone(zone);
    setCurrentPage(1);
    filterProjects(zone, projectId, projectName);
  };

  const handleIdChange = (id: string) => {
    setProjectId(id);
    setCurrentPage(1);
    filterProjects(selectedZone, id, projectName);
  };

  const handleNameChange = (name: string) => {
    setProjectName(name);
    setCurrentPage(1);
    filterProjects(selectedZone, projectId, name);
  };

  const filterProjects = (zone: string, id: string, name: string) => {
    let filtered = mockProjects;

    if (zone !== "All") {
      filtered = filtered.filter((project) => project.district === zone);
    }

    if (id.trim() !== "") {
      filtered = filtered.filter((project) =>
        project.id.toString().includes(id)
      );
    }

    if (name.trim() !== "") {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(name.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[#E4E4E4] ">
      <GenBgImage
        src="/images/pkpark.png"
        title="Projects"
        desc="Submitted to Edinburgh Citizens Budget"
      />
      <div className="flex flex-row justify-between w-3/4 min-h-[65vh] ">
        <div className="w-1/3 text-center p-5">
          <FilterProjects
            selectedZone={selectedZone}
            onZoneChange={handleZoneChange}
            onIdChange={handleIdChange}
            onNameChange={handleNameChange}
          />
        </div>
        <div className="w-2/3 p-5 h-full ">
          <ProjectList
            filteredProjects={filteredProjects}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
