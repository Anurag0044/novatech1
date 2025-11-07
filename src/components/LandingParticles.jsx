import React from 'react';
import { motion } from 'framer-motion';

/**
 * Enhanced Landing Particles Background Component
 * Creates an animated starfield with twinkling particles
 */
const LandingParticles = () => {
  const particles = Array.from({ length: 200 }); // Increased particle count for richer effect

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/80 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 0.5}px`, // Varying particle sizes
            height: `${Math.random() * 3 + 0.5}px`,
          }}
          animate={{
            opacity: [0, 1, 0.3, 0], // Enhanced twinkling effect
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 60 - 30], // Increased drift range
            y: [0, Math.random() * 60 - 30],
            rotate: [0, 360], // Added rotation for more dynamic effect
          }}
          transition={{
            duration: Math.random() * 15 + 8, // Longer, more varied durations
            repeat: Infinity,
            delay: Math.random() * 8, // Random start times
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Additional floating elements for depth */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.8, 1],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Shooting stars effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute bg-gradient-to-r from-cyan-300 to-transparent h-0.5 w-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 300],
            y: [0, 100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default LandingParticles;
