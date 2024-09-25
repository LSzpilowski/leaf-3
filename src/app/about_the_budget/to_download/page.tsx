import GenBgImage from "@/app/components/utils/genBgImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";
import { GrDownload } from "react-icons/gr";

interface sectionItem {
  item?: string;
}
interface ISection {
  title: string;
  sectionItems?: sectionItem[];
}

const downloadSection: ISection[] = [
  {
    title: "Legal regulations regarding the Edinburgh Citizens' Budget",
    sectionItems: [
      {
        item: "Resolution on the principles of ECV as a special form of social consultation",
      },
      { item: "Ordinance on the appointment" },
      {
        item: "Ordinance on the principles and procedure for creating and implementing ECB 2025",
      },
      { item: "Ordinance amending" },
    ],
  },
  {
    title: "Support list for the Edinburgh Citizens' Budget project",
    sectionItems: [{ item: "Support list.pdf" }],
  },
  {
    title: "Map and division of ECB areas",
    sectionItems: [{ item: "Area map.pdf" }, { item: "Boundary layout.pdf" }],
  },
  {
    title: "Poster for Leaders - Voting Promotion",
    sectionItems: [{ item: "ECB 2025 Poster.pdf" }],
  },
];

function ToDownload() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)]  pb-10">
      <GenBgImage src="/images/budget.jpg" title="To Download" />
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] ">
        <Card className="p-10 flex flex-col gap-6">
          {downloadSection.map((section, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col gap-5">
                <CardTitle>{section.title}</CardTitle>
                <CardContent className="flex flex-col gap-5">
                  {section.sectionItems?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between items-center bg-[#EEEEEE] hover:bg-[#DDDDDD] py-2 pl-1 pr-3 "
                    >
                      <div className="flex flex-row items-center gap-2 p-3">
                        <FaRegFilePdf className="size-5" />
                        {item.item}
                      </div>
                      <Button className="flex flex-row gap-2 items-center hover:cursor-pointer ">
                        <GrDownload className="size-5" />
                        <p>Download PDF file</p>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default ToDownload;
