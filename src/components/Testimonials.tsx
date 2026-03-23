import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Isabella Moretti", text: "Luxura's Amber Oud Royale is unlike anything I've ever experienced. The fragrance evolves beautifully throughout the day.", role: "Fashion Editor" },
  { name: "Alexander Chen", text: "Dark Noir Intense has become my signature scent. The depth and complexity are truly remarkable — I receive compliments everywhere.", role: "Entrepreneur" },
  { name: "Sofia Laurent", text: "The Rose Gold Elixir captures the essence of femininity perfectly. Sophisticated, warm, and utterly captivating.", role: "Art Director" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl">What Our Clients Say</h2>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <p className="text-primary text-sm tracking-[0.2em] uppercase">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-xs mt-1">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
