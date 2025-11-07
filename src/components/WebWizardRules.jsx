import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { createElement } from 'react';
import { Users, Target, Award, Clock, Code } from 'lucide-react';
import SectionTitle from './SectionTitle';

/**
 * The Web Wizard Rules section.
 */
const WebWizardRules = () => {
  const rules = [
    { icon: Users, text: "Team Size: 2-3 members." },
    { icon: Target, text: "Objective: Build a fully responsive website on the 'Technika 5.0' theme." },
    { icon: Award, text: "Judging Criteria: Functionality, Design, Responsiveness, & Performance." },
    { icon: Clock, text: "Time Limit: 5 Hours. Unleash your creativity under pressure." },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="rules" className="py-24 px-4 container mx-auto">
      <SectionTitle>Web Wizard Rules</SectionTitle>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white/5 border border-cyan-400/20 p-8 sm:p-12 rounded-2xl shadow-xl">
        {/* Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <Code size={150} className="text-cyan-400 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]" />
        </motion.div>
        
        {/* Rules List */}
        <div ref={ref}>
          <ul className="space-y-6">
            {rules.map((rule, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 mt-1">
                  {createElement(rule.icon, { size: 20 })}
                </span>
                <span className="text-lg text-gray-300">{rule.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WebWizardRules;
