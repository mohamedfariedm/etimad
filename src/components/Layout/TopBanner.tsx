import React from "react";
import Container from "./Container";
import initTranslations from "@/app/i18n";

async function TopBanner({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <section className="  bg-[#544cfc]/20 backdrop-blur-[19.20px] w-full relative z-50">
      <Container className="min-h-14 justify-center items-center gap-2 flex ">
        <h2 className="text-white  font-semibold leading-normal  text-center text-balance text-sm">
          {t("TopBanner")}
        </h2>
      </Container>
    </section>
  );
}

export default TopBanner;
