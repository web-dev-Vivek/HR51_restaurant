import React, { useState } from "react";
import LOGO from "../assets/logo.png"; // adjust path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-0 md:h-[12vh]">
        {/* Logo */}
        <div className="bg-white rounded-full p-2">
          <img src={LOGO} alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#locations"
            className="hover:text-gray-400 font-semibold transition"
          >
            Locations
          </a>
          <a
            href="#menu"
            className="hover:text-gray-400 font-semibold transition"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 font-semibold transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 font-semibold transition"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Book your Table
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-6">
          <nav className="flex flex-col space-y-4 mt-4 text-center">
            <a href="#locations" className="hover:text-gray-300 transition">
              Locations
            </a>
            <a href="#menu" className="hover:text-gray-300 transition">
              Menu
            </a>
            <a href="#about" className="hover:text-gray-300 transition">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition mx-auto mt-4">
              Book your Table
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
