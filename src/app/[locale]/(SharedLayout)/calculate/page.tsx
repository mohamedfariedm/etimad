import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Calculate} from "../(homepage)/_components";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["calculate"]);

  return (
<>
<BreadCrumbComponent t={t}/>
<Calculate/>
</>
  );
}

export default page;
