import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import useCountdown from '../hooks/useCountdown';

/**
 * The Countdown Timer section.
 */
const CountdownTimer = () => {
  const eventDate = "2025-11-07T09:00:00"; // 7th Nov 2025, 9:00 AM
  const { days, hours, minutes, seconds, completed } = useCountdown(eventDate);

  // Render the countdown logic directly
  const renderCountdown = () => {
    if (completed) {
      // Render a completed state
      return <SectionTitle>The Spark Has Been Unleashed!</SectionTitle>;
    } else {
      // Render the countdown
      const timeUnits = [
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ];
      
      return (
        <div className="flex justify-center gap-4 sm:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-white/5 border-2 border-purple-400/30 rounded-2xl shadow-lg backdrop-blur-md">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-4 text-lg sm:text-xl uppercase tracking-wider text-cyan-300">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <section id="countdown" className="py-24 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <SectionTitle>The Spark Ignites In</SectionTitle>
        {renderCountdown()}
      </div>
    </section>
  );
};

export default CountdownTimer;
