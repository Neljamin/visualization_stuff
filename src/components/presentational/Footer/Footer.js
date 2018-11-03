import React from 'react';
import './Footer.scss';

const Footer = ({
    company
}) => {
    return (
        <div className='footer'>
            <div className='footerCompany'>
                {company} <i className="far fa-copyright" />
            </div>
        </div>
    );
}

export default Footer;