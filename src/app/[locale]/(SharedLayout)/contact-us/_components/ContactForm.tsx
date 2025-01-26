"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IoClose } from "react-icons/io5";
import SuccessIcon from "@/components/ui/SuccessIcon";

// Validation schema with Zod
const ContactUsSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  lastName: z.string().min(1, "الاسم الأخير مطلوب"),
  email: z
    .string()
    .email("يرجى إدخال بريد إلكتروني صالح")
    .min(1, "البريد الإلكتروني مطلوب"),
  phone: z
    .string()
    .regex(
      /^(?:\+966|0)?5\d{8}$/,
      "يرجى إدخال رقم هاتف سعودي صالح (يبدأ بـ +966 أو 05)"
    )
    .min(1, "رقم الهاتف مطلوب"),
  message: z.string().min(1, "الرسالة مطلوبة"),
});

type ContactUsType = z.infer<typeof ContactUsSchema>;

function ContactForm() {
  const methods = useForm<ContactUsType>({
    resolver: zodResolver(ContactUsSchema),
    mode: "onChange",
  });

  const [isPending, setIsPending] = useState(false); // Track loading state

  const onSubmit = async (data: ContactUsType) => {
    setIsPending(true); // Show loading state when submitting the form

    try {
      // Mock API Call (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success toast
      toast.custom((ts) => (
        <div className="bg-background-primary-alt border border-border-primary text-text-secondary-700 p-4 rounded-lg shadow-lg flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <SuccessIcon />
            <span className="text-sm font-medium">تم إرسال الرسالة بنجاح!</span>
          </div>
          <button
            onClick={() => toast.dismiss(ts)}
            className="text-foreground-quinary-400 hover:text-text-primary-900 transition-colors"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>
      ));

      methods.reset(); // Reset the form after submission
    } catch (error) {
      toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    } finally {
      setIsPending(false); // Hide loading state after form submission
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="main-container w-full flex xl:w-[560px] pt-[32px] pr-[32px] pl-[32px] flex-col gap-[32px] items-center bg-[#fbfbfb] rounded-[16px] relative mx-auto my-0">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-full xl:w-[496px] flex-col gap-[40px] items-center shrink-0 relative"
        >
          <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 relative z-[1]">
            <div className="flex flex-col xl:flex-row gap-[32px] items-start self-stretch shrink-0 relative z-[2]">
              {/* First Name */}
              <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[11]">
                <label className="text-[14px] font-medium text-[#667680]">
                  الاسم الأول *
                </label>
                <input
                  {...methods.register("firstName")}
                  placeholder="الاسم الأول"
                  className="outline-none w-full xl:w-[232px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                />
                {methods.formState.errors.firstName && (
                  <div className="text-red-500 text-[12px]">
                    {methods.formState.errors.firstName.message}
                  </div>
                )}
              </div>
              {/* Last Name */}
              <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[3]">
                <label className="text-[14px] font-medium text-[#667680]">
                  الاسم الأخير *
                </label>
                <input
                  {...methods.register("lastName")}
                  placeholder="الاسم الأخير"
                  className="outline-none w-full xl:w-[232px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                />
                {methods.formState.errors.lastName && (
                  <div className="text-red-500 text-[12px]">
                    {methods.formState.errors.lastName.message}
                  </div>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[19]">
              <label className="text-[14px] font-medium text-[#667680]">
                البريد الإلكتروني *
              </label>
              <input
                {...methods.register("email")}
                type="email"
                placeholder="you@company.com"
                className="outline-none w-full xl:w-[496px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.email && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.email.message}
                </div>
              )}
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[27]">
              <label className="text-[14px] font-medium text-[#667680]">
                رقم الهاتف *
              </label>
              <input
                {...methods.register("phone")}
                placeholder="+966 5XXXXXXXX"
                className="outline-none w-full xl:w-[496px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.phone && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.phone.message}
                </div>
              )}
            </div>
            {/* Message */}
            <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[29]">
              <label className="text-[14px] font-medium text-[#667680]">
                الرسالة
              </label>
              <textarea
                {...methods.register("message")}
                placeholder="اترك لنا رسالة..."
                className="outline-none w-full xl:w-[496px] h-[90px] bg-[#f4f4f4] rounded-[8px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
              />
              {methods.formState.errors.message && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.message.message}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="flex gap-[16px] items-start justify-center self-stretch shrink-0 bg-[#0e4a79] text-[#fff] rounded-[45px] px-[50px] py-[14px]"
          >
            {isPending ? "جاري الإرسال..." : "إرسال"}
          </button>
        </form>
      </div>
    </FormProvider>
  );
}

export default ContactForm;
