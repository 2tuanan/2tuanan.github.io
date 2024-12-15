import React, { useState } from 'react';
import Projects from '../../components/Projects';
import Skills_Education from '../../components/Skills_Education';
import Herobanner from '../../components/Herobanner';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
    return (
        <Parallax pages={4}>
            {/* Herobanner */}
            <ParallaxLayer offset={0} speed={-1} style={{zIndex: -6}}>
                <div
                    className="absolute top-36 right-1/4 transform -translate-x-1/2"
                    style={{
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, #FFFFFF, #FAF4C3)',
                        borderRadius: '50%',
                        transition: 'width 0.5s, height 0.5s',
                    }}
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
            <ParallaxLayer
                offset={0}
            />
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