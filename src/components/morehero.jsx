import React from "react";

export default function MoreHero() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Significant Boost to Your Business with Digital Marketing
            Company
          </h2>
          <p className="text-gray-700 mb-4">
            Business Gurukull is the right strategic digital marketing agency to
            provide you with a solution that brings the desired digital presence
            to your business.
          </p>
          <p className="text-gray-700">
            From lead generation and brand awareness to customer acquisition and
            retention, our digital marketing company does it all for you.
          </p>
        </div>

        {/* Right Side: Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: "💼", number: "22+", label: "Years of Experience" },
            { icon: "🏅", number: "50+", label: "Top Brands Served" },
            {
              icon: "👍",
              number: "300+",
              label: "Industry-best Professionals",
            },
            { icon: "😊", number: "100+", label: "Happy Clients" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center"
            >
              <div className="text-purple-800 text-4xl mb-2">{item.icon}</div>
              <div className="text-purple-800 text-2xl font-bold">
                {item.number}
              </div>
              <p className="text-gray-800 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
