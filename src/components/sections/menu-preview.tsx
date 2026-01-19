"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Flame, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredDishes, menuCategories } from "@/lib/data/menu";

export function MenuPreview() {
  // Get category names for tabs
  const categories = menuCategories.slice(0, 5).map((cat) => cat.name);

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
            Speisekarte
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground font-serif">
            {categories.map((cat, index) => (
              <span key={cat}>
                {cat}
                {index < categories.length - 1 && (
                  <span className="ml-4 text-gold">/</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/placeholder.jpeg')",
              }}
            />
          </motion.div>

          {/* Menu Items Column */}
          <div className="space-y-6">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-start gap-4 py-4 border-b border-border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-xl group-hover:text-gold transition-colors">
                        {dish.name}
                      </h3>
                      {dish.vegetarian && (
                        <Leaf className="w-4 h-4 text-green-600" />
                      )}
                      {dish.spicy && <Flame className="w-4 h-4 text-red-500" />}
                    </div>
                    <p className="font-serif text-sm text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>
                  <span className="font-display text-lg text-gold whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Additional items teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6"
            >
              <p className="font-serif text-muted-foreground mb-6">
                Entdecken Sie unsere vollständige Speisekarte mit über 50 Gerichten...
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group font-serif tracking-wide"
              >
                <Link href="/speisekarten">
                  Zur Speisekarte
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
