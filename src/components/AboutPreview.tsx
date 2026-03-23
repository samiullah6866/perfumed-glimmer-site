import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import aboutImage from "@/assets/about-story.jpg";

const AboutPreview = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <AnimatedSection direction="left">
        <div className="relative">
          <img src={aboutImage} alt="Our craftsmanship" className="w-full object-cover" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/30" />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Our Heritage</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
          A Century of <span className="italic text-gold-gradient">Excellence</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Since 1920, Luxura has been at the forefront of fine perfumery. Our master perfumers travel the globe, sourcing the rarest ingredients to compose fragrances that transcend time.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Each creation is a symphony of notes — a harmonious blend of tradition and innovation that speaks to the soul.
        </p>
        <Link
          to="/about"
          className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Discover More
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutPreview;
