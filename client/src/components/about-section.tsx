import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const sectionRef = useScrollAnimation();

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "★★★★★", label: "5-Star Reviews" }
  ];

  return (
    <section id="about" className="py-20 bg-white text-legacy-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.0, type: "spring", stiffness: 80, damping: 12 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Our <motion.span 
                initial={{ opacity: 0, rotateZ: -10 }}
                whileInView={{ opacity: 1, rotateZ: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="gradient-text"
              >
                Legacy
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                At Legacy Barbers, we believe every cut tells a story. Founded on the principles of craftsmanship, 
                community, and excellence, we've been creating timeless styles that honor tradition while embracing 
                modern techniques.
              </motion.span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our master barbers bring decades of experience, combining classic barbering skills with contemporary 
                styling to deliver an unparalleled grooming experience in the heart of Kissimmee.
              </motion.span>
            </motion.p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.2, 
                    type: "spring", 
                    stiffness: 120,
                    damping: 10
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center cursor-pointer"
                >
                  <motion.div 
                    className="text-3xl font-bold mb-2 text-legacy-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.0 + index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="transition-transform duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional barber cutting hair"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
