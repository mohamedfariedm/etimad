"use client";

import { NavLink } from "@/components/Main";
import { menuItems } from "@/constants/index";
import { cn } from "@/lib/utils";
import { TFunction } from "i18next";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function MenuItems({
  closeMenu,
  className,
}: {
  closeMenu: () => void;
  className?: string;
}) {
  const { t } = useTranslation("common");
  const items = menuItems(t);

  return (
    <ul
      className={cn(
        "flex justify-center gap-8 font-semibold text-sm",
        className
      )}
    >
      {items?.map((item, index) => (
        <motion.li
          onClick={closeMenu}
          key={item?.label}
          variants={itemVariants}
          custom={index}
        >
          <NavLink href={item?.href}>{item?.label}</NavLink>
        </motion.li>
      ))}
    </ul>
  );
}
