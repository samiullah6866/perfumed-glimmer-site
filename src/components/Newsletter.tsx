import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Luxura! Check your inbox.");
      setEmail("");
    }
  };

  return (
    <section className="section-padding">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Stay Connected</p>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Join the Luxura World</h2>
        <p className="text-muted-foreground mb-10">
          Be the first to discover new fragrances, exclusive events, and bespoke offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-secondary border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gold-gradient text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold hover-gold-glow"
          >
            Subscribe
          </motion.button>
        </form>
      </AnimatedSection>
    </section>
  );
};

export default Newsletter;
