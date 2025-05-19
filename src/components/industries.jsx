import { useState, useEffect } from "react";

import bankingImage from "../assets/images/Manufacturing-indus.png";
import foodImage from "../assets/images/In-entertainment.webp";
import healthcareImage from "../assets/images/In-technology.avif";
import manufacturingImage from "../assets/images/In-realestate.webp";
import travelImage from "../assets/images/In-travel.webp";

const industries = [
  { title: "Banking", image: bankingImage },
  { title: "Food and Beverages", image: foodImage },
  { title: "Healthcare", image: healthcareImage },
  { title: "Manufacturing", image: manufacturingImage },
  { title: "Travel", image: travelImage },
];

export default function IndustriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(4);

  useEffect(() => {
    const updateImagesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setImagesPerView(1); // Mobile
      else if (width < 1024) setImagesPerView(2); // Tablet
      else if (width < 1280) setImagesPerView(3); // Small desktop
      else setImagesPerView(4); // Large desktop
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(industries.length / imagesPerView)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesPerView]);

  return (
    <div className="flex">
      <div className="w-1/20"></div>
      <div className="w-19/20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-l-3xl p-8 flex flex-col lg:flex-row overflow-hidden shadow-lg">
        {/* Left Content */}
        <div className="lg:w-1/3 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-extrabold mb-6">Industries We Cater</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Our digital marketing solutions meet the needs of various
            industries. With advanced techniques, our digital marketing agency
            helps in Healthcare, Finance, Education, Retail, Travel, and
            Automotive to enhance customer engagement, streamline operations,
            and drive growth.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full w-fit hover:from-orange-600 hover:to-orange-700 shadow-lg transform hover:scale-105 transition-transform">
            View All
          </button>
        </div>

        {/* Right Slideshow */}
        <div className="lg:w-2/3 mt-8 lg:mt-0 relative flex items-center justify-center">
          <div className="w-full h-96 overflow-hidden relative rounded-2xl shadow-2xl flex">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentSlide * 100) / imagesPerView
                }%)`,
              }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/4 h-full relative px-4"
                  style={{ width: `${100 / imagesPerView}%` }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-center text-xs">
                    <p className="text-orange-500 font-bold text-lg">
                      {industry.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg transition-transform hover:scale-110"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev <= 0
                  ? Math.ceil(industries.length / imagesPerView) - 1
                  : prev - 1
              )
            }
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg transition-transform hover:scale-110"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev >= Math.ceil(industries.length / imagesPerView) - 1
                  ? 0
                  : prev + 1
              )
            }
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
