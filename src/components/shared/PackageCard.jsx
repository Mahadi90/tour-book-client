/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({trending}) => {
    const {id,placeName, img,duration,district, pricingType, cost} = trending;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
    className='h-64 w-full'
      src={img}
      alt={placeName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{placeName}</h2>
    <div className='flex justify-between my-2'>
        <div className='space-y-2'>
            <p className='font-semibold text-gray-500'>Duration : {duration}</p>
            <p className='font-semibold text-gray-500'>District : {district}</p>
        </div>
        <div className='space-y-2'>
            <p className='font-semibold text-orange-500'>Cost : {cost} TK</p>
            <p className='font-semibold text-gray-500'>Cost Type : {pricingType}</p>
        </div>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/details/${id}`}><button className="btn bg-orange-500 border-none text-white">See Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default PackageCard;