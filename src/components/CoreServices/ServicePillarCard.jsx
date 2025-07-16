import React from 'react';
import './CoreServicesGrid.css'; // Shares the stylesheet with its parent

// This component is designed to be reusable for each service pillar.
// It accepts props for the icon, title, description, and link.
const ServicePillarCard = ({ iconSrc, title, description, ctaLink }) => {
  return (
    <div className="service-pillar-card">
      <div className="card-icon-container">
        <img 
          src={iconSrc} 
          alt={`${title} icon`} 
          className="card-icon" 
          style={{ width: 150, height: 150, objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={ctaLink} className="card-cta-link">
        Explore Service →
      </a>
    </div>
  );
};

export default ServicePillarCard; 