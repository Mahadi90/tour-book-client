/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const StickySocialIcons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-20">
      {/* Facebook */}
      <a target='blank' href="https://www.facebook.com/tourbookofficial"><button className="btn btn-circle btn-primary">
        <FaFacebook size={20} />
      </button></a>
      {/* Instagram */}
      <button className="btn btn-circle btn-error text-white">
        <FaInstagram size={20} />
      </button>
      {/* LinkedIn */}
     <a href="https://wa.me/+8801793320590"> <button className="btn btn-circle btn-success text-white">
        <FaWhatsapp size={20} />
      </button></a>
    </div>
    
  );
};

export default StickySocialIcons;
