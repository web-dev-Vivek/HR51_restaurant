import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import LocationsSection from './components/LocationsSection';
import PromoSection from './components/PromoSection';
import NewsletterSection from './components/NewsletterSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
      <LocationsSection />
      <PromoSection />
      <NewsletterSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;