import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the birthday date (May 29, 2025)
    const birthday = new Date('May 29 2025');
    
    const calculateTimeLeft = () => {
      const difference = birthday - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If birthday has passed, show zeros
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex justify-center items-center space-x-4">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-pink-100 rounded-lg p-4 text-center min-w-[100px]"
        >
          <div className="text-4xl font-bold text-pink-600">
            {block.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-pink-800">{block.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default CountdownTimer; 