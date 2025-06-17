import React from "react";
import { Link } from "react-router-dom";
import CaseStudiesComponent from "../components/casestudies";
import LatestInsights from "../components/LatestInsights";
import Testimonials from "../components/ClientTestimonials";
import Footer from "../components/footer";
const CaseStudies = () => {
  return (
    <div className="w-full bg-purple-50">
      <div className="w-full py-10 px-4 pl-4 md:pl-12 mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-6xl">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-800 mb-8 max-w-3xl text-left md:mb-0">
              At Business Gurukull, we don't just talk about delivering results — we prove it. Our diverse experience across industries and services has allowed us to create measurable impact for our clients. Here's a glimpse into some of our most successful projects across Digital Marketing, Video/Ads Creation, Technology Development, and Business Consulting.
            </p>
            <Link to="/about" 
            style={{ color: 'white' }}
            className="inline-block bg-black hover:bg-gray-600 text-white visited:text-white focus:text-gray-200 active:text-gray-200 hover:text-gray-200 font-bold px-6 py-3 rounded-lg shadow transition mb-8">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <CaseStudiesComponent />
      <Testimonials />
      <LatestInsights />
      <Footer />
    </div>
  );
};

export default CaseStudies; 