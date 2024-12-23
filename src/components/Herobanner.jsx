import React from "react";


const Herobanner = ({offsetY}) => {
  return (
    <div>
      <div className='relative h-screen overflow-hidden'>
        <div className='absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-[#9ECCCA] 
        to-[#D4F0DE]'></div>
        {/* Clouds */}
        <img className='absolute -left-24 bottom-1/4 -z-[1] scale-[0.6] md:scale-75 lg:scale-100' 
          style={{transform: `translateX(${offsetY * -0.5}px)`}}
          src="/assets/images/Cloud-Left1.svg" alt="" />
        <img className='absolute left-1/3 top-1/4 -z-[1] scale-50 md:scale-75 lg:scale-100'
          style={{transform: `translateX(${offsetY * -0.4}px)`}}
          src="/assets/images/Cloud-Left2.svg" alt="" />
        <img className='absolute -right-10 md:right-0 top-1/3 -z-[2] scale-50 md:scale-75 lg:scale-100'
          style={{transform: `translateX(${offsetY * 0.4}px)`}}
          src="/assets/images/Cloud-Right1.svg" alt="" />
        <img className='absolute right-10 top-1/2 scale-50 md:scale-75 lg:scale-100'
          style={{transform: `translateX(${offsetY * 0.4}px)`}}
          src="/assets/images/Cloud-Right2.svg" alt="" />
        {/* Mountains */}
        <img className='absolute bottom-0 w-full -z-[5]'
          style={{transform: `translateY(${offsetY * 0.3}px)`}}
          src="/assets/images/FourMount.svg" alt="" />
        <img className='absolute bottom-0 w-full -z-[4]'
          style={{transform: `translateY(${offsetY * 0.25}px)`}}
          src="/assets/images/ThirMount.svg" alt="" />
        <img className='absolute bottom-0 w-full -z-[3]'
          style={{transform: `translateY(${offsetY * 0.2}px)`}}
          src="/assets/images/SecMount.svg" alt="" />
        <img className='absolute bottom-0 w-full -z-[2]'
          style={{transform: `translateY(${offsetY * 0.15}px)`}}
          src="/assets/images/ForeMount.svg" alt="" />
        {/* Trees */}
        <img className='absolute bottom-0 w-full -z-[2]'
          style={{transform: `translateY(${offsetY * 0.1}px)`}}
          src="/assets/images/BackTrees.svg" alt="" />
        <img className="absolute -bottom-[1px] w-full"
          src="/assets/images/ForeTrees.svg"
          alt=""
          style={{transform: `translateY(${offsetY * 0}px)`}}
        />
      </div>
    </div>
  );
};

export default Herobanner;
