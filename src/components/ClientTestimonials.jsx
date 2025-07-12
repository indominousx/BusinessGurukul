import React, { useEffect, useState } from "react";
import { Star } from "lucide-react"; // Optional: You can use any star icon or SVG

const testimonials = [
  {
    name: "Rajesh Wagh",
    role: "Director",
    business: "SolarGreen Energy Pvt. Ltd.",
    rating: 5,
    text: "Business Gurukull helped us generate qualified solar leads in a saturated market. Within 30 days, we saw a 3x ROI on our ad spend and gained complete clarity on our sales process.",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Mehra",
    role: "Co-Founder",
    business: "Lush Interiors",
    rating: 5,
    text: "We worked with many agencies before, but Business Gurukull was the first that actually delivered strategy and execution. Their digital campaigns and consulting boosted our online inquiries and streamlined operations.",
    img: "https://i.pravatar.cc/100?img=21",
  },
  {
    name: "Aman Kapoor",
    role: "Founder",
    business: "PureMoo Dairy Products",
    rating: 4.5,
    text: "Their understanding of mid-segment businesses is on point. They helped us launch our new line with branding, a sales funnel, and local market targeting — all in just 3 weeks.",
    img: "https://i.pravatar.cc/100?img=45",
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <div className="flex gap-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
        {halfStar && <Star size={16} fill="currentColor" className="opacity-50" />}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
        Client Experiences with Business Gurukull
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Our success is measured by the growth of our clients. Here’s what some of our partners
        have to say about working with Business Gurukull — from digital breakthroughs to
        operational excellence.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="transition-opacity duration-1000 ease-in-out w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-4 border-purple-200 object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-gray-700 text-sm mb-3 italic">
                “{testimonials[current].text}”
              </p>
              <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
              <div className="text-sm text-gray-500">
                {testimonials[current].role}, {testimonials[current].business}
              </div>
              <div className="mt-2">{renderStars(testimonials[current].rating)}</div>
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
            className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
              current === i ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
