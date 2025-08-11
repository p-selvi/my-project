import React from 'react';
import InnerBanner from '../components/inner-banner';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import OffersSection from '../components/OffersSection';
import GridShowcase from '../components/GridShowcase';
import InfoBlock from '../components/InfoBlock';
import Variations from '../components/Variations';
import CallToAction from '../components/CallToAction';
import LearnMore from '../components/LearnMore';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <InnerBanner title="Contact" />
      <OffersSection />
      <Contact />
    </>
  );
};

export default ContactPage;
