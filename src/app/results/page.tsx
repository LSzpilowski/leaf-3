import { Item } from "@radix-ui/react-dropdown-menu";
import { mockProjects } from "../mockData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const areas = ["South-East", "South-West", "North-East", "North-West"];

function Results() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5 bg-[#E4E4E4] mt-40 ">
      <div className="flex flex-col gap-10 w-2/3">
        {areas.map((area, index) => {
          return (
            <div key={index}>
              <p className="w-full text-xl font-bold text-center pt-2">
                {area}
              </p>
              <Table>
                <TableHeader className="w-full">
                  <TableRow>
                    <TableHead className="w-[100px]">Place</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">
                      Amount of Points
                    </TableHead>
                    <TableHead className="text-right">Podgląd</TableHead>
                  </TableRow>
                </TableHeader>
                {mockProjects
                  .filter((project) => project.district === area)
                  .map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.estimatedCost}</TableCell>
                      <TableCell className="text-right">points</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                  ))}
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
