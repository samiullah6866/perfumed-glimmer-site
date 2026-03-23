import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "12 Rue de la Paix, Paris 75002" },
  { icon: Phone, label: "Call Us", value: "+33 1 42 61 00 00" },
  { icon: Mail, label: "Email Us", value: "contact@luxura.com" },
  { icon: Clock, label: "Hours", value: "Mon - Sat: 10am - 8pm" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl mb-6">Contact Us</h1>
            <div className="divider-gold" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <AnimatedSection direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="p-6 border border-border bg-card">
                    <item.icon size={20} className="text-primary mb-3" />
                    <h3 className="font-display text-foreground mb-1">{item.label}</h3>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-secondary border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gold-gradient text-primary-foreground py-4 text-sm tracking-[0.2em] uppercase font-bold hover-gold-glow"
                >
                  Send Message
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
