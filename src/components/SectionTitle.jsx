import React from 'react';
import { motion } from 'framer-motion';

/**
 * A reusable component for section titles with a consistent futuristic style.
 */
const SectionTitle = ({ children }) => (
  <motion.h2 
    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);

export default SectionTitle;
