import Image, { type StaticImageData } from "next/image";

export default function GridItem({
  icon,
  title,
}: {
  icon: StaticImageData;
  title: string;
}) {
  return (
    <div className="flex justify-start md:justify-center items-center bg-white/20 backdrop-blur-[20px] border border-white/50 rounded-[14px] px-6 py-8 gap-4 lg:max-w-57 transition-all duration-300 hover:scale-3d hover:scale-120 h-full">
      <Image loading="lazy" src={icon} alt={title} width={27} height={27} />
      <h4 className="text-dark text-base font-medium">{title}</h4>
    </div>
  );
}
