import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div>
            <header className='p-4'>
                <div onClick={toggleDarkMode} className='relative flex items-center justify-center 
                w-16 h-8 cursor-pointer bg-gray-200 dark:bg-gray-700 rounded-full p-1 
                transition-colors duration-500'>
                    <div className={`relative w-16 h-8 cursor-pointer rounded-full p-1 overflow-hidden 
                    transition-all duration-700 
                        ${darkMode 
                            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
                            : 'bg-gradient-to-r from-yellow-400 to-red-400'}`}
                        style={{
                            backgroundImage: darkMode
                                ? 'url(/assets/images/dark-mode.gif)'
                                : 'url(/assets/images/light-mode.gif)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <div className={`absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full 
                            transform transition-transform duration-500
                            ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        <SunIcon className={`absolute left-1 text-yellow-500 w-5 h-5 transform 
                        transition-opacity duration-500 
                        ${darkMode ? 'opacity-0' : 'opacity-100'}`}/>
                        <MoonIcon className={`absolute right-1 text-gray-300 w-5 h-5 transform 
                        transition-opacity duration-500
                        ${darkMode ? 'opacity-100' : 'opacity-0'}`}/>
                    </div>
                    
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;