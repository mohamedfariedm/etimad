import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import { Container } from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import {
  AboutApp,
  Blogs,
  Calculate,
  Certifications,
  EasyWay,
  Faq,
  Hero,
  Numbers,
  Products,
  Tamwilk,
  Testimonials,
  Values,
} from "./_components";
import { Features } from "@/components/Shared";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="">
      <Hero  />
      <div className="flex flex-col gap-[136px] my-[136px] px-5 sm:px-0">
      <EasyWay t={t}/>
      <Products t={t}/>
      <Calculate />
      <AboutApp t={t}/>
      <Faq/>
      <Numbers t={t}/>
      <Tamwilk t={t}/>
      <Certifications t={t}/>
      </div>
    </section>
  );
};

export default Home;
