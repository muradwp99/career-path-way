import React from 'react';
import checkout from '../../images/checkout.jpg';

const CheckOut = () => {
    return (
        <div>
            <h2 style={{ 'font-size': '45px', 'margin': '20px 0', 'text-align': 'center' }}>This checkout</h2>
            <img src={checkout} style={{ 'width': '100%' }} alt="" />
        </div>
    );
};

export default CheckOut;