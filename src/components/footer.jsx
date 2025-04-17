import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Left: Call to Action */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl font-extrabold mb-4 text-blue-400">
              Ready to Elevate Your Business?
            </h2>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Right: Social Links */}
          <div className="flex space-x-6">
            {[
              {
                href: "https://facebook.com",
                icon: "fab fa-facebook-f",
                label: "Facebook",
              },
              {
                href: "https://instagram.com",
                icon: "fab fa-instagram",
                label: "Instagram",
              },
              {
                href: "https://linkedin.com",
                icon: "fab fa-linkedin-in",
                label: "LinkedIn",
              },
              {
                href: "https://twitter.com",
                icon: "fab fa-twitter",
                label: "Twitter",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:scale-110 transition transform"
              >
                <i
                  className={`${social.icon} text-white text-3xl hover:text-blue-400`}
                ></i>
              </a>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160975283!2d72.74110105!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d84e4f8db%3A0x40e391b202d1b1f0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1612345678910!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 mt-8 text-sm">
          <p className="mb-2">
            <span className="font-semibold text-blue-400">
              Business Gurukull
            </span>{" "}
            | Empowering Businesses Globally
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
