import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["contactUs"]);

  return (
<>
<BreadCrumbComponent/>
<div className="main-container flex w-full xl:w-[1152px] flex-col gap-[96px] items-center flex-nowrap relative mx-auto my-0">
      <div className="flex w-full xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
        <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
            <span className="flex   justify-end items-start shrink-0 basis-auto bukra-semi-bold text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[3]">
            شروط وأحكام استخدام الموقع
                        </span>
            <span className="flex w-full xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0  text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-center z-[4]">
            مرحبًا بك في موقعنا. يُرجى قراءة شروط الاستخدام التالية بعناية قبل استخدام هذا الموقع. باستخدامك الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يُرجى التوقف عن استخدام الموقع فورًا.
            </span>
          </div>
        </div>
      </div>
      <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
          1. قبول الشروط:
          </p>
          <p className="text-[18px] ltr:text-start flex font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            باستخدام الموقع، فإنك توافق على الالتزام بشروط الاستخدام هذه، بالإضافة إلى أي قوانين ولوائح محلية أو دولية معمول بها.          </p>
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]">
          2. حقوق الملكية الفكرية:
                    </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            جميع المحتويات المعروضة على الموقع، بما في ذلك النصوص، الصور، الشعارات، والبرمجيات، هي ملك للشركة ومحمية بموجب قوانين حقوق الملكية الفكرية.          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            يُمنع نسخ أو تعديل أو توزيع أي محتوى دون إذن كتابي مسبق من الشركة.
                      </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
          3. استخدام الموقع:
                    </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            يُسمح باستخدام الموقع لأغراض قانونية فقط وبما يتوافق مع هذه الشروط.          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            يُمنع استخدام الموقع بأي طريقة تؤدي إلى انتهاك حقوق الآخرين أو تعطيل العمليات على الموقع.          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
          4. تسجيل الحساب:             </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            يلتزم المستخدم بتقديم معلومات صحيحة وكاملة عند تسجيل الحساب.    
                  
                  </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            الشركة تحتفظ بالحق في إلغاء أو تعليق أي حساب يتم استخدامه بطريقة تخالف هذه الشروط.
                  </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
          5. سياسة الخصوصية:
                    </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            باستخدام الموقع، فإنك توافق على سياسة الخصوصية الخاصة بنا التي تنظم كيفية جمع واستخدام بياناتك الشخصية.          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            للاطلاع على سياسة الخصوصية، يُرجى زيارة [رابط صفحة الخصوصية].
                      </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
          6. الإخلاء من المسؤولية:
                    </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            يتم توفير المحتوى والخدمات \"كما هي\" دون أي ضمانات صريحة أو ضمنية.
                      </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            الشركة غير مسؤولة عن أي أضرار ناتجة عن استخدام الموقع.          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#5d9d9f]">
          7. تعديلات على الشروط:
                    </p>
          <p className="text-[18px] flex font-normal ltr:text-start leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            تحتفظ الشركة بالحق في تعديل هذه الشروط في أي وقت.          </p>
          <p className="text-[18px] flex font-normal ltr:text-start leading-[32px] text-[#5d9d9f]">
            <span style={{ margin: "0 10px" }}>•</span>
            سيتم إخطار المستخدمين بالتعديلات الجديدة، واستمرار استخدامك الموقع يعني موافقتك على الشروط المعدلة.          </p>
        </div>
    </div>
</>
  );
}

export default page;
