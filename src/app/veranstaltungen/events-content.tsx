"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventTypes, eventContact } from "@/lib/data/events";
import { siteConfig } from "@/lib/data/content";

export function EventsPageContent() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/placeholder.jpeg')",
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
            Veranstaltungen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-xl text-white/80 max-w-2xl mx-auto"
          >
            Feiern Sie Ihre besonderen Momente bei uns
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2
              className="font-display text-3xl lg:text-4xl mb-6"
              style={{ fontStyle: "italic" }}
            >
              Unser Saal für Ihre Feier
            </h2>
            <p className="font-serif text-muted-foreground leading-relaxed">
              Ob intime Familienfeier oder große Hochzeitsgesellschaft – unser
              Veranstaltungssaal bietet den perfekten Rahmen für Ihren Anlass.
              Mit Platz für bis zu 80 Personen, separatem Eingang und
              individueller Menügestaltung machen wir jeden Moment unvergesslich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-white">
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
              Unsere Veranstaltungen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${event.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <h3 className="font-display text-2xl mb-2">{event.name}</h3>
                <p className="font-serif text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>
                <ul className="space-y-2">
                  {event.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-serif text-sm"
                    >
                      <Check className="w-4 h-4 text-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {event.capacity && (
                  <p className="mt-4 font-serif text-sm text-gold">
                    {event.capacity}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="font-display text-4xl lg:text-5xl mb-6"
              style={{ fontStyle: "italic" }}
            >
              {eventContact.title}
            </h2>
            <p className="font-serif text-white/70 mb-10">
              {eventContact.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="font-serif tracking-wide"
              >
                <a href={siteConfig.links.phone}>
                  <Phone className="w-4 h-4 mr-2" />
                  {eventContact.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline-dark"
                className="font-serif tracking-wide"
              >
                <a href={`mailto:${eventContact.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  E-Mail schreiben
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
