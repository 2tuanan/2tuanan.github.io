import React from 'react';
import Skills_Education from './components/Skills_Education';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Skills_Education />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;