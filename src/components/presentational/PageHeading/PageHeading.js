import React from 'react';
import './PageHeading.scss';

const PageHeading = ({
    title
}) => {
    return (
        <div className='pageHeading'>
            <h3>{title}</h3>
        </div>
    );
}

export default PageHeading;