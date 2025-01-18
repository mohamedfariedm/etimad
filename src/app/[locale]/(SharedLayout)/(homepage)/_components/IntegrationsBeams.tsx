"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/Animations/AnimatedBeam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 md:size-16 items-center justify-center rounded-full border-2 bg-white p-2.5 md:p-3.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function IntegrationsBeams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden  bg -red-200 -mt-24 -z-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[160px] md:max-h-[200px] items-stretch justify-between gap-10 bg -red-500">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.excel />
          </Circle>
          <Circle ref={div5Ref} className="p-3 md:p-4">
            <Icons.googleSheets />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Circle ref={div4Ref} className="size-16 md:size-20">
            <Icons.advix />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="p-1 md:p-1">
            <Icons.odoo />
          </Circle>
          <Circle ref={div7Ref} className="p-2 md:p-2.5">
            <Icons.erp />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  advix: () => (
    <Image
      src={"/assets/images/logo-chat.svg"}
      width={80}
      height={80}
      alt={"advix-logo-sm"}
    />
  ),
  excel: () => (
    <Image
      src={"/assets/images/excel-logo.png"}
      width={80}
      height={80}
      alt={"excel-logo"}
    />
  ),
  odoo: () => (
    <Image
      src={"/assets/images/odoo-logo.png"}
      width={80}
      height={80}
      alt={"odoo-logo"}
    />
  ),
  googleSheets: () => (
    <Image
      src={"/assets/images/google-sheets-logo.png"}
      width={80}
      height={80}
      alt={"odoo-logo"}
    />
  ),

  erp: () => (
    <Image
      src={"/assets/images/erp-logo.png"}
      width={80}
      height={80}
      alt={"erp-logo"}
    />
  ),
};
