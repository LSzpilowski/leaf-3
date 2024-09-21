"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ResultsTable from "./resultsTable";
import { FaListUl } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";

const areas = ["South-East", "South-West", "North-East", "North-West"];
interface ISwitchButtons {
  title: string;
  icon: JSX.Element;
}
const switchButtons: ISwitchButtons[] = [
  {
    title: "Results",
    icon: <FaListUl />,
  },
  {
    title: "Statistics",
    icon: <IoBarChartSharp />,
  },
];

function Results() {
  const [activeTab, setActiveTab] = useState("Results");
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5 bg-[#E4E4E4] pt-28 pb-10 ">
      <Card className="flex flex-col gap-10 w-2/3 p-10 ">
        <div className="w-full flex flex-row">
          {switchButtons.map((item, index) => (
            <div
              key={index}
              className={`w-1/2 text-center ${
                activeTab === item.title
                  ? "bg-blue-500 text-white"
                  : "bg-[#E4E4E4] hover:opacity-80"
              }  text-2xl  py-3 border-0 ${
                item.title === "Results" ? "rounded-l-md" : "rounded-r-md"
              } hover:cursor-pointer`}
              onClick={() => setActiveTab(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {activeTab === "Results" && <ResultsTable areas={areas} />}
        {activeTab === "Statistics" && <div>Statystki</div>}
      </Card>
    </div>
  );
}

export default Results;
