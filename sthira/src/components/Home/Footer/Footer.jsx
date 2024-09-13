import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-6 font-sans">
      <nav className="flex justify-between items-center py-4">
        <div className="text-lg">My Account</div>
        <div className="flex items-center space-x-4">
          <div>EN</div>
          <div className="text-2xl">☰</div>
        </div>
      </nav>

      <div className="flex justify-around my-8">
        <div className="text-center">
          <h1 className="text-4xl">1k</h1>
          <p>Active Users</p>
          <div className="bg-green-500 h-1 mt-2 w-full"></div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">70%</h1>
          <p>have experienced improvement</p>
          <div className="bg-blue-500 h-1 mt-2 w-full"></div>
        </div>
      </div>

      <form className="flex justify-center my-8">
        <input type="email" placeholder="Email Address" className="p-2 rounded-l-md" />
        <button type="submit" className="bg-blue-600 p-2 rounded-r-md">Subscribe to Newsletters</button>
      </form>

      <div className="flex justify-center space-x-4 my-8">
      <FaFacebook size={20} />
      <FaInstagram size={20} />
      <FaXTwitter size={20} />
      <FaLinkedinIn size={20} />
      </div>

      <footer className="text-center mt-8">
        <p>© Studios | All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Sitemap</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
