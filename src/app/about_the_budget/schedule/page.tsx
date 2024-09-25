import GenBgImage from "@/app/components/utils/genBgImage";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IScheduleSteps {
  title: string;
  description: string;
}

const scheduleSteps: IScheduleSteps[] = [
  {
    title: "Submitting Applications",
    description: "February 26, 2024 – March 11, 2024",
  },
  {
    title: "Formal Evaluation",
    description: "March 12, 2024 – March 13, 2024",
  },
  {
    title: "Technical Evaluation - Stage I",
    description: "March 14, 2024 – April 21, 2024",
  },
  {
    title: "Technical Evaluation - Stage II",
    description: "April 22, 2024 – May 12, 2024",
  },
  {
    title: "Appeals",
    description: "May 13, 2024 – June 2, 2024",
  },
  {
    title: "Promotional Campaign",
    description: "June 3, 2024 – June 9, 2024",
  },
  {
    title: "Voting",
    description: "June 10, 2024 – June 24, 2024",
  },
  {
    title: "Announcement of Results",
    description: "By June 27, 2024",
  },
  {
    title: "Evaluation",
    description: "September 1, 2024 – September 30, 2024",
  },
];

function Schedule() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)]  pb-10">
      <GenBgImage src="/images/budget.jpg" title="Schedule" />
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] ">
        <Card className="p-10 w-2/3 flex flex-col gap-5">
          {scheduleSteps.map((item, index) => (
            <Card
              key={index}
              className="bg-[#F8F8F8] border-2 hover:cursor-text hover:border-[#CCCCCC]"
            >
              <CardHeader>
                <CardTitle>
                  {index + 1}. {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Schedule;
