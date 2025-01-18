import { Heading, PreHeading, SubHeading } from "@/components/Main";
import { TFunction } from "i18next";
import IntegrationsBeams from "./IntegrationsBeams";

function Integrations({ t }: { t: TFunction }) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full lg:w-4/6 mb-12 md:mb-16 mx-auto ">
        <PreHeading>{t("integrations.PreHeading")}</PreHeading>
        <Heading className="mt-3 mb-5 ">{t("integrations.Heading")}</Heading>
        <SubHeading>{t("integrations.SubHeading")}</SubHeading>
      </div>
      <IntegrationsBeams />
    </section>
  );
}

export default Integrations;
