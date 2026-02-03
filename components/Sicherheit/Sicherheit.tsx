import SectionHeader from "../ui/SectionHeader/SectionHeader";

const points = [
  {
    title: "DSGVO-konform",
    description:
      "GridRight wurde unter Berücksichtigung der DSGVO-Prinzipien 'Privacy by Design' und 'Privacy by Default' entwickelt, um Datenschutzkonformität von Grund auf sicherzustellen.",
  },
  {
    title: "Serverstandort Deutschland",
    description:
      "Ihre Daten werden ausschließlich auf Servern in Deutschland verarbeitet – DSGVO-konform und nach höchsten Sicherheitsstandards. GridRight orientiert sich an der ISO 27001 und etabliert kontinuierliche Sicherheits- und Auditprozesse.",
  },
  {
    title: "Verschlüsselte Daten",
    description:
      "Alle Datenübertragungen werden mittels TLS-Technologie (Transport Layer Security) verschlüsselt. Daten werden in einem Ende-zu-Ende-verschlüsselten Verfahren gespeichert, ohne unverschlüsselte Daten.",
  },
  {
    title: "Geplante ISO 27001-Zertifizierung",
    description:
      "Die Server von GridRight befinden sich in Deutschland (Frankfurt), was die Einhaltung der EU-DSGVO und keinen Datentransfer außerhalb der EU gewährleistet.",
  },
  {
    title: "Vertrauensvolle Partnerschaften",
    description:
      "GridRight hat offizielle Partnerschaften mit Katasterämtern und Grundbuchämtern in allen deutschen Bundesländern aufgebaut, die eine direkte API-Integration ermöglichen.",
  },
] as const;

export default function Sicherheit() {
  return (
    <section
      id="sicherheit"
      className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-10 xl:py-17.5 2xl:py-30"
    >
      <SectionHeader title="Sicherheit & " grayText="Vertrauen" />
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="col-span-2 transition-all duration-300 md:nth-[4]:col-span-2 lg:nth-[4]:col-span-3 md:last:col-span-2 lg:last:col-span-3 px-4 md:px-6 lg:px-8 xl:px-10 py-5 sm:py-7.5 md:py-10 lg:12.5 xl:py-15 flex flex-col items-start justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-30 bg-white rounded-[20px] point-item group"
          >
            <h3 className="text-dark group-hover:text-white transition-all duration-300 font-medium text-2xl md:text-3xl hyphens-auto">
              {point.title}
            </h3>
            <p className="text-dark/40 group-hover:text-white/50 transition-all duration-300 font-normal text-lg hyphens-auto">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
