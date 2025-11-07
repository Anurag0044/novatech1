import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ThemeEvolution from './ThemeEvolution';

/**
 * The About Technika section.
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timelineItems = [
    { version: "1.0", theme: "The Genesis" },
    { version: "2.0", theme: "Digital Frontiers" },
    { version: "3.0", theme: "Innovate & Evolve" },
    { version: "4.0", theme: "Quantum Leap" },
    { version: "5.0", theme: "NOVA" },
  ];

  return (
    <section id="about" className="py-24 px-4 container mx-auto">
      <SectionTitle>About Technika</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Theme Evolution Animation Component */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <ThemeEvolution />
        </motion.div>

        {/* Theme Evolution Timeline */}
        <div ref={ref} className="lg:col-span-1">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center md:text-left">Theme Evolution</h3>
          <div className="relative pl-8 border-l-2 border-cyan-400/50">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.version}
                className="mb-8 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[42px] top-1 w-6 h-6 rounded-full ${item.version === "5.0" ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-700 border-4 border-gray-900'}`} />
                <span className="text-sm uppercase tracking-wider text-cyan-400">{`Technika ${item.version}`}</span>
                <h4 className="text-xl font-semibold text-white mt-1">{item.theme}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
