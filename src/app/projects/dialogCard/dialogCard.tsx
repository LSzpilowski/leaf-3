"use client";

import { IoIosArrowForward } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogProject from "./dialogProject";
import DialogMap from "./dialogMap";

interface IProject {
  title: string;
  location: string;
  district: string;
  estimatedCost: string;
  excerpt: string;
  content: string;
  id: number;
}

interface IDialogCard {
  project: IProject;
  index: number;
}

function DialogCard({ project, index }: IDialogCard) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row items-center h-7 bg-blue-700 hover:bg-blue-600 text-white px-3 border rounded-lg">
          <p>See details</p>
          <IoIosArrowForward className="ml-2" />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-row w-full h-screen gap-0 py-10 px-48 bg-transparent  border-none rounded-none ">
        <DialogProject project={project} index={index} />
        <DialogMap project={project} index={index} />
      </DialogContent>
    </Dialog>
  );
}

export default DialogCard;
