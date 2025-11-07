import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Lightbox Modal for Gallery images
 */
const Lightbox = ({ selectedImage, setSelectedImage }) => {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)} // Click background to close
        >
          <motion.img
            layoutId={selectedImage}
            src={selectedImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            aria-label="Close image gallery"
          >
            <X size={32} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
