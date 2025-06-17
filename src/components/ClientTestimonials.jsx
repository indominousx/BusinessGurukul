import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ananya Mehta",
    role: "Marketing Manager, EcoCraft",
    project: "360° Brand Campaign",
    text: "Businness Gurukull helped us scale our brand visibility through a multi-platform strategy. We saw a 3x increase in engagement within 2 months.",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Rajesh Nair",
    role: "CTO, FinSync",
    project: "Custom Web App Development",
    text: "We needed a reliable partner for our finance dashboard, and Algorithm CAT delivered a clean, secure, and scalable platform.",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Sarah Dsouza",
    role: "Founder, BakeBloom",
    project: "Ecommerce Store & Ads",
    text: "From store design to targeted ads, their team covered it all. Super professional and responsive. Highly recommend!",
    img: "https://i.pravatar.cc/100?img=20",
  },
  {
    name: "Amit Sharma",
    role: "COO, TechNova",
    project: "Business Consulting",
    text: "Their consulting services provided invaluable insights that propelled our growth.",
    img: "https://i.pravatar.cc/100?img=23",
  },
  {
    name: "Priya Verma",
    role: "Head of Marketing, UrbanNest",
    project: "Digital Strategy Overhaul",
    text: "Business Gurukull transformed our digital strategy, leading to a 50% increase in engagement.",
    img: "https://i.pravatar.cc/100?img=28",
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        TESTIMONIALS
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="transition-opacity duration-1000 ease-in-out w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-4 border-purple-200 object-cover"
            />
            <div>
              <p className="text-gray-700 text-sm mb-3 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-semibold text-gray-900">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[current].role}
              </p>
              <p className="text-sm text-purple-600 font-medium mt-1">
                {testimonials[current].project}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dots for manual nav */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition ${
              current === i ? "!bg-purple-600" : "!bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
