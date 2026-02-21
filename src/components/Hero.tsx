import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Clock, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Shot Cafe nightlife atmosphere" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-neon-pink" />
            Old Town Riga, Latvia
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Riga's Ultimate{" "}
          <span className="neon-text-pink animate-neon-flicker">Shot</span>{" "}
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body"
        >
          50+ signature shots, craft cocktails, and unforgettable nights in the heart of Old Town. 
          Where every round starts a new story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-display font-semibold text-primary-foreground gradient-neon hover:opacity-90 transition-all neon-glow-pink"
          >
            View Menu
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-display font-semibold glass-card text-foreground hover:border-neon-pink/50 transition-all"
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
