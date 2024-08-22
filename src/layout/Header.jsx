import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header <Outlet/></h1>
        </div>
    );
};

export default Header;