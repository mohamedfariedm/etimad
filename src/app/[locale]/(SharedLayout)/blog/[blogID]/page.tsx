import initTranslations from "@/app/i18n";

async function page({
  params: { locale, blogID },
}: {
  params: { locale: string; blogID: string };
}) {



  const { t } = await initTranslations(locale, ["blog"]);



  return (
""
  );
}

export default page;
