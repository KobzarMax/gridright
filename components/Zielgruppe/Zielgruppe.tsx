import Image from "next/image";
import SectionHeader from "../ui/SectionHeader/SectionHeader";
import {
  gasnets,
  schienennetz,
  stromnetz,
  telekommunikationsnetz,
  wassernetz,
} from "@/static";

export default function Zielgruppe() {
  return (
    <section
      id="zielgruppe"
      className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-10 xl:py-17.5 2xl:py-20 space-y-10 sm:space-y-12.5 md:space-y-15 lg:space-y-17.5 xl:space-y-20"
    >
      <SectionHeader
        title="Zielgruppe"
        subtitle="GridRight kann von allen gängigen Netzbetreibern genutzt werden."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 gap-4.5">
        <div className="row-span-2 max-w-121 relative group">
          <Image
            className="max-w-full w-full h-full object-cover rounded-[10px] group-hover:blur-none blur-xs border group-hover:border-transparent border-[#FFF6F6]/50 transition-all duration-300"
            src={stromnetz}
            alt="stromnetz"
          />
          <span className="group-hover:opacity-0 opacity-100 transition-all duration-300 absolute top-1/2 -translate-1/2 left-1/2 text-white leading-[1.12] text-3xl capitalize">
            stromnetz
          </span>
        </div>
        <div className="max-w-121 relative group">
          <Image
            className="max-w-full w-full h-full object-cover rounded-[10px] group-hover:blur-none blur-xs border group-hover:border-transparent border-[#FFF6F6]/50 transition-all duration-300"
            src={wassernetz}
            alt="wassernetz"
          />
          <span className="group-hover:opacity-0 opacity-100 transition-all duration-300 absolute top-1/2 -translate-1/2 left-1/2 text-white leading-[1.12] text-3xl capitalize">
            wassernetz
          </span>
        </div>
        <div className="xl:col-span-2 relative group">
          <Image
            className="max-w-full w-full h-full object-cover rounded-[10px] group-hover:blur-none blur-xs border group-hover:border-transparent border-[#FFF6F6]/50 transition-all duration-300"
            src={telekommunikationsnetz}
            alt="telekommunikationsnetz"
          />
          <span className="group-hover:opacity-0 opacity-100 transition-all duration-300 absolute top-1/2 -translate-1/2 left-1/2 text-white leading-[1.12] text-3xl capitalize">
            telekommunikationsnetz
          </span>
        </div>
        <div className="max-w-121 relative group">
          <Image
            className="max-w-full w-full h-full object-cover rounded-[10px] group-hover:blur-none blur-xs border group-hover:border-transparent border-[#FFF6F6]/50 transition-all duration-300"
            src={gasnets}
            alt="gasnetz"
          />
          <span className="group-hover:opacity-0 opacity-100 transition-all duration-300 absolute top-1/2 -translate-1/2 left-1/2 text-white leading-[1.12] text-3xl capitalize">
            gasnetz
          </span>
        </div>

        <div className="xl:col-span-2 relative group">
          <Image
            className="max-w-full w-full h-full object-cover rounded-[10px] group-hover:blur-none blur-xs border group-hover:border-transparent border-[#FFF6F6]/50 transition-all duration-300"
            src={schienennetz}
            alt="schienennetz"
          />
          <span className="group-hover:opacity-0 opacity-100 transition-all duration-300 absolute top-1/2 -translate-1/2 left-1/2 text-white leading-[1.12] text-3xl capitalize">
            schienennetz
          </span>
        </div>
      </div>
    </section>
  );
}
