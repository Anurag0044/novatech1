import React, { useState, useEffect, createElement } from 'react';
import { 
  Menu, 
  Home,
  Info,
  Sparkles,
  BookOpen,
  Image,
  Mail,
  X
} from 'lucide-react';

// --- Content for NavBar ---
const navContent = {
  nav: [
    { link: '#home', icon: Home, label: "Home" },
    { link: '#about', icon: Info, label: "About" },
    { link: '#events', icon: Sparkles, label: "Events" },
    { link: '#rules', icon: BookOpen, label: "Rules" },
    { link: '#gallery', icon: Image, label: "Gallery" },
    { link: '#contact', icon: Mail, label: "Contact" },
  ],
};

/**
 * The main navigation component with full desktop menu bar and mobile bottom bar.
 */
const NavBar = () => {
  const { nav } = navContent;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = nav.map(item => document.querySelector(item.link));
      const scrollPosition = window.scrollY + 200; // Add 200px offset

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActive(i);
          break;
        }
      }

      // Track scroll for navbar styling
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nav]);

  return (
    <>
      {/* Desktop Menu Bar - Full Width Top Navigation */}
      <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-[999] items-center justify-between px-6 lg:px-12 py-4 bg-black/70 backdrop-blur-xl border-b border-cyan-400/20 transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-cyan-500/10' : ''
      }`}>
        {/* Logo/Brand Section */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            TECHNIKA
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-1 lg:gap-2">
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setActive(i)}
              className={`relative px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 group ${
                i === active
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
              aria-label={item.label}
            >
              {/* Active indicator */}
              {i === active && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
              )}
              
              {/* Hover effect background */}
              <span className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                {createElement(item.icon, { size: 18 })}
                <span>{item.label}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Right side actions (optional - can add login, register, etc.) */}
        <div className="flex items-center gap-4">
          {/* Placeholder for future actions */}
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden fixed top-6 left-6 z-[999] rounded-lg bg-black/50 backdrop-blur-md border border-cyan-400/20 text-cyan-400 p-2 shadow-lg hover:text-white transition-colors cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle navigation"
      >
        {showMenu ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav
        className={`md:hidden fixed z-[999] flex items-center gap-4 sm:gap-5 bg-black/50 backdrop-blur-lg border border-cyan-400/20 px-4 sm:px-6 py-3 rounded-full text-gray-300 duration-500 transition-all ease-out ${
          showMenu ? "bottom-6 sm:bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              i === active
                ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/50"
                : "hover:text-cyan-400"
            }`}
            aria-label={item.label}
          >
            {createElement(item.icon, { size: 22 })}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
