import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImage from "@/assets/about-story.jpg";
import heroImage from "@/assets/hero-perfume.jpg";

const values = [
  { title: "Craftsmanship", desc: "Every fragrance is meticulously composed by our master perfumers using centuries-old techniques." },
  { title: "Rare Ingredients", desc: "We source the finest raw materials from exotic locations around the world." },
  { title: "Sustainability", desc: "Our commitment to ethical sourcing and eco-friendly packaging sets us apart." },
  { title: "Heritage", desc: "Over a century of perfumery excellence, passed down through generations." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={aboutImage} alt="About Luxura" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Est. 1920</p>
        <h1 className="font-display text-5xl md:text-7xl">Our Story</h1>
      </motion.div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="left">
          <img src={heroImage} alt="Luxura heritage" className="w-full object-cover" />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">The Beginning</p>
          <h2 className="font-display text-4xl mb-6">Where Art Meets <span className="italic text-gold-gradient">Fragrance</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in Paris in 1920, Luxura began as a small atelier dedicated to the art of perfumery. Our founder, Élise Beaumont, believed that fragrance could capture emotions, memories, and dreams in a single drop.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, that vision continues to inspire every creation. Our master perfumers blend tradition with innovation, using the rarest ingredients to compose fragrances that transcend time and trends.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">What Defines Us</p>
          <h2 className="font-display text-4xl md:text-5xl">Our Values</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-8 border border-border bg-card hover:border-primary/30 transition-colors duration-300"
              >
                <h3 className="font-display text-lg text-primary mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
