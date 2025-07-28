import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

// Import work images
import work1 from "@/assets/work1.png";
import work2 from "@/assets/work2.png"; 
import work3 from "@/assets/work3.png";
import work4 from "@/assets/work4.png";

export default function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const workImages = [
    { src: work1, alt: "Premium waves and line up" },
    { src: work2, alt: "Classic fade with precision" },
    { src: work3, alt: "Perfect skin fade technique" },
    { src: work4, alt: "Clean line up and styling" }
  ];

  return (
    <section id="work" className="py-20 legacy-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the artistry and precision that goes into every cut. These are real results from our satisfied clients.
          </p>
        </motion.div>

        <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateZ: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateZ: index % 2 === 0 ? 2 : -2,
                y: -10,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer w-full max-w-sm relative"
              style={{
                zIndex: workImages.length - index,
                marginTop: index > 0 ? '-20px' : '0'
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:brightness-110"
                whileHover={{
                  filter: "brightness(1.2) contrast(1.1) saturate(1.1)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-legacy-red transition-colors z-10"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
