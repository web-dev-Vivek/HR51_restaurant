import React from 'react';

const FeatureSection = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Burger Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20 lg:mb-32">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Home of the burger...
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus our energy on making two products the absolute best they can be.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full bg-dark-green shadow-xl flex items-center justify-center p-8">
              <img 
                src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                alt="Gourmet Burger" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Lobster Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              ...and of the lobster
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We serve fresh Atlantic lobster and deliver delicious across the globe.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full bg-burgundy shadow-xl flex items-center justify-center p-8">
              <img 
                src="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                alt="Fresh Lobster" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;