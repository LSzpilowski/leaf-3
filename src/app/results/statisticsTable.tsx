import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface IStatsCard {
  title?: string;
  title1?: string;
  title2?: string;
  description?: string;
  desc1?: string;
  desc2?: string;
  image1?: string;
  image2?: string;
}

const statsCard: IStatsCard[] = [
  {
    title: "Number of voters",
    description: "This value represents frequention during voting",
    image1: "/images/ppl.png",
  },
  {
    title1: "Divide of voting cards:",
    title2: "Computers - Mobile Phones",
    description: "Apply only to the valid voting cards",
    image1: "/images/computer.png",
    image2: "/images/mobile.png",
  },
  {
    title: "Voting day by day",
    description: "Number of voting cards send to ECB day by day",
    image1: "/images/stats.png",
  },
  {
    title1: "First given vote",
    desc1: "Monday, 01.03.2025 08:00",
    title2: "Last given vote",
    desc2: "Monday, 14.03.2025 20:00",
    image1: "/images/votes.png",
  },
  {
    title1: "Dividing voting cards:",
    title2: "Women - Men",
    desc1: "Divide voting cards given by citizens based on sex.",
    desc2: "Apply only to the valid voting cards",
    image1: "/images/woman.png",
    image2: "/images/man.png",
  },
  {
    title: "Voters age",
    description: "Apply only to the valid voting cards",
    image1: "/images/age.png",
  },
];

function StatisticsTable() {
  return (
    <>
      {statsCard.map((card, index) => (
        <>
          {card.title1 === "First given vote" ? (
            <Card
              key={index}
              className="w-full flex flex-row items-center justify-center gap-20 py-5 bg-[#F6F6F6]"
            >
              <CardHeader className="flex flex-col gap-5">
                <div>
                  <CardTitle>{card.title1}</CardTitle>
                  <CardDescription>{card.desc1}</CardDescription>
                </div>
                <div>
                  {" "}
                  <CardTitle>{card.title2}</CardTitle>
                  <CardDescription>{card.desc2}</CardDescription>
                </div>
              </CardHeader>
              <Image
                src={`${card.image1}`}
                width={300}
                height={100}
                alt="Image"
                quality={100}
              />
            </Card>
          ) : (
            <>
              {card.title ? (
                <Card
                  key={index}
                  className="w-full flex flex-col justify-between items-center bg-[#F6F6F6]"
                >
                  <CardHeader className="w-full">
                    <CardTitle className="flex flex-col items-center w-full">
                      {card.title}
                    </CardTitle>
                    {card.description ? (
                      <CardDescription className="w-full flex flex-col items-center">
                        {card.description}
                      </CardDescription>
                    ) : (
                      <CardDescription className="flex flex-col items-center w-full">
                        <p>{card.desc1}</p>
                        <p> {card.desc2}</p>
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="w-full">
                    <div className="w-full flex flex-col items-center">
                      {card.title === "Voting day by day" ? (
                        <Image
                          src={`${card.image1}`}
                          width={700}
                          height={100}
                          alt="Image"
                          quality={100}
                        />
                      ) : (
                        <Image
                          src={`${card.image1}`}
                          width={400}
                          height={100}
                          alt="Image"
                          quality={100}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  key={index}
                  className="w-full  flex flex-col justify-between items-center bg-[#F6F6F6]"
                >
                  <CardHeader className="flex flex-col items-center w-full">
                    <CardTitle className="w-full flex flex-col items-center">
                      {card.title1}
                    </CardTitle>
                    <CardTitle className="w-full flex flex-col items-center">
                      {card.title2}
                    </CardTitle>
                    {card.description ? (
                      <CardDescription className="w-full flex flex-col items-center">
                        {card.description}
                      </CardDescription>
                    ) : (
                      <CardDescription className="flex flex-col items-center w-full">
                        <p>{card.desc1}</p>
                        <p> {card.desc2}</p>
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {card.image2 ? (
                      <div className="flex flex-row items-center w-full gap-10">
                        <Image
                          src={`${card.image1}`}
                          width={`${
                            card.image1 === "/images/woman.png" ? "245" : "300"
                          }`}
                          height={100}
                          alt="Image"
                          quality={100}
                        />
                        <Image
                          src={`${card.image2}`}
                          width={250}
                          height={100}
                          alt="Image"
                          quality={100}
                        />
                      </div>
                    ) : (
                      <Image
                        src={`${card.image1}`}
                        width={250}
                        height={100}
                        alt="Image"
                        quality={100}
                      />
                    )}
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </>
      ))}
    </>
  );
}

export default StatisticsTable;
