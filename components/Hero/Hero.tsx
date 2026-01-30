import Image from "next/image";
import CTA from "../CTA/CTA";
import Card from "../Card/Card";
import { check, chevron, electric, electricPilon, euro } from "@/static";

const Hero = () => {
  return (
    <div className="relative w-full pt-30 xl:pt-40 px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pb-5 md:pb-10 xl:pb-17.5 2xl:pb-30 bg-secondary text-white flex flex-col items-center justify-center max-h-dvh h-dvh">
      <Image
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
        src={electricPilon}
        alt="Electric Pylon"
        width={0}
        height={0}
        sizes="100vw,100vh"
      />

      <div className="grid lg:grid-cols-[1fr_auto] gap-4 items-start relative z-1 h-full w-full">
        <div className="flex flex-col justify-start items-start gap-8 mr-auto h-full">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-[3rem] leading-[1.08] m-0 lg:flex-1 max-w-2xl">
            Automatisierte Beschaffung von Wegerecht-Daten mit GridRight
          </h1>
          <CTA className="flex items-center justify-center gap-5 text-xl">
            Demo buchen{" "}
            <Image src={chevron} alt="Chevron" width={6} height={8} />
          </CTA>
        </div>
        <div className="grid grid-cols-3 lg:flex mb-0 mt-auto flex-col gap-4">
          <Card iconSrc={euro} title="Günstiger" />
          <Card iconSrc={electric} title="Effizienter" />
          <Card iconSrc={check} title="Zuverlässiger" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
