"use client";

import { useState } from "react";
import { chevron } from "@/static";
import CTA from "../CTA/CTA";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!accepted) {
      setError(
        "Für den Versand des Kontaktformulars ist Ihre Zustimmung der Datenverarbeitung notwendig.",
      );
      return;
    }

    setLoading(true);

    try {
      const payload = {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        accepted,
        submitted_at: new Date().toISOString(),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Make webhooks often return 200/201/202 with empty body
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      setSuccess(true);

      // optional: clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setAccepted(false);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-[20px] border border-white/50 px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 py-5 sm:py-7.5 md:py-10 lg:py-15 xl:py-17.5 rounded-[20px]"
    >
      <h3 className="text-white text-3xl mb-8 md:mb-12 xl:mb-18">
        Geben Sie Ihre Daten ein
      </h3>

      {success && (
        <p className="mb-6 text-green-400 text-lg font-medium">
          Die Anfrage wurde erfolgreich versendet.
        </p>
      )}

      <div className="space-y-5 mb-5">
        <input
          type="text"
          id="first_name"
          placeholder="Vorname"
          required
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={loading}
          className="bg-white/90 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-4 md:py-6 xl:py-8 rounded-full text-dark text-lg disabled:opacity-50"
        />

        <input
          type="text"
          id="last_name"
          placeholder="Nachname"
          required
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={loading}
          className="bg-white/90 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-4 md:py-6 xl:py-8 rounded-full text-dark text-lg disabled:opacity-50"
        />

        <input
          type="email"
          id="email"
          placeholder="E-mail"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="bg-white/90 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-4 md:py-6 xl:py-8 rounded-full text-dark text-lg disabled:opacity-50"
        />

        <div className="mb-6">
          <label className="flex items-start gap-3 text-white/80 text-sm leading-snug">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              disabled={loading}
              className="mt-1 size-6 after:border-white outline-none min-w-4 accent-dark disabled:opacity-50"
            />
            <span>
              Mit dem Absenden des Kontaktformulars stimme ich der Verarbeitung
              meiner Daten gemäß der{" "}
              <Link href="/datenschutzbestimmungen" className="font-semibold">
                Datenschutzerklärung
              </Link>{" "}
              zu.
            </span>
          </label>

          {!accepted && error && (
            <p className="mt-2 text-red-400 text-sm">{error}</p>
          )}
        </div>
      </div>

      <CTA
        type="submit"
        className="flex items-center justify-center gap-5 text-xl"
        aria-disabled={loading}
      >
        {loading ? "Sende..." : "Demo anfragen"}
        <Image
          src={chevron}
          alt="Chevron"
          width={6}
          height={8}
        />
      </CTA>
    </form>
  );
}
