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
  lng: number;
  lat: number;
}

interface IDialogProject {
  project: IProject;
  index: number;
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
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
function DialogProject({
  project,
  index,
  activeTab,
  setActiveTab,
}: IDialogProject) {
  return (
    <Card className="w-full h-full border-0 rounded-tr-none gap-10 ">
      <Card className="p-6 h-full border-0  rounded-tr-none ">
        <p className="text-2xl font-semibold ">
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
        <div className="flex flex-col pt-10 ">
          {activeTab === "project" && (
            <ActiveProject project={project} index={index} />
          )}
          {activeTab === "map" && <ActiveMap project={project} index={index} />}
        </div>
      </Card>
    </Card>
  );
}

export default DialogProject;
