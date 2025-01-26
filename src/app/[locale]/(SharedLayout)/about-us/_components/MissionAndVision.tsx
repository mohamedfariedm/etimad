import { TFunction } from "i18next";
import React from "react";


function MissionAndVision({ t }: { t: TFunction }) {
  return (
    <div className="main-container flex w-full lg:w-[1152px] flex-col gap-[64px] items-start flex-nowrap relative mx-auto my-0 px-5 lg:px-0">
    <div className="flex flex-col gap-[24px]  self-stretch shrink-0 flex-nowrap relative">
      <span className="lg:h-[58px] self-stretch shrink-0 basis-auto  text-[32px] font-semibold bukra-semi-bold leading-[58px] text-[#5d9d9f] relative text-center lg:whitespace-nowrap z-[1]">
        شركة اعتمد للتمويل
      </span>
      <span className="flex lg:w-[1135px] lg:h-[105px]  items-start self-stretch shrink-0  text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-right z-[2]">
        شركة اعتمد هي شركة خدمات مالية مختصة لتقديم حلول مالية للأفراد . مع فريق من
        المهنيين ذوي المهارات العالية ونهج يركز على العميل ، كما نقدم مجموعة واسعة
        من الخدمات المالية المصممة لتلبية الاحتياجات المتنوعة لعملائنا . و تحقيق
        اهدافكم الماليه من خلال حلول مبتكره وخدمة استثنائيه فنحن في اعتمد نلتزم
        معكم بتقديم افضل الخدمات التمويليه وفترات سداد مرنه . ونسعى جاهدين لبناء
        علاقات طويلة الأمد مبنية على الثقة والالتزام ، بما يضمن النجاح المالي
        لعملائنا.
      </span>
    </div>
    <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
      <div className="flex gap-[64px] flex-col lg:flex-row items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
      <div
          className=" w-[500px] h-[500px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[18]"
          style={{ backgroundImage: "url(/assets/images/mission&vission/vision.svg)" }}
        />
        <div className="flex w-full lg:w-[588px] flex-col gap-[24px]  shrink-0 flex-nowrap relative z-[5]">
          <span className="h-[58px] self-stretch shrink-0 basis-auto  text-[32px] font-semibold bukra-semi-bold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[6]">
            الرسالة
          </span>
          <span className="flex w-full lg:w-[568px] lg:h-[70px]  items-start self-stretch shrink-0  text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-right z-[7]">
            تسـعى بـأن نسـاهم بشكل فعـال مـن خـلال دمـج جـودة الخدمة والاستثمار في
            التحـول الرقمي والتركيز على احتياجات العملاء وأهدافهم بطريقة سريعة
            وفعالة
          </span>
        </div>
    
      </div>
      <div className="flex gap-[64px] flex-col lg:flex-row items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
        
        <div className="flex lg:w-[588px] flex-col gap-[24px]  shrink-0 flex-nowrap relative z-[19]">
          <span className=" lg:h-[58px] self-stretch shrink-0 basis-auto  text-[32px] font-semibold bukra-semi-bold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-20">
            الرؤية
          </span>
          <span className="flex lg:w-[568px] lg:h-[105px]  items-start self-stretch shrink-0  text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-right z-[21]">
            نسـاعـد عملائنـا الكـرام على تحقيق رغباتهم وطمـوحـاتهم بأسـرع
            الحـلـول أسـهـل الطـرق ، وأن تكـون أحـد الشـركات المتميزة والصاعدة
            بما تقدم من خدمات وخيارات تمويلية ميسرة في المملكة العربية
            السعودية .
          </span>
        </div>
  
        <div
          className="w-[500px] h-[500px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[18]"
          style={{ backgroundImage: "url(/assets/images/mission&vission/mission.svg)" }}
        />
      </div>
    </div>
  </div>



  );
}

export default MissionAndVision;
