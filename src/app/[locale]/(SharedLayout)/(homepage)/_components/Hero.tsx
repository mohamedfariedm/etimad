import AiButton from "@/components/Animations/AiButton";
import AnimatedInputText from "@/components/Animations/AnimatedInputText";
import { Tiles } from "@/components/Animations/Tiles";
import { Container } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TFunction } from "i18next";
import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import AnimatedInputTextAndAiButton from "./AnimatedInputTextAndAiButton";

function Hero({ t }: { t: TFunction }) {
  return (
    <section className="w-full min-h-screen -[1220px] lg:h -[1160px] -translate-y-[136px] -mb-[136px]  relative pt-[calc(136px+80px)]">
      <div className={"absolute top-0 left-0 h-full w-full z-10"}>
        <Tiles rows={30} cols={20} className="opacity-30" />
      </div>
      <video
        src="/assets/videos/auth_animation.mp4"
        className="w-full h-full object-cover   select-none absolute inset-0"
        autoPlay
        loop
        muted
      />
      <Container className="flex flex-col items-center relative z- 10">
        <h1 className=" text-center text-4xl md:text-6xl font-semibold text -balance text-text-brand-primary-900 leading-[44px] md:leading-[72px] w-full lg:w-5/6 animate-fade-down relative z-30">
          {t("hero.title")}
        </h1>
        <h2 className="text-center text-text-brand-secondary-700 text -balance text-lg md:text-xl leading-7 md:leading-[30px] mt-4 md:mt-6 w-full lg:w-4/6 animate-fade-down animate-delay-300 relative z-30">
          {t("hero.subtitle")}
        </h2>
        {/*  <Button className="mt-9 w-full max-w-80 md:w-[243px] h-11 md:h-[56px] rounded-lg md:rounded-[10px] md:text-lg  font-semibold leading-normal md:leading-7 animate-fade-down animate-delay-500">
          {t("hero.cta")}
        </Button> */}
        <AnimatedInputTextAndAiButton className="w-full lg:w-[55%] lg:px-5 mt-6 md:mt-10 mb-5 animate-fade-up animate-delay-500 relative z-30" />

        {/*   <video
          src="/assets/videos/homepage-video.mp4"
          className="mt-12 w-full md:w-3/4 h-[470px]  rounded-2xl shadow overflow-hidden object-cover  select-none  animate-fade-up animate-delay-700"
          autoPlay
          loop
          muted
        /> */}
      </Container>
    </section>
  );
}

export default Hero;
