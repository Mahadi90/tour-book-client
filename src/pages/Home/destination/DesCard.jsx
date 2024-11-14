/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DesCard = ({ item }) => {


    return (
        <div className="card bg-base-100 image-full w-36 h-36 shadow-xl">
            <figure>
                <img
                    src={item.img}
                    alt={item.district} />
            </figure>
            <div className="card-body flex justify-center items-center">
                <h2 className="card-title">{item.district}</h2>
            </div>
        </div>
    );
};

export default DesCard;