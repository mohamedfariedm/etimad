import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";


function Products({ t }: { t: TFunction }) {
  return (
<div className="main-container w-full flex xl:w-[1152px] flex-col gap-[128px] items-start flex-nowrap relative mx-auto my-0">
  <div className="flex gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap relative">
    <div
      className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[1]"
      style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)" }}
      />
    <span className="flex bukra-semi-bold w-[227px] h-[58px] justify-center items-start shrink-0 basis-auto  text-[32px] font-semibold leading-[57.6px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[2]">
      منتجات التمويل
    </span>
    <div
      className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[3]"
      style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)",rotate:"180deg" }}
      />
  </div>
  <div className="flex gap-x-[24px] gap-y-[104px] items-center justify-center xl:items-start self-stretch shrink-0 flex-wrap relative z-[4]">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="flex w-[368px] pt-[64px] group pr-[24px] pb-[16px] pl-[24px] flex-col gap-[16px] items-center flex-nowrap bg-[#f8fbfc] rounded-[24px] relative"
      >
        <div
          className="flex w-[96px] h-[96px] pt-[16px] bg-[url(/assets/images/products/after.svg)] group-hover:bg-[url(/assets/images/products/before.svg)] transition-all
           duration-300 pr-[16px] pb-[16px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap  rounded-[24px] absolute top-[-48px] left-1/2 translate-x-[-50%] translate-y-0"
        >
          <div
            className="w-[64px] h-[64px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden"
            style={{
              backgroundImage: `url(/assets/images/products/component${index + 1}.svg)`,
            }}
          />
        </div>
        <div
          className="flex pt-[16px] pr-0 pb-[16px] pl-0 flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative"
          style={{ zIndex: 6 + index * 10 }}
        >
          <span className="h-[30px] self-stretch shrink-0 basis-auto  text-[20px] font-semibold leading-[30px] bg-gradient-to-bl from-[#5D9D9F]  to-[#3EDADF] bg-clip-text text-transparent relative text-center whitespace-nowrap">
            {index === 0 && "السفر"}
            {index === 1 && "شباب طويق"}
            {index === 2 && "الاستقدام"}
            {index === 3 && "التمويل الشخصي"}
            {index === 4 && "التجميل"}
            {index === 5 && "سلعتي"}
          </span>
          <span className="flex w-[320px] h-[64px] justify-center items-start self-stretch shrink-0  text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-center">
            {index === 0 &&
              "لنجعل سفرك أسهل وأفضل عبر أفضل شركات السياحة المختارة."}
            {index === 1 &&
              "ندعم طلابنا في تمويل مستلزماتهم الدراسية الجامعية والمدرسية."}
            {index === 2 &&
              "نساعدك في تمويل تكاليف استقدام العمالة المنزلية بكل سهولة."}
            {index === 3 &&
              "نوفر لك تمويلًا سريعًا ومرنًا يلبي احتياجاتك ومصاريفك الاستهلاكية."}
            {index === 4 &&
              "موّل احتياجاتك التجميلية وتكاليف العناية بك بسهولة ومرونة."}
            {index === 5 &&
              "سدد مشترياتك واحتياجاتك اليومية بسهولة عبر خدماتنا المرنة والمميزة."}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>



  );
}

export default Products;
