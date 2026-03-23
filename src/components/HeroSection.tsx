import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

const HeroSection = () => (
  <section className="relative w-full min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 w-full h-full">
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src={heroImage}
        alt="Luxury perfume"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
    </div>

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-primary tracking-[0.4em] text-xs md:text-sm uppercase mb-6"
      >
        The Art of Fragrance
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-8"
      >
        Discover
        <br />
        <span className="text-gold-gradient italic">Your Essence</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-muted-foreground max-w-lg text-lg md:text-xl leading-relaxed mb-10"
      >
        Exquisite fragrances crafted from the world's finest ingredients, designed to leave an unforgettable impression.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-wrap gap-4 md:gap-6"
      >
        <Link
          to="/shop"
          className="bg-gold-gradient text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-body font-bold hover-gold-glow transition-all duration-300 hover:scale-105 flex items-center gap-3"
        >
          Explore Collection
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/about"
          className="border border-border px-8 py-4 text-sm tracking-[0.2em] uppercase font-body text-foreground hover:border-primary hover:text-primary transition-all duration-300"
        >
          Our Story
        </Link>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-px h-8 bg-primary/50"
      />
    </motion.div>
  </section>
);

export default HeroSection;
