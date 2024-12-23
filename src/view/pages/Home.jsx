import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Herobanner from '../../components/Herobanner';

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
                const sectionTop = section.offsetTop - 250;
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
            <Navbar progress={progress} handleSmoothScroll={handleSmoothScroll} showNav={showNav} />
            
            <Herobanner offsetY={offsetY} />
            <section id="about" className="h-auto bg-[#07090A] text-white relative py-24">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div
                        className="text-center mb-[10vh]"
                        style={{
                            transform: `translateY(${offsets.about > 300 ? Math.min((offsets.about - 350) * 0.1, 50) : 0}px)`,
                            opacity: offsets.about > 300 ? Math.min(1, (offsets.about - 350) / 200) : 0,
                        }}
                    >
                        <h1 className="text-5xl font-bold text-teal-400 mb-4">
                            About Me
                        </h1>
                        <p className="text-xl text-gray-300">
                            I am ...
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 gap-12 w-screen mb-[20vh]">
                        {/* Introduction */}
                        <div
                            style={{
                                transform: `translateX(${offsets.about > 700 ? Math.min((offsets.about - 700) * 0.1, 50) : 0}px)`,
                                opacity: offsets.about > 700 ? Math.min(1, (offsets.about - 700) / 200) : 0,
                            }}
                            className="space-y-6 w-2/3 mx-auto text-left ml-0"
                        >
                            <h2 className="text-3xl font-semibold text-teal-300">
                                My Journey
                            </h2>
                            <p className="text-gray-200 leading-relaxed">
                                I'm a passionate web developer with a keen interest in
                                creating interactive and visually stunning applications.
                                I have experience in html, css, javascript, react, nodejs...
                            </p>
                        </div>

                        {/* Skills */}
                        <div
                            style={{
                                transform: `translateX(${offsets.about > 900 ? Math.max(-(offsets.about - 900) * 0.1, -50) : 0}px)`,
                                opacity: offsets.about > 900 ? Math.min(1, (offsets.about - 900) / 200) : 0,
                            }}                            
                            className="space-y-8 w-2/3 mx-auto text-right"
                        >
                            <h2 className="text-3xl font-semibold text-teal-300 right-0">
                                My Skills
                            </h2>
                            <div className="space-y-4 right-0">
                                <div className="relative">
                                    <div className="text-gray-300">Frontend Development</div>
                                    <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden mt-2">
                                        <div
                                            className="bg-teal-500 h-3"
                                            style={{
                                                width: `${Math.min(
                                                    (offsetY / 1100) * 70, 80)}%`,
                                                transition: "width 0.5s ease-in-out",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="text-gray-300">Backend Development</div>
                                    <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden mt-2">
                                        <div
                                            className="bg-cyan-500 h-3"
                                            style={{
                                                width: `${Math.min(
                                                    (offsetY / 1100) * 70, 70)}%`,
                                                transition: "width 0.5s ease-in-out",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="text-gray-300">UI/UX Design</div>
                                    <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden mt-2">
                                        <div
                                            className="bg-green-500 h-3"
                                            style={{
                                                width: `${Math.min(
                                                    (offsetY / 1100) * 70, 80)}%`,
                                                transition: "width 0.5s ease-in-out",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Certifications */}
                    <div className="w-2/3 mx-auto mt-12">
                        <h3 style={{
                            transform: `translateX(${offsets.about > 900 ? Math.min((offsets.about - 1000) * 0.1, 50) : 0}px)`,
                            opacity: offsets.about > 900 ? Math.min(1, (offsets.about - 1000) / 200) : 0,
                        }}
                        className="text-2xl font-semibold text-teal-400 mb-4">Certifications</h3>
                        <ul className="space-y-6 relative">
                            {/* Timeline Line */}
                            <div className="absolute w-[0.15rem] h-full bg-gray-600 left-4 top-0"></div>
                            
                            {/* Timeline Items */}
                            {[
                                "Google IT Support Specialization",
                                "Google UX Design Specialization",
                                "The Complete 2023 Web Development Bootcamp",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="relative pl-12"
                                    style={{
                                        transform: `translateY(${offsetY > 1000 + index * 150 ? 0 : 20}px)`,
                                        opacity: offsetY > 1000 + index * 150 ? 1 : 0,
                                        transition: `all 0.5s ease-out ${index * 0.2}s`,
                                    }}
                                >
                                    <div
                                        className="absolute left-[0.43rem] top-0 w-5 h-5 rounded-full"
                                        style={{
                                            backgroundColor: ["#2dd4bf", "#22d3ee", "#4ade80"][index],
                                            transform: `scale(${offsetY > 1000 + index * 150 ? 1 : 0.5})`,
                                            transition: `transform 0.5s ease-out ${index * 0.2}s`,
                                        }}
                                    ></div>
                                    <h4 className="text-lg font-medium text-gray-200">{item}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fun Facts */}
                    <div
                        style={{
                            transform: `translateY(${offsets.about > 1600 ? Math.min((offsets.about - 1700) * 0.1, 50) : 0}px)`,
                            opacity: offsets.about > 1600 ? Math.min(1, (offsets.about - 1700) / 200) : 0,
                        }}
                        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="text-center">
                            <img
                                src="/assets/images/Coding.gif"
                                alt="Coding"
                                className="w-20 mx-auto mb-8"
                            />
                            <h3 className="text-xl font-semibold">40+ Hours of Coding</h3>
                            <p className="text-gray-400">
                                Committed to mastering the art of development.
                            </p>
                        </div>
                        <div className="text-center">
                            <img
                                src="/assets/images/Rocket.gif"
                                alt="Rocket"
                                className="w-20 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">1 Project Launched</h3>
                            <p className="text-gray-400">
                                Delivering functional and creative solutions.
                            </p>
                        </div>
                    </div>
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