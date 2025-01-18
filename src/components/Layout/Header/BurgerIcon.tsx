"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BurgerIcon({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  return (
    <div className="relative">
      <style jsx>{`
        .toggle {
          --bar-height: 2px;
          --toggle-padding: 6px;
          height: calc(var(--bar-height) * 3 + var(--toggle-padding) * 2);
        }

        .bar {
          height: var(--bar-height);
          transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
        }

        .bar--top {
          bottom: calc(50% + var(--toggle-padding) + var(--bar-height) / 2);
          transition-property: bottom, margin, transform;
          transition-delay: calc(0s + 0.35s), 0s, 0s;
        }

        .bar--middle {
          top: calc(50% - var(--bar-height) / 2);
          transition-property: top, opacity;
          transition-duration: 0.35s, 0s;
          transition-delay: calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
        }

        .bar--bottom {
          top: calc(50% + var(--toggle-padding) + var(--bar-height) / 2);
          transition-property: top, transform;
          transition-delay: 0s;
        }

        input:checked + .toggle .bar--top {
          bottom: calc(50% - var(--toggle-padding) - var(--bar-height));
          margin-bottom: calc(var(--toggle-padding) + var(--bar-height) / 2);
          transform: rotate(45deg);
          transition-delay: calc(0s + 0.35s * 0.3), calc(0s + 0.35s * 1.3),
            calc(0s + 0.35s * 1.3);
        }

        input:checked + .toggle .bar--middle {
          top: calc(50% + var(--toggle-padding));
          opacity: 0;
          transition-duration: 0.35s, 0s;
          transition-delay: 0s, calc(0s + 0.35s);
        }

        input:checked + .toggle .bar--bottom {
          top: calc(50% - var(--bar-height) / 2);
          transform: rotate(-45deg);
          transition-delay: calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
        }
      `}</style>
      <input
        type="checkbox"
        id="burger-menu"
        checked={isOpen}
        onChange={(e) => {
          setIsOpen(e.target.checked);
        }}
        className="hidden"
        aria-label="Toggle menu"
      />
      <label
        htmlFor="burger-menu"
        className={cn("toggle relative block w-6 cursor-pointer mx-auto")}
      >
        <div
          className={cn(
            "bar bar--top absolute left-0 right-0 rounded-[2px] bg-foreground-secondary-700"
          )}
        />
        <div
          className={cn(
            "bar bar--middle absolute left-0 right-0 rounded-[2px] bg-foreground-secondary-700"
          )}
        />
        <div
          className={cn(
            "bar bar--bottom absolute left-0 right-0 rounded-[2px] bg-foreground-secondary-700"
          )}
        />
      </label>
    </div>
  );
}
