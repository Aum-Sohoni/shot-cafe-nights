import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Music, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    { icon: Sparkles, title: t("about.feat1.title"), desc: t("about.feat1.desc") },
    { icon: Users, title: t("about.feat2.title"), desc: t("about.feat2.desc") },
    { icon: Music, title: t("about.feat3.title"), desc: t("about.feat3.desc") },
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
          <span className="text-sm uppercase tracking-widest text-rust font-body font-semibold">{t("about.tag")}</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 mb-6 text-cream">
            {t("about.title1")} <span className="text-whiskey">{t("about.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body leading-relaxed">
            {t("about.desc")}
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
