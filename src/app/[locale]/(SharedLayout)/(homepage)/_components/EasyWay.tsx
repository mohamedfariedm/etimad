import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";


function EasyWay({ t }: { t: TFunction }) {
  return (
<div className="main-container flex w-full xl:w-[1152px] flex-col gap-[64px] items-center flex-wrap xl:flex-nowrap relative mx-auto my-0">
  <div className="flex w-full xl:w-[750px] flex-col gap-[12px] items-center shrink-0 flex-wrap xl:flex-nowrap relative">
    <div className="flex gap-[24px] justify-center items-center self-stretch shrink-0 flex-wrap xl:flex-nowrap relative z-[1]">
      <div
        className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[2]"
        style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)" }}
      />
      <span className="flex w-full xl:w-[500px] xl:h-[58px] justify-center items-start shrink-0 basis-auto  text-[32px] font-semibold leading-[57.6px] text-[#5d9d9f] relative text-center xl:whitespace-nowrap z-[3]">
        تجربة تمويل سهلة، سريعة، وآمنة
      </span>
      <div
        className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[4]"
        style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)",rotate:"180deg" }}
      />
    </div>
    <span className="xl:h-[24px] self-stretch shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#90bbbd] relative text-center xl:whitespace-nowrap z-[5]">
      كل احتياجتك المالية تلقاها في مكان واحدا بخطوات سهلة وأمنة
    </span>
  </div>
  <div className="flex justify-between items-center self-stretch shrink-0  flex-wrap xl:flex-nowrap relative z-[6]">
  <div className="w-[368px] h-[101px] shrink-0 relative z-[21]">
      <div className="w-[336px] h-[101px] bg-[#f8fbfc] rounded-[16px] absolute top-0 left-0 z-[22]" />
      <div
        className="flex w-[64px] h-[64px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center flex-wrap xl:flex-nowrap rounded-[16px] absolute top-[19px] left-[304px] z-[26]"
        style={{ backgroundImage: "url(/assets/images/eassyway/frame1.svg)"}}
      />
      <div className="flex w-[212px] h-[61px] flex-col gap-[4px] items-start flex-wrap xl:flex-nowrap absolute top-1/2 left-[68px] translate-x-0 translate-y-[-50%] z-[23]">
        <span className="h-[30px] self-stretch shrink-0 basis-auto  text-[20px] font-medium leading-[30px] text-[#5d9d9f] relative text-right xl:whitespace-nowrap z-[24]">
          ســريــعـــة
        </span>
        <span className="flex w-[218px] h-[27px] justify-start items-start shrink-0 basis-auto  text-[14px] font-normal leading-[26.6px] text-[#5d9d9f] relative text-right xl:whitespace-nowrap z-[25]">
          احصل على التمويل في وقت قياسي
        </span>
      </div>
    </div>

    <div className="w-[368px] h-[101px] shrink-0 relative z-[14]">
      <div className="w-[336px] h-[101px] bg-[#f8fbfc] rounded-[16px] absolute top-0 left-0 z-[15]" />
      <div
        className="flex w-[64px] h-[64px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center flex-wrap xl:flex-nowrap rounded-[16px] absolute top-[19px] left-[304px] z-[19]"
        style={{ backgroundImage: "url(/assets/images/eassyway/frame2.svg)" }}
      />
      <div className="flex w-[212px] h-[61px] flex-col gap-[4px] items-start flex-wrap xl:flex-nowrap absolute top-1/2 left-[68px] translate-x-0 translate-y-[-50%] z-[16]">
        <span className="h-[30px] self-stretch shrink-0 basis-auto  text-[20px] font-medium leading-[30px] text-[#5d9d9f] relative text-right xl:whitespace-nowrap z-[17]">
          أمـــانـــة
        </span>
        <span className="flex w-[210px] h-[27px] justify-start items-start shrink-0 basis-auto  text-[14px] font-normal leading-[26.6px] text-[#5d9d9f] relative text-right xl:whitespace-nowrap z-[18]">
          تمويلك محمي بأعلى معايير الأمان
        </span>
      </div>
    </div>
    <div className="w-[368px] h-[101px] shrink-0 relative z-[7]">
      <div className="w-[336px] h-[101px] bg-[#f8fbfc] rounded-[16px] absolute top-0 left-0 z-[8]" />
      <div
        className="flex w-[64px] h-[64px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center flex-wrap xl:flex-nowrap rounded-[16px] absolute top-[19px] left-[304px] z-[12]"
        style={{ backgroundImage: "url(/assets/images/eassyway/frame3.svg)" }}
      />
      <div className="flex w-[212px] h-[61px] flex-col gap-[4px] items-start flex-wrap xl:flex-nowrap absolute top-1/2 left-[68px] translate-x-0 translate-y-[-50%] z-[9]">
        <span className="h-[30px] self-stretch shrink-0 basis-auto  text-[20px] font-medium leading-[30px] text-[#5d9d9f] relative text-right xl:whitespace-nowrap z-10">
          ســـهـــلـــة
        </span>
        <span className="flex w-[193px] h-[27px] justify-start items-start shrink-0 basis-auto  text-[14px] font-normal leading-[26.6px] text-[#5d9d9f] relative text-right xl:whitespace-nowrap z-[11]">
          إجراءات بسيطة وخطوات ميسّرة
        </span>
      </div>
    </div>
  </div>
</div>


  );
}

export default EasyWay;
