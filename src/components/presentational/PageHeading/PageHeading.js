import React from 'react';
import './PageHeading.scss';

const PageHeading = ({
    title
}) => {
    return (
        <div className='pageHeading'>
            <h2>{title}</h2>
        </div>
    );
}

export default PageHeading;