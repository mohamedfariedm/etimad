import { CommunicationChannels } from "@/components/Layout";
import { Heading, PreHeading, SubHeading } from "@/components/Main";
import { TFunction } from "i18next";
import Image from "next/image";

function Location({ t }: { t: TFunction }) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full lg:w-4/6 mb-12 md:mb-16 mx-auto ">
        <Heading className="mt-3 mb-5 ">{t("location.Heading")}</Heading>
        <SubHeading>{t("location.SubHeading")}</SubHeading>
      </div>
      <div className=" h-[464px] relative  mx-auto w-full lg:w-11/12 ">
        <Image
          src="/assets/images/advix-location.png"
          alt="advix-location"
          fill
          className="object-cover"
        />
      </div>
      {/*   <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57812.10434382589!2d40.45161602061158!3d25.093176469370462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x159787ed6ba21409%3A0x63624530698d2b08!2sAl%20Nkheel%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1728312928192!5m2!1sen!2seg"
        width="100%"
        height="450"
        style={{ border: 0, width: "100%", height: "450px" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <CommunicationChannels className="mt-12 md:mt-16" t={t} />
    </section>
  );
}

export default Location;
