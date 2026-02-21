import logo from "@/assets/logo.jpg";

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
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Shot Cafe" className="w-10 h-10 rounded-md" />
          <span className="font-display text-xl font-bold">
            <span className="neon-text-gold">SHOT</span>{" "}
            <span className="text-foreground">CAFE</span>
          </span>
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
          className="hidden md:inline-flex px-5 py-2 text-sm font-display font-semibold rounded-lg gradient-gold text-primary-foreground hover:opacity-90 transition-all"
        >
          Get Directions
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
