"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ResultsTable from "./resultsTable";
import { FaListUl } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import StatisticsTable from "./statisticsTable";
import GenBgImage from "../components/utils/genBgImage";

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
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)] pb-10 ">
      <GenBgImage src="/images/cheer.jpg" title="Results" />
      <Card className="flex flex-col gap-10 w-2/3 p-10 ">
        <div className="w-full flex flex-row">
          {switchButtons.map((item, index) => (
            <div
              key={index}
              className={`w-1/2 flex flex-row  justify-center items-center gap-2 ${
                activeTab === item.title
                  ? "bg-blue-500 text-white"
                  : "bg-[#cfcece] opacity-80 hover:opacity-100"
              }  text-2xl  py-3 border-0 ${
                item.title === "Results" ? "rounded-l-md" : "rounded-r-md"
              } hover:cursor-pointer`}
              onClick={() => setActiveTab(item.title)}
            >
              {item.icon} {item.title}
            </div>
          ))}
        </div>
        {activeTab === "Results" && <ResultsTable areas={areas} />}
        {activeTab === "Statistics" && <StatisticsTable />}
      </Card>
    </div>
  );
}

export default Results;
