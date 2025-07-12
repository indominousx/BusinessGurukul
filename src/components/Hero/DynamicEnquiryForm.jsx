import React, { useState } from 'react';
import './HeroSection.css';

const DynamicEnquiryForm = () => {
  // State for each form field
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    lookingFor: '', // This will hold the value from the dropdown
    requirement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName || !formData.phoneNumber) {
      alert('Please fill in your Full Name and Phone Number.');
      return;
    }
    // On successful submission, you would typically send this data to a backend API
    console.log('Form Submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you shortly.');
    // Optionally, reset the form
    setFormData({
      fullName: '', phoneNumber: '', email: '', companyName: '', lookingFor: '', requirement: ''
    });
  };

  return (
    <div className="enquiry-form-wrapper">
      <h3>Claim Your Free 30-Min Strategy Call</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name*</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="lookingFor">What Are You Looking For?</label>
          <select 
            id="lookingFor" 
            name="lookingFor" 
            value={formData.lookingFor} 
            onChange={handleChange}
          >
            <option value="" disabled>Select a service...</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Video/Ads Creation">Video/Ads Creation</option>
            <option value="Technology Development">Technology Development</option>
            <option value="Business Consulting">Business Consulting</option>
            <option value="Not Sure Yet">Not Sure Yet (Need Guidance)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="requirement">Briefly Describe Your Requirement</label>
          <textarea 
            id="requirement" 
            name="requirement" 
            rows="3" 
            value={formData.requirement} 
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Book Free Strategy Call or Get a Call Back
        </button>
      </form>
    </div>
  );
};

export default DynamicEnquiryForm; 