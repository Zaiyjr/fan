import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  // Add your images here
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpeg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    // Add more images as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[400px]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default ImageCarousel; 