import { motion } from "framer-motion";
import { Scissors, Slice, Users, Sparkles, Baby, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Premium Cuts"
    },
    {
      icon: Slice,
      title: "Line Up"
    },
    {
      icon: Users,
      title: "Beard Grooming"
    },
    {
      icon: Baby,
      title: "Kids Cuts"
    },
    {
      icon: Sparkles,
      title: "Skin Fades"
    },
    {
      icon: Star,
      title: "Luxury Package"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-20 legacy-light text-legacy-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From classic cuts to modern styles, we offer a full range of premium grooming services 
            tailored to your unique style and personality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="text-legacy-dark mb-4"
                >
                  <IconComponent size={48} />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, rotateX: -30 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-4"
                >
                  {service.title}
                </motion.h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToContact}
            className="legacy-dark hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
            size="lg"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Book Your Service
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
