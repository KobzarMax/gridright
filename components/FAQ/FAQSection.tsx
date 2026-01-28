"use client";

import { FAQItemType } from "@/types";
import FAQItem from "./FAQItem";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader/SectionHeader";

const items: FAQItemType[] = [
  {
    question:
      "Warum ist professionelles Grundstücksmanagement entscheidend für Netzprojekte?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
  {
    question: "Was genau übernehmen wir für Sie?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
  {
    question: "Wie stellen wir Aktualität und Qualität sicher?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
  {
    question: "Welchen konkreten Nutzen haben Sie davon?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
  {
    question: "Für welche Projekte ist der Service ideal?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
  {
    question: "Ist der Service rechtssicher und DSGVO-konform?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
  {
    question: "Wie schnell können wir starten?",
    answer:
      "Wir arbeiten mit aktuellen Kataster- und Grundbuchdaten, ergänzt durch kommunale Informationen und Vor-Ort-Abstimmungen. Änderungen werden laufend dokumentiert und nachvollziehbar gepflegt. Ihre Daten bleiben dauerhaft belastbar.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-5 md:py-10 xl:py-17.5 2xl:py-30">
      <SectionHeader
        subtitle="GridRight kann von allen gängigen Netzbetreibern genutzt werden."
        title="FAQ"
      />
      <div className="faq-answers-container mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 max-w-4xl mx-auto space-y-6">
        {items.map((item, index) => (
          <FAQItem
            isOpen={openIndex === index}
            onClick={handleClick}
            index={index}
            item={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
