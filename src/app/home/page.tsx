import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenBgImage from "../components/utils/genBgImage";

interface IHomeText {
  title: string;
  desc: string;
  subdescs?: string[];
}

const homeText: IHomeText[] = [
  {
    title: "Introduction to the Project:",
    desc: "Welcome to the Participatory Budget web application! This project is a replica inspired by Legnica Civic Budget (LBO) and has been created for educational and demonstrative purposes only. The main goal is to showcase my skills and abilities as a programmer while adhering to copyright and legal considerations.",
  },
  {
    title: "Purpose and Intent:",
    desc: "This project is a personal undertaking to develop a participatory budgeting system similar to the one used by the city of Legnica. Please note that this application is not for commercial use, nor is it intended to infringe on any intellectual property rights of the original platform.",
  },
  {
    title: "Technologies Used:",
    desc: "To build this project, I utilized modern web development technologies:",
    subdescs: [
      "TypeScript for strong typing and reliable code.",
      "Next.js as the React-based framework for server-side rendering and efficient web application development.",
      "Redux for managing the application’s state effectively and ensuring predictable state management.",
    ],
  },
  {
    title: "About Participatory Budgeting:",
    desc: "Participatory budgeting allows citizens to engage in decision-making on how to spend a part of a public budget. This application mirrors that concept, providing a platform for users to propose ideas, vote, and allocate funds to projects that improve their community.",
  },
];

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[#E4E4E4] ">
      <GenBgImage
        src="/images/home.jpg"
        title="Home"
        desc="LSzpilowski Learning App"
      />
      <div className="flex flex-row justify-between w-3/4 min-h-[65vh] ">
        <Card className="mb-10">
          <CardHeader className=" h-full">
            <div className="grid grid-cols-2 h-full gap-20 p-10">
              {homeText.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 ">
                  <CardTitle>{item.title}</CardTitle>
                  <div>
                    <p>{item.desc}</p>
                    {item.subdescs ? (
                      <ul className="list-disc pl-10">
                        {item.subdescs.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t-2 flex flex-col gap-10 p-10 text-xl">
              <p>
                By browsing this project, you will have a chance to see how the
                core functionalities of a participatory budgeting system are
                implemented, using the aforementioned technologies and best
                programming practices.
              </p>
              <p>
                {" "}
                Thank you for visiting, and I hope you enjoy exploring my work!
              </p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Home;
