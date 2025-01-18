import { cn } from "@/lib/utils";
import { SubHeading } from "@/components/Main";
import { TFunction } from "i18next";
import React from "react";
import Image from "next/image";
import Marquee from "@/components/Animations/Marquee";

function Clients({ t }: { t: TFunction }) {
  return (
    <div className="w-full py-24  ">
      <SubHeading className="text-center text-base font-medium mb-8">
        {t("clients.title")}
      </SubHeading>
      <MarqueeLogos />
    </div>
  );
}

export default Clients;

const logos = [
  {
    name: "company-logo-1",
    img: "/assets/images/temp/company-logo-1.svg",
  },
  {
    name: "company-logo-2",
    img: "/assets/images/temp/company-logo-2.svg",
  },
  {
    name: "company-logo-3",
    img: "/assets/images/temp/company-logo-3.svg",
  },
  {
    name: "company-logo-4",
    img: "/assets/images/temp/company-logo-4.svg",
  },
  {
    name: "company-logo-5",
    img: "/assets/images/temp/company-logo-5.svg",
  },
  {
    name: "company-logo-6",
    img: "/assets/images/temp/company-logo-6.svg",
  },
];

const Logo = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={cn("flex-center cursor-pointer")}>
      <Image src={img} alt={name} width={150} height={50} />
    </div>
  );
};

const MarqueeLogos = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg   ">
      <Marquee pauseOnHover className="[--gap:1.5rem]" >
        {logos.map((logo, idx) => (
          <Logo key={idx} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
