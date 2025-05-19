import { useState, useEffect } from "react";

const slides = [
  {
    number: "01",
    title: "Customized Solutions",
    description:
      "No one-size-fits-all approach. Everything we offer is tailored to your business.",
  },
  {
    number: "02",
    title: "Proven Expertise",
    description:
      "With years of experience, we understand the challenges and opportunities businesses face.",
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "From strategy to execution, we are your growth partners at every step.",
  },
  {
    number: "04",
    title: "Result-Oriented Approach",
    description:
      "Our success is measured by your success — we are driven by results, not just reports.",
  },
];

export default function WhyUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
        Why Choose Us as Your Extended Digital Marketing Team
      </h2>
      <div className="flex flex-col lg:flex-row w-full h-auto py-10 px-6 lg:px-16 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        {/* Left side */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Why Choose Us as Your Extended Digital Marketing Team
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed opacity-90">
            Our skilled digital marketing experts understand unique business
            needs, craft tailored solutions, and focus on growing your digital
            success while maximizing your ROI.
          </p>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 relative flex justify-center items-center  rounded-2xl  p-8">
          {/* Card */}
          <div
            className="bg-gradient-to-b from-purple-100 to-white p-6 rounded-2xl shadow-md w-full max-w-md text-center transform transition-transform duration-500"
            key={currentSlide}
          >
            <div className="text-6xl font-extrabold text-purple-500 mb-2">
              {slides[currentSlide].number}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {slides[currentSlide].title}
            </h3>
            <p className="text-gray-600 text-lg">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* /* Navigation Buttons  */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 !bg-purple-500 text-white p-2 rounded-full shadow-lg !hover:bg-purple-600 transition duration-300"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 !bg-purple-500 text-white p-2 rounded-full shadow-lg !hover:bg-purple-600 transition duration-300"
            onClick={nextSlide}
          >
            &#8250;
          </button>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-purple-500" : "bg-gray-300"
                } transition duration-300`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
