import React from "react";

export default function BusinessConsultingServices() {
  const services = [
    {
      icon: "📊",
      title: "Complete Business Consultation",
      desc: "Get end-to-end guidance to optimize your business strategy, structure, and long-term growth.",
    },
    {
      icon: "📈",
      title: "Marketing & Sales Consultation",
      desc: "Improve your lead generation, customer acquisition, and sales conversions with expert-driven strategies.",
    },
    {
      icon: "🧭",
      title: "Strategy Consultation",
      desc: "Define clear business goals, competitive positioning, and roadmaps for sustainable success.",
    },
    {
      icon: "👥",
      title: "HR & Team Consultation",
      desc: "Build efficient HR systems and attract, train, and retain the right talent to scale your operations.",
    },
    {
      icon: "⚙️",
      title: "System & Process Consultation",
      desc: "Standardize and automate your workflows with scalable systems that improve efficiency and productivity.",
    },
    {
      icon: "🌍",
      title: "Franchise/Expansion Consultation",
      desc: "Plan and execute business expansion or franchise rollouts with data-driven strategic planning.",
    },
    {
      icon: "🚀",
      title: "Startup & Launch Consultation",
      desc: "Validate your idea, create your business model, and launch strong with expert startup mentoring.",
    },
    {
      icon: "💰",
      title: "Financial Planning & Forecasting",
      desc: "Get accurate budgeting, revenue forecasting, and cost analysis to manage your business finances wisely.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Business Consulting Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl"
            >
              <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
