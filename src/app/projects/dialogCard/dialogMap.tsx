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
    <Card className="w-1/3 h-3/4 bg-[#E4E4E4]  rounded-tl-none rounded-bl-none">
      <CardHeader className=" flex flex-col justify-evenly text-lg">
        <div className="border-2 border-b-slate-400 w-full pb-5">
          <p className="opacity-60 font-bold ">Status</p>
          <p className="text-green-700">Selected for voting</p>
        </div>
        <div className="border-2 border-b-slate-400 w-full py-5">
          <p className="opacity-60 font-bold">Estimated Cost</p>
          <p className="font-bold text-2xl">{project.estimatedCost}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-start gap-12">
            <p className="opacity-60 font-bold">District</p>
            <p className="font-bold">{project.district}</p>
          </div>
          <div className="relative bg-black">
            <Image
              quality={100}
              height={100}
              width={400}
              src="/images/map.jpg"
              alt="map-project"
            />
            <Button
              onClick={() => setActiveTab("map")}
              className="absolute top-[45%] left-[30%]"
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
