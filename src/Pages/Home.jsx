import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import OffersSection from '../components/OffersSection';
import GridShowcase from '../components/GridShowcase';
import InfoBlock from '../components/InfoBlock';
import Variations from '../components/Variations';
import CallToAction from '../components/CallToAction';
import LearnMore from '../components/LearnMore';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <AboutSection />
      <OffersSection />
      <GridShowcase />
      <InfoBlock />
      <Variations />
      <CallToAction />
      <LearnMore />
    </>
  );
};

export default Home;
