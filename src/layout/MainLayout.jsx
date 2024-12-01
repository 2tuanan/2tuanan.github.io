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
                    className={`relative flex items-center justify-between w-16 h-8 rounded-full 
                    overflow-hidden transition-all duration-700 border-2 ${
                        darkMode 
                            ? 'border-gray-600 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500' 
                            : 'border-gray-300 bg-gradient-to-r from-yellow-300 to-red-500'
                    }`}
                >
                    {/* Sun / Moon Icons */}
                    <div
                        className={`absolute w-6 h-6 rounded-full transform transition-transform duration-500 bg-white dark:bg-gray-900 ${
                            darkMode ? 'translate-x-9' : 'translate-x-0'
                        }`}
                    />
                    <SunIcon
                        className={`absolute left-1 text-yellow-500 w-5 h-5 transition-opacity duration-500 ${
                            darkMode ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <MoonIcon
                        className={`absolute right-1 text-gray-300 w-5 h-5 transition-opacity duration-500 ${
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
