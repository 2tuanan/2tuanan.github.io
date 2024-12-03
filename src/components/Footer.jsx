import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='py-14 px-10 mx-10 text-center'>
                    <p>&copy; AP. All Rights Reserved 2024</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-cyan-500 dark:hover:text-white">GitHub</a>
                        <a href="#" className="hover:text-cyan-500 dark:hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-cyan-500 dark:hover:text-white">Portfolio</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;