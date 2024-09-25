import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface IContactDetails {
  title: string;
  desc: string;
}

const contactDetials: IContactDetails[] = [
  {
    title: "Phone",
    desc: "0700800900",
  },
  {
    title: "Email",
    desc: "example@ecb.uk",
  },
  {
    title: "Additional website",
    desc: "www.example.ecb.uk",
  },
  {
    title: "Social Media",
    desc: "Facebook",
  },
];

function Contact() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 bg-[rgb(228,228,228)] pb-10 ">
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
        <Card className="w-2/3 flex flex-col items-center p-10">
          <CardHeader className="flex flex-col gap-10 w-full">
            <div>
              <CardTitle className="text-center">
                Do you have questions?
              </CardTitle>
              <CardDescription className="text-center">
                Contact with us.
              </CardDescription>
            </div>
            <div className="flex flex-row w-full justify-around ">
              <div className="flex flex-col gap-2">
                <CardTitle>Contact:</CardTitle>
                {contactDetials.map((item, index) => (
                  <div key={index}>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <CardTitle>Adress:</CardTitle>
                <div>
                  <p>ECB Centrum </p>
                  <p>EH25CB1</p>
                  <p>Edinburgh</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
