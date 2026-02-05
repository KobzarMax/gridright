import ContactSection from "@/components/ContactForm/ContactSection";
import FAQSection from "@/components/FAQ/FAQSection";
import FAQSectionTransparent from "@/components/FAQ/FAQSectionTransparent";
import Grid from "@/components/Grid/Grid";
import Hero from "@/components/Hero/Hero";
import Prozesse from "@/components/Prozesse/Prozesse";
import Sicherheit from "@/components/Sicherheit/Sicherheit";
import Swiper from "@/components/Swiper/Swiper";
import Zielgruppe from "@/components/Zielgruppe/Zielgruppe";

export default function Home() {
  return (
    <main>
      <Hero />
      <Prozesse />
      <Zielgruppe />
      <Swiper />
      <FAQSectionTransparent />
      <Grid />
      <Sicherheit />
      <ContactSection />
      <FAQSection />
    </main>
  );
}
