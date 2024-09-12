import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

interface IProject {
  title: string;
  location: string;
  district: string;
  estimatedCost: string;
  excerpt: string;
  content: string;
  votes: number;
}

interface IDialogMap {
  project: IProject;
  index: number;
}

function DialogMap({ project, index }: IDialogMap) {
  return (
    <Card className="w-1/3 h-2/3 bg-[#E4E4E4]  rounded-tl-none rounded-bl-none">
      <CardHeader className=" flex flex-col justify-evenly text-lg">
        <div className="border-2 border-b-slate-400 w-full pb-5">
          <p className="opacity-60 font-bold ">Status</p>
          <p className="text-green-700">Selected for voting</p>
        </div>
        <div className="border-2 border-b-slate-400 w-full py-5">
          <p className="opacity-60 font-bold">Estimated Cost</p>
          <p className="font-bold text-2xl">{project.estimatedCost}</p>
        </div>
        <div>
          <p className="opacity-60 font-bold py-5">District</p>
          <p className="font-bold">{project.district}</p>
          <p>MAP</p>
        </div>
      </CardHeader>
    </Card>
  );
}

export default DialogMap;
