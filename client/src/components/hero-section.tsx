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
      {/* Dynamic glassy gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 25%, #1a2a3a 50%, #3a1a2a 75%, #2a2a2a 100%)",
            "linear-gradient(225deg, #2a2a2a 0%, #1a1a1a 25%, #3a1a2a 50%, #1a2a3a 75%, #2a2a2a 100%)",
            "linear-gradient(45deg, #1a1a1a 0%, #1a2a3a 25%, #2a2a2a 50%, #3a1a2a 75%, #1a1a1a 100%)",
            "linear-gradient(315deg, #3a1a2a 0%, #2a2a2a 25%, #1a1a1a 50%, #1a2a3a 75%, #3a1a2a 100%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Glass overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-gray-900/30 to-black/40 backdrop-blur-sm" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced floating geometric shapes with more animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-lg ${
              i % 4 === 0 ? 'w-16 h-16 border border-blue-500/20 bg-blue-500/5' :
              i % 4 === 1 ? 'w-20 h-20 border border-red-500/20 bg-red-500/5' :
              i % 4 === 2 ? 'w-12 h-32 border border-white/20 bg-white/5' :
              'w-28 h-28 border border-gray-500/20 bg-gray-500/5 rounded-full'
            }`}
            style={{
              left: `${5 + i * 8}%`,
              top: `${3 + i * 7}%`,
            }}
            animate={{
              rotate: [0, 360, -180, 360],
              scale: [0.5, 1.5, 0.8, 1.2, 0.5],
              opacity: [0.1, 0.6, 0.2, 0.4, 0.1],
              x: [0, 50, -30, 20, 0],
              y: [0, -40, 30, -10, 0],
              rotateX: [0, 180, 0],
              rotateY: [0, 360, 0]
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Enhanced particle effect with pulsing */}
      <motion.div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-blue-400/40' :
              i % 3 === 1 ? 'w-1 h-1 bg-red-400/40' :
              'w-1.5 h-1.5 bg-white/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0.5, 1, 0],
              scale: [0, 1.5, 0.8, 2, 0],
              y: [0, -150, -50, -200, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360, 180, 720, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Floating orbs */}
      <motion.div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, -10, 15, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
              opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
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
            className="bg-white text-black hover:bg-gray-200 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
          >
            <motion.span 
              whileHover={{ scale: 1.05, rotateX: 5 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
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
