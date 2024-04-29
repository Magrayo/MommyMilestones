import React from 'react';
import mommy from '../images/mommy.png'

const Navbar = () => {
  return (
    <nav>
    <div className="container mx-auto flex items-center justify-between h-[80px] bg-blue fixed top-0 left-0 w-full z-50">
      <img src={mommy} alt="logo" className="w-[200px] h-[140px] ml-[80px]" />
      <div className="hidden md:flex space-x-16 mr-[70px]">
        <a href="/About" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="/Blog" className="text-white hover:text-gray-300">
          Blog page
        </a>
        <a href="/resources" className="text-white hover:text-gray-300">
          Resources
        </a>
        <a href="/postpartum" className="text-white hover:text-gray-300">
          Postpartum
        </a>
        <a href="/labor-delivery" className="text-white hover:text-gray-300">
          Labor & Delivery
        </a>
      </div>
        {/* Add profile dropdown or other menu items here */}
      </div>
    </nav>
  );
};

export default Navbar;
