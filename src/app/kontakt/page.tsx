import { Metadata } from "next";
import { ContactPageContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Kontaktieren Sie Casa Eltinger Hof in Leonberg. Reservierungen, Anfragen und Anfahrtsbeschreibung. Tel: 07152 3066485",
  openGraph: {
    title: "Kontakt & Anfahrt | Casa Eltinger Hof",
    description: "So erreichen Sie uns in Leonberg.",
  },
};

export default function KontaktPage() {
  return <ContactPageContent />;
}
