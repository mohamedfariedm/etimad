import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Heading, SubHeading } from "../Main";
import { TFunction } from "i18next";

function CommunicationChannels({
  t,
  className,
}: {
  t: TFunction;
  className?: string;
}) {
  const channels = [
    {
      title: t("location.CommunicationChannels.0.title"),
      description: t("location.CommunicationChannels.0.description"),
      contact: "support@advix.com",
      type: "mail",
    },
    {
      title: t("location.CommunicationChannels.1.title"),
      description: t("location.CommunicationChannels.1.description"),
      contact: "sales@advix.com",
      type: "mail",
    },
    {
      title: t("location.CommunicationChannels.2.title"),
      description: t("location.CommunicationChannels.2.description"),
      contact: "+966547543210",
      type: "tel",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ",
        className
      )}
    >
      {channels?.map((channel, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          <Heading className="text-base md:text-base lg:text-lg">
            {channel.title}
          </Heading>
          <SubHeading className="text-sm md:text-sm lg:text-sm mt-2 mb-5">
            {channel.description}
          </SubHeading>
          <Link
            href={`${channel.type}:${channel.contact}`}
            target="_blank"
            className="text-sm font-semibold text-Components-button-tertiary-color-fg"
          >
            {channel.contact}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CommunicationChannels;
