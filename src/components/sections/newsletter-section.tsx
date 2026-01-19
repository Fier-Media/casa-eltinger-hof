"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig, footerContent } from "@/lib/data/content";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your newsletter service
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-display text-3xl" style={{ fontStyle: "italic" }}>
                  Newsletter
                </h2>
              </div>
              <p className="font-serif text-muted-foreground mb-6">
                {footerContent.newsletter.description}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder={footerContent.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="font-serif"
                  />
                  <Button
                    type="submit"
                    className="bg-foreground hover:bg-foreground/90 font-serif"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-serif text-sm"
                  >
                    Vielen Dank für Ihre Anmeldung!
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-3xl" style={{ fontStyle: "italic" }}>
                  WhatsApp
                </h2>
              </div>
              <p className="font-serif text-muted-foreground mb-6">
                Schnelle Anfragen und Reservierungen direkt über WhatsApp. 
                Wir antworten in der Regel innerhalb weniger Stunden.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-serif tracking-wide"
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp öffnen
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
