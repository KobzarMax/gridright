import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main>
      <div className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pt-30 xl:pb-17.5 2xl:pb-25 container mx-auto *:text-dark space-y-10">
        <h1 className="text-5xl font-bold">Impressum</h1>
        <h2 className="text-3xl font-medium">Informationen nach § 5 TMG:</h2>
        <div className="">
          <p className="text-lg">
            GridRight ist ein Produkt der Expert Minds GmbH
          </p>
          <p className="text-lg">Geschäftsführender Direktor: Emil Melikov</p>
          <p className="text-lg">Kontakt:</p>
          <p className="text-lg">
            Telefon: <Link href={"tel:+49030138800320"}>+49(0)30138800320</Link>
          </p>
          <p className="text-lg">
            E-Mail:{" "}
            <Link href={"mailto:info@xprt-minds.com"}>info@xprt-minds.com</Link>
          </p>
        </div>
        <div className="">
          <p className="text-lg">Registernummer: HRB 16676 CB</p>
          <p className="text-lg">Amtsgericht Cottbus</p>
        </div>

        <h2 className="text-3xl font-medium">
          Name und eingetragener Sitz der Gesellschaft:
        </h2>
        <div className="">
          <p className="text-lg">Expert Minds GmbH</p>
          <p className="text-lg">Angerstraße 11</p>
          <p className="text-lg">12529 Schönefeld</p>
        </div>
        <p className="text-lg">
          Quelle:{" "}
          <Link href={"https://www.e-recht24.de"}>
            https://www.e-recht24.de
          </Link>
        </p>
        <h2 className="text-3xl font-medium">Haftungsausschluss</h2>
        <h2 className="text-3xl font-medium">Haftung für Inhalte</h2>
        <p className="text-lg">
          Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
        <p className="text-lg">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h2 className="text-3xl font-medium">Haftung für Links</h2>
        <p className="text-lg">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-lg">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2 className="text-3xl font-medium">Urheberrecht</h2>
        <p className="text-lg">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-lg">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </main>
  );
}
