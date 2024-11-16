/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const DetailsPage = () => {
  const detailsId = useParams()
  const [details, setDetails] = useState()
  useEffect(() => {
    fetch('/package.json')
      .then(res => res.json())
      .then(data => {
        const targetedPackage = data.packages.find(pkg => pkg.id == detailsId.id)
        setDetails(targetedPackage)
      })
  }, [detailsId])

  return (
    <div className="relative h-[130vh] lg:h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/banner-bg.mp4" // replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Overlay content */}
      <div className="space-y-4 relative z-0 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className='w-full mt-10 lg:mt-0 md:w-1/2 h-96 border-4 border-orange-600 rounded-lg'
            src={details?.img} />
          <div>
            <h1 className="text-5xl text-orange-600 font-bold">{details?.placeName}</h1>
            <p className="py-4 text-white">
              {details?.description}
            </p>
            <div className='mb-4 flex justify-between items-center'>
              <ul className='list-inside list-disc ml-4'>
                <h4 className='font-bold text-xl text-orange-600 my-2'>Key Features</h4>
                {
                  details?.highlights?.map(highlight => <li className='text-white font-semibold' key={highlight}>{highlight}</li>)
                }
              </ul>

              <ul className='list-inside list-disc ml-4'>
                <h4 className='font-bold text-xl text-orange-600 my-2'>Included Services</h4>
                {
                  details?.includedServices?.map(highlight => <li className='text-white font-semibold' key={highlight}>{highlight}</li>)
                }
              </ul>
            </div>
            <div className='flex justify-between my-2'>
              <div className='space-y-2'>
                <p className='font-semibold text-gray-200'>Duration : {details?.duration}</p>
                <p className='font-semibold text-gray-200'>District : {details?.district}</p>
              </div>
              <div className='space-y-2'>
                <p className='font-semibold text-green-400'>Cost : {details?.cost} TK</p>
                <p className='font-semibold text-gray-200'>Cost Type : {details?.pricingType}</p>
              </div>
            </div>
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-orange-500 border-none text-white w-full hover:bg-transparent hover:border-solid  hover:border-2 hover:border-orange-500 my-6">Booking now</button>
          </div>
        </div>
      </div>
      
      {/* Book now modal */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Notice!</h3>
          <p className="py-4">বর্তমানে এই ওয়েবসাইটের কাজ চলমান রয়েছে,তাই দয়া করে আমাদের facebook পেজ অথবা whatsapp নাম্বারে যোগাযোগ করে আপনার বুকিংটি সহজেই সম্পন্ন করুন,আপনি চাইলে সরাসরি আমাদের সাথে ফোন নাম্বারে যোগাযোগ করতে পারেন <br /> <br /><span className=' text-blue-500'>Phone : 017000-00000</span></p>
          <div className="modal-action flex justify-between items-center">
            <div className='space-x-2'>
            <a target='blank' href="https://www.facebook.com/tourbookofficial"><button className='btn btn-primary'><FaFacebookF className='w-6 h-6' /></button></a>
            <a target='blank' href="https://wa.me/+8801793320590"><button className='btn btn-success text-white'><FaWhatsapp className='w-6 h-6' /></button></a>
            </div>
            <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error text-white">Close</button>
            </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsPage;