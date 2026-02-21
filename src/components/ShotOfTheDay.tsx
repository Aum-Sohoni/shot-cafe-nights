import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame } from "lucide-react";

const ShotOfTheDay = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="fixed bottom-20 right-4 z-40 hidden md:block"
    >
      <div className="rustic-card border-whiskey/40 p-5 max-w-[220px] animate-float warm-shadow">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-rust" />
          <span className="text-xs uppercase tracking-widest text-rust font-body font-semibold">Shot of the Day</span>
        </div>
        <h4 className="font-display text-base text-whiskey">Riga Firecracker</h4>
        <p className="text-xs text-muted-foreground font-body mt-1">Vodka, tabasco & lime</p>
        <p className="text-whiskey font-body font-bold mt-2">€4.50</p>
      </div>
    </motion.div>
  );
};

export default ShotOfTheDay;
