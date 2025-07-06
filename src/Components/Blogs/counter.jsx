import React, { useEffect, useRef } from 'react';
import './blogs.css'; // Custom styles

import image1 from './JCTrans.png';
import image2 from './SafeOBuddy.png';
import image3 from './auzair.jpeg';
import image4 from './iffco-tokio.png';
import image5 from './ifreightbox.jpeg';

const slides = [
    { image: image1, alt: 'Image 1' },
    { image: image2, alt: 'Image 2' },
    { image: image3, alt: 'Image 3' },
    { image: image4, alt: 'Image 4' },
    { image: image5, alt: 'Image 5' },
  ];
  const counters = [
    { value: 1000, label: 'customers' },
    { value: 35, label: 'countries' },
    { value: 30, label: 'global offices' },
    { value: 1800, label: 'employees' }
  ];
  
  const Moviereel = ({}) => {
    const reelInnerRef1 = useRef(null);
    const reelInnerRef2 = useRef(null);
    const counterRefs = useRef([]);
  
    useEffect(() => {
      const reelInner1 = reelInnerRef1.current;
      const reelInner2 = reelInnerRef2.current;
  
      const totalImages = slides.length;
      const repeatedSlides = Array(7).fill(slides).flat(); // Repeat the slides multiple times
  
      repeatedSlides.forEach((slide) => {
        const slot1 = document.createElement('div');
        slot1.className = 'reel-slot';
        const img1 = document.createElement('img');
        img1.src = slide.image;
        img1.alt = slide.alt;
        slot1.appendChild(img1);
        reelInner1.appendChild(slot1);
  
        const slot2 = document.createElement('div');
        slot2.className = 'reel-slot';
        const img2 = document.createElement('img');
        img2.src = slide.image;
        img2.alt = slide.alt;
        slot2.appendChild(img2);
        reelInner2.appendChild(slot2);
      });
  
      // Adjust the animation duration based on the total number of images
      const animationDuration = repeatedSlides.length * 5; // Adjust as needed
      reelInner1.style.animationDuration = `${animationDuration}s`;
      reelInner2.style.animationDuration = `${animationDuration}s`;
  
      // Counter animation
      counterRefs.current.forEach((ref, index) => {
        if (ref) {
          let start = 0;
          const end = counters[index].value;
          const duration = 10000;
          const increment = end / (duration / 100);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            ref.innerText = Math.floor(start);
          }, 100);
        }
      });
    }, []);
  
    return (
      <div className="movie-reels">
      
        <div className="counter-section">
          {counters.map((counter, index) => (
            <div className="counter" key={index}>
              <div className="counter-value" ref={(el) => (counterRefs.current[index] = el)}>0</div>
              <div className="counter-label">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Moviereel;