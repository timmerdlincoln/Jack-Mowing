"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "The Estate", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Our Story", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#03210C]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-8 md:px-12 py-6 max-w-screen-2xl mx-auto">
        {/* Wordmark */}
        <span className="font-headline text-2xl italic text-white drop-shadow-md tracking-wide">
          Jack
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline text-sm tracking-wide text-white/90 hover:text-white transition-colors duration-200 drop-shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-white text-ce-primary hover:bg-stone-100 font-bold px-8 py-3 shadow-xl text-sm tracking-wide transition-transform active:scale-95"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
