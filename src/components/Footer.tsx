import { Instagram, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#location" },
  ];

  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Start your night at <span className="neon-text-pink">Shot Cafe</span>
          </h3>
          <a
            href="#location"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-semibold gradient-neon text-primary-foreground hover:opacity-90 transition-all neon-glow-pink"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <div className="font-display text-lg font-bold">
            <span className="neon-text-pink">SHOT</span> CAFE
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-neon-pink transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-pink transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 font-body">
          © {new Date().getFullYear()} Shot Cafe. All rights reserved. Drink responsibly.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
