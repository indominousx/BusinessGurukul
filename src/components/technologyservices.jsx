import React from "react";

export default function TechnologyDevelopmentServices() {
  const services = [
    {
      icon: "💻",
      title: "Website Development",
      desc: "Get a fast, responsive, and SEO-optimized website designed to convert visitors into customers.",
    },
    {
      icon: "🛠️",
      title: "Custom Software Development",
      desc: "Build tailor-made software solutions that solve specific business problems and streamline operations.",
    },
    {
      icon: "📊",
      title: "ERP Development",
      desc: "Develop robust ERP systems to centralize data, automate workflows, and boost operational efficiency.",
    },
    {
      icon: "📇",
      title: "CRM Development",
      desc: "Design custom CRM systems that improve lead management, customer tracking, and sales performance.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Launch user-friendly Android and iOS apps that enhance engagement, loyalty, and business functionality.",
    },
    {
      icon: "🛒",
      title: "E-commerce Development",
      desc: "Build secure, scalable online stores with seamless checkout experiences and modern user interfaces.",
    },
    {
      icon: "🧭",
      title: "Landing Page Development",
      desc: "Create high-converting landing pages for ads, campaigns, and product launches that generate real results.",
    },
    {
      icon: "🧰",
      title: "Tech Maintenance & Support",
      desc: "Keep your digital infrastructure running smoothly with proactive tech support and maintenance services.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Technology Development Services
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
              <h3 className="text-xl font-bold text-gray-900 mb-1 text-left w-full">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm text-left w-full">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
