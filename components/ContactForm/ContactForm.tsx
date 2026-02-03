"use client";

import { useState } from "react";
import { chevron } from "@/static";
import CTA from "../CTA/CTA";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!accepted) {
      setError(
        "Für den Versand des Kontaktformulars ist Ihre Zustimmung der Datenverarbeitung notwendig."
      );
      return;
    }

    setError("");
    // 👉 submit logic here (API call, etc.)
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-[20px] border border-white/50 px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-5 sm:py-7.5 md:py-10 lg:py-15 xl:py-17.5 rounded-[20px]"
    >
      <h3 className="text-white text-3xl mb-8 md:mb-12 xl:mb-18">
        Geben Sie Ihre Daten ein
      </h3>

      <div className="space-y-5 mb-8 sm:mb-12 md:mb-18 lg:mb-24 xl:mb-30">
        <input
          type="text"
          id="first_name"
          placeholder="Vorname"
          required
          name="first_name"
          className="bg-white/90 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-4 md:py-6 xl:py-8 rounded-full text-dark text-lg"
        />

        <input
          type="text"
          id="last_name"
          placeholder="Nachname"
          required
          name="last_name"
          className="bg-white/90 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-4 md:py-6 xl:py-8 rounded-full text-dark text-lg"
        />

        <input
          type="email"
          id="email"
          placeholder="E-mail"
          required
          name="email"
          className="bg-white/90 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-4 md:py-6 xl:py-8 rounded-full text-dark text-lg"
        />

        <div className="mb-6">
          <label className="flex items-start gap-3 text-dark text-sm leading-snug">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 accent-dark"
            />
            <span>
              Mit dem Absenden des Kontaktformulars stimme ich der Verarbeitung
              meiner Daten gemäß der{" "}
              <Link
                href="/datenschutzbestimmungen"
                className="font-bold"
              >
                Datenschutzerklärung
              </Link>{" "}
              zu.
            </span>
          </label>

          {/* ❌ Error message */}
          {error && (
            <p className="mt-2 text-red-400 text-sm">{error}</p>
          )}
        </div>
      </div>

      <CTA
        type="submit"
        className="flex items-center justify-center gap-5 text-xl"
      >
        Demo buchen <Image src={chevron} alt="Chevron" width={6} height={8} />
      </CTA>
    </form>
  );
}
