import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './components/Scene3D';
import CountdownTimer from './components/CountdownTimer';
import ImageCarousel from './components/ImageCarousel';
import SpecialMessage from './components/SpecialMessage';
import MusicPlayer from './components/MusicPlayer';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <Scene3D />
      
      <div className="relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-8"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            Happy Birthday, My Love!
          </h1>
          <p className="text-xl text-pink-800 mb-8">
            Counting down to your special day...
          </p>
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="py-8"
        >
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
            Our Beautiful Memories
          </h2>
          <ImageCarousel />
        </motion.div>

        <SpecialMessage />
        
        <PhotoGallery />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center py-8"
        >
          <p className="text-xl text-pink-800 max-w-2xl mx-auto px-4">
            Every moment with you is a treasure. I'm so grateful to have you in my life.
            Here's to celebrating you and all the joy you bring to my world!
          </p>
        </motion.div>
      </div>

      <MusicPlayer />
    </div>
  );
}

export default App; 