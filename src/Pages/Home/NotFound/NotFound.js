import React from 'react';
import notfound from '../../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 style={{ 'text-align': 'center', 'font-size': '90px' }}>404 Not Found</h2>
            <img style={{ 'width': '100%' }} src={notfound} alt="" />
        </div >
    );
};

export default NotFound;