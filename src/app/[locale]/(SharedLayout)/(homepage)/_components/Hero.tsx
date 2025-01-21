import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";


function Hero({ t }: { t: TFunction }) {
  return (
<div className="w-full xl:w-[1440px] h-[1200px] sm:h-[1041px] mx-auto my-0">
  <div className="flex w-full  xl:w-[686px] flex-col gap-[64px] items-center flex-nowrap relative z-[1] mt-[236px] mx-auto">
    <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
      <span className="flex w-full xl:w-[686px] xl:h-[232px] justify-center items-start self-stretch shrink-0  text-[64px] font-bold leading-[116.48px] text-[#fff] relative text-center z-[3]">
        تمويل يلبي احتياجاتك بأبسط الخطوات
      </span>
      <span className="flex lg:w-[546px] h-[64px] justify-center items-start shrink-0  text-[16px] font-medium leading-[32px] text-[#f8fbfc] relative text-center z-[4]">
        نوفر لك خيارات تمويل شخصية وتجارية بمرونة عالية، سرعة في الإجراءات،
        وشروط مُيسرة تناسب احتياجاتك.
      </span>
    </div>
    <div className="flex w-[350px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[5]">
    <button className="flex w-[163px] pt-[12px] pr-[46px] pb-[12px] pl-[46px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#5d9d9f] relative z-[8] pointer">
        <span className="flex w-[39px] h-[21px] justify-center items-start shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#fff] relative text-center whitespace-nowrap z-[9]">
          المزيد
        </span>
      </button>
      <button className="flex w-[163px] pt-[12px] pr-[46px] pb-[12px] pl-[46px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative z-[6] pointer">
        <span className="flex w-[71px] h-[21px] justify-center items-start shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
          طلب تمويل
        </span>
      </button>

    </div>
    <div className="flex w-[291.75px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-10">
      <span className="h-[25px] shrink-0 basis-auto  text-[14px] font-normal leading-[25px] text-[#90bbbd] relative text-left whitespace-nowrap z-[11]">
        قم بتنزيل التطبيق الان
      </span>
      <div className="flex w-[291.75px] gap-[14px] items-center shrink-0 flex-nowrap relative z-[12]">
        <button className="w-[130.125px] h-[44px] shrink-0 bg-[url(/assets/images/hero/group.png)] bg-contain bg-no-repeat border-none relative overflow-hidden z-[13] pointer" />
        <button className="w-[147.125px] h-[44px] shrink-0 bg-[url(/assets/images/hero/Badge.svg)] bg-cover bg-no-repeat border-none relative overflow-hidden z-[13] pointer" />

      </div>
    </div>
  </div>
  <div className="flex w-[64px] h-[32px] pt-[16px]  pb-[16px]  flex-col gap-[8px] items-center flex-nowrap  relative overflow-hidden z-[29] mt-[35px] mb-0">
  </div>

  <div className="flex w-full xl:w-[1152px] h-[56px] justify-between items-center relative z-[17] mt-[17px]  mb-0 mx-auto">
    <div className="flex w-[248px] gap-[32px] items-center shrink-0 flex-nowrap relative z-[17]">
    <div className="flex w-[144px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[24]">
    <div className="flex w-[64px] h-[46px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[32px] relative z-[27]">
          <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/images/hero/arrow-right-01.svg)] bg-cover bg-no-repeat relative z-[28]" />
        </div>
        <div className="flex w-[64px] h-[46px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-solid border border-[#5d9d9f] relative z-[25] pointer">
          <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/images/hero/arrow-left-01.svg)] bg-cover bg-no-repeat relative z-[26]" />
        </div>

      </div>
      <div className="flex w-[72px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[18]">
        <div className="w-[8px] h-[8px] shrink-0 bg-[#fff] rounded-[24px] relative z-[19]" />
        <div className="w-[8px] h-[8px] shrink-0 bg-[#fff] rounded-[24px] opacity-40 relative z-20" />
        <div className="w-[8px] h-[8px] shrink-0 bg-[#fff] rounded-[24px] opacity-40 relative z-[21]" />
        <div className="w-[8px] h-[8px] shrink-0 bg-[#fff] rounded-[24px] opacity-40 relative z-[22]" />
        <div className="w-[8px] h-[8px] shrink-0 bg-[#fff] rounded-[24px] opacity-40 relative z-[23]" />
      </div>

    </div>
    <div className="w-[56px] h-[56px]  flex justify-center items-center  relative z-[16]" >
<Arrow/>

    </div>
  </div>
  <div className="w-full xl:w-full h-[1200px] sm:h-[1041px] bg-[url(/assets/images/hero/mainbanner.svg)] bg-cover bg-no-repeat absolute top-0 left-1/2 translate-x-[-50%] translate-y-0" />
</div>

  );
}

export default Hero;
