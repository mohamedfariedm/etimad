import initTranslations from "@/app/i18n";
import React from "react";
import MissionAndVision from "./_components/MissionAndVision";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["aboutUs"]);

  return (
<>
<BreadCrumbComponent/>
<MissionAndVision t={t}/>
</>
  );
}

export default page;
