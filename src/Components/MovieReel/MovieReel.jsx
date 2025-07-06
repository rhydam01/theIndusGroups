import React, { useEffect, useRef } from 'react';
import './MovieReel.css'; // Custom styles

import image1 from './folder1/image1.png';
import image2 from './folder1/image2.png';
import image3 from './folder1/image3.png';
import image4 from './folder1/4.png';
import image5 from './folder1/5.png';
import image6 from './folder1/6.png';
import image7 from './folder1/7.png';
import image8 from './folder1/8.png';
import image9 from './folder1/9.png';
import image10 from './folder1/10.png';
import image11 from './folder1/11.png';
import image12 from './folder1/12.png';
import image13 from './folder1/13.png';
import image14 from './folder1/14.png';
import image15 from './folder1/15.png';
import image16 from './folder1/16.png';
import image17 from './folder1/17.png';
import image18 from './folder1/18.png';
import image19 from './folder1/19.png';
import image20 from './folder1/20.png';
import image21 from './folder1/21.png';
import image22 from './folder1/22.png';
import image23 from './folder1/23.png';
import image24 from './folder1/24.png';
import image25 from './folder1/25.png';
import image26 from './folder1/26.png';
import image27 from './folder1/27.png';
import image28 from './folder1/28.png';
import image29 from './folder1/29.png';
import image30 from './folder1/30.png';
import image31 from './folder2/1.png';
import image32 from './folder2/2.png';
import image33 from './folder2/3.png';
import image34 from './folder2/4.png';
import image35 from './folder2/5.png';
import image36 from './folder2/6.png';
import image37 from './folder2/7.png';
import image38 from './folder2/8.png';
// import image39 from './folder2/9.png';
import image40 from './folder2/10.png';
import image41 from './folder2/11.png';
import image42 from './folder2/12.png';
import image43 from './folder2/13.png';
import image44 from './folder2/14.png';
import image45 from './folder2/15.png';
import image46 from './folder2/16.png';
import image47 from './folder2/17.png';
import image48 from './folder2/18.png';
import image49 from './folder2/19.png';
import image50 from './folder2/20.png';
import image51 from './folder2/21.png';
import image52 from './folder2/22.png';
import image53 from './folder2/23.png';
import image54 from './folder2/24.png';

// First set of slides for the first reel
const slidesReel1 = [
  { image: image1, alt: 'Image 1' },
  { image: image2, alt: 'Image 2' },
  { image: image3, alt: 'Image 3' },
  { image: image4, alt: 'Image 4' },
  { image: image5, alt: 'Image 5' },
  { image: image6, alt: 'Image 6' },
  { image: image7, alt: 'Image 7' },
  { image: image8, alt: 'Image 8' },
  { image: image9, alt: 'Image 9' },
  { image: image10, alt: 'Image 10' },
  { image: image11, alt: 'Image 11' },
  { image: image12, alt: 'Image 12' },
  { image: image13, alt: 'Image 13' },
  { image: image14, alt: 'Image 14' },
  { image: image15, alt: 'Image 15' },
  { image: image16, alt: 'Image 16' },
  { image: image17, alt: 'Image 16' },
  { image: image18, alt: 'Image 16' },
  { image: image19, alt: 'Image 16' },
  { image: image20, alt: 'Image 16' },
  { image: image21, alt: 'Image 21' },
  { image: image22, alt: 'Image 21' },
  { image: image23, alt: 'Image 21' },
  { image: image24, alt: 'Image 21' },
  { image: image25, alt: 'Image 21' },
  { image: image26, alt: 'Image 21' },
  { image: image27, alt: 'Image 21' },
  { image: image28, alt: 'Image 21' },
  { image: image29, alt: 'Image 21' },
  { image: image30, alt: 'Image 21' },

  // Second set of slides for the second ree
];

// Second set of slides for the second reel
const slidesReel2 = [
  { image: image31, alt: 'Image 31' },
  { image: image32, alt: 'Image 32' },
  { image: image33, alt: 'Image 33' },
  { image: image34, alt: 'Image 34' },
  { image: image35, alt: 'Image 35' },
  { image: image36, alt: 'Image 36' },
  { image: image37, alt: 'Image 37' },
  { image: image38, alt: 'Image 38' },
  // { image: image39, alt: 'Image 39' },
  { image: image40, alt: 'Image 40' },
  { image: image41, alt: 'Image 41' },
  { image: image42, alt: 'Image 42' },
  { image: image43, alt: 'Image 43' },
  { image: image44, alt: 'Image 44' },
  { image: image45, alt: 'Image 45' },
  { image: image46, alt: 'Image 46' },
  { image: image47, alt: 'Image 47' },
  { image: image48, alt: 'Image 48' },
  { image: image49, alt: 'Image 49' },
  { image: image50, alt: 'Image 50' },
  { image: image51, alt: 'Image 51' },
  { image: image52, alt: 'Image 52' },
  { image: image53, alt: 'Image 53' },
  { image: image54, alt: 'Image 54' },
];


// Counter data remains the same
const counters = [
  { value: 1000 , label: 'Customers' },
  { value: 192, label: 'Countries Served' },
  { value: 11, label: 'Years of Experience' },
  { value: 3000, label: 'Associates Partners' }
];

const MovieReel = () => {
  const reelInnerRef1 = useRef(null);
  const reelInnerRef2 = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    // Function to setup the reels
    const setupReel = (reelRef, slides) => {
      const reelInner = reelRef.current;

      const repeatedSlides = Array(7).fill(slides).flat(); // Repeat the slides multiple times

      repeatedSlides.forEach((slide) => {
        const slot = document.createElement('div');
        slot.className = 'reel-slot';
        const img = document.createElement('img');
        img.src = slide.image;
        img.alt = slide.alt;
        slot.appendChild(img);
        reelInner.appendChild(slot);
      });

      // Adjust the animation duration based on the total number of images
      const animationDuration = repeatedSlides.length * 5; // Adjust as needed
      reelInner.style.animationDuration = `${animationDuration}s`;
    };

    setupReel(reelInnerRef1, slidesReel1);
    setupReel(reelInnerRef2, slidesReel2);

    // Counter animation
    counterRefs.current.forEach((ref, index) => {
      if (ref) {
        let start = 0;
        const end = counters[index].value;
        const duration = 10000;
        const increment = end / (duration / 100);
        const timer = setInterval(() => {
          start += increment ;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          ref.innerText = Math.floor(start) + "+";
        }, 100);
      }
    });
  }, []);

  return (
    <div className="movie-reels">
      <p id='op'>
        TRUSTED BY
      </p>
      <div className="movie-reel">
        <div className="movie-reel-inner" ref={reelInnerRef1}></div>
      </div>
      <p id='op'>
        OUR CARRIER PARTNERS
      </p>
      <div className="movie-reel reverse">
        <div className="movie-reel-inner" ref={reelInnerRef2}></div>
      </div>
      <div className="counter-section">
        {counters.map((counter, index) => (
          <div className="counter" key={index}>
            <div className="counter-value" ref={(el) => (counterRefs.current[index] = el )}>
            </div>
            <div className="counter-label">{counter.label}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MovieReel;
