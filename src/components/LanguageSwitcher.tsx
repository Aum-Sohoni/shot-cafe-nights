import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const flags: Record<Lang, string> = {
  en: "🇬🇧",
  lv: "🇱🇻",
  ru: "🇷🇺",
};

const labels: Record<Lang, string> = {
  en: "EN",
  lv: "LV",
  ru: "RU",
};

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm font-body text-muted-foreground hover:text-whiskey transition-colors rustic-card"
      >
        <Globe className="w-4 h-4" />
        <span>{labels[lang]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 rounded-md rustic-card bg-background/95 backdrop-blur-sm overflow-hidden min-w-[100px] z-50">
          {(Object.keys(flags) as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm font-body transition-colors ${
                lang === l ? "text-whiskey bg-whiskey/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              <span>{flags[l]}</span>
              <span>{labels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
