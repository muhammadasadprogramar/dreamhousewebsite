import React, { useState } from "react";
import { BiAlignRight, BiX } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Trip</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="mobile-menu-button transition-transform duration-300 ease-in-out"
          >
            {isMenuOpen ? (
              <BiX className="text-2xl" />
            ) : (
              <BiAlignRight className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu mt-[25px] md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
        >
          About
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
        >
          Features
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
        >
          Pricing
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
        >
          Blog
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
        >
          Contact
        </a>
        <div className="flex justify-center space-x-4 py-2">
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-green-300 hover:border-b-2 hover:border-white transition duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
