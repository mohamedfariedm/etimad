import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["contactUs"]);

  return (
<>
<BreadCrumbComponent/>
<div className="main-container flex w-full xl:w-[1152px] flex-col gap-[96px] items-center flex-nowrap relative mx-auto my-0">
      <div className="flex w-full xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative my-2">
        <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
            <span className="flex   justify-end items-start shrink-0 basis-auto bukra-semi-bold text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[3]">
            سياسة الخصوصية الخاصة بنا
                                    </span>
            <span className="flex w-full xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0  text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-center z-[4]">
            في إنجاز، نلتزم بحماية خصوصية معلوماتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام وحماية بياناتك عند استخدام خدماتنا. نأخذ خصوصيتك على محمل الجد ونتعهد بالحفاظ على الأمان والسرية في جميع الأوقات.            </span>
          </div>
        </div>
      </div>
      <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          1. المعلومات التي نقوم بجمعها:                    </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          نقوم بجمع المعلومات التالية عند استخدامك لموقعنا أو خدماتنا:            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
          المعلومات الشخصية: مثل الاسم، البريد الإلكتروني، رقم الهاتف، ومعلومات الحساب التي تقدمها عند التسجيل أو استخدام خدماتنا.
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          المعلومات التلقائية: مثل عنوان الـ IP، متصفح الإنترنت، وأنواع الأجهزة المستخدمة، والتي يتم جمعها أثناء تصفح الموقع.          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          2. كيفية استخدام المعلومات:          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          نستخدم معلوماتك الشخصية للغرض التالي:            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          تحسين الخدمات: لتقديم خدمات مخصصة وتقديم الدعم الفني.          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          التواصل: للتواصل معك بشأن تحديثات الخدمة أو الرد على استفساراتك.          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          تحليل البيانات: لفهم كيفية استخدام خدماتنا وتحسين تجربة المستخدم.          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          3. حماية بياناتك:          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
          نحن نتخذ جميع التدابير اللازمة لحماية معلوماتك الشخصية باستخدام تقنيات الأمان المناسبة مثل التشفير وحماية البيانات. ومع ذلك، لا يمكننا ضمان الأمان الكامل في بيئة الإنترنت.
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          4. مشاركة البيانات مع أطراف ثالثة:          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
          مقدمو الخدمات: قد نشارك معلوماتك مع أطراف ثالثة تساعدنا في توفير الخدمات (مثل مزودي الدفع، ومقدمي الدعم التقني).
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          الامتثال للقانون: قد نكشف عن معلوماتك إذا كان ذلك مطلوبًا بموجب القانون أو للاستجابة لطلبات السلطات القضائية.
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          5. ملفات تعريف الارتباط (Cookies):          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
          نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع وتخصيص المحتوى. يمكنك تعديل إعدادات المتصفح لرفض ملفات تعريف الارتباط، ولكن ذلك قد يؤثر على بعض وظائف الموقع.
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          6. حقوقك:          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          الوصول إلى البيانات: يحق لك الوصول إلى بياناتك الشخصية وتصحيحها أو تحديثها.
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          إلغاء الاشتراك: يمكنك إلغاء الاشتراك في رسائل البريد الإلكتروني التسويقية في أي وقت عبر الرابط الموجود في أسفل البريد.
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          حذف البيانات: إذا أردت حذف بياناتك من سجلاتنا، يمكنك التواصل معنا لتنفيذ ذلك.
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#5d9d9f]">
          7. التعديلات على سياسة الخصوصية:          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]">
          قد نقوم بتعديل هذه السياسة من وقت لآخر. سيتم نشر التعديلات على هذه الصفحة مع تاريخ التحديث. إذا استمرت في استخدام خدماتنا بعد التعديلات، فإنك توافق على السياسة المعدلة.
          </p>
        </div>
    </div>
</>
  );
}

export default page;
