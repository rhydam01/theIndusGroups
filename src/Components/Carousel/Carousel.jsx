import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import './Carousel.css'; // Custom styles

import image1 from '../Carousel/image1.jpg';
import image2 from '../Carousel/image2.jpg';
import image3 from '../Carousel/image3.jpg';

const slides = [
  { image: image1,},
  { image: image2, tagline: 'Tagline for Image 2' },
  { image: image3, tagline: 'Tagline for Image 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="carousel">
      <a href="https://www.youtube.com/shorts/Ns0Fx01eM10">
      <button className="fixed-button"> <FaPlay size={12} color="#000"/>        Discover INDUS</button></a>
      
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img className="d-block w-100" src={slide.image} alt={`Slide ${index + 1}`} />
            
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true">&#10094;</span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true">&#10095;</span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
