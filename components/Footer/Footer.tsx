import { footer_back, linkedin } from "@/static";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pb-5 md:pb-10 xl:pb-17.5 pt-10 md:pt-15 lg:pt-20 xl:pt-25 2xl:pt-30 grid grid-cols-1 lg:grid-cols-3 gap-7.5">
      <div className="relative bg-secondary p-10 flex flex-col justify-between gap-10 sm:gap-17.5 md:gap-25 lg:gap-50 rounded-[20px]">
        <Link
          className="relative z-1 font-medium text-white text-4xl"
          href={"/"}
        >
          GridRight
        </Link>
        <div className="space-y-7.5 relative z-1 text-white text-lg">
          <p className="max-w-sm hyphens-auto">
            GridRight unterstützt die strukturierte Planung und Dokumentation
            von Netzinfrastrukturprojekten.
          </p>
          <div className="flex items-end justify-between">
            <p>Bleiben Sie in Kontakt!</p>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/gridright/"}
            >
              <Image
                src={linkedin}
                alt="linkedin"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </Link>
          </div>
        </div>
        <Image
          src={footer_back}
          alt="Footer Background"
          className="w-full h-full top-0 left-0 rounded-[20px] absolute object-cover"
        />
      </div>
      <div className="rounded-[20px] bg-white lg:col-span-2 p-10 flex flex-col justify-between gap-10 sm:gap-17.5 md:gap-25 lg:gap-40">
        <div className="lg:flex items-start justify-start gap-22.5 space-y-7 lg:space-y-0">
          <div className="space-y-7">
            <p className="text-lg text-dark/50 font-medium">Navigation</p>
            <div className="space-y-3">
              <Link
                className="text-lg text-dark font-medium block"
                href={"#zielgruppe"}
              >
                Zielgruppe
              </Link>
              <Link
                className="text-lg text-dark font-medium block"
                href={"#unser-ansatz"}
              >
                Unser Ansatz
              </Link>
              <Link
                className="text-lg text-dark font-medium block"
                href={"#funktionen"}
              >
                Funktionen
              </Link>
              <Link
                className="text-lg text-dark font-medium block"
                href={"#sicherheit"}
              >
                Sicherheit
              </Link>
              <Link
                className="text-lg text-dark font-medium block"
                href={"#kontakt"}
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div className="space-y-7">
            <p className="text-lg text-dark/50 font-medium">Unternehmen</p>
            <div className="space-y-3">
              <Link
                className="text-lg text-dark font-medium block hyphens-auto"
                href={"/datenschutzbestimmungen"}
              >
                Datenschutzbestimmungen
              </Link>
              <Link
                className="text-lg text-dark font-medium block hyphens-auto"
                href={"/impressum"}
              >
                Impressum
              </Link>
              <Link
                className="text-lg text-dark font-medium block hyphens-auto"
                href={"/cookies"}
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
        <p className="text-lg text-dark/50 font-medium lg:text-end">
          © {new Date().getFullYear()} GridRight. Alle Rechte vorbehalten
        </p>
      </div>
    </footer>
  );
}
