import {
  burgerIcon,
  download,
  grid,
  karten,
  magshield,
  shield,
  upload,
} from "@/static";
import SectionHeader from "../ui/SectionHeader/SectionHeader";
import Image from "next/image";
import GridItem from "./GridItem";

const items1 = [
  {
    icon: upload,
    title: "Upload der Vollmacht",
  },
  {
    icon: burgerIcon,
    title: "Anlage von mehreren Linien",
  },
  {
    icon: karten,
    title: "Interaktive Karten Visualisierung",
  },
];

const items2 = [
  {
    icon: magshield,
    title: "Vollständige Transparenz über den E2E Prozess",
  },
  {
    icon: download,
    title: "REST-API oder Datei-Import/Export",
  },
  {
    icon: shield,
    title: "DSGVO - Konform",
  },
];

export default function Grid() {
  return (
    <section
      id="funktionen"
      className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-10 xl:py-17.5 2xl:py-30"
    >
      <SectionHeader
        title="So sieht"
        grayText="Grid Right aus"
        subtitle="Infrastrukturbetreiber kämpfen täglich mit Hindernissen bei der Verwaltung von Leitungsrechten."
      />
      <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr_auto] gap-7.5 sm:gap-10 md:gap-12.5 lg:gap-15 items-center mt-16">
        <div className="space-y-9 lg:grid lg:grid-cols-3 lg:gap-7.5 xl:grid-cols-1 xl:grid-rows-3">
          {items1.map((item, index) => (
            <GridItem key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
        <div className="w-full">
          <Image
            className="w-full"
            src={grid}
            alt="grid"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="space-y-9 lg:grid lg:grid-cols-3 lg:gap-7.5 xl:grid-cols-1 xl:grid-rows-3">
          {items2.map((item, index) => (
            <GridItem key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
