import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";

const allProducts = [
  { name: "Amber Oud Royale", price: "$285", image: perfume1, category: "Oriental" },
  { name: "Rose Gold Elixir", price: "$220", image: perfume2, category: "Floral" },
  { name: "Dark Noir Intense", price: "$310", image: perfume3, category: "Woody" },
  { name: "White Pétale", price: "$195", image: perfume4, category: "Fresh" },
  { name: "Velvet Amber", price: "$250", image: perfume1, category: "Oriental" },
  { name: "Midnight Rose", price: "$275", image: perfume2, category: "Floral" },
  { name: "Oud Mystique", price: "$340", image: perfume3, category: "Woody" },
  { name: "Ocean Breeze", price: "$180", image: perfume4, category: "Fresh" },
];

const categories = ["All", "Oriental", "Floral", "Woody", "Fresh"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allProducts : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Our Collection</p>
            <h1 className="font-display text-5xl md:text-6xl mb-6">The Shop</h1>
            <div className="divider-gold" />
          </AnimatedSection>

          <div className="flex justify-center gap-6 mb-16 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-[0.2em] uppercase px-6 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((p, i) => (
              <ProductCard key={p.name} {...p} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
