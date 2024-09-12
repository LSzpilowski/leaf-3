import { Button } from "@/components/ui/button";
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
    name: "Number of the project",
    id: "projectNumber",
  },
  {
    name: "Name of the project",
    id: "projectName",
  },
];

const formOptions = [
  "All",
  "South-East",
  "South-West",
  "North-East",
  "North-West",
];

function FilterProjects() {
  return (
    <Card className="sticky top-28  text-left pt-3 px-6 pb-6 hover:shadow-2xl transition-all transform duration-300 ease-in-out ">
      <form className="flex flex-col justify-center items-center gap-5 w-full">
        {formInputs.map((input, index) => {
          return (
            <div key={index} className="w-full flex flex-col gap-2">
              <Label htmlFor={input.id} className="text-base font-semibold">
                {input.name}
              </Label>
              <Input type="text" id={input.id} className="w-full h-7" />
            </div>
          );
        })}
        <div className="w-full flex flex-col gap-2">
          <Label
            htmlFor="projectZone"
            className="w-full text-base font-semibold"
          >
            Zone
          </Label>
          <Select name="projectZone" defaultValue="All">
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
        <Button type="submit" className="text-white bg-blue-700 w-1/3 ">
          Search
        </Button>
      </form>
    </Card>
  );
}

export default FilterProjects;
