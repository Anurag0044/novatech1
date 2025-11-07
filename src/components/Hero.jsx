import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import LandingParticles from './LandingParticles';
import NeuralNetworkBackground from './NeuralNetworkBackground';

/**
 * The main Hero section.
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 100 }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0a0a1a]/80 to-[#0a0a1a]" />
      
      {/* Enhanced Landing Particles Background */}
      <LandingParticles />
      
      {/* Interactive Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-600 filter drop-shadow-[0_0_15px_rgba(100,200,255,0.5)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            TECHNIKA 5.0
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-xl sm:text-2xl lg:text-3xl font-light text-cyan-100 filter drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          variants={itemVariants}
        >
          NOVA – Unleash The Spark of Tomorrow
        </motion.p>
        
        <motion.div 
          className="mt-6 flex items-center justify-center gap-2 p-2 bg-white/10 border border-cyan-400/30 rounded-full"
          variants={itemVariants}
        >
          <Calendar className="text-cyan-300" size={20} />
          <span className="text-lg sm:text-xl font-medium text-white">
            7th & 8th November 2025
          </span>
        </motion.div>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC8meflhygcBAN8wWaCC2maUMdgCINHfjQIQ2pYU8Uv_6Uiw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cyan-500 text-black font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-400/40 transform hover:-translate-y-1"
          >
            Register Now
          </a>
          <a
            href="#events"
            className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-1"
          >
            Event Schedule
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
