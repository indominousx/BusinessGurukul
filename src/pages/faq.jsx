import React from "react";
import FAQ from "../components/faq";
import Footer from "../components/footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find answers to the most common questions about our digital marketing services
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <FAQ />
      </div>

      {/* Additional Help Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you with any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8999685423"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Us: 8999685423
            </a>
            <a
              href="mailto:Office@businessgurukull.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
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