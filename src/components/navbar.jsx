import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const dropdownRefs = {
    services: useRef(null),
    career: useRef(null),
    events: useRef(null),
  };

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
            className="hover:text-orange-600 !text-gray-800"
          >
            Case Studies
          </Link>
          <Link to="/about" className="hover:text-orange-600 !text-gray-800">
            About Us
          </Link>

          <div className="ml-auto">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
