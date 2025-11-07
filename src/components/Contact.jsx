import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import SectionTitle from './SectionTitle';

/**
 * The Contact & Map section.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-black/20 backdrop-blur-sm relative overflow-hidden">
      <SectionTitle>Contact & Venue</SectionTitle>
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 border border-purple-400/20 p-8 rounded-xl h-full">
            <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white">Venue</h4>
                  <p className="text-gray-300">ARKA JAIN University</p>
                  <p className="text-gray-400">Opp. to Kerala Public School, Mohanpur, Gamharia, Jamshedpur, Jharkhand 832108</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white">Email</h4>
                  <a href="mailto:technika@arka.ac.in" className="text-gray-300 hover:text-cyan-400 transition-colors">technika@arka.ac.in</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-cyan-400/20">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-6">
                <motion.a href="#" whileHover={{ scale: 1.2, rotate: -10 }} className="text-gray-400 hover:text-purple-500 transition-colors" aria-label="Instagram">
                  <Instagram size={32} />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-cyan-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={32} />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }} className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                  <Facebook size={32} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          className="w-full h-96 md:h-auto md:min-h-[400px] rounded-xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.6993477209485!2d86.09991397481909!3d22.843378422992608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5f1b496777f%3A0x1d506033b3ed835d!2sARKA%20JAIN%20University!5e1!3m2!1sen!2sin!4v1761490912469!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARKA JAIN University Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
