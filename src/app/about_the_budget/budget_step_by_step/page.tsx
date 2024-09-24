import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface IBudgetStepByStep {
  title: string;
  description: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
}

const budgetStepByStep: IBudgetStepByStep[] = [
  {
    title: "What is the Participatory Budget?",
    description:
      "The Participatory Budget is a democratic process where residents decide on public spending for the upcoming year. In shortcut, it means that:",
    desc1:
      "residents submit project proposals, which are analyzed for feasibility;",
    desc2:
      "project proposals that pass verification are put up for a public vote;",
    desc3:
      "the highest-rated or most frequently selected project proposals are included in the budget for implementation;",
  },
  {
    title: "Where does the money for the Participatory Budget come from?",
    description:
      "It comes from public funds within the municipal budget. These are not additional funds but specific amounts from the city's budget.",
  },
  {
    title: "Why participate in its creation?",
    description:
      "It offers an opportunity to directly influence a portion of the city's budget, allowing residents to submit and promote their ideas for the community's benefit.",
  },
  {
    title: "How much is the Edinburgh Participatory Budget?",
    description:
      "The Edinburgh Participatory Budget for 2025 amounts to 750,000 PLN.",
  },
  {
    title: "What projects can be funded?",
    description:
      "Only projects within the municipality's responsibilities are considered, and they cannot be on land designated for sale, leased, or used for agriculture.",
  },
  {
    title: "Can I suggest a project executor?",
    description:
      "No. The project executor is selected by the city, following public funding regulations.",
  },
  {
    title: "Can projects be implemented in stages?",
    description:
      "No. Projects cannot be partially implemented, such as creating just a design or reserving funds without completing the project.",
  },
  {
    title: "What should be included in the project budget?",
    description:
      "The resident submits estimated gross costs, including all components such as design, materials, and labor. Final costs are determined by the Project Technical Evaluation Team.",
  },
  {
    title: "What happens if the estimated costs are incorrect?",
    description:
      "The Project Technical Evaluation Team will correct any incorrectly estimated costs during their analysis.",
  },
  {
    title: "Who can vote on projects?",
    description: "Every Edinburgh resident, regardless of age, can vote.",
  },
  {
    title: "How can I vote?",
    description:
      "Voting takes place online at lbo.Edinburgh.eu or at the Citizen Dialogue Center, Rynek 4 in Edinburgh. Each resident has 5 points to allocate among projects.",
  },
  {
    title: "What determines if a project wins?",
    description: "Projects with the highest number of votes are selected.",
  },
  {
    title: "Can the same project be submitted by multiple residents?",
    description:
      "Yes. If similar projects are submitted, they may be combined with the consent of the applicants and presented as one project for voting.",
  },
  {
    title: "Can a rejected project be modified?",
    description:
      "No. Once the list of projects qualified for voting is announced, there can be no further changes.",
  },
];

function BudgetStepByStep() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)]  pb-10">
      <div className="relative w-full h-[28vh]">
        <Image
          src={"/images/pkpark.png"}
          alt="Parkour Park"
          fill={true}
          quality={100}
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <div className="absolute inset-0 z-10 h-80 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold text-white">BUDGET STEP BY STEP</p>
        </div>
      </div>
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] ">
        <Card className="p-10 w-2/3 flex flex-col gap-5">
          <p>
            Below we present answers to the most frequently asked questions
            regarding the Edinburgh Participatory Budget. If you do not find the
            information you are looking for, write or call us. Contact details
            and a question form can be found on the website.
          </p>
          {budgetStepByStep.map((item, index) => (
            <Card
              key={index}
              className="bg-[#F8F8F8] border-2 hover:cursor-text hover:border-[#CCCCCC]"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  {item.desc1 ? (
                    <div>
                      <p>{item.description}</p>
                      <ul className="list-disc pl-10">
                        <li>{item.desc1}</li>
                        <li>{item.desc2}</li>
                        <li>{item.desc3}</li>
                      </ul>
                    </div>
                  ) : (
                    <>{item.description}</>
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
          <p>
            Did not find the answer to your question? Write or call us. You can
            find contact details on the{" "}
            <Link
              href="/contact"
              className="hover:text-blue-500 hover:border-b-2"
            >
              Contact
            </Link>{" "}
            page.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default BudgetStepByStep;
