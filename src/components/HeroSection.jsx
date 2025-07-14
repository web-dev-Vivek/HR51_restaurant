import React from "react";
import Chef from "../assets/chef.jpg";

const HeroSection = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-4xl mx-auto text-center mb-20">
        {/* Circular Logo Area */}
        <div className="relative m-5 ">
          <div className="w-96 h-110 rounded-t-full mx-auto bg-red-600 object-contain overflow-hidden">
            <img
              src={Chef}
              className="w-full h-full  object-cover"
              alt="Chef"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div class="flex flex-col md:flex-row gap-5 mt-10 items-center justify-center">
          <button class="bg-yellow-500 text-black px-6 py-3 w-[70vw] md:w-[17vw] rounded-full text-base">
            Book a table
          </button>
          <button class="bg-black text-white px-6 py-3 w-[70vw] md:w-[17vw] rounded-full text-base">
            View menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
