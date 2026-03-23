import AnimatedSection from "./AnimatedSection";
import ProductCard from "./ProductCard";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";

const products = [
  { name: "Amber Oud Royale", price: "$285", image: perfume1, category: "Oriental" },
  { name: "Rose Gold Elixir", price: "$220", image: perfume2, category: "Floral" },
  { name: "Dark Noir Intense", price: "$310", image: perfume3, category: "Woody" },
  { name: "White Pétale", price: "$195", image: perfume4, category: "Fresh" },
];

const FeaturedProducts = () => (
  <section className="section-padding bg-dark-gradient">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Signature Collection</p>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Featured Fragrances</h2>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <ProductCard key={p.name} {...p} delay={i * 0.15} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
