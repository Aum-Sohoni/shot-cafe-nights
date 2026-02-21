import { MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const MobileCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/90 backdrop-blur-sm border-t border-border/40">
      <a
        href="#location"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-md font-display text-primary-foreground gradient-whiskey warm-shadow"
      >
        <MapPin className="w-5 h-5" />
        {t("mobile.directions")}
      </a>
    </div>
  );
};

export default MobileCTA;
