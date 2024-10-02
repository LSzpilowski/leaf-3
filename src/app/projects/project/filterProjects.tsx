"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formInputs = [
  {
    name: "Id of the project",
    id: "projectId",
    type: "number",
  },
  {
    name: "Name of the project",
    id: "projectName",
    type: "text",
  },
];

const formOptions = [
  "All",
  "South-East",
  "South-West",
  "North-East",
  "North-West",
];
interface IFIlterProjects {
  selectedZone: string;
  onZoneChange: (zone: string) => void;
  onIdChange: (id: string) => void;
  onNameChange: (name: string) => void;
}

function FilterProjects({
  selectedZone,
  onZoneChange,
  onIdChange,
  onNameChange,
}: IFIlterProjects) {
  const handleZoneChange = (zone: string) => {
    onZoneChange(zone);
  };

  return (
    <Card className="sticky top-28  text-left pt-3 px-6 pb-6 hover:shadow-2xl transition-all transform duration-300 ease-in-out ">
      <form className="flex flex-col justify-center items-center gap-5 w-full">
        {formInputs.map((input, index) => {
          return (
            <div key={index} className="w-full flex flex-col gap-2">
              <Label htmlFor={input.id} className="text-base font-semibold">
                {input.name}
              </Label>
              <Input
                onChange={(e) =>
                  input.id === "projectId"
                    ? onIdChange(e.target.value)
                    : onNameChange(e.target.value)
                }
                type={input.type}
                id={input.id}
                className="w-full h-full z-10"
              />
            </div>
          );
        })}
        <div className="w-full flex flex-col gap-2">
          <Label className="w-full text-base font-semibold">Zone</Label>
          <Select
            value={selectedZone}
            onValueChange={handleZoneChange}
            defaultValue="All"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {formOptions.map((option, index) => {
                  return (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>
    </Card>
  );
}

export default FilterProjects;
