import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import collectionBanner from "@/assets/collection-banner.jpg";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";

const collections = [
  { name: "The Midnight Collection", description: "Deep, mysterious fragrances for the enigmatic soul.", image: perfume3, count: "6 Fragrances" },
  { name: "Garden of Eden", description: "Floral masterpieces inspired by nature's finest blooms.", image: perfume2, count: "5 Fragrances" },
  { name: "Royal Heritage", description: "Timeless classics with a contemporary twist.", image: perfume1, count: "4 Fragrances" },
  { name: "Pure Elements", description: "Clean, fresh scents that capture the essence of nature.", image: perfume4, count: "5 Fragrances" },
];

const Collections = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={collectionBanner} alt="Collections" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Curated</p>
        <h1 className="font-display text-5xl md:text-7xl">Collections</h1>
      </motion.div>
    </section>

    {/* Collections Grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((col, i) => (
          <AnimatedSection key={col.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden cursor-pointer hover-gold-glow"
            >
              <img src={col.image} alt={col.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2">{col.count}</p>
                <h3 className="font-display text-2xl md:text-3xl mb-2">{col.name}</h3>
                <p className="text-muted-foreground text-sm">{col.description}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Collections;
