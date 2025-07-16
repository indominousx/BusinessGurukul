import React from 'react';
import './TrustSection.css'; // Shares the parent's stylesheet

// This component receives an icon, title, and text via props to display a single value point.
const ValuePointCard = ({ iconSrc, title, description }) => {
  return (
    <div className="value-point-card">
      <img src={iconSrc} alt={`${title} icon`} className="value-icon" style={{ width: 150, height: 150, objectFit: 'cover', display: 'block', margin: '0 auto' }} />
      <h4 className="value-title">{title}</h4>
      <p className="value-description">{description}</p>
    </div>
  );
};

export default ValuePointCard; 