"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { mockProjects } from "../mockData";
import Image from "next/image";
import ProjectsList from "./project/projectList";
import FilterProjects from "./project/filterProjects";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const [selectedZone, setSelectedZone] = useState("All");
  const [projectId, setProjectId] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);

  const updateQueryParams = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    window.history.pushState({}, "", url.toString());
    setCurrentPage(page);
  };

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
      console.log(filtered);
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
      console.log(filtered);
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[#E4E4E4] ">
      <div className="relative w-full h-[28vh]">
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
          <ProjectsList
            filteredProjects={filteredProjects}
            currentPage={currentPage}
            setCurrentPage={updateQueryParams}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
