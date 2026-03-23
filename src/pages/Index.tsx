import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutPreview from "@/components/AboutPreview";
import CollectionBanner from "@/components/CollectionBanner";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturedProducts />
    <AboutPreview />
    <CollectionBanner />
    <Testimonials />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
