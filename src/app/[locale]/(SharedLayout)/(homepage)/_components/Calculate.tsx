import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";


function Calculate({ t }: { t: TFunction }) {
  return (
    <div className="main-container flex w-full flex-col xl:flex-row xl:w-[1152px] gap-[24px] items-center flex-nowrap relative mx-auto my-0">

    <div className="flex w-full xl:w-[564px] h-[674px] flex-col gap-[32px] items-start shrink-0 flex-nowrap relative z-[52]">
      <div className="self-stretch grow shrink-0 basis-0 bg-[url(/assets/images/calculate/hero.svg)] bg-cover bg-no-repeat rounded-[24px] relative z-[53]" />
      <div className="flex w-full xl:w-[516px] xl:h-[120px] flex-col gap-[24px]  shrink-0 xl:flex-nowrap absolute bottom-[64px] left-1/2 translate-x-[-50%] translate-y-0 z-[54]">
        <span className="xl:h-[36px] self-stretch shrink-0 basis-auto  text-[24px] font-semibold leading-[36px] text-[#fff] relative  xl:whitespace-nowrap z-[55]">
          الاله الحاسبة التقريبية
        </span>
        <span className="flex w-full xl:w-[516px]  xl:h-[60px]  items-start self-stretch shrink-0  text-[16px] font-medium leading-[30.4px] text-[#f8fbfc] relative  z-[56]">
          وهي آلة حاسبة إرشادية وليست إلزامية يمكنك من خلالها معرفة القسط
          المستحق كل شهر + الفترة التي تدخل فيها المبلغ وفترة السداد شهريا.
        </span>
      </div>
    </div>
    <div className="flex w-full flex-col xl:flex-row xl:w-[564px] gap-[21px]  shrink-0 flex-wrap bg-[#f8fbfc] rounded-[24px] relative">
      <div className="flex pt-[32px] pr-[24px] pb-[8px] pl-[8px] gap-[8px]   xl:grow basis-0 flex-nowrap relative z-[1]">
        <span className="flex w-full xl:w-[366px] xl:h-[21px] justify-start xl:justify-center items-start shrink-0 basis-auto  text-[14px] font-normal leading-[21px] text-[#667680] relative text-center xl:whitespace-nowrap z-[2]">
        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/images/calculate/information-circle.svg)] bg-cover bg-no-repeat relative z-[3]" />
          أدخل مبلغ التمويل والمدة لمعرفة قسطك الشهري المتوقع
        </span>
      </div>
      <div className="flex w-full xl:w-[564px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-start flex-nowrap rounded-[16px] relative z-[4]">
        <div className="flex flex-col gap-[14px]  self-stretch shrink-0 flex-nowrap relative z-[5]">
        <div className="main-container flex w-full xl:w-[516px] flex-col gap-[14px]  flex-nowrap relative mx-auto my-0">
      <span className="h-[21px] self-stretch shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#667680] relative text-right whitespace-nowrap">
        مبلغ التمويل (بالريال)
      </span>
      <div className="flex h-[64px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[8px]  items-center self-stretch shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#f8fbfc] relative overflow-hidden z-[1]">
        <input placeholder="1000 ر.س" className="w-full xl:w-[516px] h-[64px] shrink-0 bg-transparent border-none absolute top-[-1px] text-[#667680] left-[-1px] z-[3] px-6" />
      </div>
    </div>
        </div>
        <div className="flex h-[32px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#eaefef] rounded-[12px] relative z-[9]">
          <div className="flex w-[256px] h-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px]  items-center shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[12px] relative z-10">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/images/calculate/drag-drop-vertical.svg)] bg-cover bg-no-repeat relative z-[11]" />
          </div>
        </div>
      </div>
      <div className="flex w-full xl:w-[564px] pt-[24px] xl:pr-[24px] pb-[24px] xl:pl-[24px] flex-col gap-[12px] justify-center  flex-nowrap rounded-[16px] relative z-[12]">
        <div className="flex flex-col gap-[14px] items-start self-stretch shrink-0 flex-nowrap relative z-[13]">
          <div className="flex flex-col gap-[14px]  self-stretch shrink-0 flex-nowrap relative z-[14]">
            <span className="h-[21px] self-stretch shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#667680] relative  whitespace-nowrap z-[15]">
              مدة السداد (بالأشهر)
            </span>
          </div>
          <div className="flex gap-[16px]  items-center justify-center xl:justify-start xl:items-start self-stretch shrink-0 flex-wrap relative z-[16]">
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[17] pointer">
              <span className="flex w-[23px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[18]">
                30
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[27] pointer">
              <span className="flex w-[25px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[28]">
                60
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[19] pointer">
              <span className="flex w-[23px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-20">
                24
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[29] pointer">
              <span className="flex w-[23px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[30]">
                54
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[21] pointer">
              <span className="flex w-[20px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[22]">
                18
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[31] pointer">
              <span className="flex w-[24px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[32]">
                48
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[23] pointer">
              <span className="flex w-[19px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[24]">
                12
              </span>
            </button>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[33] pointer">
              <span className="flex w-[23px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[34]">
                42
              </span>
            </button>
            <div className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#5d9d9f] rounded-[32px] relative z-[25]">
              <span className="flex w-[13px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#fff] relative text-center whitespace-nowrap z-[26]">
                6
              </span>
            </div>
            <button className="flex w-[90px] h-[44px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[8px] justify-center items-center flex-nowrap bg-[#eaefef] rounded-[32px] border-none relative z-[35] pointer">
              <span className="flex w-[24px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[36]">
                36
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full xl:w-[564px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[24px] justify-center items-start flex-nowrap relative z-[37]">
        <button className="flex pt-[16px] pr-[72px] pb-[16px] pl-[72px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative z-[38] pointer">
          <span className="flex w-[103px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#fff] relative text-center whitespace-nowrap z-[39]">
            احسب القسط
          </span>
        </button>
        <div className="flex justify-between items-start self-stretch shrink-0 flex-wrap gap-2 xl:flex-nowrap relative z-40">
        <div className="flex w-[106px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[49]">
            <span className="flex w-[106px] h-[21px] justify-center items-start shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#5d9d9f] relative text-center whitespace-nowrap z-50">
              القسط الشهري
            </span>
            <span className="flex w-[82px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-bold leading-[24px] text-[#667680] relative text-center whitespace-nowrap z-[51]">
              5767 ر.س
            </span>
          </div>
          

          <div className="flex w-[97px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[45]">
            <span className="flex w-[97px] h-[21px] justify-center items-start shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[46]">
              المبلغ الإجمالي
            </span>
            <span className="flex w-[84px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-bold leading-[24px] text-[#667680] relative text-center whitespace-nowrap z-[47]">
              6557 ر.س
            </span>
          </div>

          <div className="flex w-[93px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[41]">
            <span className="flex w-[76px] h-[21px] justify-center items-start shrink-0 basis-auto  text-[14px] font-medium leading-[21px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[42]">
              اجمالي الربح
            </span>
            <span className="flex w-[93px] h-[24px] justify-center items-start shrink-0 basis-auto  text-[16px] font-bold leading-[24px] text-[#667680] relative text-center whitespace-nowrap z-[43]">
              56767 ر.س
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>



  );
}

export default Calculate;
