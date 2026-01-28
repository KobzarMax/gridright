"use client";

import { FAQItemType } from "@/types";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader/SectionHeader";
import FAQItemTransparent from "./FAQItemTransparent";

const items: FAQItemType[] = [
  {
    question: "Ermittlung und Aktualisierung der Eigentümerdaten",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Ermittlung und Prüfung der Grundbuchdaten",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Ermittlung und Aktualisierung der Grundstücksdaten",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Ermittlung und Aktualisierung der Nutzer- und Pächterdaten",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FAQSectionTransparent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pt-20 md:pt-25 lg:pt-30 xl:pt-40 2xl:pt-110 px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pb-5 md:pb-10 xl:pb-17.5 2xl:pb-30 faq-transparent-wrapper">
      <div className="lg:flex items-end justify-between gap-10">
        <div className="space-y-4.5 p-5 sm:p-7.5 md:p-10 lg:p-12. xl:p-15 rounded-[14px] max-w-xl bg-white/20 backdrop-blur-[20px] border border-white/50">
          <h2 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Das kann GridRight 
          </h2>
          <p className="text-white/50 text-lg font-medium">
            Die Preise berechnen sich anhand der KM und Flurstückanzahl
          </p>
        </div>
        <div className="faq-answers-container__transparent mt-16 max-w-3xl w-full bg-white/20 backdrop-blur-[20px] border border-white/50 rounded-[20px]">
          {items.map((item, index) => (
            <FAQItemTransparent
              isOpen={openIndex === index}
              onClick={handleClick}
              index={index}
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
