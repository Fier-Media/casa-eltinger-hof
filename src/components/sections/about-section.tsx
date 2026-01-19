"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Leaf, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutPreview, serviceFeatures } from "@/lib/data/content";

const iconMap = {
  users: Users,
  leaf: Leaf,
  wifi: Wifi,
};

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mobile Layout - Kompakt */}
        <div className="lg:hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-gold font-serif text-xs tracking-[0.3em] uppercase mb-2">
              {aboutPreview.subtitle}
            </p>
            <h2
              className="font-display text-3xl mb-3"
              style={{ fontStyle: "italic" }}
            >
              {aboutPreview.title}
            </h2>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed">
              {aboutPreview.text}
            </p>
          </motion.div>

          {/* Horizontal Scroll Service Features */}
          <div className="horizontal-scroll mb-6">
            {serviceFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="scroll-snap-item w-[180px] compact-card text-center"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-display text-sm mb-1">{feature.title}</h3>
                  <p className="font-serif text-xs text-muted-foreground line-clamp-2">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[16/9] rounded-lg overflow-hidden mb-6"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/placeholder.jpeg')",
              }}
            />
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="default"
              className="group font-serif tracking-wide"
            >
              <Link href="/ueber-uns">
                {aboutPreview.cta}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/placeholder.jpeg')",
                }}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-serif text-sm tracking-[0.3em] uppercase mb-4">
              {aboutPreview.subtitle}
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl xl:text-6xl mb-6"
              style={{ fontStyle: "italic" }}
            >
              {aboutPreview.title}
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutPreview.text}
            </p>

            {/* Service Features */}
            <div className="grid gap-6 mb-10">
              {serviceFeatures.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="font-serif text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group font-serif tracking-wide"
            >
              <Link href="/ueber-uns">
                {aboutPreview.cta}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
