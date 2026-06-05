import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AppScreenshots from '../components/AppScreenshots';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <AppScreenshots />
      <Pricing />
    </main>
  );
};

export default Home;
