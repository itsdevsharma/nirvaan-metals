import React from 'react';
import HeroSection from './components/HeroSection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import ContactConsultation from 'pages/contact-consultation';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CapabilitiesGrid />
      <ContactConsultation />
    </div>
  );
};

export default Homepage;