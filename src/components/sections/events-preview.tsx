"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventTypes, upcomingEvents } from "@/lib/data/events";

export function EventsPreview() {
  const featuredEvents = eventTypes.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="font-display text-5xl lg:text-6xl xl:text-7xl mb-4"
            style={{ fontStyle: "italic" }}
          >
            Veranstaltungen
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Feiern Sie Ihre besonderen Momente bei uns. Von romantischen Abenden
            bis zu großen Festen – wir machen jeden Anlass unvergesslich.
          </p>
        </motion.div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${event.image}')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl mb-2 group-hover:text-gold transition-colors">
                  {event.name}
                </h3>
                <p className="font-serif text-sm text-white/70 line-clamp-2">
                  {event.description}
                </p>
                {event.capacity && (
                  <p className="font-serif text-xs text-gold mt-2">
                    {event.capacity}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm p-8 lg:p-12 rounded-sm border border-border"
          >
            <h3 className="font-display text-2xl mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-gold" />
              Kommende Veranstaltungen
            </h3>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="border-l-2 border-gold pl-3 sm:pl-4"
                >
                  <p className="text-gold font-serif text-sm mb-1">{event.date}</p>
                  <h4 className="font-display text-lg mb-1">{event.title}</h4>
                  <p className="font-serif text-sm text-muted-foreground">{event.time}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="font-serif tracking-wide group"
          >
            <Link href="/veranstaltungen">
              Alle Veranstaltungen
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
