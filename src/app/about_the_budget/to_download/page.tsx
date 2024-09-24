import Image from "next/image";

function ToDownload() {
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
      <div className="flex flex-row justify-center w-3/4 min-h-[65vh] "></div>
    </div>
  );
}

export default ToDownload;
