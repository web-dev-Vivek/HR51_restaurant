import React from "react";
import item1 from "../assets/3.jpg";

const FeatureSection = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Burger Section */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center mb-20 lg:mb-10">
          <div className="lg:w-1/2 lg:pr-12 lg:mb-0">
            <h2
              style={{ fontFamily: "Winky Rough, cursive" }}
              className="font-playfair text-4xl md:text-6xl font-semibold text-gray-900 mb-2"
            >
              Home of the lovely...
            </h2>
            <p
              style={{ fontFamily: "Oswald, sans-serif" }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              We focus our energy on making two products the absolute best they
              can be.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-90 h-96 rounded-t-full bg-dark-green shadow-xl flex items-center justify-center ">
              <img
                src={item1}
                alt="Gourmet Burger"
                className="w-full h-full rounded-t-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Lobster Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
            <h2
              style={{ fontFamily: "Winky Rough, cursive" }}
              className="font-playfair text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
            >
              ...and tasty Dishes.
            </h2>
            <p
              style={{ fontFamily: "Oswald, sans-serif" }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              We serve fresh Atlantic lobster and deliver delicious across the
              globe.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-90 h-96 rounded-t-full bg-dark-green shadow-xl flex items-center justify-center ">
              <img
                src={item1}
                alt="Gourmet Burger"
                className="w-full h-full rounded-t-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
