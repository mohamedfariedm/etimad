"use client";
import React, { useState } from "react";

function Faq() {
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    if (activeButtons.includes(index)) {
      // Remove index if it's already active
      setActiveButtons(activeButtons.filter((i) => i !== index));
    } else {
      // Add index to the active list
      setActiveButtons([...activeButtons, index]);
    }
  };

  return (
    <div className="main-container flex w-full lg:w-[1152px] flex-col gap-[32px] items-start flex-nowrap relative mx-auto my-0">
      <div className="w-full lg:w-[1152px] h-[374px] relative mx-auto my-0">
        <div className="w-full lg:w-[1152px] h-[374px] bg-[url(/assets/images/faq/frame.svg)] bg-cover bg-no-repeat rounded-[32px] absolute top-0 left-0" />
        <div className="flex w-full lg:w-[466px] h-[150px] flex-col gap-[24px] flex-nowrap absolute top-[112px] lg:left-[576px] z-[1]">
          <span className="h-[36px] self-stretch shrink-0 basis-auto text-[24px] font-semibold leading-[36px] text-[#fff] relative text-right whitespace-nowrap z-[2]">
            الاسئلة الشائعة
          </span>
          <span className="flex w-full lg:w-[466px] h-[90px] items-start self-stretch shrink-0 text-[16px] font-medium leading-[30.4px] text-[#f8fbfc] relative text-right z-[3]">
            شركة اعتمد هي شركة خدمات ماليه رائده لتقديم حلول ماليه للافراد مع فريق
            من المهنيين ذوي المهارات العاليه ونهج يركز على العميل
          </span>
        </div>
      </div>

      <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-wrap relative z-[1] transition-all duration-1000 ease-in-out">
        {[
          {
            text: "كيف اقدم بطلب التمويل ؟",
            details:
            "تأسست شركة اعتمد للتمويل في عام 2023 لتقديم الحلول التمويلية المتوافقة مع الشريعة الإسلامية للأفراد ووفقًا للأنظمة والقواعد والتعليمات الصادرة عن البنك المركزي السعودي والتي تنظم قواعد التمويل الاستهلاكي المصغر.",
          },
          {
            text: "ماهي طرق الدفع ؟",
            details:               "تأسست شركة اعتمد للتمويل في عام 2023 لتقديم الحلول التمويلية المتوافقة مع الشريعة الإسلامية للأفراد ووفقًا للأنظمة والقواعد والتعليمات الصادرة عن البنك المركزي السعودي والتي تنظم قواعد التمويل الاستهلاكي المصغر.",

          },
          {
            text: "ماهي شركة أعتمد للتمويل ؟",
            details:
              "تأسست شركة اعتمد للتمويل في عام 2023 لتقديم الحلول التمويلية المتوافقة مع الشريعة الإسلامية للأفراد ووفقًا للأنظمة والقواعد والتعليمات الصادرة عن البنك المركزي السعودي والتي تنظم قواعد التمويل الاستهلاكي المصغر.",
          },
          {
            text: "ماهي شركة أعتمد للتمويل ؟",
            details:
              "تأسست شركة اعتمد للتمويل في عام 2023 لتقديم الحلول التمويلية المتوافقة مع الشريعة الإسلامية للأفراد ووفقًا للأنظمة والقواعد والتعليمات الصادرة عن البنك المركزي السعودي والتي تنظم قواعد التمويل الاستهلاكي المصغر.",
          },
          {
            text: "ماهي شركة أعتمد للتمويل ؟",
            details:
              "تأسست شركة اعتمد للتمويل في عام 2023 لتقديم الحلول التمويلية المتوافقة مع الشريعة الإسلامية للأفراد ووفقًا للأنظمة والقواعد والتعليمات الصادرة عن البنك المركزي السعودي والتي تنظم قواعد التمويل الاستهلاكي المصغر.",
          },
          {
            text: "ماهي شركة أعتمد للتمويل ؟",
            details:
              "تأسست شركة اعتمد للتمويل في عام 2023 لتقديم الحلول التمويلية المتوافقة مع الشريعة الإسلامية للأفراد ووفقًا للأنظمة والقواعد والتعليمات الصادرة عن البنك المركزي السعودي والتي تنظم قواعد التمويل الاستهلاكي المصغر.",
          },
        ].map((item, index) => (
          <button
            key={index}
            className={`flex transition-all duration-1000 ease-in-out ${
              activeButtons.includes(index)
                ? "w-[564px] flex-col gap-[40px] h-auto"
                : "w-[564px] flex-row gap-[72px] h-[auto]"
            } pt-[16px] pr-[32px] pb-[16px] pl-[32px] justify-between items-center flex-nowrap bg-[#f8fbfc] rounded-[16px] border-none relative z-[2] pointer`}
            onClick={() => toggleDropdown(index)}
          >
            <>
              <div className="transition-all duration-1000 ease-in-out w-full">
                <div className="w-[333px] h-[62px] shrink-0 bg-[url(/assets/images/faq/rectangle.svg)] bg-cover bg-no-repeat rounded-tl-[4.5px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[4.5px] absolute top-0 right-0 z-[5]">
                  <div className="w-[4px] h-[25px] bg-[#5d9d9f] rounded-[4.5px] absolute top-[19px] right-0 z-[4]" />
                </div>
                <div className=" w-full flex justify-between items-center  relative">
                  <span className="flex w-[211px] h-[30px] items-start shrink-0 basis-auto text-[16px] font-medium leading-[30px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[2]">
                    {item.text}
                  </span>
                  <div
                    className={`w-[24px] h-[24px] shrink-0 bg-cover bg-no-repeat relative z-[1]`}
                    style={{
                      backgroundImage: `url(${
                        activeButtons.includes(index)
                          ? "/assets/images/faq/remove-02.svg"
                          : "/assets/images/faq/cancel-02.svg"
                      })`,
                    }}
                  />
                </div>
                <span
                  className={
                    activeButtons.includes(index)
                      ? "flex w-[500px] h-[130px] items-end self-stretch shrink-0 text-[14px] font-normal leading-[25.48px] text-[#90bbbd] tracking-[0.28px] relative text-right z-[3] transition-all duration-500 ease-in-out opacity-100"
                      : "h-[0px] opacity-0 transition-all duration-500 ease-in-out"
                  }
                >
                  {activeButtons.includes(index) ? item.details : ""}
                </span>
              </div>
            </>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Faq;
