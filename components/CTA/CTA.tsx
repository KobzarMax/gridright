import Link from "next/link";
import { type PropsWithChildren } from "react";

interface BaseProps extends PropsWithChildren {
  primary?: boolean;
}

type ButtonCTAProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLink?: false;
  };

type LinkCTAProps = BaseProps & {
  isLink: true;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type CTAProps = ButtonCTAProps | LinkCTAProps;

const CTA = ({ primary = false, children, isLink = false, className, ...props }: CTAProps) => {
  const buttonClasses = primary
    ? "bg-main text-white"
    : "bg-white text-dark";

  const baseClasses =
    `py-4 px-6 rounded-[50px] text-lg font-semibold cursor-pointer border-none ${buttonClasses}`;

  if (isLink) {
    const { href, ...linkProps } = props as LinkCTAProps;

    return (
      <Link href={href} className={`${baseClasses} ${className}`} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props as ButtonCTAProps}>
      {children}
    </button>
  );
};

export default CTA;
