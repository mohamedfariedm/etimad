import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";

function Tamwilk({ t }: { t: TFunction }) {
  return (
    <div className="main-container w-full flex flex-col items-center lg:flex-row lg:w-[1152px] lg:h-[443.254px] relative mx-auto my-0">
      <div className="w-[500px] h-[460px] bg-[url(/assets/images/tamilak/tamwil.svg)] overflow-hidden z-[1]"></div>
      <div className="flex w-full lg:w-[564px] lg:h-[222px] flex-col gap-[24px] items-end flex-nowrap lg:absolute top-[126.254px] left-0 z-[47]">
        <div className="flex gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[48]">
          <span className="flex lg:w-[184px] bukra-semi-bold lg:h-[58px] items-start shrink-0 basis-auto text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-50">
            {t("tamwilk.title")}
          </span>
          <div className="w-[176px] h-[3px] shrink-0 bg-[url(/assets/images/eassyway/line.svg)] rotate-180 bg-cover bg-no-repeat rounded-[4px] relative z-[49]" />
        </div>
        <span className="flex lg:w-[564px] lg:h-[140px] items-start self-stretch shrink-0 text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-right z-50">
          {t("tamwilk.description")}
        </span>
      </div>
    </div>
  );
}

export default Tamwilk;
