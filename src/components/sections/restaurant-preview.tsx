"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Flame, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Authentische Küche",
    description:
      "Traditionelle mediterrane Rezepte, frisch zubereitet mit hochwertigen Zutaten.",
  },
  {
    icon: Flame,
    title: "Steinofen-Pizza",
    description:
      "Im traditionellen Steinofen gebacken – für den perfekten knusprigen Boden.",
  },
  {
    icon: Wine,
    title: "Erlesene Weine",
    description:
      "Handverlesene italienische Weine, perfekt abgestimmt auf unsere Gerichte.",
  },
];

export function RestaurantPreview() {
  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-serif text-sm tracking-[0.3em] uppercase mb-4">
              Unser Restaurant
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl mb-6" style={{ fontStyle: "italic" }}>
              Mit Liebe gekocht
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              Im Casa Eltinger Hof verbinden wir die Wärme der mediterranen
              Küche mit der Gastfreundschaft, die uns seit Jahrzehnten
              auszeichnet. Jedes Gericht erzählt eine Geschichte – von
              frischen Zutaten, traditionellen Rezepten und der Leidenschaft
              unseres Küchenteams.
            </p>

            {/* Features */}
            <div className="grid gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">{feature.title}</h3>
                    <p className="font-serif text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group font-serif tracking-wide"
            >
              <Link href="/restaurant">
                Mehr über unser Restaurant
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('/images/placeholder.jpeg')",
                }}
              />
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-lg overflow-hidden mt-8"
                style={{
                  backgroundImage: "url('/images/placeholder.jpeg')",
                }}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
