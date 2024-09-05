import React, { useState, useEffect, useRef } from "react";
import { Transition } from '@headlessui/react';
import { Link } from "react-scroll";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside of it
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="sticky top-4 z-20 max-w-screen-2xl container mx-auto xl:px-24 p-4">
        <nav 
          className="w-4/5 mx-auto p-2 text-white rounded-2xl"
          style={{ 
            backgroundColor: 'rgba(216, 180, 254, 0.5)', 
            backdropFilter: 'blur(8px)' // Apply blur effect
          }} 
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img src="logoooo.png" className="w-12 h-12"/>

            {/* Menu Items for large screens */}
            <div className="hidden lg:flex flex-1 justify-center space-x-8">
              <Link to='slide' smooth={true} duration={500} className="hover:underline">Recent Work</Link>
              <Link to='button' smooth={true} duration={500} className="hover:underline">Our Solution</Link>
              <Link to='faq' smooth={true} duration={700} className="hover:underline">FAQs</Link>
            </div>

            {/* Sign Up Button */}
            <div className="hidden lg:flex">
              <a href="https://wa.me/233207333553">
                <button className="relative inline-flex items-center justify-center p-2.5 border-4 border-transparent rounded-2xl bg-gradient-to-r from-purple-200 to-purple-200 text-white text-sm font-medium hover:bg-transparent hover:border-gray-300 focus:outline-none">
                  <span className="absolute inset-0 rounded-xl border animate-border-light bg-gradient-to-r from-violet-500 via-purple-300 to-purple-500" />
                  <span className="relative z-10">Book A Call</span>
                </button>
              </a>
            </div>

            {/* Hamburger Menu Icon for small/medium screens */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        
        {/* Dropdown Menu for small/medium screens */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 transform -translate-y-2"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform -translate-y-2"
        >
          <div 
            ref={dropdownRef}
            className="lg:hidden absolute right-20 mt-2 w-64 text-white p-4 rounded-lg shadow-lg"
            style={{ 
              backgroundColor: 'rgba(216, 180, 254, 0.5)', 
              backdropFilter: 'blur(8px)' // Apply blur effect
            }}
          >
            <ul className="space-y-2">
              <li><Link to='slide' smooth={true} duration={500} className="hover:underline" onClick={() => setIsOpen(false)}>Recent Work</Link></li>
              <li><Link to='button' smooth={true} duration={500} className="hover:underline" onClick={() => setIsOpen(false)}>Our Solution</Link></li>
              <li><Link to='faq' smooth={true} duration={700} className="hover:underline" onClick={() => setIsOpen(false)}>FAQs</Link></li>
              <a href="https://wa.me/233207333553">
                <li className='flex justify-center'>
                  <button className="relative inline-flex items-center justify-center p-2.5 border-4 border-transparent rounded-2xl bg-gradient-to-r from-purple-200 to-purple-200 text-white text-sm font-medium hover:bg-transparent hover:border-gray-300 focus:outline-none">
                    <span className="absolute inset-0 rounded-xl border animate-border-light bg-gradient-to-r from-violet-500 via-purple-300 to-purple-500" />
                    <span className="relative z-10">Book A Call Now</span>
                  </button>
                </li>
              </a>
            </ul>
          </div>
        </Transition>
      </div>
    );
}

export default Nav;
