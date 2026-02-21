import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Navbar = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#location" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold">
          <span className="neon-text-pink">SHOT</span>{" "}
          <span className="text-foreground">CAFE</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#location"
          className="hidden md:inline-flex px-5 py-2 text-sm font-display font-semibold rounded-lg gradient-neon text-primary-foreground hover:opacity-90 transition-all"
        >
          Get Directions
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
