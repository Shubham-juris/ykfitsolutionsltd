import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-center text-black py-8 shadow-inner">
      <div className="flex justify-center space-x-6 mb-4 text-xl">
        <a href="#" className="hover:text-gray-700">
          {/* <FaFacebookF /> */}
        </a>
        <a href="#" className="hover:text-gray-700">
          {/* <FaInstagram /> */}
        </a>
        <a href="#" className="hover:text-gray-700">
          {/* <FaYelp /> */}
        </a>
      </div>

      <h2 className="font-semibold">YKF IT Solutions</h2>

      <p className="mt-2 text-sm">#200, 808 4th Ave SW, Calgary AB T2P 3E8</p>
      <p className="mt-1 text-sm">403-363-8474</p>

      <p className="mt-4 text-xs text-gray-800">
        Copyright © ykfitsolutions - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
