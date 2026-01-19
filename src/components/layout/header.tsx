"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationItems, siteConfig, contactInfo } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "hover:bg-transparent",
                  isScrolled || !isHomePage ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full bg-cream">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link
                    href="/"
                    className="font-display text-2xl text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {siteConfig.name}
                  </Link>
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-3 text-lg font-serif transition-colors",
                            pathname === item.href
                              ? "text-gold"
                              : "text-foreground hover:text-gold"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t border-border">
                  <a
                    href={`tel:${contactInfo.phoneFormatted}`}
                    className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-serif">{contactInfo.phone}</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-display text-xl lg:text-2xl tracking-wide transition-colors",
              isScrolled || !isHomePage ? "text-foreground" : "text-white"
            )}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navigationItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-serif text-sm tracking-wide transition-colors relative group",
                    isScrolled || !isHomePage
                      ? pathname === item.href
                        ? "text-gold"
                        : "text-foreground hover:text-gold"
                      : pathname === item.href
                      ? "text-gold"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                      isScrolled || !isHomePage ? "bg-gold" : "bg-white"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            asChild
            variant="outline"
            className={cn(
              "hidden sm:flex font-serif text-sm tracking-wide transition-all",
              isScrolled || !isHomePage
                ? "border-foreground text-foreground hover:bg-foreground hover:text-white"
                : "border-white text-white hover:bg-white hover:text-foreground"
            )}
          >
            <a href={`tel:${contactInfo.phoneFormatted}`}>Reservieren</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
