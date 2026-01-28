"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    href: string;
    className?: string;
    activeClassName?: string;
    isActive?: boolean;
    onChange?: (hash: string) => void;
    action?: () => void
}>;

export default function NavLink({
    href,
    action,
    children,
    className = "",
    activeClassName = "",
    isActive,
    onChange,
}: Props) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        onChange?.(href);
        action?.();
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`${className} ${isActive ? activeClassName : ""}`}
        >
            {children}
        </Link>
    );
}
