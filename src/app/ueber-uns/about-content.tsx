"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const timeline = [
  {
    year: "1985",
    title: "Die Gründung",
    description:
      "Mit einer Vision von authentischer mediterraner Küche eröffneten wir die Türen des Casa Eltinger Hof. Von Anfang an stand Qualität und Gastfreundschaft im Mittelpunkt.",
  },
  {
    year: "1995",
    title: "Erweiterung",
    description:
      "Nach zehn erfolgreichen Jahren erweiterten wir unser Restaurant um den Veranstaltungssaal, um unseren Gästen noch mehr Möglichkeiten zu bieten.",
  },
  {
    year: "2010",
    title: "Neue Generation",
    description:
      "Die nächste Generation übernahm die Leitung und brachte frische Ideen ein, ohne die traditionellen Werte zu vergessen.",
  },
  {
    year: "Heute",
    title: "Tradition & Innovation",
    description:
      "Wir verbinden bewährte Rezepte mit modernen Einflüssen und freuen uns jeden Tag aufs Neue, unsere Gäste zu verwöhnen.",
  },
];

export function AboutPageContent() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl lg:text-6xl xl:text-7xl mb-4"
            style={{ fontStyle: "italic" }}
          >
            Über Uns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-xl text-white/80"
          >
            Unsere Geschichte, unsere Leidenschaft
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold font-serif text-sm tracking-[0.3em] uppercase mb-4">
                Seit 1985
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl mb-6"
                style={{ fontStyle: "italic" }}
              >
                Unsere Geschichte
              </h2>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  Herzlich willkommen im Casa Eltinger Hof. Was vor fast vier
                  Jahrzehnten als kleines Familienrestaurant begann, ist heute
                  eine feste Institution in Leonberg und weit darüber hinaus.
                </p>
                <p>
                  Unsere Leidenschaft für die mediterrane Küche ist ungebrochen.
                  Wir glauben, dass gutes Essen Menschen zusammenbringt, Freude
                  schenkt und Erinnerungen schafft, die ein Leben lang halten.
                </p>
                <p>
                  Jedes Gericht, das unsere Küche verlässt, erzählt eine
                  Geschichte – von sonnengereiften Tomaten, von Olivenhainen im
                  Morgenland, von Großmutters geheimen Rezepten und von der
                  Liebe, die wir in jede Zutat stecken.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/about-story.jpg')",
                }}
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32 bg-foreground text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-gold mx-auto mb-8" />
            <blockquote
              className="font-display text-3xl lg:text-4xl mb-8 leading-relaxed"
              style={{ fontStyle: "italic" }}
            >
              &bdquo;Wir kochen mediterran – Pizza, Pasta und mediterrane
              Gerichte. Mittags leicht und wechselnd, abends entspannt und mit
              Zeit zum Genießen.&ldquo;
            </blockquote>
            <p className="font-serif text-gold">– Das Team vom Casa Eltinger Hof</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display text-4xl lg:text-5xl mb-4"
              style={{ fontStyle: "italic" }}
            >
              Unsere Meilensteine
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-display text-2xl text-gold">
                    {item.year}
                  </span>
                </div>
                <div className="relative flex-1 pl-8 border-l-2 border-gold pb-8 last:pb-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gold" />
                  <h3 className="font-display text-xl mb-2">{item.title}</h3>
                  <p className="font-serif text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display text-4xl lg:text-5xl mb-4"
              style={{ fontStyle: "italic" }}
            >
              Unser Team
            </h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Mit Leidenschaft und Können sorgen wir jeden Tag dafür, dass Sie
              sich bei uns wohlfühlen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                role: "Küche",
                description: "Unser Küchenteam zaubert täglich frische mediterrane Gerichte.",
                image: "/images/gallery/team-1.jpg",
              },
              {
                role: "Service",
                description: "Herzliche Gastfreundschaft und aufmerksamer Service.",
                image: "/images/gallery/team-2.jpg",
              },
              {
                role: "Leitung",
                description: "Mit Erfahrung und Vision führen wir das Restaurant.",
                image: "/images/team-3.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="aspect-square bg-cover bg-center mb-6"
                  style={{
                    backgroundImage: `url('${member.image}')`,
                  }}
                />
                <h3 className="font-display text-xl mb-2">{member.role}</h3>
                <p className="font-serif text-sm text-muted-foreground">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
