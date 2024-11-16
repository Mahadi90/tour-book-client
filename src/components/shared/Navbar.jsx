// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`navbar bg-base-100 ${isSticky ? "sticky" : ""}`}
        style={{
            position: "fixed",
            top: 0,
            width: "100%",
            padding: "1rem",
            backgroundColor: isSticky ? "rgba(255, 255, 255)" : "transparent",
            boxShadow : isSticky? "3px 3px 25px black" : "",
            color: isSticky ? "rgba(255, 165, 0)" : "white",
            transition: "background-color 1s ease",
            zIndex : "10"
          }}
        >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-orange-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link className='font-semibold mx-2 text-lg' to={'/'}>Home</Link>
           <Link className='font-semibold mx-2 text-lg' to={'/about'}>About Us</Link>
           <Link className='font-semibold mx-2 text-lg' to={'/packages'}>Packages</Link>
           <Link className='font-semibold mx-2 text-lg' to={'/contact'}>Contact</Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img className='w-32 md:w-40' src='/logo.png'></img></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <Link className='font-semibold mx-4 text-lg' to={'/'}>Home</Link>
           <Link className='font-semibold mx-4 text-lg' to={'/about'}>About Us</Link>
           <Link className='font-semibold mx-2 text-lg' to={'/packages'}>Packages</Link>
           <Link className='font-semibold mx-4 text-lg' to={'/contact'}>Contact</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-4 bg-orange-500 border-none text-white md:px-8">Sign In</a>
        </div>
      </div>
    );
};


export default Navbar;