import React from 'react';
import './PageContainer.scss';

const PageContainer = ({
    children
}) => {
    return (
        <div className='pageContainer'>
            <div className='page'>
                {children}
            </div>
        </div>
    );
}

export default PageContainer;