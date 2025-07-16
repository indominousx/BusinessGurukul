import React, { useState } from 'react';
import DynamicEnquiryForm from './DynamicEnquiryForm';
import './HeroSection.css';
// Using an existing image from the assets folder
import heroBgImage from '../../assets/images/grow-scaled-1.jpg'; 

const   HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${heroBgImage})`
  };

  const [showSlider, setShowSlider] = useState(false);

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

      {/* Floating Button and Slider for Mobile */}
      <button
        className="slider-float-btn lg:hidden"
        onClick={() => setShowSlider(true)}
        style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 10010 }}
      >
        Claim Your Free 30-Min Strategy Call
      </button>
      {/* Overlay and Slider */}
      {showSlider && (
        <>
          <div
            className="slider-overlay lg:hidden"
            onClick={() => setShowSlider(false)}
          ></div>
          <div className={`slider-form-container lg:hidden ${showSlider ? 'open' : ''}`}>
            <button className="slider-close-btn" onClick={() => setShowSlider(false)}>&times;</button>
            <DynamicEnquiryForm />
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection; 