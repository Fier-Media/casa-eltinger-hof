import { Metadata } from "next";
import { EventsPageContent } from "./events-content";

export const metadata: Metadata = {
  title: "Veranstaltungen & Saal",
  description:
    "Feiern Sie bei uns! Hochzeiten, Geburtstage, Firmenfeiern - unser Saal bietet Platz für bis zu 80 Personen mit individueller Betreuung.",
  openGraph: {
    title: "Veranstaltungen & Saal | Casa Eltinger Hof",
    description:
      "Ihr perfekter Ort für unvergessliche Feiern in Leonberg.",
  },
};

export default function VeranstaltungenPage() {
  return <EventsPageContent />;
}
