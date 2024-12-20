import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="about" className="relative h-screen bg-cyan-400 text-white overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: `linear-gradient(to bottom, rgba(14, 46, 46, 0.9), #07090A)`,
                    transform: `translateY(${offsetY * 0.2}px)`,
                }}
            ></div>

            {/* Floating Elements */}
            <motion.img
                src="/assets/images/star.svg"
                alt="Star"
                className="absolute top-10 left-1/4 w-12"
                style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            />
            <motion.img
                src="/assets/images/star.svg"
                alt="Star"
                className="absolute top-20 right-1/3 w-16"
                style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            />

            <div className="max-w-4xl mx-auto text-center pt-24 px-6">
                <motion.h2
                    className="text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 to-cyan-600"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Welcome to My Journey 🌟
                </motion.h2>
                <motion.p
                    className="text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    I’m <strong>[Your Name]</strong>, a passionate web developer with a love for creating immersive user experiences and functional designs. My journey began with curiosity and a keyboard, and since then, I’ve explored the art of coding, evolving every day with every project I touch.
                </motion.p>

                {/* Skills Section */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Skills I Bring:</h3>
                        <ul className="space-y-2 text-left">
                            <li>🖥️ <strong>Frontend Mastery</strong>: React, Tailwind CSS, JavaScript</li>
                            <li>🖥️ <strong>Backend Experience</strong>: Node.js, Express, MongoDB</li>
                            <li>🔧 <strong>Tools I Love</strong>: Git, Webpack, Vite</li>
                            <li>📚 <strong>Learning Continuously</strong>: Staying updated with the latest in tech</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Beyond the Code:</h3>
                        <ul className="space-y-2 text-left">
                            <li>🎵 Exploring music</li>
                            <li>🌄 Hiking to catch a sunrise</li>
                            <li>📖 Diving into books about design and innovation</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Call-to-Action */}
                <motion.button
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-cyan-500 transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#contact">Let’s Connect!</a>
                </motion.button>
            </div>
        </section>
    );
};

export default About;
