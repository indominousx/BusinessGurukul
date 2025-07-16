import React from 'react';
import ValuePointCard from './ValuePointCard';
import './TrustSection.css';

// Using placeholder icons for now. You can replace these with actual SVG icons or images
// from your assets folder when available
const allInOneIcon = "https://i.postimg.cc/j51RMxSN/workforce.jpg";
const executionDrivenIcon = "https://i.postimg.cc/YC801wYN/execution.jpg";
const midSegmentIcon = "https://i.postimg.cc/hPBt6G0b/midsegment.jpg";
const transparentIcon = "https://i.postimg.cc/ZqdkJ8b9/collaborative.jpg";

// Data array containing the 4 core value points from the document.
const valuePointsData = [
  {
    iconSrc: allInOneIcon,
    title: 'All-in-One Growth Partner',
    description: 'No more juggling multiple vendors - we offer marketing, video, tech, and consulting under one roof so your growth plan stays aligned.'
  },
  {
    iconSrc: executionDrivenIcon,
    title: 'Execution-Driven Approach',
    description: 'We don\'t just strategize - we roll up our sleeves and execute campaigns, build systems, and optimize performance with you.'
  },
  {
    iconSrc: midSegmentIcon,
    title: 'Built for Mid-Segment Businesses',
    description: 'We specialize in supporting businesses between ₹10L-₹10Cr with scalable, cost-effective, and practical solutions.'
  },
  {
    iconSrc: transparentIcon,
    title: 'Transparent & Collaborative',
    description: 'We work as your extended team, providing clear communication, measurable outcomes, and a partnership mindset from day one.'
  }
];

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-section-intro">
        <h2 className="trust-section-title">Your Trusted Growth Execution Partner</h2>
        <p className="trust-section-subtitle">
          At Business Gurukull, we don\'t just give advice - we execute. Our strength lies in 
          combining deep strategy with hands-on delivery, tailored specifically for mid-sized
          businesses looking to grow faster, smarter, and more efficiently.
        </p>
      </div>

      <div className="value-points-grid">
        {valuePointsData.map((value, index) => (
          <ValuePointCard
            key={index}
            iconSrc={value.iconSrc}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustSection; 