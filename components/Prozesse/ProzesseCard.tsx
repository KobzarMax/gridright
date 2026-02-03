import { prozesseBack } from "@/static";
import Image from "next/image";

interface ProzesseCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProzesseCard({
  number,
  title,
  description,
}: ProzesseCardProps) {
  return (
    <div className="group relative bg-white rounded-[20px] p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden">
      <div className="relative z-1 h-full flex flex-col justify-between space-y-10 sm:space-y-15 md:space-y-20 lg:space-y-25 xl:space-y-30 2xl:space-y-45">
        <div className="space-y-9">
          <div className="bg-[#72F0B6]/15 text-[#558762] w-fit flex items-center justify-center py-2.5 px-9 rounded-full font-semibold text-sm group-hover:text-[#BACD9C] transition-colors">
            {number}
          </div>
          <h3 className="text-2xl font-semibold text-dark group-hover:text-white hyphens-auto ">
            {title}
          </h3>
        </div>
        <p className="text-lg text-dark/50 leading-relaxed group-hover:text-white transition-colors hyphens-auto">
          {description}
        </p>
      </div>
      <Image
        src={prozesseBack}
        alt="prozesse back"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full top-0 left-0 object-cover inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
