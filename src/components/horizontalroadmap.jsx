import React from "react";

const roadmap = [
  {
    number: "1",
    title: "Strategy Development",
    description: "We analyze your business needs and create a tailored strategy."
  },
  {
    number: "2",
    title: "Content Creation",
    description: "Engaging content is crafted to connect with your audience."
  },
  {
    number: "3",
    title: "Campaign Execution",
    description: "We launch and manage campaigns across multiple platforms."
  },
  {
    number: "4",
    title: "Performance Analysis",
    description: "Results are measured and strategies are refined for improvement."
  }
];

export default function RoadmapHorizontal() {
  return (
    <div className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Your Roadmap to Digital Success
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
        At Business Gurukull, we combine strategic thinking with hands-on execution.
       We take time to deeply understand your business, your customers, and your market.
       Then, using a collaborative and transparent process, we create tailored solutions that drive real growth.
       We don't just work for you — we work with you. Together, we build a roadmap for success that
       is clear, actionable, and results-driven.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-blue-200 z-0" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 z-10 relative">
          {roadmap.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs mx-auto"
            >
              <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mb-4 text-lg z-10 relative">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
