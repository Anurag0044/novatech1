import React from 'react';

/**
 * The main site footer.
 */
const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-cyan-400/10">
      <div className="container mx-auto px-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} School of Engineering & IT, ARKA JAIN University.</p>
        <p className="text-gray-500 text-sm mt-1">Designed with the spark of NOVA.</p>
        <p>created by anurag</p>
      </div>
    </footer>
  );
};

export default Footer;
