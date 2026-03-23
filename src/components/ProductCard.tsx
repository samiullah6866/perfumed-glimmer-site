import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface Props {
  name: string;
  price: string;
  image: string;
  category: string;
  delay?: number;
}

const ProductCard = ({ name, price, image, category, delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="group cursor-pointer"
  >
    <div className="relative overflow-hidden bg-secondary mb-4">
      <motion.img
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6 }}
        src={image}
        alt={name}
        className="w-full aspect-[3/4] object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-background/40 flex items-center justify-center"
      >
        <button className="bg-gold-gradient text-primary-foreground p-4 hover:scale-110 transition-transform">
          <ShoppingBag size={20} />
        </button>
      </motion.div>
    </div>
    <p className="text-primary text-xs tracking-[0.2em] uppercase mb-1">{category}</p>
    <h3 className="font-display text-lg text-foreground mb-1">{name}</h3>
    <p className="text-muted-foreground text-sm">{price}</p>
  </motion.div>
);

export default ProductCard;
