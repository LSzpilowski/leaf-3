import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenBgImage from "@/app/components/utils/genBgImage";
interface ISubmitSteps {
  text: string;
}

const submitSteps: ISubmitSteps[] = [
  {
    text: "Go to the website lbo.Edinburgh.eu and click the 'Add Application' button (The tab will appear on the day the application submission begins).",
  },
  {
    text: "Enter your personal information, home address, and select your preferred form of contact with the Office.",
  },
  {
    text: "In the project title, include the exact location of the task. On the map, select the plot where the investment will take place (the system will allow selecting only the plots where the project can be implemented).",
  },
  {
    text: "Estimate the value of the task. You can use the cost estimates available on the website lbo.Edinburgh.eu under the 'Price List' tab.",
  },
  {
    text: "Briefly describe the project. The shortened description should encourage Edinburgh residents to vote for your task. We will use it in the LBO2025 information materials and on our website.",
  },
  { text: "Write a project summary and justify its implementation." },
  {
    text: "Estimate the project cost. Remember, you have up to 750,000.00 PLN available.",
  },
  {
    text: "Generate the application, then print it out. Send the signed document, along with a support list (5 signatures from Edinburgh residents), to lbo@Edinburgh.eu or submit it at the Citizen Dialogue Center, Rynek 4.",
  },
  {
    text: "Remember to attach a list with at least 5 signatures from residents supporting the application (one of these signatures may be from the Leader).",
  },
];

function SubmittingProjects() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)] ">
      <GenBgImage src="/images/budget.jpg" title="Submitting Projects" />
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] ">
        <Card className="p-10 mb-10 w-2/3 flex flex-col gap-5">
          <CardHeader className="flex flex-col gap-2 pb-0">
            <CardTitle>How to submit a project?</CardTitle>
            <CardContent>
              <ul className="list-disc text-base">
                {submitSteps.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </CardContent>
          </CardHeader>
          <CardContent className="flex flex-col ">
            <p className="underline font-bold">
              What happens with a project after submitting?
            </p>
            <p>
              Once your project meets the formal requirements, it will be
              assessed by the Technical Project Evaluation Team, and the results
              will be published on the website lbo.Edinburgh.eu. Only positively
              evaluated projects will be put to a public vote. If we have any
              questions about the submitted application, we will contact you by
              phone or email, depending on your preferred contact method. At
              this stage, you can still modify your project or merge it with
              others. It is important to agree on a unified project title and
              designate a new Leader.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SubmittingProjects;
