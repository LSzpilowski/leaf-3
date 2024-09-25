import GenBgImage from "@/app/components/utils/genBgImage";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ISubsteps {
  substep: string;
}

interface IVotingSteps {
  step: string;
  substeps?: ISubsteps[];
}

const votingSteps: IVotingSteps[] = [
  {
    step: "Every resident of Edinburgh has the right to vote.",
  },
  {
    step: "Residents can vote electronically on the ecb.edinburgh.ukwebsite for the projects of their choice:",
    substeps: [
      { substep: "directly;" },
      { substep: "at consultation points organised throughout the city." },
    ],
  },
  {
    step: "Each resident of Edinburgh can:",
    substeps: [
      {
        substep:
          "distribute 5 points for a project or projects, distributing a smaller number of points does not invalidate the vote. Points cannot be divided into fractions;",
      },
      {
        substep:
          "vote once for a project from your area of residence*, providing your name and surname, address of residence, National Insurence Number and characters required by the system.",
      },
    ],
  },
];

function Voting() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)] pb-10 ">
      <GenBgImage src="/images/budget.jpg" title="Voting" />
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] ">
        <Card className="w-2/3 ">
          <CardHeader className="flex flex-col  gap-10">
            <CardTitle>How to vote?</CardTitle>
            <p className="font-bold">
              From 10 to 24 June 2025 you can vote for projects for the
              Edinburgh Citizens Budget.
            </p>
            <p className="font-bold">
              Below are brief instructions on how to vote?
            </p>
            <ul className="flex flex-col gap-2">
              {votingSteps.map((item, index) => (
                <ul key={index} className="flex flex-col gap-2">
                  <li>
                    {index + 1}. {item.step}
                  </li>
                  {item.substeps ? (
                    <div className="pl-5">
                      {item.substeps.map((substep, index) => (
                        <li key={index}>
                          {index + 1}) {substep.substep}
                        </li>
                      ))}
                    </div>
                  ) : null}
                </ul>
              ))}
            </ul>
            <p>
              *The map of the division of Legnica into Areas is included in the
              Resolution on the principles of the Edinburgh Citizens Budget as a
              special form of social consultations.
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Voting;
