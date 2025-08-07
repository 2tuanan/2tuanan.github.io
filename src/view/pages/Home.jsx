import React from 'react';
import Projects from '../../sections/Projects';
import Skills_Eudcation from '../../sections/Skills_Education';
import Navbar from '../../sections/Navbar';
import About from '../../sections/About';

const Home = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
            <Skills_Eudcation />
        </div>
    );
};

export default Home;