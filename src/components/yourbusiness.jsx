import React from "react";

export default function YourBusiness() {
  const services = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Build a strong online presence and engage your audience with consistent, creative content across all social platforms.",
    },
    {
      icon: "🎯",
      title: "Lead Generation Services",
      desc: "Drive qualified leads with conversion-optimized campaigns built for your specific industry and business goals.",
    },
    {
      icon: "🔍",
      title: "Search Engine Marketing (Google Ads)",
      desc: "Appear where it matters — on top of Google — with targeted paid ads that deliver measurable ROI.",
    },
    {
      icon: "⚙️",
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your website's visibility and ranking on Google with on-page and off-page SEO strategies that work.",
    },
    {
      icon: "✍️",
      title: "Content Marketing",
      desc: "Attract, inform, and convert your audience with value-rich blogs, articles, and landing pages tailored to your brand voice.",
    },
    {
      icon: "🎥",
      title: "Video Marketing",
      desc: "Boost engagement and brand awareness through creative video content, reels, and ads made for digital platforms.",
    },
    {
      icon: "📧",
      title: "Email Marketing",
      desc: "Nurture leads and stay top-of-mind with high-performing email campaigns built to drive action.",
    },
    {
      icon: "🤝",
      title: "Influencer Marketing",
      desc: "Leverage niche influencers to amplify your brand’s reach, credibility, and conversions.",
    },
    {
      icon: "📋",
      title: "Marketing Strategy & Consultation",
      desc: "Get a custom growth plan and performance strategy designed by experts who understand mid-segment businesses.",
    },
  ];

  return (
    <section className="bg-[url('/your-background.png')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Why Your Business Needs Digital Marketing Services?
        </h2>

        {/* 9 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl"
            >
              <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-left w-full">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm text-left w-full">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
