import React, { useEffect, useState } from 'react';
import Projects from '../../components/Projects';
import Skills_Education from '../../components/Skills_Education';
import Herobanner from '../../components/Herobanner';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { b } from 'framer-motion/client';

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [progress, setProgress] = useState({
        about: 0,
        projects: 0,
        contact: 0
    })

    const handleScroll = () => {
        const calculateProgress = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollYInSection = Math.max(0, window.scrollY - sectionTop);
                const lingerThreshold = 0.2;
                if (window.scrollY < sectionTop || window.scrollY > (sectionTop + sectionHeight - 1)) return 0;
                const progress = (scrollYInSection / (sectionHeight * (1-lingerThreshold))) * 100;
                return Math.min(progress, 100);
            }
            return 0;
        }
        setProgress({
            about: calculateProgress('about'),
            projects: calculateProgress('projects')
        })

        // Show/Hide Nav
        setOffsetY(window.scrollY)
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            setShowNav(sectionTop <= 50);
        }
    }
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        let isScrolling = false;

        const handleWheel = (e) => {
            e.preventDefault();
            const scrollSpeed = 0.6;
            const newScrollY = window.scrollY + e.deltaY * scrollSpeed;
            
            window.scrollTo({top: newScrollY, behavior: 'instant'});
        }

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [])
    return (
        <>  
            {/* Navlink */}
            <div className={`fixed top-0 left-0 z-10 transition-transform duration-300 ease-in-out ${
                showNav ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}>
                <nav>
                    <ul className='flex flex-col gap-4 text-white pl-6 pt-6 items-start'>
                    <li style={{background: `linear-gradient(to right, #134e4a ${progress.about}%, transparent ${progress.about}%)`}} 
                        className='relative group rounded-2xl'>   
                            <div ></div>
                            <a onClick={(e) => handleSmoothScroll(e, "about")} href="#about" className="block px-2 py-1 text-white transition-transform duration-300 hover:text-cyan-200">
                                About
                                <span className="absolute inset-0 border border-cyan-200 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-2xl"></span>
                            </a>
                        </li>
                        <li style={{background: `linear-gradient(to right, #134e4a ${progress.projects}%, transparent ${progress.projects}%)`}} 
                        className='relative group rounded-2xl'>   
                            <div ></div>
                            <a onClick={(e) => handleSmoothScroll(e, "projects")} href="#projects" className="block px-2 py-1 text-white transition-transform duration-300 hover:text-cyan-200">
                                Work
                                <span className="absolute inset-0 border border-cyan-200 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-2xl"></span>
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => handleSmoothScroll(e, "contact")} href="#contact" className='hover:text-cyan-300'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            


            <div className='relative h-screen overflow-hidden'>
                <div className='absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-[#9ECCCA] 
                to-[#D4F0DE]'></div>
                {/* Clouds */}
                <img className='absolute -left-24 bottom-1/4 -z-[1] scale-[0.6] md:scale-75 lg:scale-100' 
                    src="/assets/images/Cloud-Left1.svg" alt="" />
                <img className='absolute left-1/3 top-1/4 -z-[1] scale-50 md:scale-75 lg:scale-100'
                    src="/assets/images/Cloud-Left2.svg" alt="" />
                <img className='absolute -right-10 md:right-0 top-1/3 -z-[2] scale-50 md:scale-75 lg:scale-100'
                    src="/assets/images/Cloud-Right1.svg" alt="" />
                <img className='absolute right-10 top-1/2 scale-50 md:scale-75 lg:scale-100'
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
            <section id='about' className='h-full bg-[#07090A]'>
                <h1>About</h1>
                <p>This is about section</p>
                <Skills_Education />
                <div className='h-[1000px]'>
                </div>
            </section>
            <section id='projects' className='h-screen bg-black'>
                <h1>Projects</h1>
            </section>
            <section id='contact' className='h-screen bg-black'>
                <h1>Contact</h1>
                <p>This is contact section</p>
            </section>
        </>
        
    );
};

export default Home;