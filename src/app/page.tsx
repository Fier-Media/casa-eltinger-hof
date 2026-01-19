import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { MenuPreview } from "@/components/sections/menu-preview";
import { RestaurantPreview } from "@/components/sections/restaurant-preview";
import { EventsPreview } from "@/components/sections/events-preview";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Fullscreen with background image */}
      <HeroSection />

      {/* Menu Preview Section */}
      <MenuPreview />

      {/* Restaurant Preview Section - Bilder & Philosophie */}
      <RestaurantPreview />

      {/* Events Preview Section - Saal & Veranstaltungen */}
      <EventsPreview />

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* About Preview Section - Über Uns */}
      <AboutSection />

      {/* Newsletter & WhatsApp Section */}
      <NewsletterSection />

      {/* Contact & Location Section */}
      <ContactSection />
    </>
  );
}
