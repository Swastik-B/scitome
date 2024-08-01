import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <ServicesSection />
      <ImageSection />
      <Footer />
    </div>
  );
};

export default Home;
