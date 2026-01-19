import { Metadata } from "next";
import { contactInfo, siteConfig } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen für Casa Eltinger Hof.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-display text-4xl lg:text-5xl mb-8"
            style={{ fontStyle: "italic" }}
          >
            Impressum
          </h1>

          <div className="prose prose-lg font-serif">
            <h2 className="font-display text-2xl mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {siteConfig.name}
              <br />
              {contactInfo.address.street}
              <br />
              {contactInfo.address.city}
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">Kontakt</h2>
            <p>
              Telefon: {contactInfo.phone}
              <br />
              E-Mail: {contactInfo.email}
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
              <br />
              [Ihre USt-IdNr. hier einfügen]
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              [Name des Verantwortlichen]
              <br />
              {contactInfo.address.street}
              <br />
              {contactInfo.address.city}
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
