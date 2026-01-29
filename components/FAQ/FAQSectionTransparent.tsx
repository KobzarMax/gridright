"use client";

import { FAQItemType } from "@/types";
import { useState } from "react";
import FAQItemTransparent from "./FAQItemTransparent";

const items: FAQItemType[] = [
  {
    question: "Ermittlung und Aktualisierung der Eigentümerdaten",
    answer:
      "Aktuelle Eigentümerdaten sind die Grundlage für einen rechtssicheren Netzbetrieb. Sie sichern Dienstbarkeiten, Zugangsrechte und die planungsrelevante Kommunikation. Die Daten werden aus Kataster-, Grundbuch- und Bestandsinformationen konsolidiert und fortlaufend aktualisiert. So lassen sich Projektrisiken und Verzögerungen gezielt minimieren.",
  },
  {
    question: "Ermittlung und Prüfung der Grundbuchdaten",
    answer:
      "Die Grundbuchprüfung stellt die dingliche Absicherung von Netzanlagen sicher. Geprüft werden insbesondere Dienstbarkeiten, Rechteumfang und Begünstigte. Aktuelle Grundbuchdaten bilden die Basis für Bau, Betrieb und Ersatzneubau. Rechtliche Risiken werden dadurch frühzeitig erkannt und vermieden.",
  },
  {
    question: "Ermittlung und Aktualisierung der Grundstücksdaten",
    answer:
      "Präzise Grundstücksdaten ermöglichen eine exakte Trassen- und Anlagenplanung. Erfasst werden Flurstücke, Nutzungsarten und die räumliche Betroffenheit. Die Daten werden GIS-gestützt geprüft und bei Änderungen laufend aktualisiert. Das schafft Planungssicherheit und Genehmigungsfähigkeit.",
  },
  {
    question: "Ermittlung und Aktualisierung der Nutzer- und Pächterdaten",
    answer:
      "Aktuelle Nutzer- und Pächterdaten sichern einen störungsfreien Bau- und Betriebsablauf. Sie ermöglichen die koordinierte Abstimmung von Zugängen, Bauzeiten und Entschädigungen. Die Daten werden projektbezogen erhoben und regelmäßig aktualisiert. So werden operative Risiken und Konflikte reduziert.",
  },
];

export default function FAQSectionTransparent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pt-20 md:pt-25 lg:pt-30 xl:pt-40 2xl:pt-110 px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pb-10 md:pb-10 xl:pb-17.5 2xl:pb-30 faq-transparent-wrapper">
      <div className="lg:flex items-end justify-between gap-10">
        <div className="space-y-4.5 p-0 md:p-10 lg:p-12 xl:p-15 md:rounded-[14px] max-w-xl md:bg-white/20 md:backdrop-blur-[20px] md:border md:border-white/50">
          <h2 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center md:text-left">
            Das kann GridRight
          </h2>
          <p className="text-white/50 text-lg font-medium text-center md:text-left">
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
