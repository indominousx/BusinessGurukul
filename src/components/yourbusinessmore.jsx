import React from "react";

export default function YourBusinessMore() {
  return (
    <section className="bg-cover bg-center bg-fixed">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-violet-900 mb-12 drop-shadow-lg">
          What Makes Business Gurukull Different?
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-violet-300 ">
            <div className="bg-gradient-to-tr from-violet-700 to-violet-400 p-4 rounded-full mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
              🏆
            </div>
            <h3 className="text-xl font-bold text-violet-800 mb-2 text-center">
              Proven Track Record
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              500+ Projects delivered successfully with measurable results.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-violet-300 ">
            <div className="bg-violet-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
              🎯
            </div>
            <h3 className="text-xl font-bold text-violet-800 mb-2 text-center">
              Results-Oriented Strategies
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              We focus on strategies that drive real business growth and ROI.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-violet-300 ">
            <div className="bg-gradient-to-tr from-violet-700 to-violet-400 p-4 rounded-full mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-violet-800 mb-2 text-center">
              CRM & Funnel Setup for You
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Complete CRM and sales funnel implementation tailored to your
              business.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-violet-300 ">
            <div className="bg-gradient-to-tr from-violet-400 to-violet-700 p-4 rounded-full mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
              🔍
            </div>
            <h3 className="text-xl font-bold text-violet-800 mb-2 text-center">
              100% Transparent Communication
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Stay updated with clear, honest, and regular communication.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-violet-300 ">
            <div className="bg-gradient-to-tr from-violet-700 to-violet-400 p-4 rounded-full mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
              📝
            </div>
            <h3 className="text-xl font-bold text-violet-800 mb-2 text-center">
              Personalized Growth Plan
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Custom strategies designed for your unique business goals.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-violet-300 ">
            <div className="bg-gradient-to-tr from-violet-400 to-violet-700 p-4 rounded-full mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
              👤
            </div>
            <h3 className="text-xl font-bold text-violet-800 mb-2 text-center">
              Dedicated Account Manager
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              One point of contact for all your needs and queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
