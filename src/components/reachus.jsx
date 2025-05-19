import React from "react";

export default function DigitalPresenceCTA() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-600 py-16 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-lg text-white opacity-90 max-w-2xl mb-8">
        Connect with us today to discover how we can support your growth.
      </p>
      <button className="!bg-orange-500 !hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all">
        Schedule Your Free Consultation
      </button>
    </div>
  );
}
