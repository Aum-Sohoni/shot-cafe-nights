import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Calendar, Users, Music } from "lucide-react";

const events = [
  {
    icon: Music,
    title: "DJ Fridays",
    desc: "Every Friday — resident DJs spinning house, R&B, and party classics all night long.",
    tag: "Weekly",
  },
  {
    icon: PartyPopper,
    title: "Birthday & Bachelor Parties",
    desc: "Free welcome shots for the guest of honor! Book a table for your group celebration.",
    tag: "Book Now",
  },
  {
    icon: Calendar,
    title: "Themed Shot Nights",
    desc: "Taco Tuesday shots, Throwback Thursday specials, and Saturday Neon Parties.",
    tag: "Special",
  },
  {
    icon: Users,
    title: "Group Packages",
    desc: "Arriving with 10+ friends? Ask about our group shot towers and VIP table deals.",
    tag: "Groups",
  },
];

const Events = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 px-4 relative" ref={ref}>
      {/* Subtle neon bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-neon-amber font-display">Party</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Events & <span className="neon-text-gold">Celebrations</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="glass-card rounded-xl p-8 group hover:border-neon-gold/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <e.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold">{e.title}</h3>
                    <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full bg-neon-amber/10 text-neon-amber font-display">
                      {e.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm font-body">{e.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
