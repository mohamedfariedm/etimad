import { NavLink } from "@/components/Main";
import { cn } from "@/lib/utils";
import { TFunction } from "i18next";

export default function MenuItemsDesktop({
  t,
  className,
}: {
  t: TFunction;
  className?: string;
}) {
  const menuItems = [
    { label: "الرئيسية", href: "/ar", width: "58px" },
    { label: "المنتجات", href: "/products", width: "55px" },
    { label: "من نحن", href: "/about", width: "44px" },
    { label: "احسب تمويلك", href: "/calculator", width: "87px" },
    { label: "تواصل معنا", href: "/contact", width: "69px" },
  ];
  


  return (
    <div
    className={cn(
      "hidden md:flex xl:w-[425px] h-[49px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[16px] items-center justify-center flex-nowrap bg-[rgba(231,240,241,0.2)] rounded-[16px] border-none absolute top-[3px] left-1/2 translate-x-[-50%] translate-y-0 pointer",
      className
    )}
  >
    {menuItems.map((item, index) => (
      <NavLink
        key={index}
        href={item.href}
        className={cn(
          "flex items-center justify-center shrink-0 text-[14px] font-normal leading-[16.406px] relative",
          {
            "font-semibold text-[#f8fbfc]": index === 0, // Highlight the first item
            "text-[#5d9d9f]": index !== 0,
          }
        )}
        style={{
          width: item.width,
          height: "25px",
        }}
      >
        {t(item.label)}
      </NavLink>
    ))}
    {/* <div className="w-[58px] h-[2px] bg-white absolute bottom-0 right-[24px] z-[6]" /> */}
  </div>
  );
}
