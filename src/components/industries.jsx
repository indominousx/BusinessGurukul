import { useState, useEffect, useRef } from "react";

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
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const total = industries.length;

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-transparent text-white" style={{ overflowX: 'hidden' }}>
      <div
        className="w-full h-[600px] flex flex-col lg:flex-row items-center justify-center shadow-2xl"
        style={{ background: "#123524", borderRadius: 0 }}
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white px-8 h-full">
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
        <div
          className="w-full lg:w-1/2 relative flex items-center justify-center h-full"
          style={{ perspective: "1200px" }}
          ref={carouselRef}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="relative w-full h-96 flex items-center justify-center overflow-visible">
            {industries.map((industry, index) => {
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
                opacity = 0.5;
              }

              return (
                <div
                  key={index}
                  className="absolute w-64 h-80 transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    transition: "all 0.7s ease-in-out",
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
                  prev <= 0 ? total - 1 : prev - 1
                )
              }
            >
              &#8249;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg z-30"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev >= total - 1 ? 0 : prev + 1
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
