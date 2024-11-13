// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-[50vh] lg:h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./banner-bg.mp4" // replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Overlay content */}
      <div className="space-y-4 relative z-0 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-3xl md:text-6xl font-bold">
          Welcome to <span className='text-green-600'>Tour</span> <span className='bg-orange-400 px-4 rounded-xl text-neutral'>Book</span>
        </h1>
        <h5 className='text-slate-200 text-md md:text-2xl font-bold text-center mx-2'>Choose your destination and select the best package that is suitable for you</h5>
      </div>
    </div>
    );
};

export default Banner;