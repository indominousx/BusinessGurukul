import React from "react";
import FAQ from "../components/faq";
import Footer from "../components/footer";

// You can replace this with your own image URL or import
const HERO_IMAGE_URL = "https://i.postimg.cc/SsSTqxwY/lightwavetransition.jpg";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-12 md:py-16 lg:py-20 flex-shrink-0 overflow-hidden">
        {/* Background image with 50% opacity */}
        <img
          src={HERO_IMAGE_URL}
          alt="FAQ Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        />
        {/* Black overlay for extra contrast (optional, can adjust opacity) */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Find answers to the most common questions about our digital marketing services
          </p>
        </div>
      </div>

      {/* FAQ Section - now plain background */}
      <div className="flex-1 bg-white py-1 md:py-8 lg:py-1">
        <FAQ />
      </div>

      {/* Additional Help Section */}
      <div className="bg-white py-6 md:py-2 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our team is here to help you with any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="tel:8999685423"
              className="bg-blue-600 hover:bg-blue-700 !text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors duration-200 text-base md:text-lg w-full sm:w-auto text-center"
            >
              Call Us: 8999685423
            </a>
            <a
              href="mailto:office@businessgurukull.com"
              className="bg-purple-600 hover:bg-purple-700 !text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors duration-200 text-base md:text-lg w-full sm:w-auto text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 