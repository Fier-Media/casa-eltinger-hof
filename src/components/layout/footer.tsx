import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  siteConfig,
  contactInfo,
  openingHours,
  navigationItems,
  footerContent,
} from "@/lib/data/content";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl lg:text-3xl text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-white/70 font-serif text-sm leading-relaxed">
              {footerContent.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-gold transition-colors font-serif text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg mb-6">Öffnungszeiten</h3>
            <ul className="space-y-2">
              {openingHours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-sm font-serif"
                >
                  <span className={item.closed ? "text-white/50" : "text-white/70"}>
                    {item.day}
                  </span>
                  <span
                    className={
                      item.closed ? "text-white/50 italic" : "text-white/90"
                    }
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span className="font-serif text-sm">{contactInfo.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.phone}
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-serif text-sm">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="font-serif text-sm">{contactInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-serif">
          <p>{footerContent.copyright}</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-gold transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gold transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
