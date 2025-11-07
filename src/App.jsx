import React, { useState, useEffect } from 'react';

// Import all components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
// import Events from './components/Events';
import Card from './components/cardcom';
import WebWizardRules from './components/WebWizardRules';
// import CountdownTimer from './components/CountdownTimer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox'; 

/**
 * The main App component that ties everything together.
 */
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Apply smooth scroll to the root element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-[#0a0a1a] text-gray-100 font-sans relative overflow-x-hidden">
      {/* Navigation is sticky */}
      <NavBar />
      
      {/* Main content is relative to stack on top of particles */}
      <main className="relative z-10">
        <Hero />
        <About />
        <section id="events">
          <Card />
        </section>
        {/* <Events /> */}
        <WebWizardRules />
        {/* <CountdownTimer /> */}
        <section id="gallery">
          <Gallery setSelectedImage={setSelectedImage} />
        </section>
        <Contact />
      </main>
      
      <Footer />

      {/* Lightbox Modal */}
      <Lightbox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
}