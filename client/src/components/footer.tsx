import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logoImage from "@/assets/79150240349_1753730345989.png";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="legacy-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-4"
          >
            <motion.img
              src={logoImage}
              alt="Legacy Barbers Logo"
              className="h-16 w-auto mr-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              initial={{ opacity: 0, rotateZ: -5 }}
              whileInView={{ opacity: 1, rotateZ: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateZ: 1,
                transition: { duration: 0.3 }
              }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              LEGACY BARBERS BARBERSHOP 💈
            </motion.h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-6"
          >
            Premium cuts. Timeless style. Modern experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2,
                    color: "var(--legacy-medium)",
                    transition: { duration: 0.2 }
                  }}
                  className="text-gray-400 hover:text-gray-300 transition-colors text-2xl"
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © 2024 Legacy Barbers Barbershop. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
