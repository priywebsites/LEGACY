import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Michael Rodriguez",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      review: "Best barbershop in Kissimmee! The attention to detail is incredible and the atmosphere is top-notch. I always leave feeling like a million bucks.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Business Professional",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      review: "Professional service, clean environment, and skilled barbers. My go-to place for the past 3 years. Highly recommend to anyone looking for quality.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Local Resident",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      review: "Amazing experience every time! The barbers really listen to what you want and deliver exceptional results. The modern shop has such a great vibe.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white text-legacy-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their Legacy Barbers experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className="legacy-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="flex text-gray-700 text-xl mb-4"
              >
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star fill="currentColor" size={20} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-6 italic"
              >
                "{review.review}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <img
                  src={review.avatar}
                  alt={`${review.name} profile`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.role}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            className="legacy-dark hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
            size="lg"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View All Reviews
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
