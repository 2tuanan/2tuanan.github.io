import React from 'react';
import Header from '../sections/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;