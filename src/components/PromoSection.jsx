import React from "react";
import paneer from "../assets/Paneer Butter Masala.png";

const PromoSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-l mb-20 from-orange-300 to-orange-200 ">
      <div className="max-w-7xl mx-auto py-15">
        <div className="flex flex-col lg:flex-row items-center px-6">
          <div className="lg:w-3/4 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Unique Flavors, Only at HR51 Restaurant.
            </h2>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                View Menu
              </button>
            </div>
          </div>
          <div className="min-h-1/2 flex">
            <div className="bg-dark-green">
              <img
                src={paneer}
                alt="Delicious Food Spread"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
