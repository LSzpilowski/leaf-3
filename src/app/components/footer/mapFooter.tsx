import Link from "next/link";

const privacyButtons = [
  "Privacy Policy",
  "Cookie Policy",
  "Cookie Settings",
  "Check Declaration",
  "Site Map",
];

function MapFooter() {
  const formatLink = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <div className="flex flex-col justify-evenly items-center h-[10vh] w-full bg-black px-20 text-white z-[5000]">
      <div className="flex flex-row w-full justify-center gap-10">
        {privacyButtons.map((item, index) => (
          <Link href={`/${formatLink(item)}`} key={index} className="group">
            <div className="bg-bottom bg-gradient-to-r from-[#3388FF] to-[#3388FF] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1 font-semibold">
              {item}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-row justify-center gap-1">
        <p>© All rights reserved to</p>
        <div className="group">
          <Link
            href={"https://www.media-park.pl/"}
            className="bg-bottom bg-gradient-to-r from-[#3388FF] to-[#3388FF] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1 font-semibold"
          >
            MEDIAPARK
          </Link>
        </div>
        <p>, not me. This platform is made only for educational purpose,</p>
        <p>based on</p>
        <div className="group">
          <Link
            href={"https://lbo.legnica.eu/#header"}
            className="bg-bottom bg-gradient-to-r from-[#3388FF] to-[#3388FF] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out pb-1 font-semibold"
          >
            Legnicki Budżet Obywatelski
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MapFooter;
