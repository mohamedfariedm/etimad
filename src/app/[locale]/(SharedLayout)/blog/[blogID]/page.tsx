import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import { Heading, PreHeading, SubHeading } from "@/components/Main";
import { Separator } from "@/components/ui/separator";
import { getAllBlogs, getSingleBlog } from "@/app/api/apiClient/apiClient"; // Update the import
import Image from "next/image";
import Link from "next/link";
import BlogDetailsFooter from "./_components/BlogDetailsFooter";
import BlogDetailsSuggestions from "./_components/BlogDetailsSuggestions";
import { MarkdownRenderer } from "@/components/sub";

async function page({
  params: { locale, blogID },
}: {
  params: { locale: string; blogID: string };
}) {
  // Fetch the single blog by ID and locale

  const {blog} = await getSingleBlog({
    id:blogID,
    lang:locale
  }
  );
  const { blogs} = await getAllBlogs({
    page:1,
    limit:100,
    lang:locale,
    type:blog?.type
  }
);

  // Initialize translations
  const { t } = await initTranslations(locale, ["blog"]);

  // Mock blog content
  const blogContent = `

## Introduction

Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.

Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.

![Alt text describing the image](https://images.unsplash.com/photo-1529641484336-ef35148bab06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

> "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
> 
> — Ali Elsayed, Product Designer

## Software and tools

Lorem ipsum dolor sit amet consectetur. Suspendisse est justo purus tortor. Sit sed natoque lectus suspendisse tempus etiam luctus. Diam quisque lectus varius tempor sed lacus eget pharetra sed. Diam consequat bibendum vitae a nulla congue placerat. Pharetra tempus vestibulum eget interdum orci quis. Morbi imperdiet est quisque gravida integer sit lorem. Velit accumsan sagittis leo cum gravida lectus nunc diam.

## Other resources

Lorem ipsum dolor sit amet consectetur. Morbi fermentum in morbi sit egestas nulla lacinia. Arcu at aliquet maecenas orci habitant risus non erat. Donec ornare eget sapien quam in a morbi. Lorem faucibus rhoncus sagittis vulputate et sed eget in.

## Conclusion

Lorem ipsum dolor sit amet consectetur. Cras volutpat faucibus sit donec rhoncus. Et facilisi magna egestas ut volutpat nulla. Commodo scelerisque justo a justo nunc. Cras nec fermentum purus nisi morbi. Lobortis amet at hac ac.`;

console.log(blog?.detail);

  return (
    <Container>
      <div className="blog_details--content py-16 md:py-24">
        <div className="w-full lg:w-4/6 mx-auto">
          <PreHeading>
            {t("published")} {blog?.created_at || "N/A"}
          </PreHeading>
          <Heading className="mt-3 mb-5">{blog?.title || "No Title"}</Heading>
          <SubHeading className="">{blog?.short_desc || "No Description"}</SubHeading>
        </div>

        <div className="blog_details--tags mb-12 md:mb-16 mt-8 flex gap-2 justify-center">
            <Link
              key={blog.type}
              href={{
                pathname: "/blog",
                query: { tag:blog.type },
              }}
              className="leading-tight px-2.5 py-0.5 rounded-full border border-utility-gray-200 text-utility-gray-700 bg-utility-gray-50 text-sm"
            >
              {blog.type}
            </Link>
        </div>

        {blog?.image && (
          <Image
            src={blog?.image}
            alt={blog?.title}
            width={1470}
            height={600}
            className="w-full object-cover max-h-[450px]"
          />
        )}

        <MarkdownRenderer content={blog?.detail} className="max-w-3xl mx-auto" />

        <Separator className="mb-6 max-w-3xl mx-auto " />

        <BlogDetailsFooter className="max-w-3xl mx-auto" blog={blog} />
      </div>

      <BlogDetailsSuggestions blogs={blogs} t={t} />
    </Container>
  );
}

export default page;
