import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import { Container } from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import {
  Blogs,
  EasyWay,
  Hero,
  Products,
  Testimonials,
  Values,
} from "./_components";
import { Features } from "@/components/Shared";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="min-h-screen ">
      <Hero t={t}/>
      <div className="flex flex-col gap-[136px]">
      <EasyWay t={t}/>
      <Products t={t}/>


      </div>
    </section>
  );
};

export default Home;
