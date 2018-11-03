import React from 'react';
import './Navbar.scss';

const Navbar = ({ children }) => {
    return (
        <div className='navbar'>
            {children}
        </div>
    );
}

export default Navbar;