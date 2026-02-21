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
      <div className="glass-card neon-border-pink rounded-xl p-5 max-w-[220px] animate-float">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-neon-amber" />
          <span className="text-xs uppercase tracking-widest text-neon-amber font-display">Shot of the Day</span>
        </div>
        <h4 className="font-display font-bold text-lg neon-text-pink">Riga Firecracker</h4>
        <p className="text-xs text-muted-foreground font-body mt-1">Vodka, tabasco & lime</p>
        <p className="text-neon-amber font-display font-bold mt-2">€4.50</p>
      </div>
    </motion.div>
  );
};

export default ShotOfTheDay;
