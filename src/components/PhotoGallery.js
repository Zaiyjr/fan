import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PhotoGallery() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const photos = [
    {
      id: 1,
      src: '/images/img7.jpg',
      category: 'favorite',
     
    },
    {
      id: 2,
      src: '/images/img10.png',
      category: 'travel',
      
    },
    {
      id: 3,
      src: '/images/img12.png',
      category: 'together',
     
    },
    {
      id: 4,
      src: '/images/img6.jpg',
      category: 'together',
     
    },
    {
      id: 5,
      src: '/images/img9.jpg',
     
    },
    {
      id: 6,
      src: '/images/img11.png',
      category: 'together',
     
    },
    // Add more photos as needed
  ];

  const filteredPhotos = selectedFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Cartoon Photo</h2>
        <div className="flex justify-center space-x-4">
          
        </div>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredPhotos.map(photo => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PhotoGallery; 