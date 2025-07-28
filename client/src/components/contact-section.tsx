import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const businessInfo = {
    name: "LEGACY BARBERS BARBERSHOP 💈",
    address: "401 W Donegan Ave b, Kissimmee, FL 34741, United States",
    phone: "+1 (407) 866-7586",
    googleMapsUrl: "https://www.google.com/maps/place/LEGACY+BARBERS+BARBERSHOP+💈",
    hours: [
      { day: "Monday", time: "9 a.m. – 5 p.m." },
      { day: "Tuesday - Saturday", time: "9 a.m. – 6 p.m." },
      { day: "Sunday", time: "9 a.m. – 5 p.m." }
    ]
  };

  return (
    <section id="contact" className="py-20 legacy-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit us at our modern barbershop in the heart of Kissimmee. We're here to serve you with premium grooming services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="legacy-black rounded-2xl p-8 shadow-xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 text-center"
              >
                Visit Our Shop
              </motion.h3>
              
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start mb-6"
              >
                <div className="text-gray-400 text-2xl mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-gray-300">{businessInfo.address}</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start mb-6"
              >
                <div className="text-gray-400 text-2xl mr-4 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start mb-8"
              >
                <div className="text-gray-400 text-2xl mr-4 mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    {businessInfo.hours.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex justify-between"
                      >
                        <span>{schedule.day}:</span>
                        <span>{schedule.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <Button
                  asChild
                  className="w-full legacy-dark hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <a 
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    View on Google Maps
                  </a>
                </Button>
                
                <Button
                  className="w-full legacy-medium hover:bg-gray-400 text-legacy-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Book Appointment
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center text-gray-600">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">401 W Donegan Ave b, Kissimmee, FL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
