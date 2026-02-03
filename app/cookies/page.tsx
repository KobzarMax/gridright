import Link from "next/link";

export default function CookiesPage() {
  const services = [
    {
      name: "Elementor",
      tags: ["Statistik (anonym)"],
      consentLabel: "Consent to service elementor",
      usage: {
        text: "Wir verwenden Elementor für Inhaltserstellung.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/elementor/",
      },
      sharing: "Diese Daten werden nicht an Dritte weitergegeben.",
      cookies: [
        {
          category: "Statistik (anonym)",
          items: [
            {
              name: "elementor",
              expiry: "beständig",
              purpose:
                "Speichere durchgeführte Aktionen der Benutzer auf der Website",
              href: "https://cookiedatabase.org/cookie/elementor/elementor/",
            },
          ],
        },
      ],
    },
    {
      name: "WordPress",
      tags: ["Funktional"],
      consentLabel: "Consent to service wordpress",
      usage: {
        text: "Wir verwenden WordPress für Website-Entwicklung.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/wordpress/",
      },
      sharing: "Diese Daten werden nicht an Dritte weitergegeben.",
      cookies: [
        {
          category: "Funktional",
          items: [
            {
              name: "WP_PREFERENCES_USER_*",
              expiry: "beständig",
              purpose: "Speicher die Benutzervorlieben",
              href: "https://cookiedatabase.org/cookie/wordpress/wp_preferences_user/",
            },
            {
              name: "wpEmojiSettingsSupports",
              expiry: "Sitzung",
              purpose: "Speichere Browser-Angaben",
              href: "https://cookiedatabase.org/cookie/wordpress/wpemojisettingssupports/",
            },
            {
              name: "wp-settings-time-*",
              expiry: "1 Jahr",
              purpose: "Speicher die Benutzervorlieben",
              href: "https://cookiedatabase.org/cookie/wordpress/wp-settings-time/",
            },
            {
              name: "wp-settings-*",
              expiry: "beständig",
              purpose: "Speicher die Benutzervorlieben",
              href: "https://cookiedatabase.org/cookie/wordpress/wp-settings/",
            },
            {
              name: "wordpress_logged_in_*",
              expiry: "beständig",
              purpose: "Benutzer eingeloggt lassen",
              href: "https://cookiedatabase.org/cookie/wordpress/wordpress_logged_in/",
            },
            {
              name: "wordpress_test_cookie",
              expiry: "Sitzung",
              purpose: "überprüft, ob Cookies gesetzt werden können",
              href: "https://cookiedatabase.org/cookie/wordpress/wordpress_test_cookie/",
            },
          ],
        },
      ],
    },
    {
      name: "Facebook",
      tags: ["Marketing", "Funktional"],
      consentLabel: "Consent to service facebook",
      usage: {
        text: "Wir verwenden Facebook für Anzeige der letzten Social-Posts und/oder Social-Share-Buttons.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/facebook/",
      },
      sharing:
        "Für weitere Informationen, bitte die Facebook Datenschutzerklärung lesen.",
      sharingLink: {
        text: "Facebook Datenschutzerklärung",
        href: "https://www.facebook.com/policy.php",
      },
      cookies: [
        {
          category: "Marketing",
          items: [
            {
              name: "_fbp",
              expiry: "3 Monate",
              purpose: "Verfolge Besucher quer über Websiten",
              href: "https://cookiedatabase.org/cookie/facebook/_fbp/",
            },
            {
              name: "_fbc",
              expiry: "2 Jahre",
              purpose: "Letzten Besuch speichern",
              href: "https://cookiedatabase.org/cookie/facebook/_fbc/",
            },
            {
              name: "fbm*",
              expiry: "1 Jahr",
              purpose: "Speichere Benutzer-Details",
              href: "https://cookiedatabase.org/cookie/facebook/fbm/",
            },
            {
              name: "xs",
              expiry: "3 Monate",
              purpose: "Eine eindeutige Sitzungs-ID speichern",
              href: "https://cookiedatabase.org/cookie/facebook/xs/",
            },
            {
              name: "fr",
              expiry: "3 Monate",
              purpose: "Anzeigenschaltung oder Retargeting anbieten",
              href: "https://cookiedatabase.org/cookie/facebook/fr/",
            },
            {
              name: "act",
              expiry: "90 Tage",
              purpose: "Benutzer eingeloggt lassen",
              href: "https://cookiedatabase.org/cookie/facebook/act/",
            },
            {
              name: "datr",
              expiry: "2 Jahre",
              purpose: "Beuge Betrug vor",
              href: "https://cookiedatabase.org/cookie/facebook/datr/",
            },
            {
              name: "c_user",
              expiry: "30 Tage",
              purpose: "Speichere die eindeutige User-ID",
              href: "https://cookiedatabase.org/cookie/facebook/c_user/",
            },
            {
              name: "sb",
              expiry: "2 Jahre",
              purpose: "Speichere Browser-Angaben",
              href: "https://cookiedatabase.org/cookie/facebook/sb/",
            },
            {
              name: "*_fbm_",
              expiry: "1 Jahr",
              purpose: "Speichere Benutzer-Details",
              href: "https://cookiedatabase.org/cookie/facebook/_fbm_/",
            },
          ],
        },
        {
          category: "Funktional",
          items: [
            {
              name: "wd",
              expiry: "1 Woche",
              purpose: "Festlegung der Bildschirmauflösung",
              href: "https://cookiedatabase.org/cookie/facebook/wd/",
            },
            {
              name: "csm",
              expiry: "90 Tage",
              purpose: "Beuge Betrug vor",
              href: "https://cookiedatabase.org/cookie/facebook/csm/",
            },
            {
              name: "actppresence",
              expiry: "Sitzung",
              purpose:
                "Speichern und verfolgen, ob die Browser-Registerkarte aktiv ist",
              href: "https://cookiedatabase.org/cookie/facebook/actppresence/",
            },
          ],
        },
      ],
    },
    {
      name: "Google Analytics",
      tags: ["Statistik"],
      consentLabel: "Consent to service google-analytics",
      usage: {
        text: "Wir verwenden Google Analytics für Website-Statistik.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/google-analytics/",
      },
      sharing:
        "Für weitere Informationen, bitte die Google Analytics Datenschutzerklärung lesen.",
      sharingLink: {
        text: "Google Analytics Datenschutzerklärung",
        href: "https://business.safety.google/intl/de_de/privacy/",
      },
      cookies: [
        {
          category: "Statistik",
          items: [
            {
              name: "_ga_*",
              expiry: "1 Jahr",
              purpose: "Zählt und verfolgt Seitenaufrufe",
              href: "https://cookiedatabase.org/cookie/google-analytics/_ga_/",
            },
            {
              name: "_gid",
              expiry: "1 Tag",
              purpose: "Zählt und verfolgt Seitenaufrufe",
              href: "https://cookiedatabase.org/cookie/google-analytics/_gid/",
            },
            {
              name: "_ga",
              expiry: "2 Jahre",
              purpose: "Zählt und verfolgt Seitenaufrufe",
              href: "https://cookiedatabase.org/cookie/google-analytics/_ga/",
            },
          ],
        },
      ],
    },
    {
      name: "Google Adsense",
      tags: ["Marketing"],
      consentLabel: "Consent to service google-adsense",
      usage: {
        text: "Wir verwenden Google Adsense für Werbung anzeigen.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/google-adsense/",
      },
      sharing:
        "Für weitere Informationen, bitte die Google Adsense Datenschutzerklärung lesen.",
      sharingLink: {
        text: "Google Adsense Datenschutzerklärung",
        href: "https://business.safety.google/intl/de_de/privacy/",
      },
      cookies: [
        {
          category: "Marketing",
          items: [
            {
              name: "_gcl_au",
              expiry: "beständig",
              purpose: "Konversionen speichern und verfolgen",
              href: "https://cookiedatabase.org/cookie/google-adsense/_gcl_au/",
            },
            {
              name: "google_adsense_settings",
              expiry: "beständig",
              purpose: "Anzeigenschaltung oder Retargeting anbieten",
              href: "https://cookiedatabase.org/cookie/google-adsense/google_adsense_settings/",
            },
          ],
        },
      ],
    },
    {
      name: "Polylang",
      tags: ["Funktional"],
      consentLabel: "Consent to service polylang",
      usage: {
        text: "Wir verwenden Polylang für Verwaltung der Gebietsschemen.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/polylang/",
      },
      sharing: "Diese Daten werden nicht an Dritte weitergegeben.",
      cookies: [],
    },
    {
      name: "Twitter",
      tags: ["Funktional", "Marketing"],
      consentLabel: "Consent to service twitter",
      usage: {
        text: "Wir verwenden Twitter für Anzeige der letzten Social-Posts und/oder Social-Share-Buttons.",
      },
      sharing:
        "Für weitere Informationen, bitte die Twitter Datenschutzerklärung lesen.",
      sharingLink: {
        text: "Twitter Datenschutzerklärung",
        href: "https://twitter.com/en/privacy",
      },
      cookies: [
        {
          category: "Marketing",
          items: [
            {
              name: "metrics_token",
              expiry: "beständig",
              purpose:
                "Speichern, ob der Nutzer eingebettete Inhalte gesehen hat",
              href: "https://cookiedatabase.org/cookie/twitter/metrics_token/",
            },
          ],
        },
      ],
    },
    {
      name: "LinkedIn",
      tags: ["Funktional", "Marketing", "Statistik", "Präferenzen"],
      consentLabel: "Consent to service linkedin",
      usage: {
        text: "Wir verwenden LinkedIn für Anzeige der letzten Social-Posts und/oder Social-Share-Buttons.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/linkedin/",
      },
      sharing:
        "Für weitere Informationen, bitte die LinkedIn Datenschutzerklärung lesen.",
      sharingLink: {
        text: "LinkedIn Datenschutzerklärung",
        href: "https://www.linkedin.com/legal/privacy-policy",
      },
      cookies: [
        {
          category: "Funktional",
          items: [
            {
              name: "sdsc",
              expiry: "Sitzung",
              purpose: "Lade ausgeglichene Funktionsweise",
              href: "https://cookiedatabase.org/cookie/linkedin/sdsc/",
            },
            {
              name: "li_gc",
              expiry: "6 Monate",
              purpose: "Speichere Cookie-Einwilligungsvorgaben",
              href: "https://cookiedatabase.org/cookie/linkedin/li_gc/",
            },
            {
              name: "BizographicsOptOut",
              expiry: "10 Jahre",
              purpose: "Speichere persönliche Vorlieben",
              href: "https://cookiedatabase.org/cookie/linkedin/bizographicsoptout/",
            },
          ],
        },
        {
          category: "Marketing",
          items: [
            {
              name: "lms_ads",
              expiry: "30 Tage",
              purpose: "Verfolge Besucher quer über Websiten",
              href: "https://cookiedatabase.org/cookie/linkedin/lms_ads/",
            },
            {
              name: "_guid",
              expiry: "90 Tage",
              purpose: "Die Identität eines Besuchers speichern und verfolgen",
              href: "https://cookiedatabase.org/cookie/linkedin/_guid/",
            },
            {
              name: "li-oatml",
              expiry: "1 Monat",
              purpose: "Anzeigenschaltung oder Retargeting anbieten",
              href: "https://cookiedatabase.org/cookie/linkedin/li-oatml/",
            },
            {
              name: "li_sugr",
              expiry: "90 Tage",
              purpose: "Die Identität eines Besuchers speichern und verfolgen",
              href: "https://cookiedatabase.org/cookie/linkedin/li_sugr/",
            },
            {
              name: "UserMatchHistory",
              expiry: "30 Tage",
              purpose: "Anzeigenschaltung oder Retargeting anbieten",
              href: "https://cookiedatabase.org/cookie/linkedin/usermatchhistory/",
            },
          ],
        },
        {
          category: "Statistik",
          items: [
            {
              name: "lms_analytics",
              expiry: "30 Tage",
              purpose: "Die Identität eines Besuchers speichern und verfolgen",
              href: "https://cookiedatabase.org/cookie/linkedin/lms_analytics/",
            },
            {
              name: "AnalyticsSyncHistory",
              expiry: "30 Tage",
              purpose: "Verfolge Besucher quer über Websiten",
              href: "https://cookiedatabase.org/cookie/linkedin/analyticssynchistory/",
            },
          ],
        },
        {
          category: "Präferenzen",
          items: [
            {
              name: "li_alerts",
              expiry: "1 Jahr",
              purpose: "Speichere, wenn eine Nachricht angezeigt wurde",
              href: "https://cookiedatabase.org/cookie/linkedin/li_alerts/",
            },
            {
              name: "bcookie",
              expiry: "1 Jahr",
              purpose: "Speichere Browser-Angaben",
              href: "https://cookiedatabase.org/cookie/linkedin/bcookie/",
            },
            {
              name: "lidc",
              expiry: "1 Tag",
              purpose: "Lade ausgeglichene Funktionsweise",
              href: "https://cookiedatabase.org/cookie/linkedin/lidc/",
            },
            {
              name: "bscookie",
              expiry: "1 Jahr",
              purpose: "Benutzer eingeloggt lassen",
              href: "https://cookiedatabase.org/cookie/linkedin/bscookie/",
            },
          ],
        },
      ],
    },
    {
      name: "WhatsApp",
      tags: ["Funktional"],
      consentLabel: "Consent to service whatsapp",
      usage: {
        text: "Wir verwenden WhatsApp für Chat-Support.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/whatsapp/",
      },
      sharing:
        "Für weitere Informationen, bitte die WhatsApp Datenschutzerklärung lesen.",
      sharingLink: {
        text: "WhatsApp Datenschutzerklärung",
        href: "https://www.whatsapp.com/legal/privacy-policy",
      },
      cookies: [
        {
          category: "Funktional",
          items: [
            {
              name: "wa_lang_pref",
              expiry: "6 Tage",
              purpose: "Speichere Spracheinstellungen",
              href: "https://cookiedatabase.org/cookie/whatsapp/wa_lang_pref/",
            },
            {
              name: "wa_ul",
              expiry: "Sitzung",
              purpose: "Zugang gewähren",
              href: "https://cookiedatabase.org/cookie/whatsapp/wa_ul/",
            },
          ],
        },
      ],
    },
    {
      name: "Complianz",
      tags: ["Funktional"],
      consentLabel: "Consent to service complianz",
      usage: {
        text: "Wir verwenden Complianz für Verwaltung der Cookie-Einwilligung.",
        linkText: "Mehr lesen",
        href: "https://cookiedatabase.org/service/complianz/",
      },
      sharing:
        "Diese Daten werden nicht an Dritte weitergegeben. Für weitere Informationen, bitte die Complianz Datenschutzerklärung lesen.",
      sharingLink: {
        text: "Complianz Datenschutzerklärung",
        href: "https://complianz.io/legal/",
      },
      cookies: [
        {
          category: "Funktional",
          items: [
            {
              name: "cmplz_functional",
              expiry: "365 Tage",
              purpose: "Speichere Cookie-Einwilligungsvorgaben",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_functional/",
            },
            {
              name: "cmplz_statistics",
              expiry: "365 Tage",
              purpose: "Speichere Cookie-Einwilligungsvorgaben",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_statistics/",
            },
            {
              name: "cmplz_preferences",
              expiry: "365 Tage",
              purpose: "Speichere Cookie-Einwilligungsvorgaben",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_preferences/",
            },
            {
              name: "cmplz_marketing",
              expiry: "365 Tage",
              purpose: "Speichere Cookie-Einwilligungsvorgaben",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_marketing/",
            },
            {
              name: "cmplz_policy_id",
              expiry: "365 Tage",
              purpose: "Erfasse die ID für die angenommene Cookie-Richtlinie",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_policy_id/",
            },
            {
              name: "cmplz_consented_services",
              expiry: "365 Tage",
              purpose: "Speichere Cookie-Einwilligungsvorgaben",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_consented_services/",
            },
            {
              name: "cmplz_banner-status",
              expiry: "365 Tage",
              purpose: "Store if the cookie banner has been dismissed",
              href: "https://cookiedatabase.org/cookie/complianz/cmplz_banner-status/",
            },
          ],
        },
      ],
    },
    {
      name: "Sonstiges",
      tags: ["Gegenstand der Untersuchung"],
      consentLabel: "Consent to service sonstiges",
      usage: { text: "" },
      sharing: "Die Weitergabe von Daten wird noch untersucht",
      cookies: [
        {
          category: "Gegenstand der Untersuchung",
          items: [
            { name: "e_event-tracker", expiry: "", purpose: "", href: "" },
            {
              name: "e_kit-elements-defaults",
              expiry: "",
              purpose: "",
              href: "",
            },
            { name: "iso_code", expiry: "", purpose: "", href: "" },
            {
              name: "t886cookiename_3147154",
              expiry: "",
              purpose: "",
              href: "",
            },
            { name: "_grecaptcha", expiry: "", purpose: "", href: "" },
            {
              name: "cmplz_cookie_data",
              expiry: "365 Tage",
              purpose: "",
              href: "",
            },
            { name: "WP_DATA_USER_2", expiry: "", purpose: "", href: "" },
            { name: "wp_lang", expiry: "", purpose: "", href: "" },
          ],
        },
      ],
    },
  ];

  return (
    <main>
      <div className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pt-30 xl:pb-17.5 2xl:pb-25 container mx-auto *:text-dark space-y-10">
        <article className="max-w-4xl space-y-4">
          {/* Header */}
          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Cookie Policy (EU)
            </h1>
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              Diese Cookie-Richtlinie wurde zuletzt am Juli 19, 2024
              aktualisiert und gilt für Bürger und Einwohner mit ständigem
              Wohnsitz im Europäischen Wirtschaftsraum und der Schweiz.
            </p>
          </header>

          {/* Content */}
          <div className="space-y-10 leading-relaxed">
            <section id="1">
              <h2 className="text-xl md:text-2xl font-semibold">
                1. Einführung
              </h2>
              <p className="mt-3">
                Unsere Website,{" "}
                <Link
                  className="underline underline-offset-4 hover:opacity-80"
                  href="https://xprt-minds.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://xprt-minds.com
                </Link>{" "}
                (im folgenden: &quot;Die Website&quot;) verwendet Cookies und
                ähnliche Technologien (der Einfachheit halber werden all diese
                unter &quot;Cookies&quot; zusammengefasst). Cookies werden
                außerdem von uns beauftragten Drittparteien platziert. In dem
                unten stehendem Dokument informieren wir dich über die
                Verwendung von Cookies auf unserer Website.
              </p>
            </section>

            <section id="2">
              <h2 className="text-xl md:text-2xl font-semibold">
                2. Was sind Cookies?
              </h2>
              <p className="mt-3">
                Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den
                Seiten einer Internetadresse versendet und vom Webbrowser auf
                dem PC oder einem anderen Gerät gespeichert werden kann. Die
                darin gespeicherten Informationen können während folgender
                Besuche zu unseren oder den Servern relevanter Drittanbieter
                gesendet werden.
              </p>
            </section>

            <section id="3">
              <h2 className="text-xl md:text-2xl font-semibold">
                3. Was sind Skripte?
              </h2>
              <p className="mt-3">
                Ein Script ist ein Stück Programmcode, das benutzt wird, um
                unserer Website Funktionalität und Interaktivität zu
                ermöglichen. Dieser Code wird auf unseren Servern oder auf
                deinem Gerät ausgeführt.
              </p>
            </section>

            <section id="4">
              <h2 className="text-xl md:text-2xl font-semibold">
                4. Was ist ein Web Beacon?
              </h2>
              <p className="mt-3">
                Ein Web-Beacon (auch Pixel-Tag genannt), ist ein kleines
                unsichtbares Textfragment oder Bild auf einer Website, das
                benutzt wird, um den Verkehr auf der Website zu überwachen. Um
                dies zu ermöglichen werden diverse Daten von dir mittels
                Web-Beacons gespeichert.
              </p>
            </section>

            <section id="5">
              <h2 className="text-xl md:text-2xl font-semibold">5. Cookies</h2>

              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="text-lg font-semibold">
                    5.1 Technische oder funktionelle Cookies
                  </h3>
                  <p className="mt-2">
                    Einige Cookies stellen sicher, dass Teile unserer Website
                    richtig funktionieren und deine Nutzervorlieben bekannt
                    bleiben. Durch das Platzieren funktionaler Cookies machen
                    wir es dir einfacher unsere Website zu besuchen. Auf diese
                    Weise musst du bei Besuchen unserer Website nicht wiederholt
                    die gleichen Informationen eingeben, oder deine Gegenstände
                    bleiben beispielsweise in deinem Warenkorb bis du bezahlst.
                    Wir können diese Cookies ohne dein Einverständnis
                    platzieren.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    5.2 Analytische Cookies
                  </h3>
                  <p className="mt-2">
                    Wir verwenden analytische Cookies, um das Website-Erlebnis
                    für unsere Nutzer zu optimieren. Mit diesen analytischen
                    Cookies erhalten wir Einblicke in die Nutzung unserer
                    Website. Wir bitten um deine Erlaubnis, analytische Cookies
                    zu setzen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    5.3 Marketing- / Tracking-Cookies
                  </h3>
                  <p className="mt-2">
                    Marketing- / Tracking-Cookies sind Cookies oder eine andere
                    Form der lokalen Speicherung, die zur Erstellung von
                    Benutzerprofilen verwendet werden, um Werbung anzuzeigen
                    oder den Benutzer auf dieser Website oder über mehrere
                    Websites hinweg für ähnliche Marketingzwecke zu verfolgen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">5.4 Soziale-Medien</h3>
                  <p className="mt-2">
                    Auf unserer Website haben wir Inhalte von Instagram,
                    Facebook, Twitter, LinkedIn und WhatsApp eingebunden, um
                    Webseiten zu bewerben (z. B. &quot;Gefällt mir&quot;,
                    &quot;Pin&quot;) oder zu teilen (z. B. &quot;Tweet&quot;) in
                    sozialen Netzwerken wie Instagram, Facebook, Twitter,
                    LinkedIn und WhatsApp. Dieser Inhalt ist mit einem Code
                    eingebettet, der von Instagram, Facebook, Twitter, LinkedIn
                    und WhatsApp stammt und Cookies platziert. Diese Inhalte
                    können bestimmte Informationen für personalisierte Werbung
                    speichern und verarbeiten.
                  </p>
                  <p className="mt-2">
                    Bitte lies die Datenschutzerklärung dieser sozialen
                    Netzwerke (die sich regelmäßig ändern kann), um zu erfahren,
                    wie sie mit deinen (persönlichen) Daten umgehen, die sie
                    mithilfe dieser Cookies verarbeiten. Die abgerufenen Daten
                    werden so weit wie möglich anonymisiert. Instagram,
                    Facebook, Twitter, LinkedIn und WhatsApp hat seine Sitze in
                    den Vereinigten Staaten
                  </p>
                </div>
              </div>
            </section>

            <section id="6">
              <h2 className="text-xl md:text-2xl font-semibold">
                6. Platzierte Cookies
              </h2>

              <div className="mt-5 space-y-6">
                {services.map((svc) => (
                  <div
                    key={svc.name}
                    className="rounded-2xl border border-black/10 p-5 md:p-6"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg md:text-xl font-semibold">
                          {svc.name}
                        </h3>
                        {svc.tags?.map((t) => (
                          <span
                            key={t}
                            className="text-xs rounded-full border border-black/10 px-2 py-1 opacity-80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {svc.consentLabel ? (
                        <p className="text-sm opacity-70">{svc.consentLabel}</p>
                      ) : null}
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold">Nutzung</h4>
                        <p className="mt-1">
                          {svc.usage?.text}
                          {svc.usage?.href ? (
                            <>
                              {" "}
                              <Link
                                className="underline underline-offset-4 hover:opacity-80"
                                href={svc.usage.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {svc.usage.linkText ?? "Mehr lesen"}
                              </Link>
                            </>
                          ) : null}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold">Weitergabe von Daten</h4>
                        <p className="mt-1">
                          {svc.sharing}{" "}
                          {svc.sharingLink?.href ? (
                            <Link
                              className="underline underline-offset-4 hover:opacity-80"
                              href={svc.sharingLink.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {svc.sharingLink.text}
                            </Link>
                          ) : null}
                        </p>
                      </div>

                      {/* Cookie list */}
                      {svc.cookies?.length ? (
                        <div className="space-y-5">
                          {svc.cookies.map((group) => (
                            <div key={group.category} className="space-y-3">
                              <h4 className="font-semibold">
                                {group.category}
                              </h4>

                              <div className="overflow-x-auto rounded-xl border border-black/10">
                                <table className="w-full text-sm">
                                  <thead className="bg-black/3">
                                    <tr className="text-left">
                                      <th className="p-3 font-semibold">
                                        Name
                                      </th>
                                      <th className="p-3 font-semibold">
                                        Ablaufdatum
                                      </th>
                                      <th className="p-3 font-semibold">
                                        Funktion
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {group.items.map((c) => (
                                      <tr
                                        key={c.name}
                                        className="border-t border-black/10"
                                      >
                                        <td className="p-3">
                                          {c.href ? (
                                            <Link
                                              className="underline underline-offset-4 hover:opacity-80"
                                              href={c.href}
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              {c.name}
                                            </Link>
                                          ) : (
                                            c.name
                                          )}
                                        </td>
                                        <td className="p-3 opacity-80">
                                          {c.expiry || "—"}
                                        </td>
                                        <td className="p-3 opacity-80">
                                          {c.purpose || "—"}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="7">
              <h2 className="text-xl md:text-2xl font-semibold">
                7. Zustimmung
              </h2>
              <p className="mt-3">
                Wenn du unsere Website das erste Mal besuchst, zeigen wir dir
                ein Pop-Up mit einer Erklärung über Cookies. Sobald du auf
                „Einstellungen speichern“ klickst, gibst du uns dein
                Einverständnis, alle von dir gewählten Kategorien von Cookies
                und Plugins wie in dieser Cookie-Erklärung beschrieben zu
                verwenden. Du kannst die Verwendung von Cookies über deinen
                Browser deaktivieren, aber bitte beachte, dass unsere Website
                dann unter Umständen nicht richtig funktioniert.
              </p>

              <p className="mt-3 font-semibold">
                7.1 Verwalte deine Zustimmungseinstellungen
              </p>
              <p className="mt-2">
                Du hast die Cookie-Richtlinie ohne Javascript-Unterstützung
                geladen. Unter AMP kannst du die Schaltfläche zum Zustimmen der
                Einwilligung unten auf der Seite verwenden.
              </p>
            </section>

            <section id="8">
              <h2 className="text-xl md:text-2xl font-semibold">
                8. Aktivierung/Deaktivierung und Löschen von Cookies
              </h2>
              <p className="mt-3">
                Du kannst deinen Internetbrowser verwenden um automatisch oder
                manuell Cookies zu löschen. Du kannst außerdem spezifizieren ob
                spezielle Cookies nicht platziert werden sollen. Eine andere
                Möglichkeit ist es deinen Internetbrowser derart einzurichten,
                dass du jedes Mal benachrichtigt wirst, wenn ein Cookie
                platziert wird. Für weitere Information über diese Möglichkeiten
                beachte die Anweisungen in der Hilfesektion deines Browsers.
              </p>
              <p className="mt-2">
                Bitte nimm zur Kenntnis, dass unsere Website möglicherweise
                nicht richtig funktioniert, wenn alle Cookies deaktiviert sind.
                Wenn du die Cookies in deinem Browser löschst, werden diese neu
                platziert, wenn du unsere Website erneut besuchst.
              </p>
            </section>

            <section id="9">
              <h2 className="text-xl md:text-2xl font-semibold">
                9. Deine Rechte in Bezug auf persönliche Daten
              </h2>
              <p className="mt-3">
                Du hast in Bezug auf deine persönlichen Daten die folgenden
                Rechte:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Du hast das Recht zu wissen, warum deine persönlichen Daten
                  gebraucht werden, was mit ihnen passiert und wie lange diese
                  verwahrt werden.
                </li>
                <li>
                  Zugriffsrecht: Du hast das Recht deine uns bekannten
                  persönliche Daten einzusehen.
                </li>
                <li>
                  Recht auf Berichtigung: Du hast das Recht wann immer du
                  wünscht, deine persönlichen Daten zu ergänzen, zu korrigieren
                  sowie gelöscht oder blockiert zu bekommen.
                </li>
                <li>
                  Wenn du uns dein Einverständnis zur Verarbeitung deiner Daten
                  gegeben hast, hast du das Recht dieses Einverständnis zu
                  widerrufen und deine persönlichen Daten löschen zu lassen.
                </li>
                <li>
                  Recht auf Datentransfer deiner Daten: Du hast das Recht, alle
                  deine persönlichen Daten von einem Kontrolleur anzufordern und
                  in ihrer Gesamtheit zu einem anderen Kontrolleur zu
                  transferieren.
                </li>
                <li>
                  Widerspruchsrecht: Du kannst der Verarbeitung deiner Daten
                  widersprechen. Wir entsprechen dem, es sei denn es gibt
                  berechtigte Gründe für die Verarbeitung.
                </li>
              </ul>
              <p className="mt-3">
                Um diese Rechte auszuüben kontaktiere uns bitte. Bitte beziehe
                dich auf die Kontaktdaten am Ende dieser Cookie-Erklärung. Wenn
                du eine Beschwerde darüber hast, wie wir deine Daten behandeln,
                würden wir diese gerne hören, aber du hast auch das Recht diese
                an die Aufsichtsbehörde (Datenschutzbehörde) zu richten.
              </p>
            </section>

            <section id="10">
              <h2 className="text-xl md:text-2xl font-semibold">
                10. Kontaktdaten
              </h2>
              <p className="mt-3">
                Für Fragen und/oder Kommentare über unsere Cookie-Richtlinien
                und diese Aussage kontaktiere uns bitte mittels der folgenden
                Kontaktdaten:
              </p>

              <div className="mt-4 rounded-2xl border border-black/10 p-5 md:p-6 space-y-1">
                <p className="font-semibold">XPRT MINDS</p>
                <p>Expert Minds GmbH, Angerstraße 11, 12529 Schönefeld</p>
                <p>Deutschland</p>
                <p>
                  Website:{" "}
                  <Link
                    className="underline underline-offset-4 hover:opacity-80"
                    href="https://xprt-minds.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://xprt-minds.com
                  </Link>
                </p>
                <p>
                  E-Mail:{" "}
                  <Link
                    className="underline underline-offset-4 hover:opacity-80"
                    href="mailto:hello@xprt-minds.com"
                  >
                    hello@xprt-minds.com
                  </Link>
                </p>
                <p>
                  Telefonnummer:{" "}
                  <Link
                    className="underline underline-offset-4 hover:opacity-80"
                    href="tel:+4930138800320"
                  >
                    +49(0)30138800320
                  </Link>
                </p>
              </div>

              <p className="mt-4 text-sm opacity-80">
                Diese Cookie-Richtlinie wurde mit{" "}
                <Link
                  className="underline underline-offset-4 hover:opacity-80"
                  href="https://cookiedatabase.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  cookiedatabase.org
                </Link>{" "}
                am August 31, 2024 synchronisiert.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
