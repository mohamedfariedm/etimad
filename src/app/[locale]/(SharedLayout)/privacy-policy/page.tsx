import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["privacy"]);

  return (
    <>
      <BreadCrumbComponent />
      <div className="main-container flex w-full xl:w-[1152px] flex-col gap-[96px] items-center flex-nowrap relative mx-auto my-0">
        <div className="flex w-full xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative my-2">
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

        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataCollection.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataCollection.description")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataCollection.points.0")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataCollection.points.1")}
          </p>

          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataUsage.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataUsage.description")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataUsage.points.0")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataUsage.points.1")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataUsage.points.2")}
          </p>

          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataProtection.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataProtection.description")}
          </p>

          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataSharing.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataSharing.points.0")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.dataSharing.points.1")}
          </p>

          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.cookies.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.cookies.description")}
          </p>

          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.userRights.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.userRights.points.0")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.userRights.points.1")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.userRights.points.2")}
          </p>

          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.policyChanges.title")}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
            {t("sections.policyChanges.description")}
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
