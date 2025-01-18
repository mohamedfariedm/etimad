import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";
import initTranslations from "@/app/i18n";

async function Footer({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);

  const socialIcons = [
    <FaXTwitter key="twitter" />,
    <FaLinkedin key="linkedin" />,
    <FaFacebook key="facebook" />,
    <FaGithub key="github" />,
  ];

  return (
    <div className="bg-[#3d898d] w-full relative">
<div className="main-container w-[1152px] h-[350px] bg-[url(/assets/images/footertrack.svg)] bg-contain bg-no-repeat overflow-hidden -top-[286px] my-0 z-[-1] absolute left-1/2 transform -translate-x-1/2" />

      <div className="main-container flex w-full lg:w-[1440px] pt-[64px] px-5 lg:px-[144px] pb-[40px] flex-col gap-[48px] items-center relative z-10 mx-auto">
        <div className="flex gap-[32px] justify-center lg:justify-start items-center self-stretch relative">
          <div className="flex flex-col lg:flex-row gap-[24px] items-center relative">
            <div className="w-[129px] h-[55px] bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat" />
            <div className="w-[167.658px] h-[54.848px] bg-[url(https://placehold.co/600x400)] bg-[length:100%_100%] bg-no-repeat" />
            <span className="flex w-full lg:w-[375px] lg:h-[44px] text-[12px] text-[#fff] leading-[21.84px]">
              اعتمد خاضعة لإشراف ورقابة البنك المركزي السعودي بموجب ترخيص رقم
              52/أش/201905.
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row lg:w-[1152px] justify-between items-start relative">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <span className="text-[24px] text-[#fff] font-semibold leading-[33.6px]">
                  النشرة الإخبارية
                </span>
                <span className="text-[14px] text-[#fff] leading-[21px]">
                  احصل على آخر التحديثات حول ميزات ايطار الجديدة وتحديثات المنتجات
                  الجديدة.
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[8px]">
                <input
                  className=" w-full lg:w-[343px] h-[45px] bg-transparent outline-none placeholder:text-[#fff] rounded-[12px] border border-[#f8fbfc] p-[16px] text-[#fff]"
                  placeholder="ادخل البريد الالكترونى"
                />
                <button className="w-[99px] h-[45px] bg-[#fff] text-[#667680] rounded-[12px] shadow-md">
                  اشترك الان
                </button>
              </div>
            </div>
            <div className="flex gap-[16px]">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-[20px] h-[20px] bg-[url(https://placehold.co/600x400)] bg-cover"
                >
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[56px]">
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] text-[#fff] font-semibold leading-[22px]">
                لديك استفسار؟
              </span>
              <div className="flex flex-col sm:flex-row gap-[56px]">
                <div className="flex gap-[16px] items-center">
                  <div className="w-[32px] h-[32px] bg-[url(https://placehold.co/600x400)] bg-cover" />
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] text-[#fff] leading-[18px]">
                      اتصل بنا على
                    </span>
                    <span className="text-[14px] text-[#fff] font-medium">
                      +966 920020077
                    </span>
                  </div>
                </div>
                <div className="flex gap-[16px] items-center">
                  <div className="w-[32px] h-[32px] bg-[url(https://placehold.co/600x400)] bg-cover" />
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] text-[#fff] leading-[18px]">
                      راسلنا على
                    </span>
                    <span className="text-[14px] text-[#fff] font-medium">
                      info@enjaz.com.sa
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] text-[#fff] font-semibold leading-[22px]">
                روابط الموقع
              </span>
              <div className="flex w-full gap-[16px] flex-wrap">
                {["تقديم شكوى", "تواصل معنا", "الأسئلة الشائعة", "المنتجات", "من نحن", "احسب تمويلك"].reverse().map((link, index) => (
                  <span key={index} className="text-[14px] text-[#fff] leading-[21px]">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row lg:w-[1152px] justify-between items-center border-t border-[#5d9d9f] pt-[40px]">
          <div className="flex gap-[32px]">
            <span className="text-[14px] text-[#fff] leading-[21px]">سياسة الخصوصية</span>
            <span className="text-[14px] text-[#fff] leading-[21px]">شروط الاستخدام</span>
          </div>
          <span className="text-[14px] text-[#fff] leading-[21px]">
            2025 ©, جميع الحقوق محفوظة لشركة اعتمد
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
