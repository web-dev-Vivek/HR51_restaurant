import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex md:h-[12vh] items-center justify-between">
        {/* Logo */}
        <div className="font-playfair text-2xl font-semibold">
          Burger & Lobster
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#locations"
            className="hover:text-gray-300 transition-colors"
          >
            Locations
          </a>
          <a href="#menu" className="hover:text-gray-300 transition-colors">
            Menu
          </a>
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Find A Table Button */}
        <div className="hidden md:block">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Find A Table
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <a
              href="#locations"
              className="py-2 hover:text-gray-300 transition-colors"
            >
              Locations
            </a>
            <a
              href="#menu"
              className="py-2 hover:text-gray-300 transition-colors"
            >
              Menu
            </a>
            <a
              href="#about"
              className="py-2 hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors mt-4 w-fit">
              Find A Table
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
