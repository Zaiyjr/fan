import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  const playlist = [
    {
      title: "JUST FOR YOU",
      src: "/music/song1.mp3"
    },
    {
      title: "DAY ONE",
      src: "/music/song2.mp3"
    },
    {
      title: "WISH",
      src: "/music/song3.mp3"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentSong].src;
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Error playing audio:", error);
            setError("Error playing audio. Please try again.");
            setIsPlaying(false);
          });
        }
      }
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Error playing audio:", error);
          setError("Error playing audio. Please try again.");
          setIsPlaying(false);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const playPrevious = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <audio
        ref={audioRef}
        src={playlist[currentSong].src}
        loop={false}
        onEnded={playNext}
        onError={(e) => {
          console.error("Audio error:", e);
          setError("Error loading audio. Please try again.");
          setIsPlaying(false);
        }}
      />
      
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={playPrevious}
          className="p-2 text-pink-600 hover:text-pink-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={playNext}
          className="p-2 text-pink-600 hover:text-pink-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="p-2 text-pink-600 hover:text-pink-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {showPlaylist && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 min-w-[200px]"
          >
            {playlist.map((song, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentSong(index);
                  setIsPlaying(true);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  currentSong === index
                    ? 'bg-pink-500 text-white'
                    : 'text-pink-600 hover:bg-pink-100'
                }`}
              >
                {song.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-full right-0 mb-2 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          {error}
        </motion.div>
      )}
    </motion.div>
  );
}

export default MusicPlayer; 