import React from "react";
import Area1 from "../assets/area1.jpg";
import Area2 from "../assets/area2.jpg";
import Area3 from "../assets/area3.jpg";

const LocationsSection = () => {
  const locations = [
    {
      name: "HR51",
      description:
        "lorem45 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Area1,
      link: "View restaurant info",
    },
    {
      name: "HR51",
      description:
        "lorem45 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Area2,
      link: "View restaurant info",
    },
    {
      name: "HR51",
      description:
        "lorem45 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Area3,
      link: "View restaurant info",
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-15">
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "DM Serif Text, serif" }}
            className="font-playfair text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
          >
            Burger & Lobster
            <br />
            restaurants
          </h2>
          <p
            style={{ fontFamily: "DM Serif Text, serif" }}
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Here at Burger & Lobster, you're free to have your table manner to
            the place. Check them before reserving a table at your location.
            Ensure you bring your own flair & share. Fill it again. It's time to
            mess with your senses now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              style={{ fontFamily: "DM Serif Text, serif" }}
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3
                style={{ fontFamily: "DM Serif Text, serif" }}
                className="font-playfair text-2xl font-semibold text-gray-900 mb-3"
              >
                {location.name}
              </h3>
              <p
                style={{ fontFamily: "DM Serif Text, serif" }}
                className="text-gray-700 mb-4 h-19 leading-relaxed"
              >
                {location.description}
              </p>
              <a
                href="#"
                className="text-dark-green font-medium hover:text-light-green md:mb-10 transition-colors inline-flex items-center"
              >
                {location.link}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
