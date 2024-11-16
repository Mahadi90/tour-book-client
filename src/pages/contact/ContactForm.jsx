/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-20">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </form>
      <hr className="border-gray-800 dark:border-white my-4" />
      <h3 className='text-xl font-semibold text-orange-600 my-2 text-center'>OR</h3>
      <div className='space-x-2 flex justify-center'>
            <a target='blank' href="https://www.facebook.com/tourbookofficial"><button className='btn btn-primary'><FaFacebookF className='w-6 h-6' /></button></a>
            <a target='blank' href="https://wa.me/+8801793320590"><button className='btn btn-success text-white'><FaWhatsapp className='w-6 h-6' /></button></a>
            </div>
    </div>
  );
};

export default ContactForm;
