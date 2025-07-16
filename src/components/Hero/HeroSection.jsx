import React from 'react';
import DynamicEnquiryForm from './DynamicEnquiryForm';
import './HeroSection.css';
// Using an existing image from the assets folder
import heroBgImage from '../../assets/images/grow-scaled-1.jpg'; 

const   HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${heroBgImage})`
  };

  return (
    <section className="hero-section" style={sectionStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-headline">
            Empowering Your Growth with Tailored Business Solutions
          </h1>
          <p className="hero-subheadline">
            We help businesses unlock exponential growth with tailored solutions in 
            digital marketing, tech development, video creation, and business consulting.
          </p>
          <div className="hero-cta-buttons">
            <button className="cta-button primary">Explore Our Services</button>
            <button className="cta-button secondary">Get a Free Consultation</button>
          </div>
        </div>
        <div className="hero-form-container">
          <DynamicEnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 