import React from "react";

export default function VideoAdsServices() {
  const services = [
    {
      icon: "🎬",
      title: "Corporate Video Creation",
      desc:
        "Tell your brand story with impactful corporate videos that build trust and communicate your value clearly.",
    },
    {
      icon: "📣",
      title: "Digital Ads Creation",
      desc:
        "Create scroll-stopping ad creatives and video campaigns that drive clicks, leads, and conversions.",
    },
    {
      icon: "🎞️",
      title: "Reels & Short Video Creation",
      desc:
        "Engage your audience with trending, platform-optimized short videos and reels tailored for Instagram, Facebook, and YouTube Shorts.",
    },
    {
      icon: "🗓️",
      title: "Content Management Service",
      desc:
        "From ideation to publishing, we manage your content calendar and ensure consistent brand communication.",
    },
    {
      icon: "🎥",
      title: "Documentary Creation",
      desc:
        "Highlight your business journey, success story, or impact with professionally produced documentary-style videos.",
    },
    {
      icon: "🎙️",
      title: "Podcast Creation Service",
      desc:
        "Launch your own podcast — we handle recording, editing, branding, and distribution across major platforms.",
    },
    {
      icon: "📸",
      title: "Product Shoot Service",
      desc:
        "Present your products with high-quality images and videos that showcase their best features across digital channels.",
    },
    {
      icon: "▶️",
      title: "YouTube Channel Management",
      desc:
        "Grow your YouTube presence with complete channel setup, content strategy, video editing, and SEO optimization.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Video & Ads Services
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
