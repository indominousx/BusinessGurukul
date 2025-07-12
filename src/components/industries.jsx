import { useState, useEffect } from "react";

import realEstateImg from "../assets/images/In-realestate.webp";
import solarImg from "../assets/images/Manufacturing-indus.png";
import educationImg from "../assets/images/In-technology.avif";
import healthImg from "../assets/images/SEO-for-USA-Based-Home-Decor-Brand-to-Secure-Revenue-Drive-Conversion@2x.png";
import manufacturingImg from "../assets/images/SEO-for-USA-Based-Home-Decor-Brand-to-Secure-Revenue-Drive-Conversion@2x.png";

const industries = [
  { title: "Real Estate", image: realEstateImg },
  { title: "Solar Energy", image: solarImg },
  { title: "Education Sector", image: educationImg },
  { title: "Health Sector", image: healthImg },
  { title: "Manufacturer", image: manufacturingImg },
];

export default function IndustriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent text-white">
      <div className="w-11/12 max-w-7xl p-10 flex flex-col lg:flex-row items-center justify-center shadow-2xl" style={{ background: '#123524', borderRadius: '1.5rem' }}>
        {/* Left Content */}
        <div className="lg:w-2/5 flex flex-col justify-center text-white pr-6 mb-10 lg:mb-0">
          <h2 className="text-4xl font-extrabold mb-6">Industries We Cater</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
            From local startups to established enterprises, Business Gurukull
            empowers a wide range of industries with customized digital, video,
            tech, and consulting solutions.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm">
            We understand that each industry has unique challenges—and that’s
            why we don’t believe in one-size-fits-all strategies. Our team
            brings deep domain knowledge, innovative thinking, and practical
            execution to help businesses across sectors grow faster, operate
            smarter, and market better in today's competitive landscape.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full w-fit hover:from-orange-600 hover:to-orange-700 shadow-lg transform hover:scale-105 transition-transform">
            View All
          </button>
        </div>

        {/* Right Carousel */}
        <div className="lg:w-3/5 relative flex items-center justify-center" style={{ perspective: "1200px" }}>
          <div className="relative w-full h-96 flex items-center justify-center overflow-visible">
            {industries.map((industry, index) => {
              const total = industries.length;
              const prev = (currentSlide - 1 + total) % total;
              const next = (currentSlide + 1) % total;

              let transform = "translateX(200%) scale(0.8) rotateY(40deg)";
              let zIndex = 1;
              let opacity = 0;

              if (index === currentSlide) {
                transform = "translateX(0%) scale(1) rotateY(0deg)";
                zIndex = 3;
                opacity = 1;
              } else if (index === prev) {
                transform = "translateX(-80%) scale(0.8) rotateY(-30deg)";
                zIndex = 2;
                opacity = 0.5;
              } else if (index === next) {
                transform = "translateX(80%) scale(0.8) rotateY(30deg)";
                zIndex = 2;
                opacity = 0.8;
              }

              return (
                <div
                  key={index}
                  className="absolute w-64 h-80 transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                  <p className="text-center text-orange-500 font-bold mt-2">
                    {industry.title}
                  </p>
                </div>
              );
            })}

            {/* Navigation */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg z-30"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev <= 0 ? industries.length - 1 : prev - 1
                )
              }
            >
              &#8249;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg z-30"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev >= industries.length - 1 ? 0 : prev + 1
                )
              }
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
