"use client";

import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/redux/tabSlice";
import { RootState } from "@/redux/configureStore";
import { IoIosArrowForward } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogProject from "./dialogProject";
import DialogMap from "./dialogMap";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface IProject {
  title: string;
  location: string;
  district: string;
  estimatedCost: string;
  excerpt: string;
  content: string;
  id: number;
  lng: number;
  lat: number;
}

interface IDialogCard {
  project: IProject;
  index: number;
}

function DialogCard({ project, index }: IDialogCard) {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row items-center h-7 bg-blue-700 hover:bg-blue-600 text-white px-3 border rounded-lg">
          <p>See details</p>
          <IoIosArrowForward className="ml-2" />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-row w-full h-screen gap-0  px-48 bg-transparent  border-none rounded-none z-[9999]">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <DialogProject
          project={project}
          index={index}
          activeTab={activeTab}
          setActiveTab={(tab: string) => dispatch(setActiveTab(tab))}
        />
        <DialogMap
          project={project}
          setActiveTab={(tab: string) => dispatch(setActiveTab(tab))}
        />
      </DialogContent>
    </Dialog>
  );
}

export default DialogCard;
