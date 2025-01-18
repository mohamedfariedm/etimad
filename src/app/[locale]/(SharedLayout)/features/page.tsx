import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import React from "react";
import { Features } from "@/components/Shared";
import { StartFreeTrial } from "@/components/Main";

async function FeaturesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="w-full pt-8">
      <Container>
        <Features t={t} />
      </Container>
      <StartFreeTrial
        className="mt-16 md:mt-24 py-16 md:py-24 "
        locale={locale}
      />
    </section>
  );
}

export default FeaturesPage;
