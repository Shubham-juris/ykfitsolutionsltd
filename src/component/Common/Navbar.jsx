import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-60 backdrop-blur-md fixed w-full z-10">
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 text-sm font-medium text-gray-800">
          <a href="/">HOME</a>
          <a href="services">SERVICES</a>
        </ul>
      </div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-800">
        <a href="contact-us">CONTACT US</a>
        <a href="jobs">JOBS</a>
      </ul>
    </nav>
  );
};

export default Navbar;
