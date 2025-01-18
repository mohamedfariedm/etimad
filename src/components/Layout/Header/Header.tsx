import initTranslations from "@/app/i18n";
import Container from "../Container";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";

async function Header({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <header className="w-full h-20  backdrop-blur-[19.20px] absolute top-0 z-50">
      <Container className="   xl:w-[1152px] h-[55px] relative mx-auto mt-[33px]">
        <nav className="w-full flex justify-between items-center h-full">
        <div className=" w-[129px] h-[55px] bg-[url('/assets/images/logo.svg')] bg-cover bg-no-repeat absolute top-0 rtl:start-0 ltr:end-0 overflow-hidden z-[7]" />
<MenuItemsDesktop t={t}/>

<div dir="ltr" className="flex   md:w-[40px] md:hover:w-[120px] transition-all duration-1000 h-[38px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-[8px] items-center flex-nowrap bg-[rgba(231,240,241,0.2)] rounded-[8px] absolute top-[9px] left-[100px] sm:left-[115px] overflow-hidden z-[11]">
  <span className="flex   xl:w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto  text-[14px] font-normal leading-[22px] text-[#5d9d9f] absolute top-[8px] left-[41px] text-right whitespace-nowrap z-[13]">
    تواصل معنا
  </span>
  <div className=" w-[20px] h-[20px] shrink-0 bg-[url('/assets/images/customer-support.svg')] bg-cover bg-no-repeat relative z-[12]" />
</div>
<LanguageChanger />
 {/* Mobile Navigation Menu */}
 <MobileMenu locale={locale} />


        </nav>
      </Container>
    </header>
  );
}

export default Header;
