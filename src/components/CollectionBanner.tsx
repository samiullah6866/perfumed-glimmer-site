import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerImage from "@/assets/collection-banner.jpg";

const CollectionBanner = () => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <motion.img
      whileInView={{ scale: 1 }}
      initial={{ scale: 1.1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      src={bannerImage}
      alt="Collection"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-background/60" />
    <div className="relative z-10 text-center px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-primary text-xs tracking-[0.4em] uppercase mb-4"
      >
        New Arrival
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-display text-4xl md:text-6xl mb-6"
      >
        The <span className="italic text-gold-gradient">Midnight</span> Collection
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/collections"
          className="bg-gold-gradient text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold hover-gold-glow hover:scale-105 transition-all duration-300 inline-block"
        >
          View Collection
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CollectionBanner;
