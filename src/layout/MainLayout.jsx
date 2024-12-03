import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <header className="p-4 flex justify-center items-center">
                <button
                    onClick={toggleDarkMode}
                    className={`relative flex items-center justify-between w-[4.14rem] h-8 rounded-full 
                    overflow-hidden transition-all duration-700 border-2 ${
                        darkMode 
                            ? 'border-cyan-200 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500' 
                            : 'border-cyan-900 bg-gradient-to-r from-yellow-100 to-cyan-100'
                    }`}
                >
                    {/* Sun / Moon Icons */}
                    <div
                        className={`absolute w-6 h-6 rounded-full transform transition-transform duration-500 bg-cyan-900 dark:bg-cyan-200 ${
                            darkMode ? 'translate-x-9' : 'translate-x-0 m-[0.14rem]'
                        }`}
                    />
                    <SunIcon
                        className={`absolute left-[.256rem] top-[.265rem] text-yellow-200 w-5 h-5 transition-opacity duration-500 ${
                            darkMode ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <MoonIcon
                        className={`absolute right-[0.27rem] top-[.27rem] text-cyan-900 w-5 h-5 transition-opacity duration-500 ${
                            darkMode ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </button>
            </header>

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
