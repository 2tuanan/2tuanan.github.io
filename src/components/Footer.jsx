import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='mx-auto text-center'>
                    <p>&copy; AP. All Rights Reserved 2024</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-white">GitHub</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Portfolio</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;