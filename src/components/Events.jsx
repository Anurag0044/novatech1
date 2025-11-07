import React, { createElement, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Target, Award, ArrowRight, ChevronDown, ChevronUp, X, Calendar, Users, Trophy, Clock, MapPin } from 'lucide-react';
import StarBorder from './StarBorder';
import SectionTitle from './SectionTitle';
import eventsData from '../data/eventsData.json';

/**
 * The Events Showcase section.
 */
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  // Map icons for each event
  const iconMap = {
    "Web Wizard": Code,
    "CodeVenture": Target,
    "RoboWars": Award,
    "UI/UX Sprint": Code,
    "Hack the Stack": Target,
    "TechTalks": Award
  };

  return (
    <section id="events" className="py-24 px-4 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <SectionTitle>Events Showcase</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.events.slice(0, showAll ? eventsData.events.length : 3).map((event, index) => (
            <StarBorder key={event.title} color="#0facb8ff" thickness={2} className="rounded-xl" as="div">
              <motion.div
                className="group relative bg-white/5 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-[#17474a] rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <img src={event.img} alt={event.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="p-6">
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#17474a]/10 text-[#17474a]">
                    {createElement(iconMap[event.title] || Code, { size: 24 })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-6">{event.shortDesc}</p>
                  <StarBorder
                    as="button"
                    onClick={() => setSelectedEvent(event)}
                    className="font-semibold text-cyan-400 flex items-center gap-2 group-hover:text-cyan-300 transition-colors px-4 py-2 cursor-pointer"
                    color="#d2c1f3ff"
                    speed="3s"
                  >
                    Learn More <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </StarBorder>
                </div>
              </motion.div>
            </StarBorder>
          ))}
        </div>

        {/* Show more / Show less control */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-white/5 border border-[#17474a]/40 text-[#e6f7f7] hover:bg-white/7 transition-all"
          >
            <span className="font-medium">{showAll ? 'Show less' : 'Show more'}</span>
            <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#0a0a1a] border border-cyan-400/30 rounded-xl shadow-2xl z-50"
            >
              <div className="relative p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-cyan-400/10 text-cyan-400 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Event Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    {createElement(iconMap[selectedEvent.title] || Code, { size: 32 })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                    <p className="text-cyan-400 font-medium">{selectedEvent.category}</p>
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-gray-300 text-lg mb-6">{selectedEvent.shortDesc}</p>

                {/* Info Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                    <Clock className="text-cyan-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-medium">{selectedEvent.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                    <Users className="text-cyan-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Team Size</p>
                      <p className="text-white font-medium">{selectedEvent.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                    <Calendar className="text-cyan-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Schedule</p>
                      <p className="text-white font-medium">{selectedEvent.schedule.day}</p>
                      <p className="text-gray-400 text-sm">{selectedEvent.schedule.startTime} - {selectedEvent.schedule.endTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                    <MapPin className="text-cyan-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Venue</p>
                      <p className="text-white font-medium">{selectedEvent.venue}</p>
                    </div>
                  </div>
                </div>

                {/* Prizes */}
                <div className="mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
                    <Trophy className="text-yellow-400" size={24} />
                    Prizes
                  </h3>
                  <ul className="space-y-2">
                    {selectedEvent.prizes.map((prize, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{prize}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rules */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Rules</h3>
                  <ul className="space-y-2">
                    {selectedEvent.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Judging Criteria */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Judging Criteria</h3>
                  <ul className="space-y-2">
                    {selectedEvent.judgingCriteria.map((criteria, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Required */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href="https://example.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors text-center"
                  >
                    Register Now
                  </a>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
