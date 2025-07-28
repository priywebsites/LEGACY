import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-legacy-black via-gray-900 to-legacy-gray"
        animate={{
          background: [
            "linear-gradient(45deg, #000000, #1a1a1a, #333333)",
            "linear-gradient(90deg, #1a1a1a, #000000, #2a2a2a)",
            "linear-gradient(135deg, #333333, #1a1a1a, #000000)",
            "linear-gradient(45deg, #000000, #1a1a1a, #333333)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/20 rounded-lg"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="gradient-text block"
          >
            LEGACY
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-white block"
          >
            BARBERS
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Premium cuts.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Timeless style.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Modern experience.
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="space-x-4"
        >
          <Button
            onClick={scrollToContact}
            className="legacy-dark hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Book Appointment
            </motion.span>
          </Button>
          
          <Button
            onClick={scrollToServices}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-legacy-black font-semibold py-4 px-8 rounded-full transition-all duration-300 bg-transparent"
            size="lg"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Our Services
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
