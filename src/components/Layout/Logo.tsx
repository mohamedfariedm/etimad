import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({
  type = "light",
  className,
  href = "/",
  width = 230,
  height = 115,
  alt = "advix logo",
}: {
  type?: "dark" | "light";
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  alt?: string;
}) {
  const src =
    type === "dark"
      ? "/assets/images/logo_dark.svg"
      : "/assets/images/logo_light.svg";
  return (
    <Link href={href} className={cn("", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="object-contain w-full h-full"
      />
    </Link>
  );
}

export default Logo;
