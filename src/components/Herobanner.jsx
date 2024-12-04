import React from "react";
import { Parallax } from "react-parallax";

const Herobanner = () => {
  return (
    <Parallax 
      bgImage="/assets/images/hero-banner.jpg"
      strength={500}
      className="w-screen h-80 md:h-96 z-0 flex justify-center items-center"
    >
      <div className="w-screen h-80 md:h-96 z-1 relative flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl text-cyan-900 dark:text-cyan-300 font-bold tracking-wider animate-fade-in">
          Hi, I'm ...
        </h1>
        <p className="mt-4 text-xl md:text-2xl opacity-80 animate-slide-in">
          A Web Developer
        </p>
      </div>
    </Parallax>
  );
};

export default Herobanner;
