import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();

  const links = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.contact"), href: "#location" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Shot Cafe" className="w-10 h-10 rounded-md" />
          <span className="font-display text-lg text-whiskey">
            SHOT CAFE
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-whiskey transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#location"
            className="hidden md:inline-flex px-5 py-2 text-sm font-display rounded-md gradient-whiskey text-primary-foreground hover:opacity-90 transition-all"
          >
            {t("nav.directions")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
