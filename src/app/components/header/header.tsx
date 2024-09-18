import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const headerButtons = [
  "Home",
  "About the Budget",
  "Projects",
  "Implementation Map",
  "Results",
  "Contact",
];

const aboutTheBudgetButtons = [
  "News",
  "Budget Step by Step",
  "Schedule",
  "Submitting Projects",
  "Voting",
  "Price List - Estimated Costs",
  "To Download",
  "Archive of ECB",
  "Previous Editions",
];

function Header() {
  const formatLink = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <Card className="flex flex-row items-center fixed top-0 w-3/4 h-20 rounded-t-none z-50">
      <div className="w-1/4  flex flex-row justify-center">
        <Link href={"/home"}>
          <Image
            src={"/images/full_logo.png"}
            alt="logo"
            width={200}
            height={50}
            className="hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="w-3/4 flex flex-row justify-evenly ">
        {headerButtons.map((item, index) => {
          if (item === "About the Budget") {
            return (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <div className="py-1 px-3 group transition-all duration-300 ease-in-out">
                    <span className="bg-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1 hover:opacity-60 hover:cursor-pointer font-bold">
                      {item}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 ">
                  <Card className="flex flex-col items-center  mt-1">
                    {aboutTheBudgetButtons.map((subItem, subIndex) => (
                      <DropdownMenuItem
                        asChild
                        key={subIndex}
                        className="hover:bg-secondary"
                      >
                        <Link
                          className="w-full text-center py-1"
                          href={`/about_the_budget/${formatLink(subItem)}`}
                        >
                          {subItem}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </Card>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          } else {
            return (
              <Link
                href={`/${formatLink(item)}`}
                key={index}
                className="py-1 px-3 group transition-all duration-300 ease-in-out"
              >
                <span className="bg-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1 hover:opacity-60 font-bold">
                  {item}
                </span>
              </Link>
            );
          }
        })}
      </div>
    </Card>
  );
}

export default Header;
