import initTranslations from "@/app/i18n";
import { BlogCard } from "@/components/Cards";
import { Container } from "@/components/Layout";
import {
  BlogList,
  Heading,
  Pagination,
  PreHeading,
  StartFreeTrial,
  SubHeading,
} from "@/components/Main";
import { Separator } from "@/components/ui/separator";
import BlogFilters from "./_components/BlogFilters";
import { getAllBlogs } from "@/app/api/apiClient/apiClient";

type props = {
  params: { locale: string };
  searchParams: {
    page: string | undefined;
    tag: string | undefined;
    sort: string | undefined;
  };
};

async function page({
  params: { locale },
  searchParams: { page, tag, sort },
}: props) {
  const currentPage = Number(page || 1);
  const limit = Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT || 9);
  const lang = locale; // Assuming the locale is the desired language

  const { blogs, meta } = await getAllBlogs({
    page:currentPage,
    type:tag,
    limit,
    lang
  }
  );
  const totalPages = meta.lastPage;
  console.log(blogs);
  

  const { t } = await initTranslations(locale, ["blog"]);

  return (
    <section>
      <Container className="min-h-screen">
        <div className="w-full lg:w-4/6 py-16 md:py-24">
          <PreHeading className="text-start">{t("PreHeading")}</PreHeading>
          <Heading className="mt-3 mb-5 text-start">{t("Heading")}</Heading>
          <SubHeading className="text-start">{t("SubHeading")}</SubHeading>
        </div>

        {blogs.length > 0 ? (
          <>
            <BlogCard main blog={blogs[0]} t={t} />

            <BlogFilters className="mt-12 md:mt-[72px]" />

            <BlogList blogs={blogs} t={t} className="my-12 md:my-16" />

            <Separator className="mb-4 md:mb-5" />

            <Pagination lastPage={totalPages} />
          </>
        ) : (
          <div>{t("NoBlogsFound")}</div>
        )}
      </Container>
      <StartFreeTrial className="mt-16 md:mt-24 py-16 md:py-24" locale={locale} />
    </section>
  );
}

export default page;
