import Image from "next/image";
import Link from "next/link";
import { BsCalendar } from "react-icons/bs";
import { FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";

const aboutTheBudgetButtons = [
  {
    title: "Budget Step by Step",
    icon: <FaListOl />,
  },
  {
    title: "Schedule",
    icon: <BsCalendar />,
  },
  {
    title: "Submitting Projects",
    icon: <CgNotes />,
  },
  {
    title: "Voting",
    icon: <FaRegBookmark />,
  },
  {
    title: "Price List - Estimated Costs",
    icon: <FaListUl />,
  },
  {
    title: "To Download",
    icon: <IoCloudDownloadOutline />,
  },
];

function Footer() {
  const formatLink = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <div className="flex flex-row justify-evenly items-center h-[50vh] w-full bg-[#202020] px-20 text-white">
      <div className="flex flex-col gap-5">
        <p className="text-[#3388FF] text-2xl">Adress</p>
        <Image
          src={"/images/full_logo.png"}
          alt="logo"
          width={200}
          height={50}
        />
        <div className="flex flex-col">
          <p>4 East Market Street</p>
          <p>Edinburgh, UK</p>
          <p>EH8 8BG</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <p className="text-[#3388FF] text-2xl">Social media</p>
          <a className="opacity-60 hover:opacity-100 text-2xl" href="#">
            facebook
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[#3388FF] text-2xl">Contact</p>
        <div className="flex flex-col">
          <p>Phone:</p>
          <p>Random number</p>
        </div>
        <div className="flex flex-col">
          <p>Mail</p>
          <p>ecb@edinburgh.uk</p>
        </div>
        <div className="flex flex-col ">
          <p>Adress www:</p>
          <div className="group">
            <div className=" bg-bottom bg-gradient-to-r hover:text-[#3388FF] from-[#3388FF] to-[#3388FF] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1 font-bold hover:cursor-pointer">
              www.portal.ecb.uk
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[#3388FF] text-2xl">All about the Budget</p>
        <div className="flex flex-col">
          {aboutTheBudgetButtons.map((item, index) => (
            <Link
              href={`/about_the_budget/${formatLink(item.title)}`}
              key={index}
              className="group"
            >
              <span className="flex flex-row items-center gap-3  hover:text-[#3388FF]">
                <div className="duration-500 ease-in-out ">{item.icon}</div>
                <div className=" bg-bottom bg-gradient-to-r from-[#3388FF] to-[#3388FF] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1  font-bold">
                  {item.title}
                </div>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
