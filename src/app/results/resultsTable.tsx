import { mockProjects } from "../mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogProject from "../projects/dialogCard/dialogProject";
import DialogMap from "../projects/dialogCard/dialogMap";

interface IResultsTable {
  areas: string[];
}

function ResultsTable({ areas }: IResultsTable) {
  return (
    <div className="flex flex-col gap-10 w-full  ">
      {areas.map((area, index) => {
        return (
          <div key={index}>
            <p className="w-full text-xl font-bold text-center py-5 bg-[#E4E4E4]">
              Area no. {index + 1} - {area}
            </p>
            <Table>
              <TableHeader className="w-full">
                <TableRow className="hover:bg-white">
                  <TableHead className="w-[100px]">Place</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-left">Cost</TableHead>
                  <TableHead className="text-center">Number of Votes</TableHead>
                  <TableHead className="text-right">Preview</TableHead>
                </TableRow>
              </TableHeader>
              {mockProjects
                .filter((project) => project.district === area)
                .map((item, index) => (
                  <Dialog key={index}>
                    <TableBody>
                      <TableRow
                        className={`font-medium ${
                          index === 0 ? "bg-blue-500 hover:bg-[blue-500]" : null
                        }`}
                      >
                        <TableCell className="font-medium">
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <DialogTrigger>{item.title}</DialogTrigger>
                        </TableCell>
                        <TableCell className="text-left">
                          {item.estimatedCost}
                        </TableCell>
                        <TableCell className="text-center">Votes</TableCell>
                        <TableCell className="text-right">
                          <DialogTrigger>
                            <div className="flex flex-row gap-2 items-center justify-end m-0 p-0">
                              <p>View</p>
                              <IoIosArrowDroprightCircle />
                            </div>
                          </DialogTrigger>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <DialogContent className="flex flex-row w-full h-screen gap-0  px-48 bg-transparent  border-none rounded-none ">
                      <DialogProject project={item} index={index} />
                      <DialogMap project={item} index={index} />
                    </DialogContent>
                  </Dialog>
                ))}
            </Table>
          </div>
        );
      })}
    </div>
  );
}

export default ResultsTable;
