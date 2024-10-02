import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface IProject {
  title: string;
  location: string;
  district: string;
  estimatedCost: string;
  excerpt: string;
  content: string;
  id: number;
}

interface IDialogMap {
  project: IProject;
  setActiveTab: (activeTab: string) => void;
}

function DialogMap({ project, setActiveTab }: IDialogMap) {
  return (
    <Card className="w-full  max-h-full h-auto bg-[#E4E4E4] border-0 rounded-tl-none rounded-bl-none">
      <CardHeader className="flex flex-col justify-evenly text-lg pt-12">
        <div className="border-b-2  border-b-slate-400 w-full pb-5">
          <p className="opacity-60 font-bold ">Status</p>
          <p className="text-green-700">Selected for voting</p>
        </div>
        <div className="border-b-2 border-b-slate-400 w-full py-5">
          <p className="opacity-60 font-bold">Estimated Cost</p>
          <p className="font-bold text-2xl">{project.estimatedCost}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-start gap-12">
            <p className="opacity-60 font-bold">District</p>
            <p className="font-bold">{project.district}</p>
          </div>
          <div className="relative w-full">
            <Image
              quality={100}
              height={100}
              width={500}
              src="/images/map.jpg"
              alt="map-project"
              className="w-full h-full object-cover"
            />
            <Button
              onClick={() => setActiveTab("map")}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              See on the Map
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default DialogMap;
