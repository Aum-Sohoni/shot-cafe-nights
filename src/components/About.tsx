import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Music, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Sparkles, title: "50+ Shots", desc: "Signature, classic, and cocktail shots crafted to perfection" },
    { icon: Users, title: "Party Vibes", desc: "Friendly bartenders and the best crowd in Old Town" },
    { icon: Music, title: "Live Music", desc: "Country jams and live sets every weekend to keep the energy high" },
  ];

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-rust font-body font-semibold">Est. Riga</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 mb-6 text-cream">
            Where Every Night Is <span className="text-whiskey">Legendary</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body leading-relaxed">
            Tucked away in the cobblestone streets of Riga's Old Town, Shot Cafe has been the go-to 
            destination for travelers, students, and locals craving unforgettable nights since day one. 
            No pretense — just great drinks, great music, and even greater memories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="rustic-card p-8 text-center group hover:border-whiskey/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg gradient-whiskey flex items-center justify-center mx-auto mb-5 group-hover:warm-shadow transition-all">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg mb-2 text-cream">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
