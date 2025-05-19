import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Award1 from "../assets/images/award1.png";
import Award2 from "../assets/images/award2.png";
import Award3 from "../assets/images/award3.png";
import Award4 from "../assets/images/award4.png";
import Award5 from "../assets/images/award5.png";

export default function HeroSection() {
  return (
    <div className="w-screen overflow-x-hidden bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16">
        {/* Left Section */}
        <div className="md:w-2/3 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Empowering Your Business Journey with{" "}
            <span className="text-yellow-400">Tailored Solutions</span>
          </h2>
          <p className="mb-8 text-gray-200 text-lg">
            From Digital Marketing to Technology Development, to Video
            Production to Business Consulting We Drive Your Success.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              {
                label: "Explore Our Services",
                onClick: () => alert("SEO services coming soon!"),
              },
              {
                label: "Get a Free Consultation",
                onClick: () => alert("PPC campaigns tailored for you!"),
              },
              // {
              //   label: "SMO",
              //   onClick: () => alert("SMO strategies at your service!"),
              // },
              // {
              //   label: "ORM",
              //   onClick: () => alert("ORM solutions available!"),
              // },
              // {
              //   label: "Email Marketing",
              //   onClick: () => alert("Boost with Email Marketing!"),
              // },
              // {
              //   label: "Google Analytics",
              //   onClick: () => alert("Google Analytics insights!"),
              // },
            ].map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={tag.onClick}
                className="border !border-yellow-400 !px-4 !py-1 !rounded-full text-sm !bg-yellow-400 text-purple-800 font-semibold transition-colors !hover:bg-yellow-300 !focus:outline-none !focus:ring-2 !focus:ring-yellow-500"
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex gap-6 items-center mt-6 flex-wrap">
            <img src={Award1} alt="Clutch" className="h-14" />
            <img src={Award2} alt="Award" className="h-14" />
            <img src={Award3} alt="Top IT" className="h-14" />
            <img src={Award4} alt="WARC" className="h-14" />
            <img src={Award5} alt="Gold" className="h-14" />
          </div>
        </div>

        {/* /* Right Section (Form)  */}
        <div className="md:w-1/4 bg-white text-black rounded-lg shadow-2xl p-6 m-4 md:m-6 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-800">
            Get in Touch
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Business Email Address*"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="flex items-center gap-2">
              <PhoneInput
                country={"in"}
                enableSearch={true}
                placeholder="Enter phone number"
                inputClass="!w-full !py-2 !pl-12 !pr-3"
                containerClass="!w-full border black rounded"
              />
            </div>

            <input
              type="text"
              placeholder="Organization/ Institution*"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Message*"
              className="w-full border px-3 py-2 rounded h-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            {/* reCAPTCHA placeholder */}
            {/* <div className="bg-gray-100 border rounded px-3 py-3 text-center text-gray-500 text-sm">
              [reCAPTCHA Here]
            </div> */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 rounded-full shadow-lg transition-all duration-300"
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
