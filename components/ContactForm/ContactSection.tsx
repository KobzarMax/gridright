import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="ansatz-section lg:min-h-dvh px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-10 xl:py-17.5 2xl:py-25"
    >
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-17.5 md:gap-25 lg:gap-40">
        <div className="flex flex-col justify-between space-y-7 lg:space-y-0">
          <h3 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center md:text-left">
            Demo mit <br /> <span className="text-dark">GridRight buchen</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white/80 text-center md:text-left">
            GridRight ist darauf ausgelegt, Schnittstellen zwischen Behörden,
            Datenquellen und Projektbeteiligten zu vereinfachen
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
