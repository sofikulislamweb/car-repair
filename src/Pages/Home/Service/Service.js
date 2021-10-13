import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, price, time, description } = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{time}</h5>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;