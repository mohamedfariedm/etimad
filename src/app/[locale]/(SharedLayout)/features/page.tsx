import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import React from "react";
import { Features } from "@/components/Shared";
import { StartFreeTrial } from "@/components/Main";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

async function FeaturesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <>
      <BreadCrumbComponent />
      <div className="main-container w-[1152px] h-[954px] relative mx-auto my-0">



             <div className="flex w-[1152px] gap-[24px] items-center flex-nowrap relative mt-0 mr-0 mb-0 ml-0">
             <div className="flex w-[151px] h-[64px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[16px] relative z-[21]">
          <button className="flex w-[103px] gap-[8px] items-center shrink-0 flex-nowrap border-none relative z-[22] pointer">
            <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative overflow-hidden z-[24]" />
            <span className="flex w-[55px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-normal leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[23]">
              التجميل
            </span>
          </button>
        </div>
        

        <button className="flex w-[177px] h-[64px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[16px] border-none relative z-[17] pointer">
          <div className="flex w-[125px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[18]">
            <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative overflow-hidden z-20" />
            <span className="flex w-[77px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-normal leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[19]">
              الاستقدام
            </span>
          </div>
        </button>

        <button className="flex w-[139px] h-[64px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[16px] border-none relative z-[13] pointer">
          <div className="flex w-[92px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[14]">
            <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative overflow-hidden z-[16]" />
            <span className="flex w-[44px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-normal leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[15]">
              السفر
            </span>
          </div>
        </button>


        <button className="flex w-[148px] h-[64px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[16px] border-none relative z-[9] pointer">
          <div className="flex w-[100px] gap-[8px] items-center shrink-0 flex-nowrap relative z-10">
            <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative overflow-hidden z-[12]" />
            <span className="flex w-[52px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-normal leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[11]">
              سلعتي
            </span>
          </div>
        </button>

        <button className="flex w-[229px] h-[64px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[16px] border-none relative z-[5] pointer">
          <div className="flex w-[169px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[6]">
            <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative overflow-hidden z-[8]" />
            <span className="flex w-[121px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-normal leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[7]">
              التمويل الشخصي
            </span>
          </div>
        </button>

        <button className="flex w-[188px] h-[64px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative z-[1] pointer">
          <div className="flex w-[133px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]">
            <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative overflow-hidden z-[4]" />
            <span className="flex w-[85px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-normal leading-[24px] text-[#fff] relative text-center whitespace-nowrap z-[3]">
              شباب طويق
            </span>
          </div>
        </button>





      </div>




        <div className="flex w-[1152px] flex-col gap-[24px] items-start flex-nowrap relative mt-[64px]">
          <div className="flex gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative">
          <div className="flex w-[564px] h-[568px] p-[16px] flex-col gap-[8px]  items-center shrink-0 flex-nowrap bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat rounded-[24px] relative">
              <div className="flex w-[74px] gap-[8px] items-center shrink-0 flex-nowrap relative">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-[12px] h-[12px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat rounded-[50%] relative"
                  />
                ))}
              </div>
            </div> 
            <div className="flex w-[564px] p-[31px] flex-col gap-[24px] items-start shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[24px] relative">
              <div className="flex flex-col gap-[16px]  self-stretch shrink-0 flex-nowrap relative">
                <div className="flex gap-[8px]  items-center self-stretch shrink-0 flex-nowrap relative">
                  <span className="flex w-[132px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                    منتج شباب طويق:
                  </span>
                  <div className="w-[16px] h-[5px] shrink-0 bg-[#5d9d9f] rounded-[6px]" />
                </div>
                <div className="flex flex-col gap-[12px] justify-center  self-stretch shrink-0 flex-nowrap relative">
                  {[
                    "تمويل المصروفات الاستهلاكية",
                    "تمويل المشتريات الدراسية",
                    "تمويل سداد الرسوم الجامعية والمدرسية",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="flex gap-[12px]  items-center self-stretch shrink-0 flex-nowrap"
                    >
                      <span className="flex w-[290px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                        {text}
                      </span>
                      <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat rounded-[999px] relative overflow-hidden" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[16px]  self-stretch shrink-0 flex-nowrap relative">
                <div className="flex gap-[8px]  items-center self-stretch shrink-0 flex-nowrap relative">
                  <span className="flex w-[150px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                    شروط تمويل المنتج:
                  </span>
                  <div className="w-[16px] h-[5px] shrink-0 bg-[#5d9d9f] rounded-[6px]" />
                </div>
                <div className="flex flex-col gap-[12px] justify-center  self-stretch shrink-0 flex-nowrap relative">
                  {[
                    "الطلاب المعتمدون في الجامعات الحكوميه",
                    "تكون سعودي الجنسية",
                    "الحد الادنى ترم دراسي واحد ومكافاءه ثمان مية ريال",
                    "الحد الادنى لمدة التمويل 3شهر وحد اعلى 9شهر",
                    "الحد الاعلى اربع الالف والحد الادنى الف وخمس ميه ريال",
                  ].map((condition, idx) => (
                    <div
                      key={idx}
                      className="flex gap-[12px]  items-center self-stretch shrink-0 flex-nowrap"
                    >
                      <span className="flex w-[380px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                        {condition}
                      </span>
                      <div className="w-[40px] h-[40px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat rounded-[999px] relative overflow-hidden" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative">
            <div className="flex flex-col gap-[16px] justify-center  self-stretch shrink-0 flex-nowrap relative">
              <span className="flex w-[191px] h-[44px]  items-start shrink-0 basis-auto text-[24px] font-semibold leading-[43.68px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                منتج شباب طويق
              </span>
              <span className="h-[32px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                نساعدكم في اعتمد لتمويل مصروفاتكم الاستهلاكية والمدرسية لدعمكم في مرحلتكم الجامعية
              </span>
            </div>
            <div className="flex flex-col gap-[9px] items-start self-stretch shrink-0 flex-nowrap relative">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative">
                <span className="flex w-[145px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#5d9d9f] relative text-center whitespace-nowrap">
                  الحد الأقصى للتمويل
                </span>
                <span className="flex w-[128px] h-[44px]  items-start shrink-0 basis-auto text-[24px] font-semibold leading-[43.68px] text-[#5d9d9f] relative text-right whitespace-nowrap">
                  4,000 ريال
                </span>
              </div>
              <button className="flex p-[14px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative pointer">
                <span className="flex w-[81px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-center whitespace-nowrap">
                  طلب تمويل
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesPage;
