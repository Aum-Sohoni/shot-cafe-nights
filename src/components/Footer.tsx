import { Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("footer.events"), href: "#events" },
    { label: t("nav.contact"), href: "#location" },
  ];

  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <img src={logo} alt="Shot Cafe" className="w-20 h-20 rounded-lg mx-auto mb-6" />
          <h3 className="font-display text-2xl md:text-3xl mb-4 text-cream">
            {t("footer.cta")} <span className="text-whiskey">Shot Cafe</span>
          </h3>
          <a
            href="#location"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-display text-primary-foreground gradient-whiskey hover:opacity-90 transition-all warm-shadow"
          >
            <MapPin className="w-5 h-5" />
            {t("nav.directions")}
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shot Cafe" className="w-8 h-8 rounded-md" />
            <span className="font-display text-lg text-whiskey">SHOT CAFE</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-whiskey transition-colors font-body">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-whiskey transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-whiskey transition-colors" aria-label="Facebook">
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
