import React from 'react';

const HeroSection = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Circular Logo Area */}
        <div className="relative mb-12">
          <div className="w-64 h-64 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center hero-circle">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-200 to-red-300 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="Lobster" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Curved Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-playfair text-lg font-medium text-gray-700 transform -rotate-12 absolute -top-8 -left-16">
              Welcome to
            </div>
            <div className="font-playfair text-lg font-medium text-gray-700 transform rotate-12 absolute -bottom-8 -right-16">
              Burger & Lobster
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-dark-green text-white px-8 py-3 rounded-full font-medium hover:bg-light-green transition-colors">
            Book A Table
          </button>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;