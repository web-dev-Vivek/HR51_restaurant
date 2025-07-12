import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', { email, firstName, lastName });
  };

  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Elegant dining image */}
        <div className="mb-16">
          <img 
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
            alt="Elegant Dining" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Sign up for more
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay up to date with all our delicious seasonal menu, offers, wines and premium Burger & Lobster updates.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Last name *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-dark-green text-white px-8 py-3 rounded-full font-medium hover:bg-light-green transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;