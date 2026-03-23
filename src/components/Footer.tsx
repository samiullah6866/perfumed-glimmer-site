import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-display text-2xl tracking-[0.3em] text-gold-gradient mb-6">LUXURA</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Crafting extraordinary fragrances since 1920. Each scent tells a story of elegance and sophistication.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-6">Explore</h4>
          <div className="flex flex-col gap-3">
            {["Shop", "Collections", "About", "Contact"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-6">Customer Care</h4>
          <div className="flex flex-col gap-3">
            {["Shipping", "Returns", "FAQ", "Privacy Policy"].map((item) => (
              <span key={item} className="text-muted-foreground text-sm cursor-pointer hover:text-primary transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-6">Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="divider-gold mb-8" />
      <p className="text-center text-muted-foreground text-xs tracking-[0.15em]">
        © 2026 LUXURA. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
