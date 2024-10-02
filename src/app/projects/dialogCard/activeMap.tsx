"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface IProject {
  title?: string;
  location?: string;
  district?: string;
  estimatedCost?: string;
  excerpt?: string;
  content?: string;
  id?: number;
  lng: number;
  lat: number;
}

interface IActiveMap {
  project: IProject;
  index: number;
}

const markerIcon = new L.Icon({
  iconUrl: "/images/marker.jpg",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

function ActiveMap({ project, index }: IActiveMap) {
  return (
    <div className="w-full md:h-[60vh] flex flex-col justify-center ">
      <MapContainer
        center={[project.lat, project.lng]}
        zoom={12}
        style={{
          height: "100%",
          width: "100%",
        }}
        className=""
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          key={index}
          position={[project.lat, project.lng]}
          icon={markerIcon}
        >
          <Popup className="custom-popup">
            <div className="flex flex-col gap-1">
              <strong>{project.title}</strong>
              {project.excerpt}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ActiveMap;
