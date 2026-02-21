import { MapPin } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/80 backdrop-blur-xl border-t border-border/30">
      <a
        href="#location"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-display font-semibold gradient-gold text-primary-foreground neon-glow-gold"
      >
        <MapPin className="w-5 h-5" />
        Get Directions
      </a>
    </div>
  );
};

export default MobileCTA;
