"use client";

import dynamic from "next/dynamic";
import { mockProjects } from "../mockData";

const Map = dynamic(() => import("./map"), {
  ssr: false,
});

const projects = mockProjects.map((project) => ({
  lat: project.lat,
  lng: project.lng,
  title: project.title,
  excerpt: project.excerpt,
  id: project.id,
  location: project.location,
  district: project.district,
  author: project.author,
  dateSubmitted: project.dateSubmitted,
  category: project.category,
  content: project.content,
  estimatedCost: project.estimatedCost,
  benefits: project.benefits,
}));

function ImplementationMap() {
  return (
    <div className="h-[90vh] w-full flex flex-col items-center bg-[rgb(228,228,228)] ">
      <div className="flex flex-row w-full border-0 h-full">
        <div className="w-1/2 h-full border-2 rounded-xl">
          <Map projects={projects} />
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

export default ImplementationMap;
