import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import { Container } from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import {
  Blogs,
  Hero,
  Testimonials,
  Values,
} from "./_components";
import { Features } from "@/components/Shared";
import { StartFreeTrial } from "@/components/Main";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <section className="min-h-screen ">
      <Hero t={t}/>
    </section>
  );
};

export default Home;
