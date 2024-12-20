import React from "react";


const Herobanner = () => {
  return (
    <>
      <div className="w-screen h-80 md:h-96 z-1 relative flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl text-cyan-900 dark:text-cyan-300 font-bold tracking-wider">
          Hi, I'm ...
        </h1>
        <p className="mt-4 text-xl md:text-2xl opacity-80">
          A Web Developer
        </p>
      </div>
    </>
  );
};

export default Herobanner;
