import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { title, price, description, img } = service;
    return (
        <div className='service'>
            <img className='service-img' src={img} alt="" />
            <h2>{title}</h2>
            <p>Price: $ {price}</p>
            <p className='desc'>{description}</p>
            <Link to='/checkout' className='service-button'>Book Service</Link>
            <br />
            <br />
        </div>
    );
};

export default Service;