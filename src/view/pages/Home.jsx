import React, { useState } from 'react';
import Projects from '../../components/Projects';
import Skills_Education from '../../components/Skills_Education';
import Herobanner from '../../components/Herobanner';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
    return (
        <Parallax pages={4}>
            {/* Herobanner */}
            <ParallaxLayer offset={0} speed={-0.6} style={{zIndex: -6}}>
                <div
                    className="absolute top-36 right-1/4 transform -translate-x-1/2 w-[200px] h-[200px] bg-gradient-to-br from-[#FFFFFF] to-[#FAF4C3] rounded-full transition-all"
                />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                style={{
                    absolute: 'top-0 left-0 w-screen h-screen',
                    background: 'linear-gradient(to bottom, #9ECCCA, #D4F0DE)',
                    zIndex: -7,
                    transition: 'background 0.5s',
                }}
            />
            <ParallaxLayer speed={1} horizontal style={{zIndex:-1}}>
                <img 
                className='absolute top-[42rem]'
                src="/assets/images/Cloud-Left1.svg" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={2} horizontal style={{zIndex:-1}}>
                <img 
                className='absolute top-[12rem] left-[25rem]'
                src="/assets/images/Cloud-Left2.svg" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-1} horizontal style={{zIndex:-1}}>
                <img 
                className='absolute top-[10rem] right-[-35rem]'
                src="/assets/images/Cloud-Right1.svg" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-1} horizontal style={{zIndex:-1}}>
                <img 
                className='absolute top-[20rem] right-[-30rem]'
                src="/assets/images/Cloud-Right2.svg" alt="" />
            </ParallaxLayer>
            {/* Mount and Trees */}
            <ParallaxLayer speed={-0.6} style={{zIndex: -5}}>
                <img
                className="absolute bottom-0 w-screen"
                src="/assets/images/FourMount.svg" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-0.5} style={{zIndex: -4}}>
                <img
                className="absolute bottom-0 w-screen"
                src="/assets/images/ThirMount.svg" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-0.3} style={{zIndex: -3}}>
                <img
                className="absolute bottom-0 w-screen"
                src="/assets/images/SecMount.svg" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-0.2} style={{zIndex: -2}}>
                <img
                className="absolute bottom-0 w-screen"
                src="/assets/images/ForeMount.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-0.1} style={{zIndex: -1}}>
                <img
                className="absolute bottom-0 w-screen"
                src="/assets/images/BackTrees.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer speed={-0.005}>
                <img
                className="absolute bottom-0 w-screen" 
                src="/assets/images/ForeTrees.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={1} factor={1}>
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
                    <h1 className=''>About</h1>
                    <p>This is the About section content</p>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Home;