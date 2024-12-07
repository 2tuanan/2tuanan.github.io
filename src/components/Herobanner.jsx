import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Herobanner = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer speed={0.35} style={{zIndex: -2}}>
        <img
        className="absolute bottom-0 w-screen"
        src="/assets/images/ForeMount.png" alt="" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.38} style={{zIndex: -1}}>
        <img
        className="absolute bottom-0 w-screen"
        src="/assets/images/BackTrees.png" alt="" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.4}
      >
        <img
        className="absolute bottom-0 w-screen" 
        src="/assets/images/ForeTrees.png" alt="" />
      </ParallaxLayer>
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
