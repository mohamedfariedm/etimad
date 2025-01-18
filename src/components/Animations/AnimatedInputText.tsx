"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WiStars } from "react-icons/wi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function AnimatedInput({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [placeholder, setPlaceholder] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isInputActive, setIsInputActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation("homepage");
  const sentences = [
    t("hero.AnimatedInputText.sentences.0"),
    t("hero.AnimatedInputText.sentences.1"),
    t("hero.AnimatedInputText.sentences.2"),
  ];
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const animatePlaceholder = () => {
      if (isInputActive) {
        return;
      }

      const currentSentence = sentences[currentSentenceIndex];

      if (isTyping) {
        if (placeholder.length < currentSentence.length) {
          setPlaceholder(currentSentence.slice(0, placeholder.length + 1));
          timer = setTimeout(animatePlaceholder, 100);
        } else {
          setIsTyping(false);
          timer = setTimeout(animatePlaceholder, 1500); // Pause before erasing
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(placeholder.slice(0, -1));
          timer = setTimeout(animatePlaceholder, 50);
        } else {
          setIsTyping(true);
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentences.length
          );
          timer = setTimeout(animatePlaceholder, 500); // Pause before typing next sentence
        }
      }
    };

    timer = setTimeout(animatePlaceholder, 100);

    return () => clearTimeout(timer);
  }, [placeholder, currentSentenceIndex, isTyping, isInputActive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInputActive(true);
  };

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setIsInputActive(false);
      setPlaceholder("");
      setIsTyping(true);
    }
  };

  return (
    <div className="relative w-full md:flex-grow text-text-placeholder-subtle text-sm font-medium">
      <Input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="px-3 border border-border-secondary h-12 rounded-lg bg-primary"
        placeholder=""
      />
      {!isInputActive && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3 pointer-events-none">
          <span>{placeholder}</span>
          <span className="animate-pulse">|</span>
        </div>
      )}
    </div>
  );
}
