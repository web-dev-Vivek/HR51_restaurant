import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-200 to-pink-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="font-playfair text-3xl font-semibold text-gray-900">
            Burger & Lobster
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">FAQs</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">COVID Statement</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Gift Vouchers</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Locations</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Press</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">T&Cs/Allergens</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Delivery</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">FHA</a>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Cookie Policy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Gender Pay Gap Report</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Modern Slavery Statement</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Website Terms</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Accessibility</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Manage Cookies</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 border-t border-gray-300 pt-8">
          <p>Registered in England & Wales Company 06234523</p>
          <p className="mt-2">© 2023 The B&L Group Holdings Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;