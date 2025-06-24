import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Footer from "../components/footer";
import ClientTestimonials from "../components/ClientTestimonials";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
    audit: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handlePhoneChange = (value) => {
    setForm({ ...form, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submit logic
    alert("Form submitted! (No backend logic yet)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden relative">
      {/* Full-page background image with overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
          alt="Contact background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-700/70 to-orange-600/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-8 px-2 md:px-4 flex-1" style={{ minHeight: '80vh' }}>
        {/* Headline & Subheadline */}
        <div className="max-w-2xl text-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 md:mb-4">Contact Us</h1>
          <p className="text-base md:text-xl text-white/90 mb-1 md:mb-2 font-medium">Claim Your Free 30-Min Strategy Call</p>
          <p className="text-sm md:text-base text-white/80">Let's discuss how we can help your business grow with tailored marketing, tech, and consulting solutions.</p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white/30 rounded-3xl shadow-2xl border border-white/30 p-3 sm:p-6 md:p-10 mx-auto backdrop-blur-lg" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', border: '1.5px solid rgba(255,255,255,0.25)', background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.18) 100%)' }}>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black text-base shadow-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email Address*"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black text-base shadow-sm"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div className="w-full bg-white rounded-lg p-1">
                <PhoneInput
                  country={"in"}
                  enableSearch
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="+91"
                  inputClass="!w-full py-2 px-3 text-sm rounded border-none focus:outline-none !text-black"
                  containerClass="w-full border rounded"
                  buttonClass="bg-white border-r"
                />
              </div>
              <input
                type="text"
                name="organization"
                placeholder="Organization/ Institution*"
                value={form.organization}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black text-base shadow-sm"
                required
              />
            </div>
            <div className="relative w-full">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border px-4 pr-10 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black text-base shadow-sm"
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
                  className="w-5 h-5"
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
              name="message"
              placeholder="Message*"
              value={form.message}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black text-base shadow-sm resize-none"
              required
            />
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="audit"
                name="audit"
                checked={form.audit}
                onChange={handleChange}
                className="mt-1 accent-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="audit" className="text-sm text-gray-700">
                I want a free marketing audit of my current strategy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-full shadow-lg text-lg transition-all duration-300 mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Trust Badges / Testimonial Section */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-12 flex flex-col items-center mb-8 md:mb-16 px-2">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4">
            <img src="/src/assets/images/award1.png" alt="Award 1" className="h-8 md:h-10 lg:h-12" />
            <img src="/src/assets/images/award2.png" alt="Award 2" className="h-8 md:h-10 lg:h-12" />
            <img src="/src/assets/images/award3.png" alt="Award 3" className="h-8 md:h-10 lg:h-12" />
            <img src="/src/assets/images/award4.png" alt="Award 4" className="h-8 md:h-10 lg:h-12" />
            <img src="/src/assets/images/award5.png" alt="Award 5" className="h-8 md:h-10 lg:h-12" />
          </div>
          <div className="bg-white/90 rounded-xl shadow p-3 md:p-4 max-w-xl text-center">
            <p className="text-gray-700 italic mb-2 text-sm md:text-base">“Business Gurukull helped us scale our brand visibility through a multi-platform strategy. We saw a 3x increase in engagement within 2 months.”</p>
            <span className="font-semibold text-purple-700 text-xs md:text-base">— Ananya Mehta, Marketing Manager, EcoCraft</span>
          </div>
        </div>
      </div>
      {/* Footer always at the bottom and above background */}
      <footer className="relative z-20 w-full">
        <Footer />
      </footer>
    </div>
  );
}
