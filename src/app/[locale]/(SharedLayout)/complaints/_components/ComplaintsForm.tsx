"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IoClose } from "react-icons/io5";
import SuccessIcon from "@/components/ui/SuccessIcon";

// Validation schema with Zod
const ComplaintsSchema = z.object({
  email: z
    .string()
    .email("يرجى إدخال بريد إلكتروني صالح")
    .min(1, "البريد الإلكتروني مطلوب"),
  fullName: z.string().min(1, "الاسم بالكامل مطلوب"),
  phone: z
    .string()
    .regex(
      /^(?:\+966|0)?5\d{8}$/,
      "يرجى إدخال رقم هاتف سعودي صالح (يبدأ بـ +966 أو 05)"
    )
    .min(1, "رقم الهاتف مطلوب"),
  reason: z.string().min(1, "سبب الشكوى مطلوب"),
  message: z.string().min(1, "الرسالة مطلوبة"),
});

type ComplaintsType = z.infer<typeof ComplaintsSchema>;

function ComplaintsForm() {
  const methods = useForm<ComplaintsType>({
    resolver: zodResolver(ComplaintsSchema),
    mode: "onChange",
  });

  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (data: ComplaintsType) => {
    setIsPending(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.custom((ts) => (
        <div className="bg-background-primary-alt border border-border-primary text-text-secondary-700 p-4 rounded-lg shadow-lg flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <SuccessIcon />
            <span className="text-sm font-medium">تم إرسال الشكوى بنجاح!</span>
          </div>
          <button
            onClick={() => toast.dismiss(ts)}
            className="text-foreground-quinary-400 hover:text-text-primary-900 transition-colors"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>
      ));

      methods.reset();
    } catch (error) {
      toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex w-full lg:w-[918px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[64px] items-center shrink-0 flex-nowrap bg-[#fbfbfb] rounded-[16px] relative z-[3]">
      <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-full  flex-col gap-[40px] items-center shrink-0 relative"
        >
          <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 relative z-[1]">
            <div className="flex flex-col lg:flex-row w-full gap-[32px] ">
            <div className="flex flex-col w-full lg:w-[411px]  gap-[8px]  self-stretch shrink-0 relative z-[2]">
              <label className="text-[14px] font-medium text-[#667680]">
                الاسم بالكامل *
              </label>
              <input
                {...methods.register("fullName")}
                placeholder="الاسم بالكامل"
                className="outline-none text-black placeholder:text-[#BABFC2]  w-full  h-[56px] bg-[#f4f4f4] rounded-[15px]  px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.fullName && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.fullName.message}
                </div>
              )}
            </div>

            <div className="flex flex-col w-full lg:w-[411px]  gap-[8px]  self-stretch shrink-0 relative z-[1]">
              <label className="text-[14px] font-medium text-[#667680]">
                البريد الإلكتروني *
              </label>
              <input
                {...methods.register("email")}
                placeholder="you@company.com"
                className="outline-none text-black placeholder:text-[#BABFC2]  w-full  h-[56px] bg-[#f4f4f4] rounded-[15px]  px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.email && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.email.message}
                </div>
              )}
            </div>



            </div>

<div className="flex w-full flex-col lg:flex-row gap-[32px]">

            <div className="flex flex-col gap-[8px] w-full lg:w-[411px]  self-stretch shrink-0 relative z-[3]">
              <label className="text-[14px] font-medium text-[#667680]">
                رقم الهاتف *
              </label>
              <input
                {...methods.register("phone")}
                placeholder="+966 5XXXXXXXX"
                className="outline-none text-black placeholder:text-[#BABFC2]  w-full  h-[56px] bg-[#f4f4f4] rounded-[15px]  px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.phone && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.phone.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px] w-full lg:w-[411px]  self-stretch shrink-0 relative z-[4]">
              <label className="text-[14px] font-medium text-[#667680]">
                سبب الشكوى *
              </label>
              <input
                {...methods.register("reason")}
                placeholder="اختر سبب الشكوى"
                className="outline-none text-black placeholder:text-[#BABFC2]  w-full  h-[56px] bg-[#f4f4f4] rounded-[15px]  px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.reason && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.reason.message}
                </div>
              )}
            </div>


</div>

            <div className="flex flex-col gap-[8px]  self-stretch shrink-0 relative z-[5]">
              <label className="text-[14px] font-medium text-[#667680]">
                الرسالة *
              </label>
              <textarea
                {...methods.register("message")}
                placeholder="يرجى كتابة تفاصيل شكواك هنا بشكل واضح ومحدد..."
                className="outline-none placeholder:text-[#BABFC2] text-black  w-full h-[173px] bg-[#f4f4f4] rounded-[15px] py-[16px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.message && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.message.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[47]">

          <button
            type="submit"
            disabled={isPending}
            className="flex gap-[8px] items-start justify-center self-stretch shrink-0 bg-[#5D9D9F] text-[#fff] rounded-[15px] px-[50px] py-[14px]"
          >
            {isPending ? "جاري الإرسال..." : "إرسال"}
          </button>
          <span className="flex w-full lg:w-[290px] h-[29px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#90bbbd] relative text-center lg:whitespace-nowrap z-[51]">
              نؤكد أن جميع بياناتك ستُعالج بسرية تامة
            </span>
            </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default ComplaintsForm;
