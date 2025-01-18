import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import { Heading, PreHeading, SubHeading } from "@/components/Main";
import React from "react";
import ContactUsForm from "./_components/ContactUsForm";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["contactUs"]);

  return (
    <Container className="py-16 md:py-24 flex flex-col gap-16 md:gap-24">
      <div className="w-full lg:w-4/6  mx-auto">
        <PreHeading>{t("PreHeading")}</PreHeading>
        <Heading className="mt-3 mb-5">{t("Heading")}</Heading>
        <SubHeading className="">{t("SubHeading")}</SubHeading>
      </div>
      <ContactUsForm />
    </Container>
  );
}

export default page;
