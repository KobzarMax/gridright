interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  grayText?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  grayText,
}: SectionHeaderProps) {
  return (
    <div className="space-y-7.5 max-w-3xl mx-auto">
      <h2 className="text-dark font-medium text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.12]">
        {title}
        <span className="text-dark/40"> {grayText}</span>
      </h2>
      {subtitle && (
        <p className="text-dark/40 font-normal text-center text-sm md:text-base lg:text-lg xl:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
