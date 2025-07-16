import React from "react";
import { Link } from "react-router-dom";

export default function DigitalPresenceCTA() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-600 py-16 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Scale Your Business?
      </h2>
      <p className="text-lg text-white opacity-90 max-w-2xl mb-8">
        Get expert guidance, powerful campaigns, and real results — starting
        with a FREE consultation.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link
            to="/contact"
            style={{ color: 'white' }}
            className="!bg-orange-500 !hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all"
          >
           Book Free Strategy Call
          </Link>
        <button className="!bg-orange-500 !hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all">
          Get Free Audit Report
        </button>
      </div>
    </div>
  );
}
