import React from 'react';
import './Header.scss';

const Header = ({
    title,
    subtitle
}) => {
    return (
        <div className='header'>
            <div>
                <h1 className='headerTitle'>{title}</h1>
                <h2 className='headerSubtitle'>{subtitle}</h2>
            </div>
        </div>
    );
}

export default Header;