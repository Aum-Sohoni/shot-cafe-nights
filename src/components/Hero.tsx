import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Clock, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Shot Cafe western saloon atmosphere" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full rustic-card mb-6 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-whiskey" />
            Old Town Riga, Latvia
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-cream"
        >
          Riga's Ultimate{" "}
          <span className="text-whiskey">Shot</span>{" "}
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8 font-body drop-shadow-lg"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
        >
          50+ signature shots, craft cocktails, and unforgettable nights in the heart of Old Town. 
          Where every round starts a new story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-display text-primary-foreground gradient-whiskey hover:opacity-90 transition-all warm-shadow"
          >
            View Menu
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-display rustic-card text-foreground hover:border-whiskey/50 transition-all"
          >
            <Clock className="w-4 h-4 mr-2" />
            Visit Us Tonight
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-float">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
