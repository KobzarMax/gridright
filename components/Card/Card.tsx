import Image from "next/image";

interface CardProps {
  iconSrc?: string;
  title: string;
  description?: string;
}

const Card = ({ iconSrc, title, description }: CardProps) => {
  return (
    <div className="bg-white/11 border border-white rounded-[30px] p-2.5 md:p-6 backdrop-blur-[25px] flex flex-col items-start md:min-w-[228px] gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-23.5">
      {iconSrc && (
        <div className="md:w-7 md:h-7 w-5 h-5 mr-0 ml-auto">
          <Image src={iconSrc} alt={title} width={28} height={28} />
        </div>
      )}
      <h3 className="text-xs md:text-lg lg:text-xl xl:text-2xl text-white">
        {title}
      </h3>
      {description && <p className="text-lg font-normal m-0">{description}</p>}
    </div>
  );
};

export default Card;
