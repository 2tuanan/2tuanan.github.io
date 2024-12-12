import React, { useState } from 'react';
import Projects from '../../components/Projects';
import Skills_Education from '../../components/Skills_Education';
import Herobanner from '../../components/Herobanner';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
    return (
        <Parallax pages={4}>
            {/* Herobanner */}
            <ParallaxLayer speed={0.3} style={{zIndex: -3}}>
                <img
                className="absolute bottom-0 w-screen"
                src="/assets/images/SecMount.svg" alt="" />
            </ParallaxLayer>
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
            <ParallaxLayer speed={0.4}>
                <img
                className="absolute bottom-0 w-screen" 
                src="/assets/images/ForeTrees.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={1} factor={1}>
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-gray-100'>
                    <h1>About</h1>
                    <p>This is the About section content</p>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Home;