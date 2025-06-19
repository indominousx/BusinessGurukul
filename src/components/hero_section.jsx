import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Award1 from "../assets/images/award1.png";
import Award2 from "../assets/images/award2.png";
import Award3 from "../assets/images/award3.png";
import Award4 from "../assets/images/award4.png";
import Award5 from "../assets/images/award5.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function HeroSection() {
  const titleRef = useScrollAnimation(0.3);
  const subtitleRef = useScrollAnimation(0.2);
  const formRef = useScrollAnimation(0.4);
  const awardsRef = useScrollAnimation(0.5);

  return (
    <div className="relative w-screen overflow-x-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 text-white gradient-animate">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-20 px-6 relative z-10">
        {/* Left Section */}
        <div className="md:w-2/3 flex flex-col justify-center space-y-6">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight fade-in text-reveal"
          >
            <span>Get More Leads.</span> <br />
            <span>Close More Sales.</span> <br />
            <span>Grow Your Business.</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl text-yellow-300 font-semibold fade-in stagger-delay-1"
          >
            India's Trusted Marketing Partner for Mid-Segment Businesses.
          </p>
          <p 
            ref={subtitleRef}
            className="text-lg text-gray-200 max-w-2xl fade-in stagger-delay-2"
          >
            Done-for-you marketing & lead generation systems built for Indian
            businesses by experts who deliver results.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-4 fade-in stagger-delay-3">
            {[
              {
                label: " Book Free Strategy Call",
                onClick: () => alert("SEO services coming soon!"),
              },
            ].map((tag) => (
              <button
                key={tag.label}
                onClick={tag.onClick}
                className="!bg-yellow-400 hover:!bg-yellow-300 !text-purple-900 font-semibold px-5 py-2 !rounded-full transition-all duration-300 !shadow-md btn-animate hover-lift"
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Trust Badges */}
          <div 
            ref={awardsRef}
            className="flex flex-wrap gap-5 items-center mt-6 fade-in stagger-delay-4"
          >
            <img src={Award1} alt="Clutch" className="h-12 hover-scale transition-transform duration-300" />
            <img src={Award2} alt="Award" className="h-12 hover-scale transition-transform duration-300" />
            <img src={Award3} alt="Top IT" className="h-12 hover-scale transition-transform duration-300" />
            <img src={Award4} alt="WARC" className="h-12 hover-scale transition-transform duration-300" />
            <img src={Award5} alt="Gold" className="h-12 hover-scale transition-transform duration-300" />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div 
          ref={formRef}
          className="md:w-1/3 mt-10 md:mt-0 bg-white text-black rounded-xl shadow-xl p-8 backdrop-blur-xl transform hover:scale-105 transition-transform duration-300 card-animate slide-in-right"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 fade-in">
            Claim Your Free 30-Min Free Strategy Call
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
            />
            <input
              type="email"
              placeholder="Business Email Address*"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
            />
            <div className="w-full">
              <PhoneInput
                country={"in"}
                enableSearch
                placeholder="Enter phone number"
                inputClass="!w-full py-2 px-3 text-base rounded border-none focus:outline-none"
                containerClass="w-full border rounded focus-within:ring-2 focus-within:ring-purple-500 transition-all duration-300"
                buttonClass="bg-white border-r"
              />
            </div>
            <input
              type="text"
              placeholder="Organization/ Institution*"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
            />
            <div className="relative w-full">
              <select
                className="w-full border px-3 pr-10 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Service*
                </option>
                <option value="Social Media">Social Media</option>
                <option value="Ads">Ads</option>
                <option value="CRM">CRM</option>
                <option value="Video">Video</option>
                <option value="Consultation">Consultation</option>
              </select>

              {/* Custom down arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <textarea
              placeholder="Message*"
              className="w-full border px-3 py-2 rounded h-20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
            />
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="audit"
                name="audit"
                className="mt-1 accent-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="audit" className="text-sm text-gray-700">
                I want a free marketing audit of my current strategy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r !from-orange-500 !to-orange-600 !hover:from-orange-600 !hover:to-orange-700 !text-white font-bold py-2 rounded-full shadow-md transition-all duration-300 btn-animate hover-lift"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Bottom Shape */}
      {/* <div
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)" }}
      ></div> */}
    </div>
  );
}
