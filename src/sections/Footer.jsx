import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <footer>
                <div>
                    <p>&copy; AP. All Rights Reserved {year}</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-white">Email</a>
                        <a href="#" className="hover:text-white">GitHub</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;