import { Metadata } from "next";
import { contactInfo, siteConfig } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung für Casa Eltinger Hof.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-display text-4xl lg:text-5xl mb-8"
            style={{ fontStyle: "italic" }}
          >
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg font-serif">
            <h2 className="font-display text-2xl mt-8 mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-display text-xl mt-6 mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="font-display text-xl mt-6 mb-3">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-display text-xl mt-6 mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="font-display text-xl mt-6 mb-3">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p>
              {siteConfig.name}
              <br />
              {contactInfo.address.street}
              <br />
              {contactInfo.address.city}
              <br />
              Telefon: {contactInfo.phone}
              <br />
              E-Mail: {contactInfo.email}
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-display text-xl mt-6 mb-3">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden teilweise so genannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>

            <h3 className="font-display text-xl mt-6 mb-3">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h2 className="font-display text-2xl mt-8 mb-4">
              4. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Verarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>

            <h2 className="font-display text-2xl mt-8 mb-4">
              5. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen in der Datenschutzerklärung
              umzusetzen.
            </p>

            <p className="mt-8 text-muted-foreground text-sm">
              Stand: Januar 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
