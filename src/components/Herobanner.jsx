import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroBanner = () => {
  useEffect(() => {
    // Rotate the 'G' continuously
    gsap.to('.rotating-g', {
      rotation: 360,
      repeat: -1,
      ease: 'linear',
      duration: 10,
    });
  }, []);

  return (
    <div className="relative h-screen bg-gray-900 flex items-center justify-center">
      <div className="absolute top-4 left-4 text-white">
        <nav className="space-x-4">
          <a href="#info" className="hover:underline">
            Info
          </a>
          <a href="#work" className="hover:underline">
            Work
          </a>
          <a href="#archive" className="hover:underline">
            Archive
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
      <div className="rotating-g text-9xl text-white font-bold">G</div>
      <div className="absolute bottom-4 left-4 w-full">
        <div className="h-2 bg-white rounded-full progress-bar"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
