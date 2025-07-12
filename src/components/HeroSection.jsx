import React from "react";

const HeroSection = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Circular Logo Area */}
        <div className="relative m-12">
          <div className="w-80 h-96 mx-auto rounded-t-full bg-red-600  flex items-center justify-center hero-circle"></div>
        </div>

        {/* Action Buttons */}
        <div class="flex flex-col md:flex-row gap-5 mt-10 items-center justify-center">
          <button class="bg-[#4e6e27] text-white px-6 py-3 w-[70vw] md:w-[17vw] rounded-full text-base">
            Book a table
          </button>
          <button class="bg-[#121212] text-white px-6 py-3 w-[70vw] md:w-[17vw] rounded-full text-base">
            View menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
