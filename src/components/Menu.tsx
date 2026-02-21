import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Flame, Wine, Beer, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const menuItems: Record<string, { name: string; price: string; desc: string }[]> = {
  signature: [
    { name: "Riga Firecracker", price: "€4.50", desc: "Vodka, tabasco, lime — our legendary house shot" },
    { name: "Baltic Sunset", price: "€5.00", desc: "Layered orange liqueur, grenadine & gold rum" },
    { name: "Old Town Bomb", price: "€5.50", desc: "Jägermeister dropped into energy drink" },
    { name: "Pink Neon", price: "€5.00", desc: "Raspberry vodka, blue curaçao & cranberry" },
    { name: "Midnight Express", price: "€4.50", desc: "Espresso, Kahlúa & chilled vodka" },
    { name: "The Latvian", price: "€6.00", desc: "Black Balsam, honey & fresh lemon" },
  ],
  classic: [
    { name: "Tequila Sunrise Shot", price: "€3.50", desc: "Tequila, orange & grenadine layers" },
    { name: "Lemon Drop", price: "€3.50", desc: "Citrus vodka, triple sec & fresh lemon" },
    { name: "Kamikaze", price: "€3.50", desc: "Vodka, lime juice & triple sec" },
    { name: "B-52", price: "€4.00", desc: "Kahlúa, Baileys & Grand Marnier" },
    { name: "Jäger Bomb", price: "€4.50", desc: "Jägermeister & energy drink" },
    { name: "Green Fairy", price: "€4.50", desc: "Absinthe, sugar & chilled water" },
  ],
  "cocktail-shots": [
    { name: "Baby Guinness", price: "€4.00", desc: "Kahlúa topped with Baileys cream" },
    { name: "Liquid Cocaine", price: "€5.00", desc: "Jäger, Goldschläger, Rumple Minze" },
    { name: "Pornstar Mini", price: "€5.00", desc: "Vanilla vodka, passionfruit purée" },
    { name: "Espresso Martini Shot", price: "€4.50", desc: "Vodka, espresso, coffee liqueur" },
  ],
  cocktails: [
    { name: "Saloon Margarita", price: "€9.00", desc: "Tequila, lime, agave with a salt rim" },
    { name: "Old Town Mule", price: "€8.50", desc: "Vodka, ginger beer, lime, served in copper" },
    { name: "Shot Cafe Spritz", price: "€8.00", desc: "Aperol, prosecco, soda with a twist" },
    { name: "Dark & Stormy", price: "€9.00", desc: "Dark rum, ginger beer, fresh lime" },
    { name: "Passionfruit Martini", price: "€10.00", desc: "Vanilla vodka, passionfruit, prosecco" },
  ],
  beer: [
    { name: "Aldaris Lager", price: "€3.50", desc: "Crisp Latvian lager, 500ml draft" },
    { name: "Užavas", price: "€4.00", desc: "Premium unfiltered Latvian beer" },
    { name: "Cēsu Premium", price: "€3.50", desc: "Classic Latvian pilsner on tap" },
    { name: "Guest IPA", price: "€5.00", desc: "Rotating craft IPA selection" },
  ],
};

const categoryIcons = [
  { id: "signature", icon: Flame },
  { id: "classic", icon: Zap },
  { id: "cocktail-shots", icon: Sparkles },
  { id: "cocktails", icon: Wine },
  { id: "beer", icon: Beer },
];

const Menu = () => {
  const [active, setActive] = useState("signature");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const categories = categoryIcons.map((c) => ({
    ...c,
    label: t(`menu.cat.${c.id}`),
  }));

  return (
    <section id="menu" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-rust font-body font-semibold">{t("menu.tag")}</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 text-cream">
            {t("menu.title1")} <span className="text-whiskey">{t("menu.title2")}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-body text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? "gradient-whiskey text-primary-foreground warm-shadow"
                  : "rustic-card text-muted-foreground hover:text-foreground hover:border-whiskey/30"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems[active]?.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rustic-card p-6 group hover:border-whiskey/40 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-base group-hover:text-whiskey transition-all duration-300 text-cream">
                  {item.name}
                </h3>
                <span className="text-whiskey font-body font-bold text-lg shrink-0 ml-3">{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-md rustic-card border-whiskey/20">
            <Sparkles className="w-5 h-5 text-rust" />
            <span className="text-sm font-body text-muted-foreground">
              {t("menu.surprise")} <span className="text-whiskey font-semibold">{t("menu.surpriseShot")}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
