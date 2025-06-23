import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const dropdownRefs = {
    services: useRef(null),
    career: useRef(null),
    events: useRef(null),
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs).some(
          (ref) => ref.current && ref.current.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const renderDropdown = (key, items) =>
    openDropdown === key && (
      <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
        {items.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setOpenDropdown(null)}
            className="block px-4 py-2 hover:bg-orange-50 text-gray-800"
          >
            {label}
          </Link>
        ))}
      </div>
    );

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold">
          <Link to="/" className="!text-orange-600">
            Business<span className="text-black"> Gurukull</span>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-orange-600 border-orange-600 focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <Link to="/" className="hover:text-orange-600 !text-gray-800">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRefs.services}>
            <button
              className="hover:text-orange-600 flex items-center"
              onClick={() => toggleDropdown("services")}
            >
              Services
              <svg
                className="ml-1 w-4 h-4"
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
            </button>
            {renderDropdown("services", [
              { to: "/consulting", label: "Business Consulting" },
              { to: "/tech-development", label: "Tech Development Services" },
              { to: "/video-ad", label: "Video / Ad Services" },
              { to: "/digital-marketing", label: "Digital Marketing Services" },
            ])}
          </div>

          {/* Career Dropdown */}
          <div className="relative" ref={dropdownRefs.career}>
            <button
              className="hover:text-orange-600 flex items-center"
              onClick={() => toggleDropdown("career")}
            >
              Career
              <svg
                className="ml-1 w-4 h-4"
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
            </button>
            {renderDropdown("career", [
              { to: "/hiring", label: "Hiring" },
              { to: "/jobs", label: "Jobs" },
              { to: "/internship", label: "Internship" },
            ])}
          </div>

          {/* Events Dropdown */}
          <div className="relative" ref={dropdownRefs.events}>
            <button
              className="hover:text-orange-600 flex items-center"
              onClick={() => toggleDropdown("events")}
            >
              Events
              <svg
                className="ml-1 w-4 h-4"
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
            </button>
            {renderDropdown("events", [
              { to: "/webinar", label: "Webinar" },
              { to: "/offline-events", label: "Offline Events" },
              { to: "/workshops", label: "Workshops" },
            ])}
          </div>

          <Link
            to="/case-studies"
            className="hover:text-orange-600 !text-gray-800 transition-colors duration-200"
          >
            Case Studies
          </Link>
          <Link to="/about" className="hover:text-orange-600 !text-gray-800 transition-colors duration-200">
            About Us
          </Link>

          <div className="ml-auto">
            <Link
              to="/contact"
              style={{ color: 'white' }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-md  font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-[120] flex flex-col">
          <div className="bg-white w-full shadow-lg p-6 pt-4 flex flex-col gap-2 animate-fade-in-down overflow-y-auto max-h-screen">
            {/* Close button */}
            <button
              className="self-end mb-2 text-gray-700 hover:text-orange-600"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link to="/" className="block py-2 px-2 text-lg font-semibold text-gray-800 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            {/* Services Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center py-2 px-2 text-lg font-semibold text-gray-800 hover:text-orange-600"
                onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
              >
                Services
                <svg className={`ml-2 w-5 h-5 transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'services' && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link to="/consulting" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Business Consulting</Link>
                  <Link to="/tech-development" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Tech Development Services</Link>
                  <Link to="/video-ad" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Video / Ad Services</Link>
                  <Link to="/digital-marketing" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Digital Marketing Services</Link>
                </div>
              )}
            </div>
            {/* Career Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center py-2 px-2 text-lg font-semibold text-gray-800 hover:text-orange-600"
                onClick={() => setMobileDropdown(mobileDropdown === 'career' ? null : 'career')}
              >
                Career
                <svg className={`ml-2 w-5 h-5 transition-transform ${mobileDropdown === 'career' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'career' && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link to="/hiring" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Hiring</Link>
                  <Link to="/jobs" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Jobs</Link>
                  <Link to="/internship" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Internship</Link>
                </div>
              )}
            </div>
            {/* Events Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center py-2 px-2 text-lg font-semibold text-gray-800 hover:text-orange-600"
                onClick={() => setMobileDropdown(mobileDropdown === 'events' ? null : 'events')}
              >
                Events
                <svg className={`ml-2 w-5 h-5 transition-transform ${mobileDropdown === 'events' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'events' && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link to="/webinar" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Webinar</Link>
                  <Link to="/offline-events" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Offline Events</Link>
                  <Link to="/workshops" className="block py-1 text-gray-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Workshops</Link>
                </div>
              )}
            </div>
            <Link
              to="/case-studies"
              className="block py-2 px-2 text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="block py-2 px-2 text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link to="/contact" className="block py-2 px-2 text-xl font-semibold text-white bg-orange-500 rounded-full text-center mt-2 hover:bg-orange-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
