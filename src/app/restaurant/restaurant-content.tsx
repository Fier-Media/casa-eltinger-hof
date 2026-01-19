"use client";

import { motion } from "framer-motion";
import { Users, Leaf, Wifi, UtensilsCrossed, Flame, Wine } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Authentische Küche",
    description:
      "Traditionelle mediterrane Rezepte, frisch zubereitet mit hochwertigen Zutaten aus der Region und Italien.",
  },
  {
    icon: Flame,
    title: "Steinofen-Pizza",
    description:
      "Unsere Pizzen werden im traditionellen Steinofen bei hohen Temperaturen gebacken – für den perfekten knusprigen Boden.",
  },
  {
    icon: Wine,
    title: "Erlesene Weine",
    description:
      "Eine handverlesene Auswahl italienischer Weine, perfekt abgestimmt auf unsere Gerichte.",
  },
  {
    icon: Users,
    title: "Private Räume",
    description:
      "Separate Räumlichkeiten für bis zu 80 Personen – ideal für Feiern und Veranstaltungen.",
  },
  {
    icon: Leaf,
    title: "Vegane Optionen",
    description:
      "Vielfältige vegane und vegetarische Gerichte, die keine Kompromisse beim Geschmack machen.",
  },
  {
    icon: Wifi,
    title: "Kostenloses WLAN",
    description:
      "Bleiben Sie verbunden – schnelles Internet für alle unsere Gäste.",
  },
];

export function RestaurantPageContent() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/restaurant-exterior.jpg')",
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
            Unser Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-xl text-white/80"
          >
            Mediterranes Flair in Leonberg
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
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
                Unsere Philosophie
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl mb-6"
                style={{ fontStyle: "italic" }}
              >
                Mit Liebe gekocht
              </h2>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  Im Casa Eltinger Hof verbinden wir die Wärme der mediterranen
                  Küche mit der Gastfreundschaft, die uns seit Jahrzehnten
                  auszeichnet. Jedes Gericht erzählt eine Geschichte – von
                  frischen Zutaten, traditionellen Rezepten und der Leidenschaft
                  unseres Küchenteams.
                </p>
                <p>
                  Mittags servieren wir leichte, wechselnde Gerichte für die
                  kurze Pause. Abends nehmen wir uns Zeit – für Sie und für
                  Gerichte, die mit Ruhe und Sorgfalt zubereitet werden. So
                  schmeckt echter Genuss.
                </p>
                <p>
                  Unsere Pizza backen wir im traditionellen Steinofen, die
                  Pasta rollen wir täglich frisch. Dazu gibt es eine erlesene
                  Auswahl italienischer Weine und herzliche Gastfreundschaft.
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
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-[3/4] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/restaurant-1.jpg')",
                  }}
                />
                <div
                  className="aspect-[3/4] bg-cover bg-center mt-8"
                  style={{
                    backgroundImage: "url('/images/restaurant-2.jpg')",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Was uns auszeichnet
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl mb-3">{feature.title}</h3>
                <p className="font-serif text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Gallery */}
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
              Atmosphäre
            </h2>
            <p className="font-serif text-muted-foreground">
              Einblicke in unser Ambiente
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('/images/gallery/restaurant-${num}.jpg')`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
