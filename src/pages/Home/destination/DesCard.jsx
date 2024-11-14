/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const DesCard = ({ item }) => {


    return (
        <Link to='/packages'>
        
        <div className="card bg-base-100 image-full w-36 h-36 shadow-xl">
            <figure>
                <img
                    src={item?.img}
                    alt={item?.district} />
            </figure>
            <div className="card-body flex justify-center items-center">
                <h2 className="card-title">{item?.district}</h2>
            </div>
        </div></Link>
    );
};

export default DesCard;