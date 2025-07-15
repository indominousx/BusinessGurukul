import React from 'react';
import ServicePillarCard from './ServicePillarCard';
import './CoreServicesGrid.css';

// For now, using placeholder icons. You can replace these with actual SVG icons or images
// from your assets folder when available
const digitalMarketingIcon = "https://i.postimg.cc/DZ7VdTzP/digitalmarketingimage.jpg";
const videoAdsIcon = "https://i.postimg.cc/prZ1WhQw/videoorads.webp";
const techDevIcon = "https://i.postimg.cc/zfCwYmFM/technologyimages.jpg";
const consultingIcon = "https://i.postimg.cc/SNHcXQZ3/businessconsulting.jpg";

// Data for the four service pillars, as specified in the document.
const servicesData = [
  {
    iconSrc: digitalMarketingIcon,
    title: 'Digital Marketing',
    description: 'Get more visibility, qualified leads, and consistent growth with performance-driven marketing strategies.',
    ctaLink: '/services/digital-marketing'
  },
  {
    iconSrc: videoAdsIcon,
    title: 'Video & Ads Creation',
    description: 'Engage your audience and drive conversions through powerful videos, ad creatives, and branded content.',
    ctaLink: '/services/video-ads'
  },
  {
    iconSrc: techDevIcon,
    title: 'Technology Development',
    description: 'Build high-performing websites, apps, and custom systems that streamline operations as you scale.',
    ctaLink: '/services/tech-development'
  },
  {
    iconSrc: consultingIcon,
    title: 'Business Consulting',
    description: 'Solve real business challenges with expert guidance on strategy, operations, sales, and systems.',
    ctaLink: '/services/business-consulting'
  }
];

const CoreServicesGrid = () => {
  return (
    <section className="core-services-section">
      <div className="section-container">
        {/* Left side with text content */}
        <div className="services-left-side">
          <h2 className="services-h1">Business Gurukull: Your End-to-End Business Growth Partner.</h2>
          <h3 className="services-h2">Who We Help & How We Deliver Results.</h3>
          <p className="services-paragraph">
            At Business Gurukull, we partner with ambitious businesses to help them scale faster
            through tailored digital strategies, innovative technology solutions, impactful video
            content, and expert business consulting – all under one roof.
          </p>
        </div>
        
        {/* Right side with the 4-pillar grid */}
        <div className="services-right-side">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServicePillarCard
                key={index}
                iconSrc={service.iconSrc}
                title={service.title}
                description={service.description}
                ctaLink={service.ctaLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesGrid; 