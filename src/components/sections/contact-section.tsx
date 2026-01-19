"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, contactInfo, openingHours } from "@/lib/data/content";

export function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
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
            Kontakt & Anfahrt
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir freuen uns auf Ihren Besuch oder Ihre Anfrage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden bg-muted"
          >
            {/* Placeholder for Google Maps - Replace with actual embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.5!2d9.0152!3d48.8011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHerti%C4%8Dstra%C3%9Fe+30%2C+71229+Leonberg!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Standort Casa Eltinger Hof"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">Adresse</h3>
                <p className="font-serif text-muted-foreground">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-serif text-gold hover:text-gold-light"
                >
                  <a
                    href={siteConfig.links.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Route planen →
                  </a>
                </Button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">Telefon</h3>
                <a
                  href={siteConfig.links.phone}
                  className="font-serif text-muted-foreground hover:text-gold transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">E-Mail</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-serif text-muted-foreground hover:text-gold transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl mb-4">Öffnungszeiten</h3>
                <ul className="space-y-2">
                  {openingHours.map((item) => (
                    <li
                      key={item.day}
                      className="flex justify-between font-serif text-sm"
                    >
                      <span
                        className={
                          item.closed ? "text-muted-foreground/50" : "text-foreground"
                        }
                      >
                        {item.day}
                      </span>
                      <span
                        className={
                          item.closed
                            ? "text-muted-foreground/50 italic"
                            : "text-muted-foreground"
                        }
                      >
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-foreground font-serif tracking-wide"
              >
                <a href={siteConfig.links.phone}>Jetzt reservieren</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
