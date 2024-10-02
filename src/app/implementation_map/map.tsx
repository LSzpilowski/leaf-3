"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { setActiveTab } from "@/redux/tabSlice";
import { RootState } from "@/redux/configureStore";
import L from "leaflet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import DialogProject from "../projects/dialogCard/dialogProject";
import DialogMap from "../projects/dialogCard/dialogMap";

const markerIcon = new L.Icon({
  iconUrl: "/images/marker.jpg",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

interface IMap {
  projects: {
    lat: number;
    lng: number;
    title: string;
    excerpt: string;
    id: number;
    location: string;
    district: string;
    author: string;
    dateSubmitted: string;
    category: string;
    content: string;
    estimatedCost: string;
    benefits: string[];
  }[];
}

const Map = ({ projects }: IMap) => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state: RootState) => state.tab.activeTab);

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openDialog = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  const projectToDisplay = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <>
      <MapContainer
        center={[55.950122, -3.193555]}
        zoom={12}
        style={{
          height: "inherit",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map((project, index) => (
          <Marker
            key={index}
            position={[project.lat, project.lng]}
            icon={markerIcon}
          >
            <Popup className="custom-popup">
              <div className="flex flex-col gap-1">
                <strong>
                  {project.id}. {project.title}
                </strong>
                {project.excerpt}
              </div>
              <div
                className="w-1/3 flex flex-row gap-2 items-center justify-center mt-2 p-2 bg-blue-500 rounded-lg h-5 text-white hover:cursor-pointer"
                onClick={() => openDialog(project.id)}
              >
                <p>View</p>
                <IoIosArrowDroprightCircle />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedProject !== null && (
        <Dialog open={true} onOpenChange={closeDialog}>
          <DialogContent className="flex flex-row w-full h-screen gap-0  px-48 bg-transparent border-none rounded-none z-[9999]">
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            {projectToDisplay && (
              <div className="w-2/3">
                <DialogProject
                  project={projectToDisplay}
                  index={selectedProject}
                  activeTab={activeTab}
                  setActiveTab={(tab: string) => dispatch(setActiveTab(tab))}
                />
              </div>
            )}
            {projectToDisplay && (
              <div className="w-1/3">
                <DialogMap
                  project={projectToDisplay}
                  setActiveTab={(tab: string) => dispatch(setActiveTab(tab))}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Map;
