import React from 'react';

const Navbar = ({ progress, handleSmoothScroll, showNav }) => (
    <div className={`fixed top-0 left-0 z-10 transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full navbar-blur'}`}>
        <nav>
            <ul className='flex flex-col gap-4 text-white pl-6 pt-6 items-start'>
                {['about', 'projects', 'contact'].map((section) => (
                    <li
                        key={section}
                        style={{
                            background: `linear-gradient(to right, #0d9488 ${progress[section]}%, transparent ${progress[section]}%)`,
                        }}
                        className="relative group rounded-2xl"
                    >
                        <a
                            onClick={(e) => handleSmoothScroll(e, section)}
                            href={`#${section}`}
                            className="block px-2 py-1 text-white transition-transform duration-300 hover:text-cyan-200"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);

export default Navbar;
