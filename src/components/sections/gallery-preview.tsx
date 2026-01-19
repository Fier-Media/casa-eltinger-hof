"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredGalleryImages } from "@/lib/data/gallery";

export function GalleryPreview() {
  return (
    <section className="py-16 lg:py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header - Kompakter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 lg:mb-12"
        >
          <h2
            className="font-display text-4xl lg:text-5xl xl:text-6xl mb-2"
            style={{ fontStyle: "italic" }}
          >
            Galerie
          </h2>
          <p className="font-serif text-sm lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Einblicke in unser Restaurant und unvergessliche Momente
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll Gallery */}
        <div className="md:hidden">
          <div className="horizontal-scroll !gap-3">
            {featuredGalleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="scroll-snap-item flex-shrink-0"
              >
                <div
                  className="w-[200px] h-[200px] rounded-lg overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${image.src}')`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <Button
              asChild
              variant="outline"
              size="default"
              className="font-serif tracking-wide group"
            >
              <Link href="/galerie">
                Alle Bilder
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Desktop: Original Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredGalleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden cursor-pointer ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden aspect-square">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${image.src}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-serif text-white text-sm tracking-wide">
                      Ansehen
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
              variant="outline"
              size="lg"
              className="font-serif tracking-wide group"
            >
              <Link href="/galerie">
                Alle Bilder ansehen
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
