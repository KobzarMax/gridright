import SectionHeader from "../ui/SectionHeader/SectionHeader";
import ProzesseCard from "./ProzesseCard";

export default function Prozesse() {
  const challenges = [
    {
      number: "01",
      title: "Manueller Aufwand",
      description:
        "Energieversorger, Telekommunikationsanbieter, Verkehrsunternehmen und andere Infrastrukturbetreiber kämpfen mit der manuellen Verwaltung von Leitungsrechten.",
    },
    {
      number: "02",
      title: "Hohe Kosten",
      description:
        "Manuelle Recherche und Abgleich von Leitungsrechten kostet ca. 10.000 EUR für eine Strecke von ca. 30 km.",
    },
    {
      number: "03",
      title: "Lange Bearbeitungszeiten",
      description:
        "Der manuelle Prozess dauert mehrere Monate pro Leitungsabschnitt und verzögert Bauvorhaben und Netzausbau.",
    },
    {
      number: "04",
      title: "Veraltete Daten",
      description:
        "Veraltete Eigentümerdaten führen zu ungenauen Besitzverhältnissen und Risiken von Rechtsstreitigkeiten.",
    },
  ];

  return (
    <section className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-10 xl:py-17.5 2xl:py-30 space-y-20">
      <SectionHeader
        title="Der steinige Weg manueller"
        subtitle="Der manuelle Umgang mit Leitungsrechten ist mit hohen Kosten, langen Bearbeitungszeiten und rechtlicher Unsicherheit verbunden."
        grayText="Prozesse"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {challenges.map((challenge, index) => (
          <ProzesseCard
            key={index}
            number={challenge.number}
            title={challenge.title}
            description={challenge.description}
          />
        ))}
      </div>
    </section>
  );
}
