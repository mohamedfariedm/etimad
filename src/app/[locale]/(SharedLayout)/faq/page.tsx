import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Faq } from "../(homepage)/_components";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["contactUs"]);

  return (
<>
<BreadCrumbComponent/>
<Faq/>
</>
  );
}

export default page;
