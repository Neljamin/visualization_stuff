import React from 'react';

const Loader = ({
    loading,
    children
}) => {
    return (
        <div>
            {!loading && children}
        </div>
    );
}

export default Loader;