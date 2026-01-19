"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Leaf, Star } from "lucide-react";
import { menuCategories, drinkCategories } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

export function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const allCategories = [...menuCategories, ...drinkCategories];

  const activeMenuCategory = allCategories.find(
    (cat) => cat.id === activeCategory
  );

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
            Speisekarte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Frische Zutaten, traditionelle Rezepte und mediterrane Leidenschaft
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-2 lg:gap-4 min-w-max lg:min-w-0">
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 font-serif text-sm tracking-wide transition-all whitespace-nowrap shrink-0",
                    activeCategory === category.id
                      ? "bg-foreground text-white"
                      : "bg-transparent text-foreground hover:bg-foreground/5"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            {activeMenuCategory && (
              <motion.div
                key={activeMenuCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl lg:text-4xl mb-2">
                    {activeMenuCategory.name}
                  </h2>
                  {activeMenuCategory.description && (
                    <p className="font-serif text-muted-foreground">
                      {activeMenuCategory.description}
                    </p>
                  )}
                </div>

                {/* Items List */}
                <div className="space-y-6">
                  {activeMenuCategory.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group border-b border-border pb-6"
                    >
                      <div className="flex justify-between items-start gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="font-display text-lg sm:text-xl group-hover:text-gold transition-colors">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
                            )}
                            {item.vegetarian && (
                              <Leaf className="w-4 h-4 text-green-600 shrink-0" />
                            )}
                            {item.vegan && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded shrink-0">
                                Vegan
                              </span>
                            )}
                            {item.spicy && (
                              <Flame className="w-4 h-4 text-red-500 shrink-0" />
                            )}
                          </div>
                          <p className="font-serif text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-display text-lg sm:text-xl text-gold whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-border"
          >
            <div className="flex items-center gap-2 font-serif text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span>Beliebt</span>
            </div>
            <div className="flex items-center gap-2 font-serif text-sm text-muted-foreground">
              <Leaf className="w-4 h-4 text-green-600" />
              <span>Vegetarisch</span>
            </div>
            <div className="flex items-center gap-2 font-serif text-sm text-muted-foreground">
              <Flame className="w-4 h-4 text-red-500" />
              <span>Scharf</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
