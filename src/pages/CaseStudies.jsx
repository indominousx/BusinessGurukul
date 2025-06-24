import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CaseStudiesComponent from "../components/casestudies";
import LatestInsights from "../components/LatestInsights";
import Testimonials from "../components/ClientTestimonials";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="w-full bg-purple-50">
      <div className="w-full py-10 px-4 pl-4 md:pl-12 mt-6" data-aos="fade-up">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-6xl">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-800 mb-8 max-w-3xl text-left md:mb-0">
              At Business Gurukull, we don't just talk about delivering results — we prove it. Our diverse experience across industries and services has allowed us to create measurable impact for our clients. Here's a glimpse into some of our most successful projects across Digital Marketing, Video/Ads Creation, Technology Development, and Business Consulting.
            </p>
            <div className="mt-6">
              <Link to="/contact" 
              style={{ color: 'white' }}
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white visited:text-white focus:text-gray-200 active:text-gray-200 hover:text-gray-200 font-semibold px-6 py-3 rounded-lg shadow transition text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="relative overflow-hidden">
        {/* Background image behind showcased case studies */}
        <img 
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1920&q=80" 
          alt="Case Studies Background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-30" 
          style={{ pointerEvents: 'none' }}
        />
        {/* Optional: gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-purple-50/60 to-blue-50/60 z-0" />
        <div className="relative z-10">
          <CaseStudiesComponent />
        </div>
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <LatestInsights />
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies; 