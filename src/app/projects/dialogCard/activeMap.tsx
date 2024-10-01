import React from "react";

interface IProject {
  title?: string;
  location?: string;
  district?: string;
  estimatedCost?: string;
  excerpt?: string;
  content?: string;
  id?: number;
}

interface IActiveMap {
  project: IProject;
  index: number;
}

function ActiveMap({ project, index }: IActiveMap) {
  return (
    <div className="h-full">
      <h3>Map View</h3>
      <p>Here is the map view for {project.title}.</p>
    </div>
  );
}

export default ActiveMap;
