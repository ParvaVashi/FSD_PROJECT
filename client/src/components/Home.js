import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Residencies from '../components/Residencies';
import Value from '../components/Value';
import Contact from '../components/Contact';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

const Website = () => {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Main Content Area */}
      <div>
        {/* Hero Section */}
        <div className="white-gradient">
          <Hero />
        </div>

        {/* Companies Section */}
        <Companies />

        {/* Residencies Section */}
        <Residencies />

        {/* Value Proposition Section */}
        <Value />

        {/* Contact Section */}
        <Contact />

        {/* Get Started Section */}
        <GetStarted />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Website;
