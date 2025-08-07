import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll()

    const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
    const navScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1])

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "contact"];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
                        setActiveSection(section);
                    }
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }   
    }

    return (
        <div>
            {/* Navbar Desktop */}
            <motion.nav 
                className= "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
                style={{ opacity: navOpacity, scale: navScale }}>
                <div className='bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl'>
                    <div className='flex items-center space-x-2 relative'>
                    {navItems.map((items, index) => {
                        const isActive = activeSection === items.href.slice(1);

                        return (
                            <motion.button
                                key={items.name}
                                className={`relative px-4 py-2 cursor-pointer rounded-full text-md font-medium 
                                    transition-all duration-300 z-10 ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-white/60 hover:text-white/80'
                                    }`}
                                onClick={() => scrollToSection(items.href)}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Active background effect */}
                                {isActive && (
                                    <motion.div
                                        className='absolute inset-0 bg-white/10 rounded-full'
                                        layoutId="active-bg"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {/* Active indicator */}
                                {isActive && (
                                    <motion.div
                                        className='absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full'
                                        layoutId="active-indicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{items.name}</span>
                            </motion.button>
                        )
                    })}
                    </div>
                </div>
            </motion.nav>

            {/* Navbar Mobile */}
            <motion.nav
                className='fixed top-0 left-0 right-0 z-50 md:hidden'
                initial={{y: -100 }}
                animate={{y: 0}}
                transition={{ duration: 0.5 }}
            >
                <div className='bg-black/20 backdrop-blur-xl border-b border-white/10 px-6 py-4'>
                    <div className='flex items-center justify-between'>
                        {/*Logo*/}
                        <motion.div
                            className='text-2xl font-bold text-white cursor-pointer'
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection("#hero")}
                        >
                            AP<span className='text-blue-400'>.</span>
                        </motion.div>
                        {/*Hamburger Menu*/}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='w-7 h-7 relative flex flex-col justify-center items-center cursor-pointer'
                        >
                            <motion.span 
                                animate={{
                                    y: isMobileMenuOpen ? 0 : -10,
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className='absolute w-full h-1 bg-white rounded'
                            />
                            <motion.span 
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className='absolute w-full h-1 bg-white rounded'
                            />
                            <motion.span 
                                animate={{
                                    y: isMobileMenuOpen ? 0 : 10,
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className='absolute w-full h-1 bg-white rounded'
                            />
                        </button>
                    </div>
                    {/*Mobile Menu*/}
                    <motion.div
                        className='overflow-hidden'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isMobileMenuOpen ? "auto" : 0,
                            opacity: isMobileMenuOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='pt-10 pb-4 space-y-4'>
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                            setTimeout(() => {
                                                scrollToSection(item.href)
                                            }, 300)
                                        }}
                                        className={`block w-full text-left py-3 rounded-xl 
                                            transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                            }`}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{
                                            opacity: isMobileMenuOpen ? 1 : 0,
                                        }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <div className='flex items-center space-x-2'>
                                            <span className='font-medium'>{item.name}</span>
                                        </div>
                                    </motion.button>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </motion.nav>
            {/*Mobile menu backdrop */}
            {isMobileMenuOpen && (
                <motion.div
                    className='fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};

export default Navbar;