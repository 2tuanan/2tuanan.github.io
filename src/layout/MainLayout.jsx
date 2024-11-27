import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;