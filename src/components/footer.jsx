import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 py-6">
      <div className="w-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Left: Call to Action */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              Ready to Elevate Your Business?
            </h2>
            <Link 
              to="/contact"
              style={{ color: 'white' }}
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded shadow-lg transition text-lg mt-6"
            >
              Contact Us
            </Link>
          </div>

          {/* Middle: Contact Details */}
          <div className="mb-8 lg:mb-0 lg:mx-12">
            <h3 className="text-xl font-bold mb-2 text-blue-300">
              Contact Details
            </h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>
                <span className="font-semibold">Address:</span> 5th Floor The
                Hub Building, Lane No 06, Koregoan Park, Pune.
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:8999685423" className="hover:text-blue-400">
                  8999685423
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:Office@businessgurukull.com"
                  className="hover:text-blue-400"
                >
                  Office@businessgurukull.com
                </a>
              </li>
            </ul>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60512.092697287284!2d73.79236189230933!3d18.573777539415676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b88ec9cd0b%3A0x6a160546d710b54f!2sBusiness%20Gurukull%20-%20Best%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1747645827372!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Navigation Shortcuts */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "FAQ", href: "/faq" },
            { name: "Contact", href: "/contact" },
          ].map((nav, idx) => (
            <a
              key={idx}
              href={nav.href}
              className="text-gray-300 hover:text-blue-400 font-medium transition"
            >
              {nav.name}
            </a>
          ))}
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
