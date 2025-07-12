import React from 'react';

const LocationsSection = () => {
  const locations = [
    {
      name: "London",
      description: "Visit restaurants about London for a truly unique and exciting way to Burger & Lobster B-L is open 7 days a week.",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      link: "View restaurant info"
    },
    {
      name: "Brighton", 
      description: "Seafood lovers can find spectacular cuisine from the most London & Brighton where fresh fish for the day.",
      image: "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      link: "View restaurant info"
    },
    {
      name: "New York",
      description: "Our food and location combine to make the NY Apple a world-wide known.",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", 
      link: "View restaurant info"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Burger & Lobster<br />restaurants
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Here at Burger & Lobster, you're free to have your table manner to the place. Check them before reserving a table at your location. Ensure you bring your own flair & share. Fill it again. It's time to mess with your senses now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                {location.name}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {location.description}
              </p>
              <a 
                href="#" 
                className="text-dark-green font-medium hover:text-light-green transition-colors inline-flex items-center"
              >
                {location.link}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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