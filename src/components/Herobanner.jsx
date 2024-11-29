import React from "react";

const Herobanner = () => {
  return (
    <div>
      <header className="w-screen h-80 md:h-96 z-1 relative flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl text-cyan-900 dark:text-cyan-300 font-bold tracking-wider animate-fade-in">
          Hi, I'm ...
        </h1>
        <p className="mt-4 text-xl md:text-2xl opacity-80 animate-slide-in">
          A Web Developer
        </p>
      </header>
    </div>
  );
};

export default Herobanner;
