"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig, contactInfo, openingHours } from "@/lib/data/content";

export function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl lg:text-6xl xl:text-7xl mb-4"
            style={{ fontStyle: "italic" }}
          >
            Kontakt & Anfahrt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Wir freuen uns auf Ihren Besuch oder Ihre Nachricht
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="font-display text-3xl mb-8"
                style={{ fontStyle: "italic" }}
              >
                Nachricht senden
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl mb-2">
                    Vielen Dank für Ihre Nachricht!
                  </h3>
                  <p className="font-serif text-muted-foreground">
                    Wir werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6 font-serif"
                  >
                    Neue Nachricht
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-serif">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        className="font-serif"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-serif">
                        E-Mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                        className="font-serif"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-serif">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="font-serif"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-serif">
                        Betreff *
                      </Label>
                      <Input
                        id="subject"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        required
                        className="font-serif"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-serif">
                      Nachricht *
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      className="font-serif"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto font-serif tracking-wide"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2
                className="font-display text-3xl mb-8"
                style={{ fontStyle: "italic" }}
              >
                Kontaktdaten
              </h2>

              {/* Quick Contact */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">Telefon</h3>
                  <a
                    href={siteConfig.links.phone}
                    className="font-serif text-lg text-gold hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="font-serif text-sm text-muted-foreground mt-1">
                    Für Reservierungen und Anfragen
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">WhatsApp</h3>
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-green-600 hover:underline"
                  >
                    Nachricht senden
                  </a>
                  <p className="font-serif text-sm text-muted-foreground mt-1">
                    Schnelle Antworten garantiert
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">E-Mail</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-serif text-muted-foreground hover:text-gold"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">Adresse</h3>
                  <p className="font-serif text-muted-foreground">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                  </p>
                  <a
                    href={siteConfig.links.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-serif text-sm text-gold hover:underline"
                  >
                    Route planen →
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
                            item.closed
                              ? "text-muted-foreground/50"
                              : "text-foreground"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] lg:h-[500px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.5!2d9.0152!3d48.8011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHerti%C4%8Dstra%C3%9Fe+30%2C+71229+Leonberg!5e0!3m2!1sde!2sde!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Casa Eltinger Hof"
        />
      </section>
    </div>
  );
}
