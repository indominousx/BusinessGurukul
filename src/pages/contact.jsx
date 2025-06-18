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
    <div>
      <div className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden">
        {/* Full-page background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '50vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Contact background"
            style={{ width: '100vw', height: '50vh', objectFit: 'cover' }}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center w-full">
          <div className="bg-white rounded-lg shadow-2xl border-2 border-purple-700 p-4 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-800">
              Claim Your Free 30-Min Free Strategy Call
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                }}
                placeholder="Full Name*"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                placeholder="Business Email Address*"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <div className="w-full">
                <PhoneInput
               country={"in"}
               style={{
                backgroundColor: "white",
                color: "black",
              }}
                  enableSearch
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  inputClass="!w-full py-2 px-3 text-base rounded border-none focus:outline-none"
                  containerClass="w-full border rounded focus-within:ring-2 focus-within:ring-purple-500"
                  buttonClass="bg-white border-r"
                />
              </div>
              <input
                type="text"
                name="organization"
                style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                placeholder="Organization/ Institution*"
                value={form.organization}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <div className="relative w-full">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                  className="w-full border px-3 pr-10 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                name="message"
                placeholder="Message*"
                style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                value={form.message}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded h-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="w-full bg-gradient-to-r !from-orange-500 !to-orange-600 !hover:from-orange-600 !hover:to-orange-700 !text-white font-bold py-2 rounded-full shadow-md transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
