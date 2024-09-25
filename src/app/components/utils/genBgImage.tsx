import Image from "next/image";

interface IGenBgImage {
  src: string;
  title: string;
  desc?: string;
}

function GenBgImage({ src, title, desc }: IGenBgImage) {
  return (
    <div className="relative w-full h-[28vh]">
      <Image
        src={src}
        alt="Parkour Park"
        fill={true}
        quality={100}
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
      <div className="absolute inset-0 z-10 h-80 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-white">{title}</p>
        {desc ? <p className="text-white">{desc}</p> : null}
      </div>
    </div>
  );
}

export default GenBgImage;
