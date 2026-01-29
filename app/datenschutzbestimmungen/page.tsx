import Link from "next/link";

export default function DatenschutzbestimmungenPage() {
  return (
    <main>
      <div className="px-5 md:px-7.5 lg:px-10 xl:px-12.5 2xl:px-17.5 pt-30 xl:pb-17.5 2xl:pb-25 container mx-auto *:text-dark space-y-10">
        <h1 className="text-5xl font-bold">Datenschutzbestimmungen</h1>
        <h2 className="text-3xl font-medium">Datenschutz</h2>
        <p className="text-lg">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
          der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p className="text-lg">
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.
        </p>
        <p className="text-lg">
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <h2 className="text-3xl font-medium">
          Datenschutzbestimmungen für die Nutzung von Google Analytics
        </h2>
        <p className="text-lg">
          Diese Website benutzt Funktionen des Webanalysedienstes Google
          Analytics. Der Anbieter ist Google Inc, 1600 Amphitheatre Parkway
          Mountain View, CA 94043, USA.
        </p>
        <p className="text-lg">
          Google Analytics verwendet so genannte „Cookies“. Das sind
          Textdateien, die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
          Cookie erzeugten Informationen über Ihre Benutzung dieser Website
          werden in der Regel an einen Server von Google in den USA übertragen
          und dort gespeichert.
        </p>
        <p className="text-lg">
          Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite,
          wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten
          der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
          über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in
          Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in
          den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
          Website wird Google diese Informationen benutzen, um Ihre Nutzung der
          Website auszuwerten, um Reports über die Websiteaktivitäten
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen gegenüber dem
          Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von
          Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von
          Google zusammengeführt.
        </p>
        <p className="text-lg">
          Sie können die Speicherung der Cookies durch eine entsprechende
          Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website vollumfänglich werden nutzen können. Sie
          können darüber hinaus die Erfassung der durch das Cookie erzeugten und
          auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse)
          an Google sowie die Verarbeitung dieser Daten durch Google verhindern,
          indem sie das unter dem folgenden Link verfügbare Browser-Plugin
          herunterladen und installieren:{" "}
          <Link href={"http://tools.google.com/dlpage/gaoptout?hl=de"}>
            http://tools.google.com/dlpage/gaoptout?hl=de
          </Link>
        </p>
        <p className="text-lg">
          Sie können die Erfassung der Daten durch Google Analytics verhindern,
          indem Sie auf den folgenden Link klicken. Es wird ein Opt-out-Cookie
          gesetzt, das die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
          Website verhindert:{" "}
          <Link
            href={
              "https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out#:~:text=To%20disable%20Analytics%20programmatically%2C%20set,you%20would%20like%20to%20disable."
            }
          >
            Google Analytics deaktivieren
          </Link>
        </p>
        <h2 className="text-3xl font-medium">
          Information, Löschung, Sperrung
        </h2>
        <p className="text-lg">
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
          zum Thema personenbezogene Daten können Sie sich jederzeit unter der
          im Impressum angegebenen Adresse an uns wenden.
        </p>
        <h2 className="text-3xl font-medium">Cookies</h2>
        <p className="text-lg">
          Die Internetseiten verwenden teilweise sogenannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert.
        </p>
        <p className="text-lg">
          Die meisten der von uns verwendeten Cookies sind so genannte
          „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
          gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis
          Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser bei
          Ihrem nächsten Besuch wiederzuerkennen.
        </p>
        <p className="text-lg">
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browser
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </p>
        <h2 className="text-3xl font-medium">Kontakt-Formular</h2>
        <p className="text-lg">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
      </div>
    </main>
  );
}
