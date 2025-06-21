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
    <div className="relative w-full overflow-x-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 text-white gradient-animate">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch py-10 md:py-12 px-4 md:px-6 relative z-10 gap-6">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-2 md:pl-12">
          <h1
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight fade-in text-reveal"
          >
            <span>Get More Leads.</span> <br />
            <span>Close More Sales.</span> <br />
            <span>Grow Your Business.</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-yellow-300 font-semibold fade-in stagger-delay-1"
          >
            India's Trusted Marketing Partner for Mid-Segment Businesses.
          </p>
          <p
            ref={subtitleRef}
            className="text-sm md:text-base text-gray-200 max-w-2xl fade-in stagger-delay-2"
          >
            Done-for-you marketing & lead generation systems built for Indian businesses by experts who deliver results.
          </p>

          {/* Yellow CTA Button */}
          <div className="mt-1 fade-in stagger-delay-3">
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-semibold px-5 py-2 rounded-full shadow-md btn-animate hover-lift text-base"
            >
              Book Free Strategy Call
            </button>
          </div>

          {/* Trust Badges */}
          <div
            ref={awardsRef}
            className="flex flex-wrap gap-3 items-center mt-2 fade-in stagger-delay-4"
          >
            <img src={Award1} alt="Clutch" className="h-8 md:h-10 hover-scale transition-transform duration-300" />
            <img src={Award2} alt="Award" className="h-8 md:h-10 hover-scale transition-transform duration-300" />
            <img src={Award3} alt="Top IT" className="h-8 md:h-10 hover-scale transition-transform duration-300" />
            <img src={Award4} alt="WARC" className="h-8 md:h-10 hover-scale transition-transform duration-300" />
            <img src={Award5} alt="Gold" className="h-8 md:h-10 hover-scale transition-transform duration-300" />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div
          ref={formRef}
          className="md:w-1/2 w-full flex items-center justify-center mt-6 md:mt-0"
        >
          <div className="w-full max-w-sm bg-white text-black rounded-2xl shadow-xl p-5 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-purple-800">
              Claim Your Free 30-Min Free Strategy Call
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full border px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Business Email Address*"
                className="w-full border px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="w-full">
                <PhoneInput
                  country={"in"}
                  enableSearch
                  placeholder="+91"
                  inputClass="!w-full py-2 px-3 text-sm rounded border-none focus:outline-none"
                  containerClass="w-full border rounded"
                  buttonClass="bg-white border-r"
                />
              </div>
              <input
                type="text"
                placeholder="Organization/ Institution*"
                className="w-full border px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="relative w-full">
                <select
                  className="w-full border px-3 pr-10 py-2 rounded text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="w-full border px-3 py-2 rounded h-20 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="audit"
                  name="audit"
                  className="accent-purple-600 mr-2"
                />
                <label htmlFor="audit" className="text-sm text-gray-700">
                  I want a free marketing audit of my current strategy
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 rounded-full text-base mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
