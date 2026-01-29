"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CTA from "../CTA/CTA";
import Menu from "../Menu/Menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const totalHeight = headerRef.current.clientHeight + 250;
      setScrolled(window.scrollY >= totalHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="header"
      ref={headerRef}
      className={`${
        scrolled ? "scrolled" : ""
      } flex w-full fixed top-0 z-50 py-3 px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 justify-between items-center`}
    >
      <Link
        href="/"
        className="text-white font-medium text-2xl transition-all duration-300 in-[.scrolled]:text-dark"
      >
        GridRight
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <Menu />
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <CTA isLink={true} href="#kontakt" primary>
          Mehr erfahren
        </CTA>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-secondary backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      >
        <div className="flex flex-col items-start justify-start h-full gap-8 py-12 px-5">
          <div className="w-full" onClick={(e) => e.stopPropagation()}>
            <Menu action={toggleMobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
