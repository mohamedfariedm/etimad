"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TransitionImageProps extends React.ComponentProps<typeof Image> {
  containerClassName?: string;
}

export function TransitionImage({
  className,
  containerClassName,
  ...props
}: TransitionImageProps) {
  return (
    <div className={cn("relative overflow-hidden w-full", containerClassName)}>
      <Image
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
        alt="dd"
        fill
        /* className=" transition-opacity opacity-0 duration-[2s] object-cover"
      onLoadingComplete={(image) => {
        image.classList.remove("opacity-0");
      }} */
        className=" scale-105 blur-2xl duration-700 object-cover"
        onLoadingComplete={(image) => {
          image.classList.remove("scale-105");
          image.classList.remove("blur-2xl");
        }}
      />
    </div>
  );
}
