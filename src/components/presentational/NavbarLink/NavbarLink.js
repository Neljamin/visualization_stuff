import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarLink.scss';

const NavbarLink = (props) => {
    const { children } = props;
    return (
        <div className='navbarLinkContainer'>
            <NavLink 
                {...props}
                activeClassName='selectedNavbarLink'
            >
                {children}
            </NavLink>
        </div>
    );
}

export default NavbarLink;