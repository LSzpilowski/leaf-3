"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PiMapPinAreaThin } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import ActiveMap from "./activeMap";
import ActiveProject from "./activeProject";

interface IProject {
  title?: string;
  location?: string;
  district?: string;
  estimatedCost?: string;
  excerpt?: string;
  content?: string;
  id?: number;
}

interface IDialogProject {
  project: IProject;
  index: number;
}
interface INavButtons {
  title: string;
  icon: JSX.Element;
  value: string;
}

const navButtons: INavButtons[] = [
  {
    title: "Project",
    icon: <CiViewList />,
    value: "project",
  },
  {
    title: "Map",
    icon: <PiMapPinAreaThin />,
    value: "map",
  },
];
function DialogProject({ project, index }: IDialogProject) {
  console.log("DialogProject props:", project);
  const [activeTab, setActiveTab] = useState("project");
  return (
    <Card className="w-2/3 min-h-full border-none rounded-tr-none gap-10 ">
      <Card className="p-6 min-h-full border-none">
        <p className="text-2xl font-semibold">
          {" "}
          {index + 1}. {project.title}
        </p>
        <div className="flex flex-row justify-start gap-5 border-b-2 mt-10 text-lg z-50">
          {navButtons.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row justify-center items-center gap-1 border-b-2 hover:cursor-pointer ${
                  activeTab === item.value
                    ? "border-black"
                    : "border-transparent hover:border-blue-700 "
                }`}
                onClick={() => setActiveTab(item.value)}
              >
                {item.icon} {item.title}
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex flex-col gap-10 min-h-[70vh] ">
          {activeTab === "project" && (
            <ActiveProject project={project} index={index} />
          )}
          {activeTab === "map" && <ActiveMap project={project} index={index} />}
        </div>
      </Card>
      <div className="h-10 bg-[##2E2E2E] border-none"></div>
    </Card>
  );
}

export default DialogProject;
