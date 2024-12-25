import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Herobanner from '../../components/Herobanner';
import AboutHeader from '../../components/AboutContent/AboutHeader';
import InfoAndSkills from '../../components/AboutContent/InfoAndSkills';
import Certifications from '../../components/AboutContent/Certifications';
import FunFact from '../../components/AboutContent/FunFact';
import Projects from '../../components/Projects';

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [progress, setProgress] = useState({
        about: 0,
        projects: 0,
    })
    const [offsets, setOffsets] = useState({
        about: 0,
        projects: 0,
    })

    const handleScroll = () => {
        const calculateProgress = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 350;
                const sectionHeight = section.offsetHeight;
                const scrollYInSection = Math.max(0, window.scrollY - sectionTop);
                const lingerThreshold = 0.2;
                if (window.scrollY < sectionTop || window.scrollY > (sectionTop + sectionHeight - 1)) return 0;
                const progress = (scrollYInSection / (sectionHeight * (1-lingerThreshold))) * 100;
                return Math.min(progress, 100);
            }
            return 0;
        }
        const calculateRelativeOffset = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                return Math.max(0, window.scrollY - sectionTop);
            }
        }
        setProgress({
            about: calculateProgress('about'),
            projects: calculateProgress('projects')
        })
        setOffsets({
            about: calculateRelativeOffset('about'),
            projects: calculateRelativeOffset('projects')
        })

        // Show/Hide Nav
        setOffsetY(window.scrollY)
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            setShowNav(sectionTop <= 550);
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

        const handleWheel = (e) => {
            e.preventDefault();
            const scrollSpeed = 0.5;
            const newScrollY = window.scrollY + e.deltaY * scrollSpeed;
            
            window.scrollTo({top: newScrollY, behavior: 'instant'});
        }

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [])
    return (
        <>  
            {/* Navlink */}
            <Navbar progress={progress} handleSmoothScroll={handleSmoothScroll} showNav={showNav} />
            
            <Herobanner offsetY={offsetY} />
            <section id="about" className="h-auto bg-[#07090A] text-white relative py-24">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <AboutHeader offsets={offsets} />
                    <InfoAndSkills offsetY={offsetY} offsets={offsets} />
                    <Certifications offsetY={offsetY} offsets={offsets} />                      
                    <FunFact offsets={offsets} />
                </div>
            </section>
            <section id='projects'>
                <Projects offsets={offsets} />
            </section>
            <section id='contact' className='h-screen bg-black'>
                <h1>Contact</h1>
                <p>This is contact section</p>
            </section>
        </>
        
    );
};

export default Home;