import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { text: "Best shot bar in Riga! The bartenders are so fun, we ended up staying until 4am.", author: "Sarah K.", from: "London, UK" },
  { text: "50+ shots is no joke. We tried 12 in one night. The Riga Firecracker is LEGENDARY.", author: "Marco T.", from: "Berlin, DE" },
  { text: "Perfect spot for a bachelor party. Free shots for the groom and the DJ was amazing!", author: "Jānis L.", from: "Riga, LV" },
  { text: "Cozy vibe with neon lights, great music. Best Old Town bar we found on our trip.", author: "Emma R.", from: "Stockholm, SE" },
];

const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-neon-amber font-display">Reviews</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            What They <span className="neon-text-pink">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-neon-amber text-neon-amber" />
                ))}
              </div>
              <p className="text-foreground font-body mb-4 leading-relaxed">"{r.text}"</p>
              <div className="text-sm">
                <span className="font-display font-semibold text-foreground">{r.author}</span>
                <span className="text-muted-foreground"> · {r.from}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
