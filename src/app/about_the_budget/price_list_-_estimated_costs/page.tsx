import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GenBgImage from "@/app/components/utils/genBgImage";

interface IPriceListContentDescSubdescs {
  subdesc?: string;
}
interface IPriceListContentDesc {
  title?: string;
  subdescs?: IPriceListContentDescSubdescs[];
}
interface IPriceListContentDescs {
  desc?: IPriceListContentDesc[];
}

interface IPriceListContent {
  img?: string;
  subtitle?: string;
  descs?: IPriceListContentDescs[];
  price?: string;
}

interface IPriceListContents {
  content?: IPriceListContent[];
}
interface IPriceList {
  title: string;
  contents: IPriceListContents[];
}

const priceLists: IPriceList[] = [
  {
    title: "Roads, sidewalks, bike paths",
    contents: [
      {
        content: [
          {
            img: "/images/bike_stand.jpg",
            subtitle:
              "Purchase and installation of a four-station bicycle rack",
            price: "£108 – £216 / piece",
          },
        ],
      },
      {
        content: [
          {
            img: "/images/road_reconstruction.jpeg",
            subtitle: "Road reconstruction",
            descs: [
              {
                desc: [
                  {
                    title:
                      "Asphalt road (minimum width of residential road 5 meters): £117 / 1 m²",
                  },
                ],
              },
              {
                desc: [
                  {
                    title: "Concrete blocks: £99 / 1 m²",
                  },
                ],
              },
              {
                desc: [
                  {
                    title: "Dirt road reinforcement:",
                    subdescs: [
                      {
                        subdesc: "Using asphalt milling waste – £9 / 1 m²",
                      },
                      {
                        subdesc: "Crushed stone 0-31.5 mm – £14.40 / 1 m²",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Small architecture / Playgrounds / Recreational areas",
    contents: [
      {
        content: [
          {
            img: "/images/bench.jpg",
            subtitle: "Purchase and installation of benches",
            descs: [
              {
                desc: [
                  {
                    title: "Park bench: £180 – £540",
                  },
                ],
              },
              {
                desc: [
                  {
                    title: "Youth bench without backrest: £270",
                  },
                ],
              },
              {
                desc: [
                  {
                    title: "Hammocks: £1,080 – £2,160",
                  },
                ],
              },
              {
                desc: [
                  {
                    title: "City deckchairs: £810 – £2,160",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        content: [
          {
            img: "/images/bin.jpg",
            subtitle: "Purchase and installation of trash bins",
            price: "£90 – £270 / piece",
          },
        ],
      },
    ],
  },
  {
    title: "Green areas and planting",
    contents: [
      {
        content: [
          {
            img: "/images/tree.jpg",
            subtitle: "Purchase and planting of trees",
            descs: [
              {
                desc: [
                  {
                    title: "Tree planting services: £111.60 – £270 / tree",
                  },
                  {
                    title: "Purchase of trees: £117 / tree",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        content: [
          {
            img: "/images/shrubs.jpg",
            subtitle: "Planting ornamental shrubs",
            price: "£7.20 / shrub",
          },
        ],
      },
    ],
  },
  {
    title: "Sports and recreation",
    contents: [
      {
        content: [
          {
            img: "/images/goal.jpg",
            subtitle: "Sport equipment",
            descs: [
              {
                desc: [
                  {
                    title: "Football goals (handball): £1,992.60 / piece",
                  },
                  {
                    title: "Basketball hoop: £2,214 / piece",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        content: [
          {
            img: "/images/field.jpg",
            subtitle: "Construction of synthetic sports field",
            price: "£75.60 – £138.60 / m²",
          },
        ],
      },
    ],
  },
  {
    title: "Lighting",
    contents: [
      {
        content: [
          {
            img: "/images/lamp.jpg",
            subtitle: "Installation of street lamps",
            descs: [
              {
                desc: [
                  {
                    title: "Single-arm street lamp: £1,890 / piece",
                  },
                  {
                    title: "Stylized street lamp: £3,060 / piece",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Drainage",
    contents: [
      {
        content: [
          {
            img: "/images/drainage.jpg",
            subtitle: "Stormwater drainage construction",
            price: "£630 / meter",
          },
        ],
      },
    ],
  },
  {
    title: "Project documentation",
    contents: [
      {
        content: [
          {
            img: "/images/documentation.jpg",
            subtitle: "Preparation of project documentation",
            price: "£11,700 – £27,000",
          },
        ],
      },
    ],
  },
];

function PriceListEstimatedCost() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)] pb-10 ">
      <GenBgImage src="/images/budget.jpg" title="Price List- Estimated Cost" />
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] ">
        <Card className="w-2/3 p-10 ">
          {priceLists.map((priceList, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full "
            >
              <AccordionItem value="item-1 bg-orange-500 ">
                <AccordionTrigger className="w-full h-full z-10">
                  {priceList.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-5">
                  {priceList.contents.map((content, index) => (
                    <div key={index} className="flex flex-col items-center ">
                      {content.content?.map((content, index) => (
                        <div
                          key={index}
                          className="w-full flex flex-row items-center gap-5 border-b-2 py-5  last:border-b-0"
                        >
                          {content.img ? (
                            <Image
                              src={content.img}
                              quality={100}
                              width={300}
                              height={100}
                              alt="img"
                              className="rounded-xl w-1/5 h-28 object-cover"
                            />
                          ) : null}
                          <div className="flex flex-col w-3/5">
                            <div className="font-semibold text-base">
                              {content.subtitle}
                            </div>
                            {content.descs ? (
                              <div>
                                {content.descs.map((desc, index) => (
                                  <div key={index}>
                                    {desc.desc?.map((item, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-col"
                                      >
                                        <p className="py-1">- {item.title}</p>
                                        {item.subdescs ? (
                                          <ul className="flex flex-col list-disc pl-10 gap-1">
                                            {item.subdescs.map(
                                              (subdesc, index) => (
                                                <li key={index}>
                                                  {subdesc.subdesc}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        ) : null}
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>

                          {content.price ? (
                            <div className="w-1/5">{content.price}</div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default PriceListEstimatedCost;
