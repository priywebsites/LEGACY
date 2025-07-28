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
      {/* Dynamic gradient background with blue/red accents */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0a0a2a 50%, #2a0a0a 75%, #000000 100%)",
            "linear-gradient(225deg, #1a1a1a 0%, #000000 25%, #2a0a0a 50%, #0a0a2a 75%, #1a1a1a 100%)",
            "linear-gradient(45deg, #000000 0%, #0a0a2a 25%, #1a1a1a 50%, #2a0a0a 75%, #000000 100%)",
            "linear-gradient(315deg, #2a0a0a 0%, #1a1a1a 25%, #000000 50%, #0a0a2a 75%, #2a0a0a 100%)"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      
      {/* Floating geometric shapes with subtle colors */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-24 h-24 rounded-lg ${
              i % 3 === 0 ? 'border border-blue-500/20 bg-blue-500/5' :
              i % 3 === 1 ? 'border border-red-500/20 bg-red-500/5' :
              'border border-white/20 bg-white/5'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + i * 11}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.1, 0.4, 0.1],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Particle effect */}
      <motion.div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
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
            className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
