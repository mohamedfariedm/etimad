import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["terms"]);

  return (
    <>
      <BreadCrumbComponent />
      <div className="main-container flex w-full xl:w-[1152px] flex-col gap-[96px] items-center flex-nowrap relative mx-auto my-0">
        <div className="flex w-full xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
          <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
              <span className="flex justify-end items-start shrink-0 basis-auto bukra-semi-bold text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[3]">
                {t("title")}
              </span>
              <span className="flex w-full xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0 text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-center z-[4]">
                {t("introduction")}
              </span>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          
          {/* Acceptance of Terms */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.acceptance.title")}
          </p>
          <p className="text-[18px] ltr:text-start flex font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.acceptance.description")}
          </p>

          {/* Intellectual Property */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.intellectualProperty.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.intellectualProperty.points.0")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.intellectualProperty.points.1")}
          </p>

          {/* Site Usage */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.siteUsage.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.siteUsage.points.0")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.siteUsage.points.1")}
          </p>

          {/* Account Registration */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.accountRegistration.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.accountRegistration.points.0")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.accountRegistration.points.1")}
          </p>

          {/* Privacy Policy */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.privacyPolicy.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.privacyPolicy.points.0")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.privacyPolicy.points.1")}
          </p>

          {/* Disclaimer */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.disclaimer.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.disclaimer.points.0")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.disclaimer.points.1")}
          </p>

          {/* Modifications to Terms */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
            {t("sections.modifications.title")}
          </p>
          <p className="text-[18px] flex font-normal ltr:text-start leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.modifications.points.0")}
          </p>
          <p className="text-[18px] flex font-normal ltr:text-start leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("sections.modifications.points.1")}
          </p>

        </div>
      </div>
    </>
  );
}

export default page;
