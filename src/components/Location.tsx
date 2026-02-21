import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Location = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-rust font-body font-semibold">{t("location.tag")}</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 text-cream">
            {t("location.title1")} <span className="text-whiskey">{t("location.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-lg overflow-hidden aspect-[4/3]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.8!2d24.1064!3d56.9496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDU2JzU4LjYiTiAyNMKwMDYnMjMuMCJF!5e0!3m2!1sen!2slv!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) sepia(20%)" }}
              allowFullScreen
              loading="lazy"
              title="Shot Cafe location map"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-whiskey flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base mb-1 text-cream">{t("location.address")}</h3>
                <p className="text-muted-foreground font-body">Old Town, Riga, Latvia<br />Kaļķu iela 20, Centra rajons, Rīga, LV-1050</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-whiskey flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base mb-1 text-cream">{t("location.hours")}</h3>
                <div className="text-muted-foreground font-body text-sm space-y-1">
                  <p>{t("location.monThu")}</p>
                  <p>{t("location.friSat")}</p>
                  <p>{t("location.sun")}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-whiskey flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base mb-1 text-cream">{t("location.contact")}</h3>
                <p className="text-muted-foreground font-body text-sm">+371 2X XXX XXX</p>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-muted-foreground hover:text-whiskey transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-whiskey transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
